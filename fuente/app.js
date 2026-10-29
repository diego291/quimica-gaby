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
