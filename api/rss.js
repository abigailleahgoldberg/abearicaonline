// /api/rss?url=<encoded_feed_url>
// Server-side RSS proxy — fetches RSS feed from Vercel servers, bypasses browser CORS

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  // Allowlist of permitted RSS feed domains
  const ALLOWED_DOMAINS = [
    'eurogamer.net',
    'polygon.com',
    'ign.com',
    'kotaku.com',
    'pcgamer.com',
    'theverge.com',
    'gamespot.com',
    'rockpapershotgun.com',
    'feeds.ign.com'
  ];

  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const allowed = ALLOWED_DOMAINS.some(domain =>
    parsedUrl.hostname === domain || parsedUrl.hostname.endsWith('.' + domain)
  );

  if (!allowed) {
    return res.status(403).json({ error: 'Domain not allowed' });
  }

  // Allow requests from any abearicaonline subdomain + localhost for dev
  const origin = req.headers.origin || '';
  const allowedOrigins = [
    'https://abearicaonline.com',
    'https://www.abearicaonline.com',
    'https://abearicaonline.vercel.app'
  ];
  const corsOrigin = allowedOrigins.includes(origin) ? origin : 'https://abearicaonline.com';

  res.setHeader('Access-Control-Allow-Origin', corsOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'AbearicaOnline/1.0 RSS Reader',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      },
      signal: AbortSignal.timeout(8000)
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Feed fetch failed' });
    }

    const xml = await response.text();

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).send(xml);

  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch feed' });
  }
}
