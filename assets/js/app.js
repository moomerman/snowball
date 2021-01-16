import 'phoenix_html';
import phx from 'https://cdn.skypack.dev/pin/phoenix@v1.5.7-4wz7Nq9zo4AcCiZ5164Q/min/phoenix.js';
import LiveSocket from 'https://cdn.skypack.dev/pin/phoenix_live_view@v0.15.3-Hv1aW3YBOs2DAoIO9bF0/min/phoenix_live_view.js';
import NProgress from 'nprogress';

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", phx.Socket, { params: { _csrf_token: csrfToken } })

// Show progress bar on live navigation and form submits
window.addEventListener("phx:page-loading-start", info => NProgress.start())
window.addEventListener("phx:page-loading-stop", info => NProgress.done())

// connect if there are any LiveViews on the page
liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket

