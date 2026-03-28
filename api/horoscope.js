export default async function handler(req, res) {
  const sign = (req.query.sign || 'aries').toLowerCase();
  try {
    const r = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=TODAY`);
    const data = await r.json();
    const horoscope = data?.data?.horoscope || null;
    if (horoscope) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json({ horoscope, sign, date: data?.data?.date });
    } else {
      throw new Error('No horoscope data');
    }
  } catch (e) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: 'Unavailable' });
  }
}
