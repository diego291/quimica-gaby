/* Service worker: siempre intenta la versión más nueva (red primero) y, sin internet, usa la copia guardada. */
const VERSION = `2026.10.28-2258`;
const CACHE = `quimica`;
const ASSETS = ["./", "index.html", "app.css?v=2026.10.28-2258", "core.js?v=2026.10.28-2258", "packs.js?v=2026.10.28-2258", "app.js?v=2026.10.28-2258", "manifest.webmanifest", "lib/jspdf.umd.min.js", "lib/html2canvas.min.js", "lib/firebase-app-compat.js", "lib/firebase-auth-compat.js", "lib/firebase-firestore-compat.js", "icons/icon-192.png", "icons/apple-touch-icon.png", "firebase-config.js?v=2026.10.28-2258", "fonts/atkinson-hyperlegible-latin-400-italic.woff2", "fonts/atkinson-hyperlegible-latin-400-normal.woff2", "fonts/atkinson-hyperlegible-latin-700-normal.woff2", "fonts/zilla-slab-latin-500-normal.woff2", "fonts/zilla-slab-latin-600-normal.woff2", "fonts/zilla-slab-latin-700-normal.woff2"];
self.addEventListener(`install`, e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache:`reload` })))).catch(() => {}).then(() => self.skipWaiting())); });
self.addEventListener(`activate`, e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener(`fetch`, e => {
  const r = e.request; if (r.method !== `GET` || new URL(r.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const net = fetch(r, { cache:`no-cache` }).then(res => { if (res.ok) cache.put(r, res.clone()); return res; });
    const timeout = new Promise(ok => setTimeout(ok, 6000));
    try { const res = await Promise.race([net, timeout]); if (res) return res; } catch (err) {}
    const hit = await cache.match(r, { ignoreSearch: r.mode === `navigate` }) || (r.mode === `navigate` && await cache.match(`index.html`));
    if (hit) return hit;
    return net;
  })());
});
