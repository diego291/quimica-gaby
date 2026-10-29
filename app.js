/* ======================= DATOS UNIFICADOS ======================= */
TOPICS.t20 = { n:`Tema 20`, name:`pH, pOH y constantes` };
TOPICS.t21 = { n:`Tema 21`, name:`Cálculos, titulación y buffers` };
TOPICS.t22 = { n:`Tema 22`, name:`Generalidades de hidrocarburos` };
TOPICS.t23 = { n:`Tema 23`, name:`Alcanos: estructura y nombres` };
TOPICS.t24 = { n:`Tema 24`, name:`Alquenos` };
TOPICS.t25 = { n:`Tema 25`, name:`Alquinos` };
TOPICS.t26 = { n:`Tema 26`, name:`Hidrocarburos aromáticos` };
TOPICS.t27 = { n:`Tema 27`, name:`Alcoholes y fenoles` };
TOPICS.t28 = { n:`Tema 28`, name:`Éteres y epóxidos` };
const UNITS = [{ name:`Módulo IV · Soluciones y ácido-base`, ts:[`t15`,`t16`,`t17`,`t18`,`t19`,`t20`,`t21`] }, { name:`Unidad VI · Hidrocarburos`, ts:[`t22`,`t23`,`t24`,`t25`,`t26`] }, { name:`Unidad VII · Funciones oxigenadas`, ts:[`t27`,`t28`] }];
const PACKS = applyPacks();
packTopics().forEach(tp => { TOPICS[tp.t] = { n: tp.n || `Tema ${tp.t.slice(1)}`, name: tp.name }; let u = UNITS.find(x => x.name === tp.unit); if (!u){ u = { name: tp.unit || `Temas nuevos`, ts:[] }; UNITS.push(u); } if (!u.ts.includes(tp.t)) u.ts.push(tp.t); });
if (PACKS.GUIA.length){ const ip = GUIA.findIndex(g => g.h.startsWith(`Plan sugerido`)); GUIA.splice(ip < 0 ? GUIA.length : ip, 0, ...PACKS.GUIA); }
REPASO.forEach(r => { if (!r.fig && FIGMAP[r.title]) r.fig = FIGMAP[r.title]; });
const ALL = {
  REPASO: REPASO.concat(REPASO_NEW, REPASO_ORG, REPASO_ORG2, REPASO_T26, REPASO_T27, REPASO_T28, PACKS.REPASO),
  MCQ: MCQ.concat(MCQ_NEW, MCQ_ORG, MCQ_ORG2, MCQ_T26, MCQ_T27, MCQ_T28, PACKS.MCQ),
  ABIERTAS: ABIERTAS.concat(ABIERTAS_NEW, ABIERTAS_ORG, ABIERTAS_ORG2, ABIERTAS_T26, ABIERTAS_T27, ABIERTAS_T28, PACKS.ABIERTAS),
  EJ: EJ.concat(EJ_NEW, EJ_ORG, EJ_ORG2, EJ_T26, EJ_T27, EJ_T28, PACKS.EJ),
  FORM: FORM.concat(FORM_NEW, FORM_ORG, FORM_ORG2, FORM_T26, FORM_T27, FORM_T28, PACKS.FORM),
  FICHAS: FICHAS.concat(FICHAS_ORG, FICHAS_ORG2, FICHAS_T26, FICHAS_T27, FICHAS_T28, PACKS.FICHAS), FQ: FQ.concat(FQ_ORG, FQ_ORG2, FQ_T26, FQ_T27, FQ_T28, PACKS.FQ)
};
const TORDER = [`t15`,`t16`,`t17`,`t18`,`t19`,`t20`,`t21`,`t22`,`t23`,`t24`,`t25`,`t26`,`t27`,`t28`].concat(packTopics().map(x => x.t).filter(t => ![`t15`,`t16`,`t17`,`t18`,`t19`,`t20`,`t21`,`t22`,`t23`,`t24`,`t25`,`t26`,`t27`,`t28`].includes(t)));
const byTopic = arr => TORDER.flatMap(t => arr.filter(x => x.t === t));
for (const k of [`REPASO`,`MCQ`,`ABIERTAS`,`EJ`,`FORM`,`FICHAS`,`FQ`]) ALL[k] = byTopic(ALL[k]);
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); };
for (const k of [`MCQ`,`ABIERTAS`,`EJ`,`FICHAS`,`FQ`]) ALL[k].forEach(x => x.id = k[0] + hash(x.q || x.f));

