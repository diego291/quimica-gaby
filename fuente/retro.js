/* ===================== RETROALIMENTACIÓN: MÓDULO ===================== */
const RF_TABS = [[`diag`,`Diagnóstico`],[`fallos`,`Mis fallos`],[`eval`,`Cómo evalúan`],[`sim`,`Simulacro`]];
const RFX = { on:false };
const RF_GENS_DOC = [`dilDoc`,`normDoc`,`pctDoc`,`molalDoc`,`baseDoc`,`acidG`,`bufDoc`,`espBuf`,`carbMix`];
const RF_DEBIL = [`enlace`,`inversion`,`bases`,`normalidad`,`unidades`,`lab`];
const rfEsc = s => String(s == null ? `` : s).replace(/[&<>"]/g, c => ({ '&':`&amp;`, '<':`&lt;`, '>':`&gt;`, '"':`&quot;` }[c]));
const rfS = () => { const x = S.x; const r = x.rf || (x.rf = {}); r.tab = r.tab || `diag`; r.box = r.box || {}; r.sims = r.sims || []; r.extra = r.extra || []; r.cls = r.cls || {}; r.fil = r.fil || { ev:``, ca:``, es:``, pat:`` }; return r; };
const rfEvOf = id => id === `sim` ? { n:`Simulacro`, corto:`Simulacro` } : (RF_EVALS.find(e => e.id === id) || { n:id, corto:id });
const rfAll = () => RF_FALLOS.concat(rfS().extra);
const rfCausaOf = f => rfS().cls[f.id] || f.causa || null;
const rfEstado = f => { const b = rfS().box[f.id]; if (!b) return `nuevo`; if (b.b >= 3) return `dominada`; return b.due <= todayStr() ? `hoy` : `proceso`; };
const RF_EST = { nuevo:`Por reintentar`, hoy:`Para repasar hoy`, proceso:`En proceso`, dominada:`Dominada` };
function rfSched(id, ok){ const r = rfS(); const b = r.box[id] || { b:0, n:0 }; b.n++; b.last = todayStr(); if (ok >= 1){ b.b = Math.min(3, b.b + 1); b.due = addDays(todayStr(), [1,3,7,14][b.b]); } else if (ok > 0){ b.due = addDays(todayStr(), 2); } else { b.b = 0; b.due = addDays(todayStr(), 1); } r.box[id] = b; save(); }
const rfDue = () => rfAll().filter(f => rfEstado(f) === `hoy`);
const rfFmtDia = f => { if (!f) return `fecha ilegible`; const d = pdate(f); return `${d.getDate()} ${MESES[d.getMonth()].slice(0, 3)}`; };
const rfLbl = it => { const t = it.t || (it.tm && RF_TEMAS[it.tm] ? RF_TEMAS[it.tm].t : null); return t && TOPICS[t] ? `${TOPICS[t].n} · ${TOPICS[t].name}` : it.tm && RF_TEMAS[it.tm] ? RF_TEMAS[it.tm].n : `Otros`; };
function rfLv(it){ if (it.lv) return it.lv; const q = String(it.q).toLowerCase();
  if (/calcul|cuánt|nombre iupac|elige el nombre|qué productos|clasific|qué tipo de|hibridaci|escribe la|determina/.test(q)) return `a`;
  if (/diferencia|por qué|explica|afirmaci|relaci|compar|cómo (afecta|act|se)|justific|razón|ventaja|según/.test(q)) return `c`;
  return `r`; }
const rfGoTema = t => { S.sel = new Set([t]); save(); go(`repaso`); };
const rfIni = () => { const o = RF_EVALS.slice().sort((a, b) => rfFechaOrd(a).localeCompare(rfFechaOrd(b))); return o; };

/* ---------- pieza común ---------- */
function rfSec(titulo, sub){ const c = el(`section`, `rfcard`); if (titulo) c.append(el(`h2`, ``, titulo)); if (sub) c.append(el(`p`, `muted rfsub`, sub)); return c; }
function rfBar(frac, col){ const b = el(`div`, `hbar`); b.append(el(`i`)); b.firstChild.style.cssText = `width:${Math.max(2, frac * 100)}%;background:${col}`; return b; }
const rfErrCol = e => e > .5 ? `var(--bad)` : e > .3 ? `#C77D12` : `var(--ok)`;
const rfPct = x => `${Math.round(x * 100)} %`;

/* ======================= VISTA PRINCIPAL ======================= */
function vRetro(v){
  const r = rfS();
  if (RFX.tick && !(RFX.on && !RFX.done)){ clearInterval(RFX.tick); RFX.tick = null; }
  const bar = el(`div`, `rftabs`); bar.setAttribute(`role`, `tablist`);
  RF_TABS.forEach(([k, n]) => { const b = btn(n, `rft`, () => { r.tab = k; save(); renderView(); topScroll(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, r.tab === k); if (k === `fallos`){ const d = rfDue().length; if (d) b.append(el(`i`, `rfn`, String(d))); } bar.append(b); });
  v.append(bar);
  ({ diag:rfDiag, fallos:rfFallos, eval:rfEval, sim:rfSim })[r.tab](v);
}

/* ======================= 1 · DIAGNÓSTICO ======================= */
function rfTimeline(ev){
  const W = 560, H = 214, pad = 30, bw = 52, gap = (W - pad * 2 - bw * ev.length) / (ev.length - 1), Y = n => 150 - n / 10 * 118;
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Notas de las ${ev.length} evaluaciones, de la más antigua a la más reciente">`;
  s += `<line x1="${pad - 14}" x2="${W - pad + 14}" y1="${Y(6)}" y2="${Y(6)}" class="rfpass"/><text x="${W - pad + 14}" y="${Y(6) - 5}" text-anchor="end" class="rftm">aprobado 6.0</text>`;
  ev.forEach((e, i) => { const x = pad + i * (bw + gap), h = e.nota / 10 * 118, tok = e.corto.split(` `), l1 = tok.length > 2 ? tok.slice(0, 2).join(` `) : tok[0], l2 = tok.length > 2 ? tok.slice(2).join(` `) : tok.slice(1).join(` `);
    s += `<rect x="${x}" y="${150 - h}" width="${bw}" height="${h}" rx="6" class="${e.nota >= 6 ? `rfbok` : `rfbno`}"/><text x="${x + bw / 2}" y="${150 - h - 6}" text-anchor="middle" class="rftb">${e.nota.toFixed(1)}</text>`
       + `<text x="${x + bw / 2}" y="168" text-anchor="middle" class="rftl">${rfEsc(l1)}</text><text x="${x + bw / 2}" y="181" text-anchor="middle" class="rftl">${rfEsc(l2)}</text><text x="${x + bw / 2}" y="196" text-anchor="middle" class="rftm">${rfEsc(rfFmtDia(e.f))}</text>`; });
  return s + `</svg>`;
}
function rfDiag(v){
  const ev = rfIni(), prom = ev.reduce((s, e) => s + e.nota, 0) / ev.length, mej = ev.slice().sort((a, b) => b.nota - a.nota)[0];
  const tem = rfPorTema(), niv = rfPorNivel(), cl = rfClaves(), c1 = rfSec(`Tu historial en ${ev.length} evaluaciones`, `Leí las fotos de tus exámenes, verifiqué cada nota con la suma de las marcas del docente y clasifiqué cada pregunta por tema, nivel y causa del error.`);
  const t1 = el(`div`, `rftl1`); const tv = el(`div`, `rftlv`); tv.innerHTML = rfTimeline(ev); const th = el(`div`, `rftlh`); th.setAttribute(`role`, `list`);
  ev.forEach(e => { const r = el(`div`, `rftlr`); r.setAttribute(`role`, `listitem`); r.innerHTML = `<span class="n">${rfEsc(e.n.length > 40 ? e.corto : e.n)}<small>${rfEsc(rfFmtDia(e.f))}</small></span><b class="${e.nota >= 6 ? `rfok` : `rfno`}">${e.nota.toFixed(1)}</b>`; const tk = el(`div`, `rftrack`); tk.append(rfBar(e.nota / 10, e.nota >= 6 ? `var(--ok)` : `var(--bad)`)); r.append(tk); th.append(r); });
  th.append(el(`p`, `rftm`, `La línea punteada marca el 6.0 para aprobar.`)); t1.append(tv, th); c1.append(t1);
  const k = el(`div`, `rfkpis`); const kp = (n, t) => el(`div`, `rfkpi`, `<b>${n}</b><span>${t}</span>`);
  k.append(kp(prom.toFixed(1), `promedio (aprobar es 6.0)`), kp(String(mej.nota.toFixed(1)), `mejor: ${rfEsc(mej.corto)}`), kp(String(rfAll().length), `preguntas falladas con análisis`)); c1.append(k); v.append(c1);

  const c2 = rfSec(`Lo que dicen los números`);
  const li = el(`ul`, `rfli`);
  li.append(el(`li`, ``, `<b>Tu punto débil es la comprensión, no el cálculo.</b> En las preguntas objetivas aciertas ${rfPct(niv.r.ok / niv.r.n)} en recuerdo, <b>${rfPct(niv.c.ok / niv.c.n)} en comprensión</b> y ${rfPct(niv.a.ok / niv.a.n)} en aplicación. Fallas más cuando hay que entender o comparar conceptos que cuando hay que calcular.`));
  li.append(el(`li`, ``, `<b>Dominas las plantillas de problemas.</b> Molaridad, % p/v, molalidad, dilución directa y balanceo: 8 de 8 correctos. Los problemas que fallas son los que cambian el planteamiento o exigen cuidado con las unidades.`));
  li.append(el(`li`, ``, `<b>Mejoraste en el laboratorio:</b> de 3.0 en el Lab 1 a 7.5 en el Lab 2 de ácidos y bases.`));
  li.append(el(`li`, ``, `<b>Cuando dudas, eliges A.</b> Fue tu respuesta en ${cl.falladas.A} de tus ${cl.falladas.n} errores objetivos (${rfPct(cl.falladas.A / cl.falladas.n)}), pero la clave del docente es A en solo ${cl.claves.A} de ${cl.claves.n} preguntas (${rfPct(cl.claves.A / cl.claves.n)}). B y C suman ${cl.claves.B + cl.claves.C} de ${cl.claves.n} (${rfPct((cl.claves.B + cl.claves.C) / cl.claves.n)}). <i>Es una muestra pequeña: úsalo como alerta para releer cuando eliges A por duda, no para adivinar.</i>`));
  c2.append(li); v.append(c2);

  const c3 = rfSec(`Dónde más fallas, por tema`, `Porcentaje de error en tus evaluaciones, ordenado del más alto al más bajo.`);
  tem.forEach(t => { const T = RF_TEMAS[t.tm], row = el(`div`, `rftr`); row.innerHTML = `<span class="rftn">${T.n}</span><span class="rftv">${rfPct(t.err)}</span><span class="rfts">${nf(t.ok, 1)} de ${t.n}</span>`; row.insertBefore(rfBar(t.err, rfErrCol(t.err)), row.children[1]);
    if (T.t && TOPICS[T.t]){ const g = btn(`Estudiar`, `rfgo`, () => rfGoTema(T.t)); g.setAttribute(`aria-label`, `Estudiar ${T.n} en la app`); row.append(g); } else row.append(el(`span`, `rfnoapp`, `aún no en la app`)); c3.append(row); });
  v.append(c3);

  const c4 = rfSec(`Por qué fallas: causas`, `Cada pregunta fallada tiene una causa. Toca una para ver cómo reconocerla y corregirla.`);
  const cnt = {}; rfAll().forEach(f => { const c = rfCausaOf(f); if (c) cnt[c] = (cnt[c] || 0) + 1; }); const mx = Math.max(...Object.values(cnt));
  Object.entries(cnt).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => { const C = RF_CAUSAS[k], d = el(`details`, `rfdet`); const sm = el(`summary`, ``, `<span class="rfce" style="background:${C.col}">${C.e}</span><b>${C.n}</b><span class="rfcn">${n}</span>`); sm.insertBefore(rfBar(n / mx, C.col), sm.lastChild);
    d.append(sm, el(`div`, `rfdb`, `<p><b>Qué es:</b> ${C.def}</p><p><b>Cómo se reconoce:</b> ${C.senal}</p><p><b>Cómo corregirlo:</b> ${C.fix}</p>`)); c4.append(d); });
  v.append(c4);

  const c5 = rfSec(`Tus ${RF_PATRONES.length} patrones y cómo corregirlos`, `Lo que se repite entre evaluaciones. Cada uno trae pasos concretos, su regla de oro y ejercicios para practicarlo.`);
  RF_PATRONES.forEach((p, i) => { const d = el(`details`, `rfdet rfpat`); if (i === 0) d.open = true;
    d.append(el(`summary`, ``, `<span class="rfpi">${i + 1}</span><b>${p.n}</b><span class="rfcn">${p.falla.length} fallos</span>`));
    const b = el(`div`, `rfdb`); b.append(el(`p`, `rfev`, `<b>Dónde pasó:</b> ${p.ev}.`), el(`p`, ``, `<b>Por qué ocurre:</b> ${p.por}`)); b.append(el(`p`, `rfh`, `<b>Cómo corregirlo</b>`));
    const ol = el(`ol`, `rfol`); p.fix.forEach(x => ol.append(el(`li`, ``, x))); b.append(ol, el(`p`, `rforo`, `<b>Regla de oro:</b> ${p.oro}`));
    const row = el(`div`, `btnrow`); row.append(btn(`Ver mis ${p.falla.length} fallos`, `btn ghost`, () => { const r = rfS(); r.fil = { ev:``, ca:``, es:``, pat:p.id }; r.tab = `fallos`; save(); renderView(); topScroll(); }));
    if (p.doc) row.append(btn(`Practicar este patrón`, `btn`, () => rfStartRefuerzo(p)));
    b.append(row); d.append(b); c5.append(d); });
  v.append(c5);
}

/* ======================= 2 · MIS FALLOS ======================= */
function rfFiltrar(){
  const r = rfS(), f = r.fil, pat = f.pat ? RF_PATRONES.find(p => p.id === f.pat) : null;
  return rfAll().filter(x => (!f.ev || x.ev === f.ev) && (!f.ca || rfCausaOf(x) === f.ca) && (!f.es || rfEstado(x) === f.es) && (!pat || pat.falla.includes(x.id)));
}
function rfFallos(v){
  const r = rfS(), f = r.fil, todos = rfAll(), due = rfDue();
  const c0 = rfSec(`Mis fallos`, `Cada pregunta que fallaste, con lo que contestaste, la respuesta correcta, por qué fallaste y cómo evitarlo. Reinténtalas: las que aciertas vuelven a salir en 1, 3, 7 y 14 días hasta quedar dominadas.`);
  const ds = todos.filter(x => rfEstado(x) === `dominada`).length, row = el(`div`, `rfkpis`); const kp = (n, t) => el(`div`, `rfkpi`, `<b>${n}</b><span>${t}</span>`);
  row.append(kp(String(todos.length), `fallos en total`), kp(String(due.length), `para repasar hoy`), kp(String(ds), `dominados`)); c0.append(row);
  const act = el(`div`, `btnrow`);
  if (due.length) act.append(btn(`Repasar los ${due.length} de hoy`, `btn`, () => rfStartFallos(due)));
  act.append(btn(`Repasar 10 al azar`, `btn ghost`, () => rfStartFallos(shuf(todos.filter(x => rfEstado(x) !== `dominada`)).slice(0, 10))));
  c0.append(act);
  const fl = el(`div`, `rffil`); const sel = (lab, key, opts) => { const w = el(`label`, `rfsel`); w.append(el(`span`, ``, lab)); const s = el(`select`); opts.forEach(([val, t]) => { const o = el(`option`, ``, t); o.value = val; if (f[key] === val) o.selected = true; s.append(o); }); s.onchange = () => { f[key] = s.value; save(); renderView(); }; w.append(s); return w; };
  fl.append(sel(`Evaluación`, `ev`, [[``, `Todas`]].concat(RF_EVALS.map(e => [e.id, e.corto]), r.extra.length ? [[`sim`, `Simulacros`]] : [])),
    sel(`Causa`, `ca`, [[``, `Todas`]].concat(Object.entries(RF_CAUSAS).map(([k, c]) => [k, c.n]))),
    sel(`Estado`, `es`, [[``, `Todos`]].concat(Object.entries(RF_EST).map(([k, t]) => [k, t]))),
    sel(`Patrón`, `pat`, [[``, `Todos`]].concat(RF_PATRONES.map(p => [p.id, p.n.length > 34 ? p.n.slice(0, 33) + `…` : p.n])))); c0.append(fl); v.append(c0);
  const lista = rfFiltrar();
  if (!lista.length){ v.append(el(`div`, `empty`, `No hay fallos con esos filtros.`)); return; }
  v.append(el(`p`, `muted rfcount`, `${lista.length} fallo${lista.length === 1 ? `` : `s`}`));
  lista.forEach(x => v.append(rfFalloCard(x)));
}
function rfLetra(i){ return LET[i]; }
function rfFalloCard(f){
  const ev = rfEvOf(f.ev), T = RF_TEMAS[f.tm], causa = rfCausaOf(f), C = causa ? RF_CAUSAS[causa] : null, est = rfEstado(f);
  const c = el(`article`, `rffa`); c.style.setProperty(`--cc`, C ? C.col : `var(--line2)`);
  const h = btn(``, `rffh`); h.setAttribute(`aria-expanded`, `false`);
  h.innerHTML = `<span class="rffe">${rfEsc(ev.corto)} · ${f.ev === `sim` ? rfEsc(f.fecha || ``) : `#${f.n}`}</span><span class="rffq">${rfEsc(f.q)}</span><span class="rffm"><i class="rfchip" style="background:${C ? C.col : `var(--muted)`}">${C ? C.e + ` ` + C.n : `Por clasificar`}</i><i class="rfst rfst-${est}">${RF_EST[est]}</i></span>`;
  const b = el(`div`, `rffb`); b.hidden = true; let built = false;
  h.onclick = () => { const open = b.hidden; b.hidden = !open; h.setAttribute(`aria-expanded`, open); if (open && !built){ built = true; rfFalloBody(b, f, T); } };
  c.append(h, b); return c;
}
function rfFalloBody(b, f, T){
  b.innerHTML = ``;
  b.append(el(`p`, `rffq2`, `<b>Pregunta:</b> ${rfEsc(f.q)}`));
  if (f.o){
    const ul = el(`div`, `opts`);
    f.o.forEach((t, i) => { const cl = i === f.cl, pos = f.cl == null && f.pos && f.pos.includes(i), mine = i === f.el; const o = el(`div`, `opt${cl ? ` right` : ``}${mine && !cl ? ` wrong` : ``}`, `<span class="k">${rfLetra(i)}</span><span>${rfEsc(t)}${mine ? ` <em class="rfmine">tu respuesta</em>` : ``}${cl ? ` <em class="rfkey">clave${f.conf === `media` ? ` (probable)` : ``}</em>` : ``}${pos ? ` <em class="rfkey">clave posible</em>` : ``}</span>`); ul.append(o); });
    b.append(ul);
    if (f.conf === `media`) b.append(el(`p`, `rfwarn`, `La clave la deduje por química y por la marca del docente; no es una clave oficial. Confírmala con tu docente.`));
    if (f.conf === `sin`) b.append(el(`p`, `rfwarn`, `No pude confirmar la clave de esta pregunta. Pregúntale al docente cuál marcó.`));
  } else {
    b.append(el(`p`, ``, `<b>Lo que contestaste:</b> ${rfEsc(f.resp)}`), el(`p`, `rfref`, `<b>Respuesta correcta:</b> ${rfEsc(f.ref)}`));
  }
  b.append(el(`p`, `rfpor`, `<b>Por qué fallaste:</b> ${rfEsc(f.por)}`));
  if (f.tip) b.append(el(`p`, `rftip`, `<b>Cómo evitarlo:</b> ${rfEsc(f.tip)}`));
  if (!f.causa || f.ev === `sim`){ const w = el(`label`, `rfsel inl`); w.append(el(`span`, ``, `Causa del error`)); const s = el(`select`); [[``, `Por clasificar`]].concat(Object.entries(RF_CAUSAS).map(([k, c]) => [k, c.n])).forEach(([val, t]) => { const o = el(`option`, ``, t); o.value = val; if ((rfCausaOf(f) || ``) === val) o.selected = true; s.append(o); }); s.onchange = () => { rfS().cls[f.id] = s.value; save(); }; w.append(s); b.append(w); }
  const row = el(`div`, `btnrow`), slot = el(`div`, `rfretry`);
  const puede = f.o ? f.cl != null : true;
  if (puede) row.append(btn(`Reintentar`, `btn`, () => { row.hidden = true; rfRetry(slot, f, () => { row.hidden = false; rfFalloBody(b, f, T); const card = b.closest(`.rffa`); if (card) { const st = card.querySelector(`.rfst`); if (st){ const e = rfEstado(f); st.className = `rfst rfst-${e}`; st.textContent = RF_EST[e]; } } }); }));
  if (f.fam){ const g = GENS.find(x => x.id === f.fam); if (g) row.append(btn(`Practicar esta familia`, `btn ghost`, () => { S.sel.add(g.t); PR.gen = g; PR.cur = null; PR.rand = false; save(); go(`practica`); })); }
  if (T && T.t && TOPICS[T.t]) row.append(btn(`Ver el tema en la app`, `btn ghost`, () => rfGoTema(T.t)));
  b.append(row, slot);
}
function rfRetry(slot, f, done){
  slot.innerHTML = ``;
  const fin = (ok, extra) => { rfSched(f.id, ok); slot.append(el(`div`, `fb ${ok >= 1 ? `ok` : ok > 0 ? `ok` : `no`}`, `<strong>${ok >= 1 ? `¡Bien!` : ok > 0 ? `A medias.` : `Todavía no.`}</strong> ${extra || ``}`)); slot.append(btn(`Listo`, `btn ghost`, done)); };
  if (f.o){
    slot.append(el(`p`, `q`, rfEsc(f.q))); const o = shuf(f.o.map((t, i) => ({ t, ok:i === f.cl }))), box = el(`div`, `opts`);
    o.forEach((x, i) => { const bt = el(`button`, `opt`, `<span class="k">${LET[i]}</span><span>${rfEsc(x.t)}</span>`); bt.type = `button`; bt.onclick = () => { [...box.children].forEach((y, j) => { y.disabled = true; if (o[j].ok) y.classList.add(`right`); else if (y !== bt) y.classList.add(`dim`); }); if (!x.ok) bt.classList.add(`wrong`); fin(x.ok ? 1 : 0, x.ok ? rfEsc(f.tip || ``) : `La respuesta es: ${rfEsc(o.find(y => y.ok).t)}. ${rfEsc(f.tip || ``)}`); }; box.append(bt); }); slot.append(box); return;
  }
  slot.append(el(`p`, `q`, rfEsc(f.q)));
  const ta = el(`textarea`, `rfta`); ta.rows = 3; ta.placeholder = `Escribe tu respuesta o piénsala antes de ver la correcta`; ta.setAttribute(`aria-label`, `Tu respuesta`); slot.append(ta);
  const rv = btn(`Ver la respuesta correcta`, `btn`, () => { rv.hidden = true; ta.disabled = true; slot.append(el(`p`, `rfref`, `<b>Respuesta correcta:</b> ${rfEsc(f.ref)}`)); const q = el(`div`, `btnrow`); q.append(el(`span`, `muted`, `¿La tenías?`), btn(`Sí, completa`, `btn ok`, () => { q.remove(); fin(1, ``); }), btn(`A medias`, `btn ghost`, () => { q.remove(); fin(.5, ``); }), btn(`No`, `btn ghost`, () => { q.remove(); fin(0, rfEsc(f.tip || ``)); })); slot.append(q); }); slot.append(rv);
}

/* ======================= 3 · CÓMO EVALÚAN ======================= */
function rfEval(v){
  const c1 = rfSec(`Cómo es cada evaluación`, `Lo que observé en tus 6 evaluaciones.`);
  RF_PERFIL.estructura.forEach(e => c1.append(el(`div`, `rfest`, `<b>${e.n}</b><p>${e.d}</p>`)));
  const tb = el(`div`, `scroll`); tb.innerHTML = `<table class="tbl"><thead><tr><th>Evaluación</th><th>Fecha</th><th>Preguntas</th><th>Tiempo</th><th>Tu nota</th></tr></thead><tbody>${rfIni().map(e => `<tr><td>${rfEsc(e.n)}</td><td>${rfEsc(rfFmtDia(e.f))}</td><td>${e.nq}</td><td>${e.dur}</td><td><b>${e.nota.toFixed(1)}</b></td></tr>`).join(``)}</tbody></table>`; c1.append(tb); v.append(c1);

  const niv = rfPorNivel(), nt = niv.r.n + niv.c.n + niv.a.n, c2 = rfSec(`Qué nivel piden las preguntas objetivas`, `Clasifiqué las ${nt} preguntas objetivas por lo que exigen: recordar un dato, comprender un concepto o aplicarlo. Este es el perfil que usa el simulacro.`);
  [[`r`,`Recuerdo`,`un dato o definición`],[`c`,`Comprensión`,`comparar, explicar o relacionar`],[`a`,`Aplicación`,`calcular, clasificar o predecir`]].forEach(([k, n, d]) => { const x = niv[k], row = el(`div`, `rftr rfniv`); row.innerHTML = `<span class="rftn"><b>${n}</b><small>${d}</small></span><span class="rftv">${rfPct(x.n / nt)} de las preguntas</span><span class="rfts">tu acierto: <b>${rfPct(x.ok / x.n)}</b></span>`; row.insertBefore(rfBar(x.n / nt, `var(--acc)`), row.children[1]); c2.append(row); });
  c2.append(el(`p`, `muted`, `Además, el docente suma una parte de problemas, que siempre son de aplicación. Tu mayor pérdida está en comprensión.`)); v.append(c2);

  const c3 = rfSec(`Cómo redacta las preguntas`);
  const ul = el(`ul`, `rfli`); RF_PERFIL.estilos.forEach(x => ul.append(el(`li`, ``, rfEsc(x)))); c3.append(ul); v.append(c3);

  const c4 = rfSec(`Las trampas de las opciones`, `Las opciones incorrectas no son al azar: siguen patrones. Toca uno para ver un ejemplo real de tu examen.`);
  RF_PERFIL.distractores.forEach(d => { const f = RF_FALLO(d.ej), det = el(`details`, `rfdet`); det.append(el(`summary`, ``, `<b>${d.t}</b><span class="rfcn">${f ? rfEvOf(f.ev).corto + ` #` + f.n : ``}</span>`));
    const b = el(`div`, `rfdb`); b.append(el(`p`, ``, rfEsc(d.d)));
    if (f){ b.append(el(`p`, `rffq2`, `<b>${rfEsc(f.q)}</b>`)); const o = el(`div`, `opts`); f.o.forEach((t, i) => o.append(el(`div`, `opt${i === f.cl ? ` right` : i === f.el ? ` wrong` : ``}`, `<span class="k">${LET[i]}</span><span>${rfEsc(t)}${i === f.el ? ` <em class="rfmine">tu respuesta</em>` : ``}${i === f.cl ? ` <em class="rfkey">clave</em>` : ``}</span>`))); b.append(o); }
    b.append(el(`p`, `rftip`, rfEsc(d.ex))); det.append(b); c4.append(det); });
  v.append(c4);

  const c5 = rfSec(`Los problemas que se repiten`, `El docente reutiliza las mismas plantillas con otros números. Dominar estas ${RF_FAMILIAS.length} familias cubre casi todos los problemas.`);
  RF_FAMILIAS.forEach(fm => { const row = el(`div`, `rffam`); row.append(el(`div`, ``, `<b>${fm.n}</b><span>${fm.ap}</span>`)); const g = fm.gen && GENS.find(x => x.id === fm.gen); if (g) row.append(btn(`Practicar`, `btn ghost`, () => { S.sel.add(g.t); PR.gen = g; PR.cur = null; PR.rand = false; save(); go(`practica`); })); c5.append(row); }); v.append(c5);

  const cl = rfClaves(), c6 = rfSec(`Dónde cae la respuesta correcta`, `De ${cl.claves.n} preguntas con clave conocida y de tus ${cl.falladas.n} errores objetivos. Muestra pequeña: es una alerta, no una regla.`);
  ['A','B','C','D'].forEach(L => { const row = el(`div`, `rftr rfniv`); row.innerHTML = `<span class="rftn"><b>${L}</b></span><span class="rftv">clave: ${cl.claves[L]} (${rfPct(cl.claves[L] / cl.claves.n)})</span><span class="rfts">tus errores: <b>${cl.falladas[L]}</b></span>`; row.insertBefore(rfBar(cl.claves[L] / cl.claves.n, `var(--acc)`), row.children[1]); c6.append(row); });
  c6.append(el(`p`, `muted`, `Cuando dudas tiendes a elegir A, que casi nunca es la clave. Si notas que vas a marcar A por duda, relee la pregunta una vez más.`)); v.append(c6);

  const c7 = rfSec(`Lo que probablemente viene`); const u = el(`ul`, `rfli`); RF_PERFIL.siguiente.forEach(x => u.append(el(`li`, ``, rfEsc(x)))); c7.append(u);
  const rb = el(`div`, `btnrow`); rb.append(btn(`Simulacro de hidrocarburos (tipo guía)`, `btn`, () => { const r = rfS(); r.tab = `sim`; r.cfg = Object.assign(rfCfg(), { temas:[`h`] }); save(); renderView(); topScroll(); })); c7.append(rb); v.append(c7);
}

/* ======================= 4 · SIMULACRO ======================= */
const RF_GRUPOS = [
  { k:`u45`, n:`Unidades 4–5 · soluciones y ácido-base`, ts:[`t15`,`t16`,`t17`,`t18`,`t19`,`t20`,`t21`] },
  { k:`u13`, n:`Unidades 1–3 · átomo, enlace y laboratorio (refuerzo)`, ts:[`u13`] },
  { k:`h`, n:`Hidrocarburos`, ts:[`t22`,`t23`,`t24`,`t25`,`t26`] },
  { k:`ox`, n:`Funciones oxigenadas`, ts:[`t27`,`t28`,`t30`,`t31`,`t32`] }
];
const RF_MODOS = {
  parcial:{ n:`Parcial`, d:`20 preguntas objetivas y 10 problemas, como el Parcial 2. Se califica sobre 10.`, min:60 },
  corto:{ n:`Corto`, d:`10 preguntas de respuesta corta, cálculo y objetivas, 1 punto cada una, como los cortos de laboratorio.`, min:30 }
};
const rfCfg = () => { const r = rfS(); r.cfg = r.cfg || { modo:`parcial`, temas:[`u45`], debil:true }; return r.cfg; };
const rfTemasSel = cfg => { const s = new Set(); cfg.temas.forEach(k => { const g = RF_GRUPOS.find(x => x.k === k); if (g) g.ts.forEach(t => s.add(t)); }); return s; };

function rfSim(v){
  if (RFX.on){ if (RFX.done) rfResultado(v); else rfExamen(v); return; }
  const r = rfS(), cfg = rfCfg();
  const c = rfSec(`Simulacro con la dificultad del docente`, `Arma un examen con la estructura de tus parciales y cortos: mismas proporciones de recuerdo, comprensión y aplicación, y problemas con las plantillas que el docente repite. Usa los temas que hay cargados en la app, incluidos los nuevos que vayas agregando.`);
  const m = el(`div`, `rfmodos`);
  Object.entries(RF_MODOS).forEach(([k, M]) => { const b = btn(`<b>${M.n}</b><span>${M.d}</span><small>${M.min} min</small>`, `rfmodo`, () => { cfg.modo = k; save(); renderView(); }); b.setAttribute(`aria-pressed`, cfg.modo === k); m.append(b); }); c.append(m);
  c.append(el(`h3`, `rfh3`, `Temas`)); const ch = el(`div`, `rfchips`);
  RF_GRUPOS.forEach(g => { const n = rfConteo(g), on = cfg.temas.includes(g.k); const b = btn(`${on ? `✓ ` : ``}${g.n}<small>${n} preguntas · ${rfConteoGen(g)} generadores</small>`, `rfchipb`, () => { const i = cfg.temas.indexOf(g.k); if (i >= 0){ if (cfg.temas.length > 1) cfg.temas.splice(i, 1); } else cfg.temas.push(g.k); save(); renderView(); }); b.setAttribute(`aria-pressed`, on); ch.append(b); }); c.append(ch);
  const dw = el(`label`, `rfcheck`); const cb = el(`input`); cb.type = `checkbox`; cb.checked = !!cfg.debil; cb.onchange = () => { cfg.debil = cb.checked; save(); }; dw.append(cb, el(`span`, ``, `<b>Reforzar mis puntos débiles</b> <small>Más preguntas de enlace, inversión de sentido, bases, normalidad, unidades y laboratorio.</small>`)); c.append(dw);
  const row = el(`div`, `btnrow`); row.append(btn(`Empezar simulacro`, `btn`, () => rfStartSim(cfg))); c.append(row); v.append(c);
  if (r.sims.length){ const h = rfSec(`Tus últimos simulacros`); r.sims.slice(-6).reverse().forEach(s => h.append(el(`div`, `rfhist`, `<span>${rfEsc(s.d)} · ${rfEsc(s.n)}</span><b class="${s.nota >= 6 ? `rfok` : `rfno`}">${s.nota.toFixed(1)}</b><span class="muted">${nf(s.pts, 1)}/${s.tot}</span>`))); v.append(h); }
}
function rfPoolObj(sel, debil){
  const all = sel.has(`*`), mc = ALL.MCQ.filter(x => all || sel.has(x.t)).map(x => ({ src:x, doc:false, lv:rfLv(x), w:1 }));
  const dc = RF_DOCS().filter(x => all || (x.t ? sel.has(x.t) : sel.has(`u13`))).map(x => ({ src:x, doc:true, lv:x.lv || rfLv(x), w:debil && RF_DEBIL.includes(x.rf) ? 3 : 1 }));
  return mc.concat(dc);
}
const rfGensSel = sel => GENS.filter(g => sel.has(`*`) || sel.has(g.t) || (g.ts || []).some(t => sel.has(t)));
const rfConteo = g => rfPoolObj(new Set(g.ts), false).length;
const rfConteoGen = g => rfGensSel(new Set(g.ts)).length;
function rfWPick(arr, n){ const a = arr.slice(), out = []; const vistos = new Set(); while (out.length < n && a.length){ const tot = a.reduce((s, x) => s + x.w, 0); let t = Math.random() * tot, i = 0; for (; i < a.length - 1; i++){ t -= a[i].w; if (t <= 0) break; } const x = a.splice(i, 1)[0]; if (vistos.has(x.src.q)) continue; vistos.add(x.src.q); out.push(x); } return out; }
function rfObjItem(p){ const it = p.src; const opts = shuf(it.o.map((t, i) => ({ t, ok:i === 0 }))); return { k:`o`, id:it.id || `D${hash(it.q)}`, q:it.q, opts, e:it.e || ``, src:it.src || ``, t:it.t || null, tm:it.tm || null, lbl:rfLbl(it), lv:p.lv, pick:null, mcq:!!it.id && it.id[0] === `M`, rf:it.rf || null }; }
function rfGenItem(g, soloNum){
  for (let i = 0; i < 6; i++){ const P = g.make(); if (P.opts){ if (soloNum) continue; return { k:`o`, id:`G_${g.id}`, q:P.q, opts:P.opts.map((t, j) => ({ t, ok:j === P.correct })), e:(P.pasos || []).join(` `), src:g.src, t:g.t, lbl:rfLbl({ t:g.t }), lv:`a`, pick:null, gen:g.id }; }
    return { k:`n`, id:`G_${g.id}`, gid:g.id, q:P.q, unit:P.unit || ``, ans:P.ans, rel:P.rel, abs:P.abs, pasos:P.pasos || [], r:P.r, src:g.src, t:g.t, lbl:rfLbl({ t:g.t }), lv:`a`, val:``, gen:g.id }; }
  return null;
}
function rfAbiItem(x, tipo){ return { k:`a`, id:`A${hash(x.q)}`, q:x.q, a:x.a, kw:x.k || [], src:x.src || ``, t:x.t || null, tm:x.tm || null, lbl:rfLbl(x), lv:`c`, val:``, grade:null }; }
function rfPickGens(sel, n, debil){
  const gs = rfGensSel(sel); if (!gs.length || n <= 0) return [];
  const pref = debil ? shuf(gs.filter(g => RF_GENS_DOC.includes(g.id))) : [];
  const orden = pref.concat(shuf(gs.filter(g => !pref.includes(g)))), out = [];
  let guard = 0;
  while (out.length < n && orden.length && guard++ < n * 8){ const g = orden[out.length % orden.length]; const it = rfGenItem(g, true); if (it) out.push(it); else orden.splice(orden.indexOf(g), 1); }
  return out;
}
function rfStartSim(cfg){
  const sel = rfTemasSel(cfg), pool = rfPoolObj(sel, cfg.debil), M = RF_MODOS[cfg.modo]; let items = [];
  if (cfg.modo === `parcial`){
    const cuota = { r:8, c:8, a:4 }, usados = new Set(); let obj = [];
    Object.entries(cuota).forEach(([lv, n]) => { const sub = rfWPick(pool.filter(p => p.lv === lv), n); sub.forEach(p => { obj.push(p); usados.add(p.src.q); }); });
    if (obj.length < 20){ const resto = pool.filter(p => !usados.has(p.src.q)); obj = obj.concat(rfWPick(resto, 20 - obj.length)); }
    items = shuf(obj).map(rfObjItem); const probs = rfPickGens(sel, 10, cfg.debil); items = items.concat(probs);
  } else {
    const ab = rfWPick(RF_ABIS().filter(x => (sel.has(`*`) || (x.t ? sel.has(x.t) : sel.has(`u13`)))).map(x => ({ src:x, w:cfg.debil && RF_DEBIL.includes(x.rf) ? 3 : 1 })), 4).map(p => rfAbiItem(p.src));
    const ab2 = ab.length < 4 ? rfWPick(ALL.ABIERTAS.filter(x => sel.has(x.t)).map(x => ({ src:x, w:1 })), 4 - ab.length).map(p => rfAbiItem(p.src)) : [];
    const nu = rfPickGens(sel, 3, cfg.debil), ob = rfWPick(pool, 3).map(rfObjItem);
    items = shuf(ab.concat(ab2, ob)).concat(nu);
  }
  if (!items.length){ alert(`No hay preguntas para esos temas. Elige otro grupo.`); return; }
  const nota = cfg.modo === `parcial` ? `Parcial` : `Corto`;
  Object.assign(RFX, { on:true, done:false, modo:cfg.modo, nombre:nota, items, i:0, t0:Date.now(), limit:M.min * 60, simIdx:null, refuerzo:null }); rfTick(); renderView(); topScroll();
}
function rfStartRefuerzo(p){
  const docs = rfWPick(RF_DOCS().filter(x => x.rf === p.doc).map(x => ({ src:x, lv:x.lv, w:1 })), 8).map(rfObjItem);
  const g = p.gen && GENS.find(x => x.id === p.gen); const probs = g ? [rfGenItem(g, true), rfGenItem(g, true)].filter(Boolean) : [];
  const items = docs.concat(probs); if (!items.length) return;
  const r = rfS(); r.tab = `sim`; save();
  Object.assign(RFX, { on:true, done:false, modo:`refuerzo`, nombre:`Refuerzo: ${p.n}`, items, i:0, t0:Date.now(), limit:0, simIdx:null }); renderView(); topScroll();
}
function rfFalloItem(f){
  if (f.o){ const o = shuf(f.o.map((t, i) => ({ t, ok:i === f.cl }))); return { k:`o`, id:f.id, q:f.q, opts:o, e:`${f.por} ${f.tip || ``}`, src:`${rfEvOf(f.ev).corto}, #${f.n}`, t:null, lbl:rfLbl({ tm:f.tm }), lv:`c`, pick:null, fallo:f.id }; }
  const g = f.fam && GENS.find(x => x.id === f.fam); if (g){ const it = rfGenItem(g, true); if (it){ it.fallo = f.id; it.src = `${rfEvOf(f.ev).corto}, #${f.n} (con números nuevos)`; return it; } }
  return { k:`a`, id:f.id, q:f.q, a:f.ref, kw:[], src:`${rfEvOf(f.ev).corto}, #${f.n}`, t:null, lbl:rfLbl({ tm:f.tm }), lv:`c`, val:``, grade:null, fallo:f.id, tip:f.tip };
}
function rfStartFallos(lista){
  const ok = lista.filter(f => !f.o || f.cl != null); if (!ok.length) return;
  const r = rfS(); r.tab = `sim`; save();
  Object.assign(RFX, { on:true, done:false, modo:`fallos`, nombre:`Repaso de mis fallos`, items:ok.map(rfFalloItem), i:0, t0:Date.now(), limit:0, simIdx:null }); renderView(); topScroll();
}
function rfTick(){ if (RFX.tick) clearInterval(RFX.tick); if (!RFX.limit) return; RFX.tick = setInterval(() => { const t = $(`#rftimer`); if (!t || !RFX.on || RFX.done){ clearInterval(RFX.tick); RFX.tick = null; return; } const left = Math.max(0, RFX.limit - Math.round((Date.now() - RFX.t0) / 1000)); t.textContent = `${Math.floor(left / 60)}:${pad2(left % 60)}`; t.classList.toggle(`rflow`, left < 300); if (left <= 0){ clearInterval(RFX.tick); RFX.tick = null; rfEntregar(true); } }, 1000); }

/* ---------- pantalla de examen ---------- */
const rfRespondida = it => it.k === `o` ? it.pick != null : it.val != null && String(it.val).trim() !== ``;
function rfExamen(v){
  const X = RFX, n = X.items.length, it = X.items[X.i], c = el(`section`, `rfcard rfex`);
  const nObj = X.items.filter(x => x.k === `o`).length, parte = X.modo === `parcial` ? (it.k === `o` ? `Parte I · objetiva` : `Parte II · problemas`) : X.nombre;
  const top = el(`div`, `rfextop`); top.append(el(`div`, ``, `<b>${rfEsc(parte)}</b><span>Pregunta ${X.i + 1} de ${n}</span>`));
  if (X.limit){ const left = Math.max(0, X.limit - Math.round((Date.now() - X.t0) / 1000)); top.append(el(`div`, `rftime`, `<span>Tiempo</span><b id="rftimer">${Math.floor(left / 60)}:${pad2(left % 60)}</b>`)); }
  c.append(top);
  const nav = el(`div`, `rfnav`); X.items.forEach((x, i) => { const b = btn(String(i + 1), `rfq${rfRespondida(x) ? ` ok` : ``}${i === X.i ? ` cur` : ``}`, () => { X.i = i; renderView(); }); b.setAttribute(`aria-label`, `Ir a la pregunta ${i + 1}${rfRespondida(x) ? ` (respondida)` : ``}`); if (i === X.i) b.setAttribute(`aria-current`, `true`); nav.append(b); }); c.append(nav);
  const card = el(`div`, `rfqc`); card.append(el(`div`, `meta`, `<span class="rfmeta">${rfEsc(it.lbl)}</span>`), el(`p`, `q`, `<span class="qn">${X.i + 1}.</span> ${rfEsc(it.q)}`));
  if (it.k === `o`){ const box = el(`div`, `opts`); it.opts.forEach((o, i) => { const b = el(`button`, `opt${it.pick === i ? ` picked` : ``}`, `<span class="k">${LET[i]}</span><span>${rfEsc(o.t)}</span>`); b.type = `button`; b.setAttribute(`aria-pressed`, it.pick === i); b.onclick = () => { it.pick = i; [...box.children].forEach((y, j) => { y.classList.toggle(`picked`, j === i); y.setAttribute(`aria-pressed`, j === i); }); const q = nav.children[X.i]; if (q) q.classList.add(`ok`); }; box.append(b); }); card.append(box); }
  else if (it.k === `n`){ const w = el(`div`, `ansrow`); w.innerHTML = `<label for="rfans">Tu respuesta${it.unit ? ` (${rfEsc(it.unit)})` : ``}</label><div class="inrow"><input id="rfans" inputmode="decimal" autocomplete="off" placeholder="Escribe solo el número" value="${rfEsc(it.val)}"></div><p class="muted">Acepta 0.0034, 3.4e-3 o 3.4x10^-3. Deja el planteamiento en tu cuaderno.</p>`; card.append(w); const inp = $(`#rfans`, w); inp.oninput = () => { it.val = inp.value; const q = nav.children[X.i]; if (q) q.classList.toggle(`ok`, rfRespondida(it)); }; }
  else { const ta = el(`textarea`, `rfta`); ta.rows = 5; ta.placeholder = `Escribe tu respuesta como la escribirías en el examen`; ta.value = it.val; ta.setAttribute(`aria-label`, `Tu respuesta`); ta.oninput = () => { it.val = ta.value; const q = nav.children[X.i]; if (q) q.classList.toggle(`ok`, rfRespondida(it)); }; card.append(ta); card.append(el(`p`, `muted`, `Al entregar verás la respuesta modelo y te calificas tú misma.`)); }
  c.append(card);
  const row = el(`div`, `btnrow rfexrow`); const prev = btn(`← Anterior`, `btn ghost`, () => { X.i--; renderView(); topScroll(); }); prev.disabled = X.i === 0; row.append(prev);
  if (X.i < n - 1) row.append(btn(`Siguiente →`, `btn`, () => { X.i++; renderView(); topScroll(); })); else row.append(btn(`Entregar`, `btn ok`, () => rfEntregar(false)));
  row.append(btn(`Entregar ahora`, `btn ghost`, () => rfEntregar(false))); c.append(row); v.append(c);
  const out = btn(`Salir sin entregar`, `btn ghost rfsalir`, () => { if (confirm(`¿Salir del simulacro? Se pierden tus respuestas.`)){ RFX.on = false; if (RFX.tick) clearInterval(RFX.tick); renderView(); } }); v.append(out);
}
function rfEntregar(auto){
  const X = RFX; if (X.done) return; const sin = X.items.filter(x => !rfRespondida(x)).length;
  if (!auto && sin && !confirm(`Te faltan ${sin} pregunta${sin === 1 ? `` : `s`} sin responder. ¿Entregar de todos modos?`)) return;
  X.done = true; if (X.tick){ clearInterval(X.tick); X.tick = null; } X.seg = Math.round((Date.now() - X.t0) / 1000);
  X.items.forEach(it => { it.pts = rfCalif(it); if (it.pts != null && it.pts < 1) rfRegistrarFallo(it); if (it.mcq) record({ id:it.id, t:it.t }, it.pts >= 1); else if (it.gen && it.k !== `a`) record({ id:`G_${it.gen}`, t:it.t }, it.pts >= 1); if (it.fallo && it.pts != null) rfSched(it.fallo, it.pts); });
  rfGuardarSim(); renderView(); topScroll();
}
function rfCalif(it){
  if (it.k === `o`) return it.pick != null && it.opts[it.pick].ok ? 1 : 0;
  if (it.k === `n`){ const x = parseNum(it.val); if (!isFinite(x)) return 0; const tol = it.abs != null ? Math.abs(x - it.ans) <= it.abs + 1e-9 : Math.abs(x - it.ans) <= Math.abs(it.ans) * it.rel; if (tol) return 1; const cerca = it.abs != null ? Math.abs(x - it.ans) <= it.abs * 3 : Math.abs(x - it.ans) <= Math.abs(it.ans) * .06; return cerca ? .5 : 0; }
  return it.grade;
}
function rfRegistrarFallo(it){
  if (it.fallo) return; const r = rfS(), id = `x${hash(it.q)}`; if (r.extra.some(x => x.id === id)) return;
  const base = { id, ev:`sim`, n:r.extra.length + 1, fecha:todayStr().slice(5).split(`-`).reverse().join(`/`), tm:it.tm && RF_TEMAS[it.tm] ? it.tm : `lab`, q:it.q, causa:null };
  let f; if (it.k === `o`){ const cl = it.opts.findIndex(o => o.ok); f = Object.assign(base, { tipo:`obj`, o:it.opts.map(o => o.t), el:it.pick == null ? -1 : it.pick, cl, conf:`alta`, por:it.e || `Revisa el tema para entender por qué esta opción es la correcta.`, tip:`Fuente: ${it.src}` }); }
  else if (it.k === `n`){ f = Object.assign(base, { tipo:`prob`, resp:it.val ? String(it.val) : `(sin responder)`, ref:`${it.r}. Pasos: ${it.pasos.join(` `)}`, por:`Tu resultado no coincidió con el esperado. Compara tus pasos con la solución y revisa las unidades.`, tip:`Fuente: ${it.src}`, fam:it.gen }); }
  else f = Object.assign(base, { tipo:`abi`, resp:it.val || `(sin responder)`, ref:it.a, por:`Tu respuesta no cubrió los puntos clave${it.kw && it.kw.length ? `: ${it.kw.join(`; `)}` : ``}.`, tip:`Fuente: ${it.src}` });
  r.extra.push(f); if (r.extra.length > 80) r.extra.shift(); save();
}
function rfTotales(){ const X = RFX; let pts = 0, pend = 0; X.items.forEach(it => { if (it.pts == null) pend++; else pts += it.pts; }); return { pts, pend, tot:X.items.length, nota:pts / X.items.length * 10 }; }
function rfGuardarSim(){ const X = RFX, r = rfS(); if (X.modo === `fallos` || X.modo === `refuerzo`) return; const t = rfTotales(); const reg = { d:todayStr(), n:X.nombre, nota:t.nota, pts:t.pts, tot:t.tot }; if (X.simIdx != null && r.sims[X.simIdx]) r.sims[X.simIdx] = reg; else { r.sims.push(reg); X.simIdx = r.sims.length - 1; } save(); }
function rfResultado(v){
  const X = RFX, t = rfTotales(), c = el(`section`, `rfcard rfres`);
  const aprob = t.nota >= 6, esReto = X.modo === `fallos` || X.modo === `refuerzo`;
  c.append(el(`h2`, ``, esReto ? `${rfEsc(X.nombre)}: resultado` : `Resultado del simulacro`));
  const sc = el(`div`, `rfscore`); sc.innerHTML = `<p class="score ${aprob ? `rfok` : `rfno`}" id="rfnota">${t.nota.toFixed(1)}<small> / 10</small></p><p id="rfpts">${nf(t.pts, 1)} de ${t.tot} puntos${X.seg ? ` · ${Math.floor(X.seg / 60)} min ${X.seg % 60} s` : ``}</p>`; c.append(sc);
  if (t.pend) c.append(el(`p`, `rfwarn`, `Te faltan ${t.pend} respuesta${t.pend === 1 ? `` : `s`} abierta${t.pend === 1 ? `` : `s`} por calificar: es tu nota provisional. Califícalas abajo.`));
  const prom = RF_EVALS.reduce((s, e) => s + e.nota, 0) / RF_EVALS.length;
  c.append(el(`p`, `muted`, esReto ? `Las preguntas que aciertas se espacian y las que fallas vuelven mañana.` : `Tu promedio real en las evaluaciones es ${prom.toFixed(1)}. ${aprob ? `Este simulacro quedó por encima de 6.0.` : `Este simulacro quedó por debajo de 6.0: revisa los errores de abajo.`}`));
  const by = {}; X.items.forEach(it => { const b = by[it.lbl] || (by[it.lbl] = { ok:0, n:0 }); b.n++; b.ok += it.pts || 0; });
  const bt = el(`div`, `rfby`); bt.append(el(`h3`, `rfh3`, `Rendimiento por tema`)); Object.entries(by).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n).forEach(([k, b]) => { const row = el(`div`, `rftr`); row.innerHTML = `<span class="rftn">${rfEsc(k)}</span><span class="rftv">${nf(b.ok, 1)}/${b.n}</span>`; row.insertBefore(rfBar(b.ok / b.n, b.ok / b.n >= .6 ? `var(--ok)` : `var(--bad)`), row.children[1]); bt.append(row); }); c.append(bt);
  const rev = el(`div`, `rfrev`); rev.append(el(`h3`, `rfh3`, `Revisión pregunta por pregunta`));
  X.items.forEach((it, i) => rev.append(rfRevItem(it, i))); c.append(rev);
  const row = el(`div`, `btnrow`); row.append(btn(`Nuevo simulacro`, `btn`, () => { RFX.on = false; renderView(); topScroll(); }));
  const malas = X.items.filter(x => x.pts != null && x.pts < 1).length; if (malas) row.append(btn(`Ver mis fallos`, `btn ghost`, () => { RFX.on = false; const r = rfS(); r.tab = `fallos`; r.fil = { ev:`sim`, ca:``, es:``, pat:`` }; save(); renderView(); topScroll(); })); c.append(row); v.append(c);
}
function rfActualizarNota(){ const t = rfTotales(), n = $(`#rfnota`), p = $(`#rfpts`); if (n){ n.className = `score ${t.nota >= 6 ? `rfok` : `rfno`}`; n.innerHTML = `${t.nota.toFixed(1)}<small> / 10</small>`; } if (p) p.textContent = `${nf(t.pts, 1)} de ${t.tot} puntos${RFX.seg ? ` · ${Math.floor(RFX.seg / 60)} min ${RFX.seg % 60} s` : ``}`; const w = $(`.rfres > .rfwarn`); if (w){ if (!t.pend) w.remove(); else w.textContent = `Te faltan ${t.pend} respuesta${t.pend === 1 ? `` : `s`} abierta${t.pend === 1 ? `` : `s`} por calificar: es tu nota provisional. Califícalas abajo.`; } rfGuardarSim(); }
function rfRevItem(it, i){
  const st = it.pts == null ? `pend` : it.pts >= 1 ? `ok` : it.pts > 0 ? `med` : `no`, mark = { pend:`•`, ok:`✓`, med:`½`, no:`✕` }[st];
  const c = el(`article`, `rfri rfri-${st}`); c.append(el(`div`, `rfrih`, `<span class="rfmk">${mark}</span><span><b>${i + 1}.</b> ${rfEsc(it.q)}</span>`));
  const b = el(`div`, `rfrib`);
  if (it.k === `o`){ it.opts.forEach((o, j) => b.append(el(`div`, `opt${o.ok ? ` right` : j === it.pick ? ` wrong` : ``}`, `<span class="k">${LET[j]}</span><span>${rfEsc(o.t)}${j === it.pick && o.ok ? ` <em class="rfkey">tu respuesta · correcta</em>` : `${j === it.pick ? ` <em class="rfmine">tu respuesta</em>` : ``}${o.ok ? ` <em class="rfkey">correcta</em>` : ``}`}</span>`))); if (it.pick == null) b.append(el(`p`, `rfwarn`, `Sin responder.`)); if (it.e) b.append(el(`p`, `rftip`, rfEsc(it.e))); }
  else if (it.k === `n`){ b.append(el(`p`, ``, `<b>Tu respuesta:</b> ${it.val ? rfEsc(it.val) : `(sin responder)`}`), el(`p`, `rfref`, `<b>Resultado esperado:</b> ${rfEsc(it.r)}`)); if (it.pts === .5) b.append(el(`p`, `rfwarn`, `Medio punto: tu valor está cerca. Revisa el redondeo y las cifras.`)); const ol = el(`ol`, `steps`); it.pasos.forEach(p => ol.append(el(`li`, ``, rfEsc(p)))); b.append(ol); }
  else { b.append(el(`p`, ``, `<b>Tu respuesta:</b> ${it.val ? rfEsc(it.val) : `(sin responder)`}`), el(`p`, `rfref`, `<b>Respuesta modelo:</b> ${rfEsc(it.a)}`)); if (it.kw && it.kw.length) b.append(el(`p`, `muted`, `Puntos clave: ${it.kw.map(rfEsc).join(` · `)}`));
    const g = el(`div`, `btnrow rfgrade`); g.append(el(`span`, `muted`, `Califícate:`)); [[1, `Completa (1)`, `btn ok`], [.5, `A medias (½)`, `btn ghost`], [0, `No (0)`, `btn ghost`]].forEach(([p, t, cl]) => { const bt = btn(t, cl, () => { it.pts = p; it.grade = p; if (p < 1) rfRegistrarFallo(it); if (it.fallo) rfSched(it.fallo, p); rfActualizarNota(); const nuevo = rfRevItem(it, i); c.replaceWith(nuevo); }); bt.setAttribute(`aria-pressed`, it.pts === p); if (it.pts === p) bt.classList.add(`sel`); g.append(bt); }); b.append(g); }
  c.append(b); return c;
}
