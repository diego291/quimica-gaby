const { chromium } = require('playwright');
(async () => { const errs = [];
 const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
 const ctx = await b.newContext({ viewport:{ width:390, height:844 }, ignoreHTTPSErrors:true });
 const p = await ctx.newPage(); p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
 await p.goto('https://diego291.github.io/quimica-gaby/', { waitUntil:'networkidle' }); await p.waitForTimeout(2500);
 console.log('ver', await p.evaluate(() => APPVER), 'fb', await p.evaluate(() => !!window.firebase && SY.on), 'state', await p.evaluate(() => SY.state));
 console.log('card', await p.$$eval('[data-sync]', a => a.map(x => x.textContent.slice(0, 30))));
 const pop = p.waitForEvent('popup', { timeout:15000 }).catch(() => null);
 await p.click('[data-sync] button:has-text("Iniciar sesión")'); const w = await pop;
 if (w){ await w.waitForLoadState().catch(() => {}); await w.waitForTimeout(3000); console.log('popup url', w.url().slice(0, 110)); }
 await p.waitForTimeout(1000); console.log('err text', await p.evaluate(() => SY.err));
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