/* ======================= UTILIDADES ======================= */
const $ = (s, r=document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const btn = (txt, cls, fn) => { const b = el(`button`, cls || `btn`, txt); b.type = `button`; if (fn) b.onclick = fn; return b; };
const shufR = (a, r) => { const b = a.slice(); for (let i = b.length-1; i > 0; i--){ const j = Math.floor(r()*(i+1)); [b[i],b[j]] = [b[j],b[i]]; } return b; };
const shuf = a => shufR(a, Math.random);
const LET = [`A`,`B`,`C`,`D`,`E`];
const mulberry = s => () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const SUP = { '-':`⁻`,'0':`⁰`,'1':`¹`,'2':`²`,'3':`³`,'4':`⁴`,'5':`⁵`,'6':`⁶`,'7':`⁷`,'8':`⁸`,'9':`⁹` };
function sci(x, d=2){
  if (!isFinite(x)) return `—`; if (x === 0) return `0`;
  let e = Math.floor(Math.log10(Math.abs(x))); let ms = (x / 10**e).toFixed(d);
  if (Math.abs(+ms) >= 10){ e++; ms = (x / 10**e).toFixed(d); }
  if (e >= -2 && e <= 3) return nf(x, Math.max(0, d - e));
  return `${ms} × 10${String(e).split(``).map(c => SUP[c]).join(``)}`;
}
function nf(x, d=2){ let t = Number(x).toFixed(d); if (t.includes(`.`)) t = t.replace(/0+$/, ``).replace(/\.$/, ``); return t; }
const fx2 = x => Number(x).toFixed(2);
const r3 = x => Number(x.toPrecision(3));
const pick = a => a[Math.floor(Math.random()*a.length)];
const between = (a, b, step=1) => { const n = Math.round((b-a)/step); return +(a + step*Math.floor(Math.random()*(n+1))).toFixed(6); };
function parseNum(s){
  if (s == null) return NaN;
  let t = String(s).trim().replace(/\s+/g, ``).replace(/,/g, `.`).replace(/[×xX*]/g, `x`).replace(/[−–]/g, `-`);
  const m = t.match(/^(-?\d*\.?\d+)(?:x10\^?\(?(-?\d+)\)?)?$/);
  if (m) return parseFloat(m[1]) * (m[2] ? 10**parseInt(m[2], 10) : 1);
  const v = Number(t); return isFinite(v) ? v : NaN;
}
function hoy(){ try { return new Date().toLocaleDateString(`es-SV`, { day:`numeric`, month:`long`, year:`numeric` }); } catch(e){ return ``; } }

/* ======================= ESTADO ======================= */
const KEY = `parcialM4_v2`;
const MODES = [[`inicio`,`Hoy`],[`notas`,`Mis notas`],[`impreso`,`Parcial impreso`],[`guia`,`Cómo estudiar`],[`repaso`,`Repaso`],[`videos`,`Videos`],[`preguntar`,`Preguntar`],[`fichas`,`Fichas`],[`preguntas`,`Preguntas`],[`ejercicios`,`Ejercicios`],[`formula`,`¿Qué fórmula uso?`],[`practica`,`Práctica infinita`],[`lab`,`Laboratorio`],[`simulacro`,`Simulacro`],[`formulario`,`Formulario`],[`progreso`,`Mi progreso`]];
const S = { x:{}, sel: new Set(TORDER), mode:`inicio`, simFb:`now`, st:{}, err:[], box:{}, shuffle:false, onlyErr:false, figFront:false };
try { const s = JSON.parse(localStorage.getItem(KEY) || `null`); if (s){ S.sel = new Set(s.sel.filter(k => TORDER.includes(k))); S.mode = MODES.some(m => m[0] === s.mode) ? s.mode : `inicio`; S.x = s.x || {}; S.st = s.st || {}; S.err = s.err || []; S.box = s.box || {}; S.simFb = s.simFb || `now`; } } catch(e){}
function save(){ try { localStorage.setItem(KEY, JSON.stringify({ sel:[...S.sel], mode:S.mode, simFb:S.simFb, st:S.st, err:S.err, box:S.box, x:S.x })); } catch(e){} }
const filt = arr => arr.filter(x => S.sel.has(x.t));
function record(it, ok){
  const k = it.id || it.t; const v = S.st[k] || [0,0]; v[ok?0:1]++; S.st[k] = v;
  const tk = `T_` + it.t; const w = S.st[tk] || [0,0]; w[ok?0:1]++; S.st[tk] = w;
  if (it.id && it.id[0] === `M`){ const i = S.err.indexOf(it.id); if (!ok && i < 0) S.err.push(it.id); if (ok && i >= 0) S.err.splice(i,1); }
  markDay(); save(); renderStatus();
}
function totals(){ let a = 0, o = 0; TORDER.forEach(t => { const w = S.st[`T_`+t]; if (w){ o += w[0]; a += w[0] + w[1]; } }); return { a, o }; }

/* ======================= COMPONENTES ======================= */
function meta(it){ const m = el(`div`,`meta`); m.append(el(`span`,`chip`, TOPICS[it.t].n), el(`span`,`src`, `Fuente: ` + it.src)); return m; }
function card(it, cls){ const c = el(`article`, `card` + (cls ? ` ` + cls : ``)); c.style.setProperty(`--c`, `var(--${it.t})`); c.append(meta(it)); return c; }
function figure(key, small){
  const f = FIG[key]; if (!f) return null;
  const d = el(`figure`, `fig` + (small ? ` small` : ``));
  d.innerHTML = `${f.svg}<figcaption><span class="figsrc">Ilustración · ${f.src}</span>${f.cap}</figcaption>`;
  return d;
}

function mcqCard(it, onDone, opts = {}){
  const c = card(it);
  c.append(el(`p`,`q`, (opts.num ? `<span class="qn">${opts.num}.</span> ` : ``) + it.q));
  const o = shuf(it.o.map((t, i) => ({ t, ok: i === 0 })));
  const box = el(`div`,`opts`);
  o.forEach((x, i) => {
    const b = el(`button`,`opt`, `<span class="k">${LET[i]}</span><span>${x.t}</span>`); b.type = `button`;
    if (opts.defer){ b.setAttribute(`aria-pressed`, `false`); b.onclick = () => { [...box.children].forEach(y => { y.classList.remove(`picked`); y.setAttribute(`aria-pressed`, `false`); }); b.classList.add(`picked`); b.setAttribute(`aria-pressed`, `true`); opts.defer(x, o, i); }; box.append(b); return; }
    b.onclick = () => {
      [...box.children].forEach((y, j) => { y.disabled = true; if (o[j].ok) y.classList.add(`right`); else if (y !== b) y.classList.add(`dim`); });
      if (!x.ok) b.classList.add(`wrong`);
      c.append(el(`div`, `fb ${x.ok ? `ok` : `no`}`, `<strong>${x.ok ? `Correcto.` : `Incorrecto. La respuesta es: ${o.find(y => y.ok).t}`}</strong>${it.e}<span class="fbsrc">Repasa: ${it.src}</span>`));
      if (!opts.noRecord) record(it, x.ok);
      onDone && onDone(x.ok, c);
    };
    box.append(b);
  });
  c.append(box);
  return c;
}

function ejCard(it){
  const c = card(it);
  c.append(el(`p`,`q`, it.q));
  const d1 = el(`details`); d1.innerHTML = `<summary>¿Qué me pide?</summary><div><p>${it.pide}</p></div>`;
  const d2 = el(`details`); d2.innerHTML = `<summary>Datos y fórmula</summary><div><ul class="kv">${it.datos.map(x => `<li>${x}</li>`).join(``)}</ul>${it.f && it.f !== `—` ? `<p class="fx">${it.f}</p>` : ``}</div>`;
  c.append(d1, d2);
  const ol = el(`ol`,`steps`); it.pasos.forEach(p => { const li = el(`li`, ``, p); li.hidden = true; ol.append(li); });
  const res = el(`div`,`result`, `Resultado: ${it.r}`); res.hidden = true;
  const trap = it.ojo ? el(`p`,`trap`, `<b>Ojo:</b> ${it.ojo}`) : null; if (trap) trap.hidden = true;
  const self = el(`div`,`btnrow selfgrade`); self.hidden = true;
  self.append(el(`span`,`muted`,`¿Te salió igual?`), btn(`Sí, lo resolví bien`, `btn ok`, () => { record(it, true); self.innerHTML = `<span class="muted">Anotado como correcto.</span>`; }), btn(`No, me equivoqué`, `btn ghost`, () => { record(it, false); self.innerHTML = `<span class="muted">Anotado. Vuelve a intentarlo mañana.</span>`; }));
  const row = el(`div`,`btnrow`);
  const bN = btn(`Siguiente paso (0/${it.pasos.length})`), bA = btn(`Mostrar solución completa`, `btn ghost`), bH = btn(`Ocultar solución`, `btn ghost`); bH.hidden = true;
  let n = 0;
  const upd = () => {
    [...ol.children].forEach((li, i) => li.hidden = i >= n);
    const done = n >= it.pasos.length; res.hidden = !done; if (trap) trap.hidden = !done; if (done && !self.dataset.used){ self.hidden = false; self.dataset.used = 1; }
    bN.textContent = done ? `Solución completa` : `Siguiente paso (${n}/${it.pasos.length})`; bN.disabled = done; bA.hidden = done; bH.hidden = n === 0;
  };
  bN.onclick = () => { n++; upd(); }; bA.onclick = () => { n = it.pasos.length; upd(); }; bH.onclick = () => { n = 0; upd(); };
  row.append(bN, bA, bH);
  c.append(ol, res); if (trap) c.append(trap); c.append(row, self);
  return c;
}

/* ======================= GRADILLA Y MODOS ======================= */
function counts(t){
  const n = { guia:ALL.REPASO, videos:VIDEOS, preguntar:ALL.REPASO, repaso:ALL.REPASO, fichas:ALL.FICHAS, preguntas:ALL.MCQ.concat(ALL.ABIERTAS), ejercicios:ALL.EJ, formula:ALL.FQ, practica:GENS, lab:LABS, simulacro:ALL.MCQ, formulario:ALL.FORM, progreso:ALL.MCQ }[S.mode];
  return n.filter(x => x.t === t || (x.ts && x.ts.includes(t))).length;
}
/* (gradilla y modos: ver ui.js) */

/* ======================= VISTAS ======================= */
function intro(v, txt){ v.append(el(`p`,`lead`, txt)); }

function vRepaso(v){
  intro(v, `Teoría explicada en corto, con su dibujo de referencia. Lee la tarjeta, mira el dibujo y tapa la sección "Para memorizar" para ver si la recuerdas.`);
  const l = el(`div`,`list`);
  for (const it of filt(ALL.REPASO)){
    const c = card(it, `rep`); c.append(el(`h3`,``, it.title));
    const body = el(`div`,`repbody`); body.append(el(`div`,`reptext`, it.body));
    const f = it.fig && figure(it.fig); if (f) body.append(f);
    c.append(body);
    if (it.memo) c.append(el(`p`,`memo`, `<b>Para memorizar:</b> ${it.memo}`));
    const vids = VIDEOS.filter(x => x.rep.includes(it.title));
    if (vids.length) c.append(vidLinks(vids));
    l.append(c);
  }
  v.append(l);
}

/* ---------- Fichas (Leitner de 4 cajas) ---------- */
const FS = { order:null, i:0, flip:false, filter:`pend`, grid:false };
function fichaBox(id){ return S.box[id] || 0; }
function vFichas(v){
  const all = filt(ALL.FICHAS);
  const pend = all.filter(f => fichaBox(f.id) < 3);
  const pool = FS.filter === `pend` ? pend : all;
  const head = el(`div`,`fhead`);
  const dom = all.length - pend.length;
  head.innerHTML = `<div><b>${dom}</b> de ${all.length} fichas dominadas</div><div class="bar"><i style="width:${all.length ? dom/all.length*100 : 0}%"></i></div>`;
  const tools = el(`div`,`btnrow`);
  const sel = el(`div`,`seg`);
  [[`pend`,`Pendientes (${pend.length})`],[`all`,`Todas (${all.length})`]].forEach(([k,t]) => { const b = btn(t, `segb`, () => { FS.filter = k; FS.order = null; FS.i = 0; FS.flip = false; renderView(); }); b.setAttribute(`aria-pressed`, FS.filter === k); sel.append(b); });
  tools.append(sel,
    btn(FS.grid ? `Ver una por una` : `Ver todas en cuadrícula`, `btn ghost`, () => { FS.grid = !FS.grid; renderView(); }),
    btn(S.figFront ? `Dibujo en el reverso` : `Dibujo en el anverso`, `btn ghost`, () => { S.figFront = !S.figFront; renderView(); }));
  head.append(tools); v.append(head);
  v.append(el(`p`,`lead`,`Lee la pregunta, responde en voz alta y toca la ficha para voltearla. Si la sabías, sube de caja; si no, regresa a la caja 1. Tres aciertos seguidos y queda dominada.`));
  if (!pool.length){ v.append(el(`div`,`empty`, FS.filter === `pend` ? `Dominaste todas las fichas de estos temas. Cambia a "Todas" para repasarlas otra vez.` : `No hay fichas en los temas seleccionados.`)); return; }
  if (FS.grid){
    const g = el(`div`,`fgrid`);
    pool.forEach(f => g.append(flashcard(f, true)));
    v.append(g); return;
  }
  const key = FS.filter + [...S.sel].sort().join();
  if (!FS.order || FS.key !== key){ FS.order = shuf(pool).sort((a, b) => fichaBox(a.id) - fichaBox(b.id)).map(f => f.id); FS.i = 0; FS.flip = false; FS.key = key; }
  while (FS.i < FS.order.length && !pool.find(x => x.id === FS.order[FS.i])) FS.i++;
  if (FS.i >= FS.order.length){
    const box = el(`div`,`simstart center`); box.append(el(`h3`,``,`Ronda terminada`), el(`p`,``, `Te quedan ${pend.length} fichas pendientes en estos temas.`));
    const br = el(`div`,`btnrow center`); br.append(btn(`Nueva ronda`, `btn`, () => { FS.order = null; renderView(); })); box.append(br); v.append(box); return;
  }
  const f = pool.find(x => x.id === FS.order[FS.i]);
  v.append(el(`p`,`muted center`, `Ficha ${FS.i + 1} de ${FS.order ? FS.order.length : pool.length} · Caja ${fichaBox(f.id) + 1} de 4`));
  const fc = flashcard(f, false); v.append(fc);
  const row = el(`div`,`btnrow center`);
  const next = () => { FS.i++; FS.flip = false; renderView(); };
  const grade = (d) => { const b = fichaBox(f.id); S.box[f.id] = d < 0 ? 0 : Math.min(3, b + d); record({ id:`F_` + f.id, t:f.t }, d > 0); save(); next(); };
  const bNo = btn(`No la sabía`, `btn ghost`, () => grade(-1)), bMas = btn(`Más o menos`, `btn ghost`, () => grade(0)), bSi = btn(`La sabía`, `btn`, () => grade(1));
  [bNo, bMas, bSi].forEach(b => b.disabled = !FS.flip);
  const bFlip = btn(FS.flip ? `Ver pregunta` : `Voltear ficha`, `btn ghost`, () => { FS.flip = !FS.flip; renderView(); });
  row.append(bFlip, bNo, bMas, bSi);
  v.append(row);
}
function flashcard(f, static_){
  const w = el(`div`, `flash` + (static_ ? ` static` : ``)); w.style.setProperty(`--c`, `var(--${f.t})`);
  const flipped = static_ ? false : FS.flip;
  const fig = f.fig ? FIG[f.fig] : null;
  const figHtml = fig ? `<div class="ffig">${fig.svg}</div>` : ``;
  const front = `<div class="face front"><div class="meta"><span class="chip">${TOPICS[f.t].n}</span><span class="src">Fuente: ${f.src}</span></div><p class="fq">${f.f}</p>${S.figFront ? figHtml : ``}<p class="fhint">${static_ ? `` : `Toca para voltear`}</p></div>`;
  const back = `<div class="face back"><div class="meta"><span class="chip">${TOPICS[f.t].n}</span><span class="src">Fuente: ${f.src}</span></div><p class="fa">${f.b}</p>${!S.figFront || static_ ? figHtml : ``}${fig ? `<p class="fsrc">Dibujo: ${fig.src}</p>` : ``}</div>`;
  if (static_){ w.innerHTML = front + back; return w; }
  const inner = el(`div`, `fin` + (flipped ? ` on` : ``)); inner.innerHTML = front + back;
  inner.setAttribute(`role`, `button`); inner.tabIndex = 0; inner.setAttribute(`aria-label`, flipped ? `Ficha volteada. Toca para ver la pregunta` : `Toca para ver la respuesta`);
  const toggle = () => { FS.flip = !FS.flip; renderView(); };
  inner.onclick = toggle; inner.onkeydown = e => { if (e.key === `Enter` || e.key === ` `){ e.preventDefault(); toggle(); } };
  w.append(inner); return w;
}

/* ---------- Preguntas ---------- */
function vPreguntas(v){
  let m = filt(ALL.MCQ), a = filt(ALL.ABIERTAS);
  const errIn = m.filter(x => S.err.includes(x.id));
  const top = el(`div`,`btnrow`);
  const sg = el(`div`,`seg`);
  [[false, `Todas (${m.length})`],[true, `Solo mis errores (${errIn.length})`]].forEach(([k, t]) => { const b = btn(t, `segb`, () => { S.onlyErr = k; renderView(); }); b.setAttribute(`aria-pressed`, S.onlyErr === k); sg.append(b); });
  top.append(sg); v.append(top);
  if (S.onlyErr) m = errIn;
  if (S.shuffle){ m = shuf(m); a = shuf(a); }
  v.append(el(`h2`,``, `Opción múltiple (${m.length})`));
  if (!m.length) v.append(el(`div`,`empty`, S.onlyErr ? `No tienes errores pendientes en estos temas.` : `No hay preguntas en los temas seleccionados.`));
  const l = el(`div`,`list`); m.forEach(it => l.append(mcqCard(it))); v.append(l);
  if (S.onlyErr) return;
  v.append(el(`h2`,``, `Preguntas de desarrollo (${a.length})`));
  intro(v, `Respóndelas en voz alta o por escrito antes de abrir la respuesta. Así se fija mejor.`);
  const l2 = el(`div`,`list`);
  a.forEach(it => { const c = card(it); c.append(el(`p`,`q`, it.q)); const d = el(`details`); d.innerHTML = `<summary>Ver respuesta modelo</summary><div><p>${it.a}</p></div>`; c.append(d); l2.append(c); });
  v.append(l2);
}

/* ---------- Ejercicios ---------- */
function vEjercicios(v){
  let e = filt(ALL.EJ); if (S.shuffle) e = shuf(e);
  intro(v, `Método: 1) abre "¿Qué me pide?" e identifica la incógnita; 2) resuélvelo en papel; 3) revela los pasos uno por uno solo si te atascas; 4) al final marca si te salió bien.`);
  const l = el(`div`,`list`); e.forEach(it => l.append(ejCard(it))); v.append(l);
}

/* ---------- ¿Qué fórmula uso? ---------- */
const FQS = { order:null, i:0, ok:0, n:0, streak:0 };
function vFormula(v){
  const pool = filt(ALL.FQ);
  intro(v, `Aquí no calculas: solo decides qué fórmula o procedimiento aplica. Es la habilidad que más se necesita en el parcial. Lee el enunciado y elige.`);
  if (!pool.length){ v.append(el(`div`,`empty`,`No hay enunciados para los temas seleccionados.`)); return; }
  if (!FQS.order || FQS.order.some(id => !pool.find(x => x.id === id))){ FQS.order = shuf(pool).map(x => x.id); FQS.i = 0; FQS.ok = 0; FQS.n = 0; FQS.streak = 0; }
  if (FQS.i >= FQS.order.length){
    const box = el(`div`,`simstart`);
    box.append(el(`p`,`score`, `${FQS.ok} / ${FQS.n}`), el(`p`,``, `Identificaste correctamente ${FQS.ok} de ${FQS.n} procedimientos.`));
    const br = el(`div`,`btnrow`); br.append(btn(`Otra ronda`, `btn`, () => { FQS.order = null; renderView(); })); box.append(br);
    v.append(box); return;
  }
  const it = pool.find(x => x.id === FQS.order[FQS.i]);
  v.append(el(`div`,`scorebar`, `<span>Enunciado ${FQS.i + 1} de ${FQS.order.length}</span><span>Aciertos: <b>${FQS.ok}</b></span><span>Racha: <b>${FQS.streak}</b></span>`));
  const c = mcqCard(it, (ok, cc) => {
    FQS.n++; if (ok){ FQS.ok++; FQS.streak++; } else FQS.streak = 0;
    const r = el(`div`,`btnrow`); const b = btn(FQS.i + 1 < FQS.order.length ? `Siguiente enunciado` : `Ver resultado`, `btn`, () => { FQS.i++; renderView(); }); r.append(b); cc.append(r); b.focus();
  });
  v.append(c);
}

/* ---------- Práctica infinita ---------- */
const PM = { NaCl:58.5, NaOH:40, HCl:36.5, KOH:56, 'Ca(OH)₂':74, 'H₂SO₄':98, 'H₃PO₄':98, 'Na₂CO₃':106, 'Glucosa':180, 'Urea':60 };
const GENS = [
 {id:`mol`,t:`t16`,src:`Tema 16, pág. 14–16`,name:`Molaridad desde gramos`,make(){ const s = pick([`NaCl`,`NaOH`,`Glucosa`,`Urea`,`Na₂CO₃`]); const g = between(1, 60, .5), V = pick([100,250,500,750,1000,2000]); const n = g/PM[s], M = n/(V/1000);
   return { q:`Se disuelven ${nf(g,1)} g de ${s} (PM ${PM[s]} g/mol) en agua hasta completar ${V} mL de solución. ¿Cuál es la molaridad?`, unit:`M`, ans:M, rel:.02,
     pasos:[`Moles = ${nf(g,1)} / ${PM[s]} = ${sci(n,3)} mol.`,`Volumen = ${V} mL = ${nf(V/1000,3)} L.`,`M = ${sci(n,3)} / ${nf(V/1000,3)} = ${sci(M,3)} M.`], r:`${sci(M,3)} M` }; }},
 {id:`norm`,t:`t16`,src:`Tema 16, pág. 22–26`,name:`Normalidad`,make(){ const [s, k] = pick([[`H₂SO₄`,2],[`H₃PO₄`,3],[`Ca(OH)₂`,2],[`NaOH`,1],[`HCl`,1]]); const g = between(2, 40, .5), V = pick([250,500,1000]); const PE = PM[s]/k, N = g/PE/(V/1000);
   return { q:`Calcule la normalidad de una solución con ${nf(g,1)} g de ${s} (PM ${PM[s]}) en ${V} mL de solución.`, unit:`N`, ans:N, rel:.02,
     pasos:[`n = ${k} (${s.startsWith(`H`) ? `H⁺ que libera` : `OH⁻ que libera`}).`,`PE = ${PM[s]} / ${k} = ${nf(PE,2)} g/eq.`,`Equivalentes = ${nf(g,1)} / ${nf(PE,2)} = ${sci(g/PE,3)} eq.`,`N = ${sci(g/PE,3)} / ${nf(V/1000,3)} L = ${sci(N,3)} N.`], r:`${sci(N,3)} N` }; }},
 {id:`pct`,t:`t16`,src:`Tema 16, pág. 10`,name:`Porcentaje m/v`,make(){ const g = between(.5, 30, .5), V = pick([50,100,200,250,500]); const p = g/V*100;
   return { q:`Se disuelven ${nf(g,1)} g de soluto hasta ${V} mL de solución. ¿Cuál es el % m/v?`, unit:`%`, ans:p, rel:.02, pasos:[`% m/v = g soluto / mL solución × 100.`,`% = ${nf(g,1)} / ${V} × 100 = ${nf(p,2)} %.`], r:`${nf(p,2)} % m/v` }; }},
 {id:`dilV1`,t:`t17`,src:`Tema 17, pág. 3–6`,name:`Dilución: volumen del stock`,make(){ const [u, C1, C2] = pick([[`M`, pick([1,2,5,6,12]), pick([.1,.2,.25,.5])],[`%`, pick([10,20,25,40]), pick([.9,1,2,4,5])],[`mg/mL`, pick([1,2,5,10]), pick([.2,.4,.5])]]); const V2 = pick([50,100,250,500,1000]); const V1 = C2*V2/C1;
   return { q:`Se necesitan ${V2} mL de una solución ${nf(C2,2)} ${u} a partir de un stock ${C1} ${u}. ¿Qué volumen del stock se toma?`, unit:`mL`, ans:V1, rel:.02,
     pasos:[`C₁V₁ = C₂V₂ → V₁ = C₂V₂ / C₁.`,`V₁ = ${nf(C2,2)} × ${V2} / ${C1} = ${nf(V1,2)} mL.`,`Solvente a agregar = ${V2} − ${nf(V1,2)} = ${nf(V2-V1,2)} mL.`], r:`${nf(V1,2)} mL de stock (agregar ${nf(V2-V1,2)} mL de solvente)` }; }},
 {id:`dilC2`,t:`t17`,src:`Tema 17, pág. 5`,name:`Dilución: concentración final`,make(){ const C1 = pick([.5,1,2,3,6]), V1 = pick([10,20,25,50,100,200,400]), V2 = V1 * pick([2,3,4,5,10]); const C2 = C1*V1/V2;
   return { q:`Se toman ${V1} mL de NaCl ${C1} M y se agrega agua hasta ${V2} mL. ¿Cuál es la nueva concentración?`, unit:`M`, ans:C2, rel:.02, pasos:[`C₂ = C₁V₁ / V₂.`,`C₂ = ${C1} × ${V1} / ${V2} = ${sci(C2,3)} M.`,`Verificación: C₂ < C₁ ✔.`], r:`${sci(C2,3)} M` }; }},
 {id:`kw`,t:`t19`,src:`Tema 19, pág. 11–13`,name:`Kw: el otro ion`,make(){ const m = pick([1,2,2.5,4,5,8]), e = between(2, 12); const H = m*10**-e, OH = 1e-14/H;
   return { q:`Una solución tiene [H⁺] = ${sci(H,1)} M. ¿Cuál es su [OH⁻]? (Escribe por ejemplo 4e-11 o 4x10^-11)`, unit:`M`, ans:OH, rel:.03, pasos:[`Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴.`,`[OH⁻] = 1 × 10⁻¹⁴ / ${sci(H,1)} = ${sci(OH,2)} M.`,`${H > 1e-7 ? `[H⁺] > 10⁻⁷: solución ácida.` : `[H⁺] < 10⁻⁷: solución básica.`}`], r:`${sci(OH,2)} M` }; }},
 {id:`pka`,t:`t20`,src:`Tema 20, pág. 3`,name:`pKa desde Ka`,make(){ const Ka = pick([1.8e-5,6.8e-4,1.4e-4,4.9e-10,3.0e-8,1.8e-4,7.5e-3]); const p = -Math.log10(Ka);
   return { q:`Un ácido débil tiene Ka = ${sci(Ka,1)}. Calcule su pKa.`, unit:``, ans:p, abs:.02, pasos:[`pKa = −log(${sci(Ka,1)}).`,`pKa = ${fx2(p)}.`], r:`pKa = ${fx2(p)}` }; }},
 {id:`hInv`,t:`t20`,src:`Tema 20, pág. 2 y 7`,name:`De pH a [H⁺]`,make(){ const pH = between(1, 13, .1); const H = 10**-pH;
   return { q:`Una muestra tiene pH ${nf(pH,1)}. ¿Cuál es su [H⁺] en mol/L?`, unit:`M`, ans:H, rel:.03, pasos:[`[H⁺] = 10^(−pH).`,`[H⁺] = 10^(−${nf(pH,1)}) = ${sci(H,2)} M.`,`pOH = 14 − ${nf(pH,1)} = ${nf(14-pH,1)}.`], r:`${sci(H,2)} M` }; }},
 {id:`sa`,t:`t20`,src:`Tema 20, pág. 5`,name:`pH de ácido fuerte`,make(){ const [s, k] = pick([[`HCl`,1],[`HNO₃`,1],[`HCl`,1],[`H₂SO₄ (disociación total)`,2]]); const C = pick([1,2,2.5,4,5,8]) * 10**-between(1, 4); const H = C*k, pH = -Math.log10(H);
   return { q:`Calcule el pH de ${s} ${sci(C,2)} M.`, unit:``, ans:pH, abs:.02, pasos:[`Ácido fuerte: se disocia al 100 %.`,`[H⁺] = ${k > 1 ? `${k} × ` : ``}${sci(C,2)} = ${sci(H,2)} M.`,`pH = −log(${sci(H,2)}) = ${fx2(pH)}.`], r:`pH = ${fx2(pH)}` }; }},
 {id:`sb`,t:`t21`,src:`Tema 21, pág. 3`,name:`pH de base fuerte desde gramos`,make(){ const [s, k] = pick([[`NaOH`,1],[`KOH`,1],[`Ca(OH)₂`,2]]); const g = between(.1, 6, .02), V = pick([.25,.5,1,1.5,2,2.5]); const M = g/PM[s]/V, OH = M*k, pOH = -Math.log10(OH), pH = 14 - pOH;
   return { q:`Se disuelven ${nf(g,2)} g de ${s} (PM ${PM[s]}) hasta ${V} L de solución. Calcule el pH.`, unit:``, ans:pH, abs:.02,
     pasos:[`Moles = ${nf(g,2)} / ${PM[s]} = ${sci(g/PM[s],3)} mol.`,`M = ${sci(g/PM[s],3)} / ${V} = ${sci(M,3)} M.`,`[OH⁻] = ${k > 1 ? `2 × ` : ``}${sci(M,3)} = ${sci(OH,3)} M.`,`pOH = −log(${sci(OH,3)}) = ${fx2(pOH)}.`,`pH = 14 − ${fx2(pOH)} = ${fx2(pH)}.`], r:`pH = ${fx2(pH)}` }; }},
 {id:`wa`,t:`t20`,ts:[`t21`],src:`Tema 20, pág. 6 · Tema 21, pág. 5–7`,name:`pH de ácido débil`,make(){ const [s, Ka] = pick([[`ácido acético`,1.8e-5],[`ácido fórmico`,1.8e-4],[`ácido láctico`,1.4e-4],[`ácido acético`,1.8e-5]]); let C; do { C = pick([.01,.02,.05,.08,.1,.15,.2,.25,.5]); } while (C/Ka <= 400);
   const x = Math.sqrt(Ka*C), pH = -Math.log10(x);
   return { q:`Calcule el pH de ${s} ${C} M (Ka = ${sci(Ka,1)}).`, unit:``, ans:pH, abs:.02,
     pasos:[`Criterio: C₀/Ka = ${nf(C/Ka,0)} > 400 → aproximación válida.`,`[H⁺] = √(${sci(Ka,1)} × ${C}) = √(${sci(Ka*C,2)}) = ${sci(x,2)} M.`,`pH = −log(${sci(x,2)}) = ${fx2(pH)}.`,`% ionización = ${sci(x,2)} / ${C} × 100 = ${nf(x/C*100,2)} %.`], r:`pH = ${fx2(pH)} (ionización ${nf(x/C*100,2)} %)` }; }},
 {id:`wb`,t:`t21`,src:`Tema 21, pág. 8–9`,name:`pH de base débil`,make(){ const [s, Kb] = pick([[`amoníaco (NH₃)`,1.8e-5],[`metilamina`,4.4e-4],[`piridina`,1.7e-9],[`amoníaco (NH₃)`,1.8e-5]]); let C; do { C = pick([.05,.1,.15,.2,.25,.3,.5]); } while (C/Kb <= 400);
   const x = Math.sqrt(Kb*C), pOH = -Math.log10(x), pH = 14 - pOH;
   return { q:`Calcule el pH de ${s} ${C} M (Kb = ${sci(Kb,1)}).`, unit:``, ans:pH, abs:.02,
     pasos:[`Base débil: x = [OH⁻] = √(Kb · C₀).`,`[OH⁻] = √(${sci(Kb,1)} × ${C}) = ${sci(x,2)} M.`,`pOH = −log(${sci(x,2)}) = ${fx2(pOH)}.`,`pH = 14 − ${fx2(pOH)} = ${fx2(pH)}.`], r:`pH = ${fx2(pH)}` }; }},
 {id:`buf`,t:`t21`,src:`Tema 21, pág. 14–15`,name:`pH de un buffer (Henderson)`,make(){ const ac = Math.random() < .6; const a = between(.05, .5, .05), b = between(.05, .5, .05);
   if (ac){ const pH = 4.74 + Math.log10(b/a); return { q:`Buffer de CH₃COOH ${nf(a,2)} M y CH₃COONa ${nf(b,2)} M (pKa 4.74). Calcule el pH.`, unit:``, ans:pH, abs:.02, pasos:[`pH = pKa + log([A⁻]/[HA]).`,`pH = 4.74 + log(${nf(b,2)}/${nf(a,2)}) = 4.74 + (${fx2(Math.log10(b/a))}).`,`pH = ${fx2(pH)}.`], r:`pH = ${fx2(pH)}` }; }
   const pOH = 4.74 + Math.log10(b/a), pH = 14 - pOH; return { q:`Buffer de NH₃ ${nf(a,2)} M y NH₄Cl ${nf(b,2)} M (pKb 4.74). Calcule el pH.`, unit:``, ans:pH, abs:.02, pasos:[`pOH = pKb + log([NH₄⁺]/[NH₃]).`,`pOH = 4.74 + log(${nf(b,2)}/${nf(a,2)}) = ${fx2(pOH)}.`,`pH = 14 − ${fx2(pOH)} = ${fx2(pH)}.`], r:`pH = ${fx2(pH)}` }; }},
 {id:`tit`,t:`t21`,src:`Tema 21, pág. 10–11`,name:`Titulación ácido-base`,make(){ const Mb = pick([.1,.1,.15,.2,.25]), Va = pick([10,20,25]), Vb = between(8, 40, .1); const Ma = Mb*Vb/Va;
   if (Math.random() < .6) return { q:`Se valoran ${Va} mL de HCl con NaOH ${Mb} M y se gastan ${nf(Vb,1)} mL hasta el punto final. ¿Molaridad del HCl?`, unit:`M`, ans:Ma, rel:.02, pasos:[`Equivalencia: moles H⁺ = moles OH⁻ → Mₐ·Vₐ = M_b·V_b.`,`Mₐ = ${Mb} × ${nf(Vb,1)} / ${Va} = ${sci(Ma,3)} M.`], r:`${sci(Ma,3)} M` };
   const Ma2 = r3(Ma); const Vb2 = Ma2*Va/Mb; return { q:`¿Qué volumen de NaOH ${Mb} M neutraliza ${Va} mL de HCl ${Ma2} M?`, unit:`mL`, ans:Vb2, rel:.02, pasos:[`V_b = Mₐ·Vₐ / M_b.`,`V_b = ${Ma2} × ${Va} / ${Mb} = ${nf(Vb2,2)} mL.`], r:`${nf(Vb2,2)} mL` }; }},
 {id:`san`,t:`t21`,src:`Tema 21, pág. 2 · compl. [4]`,name:`pH sanguíneo (bicarbonato)`,make(){ const h = between(12, 36, 1), p = between(25, 60, 1); const pH = 6.1 + Math.log10(h/(.03*p));
   const est = pH < 7.35 ? (h < 22 ? `acidosis metabólica` : `acidosis (revisa pCO₂: posible origen respiratorio)`) : pH > 7.45 ? (h > 26 ? `alcalosis metabólica` : `alcalosis (posible origen respiratorio)`) : `pH dentro del rango normal`;
   return { q:`Gasometría: HCO₃⁻ ${h} mmol/L, pCO₂ ${p} mmHg. Calcule el pH con pH = 6.1 + log(HCO₃⁻ / (0.03 × pCO₂)).`, unit:``, ans:pH, abs:.02, pasos:[`0.03 × ${p} = ${nf(.03*p,2)} mmol/L de CO₂ disuelto.`,`${h} / ${nf(.03*p,2)} = ${nf(h/(.03*p),2)}; log = ${fx2(Math.log10(h/(.03*p)))}.`,`pH = 6.1 + ${fx2(Math.log10(h/(.03*p)))} = ${fx2(pH)}.`,`Interpretación: ${est}.`], r:`pH = ${fx2(pH)} → ${est}` }; }}
];
GENS.push(...PACKS.GENS);
const PR = { gen:null, cur:null, n:0, ok:0, streak:0 };
function vPractica(v){
  const gs = GENS.filter(g => S.sel.has(g.t) || (g.ts && g.ts.some(t => S.sel.has(t))));
  intro(v, `Ejercicios con números nuevos cada vez, del mismo tipo que los del material. Escribe tu resultado (acepta 0.0034, 3.4e-3 o 3.4x10^-3) y comprueba. Para pH la tolerancia es ±0.02; para concentraciones, ±2 %.`);
  if (!gs.length){ v.append(el(`div`,`empty`,`No hay generadores para los temas seleccionados.`)); return; }
  if (!PR.gen || !gs.includes(PR.gen)){ PR.gen = gs[0]; PR.cur = null; }
  const chips = el(`div`,`genchips`);
  gs.forEach(g => { const b = btn(`${g.name}`, `gchip`, () => { PR.gen = g; PR.cur = null; renderView(); }); b.style.setProperty(`--c`, `var(--${g.t})`); b.setAttribute(`aria-pressed`, PR.gen === g); chips.append(b); });
  chips.append(btn(`Al azar`, `gchip rnd`, () => { PR.gen = pick(gs); PR.cur = null; PR.rand = true; renderView(); }));
  v.append(chips);
  v.append(el(`div`,`scorebar`, `<span>Resueltos: <b>${PR.n}</b></span><span>Correctos: <b>${PR.ok}</b></span><span>Racha: <b>${PR.streak}</b></span>`));
  if (!PR.cur) PR.cur = PR.gen.make();
  const P = PR.cur, g = PR.gen;
  const c = card({ t:g.t, src:`modelo de ${g.src}` });
  c.append(el(`h3`,``, g.name), el(`p`,`q`, P.q));
  if (P.draw) c.append(el(`div`,`molbox`, P.draw));
  if (P.opts){ c.append(choiceBlock(P, g, v)); v.append(c); return; }
  const form = el(`form`,`ansrow`);
  form.innerHTML = `<label for="pans">Tu respuesta${P.unit ? ` (${P.unit})` : ``}</label><div class="inrow"><input id="pans" inputmode="decimal" autocomplete="off" placeholder="ej. ${P.abs ? `4.92` : `0.0316`}"><button class="btn" type="submit">Comprobar</button></div>`;
  const fb = el(`div`); const sol = el(`div`);
  const showSol = () => { sol.innerHTML = ``; const ol = el(`ol`,`steps`); P.pasos.forEach(p => ol.append(el(`li`,``,p))); sol.append(ol, el(`div`,`result`, `Resultado: ${P.r}`)); };
  form.onsubmit = e => {
    e.preventDefault(); if (P.done) return;
    const x = parseNum($(`#pans`, form).value);
    if (!isFinite(x)){ fb.className = `fb no`; fb.innerHTML = `<strong>Escribe un número.</strong> Usa punto o coma decimal; para notación científica escribe 3.4e-3 o 3.4x10^-3.`; return; }
    const ok = P.abs ? Math.abs(x - P.ans) <= P.abs + 1e-9 : Math.abs(x - P.ans) <= Math.abs(P.ans) * P.rel;
    P.done = true; PR.n++; if (ok){ PR.ok++; PR.streak++; } else PR.streak = 0;
    record({ id:`G_` + g.id, t:g.t }, ok);
    fb.className = `fb ${ok ? `ok` : `no`}`; fb.innerHTML = `<strong>${ok ? `Correcto.` : `No coincide. Revisa el procedimiento.`}</strong>Respuesta esperada: ${P.r}<span class="fbsrc">Repasa: ${g.src}</span>`;
    showSol();
    v.querySelector(`.scorebar`).innerHTML = `<span>Resueltos: <b>${PR.n}</b></span><span>Correctos: <b>${PR.ok}</b></span><span>Racha: <b>${PR.streak}</b></span>`;
  };
  const row = el(`div`,`btnrow`);
  row.append(btn(`Nuevo ejercicio`, `btn`, () => { if (PR.rand) PR.gen = pick(gs); PR.cur = null; renderView(); }), btn(`Ver solución sin responder`, `btn ghost`, () => { P.done = true; showSol(); }));
  c.append(form, fb, sol, row);
  v.append(c);
}

/* ---------- Laboratorio virtual ---------- */
const LABS = [{t:`t20`,ts:[`t18`,`t19`]},{t:`t17`},{t:`t20`,ts:[`t21`]},{t:`t21`},{t:`t21`},{t:`t23`,ts:[`t22`]}];
const IND = [[`Naranja de metilo`,3.2,4.4,[217,53,43],[242,194,48]],[`Azul de bromotimol`,6.0,7.6,[232,201,58],[47,95,179]],[`Fenolftaleína`,8.2,10.0,[245,245,245],[216,40,140]],[`Tornasol (aprox.)`,5.0,8.0,[214,60,60],[60,90,190]]];
const mix = (a, b, f) => `rgb(${a.map((x, i) => Math.round(x + (b[i]-x)*f)).join(`,`)})`;
const indColor = (d, pH) => mix(d[3], d[4], Math.max(0, Math.min(1, (pH - d[1])/(d[2]-d[1]))));
const UNIV = [[0,[194,24,91]],[2,[229,57,53]],[4,[251,140,0]],[5,[253,216,53]],[7,[124,179,66]],[9,[38,166,154]],[11,[30,136,229]],[14,[40,53,147]]];
function univColor(pH){ for (let i = 0; i < UNIV.length - 1; i++){ const [a, ca] = UNIV[i], [b, cb] = UNIV[i+1]; if (pH <= b) return mix(ca, cb, (pH - a)/(b - a)); } return mix(UNIV[7][1], UNIV[7][1], 0); }
function slider(id, label, min, max, step, val, fmt){
  const w = el(`div`,`sl`); w.innerHTML = `<label for="${id}">${label}: <b id="${id}v">${fmt(val)}</b></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}">`;
  return w;
}
function labCard(title, src, t, intro_){ const c = card({ t, src }, `lab`); c.append(el(`h3`,``, title), el(`p`,`muted`, intro_)); return c; }

function labPH(){
  const c = labCard(`Explorador de pH`, `Tema 18, pág. 8 · Tema 19, pág. 11–13 · Tema 20, pág. 4 y 7`, `t20`, `Mueve el pH y observa cómo cambian [H⁺], [OH⁻], el pOH y el color de los indicadores.`);
  c.append(slider(`lph`, `pH`, 0, 14, .1, 7, x => nf(x,1)));
  const out = el(`div`,`labout`); const vis = el(`div`,`labvis`); const lg = el(`div`,`labgrid`); lg.append(vis, out); c.append(lg);
  const upd = () => {
    const pH = +$(`#lph`, c).value; $(`#lphv`, c).textContent = nf(pH,1);
    const H = 10**-pH, OH = 10**-(14-pH);
    const cls = pH < 6.95 ? `Ácida` : pH > 7.05 ? `Básica` : `Neutra`;
    vis.innerHTML = `<svg viewBox="0 0 200 190" role="img" aria-label="Vaso con indicador universal"><rect x="42" y="${40}" width="116" height="130" rx="8" style="fill:${univColor(pH)};opacity:.85"/><path class="s" d="M35 20 L40 25 L40 162 Q40 172 50 172 L150 172 Q160 172 160 162 L160 25 L165 20"/><text x="100" y="110" text-anchor="middle" class="tk" style="font-size:30px">${nf(pH,1)}</text></svg><p class="muted center">Indicador universal</p>`;
    out.innerHTML = `<div class="kvgrid"><span>Clasificación</span><b>${cls}</b><span>[H⁺]</span><b>${sci(H,2)} M</b><span>[OH⁻]</span><b>${sci(OH,2)} M</b><span>pOH</span><b>${nf(14-pH,1)}</b><span>[H⁺] / [OH⁻]</span><b>${sci(H/OH,1)}</b></div>
      <div class="indrow">${IND.map(d => `<div class="ind"><i style="background:${indColor(d,pH)}"></i><span>${d[0]}</span></div>`).join(``)}</div>
      <p class="muted">Comparado con pH 7, esta solución tiene ${pH < 7 ? `<b>${sci(10**(7-pH),1)}</b> veces más H⁺` : pH > 7 ? `<b>${sci(10**(pH-7),1)}</b> veces menos H⁺` : `la misma cantidad de H⁺`}.</p>`;
  };
  $(`#lph`, c).oninput = upd; upd(); return c;
}
function labDil(){
  const c = labCard(`Simulador de dilución`, `Tema 17, pág. 3–6`, `t17`, `Fija el stock y el volumen final. La intensidad del color representa la concentración.`);
  c.append(slider(`dc1`, `C₁ (stock, M)`, .5, 12, .5, 2, x => nf(x,1)), slider(`dv1`, `V₁ (mL que tomas)`, 5, 250, 5, 50, x => x), slider(`dv2`, `V₂ (volumen final, mL)`, 10, 1000, 10, 250, x => x));
  const vis = el(`div`,`labvis wide`), out = el(`div`,`labout`); c.append(vis, out);
  const upd = () => {
    const C1 = +$(`#dc1`, c).value; let V1 = +$(`#dv1`, c).value; let V2 = +$(`#dv2`, c).value;
    $(`#dc1v`, c).textContent = nf(C1,1); $(`#dv1v`, c).textContent = V1; $(`#dv2v`, c).textContent = V2;
    if (V2 < V1){ out.innerHTML = `<div class="fb no"><strong>V₂ no puede ser menor que V₁.</strong>Regla 4 de la pág. 4: el volumen final siempre es mayor que el inicial.</div>`; vis.innerHTML = ``; return; }
    const C2 = C1*V1/V2, op = x => (.12 + .8*Math.min(1, x/12)).toFixed(2);
    const h1 = 20 + 110*V1/1000, h2 = 20 + 110*V2/1000;
    vis.innerHTML = `<svg viewBox="0 0 420 180" role="img" aria-label="Dilución"><rect x="40" y="${165-h1}" width="90" height="${h1}" rx="6" style="fill:var(--t17);opacity:${op(C1)}"/><path class="s" d="M35 25 L40 30 L40 160 Q40 168 48 168 L122 168 Q130 168 130 160 L130 30 L135 25"/><text x="85" y="20" text-anchor="middle" class="tb">${V1} mL · ${nf(C1,1)} M</text>
      <line x1="150" y1="100" x2="235" y2="100" class="ar" marker-end="url(#ah2)"/><text x="192" y="88" text-anchor="middle" class="tm">+ ${V2-V1} mL agua</text>
      <rect x="260" y="${165-h2}" width="120" height="${h2}" rx="6" style="fill:var(--t17);opacity:${op(C2)}"/><path class="s" d="M255 25 L260 30 L260 160 Q260 168 268 168 L372 168 Q380 168 380 160 L380 30 L385 25"/><text x="320" y="20" text-anchor="middle" class="tb">${V2} mL · ${sci(C2,3)} M</text>
      <defs><marker id="ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs></svg>`;
    out.innerHTML = `<p class="fx">C₂ = C₁ × V₁ / V₂ = ${nf(C1,1)} × ${V1} / ${V2} = ${sci(C2,3)} M</p><p class="muted">Moles de soluto (no cambian): ${sci(C1*V1/1000,3)} mol antes y ${sci(C2*V2/1000,3)} mol después. Factor de dilución: 1:${nf(V2/V1,2)}.</p>`;
  };
  [`#dc1`,`#dv1`,`#dv2`].forEach(s => $(s, c).oninput = upd); upd(); return c;
}
function labFD(){
  const c = labCard(`Ácido fuerte frente a débil`, `Tema 20, pág. 5–9 · Tema 21, pág. 6–7`, `t20`, `Misma concentración, distinto comportamiento. Compara el pH y el porcentaje de ionización.`);
  c.append(slider(`fdc`, `Concentración C₀ (M)`, -4, 0, .1, -1.3, x => sci(10**x,2)));
  const s = el(`div`,`sl`); s.innerHTML = `<label for="fdk">Ácido débil</label><select id="fdk"><option value="1.8e-5">Ácido acético (Ka 1.8 × 10⁻⁵)</option><option value="6.8e-4">HF (Ka 6.8 × 10⁻⁴)</option><option value="1.8e-4">Ácido fórmico (Ka 1.8 × 10⁻⁴)</option></select>`; c.append(s);
  const out = el(`div`,`labout`); c.append(out);
  const upd = () => {
    const C = 10**+$(`#fdc`, c).value, Ka = +$(`#fdk`, c).value; $(`#fdcv`, c).textContent = sci(C,2);
    const pHs = -Math.log10(C), x = (-Ka + Math.sqrt(Ka*Ka + 4*Ka*C))/2, xa = Math.sqrt(Ka*C), pHw = -Math.log10(x), ion = x/C*100, ok = C/Ka > 400;
    out.innerHTML = `<div class="cmp"><div><h4>HCl (fuerte)</h4><p class="big">pH ${fx2(pHs)}</p><div class="hbar"><i style="width:100%;background:var(--t15)"></i></div><p class="muted">100 % ionizado · [H⁺] = C₀</p></div>
      <div><h4>Débil</h4><p class="big">pH ${fx2(pHw)}</p><div class="hbar"><i style="width:${Math.min(100,ion)}%;background:var(--t18)"></i></div><p class="muted">${nf(ion,2)} % ionizado · [H⁺] = ${sci(x,2)} M</p></div></div>
      <p class="${ok ? `muted` : `trap`}">C₀/Ka = ${nf(C/Ka,0)} ${ok ? `> 400: la aproximación √(Ka·C₀) funciona (daría pH ${fx2(-Math.log10(xa))}).` : `≤ 400: la aproximación √(Ka·C₀) daría pH ${fx2(-Math.log10(xa))}, con error apreciable. El valor mostrado viene de la ecuación cuadrática.`}</p>
      <p class="muted">Diluye el ácido débil (mueve C₀ a la izquierda): el % de ionización aumenta.</p>`;
  };
  $(`#fdc`, c).oninput = upd; $(`#fdk`, c).onchange = upd; upd(); return c;
}
function labBuf(){
  const c = labCard(`Buffer acetato en acción`, `Tema 21, pág. 12–15`, `t21`, `Un litro de buffer CH₃COOH/CH₃COO⁻ (pKa 4.74) frente a un litro de agua pura. Agrega ácido o base y compara.`);
  c.append(slider(`bha`, `CH₃COOH (mol)`, .01, .3, .01, .1, x => nf(x,2)), slider(`bA`, `CH₃COO⁻ (mol)`, .01, .3, .01, .1, x => nf(x,2)));
  const B = { h:0 };
  const row = el(`div`,`btnrow`); const out = el(`div`,`labout`); const log = el(`ul`,`blog`);
  const pHbuf = (ha, a) => { if (a < -1e-12) return -Math.log10(-a); if (ha < -1e-12) return 14 + Math.log10(-ha); if (a <= 1e-9) return -Math.log10(Math.sqrt(1.8e-5*ha)); if (ha <= 1e-9) return 14 + Math.log10(Math.sqrt(5.56e-10*a)); return 4.74 + Math.log10(a/ha); };
  const pHw = h => Math.abs(h) < 1e-9 ? 7 : h > 0 ? -Math.log10(h) : 14 + Math.log10(-h);
  const upd = () => {
    const HA0 = +$(`#bha`, c).value, A0 = +$(`#bA`, c).value; $(`#bhav`, c).textContent = nf(HA0,2); $(`#bAv`, c).textContent = nf(A0,2);
    const ha = HA0 + B.h, a = A0 - B.h; const p0 = 4.74 + Math.log10(A0/HA0), p = pHbuf(ha, a), w = pHw(B.h);
    out.innerHTML = `<div class="cmp"><div><h4>Buffer</h4><p class="big">pH ${fx2(p)}</p><p class="muted">Inicial ${fx2(p0)} · cambio ${(p-p0 >= 0 ? `+` : ``) + fx2(p-p0)}</p><p class="muted">HA = ${nf(Math.max(0,ha),3)} mol · A⁻ = ${nf(Math.max(0,a),3)} mol</p></div>
      <div><h4>Agua pura</h4><p class="big">pH ${fx2(w)}</p><p class="muted">Inicial 7.00 · cambio ${(w-7 >= 0 ? `+` : ``) + fx2(w-7)}</p></div></div>
      ${(a <= 1e-9 || ha <= 1e-9) ? `<p class="trap"><b>Capacidad agotada:</b> se consumió por completo uno de los dos componentes; el buffer ya no amortigua.</p>` : `<p class="fx">pH = 4.74 + log(${nf(a,3)} / ${nf(ha,3)}) = ${fx2(p)}</p>`}`;
  };
  const add = (d, txt) => { B.h += d; log.prepend(el(`li`,``, txt)); upd(); };
  row.append(btn(`+ 0.01 mol HCl`, `btn`, () => add(.01, `Se agregó 0.01 mol de H⁺: A⁻ + H⁺ → HA`)), btn(`+ 0.01 mol NaOH`, `btn`, () => add(-.01, `Se agregó 0.01 mol de OH⁻: HA + OH⁻ → A⁻ + H₂O`)), btn(`Reiniciar`, `btn ghost`, () => { B.h = 0; log.innerHTML = ``; upd(); }));
  c.append(row, out, log);
  [`#bha`,`#bA`].forEach(s => $(s, c).oninput = upd); upd(); return c;
}
function labTit(){
  const c = labCard(`Titulación HCl con NaOH`, `Tema 21, pág. 10–11 (curva: complementario [2])`, `t21`, `En el Erlenmeyer hay 25.0 mL de HCl con fenolftaleína. Agrega NaOH desde la bureta y observa el viraje.`);
  c.append(slider(`tma`, `HCl en el matraz (M)`, .05, .2, .01, .1, x => nf(x,2)), slider(`tmb`, `NaOH en la bureta (M)`, .05, .2, .01, .1, x => nf(x,2)), slider(`tvb`, `Volumen de NaOH agregado (mL)`, 0, 60, .1, 10, x => nf(x,1)));
  const vis = el(`div`,`labvis wide`), out = el(`div`,`labout`); c.append(vis, out);
  const pHat = (Ma, Mb, v) => { const na = Ma*25, nb = Mb*v, Vt = 25 + v; if (Math.abs(na - nb) < 1e-9) return 7; return nb < na ? -Math.log10((na-nb)/Vt) : 14 + Math.log10((nb-na)/Vt); };
  const upd = () => {
    const Ma = +$(`#tma`, c).value, Mb = +$(`#tmb`, c).value, vb = +$(`#tvb`, c).value; $(`#tmav`, c).textContent = nf(Ma,2); $(`#tmbv`, c).textContent = nf(Mb,2); $(`#tvbv`, c).textContent = nf(vb,1);
    const Veq = Ma*25/Mb, pH = pHat(Ma, Mb, vb);
    const X = v => 50 + v/60*360, Y = p => 160 - p/14*140; let d = ``;
    for (let v = 0; v <= 60; v += .2) d += (v ? `L` : `M`) + X(v).toFixed(1) + ` ` + Y(pHat(Ma, Mb, v)).toFixed(1);
    const pink = Math.max(0, Math.min(1, (pH - 8.2)/1.8));
    vis.innerHTML = `<svg viewBox="0 0 420 190" role="img" aria-label="Curva de titulación"><line x1="50" y1="160" x2="410" y2="160" class="s"/><line x1="50" y1="160" x2="50" y2="15" class="s"/>
      ${[0,7,14].map(p => `<text x="42" y="${Y(p)+4}" text-anchor="end" class="tm">${p}</text>`).join(``)}${[0,20,40,60].map(v => `<text x="${X(v)}" y="176" text-anchor="middle" class="tm">${v}</text>`).join(``)}
      <line x1="${X(Veq)}" y1="15" x2="${X(Veq)}" y2="160" class="dash"/><text x="${X(Veq)+4}" y="26" class="tm">V eq = ${nf(Veq,1)} mL</text>
      <path d="${d}" class="ln" style="stroke:var(--t21)"/><circle cx="${X(vb)}" cy="${Y(pH)}" r="6" style="fill:var(--t21)"/>
      <path d="M78 20 L78 32 L60 62 Q58 68 64 68 L112 68 Q118 68 116 62 L98 32 L98 20" class="s" style="fill:${mix([245,245,245],[216,40,140],pink)};fill-opacity:${.25 + pink*.6}"/>
      <text x="230" y="188" text-anchor="middle" class="tm">mL de NaOH</text></svg>`;
    const st = Math.abs(vb - Veq) < .05 ? `Punto de equivalencia: moles H⁺ = moles OH⁻, pH 7.00.` : vb < Veq ? `Antes de la equivalencia: sobra HCl.` : `Después de la equivalencia: sobra NaOH.`;
    out.innerHTML = `<div class="kvgrid"><span>pH en el matraz</span><b>${fx2(pH)}</b><span>Volumen de equivalencia</span><b>${nf(Veq,2)} mL</b><span>Color (fenolftaleína)</span><b>${pH < 8.2 ? `incolora` : pH < 10 ? `rosa tenue` : `fucsia`}</b></div><p class="muted">${st}</p><p class="fx">V eq = Mₐ × Vₐ / M_b = ${nf(Ma,2)} × 25.0 / ${nf(Mb,2)} = ${nf(Veq,2)} mL</p>`;
  };
  [`#tma`,`#tmb`,`#tvb`].forEach(s => $(s, c).oninput = upd); upd(); return c;
}
function vLab(v){
  intro(v, `Simuladores para ver con tus propios ojos lo que dicen las fórmulas. Úsalos para comprobar tus resultados de los ejercicios.`);
  const l = el(`div`,`list`);
  const want = t => S.sel.has(t);
  if (want(`t18`) || want(`t19`) || want(`t20`)) l.append(labPH());
  if (want(`t17`)) l.append(labDil());
  if (want(`t20`) || want(`t21`)) l.append(labFD());
  if (want(`t21`)){ l.append(labBuf()); l.append(labTit()); }
  if (want(`t22`) || want(`t23`)) l.append(labHC());
  if (!l.children.length) l.append(el(`div`,`empty`,`Los simuladores son de los temas 17 a 23. Selecciona alguno de esos tubos.`));
  v.append(l);
}

/* ---------- Simulacro ---------- */
const SIM = { on:false, qs:[], i:0, ok:0, wrong:[], timer:0, t0:0, tick:null, byT:{}, fb:`now`, ans:[], pick:null };
const EXAM = { cur:null };
function vSimulacro(v){
  const pool = filt(ALL.MCQ);
  if (!SIM.on){
    const box = el(`div`,`simstart`);
    box.append(el(`h2`,``,`Simulacro en pantalla`), el(`p`,``, `Preguntas al azar de los temas seleccionados (${pool.length} disponibles), una por una. Al final verás tu nota sobre 10, tu rendimiento por tema y la página exacta del material de cada error.`));
    const t = el(`div`,`sl`); t.innerHTML = `<label for="simt">Tiempo</label><select id="simt"><option value="0">Sin límite</option><option value="60">1 minuto por pregunta</option><option value="90" selected>1.5 minutos por pregunta</option></select>`; box.append(t);
    const f = el(`div`,`sl`); f.innerHTML = `<label for="simfb">¿Cuándo quieres ver si acertaste?</label><select id="simfb"><option value="now" ${S.simFb === `now` ? `selected` : ``}>En el momento, después de cada pregunta</option><option value="end" ${S.simFb === `end` ? `selected` : ``}>Al finalizar, como en el examen real</option></select>`; box.append(f);
    f.querySelector(`select`).onchange = e => { S.simFb = e.target.value; save(); };
    const row = el(`div`,`btnrow`);
    [10,20,30].filter(n => n < pool.length).concat([pool.length]).forEach(n => row.append(btn(n === pool.length ? `Todas (${n})` : `${n} preguntas`, `btn`, () => {
      const per = +$(`#simt`).value; S.simFb = $(`#simfb`).value; save(); Object.assign(SIM, { saved:false, on:true, qs:shuf(pool).slice(0,n), i:0, ok:0, wrong:[], byT:{}, timer: per*n, t0: Date.now(), fb:S.simFb, ans:[], pick:null }); startTick(); renderView(); })));
    box.append(row); v.append(box);
    return;
  }
  if (SIM.i >= SIM.qs.length){
    stopTick();
    const nota = (SIM.ok / Math.max(1, SIM.qs.length) * 10).toFixed(1);
    if (!SIM.saved && SIM.qs.length){ SIM.saved = true; S.x.simLast = { d: todayStr(), nota: +nota, ts:[...new Set(SIM.qs.map(q => q.t))] }; save(); }
    const box = el(`div`,`simstart`);
    const used = Math.round((Date.now() - SIM.t0)/1000);
    box.append(el(`p`,`score`, `${nota} / 10`), el(`p`,``, `${SIM.ok} correctas de ${SIM.qs.length} · tiempo usado ${Math.floor(used/60)} min ${used%60} s.`));
    const bt = el(`div`,`bytopic`);
    Object.entries(SIM.byT).forEach(([t, [o, n]]) => bt.append(el(`div`,`btr`, `<span style="--c:var(--${t})" class="chip">${TOPICS[t].n}</span><div class="hbar"><i style="width:${o/n*100}%;background:var(--${t})"></i></div><span>${o}/${n}</span>`)));
    box.append(el(`h3`,``,`Rendimiento por tema`), bt);
    if (SIM.wrong.length){ box.append(el(`h3`,``,`Repasa estas páginas`)); const ul = el(`ul`); SIM.wrong.forEach(w => ul.append(el(`li`,``, `<b>${w.src}</b>: ${w.q}`))); box.append(ul); }
    else box.append(el(`p`,``,`Sin errores. Prueba con otra combinación de temas.`));
    const row = el(`div`,`btnrow`); row.append(btn(`Nuevo simulacro`, `btn`, () => { SIM.on = false; renderView(); }));
    if (SIM.wrong.length) row.append(btn(`Practicar mis errores`, `btn ghost`, () => { S.onlyErr = true; SIM.on = false; go(`preguntas`); }));
    box.append(row); v.append(box);
    if (SIM.fb === `end` && SIM.ans.length) v.append(simReview());
    return;
  }
  const it = SIM.qs[SIM.i];
  if (SIM.fb === `end`){
    const hd = el(`div`,`scorebar`); hd.innerHTML = `<span>Pregunta ${SIM.i+1} de ${SIM.qs.length}</span><span>Respuestas ocultas hasta el final</span>${SIM.timer ? `<span>Tiempo: <b id="clock">—</b></span>` : ``}`;
    v.append(hd, el(`div`,`bar`, `<i style="width:${SIM.i/SIM.qs.length*100}%"></i>`));
    SIM.pick = null;
    const r = el(`div`,`btnrow`);
    const nb = btn(SIM.i+1 < SIM.qs.length ? `Siguiente pregunta` : `Terminar y ver mi nota`, `btn`, () => {
      const p = SIM.pick; if (!p) return; const ok = p.x.ok;
      record(it, ok); if (ok) SIM.ok++; else SIM.wrong.push(it);
      const b = SIM.byT[it.t] || [0,0]; b[1]++; if (ok) b[0]++; SIM.byT[it.t] = b;
      SIM.ans.push({ it, o:p.o, i:p.i, ok }); SIM.i++; renderView(); topScroll();
    });
    nb.disabled = true;
    const c = mcqCard(it, null, { defer: (x, o, i) => { SIM.pick = { x, o, i }; nb.disabled = false; } });
    r.append(nb); c.append(r); v.append(c);
    const q = el(`div`,`btnrow`); q.append(btn(`Terminar simulacro`, `btn ghost`, () => { SIM.qs = SIM.qs.slice(0, SIM.i); renderView(); })); v.append(q);
    updClock(); return;
  }
  const hd = el(`div`,`scorebar`); hd.innerHTML = `<span>Pregunta ${SIM.i+1} de ${SIM.qs.length}</span><span>Correctas: <b>${SIM.ok}</b></span>${SIM.timer ? `<span>Tiempo: <b id="clock">—</b></span>` : ``}`;
  v.append(hd, el(`div`,`bar`, `<i style="width:${SIM.i/SIM.qs.length*100}%"></i>`));
  const c = mcqCard(it, (ok, cc) => {
    if (ok) SIM.ok++; else SIM.wrong.push(it);
    const b = SIM.byT[it.t] || [0,0]; b[1]++; if (ok) b[0]++; SIM.byT[it.t] = b;
    const r = el(`div`,`btnrow`); const nb = btn(SIM.i+1 < SIM.qs.length ? `Siguiente pregunta` : `Ver mi nota`, `btn`, () => { SIM.i++; renderView(); }); r.append(nb); cc.append(r); nb.focus();
  });
  v.append(c);
  const q = el(`div`,`btnrow`); q.append(btn(`Terminar simulacro`, `btn ghost`, () => { SIM.qs = SIM.qs.slice(0, SIM.i); renderView(); })); v.append(q);
  updClock();
}
const RV = { onlyBad:false };
function simReview(){
  const wrap = el(`section`,`review`);
  const bad = SIM.ans.filter(a => !a.ok).length;
  wrap.append(el(`h2`,``,`Revisión de tus respuestas`));
  const sg = el(`div`,`seg`);
  [[false, `Todas (${SIM.ans.length})`],[true, `Solo incorrectas (${bad})`]].forEach(([k, t]) => { const b = btn(t, `segb`, () => { RV.onlyBad = k; renderView(); }); b.setAttribute(`aria-pressed`, RV.onlyBad === k); sg.append(b); });
  wrap.append(sg);
  const l = el(`div`,`list`);
  SIM.ans.forEach((a, n) => {
    if (RV.onlyBad && a.ok) return;
    const c = card(a.it);
    c.append(el(`p`,`q`, `<span class="qn">${n+1}.</span> ${a.it.q}`));
    const box = el(`div`,`opts`);
    a.o.forEach((x, i) => { const cls = x.ok ? `right` : i === a.i ? `wrong` : `dim`; const d = el(`div`, `opt ${cls}`, `<span class="k">${LET[i]}</span><span>${x.t}${i === a.i ? ` <em class="mine">(tu respuesta)</em>` : ``}</span>`); box.append(d); });
    c.append(box, el(`div`, `fb ${a.ok ? `ok` : `no`}`, `<strong>${a.ok ? `Correcto.` : `Incorrecto. La respuesta es: ${a.o.find(x => x.ok).t}`}</strong>${a.it.e}<span class="fbsrc">Repasa: ${a.it.src}</span>`));
    l.append(c);
  });
  wrap.append(l);
  return wrap;
}
function updClock(){
  const ck = $(`#clock`); if (!SIM.on || !SIM.timer) return;
  const left = SIM.timer - Math.floor((Date.now() - SIM.t0)/1000);
  if (left <= 0){ stopTick(); SIM.qs = SIM.qs.slice(0, SIM.i); renderView(); return; }
  if (ck){ ck.textContent = `${Math.floor(left/60)}:${String(left%60).padStart(2,`0`)}`; ck.classList.toggle(`late`, left < 60); }
}
function startTick(){ stopTick(); if (SIM.timer) SIM.tick = setInterval(updClock, 1000); }
function stopTick(){ if (SIM.tick){ clearInterval(SIM.tick); SIM.tick = null; } }

/* ---------- Parcial impreso con código ---------- */
const EX_POINTS = { m:1, e:3, d:2 };
function examUnit(ts){ const u = UNITS.find(u => ts.every(t => u.ts.includes(t))); return !u ? `Química` : u === UNITS[0] ? `Módulo IV` : u.name.replace(` · `, `: `).replace(`Hidrocarburos`, `hidrocarburos`).replace(`Funciones oxigenadas`, `funciones oxigenadas`); }
function maskOf(set){ return TORDER.reduce((m, t, i) => set.has(t) ? m + 2 ** i : m, 0); }
function makeCode(nm, ne, nd){ const seed = Math.floor(Math.random()*1679616); return `M4-${maskOf(S.sel).toString(16).toUpperCase().padStart(2,`0`)}-${nm}-${ne}-${nd}-${seed.toString(36).toUpperCase().padStart(4,`0`)}`; }
function buildExam(code){
  const m = String(code).trim().toUpperCase().match(/^M4-([0-9A-F]{2,8})-(\d{1,2})-(\d{1,2})-(\d{1,2})-([0-9A-Z]{1,4})$/);
  if (!m) return null;
  const mask = parseInt(m[1], 16), topics = TORDER.filter((t, i) => Math.floor(mask / 2 ** i) % 2 === 1); if (!topics.length) return null;
  const rng = mulberry(parseInt(m[5], 36) + 977);
  const inT = x => topics.includes(x.t);
  const pickN = (arr, n) => shufR(arr.filter(inT), rng).slice(0, n);
  const mcq = pickN(ALL.MCQ, +m[2]).map(it => { const o = shufR(it.o.map((t, i) => ({ t, ok: i === 0 })), rng); return { it, o, L: LET[o.findIndex(x => x.ok)] }; });
  const ord = arr => arr.sort((a, b) => TORDER.indexOf(a.it ? a.it.t : a.t) - TORDER.indexOf(b.it ? b.it.t : b.t));
  return { code: m[0], topics, mcq: ord(mcq), ej: ord(pickN(ALL.EJ, +m[3])), des: ord(pickN(ALL.ABIERTAS, +m[4])) };
}
function examBuilder(pool){
  const box = el(`div`,`simstart printbox`);
  box.innerHTML = `<h2>Parcial impreso</h2><p>Genera un parcial con opción múltiple, ejercicios y preguntas de desarrollo. Se descarga en <b>dos PDF separados</b>: el examen (con hoja para marcar respuestas) y la hoja de respuestas con la solución paso a paso. Así puedes imprimir el examen y abrir las respuestas solo cuando termines.</p>`;
  const nE = filt(ALL.EJ).length, nD = filt(ALL.ABIERTAS).length;
  const g = el(`div`,`exgrid`);
  g.innerHTML = `<label>Opción múltiple<select id="exm">${[10,15,20,25,30].filter(n => n <= pool.length).map(n => `<option ${n===20?`selected`:``}>${n}</option>`).join(``)}</select></label>
    <label>Ejercicios<select id="exe">${[0,2,3,4,5,6].filter(n => n <= nE).map(n => `<option ${n===4?`selected`:``}>${n}</option>`).join(``)}</select></label>
    <label>Desarrollo<select id="exd">${[0,1,2,3,4].filter(n => n <= nD).map(n => `<option ${n===2?`selected`:``}>${n}</option>`).join(``)}</select></label>`;
  box.append(g);
  const codeRow = el(`div`,`coderow`);
  const show = () => {
    codeRow.innerHTML = ``;
    if (!EXAM.cur) return;
    const ex = EXAM.cur, pts = ex.mcq.length*EX_POINTS.m + ex.ej.length*EX_POINTS.e + ex.des.length*EX_POINTS.d;
    codeRow.append(el(`p`,``, `Código del parcial: <b class="code">${ex.code}</b> · ${ex.mcq.length} de opción múltiple, ${ex.ej.length} ejercicios, ${ex.des.length} de desarrollo · ${pts} puntos.`));
    const r = el(`div`,`btnrow`);
    r.append(btn(`1. Descargar examen (PDF)`, `btn pdfbtn`, () => exportPdf(`examen`, ex)), btn(`2. Descargar hoja de respuestas (PDF)`, `btn ghost pdfbtn`, () => exportPdf(`clave`, ex)));
    codeRow.append(r, el(`p`,`muted`, `Anota el código. Con él puedes volver a generar la hoja de respuestas de este mismo examen cuando quieras.`));
  };
  const row = el(`div`,`btnrow`);
  row.append(btn(`Generar parcial nuevo`, `btn`, () => { EXAM.cur = buildExam(makeCode(+$(`#exm`).value, +$(`#exe`).value, +$(`#exd`).value)); show(); }));
  box.append(row, codeRow);
  const rec = el(`form`,`ansrow`); rec.innerHTML = `<label for="excode">¿Ya tienes un código? Recupera ese examen y su hoja de respuestas</label><div class="inrow"><input id="excode" placeholder="M4-7F-20-4-2-K7Q3" autocomplete="off"><button class="btn ghost" type="submit">Recuperar</button></div>`;
  const rm = el(`p`,`muted`);
  rec.onsubmit = e => { e.preventDefault(); const ex = buildExam($(`#excode`).value); if (!ex){ rm.textContent = `Ese código no es válido. Revisa que tenga el formato M4-XX-N-N-N-XXXX.`; return; } rm.textContent = ``; EXAM.cur = ex; show(); };
  box.append(rec, rm);
  const pm = el(`p`,`pdfmsg`); pm.id = `pdfmsg`; pm.setAttribute(`aria-live`,`polite`); box.append(pm);
  show();
  return box;
}

/* ---------- Formulario ---------- */
const PMT = [[`NaCl`,`58.5`],[`NaOH`,`40`],[`KOH`,`56`],[`HCl`,`36.5`],[`H₂SO₄`,`98`],[`H₃PO₄`,`98`],[`Ca(OH)₂`,`74`],[`Na₂CO₃`,`106`],[`Al₂(SO₄)₃`,`342`],[`Glucosa C₆H₁₂O₆`,`180`],[`Sacarosa C₁₂H₂₂O₁₁`,`342`],[`Urea CO(NH₂)₂`,`60`],[`Manitol C₆H₁₄O₆`,`182`],[`(NH₄)₂SO₄`,`132`],[`CuSO₄·5H₂O`,`249.5`],[`EDTA Na₂·2H₂O`,`372`]];
function formTable(it){ return `<table class="tbl"><tbody>${it.rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join(``)}</tbody></table>`; }
function vFormulario(v){
  const l = el(`div`,`list`);
  filt(ALL.FORM).forEach(it => { const c = card(it); c.append(el(`h3`,``, it.title), el(`div`,`scroll`, formTable(it))); l.append(c); });
  if ([`t16`,`t17`,`t21`].some(t => S.sel.has(t))){
    const c = card({ t:`t16`, src:`Tema 16, pág. 15–26 y Tema 21, pág. 3` }); c.append(el(`h3`,``,`Pesos moleculares (g/mol)`));
    c.append(el(`div`,`scroll`, `<table class="tbl"><thead><tr><th>Compuesto</th><th>PM</th></tr></thead><tbody>${PMT.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join(``)}</tbody></table>`), el(`p`,`note`,`Masas atómicas: H 1, C 12, N 14, O 16, Na 23, Al 27, P 31, S 32, Cl 35.5, K 39, Ca 40, Cu 63.5.`));
    l.append(c);
  }
  v.append(l);
  v.append(refsBlock());
}
function refsBlock(){
  const d = el(`section`,`refs`); d.innerHTML = `<h2>Referencias (Vancouver)</h2><p class="muted">Cada ítem indica su fuente. "Tema N, pág. X" se refiere al material del docente [1]. "Complementario [n]" marca datos que no están en las diapositivas.</p><ol>${REFS.map(r => `<li>${r}</li>`).join(``)}</ol>`;
  return d;
}

/* ---------- Mi progreso ---------- */
function vProgreso(v){
  const box = el(`div`,`list`);
  const c1 = el(`article`,`card plain`);
  c1.append(el(`h3`,``,`Aciertos por tema`), el(`p`,`muted`,`Suma preguntas, ejercicios autocalificados, fichas, práctica infinita y simulacros.`));
  const bt = el(`div`,`bytopic`);
  TORDER.forEach(t => { const [o, b] = S.st[`T_`+t] || [0,0]; const n = o + b; bt.append(el(`div`,`btr`, `<span style="--c:var(--${t})" class="chip">${TOPICS[t].n}</span><div class="hbar"><i style="width:${n ? o/n*100 : 0}%;background:var(--${t})"></i></div><span>${n ? Math.round(o/n*100) + ` %` : `—`} <small>(${o}/${n})</small></span>`)); });
  c1.append(bt);
  const weak = TORDER.map(t => { const [o, b] = S.st[`T_`+t] || [0,0]; return [t, o+b ? o/(o+b) : null, o+b]; }).filter(x => x[2] >= 5).sort((a, b) => a[1] - b[1])[0];
  if (weak && weak[1] < .8) c1.append(el(`p`,`memo`, `<b>Recomendación:</b> tu tema más débil es el ${TOPICS[weak[0]].n} (${Math.round(weak[1]*100)} %). Repasa sus tarjetas y fichas antes del parcial.`));
  box.append(c1);
  const c2 = el(`article`,`card plain`); c2.append(el(`h3`,``,`Fichas dominadas`));
  const bt2 = el(`div`,`bytopic`);
  TORDER.forEach(t => { const fs = ALL.FICHAS.filter(f => f.t === t), d = fs.filter(f => fichaBox(f.id) >= 3).length; bt2.append(el(`div`,`btr`, `<span style="--c:var(--${t})" class="chip">${TOPICS[t].n}</span><div class="hbar"><i style="width:${fs.length ? d/fs.length*100 : 0}%;background:var(--${t})"></i></div><span>${d}/${fs.length}</span>`)); });
  c2.append(bt2); box.append(c2);
  const errs = ALL.MCQ.filter(q => S.err.includes(q.id));
  const c3 = el(`article`,`card plain`); c3.append(el(`h3`,``, `Preguntas para repasar (${errs.length})`));
  if (errs.length){
    c3.append(el(`p`,`muted`,`Son las que fallaste la última vez que las respondiste. Salen de esta lista cuando las aciertas.`));
    const ul = el(`ul`,`errlist`); errs.forEach(q => ul.append(el(`li`,``, `<span class="chip" style="--c:var(--${q.t})">${TOPICS[q.t].n}</span> ${q.q} <span class="src">${q.src}</span>`))); c3.append(ul);
    const br = el(`div`,`btnrow`); br.append(btn(`Practicar solo mis errores`, `btn`, () => { S.sel = new Set(TORDER); S.onlyErr = true; go(`preguntas`); })); c3.append(br);
  } else c3.append(el(`p`,`muted`,`Aún no tienes errores registrados. Responde preguntas o haz un simulacro.`));
  box.append(c3);
  const c4 = el(`article`,`card plain`); c4.append(el(`h3`,``,`Borrar mi progreso`), el(`p`,`muted`,`Elimina contadores, errores y cajas de fichas guardados en este navegador.`));
  const conf = el(`div`,`btnrow`);
  const b1 = btn(`Borrar progreso`, `btn ghost`, () => { conf.innerHTML = ``; conf.append(el(`span`,`muted`,`¿Seguro? No se puede deshacer.`), btn(`Sí, borrar`, `btn danger`, () => { S.st = {}; S.err = []; S.box = {}; save(); renderAll(); }), btn(`Cancelar`, `btn ghost`, () => renderView())); });
  conf.append(b1); c4.append(conf); progresoExtras(box); box.append(c4);
  v.append(box);
}

/* ======================= EXPORTACIÓN A PDF ======================= */
const JSPDF_URL = window.LIB_LOCAL ? `lib/jspdf.umd.min.js` : `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`;
const H2C_URL = window.LIB_LOCAL ? `lib/html2canvas.min.js` : `https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js`;
const dlP = (window.claude && typeof window.claude.use === `function`) ? window.claude.use(`downloads`).catch(() => null) : Promise.resolve(null);
let libsP = null;
function loadScript(src){ return new Promise((res, rej) => { const s = document.createElement(`script`); s.src = src; s.onload = res; s.onerror = () => rej(new Error(`load`)); document.head.append(s); }); }
function ensureLibs(){ if (window.jspdf && window.html2canvas) return Promise.resolve(); if (!libsP) libsP = Promise.all([loadScript(JSPDF_URL), loadScript(H2C_URL)]).catch(e => { libsP = null; throw e; }); return libsP; }
const PDF = { busy:false };
const tagSel = () => `Temas_` + TORDER.filter(k => S.sel.has(k)).map(k => k.slice(1)).join(`-`);
const selNames = (ts) => (ts || TORDER.filter(k => S.sel.has(k))).map(k => `${TOPICS[k].n} (${TOPICS[k].name})`).join(`, `);

function pcard(it, inner){ const c = el(`div`,`pcard`); c.style.setProperty(`--c`, `var(--${it.t})`); c.innerHTML = `<div class="pmeta"><span class="pchip"><i></i>${TOPICS[it.t].n}</span><span class="psrc">Fuente: ${it.src}</span></div>` + inner; return c; }
function psec(t, sub){ const d = el(`div`,`psec`); d.innerHTML = `<h2>${t}</h2>` + (sub ? `<p>${sub}</p>` : ``); return d; }
const lines = n => `<div class="plines">${`<i></i>`.repeat(n)}</div>`;
function withTopicHeaders(items, make){ const out = []; let last = null; items.forEach((it, i) => { const t = it.it ? it.it.t : it.t; if (t !== last){ out.push(psec(`${TOPICS[t].n}: ${TOPICS[t].name}`)); last = t; } out.push(make(it, i)); }); return out; }
function pfig(key){ const f = FIG[key]; return f ? `<div class="pfig">${f.svg}<p class="psmall"><b>Ilustración · ${f.src}.</b> ${f.cap}</p></div>` : ``; }
function ejSolution(it, n){
  const pasos = it.pasos.map((p, i) => `<div class="pstep"><b>Paso ${i+1}.</b> ${p}</div>`).join(``);
  return pcard(it, `<p class="pq">${n}. ${it.q}</p><p><b>¿Qué me pide?</b> ${it.pide}</p><p><b>Datos:</b> ${it.datos.join(`; `)}.</p>${it.f && it.f !== `—` ? `<p class="fx">${it.f}</p>` : ``}${pasos}<div class="result">Resultado: ${it.r}</div>${it.ojo ? `<p class="trap"><b>Ojo:</b> ${it.ojo}</p>` : ``}`);
}
function mcqPrint(it, o, n, withAns){
  const L = LET[o.findIndex(x => x.ok)];
  const ol = o.map((x, i) => `<div class="popt${withAns && x.ok ? ` pok` : ``}"><b>${LET[i]})</b> ${x.t}${withAns && x.ok ? ` ✓` : ``}</div>`).join(``);
  return { node: pcard(it, `<p class="pq">${n}. ${it.q}</p>${ol}${withAns ? `<div class="pexp"><b>Respuesta: ${L}.</b> ${it.e}</div>` : ``}`), key: { n, L, txt: o.find(x => x.ok).t, src: it.src, e: it.e } };
}
function keyTable(keys, title, sub){
  const out = [psec(title, sub)];
  for (let i = 0; i < keys.length; i += 12){
    const d = el(`div`,`pplain`); d.innerHTML = `<table class="tbl"><thead><tr><th>N.º</th><th>Letra</th><th>Respuesta correcta</th><th>Fuente para repasar</th></tr></thead><tbody>${keys.slice(i, i+12).map(k => `<tr><td>${k.n}</td><td><b>${k.L}</b></td><td>${k.txt}</td><td>${k.src}</td></tr>`).join(``)}</tbody></table>`; out.push(d);
  }
  return out;
}
function bubbleSheet(n){
  const d = el(`div`,`pplain`); let rows = ``;
  for (let i = 1; i <= n; i++) rows += `<div class="bub"><b>${i}</b>${[`A`,`B`,`C`,`D`].map(l => `<span>${l}</span>`).join(``)}</div>`;
  d.innerHTML = `<div class="bubgrid">${rows}</div>`; return d;
}
const BUILD = {
  guia: () => ({ title:`Guía: cómo estudiar con esta herramienta`, file:`Guia_de_estudio`, topics: TORDER, blocks: GUIA.map(g => { const d = el(`div`,`pcard`); d.style.setProperty(`--c`,`var(--ink)`); d.innerHTML = `<h3>${g.h}</h3>${g.html}`; return d; }) }),
  repaso: () => ({ title:`Repaso de teoría con ilustraciones`, file:`Repaso`, blocks: withTopicHeaders(filt(ALL.REPASO), it => pcard(it, `<h3>${it.title}</h3><div>${it.body}</div>${it.fig ? pfig(it.fig) : ``}${it.memo ? `<p class="memo"><b>Para memorizar:</b> ${it.memo}</p>` : ``}`)) }),
  fichas: () => ({ title:`Fichas de estudio para recortar`, file:`Fichas`, blocks: [psec(`Instrucciones`, `Recorta cada tarjeta por el borde y dóblala por la línea punteada: pregunta adelante, respuesta y dibujo atrás.`)].concat(withTopicHeaders(filt(ALL.FICHAS), f => { const d = el(`div`,`pfl`); d.style.setProperty(`--c`, `var(--${f.t})`); const fg = f.fig ? FIG[f.fig] : null; d.innerHTML = `<div class="pff"><div class="pmeta"><span class="pchip"><i></i>${TOPICS[f.t].n}</span><span class="psrc">${f.src}</span></div><p class="pfq">${f.f}</p></div><div class="pfb"><p>${f.b}</p>${fg ? `<div class="pffig">${fg.svg}</div>` : ``}</div>`; return d; })) }),
  formulario: () => { const b = filt(ALL.FORM).map(it => pcard(it, `<h3>${it.title}</h3>${formTable(it)}`)); b.push(pcard({ t:`t16`, src:`Tema 16 y Tema 21, pág. 3` }, `<h3>Pesos moleculares (g/mol)</h3><table class="tbl"><tbody>${Array.from({ length: Math.ceil(PMT.length/2) }, (_, i) => `<tr><td>${PMT[2*i][0]}</td><td>${PMT[2*i][1]}</td><td>${PMT[2*i+1] ? PMT[2*i+1][0] : ``}</td><td>${PMT[2*i+1] ? PMT[2*i+1][1] : ``}</td></tr>`).join(``)}</tbody></table>`)); b.push(refsPrint()); return { title:`Formulario`, file:`Formulario`, blocks:b }; },
  preguntas: (withAns) => {
    const m = filt(ALL.MCQ), a = filt(ALL.ABIERTAS); let n = 0; const keys = []; const blocks = [psec(`Opción múltiple (${m.length})`)];
    withTopicHeaders(m, it => { const r = mcqPrint(it, shuf(it.o.map((t, i) => ({ t, ok: i === 0 }))), ++n, withAns); keys.push(r.key); return r.node; }).forEach(x => blocks.push(x));
    blocks.push(psec(`Preguntas de desarrollo (${a.length})`)); let k = 0;
    a.forEach(it => blocks.push(pcard(it, `<p class="pq">D${++k}. ${it.q}</p>` + (withAns ? `<div class="pexp"><b>Respuesta modelo:</b> ${it.a}</div>` : lines(5)))));
    if (!withAns){ keyTable(keys, `Clave de respuestas`, `Revisa al terminar.`).forEach(x => blocks.push(x)); blocks.push(psec(`Respuestas modelo de desarrollo`)); k = 0; a.forEach(it => blocks.push(pcard(it, `<p class="pq">D${++k}. ${it.q}</p><div class="pexp">${it.a}</div>`))); }
    return { title: withAns ? `Banco de preguntas con respuestas` : `Banco de preguntas para practicar`, file: withAns ? `Preguntas_con_respuestas` : `Preguntas_para_practicar`, blocks };
  },
  ejercicios: (withAns) => {
    const e = filt(ALL.EJ); const blocks = []; let n = 0;
    if (withAns) withTopicHeaders(e, it => ejSolution(it, ++n)).forEach(x => blocks.push(x));
    else { withTopicHeaders(e, it => pcard(it, `<p class="pq">${++n}. ${it.q}</p><p class="psmall"><b>¿Qué me pide?</b> ${it.pide}</p>${lines(6)}`)).forEach(x => blocks.push(x)); blocks.push(psec(`Soluciones paso a paso`)); n = 0; e.forEach(it => blocks.push(ejSolution(it, ++n))); }
    return { title: withAns ? `Ejercicios resueltos paso a paso` : `Ejercicios para practicar`, file: withAns ? `Ejercicios_resueltos` : `Ejercicios_para_practicar`, blocks };
  },
  examen: (ex) => {
    const pts = ex.mcq.length*EX_POINTS.m + ex.ej.length*EX_POINTS.e + ex.des.length*EX_POINTS.d;
    const blocks = []; const box = el(`div`,`pplain`);
    box.innerHTML = `<table class="tbl"><tbody><tr><th>Nombre</th><td style="width:55%"></td><th>Fecha</th><td></td></tr><tr><th>Código</th><td><b>${ex.code}</b></td><th>Nota</th><td>&nbsp;&nbsp;&nbsp;&nbsp;/ 10</td></tr></tbody></table>
      <p class="psmall"><b>Instrucciones.</b> Parte I: marque la letra correcta en la hoja de respuestas de la última página (${EX_POINTS.m} punto c/u). ${ex.ej.length ? `Parte II: resuelva mostrando datos, fórmula y procedimiento (${EX_POINTS.e} puntos c/u). ` : ``}${ex.des.length ? `Parte III: responda con sus palabras (${EX_POINTS.d} puntos c/u). ` : ``}Total: ${pts} puntos. Nota = puntos obtenidos ÷ ${pts} × 10. La hoja de respuestas va en un PDF aparte con el mismo código.</p>`;
    blocks.push(box, psec(`Parte I. Opción múltiple (${ex.mcq.length} puntos)`));
    ex.mcq.forEach((q, i) => blocks.push(mcqPrint(q.it, q.o, i+1, false).node));
    if (ex.ej.length){ blocks.push(psec(`Parte II. Ejercicios (${ex.ej.length*EX_POINTS.e} puntos)`, `Escriba datos, fórmula, sustitución y resultado con unidades.`)); ex.ej.forEach((it, i) => blocks.push(pcard(it, `<p class="pq">E${i+1}. ${it.q}</p>${lines(8)}`))); }
    if (ex.des.length){ blocks.push(psec(`Parte III. Desarrollo (${ex.des.length*EX_POINTS.d} puntos)`)); ex.des.forEach((it, i) => blocks.push(pcard(it, `<p class="pq">D${i+1}. ${it.q}</p>${lines(6)}`))); }
    blocks.push(psec(`Hoja de respuestas: Parte I`, `Rellene el círculo de la letra elegida. Código ${ex.code}.`), bubbleSheet(ex.mcq.length));
    return { title:`Parcial simulado · ${examUnit(ex.topics)}`, file:`Parcial_${ex.code}_EXAMEN`, blocks, topics: ex.topics, foot:`Examen ${ex.code}` };
  },
  clave: (ex) => {
    const pts = ex.mcq.length*EX_POINTS.m + ex.ej.length*EX_POINTS.e + ex.des.length*EX_POINTS.d;
    const blocks = [];
    const warn = el(`div`,`pplain`); warn.innerHTML = `<p class="pwarn">Hoja de respuestas del parcial <b>${ex.code}</b>. Ábrela solo cuando hayas terminado. Total ${pts} puntos; nota = puntos ÷ ${pts} × 10.</p>`;
    blocks.push(warn);
    const keys = ex.mcq.map((q, i) => ({ n:i+1, L:q.L, txt:q.o.find(x => x.ok).t, src:q.it.src }));
    keyTable(keys, `Parte I. Clave rápida`, `${EX_POINTS.m} punto por respuesta correcta.`).forEach(x => blocks.push(x));
    blocks.push(psec(`Parte I. Por qué es la respuesta`));
    ex.mcq.forEach((q, i) => blocks.push(pcard(q.it, `<p class="pq">${i+1}. ${q.it.q}</p><div class="pexp"><b>${q.L}) ${q.o.find(x => x.ok).t}.</b> ${q.it.e}</div>`)));
    if (ex.ej.length){ blocks.push(psec(`Parte II. Ejercicios resueltos`, `Asigne ${EX_POINTS.e} puntos: 1 por datos y fórmula, 1 por sustitución correcta, 1 por resultado con unidades.`)); ex.ej.forEach((it, i) => blocks.push(ejSolution(it, `E${i+1}`))); }
    if (ex.des.length){ blocks.push(psec(`Parte III. Respuestas modelo`, `${EX_POINTS.d} puntos si incluye las ideas clave; 1 punto si está incompleta.`)); ex.des.forEach((it, i) => blocks.push(pcard(it, `<p class="pq">D${i+1}. ${it.q}</p><div class="pexp">${it.a}</div>`))); }
    const sc = el(`div`,`pplain`); let rows = ``; for (let p = pts; p >= 0; p -= Math.max(1, Math.round(pts/12))) rows += `<tr><td>${p}</td><td>${(p/pts*10).toFixed(1)}</td></tr>`;
    sc.innerHTML = `<table class="tbl" style="width:auto"><thead><tr><th>Puntos</th><th>Nota</th></tr></thead><tbody>${rows}</tbody></table>`;
    blocks.push(psec(`Tabla de conversión a nota`), sc);
    return { title:`Hoja de respuestas · Parcial simulado`, file:`Parcial_${ex.code}_RESPUESTAS`, blocks, topics: ex.topics, foot:`Respuestas ${ex.code}` };
  }
};
function refsPrint(){ const d = el(`div`,`pplain`); d.innerHTML = `<h3>Referencias (Vancouver)</h3><ol class="psmall">${REFS.map(r => `<li>${r}</li>`).join(``)}</ol>`; return d; }
function buildDoc(kind, arg){
  const spec = BUILD[kind](arg);
  const root = el(`div`,`pdfroot`);
  const head = el(`div`,`phead`);
  head.innerHTML = `<p class="pkicker">Licenciatura en Laboratorio Clínico · Química, Módulo IV</p><h1>${spec.title}</h1><p>${selNames(spec.topics)}</p><p class="psmall">Material base: presentaciones del Lic. Manuel E. Grande C. [1]. Cada tarjeta indica el tema y la página de origen. Generado el ${hoy()}.</p>`;
  root.append(head); spec.blocks.forEach(b => root.append(b));
  return { spec, root, nodes:[head, ...spec.blocks] };
}
function bakeSvgs(root){
  root.querySelectorAll(`svg`).forEach(s => {
    const r = s.getBoundingClientRect(); s.setAttribute(`width`, Math.round(r.width)); s.setAttribute(`height`, Math.round(r.height));
    s.querySelectorAll(`*`).forEach(n => { if ([`defs`,`marker`,`linearGradient`,`stop`].includes(n.tagName)) return; const cs = getComputedStyle(n);
      n.setAttribute(`style`, `fill:${cs.fill};stroke:${cs.stroke};stroke-width:${cs.strokeWidth};opacity:${cs.opacity};fill-opacity:${cs.fillOpacity};stroke-dasharray:${cs.strokeDasharray};font-size:${cs.fontSize};font-family:${cs.fontFamily};font-weight:${cs.fontWeight};`); });
    s.querySelectorAll(`marker path`).forEach(n => { const cs = getComputedStyle(n); n.setAttribute(`style`, `fill:${cs.fill}`); });
  });
}
function pdfMsg(t){ document.querySelectorAll(`.pdfmsg`).forEach(m => m.textContent = t); }
async function exportPdf(kind, arg){
  if (PDF.busy) return; PDF.busy = true;
  document.querySelectorAll(`.pdfbtn`).forEach(b => b.disabled = true);
  pdfMsg(`Preparando el documento…`);
  let root = null;
  try {
    await ensureLibs();
    const d = buildDoc(kind, arg); root = d.root; const spec = d.spec;
    document.body.append(root);
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    bakeSvgs(root);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit:`mm`, format:`a4`, compress:true });
    const W = 210, H = 297, M = 12, CW = W - 2*M, TOP = M, BOT = H - M - 6, GAP = 3.5;
    let y = TOP; const nodes = d.nodes;
    for (let i = 0; i < nodes.length; i++){
      pdfMsg(`Generando PDF: ${Math.round(i / nodes.length * 100)} %`);
      const node = nodes[i], isSec = node.classList.contains(`psec`);
      const cv = await html2canvas(node, { scale:1.8, backgroundColor:`#ffffff`, logging:false, useCORS:true });
      const hmm = cv.height * CW / cv.width, avail = BOT - TOP;
      if (hmm <= avail){
        if (y + (isSec ? hmm + 30 : hmm) > BOT && y > TOP){ pdf.addPage(); y = TOP; }
        pdf.addImage(cv.toDataURL(`image/jpeg`, .88), `JPEG`, M, y, CW, hmm); y += hmm + GAP;
      } else {
        const pxmm = cv.width / CW; let off = 0; if (y > TOP){ pdf.addPage(); y = TOP; }
        while (off < cv.height){
          const sh = Math.min(cv.height - off, Math.floor(avail * pxmm)); const c2 = document.createElement(`canvas`); c2.width = cv.width; c2.height = sh;
          const g = c2.getContext(`2d`); g.fillStyle = `#fff`; g.fillRect(0, 0, c2.width, sh); g.drawImage(cv, 0, off, cv.width, sh, 0, 0, cv.width, sh);
          const mm = sh / pxmm; pdf.addImage(c2.toDataURL(`image/jpeg`, .88), `JPEG`, M, y, CW, mm); off += sh; y += mm + GAP; if (off < cv.height){ pdf.addPage(); y = TOP; }
        }
      }
      if (i % 6 === 5) await new Promise(r => setTimeout(r, 0));
    }
    const np = pdf.getNumberOfPages();
    for (let p = 1; p <= np; p++){ pdf.setPage(p); pdf.setFont(`helvetica`,`normal`); pdf.setFontSize(8); pdf.setTextColor(110); pdf.text(`Quimica - ${(spec.foot || spec.title).normalize(`NFD`).replace(/[̀-ͯ]/g, ``).replace(/[^\x20-\x7E]/g, ``)}`, M, H - 7); pdf.text(`Pagina ${p} de ${np}`, W - M, H - 7, { align:`right` }); }
    const fname = `${spec.file}${spec.topics ? `` : `_` + tagSel()}.pdf`;
    const blob = pdf.output(`blob`); root.remove(); root = null;
    const dl = await dlP;
    if (dl){
      pdfMsg(`Confirma la descarga en el aviso que aparece.`);
      try { await dl.save({ filename: fname, data: blob }); pdfMsg(`PDF listo: ${fname} (${np} páginas).`); }
      catch (e){ const c = e && e.code; pdfMsg(c === `declined` ? `Descarga cancelada.` : c === `rate_limited` ? `Ya hay una descarga pendiente. Espera unos segundos e inténtalo de nuevo.` : c === `too_large` ? `El archivo es demasiado grande. Selecciona menos temas.` : `La descarga no está disponible en esta vista. Abre la página desde claude.ai e inténtalo de nuevo.`); }
    } else { pdf.save(fname); pdfMsg(`PDF listo: ${fname} (${np} páginas).`); }
  } catch (e){ console.error(`PDFERR`, e && e.stack || e); pdfMsg(`No se pudo generar el PDF. Revisa tu conexión a internet e inténtalo de nuevo.`); }
  finally { if (root) root.remove(); PDF.busy = false; document.querySelectorAll(`.pdfbtn`).forEach(b => b.disabled = false); }
}
function pdfBar(){
  const opts = {
    guia: [[`Guía de estudio`, () => exportPdf(`guia`)]],
    repaso: [[`Repaso con ilustraciones`, () => exportPdf(`repaso`)]],
    fichas: [[`Fichas para recortar`, () => exportPdf(`fichas`)]],
    formulario: [[`Formulario`, () => exportPdf(`formulario`)]],
    preguntas: [[`Para practicar (clave al final)`, () => exportPdf(`preguntas`, false)], [`Con respuestas`, () => exportPdf(`preguntas`, true)]],
    ejercicios: [[`Para practicar (soluciones al final)`, () => exportPdf(`ejercicios`, false)], [`Resueltos paso a paso`, () => exportPdf(`ejercicios`, true)]]
  }[S.mode];
  if (!opts) return null;
  const bar = el(`div`,`pdfbar`); bar.append(el(`span`,`pdflabel`,`Descargar PDF:`));
  opts.forEach(([t, f]) => { const b = btn(t, `btn ghost pdfbtn`, f); b.disabled = PDF.busy; bar.append(b); });
  const m = el(`p`,`pdfmsg`); m.setAttribute(`aria-live`,`polite`); bar.append(m);
  return bar;
}

