const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const errs = [];
  for (const [w, scheme] of [[1100,'light'],[400,'dark']]){
    const ctx = await b.newContext({ viewport:{ width:w, height:900 }, colorScheme:scheme });
    const p = await ctx.newPage();
    p.on('console', m => { if (m.type()==='error') errs.push(`${w} ${m.text()}`); });
    p.on('pageerror', e => errs.push(`${w} PAGEERR ${e.message}`));
    await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
    await p.goto('file://' + __dirname + '/test.html');
    await p.addStyleTag({ path: __dirname + '/fonts.css' });
    await p.waitForTimeout(400);
    const modes = ['repaso','fichas','preguntas','ejercicios','formula','practica','lab','simulacro','formulario','progreso'];
    for (let i = 0; i < modes.length; i++){
      await p.click(`#modes button:nth-child(${i+1})`);
      await p.waitForTimeout(150);
      const ov = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (ov > 0) errs.push(`${w} overflow ${modes[i]} ${ov}`);
      if (['repaso','fichas','lab','practica','simulacro'].includes(modes[i]) )
        await p.screenshot({ path:`shots/${w}_${modes[i]}.png`, fullPage:false });
    }
    await ctx.close();
  }
  console.log(errs.join('\n') || 'no errors');
  await b.close();
})();
