#!/usr/bin/env python3
"""Actualiza la versión publicada (raíz del repositorio) desde fuente/ sin reconstruir todo:
   app.js, app.css, checks.js, versión en index.html, sw.js, core.js y README.md."""
import os, re, sys, time
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'
F = R + 'fuente/'
V = sys.argv[1] if len(sys.argv) > 1 else time.strftime('%Y.%m.%d-%H%M')
rd = lambda p: open(p, encoding='utf-8').read()
wr = lambda p, s: open(p, 'w', encoding='utf-8').write(s)
files = 'app.js org_app.js arom_app.js alc_app.js eter_app.js ask.js ui.js notas.js clock.js frases.js motiva.js estudio.js audio.js push.js sync.js init.js'.split()
wr(R + 'app.js', '\n'.join(rd(F + f) for f in files))
css = rd(R + 'app.css'); i = css.find(rd(F + 'base.css')[:200])
wr(R + 'app.css', css[:i] + '\n'.join(rd(F + f) for f in ['base.css', 'new.css', 'ui.css']))
wr(R + 'checks.js', rd(F + 'data_check.js'))
old = re.search(r'const VERSION = `([^`]+)`', rd(R + 'sw.js')).group(1)
idx = rd(R + 'index.html')
if 'checks.js' not in idx: idx = idx.replace('<script src="app.js?v=', f'<script src="checks.js?v={old}"></script>\n<script src="app.js?v=')
wr(R + 'index.html', idx)
sw = rd(R + 'sw.js')
if 'checks.js' not in sw: sw = sw.replace(f'"app.js?v={old}"', f'"checks.js?v={old}", "app.js?v={old}"')
wr(R + 'sw.js', sw)
for f in ['core.js', 'sw.js', 'index.html', 'README.md']: wr(R + f, rd(R + f).replace(old, V))
print('publicado', old, '->', V)