/* ======================= RENDER ======================= */
function renderView(){
  const v = $(`#view`); v.innerHTML = ``;
  if (!S.sel.size && ![`inicio`,`progreso`,`guia`,`videos`,`preguntar`,`notas`].includes(S.mode)){ const e = el(`div`,`empty`,`No hay temas elegidos. `); e.append(btn(`Elegir temas`, `btn acc`, () => openTopics())); v.append(e); return; }
  ({ notas:vNotas, inicio:vInicio, impreso:vImpreso, guia:vGuia, videos:vVideos, preguntar:vPreguntar, repaso:vRepaso, fichas:vFichas, preguntas:vPreguntas, ejercicios:vEjercicios, formula:vFormula, practica:vPractica, lab:vLab, simulacro:vSimulacro, formulario:vFormulario, progreso:vProgreso })[S.mode](v);
  const pb = pdfBar(); if (pb){ pb.style.marginTop = `22px`; v.append(pb); }
}

/* ======================= VIDEOS DE REFUERZO ======================= */
const ytUrl = id => `https://www.youtube.com/watch?v=${id}`;
function vidLinks(vids){
  const d = el(`div`,`vidrow`);
  d.append(el(`span`,`vidlab`, `▶ Video de refuerzo:`));
  vids.slice(0, 2).forEach(x => d.append(el(`a`,`vidlink`, `${x.title} <small>· ${x.ch}</small>`)));
  [...d.querySelectorAll(`a`)].forEach((a, i) => { a.href = ytUrl(vids[i].id); a.target = `_blank`; a.rel = `noopener`; });
  return d;
}
const VS = { done:{} };
try { VS.done = JSON.parse(localStorage.getItem(`parcialM4_vids`) || `{}`) || {}; } catch(e){}
function vVideos(v){
  intro(v, `Videos cortos en español para entender con otra explicación lo que no quedó claro en clase. Están ordenados por tema y subtema, y cada uno indica la página del material que refuerza. Necesitan internet; se abren en YouTube.`);
  v.append(el(`p`,`note`, `Cómo usarlos: primero lee la tarjeta de Repaso del subtema, luego mira el video y después resuelve 2 o 3 ejercicios de ese subtema. Ver el video no sustituye practicar.`));
  const ts = TORDER.filter(t => S.sel.has(t));
  if (!ts.length){ v.append(el(`div`,`empty`,`Selecciona al menos un tema para ver sus videos.`)); return; }
  const tot = VIDEOS.filter(x => ts.includes(x.t)), seen = tot.filter(x => VS.done[x.id]).length;
  v.append(el(`div`,`scorebar`, `<span>Videos de estos temas: <b>${tot.length}</b></span><span>Marcados como vistos: <b>${seen}</b></span>`));
  ts.forEach(t => {
    const vs = VIDEOS.filter(x => x.t === t); if (!vs.length) return;
    v.append(el(`h2`,``, `${TOPICS[t].n}: ${TOPICS[t].name}`));
    const l = el(`div`,`vgrid`);
    vs.forEach(x => {
      const c = el(`article`,`vcard`); c.style.setProperty(`--c`, `var(--${t})`);
      c.innerHTML = `<div class="meta"><span class="chip">${x.sub}</span><span class="src">Refuerza: ${x.src}</span></div><p class="vt">${x.title}</p><p class="vch">Canal: ${x.ch}</p>`;
      const row = el(`div`,`btnrow`);
      const a = el(`a`,`btn`, `▶ Ver en YouTube`); a.href = ytUrl(x.id); a.target = `_blank`; a.rel = `noopener`;
      const chk = btn(VS.done[x.id] ? `✓ Visto` : `Marcar como visto`, `btn ghost` + (VS.done[x.id] ? ` seen` : ``), () => { VS.done[x.id] = !VS.done[x.id]; try { localStorage.setItem(`parcialM4_vids`, JSON.stringify(VS.done)); } catch(e){} renderView(); });
      row.append(a, chk); c.append(row); l.append(c);
    });
    v.append(l);
  });
  v.append(el(`p`,`muted`, `Revisé que cada enlace exista y su canal en octubre de 2026. Si alguno deja de funcionar porque el autor lo retiró, busca el mismo título en YouTube.`));
}

