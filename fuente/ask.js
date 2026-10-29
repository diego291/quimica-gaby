/* ======================= PREGUNTAR: BUSCADOR EN EL MATERIAL + BÚSQUEDA WEB + MIS DUDAS ======================= */
const STOP = new Set(`a al algo algun alguna como con cual cuales cuando de del el ella en entre es esa ese eso esta este esto estos fue hay la las le les lo los mas me mi muy no o para pero por porque que se si sin sobre son su sus te tiene tienen un una uno unos y ya yo qué cómo cuál cuándo dónde por qué hace hacer debo puedo significa sirve explica explicar diferencia entre mismo misma cosa ser esta`.split(/\s+/).map(w => w.normalize(`NFD`).replace(/[̀-ͯ]/g, ``)));
const SYN = {
  buffer:[`amortiguadora`,`tampon`,`reguladora`], tampon:[`buffer`,`amortiguadora`], amortiguadora:[`buffer`,`tampon`],
  titulacion:[`valoracion`], valoracion:[`titulacion`], titular:[`valoracion`], bureta:[`valoracion`],
  globulo:[`eritrocito`], globulos:[`eritrocito`], eritrocitos:[`eritrocito`], rojos:[`eritrocito`], hematie:[`eritrocito`],
  romper:[`hemolisis`], revienta:[`hemolisis`], rompe:[`hemolisis`], arruga:[`crenacion`], encoge:[`crenacion`],
  concentracion:[`molaridad`], molar:[`molaridad`], molal:[`molalidad`], normal:[`normalidad`], equivalente:[`normalidad`],
  diluir:[`dilucion`], diluyo:[`dilucion`], stock:[`dilucion`], madre:[`stock`],
  acidez:[`ph`,`acido`], basicidad:[`poh`,`base`], alcalino:[`basica`], alcalina:[`basica`],
  ka:[`constante`,`disociacion`], kb:[`constante`,`disociacion`], kw:[`autoionizacion`,`agua`],
  raiz:[`debil`,`ka`], ice:[`equilibrio`,`debil`],
  sangre:[`gasometria`,`bicarbonato`], gasometria:[`acidosis`,`bicarbonato`], acidosis:[`bicarbonato`], alcalosis:[`bicarbonato`],
  nombrar:[`nomenclatura`,`iupac`], nombre:[`nomenclatura`,`iupac`], iupac:[`nomenclatura`],
  ramificado:[`ramificacion`,`sustituyente`], rama:[`sustituyente`,`ramificacion`], ramas:[`sustituyente`,`ramificacion`],
  doble:[`alqueno`,`eno`], triple:[`alquino`,`ino`], sencillo:[`alcano`], saturado:[`alcano`],
  angulo:[`geometria`,`hibridacion`], forma:[`geometria`], hibridacion:[`sp3`,`sp2`],
  newman:[`conformacion`], gira:[`rotacion`,`conformacion`], girar:[`rotacion`,`conformacion`],
  hierve:[`ebullicion`], hervir:[`ebullicion`], ebullicion:[`punto`], indicador:[`viraje`], color:[`indicador`,`viraje`],
  terciario:[`carbono`], primario:[`carbono`], secundario:[`carbono`], cuaternario:[`carbono`],
  suero:[`nacl`,`fisiologico`,`dilucion`], preparo:[`dilucion`,`preparacion`], preparar:[`dilucion`,`preparacion`], prepara:[`dilucion`,`preparacion`],
  isomero:[`isomeria`], isomeros:[`isomeria`], radical:[`alquilo`], radicales:[`alquilo`],
  cis:[`trans`,`geometrica`], trans:[`cis`,`geometrica`], geometrica:[`cis`,`trans`], margarina:[`hidrogenacion`,`aceite`], aceite:[`hidrogenacion`],
  plastico:[`polimero`,`polimerizacion`], plasticos:[`polimero`,`polimerizacion`], bolsa:[`polietileno`], pvc:[`polimero`], monomero:[`polimerizacion`],
  acetileno:[`etino`], etileno:[`eteno`], dieno:[`conjugado`,`aislado`,`acumulado`], aleno:[`acumulado`], terminal:[`alquino`], interno:[`alquino`],
  cetona:[`hidratacion`], acetiluro:[`acidez`,`terminal`], estable:[`sustitucion`,`estabilidad`],
  aromatico:[`aromaticidad`,`benceno`], aromaticos:[`aromaticidad`,`benceno`], huckel:[`aromaticidad`,`electrones`], arenos:[`aromatico`], benceno:[`aromatico`],
  orto:[`meta`,`para`,`posicion`], meta:[`orto`,`para`], para:[`orto`,`meta`], sea:[`sustitucion`,`electrofila`], electrofila:[`sustitucion`], friedel:[`alquilacion`,`acilacion`],
  nitracion:[`nitro`,`sustitucion`], sulfonacion:[`sulfonico`], fenilo:[`fenil`,`bencilo`], bencilo:[`fenilo`], tolueno:[`metilbenceno`], fenol:[`hidroxibenceno`], anilina:[`aminobenceno`],
  catecolaminas:[`tirosina`,`dopamina`], tiroideas:[`tirosina`,`t3`], serotonina:[`triptofano`], hap:[`policiclico`], naftalina:[`naftaleno`],
  alcohol:[`hidroxilo`,`ol`], alcoholes:[`hidroxilo`], hidroxilo:[`alcohol`,`oh`], fenoles:[`fenol`], glicerina:[`triol`,`glicerol`], etilenglicol:[`diol`], prioridad:[`principal`,`sufijo`],
  cresol:[`metilfenol`], catecol:[`diol`], deshidratacion:[`alqueno`], puente:[`hidrogeno`], puentes:[`hidrogeno`], pka:[`acidez`], oxidar:[`oxidacion`], oxida:[`oxidacion`], williamson:[`eter`],
  eter:[`eteres`,`alcoxi`], eteres:[`eter`], alcoxi:[`eter`,`metoxi`], epoxido:[`oxirano`,`epoxidos`], epoxidos:[`oxirano`], oxirano:[`epoxido`], thf:[`oxolano`,`tetrahidrofurano`], anestesico:[`dietilico`,`eter`], esterilizar:[`oxido`,`etileno`], peroxido:[`peroxidos`,`autooxidacion`], corona:[`macrociclo`]
};
Object.assign(SYN, PACKS.SYN);
const normTxt = s => String(s).replace(/<[^>]+>/g, ` `).replace(/&[a-z]+;/g, ` `).normalize(`NFD`).replace(/[̀-ͯ]/g, ``).toLowerCase()
  .replace(/[₀-₉]/g, d => `0123456789`[`₀₁₂₃₄₅₆₇₈₉`.indexOf(d)]).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, d => `0123456789`[`⁰¹²³⁴⁵⁶⁷⁸⁹`.indexOf(d)]).replace(/[⁻⁺]/g, ``);
