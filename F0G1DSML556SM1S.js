// Block script – blocks the /_/ page when the required query parameters are missing
const program = 1;   // (kept as you originally requested)

(function () {
  // Only act on the /_/static.html path
  if (window.location.pathname !== '/_/static.html') return;

  const params = new URLSearchParams(window.location.search);
  const hasCorrectParams =
    params.get('constProgram') === 'api' &&
    params.get('setApplicationProgrammableInterfaceTo') === 'apiV3';

  // If the correct parameters are present, do NOT block – let the site work normally.
  if (hasCorrectParams) return;

  // Block the page: remove all existing content and show a blocked notice.
  document.body.innerHTML = '';

  // Minimal styling for the block message
  const style = document.createElement('style');
  style.textContent = `
    body {
      margin: 0;
      background: #0f172a;
      color: #e2e8f0;
      font-family: system-ui, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .blocked {
      background: #1e293b;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      max-width: 400px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }
    h1 { color: #ef4444; margin-top: 0; }
    p { color: #94a3b8; }
    code { background: #334155; padding: 0.2rem 0.5rem; border-radius: 4px; }
  `;
  document.head.appendChild(style);

  const blockedDiv = document.createElement('div');
  blockedDiv.className = 'blocked';
  blockedDiv.innerHTML = `
    <h1>🚫 Access Blocked</h1>
    <p>This page requires the correct API parameters to function.</p>
    <p>Use the following URL:</p>
    <p><code>${window.location.pathname}?constProgram=api&setApplicationProgrammableInterfaceTo=apiV3</code></p>
  `;
  document.body.appendChild(blockedDiv);
})();
