const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await (await b.newContext({ offline:true })).newPage();
 await p.goto('file:///home/claude/Parcial_Quimica_Modulo_IV_offline.html'); await p.waitForTimeout(800);
 console.log(await p.evaluate(async () => { await document.fonts.ready; return JSON.stringify([...document.fonts].map(f => f.family + ' ' + f.weight + ' ' + f.status)); }));
 console.log(await p.evaluate(() => document.fonts.check('700 16px "Zilla Slab"') + ' ' + document.fonts.check('16px "Atkinson Hyperlegible"')));
 await b.close(); })();