const stem = w => w.length > 5 ? w.replace(/(es|s)$/, ``) : w.length > 3 ? w.replace(/s$/, ``) : w;
const toks = s => normTxt(s).split(/[^a-z0-9]+/).filter(w => w && !STOP.has(w) && (w.length > 1 || /\d/.test(w))).map(stem);
const strip = s => String(s).replace(/<\/(tr|li|p|h3)>/g, `. `).replace(/<\/t[dh]>/g, ` · `).replace(/<[^>]+>/g, ` `).replace(/(\.\s*){2,}/g, `. `).replace(/·\s*\./g, `.`).replace(/&nbsp;/g, ` `).replace(/&lt;/g, `<`).replace(/&gt;/g, `>`).replace(/\s+/g, ` `).trim();

const mt = (x, w) => x === w || (x.length >= 6 && w.length >= 6 && x.slice(0, 6) === w.slice(0, 6));
let IDX = null;
function buildIndex(){
  const docs = [];
  const add = (t, kind, title, text, src, extra) => docs.push({ t, kind, title, text: strip(text), src, extra });
  ALL.REPASO.forEach(r => add(r.t, `Repaso`, r.title, r.body + (r.memo ? ` Para memorizar: ` + r.memo : ``), r.src, r));
  ALL.FICHAS.forEach(f => add(f.t, `Ficha`, f.f, f.b, f.src));
  ALL.MCQ.forEach(q => add(q.t, `Pregunta`, q.q, `Respuesta: ${q.o[0]}. ${q.e}`, q.src));
  ALL.ABIERTAS.forEach(q => add(q.t, `Desarrollo`, q.q, q.a, q.src));
  ALL.EJ.forEach(e => add(e.t, `Ejercicio`, e.q, `${e.pide} ${e.pasos.join(` `)} Resultado: ${e.r}. ${e.ojo || ``}`, e.src, e));
  ALL.FORM.forEach(f => add(f.t, `Formulario`, f.title, f.rows.map(r => `${r[0]}: ${r[1]}.`).join(` `), f.src));
  docs.forEach(d => { d.tt = toks(d.title); d.bt = toks(d.text); });
  const df = {}; docs.forEach(d => new Set(d.tt.concat(d.bt)).forEach(w => df[w] = (df[w] || 0) + 1));
  IDX = { docs, df, N: docs.length };
}
function expandQuery(q){
  const base = toks(q); const ex = new Map();
  base.forEach(w => { ex.set(w, 1); (SYN[w] || []).forEach(s => { const k = stem(s); if (!ex.has(k)) ex.set(k, .55); }); });
  return ex;
}
function search(q, onlySel){
  if (!IDX) buildIndex();
  const Q = expandQuery(q); if (!Q.size) return [];
  const res = [];
  for (const d of IDX.docs){
    if (onlySel && !S.sel.has(d.t)) continue;
    let sc = 0, hit = 0;
    Q.forEach((wq, w) => {
      const idf = Math.log(1 + IDX.N / (1 + (IDX.df[w] || 0)));
      const ti = d.tt.filter(x => x === w || mt(x, w)).length, bi = d.bt.filter(x => x === w || mt(x, w)).length;
      if (ti || bi){ hit += wq; sc += wq * idf * (3 * Math.min(ti, 2) + Math.min(bi, 4) / (1 + Math.log(1 + d.bt.length / 40))); }
    });
    if (sc > 0){ const cover = hit / [...Q.values()].reduce((a, b) => a + b, 0); sc *= (.4 + cover) * ({ Repaso:1.4, Ficha:1.15, Formulario:1, Desarrollo:1, Pregunta:.9, Ejercicio:.9 })[d.kind]; res.push({ d, sc }); }
  }
  return res.sort((a, b) => b.sc - a.sc);
}
function bestSentences(d, q, n = 2){
  const Q = expandQuery(q);
  const sents = d.text.split(/(?<=[.!?:])\s+(?=[A-ZÁÉÍÓÚÑ¿¡0-9])/).filter(s => s.length > 12);
  const sc = s => { const t = toks(s); let v = 0; Q.forEach((wq, w) => { if (t.some(x => x === w || mt(x, w))) v += wq * Math.log(1 + IDX.N / (1 + (IDX.df[w] || 0))); }); return v; };
  const idf = w => Math.log(1 + IDX.N / (1 + (IDX.df[w] || 0))) * (1 + w.length / 10);
  const dt = d.tt.concat(d.bt); const rare = [...Q.keys()].filter(w => Q.get(w) === 1 && dt.some(x => x === w || mt(x, w))).sort((a, b) => idf(b) - idf(a))[0];
  const sc0 = sc; const sc2 = s => sc0(s) * (rare && toks(s).some(x => x === rare || mt(x, rare)) ? 2.2 : 1);
  const ranked = sents.map((s, i) => ({ s, i, v: sc2(s) })).filter(x => x.v > 0).sort((a, b) => b.v - a.v).slice(0, n).sort((a, b) => a.i - b.i);
  return ranked.length ? ranked.map(x => x.s) : sents.slice(0, 1);
}
function highlight(s, q){
  const Q = [...expandQuery(q).keys()].filter(w => w.length > 2);
  return s.replace(/[A-Za-zÁÉÍÓÚáéíóúÑñü0-9₀-₉⁰-⁹]+/g, w => { const n = stem(normTxt(w).replace(/[^a-z0-9]/g, ``)); return Q.some(k => n === k || mt(n, k)) ? `<mark>${w}</mark>` : w; });
}