/* ======================= PRÁCTICA: RESPUESTA DE OPCIONES ======================= */
function choiceBlock(P, g, v){
  const wrap = el(`div`);
  const box = el(`div`,`opts`); const fb = el(`div`); const sol = el(`div`);
  P.opts.forEach((t, i) => {
    const b = el(`button`,`opt`, `<span class="k">${LET[i]}</span><span>${t}</span>`); b.type = `button`;
    b.onclick = () => {
      if (P.done) return; P.done = true; const ok = i === P.correct;
      [...box.children].forEach((y, j) => { y.disabled = true; if (j === P.correct) y.classList.add(`right`); else if (y !== b) y.classList.add(`dim`); });
      if (!ok) b.classList.add(`wrong`);
      PR.n++; if (ok){ PR.ok++; PR.streak++; } else PR.streak = 0;
      record({ id:`G_` + g.id, t:g.t }, ok);
      fb.className = `fb ${ok ? `ok` : `no`}`; fb.innerHTML = `<strong>${ok ? `Correcto.` : `Incorrecto. La respuesta es: ${P.opts[P.correct]}`}</strong><span class="fbsrc">Repasa: ${g.src}</span>`;
      const ol = el(`ol`,`steps`); P.pasos.forEach(p => ol.append(el(`li`,``,p))); sol.append(ol);
      const sb = v.querySelector(`.scorebar`); if (sb) sb.innerHTML = `<span>Resueltos: <b>${PR.n}</b></span><span>Correctos: <b>${PR.ok}</b></span><span>Racha: <b>${PR.streak}</b></span>`;
    };
    box.append(b);
  });
  const row = el(`div`,`btnrow`);
  row.append(btn(`Nuevo ejercicio`, `btn`, () => { if (PR.rand) PR.gen = pick(GENS.filter(x => S.sel.has(x.t) || (x.ts && x.ts.some(t => S.sel.has(t))))); PR.cur = null; renderView(); }));
  wrap.append(box, fb, sol, row);
  return wrap;
}

/* ======================= NOMBRADOR IUPAC DE ALCANOS (cadenas con metilos y etilos) ======================= */
const ROOT = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`,`hept`,`oct`,`non`,`dec`];
const MULT = [``,``,`di`,`tri`,`tetra`];
function buildAlkane(){
  for (let tries = 0; tries < 200; tries++){
    const n = 4 + Math.floor(Math.random()*4);            // 4 a 7 carbonos en la cadena dibujada
    const adj = []; const add = () => { adj.push([]); return adj.length - 1; };
    const link = (a, b) => { adj[a].push(b); adj[b].push(a); };
    const main = []; for (let i = 0; i < n; i++){ main.push(add()); if (i) link(main[i-1], main[i]); }
    const k = 1 + Math.floor(Math.random()*(n >= 6 ? 3 : 2));
    const subs = [];
    for (let j = 0; j < k; j++){
      const et = Math.random() < .35;
      const lo = et ? 2 : 1, hi = et ? n - 3 : n - 2;          // índices 0-based
      if (hi < lo) continue;
      const p = lo + Math.floor(Math.random()*(hi - lo + 1));
      if (adj[main[p]].length >= 4) continue;
      const a = add(); link(main[p], a); if (et){ const b2 = add(); link(a, b2); }
      subs.push({ p, et });
    }
    if (!subs.length) continue;
    const name = nameAlkane(adj);
    if (!name || adj.length > 10) continue;
    return { adj, main, subs, n, name: name.name, alt: name.alts, chain: name.chain };
  }
  return null;
}
function nameAlkane(adj){
  const N = adj.length, leaves = []; for (let i = 0; i < N; i++) if (adj[i].length <= 1) leaves.push(i);
  const path = (a, b) => { const prev = Array(N).fill(-1), seen = Array(N).fill(false), q = [a]; seen[a] = true; while (q.length){ const u = q.shift(); if (u === b) break; for (const w of adj[u]) if (!seen[w]){ seen[w] = true; prev[w] = u; q.push(w); } } const p = []; for (let u = b; u !== -1; u = prev[u]) p.unshift(u); return p; };
  let cands = []; let L = 0;
  for (const a of leaves) for (const b of leaves){ if (a === b) continue; const p = path(a, b); if (p.length > L){ L = p.length; cands = [p]; } else if (p.length === L) cands.push(p); }
  const evalChain = ch => {
    const inC = new Set(ch); const subs = [];
    for (let i = 0; i < ch.length; i++) for (const w of adj[ch[i]]) if (!inC.has(w)){
      const sz = (() => { const seen = new Set([ch[i]]); const st = [w]; let c = 0, br = false; while (st.length){ const u = st.pop(); if (seen.has(u)) continue; seen.add(u); c++; const nx = adj[u].filter(x => !seen.has(x)); if (nx.length > 1) br = true; st.push(...nx); } return br ? 99 : c; })();
      if (sz > 2) return null;
      subs.push({ loc: i + 1, name: sz === 1 ? `metil` : `etil` });
    }
    return subs;
  };
  const opts = [];
  for (const ch of cands){ const s = evalChain(ch); if (s) opts.push({ ch, s }); }
  if (!opts.length) return null;
  const cmp = (a, b) => { for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) return a[i] - b[i]; return a.length - b.length; };
  opts.sort((A, B) => {
    if (B.s.length !== A.s.length) return B.s.length - A.s.length;
    const la = A.s.map(x => x.loc).sort((x, y) => x - y), lb = B.s.map(x => x.loc).sort((x, y) => x - y);
    const c = cmp(la, lb); if (c) return c;
    const aa = A.s.slice().sort((x, y) => x.name.localeCompare(y.name) || x.loc - y.loc).map(x => x.loc), bb = B.s.slice().sort((x, y) => x.name.localeCompare(y.name) || x.loc - y.loc).map(x => x.loc);
    return cmp(aa, bb);
  });
  const best = opts[0];
  const mk = (subs, Lr, alphaWrong) => {
    const groups = {}; subs.forEach(x => (groups[x.name] = groups[x.name] || []).push(x.loc));
    let keys = Object.keys(groups).sort(); if (alphaWrong) keys = keys.reverse();
    return keys.map(k => { const ls = groups[k].sort((a, b) => a - b); return `${ls.join(`,`)}-${MULT[ls.length]}${k}`; }).join(`-`) + ROOT[Lr] + `ano`;
  };
  const name = mk(best.s, L);
  const alts = new Set();
  alts.add(mk(best.s.map(x => ({ loc: L + 1 - x.loc, name: x.name })), L));
  if (new Set(best.s.map(x => x.name)).size > 1) alts.add(mk(best.s, L, true));
  alts.add(mk(best.s, L - 1)); alts.add(mk(best.s.map(x => ({ loc: L + 1 - x.loc, name: x.name })), L + 1));
  const sep = best.s.map(x => `${x.loc}-${x.name}`).join(`-`) + ROOT[L] + `ano`; alts.add(sep);
  alts.delete(name);
  return { name, alts:[...alts], chain: best.ch };
}
function drawMol(M, hi){
  const { adj, main } = M, n = main.length, X = i => 46 + i * 74, W = X(n - 1) + 50;
  const hLab = idx => { const h = 4 - adj[idx].length; return h === 3 ? `CH₃` : h === 2 ? `CH₂` : h === 1 ? `CH` : `C`; };
  let s = ``;
  for (let i = 0; i < n - 1; i++) s += `<line x1="${X(i) + 22}" y1="96" x2="${X(i + 1) - 22}" y2="96" class="s"/>`;
  const inMain = new Set(main);
  main.forEach((idx, i) => {
    const br = adj[idx].filter(w => !inMain.has(w));
    br.forEach((w, j) => {
      const dir = j === 0 ? 1 : -1;
      s += `<line x1="${X(i)}" y1="${96 + dir * 12}" x2="${X(i)}" y2="${96 + dir * 30}" class="s"/>`;
      s += `<text x="${X(i)}" y="${96 + dir * 46 + 6}" text-anchor="middle" class="tk" style="font-size:17px">${hLab(w)}</text>`;
      const w2 = adj[w].find(z => z !== idx);
      if (w2 !== undefined){ s += `<line x1="${X(i)}" y1="${96 + dir * 58}" x2="${X(i)}" y2="${96 + dir * 72}" class="s"/><text x="${X(i)}" y="${96 + dir * 88 + 6}" text-anchor="middle" class="tk" style="font-size:17px">${hLab(w2)}</text>`; }
    });
    const isHi = hi === idx;
    if (isHi) s += `<circle cx="${X(i)}" cy="96" r="22" style="fill:var(--mark)"/><circle cx="${X(i)}" cy="96" r="22" class="s" style="stroke:var(--t15)"/>`;
    s += `<text x="${X(i)}" y="102" text-anchor="middle" class="tk" style="font-size:18px">${hLab(idx)}</text>`;
  });
  const up = main.some(idx => adj[idx].filter(w => !inMain.has(w)).length > 1);
  const deep = main.some(idx => { const br = adj[idx].filter(w => !inMain.has(w)); return br.length && adj[br[0]].length > 1; });
  const y0 = up ? 0 : 66, y1 = deep ? 196 : 150;
  return `<svg viewBox="0 ${y0} ${W} ${y1 - y0}" role="img" aria-label="Estructura semidesarrollada" style="max-width:${W}px">${s}</svg>`;
}
const condensed = M => { const { adj, main } = M, inMain = new Set(main); const hl = i => { const h = 4 - adj[i].length; return [`C`,`CH`,`CH₂`,`CH₃`][h]; };
  return main.map(idx => { const br = adj[idx].filter(w => !inMain.has(w)).map(w => adj[w].length > 1 ? `(CH₂CH₃)` : `(CH₃)`); return hl(idx) + (br.length === 2 && br[0] === br[1] ? `${br[0].replace(`)`, `)₂`)}` : br.join(``)); }).join(`−`); };
const formulaOf = M => { const c = M.adj.length; return `C${String(c).split(``).map(d => `₀₁₂₃₄₅₆₇₈₉`[d]).join(``)}H${String(2 * c + 2).split(``).map(d => `₀₁₂₃₄₅₆₇₈₉`[d]).join(``)}`; };

const SUBN = n => String(n).split(``).map(d => `₀₁₂₃₄₅₆₇₈₉`[d]).join(``);
GENS.push(
 {id:`hform`,t:`t22`,src:`Tema 22, pág. 7`,name:`Fórmula molecular (cuántos H)`,make(){ const fam = pick([[`alcano`,2,2,`CₙH₂ₙ₊₂`],[`alqueno`,2,0,`CₙH₂ₙ`],[`alquino`,2,-2,`CₙH₂ₙ₋₂`],[`cicloalcano`,2,0,`CₙH₂ₙ`]]); const n = fam[0] === `cicloalcano` ? between(3, 8) : between(2, 10); const H = fam[1]*n + fam[2];
   return { q:`¿Cuántos átomos de hidrógeno tiene un ${fam[0]} de ${n} carbonos${fam[0] === `alcano` ? `` : fam[0] === `cicloalcano` ? ` (un solo anillo)` : ` (un solo enlace múltiple)`}?`, unit:`átomos de H`, ans:H, abs:.01,
     pasos:[`Fórmula general del ${fam[0]}: ${fam[3]}.`,`H = 2(${n})${fam[2] > 0 ? ` + 2` : fam[2] < 0 ? ` − 2` : ``} = ${H}.`,`Fórmula molecular: C${SUBN(n)}H${SUBN(H)}.`], r:`${H} H → C${SUBN(n)}H${SUBN(H)}` }; }},
 {id:`pmalc`,t:`t23`,ts:[`t16`],src:`Tema 23, pág. 14 · Tema 16, pág. 14`,name:`Masa molar de un alcano`,make(){ const n = between(1, 12); const names = [``,`metano`,`etano`,`propano`,`butano`,`pentano`,`hexano`,`heptano`,`octano`,`nonano`,`decano`,`undecano`,`dodecano`]; const PMv = 12*n + 2*n + 2;
   return { q:`Calcule la masa molar del ${names[n]} (C = 12, H = 1).`, unit:`g/mol`, ans:PMv, abs:.01, pasos:[`Fórmula: CₙH₂ₙ₊₂ → C${SUBN(n)}H${SUBN(2*n+2)}.`,`PM = ${n} × 12 + ${2*n+2} × 1 = ${12*n} + ${2*n+2}.`,`PM = ${PMv} g/mol.`], r:`${PMv} g/mol` }; }},
 {id:`comb`,t:`t23`,src:`Tema 23, pág. 17`,name:`Combustión: moles de O₂`,make(){ const n = between(1, 8); const names = [``,`metano`,`etano`,`propano`,`butano`,`pentano`,`hexano`,`heptano`,`octano`]; const o2 = (3*n + 1)/2;
   return { q:`En la combustión completa de 1 mol de ${names[n]}, ¿cuántos moles de O₂ se necesitan? (Puede dar decimal, por ejemplo 6.5.)`, unit:`mol O₂`, ans:o2, abs:.01,
     pasos:[`C${SUBN(n)}H${SUBN(2*n+2)} + ? O₂ → ${n} CO₂ + ${n+1} H₂O.`,`Oxígenos a la derecha: ${n} × 2 + ${n+1} × 1 = ${3*n+1}.`,`O₂ = ${3*n+1} / 2 = ${nf(o2,1)}.`, o2 % 1 ? `Para evitar el decimal se multiplica todo por 2: 2 C${SUBN(n)}H${SUBN(2*n+2)} + ${3*n+1} O₂ → ${2*n} CO₂ + ${2*n+2} H₂O.` : `Ecuación: C${SUBN(n)}H${SUBN(2*n+2)} + ${o2} O₂ → ${n} CO₂ + ${n+1} H₂O.`], r:`${nf(o2,1)} mol de O₂` }; }},
 {id:`nombre`,t:`t23`,ts:[`t22`],src:`Tema 23, pág. 8–9`,name:`Nombrar alcanos ramificados`,make(){ const M = buildAlkane();
   const opts = shuf([M.name].concat(shuf(M.alt).slice(0, 3))); const L = M.chain.length;
   return { q:`Elige el nombre IUPAC correcto de este alcano. Fórmula: ${formulaOf(M)}.`, draw: drawMol(M), opts, correct: opts.indexOf(M.name),
     pasos:[`Busca la cadena más larga recorriendo todos los caminos (también las ramas): ${L} carbonos → ${ROOT[L]}ano.`,`Numera desde el extremo que da los números más bajos a las ramas; si empatan, decide el orden alfabético.`,`Ramas en orden alfabético (etil antes que metil), con di-/tri- y un número por cada rama.`,`Nombre: ${M.name}.`], r:M.name }; }},
 {id:`carbono`,t:`t23`,src:`Tema 23, pág. 13`,name:`Tipo de carbono (1°, 2°, 3°, 4°)`,make(){ const M = buildAlkane(); const idx = pick(M.main); const k = M.adj[idx].length; const lab = [`primario (1°)`,`secundario (2°)`,`terciario (3°)`,`cuaternario (4°)`];
   return { q:`¿Qué tipo de carbono es el que está marcado en amarillo?`, draw: drawMol(M, idx), opts: lab, correct: k - 1,
     pasos:[`Cuenta cuántos carbonos están unidos directamente al carbono marcado (no cuentes los H).`,`Tiene ${k} carbono${k > 1 ? `s` : ``} vecino${k > 1 ? `s` : ``}.`,`Por lo tanto es ${lab[k-1]}.`], r: lab[k-1] }; }},
 {id:`hib`,t:`t22`,src:`Tema 22, pág. 12–15`,name:`Hibridación y ángulo`,make(){ const d = pick([[`un carbono de un alcano (solo enlaces sencillos)`,0],[`un carbono que forma un doble enlace C=C`,1],[`un carbono que forma un triple enlace C≡C`,2],[`el carbono del CH₄ (metano)`,0],[`los carbonos del eteno CH₂=CH₂`,1],[`los carbonos del etino HC≡CH`,2]]); const opts = [`sp³ · tetraédrica · 109.5°`,`sp² · trigonal plana · 120°`,`sp · lineal · 180°`,`sp³ · plana · 90°`];
   return { q:`¿Qué hibridación, geometría y ángulo tiene ${d[0]}?`, opts, correct: d[1], pasos:[`Sencillo → sp³, tetraédrica, 109.5°.`,`Doble → sp², trigonal plana, 120°.`,`Triple → sp, lineal, 180°.`], r: opts[d[1]] }; }}
);

/* ======================= LABORATORIO: EXPLORADOR DE HIDROCARBUROS ======================= */
function labHC(){
  const BP = [null,-164,-89,-42,0,36,69,98,126,151,174,196,216,235,254,271];
  const ISO = {1:1,2:1,3:1,4:2,5:3,6:5,7:9,8:18,9:35,10:75};
  const NAMES = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`,`hept`,`oct`,`non`,`dec`];
  const c = labCard(`Explorador de hidrocarburos`, `Tema 22, pág. 7–15 · Tema 23, pág. 14–19`, `t23`, `Elige el número de carbonos y la familia. Observa cómo cambian la fórmula, el nombre, la forma, el estado y la combustión.`);
  c.append(slider(`hcn`, `Número de carbonos`, 1, 10, 1, 4, x => x));
  const fam = el(`div`,`seg`); fam.style.marginTop = `10px`;
  const F = { f:`ano` };
  const famBtns = [[`ano`,`Alcano`],[`eno`,`Alqueno`],[`ino`,`Alquino`],[`ciclo`,`Cicloalcano`]].map(([k, t]) => { const b = btn(t, `segb`, () => { F.f = k; upd(); }); fam.append(b); return [k, b]; });
  c.append(fam);
  const vis = el(`div`,`labvis wide`), out = el(`div`,`labout`); c.append(vis, out);
  const upd = () => {
    let n = +$(`#hcn`, c).value; $(`#hcnv`, c).textContent = n;
    famBtns.forEach(([k, b]) => b.setAttribute(`aria-pressed`, F.f === k));
    let warn = ``;
    if (F.f !== `ano` && n < 2 && F.f !== `ciclo`){ warn = `Un alqueno o alquino necesita al menos 2 carbonos.`; n = 2; }
    if (F.f === `ciclo` && n < 3){ warn = `Un anillo necesita al menos 3 carbonos.`; n = 3; }
    const H = F.f === `ano` ? 2*n + 2 : F.f === `ino` ? 2*n - 2 : 2*n;
    const name = F.f === `ciclo` ? `ciclo${NAMES[n]}ano` : F.f === `ano` ? `${NAMES[n]}ano` : n === 2 || n === 3 ? `${NAMES[n]}${F.f}` : `${NAMES[n]}-1-${F.f}`;
    const hyb = F.f === `eno` ? `sp² en el C=C (120°), sp³ en el resto` : F.f === `ino` ? `sp en el C≡C (180°), sp³ en el resto` : `sp³ en todos (109.5°)`;
    // dibujo lineangular
    let s = ``;
    if (F.f === `ciclo`){ let p = ``; for (let i = 0; i < n; i++){ const a = (-90 + i*360/n)*Math.PI/180; p += (i ? `L` : `M`) + (210 + 60*Math.cos(a)).toFixed(1) + ` ` + (95 + 60*Math.sin(a)).toFixed(1); } s += `<path d="${p}Z" class="s" style="stroke-width:3"/>`; }
    else if (n === 1){ s += `<text x="210" y="102" text-anchor="middle" class="tk" style="font-size:22px">CH₄</text>`; }
    else { const step = Math.min(44, 360/(n-1)), x0 = 210 - step*(n-1)/2; const pts = []; for (let i = 0; i < n; i++) pts.push([x0 + i*step, i % 2 ? 70 : 120]);
      s += `<path d="${pts.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1]).join(``)}" class="s" style="stroke-width:3"/>`;
      if (F.f !== `ano`){ const [a, b] = [pts[0], pts[1]]; const dx = b[0]-a[0], dy = b[1]-a[1], L = Math.hypot(dx, dy), ox = -dy/L*7, oy = dx/L*7; s += `<line x1="${(a[0]+ox+dx*.12).toFixed(1)}" y1="${(a[1]+oy+dy*.12).toFixed(1)}" x2="${(b[0]+ox-dx*.12).toFixed(1)}" y2="${(b[1]+oy-dy*.12).toFixed(1)}" class="s" style="stroke-width:3;stroke:var(--t15)"/>`; if (F.f === `ino`) s += `<line x1="${(a[0]-ox+dx*.12).toFixed(1)}" y1="${(a[1]-oy+dy*.12).toFixed(1)}" x2="${(b[0]-ox-dx*.12).toFixed(1)}" y2="${(b[1]-oy-dy*.12).toFixed(1)}" class="s" style="stroke-width:3;stroke:var(--t15)"/>`; }
      pts.forEach(p => s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1]}" r="4" style="fill:var(--t23)"/>`); }
    vis.innerHTML = `<svg viewBox="0 0 420 190" role="img" aria-label="Estructura lineangular">${s}<text x="210" y="180" text-anchor="middle" class="tm">${F.f === `ciclo` ? `anillo de ${n} C` : n === 1 ? `` : `lineangular: cada vértice y extremo es un C`}</text></svg>`;
    const st = n <= 4 ? `gas` : n <= 17 ? `líquido` : `sólido`;
    const o2 = (3*n + 1)/2;
    out.innerHTML = (warn ? `<p class="trap">${warn}</p>` : ``) + `<div class="kvgrid"><span>Nombre</span><b>${name}</b><span>Fórmula</span><b>C${SUBN(n)}H${SUBN(H)}</b><span>Fórmula general</span><b>${F.f === `ano` ? `CₙH₂ₙ₊₂` : F.f === `ino` ? `CₙH₂ₙ₋₂` : `CₙH₂ₙ`}</b><span>Masa molar</span><b>${12*n + H} g/mol</b><span>Hibridación</span><b>${hyb}</b>` +
      (F.f === `ano` ? `<span>Estado (25 °C)</span><b>${st}</b><span>Punto de ebullición</span><b>${BP[n]} °C <small class="muted">(tabla pág. 14)</small></b><span>Isómeros de cadena</span><b>${ISO[n]}${n <= 3 ? ` (no tiene isómeros)` : ``}</b>` : ``) + `</div>` +
      (F.f === `ano` ? `<p class="fx">C${SUBN(n)}H${SUBN(H)} + ${nf(o2,1)} O₂ → ${n} CO₂ + ${n+1} H₂O</p>` : `<p class="muted">${F.f === `eno` ? `Reacción típica: adición. Con H₂ se convierte en ${NAMES[n]}ano.` : F.f === `ino` ? `Reacción típica: adición; los alquinos terminales tienen acidez.` : `Ojo: misma fórmula CₙH₂ₙ que el alqueno de ${n} C. Son isómeros.`}</p>`);
  };
  $(`#hcn`, c).oninput = upd; upd(); return c;
}

/* ======================= GENERADORES: ALQUENOS Y ALQUINOS ======================= */
const insat = (L, ord, p, br) => { // cadena 1..L, enlace múltiple entre p y p+1 de orden ord, metilo opcional en br
  const bo = i => (i === p || i === p + 1 ? ord : 1);
  const lab = i => { const used = (i > 1 ? (i - 1 === p ? ord : 1) : 0) + (i < L ? (i === p ? ord : 1) : 0) + (br === i ? 1 : 0); return [`C`,`CH`,`CH₂`,`CH₃`][4 - used]; };
  const sym = [``,`−`,`=`,`≡`];
  const atoms = []; for (let i = 1; i <= L; i++) atoms.push(lab(i) + (br === i ? `(CH₃)` : ``));
  const bonds = []; for (let i = 1; i < L; i++) bonds.push(sym[i === p ? ord : 1]);
  const fwd = atoms.map((a, i) => a + (i < L - 1 ? bonds[i] : ``)).join(``).replace(/^CH≡/, `HC≡`);
  const rev = atoms.slice().reverse().map((a, i) => a + (i < L - 1 ? bonds[L - 2 - i] : ``)).join(``);
  const C = L + (br ? 1 : 0), H = 2 * C + 2 - 2 * (ord - 1);
  const suf = ord === 2 ? `eno` : `ino`;
  const mk = (pp, bb) => (bb ? `${bb}-metil` : ``) + ROOT[L] + `-${pp}-` + suf;
  const pA = p, pB = L - p, bA = br || 0, bB = br ? L + 1 - br : 0;
  const useA = pA < pB || (pA === pB && (!br || bA <= bB));
  const name = useA ? mk(pA, bA) : mk(pB, bB), wrong = useA ? mk(pB, bB) : mk(pA, bA);
  return { fwd, rev, C, H, name, wrong, alt:[wrong, (useA ? mk(pA, bA) : mk(pB, bB)).replace(suf, ord === 2 ? `ino` : `eno`), (br ? `${useA ? bA : bB}-metil` : ``) + ROOT[L] + `ano`, br ? mk(useA ? pA : pB, useA ? bB : bA) : ROOT[L] + `-${(useA ? pA : pB) + 1}-` + suf],
    pasos:[`Cadena principal con el ${ord === 2 ? `doble` : `triple`} enlace: ${L} carbonos → ${ROOT[L]}-…-${suf}.`,`Numerando desde un extremo el ${ord === 2 ? `doble` : `triple`} enlace queda en C${pA}; desde el otro, en C${pB}.`, pA === pB ? `Empate: decide el sustituyente (debe quedar con el número más bajo).` : `Gana el extremo que da C${Math.min(pA, pB)} al enlace múltiple, aunque la rama quede con un número mayor.`].concat(br ? [`El metilo queda en C${useA ? bA : bB}.`] : []).concat([`Nombre: ${useA ? mk(pA, bA) : mk(pB, bB)}. Fórmula C${SUBN(C)}H${SUBN(H)} (${ord === 2 ? `CₙH₂ₙ` : `CₙH₂ₙ₋₂`}).`]) };
};
const buildInsat = ord => { for (let k = 0; k < 50; k++){ const L = between(4, 7), p = between(1, L - 1); let br = Math.random() < .6 ? between(2, L - 1) : 0;
  if (ord === 3 && (br === p || br === p + 1)) continue; if (br && (br === 1 || br === L)) br = 0; return insat(L, ord, p, br); } return insat(5, ord, 2, 0); };
