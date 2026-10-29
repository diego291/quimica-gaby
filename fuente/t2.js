const { chromium } = require('playwright');
(async () => { const b = await chromium.launch();
for (const [w,sc] of [[1000,'light'],[400,'dark']]){
 const ctx = await b.newContext({viewport:{width:w,height:1000},colorScheme:sc, acceptDownloads:true}); const p = await ctx.newPage();
 p.on('pageerror', e => console.log('ERR', e.message));
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
 const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov>0) console.log('overflow guia', ov);
 await p.screenshot({ path:`shots/${w}_guia.png`, fullPage:true });
 await p.click('text=Ir a Simulacro >> nth=0');
 await p.selectOption('#simfb','end'); await p.click('.simstart .btnrow .btn >> nth=0');
 for (let i=0;i<10;i++){ await p.click('.opts .opt >> nth=1'); await p.click('text=/Siguiente pregunta|Terminar y ver mi nota/'); }
 await p.screenshot({ path:`shots/${w}_simend.png`, fullPage:false });
 const rv = await p.$('.review'); console.log(w, 'review cards', (await p.$$('.review .card')).length);
 await rv.screenshot({ path:`shots/${w}_review.png` });
 if (w===1000){ await p.addScriptTag({ path: __dirname + '/node_modules/jspdf/dist/jspdf.umd.min.js' }); await p.addScriptTag({ path: __dirname + '/node_modules/html2canvas/dist/html2canvas.min.js' });
  await p.click('#modes button:nth-child(1)');
  const [d] = await Promise.all([p.waitForEvent('download',{timeout:60000}), p.click('.pdfbar button')]); await d.saveAs('shots/guia.pdf'); console.log('guia pdf'); }
 await ctx.close(); }
await b.close(); })();
