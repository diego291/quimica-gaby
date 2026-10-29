const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
for (const [w, sc] of [[1100,'light'],[400,'dark']]){
 const p = await (await b.newContext({viewport:{width:w,height:950},colorScheme:sc})).newPage();
 p.on('pageerror', e => errs.push(w+' ERR '+e.message)); p.on('console', m => { if (m.type()==='error' && !m.text().includes('ERR_FAILED')) errs.push(w+' '+m.text()); });
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
 await p.click('#allbtn'); await p.waitForTimeout(100);
 await p.screenshot({ path:`shots/${w}_top.png` });
 const n = await p.$$eval('#modes button', x => x.length);
 for (let i = 1; i <= n; i++){ await p.click(`#modes button:nth-child(${i})`); await p.waitForTimeout(120);
   const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) errs.push(`${w} overflow mode ${i}: ${ov}`); }
 await p.click('#newbtn'); await p.click('#modes button:has-text("Repaso")'); await p.waitForTimeout(100);
 const cards = await p.$$('#view .card'); console.log(w, 'repaso cards t27', cards.length);
 for (const i of [1,5,6,12,13,17]) if (cards[i]) await cards[i].screenshot({ path:`shots/${w}_org${i}.png` });
 await p.click('#modes button:has-text("Videos")'); await p.waitForTimeout(100); await p.screenshot({ path:`shots/${w}_videos.png` });
 await p.click('#modes button:has-text("Práctica infinita")'); await p.waitForTimeout(100);
 for (const name of ['Nombrar alcoholes','Alcohol 1°','Nombrar fenoles','Combustión de alcoholes','¿Qué función']){ await p.click(`.gchip:has-text("${name}")`); await p.waitForTimeout(100); await (await p.$('#view .card')).screenshot({ path:`shots/${w}_gen_${name.slice(0,6)}.png` }); }
 await p.click('#modes button:has-text("Laboratorio")'); await p.waitForTimeout(100); const labs = await p.$$('#view .card'); if (labs.length) await labs[labs.length-1].screenshot({ path:`shots/${w}_labhc.png` });
}
console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