const CT = [[`propeno`,`CH₂=CH−CH₃`,0,`El C1 tiene dos H iguales.`],[`but-1-eno`,`CH₂=CH−CH₂−CH₃`,0,`El C1 tiene dos H iguales.`],[`but-2-eno`,`CH₃−CH=CH−CH₃`,1,`Cada C del doble enlace tiene H y CH₃.`],[`pent-2-eno`,`CH₃−CH=CH−CH₂−CH₃`,1,`C2 tiene H y CH₃; C3 tiene H y C₂H₅.`],[`2-metilbut-2-eno`,`(CH₃)₂C=CH−CH₃`,0,`El C2 tiene dos CH₃ iguales.`],[`2-metilprop-1-eno`,`(CH₃)₂C=CH₂`,0,`El C1 tiene dos H y el C2 dos CH₃.`],[`hex-3-eno`,`CH₃−CH₂−CH=CH−CH₂−CH₃`,1,`Cada C del doble enlace tiene H y C₂H₅.`],[`hex-2-eno`,`CH₃−CH=CH−CH₂−CH₂−CH₃`,1,`C2 tiene H y CH₃; C3 tiene H y C₃H₇.`],[`3-metilpent-2-eno`,`CH₃−CH=C(CH₃)−CH₂−CH₃`,1,`C2 tiene H y CH₃; C3 tiene CH₃ y C₂H₅.`],[`2,3-dimetilbut-2-eno`,`(CH₃)₂C=C(CH₃)₂`,0,`Cada C del doble enlace tiene dos CH₃ iguales.`],[`pent-1-eno`,`CH₂=CH−CH₂−CH₂−CH₃`,0,`El C1 tiene dos H iguales.`],[`4-metilpent-2-eno`,`CH₃−CH=CH−CH(CH₃)−CH₃`,1,`C2 tiene H y CH₃; C3 tiene H e isopropilo.`],[`eteno`,`CH₂=CH₂`,0,`Cada carbono tiene dos H iguales.`],[`but-2-ino`,`CH₃−C≡C−CH₃`,0,`Es un alquino: lineal, no hay cis/trans.`]];
const DIENO = [`buta`,`penta`,`hexa`,`hepta`];
GENS.push(
 {id:`nomAlqueno`,t:`t24`,src:`Tema 24, pág. 4–5`,name:`Nombrar alquenos`,make(){ const M = buildInsat(2); const opts = shuf([...new Set([M.name].concat(M.alt))].slice(0, 4));
   return { q:`Elige el nombre IUPAC de: ${Math.random() < .5 ? M.fwd : M.rev}`, opts, correct: opts.indexOf(M.name), pasos: M.pasos, r: M.name }; }},
 {id:`nomAlquino`,t:`t25`,src:`Tema 25, pág. 4`,name:`Nombrar alquinos`,make(){ const M = buildInsat(3); const opts = shuf([...new Set([M.name].concat(M.alt))].slice(0, 4));
   return { q:`Elige el nombre IUPAC de: ${Math.random() < .5 ? M.fwd : M.rev}`, opts, correct: opts.indexOf(M.name), pasos: M.pasos, r: M.name }; }},
 {id:`hInsat`,t:`t25`,ts:[`t24`],src:`Tema 24, pág. 3 · Tema 25, pág. 2 y 7`,name:`Fórmula: ¿cuántos H?`,make(){ const ord = pick([2, 3]); const M = buildInsat(ord);
   return { q:`¿Cuántos átomos de H tiene el ${M.name}?`, unit:`átomos de H`, ans: M.H, abs:.01,
     pasos:[`Cuenta los carbonos: ${M.C} (cadena${M.name.includes(`metil`) ? ` + 1 del metilo` : ``}).`,`${ord === 2 ? `Alqueno: CₙH₂ₙ` : `Alquino: CₙH₂ₙ₋₂`} → H = 2(${M.C})${ord === 3 ? ` − 2` : ``} = ${M.H}.`,`Compruébalo en la fórmula: ${M.fwd}.`], r:`C${SUBN(M.C)}H${SUBN(M.H)}` }; }},
 {id:`cistrans`,t:`t24`,src:`Tema 24, pág. 9–10 · compl. [2]`,name:`¿Tiene isómeros cis/trans?`,make(){ const d = pick(CT); const opts = [`Sí, tiene cis y trans`,`No tiene cis/trans`];
   return { q:`¿El ${d[0]} (${d[1]}) presenta isomería cis/trans?`, opts, correct: d[2] ? 0 : 1, pasos:[`Revisa los dos carbonos del doble enlace: cada uno necesita dos grupos distintos.`, d[3], d[2] ? `Se cumple la condición: sí hay cis y trans.` : `No se cumple: no hay cis/trans.`], r: opts[d[2] ? 0 : 1] }; }},
 {id:`dieno`,t:`t24`,src:`Tema 24, pág. 8`,name:`Tipo de dieno`,make(){ const L = between(4, 7); let a, b; do { a = between(1, L - 2); b = between(a + 1, L - 1); } while (b === a);
   const gap = b - a, tipo = gap === 1 ? 2 : gap === 2 ? 0 : 1; const lab = [`Conjugado`,`Aislado`,`Acumulado (aleno)`];
   const pA = [a, b], pB = [L - b, L - a]; const loc = (pA[0] < pB[0] || (pA[0] === pB[0] && pA[1] <= pB[1])) ? pA : pB; const nm = `${DIENO[L - 4]}-${loc.join(`,`)}-dieno`;
   return { q:`¿Qué tipo de dieno es el ${nm}?`, opts: lab, correct: tipo, pasos:[`Los dobles enlaces empiezan en C${loc[0]} y C${loc[1]}.`, gap === 1 ? `Comparten el C${loc[1]}: no hay enlace sencillo entre ellos.` : `Entre ellos hay ${gap - 1} enlace${gap - 1 > 1 ? `s` : ``} sencillo${gap - 1 > 1 ? `s` : ``}.`,`0 sencillos → acumulado · 1 → conjugado · 2 o más → aislado.`], r: lab[tipo] }; }},
 {id:`moleH2`,t:`t25`,ts:[`t24`],src:`Tema 24, pág. 13 · Tema 25, pág. 9`,name:`Moles de H₂ para saturar`,make(){ const nd = between(0, 2), nt = between(nd ? 0 : 1, 2); const h2 = nd + 2 * nt;
   return { q:`Una molécula tiene ${nd} doble${nd === 1 ? `` : `s`} enlace${nd === 1 ? `` : `s`} C=C y ${nt} triple${nt === 1 ? `` : `s`} enlace${nt === 1 ? `` : `s`} C≡C. ¿Cuántos moles de H₂ se necesitan para hidrogenar completamente 1 mol?`, unit:`mol H₂`, ans: h2, abs:.01,
     pasos:[`Cada enlace π se abre con 1 H₂.`,`Doble enlace = 1 π; triple enlace = 2 π.`,`H₂ = ${nd} × 1 + ${nt} × 2 = ${h2}.`], r:`${h2} mol de H₂` }; }}
);

/* ======================= GENERADORES: AROMÁTICOS ======================= */
const AR_SUB = [[`Br`,`bromo`],[`Cl`,`cloro`],[`CH₂CH₃`,`etil`],[`F`,`fluoro`],[`CH₃`,`metil`],[`NO₂`,`nitro`],[`I`,`yodo`]];
const arDraw = (subs, nums) => AR.svg(240, 190, AR.ring(120, 95, 40, subs, { nums }), `Anillo de benceno con sustituyentes`, 0);
const POSN = [[1, `orto`, `1,2`], [2, `meta`, `1,3`], [3, `para`, `1,4`]];
GENS.push(
 {id:`ompNombre`,t:`t26`,src:`Tema 26, pág. 12 y 14`,name:`Nombrar bencenos disustituidos`,make(){ const a = pick(AR_SUB), b = Math.random() < .3 ? a : pick(AR_SUB.filter(x => x !== a)); const P = pick(POSN);
   const [f, s] = a[1] <= b[1] ? [a, b] : [b, a]; const loc = P[2].split(`,`)[1];
   const nm = a === b ? `${P[2]}-di${a[1]}benceno` : `1-${f[1]}-${loc}-${s[1]}benceno`;
   const other = POSN.filter(x => x !== P);
   const alts = a === b ? other.map(x => `${x[2]}-di${a[1]}benceno`).concat([`${P[1]}-${a[1]}benceno`]) : [`1-${s[1]}-${loc}-${f[1]}benceno`].concat(other.map(x => `1-${f[1]}-${x[2].split(`,`)[1]}-${s[1]}benceno`));
   const opts = shuf([nm].concat(alts).slice(0, 4));
   return { q:`Elige el nombre IUPAC de este benceno disustituido.`, draw: arDraw({ 0:a[0], [P[0]]:b[0] }), opts, correct: opts.indexOf(nm),
     pasos:[`Los sustituyentes están en posición ${P[1]} (${P[2]}).`, a === b ? `Son iguales: se usa "di" → di${a[1]}.` : `Son distintos: el número 1 lo recibe el primero en orden alfabético (${f[1]}); ${s[1]} queda en ${loc}.`,`Nombre: ${nm} (= ${P[1][0]}-${a === b ? `di` + a[1] : f[1] + s[1]}benceno).`], r: nm }; }},
 {id:`ompPos`,t:`t26`,src:`Tema 26, pág. 12`,name:`¿Orto, meta o para?`,make(){ const a = pick(AR_SUB), b = pick(AR_SUB); const P = pick(POSN); const opts = [`orto (1,2)`,`meta (1,3)`,`para (1,4)`];
   return { q:`¿En qué posición relativa están los dos sustituyentes?`, draw: arDraw({ 0:a[0], [P[0]]:b[0] }), opts, correct: POSN.indexOf(P),
     pasos:[`Pon el número 1 en un sustituyente y cuenta por el camino más corto hasta el otro.`,`Llegas al carbono ${P[2].split(`,`)[1]}.`,`1,2 = orto · 1,3 = meta · 1,4 = para ("La ORTOgrafía es la META PARA aprobar").`], r: opts[POSN.indexOf(P)] }; }},
 {id:`huckel`,t:`t26`,src:`Tema 26, pág. 3`,name:`Regla de Hückel`,make(){ const e = pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]); const n = (e - 2) / 4, ok = Number.isInteger(n); const opts = [`Sí cumple (n entero)`,`No cumple (n no entero)`];
   return { q:`Un anillo cíclico, plano y completamente conjugado tiene ${e} electrones π (${e / 2} dobles enlaces). ¿Cumple la regla de Hückel?`, opts, correct: ok ? 0 : 1,
     pasos:[`4n + 2 = ${e}.`,`4n = ${e - 2} → n = ${e - 2}/4 = ${n}.`, ok ? `n es entero: cumple Hückel → aromático.` : `n no es entero: no cumple Hückel → no es aromático.`], r: opts[ok ? 0 : 1] }; }},
 {id:`monoNombre`,t:`t26`,src:`Tema 26, pág. 13`,name:`Nombres comunes (monosustituidos)`,make(){ const L = [[`CH₃`,`Tolueno`],[`OH`,`Fenol`],[`NH₂`,`Anilina`],[`COOH`,`Ácido benzoico`],[`O−CH₃`,`Anisol`],[`SO₃H`,`Ácido bencenosulfónico`],[`CO−CH₃`,`Acetofenona`],[`CH=CH₂`,`Estireno`],[`NO₂`,`Nitrobenceno`],[`Cl`,`Clorobenceno`],[`CH₂CH₃`,`Etilbenceno`],[`Br`,`Bromobenceno`]];
   const d = pick(L); const opts = shuf([d].concat(shuf(L.filter(x => x !== d)).slice(0, 3))); const names = opts.map(x => x[1]);
   return { q:`¿Cómo se llama este compuesto?`, draw: arDraw({ 0:d[0] }), opts: names, correct: names.indexOf(d[1]),
     pasos:[`El sustituyente es −${d[0]}.`,`Monosustituido: nombre del grupo + benceno, o el nombre común aceptado por la IUPAC.`,`Respuesta: ${d[1]}.`], r: d[1] }; }},
 {id:`seaProd`,t:`t26`,src:`Tema 26, pág. 7–8`,name:`Producto de la reacción del benceno`,make(){ const R = [[`Cl₂ con FeCl₃`,`Clorobenceno`,`halogenación (SEA)`],[`Br₂ con FeBr₃`,`Bromobenceno`,`halogenación (SEA)`],[`HNO₃ con H₂SO₄`,`Nitrobenceno`,`nitración (SEA)`],[`H₂SO₄ (SO₃)`,`Ácido bencenosulfónico`,`sulfonación (SEA, reversible)`],[`CH₃Cl con AlCl₃`,`Tolueno (metilbenceno)`,`alquilación de Friedel-Crafts`],[`(CH₃)₂CHCl con AlCl₃`,`Isopropilbenceno (cumeno)`,`alquilación de Friedel-Crafts`],[`CH₃COCl con AlCl₃`,`Acetofenona`,`acilación de Friedel-Crafts`],[`3 H₂ con Ni o Pt (presión y calor)`,`Ciclohexano`,`hidrogenación (adición forzada)`],[`Cl₂ con luz UV`,`Hexaclorociclohexano`,`halogenación radicalaria (adición)`]];
   const d = pick(R); const opts = shuf([d[1]].concat(shuf(R.filter(x => x !== d && x[1] !== d[1]).map(x => x[1])).slice(0, 3)));
   return { q:`Benceno + ${d[0]} → ¿qué producto se forma?`, opts, correct: opts.indexOf(d[1]), pasos:[`Identifica el reactivo y el catalizador: es una ${d[2]}.`, d[2].includes(`adición`) || d[2].includes(`hidrogenación`) ? `En condiciones forzadas el anillo pierde la aromaticidad.` : `Entra un grupo en lugar de un H y el anillo sigue aromático.`,`Producto: ${d[1]}.`], r: d[1] }; }}
);

/* ======================= GENERADORES: ALCOHOLES Y FENOLES ======================= */
const alcMol = (L, p, br) => { const atom = i => { const n = (i > 1) + (i < L) + (br === i) + (p === i); const b = [`C`,`CH`,`CH₂`,`CH₃`][4 - n];
    if (p === i && i === 1) return `HO−` + b + (br === i ? `(CH₃)` : ``); if (p === i && i === L) return b + `−OH`;
    return b + (br === i ? `(CH₃)` : ``) + (p === i ? `(OH)` : ``); };
  const s = []; for (let i = 1; i <= L; i++) s.push(atom(i)); return s.join(`−`); };
const buildAlc = () => { const L = between(3, 6), p = between(1, L); let br = Math.random() < .55 ? between(2, L - 1) : 0;
  const pA = p, pB = L + 1 - p, bA = br, bB = br ? L + 1 - br : 0; const useA = pA < pB || (pA === pB && (!br || bA <= bB));
  const mk = (pp, bb) => (bb ? `${bb}-metil` : ``) + ROOT[L] + `an-${pp}-ol`;
  const name = useA ? mk(pA, bA) : mk(pB, bB), wrong = useA ? mk(pB, bB) : mk(pA, bA);
  const P = useA ? pA : pB, B = useA ? bA : bB;
  const alts = [wrong, (B ? `${B}-metil` : ``) + ROOT[L] + `an-${P}-ona`, br ? mk(P, useA ? bB : bA) : `${P}-hidroxi${ROOT[L]}ano`, mk(P + 1 > L ? P - 1 : P + 1, B)];
  const nC = (p > 1) + (p < L) + (br === p); const C = L + (br ? 1 : 0);
  const shown = Math.random() < .5 ? alcMol(L, p, br) : alcMol(L, L + 1 - p, br ? L + 1 - br : 0);
  return { L, name, alts, P, B, pA, pB, nC, C, shown, br }; };
const PHS = [[`Cl`,`cloro`],[`Br`,`bromo`],[`CH₃`,`metil`],[`NO₂`,`nitro`],[`CH₂CH₃`,`etil`]];
const FUNCS = [[`ácido carboxílico (−COOH)`,1,`ácido …-oico`],[`éster (−COO−R)`,2,`-oato de alquilo`],[`aldehído (−CHO)`,5,`-al`],[`cetona (−CO−)`,6,`-ona`],[`alcohol (−OH)`,7,`-ol`],[`fenol (Ar−OH)`,8,`-fenol`],[`éter (−O−)`,10,`-oxi-`]];
GENS.push(
 {id:`nomAlcohol`,t:`t27`,src:`Tema 27, pág. 5–9`,name:`Nombrar alcoholes`,make(){ const M = buildAlc(); const opts = shuf([...new Set([M.name].concat(M.alts))].slice(0, 4));
   return { q:`Elige el nombre IUPAC de: ${M.shown}`, opts, correct: opts.indexOf(M.name),
     pasos:[`Cadena principal con el C del −OH: ${M.L} carbonos → ${ROOT[M.L]}ano → ${ROOT[M.L]}an-…-ol.`,`Desde un extremo el −OH queda en C${M.pA}; desde el otro, en C${M.pB}.`, M.pA === M.pB ? (M.br ? `Empate: decide la rama, que debe quedar con el número más bajo.` : `Empate: da igual el sentido.`) : `Gana el extremo que da C${Math.min(M.pA, M.pB)} al −OH, aunque la rama quede con un número mayor.`].concat(M.br ? [`El metilo queda en C${M.B}.`] : []).concat([`Nombre: ${M.name}. Fórmula C${SUBN(M.C)}H${SUBN(2 * M.C + 2)}O.`]), r: M.name }; }},
 {id:`tipoAlc`,t:`t27`,src:`Tema 27, pág. 9 y 15 · compl. [2]`,name:`Alcohol 1°, 2° o 3° y su oxidación`,make(){ const M = buildAlc(); const opts = [`Primario → aldehído y luego ácido`,`Secundario → cetona`,`Terciario → no se oxida`];
   return { q:`¿Qué tipo de alcohol es el ${M.name} (${M.shown}) y qué da al oxidarse?`, opts, correct: M.nC - 1,
     pasos:[`Busca el carbono que tiene el −OH (C${M.P}).`,`Cuenta los carbonos unidos a él: ${M.nC}.`,`1 → primario · 2 → secundario · 3 → terciario.`,`Respuesta: ${opts[M.nC - 1]}.`], r: opts[M.nC - 1] }; }},
 {id:`nomFenol`,t:`t27`,ts:[`t26`],src:`Tema 27, pág. 10–12`,name:`Nombrar fenoles`,make(){ const s = pick(PHS), v = pick([1, 2, 3]); const loc = v + 1, omp = [``,`orto`,`meta`,`para`][v];
   const nm = `${loc}-${s[1]}fenol`; const alts = [1, 2, 3].filter(x => x !== v).map(x => `${x + 1}-${s[1]}fenol`).concat([v === 3 ? `1-${s[1]}-4-hidroxibenceno` : `${8 - loc}-${s[1]}fenol`]);
   const opts = shuf([nm].concat(alts));
   return { q:`Elige el nombre de este fenol.`, draw: arDraw({ 0:`OH`, [v]:s[0] }), opts, correct: opts.indexOf(nm),
     pasos:[`El carbono con el −OH es el C1.`,`Numera hacia el sustituyente por el camino más corto: queda en C${loc}.`,`Nombre: ${nm} (${omp}-${s[1]}fenol${s[1] === `metil` ? `, ${[``,`o`,`m`,`p`][v]}-cresol` : ``}).`], r: nm }; }},
 {id:`combAlc`,t:`t27`,src:`Tema 27, pág. 15`,name:`Combustión de alcoholes: moles de O₂`,make(){ const n = between(1, 8); const nm = [``,`metanol`,`etanol`,`propan-1-ol`,`butan-1-ol`,`pentan-1-ol`,`hexan-1-ol`,`heptan-1-ol`,`octan-1-ol`][n]; const o2 = 3 * n / 2;
   return { q:`En la combustión completa de 1 mol de ${nm} (C${SUBN(n)}H${SUBN(2 * n + 1)}OH), ¿cuántos moles de O₂ se necesitan?`, unit:`mol O₂`, ans:o2, abs:.01,
     pasos:[`Fórmula del material: CₙH₂ₙ₊₁OH + (3n/2) O₂ → n CO₂ + (n+1) H₂O.`,`n = ${n} → O₂ = 3(${n})/2 = ${nf(o2, 1)}.`,`Productos: ${n} CO₂ + ${n + 1} H₂O.`, o2 % 1 ? `Sin decimales: 2 C${SUBN(n)}H${SUBN(2 * n + 1)}OH + ${3 * n} O₂ → ${2 * n} CO₂ + ${2 * n + 2} H₂O.` : `Comprobación de O: 1 + ${3 * n} = ${2 * n} + ${n + 1} ✔.`], r:`${nf(o2, 1)} mol de O₂` }; }},
 {id:`prioFunc`,t:`t27`,src:`Tema 27, pág. 5–6`,name:`¿Qué función da el sufijo?`,make(){ const a = shuf(FUNCS.slice()).slice(0, 2); const win = a[0][1] < a[1][1] ? a[0] : a[1], lose = win === a[0] ? a[1] : a[0];
   const opts = [`${win[0]} → sufijo ${win[2]}`,`${lose[0]} → sufijo ${lose[2]}`]; const o2 = shuf(opts.slice());
   return { q:`Una molécula tiene ${a[0][0]} y ${a[1][0]}. ¿Cuál da el sufijo del nombre?`, opts:o2, correct:o2.indexOf(opts[0]),
     pasos:[`Orden de prioridad: ácido > éster > aldehído > cetona > alcohol > fenol > éter.`,`${win[0]} (puesto ${win[1]}) le gana a ${lose[0]} (puesto ${lose[1]}).`,`La de mayor prioridad da el sufijo; la otra se nombra como prefijo.`], r: opts[0] }; }}
);

/* ======================= GENERADORES: ÉTERES ======================= */
const ALCOXI = [``,`metoxi`,`etoxi`,`propoxi`,`butoxi`];
const RAD = [``,`CH₃`,`CH₃CH₂`,`CH₃CH₂CH₂`,`CH₃(CH₂)₃`];
const buildEter = () => { for (let k = 0; k < 40; k++){ const L = between(1, 6), a = between(1, Math.min(3, L)); let p = L >= 3 && Math.random() < .5 ? between(2, L - 1) : 1;
    if (a === L && p !== 1) continue; p = Math.min(p, L + 1 - p);
    const OR = `O−${RAD[a]}`;
    const atoms = []; for (let i = 1; i <= L; i++){ const n = (i > 1) + (i < L) + (i === p); const b = [`C`,`CH`,`CH₂`,`CH₃`][4 - n]; atoms.push(b); }
    let shown; if (p === 1) shown = `${RAD[a]}−O−` + atoms.join(`−`).replace(/^CH₃$/, `CH₃`); else { atoms[p - 1] += `(${OR})`; shown = atoms.join(`−`); }
    if (p === 1 && L > 1) shown = `${RAD[a]}−O−` + atoms.slice().join(`−`);
    const loc = L >= 3 ? `${p}-` : ``; const name = `${loc}${ALCOXI[a]}${ROOT[L]}ano`;
    const alts = [L >= 3 ? `${L + 1 - p === p ? p + 1 : L + 1 - p}-${ALCOXI[a]}${ROOT[L]}ano` : `${ALCOXI[a]}${ROOT[L + 1]}ano`, a !== L ? `${loc}${ALCOXI[Math.min(L, 4)]}${ROOT[a]}ano` : `${ROOT[a]}oxi${ROOT[L]}ano`, `${ROOT[L + a]}an-${Math.max(1, p)}-ol`, `${loc}${ALCOXI[a]}${ROOT[L]}eno`];
    return { L, a, p, name, alts: [...new Set(alts.filter(x => x !== name))], shown, C: L + a }; }
  return { L:2, a:1, p:1, name:`metoxietano`, alts:[`etoximetano`,`propan-1-ol`,`metoxieteno`], shown:`CH₃−O−CH₂−CH₃`, C:3 }; };
const ETYPES = [[`CH₃−O−CH₃`,`Simétrico · alifático`],[`CH₃CH₂−O−CH₂CH₃`,`Simétrico · alifático`],[`CH₃−O−CH₂CH₃`,`Asimétrico · alifático`],[`CH₃−O−C(CH₃)₃ (MTBE)`,`Asimétrico · alifático`],[`C₆H₅−O−CH₃ (anisol)`,`Asimétrico · aromático mixto`],[`C₆H₅−O−CH₂CH₃`,`Asimétrico · aromático mixto`],[`C₆H₅−O−C₆H₅`,`Simétrico · aromático puro`],[`CH₃CH₂−O−CH₂CH₂CH₃`,`Asimétrico · alifático`]];
const ETOPTS = [`Simétrico · alifático`,`Asimétrico · alifático`,`Asimétrico · aromático mixto`,`Simétrico · aromático puro`];
const CICLO = [[3,`oxirano (epóxido)`,`oxaciclopropano`],[4,`oxetano`,`oxaciclobutano`],[5,`oxolano (THF)`,`oxaciclopentano`],[6,`oxano (THP)`,`oxaciclohexano`]];
GENS.push(
 {id:`nomEter`,t:`t28`,src:`Tema 28, pág. 7`,name:`Nombrar éteres (IUPAC)`,make(){ const M = buildEter(); const opts = shuf([M.name].concat(M.alts.slice(0, 3)));
   return { q:`Elige el nombre IUPAC de: ${M.shown}`, opts, correct: opts.indexOf(M.name),
     pasos:[`Cadena corta unida al O: ${M.a} C → ${ALCOXI[M.a]} (grupo alcoxi).`,`Cadena larga: ${M.L} C → ${ROOT[M.L]}ano (alcano principal).`].concat(M.L >= 3 ? [`Se numera desde el extremo más cercano al O: queda en el C${M.p}.`] : [`Con 1 o 2 carbonos no hace falta número.`]).concat([`Nombre: ${M.name} (C${SUBN(M.C)}H${SUBN(2 * M.C + 2)}O).`]), r: M.name }; }},
 {id:`tipoEter`,t:`t28`,src:`Tema 28, pág. 4`,name:`Clasificar éteres`,make(){ const d = pick(ETYPES);
   return { q:`¿Cómo se clasifica el éter ${d[0]}?`, opts: ETOPTS, correct: ETOPTS.indexOf(d[1]), pasos:[`Simetría: ¿los dos grupos unidos al O son iguales?`,`Naturaleza: ¿hay anillos aromáticos? Uno = mixto; dos = puro; ninguno = alifático.`,`Respuesta: ${d[1]}.`], r: d[1] }; }},
 {id:`cicloEter`,t:`t28`,src:`Tema 28, pág. 5 y 9`,name:`Nombrar éteres cíclicos`,make(){ const d = pick(CICLO); const sys = Math.random() < .5; const opts = CICLO.map(x => sys ? x[2] : x[1]);
   return { q:`Un éter cíclico saturado tiene un anillo de ${d[0]} miembros (${d[0] - 1} C + 1 O). ¿Cómo se llama ${sys ? `con el prefijo "oxa-"` : `(Hantzsch-Widman / común)`}?`, opts, correct: opts.indexOf(sys ? d[2] : d[1]),
     pasos:[`Cuenta los átomos del anillo: ${d[0]}.`,`Oxa- + cicloalcano de ${d[0]} → ${d[2]}.`,`Hantzsch-Widman: 3 oxirano · 4 oxetano · 5 oxolano · 6 oxano.`,`Respuesta: ${sys ? d[2] : d[1]}.`], r: sys ? d[2] : d[1] }; }},
 {id:`combEter`,t:`t28`,src:`Tema 28, pág. 12`,name:`Combustión de éteres: moles de O₂`,make(){ const L = [[2,`metoximetano`],[3,`metoxietano`],[4,`etoxietano`],[4,`1-metoxipropano`],[5,`etoxipropano`],[6,`propoxipropano`],[6,`etoxibutano`]]; const [n, nm] = pick(L); const o2 = 3 * n / 2;
   return { q:`En la combustión completa de 1 mol de ${nm} (C${SUBN(n)}H${SUBN(2 * n + 2)}O), ¿cuántos moles de O₂ se necesitan?`, unit:`mol O₂`, ans:o2, abs:.01,
     pasos:[`Fórmula del material: CₙH₂ₙ₊₂O + (3n/2) O₂ → n CO₂ + (n+1) H₂O.`,`n = ${n} → O₂ = 3(${n})/2 = ${nf(o2, 1)}.`,`Productos: ${n} CO₂ + ${n + 1} H₂O.`], r:`${nf(o2, 1)} mol de O₂` }; }}
);

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

/* ======================= INTERFAZ NUEVA: NAVEGACIÓN, INICIO, POMODORO, AGENDA ======================= */
const ICONS = {
  home:`<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>`,
  book:`<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>`,
  pencil:`<path d="M4 20h4L19 9l-4-4L4 16z"/>`,
  clip:`<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>`,
  chat:`<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>`,
  sun:`<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
  moon:`<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>`,
  list:`<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>`,
  left:`<path d="M15 6l-6 6 6 6"/>`, right:`<path d="M9 6l6 6-6 6"/>`,
  plus:`<path d="M12 5v14M5 12h14"/>`, gear:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`,
  bolt:`<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>`, play:`<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>`,
  cal:`<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>`, timer:`<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>`,
  full:`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`, bell:`<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0"/>`,
  tag:`<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>`
};
const icon = (n, cls = `ic`) => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ``}</svg>`;
const SECS = [
  { k:`inicio`, n:`Inicio`, ic:`home`, modes:[[`inicio`,`Hoy`],[`guia`,`Cómo estudiar`],[`progreso`,`Mi progreso`],[`notas`,`Mis notas`]] },
  { k:`estudiar`, n:`Estudiar`, ic:`book`, modes:[[`repaso`,`Repaso`],[`fichas`,`Fichas`],[`videos`,`Videos`],[`formulario`,`Formulario`]] },
  { k:`practicar`, n:`Practicar`, ic:`pencil`, modes:[[`preguntas`,`Preguntas`],[`ejercicios`,`Ejercicios`],[`practica`,`Práctica`],[`formula`,`¿Qué fórmula?`],[`lab`,`Laboratorio`]] },
  { k:`examen`, n:`Examen`, ic:`clip`, modes:[[`simulacro`,`Simulacro`],[`impreso`,`Parcial impreso`]] },
  { k:`preguntar`, n:`Preguntar`, ic:`chat`, modes:[[`preguntar`,`Preguntar`]] }
];
const NEWT = [TORDER[TORDER.length - 1]];
const MESES = [`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`];
const DIAS = [`domingo`,`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`];
const pad2 = n => String(n).padStart(2, `0`);
const dstr = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const todayStr = () => dstr(new Date());
const pdate = s => { const [y, m, d] = s.split(`-`).map(Number); return new Date(y, m - 1, d); };
const dayDiff = (a, b) => Math.round((pdate(b) - pdate(a)) / 864e5);
const addDays = (s, n) => { const d = pdate(s); d.setDate(d.getDate() + n); return dstr(d); };
const fmtDay = s => { const d = pdate(s); return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]}`; };
const fmtTime = t => { if (!t) return ``; let [h, m] = t.split(`:`).map(Number); const ap = h >= 12 ? `pm` : `am`; h = h % 12 || 12; return `${h}:${pad2(m)} ${ap}`; };
const secOf = m => SECS.find(s => s.modes.some(x => x[0] === m)) || SECS[0];
const modeName = m => (MODES.find(x => x[0] === m) || [m, m])[1];
const selList = () => TORDER.filter(t => S.sel.has(t));
const selKey = () => selList().join(`,`);
const primary = () => { const l = selList(); return l.length ? l[l.length - 1] : null; };
const oneUnit = () => { const l = selList(); const u = l.length && unitOf(l[0]); return u && l.every(t => u.ts.includes(t)) ? u : null; };
const unitOf = t => UNITS.find(u => u.ts.includes(t));

