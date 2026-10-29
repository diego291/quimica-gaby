const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 const shots = [];
 for (const [w, h, sc, pal, tag] of [[1366, 860, 'light', 'menta', 'dia'], [1366, 860, 'dark', 'menta', 'noche'], [390, 844, 'dark', 'lavanda', 'm_noche_lav'], [390, 844, 'light', 'oceano', 'm_dia_oce']]){
  const p = await (await b.newContext({ viewport:{ width:w, height:h }, colorScheme:sc })).newPage();
  p.on('pageerror', e => errs.push(e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(200);
  await p.evaluate(pal => { S.x.pal = pal; setSel(['t28']); go('inicio'); }, pal); await p.waitForTimeout(150);
  await p.screenshot({ path:`shots/c_${tag}_inicio.png` });
  await p.evaluate(() => go('repaso')); await p.waitForTimeout(150); await p.screenshot({ path:`shots/c_${tag}_repaso.png` });
  if (tag === 'dia'){ await p.evaluate(() => go('inicio')); await p.click('#head .hbtn:has-text("Colores")'); await p.waitForTimeout(150); await p.screenshot({ path:`shots/c_pal.png` }); }
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
