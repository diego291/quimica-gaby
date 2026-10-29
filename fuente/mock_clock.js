const { chromium } = require('playwright');
const CSS = `
.clockbig{display:flex;flex-direction:column;align-items:flex-end;gap:2px;padding:10px 16px;border-radius:16px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--shadow);min-width:170px}
.clockbig .t{white-space:nowrap;font-family:"Zilla Slab",serif;font-weight:700;font-size:2.6rem;line-height:1;color:var(--ink);font-variant-numeric:tabular-nums;letter-spacing:-.5px}
.clockbig .t small{font-size:1rem;font-weight:600;color:var(--muted);margin-left:4px}
.clockbig .t .sec{font-size:1.1rem;color:var(--acc);margin-left:2px}
.clockbig .d{font-size:.82rem;color:var(--muted)}
.clockbig .n{font-size:.78rem;color:var(--acc);font-weight:700;margin-top:4px}
.hclock{display:inline-flex;align-items:center;gap:6px;font-weight:700;font-variant-numeric:tabular-nums}
@media (max-width:700px){ .clockwrap{width:100%;margin-top:10px} .clockbig{flex-direction:row;align-items:baseline;justify-content:space-between;width:100%;min-width:0;padding:10px 14px} .clockbig .t{white-space:nowrap;font-size:2.1rem} .clockbig .side{display:flex;flex-direction:column;align-items:flex-end} }
`;
function inject(mobile){
  const head = document.querySelector('#head .top');
  const w = document.createElement('div'); w.className = 'clockwrap';
  w.innerHTML = `<div class="clockbig"><div class="t">10:38<span class="sec">:24</span><small>p. m.</small></div><div class="side"><div class="d">Miércoles 28 de octubre</div><div class="n">Parcial en 7 días</div></div></div>`;
  if (mobile){ head.parentElement.insertBefore(w, head.nextSibling); } else { const tools = head.querySelector('.tools'); head.insertBefore(w, tools); }
}
(async () => { const b = await chromium.launch();
 for (const [W, H, sc, name] of [[1366, 760, 'light', 'pc'], [390, 760, 'dark', 'tel']]){
  const p = await (await b.newContext({ viewport:{ width:W, height:H }, colorScheme:sc, deviceScaleFactor:2 })).newPage();
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.addStyleTag({ content: CSS });
  await p.evaluate(() => { S.x.name = 'Gaby'; S.x.ev = [{ id:'e1', title:'Parcial Módulo IV', type:'parcial', date:'2026-11-04', time:'08:00', topics:[], rem:'1d' }]; save(); renderAll(); });
  await p.evaluate(inject, W <= 700); await p.waitForTimeout(300);
  await p.screenshot({ path:`/home/claude/Reloj_${name}_inicio.png` });
  // otras secciones: chip pequeño
  await p.evaluate(() => { goSec('estudiar'); const t = document.querySelector('#head .tools'); const c = document.createElement('span'); c.className = 'hbtn hclock'; c.innerHTML = innerWidth > 700 ? '🕒 10:38 p. m.' : '🕒 10:38'; t.prepend(c); });
  await p.waitForTimeout(200); await p.screenshot({ path:`/home/claude/Reloj_${name}_otras.png`, clip:{ x:0, y:0, width:W, height: W > 700 ? 260 : 300 } });
 }
 await b.close(); })();
