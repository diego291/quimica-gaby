#!/usr/bin/env python3
"""Construye la versión en línea (GitHub Pages) en /home/claude/site.
   index.html + app.css + core.js + packs.js + app.js + sw.js + manifest + iconos + lib/ + fonts/"""
import os, re, shutil, subprocess, json, time, glob
from PIL import Image, ImageDraw

B = '/home/claude/build'
OUT = os.environ.get('SITE_OUT', '/home/claude/site')
BUILD = os.environ.get('BUILD') or time.strftime('%Y.%m.%d-%H%M')
os.chdir(B)

# conserva .git si existe
os.makedirs(OUT, exist_ok=True)
for n in os.listdir(OUT):
    if n in ('.git', 'fuente', '.github'): continue
    p = os.path.join(OUT, n)
    shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
for d in ('lib', 'fonts', 'material', 'icons'): os.makedirs(f'{OUT}/{d}', exist_ok=True)

def cat(files): return '\n'.join(open(f, encoding='utf-8').read() for f in files)

# ---- fuentes locales
fcss = open('fonts.css', encoding='utf-8').read()
def repl(m):
    src = m.group(1).replace('file://', '')
    name = os.path.basename(src); shutil.copy(src, f'{OUT}/fonts/{name}'); return f'url(fonts/{name})'
fcss = re.sub(r'url\(([^)]+)\)', repl, fcss)
open(f'{OUT}/app.css', 'w', encoding='utf-8').write(fcss + '\n' + cat(['base.css', 'new.css', 'ui.css']))

# ---- librerías PDF locales
shutil.copy('node_modules/jspdf/dist/jspdf.umd.min.js', f'{OUT}/lib/')
shutil.copy('node_modules/html2canvas/dist/html2canvas.min.js', f'{OUT}/lib/')
for f in ('app', 'auth', 'firestore', 'messaging'): shutil.copy(f'node_modules/firebase/firebase-{f}-compat.js', f'{OUT}/lib/')
HASFB = os.path.exists('firebase-config.js')
if HASFB: shutil.copy('firebase-config.js', f'{OUT}/firebase-config.js')

# ---- scripts
consts = subprocess.check_output(['node', '-e', 'const d=require("./old.json");for(const k of ["TOPICS","REPASO","MCQ","ABIERTAS","EJ","FORM"]) console.log(`const ${k} = ${JSON.stringify(d[k])};`)'], text=True)
core = consts + cat('figs.js figs_org.js arom.js figs_org2.js figs_t26.js figs_t27.js figs_t28.js data_new.js data_org.js data_org2.js data_t26.js data_t27.js data_t28.js guia.js packcore.js'.split())
core = core.replace('__BUILD__', BUILD)
open(f'{OUT}/core.js', 'w', encoding='utf-8').write(core)
mats = sorted(glob.glob('material/*.js'))
for m in mats: shutil.copy(m, f'{OUT}/material/')
packs = '/* Material nuevo: un paquete por tema (carpeta material/). */\n' + cat(mats)
open(f'{OUT}/packs.js', 'w', encoding='utf-8').write(packs)
open(f'{OUT}/app.js', 'w', encoding='utf-8').write(cat('app.js org_app.js arom_app.js alc_app.js eter_app.js ask.js ui.js notas.js clock.js frases.js motiva.js estudio.js audio.js push.js sync.js init.js'.split()))

