export default function handler(req, res) {
  const now = new Date().toISOString();
  const vercelId = req.headers['x-vercel-id'] || '';
  // x-vercel-id looks like "bom1::abcdef", first token ~ POP/region
  const region = vercelId.split('::')[0] || 'unknown';
  const ua = req.headers['user-agent'] || 'unknown';

  res.status(200).json({
    ok: true,
    message: "OpenNebula Hub API is live",
    time: now,
    region,
    userAgent: ua
  });
}