/* ---------- estado extra (se guarda dentro de S.x) ---------- */
function initX(){
  const x = S.x;
  x.pomo = Object.assign({ study:25, short:5, long:15, cycles:4, goal:6, sound:`campana`, autoBreak:true, autoStudy:false, focus:false, link:`` }, x.pomo || {});
  x.pst = x.pst || { phase:`study`, cycle:1, run:false, end:0, left:x.pomo.study * 60 };
  x.plog = x.plog || {}; x.ev = x.ev || []; x.seen = x.seen || {}; x.days = x.days || []; x.sm = x.sm || {}; x.rpos = x.rpos || {}; x.ptab = x.ptab || {};
  if (!x.name) x.name = `Gaby`;
  if (x.pst.run && x.pst.end <= Date.now()){ if (x.pst.phase === `study`) logPomo(); x.pst.run = false; pomoAdvance(); }
}
function markDay(){ const t = todayStr(), d = S.x.days || (S.x.days = []); if (!d.includes(t)){ d.push(t); if (d.length > 90) d.splice(0, d.length - 90); } }
function streak(){ const d = new Set(S.x.days || []); let s = todayStr(); if (!d.has(s)) s = addDays(s, -1); let n = 0; while (d.has(s)){ n++; s = addDays(s, -1); } return n; }

/* ---------- navegación ---------- */
function go(mode){ S.mode = mode; S.x.sm[secOf(mode).k] = mode; if (![`inicio`,`guia`,`progreso`,`preguntar`,`notas`].includes(mode)) S.x.last = Object.assign(S.x.last && S.x.last.mode === mode ? S.x.last : {}, { mode, sel:selList() }); save(); SIM.on = false; stopTick(); closeSheet(); renderAll(); topScroll(); }
function goSec(k){ const sc = SECS.find(s => s.k === k); go(S.x.sm[k] || sc.modes[0][0]); }
function topScroll(){ window.scrollTo({ top:0 }); const p = $(`#panel`); if (p) p.scrollTop = 0; }
function setSel(set){ S.sel = new Set(set); save(); SIM.on = false; stopTick(); renderAll(); }
function bp(){ return innerWidth >= 1100 ? `wide` : innerWidth > 700 ? `mid` : `phone`; }

/* ---------- tema día/noche ---------- */
function isDark(){ const t = S.x.theme; return t === `dark` || (t !== `light` && matchMedia(`(prefers-color-scheme: dark)`).matches); }
function applyTheme(){ const t = S.x.theme; if (t === `light` || t === `dark`) document.documentElement.setAttribute(`data-theme`, t); else document.documentElement.removeAttribute(`data-theme`); }
function toggleTheme(){ S.x.theme = isDark() ? `light` : `dark`; save(); applyTheme(); renderHead(); }

/* ---------- riel, barra inferior, encabezado y subpestañas ---------- */
function navBtn(sc, cls){ const b = btn(``, cls); b.innerHTML = icon(sc.ic) + `<span>${sc.n}</span>`; if (secOf(S.mode).k === sc.k) b.setAttribute(`aria-current`, `page`);
  if (sc.k === `practicar` && S.err.length) b.append(el(`span`, `dotb`, S.err.length > 99 ? `99+` : String(S.err.length)));
  b.onclick = () => goSec(sc.k); return b; }
function renderRail(){ const r = $(`#rail`); r.innerHTML = ``; const lg = el(`div`, `lg`, `Q`); lg.title = `Química · Laboratorio Clínico`; r.append(lg); SECS.forEach(sc => r.append(navBtn(sc, `ri`))); }
function renderBnav(){ const r = $(`#bnav`); r.innerHTML = ``; SECS.forEach(sc => r.append(navBtn(sc, `bn`))); }
function renderHead(){
  const h = $(`#head`); h.innerHTML = ``; const sc = secOf(S.mode), sel = selList(), p = primary();
  const top = el(`div`, `top`); const left = el(`div`);
  if (S.mode === `inicio`){
    const d = new Date(); left.append(el(`div`, `k`, `${DIAS[d.getDay()][0].toUpperCase() + DIAS[d.getDay()].slice(1)} ${d.getDate()} de ${MESES[d.getMonth()]} · Química`));
    const h1 = el(`h1`, ``, `Hola, ${S.x.name} 👋 `); const ed = btn(`✎`, `ed`, () => editName(h1)); ed.title = `Cambiar nombre`; ed.setAttribute(`aria-label`, `Cambiar nombre`); h1.append(ed); left.append(h1);
  } else {
    left.append(el(`div`, `k`, `${sc.n}${oneUnit() ? ` · ` + oneUnit().name.split(` · `)[0] : ``}${sc.modes.length > 1 ? ` · ` + modeName(S.mode) : ``}`));
    left.append(el(`h1`, ``, !sel.length ? `Sin temas elegidos` : sel.length === 1 ? TOPICS[p].name : sel.length === TORDER.length ? `Todos los temas` : sel.length <= 3 ? `Temas ${sel.slice(0, -1).map(t => t.slice(1)).join(`, `)} y ${sel[sel.length - 1].slice(1)}` : oneUnit() && oneUnit().ts.length === sel.length ? oneUnit().name.split(` · `)[1] : `${sel.length} temas elegidos`));
  }
  const tools = el(`div`, `tools`);
  const ps = S.x.pst; if (ps.run || ps.left < pomoDur(ps.phase)){ const pb = btn(``, `hbtn pomoh`, () => goSec(`inicio`)); pb.innerHTML = `🍅 <span class="pomo-time">${fmtSec(pomoLeft())}</span>`; pb.title = `Pomodoro`; tools.append(pb); }
  const pb2 = btn(``, `hbtn`, openPalette); pb2.innerHTML = `<span style="width:14px;height:14px;border-radius:50%;background:var(--acc);display:inline-block"></span><span class="lbl">Colores</span>`; pb2.title = `Elegir colores`; tools.append(pb2);
  const tb = btn(``, `hbtn`, toggleTheme); tb.innerHTML = isDark() ? icon(`sun`) + `<span class="lbl">Día</span>` : icon(`moon`) + `<span class="lbl">Noche</span>`; tb.title = `Cambiar a modo ${isDark() ? `día` : `noche`}`; tools.append(tb);
  top.append(left, tools); h.append(top);
  const ch = el(`div`, `chips`);
  const mx = bp() === `phone` ? 3 : 6;
  sel.slice(0, mx).forEach(t => { const c = btn(``, `tchp`, openTopics); c.style.setProperty(`--c`, `var(--${t})`); c.innerHTML = `<i></i>${TOPICS[t].n}`; ch.append(c); });
  if (sel.length > mx) ch.append(btn(`+${sel.length - mx}`, `tchp`, openTopics));
  const add = btn(``, `tchp add`, openTopics); add.innerHTML = icon(`plus`) + `Temas`; ch.append(add); h.append(ch);
  const { a, o } = totals(); const st = el(`div`, `hstat`); st.innerHTML = `<span>Respondidas <b>${a}</b></span><span>Aciertos <b>${a ? Math.round(o / a * 100) + `%` : `—`}</b></span><span>Para repasar <b>${S.err.length}</b></span>`; h.append(st);
}
function editName(h1){ const i = el(`input`, `inp`); i.value = S.x.name; i.style.maxWidth = `260px`; i.setAttribute(`aria-label`, `Tu nombre`); const done = () => { S.x.name = i.value.trim() || `Gaby`; save(); renderHead(); }; i.onblur = done; i.onkeydown = e => { if (e.key === `Enter`) i.blur(); }; h1.replaceWith(i); i.focus(); i.select(); }
function renderSub(){
  const w = $(`#subw`); w.innerHTML = ``; const sc = secOf(S.mode);
  if (sc.modes.length > 1){ const s = el(`div`, `subs`); s.setAttribute(`role`, `tablist`); sc.modes.forEach(([k, n]) => { const b = btn(n, `sb`, () => go(k)); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, S.mode === k); s.append(b); }); w.append(s); }
  if ([`preguntas`,`ejercicios`].includes(S.mode)){ const t = el(`div`, `subtools`); t.append(btn(S.shuffle ? `Orden original` : `Mezclar orden`, `tool`, () => { S.shuffle = !S.shuffle; renderView(); renderSub(); })); w.append(t); }
  w.style.display = w.children.length ? `` : `none`;
}
function renderStatus(){ renderHead(); renderRail(); renderBnav(); }

