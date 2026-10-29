const { chromium } = require('playwright');
const MOCK = `(() => { const said = []; window.__said = said; const ss = { speaking:false, getVoices:() => [{ name:'Google español de Estados Unidos', lang:'es-US', voiceURI:'g-es-us' }], cancel(){ this.speaking = false; }, speak(u){ said.push(u.text); this.speaking = true; setTimeout(() => { this.speaking = false; u.onend && u.onend(); }, 5); } }; Object.defineProperty(window, 'speechSynthesis', { value: ss }); window.SpeechSynthesisUtterance = function(t){ this.text = t; }; })();`;
(async () => { const b = await chromium.launch(); const errs = [];
 for (const [W, sc] of [[1366, 'light'], [390, 'dark']]){
  const ctx = await b.newContext({ viewport:{ width:W, height:900 }, colorScheme:sc, deviceScaleFactor:2 }); await ctx.addInitScript(MOCK);
  const p = await ctx.newPage(); p.on('pageerror', e => errs.push(W + ' ' + e.message));
  await p.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  await p.goto('file://' + __dirname + '/test.html'); await p.addStyleTag({ path: __dirname + '/fonts.css' });
  await p.evaluate(() => { S.x.mot = { open:false, every:0, bib:true, cel:true, used:{}, ans:{}, cards:{} }; const d = new Date(); d.setDate(d.getDate() + 5); const ds = d.toISOString().slice(0, 10); S.x.ev = [{ id:'p1', title:'Parcial Módulo IV', type:'parcial', date:ds, time:'08:00', topics:['t27','t28'], rem:-1 }]; save(); renderAll(); });
  await p.waitForTimeout(300); await p.screenshot({ path:`shots/e_${W}_inicio.png` });
  console.log(W, 'inicio cards:', await p.$$eval('.hoycard, .pcard', a => a.map(x => x.textContent.slice(0, 70)).join(' || ')));
  // sesión de hoy
  await p.click('.hoycard button'); await p.waitForTimeout(200);
  for (let k = 0; k < 6; k++){
    if (await p.$('.opts .opt')){ await p.click('.opts .opt >> nth=' + (k % 2)); await p.waitForTimeout(60); await p.click('.btnrow button:has-text("Siguiente"), .btnrow button:has-text("Terminar")'); }
    else if (await p.$('button:has-text("Ver respuesta")')){ await p.click('button:has-text("Ver respuesta")'); await p.click('button:has-text("La sabía")'); }
    await p.waitForTimeout(80);
  }
  console.log(W, 'hoy head:', await p.$eval('.hoyhead span', e => e.textContent).catch(() => 'fin'), 'srs:', await p.evaluate(() => Object.keys(S.x.srs).length));
  await p.screenshot({ path:`shots/e_${W}_hoy.png` });
  await p.click('button:has-text("Salir")').catch(() => {});
  // mapa
  await p.evaluate(() => go('progreso')); await p.waitForTimeout(200); await p.screenshot({ path:`shots/e_${W}_mapa.png` });
  await p.click('.wcell >> nth=0'); await p.waitForTimeout(200); await p.screenshot({ path:`shots/e_${W}_tema.png` });
  await p.click('#sheetroot .wsub button >> nth=0'); await p.waitForTimeout(200);
  console.log(W, 'custom:', await p.$eval('.hoyhead span', e => e.textContent));
  // simulacro de parcial
  await p.evaluate(() => simParcial(S.x.ev[0], 20)); await p.waitForTimeout(200);
  console.log(W, 'sim qs', await p.evaluate(() => SIM.qs.length + ' temas ' + [...new Set(SIM.qs.map(q => q.t))].join(',')));
  await p.evaluate(() => { SIM.i = SIM.qs.length; SIM.ok = 15; renderView(); }); await p.waitForTimeout(200);
  console.log(W, 'event sims', await p.evaluate(() => JSON.stringify(S.x.ev[0].sims)));
  // audio
  await p.evaluate(() => { S.sel = new Set(['t21']); go('escuchar'); }); await p.waitForTimeout(200);
  await p.click('#auplay'); await p.waitForTimeout(1500);
  console.log(W, 'audio dijo', await p.evaluate(() => __said.length), 'tarjeta', await p.evaluate(() => AU.ci), '|', await p.evaluate(() => __said.slice(0, 3).join(' / ').slice(0, 200)));
  await p.click('#auplay'); await p.waitForTimeout(100); await p.screenshot({ path:`shots/e_${W}_audio.png` });
  await p.evaluate(() => { S.sel = new Set(['t21']); go('repaso'); }); await p.waitForTimeout(100);
  console.log(W, 'boton repaso', await p.$$eval('.deckbar button', a => a.map(x => x.textContent).join('|')));
  const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 0) errs.push(W + ' overflow ' + ov);
 }
 console.log(errs.join('\n') || 'sin errores'); await b.close(); })();
