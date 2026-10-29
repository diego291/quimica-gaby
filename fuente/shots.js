const { chromium } = require('playwright');
(async () => { const b = await chromium.launch();
for (const [w, sc] of [[1000,'light'],[400,'dark']]){
 const p = await (await b.newContext({viewport:{width:w,height:1000},colorScheme:sc})).newPage();
 p.on('pageerror', e => console.log('ERR', e.message));
 await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' }); await p.waitForTimeout(300);
 await p.click('#newbtn'); await p.waitForTimeout(100);
 const cards = await p.$$('#view .card');
 await cards[5].screenshot({ path:`shots/${w}_rep_t20.png` });
 await cards[18].screenshot({ path:`shots/${w}_rep_t21.png` });
 await p.click('#modes button:nth-child(2)'); await p.waitForTimeout(100);
 await p.click('.fin'); await p.waitForTimeout(700);
 await (await p.$('.flash')).screenshot({ path:`shots/${w}_ficha_back.png` });
 await p.click('#modes button:nth-child(7)'); await p.waitForTimeout(100);
 const labs = await p.$$('#view .card'); for (let i=0;i<labs.length;i++) await labs[i].screenshot({ path:`shots/${w}_lab${i}.png` });
 await p.click('#modes button:nth-child(6)'); await p.waitForTimeout(100);
 await p.fill('#pans','2.5'); await p.click('.ansrow button'); await p.waitForTimeout(100);
 await (await p.$('#view .card')).screenshot({ path:`shots/${w}_prac.png` });
 await p.click('#modes button:nth-child(8)'); await p.waitForTimeout(100);
 await p.click('.printbox .btnrow .btn'); await p.waitForTimeout(100);
 await (await p.$('.printbox')).screenshot({ path:`shots/${w}_exam.png` });
}
await b.close(); })();