/* ---------- panel derecho ---------- */
function panelCtx(){ return S.mode === `inicio` ? `inicio` : S.mode === `repaso` && !S.x.rall ? `repaso` : `otro`; }
function renderPanel(){
  const p = $(`#panel`); p.innerHTML = ``; if (bp() !== `wide`) return;
  const ctx = panelCtx(); const tabs = ctx === `inicio` ? [[`agenda`,`Agenda`],[`temas`,`Temas`]] : ctx === `repaso` ? [[`indice`,`Índice del tema`],[`temas`,`Temas`]] : [[`temas`,`Temas`],[`agenda`,`Agenda`]];
  let cur = S.x.ptab[ctx]; if (!tabs.some(t => t[0] === cur)) cur = tabs[0][0];
  if (ctx !== `inicio`){ const m = el(`div`); m.dataset.pomo = `mini`; p.append(m); }
  const tb = el(`div`, `ptabs`); tb.setAttribute(`role`, `tablist`);
  tabs.forEach(([k, n]) => { const b = btn(n, ``, () => { S.x.ptab[ctx] = k; save(); renderPanel(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, cur === k); tb.append(b); });
  p.append(tb); const body = el(`div`); p.append(body);
  if (cur === `temas`) topicsInto(body); else if (cur === `indice`) tocInto(body); else agendaInto(body);
  paintPomo();
}
function openTopics(){
  if (bp() === `wide`){ S.x.ptab[panelCtx()] = `temas`; save(); renderPanel(); $(`#panel`).scrollTop = 0; const f = $(`#panel .trow`); if (f) f.focus(); return; }
  openSheet(`Elegir temas`, b => { topicsInto(b); const d = btn(`Listo`, `btn acc wide`, closeSheet); d.style.marginTop = `8px`; b.append(d); }, true);
}

/* ---------- lista de temas ---------- */
function topicAcc(t){ const [o, b] = S.st[`T_` + t] || [0, 0]; return o + b ? Math.round(o / (o + b) * 100) : null; }
function topicsInto(box){
  const q = el(`div`, `tqk`);
  q.append(btn(`Todos`, ``, () => setSel(TORDER)), btn(`Ninguno`, ``, () => setSel([])), btn(`Solo lo nuevo (${NEWT.map(t => t.slice(1)).join(`, `)})`, ``, () => setSel(NEWT)));
  box.append(q);
  for (const u of UNITS){
    const g = el(`div`, `tunit`); const on = u.ts.filter(k => S.sel.has(k)).length;
    const h = el(`div`, `tuh`); h.append(el(`b`, ``, u.name)); const hs = el(`span`);
    hs.append(btn(on === u.ts.length ? `Quitar unidad` : `Elegir unidad`, ``, () => { const s = new Set(S.sel); if (on === u.ts.length) u.ts.forEach(k => s.delete(k)); else u.ts.forEach(k => s.add(k)); setSel(s); }), btn(`Solo esta`, ``, () => setSel(u.ts)));
    h.append(hs); g.append(h);
    for (const k of u.ts){
      const v = TOPICS[k], onk = S.sel.has(k), acc = topicAcc(k);
      const b = btn(``, `trow`); b.style.setProperty(`--c`, `var(--${k})`); b.setAttribute(`aria-pressed`, onk);
      b.innerHTML = `<span class="ck">${onk ? `✓` : ``}</span><span class="n">${k.slice(1)}</span><span class="nm">${v.name}${NEWT.includes(k) ? `<span class="nw">NUEVO</span>` : ``}</span><span class="pc" title="Aciertos en este tema"><i><b style="width:${acc || 0}%"></b></i>${acc == null ? `—` : acc + `%`}</span>`;
      b.onclick = () => { const s = new Set(S.sel); onk ? s.delete(k) : s.add(k); setSel(s); };
      g.append(b);
    }
    box.append(g);
  }
}

/* ---------- hojas (diálogos) ---------- */
let SH = null;
function openSheet(title, build, live){ SH = { title, build, live, focus: document.activeElement }; drawSheet(); }
function drawSheet(){
  const r = $(`#sheetroot`); r.innerHTML = ``; if (!SH) return;
  const sc = el(`div`, `scrim`); sc.onclick = closeSheet;
  const sh = el(`div`, `sheet`); sh.setAttribute(`role`, `dialog`); sh.setAttribute(`aria-modal`, `true`); sh.setAttribute(`aria-label`, SH.title);
  sh.append(el(`div`, `grab`)); const hd = el(`div`, `sh`); const x = btn(`×`, `xbtn`, closeSheet); x.setAttribute(`aria-label`, `Cerrar`); hd.append(el(`h3`, ``, SH.title), x); sh.append(hd);
  const body = el(`div`); SH.build(body); sh.append(body); r.append(sc, sh);
  const st = SH.scroll || 0; sh.scrollTop = st; sh.onscroll = () => { if (SH) SH.scroll = sh.scrollTop; };
  if (!SH.drawn){ SH.drawn = true; setTimeout(() => { const f = sh.querySelector(`input,select,button.trow,button`); if (f) f.focus({ preventScroll:true }); }, 30); }
}
function closeSheet(){ const f = SH && SH.focus; SH = null; const r = $(`#sheetroot`); if (r) r.innerHTML = ``; if (f && f.isConnected) try { f.focus({ preventScroll:true }); } catch(e){} }

/* ======================= POMODORO ======================= */
const PO = { ac:null, last:`` };
const PHN = { study:`Estudio`, short:`Descanso corto`, long:`Descanso largo` };
const fmtSec = s => `${Math.floor(s / 60)}:${pad2(s % 60)}`;
function pomoDur(ph){ const c = S.x.pomo; return (ph === `study` ? c.study : ph === `short` ? c.short : c.long) * 60; }
function pomoLeft(){ const p = S.x.pst; return p.run ? Math.max(0, Math.round((p.end - Date.now()) / 1000)) : p.left; }
function logPomo(){ const t = todayStr(), l = S.x.plog[t] || { n:0, min:0 }; l.n++; l.min += S.x.pomo.study; S.x.plog[t] = l; markDay(); }
function pomoAdvance(){ const p = S.x.pst, c = S.x.pomo; if (p.phase === `study`) p.phase = p.cycle >= c.cycles ? `long` : `short`; else { if (p.phase === `long`) p.cycle = 1; else p.cycle = Math.min(p.cycle + 1, c.cycles); p.phase = `study`; } p.left = pomoDur(p.phase); }
function pomoStart(){ ensureAudio(); const p = S.x.pst; if (p.left <= 0) p.left = pomoDur(p.phase); p.run = true; p.end = Date.now() + p.left * 1000; save(); pomoRefresh(); if (S.x.pomo.focus && p.phase === `study`) openFocus(); }
function pomoPause(){ const p = S.x.pst; p.left = pomoLeft(); p.run = false; save(); pomoRefresh(); }
function pomoToggle(){ S.x.pst.run ? pomoPause() : pomoStart(); }
function pomoSkip(){ const p = S.x.pst; p.run = false; pomoAdvance(); save(); pomoRefresh(); }
function pomoReset(){ S.x.pst = { phase:`study`, cycle:1, run:false, end:0, left:pomoDur(`study`) }; save(); pomoRefresh(); }
function pomoFinish(){ const p = S.x.pst, c = S.x.pomo; const wasStudy = p.phase === `study`; if (wasStudy) logPomo(); playSound(); try { navigator.vibrate && navigator.vibrate([250, 120, 250]); } catch(e){}
  pomoAdvance(); const auto = p.phase === `study` ? c.autoStudy : c.autoBreak; p.run = auto; if (auto) p.end = Date.now() + p.left * 1000; save(); pomoRefresh(); renderAgendaHosts(); if (wasStudy && $(`#view`) && S.mode === `inicio`) renderView(); }
function pomoTick(){ const p = S.x.pst; if (p.run && Date.now() >= p.end){ pomoFinish(); return; } paintTime(); }
function ensureAudio(){ try { if (!PO.ac) PO.ac = new (window.AudioContext || window.webkitAudioContext)(); if (PO.ac.state === `suspended`) PO.ac.resume(); } catch(e){} }
function playSound(kind){ kind = kind || S.x.pomo.sound; if (kind === `ninguno`) return; ensureAudio(); const ac = PO.ac; if (!ac) return;
  const seq = kind === `suave` ? [[523, 0, .9], [659, .3, .9], [784, .6, 1.4]] : kind === `alarma` ? [[880, 0, .18], [880, .25, .18], [880, .5, .18], [1175, .75, .5]] : [[988, 0, 1.8], [740, .55, 1.8], [988, 1.1, 2.4]];
  const t0 = ac.currentTime + .02;
  seq.forEach(([f, d, len]) => { const o = ac.createOscillator(), g = ac.createGain(); o.type = kind === `alarma` ? `square` : `sine`; o.frequency.value = f; g.gain.setValueAtTime(0, t0 + d); g.gain.linearRampToValueAtTime(kind === `alarma` ? .08 : .25, t0 + d + .02); g.gain.exponentialRampToValueAtTime(.0001, t0 + d + len); o.connect(g).connect(ac.destination); o.start(t0 + d); o.stop(t0 + d + len + .05); });
}
function ringSvg(r, w){ const C = 2 * Math.PI * r, s = 2 * (r + w); return `<svg viewBox="0 0 ${s} ${s}" aria-hidden="true"><circle cx="${r + w}" cy="${r + w}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${w}"/><circle class="pomo-arc" data-c="${C.toFixed(2)}" cx="${r + w}" cy="${r + w}" r="${r}" fill="none" stroke="var(--acc)" stroke-width="${w}" stroke-linecap="round" stroke-dasharray="${C.toFixed(2)} ${C.toFixed(2)}"/></svg>`; }
function pomoLinkName(){ const l = S.x.pomo.link; return l && TOPICS[l] ? `${TOPICS[l].n} · ${TOPICS[l].name}` : selList().length === 1 ? `${TOPICS[primary()].n} · ${TOPICS[primary()].name}` : ``; }
function todayPomo(){ return S.x.plog[todayStr()] || { n:0, min:0 }; }
function pomoDots(){ const p = S.x.pst, c = S.x.pomo; let s = ``; for (let i = 1; i <= c.cycles; i++) s += `<i class="${i < p.cycle || (i === p.cycle && p.phase !== `study`) ? `d` : i === p.cycle ? `c` : ``}"></i>`; return `<div class="pdots" aria-hidden="true">${s}</div>`; }
function pomoNextTxt(){ const p = S.x.pst, c = S.x.pomo; return p.phase === `study` ? `luego descanso ${p.cycle >= c.cycles ? `largo de ${c.long}` : `de ${c.short}`} min` : `luego ${c.study} min de estudio`; }
function pomoCardHTML(){ const p = S.x.pst, c = S.x.pomo, tp = todayPomo(), ln = pomoLinkName();
  return `<div class="pring">${ringSvg(52, 10)}<div class="tm"><b class="pomo-time">${fmtSec(pomoLeft())}</b><span>de ${fmtSec(pomoDur(p.phase))}</span></div></div>
  <div style="flex:1;min-width:0"><h3>Pomodoro · ${PHN[p.phase]}</h3>${pomoDots()}<div class="pmt">Ciclo ${p.cycle} de ${c.cycles} · ${pomoNextTxt()}</div>${ln ? `<div class="pmt">Estudiando: <b style="color:var(--ink)">${ln}</b></div>` : ``}
  <div class="btnrow"><button type="button" class="btn acc" data-pa="toggle">${p.run ? `Pausar` : p.left < pomoDur(p.phase) ? `Seguir` : `Iniciar`}</button><button type="button" class="btn ghost" data-pa="skip">Saltar</button><button type="button" class="btn ghost" data-pa="cfg" aria-label="Ajustes del Pomodoro">${icon(`gear`)} Ajustes</button><button type="button" class="btn ghost" data-pa="focus" aria-label="Modo concentración" title="Modo concentración">${icon(`full`)}</button></div>
  <div class="pmt">Hoy: <b style="color:var(--ink)">${tp.n}</b> de ${c.goal} pomodoros · ${tp.min} min de estudio${p.cycle > 1 || p.phase !== `study` || p.left < pomoDur(p.phase) ? ` · <button type="button" class="linkbtn" data-pa="reset" style="font-size:13px">reiniciar</button>` : ``}</div></div>`; }
function pomoMiniHTML(){ const p = S.x.pst; return `<div class="pmini" style="display:flex;align-items:center;gap:10px;background:var(--sunk);border-radius:12px;padding:8px 10px"><span style="font-size:20px">🍅</span><span style="flex:1;line-height:1.2"><b class="pomo-time" style="font:700 19px 'Zilla Slab',Georgia,serif;font-variant-numeric:tabular-nums">${fmtSec(pomoLeft())}</b><small style="display:block;color:var(--muted);font-size:12px">${PHN[p.phase]} · ciclo ${p.cycle}</small></span><button type="button" class="btn acc" data-pa="toggle" style="padding:6px 12px;font-size:13.5px">${p.run ? `Pausar` : `Iniciar`}</button><button type="button" class="btn ghost" data-pa="cfg" aria-label="Ajustes del Pomodoro" style="padding:6px 9px">${icon(`gear`)}</button></div>`; }
function focusHTML(){ const p = S.x.pst, c = S.x.pomo, ln = pomoLinkName(); return `<div class="muted" style="font-size:14px">Modo concentración</div>${ln ? `<div style="font:700 22px 'Zilla Slab',Georgia,serif">${ln}</div>` : ``}<div class="pring">${ringSvg(110, 14)}<div class="tm"><b class="pomo-time">${fmtSec(pomoLeft())}</b><span>${PHN[p.phase]} · ciclo ${p.cycle} de ${c.cycles}</span></div></div>${pomoDots()}<div class="btnrow center"><button type="button" class="btn acc" data-pa="toggle">${p.run ? `Pausar` : `Iniciar`}</button><button type="button" class="btn ghost" data-pa="skip">Saltar</button><button type="button" class="btn ghost" data-pa="exit">Salir</button></div><div class="muted" style="font-size:13px;max-width:300px">Siguiente: ${pomoNextTxt().replace(`luego `, ``)}.${c.sound !== `ninguno` ? ` Sonará un aviso.` : ``}</div>`; }
function pomoRefresh(){
  document.querySelectorAll(`[data-pomo]`).forEach(h => { h.innerHTML = h.dataset.pomo === `mini` ? pomoMiniHTML() : h.dataset.pomo === `focus` ? focusHTML() : pomoCardHTML(); });
  document.querySelectorAll(`[data-pa]`).forEach(b => b.onclick = () => ({ toggle:pomoToggle, skip:pomoSkip, cfg:openPomoSettings, focus:openFocus, exit:closeFocus, reset:pomoReset })[b.dataset.pa]());
  paintTime(); if (!$(`#head input`)) renderHead();
}
function paintPomo(){ pomoRefresh(); }
function paintTime(){ const p = S.x.pst, left = pomoLeft(), tot = pomoDur(p.phase), t = fmtSec(left);
  document.querySelectorAll(`.pomo-time`).forEach(e => { if (e.textContent !== t) e.textContent = t; });
  document.querySelectorAll(`.pomo-arc`).forEach(a => { const C = +a.dataset.c; a.setAttribute(`stroke-dasharray`, `${(C * left / tot).toFixed(2)} ${C.toFixed(2)}`); });
  const tt = p.run ? `${t} · ${PHN[p.phase]} · Química` : `Química · Laboratorio Clínico`; if (document.title !== tt) document.title = tt; }
function openFocus(){ const r = $(`#focusroot`); r.innerHTML = ``; const f = el(`div`, `focus`); f.setAttribute(`role`, `dialog`); f.setAttribute(`aria-label`, `Modo concentración`); f.dataset.pomo = `focus`; r.append(f); pomoRefresh(); }
function closeFocus(){ $(`#focusroot`).innerHTML = ``; }
function stepper(val, min, max, step, fmt, set){ const w = el(`span`, `stp`); const b = el(`b`, ``, fmt(val)); const m = btn(`−`, ``, () => { val = Math.max(min, val - step); b.textContent = fmt(val); set(val); }), pl = btn(`+`, ``, () => { val = Math.min(max, val + step); b.textContent = fmt(val); set(val); }); m.setAttribute(`aria-label`, `Menos`); pl.setAttribute(`aria-label`, `Más`); w.append(m, b, pl); return w; }
function toggleBtn(on, set){ const b = btn(``, `tg`); b.setAttribute(`role`, `switch`); b.setAttribute(`aria-checked`, on); b.onclick = () => { on = !on; b.setAttribute(`aria-checked`, on); set(on); }; return b; }
function fld(label, ctrl, sub){ const f = el(`div`, `fld`); const l = el(`span`, ``, label + (sub ? `<small>${sub}</small>` : ``)); f.append(l, ctrl); return f; }
function openPomoSettings(){
  openSheet(`Ajustes del Pomodoro`, b => {
    const c = S.x.pomo; const ch = () => { save(); const p = S.x.pst; if (!p.run && p.left === p.left){ p.left = Math.min(p.left, pomoDur(p.phase)); if (p.cycle > c.cycles) p.cycle = c.cycles; } pomoRefresh(); };
    const pre = el(`div`, `pills`); const PRE = [[`Clásico 25/5`,25,5,15],[`Largo 50/10`,50,10,20],[`Corto 15/3`,15,3,10]];
    PRE.forEach(([n, s, sh, lg]) => { const bb = btn(n, ``, () => { Object.assign(c, { study:s, short:sh, long:lg }); const p = S.x.pst; if (!p.run) p.left = pomoDur(p.phase); ch(); drawSheet(); }); bb.setAttribute(`aria-pressed`, c.study === s && c.short === sh && c.long === lg); pre.append(bb); });
    b.append(el(`p`, `muted`, `Elige un atajo o ajusta cada tiempo a tu gusto. Los cambios se guardan solos.`), pre);
    const minF = v => `${v} min`;
    b.append(fld(`Estudio`, stepper(c.study, 5, 90, 5, minF, v => { c.study = v; const p = S.x.pst; if (!p.run && p.phase === `study`) p.left = v * 60; ch(); })),
      fld(`Descanso corto`, stepper(c.short, 1, 30, 1, minF, v => { c.short = v; const p = S.x.pst; if (!p.run && p.phase === `short`) p.left = v * 60; ch(); })),
      fld(`Descanso largo`, stepper(c.long, 5, 45, 5, minF, v => { c.long = v; const p = S.x.pst; if (!p.run && p.phase === `long`) p.left = v * 60; ch(); })),
      fld(`Ciclos antes del descanso largo`, stepper(c.cycles, 2, 8, 1, v => String(v), v => { c.cycles = v; ch(); })),
      fld(`Meta diaria`, stepper(c.goal, 1, 16, 1, v => `${v} 🍅`, v => { c.goal = v; ch(); })));
    const snd = el(`select`); snd.setAttribute(`aria-label`, `Sonido`); [[`campana`,`Campana`],[`suave`,`Suave`],[`alarma`,`Alarma`],[`ninguno`,`Sin sonido`]].forEach(([k, n]) => { const o = el(`option`, ``, n); o.value = k; if (c.sound === k) o.selected = true; snd.append(o); });
    snd.onchange = () => { c.sound = snd.value; ch(); playSound(c.sound); };
    const sw = el(`span`); sw.style.display = `flex`; sw.style.gap = `6px`; sw.append(snd, btn(`Probar`, `btn ghost`, () => playSound(c.sound)));
    b.append(fld(`Sonido al terminar`, sw, `Suena solo con la página abierta`));
    b.append(fld(`Iniciar el descanso solo`, toggleBtn(c.autoBreak, v => { c.autoBreak = v; ch(); })), fld(`Iniciar el estudio solo`, toggleBtn(c.autoStudy, v => { c.autoStudy = v; ch(); }), `Después de cada descanso`), fld(`Modo concentración al iniciar`, toggleBtn(c.focus, v => { c.focus = v; ch(); }), `Pantalla completa sin distracciones`));
    const lk = el(`select`); lk.setAttribute(`aria-label`, `Tema vinculado`); const o0 = el(`option`, ``, `Según los temas elegidos`); o0.value = ``; lk.append(o0);
    TORDER.forEach(t => { const o = el(`option`, ``, `${TOPICS[t].n} · ${TOPICS[t].name}`); o.value = t; if (c.link === t) o.selected = true; lk.append(o); });
    lk.onchange = () => { c.link = lk.value; ch(); }; lk.style.maxWidth = `230px`;
    b.append(fld(`Vincular a`, lk));
    const r = el(`div`, `btnrow`); r.style.marginTop = `12px`; r.append(btn(`Listo`, `btn acc`, closeSheet), btn(`Reiniciar ciclo`, `btn ghost`, () => { pomoReset(); })); b.append(r);
  });
}

/* ======================= CALENDARIO Y AGENDA ======================= */
const ETYPE = { parcial:[`Parcial`,`var(--t15)`], tarea:[`Tarea`,`var(--t17)`], lab:[`Laboratorio`,`var(--t21)`], estudio:[`Estudio`,`var(--brand)`], otro:[`Otro`,`var(--t19)`] };
const REM = [[-1,`Sin recordatorio`],[0,`El mismo día`],[1,`1 día antes`],[2,`2 días antes`],[3,`3 días antes`],[7,`1 semana antes`]];
function planItems(){
  const out = [], today = todayStr();
  S.x.ev.filter(e => e.type === `parcial` && e.plan && (e.topics || []).length && e.date > today).forEach(e => {
    const days = []; for (let d = today; d < e.date; d = addDays(d, 1)) days.push(d);
    if (!days.length) return; const ts = TORDER.filter(t => e.topics.includes(t));
    const study = days.length > 1 ? days.slice(0, -1) : days; const last = days.length > 1 ? days[days.length - 1] : null;
    const per = Math.max(1, Math.ceil(ts.length / study.length));
    const ACT = [[`Repaso`,`repaso`],[`Fichas`,`fichas`],[`Práctica`,`practica`],[`Preguntas`,`preguntas`]];
    study.forEach((d, i) => { const chunk = []; for (let j = 0; j < per; j++){ const t = ts[(i * per + j) % ts.length]; if (!chunk.includes(t)) chunk.push(t); } const a = ACT[Math.floor(i * per / ts.length) % ACT.length]; out.push({ date:d, title:`${a[0]}: ${chunk.map(t => TOPICS[t].n).join(`, `)}`, mode:a[1], type:`estudio`, virtual:true, topics:chunk, of:e.title }); });
    if (last) out.push({ date:last, title:`Simulacro de los temas del parcial`, type:`estudio`, virtual:true, topics:ts, sim:true, of:e.title });
  });
  return out;
}
function allItems(){ return S.x.ev.concat(planItems()).sort((a, b) => (a.date + (a.time || `99`)).localeCompare(b.date + (b.time || `99`))); }
function calInto(box){
  const ym = S.x.calM || todayStr().slice(0, 7); const [Y, M] = ym.split(`-`).map(Number); const today = todayStr();
  const c = el(`div`, `cal`); const mh = el(`div`, `mh`);
  const mv = n => { const d = new Date(Y, M - 1 + n, 1); S.x.calM = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`; save(); renderAgendaHosts(); };
  const pv = btn(icon(`left`), ``, () => mv(-1)), nx = btn(icon(`right`), ``, () => mv(1)); pv.setAttribute(`aria-label`, `Mes anterior`); nx.setAttribute(`aria-label`, `Mes siguiente`);
  const lbl = btn(`${MESES[M - 1][0].toUpperCase() + MESES[M - 1].slice(1)} ${Y}`, ``, () => { S.x.calM = today.slice(0, 7); S.x.calSel = null; save(); renderAgendaHosts(); }); lbl.style.cssText = `background:none;width:auto;font-weight:700`; lbl.title = `Volver a hoy`;
  mh.append(pv, lbl, nx); c.append(mh);
  const gd = el(`div`, `gd`); [`L`,`M`,`M`,`J`,`V`,`S`,`D`].forEach(w => gd.append(el(`span`, `w`, w)));
  const items = allItems(); const byD = {}; items.forEach(e => { (byD[e.date] = byD[e.date] || []).push(e); });
  const first = new Date(Y, M - 1, 1), off = (first.getDay() + 6) % 7, nd = new Date(Y, M, 0).getDate(), cells = Math.ceil((off + nd) / 7) * 7;
  for (let i = 0; i < cells; i++){
    const d = new Date(Y, M - 1, 1 - off + i), ds = dstr(d), inM = d.getMonth() === M - 1;
    const b = btn(``, `d` + (inM ? `` : ` o`) + (ds === today ? ` t` : ``) + ((S.x.plog[ds] || {}).n ? ` pm` : ``)); b.textContent = d.getDate();
    const ev = byD[ds] || []; const types = [...new Set(ev.map(e => e.type))].slice(0, 3);
    if (types.length) b.innerHTML += `<i>${types.map(t => `<u style="background:${ETYPE[t][1]}"></u>`).join(``)}</i>`;
    b.setAttribute(`aria-pressed`, S.x.calSel === ds); b.setAttribute(`aria-label`, `${fmtDay(ds)}${ev.length ? `, ${ev.length} evento${ev.length > 1 ? `s` : ``}` : ``}`);
    b.onclick = () => { S.x.calSel = S.x.calSel === ds ? null : ds; save(); renderAgendaHosts(); };
    gd.append(b);
  }
  c.append(gd);
  c.append(el(`div`, `leg`, Object.entries(ETYPE).slice(0, 4).map(([k, v]) => `<span><u style="background:${v[1]}"></u>${v[0]}</span>`).join(``) + `<span><u style="background:var(--accSoft);border:1px solid var(--line2)"></u>Día con Pomodoro</span>`));
  box.append(c);
}
function evRow(e){
  const today = todayStr(), dd = dayDiff(today, e.date), d = pdate(e.date);
  const top = e.date === today ? `HOY` : dd > 0 && dd < 7 ? DIAS[d.getDay()].slice(0, 3).replace(`mié`, `mié`) : MESES[d.getMonth()].slice(0, 3);
  const r = btn(``, `ev` + (e.virtual ? ` virt` : ``));
  const cd = e.type === `parcial` && dd >= 0 ? `<span class="cnt">${dd === 0 ? `es hoy` : dd === 1 ? `mañana` : `faltan ${dd} días`}</span>` : ``;
  const sub = e.virtual ? `Plan de repaso · ${e.of}` : [fmtTime(e.time), ETYPE[e.type][0], e.rem >= 0 ? `recordatorio ${REM.find(x => x[0] === e.rem)[1].toLowerCase()}` : ``, (e.topics || []).length && e.type !== `otro` ? `temas ${e.topics.map(t => t.slice(1)).join(`, `)}` : ``].filter(Boolean).join(` · `);
  r.innerHTML = `<span class="bd" style="background:${ETYPE[e.type][1]}"></span><span class="dt">${top}<b>${d.getDate()}</b></span><span class="tx">${e.title}${cd}<small>${sub}</small></span>`;
  r.onclick = () => { if (e.virtual){ if (e.topics && e.topics.length) S.sel = new Set(e.topics); go(e.sim ? `simulacro` : e.mode || `repaso`); } else openEvent(e); };
  return r;
}
function agListInto(box){
  const today = todayStr(), sel = S.x.calSel; const items = allItems();
  const ag = el(`div`, `ag`); const h = el(`h4`); h.append(el(`span`, ``, sel ? fmtDay(sel)[0].toUpperCase() + fmtDay(sel).slice(1) : `Próximos`));
  const add = btn(``, `btn ghost`, () => openEvent(null, sel || today)); add.innerHTML = icon(`plus`) + ` Agregar`; add.style.cssText = `font-size:13px;padding:4px 10px`; h.append(add); ag.append(h);
  const list = sel ? items.filter(e => e.date === sel) : items.filter(e => e.date >= today).slice(0, 8);
  if (!list.length) ag.append(el(`p`, `muted`, sel ? `Nada en este día.` : `No hay eventos. Agrega tu próximo parcial para ver la cuenta regresiva y armar un plan de repaso.`));
  list.forEach(e => ag.append(evRow(e)));
  if (sel){ const bk = btn(`Ver próximos`, `linkbtn`, () => { S.x.calSel = null; save(); renderAgendaHosts(); }); bk.style.fontSize = `13px`; ag.append(bk); }
  box.append(ag);
}
function agendaInto(box){ const w = el(`div`); w.dataset.agenda = `1`; calInto(w); agListInto(w); box.append(w); }
function renderAgendaHosts(){ document.querySelectorAll(`[data-agenda]`).forEach(h => { h.innerHTML = ``; calInto(h); agListInto(h); }); }
function openEvent(ev, date){
  const isNew = !ev; const e = ev ? JSON.parse(JSON.stringify(ev)) : { id:String(Date.now()), title:``, type:`parcial`, date: date || todayStr(), time:``, topics:selList(), rem:1, plan:true };
  openSheet(isNew ? `Nuevo evento` : `Editar evento`, b => {
    const t = el(`input`, `inp`); t.placeholder = `Ej.: Parcial de Química`; t.value = e.title; t.setAttribute(`aria-label`, `Título`); t.oninput = () => e.title = t.value; b.append(t);
    b.append(el(`div`, `muted`, `Tipo`)); const ty = el(`div`, `pills`);
    Object.entries(ETYPE).forEach(([k, v]) => { const x = btn(v[0], ``, () => { e.type = k; drawSheet(); }); x.setAttribute(`aria-pressed`, e.type === k); ty.append(x); }); b.append(ty);
    const di = el(`input`); di.type = `date`; di.value = e.date; di.onchange = () => e.date = di.value; di.setAttribute(`aria-label`, `Fecha`);
    const ti = el(`input`); ti.type = `time`; ti.value = e.time; ti.onchange = () => e.time = ti.value; ti.setAttribute(`aria-label`, `Hora`);
    b.append(fld(`Fecha`, di), fld(`Hora`, ti, `Opcional`));
    if ([`parcial`,`estudio`,`tarea`,`lab`].includes(e.type)){
      b.append(el(`div`, `muted`, `Temas que incluye`)); const tp = el(`div`, `pills`);
      TORDER.forEach(k => { const x = btn(k.slice(1), ``, () => { e.topics = e.topics.includes(k) ? e.topics.filter(y => y !== k) : e.topics.concat(k); drawSheet(); }); x.setAttribute(`aria-pressed`, e.topics.includes(k)); x.title = TOPICS[k].name; tp.append(x); }); b.append(tp);
    }
    const rs = el(`select`); rs.setAttribute(`aria-label`, `Recordatorio`); REM.forEach(([k, n]) => { const o = el(`option`, ``, n); o.value = k; if (e.rem === k) o.selected = true; rs.append(o); }); rs.onchange = () => e.rem = +rs.value;
    b.append(fld(`Recordatorio`, rs, `Aparece en Inicio cuando abres la página`));
    if (e.type === `parcial`) b.append(fld(`Crear plan de repaso hasta esa fecha`, toggleBtn(e.plan, v => { e.plan = v; }), `Reparte los temas en los días que faltan y deja el último día para un simulacro`));
    const msg = el(`p`, `muted`); const r = el(`div`, `btnrow`); r.style.marginTop = `12px`;
    r.append(btn(isNew ? `Guardar evento` : `Guardar cambios`, `btn acc`, () => { e.title = t.value.trim(); if (!e.title){ msg.textContent = `Escribe un título.`; t.focus(); return; } if (!e.date){ msg.textContent = `Elige una fecha.`; return; }
      const i = S.x.ev.findIndex(x => x.id === e.id); if (i >= 0) S.x.ev[i] = e; else S.x.ev.push(e); S.x.calM = e.date.slice(0, 7); save(); closeSheet(); renderAgendaHosts(); if (S.mode === `inicio`) renderView(); }));
    if (!isNew) r.append(btn(`Eliminar`, `btn danger`, () => { S.x.ev = S.x.ev.filter(x => x.id !== e.id); save(); closeSheet(); renderAgendaHosts(); if (S.mode === `inicio`) renderView(); }));
    r.append(btn(`Cancelar`, `btn ghost`, closeSheet)); b.append(r, msg);
  });
}
function reminders(){
  const today = todayStr(), out = [];
  S.x.ev.forEach(e => { const dd = dayDiff(today, e.date); if (e.rem >= 0 && dd >= 0 && dd <= e.rem) out.push(`<b>${e.title}</b>: ${dd === 0 ? `es hoy` : dd === 1 ? `es mañana` : `en ${dd} días`} (${fmtDay(e.date)}${e.time ? `, ${fmtTime(e.time)}` : ``}).`); });
  planItems().filter(p => p.date === today).forEach(p => out.push(`Hoy toca: <b>${p.title}</b> (plan de ${p.of}).`));
  return out;
}

/* ======================= VISTA: INICIO ======================= */
function vInicio(v){
  migrationHint(v);
  if (syncAvailable() && !S.x.syncHide && !SY.user) v.prepend(syncCard(true));
  reminders().forEach(r => v.append(el(`div`, `alert`, icon(`bell`) + `<span>${r}</span>`)));
  const g = el(`div`, `hgrid`);
  const pc = el(`div`, `pomo`); pc.dataset.pomo = `card`; g.append(pc);
  g.append(heroCard()); v.append(g);
  const qa = el(`div`, `qa`);
  const qb = (ic, col, t, s, f) => { const b = btn(``, ``, f); b.style.setProperty(`--q`, col); b.innerHTML = `<span class="ib">${icon(ic)}</span><span>${t}<small>${s}</small></span>`; qa.append(b); };
  const ne = S.err.length;
  qb(`bolt`, `var(--bad)`, ne ? `Repasar ${ne} fallo${ne > 1 ? `s` : ``}` : `Preguntas`, ne ? `Las que fallaste` : `Sin fallos pendientes`, () => { S.onlyErr = ne > 0; if (ne) S.sel = new Set(TORDER); go(`preguntas`); });
  qb(`pencil`, `var(--t24)`, `Práctica rápida`, `Números nuevos cada vez`, () => { PR.rand = true; PR.cur = null; const gs = GENS.filter(x => S.sel.has(x.t) || (x.ts && x.ts.some(t => S.sel.has(t)))); if (gs.length) PR.gen = pick(gs); go(`practica`); });
  qb(`clip`, `var(--acc2,var(--t17))`, `Simulacro`, `Examen con nota`, () => go(`simulacro`));
  qb(`play`, `var(--t16)`, `Videos`, `De los temas elegidos`, () => go(`videos`));
  v.append(qa);
  v.append(routeBox());
  if (bp() !== `wide`){ const b = el(`div`, `boxc`); b.append(el(`h3`, ``, `Calendario y agenda`)); agendaInto(b); v.append(b); }
  pomoRefresh();
}
function heroCard(){
  const h = el(`div`, `hero`); const L = S.x.last; const sel = selList();
  let t = primary(), title, line, frac = 0, go_;
  if (L && L.mode){
    const ts = (L.sel || []).filter(x => TORDER.includes(x)); if (ts.length) t = ts[ts.length - 1];
    title = ts.length === 1 ? `${TOPICS[t].n} · ${TOPICS[t].name}` : ts.length ? `${ts.length} temas: ${ts.map(x => x.slice(1)).join(`, `)}` : `Química`;
    if (L.mode === `repaso` && L.n){ line = `Repaso · tarjeta ${L.i + 1} de ${L.n}${L.title ? ` · ` + L.title : ``}`; frac = (L.i + 1) / L.n; } else line = `${secOf(L.mode).n} · ${modeName(L.mode)}`;
    go_ = () => { if (ts.length) S.sel = new Set(ts); go(L.mode); };
  } else { title = t ? `${TOPICS[t].n} · ${TOPICS[t].name}` : `Elige tus temas`; line = `Empieza por el Repaso del tema`; go_ = () => go(`repaso`); }
  if (!frac && t){ const all = ALL.REPASO.filter(x => sel.includes(x.t)); frac = all.length ? all.filter(x => S.x.seen[hash(x.title)]).length / all.length : 0; }
  const { a, o } = totals();
  h.innerHTML = `<div class="k">${L && L.mode ? `Continúa donde te quedaste` : `Para empezar`}</div><h2>${title}</h2><div style="font-size:13.5px;opacity:.9">${line}</div><div class="bar"><i style="width:${Math.round(frac * 100)}%"></i></div>`;
  const b = btn(`${L && L.mode ? `Seguir` : `Empezar`} `, `go`, go_); b.innerHTML += icon(`right`); h.append(b);
  const st = el(`div`, `st4`); st.innerHTML = `<div><b>${a}</b>respondidas</div><div><b>${a ? Math.round(o / a * 100) + `%` : `—`}</b>aciertos</div><div><b>${S.err.length}</b>por repasar</div><div><b>${streak()}</b>día${streak() === 1 ? `` : `s`} seguido${streak() === 1 ? `` : `s`}</div>`; h.append(st);
  return h;
}
function routeBox(){
  const sel = selList(); const b = el(`div`, `boxc`);
  b.append(el(`h3`, ``, sel.length === 1 ? `Ruta para el ${TOPICS[sel[0]].n}` : `Ruta para los temas elegidos`));
  if (!sel.length){ b.append(el(`p`, `muted`, `Elige uno o más temas para ver tu ruta.`)); const x = btn(`Elegir temas`, `btn acc`, openTopics); b.append(x); return b; }
  const rep = ALL.REPASO.filter(x => sel.includes(x.t)), seen = rep.filter(x => S.x.seen[hash(x.title)]).length;
  const fi = ALL.FICHAS.filter(f => sel.includes(f.t)), dom = fi.filter(f => fichaBox(f.id) >= 3).length;
  let ok = 0, an = 0; sel.forEach(t => { const [o, w] = S.st[`T_` + t] || [0, 0]; ok += o; an += o + w; });
  const sl = S.x.simLast && S.x.simLast.ts.some(t => sel.includes(t)) ? S.x.simLast : null;
  const steps = [
    [`repaso`, `Leer el Repaso con sus dibujos`, `${seen} de ${rep.length} tarjetas vistas`, rep.length && seen >= rep.length],
    [`fichas`, `Fichas hasta dominar la mayoría`, `${dom} de ${fi.length} fichas dominadas`, fi.length && dom / fi.length >= .6],
    [`preguntas`, `Preguntas y práctica`, an ? `${ok} correctas de ${an} (${Math.round(ok / an * 100)} %)` : `Aún sin respuestas`, an >= 15 && ok / an >= .7],
    [`simulacro`, `Simulacro con nota`, sl ? `Último: ${sl.nota} / 10 (${fmtDay(sl.d)})` : `Aún sin simulacro`, sl && sl.nota >= 7]
  ];
  steps.forEach(([m, t, s, done], i) => { const r = btn(``, `gstep` + (done ? ` done` : ``), () => go(m)); r.innerHTML = `<span class="n">${done ? `✓` : i + 1}</span><span>${t}<small>${s}</small></span>${icon(`right`)}`; b.append(r); });
  return b;
}

/* ======================= VISTA: REPASO POR TARJETAS ======================= */
function pagesOf(src){ const out = new Set(); const m = String(src).match(/pág\.\s*([0-9–\-, y]+)/); if (!m) return out; m[1].split(/,|\by\b/).forEach(p => { const r = p.trim().split(/[–-]/).map(Number).filter(n => !isNaN(n)); if (r.length === 1) out.add(r[0]); else if (r.length === 2) for (let i = r[0]; i <= r[1]; i++) out.add(i); }); return out; }
function checkQ(it){ const pg = pagesOf(it.src); const cand = ALL.MCQ.filter(q => q.t === it.t && [...pagesOf(q.src)].some(p => pg.has(p))); if (!cand.length) return null; const fresh = cand.filter(q => !(S.st[q.id] && S.st[q.id][0])); const pool = fresh.length ? fresh : cand; return pool[(hash(it.title).charCodeAt(0) + (S.st[`R_` + hash(it.title)] || 0)) % pool.length]; }
function repCard(it){ const c = card(it, `rep`); c.append(el(`h3`, ``, it.title)); const body = el(`div`, `repbody`); body.append(el(`div`, `reptext`, it.body)); const f = it.fig && figure(it.fig); if (f) body.append(f); c.append(body); if (it.memo) c.append(el(`p`, `memo`, `<b>Para memorizar:</b> ${it.memo}`)); const vids = VIDEOS.filter(x => x.rep.includes(it.title)); if (vids.length) c.append(vidLinks(vids)); return c; }
function tocInto(box){
  const all = filt(ALL.REPASO); const i0 = Math.min(S.x.rpos[selKey()] || 0, Math.max(0, all.length - 1));
  if (!all.length){ box.append(el(`p`, `muted`, `Elige temas para ver su índice.`)); return; }
  const t = el(`nav`, `toc`); t.setAttribute(`aria-label`, `Índice del repaso`); let last = null;
  all.forEach((it, i) => { if (it.t !== last && selList().length > 1){ t.append(el(`h4`, ``, `${TOPICS[it.t].n} · ${TOPICS[it.t].name}`)); } last = it.t;
    const b = btn(it.title, S.x.seen[hash(it.title)] ? `seen` : ``, () => { S.x.rpos[selKey()] = i; save(); closeSheet(); if (S.mode !== `repaso`) go(`repaso`); else { renderView(); renderPanel(); topScroll(); } });
    if (i === i0) b.setAttribute(`aria-current`, `true`); t.append(b); });
  box.append(t);
}
function vRepaso(v){
  const all = filt(ALL.REPASO);
  const bar = el(`div`, `deckbar`);
  if (S.x.rall){
    intro(v, `Todas las tarjetas seguidas. Lee, mira el dibujo y tapa "Para memorizar" para comprobar si lo recuerdas.`);
    bar.append(btn(`Ver una por una`, `btn ghost`, () => { S.x.rall = false; save(); renderView(); renderPanel(); })); v.append(bar);
    const l = el(`div`, `list`); all.forEach(it => { l.append(repCard(it)); S.x.seen[hash(it.title)] = 1; }); v.append(l); save(); return;
  }
  const key = selKey(); let i = Math.min(S.x.rpos[key] || 0, all.length - 1); if (i < 0) i = 0; S.x.rpos[key] = i;
  const it = all[i]; const seenN = all.filter(x => S.x.seen[hash(x.title)]).length;
  bar.append(el(`span`, `cnt2`, `Tarjeta <b>${i + 1}</b> de ${all.length}`), el(`div`, `bar`, `<i style="width:${Math.round(seenN / all.length * 100)}%"></i>`));
  if (bp() !== `wide`){ const ix = btn(``, `btn ghost`, () => openSheet(`Índice del repaso`, tocInto)); ix.innerHTML = icon(`list`) + ` Índice`; bar.append(ix); }
  bar.append(btn(`Ver todas`, `btn ghost`, () => { S.x.rall = true; save(); renderView(); renderPanel(); }));
  v.append(bar);
  v.append(repCard(it));
  S.x.seen[hash(it.title)] = 1; S.x.last = { mode:`repaso`, sel:selList(), i, n:all.length, title:it.title };
  const q = checkQ(it);
  if (q){ const ck = el(`section`, `check`); ck.append(el(`h4`, ``, `Comprueba lo que leíste`)); ck.append(mcqCard(q, () => { S.st[`R_` + hash(it.title)] = (S.st[`R_` + hash(it.title)] || 0) + 1; })); v.append(ck); }
  const nav = el(`div`, `decknav`);
  const prev = btn(``, `btn ghost`, () => move(-1)); prev.innerHTML = icon(`left`) + ` Anterior`; prev.disabled = i === 0;
  const last = i === all.length - 1;
  const next = btn(``, `btn acc`, () => last ? go(`fichas`) : move(1)); next.innerHTML = last ? `Ir a Fichas ` + icon(`right`) : `Siguiente ` + icon(`right`);
  nav.append(prev, el(`span`, `muted`, `${i + 1} / ${all.length}`), next); v.append(nav);
  save();
  function move(d){ S.x.rpos[key] = Math.max(0, Math.min(all.length - 1, i + d)); save(); renderView(); renderPanel(); topScroll(); }
}
function vImpreso(v){ v.append(examBuilder(filt(ALL.MCQ))); }

/* ======================= RENDER GENERAL ======================= */
function renderAll(){
  applyTheme();
  const pal = S.x.pal; if (pal && pal !== `menta`) document.documentElement.setAttribute(`data-pal`, pal); else document.documentElement.removeAttribute(`data-pal`);
  renderRail(); renderBnav(); renderHead(); renderSub(); renderView(); renderPanel(); if (SH && SH.live) drawSheet(); pomoRefresh();
}

const PALS = [[`menta`,`Menta`,`#2E7D6B`,`#7CC9B5`,`Verde agua, tranquilo`],[`oceano`,`Océano`,`#2766A8`,`#8DBBE8`,`Azul sereno`],[`lavanda`,`Lavanda`,`#5B57C2`,`#ABA8F2`,`Violeta suave`],[`durazno`,`Durazno`,`#B5562F`,`#F2AA86`,`Cálido`]];
function openPalette(){
  openSheet(`Colores de la página`, b => {
    b.append(el(`p`, `muted`, `Elige el color principal. Se usa en botones, pestañas y el Pomodoro; los colores de cada tema no cambian.`));
    const cur = S.x.pal || `menta`; const g = el(`div`); g.style.cssText = `display:grid;grid-template-columns:1fr 1fr;gap:10px`;
    PALS.forEach(([k, n, d, nn, s]) => { const x = btn(``, `trow`, () => { S.x.pal = k; save(); renderAll(); drawSheet(); }); x.setAttribute(`aria-pressed`, cur === k); x.style.setProperty(`--c`, isDark() ? nn : d);
      x.innerHTML = `<span style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,${d} 50%,${nn} 50%);flex:none"></span><span class="nm"><b>${n}</b><small style="display:block;color:var(--muted);font-size:12px">${s}</small></span>${cur === k ? `<span class="n">✓</span>` : ``}`; g.append(x); });
    b.append(g);
    const r = el(`div`, `btnrow`); r.style.marginTop = `12px`; const tb = btn(isDark() ? `☀ Cambiar a modo día` : `☾ Cambiar a modo noche`, `btn ghost`, () => { toggleTheme(); renderAll(); drawSheet(); }); r.append(btn(`Listo`, `btn acc`, closeSheet), tb); b.append(r);
  });
}

/* ======================= RESPALDO, MATERIAL ADICIONAL Y VERSIÓN ======================= */
const BACKUP_KEYS = [KEY, `parcialM4_vids`, `parcialM4_dudas`, PACK_KEY];
function saveFile(name, text, type){
  const blob = new Blob([text], { type: type || `application/json` });
  return dlP.then(dl => { if (dl) return dl.save({ filename:name, data:blob }); const a = document.createElement(`a`); a.href = URL.createObjectURL(blob); a.download = name; document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 2000); });
}
function pickFile(accept, cb){ const i = document.createElement(`input`); i.type = `file`; i.accept = accept; i.onchange = () => { const f = i.files && i.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => cb(String(r.result), f.name); r.readAsText(f); }; i.click(); }
function exportBackup(msg){
  const data = { app:`quimica-lab-clinico`, v:1, fecha:new Date().toISOString(), datos:{} };
  BACKUP_KEYS.forEach(k => { try { const x = localStorage.getItem(k); if (x != null) data.datos[k] = x; } catch(e){} });
  const n = `Respaldo_Quimica_${S.x.name || `Gaby`}_${todayStr()}.json`;
  saveFile(n, JSON.stringify(data)).then(() => { if (msg) msg.textContent = `Respaldo guardado: ${n}. Guárdalo en un lugar seguro.`; }).catch(e => { if (msg) msg.textContent = e && e.code === `declined` ? `Descarga cancelada.` : `No se pudo guardar el respaldo.`; });
}
function importBackup(msg){
  pickFile(`.json,application/json`, (txt) => {
    let d; try { d = JSON.parse(txt); } catch(e){ msg.textContent = `Ese archivo no es un respaldo válido.`; return; }
    if (!d || d.app !== `quimica-lab-clinico` || !d.datos){ msg.textContent = `Ese archivo no es un respaldo de esta página.`; return; }
    openSheet(`Restaurar respaldo`, b => {
      b.append(el(`p`, ``, `Respaldo del <b>${new Date(d.fecha).toLocaleDateString(`es`)}</b>. Reemplazará el progreso, la agenda y los ajustes que hay ahora en este navegador.`));
      const r = el(`div`, `btnrow`); r.append(btn(`Sí, restaurar`, `btn acc`, () => { for (const k in d.datos){ try { localStorage.setItem(k, d.datos[k]); } catch(e){} } location.reload(); }), btn(`Cancelar`, `btn ghost`, closeSheet)); b.append(r);
    });
  });
}
function importPack(msg){
  pickFile(`.js,text/javascript`, (src, name) => {
    let got = null; try { new Function(`registerPack`, src)(p => { got = p; }); } catch(e){ msg.textContent = `El archivo ${name} tiene un error: ${e.message}`; return; }
    if (!got || !got.id || !got.topic){ msg.textContent = `${name} no es un paquete de material.`; return; }
    let saved = {}; try { saved = JSON.parse(localStorage.getItem(PACK_KEY) || `{}`) || {}; } catch(e){}
    saved[got.id] = src; try { localStorage.setItem(PACK_KEY, JSON.stringify(saved)); } catch(e){ msg.textContent = `No hay espacio para guardar el paquete.`; return; }
    msg.textContent = `Instalado: ${got.topic.n || got.id} · ${got.topic.name}. Recargando…`; setTimeout(() => location.reload(), 700);
  });
}
function removePack(id){ let saved = {}; try { saved = JSON.parse(localStorage.getItem(PACK_KEY) || `{}`) || {}; } catch(e){} delete saved[id]; try { localStorage.setItem(PACK_KEY, JSON.stringify(saved)); } catch(e){} location.reload(); }
function progresoExtras(box){
  if (syncAvailable()) box.append(syncCard(false));
  const c = el(`article`, `card plain`); c.append(el(`h3`, ``, `Respaldo de tu progreso`), el(`p`, `muted`, `Guarda un archivo con tu progreso, fichas, agenda, Pomodoro y dudas. Sirve para pasarlo a otro navegador, a otro dispositivo o a la versión en línea de la página.`));
  const m = el(`p`, `muted`); m.setAttribute(`aria-live`, `polite`);
  const r = el(`div`, `btnrow`); r.append(btn(`Descargar respaldo`, `btn acc`, () => exportBackup(m)), btn(`Restaurar desde archivo`, `btn ghost`, () => importBackup(m))); c.append(r, m); box.append(c);
  const c2 = el(`article`, `card plain`); c2.append(el(`h3`, ``, `Material adicional`));
  const packs = Object.values(PK.list);
  c2.append(el(`p`, `muted`, packs.length ? `Temas instalados como paquete:` : `Los temas nuevos llegan solos cuando se actualiza la página. Si te envían un archivo de material (.js), puedes instalarlo aquí.`));
  if (packs.length){ const ul = el(`ul`, `errlist`); packs.forEach(p => { const li = el(`li`, ``, `<span class="chip" style="--c:var(--${p.topic.t})">${p.topic.n || p.topic.t}</span> ${p.topic.name} <span class="src">${p.__from === `archivo` ? `cargado desde archivo` : `incluido en la página`} · versión ${p.version || 1}</span>`); if (p.__from === `archivo`) li.append(btn(`Quitar`, `tool`, () => removePack(p.id))); ul.append(li); }); c2.append(ul); }
  if (PK.err.length) c2.append(el(`p`, `trap`, `Problemas al cargar material: ${PK.err.join(` · `)}`));
  const m2 = el(`p`, `muted`); m2.setAttribute(`aria-live`, `polite`); const r2 = el(`div`, `btnrow`); r2.append(btn(`Cargar archivo de material`, `btn ghost`, () => importPack(m2))); c2.append(r2, m2);
  c2.append(el(`p`, `muted`, `Versión de la página: ${APPVER}`)); box.append(c2);
}
function injectPackCss(){ if (PACKS.css && !$(`#packcss`)){ const s = document.createElement(`style`); s.id = `packcss`; s.textContent = PACKS.css; document.head.append(s); } }
function versionNotice(){
  const prev = S.x.ver; S.x.ver = APPVER; save();
  if (prev && prev !== APPVER){ const n = el(`div`, `alert`); n.style.cssText = `position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:45;background:var(--surface);border-color:var(--acc);box-shadow:var(--shadow);max-width:92vw`; n.innerHTML = icon(`bolt`) + `<span>Página actualizada (versión ${APPVER}).</span>`; const x = btn(`×`, `xbtn`, () => n.remove()); n.append(x); document.body.append(n); setTimeout(() => n.remove(), 7000); }
}
function migrationHint(v){
  if (S.x.migr || Object.keys(S.st).length || !/^https?:/.test(location.protocol)) return;
  const a = el(`div`, `alert`); a.style.borderColor = `var(--acc)`; a.style.background = `var(--accSoft)`;
  a.style.flexWrap = `wrap`;
  a.innerHTML = icon(`bolt`) + `<span style="flex:1 1 220px">¿Vienes del archivo anterior? Restaura tu respaldo para conservar tu progreso.</span>`;
  const m = el(`p`, `muted`), r = el(`div`, `btnrow`); r.style.cssText = `margin:0;flex:1 1 100%;justify-content:flex-end`;
  r.append(btn(`Restaurar`, `btn acc`, () => importBackup(m)), btn(`Empezar de cero`, `btn ghost`, () => { S.x.migr = 1; save(); a.remove(); })); a.append(r);
  v.prepend(a); v.prepend(m);
}

/* ======================= MIS NOTAS (gestión de módulos por ciclo) =======================
   S.x.notas = { cur, ciclos:[{ id, name, mods:[{ id, name, uv, min, scale, root }] }] }
   Nodo grupo: { id, name, w, agg:`w`|`avg`, kids:[] } · Nodo nota: { id, name, w, g:null|número }
   `w`: los hijos pesan según su porcentaje (se reparte en proporción) · `avg`: promedio simple.   */
const NID = () => Math.random().toString(36).slice(2, 9);
const NG = (name, w, agg, kids) => ({ id:NID(), name, w, agg, kids });
const NL = (name, w) => ({ id:NID(), name, w, g:null });
const NTPL = {
  modIV: { n:`Módulo IV · Química y Biología (archivo del docente)`, f:() => NG(`Módulo`, 100, `w`, [
    NG(`Prueba objetiva 1`, 15, `w`, [NL(`Química`, 9), NL(`Biología`, 6)]),
    NG(`Prueba objetiva 2`, 15, `w`, [NL(`Química`, 9), NL(`Biología`, 6)]),
    NL(`Prueba objetiva 3`, 15), NL(`Prueba objetiva 4`, 15),
    NG(`Discusiones`, 25, `w`, [NG(`Química`, 13, `avg`, [1, 2, 3, 4].map(i => NL(`Discusión Q${i}`, 1))), NG(`Biología`, 12, `avg`, [1, 2, 3, 4, 5, 6].map(i => NL(`Discusión B${i}`, 1)))]),
    NG(`Laboratorios`, 15, `w`, [NG(`Química`, 9, `avg`, [1, 2, 3].map(i => NL(`Laboratorio Q${i}`, 1))), NG(`Biología`, 6, `avg`, [1, 2, 3].map(i => NL(`Laboratorio B${i}`, 1)))])
  ]) },
  parciales: { n:`3 parciales + actividades`, f:() => NG(`Módulo`, 100, `w`, [NL(`Parcial 1`, 25), NL(`Parcial 2`, 25), NL(`Parcial 3`, 25), NG(`Actividades`, 25, `avg`, [1, 2, 3].map(i => NL(`Actividad ${i}`, 1)))]) },
  blanco: { n:`En blanco (lo armas tú)`, f:() => NG(`Módulo`, 100, `w`, [NL(`Evaluación 1`, 100)]) }
};
function notas(){
  if (!S.x.notas){ const c = { id:NID(), name:`Ciclo actual`, mods:[{ id:NID(), name:`Módulo IV`, uv:4, min:6, scale:10, root:NTPL.modIV.f() }] }; S.x.notas = { cur:c.id, ciclos:[c] }; }
  const N = S.x.notas; if (!N.ciclos.some(c => c.id === N.cur)) N.cur = N.ciclos[0] && N.ciclos[0].id; return N;
}
const curCiclo = () => { const N = notas(); return N.ciclos.find(c => c.id === N.cur); };
/* ---- cálculo ---- */
function nLeaves(node, share, out){
  out = out || [];
  if (!node.kids){ out.push({ leaf:node, eff:share }); return out; }
  const ks = node.kids; if (!ks.length) return out;
  const sw = ks.reduce((s, k) => s + (+k.w || 0), 0);
  ks.forEach(k => nLeaves(k, node.agg === `avg` || sw <= 0 ? share / ks.length : share * (+k.w || 0) / sw, out));
  return out;
}
function nCalc(node){
  const ls = nLeaves(node, 1); let sec = 0, pend = 0;
  ls.forEach(x => { if (x.leaf.g == null) pend += x.eff; else sec += x.eff * x.leaf.g; });
  const done = 1 - pend;
  return { sec, pend, done, cur: done > 1e-9 ? sec / done : null, n:ls.length };
}
function modCalc(m){
  const c = nCalc(m.root); const sc = m.scale || 10, min = m.min != null ? m.min : sc * .6;
  c.min = min; c.sc = sc;
  c.final = c.pend < 1e-9 ? c.sec : null;
  c.need = c.pend > 1e-9 ? (min - c.sec) / c.pend : null;
  c.st = c.final != null ? (c.final >= min - 1e-9 ? `ok` : `bad`) : c.cur == null ? `none` : c.need <= 0 ? `ok` : c.need > sc ? `bad` : c.cur >= min ? `go` : `risk`;
  return c;
}
const nfmt = (x, d) => x == null || isNaN(x) ? `—` : (Math.round(x * 100) / 100).toFixed(d == null ? 2 : d).replace(/\.?0+$/, m => m.startsWith(`.`) ? `` : m);
const nf2 = x => x == null ? `—` : (Math.round(x * 100) / 100).toFixed(2);
function parseNota(t, sc){
  t = String(t || ``).trim().replace(`,`, `.`); if (!t) return null;
  let v;
  if (/%$/.test(t)) v = parseFloat(t) / 100 * sc;
  else if (t.includes(`/`)){ const [a, b] = t.split(`/`).map(parseFloat); v = b ? a / b * sc : NaN; }
  else v = parseFloat(t);
  if (isNaN(v)) return undefined;
  return Math.max(0, Math.min(sc, Math.round(v * 1000) / 1000));
}
function cicloCUM(c){
  let s = 0, u = 0, all = true;
  c.mods.forEach(m => { const k = modCalc(m), v = k.final != null ? k.final : k.cur; if (v == null) return; if (k.final == null) all = false; const w = +m.uv || 1; s += v * w / (m.scale || 10) * 10; u += w; });
  return { cum: u ? s / u : null, all };
}
/* ---- vista ---- */
const NST = { ok:[`Aprobado`, `var(--ok)`], go:[`Vas aprobando`, `var(--ok)`], risk:[`En riesgo`, `#C98A1B`], bad:[`Reprobado / no alcanza`, `var(--bad)`], none:[`Sin notas aún`, `var(--muted)`] };
function vNotas(v){
  const N = notas(), C = curCiclo();
  const top = el(`div`, `card plain ntop`);
  const chips = el(`div`, `nchips`);
  N.ciclos.forEach(c => { const b = btn(c.name, `npill` + (c.id === N.cur ? ` on` : ``), () => { N.cur = c.id; save(); renderView(); }); chips.append(b); });
  chips.append(btn(`+ Ciclo`, `npill add`, () => editCiclo(null)));
  top.append(chips);
  if (C){
    const k = cicloCUM(C); const row = el(`div`, `nsum`);
    const ok = C.mods.filter(m => [`ok`, `go`].includes(modCalc(m).st)).length, risk = C.mods.filter(m => [`risk`, `bad`].includes(modCalc(m).st)).length;
    row.innerHTML = `<div><b>${nf2(k.cum)}</b><span>CUM del ciclo${k.all ? `` : ` (con lo evaluado)`}</span></div><div><b>${C.mods.length}</b><span>módulos</span></div><div><b style="color:var(--ok)">${ok}</b><span>aprobando</span></div><div><b style="color:${risk ? `var(--bad)` : `var(--muted)`}">${risk}</b><span>en riesgo</span></div>`;
    top.append(row);
    const all = N.ciclos.flatMap(c => c.mods); if (N.ciclos.length > 1){ const g = cicloCUM({ mods:all }); top.append(el(`p`, `muted`, `CUM acumulado de todos los ciclos: <b>${nf2(g.cum)}</b>`)); }
    const r = el(`div`, `btnrow`); r.append(btn(`+ Agregar módulo`, `btn acc`, () => addModulo(C)), btn(`Ajustes del ciclo`, `btn ghost`, () => editCiclo(C))); top.append(r);
  }
  v.append(top);
  if (!C) return;
  if (!C.mods.length) v.append(el(`div`, `empty`, `Este ciclo aún no tiene módulos. Toca “Agregar módulo”.`));
  C.mods.forEach(m => v.append(modCard(C, m)));
  v.append(el(`p`, `muted nhelp`, `Cómo escribir una nota: <b>8.5</b> (nota), <b>85%</b> (porcentaje) o <b>17/20</b> (puntos obtenidos de un total). Deja vacío lo que aún no te han calificado. Los porcentajes de dentro de cada grupo se reparten en proporción al porcentaje del grupo.`));
}
function modCard(C, m){
  const k = modCalc(m), st = NST[k.st], sc = k.sc;
  const c = el(`article`, `card plain nmod`); c.style.setProperty(`--st`, st[1]);
  const h = el(`div`, `nmh`);
  h.innerHTML = `<div class="nmt"><h3>${m.name}</h3><span class="muted">${m.uv || 0} UV · aprueba con ${nfmt(k.min)} de ${sc}</span></div><div class="nbig"><b>${nf2(k.final != null ? k.final : k.cur)}</b><span>${k.final != null ? `nota final` : `promedio actual`}</span></div>`;
  c.append(h);
  const pct = Math.round(k.done * 100);
  c.append(el(`div`, `nbar`, `<i style="width:${pct}%"></i>`));
  let msg = `<b style="color:${st[1]}">${st[0]}</b> · ${pct}% del módulo evaluado`;
  if (k.final == null && k.cur != null){
    msg += ` · llevas <b>${nf2(k.sec)}</b> puntos asegurados de ${sc}`;
    msg += k.need <= 0 ? `. Ya alcanzaste la nota mínima aunque saques 0 en lo que falta.` : k.need > sc ? `. Aunque saques ${sc} en todo lo que falta, llegarías a ${nf2(k.sec + k.pend * sc)}.` : `. Para aprobar necesitas un promedio de <b>${nf2(k.need)}</b> en lo que falta.`;
  } else if (k.cur == null) msg += ` · para aprobar necesitas un promedio de ${nf2(k.min)} en todo.`;
  c.append(el(`p`, `nmsg`, msg));
  if (k.pend > 1e-9 && k.cur != null){
    const sim = el(`div`, `nsim`); const val = Math.max(0, Math.min(sc, Math.round((k.need > 0 && k.need <= sc ? k.need : k.cur) * 2) / 2));
    sim.innerHTML = `<label>Simular: si saco <b class="sx">${nfmt(val)}</b> en lo pendiente, termino con <b class="sy">${nf2(k.sec + k.pend * val)}</b></label>`;
    const r = document.createElement(`input`); r.type = `range`; r.min = 0; r.max = sc; r.step = sc / 100 * 5 > 0.25 ? 0.5 : 0.25; r.value = val; r.setAttribute(`aria-label`, `Nota simulada para lo pendiente`);
    r.oninput = () => { const x = +r.value; sim.querySelector(`.sx`).textContent = nfmt(x); const y = k.sec + k.pend * x; const sy = sim.querySelector(`.sy`); sy.textContent = nf2(y); sy.style.color = y >= k.min - 1e-9 ? `var(--ok)` : `var(--bad)`; };
    sim.append(r); c.append(sim); r.oninput();
  }
  const edit = !!(S.x.nEdit && S.x.nEdit === m.id);
  const tree = el(`div`, `ntree` + (edit ? ` editing` : ``));
  m.root.kids.forEach(n => tree.append(nodeRow(C, m, n, m.root, 0, edit)));
  if (edit){ const r = el(`div`, `nadd`); r.append(btn(`+ Nota`, `tool`, () => { m.root.kids.push(NL(`Nueva evaluación`, 10)); nSave(); }), btn(`+ Grupo`, `tool`, () => { m.root.kids.push(NG(`Nuevo grupo`, 10, `w`, [NL(`Nota 1`, 1)])); nSave(); })); tree.append(r); }
  const tot = m.root.kids.reduce((s, x) => s + (+x.w || 0), 0);
  if (edit && Math.abs(tot - 100) > .01) tree.append(el(`p`, `trap`, `Los porcentajes principales suman ${nfmt(tot)}%. Lo normal es 100%; si no, se reparten en proporción.`));
  c.append(tree);
  const r = el(`div`, `btnrow`);
  r.append(btn(edit ? `Listo` : `Editar estructura`, edit ? `btn acc` : `btn ghost`, () => { S.x.nEdit = edit ? null : m.id; save(); renderView(); }));
  r.append(btn(`Ajustes`, `btn ghost`, () => editModulo(C, m)));
  c.append(r);
  return c;
}
function nodeRow(C, m, n, parent, depth, edit){
  const isG = !!n.kids, sc = m.scale || 10;
  const w = el(`div`, `nrow` + (isG ? ` grp` : ``)); w.style.setProperty(`--d`, depth);
  const pw = parent.agg === `avg` ? `` : `<span class="nw">${nfmt(n.w)}%</span>`;
  if (!edit){
    if (isG){ const k = nCalc(n); w.innerHTML = `<span class="nn">${n.name}${pw}<small>${n.agg === `avg` ? `promedio de ${n.kids.length}` : ``}</small></span><span class="nv">${k.cur == null ? `—` : nf2(k.cur)}${k.pend > 1e-9 && k.cur != null ? `<small>parcial</small>` : ``}</span>`; }
    else {
      w.innerHTML = `<span class="nn">${n.name}${pw}</span>`;
      const i = document.createElement(`input`); i.className = `ninp`; i.inputMode = `decimal`; i.placeholder = `—`; i.value = n.g == null ? `` : nfmt(n.g); i.setAttribute(`aria-label`, `Nota de ${n.name}`);
      const commit = () => { const v = parseNota(i.value, sc); if (v === undefined){ i.classList.add(`bad`); return; } i.classList.remove(`bad`); if (v !== n.g){ n.g = v; nSave(); } };
      i.onchange = commit; i.onkeydown = e => { if (e.key === `Enter`) i.blur(); };
      w.append(i);
    }
  } else {
    const nm = document.createElement(`input`); nm.className = `nedit`; nm.value = n.name; nm.setAttribute(`aria-label`, `Nombre`); nm.onchange = () => { n.name = nm.value.trim() || n.name; nSave(); };
    w.append(nm);
    if (parent.agg !== `avg`){ const wi = document.createElement(`input`); wi.className = `nedit nwi`; wi.inputMode = `decimal`; wi.value = nfmt(n.w); wi.setAttribute(`aria-label`, `Porcentaje`); wi.onchange = () => { const x = parseFloat(wi.value.replace(`,`, `.`)); if (!isNaN(x) && x >= 0){ n.w = x; nSave(); } }; const s = el(`span`, `nwl`); s.append(wi, `%`); w.append(s); }
    const acts = el(`span`, `nacts`);
    if (isG){
      const sel = document.createElement(`select`); sel.className = `nedit`; sel.innerHTML = `<option value="w">Por porcentajes</option><option value="avg">Promedio simple</option>`; sel.value = n.agg; sel.onchange = () => { n.agg = sel.value; nSave(); }; acts.append(sel);
      acts.append(btn(`+ Nota`, `tool`, () => { n.kids.push(NL(`Nota ${n.kids.length + 1}`, n.agg === `avg` ? 1 : 1)); nSave(); }));
    } else acts.append(btn(`→ Grupo`, `tool`, () => { const i = parent.kids.indexOf(n); parent.kids[i] = NG(n.name, n.w, `avg`, [Object.assign(NL(`Nota 1`, 1), { g:n.g })]); nSave(); }));
    acts.append(btn(`↑`, `tool`, () => { const i = parent.kids.indexOf(n); if (i > 0){ parent.kids.splice(i, 1); parent.kids.splice(i - 1, 0, n); nSave(); } }));
    acts.append(btn(`Quitar`, `tool`, () => { parent.kids.splice(parent.kids.indexOf(n), 1); nSave(); }));
    w.append(acts);
  }
  const frag = document.createDocumentFragment(); frag.append(w);
  if (isG){ n.kids.forEach(k => frag.append(nodeRow(C, m, k, n, depth + 1, edit))); if (edit && n.agg === `w`){ const t = n.kids.reduce((s, x) => s + (+x.w || 0), 0); if (parent.agg !== `avg` && Math.abs(t - n.w) > .01 && n.kids.length > 1){ const p = el(`p`, `muted nhint`, `Dentro de “${n.name}” suman ${nfmt(t)}%; se reparten en proporción sobre su ${nfmt(n.w)}%.`); p.style.setProperty(`--d`, depth + 1); frag.append(p); } } }
  return frag;
}
function nSave(){ save(); renderView(); }
function editCiclo(C){
  const N = notas(); const isNew = !C; const c = C || { id:NID(), name:``, mods:[] };
  openSheet(isNew ? `Nuevo ciclo` : `Ajustes del ciclo`, b => {
    const i = document.createElement(`input`); i.className = `nedit wide`; i.value = c.name; i.placeholder = `Ej.: Ciclo I-2027`;
    b.append(fld(`Nombre del ciclo`, i));
    const r = el(`div`, `btnrow`);
    r.append(btn(isNew ? `Crear ciclo` : `Guardar`, `btn acc`, () => { c.name = i.value.trim() || `Ciclo ${N.ciclos.length + (isNew ? 1 : 0)}`; if (isNew){ N.ciclos.push(c); N.cur = c.id; } closeSheet(); nSave(); }));
    if (!isNew && N.ciclos.length > 1) r.append(btn(`Eliminar ciclo`, `btn danger`, () => { r.innerHTML = ``; r.append(el(`span`, `muted`, `¿Eliminar “${c.name}” y sus ${c.mods.length} módulos?`), btn(`Sí, eliminar`, `btn danger`, () => { N.ciclos.splice(N.ciclos.indexOf(c), 1); closeSheet(); nSave(); }), btn(`Cancelar`, `btn ghost`, closeSheet)); }));
    b.append(r); setTimeout(() => i.focus(), 50);
  });
}
function addModulo(C){
  openSheet(`Agregar módulo`, b => {
    const n = document.createElement(`input`); n.className = `nedit wide`; n.placeholder = `Ej.: Módulo V`;
    const uv = document.createElement(`input`); uv.className = `nedit`; uv.inputMode = `numeric`; uv.value = 4;
    b.append(fld(`Nombre`, n), fld(`Unidades valorativas (UV)`, uv, `Sirven para calcular el CUM del ciclo`));
    b.append(el(`p`, ``, `<b>Plantilla</b>`));
    const r = el(`div`, `btnrow col`);
    Object.entries(NTPL).forEach(([key, t]) => r.append(btn(t.n, `btn ghost`, () => { C.mods.push({ id:NID(), name:n.value.trim() || `Módulo ${C.mods.length + 1}`, uv:+uv.value || 0, min:6, scale:10, root:t.f() }); S.x.nEdit = key === `modIV` ? null : C.mods[C.mods.length - 1].id; closeSheet(); nSave(); })));
    b.append(r); setTimeout(() => n.focus(), 50);
  });
}
function editModulo(C, m){
  openSheet(`Ajustes · ${m.name}`, b => {
    const n = document.createElement(`input`); n.className = `nedit wide`; n.value = m.name;
    const uv = document.createElement(`input`); uv.className = `nedit`; uv.inputMode = `decimal`; uv.value = m.uv;
    const mn = document.createElement(`input`); mn.className = `nedit`; mn.inputMode = `decimal`; mn.value = m.min;
    const sc = document.createElement(`select`); sc.className = `nedit`; sc.innerHTML = `<option value="10">0 a 10</option><option value="100">0 a 100</option><option value="20">0 a 20</option><option value="5">0 a 5</option>`; sc.value = String(m.scale || 10);
    b.append(fld(`Nombre`, n), fld(`Unidades valorativas (UV)`, uv), fld(`Nota mínima para aprobar`, mn), fld(`Escala de notas`, sc, `Si cambias la escala, las notas ya escritas se convierten`));
    const mv = el(`div`, `btnrow`); C.mods.length > 1 && mv.append(btn(`↑ Subir`, `btn ghost`, () => { const i = C.mods.indexOf(m); if (i > 0){ C.mods.splice(i, 1); C.mods.splice(i - 1, 0, m); closeSheet(); nSave(); } }));
    const N = notas(); if (N.ciclos.length > 1){ const s = document.createElement(`select`); s.className = `nedit`; s.innerHTML = `<option value="">Mover a otro ciclo…</option>` + N.ciclos.filter(c => c !== C).map(c => `<option value="${c.id}">${c.name}</option>`).join(``); s.onchange = () => { const t = N.ciclos.find(c => c.id === s.value); if (t){ C.mods.splice(C.mods.indexOf(m), 1); t.mods.push(m); closeSheet(); nSave(); } }; mv.append(s); }
    b.append(mv);
    const r = el(`div`, `btnrow`);
    r.append(btn(`Guardar`, `btn acc`, () => {
      m.name = n.value.trim() || m.name; m.uv = parseFloat(uv.value) || 0;
      const ns = +sc.value, os = m.scale || 10; if (ns !== os){ nLeaves(m.root, 1).forEach(x => { if (x.leaf.g != null) x.leaf.g = Math.round(x.leaf.g / os * ns * 1000) / 1000; }); m.min = (parseFloat(mn.value) || 0) / os * ns; m.scale = ns; } else { const x = parseFloat(String(mn.value).replace(`,`, `.`)); if (!isNaN(x)) m.min = x; }
      closeSheet(); nSave();
    }));
    r.append(btn(`Duplicar estructura`, `btn ghost`, () => { const cp = JSON.parse(JSON.stringify(m)); cp.id = NID(); cp.name = m.name + ` (copia)`; (function clr(x){ x.id = NID(); if (x.kids) x.kids.forEach(clr); else x.g = null; })(cp.root); C.mods.push(cp); closeSheet(); nSave(); }));
    r.append(btn(`Eliminar módulo`, `btn danger`, () => { r.innerHTML = ``; r.append(el(`span`, `muted`, `¿Eliminar “${m.name}” con todas sus notas?`), btn(`Sí, eliminar`, `btn danger`, () => { C.mods.splice(C.mods.indexOf(m), 1); closeSheet(); nSave(); }), btn(`Cancelar`, `btn ghost`, closeSheet)); }));
    b.append(r);
  });
}

/* ======================= RELOJ ======================= */
function clkCfg(){ if (!S.x.clk) S.x.clk = { h24:false, sec:true, chip:true, next:true }; return S.x.clk; }
function clkParts(d){
  const c = clkCfg(); let h = d.getHours(); const m = pad2(d.getMinutes()), s = pad2(d.getSeconds());
  if (c.h24) return { hm:`${pad2(h)}:${m}`, s, ap:`` };
  const ap = h >= 12 ? `p. m.` : `a. m.`; h = h % 12 || 12; return { hm:`${h}:${m}`, s, ap };
}
function clkShort(d){ const p = clkParts(d); return p.hm + (p.ap ? ` ` + p.ap : ``); }
function nextEvent(){
  const now = new Date(), today = todayStr();
  const list = (S.x.ev || []).filter(e => e.date && (e.date > today || (e.date === today && (!e.time || e.time >= `${pad2(now.getHours())}:${pad2(now.getMinutes())}`))));
  list.sort((a, b) => (a.date + (a.time || `99`)).localeCompare(b.date + (b.time || `99`)));
  return list[0] || null;
}
function nextEventText(){
  const e = nextEvent(); if (!e) return ``;
  const dd = dayDiff(todayStr(), e.date), t = e.time ? fmtTime(e.time) : ``;
  let w = dd === 0 ? (t ? `hoy a las ${t}` : `hoy`) : dd === 1 ? (t ? `mañana a las ${t}` : `mañana`) : `en ${dd} días`;
  if (dd === 0 && e.time){ const [h, m] = e.time.split(`:`).map(Number); const n = new Date(); const mins = h * 60 + m - (n.getHours() * 60 + n.getMinutes()); if (mins <= 90) w = mins <= 0 ? `ahora` : `en ${mins} min`; }
  return `${e.title} ${w}`;
}
function clockBig(){
  const b = btn(``, `clockbig`); b.dataset.clock = `big`; b.title = `Ajustes del reloj`; b.setAttribute(`aria-label`, `Reloj. Toca para ajustarlo`);
  b.onclick = openClockSettings; paintClock(b); return b;
}
function paintClock(h){
  const d = new Date(), p = clkParts(d), c = clkCfg(), kind = h.dataset.clock;
  if (kind === `chip`){ h.innerHTML = `🕒 <span>${innerWidth > 700 ? clkShort(d) : p.hm}</span>`; return; }
  if (kind === `focus`){ h.innerHTML = `${p.hm}${c.sec ? `<span class="sec">:${p.s}</span>` : ``}${p.ap ? ` <small>${p.ap}</small>` : ``}`; return; }
  const DIA = DIAS[d.getDay()]; const nx = c.next ? nextEventText() : ``;
  const ps = S.x.pst, pr = ps && ps.run ? `🍅 ${ps.phase === `study` ? `Estudio` : `Descanso`} · quedan ${fmtSec(pomoLeft())}` : ``;
  h.innerHTML = `<span class="t">${p.hm}${c.sec ? `<span class="sec">:${p.s}</span>` : ``}${p.ap ? `<small>${p.ap}</small>` : ``}</span><span class="side"><span class="d">${DIA[0].toUpperCase() + DIA.slice(1)} ${d.getDate()} de ${MESES[d.getMonth()]}</span>${nx ? `<span class="n">${nx}</span>` : ``}${pr ? `<span class="n pr">${pr}</span>` : ``}</span>`;
}
function updateClocks(){ document.querySelectorAll(`[data-clock]`).forEach(paintClock); }
function addHeadClock(){
  const top = $(`#head .top`); if (!top) return; const tools = top.querySelector(`.tools`);
  if (S.mode === `notas`){ const h1 = $(`#head h1`); if (h1) h1.textContent = `Mis notas`; const k = $(`#head .top .k`); if (k) k.textContent = `Inicio · ${curCiclo() ? curCiclo().name : `Notas`}`; document.querySelectorAll(`#head .chips, #head .hstat`).forEach(x => x.remove()); }
  if (S.mode === `inicio`){
    const k = $(`#head .top .k`); if (k) k.textContent = `Química · Laboratorio Clínico`;
    const w = el(`div`, `clockwrap`); w.append(clockBig());
    if (innerWidth <= 700) top.after(w); else top.insertBefore(w, tools);
  } else if (clkCfg().chip && tools){ const c = btn(``, `hbtn hclock`); c.dataset.clock = `chip`; c.title = `Hora · ajustes del reloj`; c.onclick = openClockSettings; paintClock(c); tools.prepend(c); }
}
const _renderHead = renderHead;
renderHead = function(){ _renderHead(); addHeadClock(); };
const _openFocus = openFocus;
openFocus = function(){ _openFocus(); const f = $(`#focusroot .focus`); if (f){ const c = el(`div`, `fclock`); c.dataset.clock = `focus`; paintClock(c); f.prepend(c); } };
function openClockSettings(){
  const c = clkCfg(); const done = () => { save(); renderHead(); updateClocks(); };
  openSheet(`Reloj`, b => {
    b.append(fld(`Formato de 24 horas`, toggleBtn(c.h24, v => { c.h24 = v; done(); }), `22:38 en lugar de 10:38 p. m.`));
    b.append(fld(`Mostrar segundos`, toggleBtn(c.sec, v => { c.sec = v; done(); }), `En Inicio y en modo concentración`));
    b.append(fld(`Próximo evento de la agenda`, toggleBtn(c.next, v => { c.next = v; done(); }), `Ej.: "Parcial en 7 días" o "Laboratorio en 40 min"`));
    b.append(fld(`Reloj en las demás secciones`, toggleBtn(c.chip, v => { c.chip = v; done(); }), `Hora pequeña arriba en Estudiar, Practicar, Examen y Preguntar`));
  });
}
setInterval(updateClocks, 1000);

/* ======================= SINCRONIZACIÓN EN LA NUBE (Firebase) =======================
   Solo se activa si existe window.FB_CONFIG (archivo firebase-config.js del sitio).
   Guarda en users/{uid}: { datos:{clave:texto}, updated:ms, dev:texto }.            */
const SYNC_META = `quimica_sync`;
const SY = { on:false, user:null, db:null, state:`off`, err:``, timer:null, applying:false, boot:Date.now(), busy:false };
function syncMeta(){ try { return JSON.parse(localStorage.getItem(SYNC_META) || `{}`) || {}; } catch(e){ return {}; } }
function setMeta(m){ try { localStorage.setItem(SYNC_META, JSON.stringify(m)); } catch(e){} }
function syncAvailable(){ return !!(window.FB_CONFIG && window.FB_CONFIG.apiKey) && /^https?:$/.test(location.protocol); }
function devName(){ const u = navigator.userAgent; return /iPad|Tablet/i.test(u) || (/Android/i.test(u) && !/Mobile/i.test(u)) ? `tablet` : /Android|iPhone|Mobile/i.test(u) ? `teléfono` : `computadora`; }
function loadScript(src){ return new Promise((ok, no) => { const s = document.createElement(`script`); s.src = src; s.onload = ok; s.onerror = () => no(new Error(`sin conexión`)); document.head.append(s); }); }
function localData(){ const d = {}; BACKUP_KEYS.forEach(k => { try { const x = localStorage.getItem(k); if (x != null) d[k] = x; } catch(e){} }); return d; }
function hasProgress(){ return Object.keys(S.st).length > 0 || (S.x.ev || []).length > 0 || (S.x.plog || []).length > 0 || Object.keys(S.box).length > 0; }
function setSync(st, err){ SY.state = st; SY.err = err || ``; renderSyncHosts(); }

/* cada escritura real marca "pendiente de subir" (se ignoran las del arranque) */
(function(){
  if (Storage.prototype.__set) return;
  const orig = Storage.prototype.setItem; Storage.prototype.__set = orig;
  Storage.prototype.setItem = function(k, v){ orig.call(this, k, v); if (this === window.localStorage && BACKUP_KEYS.includes(k) && !SY.applying && Date.now() - SY.boot > 1500) syncDirty(); };
})();
function syncDirty(){ const m = syncMeta(); if (!m.dirty){ m.dirty = true; setMeta(m); } if (SY.user && !SY.timer) SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 5000); if (SY.user) setSync(`pend`); }

async function syncInit(){
  if (!syncAvailable()) return;
  setSync(`load`);
  try {
    if (!window.firebase){ await loadScript(`lib/firebase-app-compat.js`); await loadScript(`lib/firebase-auth-compat.js`); await loadScript(`lib/firebase-firestore-compat.js`); }
    if (!firebase.apps.length) firebase.initializeApp(window.FB_CONFIG);
    SY.db = firebase.firestore(); SY.on = true;
    firebase.auth().onAuthStateChanged(u => { SY.user = u; if (u) syncPull(); else setSync(`out`); });
  } catch(e){ setSync(`offline`); }
}
function syncLogin(){
  const p = new firebase.auth.GoogleAuthProvider(); p.setCustomParameters({ prompt:`select_account` });
  setSync(`sync`);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => firebase.auth().signInWithPopup(p)).catch(e => {
    const c = e && e.code || ``;
    setSync(`out`, c.includes(`popup-closed`) || c.includes(`cancelled`) ? `` : c.includes(`unauthorized-domain`) ? `Este dominio no está autorizado en Firebase.` : c.includes(`popup-blocked`) ? `El navegador bloqueó la ventana. Permite ventanas emergentes e inténtalo de nuevo.` : `No se pudo iniciar sesión (${c || e.message}).`);
  });
}
function syncLogout(){ firebase.auth().signOut(); const m = syncMeta(); delete m.rev; delete m.uid; setMeta(m); }
function docRef(){ return SY.db.collection(`users`).doc(SY.user.uid); }

async function syncPull(){
  if (!SY.user || SY.busy) return; SY.busy = true; setSync(`sync`);
  try {
    const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; const m = syncMeta();
    if (m.uid && m.uid !== SY.user.uid){ m.rev = 0; }
    m.uid = SY.user.uid; setMeta(m);
    if (!r || !r.datos){ SY.busy = false; return syncPush(true); }
    const remoteNewer = (r.updated || 0) > (m.rev || 0);
    if (!remoteNewer){ SY.busy = false; return m.dirty ? syncPush() : setSync(`ok`); }
    if (!m.rev && !hasProgress()) return syncApply(r);
    if (m.rev && !m.dirty) return syncApply(r);
    SY.busy = false; syncConflict(r);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo leer la nube.` : ``); }
}
function syncApply(r){
  SY.applying = true;
  for (const k in r.datos){ if (BACKUP_KEYS.includes(k)) try { localStorage.setItem(k, r.datos[k]); } catch(e){} }
  setMeta({ uid:SY.user.uid, rev:r.updated, dirty:false, at:Date.now() });
  location.reload();
}
async function syncPush(force){
  if (!SY.user) return; if (SY.busy && !force) return; SY.busy = true; setSync(`sync`);
  try {
    const m = syncMeta();
    if (!force){ const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; if (r && (r.updated || 0) > (m.rev || 0)){ SY.busy = false; return syncConflict(r); } }
    const now = Date.now();
    await docRef().set({ datos:localData(), updated:now, dev:devName() });
    setMeta({ uid:SY.user.uid, rev:now, dirty:false, at:now }); SY.busy = false; setSync(`ok`);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo guardar en la nube.` : ``); }
}
function syncConflict(r){
  setSync(`conf`);
  openSheet(`¿Qué progreso conservo?`, b => {
    b.append(el(`p`, ``, `Hay cambios en este dispositivo que no estaban en la nube, y la nube tiene progreso guardado desde tu <b>${r.dev || `otro dispositivo`}</b> el <b>${new Date(r.updated).toLocaleString(`es`, { dateStyle:`medium`, timeStyle:`short` })}</b>.`));
    b.append(el(`p`, `muted`, `Elige cuál usar. El otro se reemplaza. Si no estás segura, descarga primero un respaldo de este dispositivo en Mi progreso.`));
    const row = el(`div`, `btnrow`);
    row.append(btn(`Usar el de la nube`, `btn acc`, () => { closeSheet(); syncApply(r); }), btn(`Conservar el de este dispositivo`, `btn ghost`, () => { closeSheet(); syncPush(true); }));
    b.append(row);
  });
}
function syncAgo(t){ if (!t) return ``; const s = Math.round((Date.now() - t) / 1000); return s < 60 ? `hace un momento` : s < 3600 ? `hace ${Math.round(s / 60)} min` : new Date(t).toLocaleString(`es`, { dateStyle:`short`, timeStyle:`short` }); }
const SYNC_TXT = { load:`Conectando…`, out:`Sin iniciar sesión`, sync:`Sincronizando…`, ok:`Guardado en la nube`, pend:`Cambios por subir…`, err:`Error al sincronizar`, offline:`Sin internet: se subirá al volver la conexión`, conf:`Elige qué progreso conservar` };
function syncLine(){ const m = syncMeta(); return SYNC_TXT[SY.state] + (SY.state === `ok` && m.at ? ` · ${syncAgo(m.at)}` : ``); }
function syncBox(host, compact){
  host.innerHTML = ``;
  if (!syncAvailable()) return;
  if (!SY.user){
    host.append(el(`h3`, ``, `Guardar en la nube`), el(`p`, `muted`, `Inicia sesión con tu cuenta de Google y tu progreso, fichas, agenda y Pomodoro se guardan solos y se sincronizan entre tu teléfono y tu computadora.`));
    const r = el(`div`, `btnrow`); r.append(btn(`Iniciar sesión con Google`, `btn acc`, () => { if (SY.on) syncLogin(); }));
    if (compact) r.append(btn(`Ahora no`, `btn ghost`, () => { S.x.syncHide = 1; save(); host.remove(); }));
    host.append(r);
    if (SY.state === `load`) host.append(el(`p`, `muted`, `Conectando…`));
    if (SY.state === `offline`) host.append(el(`p`, `muted`, `Sin internet: conéctate para iniciar sesión.`));
    if (SY.err) host.append(el(`p`, `trap`, SY.err));
    return;
  }
  if (compact){ host.hidden = true; return; }
  host.hidden = false;
  host.append(el(`h3`, ``, `Guardado en la nube`));
  host.append(el(`p`, ``, `${icon(SY.state === `ok` ? `bolt` : `timer`)} <b>${syncLine()}</b>`));
  host.append(el(`p`, `muted`, `Cuenta: ${SY.user.email || SY.user.displayName || `Google`}. Todo se guarda solo; no tienes que hacer nada.`));
  if (SY.err) host.append(el(`p`, `trap`, SY.err));
  { const r = el(`div`, `btnrow`); r.append(btn(`Sincronizar ahora`, `btn ghost`, () => { const m = syncMeta(); m.dirty ? syncPush() : syncPull(); }), btn(`Cerrar sesión`, `btn ghost`, syncLogout)); host.append(r); }
}
function renderSyncHosts(){ document.querySelectorAll(`[data-sync]`).forEach(h => syncBox(h, h.dataset.sync === `mini`)); const d = $(`#syncdot`); if (d) d.dataset.st = SY.user ? SY.state : `out`; }
function syncCard(compact){ const c = el(`article`, `card plain`); c.dataset.sync = compact ? `mini` : `full`; syncBox(c, compact); return c; }
window.addEventListener(`online`, () => { if (SY.user){ const m = syncMeta(); m.dirty ? syncPush() : syncPull(); } else if (syncAvailable() && !SY.on) syncInit(); });
document.addEventListener(`visibilitychange`, () => { if (document.visibilityState === `visible` && SY.user && !SY.busy) syncPull(); else if (document.visibilityState === `hidden` && SY.user && syncMeta().dirty){ clearTimeout(SY.timer); SY.timer = null; syncPush(); } });

