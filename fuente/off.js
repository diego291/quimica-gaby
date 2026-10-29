const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const ctx = await b.newContext({ viewport:{width:1000,height:900}, acceptDownloads:true, offline:true }); const p = await ctx.newPage();
 const bad = []; p.on('pageerror', e => bad.push('ERR '+e.message)); p.on('requestfailed', r => bad.push('FAILED '+r.url().slice(0,60)));
 await p.goto('file:///home/claude/Parcial_Quimica_Modulo_IV_offline.html'); await p.waitForTimeout(500);
 console.log('fuente:', await p.evaluate(() => document.fonts.check('16px "Zilla Slab"') && document.fonts.check('16px "Atkinson Hyperlegible"')));
 for (const s of ['Inicio','Estudiar','Practicar','Examen','Preguntar']){ await p.click(`#rail .ri:has-text("${s}")`); await p.waitForTimeout(60); const n = (await p.$$('#subw .sb')).length; for (let i = 0; i < n; i++){ const ss = await p.$$('#subw .sb'); await ss[i].click(); await p.waitForTimeout(60); } }
 await p.click('#rail .ri:has-text("Examen")'); await p.click('#subw .sb:has-text("Parcial impreso")'); await p.click('.printbox .btnrow .btn');
 for (const i of [1,2]){ const [d] = await Promise.all([p.waitForEvent('download',{timeout:90000}), p.click(`.coderow .btnrow button:nth-child(${i})`)]); await d.saveAs('shots/off_'+i+'.pdf'); console.log('pdf', i, d.suggestedFilename()); await p.waitForTimeout(300); }
 console.log(bad.join('\n') || 'sin errores'); await b.close(); })();