# ---- iconos
def icon(size, path, pad=0.0):
    s = 4 * size; im = Image.new('RGBA', (s, s), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    o = int(s * pad); d.rounded_rectangle([o, o, s - o, s - o], radius=int(s * (0.22 if not pad else 0.18)), fill='#2E7D6B')
    c = s / 2; w = s * 0.5
    neck = [(c - w * .14, s * .22), (c + w * .14, s * .22), (c + w * .14, s * .44), (c + w * .52, s * .76), (c - w * .52, s * .76), (c - w * .14, s * .44)]
    d.polygon(neck, fill='#FFFFFF')
    d.polygon([(c - w * .36, s * .63), (c + w * .36, s * .63), (c + w * .52, s * .76), (c - w * .52, s * .76)], fill='#7CC9B5')
    d.rectangle([c - w * .2, s * .19, c + w * .2, s * .23], fill='#FFFFFF')
    im.resize((size, size), Image.LANCZOS).save(path)
icon(192, f'{OUT}/icons/icon-192.png'); icon(512, f'{OUT}/icons/icon-512.png')
icon(512, f'{OUT}/icons/maskable-512.png', pad=0.0001); icon(180, f'{OUT}/icons/apple-touch-icon.png')

json.dump({
    'name': 'Química · Laboratorio Clínico', 'short_name': 'Química', 'lang': 'es', 'start_url': './', 'scope': './',
    'display': 'standalone', 'background_color': '#F4F6F5', 'theme_color': '#2E7D6B',
    'icons': [{'src': 'icons/icon-192.png', 'sizes': '192x192', 'type': 'image/png'},
              {'src': 'icons/icon-512.png', 'sizes': '512x512', 'type': 'image/png'},
              {'src': 'icons/maskable-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]
}, open(f'{OUT}/manifest.webmanifest', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# ---- index.html
head = open('head.html', encoding='utf-8').read()
head = re.sub(r'<link[^>]*fonts\.(googleapis|gstatic)[^>]*>\s*', '', head)
v = BUILD
index = f'''<!doctype html>
<html lang="es"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#2E7D6B"><meta name="robots" content="noindex">
<link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">
{head}
<link rel="stylesheet" href="app.css?v={v}">
</head><body>
{open('body.html', encoding='utf-8').read()}
<script>window.LIB_LOCAL = true;</script>
{'<script src="firebase-config.js?v=' + v + '"></script>' if HASFB else ''}
<script src="core.js?v={v}"></script>
<script src="packs.js?v={v}"></script>
<script src="app.js?v={v}"></script>
<script>if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(function(){{}});</script>
</body></html>
'''
open(f'{OUT}/index.html', 'w', encoding='utf-8').write(index)

assets = ['./', 'index.html', f'app.css?v={v}', f'core.js?v={v}', f'packs.js?v={v}', f'app.js?v={v}', 'manifest.webmanifest',
          'lib/jspdf.umd.min.js', 'lib/html2canvas.min.js', 'lib/firebase-app-compat.js', 'lib/firebase-auth-compat.js', 'lib/firebase-firestore-compat.js', 'icons/icon-192.png', 'icons/apple-touch-icon.png'] + ([f'firebase-config.js?v={v}'] if HASFB else []) + ['fonts/' + n for n in sorted(os.listdir(f'{OUT}/fonts'))]
sw = '''/* Service worker: siempre intenta la versión más nueva (red primero) y, sin internet, usa la copia guardada. */
const VERSION = `__V__`;
const CACHE = `quimica`;
const ASSETS = __A__;
self.addEventListener(`install`, e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache:`reload` })))).catch(() => {}).then(() => self.skipWaiting())); });
self.addEventListener(`activate`, e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener(`push`, e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { notification:{ title:`Química`, body: e.data ? e.data.text() : `` } }; }
  const n = d.notification || {}, data = d.data || {};
  e.waitUntil(self.registration.showNotification(n.title || data.title || `Química`, { body: n.body || data.body || ``, icon:`icons/icon-192.png`, badge:`icons/icon-192.png`, tag: data.tag || n.tag || undefined, data:{ link: data.link || `./` } }));
});
self.addEventListener(`notificationclick`, e => {
  e.notification.close(); const link = (e.notification.data && e.notification.data.link) || `./`;
  e.waitUntil(self.clients.matchAll({ type:`window`, includeUncontrolled:true }).then(cs => { for (const c of cs){ if (`focus` in c) return c.focus(); } return self.clients.openWindow(link); }));
});
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
'''.replace('__V__', v).replace('__A__', json.dumps(assets))
open(f'{OUT}/sw.js', 'w', encoding='utf-8').write(sw)
open(f'{OUT}/.nojekyll', 'w').write('')
if os.path.isdir('gh'):
    shutil.rmtree(f'{OUT}/.github', ignore_errors=True); shutil.copytree('gh', f'{OUT}/.github')
open(f'{OUT}/README.md', 'w', encoding='utf-8').write(f'''# Química · Laboratorio Clínico

Página de estudio (versión {v}). Se abre en GitHub Pages y se actualiza sola.

- `material/`: un archivo por tema nuevo (`registerPack({{...}})`).
- `core.js`, `app.js`, `app.css`: el programa.
- `sw.js`: permite usarla sin internet y descarga la versión nueva al recargar.
''')
print('OK', BUILD, len(os.listdir(OUT)), 'items')