/* ======================= ARRANQUE ======================= */
initX(); if (Array.isArray(S.x.known)) TORDER.forEach(t => { if (!S.x.known.includes(t)) S.sel.add(t); }); S.x.known = TORDER.slice(); applyTheme(); injectPackCss(); versionNotice();
if (!SECS.some(sc => sc.modes.some(m => m[0] === S.mode))) S.mode = `inicio`;
renderAll();
setInterval(pomoTick, 1000);
document.addEventListener(`keydown`, e => {
  if (e.key === `Escape`){ if ($(`#focusroot`).children.length) closeFocus(); else if (SH) closeSheet(); return; }
  const tag = (document.activeElement && document.activeElement.tagName) || ``;
  if (S.mode === `repaso` && !S.x.rall && !SH && !/INPUT|SELECT|TEXTAREA/.test(tag) && (e.key === `ArrowRight` || e.key === `ArrowLeft`)){ const bs = document.querySelectorAll(`.decknav .btn`); const b = e.key === `ArrowRight` ? bs[1] : bs[0]; if (b && !b.disabled){ e.preventDefault(); b.click(); } }
});
try { matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`, () => renderHead()); } catch(e){}
let BPNOW = bp(); addEventListener(`resize`, () => { const b = bp(); if (b !== BPNOW){ BPNOW = b; renderAll(); } });
document.addEventListener(`visibilitychange`, () => { if (!document.hidden) pomoTick(); });

/* Para generar PDF vectoriales desde fuera (impresión del examen): */
window.__doc = (kind, code) => { const d = buildDoc(kind, code ? buildExam(code) : undefined); [...document.body.children].forEach(c => { if (![`STYLE`,`LINK`,`TITLE`,`META`].includes(c.tagName)) c.remove(); }); document.body.className = `printing`; document.body.append(d.root); return d.spec.file; };
window.__buildExam = buildExam;
syncInit();
