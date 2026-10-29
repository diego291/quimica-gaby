const { chromium } = require('playwright'); const { execSync } = require('child_process'); const fs = require('fs');
const PK = '/tmp/claude-0/-home-claude/de5f5a25-dcf6-5045-b837-01b82f9fbc6e/scratchpad/pk';
(async () => {
 const errs = []; const log = (...a) => console.log(...a);
 const b = await chromium.launch();
 const ctx = await b.newContext({ viewport:{ width:1366, height:900 }, acceptDownloads:true });
 const p = await ctx.newPage();
 p.on('pageerror', e => errs.push('ERR ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
 const U = 'http://localhost:8765/';
 await p.goto(U); await p.waitForTimeout(800);
 log('sw', await p.evaluate(() => navigator.serviceWorker.getRegistration().then(r => !!r)));
 log('ver', await p.evaluate(() => APPVER), 'migr hint', await p.$$eval('.alert', a => a.map(x => x.textContent.slice(0,40))));
 // marcar progreso
 await p.evaluate(() => { S.st[`x1`] = { ok:1 }; S.x.name = `Gaby`; save(); });
 await p.click('#rail .ri:has-text("Inicio")'); await p.click('#subw .sb:has-text("Mi progreso")'); await p.waitForTimeout(200);
 const [dl] = await Promise.all([p.waitForEvent('download'), p.click('button:has-text("Descargar respaldo")')]);
 const bk = PK + '/' + dl.suggestedFilename(); await dl.saveAs(bk); log('backup', dl.suggestedFilename(), fs.statSync(bk).size);
 // importar paquete
 const [fc] = await Promise.all([p.waitForEvent('filechooser'), p.click('button:has-text("Cargar archivo de material")')]);
 await fc.setFiles(PK + '/t99_demo.js'); await p.waitForTimeout(1800);
 log('t99?', await p.evaluate(() => TORDER.includes('t99') && S.sel.has('t99')), await p.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--t99')));
 await p.click('#rail .ri:has-text("Inicio")'); await p.click('#subw .sb:has-text("Mi progreso")'); await p.waitForTimeout(200);
 log('packs ui', await p.$$eval('.errlist li', l => l.map(x => x.textContent.slice(0,80)).filter(t => t.includes('99'))));
 await p.evaluate(() => { S.sel = new Set([`t99`]); go(`repaso`); }); await p.waitForTimeout(300);
 log('repaso fig', await p.$$eval('#view svg rect', r => r.length), await p.$eval('#view', v => v.textContent.includes('Tarjeta de prueba')));
 await p.screenshot({ path:'shots/pack_repaso.png' });
 // offline
 await ctx.setOffline(true); await p.reload(); await p.waitForTimeout(800);
 log('offline ok', await p.evaluate(() => typeof renderAll === 'function' && !!document.querySelector('#rail .ri')), await p.evaluate(() => document.fonts.check('16px "Atkinson Hyperlegible"')));
 await ctx.setOffline(false);
 // actualización: incluir t99 en el sitio con versión 2 y otra BUILD
 fs.writeFileSync('material/t99_demo.js', fs.readFileSync(PK + '/t99_demo.js','utf8').replace('version:1','version:2').replace('Tema de prueba','Tema de prueba v2'));
 execSync('BUILD=2099.01.01-0000 python3 site.py'); fs.unlinkSync('material/t99_demo.js');
 await p.reload(); await p.waitForTimeout(1000);
 log('new ver', await p.evaluate(() => APPVER), 'toast', await p.$$eval('.alert', a => a.map(x => x.textContent).filter(t => t.includes('actualizada'))));
 log('pack name', await p.evaluate(() => TOPICS.t99.name + ' / ' + PK.list.t99.__from + ' v' + PK.list.t99.version));
 // restaurar en otro navegador
 const c2 = await b.newContext({ viewport:{ width:390, height:844 } }); const q = await c2.newPage(); q.on('pageerror', e => errs.push('Q ' + e.message));
 await q.goto(U); await q.waitForTimeout(600);
 log('hint', await q.$$eval('.alert', a => a.map(x => x.textContent.slice(0,45))));
 await q.screenshot({ path:'shots/migr_390.png' });
 const [fc2] = await Promise.all([q.waitForEvent('filechooser'), q.click('.alert button:has-text("Restaurar")')]);
 await fc2.setFiles(bk); await q.waitForTimeout(300); await q.click('button:has-text("Sí, restaurar")'); await q.waitForTimeout(1200);
 log('restored', await q.evaluate(() => S.x.name + ' ' + JSON.stringify(S.st.x1) + ' ' + TORDER.includes('t99')));
 log(errs.join('\n') || 'sin errores'); await b.close();
})();
