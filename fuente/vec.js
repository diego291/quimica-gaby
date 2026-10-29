const { chromium } = require('playwright');
const code = process.argv[2];
(async () => { const b = await chromium.launch(); const p = await (await b.newContext({viewport:{width:800,height:1100}})).newPage();
 p.on('pageerror', e => console.log('ERR', e.message));
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
 for (const kind of ['examen','clave']){
   await p.reload(); await p.addStyleTag({ path: __dirname + '/fonts.css' });
   const file = await p.evaluate(([k, c]) => window.__doc(k, c), [kind, code]);
   await p.evaluate(() => document.fonts.ready);
   await p.pdf({ path: `../${file}.pdf`, format:'A4', printBackground:true, margin:{top:'14mm',bottom:'16mm',left:'12mm',right:'12mm'},
     displayHeaderFooter:true, headerTemplate:'<span></span>',
     footerTemplate:`<div style="font-size:8px;color:#666;width:100%;padding:0 12mm;display:flex;justify-content:space-between;font-family:sans-serif"><span>Química · ${kind==='examen'?'Examen':'Hoja de respuestas'} ${code}</span><span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span></div>` });
   console.log('ok', file);
 }
 await b.close(); })();
