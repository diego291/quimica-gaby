const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 for (const [w, h, sc] of [[1366, 900, 'light'], [900, 900, 'dark'], [390, 844, 'light']]){
  const p = await (await b.newContext({ viewport:{ width:w, height:h }, colorScheme:sc })).newPage();
  p.on('pageerror', e => errs.push(w + ' ERR ' + e.message)); p.on('console', m => { if (m.type() === 'error' && !m.text().includes('ERR_FAILED')) errs.push(w + ' ' + m.text()); });
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
  await p.screenshot({ path:`shots/u_${w}_inicio.png` });
  const secs = ['Inicio','Estudiar','Practicar','Examen','Preguntar'];
  for (const s of secs){
    const sel = w > 700 ? `#rail .ri:has-text("${s}")` : `#bnav .bn:has-text("${s}")`;
    await p.click(sel); await p.waitForTimeout(120);
    const subs = await p.$$('#subw .sb'); 
    for (let i = 0; i < subs.length; i++){ const ss = await p.$$('#subw .sb'); await ss[i].click(); await p.waitForTimeout(120);
      const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) errs.push(`${w} overflow ${s} sub ${i}: ${ov}`); }
  }
  await p.click(w > 700 ? '#rail .ri:has-text("Estudiar")' : '#bnav .bn:has-text("Estudiar")'); await p.click('#subw .sb:has-text("Repaso")'); await p.waitForTimeout(150);
  await p.screenshot({ path:`shots/u_${w}_repaso.png`, fullPage: false });
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
