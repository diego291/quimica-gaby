const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const errs = [];
 const ctx = await b.newContext({ viewport:{ width:1366, height:900 } }); const p = await ctx.newPage();
 p.on('pageerror', e => errs.push('ERR ' + e.message));
 await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
 // estado antiguo (sin S.x) de una versión anterior
 await p.addInitScript(() => { if (!sessionStorage.getItem('once')){ sessionStorage.setItem('once','1'); localStorage.setItem('parcialM4_v2', JSON.stringify({ sel:['t26','t27'], mode:'formula', simFb:'end', st:{ T_t27:[5,2] }, err:['Mabc'], box:{} })); } });
 await p.goto('file://' + __dirname + '/test.html'); await p.waitForTimeout(300);
 console.log('migr', await p.evaluate(() => JSON.stringify({ mode:S.mode, sel:[...S.sel], name:S.x.name, pomo:S.x.pomo.study })));
 // pomodoro: terminar fase
 await p.evaluate(() => { go('inicio'); pomoStart(); S.x.pst.end = Date.now() - 10; pomoTick(); });
 console.log('pomo', await p.evaluate(() => JSON.stringify({ ph:S.x.pst.phase, run:S.x.pst.run, log:S.x.plog[todayStr()] })));
 console.log('pm dia', await p.$$eval('.cal .d.pm', x => x.length));
 // tema
 await p.click('#head .hbtn:has-text("Noche")'); console.log('tema', await p.evaluate(() => document.documentElement.getAttribute('data-theme')));
 // simulacro al final
 await p.evaluate(() => go('simulacro')); await p.selectOption('#simfb', 'end'); await p.click('.simstart .btnrow .btn >> nth=0'); await p.waitForTimeout(100);
 for (let i = 0; i < 10; i++){ const o = await p.$$('.opts .opt'); if (!o.length) break; await o[0].click(); await p.click('#view .btnrow .btn:not(.ghost)'); await p.waitForTimeout(50); }
 console.log('sim', await p.evaluate(() => JSON.stringify(S.x.simLast)));
 await p.evaluate(() => go('inicio')); await p.waitForTimeout(100); await p.screenshot({ path:'shots/w_inicio_dark.png' });
 for (const m of ['videos','preguntar','progreso','guia','lab','formula','fichas','ejercicios','formulario']){ await p.evaluate(m => go(m), m); await p.waitForTimeout(80); await p.screenshot({ path:`shots/w_${m}.png` }); }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
