const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 for (const [W, sc] of [[1366, 'light'], [390, 'dark']]){
  const p = await (await b.newContext({ viewport:{ width:W, height:800 }, colorScheme:sc, deviceScaleFactor:2 })).newPage();
  p.on('pageerror', e => errs.push(W + ' ' + e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
  const t = new Date(Date.now() + 40 * 60000); const hh = String(t.getHours()).padStart(2,'0') + ':' + String(t.getMinutes()).padStart(2,'0');
  await p.evaluate(hh => { S.x.name = 'Gaby'; const d = new Date(); const ds = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); S.x.ev = [{ id:'e1', title:'Laboratorio', type:'lab', date: ds, time: hh, topics:[], rem:-1 }, { id:'e2', title:'Parcial Módulo IV', type:'parcial', date:'2026-11-04', time:'08:00', topics:[], rem:-1 }]; save(); renderAll(); }, hh);
  await p.waitForTimeout(1200);
  console.log(W, await p.$eval('[data-clock="big"]', e => e.textContent));
  await p.screenshot({ path:`shots/clk_${W}.png` });
  await p.click('[data-clock="big"]'); await p.waitForTimeout(200); await p.click('.fld:has-text("24 horas") .tg'); await p.waitForTimeout(1100);
  console.log(W, '24h', await p.$eval('[data-clock="big"] .t', e => e.textContent)); await p.screenshot({ path:`shots/clk_${W}_set.png` });
  await p.keyboard.press('Escape'); await p.evaluate(() => goSec('practicar')); await p.waitForTimeout(300);
  console.log(W, 'chip', await p.$eval('[data-clock="chip"]', e => e.textContent));
  await p.evaluate(() => { goSec('inicio'); openFocus(); }); await p.waitForTimeout(1100);
  console.log(W, 'focus', await p.$eval('.fclock', e => e.textContent)); await p.screenshot({ path:`shots/clk_${W}_focus.png` });
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) errs.push(W + ' overflow ' + ov);
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