const ASK = { q:``, tab:`mat`, onlySel:false, notes:[] };
try { ASK.notes = JSON.parse(localStorage.getItem(`parcialM4_dudas`) || `[]`) || []; } catch(e){}
const saveNotes = () => { try { localStorage.setItem(`parcialM4_dudas`, JSON.stringify(ASK.notes)); } catch(e){} };
const EXAMPLES = [`¿Qué es un buffer y cómo funciona?`,`¿Cuándo uso la raíz de Ka por C0?`,`Diferencia entre molaridad y molalidad`,`¿Por qué el agua destilada rompe los glóbulos rojos?`,`¿Qué es un carbono terciario?`,`¿Cómo se numera la cadena de un alqueno?`,`¿Qué color tiene la fenolftaleína en base?`,`¿Qué es el punto de equivalencia?`];

function vPreguntar(v){
  intro(v, `Escribe tu duda con tus propias palabras. Puedes buscar la respuesta en el material de esta página (funciona sin internet) o en la web.`);
  const tabs = el(`div`,`seg asktabs`);
  [[`mat`,`📘 Respuestas del material`],[`web`,`🌐 Respuestas de la web`],[`dudas`,`📝 Mis dudas (${ASK.notes.filter(n => !n.ok).length})`]].forEach(([k, t]) => { const b = btn(t, `segb`, () => { ASK.tab = k; renderView(); }); b.setAttribute(`aria-pressed`, ASK.tab === k); tabs.append(b); });
  v.append(tabs);
  if (ASK.tab === `dudas`){ v.append(notesView()); return; }
  const f = el(`form`,`askform`);
  f.innerHTML = `<label for="askq">${ASK.tab === `mat` ? `¿Qué no entiendes?` : `¿Qué quieres buscar en internet?`}</label><div class="inrow"><input id="askq" autocomplete="off" placeholder="Ej.: ¿qué es un buffer?" value="${ASK.q.replace(/"/g, `&quot;`)}"><button class="btn" type="submit">${ASK.tab === `mat` ? `Buscar respuesta` : `Preparar búsqueda`}</button></div>`;
  f.onsubmit = e => { e.preventDefault(); ASK.q = $(`#askq`, f).value.trim(); renderView(); setTimeout(() => { const r = $(`#askres`); if (r) r.scrollIntoView({ block:`start`, behavior:`smooth` }); }, 30); };
  v.append(f);
  const ex = el(`div`,`askex`); ex.append(el(`span`,`muted`,`Ejemplos:`));
  EXAMPLES.forEach(q => ex.append(btn(q, `gchip`, () => { ASK.q = q; renderView(); })));
  v.append(ex);
  if (!ASK.q) return;
  const out = el(`section`); out.id = `askres`; v.append(out);
  if (ASK.tab === `web`){ out.append(webView(ASK.q)); return; }
  const sel = el(`label`,`chk`); sel.innerHTML = `<input type="checkbox" id="asksel" ${ASK.onlySel ? `checked` : ``}> Buscar solo en los temas seleccionados`; sel.querySelector(`input`).onchange = e => { ASK.onlySel = e.target.checked; renderView(); };
  out.append(sel);
  const res = search(ASK.q, ASK.onlySel);
  if (!res.length || res[0].sc < .8){
    out.append(el(`div`,`empty`, `No encontré esa duda en el material. Prueba con otras palabras (por ejemplo, el nombre del tema), búscala en la web o guárdala en "Mis dudas" para preguntársela al docente.`));
    out.append(askActions(ASK.q)); return;
  }
  const top = res[0].d;
  const best = el(`article`,`card askbest`); best.style.setProperty(`--c`, `var(--${top.t})`);
  best.append(el(`div`,`meta`, `<span class="chip">${TOPICS[top.t].n} · ${top.kind}</span><span class="src">Fuente: ${top.src}</span>`));
  best.append(el(`p`,`asklab`, `Respuesta más probable`), el(`h3`,``, top.title));
  bestSentences(top, ASK.q, 3).forEach(s => best.append(el(`p`,`asks`, highlight(s, ASK.q))));
  if (top.kind === `Repaso` && top.extra){
    const d = el(`details`); d.innerHTML = `<summary>Ver la tarjeta completa</summary><div>${top.extra.body}${top.extra.memo ? `<p class="memo"><b>Para memorizar:</b> ${top.extra.memo}</p>` : ``}</div>`;
    best.append(d);
    if (top.extra.fig){ const fg = figure(top.extra.fig, true); if (fg) best.append(fg); }
    const vids = VIDEOS.filter(x => x.rep.includes(top.title)); if (vids.length) best.append(vidLinks(vids));
  }
  if (top.kind === `Ejercicio` && top.extra){ const d = el(`details`); d.innerHTML = `<summary>Ver la solución paso a paso</summary><div><ol class="kv">${top.extra.pasos.map(p => `<li>${p}</li>`).join(``)}</ol><div class="result">Resultado: ${top.extra.r}</div></div>`; best.append(d); }
  out.append(best);
  out.append(el(`p`,`note`, `Esta respuesta sale del material de la página, no de una IA. Si no responde tu duda, revisa los otros resultados, búscala en la web o guárdala en "Mis dudas".`));
  const more = res.slice(1, 7).filter(x => x.sc >= res[0].sc * .35);
  if (more.length){
    out.append(el(`h3`,`askh`, `Otros resultados relacionados`));
    const l = el(`div`,`list`);
    more.forEach(({ d }) => {
      const c = el(`article`,`card askitem`); c.style.setProperty(`--c`, `var(--${d.t})`);
      c.append(el(`div`,`meta`, `<span class="chip">${TOPICS[d.t].n} · ${d.kind}</span><span class="src">Fuente: ${d.src}</span>`), el(`p`,`q`, d.title));
      c.append(el(`p`,`asks`, highlight(bestSentences(d, ASK.q, 1)[0] || ``, ASK.q)));
      l.append(c);
    });
    out.append(l);
  }
  out.append(askActions(ASK.q));
}
function askActions(q, noWeb){
  const r = el(`div`,`btnrow`);
  if (!noWeb) r.append(btn(`🌐 Buscar esto en la web`, `btn ghost`, () => { ASK.tab = `web`; renderView(); }));
  r.append(btn(`📝 Guardar en Mis dudas`, `btn ghost`, (e) => { if (!ASK.notes.some(n => n.q === q)){ ASK.notes.unshift({ q, d: new Date().toISOString().slice(0, 10), ok:false }); saveNotes(); } e.target.textContent = `✓ Guardada en Mis dudas`; e.target.disabled = true; }));
  return r;
}
function webView(q){
  const w = el(`div`,`list`);
  const ctx = `${q} química`;
  const enc = encodeURIComponent;
  const L = [
    [`Google`, `https://www.google.com/search?hl=es&q=${enc(ctx)}`, `Búsqueda general en español. Prefiere páginas de universidades (.edu), Khan Academy o libros.`],
    [`YouTube`, `https://www.youtube.com/results?search_query=${enc(q + ` química explicación`)}`, `Videos que lo explican. Revisa antes la pestaña Videos: ahí están los ya verificados.`],
    [`Wikipedia en español`, `https://es.wikipedia.org/w/index.php?search=${enc(q)}`, `Definiciones y contexto. Útil para conceptos, no tanto para ejercicios.`],
    [`Khan Academy en español`, `https://es.khanacademy.org/search?page_search_query=${enc(q)}`, `Explicaciones paso a paso y ejercicios de química.`]
  ];
  const c = el(`article`,`card plain`);
  c.append(el(`h3`,``, `Buscar: "${q.replace(/</g, `&lt;`)}"`), el(`p`,`muted`, `Se abre en una pestaña nueva. Necesita internet.`));
  L.forEach(([n, u, d]) => { const row = el(`div`,`webrow`); const a = el(`a`,`btn`, `Abrir en ${n}`); a.href = u; a.target = `_blank`; a.rel = `noopener`; row.append(a, el(`span`,`muted`, d)); c.append(row); });
  w.append(c);
  const tip = el(`article`,`card plain`);
  tip.innerHTML = `<h3>Cómo revisar lo que encuentres</h3><ul><li>Compara con el PDF del docente: si la web dice algo distinto, en el examen vale lo del material.</li><li>Desconfía de foros sin autor. Prefiere universidades, libros y canales educativos.</li><li>Si sigues con la duda, guárdala en <b>Mis dudas</b> y pregúntala en clase.</li></ul>`;
  w.append(tip, askActions(q, true));
  return w;
}
function notesView(){
  const w = el(`div`,`list`);
  const c = el(`article`,`card plain`);
  c.append(el(`h3`,``, `Mis dudas`), el(`p`,`muted`, `Guarda aquí lo que no entiendas para preguntarlo en clase o enviarlo. Se guarda solo en este navegador.`));
  const f = el(`form`,`askform`); f.innerHTML = `<label for="newnote">Nueva duda</label><div class="inrow"><input id="newnote" autocomplete="off" placeholder="Ej.: no entiendo cuándo se usa pOH"><button class="btn" type="submit">Guardar</button></div>`;
  f.onsubmit = e => { e.preventDefault(); const q = $(`#newnote`, f).value.trim(); if (!q) return; ASK.notes.unshift({ q, d: new Date().toISOString().slice(0, 10), ok:false }); saveNotes(); renderView(); };
  c.append(f);
  if (!ASK.notes.length){ c.append(el(`p`,`empty`, `Todavía no tienes dudas guardadas.`)); w.append(c); return w; }
  const ul = el(`ul`,`notes`);
  ASK.notes.forEach((n, i) => {
    const li = el(`li`, n.ok ? `done` : ``);
    li.append(el(`span`,`nq`, `${n.q.replace(/</g, `&lt;`)} <small class="muted">${n.d}</small>`));
    const r = el(`span`,`nbtn`);
    r.append(btn(`Buscar`, `tool`, () => { ASK.q = n.q; ASK.tab = `mat`; renderView(); }), btn(n.ok ? `Reabrir` : `✓ Resuelta`, `tool`, () => { n.ok = !n.ok; saveNotes(); renderView(); }), btn(`Borrar`, `tool`, () => { ASK.notes.splice(i, 1); saveNotes(); renderView(); }));
    li.append(r); ul.append(li);
  });
  c.append(ul);
  const pend = ASK.notes.filter(n => !n.ok);
  const txt = `Dudas de química (${hoy()}):\n` + pend.map((n, i) => `${i + 1}. ${n.q}`).join(`\n`);
  const row = el(`div`,`btnrow`); const msg = el(`span`,`muted`);
  const ta = el(`textarea`,`notesout`); ta.id = `notesout`; ta.readOnly = true; ta.value = txt; ta.rows = Math.min(8, pend.length + 2);
  row.append(btn(`Copiar dudas pendientes`, `btn`, async () => { try { await navigator.clipboard.writeText(txt); msg.textContent = `Copiadas. Pégalas en un mensaje.`; } catch(e){ ta.select(); msg.textContent = `Selecciona el texto de abajo y cópialo.`; } }), msg);
  c.append(el(`p`,`note`, `Envía la lista a quien te ayuda a estudiar o al docente. Con esas dudas se pueden agregar explicaciones nuevas a la página.`), row, ta);
  w.append(c);
  return w;
}
