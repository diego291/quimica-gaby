const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const ctx = await b.newContext({viewport:{width:1000,height:900}, acceptDownloads:true}); const p = await ctx.newPage();
 p.on('pageerror', e => console.log('ERR', e.message)); p.on('console', m => { if (m.type()==='error' && !m.text().includes('ERR_FAILED')) console.log('CONSOLE', m.text()); });
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
 await p.addScriptTag({ path: __dirname + '/node_modules/jspdf/dist/jspdf.umd.min.js' }); await p.addScriptTag({ path: __dirname + '/node_modules/html2canvas/dist/html2canvas.min.js' });
 await p.click('#modes button:nth-child(8)');
 await p.click('.printbox .btnrow .btn'); 
 for (const i of [1,2]){
   const [d] = await Promise.all([p.waitForEvent('download', {timeout:120000}), p.click(`.coderow .btnrow button:nth-child(${i})`)]);
   const f = 'shots/' + d.suggestedFilename(); await d.saveAs(f); console.log('saved', f);
   await p.waitForTimeout(500);
 }
 await p.click('#modes button:nth-child(1)'); await p.click('#newbtn');
 const [d] = await Promise.all([p.waitForEvent('download', {timeout:120000}), p.click('.pdfbar button')]); await d.saveAs('shots/' + d.suggestedFilename()); console.log('saved repaso');
 await b.close(); })();
