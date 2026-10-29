const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 for (const [W, sc] of [[1366, 'light'], [390, 'dark']]){
  const p = await (await b.newContext({ viewport:{ width:W, height:850 }, colorScheme:sc, deviceScaleFactor:2 })).newPage();
  p.on('pageerror', e => errs.push(W + ' ' + e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
  await p.waitForTimeout(2200);
  console.log(W, 'open toast:', await p.$eval('#motoast', e => e.textContent.slice(0, 90)).catch(() => 'NONE'));
  console.log(W, 'card:', await p.$eval('.motcard', e => e.textContent.slice(0, 80)));
  await p.screenshot({ path:`shots/mot_${W}_open.png` });
  // racha de 5
  await p.evaluate(() => { MOT.last = 0; for (let i = 0; i < 5; i++) record({ id:'Mx' + i, t:'t15' }, true); }); await p.waitForTimeout(400);
  console.log(W, 'racha:', await p.$eval('#motoast', e => e.textContent.slice(0, 80)));
  await p.screenshot({ path:`shots/mot_${W}_racha.png` });
  await p.evaluate(() => { MOT.last = 0; S.x.pst.phase = 'study'; S.x.pst.run = true; S.x.pst.end = Date.now() - 1; pomoTick(); }); await p.waitForTimeout(300);
  console.log(W, 'pomo:', await p.$eval('#motoast', e => e.textContent.slice(0, 80)));
  await p.evaluate(() => motSim(9.2)); await p.waitForTimeout(200); console.log(W, 'sim:', await p.$eval('#motoast', e => e.textContent.slice(0, 80)));
  await p.screenshot({ path:`shots/mot_${W}_sim.png` });
  // repaso completo de un tema
  await p.evaluate(() => { S.sel = new Set(['t21']); S.x.rall = false; go('repaso'); });
  const n = await p.evaluate(() => ALL.REPASO.filter(x => x.t === 't21').length);
  for (let i = 0; i < n; i++){ await p.evaluate(() => { const b = [...document.querySelectorAll('.decknav button')].pop(); b && !b.disabled && b.click(); }); await p.waitForTimeout(30); }
  await p.waitForTimeout(300); console.log(W, 'repaso', n, ':', await p.$eval('#motoast', e => e.textContent.slice(0, 80)).catch(() => 'NONE'));
  // sin repetir
  const u = await p.evaluate(() => { S.x.mot.used = {}; const s = new Set(); for (let i = 0; i < FRASES.length; i++) s.add(FRASES[pickFrom('test', FRASES.length)]); return s.size; });
  console.log(W, 'únicas en', u);
  await p.evaluate(() => openFocus()); await p.waitForTimeout(200); await p.screenshot({ path:`shots/mot_${W}_focus.png` });
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
