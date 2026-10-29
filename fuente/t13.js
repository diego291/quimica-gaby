const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 const p0 = await (await b.newContext()).newPage(); p0.on('pageerror', e => errs.push(e.message));
 await p0.goto('file://' + __dirname + '/test.html');
 // verificar contra el Excel: estudiante 1 (AM24039) y fila CONTROL
 const r = await p0.evaluate(() => {
   const set = (m, vals) => { const ls = nLeaves(m.root, 1).map(x => x.leaf); ls.forEach(l => l.g = null); for (const [i, v] of Object.entries(vals)) ls[+i].g = v; return modCalc(m); };
   const m = { scale:10, min:6, root:NTPL.modIV.f() };
   // orden de hojas: PO1Q,PO1B,PO2Q,PO2B,PO3,PO4,DQ1..4,DB1..6,LQ1..3,LB1..3
   const a = set(m, { 0:8.2, 2:7.66, 6:8.12, 7:7.4, 16:7.5, 17:7.75 });
   const all = {}; for (let i = 0; i < 22; i++) all[i] = 10; const c = set(m, all);
   return { secured:a.sec, cur:a.cur, need:a.need, control:c.final };
 });
 // Excel AM6: G=(8.2*.09)*10/1.5 ; K=(7.66*.09)*10/1.5 ; O=0 ; AC=((8.12+7.4)/4*.13)*10/2.5 ; AL=((7.5+7.75)/3*.09)*10/1.5
 const G = 8.2*.09*10/1.5, K = 7.66*.09*10/1.5, AC = ((8.12+7.4)/4*.13)*10/2.5, AL = ((7.5+7.75)/3*.09)*10/1.5;
 console.log('excel AM6', (G*.15 + K*.15 + AC*.25 + AL*.15).toFixed(4), 'nuestro', r.secured.toFixed(4), '| actual', r.cur.toFixed(2), 'necesita', r.need.toFixed(2), '| control', r.control);
 for (const [W, sc] of [[1366, 'light'], [390, 'dark']]){
  const p = await (await b.newContext({ viewport:{ width:W, height:900 }, colorScheme:sc, deviceScaleFactor:2 })).newPage();
  p.on('pageerror', e => errs.push(W + ' ' + e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
  await p.evaluate(() => go('notas')); await p.waitForTimeout(200);
  const inp = await p.$$('.ninp');
  for (const [i, v] of [[0,'8.2'],[2,'76.6%'],[6,'8,12'],[7,'7.4'],[16,'15/20'],[17,'7.75']]){ const ii = await p.$$('.ninp'); await ii[i].fill(v); await ii[i].press('Enter'); await p.waitForTimeout(80); }
  console.log(W, await p.$eval('.nmod .nmsg', e => e.textContent), '|', await p.$eval('.nbig b', e => e.textContent));
  await p.screenshot({ path:`shots/notas_${W}.png`, fullPage:true });
  await p.click('button:has-text("Editar estructura")'); await p.waitForTimeout(150); await p.screenshot({ path:`shots/notas_${W}_edit.png`, fullPage:true });
  await p.click('button:has-text("Listo")');
  await p.click('button:has-text("+ Ciclo")'); await p.fill('#sheetroot input', 'Ciclo I-2027'); await p.click('button:has-text("Crear ciclo")'); await p.waitForTimeout(100);
  await p.click('button:has-text("+ Agregar módulo")'); await p.fill('#sheetroot input >> nth=0', 'Módulo V'); await p.click('#sheetroot button:has-text("3 parciales")'); await p.waitForTimeout(150);
  console.log(W, 'ciclos', await p.$$eval('.npill', a => a.map(x => x.textContent).join('|')), 'mods', await p.$$eval('.nmod h3', a => a.map(x => x.textContent).join('|')));
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) errs.push(W + ' overflow ' + ov);
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
