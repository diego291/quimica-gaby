// Exporta el texto hablado de cada tarjeta de repaso (cuerpo + pregunta fija) para generar el audio.
const { chromium } = require('playwright'); const fs = require('fs');
(async () => { const b = await chromium.launch(); const p = await b.newPage();
 await p.goto('file://' + __dirname + '/test.html');
 const out = await p.evaluate(() => {
   auCfg().check = false; const res = {};
   ALL.REPASO.forEach(it => {
     const body = cardScript(it).filter(s => typeof s === `string`);
     const pg = pagesOf(it.src); const cand = ALL.MCQ.filter(q => q.t === it.t && [...pagesOf(q.src)].some(x => pg.has(x))).sort((a, b) => a.id.localeCompare(b.id));
     const q = cand[0]; const quiz = q ? [...splitSents(`Pregunta de repaso: ` + speakable(q.q)), { wait:4 }, ...splitSents(`Respuesta: ` + speakable(q.o[0]) + `. ` + speakable(q.e || ``))] : null;
     res[hash(it.title)] = { t:it.t, title:it.title, body, quiz, qid: q ? q.id : null };
   });
   return res;
 });
 fs.writeFileSync(process.argv[2] || 'audio_text.json', JSON.stringify(out)); console.log(Object.keys(out).length, 'tarjetas'); await b.close(); })();
