const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const p = await (await b.newContext({viewport:{width:400,height:900}})).newPage();
await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
console.log(await p.evaluate(() => [...document.querySelectorAll('#view *')].filter(e => e.getBoundingClientRect().right > innerWidth+1).slice(0,8).map(e => e.tagName+'.'+e.className+' '+Math.round(e.getBoundingClientRect().right)+' '+(e.textContent||'').slice(0,40))));
await b.close(); })();
