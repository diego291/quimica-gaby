const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await (await b.newContext({viewport:{width:800,height:1100}})).newPage();
 p.on('pageerror', e => console.log('ERR', e.message));
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
 const file = await p.evaluate(() => window.__doc('guia'));
 await p.evaluate(() => document.fonts.ready);
 await p.pdf({ path:`../Guia_de_estudio_Quimica.pdf`, format:'A4', printBackground:true, margin:{top:'14mm',bottom:'16mm',left:'12mm',right:'12mm'}, displayHeaderFooter:true, headerTemplate:'<span></span>',
   footerTemplate:`<div style="font-size:8px;color:#666;width:100%;padding:0 12mm;display:flex;justify-content:space-between;font-family:sans-serif"><span>Química · Guía de estudio</span><span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span></div>` });
 await b.close(); })();
