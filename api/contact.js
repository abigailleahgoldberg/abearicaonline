export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, subject, message } = req.body;
  if (!email || !subject || !message) return res.status(400).json({ error: 'Missing fields' });

  const BREVO_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_KEY) return res.status(500).json({ error: 'Email service not configured' });

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': BREVO_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Abearica Online Contact Form', email: 'abigailleahgoldberg@gmail.com' },
        to: [{ email: 'abigailleahgoldberg@gmail.com', name: 'Abearica' }],
        replyTo: { email: email },
        subject: `[AbearicaOnline] ${subject}`,
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#000080;color:#FFD700;padding:12px 16px;font-weight:bold;font-size:16px;">
              📬 New Message — Abearica Online
            </div>
            <div style="background:#fffff0;padding:16px;border:1px solid #c0c0c0;">
              <p><strong>From:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border:1px solid #c0c0c0;margin:12px 0;">
              <p style="white-space:pre-wrap;">${message}</p>
            </div>
            <div style="background:#c0c0c0;padding:6px 16px;font-size:11px;color:#444;">
              Sent via abearicaonline.com contact form
            </div>
          </div>
        `
      })
    });
    const data = await r.json();
    if (r.ok && data.messageId) {
      res.status(200).json({ ok: true });
    } else {
      throw new Error(JSON.stringify(data));
    }
  } catch (e) {
    console.error('Brevo error:', e.message);
    res.status(500).json({ error: 'Failed to send' });
  }
}
