export default function handler(req, res) {
  res.status(200).json({ ok: true, msg: "OpenNebula Hub API is live." });
}
