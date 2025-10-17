async function loadApiOutput() {
  const el = document.getElementById('api-output');
  if (!el) return;
  try {
    const res = await fetch('/api/ping', { cache: 'no-store' });
    const data = await res.json();
    el.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    el.textContent = 'Error: ' + (err?.message || err);
  }
}

document.addEventListener('DOMContentLoaded', loadApiOutput);

const refreshBtn = document.getElementById('refresh-output');
if (refreshBtn) refreshBtn.addEventListener('click', loadApiOutput);
