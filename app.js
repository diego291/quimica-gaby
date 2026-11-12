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
const MODES = [[`inicio`,`Hoy`],[`hoy`,`Para hoy`],[`escuchar`,`Escuchar`],[`notas`,`Mis notas`],[`impreso`,`Parcial impreso`],[`guia`,`Cómo estudiar`],[`repaso`,`Repaso`],[`videos`,`Videos`],[`preguntar`,`Preguntar`],[`fichas`,`Fichas`],[`preguntas`,`Preguntas`],[`ejercicios`,`Ejercicios`],[`formula`,`¿Qué fórmula uso?`],[`practica`,`Práctica infinita`],[`lab`,`Laboratorio`],[`simulacro`,`Simulacro`],[`formulario`,`Formulario`],[`progreso`,`Mi progreso`],[`agenda`,`Agenda`],[`pendientes`,`Pendientes`],[`notasr`,`Notas rápidas`],[`cuaderno`,`Cuaderno`],[`retro`,`Retroalimentación`]];
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
  const n = { guia:ALL.REPASO, videos:VIDEOS, preguntar:ALL.REPASO, repaso:ALL.REPASO, fichas:ALL.FICHAS, preguntas:ALL.MCQ.concat(ALL.ABIERTAS), ejercicios:ALL.EJ, formula:ALL.FQ, practica:GENS, lab:LABS, simulacro:ALL.MCQ, formulario:ALL.FORM, progreso:ALL.MCQ, hoy:ALL.MCQ, escuchar:ALL.REPASO, notas:ALL.MCQ, inicio:ALL.REPASO, impreso:ALL.MCQ }[S.mode] || ALL.MCQ;
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
    if (!SIM.saved && SIM.qs.length){ SIM.saved = true; S.x.simLast = { d: todayStr(), nota: +nota, ts:[...new Set(SIM.qs.map(q => q.t))] }; save(); if (SIM.ev) simEventSave(SIM.ev, +nota); setTimeout(() => motSim(+nota), 400); }
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
  v.append(weakMap(false));
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
  if (!S.sel.size && ![`inicio`,`progreso`,`guia`,`videos`,`preguntar`,`notas`,`hoy`,`agenda`,`pendientes`,`notasr`,`cuaderno`,`retro`].includes(S.mode)){ const e = el(`div`,`empty`,`No hay temas elegidos. `); e.append(btn(`Elegir temas`, `btn acc`, () => openTopics())); v.append(e); return; }
  ({ hoy:vHoy, escuchar:vEscuchar, notas:vNotas, inicio:vInicio, impreso:vImpreso, guia:vGuia, videos:vVideos, preguntar:vPreguntar, repaso:vRepaso, fichas:vFichas, preguntas:vPreguntas, ejercicios:vEjercicios, formula:vFormula, practica:vPractica, lab:vLab, simulacro:vSimulacro, formulario:vFormulario, progreso:vProgreso, agenda:vAgenda, pendientes:vPend, notasr:vNotasR, cuaderno:vCuaderno, retro:vRetro })[S.mode](v);
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

/* ===================== CORRECCIONES DEL MATERIAL =====================
   Una entrada por ficha (clave = título exacto de la ficha de Repaso).
   tipo: `error` (el material dice algo incorrecto), `falta` (el material lo deja incompleto),
         `aviso` (el material se contradice; se explica qué seguir).
   Campos: pg (página), que (qué parte), dice (lo que dice el material), ok (lo correcto), por (por qué). */
const ERRATA = {
  /* ---------- Tema 26 ---------- */
  [`Enlace y geometría del anillo aromático`]:[
    { tipo:`error`, pg:`pág. 4`, que:`Longitud de enlace`, dice:`"1.39 AA"`, ok:`1.39 Å (angstroms)`, por:`Es un error de escritura de la unidad.` }],
  [`Cadenas largas: el benceno como fenilo`]:[
    { tipo:`aviso`, pg:`pág. 11 y 16`, que:`Cuándo el benceno pasa a ser fenilo`, dice:`La pág. 11 dice "si supera los 6 carbonos"; la pág. 16, "con 6 carbonos o más". Sus ejemplos (3-fenilpentano) tienen solo 5 C.`, ok:`Sigue la forma de los ejemplos del docente y, si te piden justificar, pregunta qué criterio exige.`, por:`Las dos páginas dan límites distintos.` }],
  [`Aromáticos famosos`]:[
    { tipo:`error`, pg:`pág. 17`, que:`Nombre`, dice:`"notroglicerina"`, ok:`nitroglicerina`, por:`Error de escritura.` }],
  [`Fármacos, bases nitrogenadas y sustancias tóxicas`]:[
    { tipo:`error`, pg:`pág. 20`, que:`Nombre del fármaco`, dice:`"metrotrexano"`, ok:`metotrexato`, por:`Error de escritura.` },
    { tipo:`error`, pg:`pág. 20`, que:`Nombre del tóxico`, dice:`"venzo (A) pireno"`, ok:`benzo[a]pireno`, por:`Error de escritura.` }],
  /* ---------- Tema 27 ---------- */
  [`Funciones oxigenadas: estructura y fórmula general`]:[
    { tipo:`error`, pg:`portada`, que:`Número del tema`, dice:`"Tema 28"`, ok:`Tema 27 (así se usa en toda la página)`, por:`El archivo corresponde al Tema 27.` }],
  [`Clasificación de las funciones oxigenadas`]:[
    { tipo:`error`, pg:`pág. 4`, que:`Tabla: grupo del éster`, dice:`Éster = "carbonilo + hidroxilo"`, ok:`Éster = −COO−R': el segundo oxígeno está unido a otra cadena, no a un H`, por:`"Carbonilo + hidroxilo" es el ácido carboxílico (−COOH).` }],
  [`Propiedades físicas de los alcoholes`]:[
    { tipo:`error`, pg:`pág. 13`, que:`Causa del punto de ebullición alto`, dice:`Se debe a las fuerzas de dispersión`, ok:`Se debe a los puentes de hidrógeno (etanol 78 °C frente a propano −42 °C); la dispersión solo explica que suba con el tamaño`, por:`Masa parecida, ebullición muy distinta: la diferencia es el −OH.` },
    { tipo:`error`, pg:`pág. 13`, que:`Acidez del etanol`, dice:`"pKa inferior al agua"`, ok:`Etanol (≈ 16) y agua (≈ 15.7) tienen acidez muy parecida`, por:`Dato de referencia [2].` }],
  [`Propiedades físicas de los fenoles`]:[
    { tipo:`error`, pg:`pág. 14`, que:`pKa del fenol`, dice:`"tienen un pKa mayor a los alcoholes, por lo que son más ácidos"`, ok:`Tienen un pKa MENOR (fenol ≈ 10, etanol ≈ 16), por eso son más ácidos`, por:`A menor pKa, mayor acidez. La conclusión es correcta; "mayor" está mal.` }],
  /* ---------- Tema 28 ---------- */
  [`Estructura de los éteres`]:[
    { tipo:`error`, pg:`portada`, que:`Número del tema`, dice:`"Tema 29"`, ok:`Tema 28 (así se usa en toda la página)`, por:`El archivo corresponde al Tema 28.` }],
  [`Propiedades físicas de los éteres`]:[
    { tipo:`error`, pg:`pág. 11`, que:`Ejemplo de ebullición`, dice:`"etanol 78 °C, éter dimetílico 34 °C"`, ok:`El éter dimetílico hierve a −24 °C (es gas); el de 34.6 °C es el éter dietílico`, por:`Comparación justa: etanol 78 °C frente a éter dimetílico −24 °C (los dos de 46 g/mol) [2].` }],
  [`Epóxidos`]:[
    { tipo:`falta`, pg:`pág. 13`, que:`Resinas epoxi`, dice:`Aparecen sin descripción`, ok:`Adhesivos y recubrimientos muy resistentes que se forman al abrir epóxidos y unirlos en cadena (pegamentos de dos componentes, pisos y pinturas industriales)`, por:`Complemento [2].` }],
  /* ---------- Tema 30 ---------- */
  [`Cetonas comunes y en la salud`]:[
    { tipo:`error`, pg:`pág. 11`, que:`Fórmula del acetoacetato`, dice:`Acetoacetato = CH₃−CO−CH₂−COOH`, ok:`Esa fórmula es el ácido acetoacético; el acetoacetato es CH₃−CO−CH₂−COO⁻`, por:`El "-ato" es la forma ionizada.` },
    { tipo:`error`, pg:`pág. 11`, que:`Cetohexosas`, dice:`"la fructosa y la ritrulosa"`, ok:`"Ritrulosa" no existe; quizá ribulosa o eritrulosa, que son cetosas pero no hexosas (5 y 4 C). La cetohexosa del ejemplo es la fructosa`, por:`Error de escritura y de clasificación.` },
    { tipo:`aviso`, pg:`pág. 11`, que:`Cuerpos cetónicos y hormonas`, dice:`Los tres cuerpos cetónicos se presentan como cetonas; se citan "los estrógenos"`, ok:`El β-hidroxibutirato tiene −OH, no grupo cetona. De los estrógenos, la estrona tiene cetona; el estradiol no`, por:`Precisión de nombres.` }],
  [`Oxidación y reducción`]:[
    { tipo:`error`, pg:`pág. 16`, que:`Dibujo de la reducción`, dice:`Muestra alcohol → aldehído → ácido (eso es oxidación)`, ok:`La reducción va al revés: aldehído → alcohol 1° y cetona → alcohol 2°`, por:`Reducción = ganancia de H; el dibujo es el de la oxidación del Tema 27.` }],
  /* ---------- Tema 31 ---------- */
  [`El grupo carboxilo`]:[
    { tipo:`falta`, pg:`pág. 2`, que:`Derivados de los ácidos`, dice:`Se nombran en los objetivos, pero no se desarrollan`, ok:`Se forman al cambiar el −OH: ésteres (−OR), amidas (−NH₂), cloruros de ácido (−Cl) y anhídridos`, por:`Complemento [5].` }],
  [`Reacciones de acidez`]:[
    { tipo:`error`, pg:`pág. 7`, que:`Dibujo de la disociación`, dice:`CH₃−COOH + H₂O ⇌ CH₃−COOH + H₃O⁺`, ok:`CH₃−COOH + H₂O ⇌ CH₃−COO⁻ + H₃O⁺`, por:`Al ceder el H⁺ queda el ion acetato.` }],
  [`Ácidos dicarboxílicos`]:[
    { tipo:`error`, pg:`pág. 10`, que:`Título de la diapositiva`, dice:`"Ácidos Monocarboxílicos"`, ok:`Ácidos dicarboxílicos`, por:`La diapositiva trata de ácidos con dos −COOH.` }],
  [`Ácidos carboxílicos en medicina`]:[
    { tipo:`falta`, pg:`pág. 12`, que:`Metabolitos`, dice:`La diapositiva está cortada: "Metabolitos como el ácido…"`, ok:`Ejemplos complementarios: ácido láctico, pirúvico y cítrico. Confírmalo con el docente`, por:`Complemento [4].` }]
};
/* Los paquetes de material nuevos pueden traer sus propias correcciones: registerPack({ …, ERRATA:{ título:[…] } }) */
if (typeof PK !== `undefined`) Object.values(PK.list || {}).forEach(p => { if (p && p.ERRATA) Object.assign(ERRATA, p.ERRATA); });

const ERR_TIPO = { error:[`✕ El material dice`, `✓ Lo correcto`], falta:[`… Falta en el material`, `+ Complemento`], aviso:[`⚠ El material se contradice`, `→ Qué seguir`] };
const errOf = title => ERRATA[title] || null;
const errTema = t => ALL.REPASO.filter(x => x.t === t && ERRATA[x.title]);
const errCount = t => errTema(t).reduce((n, x) => n + ERRATA[x.title].length, 0);
function errFrase(n, list){
  const e = list.filter(x => x.tipo === `error`).length, f = list.filter(x => x.tipo === `falta`).length, a = n - e - f;
  const p = []; if (e) p.push(e === 1 ? `1 error` : `${e} errores`); if (f) p.push(f === 1 ? `1 parte incompleta` : `${f} partes incompletas`); if (a) p.push(a === 1 ? `1 contradicción` : `${a} contradicciones`);
  return `El material tiene ${p.join(` y `)} en esta ficha y ya ${n === 1 ? `está corregido` : `están corregidos`}`;
}
function errItem(e){
  const [kd, ko] = ERR_TIPO[e.tipo] || ERR_TIPO.error;
  return `<div class="errpar"><div class="errbad"><span class="k">${kd}</span>${e.dice}</div><div class="errok"><span class="k">${ko}</span>${e.ok}</div></div>${e.por ? `<p class="errpor"><b>Por qué:</b> ${e.por}</p>` : ``}`;
}
/* Franja sobre el texto de la ficha (opción C) */
function errBanner(it){
  const L = errOf(it.title); if (!L) return null;
  const b = el(`button`, `errban`); b.type = `button`;
  b.innerHTML = `<span class="erbi">⚠</span><span class="erbt">${errFrase(L.length, L)}</span><span class="erbv">Ver</span>`;
  b.onclick = () => errModal(it); return b;
}
let ERRX = null, errJump = null;
function errClose(){ const r = $(`#errroot`); if (r) r.remove(); document.removeEventListener(`keydown`, errKey); const f = ERRX; ERRX = null; if (f && f.isConnected) try { f.focus({ preventScroll:true }); } catch(e){} }
function errKey(ev){ if (ev.key === `Escape`) errClose(); }
function errOpen(cls, label, html, wire){
  errClose(); ERRX = document.activeElement;
  const r = el(`div`); r.id = `errroot`; const sc = el(`div`, `errscrim`); sc.onclick = errClose;
  const d = el(`div`, cls); d.setAttribute(`role`, `dialog`); d.setAttribute(`aria-modal`, `true`); d.setAttribute(`aria-label`, label);
  d.innerHTML = html; r.append(sc, d); document.body.append(r);
  d.querySelectorAll(`[data-x]`).forEach(b => b.onclick = errClose); if (wire) wire(d);
  document.addEventListener(`keydown`, errKey); setTimeout(() => { const f = d.querySelector(`button`); if (f) f.focus({ preventScroll:true }); }, 30);
}
/* Ventana centrada de la ficha (opción A) */
function errModal(it){
  const L = errOf(it.title); if (!L) return; const n = errCount(it.t);
  errOpen(`errmod`, `Corrección del material`, `<div class="errh"><h3>⚠ Corrección del material</h3><button class="xbtn" data-x aria-label="Cerrar">×</button></div>
    <p class="errsub">${TOPICS[it.t].n} · ${it.title}</p>
    ${L.map(e => `<div class="erre"><p class="errpg">${e.pg[0].toUpperCase() + e.pg.slice(1)} · ${e.que}</p>${errItem(e)}</div>`).join(``)}
    ${n > L.length ? `<button class="btn ghost errall" data-all>Ver todas las correcciones del ${TOPICS[it.t].n} (${n})</button>` : ``}`,
    d => { const a = d.querySelector(`[data-all]`); if (a) a.onclick = () => errPanel(it.t, it.title); });
}
/* Panel lateral con todo el tema (opción C del panel) */
function errPanel(t, cur){
  const fs = errTema(t), tema = ALL.REPASO.filter(x => x.t === t);
  fs.sort((a, b) => (b.title === cur) - (a.title === cur) || tema.indexOf(a) - tema.indexOf(b));
  errOpen(`errpanel`, `Correcciones del ${TOPICS[t].n}`, `<div class="errh"><h3>⚠ Correcciones · ${TOPICS[t].n}</h3><button class="xbtn" data-x aria-label="Cerrar">×</button></div>
    <p class="errsub">Lo que el material tiene mal o incompleto, y cómo quedó corregido en el Repaso.</p>
    ${fs.map(x => `<div class="erritem${x.title === cur ? ` cur` : ``}"><div class="errtop"><span class="errtag">${x.title === cur ? `Esta ficha` : `Ficha ${tema.indexOf(x) + 1}`} · ${ERRATA[x.title].map(e => e.pg).filter((v, i, a) => a.indexOf(v) === i).join(`, `)}</span>${x.title === cur ? `` : `<button class="btn ghost errgo" data-go="${tema.indexOf(x)}">Ir a la ficha</button>`}</div>
      <p class="errti">${x.title}</p>${ERRATA[x.title].map(e => `<p class="errpg">${e.que}</p>${errItem(e)}`).join(``)}</div>`).join(``)}`,
    d => d.querySelectorAll(`[data-go]`).forEach(b => b.onclick = () => { const x = tema[+b.dataset.go]; errClose(); if (typeof errJump === `function`) errJump(x); }));
}

/* ======================= INTERFAZ NUEVA: NAVEGACIÓN, INICIO, POMODORO, AGENDA ======================= */
const ICONS = {
  redo:`<path d="M4 12a8 8 0 1 0 2.6-5.9"/><path d="M4 4v5h5"/>`,
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
  tag:`<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>`,
  trend:`<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>`
};
const icon = (n, cls = `ic`) => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ``}</svg>`;
const SECS = [
  { k:`inicio`, n:`Inicio`, ic:`home`, modes:[[`inicio`,`Hoy`],[`guia`,`Cómo estudiar`],[`progreso`,`Mi progreso`]] },
  { k:`estudiar`, n:`Estudiar`, ic:`book`, modes:[[`repaso`,`Repaso`],[`escuchar`,`Escuchar`],[`fichas`,`Fichas`],[`videos`,`Videos`],[`formulario`,`Formulario`]] },
  { k:`practicar`, n:`Practicar`, ic:`pencil`, modes:[[`hoy`,`Para hoy`],[`preguntas`,`Preguntas`],[`ejercicios`,`Ejercicios`],[`practica`,`Práctica`],[`formula`,`¿Qué fórmula?`],[`lab`,`Laboratorio`]] },
  { k:`examen`, n:`Examen`, ic:`clip`, modes:[[`simulacro`,`Simulacro`],[`impreso`,`Parcial impreso`]] },
  { k:`organizar`, n:`Organizar`, ic:`cal`, modes:[[`agenda`,`Agenda`],[`pendientes`,`Pendientes`],[`notasr`,`Notas`],[`cuaderno`,`Cuaderno`],[`notas`,`Mis notas`]] },
  { k:`preguntar`, n:`Preguntar`, ic:`chat`, modes:[[`preguntar`,`Preguntar`]] },
  { k:`retro`, n:`Retroali­mentación`, ic:`trend`, modes:[[`retro`,`Retroalimentación`]] }
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
  x.plog = x.plog || {}; x.ev = x.ev || []; x.seen = x.seen || {}; x.days = x.days || []; x.sm = x.sm || {}; x.rpos = x.rpos || {}; x.ptab = x.ptab || {}; x.chkModo = x.chkModo || {};
  if (!x.name) x.name = `Gaby`;
  if (x.sm.inicio === `notas`) delete x.sm.inicio; // "Mis notas" pasó a Organizar
  if (x.pst.run && x.pst.end <= Date.now()){ if (x.pst.phase === `study`) logPomo(); x.pst.run = false; pomoAdvance(); }
}
function markDay(){ const t = todayStr(), d = S.x.days || (S.x.days = []); if (!d.includes(t)){ d.push(t); if (d.length > 90) d.splice(0, d.length - 90); } }
function streak(){ const d = new Set(S.x.days || []); let s = todayStr(); if (!d.has(s)) s = addDays(s, -1); let n = 0; while (d.has(s)){ n++; s = addDays(s, -1); } return n; }

/* ---------- navegación ---------- */
function go(mode){ if (S.mode === `escuchar` && mode !== `escuchar` && typeof auStop === `function` && AU.on) auStop(); S.mode = mode; S.x.sm[secOf(mode).k] = mode; if (![`inicio`,`guia`,`progreso`,`preguntar`,`retro`,`notas`,`agenda`,`pendientes`,`notasr`,`cuaderno`].includes(mode)) S.x.last = Object.assign(S.x.last && S.x.last.mode === mode ? S.x.last : {}, { mode, sel:selList(), t:Date.now() }); save(); SIM.on = false; stopTick(); closeSheet(); renderAll(); topScroll(); }
function goSec(k){ const sc = SECS.find(s => s.k === k); go(S.x.sm[k] || sc.modes[0][0]); }
function topScroll(){ window.scrollTo({ top:0 }); const p = $(`#panel`); if (p && S.mode !== `repaso`) p.scrollTop = 0; }
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
  if (S.mode === `inicio` && bp() === `phone`){ const np = typeof nextParcial === `function` && nextParcial();
    if (np){ const dd = Math.round((new Date(np.date + `T00:00`) - new Date(todayStr() + `T00:00`)) / 864e5);
      const cd = btn(``, `hbtn cdc`, openAgenda); cd.innerHTML = `📅 <span>${dd === 0 ? `Parcial hoy` : dd === 1 ? `Parcial mañana` : `Parcial en ${dd} días`}</span>`; cd.title = np.title; tools.prepend(cd); } }
  top.append(left, tools); h.append(top);
  // En el Repaso, los temas se reducen a un solo botón para dejar espacio a la ficha
  if (S.mode === `inicio`){ h.classList.add(`compact`); return; }
  if (sc.k === `organizar`){ const h1 = $(`#head h1`); if (h1) h1.textContent = { agenda:`Agenda`, pendientes:`Pendientes`, notasr:`Notas`, cuaderno:`Cuaderno`, notas:`Mis notas` }[S.mode] || sc.n; const k = $(`#head .top .k`); if (k) k.textContent = `Organizar`; h.classList.add(`compact`, `nochips`); return; }
  if (sc.k === `retro`){ const h1 = $(`#head h1`); if (h1) h1.textContent = `Retroalimentación`; const k = $(`#head .top .k`); if (k) k.textContent = `Aprende de tus evaluaciones`; h.classList.add(`compact`, `nochips`); return; }
  h.classList.remove(`nochips`);
  if (S.mode === `repaso` && !S.x.rall){ const ch = el(`div`, `chips`); const add = btn(``, `tchp add`, openTopics); add.innerHTML = icon(`plus`) + (sel.length === TORDER.length ? `Todos los temas` : `${sel.length} tema${sel.length === 1 ? `` : `s`}`) + ` · cambiar`; ch.append(add); h.append(ch); h.classList.add(`compact`); return; }
  h.classList.remove(`compact`);
  const ch = el(`div`, `chips`);
  const mx = bp() === `phone` ? 3 : 6;
  sel.slice(0, mx).forEach(t => { const c = btn(``, `tchp`, openTopics); c.style.setProperty(`--c`, `var(--${t})`); c.innerHTML = `<i></i>${TOPICS[t].n}`; ch.append(c); });
  if (sel.length > mx) ch.append(btn(`+${sel.length - mx}`, `tchp`, openTopics));
  const add = btn(``, `tchp add`, openTopics); add.innerHTML = icon(`plus`) + `Temas`; ch.append(add); h.append(ch);
  const { a, o } = totals(); const st = el(`div`, `hstat`); st.innerHTML = `<span>Respondidas <b>${a}</b></span><span>Aciertos <b>${a ? Math.round(o / a * 100) + `%` : `—`}</b></span><span>Para repasar <b>${S.err.length}</b></span>`; h.append(st);
}
function openAgenda(){ if (bp() === `wide`){ S.x.ptab[panelCtx()] = `agenda`; save(); renderPanel(); $(`#panel`).scrollTop = 0; return; } openSheet(`Calendario y agenda`, b => agendaInto(b), true); }
function editName(h1){ const i = el(`input`, `inp`); i.value = S.x.name; i.style.maxWidth = `260px`; i.setAttribute(`aria-label`, `Tu nombre`); const done = () => { S.x.name = i.value.trim() || `Gaby`; save(); renderHead(); }; i.onblur = done; i.onkeydown = e => { if (e.key === `Enter`) i.blur(); }; h1.replaceWith(i); i.focus(); i.select(); }
function renderSub(){
  const w = $(`#subw`); w.innerHTML = ``; const sc = secOf(S.mode);
  if (sc.modes.length > 1){ const s = el(`div`, `subs`); s.setAttribute(`role`, `tablist`); sc.modes.forEach(([k, n]) => { const b = btn(n, `sb`, () => go(k)); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, S.mode === k); s.append(b); }); w.append(s); }
  if ([`preguntas`,`ejercicios`].includes(S.mode)){ const t = el(`div`, `subtools`); t.append(btn(S.shuffle ? `Orden original` : `Mezclar orden`, `tool`, () => { S.shuffle = !S.shuffle; renderView(); renderSub(); })); w.append(t); }
  w.style.display = w.children.length ? `` : `none`;
}
function renderStatus(){ renderHead(); renderRail(); renderBnav(); }

/* ---------- panel derecho ---------- */
function panelCtx(){ return S.mode === `inicio` || secOf(S.mode).k === `organizar` ? `inicio` : S.mode === `repaso` && !S.x.rall ? `repaso` : `otro`; }
function renderPanel(){
  const p = $(`#panel`); p.innerHTML = ``; const np = [`agenda`, `cuaderno`, `retro`].includes(S.mode); $(`#app`).classList.toggle(`nopanel`, np); if (bp() !== `wide` || np) return;
  const ctx = panelCtx(); const tabs = ctx === `inicio` ? [[`agenda`,`Agenda`],[`temas`,`Temas`]] : ctx === `repaso` ? [[`indice`,`Índice del tema`],[`temas`,`Temas`]] : [[`temas`,`Temas`],[`agenda`,`Agenda`]];
  let cur = S.x.ptab[ctx]; if (!tabs.some(t => t[0] === cur)) cur = tabs[0][0];
  // Cerrado: queda una tira delgada con el Pomodoro y accesos para volver a abrirlo
  const off = !!S.x.panelOff; $(`#app`).classList.toggle(`pcol`, off);
  const abrir = k => { S.x.panelOff = false; if (k) S.x.ptab[ctx] = k; save(); renderPanel(); };
  if (off){
    const st = el(`nav`, `pstrip`); st.setAttribute(`aria-label`, `Panel cerrado`);
    const ex = btn(icon(`left`), `psb`, () => abrir()); ex.title = `Mostrar el panel`; ex.setAttribute(`aria-label`, `Mostrar el panel`); st.append(ex);
    const pm = btn(`<span>🍅</span><span class="pomo-time">${fmtSec(pomoLeft())}</span>`, `psb pom` + (S.x.pst.run ? ` run` : ``), () => abrir()); pm.title = `Pomodoro`; pm.setAttribute(`aria-label`, `Abrir el Pomodoro`); st.append(pm);
    tabs.forEach(([k, n]) => { const b = btn(icon(k === `indice` ? `list` : k === `agenda` ? `cal` : `tag`) + `<small>${n.split(` `)[0]}</small>`, `psb`, () => abrir(k)); b.title = n; b.setAttribute(`aria-label`, `Abrir ${n}`); st.append(b); });
    p.append(st); return;
  }
  { const cl = btn(icon(`right`) + `<span>Ocultar panel</span>`, `pclose`, () => { S.x.panelOff = true; save(); renderPanel(); }); cl.setAttribute(`aria-label`, `Ocultar el panel lateral`); p.append(cl); }
  { const m = el(`div`); m.dataset.pomo = `mini`; p.append(m); }
  const tb = el(`div`, `ptabs`); tb.setAttribute(`role`, `tablist`);
  tabs.forEach(([k, n]) => { const b = btn(n, ``, () => { S.x.ptab[ctx] = k; save(); renderPanel(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, cur === k); tb.append(b); });
  p.append(tb); const body = el(`div`); p.append(body);
  if (cur === `temas`) topicsInto(body); else if (cur === `indice`) tocInto(body); else agendaInto(body);
  paintPomo();
  if (cur === `indice`){ const c = p.querySelector(`[aria-current="true"]`); if (c) p.scrollTop = Math.max(0, c.offsetTop - 180); }
}
function openTopics(){
  const pv = $(`#panel`), visible = bp() === `wide` && !S.x.panelOff && !S.x.lect && pv && pv.offsetWidth > 120 && !$(`#app`).classList.contains(`nopanel`);
  if (visible){ S.x.ptab[panelCtx()] = `temas`; save(); renderPanel(); $(`#panel`).scrollTop = 0; const f = $(`#panel .trow`); if (f) f.focus(); return; }
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
function pomoMiniHTML(){ const p = S.x.pst; return `<div class="pmini" style="display:flex;align-items:center;gap:10px;background:var(--sunk);border-radius:12px;padding:8px 10px"><span style="font-size:20px">🍅</span><span style="flex:1;line-height:1.2"><b class="pomo-time" style="font:700 19px 'Zilla Slab',Georgia,serif;font-variant-numeric:tabular-nums">${fmtSec(pomoLeft())}</b><small style="display:block;color:var(--muted);font-size:12px">${PHN[p.phase]} · ciclo ${p.cycle}</small></span><button type="button" class="btn acc" data-pa="toggle" style="padding:6px 12px;font-size:13.5px">${p.run ? `Pausar` : `Iniciar`}</button><button type="button" class="btn ghost" data-pa="cfg" aria-label="Ajustes del Pomodoro" style="padding:6px 9px">${icon(`gear`)}</button><button type="button" class="btn ghost" data-pa="focus" aria-label="Modo concentración" title="Modo concentración" style="padding:6px 9px">${icon(`full`)}</button></div>`; }
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
    if (!isNew && e.type === `parcial`) r.append(btn(`Simulacro de este parcial`, `btn ghost`, () => { closeSheet(); simParcial(e, 20); }));
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
  const wide = bp() === `wide`;
  const g = el(`div`, `igrid`);
  const c1 = el(`div`, `icol`), c2 = el(`div`, `icol`);
  c1.append(heroCard());
  const fj = typeof fijadasCard === `function` ? fijadasCard() : null;
  if (wide){ c1.append(temasBox()); c2.append(planBox(true), agendaHoyCard()); if (fj) c2.append(fj); } else { c1.append(planBox(false), agendaHoyCard()); if (fj) c1.append(fj); c1.append(temasBox()); const pm = el(`div`, `ipomo`); pm.dataset.pomo = `mini`; c1.append(pm); }
  g.append(c1); if (wide) g.append(c2); v.append(g);
  if (wide) v.append(routeBox());
  pomoRefresh();
}
/* Plan de hoy: los pasos que convienen hoy, en orden; el primero sin hacer queda resaltado */
function planBox(conAtajos){
  const b = el(`div`, `boxc iplan`);
  const all = filt(ALL.REPASO), L = S.x.last;
  let desde = 0; if (L && L.mode === `repaso` && L.title){ const k = all.findIndex(x => x.title === L.title); if (k >= 0) desde = k; }
  let sig = -1; for (let j = 0; j < all.length; j++){ const k = (desde + j) % all.length; if (!S.x.seen[hash(all[k].title)]){ sig = k; break; } }
  const k = hoyCounts(), ne = S.err.length, simHoy = S.x.simLast && S.x.simLast.d === todayStr();
  const items = [];
  if (all.length){
    if (sig >= 0){ const x = all[sig], tm = all.filter(y => y.t === x.t); items.push({ t:`Leer: ${x.title}`, s:`${TOPICS[x.t].n} · ficha ${tm.indexOf(x) + 1} de ${tm.length}`, ok:false, f:() => { S.x.rpos[selKey()] = sig; S.x.rall = false; go(`repaso`); } }); }
    else items.push({ t:`Repaso leído completo`, s:`${all.length} tarjetas vistas`, ok:true, f:() => go(`repaso`) });
  }
  items.push(k.total ? { t:`Repaso espaciado: ${k.total} pendiente${k.total === 1 ? `` : `s`}`, s:`≈ ${Math.max(1, Math.round(k.total * .5))} min`, ok:false, f:() => go(`hoy`) } : { t:`Repaso espaciado al día`, s:`Sin pendientes hoy`, ok:true, f:() => go(`hoy`) });
  items.push(ne ? { t:`Repasar ${ne} fallo${ne === 1 ? `` : `s`}`, s:`Las preguntas que fallaste`, ok:false, f:() => { S.onlyErr = true; S.sel = new Set(TORDER); go(`preguntas`); } } : { t:`Sin fallos pendientes`, s:`Preguntas`, ok:true, f:() => go(`preguntas`) });
  const np = typeof nextParcial === `function` && nextParcial(), dd = np ? dayDiff(todayStr(), np.date) : 99;
  if (np && dd <= 14) items.push({ t:simHoy ? `Simulacro hecho: ${S.x.simLast.nota} / 10` : `Simulacro del ${np.title}`, s:simHoy ? `Hoy` : `20 preguntas de sus temas · ${dd === 0 ? `es hoy` : dd === 1 ? `es mañana` : `faltan ${dd} días`}`, ok:!!simHoy, f:() => simParcial(np, 20) });
  else items.push({ t:simHoy ? `Simulacro hecho: ${S.x.simLast.nota} / 10` : `Simulacro con nota`, s:simHoy ? `Hoy` : `Examen de práctica`, ok:!!simHoy, f:() => go(`simulacro`) });
  const hechos = items.filter(x => x.ok).length, cur = items.findIndex(x => !x.ok);
  const h = el(`div`, `ihd`); h.append(el(`h3`, ``, `Plan de hoy`), el(`span`, `muted`, `${hechos} de ${items.length}`)); b.append(h);
  const tl = el(`div`, `itl`);
  items.forEach((x, j) => { const r = btn(``, `itli` + (x.ok ? ` ok` : ``) + (j === cur ? ` cur` : ``), x.f);
    r.innerHTML = `<span class="d">${x.ok ? `✓` : ``}</span><span class="tx">${x.t}<small>${x.s}</small></span>${j === cur ? `<span class="go">Empezar</span>` : icon(`right`)}`; tl.append(r); });
  b.append(tl);
  if (conAtajos){
    const qa = el(`div`, `iqa`);
    const qb = (ic, t, f) => { const x = btn(``, `btn ghost`, f); x.innerHTML = icon(ic) + ` ` + t; qa.append(x); };
    qb(`bolt`, `Preguntas`, () => go(`preguntas`));
    qb(`pencil`, `Práctica rápida`, () => { PR.rand = true; PR.cur = null; const gs = GENS.filter(x => S.sel.has(x.t) || (x.ts && x.ts.some(t => S.sel.has(t)))); if (gs.length) PR.gen = pick(gs); go(`practica`); });
    qb(`clip`, `Simulacro`, () => go(`simulacro`));
    qb(`play`, `Videos`, () => go(`videos`));
    b.append(qa);
  }
  return b;
}
/* Avance por tema: % de fichas del Repaso leídas; tocar un tema abre su Repaso */
function temasBox(){
  const b = el(`div`, `boxc itemas`);
  const { a, o } = totals();
  const h = el(`div`, `ihd`); const et = btn(`Elegir temas`, `linkbtn`, openTopics); h.append(el(`h3`, ``, `Avance por tema`), et); b.append(h);
  b.append(el(`p`, `muted istat`, `${a} respondidas · ${a ? Math.round(o / a * 100) + `%` : `—`} aciertos · ${streak()} día${streak() === 1 ? `` : `s`} seguido${streak() === 1 ? `` : `s`} · toca un tema para abrir su Repaso`));
  const L = S.x.last, curT = L && L.title ? (ALL.REPASO.find(x => x.title === L.title) || {}).t : primary();
  const ts = selList().length ? selList() : TORDER;
  const row = el(`div`, `irings`);
  ts.forEach(t => { const rep = ALL.REPASO.filter(x => x.t === t), vis = rep.filter(x => S.x.seen[hash(x.title)]).length, pc = rep.length ? Math.round(vis / rep.length * 100) : 0, ac = topicAcc(t);
    const r = btn(``, `iring` + (t === curT ? ` on` : ``), () => { setSel([t]); go(`repaso`); });
    r.style.setProperty(`--c`, `var(--${t})`); r.style.setProperty(`--p`, pc + `%`);
    r.title = `${TOPICS[t].n} · ${TOPICS[t].name}: ${vis} de ${rep.length} fichas leídas${ac == null ? `` : ` · ${ac}% de aciertos`}`;
    r.innerHTML = `<span class="rg"><b>${pc}%</b></span><span>${TOPICS[t].n.replace(`Tema `, `T`)}</span><small>${ac == null ? `—` : ac + `% ✓`}</small>`; row.append(r); });
  b.append(row);
  return b;
}
function heroCard(){
  const h = el(`div`, `hero`); const L = S.x.last; const sel = selList();
  let t = primary(), title, line, go_, seg = ``, frac = 0;
  const card_ = L && L.mode === `repaso` && L.title ? ALL.REPASO.find(x => x.title === L.title) : null;
  if (card_){
    const tm = ALL.REPASO.filter(x => x.t === card_.t), j = tm.indexOf(card_);
    title = card_.title; line = `${TOPICS[card_.t].n} · ${TOPICS[card_.t].name} · ficha ${j + 1} de ${tm.length}`;
    seg = `<div class="hseg" style="--c:var(--${card_.t})">${tm.map(x => `<i class="${x === card_ ? `c` : S.x.seen[hash(x.title)] ? `d` : ``}"></i>`).join(``)}</div>`;
    const ts = (L.sel || []).filter(x => TORDER.includes(x));
    const cs = S.x.chk && S.x.chk[hash(card_.title)], cp = enCurso(cs) ? chkProg(cs) : null;
    if (cp) line += ` · ibas en la pregunta ${cp.n} de ${cp.tot}`;
    go_ = () => { if (ts.length) S.sel = new Set(ts); S.x.rall = false; const k = selKey(), j = filt(ALL.REPASO).findIndex(x => x.title === card_.title); if (j >= 0) S.x.rpos[k] = j; if (cp){ S.x.rtabFor = hash(card_.title); S.x.rtab = `comp`; } go(`repaso`); };
  } else if (L && L.mode){
    const ts = (L.sel || []).filter(x => TORDER.includes(x)); if (ts.length) t = ts[ts.length - 1];
    title = ts.length === 1 ? `${TOPICS[t].n} · ${TOPICS[t].name}` : ts.length ? `${ts.length} temas: ${ts.map(x => x.slice(1)).join(`, `)}` : `Química`;
    line = `${secOf(L.mode).n} · ${modeName(L.mode)}`;
    go_ = () => { if (ts.length) S.sel = new Set(ts); go(L.mode); };
  } else { title = t ? `${TOPICS[t].n} · ${TOPICS[t].name}` : `Elige tus temas`; line = `Empieza por el Repaso del tema`; go_ = () => go(`repaso`); }
  if (!seg && t){ const all = ALL.REPASO.filter(x => sel.includes(x.t)); frac = all.length ? all.filter(x => S.x.seen[hash(x.title)]).length / all.length : 0; seg = `<div class="bar"><i style="width:${Math.round(frac * 100)}%"></i></div>`; }
  h.innerHTML = `<div class="k">${L && L.mode ? `Continúa donde quedaste` : `Para empezar`}</div><h2>${title}</h2><div class="hl">${line}</div>${seg}`;
  const b = btn(card_ ? ((S.x.chk && enCurso(S.x.chk[hash(card_.title)])) ? `Seguir con las preguntas ` : `Seguir leyendo `) : L && L.mode ? `Seguir ` : `Empezar `, `go`, go_); b.innerHTML += icon(`right`); h.append(b);
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
/* ---------- "Comprueba lo que leíste": todas las preguntas de la tarjeta ----------
   Junta, sin repetir, todo lo que corresponde a las páginas de la tarjeta:
   opción múltiple, "¿qué fórmula uso?", fichas, la idea clave y preguntas de desarrollo.
   Se avanza con "Siguiente pregunta" y se reinicia con "Repetir preguntas" sin cambiar de tarjeta. */
const CHK = {};
const normQ = s => String(s || ``).replace(/<[^>]+>/g, ``).toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g, ``).replace(/[^a-z0-9]+/g, ` `).trim();
function distractores(lista, correcta, n, semilla){
  const c = normQ(correcta), vistos = new Set([c]), out = [];
  for (const x of shufR(lista, mulberry(semilla))){ const k = normQ(x); if (!k || vistos.has(k)) continue; vistos.add(k); out.push(x); if (out.length === n) break; }
  return out;
}
/* Cada pregunta se asigna a UNA tarjeta: la de sus páginas; si varias tarjetas comparten
   páginas, la que más se parece en texto. Así no salen preguntas de fichas que aún no se leen. */
const PALABRAS = s => new Set(normQ(s).split(` `).filter(w => w.length > 3));
let ASIG = null;
function asignar(){
  if (ASIG) return ASIG;
  ASIG = new Map();
  const porTema = {};
  ALL.REPASO.forEach(r => (porTema[r.t] = porTema[r.t] || []).push(r));
  const info = {};
  Object.entries(porTema).forEach(([t, cards]) => {
    let acum = 0;
    info[t] = cards.map(c => { const pg = pagesOf(c.src); const mx = pg.size ? Math.max(...pg) : acum; acum = Math.max(acum, mx); return { c, pg, acum, pal: PALABRAS(c.title + ` ` + c.body + ` ` + (c.memo || ``)) }; });
  });
  // porTexto: filas del formulario, que abarcan muchas páginas; cada fila va a la tarjeta que trata ese punto.
  const elegir = (t, src, texto, porTexto) => {
    const L = info[t]; if (!L || !L.length) return null;
    const P = [...pagesOf(src)];
    let cand;
    if (!P.length) cand = L.filter(x => !x.pg.size);
    else {
      cand = L.filter(x => P.every(p => x.pg.has(p)));
      // Si abarca varias tarjetas, sale cuando ya se leyó la última de ellas
      if (!cand.length && porTexto) cand = L.filter(x => P.some(p => x.pg.has(p)));
      if (!cand.length) return (L.find(x => x.acum >= Math.max(...P)) || L[L.length - 1]).c;
    }
    if (!cand.length) return null;
    if (cand.length === 1) return cand[0].c;
    const w = PALABRAS(texto); let best = cand[0], bs = -1;
    cand.forEach(x => { let n = 0; w.forEach(k => { if (x.pal.has(k)) n++; }); const sc = n / Math.sqrt(x.pal.size + 1); if (sc > bs){ bs = sc; best = x; } });
    return best.c;
  };
  const poner = (card, q) => { if (!card) return; if (!ASIG.has(card)) ASIG.set(card, []); ASIG.get(card).push(q); };
  const opts = q => (q.o ? q.o[0] : ``) + ` ` + (q.e || ``) + ` ` + (q.a || ``);
  ALL.MCQ.forEach(q => poner(elegir(q.t, q.src, q.q + ` ` + opts(q)), q));
  ALL.FQ.forEach(q => poner(elegir(q.t, q.src, q.q + ` ` + opts(q)), q));
  ALL.FICHAS.forEach(f => {
    const otros = distractores(ALL.FICHAS.filter(x => x.t === f.t && x !== f).map(x => x.b), f.b, 3, parseInt(hash(f.f), 36) || 1);
    if (otros.length >= 2) poner(elegir(f.t, f.src, f.f + ` ` + f.b), { id:`C` + hash(f.f), t:f.t, src:f.src, q:f.f, o:[f.b, ...otros], e:f.b, gen:1 });
  });
  ALL.FORM.forEach((f, k) => {
    const filas = ALL.FORM.filter(x => x.t === f.t).flatMap(x => x.rows.map(r => r[1]));
    f.rows.forEach((r, j) => {
      const otros = distractores(filas, r[1], 3, 31 * k + j + 7);
      if (otros.length >= 2) poner(elegir(f.t, f.src, r[0] + ` ` + r[1], true), { id:`R` + hash(f.title + r[0]), t:f.t, src:f.src, q:`Formulario · ${f.title}: ¿qué corresponde a <b>${r[0]}</b>?`, o:[r[1], ...otros], e:`${r[0]}: ${r[1]}`, gen:1 });
    });
  });
  ALL.ABIERTAS.forEach(q => poner(elegir(q.t, q.src, q.q + ` ` + (q.a || ``)), q));
  ALL.EJ.forEach(q => poner(elegir(q.t, q.src, [q.q, q.pide, q.r].join(` `)), Object.assign({}, q, { ej:1 })));
  return ASIG;
}
/* Preguntas de UNA tarjeta: idea clave, preguntas escritas para ella y todo lo asignado. */
function propias(it){
  const seed = parseInt(hash(it.title), 36) || 1, out = [];
  if (it.memo){
    const otros = distractores(ALL.REPASO.filter(r => r.t === it.t && r !== it && r.memo).map(r => r.memo), it.memo, 3, seed);
    if (otros.length >= 2) out.push({ id:`K` + hash(it.title), t:it.t, src:it.src, q:`¿Cuál es la idea clave de “${it.title}”?`, o:[it.memo, ...otros], e:`Para memorizar: ${it.memo}`, gen:1 });
  }
  ((typeof CHECK_EXTRA !== `undefined` && CHECK_EXTRA[it.title]) || []).forEach(([q, o, e]) => out.push({ id:`X` + hash(q), t:it.t, src:it.src, q, o, e }));
  out.push(...(asignar().get(it) || []));
  return out.map(q => Object.assign({}, q, { de: it.title }));
}
/* Bloques en orden de lectura: [tarjeta actual, primera tarjeta del tema, segunda, …]. */
function checkBloques(it){
  const vistos = new Set();
  const limpia = l => l.filter(q => { const k = normQ(q.q); if (!k || vistos.has(k)) return false; vistos.add(k); return true; });
  const tema = ALL.REPASO.filter(r => r.t === it.t), pos = tema.indexOf(it);
  const previas = tema.slice(0, Math.max(0, pos));
  const bloques = previas.map(c => ({ c, qs: limpia(propias(c)) }));
  const actual = { c: it, qs: limpia(propias(it)), actual: true };
  return [actual, ...bloques.filter(b => b.qs.length)];
}
function checkPool(it){ return checkBloques(it)[0].qs; }
function ejCheck(q, onDone){
  const c = ejCard(q);
  c.addEventListener(`click`, e => { const b = e.target.closest(`.selfgrade .btn`); if (b) onDone(b.classList.contains(`ok`)); }, true);
  return c;
}
function abiertaCheck(q, onDone){
  const c = card(q); c.append(el(`p`, `q`, q.q));
  c.append(el(`p`, `muted`, `Pregunta de desarrollo: respóndela en voz alta o en tu cuaderno y luego compara.`));
  const row = el(`div`, `btnrow`);
  const ver = btn(`Ver respuesta modelo`, `btn ghost`, () => {
    ver.remove(); c.append(el(`div`, `fb`, `<strong>Respuesta modelo</strong>${q.a}<span class="fbsrc">Repasa: ${q.src}</span>`));
    const self = el(`div`, `btnrow selfgrade`);
    self.append(el(`span`, `muted`, `¿La respondiste bien?`), btn(`Sí`, `btn ok`, () => { record(q, true); self.innerHTML = `<span class="muted">Anotado como correcta.</span>`; onDone(true); }), btn(`No`, `btn ghost`, () => { record(q, false); self.innerHTML = `<span class="muted">Anotado. La verás de nuevo al repetir.</span>`; onDone(false); }));
    c.append(self);
  });
  row.append(ver); c.append(row); return c;
}
/* Ajustes del repaso (son los mismos para todas las fichas) */
function chkAj(){
  const x = S.x;
  return { max: x.chkMax == null ? 20 : x.chkMax, fallo: x.chkFallo !== false, final: x.chkFinal !== false, excl: (x.chkExcl = x.chkExcl || {}) };
}
function enCurso(st){ return !!st && st.fase !== `fin` && (Object.keys(st.res || {}).length > 0 || st.i > 0 || st.fase !== `a`); }
function chkProg(st){ if (!st) return null; const tot = (st.a || []).length + (st.b || []).length, resp = Object.keys(st.res || {}).length; const n = st.fase === `a` ? st.i + 1 : (st.a || []).length + (st.fase === `b` ? st.i + 1 : 0); return { tot, resp, n:Math.min(tot, Math.max(1, n)) }; }
function dominio(qs){ let ok = 0, n = 0; qs.forEach(q => { const v = S.st[q.id]; if (v){ ok += v[0]; n += v[0] + v[1]; } }); return n ? ok / n : null; }
function checkBox(it){
  const bloques = checkBloques(it);
  const propia = bloques[0].qs, previas = bloques.slice(1);
  if (!propia.length && !previas.length) return null;
  const key = hash(it.title);
  const correcta = q => S.st[q.id] && S.st[q.id][0];
  const ordenar = lista => shuf(lista.filter(q => !correcta(q))).concat(shuf(lista.filter(correcta)));
  const activas = () => { const aj = chkAj(); return previas.filter(b => !aj.excl[hash(b.c.title)]); };
  const repasoDisp = () => activas().reduce((n, b) => n + b.qs.length, 0);
  const cuantoRep = () => { const aj = chkAj(), d = repasoDisp(); return aj.max === `todas` ? d : Math.min(aj.max, d); };
  // Reparte el repaso entre las fichas elegidas; con "más de lo que fallo", las de menos aciertos reciben más
  const elegirRepaso = () => {
    const aj = chkAj(), n = cuantoRep(), L = activas();
    const colas = L.map(b => ordenar(b.qs)), toma = L.map(() => 0);
    const peso = L.map(b => { if (!aj.fallo) return 1; const d = dominio(b.qs); return d == null ? 0.8 : 1.15 - d; });
    const sel = new Set();
    while (sel.size < n){
      let best = -1, bv = -1;
      colas.forEach((c, k) => { if (!c.length) return; const v = peso[k] / (toma[k] + 1); if (v > bv){ bv = v; best = k; } });
      if (best < 0) break; sel.add(colas[best].shift().id); toma[best]++;
    }
    // En el orden en que se leyeron las fichas
    return L.flatMap(b => b.qs.filter(q => sel.has(q.id))).map(q => q.id);
  };
  const porId = Object.fromEntries(bloques.flatMap(b => b.qs).map(q => [q.id, q]));
  const firma = () => JSON.stringify(chkAj()) + `|` + propia.length + `|` + repasoDisp();
  const nuevo = () => {
    const aj = chkAj(), a = ordenar(propia).map(q => q.id), r = elegirRepaso();
    const mezcla = !aj.final && r.length;
    S.x.chk[key] = { f: firma(), a: mezcla ? shuf(a.concat(r)) : a, b: mezcla ? [] : r, fase: `a`, i: 0, res: {}, mezcla, t: Date.now() }; save(); return S.x.chk[key];
  };
  // El avance se guarda (y se sincroniza): se puede seguir en otro dispositivo
  S.x.chk = S.x.chk || {};
  let st = S.x.chk[key];
  if (st){ const ok = id => id in porId; st.a = (st.a || []).filter(ok); st.b = (st.b || []).filter(ok); st.res = st.res || {}; if (!st.a.length && !st.b.length) st = null; }
  if (!st) st = nuevo();
  const persist = () => { st.t = Date.now(); S.x.chk[key] = st; save(); };
  let preguntar = enCurso(st);
  const sec = el(`section`, `check`);
  const cuenta = ids => { const r = ids.filter(id => id in st.res); return { bien: r.filter(id => st.res[id]).length, resp: r.length, mal: r.filter(id => st.res[id] === false) }; };
  const subir = () => sec.scrollIntoView({ block: `nearest`, behavior: `smooth` });
  const ajustes = () => openSheet(`Ajustes del repaso`, cuerpoAjustes);
  function cuerpoAjustes(box){
    const aj = chkAj();
    box.append(el(`p`, `muted chkajnota`, `Las <b>${propia.length}</b> preguntas de la ficha estudiada salen siempre.`));
    if (!previas.length){ box.append(el(`p`, `chkajnota`, `Esta es la primera ficha del tema: todavía no hay fichas anteriores para repasar.`)); }
    else {
      const s1 = el(`div`, `chkaj`); s1.append(el(`b`, ``, `Preguntas de repaso (máximo)`));
      const chips = el(`div`, `chkmodo`); const disp = repasoDisp();
      [0, 10, 20, 30, 50, `todas`].filter(o => o === `todas` || o === 0 || o < disp).forEach(o => {
        const on = aj.max === o || (o === `todas` && typeof aj.max === `number` && aj.max > 0 && aj.max >= disp);
        const b = btn(o === 0 ? `Ninguna` : o === `todas` ? `Todas (${disp})` : `${o}`, on ? `on` : ``, () => { S.x.chkMax = o; save(); drawSheet(); });
        b.setAttribute(`aria-pressed`, on); chips.append(b); });
      s1.append(chips); box.append(s1);
      const sw = (tit, sub, val, fn) => { const r = el(`div`, `chkaj row`); const t = el(`div`); t.append(el(`b`, ``, tit), el(`div`, `xs muted`, sub));
        const b = btn(``, `sw` + (val ? ` on` : ``), fn); b.setAttribute(`role`, `switch`); b.setAttribute(`aria-checked`, val); b.setAttribute(`aria-label`, tit); r.append(t, b); return r; };
      box.append(sw(`Más preguntas de lo que fallo`, `Las fichas con menos aciertos reciben más`, aj.fallo, () => { S.x.chkFallo = !aj.fallo; save(); drawSheet(); }));
      box.append(sw(`Repaso al final`, aj.final ? `Primero la ficha nueva, luego el repaso` : `Apagado: el repaso se mezcla con la ficha nueva`, aj.final, () => { S.x.chkFinal = !aj.final; save(); drawSheet(); }));
      const s3 = el(`div`, `chkaj`); const h = el(`div`, `row`); h.append(el(`b`, ``, `Fichas que entran al repaso`), el(`span`, `xs muted`, `aciertos`)); s3.append(h);
      previas.forEach(b => { const k = hash(b.c.title), on = !aj.excl[k], d = dominio(b.qs);
        const r = btn(``, `chkfl`, () => { if (on) S.x.chkExcl[k] = 1; else delete S.x.chkExcl[k]; save(); drawSheet(); });
        r.setAttribute(`aria-pressed`, on);
        const col = d == null ? `var(--muted)` : d >= .7 ? `var(--ok)` : d >= .5 ? `var(--t20)` : `var(--bad)`;
        r.innerHTML = `<span class="ck">${on ? `✓` : ``}</span><span class="nm">${b.c.title}</span><span class="pc" style="color:${col}">${d == null ? `—` : Math.round(d * 100) + `%`}</span>`;
        s3.append(r); });
      box.append(s3);
    }
    box.append(btn(`Listo · ${propia.length}${previas.length ? ` + ${cuantoRep()}` : ``} preguntas`, `btn acc chklisto`, () => { closeSheet(); aplicarAjustes(); draw(); }));
  }
  // Al cambiar ajustes se conserva lo respondido de la ficha nueva; solo se rehace el repaso
  function aplicarAjustes(){
    if (st.f === firma()) return;
    const aj = chkAj(), mezcla = !aj.final && cuantoRep() > 0;
    if (mezcla || st.mezcla){ st = nuevo(); return; }
    st.b.forEach(id => delete st.res[id]); st.b = elegirRepaso(); st.f = firma();
    if (st.fase === `b` || st.fase === `fin`){ st.fase = `pausa`; st.i = 0; }
    if (st.fase === `pausa` && !st.b.length) st.fase = `fin`;
    persist();
  }
  function pasos(){
    const conRep = st.mezcla || st.b.length;
    const P = st.mezcla ? [[`a`, `Preguntas`], [`fin`, `Resultado`]] : conRep ? [[`a`, `Ficha nueva`], [`b`, `Repaso`], [`fin`, `Resultado`]] : [[`a`, `Ficha nueva`], [`fin`, `Resultado`]];
    const orden = P.map(x => x[0]), cur = st.fase === `pausa` ? `b` : st.fase, ci = orden.indexOf(cur);
    const w = el(`div`, `chkpasos`);
    P.forEach(([k, t], j) => { if (j) w.append(el(`span`, `ln` + (j <= ci ? ` on` : ``)));
      w.append(el(`span`, `s` + (j < ci ? ` done` : j === ci ? ` cur` : ``), `<b>${j < ci ? `✓` : j + 1}</b>${t}`)); });
    return w;
  }
  function draw(){
    aplicarAjustes();
    sec.innerHTML = ``;
    const head = el(`div`, `chkhead`);
    const g = btn(``, `gear`, ajustes); g.innerHTML = icon(`gear`) + ` Ajustes`; g.setAttribute(`aria-label`, `Ajustes del repaso`);
    head.append(el(`h4`, ``, `Comprueba lo que leíste`), g); sec.append(head, pasos());
    // Si quedó a medias (aquí o en otro dispositivo): seguir, reiniciar o empezar uno nuevo
    if (preguntar && enCurso(st)){
      const pr = chkProg(st), bx = el(`div`, `chkresume`);
      bx.append(el(`b`, ``, st.fase === `pausa` ? `Terminaste la ficha nueva y te falta el repaso` : `Te quedaste en la pregunta ${pr.n} de ${pr.tot}`), el(`span`, ``, `${pr.resp} respondida${pr.resp === 1 ? `` : `s`} · ${Object.values(st.res).filter(Boolean).length} correcta${Object.values(st.res).filter(Boolean).length === 1 ? `` : `s`}`));
      const col = el(`div`, `chkcol`);
      col.append(btn(`Seguir donde quedé`, `btn acc`, () => { preguntar = false; draw(); }));
      col.append(btn(`Reiniciar con las mismas preguntas`, `btn ghost`, () => { st.res = {}; st.i = 0; st.fase = st.a.length ? `a` : `b`; preguntar = false; persist(); draw(); }));
      col.append(btn(`Empezar uno nuevo`, `btn ghost`, () => { st = nuevo(); preguntar = false; draw(); }));
      bx.append(col); sec.append(bx); return;
    }
    preguntar = false;
    if (st.fase === `pausa`){
      const c = cuenta(st.a);
      sec.append(el(`div`, `chkbig`, `<b>${c.bien}</b><span> / ${st.a.length}</span><div>correctas en esta ficha</div>`));
      sec.append(el(`p`, `chkfin`, `Sigue el repaso: <b>${st.b.length} pregunta${st.b.length === 1 ? `` : `s`}</b> de ${new Set(st.b.map(id => porId[id].de)).size} ficha${new Set(st.b.map(id => porId[id].de)).size === 1 ? `` : `s`} anterior${new Set(st.b.map(id => porId[id].de)).size === 1 ? `` : `es`}.`));
      const col = el(`div`, `chkcol`);
      col.append(btn(`Empezar repaso`, `btn acc`, () => { st.fase = `b`; st.i = 0; persist(); draw(); subir(); }));
      if (c.mal.length) col.append(btn(`Repetir las ${c.mal.length} falladas`, `btn ghost`, () => { c.mal.forEach(id => delete st.res[id]); st.a = shuf(c.mal); st.fase = `a`; st.i = 0; persist(); draw(); subir(); }));
      col.append(btn(`Terminar aquí`, `btn link`, () => { st.fase = `fin`; persist(); draw(); subir(); }));
      sec.append(col); return;
    }
    if (st.fase === `fin`){
      const ca = cuenta(st.a), cb = cuenta(st.b);
      sec.append(el(`div`, `chkbig`, `<b>${ca.bien + cb.bien}</b><span> / ${ca.resp + cb.resp}</span><div>correctas${ca.resp + cb.resp < st.a.length + st.b.length ? ` (${st.a.length + st.b.length - ca.resp - cb.resp} sin responder)` : ``}</div>`));
      if (st.b.length) sec.append(el(`p`, `chkfin`, `Ficha nueva: <b>${ca.bien} de ${ca.resp}</b> · Repaso: <b>${cb.bien} de ${cb.resp}</b>`));
      const mal = ca.mal.concat(cb.mal);
      const col = el(`div`, `chkcol`);
      col.append(btn(`Repetir preguntas`, `btn acc`, () => { st = nuevo(); persist(); draw(); subir(); }));
      if (mal.length) col.append(btn(`Repetir solo las falladas (${mal.length})`, `btn ghost`, () => { mal.forEach(id => delete st.res[id]); st.a = shuf(ca.mal); st.b = shuf(cb.mal); st.fase = st.a.length ? `a` : `b`; st.i = 0; persist(); draw(); subir(); }));
      sec.append(col); return;
    }
    const lista = st.fase === `a` ? st.a : st.b;
    if (!lista.length){ st.fase = st.fase === `a` && st.b.length ? `pausa` : `fin`; persist(); return draw(); }
    const c = cuenta(lista);
    const cnt = el(`div`, `row chkcnt`); cnt.append(el(`span`, ``, `Pregunta <b>${st.i + 1}</b> de ${lista.length}`), el(`span`, ``, `${c.bien} correcta${c.bien === 1 ? `` : `s`}`)); sec.append(cnt);
    sec.append(el(`div`, `chkbar`, `<i style="width:${Math.round(st.i / lista.length * 100)}%"></i>`));
    const q = porId[lista[st.i]];
    const ultima = st.i === lista.length - 1;
    const sigTxt = () => ultima ? (st.fase === `a` && st.b.length ? `Continuar` : `Ver resultado`) : `Siguiente pregunta`;
    sec.append(el(`p`, `chkde` + (q.de === it.title ? ` nueva` : ``), q.de === it.title ? `De esta ficha` : `Repaso · ${q.de}`));
    const alResponder = ok => { st.res[q.id] = ok; S.st[`R_` + key] = (S.st[`R_` + key] || 0) + 1; persist(); sig.textContent = sigTxt(); sig.classList.add(`acc`); sig.classList.remove(`ghost`); };
    sec.append(q.ej ? ejCheck(q, alResponder) : q.o ? mcqCard(q, alResponder) : abiertaCheck(q, alResponder));
    if (q.id[0] === `R`) sec.append(el(`p`, `chknota`, `<b>Nota:</b> esta pregunta sale del formulario de resumen del tema, por eso la fuente dice ${q.src.replace(/^Tema \d+,\s*/, ``)}. La respuesta correcta es de ${q.de === it.title ? `esta ficha` : `la ficha «${q.de}»`}; las otras opciones son filas del mismo formulario y pueden ser de fichas que aún no has leído.`));
    const nav = el(`div`, `chknav`);
    const rep = btn(``, `btn ghost`, () => { st = nuevo(); persist(); draw(); subir(); }); rep.innerHTML = icon(`redo`) + ` Repetir`;
    const sig = btn(q.id in st.res ? sigTxt() : (ultima ? sigTxt() : `Saltar pregunta`), `btn` + (q.id in st.res ? ` acc` : ` ghost`), () => {
      if (!ultima){ st.i++; persist(); return draw(); }
      st.i = 0; st.fase = st.fase === `a` && st.b.length ? `pausa` : `fin`; persist(); draw(); subir(); });
    nav.append(rep, sig); sec.append(nav);
  }
  draw();
  return sec;
}
/* ---------- Leer con el dibujo a la vista: al lado, fijo arriba o en ventana flotante que se mueve ---------- */
function leerConDibujo(it, fig, rehacer){
  const z = +S.x.zoom || 1, libre = (innerWidth - 92 - (S.x.panelOff ? 58 : 330)) / z;
  const libro = !!S.x.lect && bp() !== `phone` && innerWidth / z >= 820;   // pantalla completa en PC: libro abierto
  const phone = !libro && (bp() === `phone` || libre < 820), mode = libro ? `lado` : (S.x.figMode || `lado`), min = !!S.x.figMin && mode !== `lado`;
  document.querySelectorAll(`body > .rfig.flt`).forEach(x => x.remove());
  const w = el(`div`, `rlc m-${mode}` + (phone ? ` ph` : ``) + (libro ? ` libro` : ``));
  const txt = el(`div`, `reptext rleer`, it.body);
  const box = el(`div`, `rfig` + (min ? ` min` : ``)); box.setAttribute(`role`, `region`); box.setAttribute(`aria-label`, `Dibujo de la ficha`);
  const bar = el(`div`, `rfigbar`);
  const lab = el(`span`, `rfigl`, mode === `flota` ? `⠿ Dibujo` : `Dibujo`); if (mode === `flota`) lab.title = `Arrastra desde aquí para moverlo`;
  const ctl = el(`div`, `rfigc`);
  const b = (txt_, t, f, on) => { const x = btn(txt_, on ? `on` : ``, f); x.title = t; x.setAttribute(`aria-label`, t); if (on != null) x.setAttribute(`aria-pressed`, !!on); ctl.append(x); return x; };
  const set = k => { S.x.figMode = k; S.x.figMin = false; save(); rehacer(); };
  if (!libro){
    b(`◧`, phone ? `Junto al texto` : `Al lado del texto`, () => set(`lado`), mode === `lado`);
    b(`📌`, `Fijar arriba mientras lees`, () => set(`fijo`), mode === `fijo`);
    b(`⧉`, `Ventana flotante que puedes mover`, () => set(`flota`), mode === `flota`);
  }
  if (mode === `flota`){
    const sz = d => { const p = S.x.figPos || {}; p.w = Math.max(200, Math.min(innerWidth - 16, (p.w || 340) + d)); S.x.figPos = p; save(); box.style.width = `${p.w}px`; clamp(); };
    b(`−`, `Más pequeño`, () => sz(-80)); b(`+`, `Más grande`, () => sz(80));
  }
  if (mode !== `lado`) b(min ? `▾` : `▴`, min ? `Mostrar el dibujo` : `Minimizar el dibujo`, () => { S.x.figMin = !min; save(); rehacer(); });
  { const lz = btn(`🔍`, ``, () => lupa(fig)); lz.title = `Ver el dibujo en grande`; lz.setAttribute(`aria-label`, lz.title); ctl.prepend(lz); }
  bar.append(lab, ctl); box.append(bar, fig);
  w.append(box, txt);
  // la ventana flotante vive fuera del contenido para que el tamaño de letra no la desplace
  if (mode === `flota`){ box.classList.add(`flt`); document.body.append(box); }
  // fijo y "al lado" quedan debajo de la barra de secciones, que también es fija
  requestAnimationFrame(() => { const sw = document.querySelector(S.x.lect ? `.lbar` : `.subw`); const h = sw && getComputedStyle(sw).position === `sticky` ? Math.round(sw.getBoundingClientRect().height) : 0; w.style.setProperty(`--stk`, `${h}px`); });
  // ventana flotante: se arrastra desde la barra y recuerda dónde la dejaste
  function clamp(){ const r = box.getBoundingClientRect(), p = S.x.figPos || {}; let x = Math.max(8, Math.min(innerWidth - r.width - 8, p.x)), y = Math.max(8, Math.min(innerHeight - Math.min(r.height, 120) - 8, p.y)); p.x = x; p.y = y; box.style.left = `${x}px`; box.style.top = `${y}px`; }
  if (mode === `flota`){
    const p = S.x.figPos = S.x.figPos || {}; if (!p.w) p.w = phone ? Math.min(300, innerWidth - 24) : 380;
    if (p.x == null){ p.x = innerWidth - p.w - (phone ? 12 : 360); p.y = phone ? innerHeight - 380 : 150; }
    box.style.width = `${p.w}px`; requestAnimationFrame(clamp);
    bar.addEventListener(`pointerdown`, ev => {
      if (ev.target.closest(`button`)) return; ev.preventDefault(); bar.setPointerCapture(ev.pointerId);
      const r0 = box.getBoundingClientRect(), dx = ev.clientX - r0.left, dy = ev.clientY - r0.top; box.classList.add(`drag`);
      const mv = e => { p.x = e.clientX - dx; p.y = e.clientY - dy; clamp(); };
      const up = () => { bar.removeEventListener(`pointermove`, mv); bar.removeEventListener(`pointerup`, up); bar.removeEventListener(`pointercancel`, up); box.classList.remove(`drag`); save(); };
      bar.addEventListener(`pointermove`, mv); bar.addEventListener(`pointerup`, up); bar.addEventListener(`pointercancel`, up);
    });
    // tirador para cambiar el tamaño
    const rz = el(`span`, `rfigrz`); rz.setAttribute(`aria-hidden`, `true`); box.append(rz);
    rz.addEventListener(`pointerdown`, ev => { ev.preventDefault(); rz.setPointerCapture(ev.pointerId); const w0 = box.getBoundingClientRect().width, x0 = ev.clientX;
      const mv = e => { p.w = Math.max(200, Math.min(innerWidth - 16, w0 + e.clientX - x0)); box.style.width = `${p.w}px`; };
      const up = () => { rz.removeEventListener(`pointermove`, mv); rz.removeEventListener(`pointerup`, up); clamp(); save(); };
      rz.addEventListener(`pointermove`, mv); rz.addEventListener(`pointerup`, up); });
    if (window._figRz) removeEventListener(`resize`, window._figRz); window._figRz = () => box.isConnected && clamp(); addEventListener(`resize`, window._figRz, { passive:true });
  }
  return w;
}
function repCard(it){ const c = card(it, `rep`); c.append(el(`h3`, ``, it.title)); { const eb = errBanner(it); if (eb) c.append(eb); } const body = el(`div`, `repbody`); body.append(el(`div`, `reptext`, it.body)); const f = it.fig && figure(it.fig); if (f) body.append(f); c.append(body); if (it.memo) c.append(el(`p`, `memo`, `<b>Para memorizar:</b> ${it.memo}`)); const vids = VIDEOS.filter(x => x.rep.includes(it.title)); if (vids.length) c.append(vidLinks(vids)); return c; }
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
  if (S.x.rall){
    const bar = el(`div`, `deckbar`);
    intro(v, `Todas las tarjetas seguidas. Lee, mira el dibujo y tapa "Para memorizar" para comprobar si lo recuerdas.`);
    bar.append(btn(`Ver una por una`, `btn ghost`, () => { S.x.rall = false; save(); renderView(); renderPanel(); })); v.append(bar);
    const l = el(`div`, `list`); all.forEach(it => { l.append(repCard(it)); S.x.seen[hash(it.title)] = 1; }); v.append(l); save(); return;
  }
  if (!all.length){ v.append(el(`p`, `muted`, `Elige uno o más temas para ver su Repaso.`)); return; }
  const key = selKey(); let i = Math.min(S.x.rpos[key] || 0, all.length - 1); if (i < 0) i = 0; S.x.rpos[key] = i;
  const it = all[i], th = hash(it.title);
  const tema = all.filter(x => x.t === it.t), ti = tema.indexOf(it);
  const jump = j => { S.x.rpos[key] = Math.max(0, Math.min(all.length - 1, j)); save(); renderView(); renderPanel(); topScroll(); };
  const move = d => jump(i + d);
  // Arriba: tema, herramientas y cuadritos de fichas
  const top = el(`div`, `rtop`);
  const lb = el(`div`, `rtema`); lb.style.setProperty(`--c`, `var(--${it.t})`); lb.innerHTML = `<i></i>${TOPICS[it.t].n} · ${TOPICS[it.t].name}`;
  const tools = el(`div`, `deckbar rtools`);
  if (bp() !== `wide`){ const ix = btn(``, `btn ghost`, () => openSheet(`Índice del repaso`, tocInto)); ix.innerHTML = icon(`list`) + ` Índice`; tools.append(ix); }
  const nErr = errCount(it.t); if (nErr){ const eb = btn(`⚠ Correcciones · ${nErr}`, `btn ghost errbtn`, () => errPanel(it.t, it.title)); eb.title = `Errores del material del ${TOPICS[it.t].n} y cómo se corrigieron`; tools.prepend(eb); }
  errJump = x => { const j = all.indexOf(x); if (j >= 0) jump(j); };
  tools.append(btn(`Ver todas`, `btn ghost`, () => { S.x.rall = true; save(); renderView(); renderPanel(); }));
  top.append(lb, tools); v.append(top);
  const sq = el(`nav`, `rsq`); sq.setAttribute(`aria-label`, `Fichas del ${TOPICS[it.t].n}`); sq.style.setProperty(`--c`, `var(--${it.t})`);
  tema.forEach((x, j) => { const b = btn(String(j + 1), (S.x.seen[hash(x.title)] ? `ok` : ``) + (x === it ? ` cur` : ``), () => jump(all.indexOf(x)));
    b.title = x.title; b.setAttribute(`aria-label`, `Ficha ${j + 1}: ${x.title}`); if (x === it) b.setAttribute(`aria-current`, `true`); if (ERRATA[x.title]){ b.classList.add(`errdot`); b.setAttribute(`aria-label`, `Ficha ${j + 1}: ${x.title} (tiene corrección del material)`); } sq.append(b); });
  v.append(sq); requestAnimationFrame(() => { const c = sq.querySelector(`.cur`); if (c && sq.scrollWidth > sq.clientWidth) sq.scrollLeft = c.offsetLeft - sq.clientWidth / 2 + c.offsetWidth / 2; });
  v.append(el(`h2`, `rtit`, it.title));
  v.append(el(`p`, `rsub`, `Ficha ${ti + 1} de ${tema.length} · Fuente: ${it.src}${all.length > tema.length ? ` · tarjeta ${i + 1} de ${all.length}` : ``}`));
  { const eb = errBanner(it); if (eb) v.append(eb); }
  const _was = S.x.seen[th]; S.x.seen[th] = 1; motSeen(all, it, _was); S.x.last = { mode:`repaso`, sel:selList(), i, n:all.length, title:it.title, t:Date.now() };
  // Pestañas de la ficha
  const fig = it.fig && figure(it.fig), vids = VIDEOS.filter(x => x.rep.includes(it.title));
  const nChk = (() => { const bl = checkBloques(it); return bl[0].qs.length; })();
  const cst = S.x.chk && S.x.chk[th], cpr = enCurso(cst) ? chkProg(cst) : null;
  const ck = checkBox(it);
  const TABS = [[`leer`, `Leer`], [`memo`, `Memorizar`]]; if (ck) TABS.push([`comp`, cpr ? `Comprobar · ${cpr.n}/${cpr.tot}` : `Comprobar · ${nChk}`]); if (vids.length) TABS.push([`video`, `Video`]);
  const apun = typeof cnPagesFor === `function` ? cnPagesFor(it.t) : []; TABS.push([`apuntes`, apun.length ? `Mis apuntes · ${apun.length}` : `Mis apuntes`]);
  if (S.x.rtabFor !== th){ S.x.rtabFor = th; S.x.rtab = `leer`; }
  if (!TABS.some(t => t[0] === S.x.rtab)) S.x.rtab = `leer`;
  const tabs = el(`div`, `rtabs`); tabs.setAttribute(`role`, `tablist`);
  const panel = el(`div`, `rpanel`); panel.setAttribute(`role`, `tabpanel`);
  const dock = el(`div`, `decknav rdock`);
  function pinta(){
    if (typeof cnFlush === `function`) cnFlush();
    const t = S.x.rtab; tabs.innerHTML = ``; panel.innerHTML = ``;
    TABS.forEach(([k, n]) => { const b = btn(n, k === `comp` ? `k` : ``, () => { S.x.rtab = k; save(); pinta(); if (tabs.getBoundingClientRect().top < 0) tabs.scrollIntoView({ block:`start`, behavior:`smooth` }); });
      b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, t === k); tabs.append(b); });
    if (t === `leer`){
      panel.append(fig ? leerConDibujo(it, fig, pinta) : el(`div`, `reptext rleer`, it.body));
      const más = el(`div`, `rmas`);
      if (it.memo) más.append(btn(`Memorizar →`, `linkbtn`, () => { S.x.rtab = `memo`; pinta(); }));
      if (más.children.length) panel.append(más);
    } else if (t === `dibujo`) panel.append(fig);
    else if (t === `memo`) panel.append(memoTab(it)); else if (t === `comp`) panel.append(ck);
    else if (t === `video`) panel.append(videoTab(it, vids, pinta));
    else if (t === `apuntes`) panel.append(apuntesTab(it, pinta));
    // Barra fija: anterior · acción central · siguiente
    dock.innerHTML = ``;
    const last = i === all.length - 1;
    const prev = btn(``, `btn ghost`, () => move(-1)); prev.dataset.nav = `prev`; prev.innerHTML = icon(`left`) + `<span class="rl">Anterior</span>`; prev.disabled = i === 0; prev.setAttribute(`aria-label`, `Ficha anterior`);
    const mid = t === `comp` ? btn(`Volver a leer la ficha`, `btn ghost rmid`, () => { S.x.rtab = `leer`; pinta(); topScroll(); })
      : ck ? btn(cpr ? `Seguir comprobando · ${cpr.n} de ${cpr.tot}` : `Comprobar lo leído · ${nChk}`, `btn acc rmid`, () => { S.x.rtab = `comp`; save(); pinta(); tabs.scrollIntoView({ block:`start`, behavior:`smooth` }); })
      : btn(last ? `Ir a Fichas` : `Siguiente ficha`, `btn acc rmid`, () => last ? go(`fichas`) : move(1));
    const next = btn(``, t === `comp` ? `btn acc` : `btn ghost`, () => last ? go(`fichas`) : move(1)); next.dataset.nav = `next`; next.innerHTML = `<span class="rl">${last ? `Ir a Fichas` : `Siguiente`}</span>` + icon(`right`); next.setAttribute(`aria-label`, last ? `Ir a Fichas` : `Ficha siguiente`);
    dock.append(prev, mid, next);
    if (typeof dockEnhance === `function`) dockEnhance(dock);
  }
  pinta();
  v.append(tabs, panel, dock);
  save();
}
function vImpreso(v){ v.append(examBuilder(filt(ALL.MCQ))); }

/* ======================= RENDER GENERAL ======================= */
function renderAll(){
  applyTheme();
  const pal = S.x.pal; if (pal && pal !== `menta`) document.documentElement.setAttribute(`data-pal`, pal); else document.documentElement.removeAttribute(`data-pal`);
  renderRail(); renderBnav(); renderHead(); renderSub(); renderView(); renderPanel(); if (SH && SH.live) drawSheet(); pomoRefresh();
}

const PALS = [[`menta`,`Menta`,`#2E7D6B`,`#7CC9B5`,`Verde agua, tranquilo`],[`oceano`,`Océano`,`#2766A8`,`#8DBBE8`,`Azul sereno`],[`lavanda`,`Lavanda`,`#5B57C2`,`#ABA8F2`,`Violeta suave`],[`durazno`,`Durazno`,`#B5562F`,`#F2AA86`,`Cálido`],[`frambuesa`,`Frambuesa`,`#B03A64`,`#F09AB8`,`Rosa intenso, alegre`]];
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
const BACKUP_KEYS = [KEY, `parcialM4_vids`, `parcialM4_dudas`, PACK_KEY, `quimica_cuaderno`];
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
  const pc = typeof pushCard === `function` ? pushCard() : null; if (pc) box.append(pc);
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

/* ===================== RETROALIMENTACIÓN: DATOS HISTÓRICOS =====================
   Fuente: fotos de las evaluaciones de Gaby (Parcial 1 y 2, cortos de laboratorio y discusión).
   Lectura de marcas del docente: "—" = correcta, "+" = incorrecta. Las notas se verifican por suma.
   Las claves de las preguntas falladas se dedujeron por química cuando el docente no publicó clave:
   cada una lleva su nivel de confianza (alta / media / sin confirmar). */

const RF_TEMAS = {
  atomo:{ n:`Átomo, isótopos y mol`, t:null },
  conf:{ n:`Configuración electrónica`, t:null },
  tabla:{ n:`Tabla periódica`, t:null },
  enlace:{ n:`Enlace químico y Lewis`, t:null },
  inter:{ n:`Fuerzas intermoleculares`, t:null },
  esteq:{ n:`Estequiometría y balanceo`, t:null },
  termo:{ n:`Cinética, termodinámica y enzimas`, t:null },
  sol:{ n:`Soluciones y solubilidad`, t:`t15` },
  conc:{ n:`Unidades de concentración`, t:`t16` },
  dil:{ n:`Dilución y coligativas`, t:`t17` },
  acb:{ n:`Ácidos y bases`, t:`t18` },
  ph:{ n:`pH y pOH`, t:`t20` },
  buf:{ n:`Buffers`, t:`t21` },
  lab:{ n:`Laboratorio práctico`, t:null }
};

const RF_EVALS = [
  { id:`dis1`, n:`Corto de discusión 1`, corto:`Discusión 1`, f:`2026-09-07`, tipo:`Corto`, nq:10, pts:10, dur:`—`, nota:5.0, tem:`Conceptos generales, tabla periódica y enlace` },
  { id:`lab1`, n:`Corto de laboratorio 1`, corto:`Lab 1`, f:`2026-09-09`, tipo:`Corto`, nq:10, pts:10, dur:`—`, nota:3.0, tem:`Tabla periódica y enlace químico` },
  { id:`p1`, n:`Primer examen parcial`, corto:`Parcial 1`, f:`2026-09-25`, tipo:`Parcial`, nq:50, pts:50, dur:`2 horas`, nota:6.4, tem:`Unidades 1 a 3` },
  { id:`lab2b`, n:`Corto de laboratorio 2: disoluciones, ácidos y bases`, corto:`Lab 2 (ác./bases)`, f:`2026-10-09`, tipo:`Corto`, nq:10, pts:10, dur:`—`, nota:7.5, tem:`Disoluciones, ácidos y bases` },
  { id:`p2`, n:`Segundo examen parcial`, corto:`Parcial 2`, f:`2026-10-16`, tipo:`Parcial`, nq:30, pts:30, dur:`1 hora`, nota:6.0, tem:`Unidades 4 y 5` },
  { id:`lab2`, n:`Corto de laboratorio 2`, corto:`Lab 2`, f:null, fTxt:`14-?-26`, tipo:`Corto`, nq:10, pts:10, dur:`—`, nota:3.0, tem:`Disoluciones, ácidos y bases` }
];

/* Cada fila: n tema nivel respuesta clave   (nivel: r recuerdo · c comprensión · a aplicación; clave ? = sin confirmar) */
const RF_SPEC_P1 = `1 atomo r C C|2 atomo r B B|3 atomo r C C|4 atomo c C C|5 atomo r B B|6 atomo r C C|7 atomo r A A|8 atomo r D D|9 atomo a D B|10 conf r C C|11 conf a B B|12 conf a B B|13 tabla r C C|14 tabla c B B|15 tabla c A A|16 tabla r C C|17 tabla c D A|18 tabla r B B|19 enlace a D D|20 enlace c C B|21 enlace r B C|22 enlace c A C|23 enlace c A A|24 enlace r A ?|25 enlace a A B|26 enlace a B B|27 inter c B D|28 inter c A A|29 inter c A B|30 inter r A C|31 inter r D D|32 inter c B B|33 inter r B C|34 esteq r B D|35 termo r C C|36 esteq c A A|37 esteq r B B|38 esteq r A C|39 termo a B B|40 termo c C C|41 termo a A B|42 termo c A A|43 termo c A B|44 termo c C D|45 termo c D B`;
const RF_SPEC_P2 = `1 dil r C C|2 sol c A A|3 sol c B B|4 dil c A B|5 dil a C C|6 dil c B D|7 conc c D C|8 buf r A B|9 acb c A C|10 acb r B B|11 ph a B C|12 acb r B B|13 acb r C C|14 acb c B B|15 ph c B B|16 ph a C C|17 acb a B B|18 buf c D B|19 acb c B B|20 buf c D C`;
/* Preguntas de desarrollo o abiertas: n tema nivel puntos */
const RF_SPEC_D = {
  p1:`46 esteq a 1|47 esteq a 1|48 esteq a 1|49 enlace a .5|50 enlace a .5`,
  p2:`21 conc c 1|22 dil a 1|23 conc a 1|24 conc a 1|25 conc a 1|26 conc a 0|27 dil a 1|28 ph a 0|29 buf a 0|30 ph a 0`,
  dis1:`1 atomo r 1|2 atomo c 1|3 atomo a 0|4 conf a 0|5 conf a 1|6 tabla c 1|7 enlace c 0|8 enlace a .5|9 enlace a 0|10 enlace a .5`,
  lab1:`1 lab r 1|2 lab r 0|3 lab r 0|4 lab c .5|5 lab c 0|6 lab c 0|7 lab r 0|8 lab c .5|9 lab c 1|10 lab r 0`,
  lab2:`1 sol c 1|2 sol c 0|3 sol c 1|4 conc a 0|5 conc c 0|6 conc a 0|7 dil a 0|8 acb c 0|9 ph c 0|10 buf c 1`,
  lab2b:`1 sol c 1|2 sol c 1|3 sol c 1|4 conc a .5|5 conc a 0|6 lab a 1|7 lab r 1|8 lab r 0|9 lab r 1|10 lab r 1`
};
const RF_HIST = (() => {
  const out = [];
  const obj = (ev, spec) => spec.split(`|`).forEach(s => { const [n, tm, lv, r, k] = s.split(` `); out.push({ ev, n:+n, tipo:`o`, tm, lv, r, k:k === `?` ? null : k, ok:r === k ? 1 : 0 }); });
  obj(`p1`, RF_SPEC_P1); obj(`p2`, RF_SPEC_P2);
  Object.entries(RF_SPEC_D).forEach(([ev, spec]) => spec.split(`|`).forEach(s => { const [n, tm, lv, ok] = s.split(` `); out.push({ ev, n:+n, tipo:ev.startsWith(`p`) ? `p` : `a`, tm, lv, ok:+ok, r:null, k:null }); }));
  return out;
})();

const RF_CAUSAS = {
  inv:{ n:`Inversión de sentido`, e:`↕`, col:`#B45309`,
    def:`Respondes lo contrario de lo correcto: lo que sube lo pones bajando, o intercambias los datos del problema.`,
    senal:`El resultado no pasa la prueba de sentido: una dilución que concentra, 1687 mL de stock para preparar 600 mL, un pH de 1.6 para una base.`,
    fix:`Antes de responder dibuja una flecha: ¿esto sube o baja? ¿Este dato es del stock o de la solución final? Al terminar, compara el resultado con el dato inicial.` },
  conf:{ n:`Conceptos o especies parecidas`, e:`≈`, col:`#7C3AED`,
    def:`Mezclas dos ideas que suenan o se escriben parecido: iónico y covalente, Z y N, H₂PO₄⁻ y HPO₄²⁻, mol y número de Avogadro.`,
    senal:`Eliges la opción que "suena conocida" y que comparte palabras con la correcta.`,
    fix:`Arma una tabla de dos columnas con la pregunta-llave de cada concepto (¿transfiere o comparte electrones? ¿cuenta protones o neutrones?) y repásala antes de cada examen.` },
  base:{ n:`Concepto sin base sólida`, e:`?`, col:`#DC2626`,
    def:`No tenías claro el mecanismo o la definición, así que elegiste por intuición.`,
    senal:`No puedes explicar el porqué con tus palabras, solo reconoces el término.`,
    fix:`Vuelve a la ficha del tema, explícala en voz alta en 3 frases y haz 5 preguntas del tema hasta acertarlas sin mirar.` },
  proc:{ n:`Procedimiento o fórmula mal aplicada`, e:`ƒ`, col:`#0F766E`,
    def:`Sabes la fórmula pero la aplicas con el dato equivocado o en el orden equivocado.`,
    senal:`Los números "cuadran" visualmente pero las unidades no (usaste gramos donde iban equivalentes).`,
    fix:`Escribe las unidades en cada paso y verifica que se cancelen: g ÷ (g/eq) = eq; eq ÷ L = N.` },
  omi:{ n:`Paso omitido`, e:`⤼`, col:`#2563EB`,
    def:`Hiciste bien casi todo y olvidaste un paso: dividir entre el volumen, multiplicar por los 2 OH⁻.`,
    senal:`El resultado es "casi" correcto y se queda a medio camino.`,
    fix:`Termina con una lista de verificación corta: ¿pasé a litros? ¿multipliqué por el número de H⁺ u OH⁻? ¿respondí lo que pide la pregunta?` },
  tiempo:{ n:`Sin responder o incompleto`, e:`⏱`, col:`#9333EA`,
    def:`Dejaste el problema en blanco o a medias.`,
    senal:`Los últimos ejercicios del examen quedan sin resolver.`,
    fix:`Reparte el tiempo (el Parcial 2 daba 2 minutos por pregunta), resuelve primero lo de plantilla corta y deja siempre el planteamiento escrito.` },
  forma:{ n:`Forma y precisión`, e:`✎`, col:`#BE185D`,
    def:`La idea es correcta pero la respuesta pierde el punto por cómo está escrita: tachadura, respuesta incompleta, redondeo, falta de la magnitud.`,
    senal:`Tu respuesta "casi" dice lo correcto.`,
    fix:`Contesta con la estructura "qué + cómo se calcula + unidad". Evita tachar: piensa en el borrador y pasa en limpio. Redondea, no trunques.` },
  lab:{ n:`Vocabulario y observación de laboratorio`, e:`⚗`, col:`#4D7C0F`,
    def:`No recuerdas el nombre exacto de un instrumento o lo que se observó en una práctica.`,
    senal:`Respondes con un nombre genérico o inviertes un color o un resultado.`,
    fix:`Después de cada práctica haz una tarjeta por experimento: material, qué observaste, por qué. Repásalas antes del corto.` }
};

/* ---------- Fallos con detalle ----------
   obj: o (opciones en orden original), el (la que elegió), cl (la clave, null si no se conoce), conf (confianza de la clave)
   prob/abi: resp (lo que escribió), ref (respuesta modelo), fam (generador de práctica relacionado) */
const RF_FALLOS = [
  /* ---------- Parcial 1 ---------- */
  { id:`p1-9`, ev:`p1`, n:9, tm:`atomo`, tipo:`obj`, q:`Si el peso atómico del flúor es de 19 UMA, ¿a cuántos gramos equivale un mol de este elemento?`,
    o:[`9 gramos`,`19 gramos`,`9.5 gramos`,`6.022 × 10²³`], el:3, cl:1, conf:`alta`, causa:`conf`,
    por:`Eligió el número de Avogadro, que dice cuántas partículas hay en un mol, no cuánto pesa. La masa de un mol en gramos coincide con el peso atómico en UMA: 19 UMA → 19 g/mol.`,
    tip:`Pregúntate qué te piden: ¿partículas o gramos? Gramos → masa molar.` },
  { id:`p1-17`, ev:`p1`, n:17, tm:`tabla`, tipo:`obj`, q:`¿Cuál es el elemento con mayor radio atómico y cuál es el más electronegativo, respectivamente?`,
    o:[`Francio y flúor`,`Hidrógeno y astato`,`Hidrógeno y francio`,`Astato y flúor`], el:3, cl:0, conf:`alta`, causa:`conf`,
    por:`El radio atómico crece hacia abajo y hacia la izquierda de la tabla (el francio es el más grande) y la electronegatividad crece hacia arriba y hacia la derecha (el flúor es el más electronegativo). El astato está abajo, pero a la derecha, así que su radio es menor que el del francio.`,
    tip:`Dos flechas: radio ↙ (abajo-izquierda), electronegatividad ↗ (arriba-derecha).` },
  { id:`p1-20`, ev:`p1`, n:20, tm:`enlace`, tipo:`obj`, q:`En la jerarquía de repulsión en una molécula, ¿entre qué pares hay más distancia (repulsión)?`,
    o:[`Pares enlazantes`,`Pares libres`,`Pares libres y enlazantes`,`Pares múltiples`], el:2, cl:1, conf:`media`, causa:`conf`,
    por:`En la teoría RPECV la repulsión va así: par libre–par libre > par libre–par enlazante > enlazante–enlazante. Los pares libres ocupan más espacio, por eso la mayor repulsión es entre pares libres. El enunciado mezcla "distancia" con "repulsión", lo que lo vuelve ambiguo.`,
    tip:`Orden de repulsión: libre-libre (la mayor) > libre-enlazante > enlazante-enlazante.` },
  { id:`p1-21`, ev:`p1`, n:21, tm:`enlace`, tipo:`obj`, q:`Un compuesto iónico está formado por lo general por:`,
    o:[`Elementos metálicos`,`Elementos no metálicos`,`Elementos metálicos con elementos no metálicos`,`Elementos no metálicos con elementos metaloides`], el:1, cl:2, conf:`alta`, causa:`conf`,
    por:`El enlace iónico se forma por transferencia de electrones: un metal (cede) con un no metal (recibe). Dos no metales comparten electrones y forman un enlace covalente.`,
    tip:`Iónico = metal + no metal. Covalente = no metal + no metal.` },
  { id:`p1-22`, ev:`p1`, n:22, tm:`enlace`, tipo:`obj`, q:`¿Cómo se forma un enlace iónico?`,
    o:[`Se forma una nube de electrones alrededor de los elementos participantes`,`Los átomos de los elementos participantes comparten pares de electrones atraídos por los núcleos`,`Los átomos tienen cargas distintas, lo que hace que se atraigan entre ellos y se mantengan juntos`,`Los pares libres atraen a un átomo cargado positivamente`], el:0, cl:2, conf:`alta`, causa:`conf`,
    por:`La opción A describe el enlace metálico (nube o "mar" de electrones) y la B, el covalente. En el iónico un átomo cede electrones y el otro los recibe; los iones de carga opuesta se atraen.`,
    tip:`Cada opción era la definición de un enlace distinto: asocia nube → metálico, compartir → covalente, cargas opuestas → iónico.` },
  { id:`p1-24`, ev:`p1`, n:24, tm:`enlace`, tipo:`obj`, q:`Una característica de los compuestos iónicos es:`,
    o:[`La mayoría presenta estado gaseoso`,`Son solubles en solventes orgánicos`,`Conducción eléctrica elevada`,`Algunos presentan extrema dureza`], el:0, cl:null, pos:[2,3], conf:`sin`, causa:`conf`,
    por:`La A es falsa: los compuestos iónicos son sólidos cristalinos a temperatura ambiente porque sus iones se atraen con mucha fuerza. De las otras tres, dos son afirmaciones que aparecen en los textos (conducción en solución o fundidos, y dureza con fragilidad). No pude confirmar cuál es la clave del docente: pregúntale cuál marcó.`,
    tip:`Sólidos, puntos de fusión altos, solubles en agua; solo conducen fundidos o disueltos.` },
  { id:`p1-25`, ev:`p1`, n:25, tm:`enlace`, tipo:`obj`, q:`Si se unen dos átomos de dos elementos no metales distintos, ¿qué tipo de enlace se forma?`,
    o:[`Iónico`,`Covalente polar`,`Covalente no polar`,`Metálico`], el:0, cl:1, conf:`alta`, causa:`conf`,
    por:`Dos no metales comparten electrones (covalente). Como son elementos distintos, uno atrae más a los electrones y el enlace es polar. Sería no polar solo entre átomos iguales (como Cl₂).`,
    tip:`Mismo átomo → no polar. Átomos distintos → polar.` },
  { id:`p1-27`, ev:`p1`, n:27, tm:`inter`, tipo:`obj`, q:`Un ejemplo de enlace intramolecular es:`,
    o:[`Enlaces de hidrógeno`,`Enlace dipolo-dipolo`,`Fuerzas de dispersión de London`,`Enlace covalente`], el:1, cl:3, conf:`alta`, causa:`conf`,
    por:`Intramolecular significa dentro de la molécula (iónico, covalente, metálico). Tres de las cuatro opciones son fuerzas intermoleculares, que actúan entre moléculas.`,
    tip:`Intra = dentro (enlace); inter = entre moléculas (fuerzas).` },
  { id:`p1-29`, ev:`p1`, n:29, tm:`inter`, tipo:`obj`, q:`En cuanto a la energía de enlace, ¿cuáles son los más fuertes?`,
    o:[`Covalentes`,`Iónicos`,`Enlaces de hidrógeno`,`Fuerzas de dispersión de London`], el:0, cl:1, conf:`media`, causa:`conf`,
    por:`La A fue marcada incorrecta. Las fuerzas intermoleculares (C y D) son las más débiles; por eliminación la clave más probable es "iónicos". No la tengo confirmada: confírmala con el docente.`,
    tip:`Orden general: enlaces (iónico, covalente) ≫ puente de H > dipolo-dipolo > London.` },
  { id:`p1-30`, ev:`p1`, n:30, tm:`inter`, tipo:`obj`, q:`¿Cuáles son los elementos no metálicos que forman los enlaces de hidrógeno más fuertes con el hidrógeno?`,
    o:[`Carbono, oxígeno y nitrógeno`,`Carbono, oxígeno y cloro`,`Oxígeno, nitrógeno y flúor`,`Carbono, nitrógeno y cloro`], el:0, cl:2, conf:`alta`, causa:`conf`,
    por:`Solo los átomos pequeños y muy electronegativos (F, O y N) forman puentes de hidrógeno fuertes. El carbono casi no se polariza con el hidrógeno y el cloro es demasiado grande.`,
    tip:`FON: flúor, oxígeno, nitrógeno.` },
  { id:`p1-33`, ev:`p1`, n:33, tm:`inter`, tipo:`obj`, q:`Fuerza de Van der Waals que se forma entre moléculas apolares:`,
    o:[`Ión-dipolo`,`Dipolo–dipolo inducido`,`Fuerzas de dispersión`,`Dipolo–dipolo`], el:1, cl:2, conf:`alta`, causa:`conf`,
    por:`Entre moléculas apolares no hay dipolos permanentes; se forman dipolos instantáneos: fuerzas de dispersión de London. El dipolo–dipolo inducido ocurre cuando una molécula polar induce un dipolo en una apolar.`,
    tip:`Apolar con apolar → London (dispersión).` },
  { id:`p1-34`, ev:`p1`, n:34, tm:`esteq`, tipo:`obj`, q:`Es el cálculo de la relación cuantitativa entre reactivos y productos en el transcurso de una reacción química:`,
    o:[`Ecuación química`,`Molaridad`,`Molalidad`,`Estequiometría`], el:1, cl:3, conf:`alta`, causa:`conf`,
    por:`La estequiometría calcula las cantidades de reactivos y productos. La molaridad y la molalidad son unidades de concentración de una solución, no un método de cálculo de reacciones.`,
    tip:`"Relación cuantitativa entre reactivos y productos" = estequiometría.` },
  { id:`p1-38`, ev:`p1`, n:38, tm:`esteq`, tipo:`obj`, q:`¿Cuál es la ley que dice que "la cantidad de átomos de cada elemento debe ser igual del lado de los reactivos y en el de los productos de la reacción química"?`,
    o:[`Ley de conservación de la masa`,`Ley de conservación de la carga`,`Ley de conservación de la materia`], el:0, cl:2, conf:`media`, causa:`conf`,
    por:`La A fue marcada incorrecta y la B no aplica a átomos, así que por eliminación la clave es "conservación de la materia". Las dos leyes están muy relacionadas; el docente usa "materia" cuando habla de átomos en la ecuación. Confírmalo con él.`,
    tip:`Átomos iguales a ambos lados → conservación de la materia (y de la masa).` },
  { id:`p1-41`, ev:`p1`, n:41, tm:`termo`, tipo:`obj`, q:`En un laboratorio se determina que el cambio en la Energía Libre de Gibbs de una reacción tiene un valor negativo (menor a cero). ¿Cómo se clasifica e interpreta esta transformación?`,
    o:[`Reacción endergónica`,`Reacción exergónica`,`Reacción en equilibrio químico`,`Reacción anabólica`], el:0, cl:1, conf:`alta`, causa:`inv`,
    por:`ΔG < 0 significa que la reacción libera energía libre y es espontánea: exergónica. Endergónica es ΔG > 0 (necesita energía). Invirtió el signo.`,
    tip:`ΔG negativo = exergónica (la energía "sale"). ΔG positivo = endergónica.` },
  { id:`p1-43`, ev:`p1`, n:43, tm:`termo`, tipo:`obj`, q:`En la cinética de Michaelis–Menten, ¿cuál es la relación entre la afinidad de una enzima por su sustrato y el valor de la constante de Michaelis–Menten (Km)?`,
    o:[`A mayor afinidad de la enzima por el sustrato, mayor es el valor de Km`,`A mayor afinidad de la enzima por el sustrato, menor es el valor de Km`,`El valor de Km aumenta cuando la velocidad de la reacción alcanza la saturación enzimática`,`La afinidad de la enzima por el sustrato es totalmente independiente del parámetro Km`], el:0, cl:1, conf:`alta`, causa:`inv`,
    por:`Km es la concentración de sustrato a la que la velocidad es la mitad de la máxima. Si la enzima tiene alta afinidad, necesita poco sustrato para llegar a esa mitad: Km bajo. La relación es inversa.`,
    tip:`Afinidad alta ↔ Km bajo. Afinidad baja ↔ Km alto.` },
  { id:`p1-44`, ev:`p1`, n:44, tm:`termo`, tipo:`obj`, q:`¿Cómo afecta una alteración drástica en el pH del medio a la velocidad de una reacción catalizada por enzimas?`,
    o:[`Incrementa exponencialmente la constante de velocidad`,`Aumenta la energía potencial almacenada en los enlaces químicos del sustrato`,`Disminuye la barrera energética de la reacción al saturar el sitio activo`,`Modifica el estado de ionización del sitio activo o causa la desnaturalización de la proteína`], el:2, cl:3, conf:`alta`, causa:`base`,
    por:`Un pH extremo cambia las cargas de los grupos del sitio activo y puede desnaturalizar la proteína, así que la enzima trabaja peor o deja de trabajar. La opción C describe lo que hace una enzima normalmente (bajar la energía de activación), no el efecto del pH.`,
    tip:`pH extremo → cambia la ionización del sitio activo o desnaturaliza → baja la velocidad.` },
  { id:`p1-45`, ev:`p1`, n:45, tm:`termo`, tipo:`obj`, q:`¿Cuál es el paso intermedio fundamental antes de que se libere el producto final y la enzima intacta?`,
    o:[`La desnaturalización reversible de la estructura tridimensional de la enzima`,`La formación reversible del complejo enzima-sustrato`,`La alteración irreversible del estado de ionización del sitio activo`,`El aumento exponencial de la energía de activación por colisión`], el:3, cl:1, conf:`alta`, causa:`conf`,
    por:`En Michaelis–Menten: E + S ⇌ ES → E + P. El paso intermedio es el complejo enzima-sustrato. Las demás opciones describen daños a la enzima o un aumento de la energía de activación, que es lo contrario de lo que hace una enzima.`,
    tip:`E + S ⇌ ES → E + P: el intermedio es el complejo ES.` },
  { id:`p1-49`, ev:`p1`, n:49, tm:`enlace`, tipo:`prob`, q:`Del compuesto MgCl₂ elabore: los símbolos de puntos de Lewis, esquematice la primera ionización, la formación del compuesto y la segunda ionización.`,
    resp:`Escribió "Hg" por Mg, trató al cloro como una unidad "Cl₂" y terminó con Mg⁺ + Cl₂⁻ y "Mg²⁺ Cl₂⁻". Nota: ½ punto.`,
    ref:`Mg· (2 e⁻ de valencia) + 2 ·Cl̈: → Mg²⁺ + 2 [:Cl̈:]⁻ → compuesto Mg²⁺ [:Cl̈:]⁻ ₂ ; en agua: MgCl₂ → Mg²⁺ + 2 Cl⁻.`, causa:`proc`,
    por:`El magnesio cede 2 electrones (Mg²⁺) y cada cloro recibe 1 (Cl⁻): son 2 cloruros independientes, no un "Cl₂⁻". Además verifica que el símbolo se lea Mg y no Hg (mercurio).`,
    tip:`Cuenta los electrones: Mg da 2, cada Cl toma 1 → 1 Mg y 2 Cl. Escribe cada carga con su número: Mg²⁺ y 2 Cl⁻.` },
  { id:`p1-50`, ev:`p1`, n:50, tm:`enlace`, tipo:`prob`, conf:`media`, q:`Del compuesto C₂H₄ (etileno) elabore los símbolos de puntos de Lewis de los elementos involucrados, esquematice la formación del compuesto y elabore la geometría molecular.`,
    resp:`Dibujó la formación con enlace C–C sencillo y el C=C solo en el último paso. Nota: ½ punto.`,
    ref:`2 ·C· + 4 H· → H₂C=CH₂ (cada C: 2 enlaces con H y un doble enlace con el otro C). Geometría: trigonal plana, ángulos ≈ 120° alrededor de cada C; molécula plana.`, causa:`proc`,
    por:`Recibió ½. Este ejercicio pide dos cosas que conviene revisar: que el doble enlace C=C ya aparezca al formar el compuesto (cada carbono comparte 2 pares con el otro) y que la geometría diga trigonal plana (≈ 120°).`,
    tip:`Cada C debe quedar con 8 e⁻ a su alrededor: 2 enlaces C–H (4 e⁻) + doble enlace C=C (4 e⁻).` },
  /* ---------- Parcial 2 ---------- */
  { id:`p2-4`, ev:`p2`, n:4, tm:`dil`, tipo:`obj`, q:`¿De qué depende principalmente el valor de las propiedades coligativas en una solución acuosa?`,
    o:[`De la naturaleza química y la identidad del soluto`,`Exclusivamente de la cantidad de partículas de soluto disueltas en el solvente`,`Del volumen total del recipiente utilizado`,`Únicamente de la temperatura del ambiente`], el:0, cl:1, conf:`alta`, causa:`conf`,
    por:`Eso es justo lo que define una propiedad coligativa: depende de cuántas partículas hay, no de cuáles son. Dos solutos distintos con la misma cantidad de partículas producen el mismo efecto.`,
    tip:`Coligativa = "cuántas" partículas, no "cuáles".` },
  { id:`p2-6`, ev:`p2`, n:6, tm:`dil`, tipo:`obj`, q:`Al realizar una dilución agregando solvente a una solución concentrada (madre o stock), ¿cuál de las siguientes afirmaciones es correcta?`,
    o:[`La cantidad total de moles de soluto aumenta proporcionalmente`,`La concentración final siempre será superior a la concentración inicial`,`El volumen final siempre será inferior al volumen inicial`,`La cantidad total de moles de soluto se conserva constante`], el:1, cl:3, conf:`alta`, causa:`inv`,
    por:`Al diluir solo se agrega solvente: los moles de soluto no cambian, el volumen aumenta y la concentración baja. Eligió lo contrario. Es llamativo porque sí resolvió bien dos problemas de dilución (22 y 27): sabe calcular pero no conectó la idea de fondo.`,
    tip:`Diluir: n constante, V sube, C baja (C₁V₁ = C₂V₂).` },
  { id:`p2-7`, ev:`p2`, n:7, tm:`conc`, tipo:`obj`, q:`¿En qué casos es útil el cálculo de concentración en partes por millón (ppm)?`,
    o:[`Cuando influye la temperatura del soluto`,`Cuando la molaridad es constante`,`Cuando la solución es muy diluida`,`Cuando la solución es muy concentrada`], el:3, cl:2, conf:`alta`, causa:`inv`,
    por:`Las ppm sirven para cantidades muy pequeñas de soluto (trazas, contaminantes). Para soluciones concentradas se usan porcentajes o molaridad.`,
    tip:`ppm = trazas → solución muy diluida.` },
  { id:`p2-8`, ev:`p2`, n:8, tm:`buf`, tipo:`obj`, q:`Es la capacidad del cuerpo de mantener sus condiciones internas estables a pesar de los cambios que ocurren en el exterior:`,
    o:[`Equilibrio`,`Homeostasis`,`Sistema buffer`,`Mecanismos de compensación`], el:0, cl:1, conf:`alta`, causa:`conf`,
    por:`"Homeostasis" es el término exacto para mantener estable el medio interno. El buffer y los mecanismos de compensación son herramientas de la homeostasis, no su definición.`,
    tip:`Homeostasis = estabilidad interna. Buffer y compensación son los mecanismos.` },
  { id:`p2-9`, ev:`p2`, n:9, tm:`acb`, tipo:`obj`, q:`El alcohol etílico es un ejemplo de electrolito:`,
    o:[`Fuerte`,`Débil`,`No electrolito`,`Neutro`], el:0, cl:2, conf:`alta`, causa:`base`,
    por:`El etanol es una molécula covalente que se disuelve en agua sin separarse en iones, por eso su solución no conduce la electricidad: es un no electrolito. Fuerte y débil se refieren a cuántos iones libera una sustancia; el etanol no libera ninguno.`,
    tip:`Sin iones → no electrolito (etanol, sacarosa, glucosa, urea).` },
  { id:`p2-11`, ev:`p2`, n:11, tm:`ph`, tipo:`obj`, q:`¿Cómo se puede medir el pH de un paciente?`,
    o:[`Con papel pH`,`Con un pHmetro`,`Con los gases arteriales`,`Con tiras reactivas`], el:1, cl:2, conf:`media`, causa:`base`,
    por:`El pH de un paciente es el de su sangre y se mide con gases arteriales (gasometría). El pHmetro es un instrumento de laboratorio para soluciones. La clave la deduje por el contexto clínico de la pregunta.`,
    tip:`"De un paciente" → contexto clínico → gasometría arterial.` },
  { id:`p2-18`, ev:`p2`, n:18, tm:`buf`, tipo:`obj`, q:`¿Cómo actúa el mecanismo de defensa de una solución amortiguadora (buffer) cuando se le añade una pequeña cantidad de una base fuerte (OH⁻)?`,
    o:[`La base débil presente en el buffer neutraliza los iones OH⁻`,`El ácido débil presente en el buffer reacciona con el OH⁻`,`El agua de la disolución absorbe directamente los iones OH⁻`,`La base fuerte se precipita al reaccionar con el catión de la sal amortiguadora`], el:3, cl:1, conf:`alta`, causa:`base`,
    por:`Un buffer tiene un ácido débil (HA) y su base conjugada (A⁻). El OH⁻ que llega lo neutraliza el ácido débil: HA + OH⁻ → A⁻ + H₂O. Si llega H⁺, lo neutraliza la base conjugada. La opción A es la trampa: una base no neutraliza a otra base.`,
    tip:`OH⁻ entra → lo come el ácido (HA). H⁺ entra → lo come la base (A⁻).` },
  { id:`p2-20`, ev:`p2`, n:20, tm:`buf`, tipo:`obj`, q:`En el caso del buffer fosfato, ¿cuál componente es el que absorbe o acepta los protones (H⁺)?`,
    o:[`HCO₃`,`H₂CO₃`,`HPO₄`,`H₂PO₄`], el:3, cl:2, conf:`alta`, causa:`conf`,
    por:`En el par H₂PO₄⁻ / HPO₄²⁻ la base es la que tiene un H menos: HPO₄²⁻ (acepta H⁺ y se vuelve H₂PO₄⁻). Es curioso: en el corto de laboratorio sí acertó con el buffer carbonato (bicarbonato), así que conoce la idea; lo que falló fue identificar la especie fosfato.`,
    tip:`La base conjugada es la especie con un H⁺ menos: HCO₃⁻ y HPO₄²⁻.` },
  { id:`p2-26`, ev:`p2`, n:26, tm:`conc`, tipo:`prob`, q:`Determina la normalidad (N) de una disolución acuosa que contiene 37 g de hidróxido de calcio [Ca(OH)₂] disueltos en un volumen total de 2 litros.`,
    resp:`Peso equivalente 74/2 = 37 (bien) pero luego usó "37 peq" como número de equivalentes: N = 37/2 = 18.5 peq/L.`,
    ref:`Peq = 74/2 = 37 g/eq → equivalentes = 37 g ÷ 37 g/eq = 1 eq → N = 1 eq ÷ 2 L = 0.5 N.`, causa:`proc`, fam:`normDoc`,
    por:`Confundió el peso equivalente (g/eq, una masa por equivalente) con el número de equivalentes (eq). Los 37 g son la masa de la muestra; para saber cuántos equivalentes son hay que dividirla entre el peso equivalente.`,
    tip:`Escribe las unidades: g ÷ (g/eq) = eq → eq ÷ L = N. Si no sale "eq/L", algo está mal.` },
  { id:`p2-28`, ev:`p2`, n:28, tm:`ph`, tipo:`prob`, q:`Calcule el pH y el pOH de una disolución acuosa 0.025 M de hidróxido de bario [Ba(OH)₂] a 25 °C.`,
    resp:`pH = −log(0.025) = 1.60 y pOH = 14 − 1.60 = 12.40.`,
    ref:`[OH⁻] = 2 × 0.025 = 0.050 M → pOH = −log(0.050) = 1.30 → pH = 14 − 1.30 = 12.70.`, causa:`proc`, fam:`baseDoc`,
    por:`Cometió dos errores seguidos: usó la concentración de la base como si fuera [H⁺] (la trató como ácido) y no multiplicó por los 2 OH⁻ que libera cada Ba(OH)₂. En una base se calcula primero el pOH y el pH sale de 14 − pOH.`,
    tip:`Base → [OH⁻] = (n.º de OH) × M → pOH → pH = 14 − pOH. Un pH de 1.6 para una base debió alertarte.` },
  { id:`p2-29`, ev:`p2`, n:29, tm:`buf`, tipo:`prob`, q:`Calcule el pH de una solución amortiguadora preparada disolviendo 0.25 moles de ácido acético (CH₃COOH) y 0.35 moles de acetato de sodio (CH₃COONa) a 25 °C (Ka del CH₃COOH = 1.8 × 10⁻⁵).`,
    resp:`Quedó en blanco.`,
    ref:`pKa = −log(1.8 × 10⁻⁵) = 4.74 → pH = 4.74 + log(0.35/0.25) = 4.74 + 0.15 = 4.89.`, causa:`tiempo`, fam:`bufDoc`,
    por:`No lo resolvió. Es un problema de tres líneas: el volumen no importa porque se cancela en la razón [A⁻]/[HA]; sirve la razón de moles.`,
    tip:`Resuelve primero los ejercicios de plantilla corta (buffer, pH de ácido fuerte) y deja los largos para el final.` },
  { id:`p2-30`, ev:`p2`, n:30, tm:`ph`, tipo:`prob`, q:`Calcule la molaridad, el pH y el pOH de una disolución acuosa preparada al disolver 0.315 g de ácido nítrico (HNO₃) en agua suficiente hasta completar un volumen final de 250 mL de solución a 25 °C.`,
    resp:`Llegó a PM = 63 g/mol y 0.25 L, y se detuvo.`,
    ref:`n = 0.315 ÷ 63 = 0.005 mol → M = 0.005 ÷ 0.25 = 0.02 M → HNO₃ es ácido fuerte: [H⁺] = 0.02 M → pH = 1.70 → pOH = 14 − 1.70 = 12.30.`, causa:`tiempo`, fam:`acidG`,
    por:`Dejó el cálculo a medias, aunque ya tenía bien el peso molecular y el volumen en litros. Escribe siempre el planteamiento completo: la instrucción pide dejar constancia del desarrollo.`,
    tip:`Ácido fuerte → [H⁺] = M. Cuando no alcances a calcular, deja el planteamiento escrito.` },
  /* ---------- Discusión 1 ---------- */
  { id:`dis1-3`, ev:`dis1`, n:3, tm:`atomo`, tipo:`abi`, q:`Calcule el número de neutrones de los átomos del elemento francio.`,
    resp:`"87 neutrones" (después corrigió a 223 − 87 = 136).`, ref:`Fr: Z = 87, A = 223 → neutrones = A − Z = 223 − 87 = 136.`, causa:`conf`,
    por:`Respondió con el número atómico (87), que cuenta protones. Los neutrones son la masa atómica menos el número atómico.`,
    tip:`Z = protones. A = protones + neutrones. Neutrones = A − Z.` },
  { id:`dis1-4`, ev:`dis1`, n:4, tm:`conf`, tipo:`abi`, conf:`media`, q:`Escriba la configuración electrónica completa del elemento selenio, siguiendo la regla de las diagonales de Moeller.`,
    resp:`1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴`, ref:`Se: Z = 34 → 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴.`, causa:`proc`,
    por:`La suma da 34 electrones, pero escribió 3d antes que 4s. Con las diagonales de Moeller el orden de llenado es 1s 2s 2p 3s 3p 4s 3d 4p. Es la causa más probable de que no se acreditara (su configuración abreviada [Ar] 3d¹⁰ 4s² 4p⁴ sí salió bien).`,
    tip:`Orden de llenado por diagonales: ...3p → 4s → 3d → 4p...` },
  { id:`dis1-7`, ev:`dis1`, n:7, tm:`enlace`, tipo:`abi`, q:`¿Cuál es la diferencia entre el enlace iónico y el covalente?`,
    resp:`"El enlace iónico es enlaces entre diferentes cargas, covalente mismos elementos."`,
    ref:`Iónico: se transfieren electrones (metal + no metal) y los iones de carga opuesta se atraen. Covalente: se comparten pares de electrones entre no metales (átomos iguales: no polar; distintos: polar).`, causa:`conf`,
    por:`Definió el covalente como "mismos elementos". Lo que distingue a los enlaces es qué pasa con los electrones (transferencia o compartición), no si los elementos son iguales. Dos no metales distintos (como en HCl) forman un covalente polar.`,
    tip:`Pregunta-llave: ¿metal + no metal (se transfieren) o no metal + no metal (se comparten)?` },
  { id:`dis1-8`, ev:`dis1`, n:8, tm:`enlace`, tipo:`prob`, conf:`media`, q:`Del compuesto fluoruro de litio (LiF): elabore los símbolos de puntos de Lewis para cada elemento, esquematice la primera ionización, forme el compuesto y esquematice la segunda ionización en solución acuosa.`,
    resp:`Hizo los símbolos y la transferencia; el docente marcó el paso del compuesto. Nota: ½ punto.`,
    ref:`Li· + ·F̈: → Li⁺ + [:F̈:]⁻ → compuesto Li⁺[:F̈:]⁻ ; en agua: LiF → Li⁺ + F⁻.`, causa:`proc`,
    por:`Los tres pasos del enunciado son: símbolos, formación del compuesto y disociación en agua. El docente marcó el paso del compuesto: revisa que quede escrito como un compuesto (Li⁺ y [:F̈:]⁻ juntos, con la carga de cada ion) antes de separarlo en agua.`,
    tip:`Orden: átomos → transferencia → compuesto con cargas → disociación en agua.` },
  { id:`dis1-9`, ev:`dis1`, n:9, tm:`enlace`, tipo:`prob`, q:`Del compuesto carbonato de calcio (CaCO₃): elabore los símbolos de Lewis, esquematice la formación de la molécula con su geometría molecular y la ionización en solución acuosa.`,
    resp:`Unió el calcio al carbonato con una flecha de enlace y escribió Ca⁺ y CO₃²⁻. Nota: 0.`,
    ref:`Ca· → Ca²⁺ (cede 2 e⁻). Carbonato CO₃²⁻: C central con un C=O y dos C–O⁻ (trigonal plano). Compuesto: Ca²⁺ [CO₃]²⁻ (iónico). En agua: CaCO₃ → Ca²⁺ + CO₃²⁻.`, causa:`proc`,
    por:`El carbonato es un ion poliatómico: por dentro tiene enlaces covalentes, y con el calcio el enlace es iónico. El calcio pierde 2 electrones (Ca²⁺), no 1; así las cargas cuadran (2+ y 2−).`,
    tip:`Con un ion poliatómico: covalente dentro del ion, iónico entre iones. Verifica que las cargas sumen cero.` },
  { id:`dis1-10`, ev:`dis1`, n:10, tm:`enlace`, tipo:`prob`, conf:`media`, q:`Del compuesto ácido clorhídrico (HCl): elabore los símbolos de Lewis, esquematice la formación del compuesto con su geometría molecular y la formación de un puente de hidrógeno entre dos moléculas de este compuesto.`,
    resp:`Dibujó H–Cl ··· H–Cl; el docente anotó "H–δ". Nota: ½ punto.`,
    ref:`H· + ·Cl̈: → H–Cl̈: (covalente polar, lineal, Hδ⁺–Clδ⁻). Puente de hidrógeno: el Hδ⁺ de una molécula con el Clδ⁻ de la otra: Hδ⁺–Clδ⁻ ··· Hδ⁺–Clδ⁻ (línea punteada).`, causa:`forma`,
    por:`Obtuvo ½. La anotación del docente sugiere que faltaron las cargas parciales (δ⁺ y δ⁻), que son las que explican por qué el H de una molécula atrae al Cl de la otra.`,
    tip:`Marca siempre δ⁺ y δ⁻ y dibuja la línea punteada entre el H (δ⁺) y el átomo electronegativo de la otra molécula.` },
  /* ---------- Lab 1 ---------- */
  { id:`lab1-2`, ev:`lab1`, n:2, tm:`lab`, tipo:`abi`, q:`¿Cuál es el nombre de este instrumento? (pera de goma con válvulas)`,
    resp:`"Pipeteador".`, ref:`Propipeta (pera de succión).`, causa:`lab`,
    por:`Usó un nombre genérico. En el corto cuenta el nombre exacto del manual: propipeta o pera de succión. Gaby ya lo corrigió en su hoja aparte.`,
    tip:`Tarjeta: propipeta = pera de succión para pipetear sin usar la boca.` },
  { id:`lab1-3`, ev:`lab1`, n:3, tm:`lab`, tipo:`abi`, conf:`media`, q:`¿Para qué se usa el instrumento anterior?`,
    resp:`"Para pipetear, transferir sustancias."`, ref:`Para aspirar líquidos con la pipeta sin hacerlo con la boca, por seguridad.`, causa:`lab`,
    por:`La respuesta repite el verbo "pipetear" sin explicar la función: la propipeta crea la succión que sube el líquido a la pipeta y evita aspirar con la boca sustancias peligrosas.`,
    tip:`Responde la función y la razón (seguridad).` },
  { id:`lab1-4`, ev:`lab1`, n:4, tm:`lab`, tipo:`abi`, q:`En el experimento de la volatilidad, ¿cuál compuesto no presentó ni olor ni volatilidad? ¿Cuál es el motivo?`,
    resp:`"La sal (cloruro de sodio); no posee… compuesto iónico." Nota: ½ punto.`,
    ref:`Cloruro de sodio. Es un compuesto iónico: sus iones se atraen con fuerzas muy grandes, por eso no pasa a gas y no libera olor.`, causa:`forma`,
    por:`Identificó bien el compuesto; la razón quedó incompleta. Debía unir "compuesto iónico" con "atracciones fuertes entre iones, por eso no es volátil".`,
    tip:`Razón completa = tipo de enlace + consecuencia observada.` },
  { id:`lab1-8`, ev:`lab1`, n:8, tm:`lab`, tipo:`abi`, q:`En el experimento de reactividad de los metales, ¿cuál fue el metal que no reaccionó con el agua y cuál fue el que reaccionó más violentamente?`,
    resp:`Aluminio (bien); la segunda parte no fue acreditada. Nota: ½ punto.`,
    ref:`Aluminio no reaccionó. El sodio reaccionó más violentamente (metal alcalino: la reactividad aumenta hacia abajo en el grupo 1).`, causa:`lab`,
    por:`Acertó el aluminio. En la segunda parte la respuesta esperada es el sodio, el más reactivo de los metales de la práctica.`,
    tip:`Reactividad con el agua: Na ≫ Mg > Al (el Al casi no reacciona).` },
  { id:`lab1-10`, ev:`lab1`, n:10, tm:`lab`, tipo:`abi`, conf:`media`, q:`En el experimento de los alcalinotérreos, ¿qué compuesto se formó al añadir 5 mL de agua al residuo formado al haber quemado la cinta de magnesio?`,
    resp:`Su respuesta en limpio no se alcanza a leer; luego anotó "hidróxido de magnesio o leche de magnesia".`,
    ref:`Hidróxido de magnesio, Mg(OH)₂ (leche de magnesia): 2 Mg + O₂ → 2 MgO; MgO + H₂O → Mg(OH)₂.`, causa:`lab`,
    por:`El residuo de quemar el magnesio es MgO (óxido); el óxido de un metal reacciona con agua y forma el hidróxido. El veredicto de esta pregunta lo deduje porque la suma del corto es 3.0.`,
    tip:`Metal + O₂ → óxido; óxido + H₂O → hidróxido.` },
  /* ---------- Lab 2 (fecha ilegible) ---------- */
  { id:`lab2-2`, ev:`lab2`, n:2, tm:`sol`, tipo:`abi`, conf:`media`, q:`Entre el aumento de la temperatura y el aumento de la presión, ¿cuál favorece la solubilidad de un gas disuelto en un líquido?`,
    resp:`Escribió "La temperatura", la tachó y escribió "La presión".`,
    ref:`La presión (ley de Henry): a más presión parcial del gas, más gas se disuelve. El aumento de temperatura disminuye la solubilidad de los gases.`, causa:`forma`,
    por:`La respuesta final era correcta, pero había una tachadura. Las indicaciones piden bolígrafo azul de tinta indeleble y la hoja del parcial advierte que borrones y tachaduras impiden la revisión; es la causa más probable de que no se diera el punto.`,
    tip:`Si dudas, decide en borrador y pasa en limpio. Si tachas, reescribe la respuesta completa al lado.` },
  { id:`lab2-4`, ev:`lab2`, n:4, tm:`conc`, tipo:`prob`, q:`Un paciente requiere recibir 2300 mL de una solución intravenosa de glucosa al 7 % m/v. ¿Cuántos gramos de glucosa pura consumirá tras recibir el volumen total?`,
    resp:`0.30 g de glucosa.`, ref:`7 % m/v = 7 g por cada 100 mL → 2300 mL × 7 g/100 mL = 161 g.`, causa:`proc`, fam:`pctDoc`,
    por:`7 % m/v significa 7 g en cada 100 mL, así que 2300 mL contienen 23 veces 7 g = 161 g. Un resultado de 0.30 g para 2.3 litros es imposible: una prueba de sentido lo habría delatado.`,
    tip:`Estima antes de calcular: si 100 mL llevan 7 g, 2300 mL llevan unos 160 g.` },
  { id:`lab2-5`, ev:`lab2`, n:5, tm:`conc`, tipo:`abi`, q:`¿Cuál es la diferencia conceptual principal entre la molaridad (M) y la molalidad (m)?`,
    resp:`"M busca la totalidad de la solución; m busca la totalidad del solvente."`,
    ref:`Molaridad = moles de soluto ÷ litros de solución. Molalidad = moles de soluto ÷ kilogramos de solvente (no depende de la temperatura).`, causa:`forma`,
    por:`La idea de fondo (solución frente a solvente) estaba, pero faltó nombrar las magnitudes. Una respuesta completa incluye los moles de soluto y el denominador: litros de solución (M) o kilogramos de solvente (m).`,
    tip:`M: mol/L de solución. m: mol/kg de solvente. Escribe siempre las dos fórmulas.` },
  { id:`lab2-6`, ev:`lab2`, n:6, tm:`conc`, tipo:`prob`, q:`Si se disuelven 25 gramos de carbonato de calcio (CaCO₃) en agua destilada hasta completar un volumen total de 700 mL, ¿cuál es la normalidad (N) de la solución resultante?`,
    resp:`Peq = 100/2 = 50; N = 25/50 = 0.5 N (no dividió entre el volumen).`,
    ref:`Peq = 100 ÷ 2 = 50 g/eq → eq = 25 ÷ 50 = 0.5 eq → N = 0.5 eq ÷ 0.7 L = 0.71 N.`, causa:`omi`, fam:`normDoc`,
    por:`Calculó bien el peso equivalente y los equivalentes, pero se detuvo ahí: 0.5 son equivalentes, no normalidad. Faltó dividir entre el volumen en litros.`,
    tip:`Normalidad = eq/L. Si tu resultado no lleva "por litro", te falta un paso.` },
  { id:`lab2-7`, ev:`lab2`, n:7, tm:`dil`, tipo:`prob`, q:`Se desea preparar 600 mL de una solución de bromuro de magnesio (MgBr₂) 1.6 M a partir de una solución stock 4.5 M. ¿Cuántos mililitros de solución stock se necesitan para prepararla?`,
    resp:`Tomó C₁ = 1.6 y C₂ = 4.5: V = 4.5 × 600 / 1.6 = 1687.5 mL.`,
    ref:`C₁ = 4.5 M (stock), C₂ = 1.6 M (final), V₂ = 600 mL → V₁ = C₂V₂ ÷ C₁ = 1.6 × 600 ÷ 4.5 = 213.3 mL.`, causa:`inv`, fam:`dilDoc`,
    por:`Intercambió C₁ y C₂. El stock (4.5 M) es la solución inicial y la que se quiere preparar (1.6 M) es la final. El resultado, 1687 mL, era mayor que los 600 mL finales, algo imposible: del stock siempre se toma menos que el volumen final.`,
    tip:`Chequeo: V₁ < V₂ y C₁ > C₂. Si no se cumple, intercambiaste los datos.` },
  { id:`lab2-8`, ev:`lab2`, n:8, tm:`acb`, tipo:`abi`, conf:`media`, q:`¿Cuál es la diferencia entre la base de Arrhenius y la base de Brønsted–Lowry?`,
    resp:`Arrhenius: moléculas que en agua se disocian y liberan…; BL: acepta protones (respuesta mezclada e incompleta).`,
    ref:`Arrhenius: base = sustancia que en agua libera OH⁻ (necesita agua y OH⁻ en la fórmula). Brønsted–Lowry: base = aceptor de protones (H⁺), con o sin agua y sin necesidad de OH⁻.`, causa:`forma`,
    por:`Puso las dos ideas, pero sin contraponerlas. La comparación pide lo que cada teoría amplía: Arrhenius exige OH⁻ en agua; Brønsted–Lowry se define por aceptar H⁺ (por eso el amoníaco, sin OH⁻, es base).`,
    tip:`Frase modelo: "Arrhenius: libera OH⁻ en agua; Brønsted–Lowry: acepta H⁺".` },
  { id:`lab2-9`, ev:`lab2`, n:9, tm:`ph`, tipo:`abi`, q:`En la zona básica (alcalina) de la escala de pH, ¿cómo es la concentración de iones H⁺ y OH⁻, respectivamente?`,
    resp:`Una palabra tachada y "mayor".`, ref:`[H⁺] menor y [OH⁻] mayor (pH > 7: hay más OH⁻ que H⁺).`, causa:`forma`,
    por:`Pedía las dos concentraciones "respectivamente" y contestó una sola palabra, con una tachadura. Debía decir: H⁺ menor y OH⁻ mayor.`,
    tip:`Responde cada parte por separado: "[H⁺] menor, [OH⁻] mayor".` },
  /* ---------- Lab 2: ácidos y bases ---------- */
  { id:`lab2b-4`, ev:`lab2b`, n:4, tm:`conc`, tipo:`prob`, q:`¿Cuántos gramos de soluto y cuántos mililitros de solvente se usan para preparar 100 mL de una disolución acuosa al 1.6 % p/v de sulfato de cobre II pentahidratado (CuSO₄·5H₂O)?`,
    resp:`1.6 g de soluto (bien) y 100 mL de solvente. Nota: ½ punto.`, ref:`1.6 g de soluto; 100 mL − 1.6 = 98.4 mL de agua.`, causa:`proc`, fam:`pctDoc`,
    por:`Los gramos estuvieron bien. Los 100 mL son el volumen de la solución final, no el del solvente: el docente espera 100 − 1.6 = 98.4 mL de agua. En el laboratorio real se disuelve y se afora a 100 mL; en el examen se sigue esta convención.`,
    tip:`mL de solvente = volumen de solución − gramos de soluto (convención del docente).` },
  { id:`lab2b-5`, ev:`lab2b`, n:5, tm:`conc`, tipo:`prob`, conf:`media`, q:`Calcule el %v/v de una disolución que contiene 35 mL de etanol (C₂H₅OH) disueltos en 960 mL de disolución.`,
    resp:`Respuesta con dos valores: "27.4 mL" tachado y "3.64 % v/v".`, ref:`%v/v = 35 ÷ 960 × 100 = 3.6458… = 3.65 %.`, causa:`forma`, fam:`pctDoc`,
    por:`El planteamiento era correcto. Al redondear 3.6458 a dos decimales queda 3.65, no 3.64 (se redondea, no se trunca), y la línea de respuesta traía además otro valor (27.4 mL) que confunde la revisión. Es la causa más probable del punto perdido.`,
    tip:`Una sola respuesta, con unidad y bien redondeada.` },
  { id:`lab2b-8`, ev:`lab2b`, n:8, tm:`lab`, tipo:`abi`, q:`¿De qué color se torna una solución de hidróxido de sodio (NaOH) al agregarle unas gotas de fenolftaleína?`,
    resp:`"Transparente o incoloro."`, ref:`Rosa o fucsia (la fenolftaleína vira a rosa a partir de pH ≈ 8.2).`, causa:`lab`,
    por:`Invirtió el color. La fenolftaleína es incolora en medio ácido y neutro, y rosa-fucsia en medio básico, como el NaOH.`,
    tip:`Fenolftaleína: incolora en ácido, fucsia en base.` }
];
const RF_FALLO = id => RF_FALLOS.find(f => f.id === id);

/* ---------- Patrones: lo que se repite ---------- */
const RF_PATRONES = [
  { id:`enlace`, n:`Enlace iónico, covalente y fuerzas intermoleculares`, ev:`Parcial 1 (10 de 16 preguntas de enlace e intermoleculares) y Discusión 1`, falla:[`p1-20`,`p1-21`,`p1-22`,`p1-24`,`p1-25`,`p1-27`,`p1-29`,`p1-30`,`p1-33`,`dis1-7`,`dis1-9`],
    por:`Es el patrón más grave porque se repite en tres evaluaciones. Hay una idea equivocada de fondo: "covalente = mismos elementos". Por eso falla también cuando le piden clasificar (dos no metales distintos), distinguir intramolecular de intermolecular y reconocer qué elementos forman puentes de hidrógeno.`,
    fix:[`Aprende la pregunta-llave: ¿metal + no metal (se transfieren e⁻ → iónico) o no metal + no metal (se comparten e⁻ → covalente)?`,`Distingue dos niveles: ENLACES (dentro: iónico, covalente, metálico) y FUERZAS (entre moléculas: puente de H, dipolo-dipolo, London).`,`Memoriza FON (F, O, N) para el puente de hidrógeno y "apolar con apolar → London".`],
    oro:`Transferir = iónico. Compartir = covalente. Dentro = enlace, entre moléculas = fuerza.`, doc:`enlace` },
  { id:`inversion`, n:`Inversión de sentido (mayor/menor, sube/baja)`, ev:`Parcial 1, Parcial 2 y Lab 2`, falla:[`p1-41`,`p1-43`,`p2-6`,`p2-7`,`lab2-7`,`p2-28`],
    por:`Sabe calcular pero se le da vuelta la dirección: dice que diluir concentra, que ΔG negativo es endergónico, que mayor afinidad da mayor Km, que 600 mL se preparan con 1687 mL de stock, que una base tiene pH 1.6. En casi todos el propio resultado delataba el error.`,
    fix:[`Antes de elegir, escribe una flecha: ¿esto sube (↑) o baja (↓)?`,`Después de calcular, haz la prueba de sentido: ¿el resultado tiene sentido frente al dato inicial?`,`En diluciones: el stock siempre es C₁ y V₁ es siempre menor que V₂.`],
    oro:`Antes de entregar cada cálculo pregúntate: ¿sube o baja? ¿Tiene sentido?`, doc:`inversion` },
  { id:`normalidad`, n:`Normalidad: equivalentes y volumen`, ev:`Parcial 2 (problema 26) y Lab 2 (pregunta 6)`, falla:[`p2-26`,`lab2-6`],
    por:`Dos errores distintos en el mismo tema: en el Parcial usó el peso equivalente como si fuera el número de equivalentes; en el Lab calculó los equivalentes y olvidó dividir entre el volumen. Los dos se evitan escribiendo las unidades.`,
    fix:[`Paso 1: Peq = PM ÷ (n.º de H⁺ u OH⁻ o carga). Unidad: g/eq.`,`Paso 2: equivalentes = g ÷ Peq. Unidad: eq.`,`Paso 3: N = eq ÷ L. Unidad: eq/L. Si no termina en "por litro", falta un paso.`],
    oro:`g ÷ (g/eq) = eq → eq ÷ L = N.`, doc:`normalidad`, gen:`normDoc` },
  { id:`bases`, n:`Bases, pOH y buffers`, ev:`Parcial 2 (18, 20, 28, 29) y Lab 2 (8, 9)`, falla:[`p2-18`,`p2-20`,`p2-28`,`p2-29`,`lab2-8`,`lab2-9`],
    por:`Trata las bases como ácidos (pH de Ba(OH)₂ con −log directo, sin ×2), no distingue qué especie del buffer neutraliza qué, y no contesta completo las preguntas de teorías. Sí domina el buffer carbonato y el pH de ácidos.`,
    fix:[`Hidróxido = base: [OH⁻] = (n.º de OH) × M → pOH = −log → pH = 14 − pOH.`,`Buffer: el ácido (HA) neutraliza al OH⁻; la base conjugada (A⁻, con un H menos) neutraliza al H⁺.`,`Henderson–Hasselbalch: pH = pKa + log(base/ácido); sirve la razón de moles.`],
    oro:`Base → pOH primero. Buffer: el ácido come OH⁻, la base come H⁺.`, doc:`bases`, gen:`baseDoc` },
  { id:`unidades`, n:`Dilución, solvente y unidades de concentración`, ev:`Lab 2 (4, 5, 7) y Lab 2 ácidos y bases (4, 5)`, falla:[`lab2-4`,`lab2-5`,`lab2b-4`,`lab2b-5`],
    por:`Los problemas de plantilla (molaridad, % p/v, molalidad, dilución directa) los resuelve bien. Falla cuando cambia el planteamiento: gramos de un % m/v con volumen grande, mL de solvente frente a mL de solución, y definir M y m con precisión.`,
    fix:[`% m/v = g por cada 100 mL: escala con proporción y estima el orden de magnitud.`,`mL de solvente = volumen de solución − gramos de soluto (convención del docente).`,`Al definir, escribe la fórmula: M = mol/L de solución; m = mol/kg de solvente.`],
    oro:`Estima antes de calcular y define con fórmula y unidad.`, doc:`unidades`, gen:`pctDoc` },
  { id:`lab`, n:`Vocabulario y observación de laboratorio`, ev:`Lab 1 y Lab 2 ácidos y bases`, falla:[`lab1-2`,`lab1-3`,`lab1-4`,`lab1-8`,`lab1-10`,`lab2b-8`],
    por:`Usa nombres genéricos (pipeteador por propipeta), no completa la razón de lo observado y puede invertir un color (fenolftaleína). Mejoró de 3.0 a 7.5 entre el Lab 1 y el Lab 2: lo que hizo en esa práctica funciona.`,
    fix:[`Una tarjeta por experimento: material → qué se observó → por qué.`,`Aprende el nombre exacto de cada instrumento del manual con su función.`,`En cada respuesta de laboratorio escribe observación + razón.`],
    oro:`Observación + razón + nombre exacto del instrumento.`, doc:`lab` },
  { id:`enzimas`, n:`Cinética, termodinámica y enzimas`, ev:`Parcial 1 (5 de 8 preguntas)`, falla:[`p1-41`,`p1-43`,`p1-44`,`p1-45`],
    por:`Es un bloque de nivel clínico-bioquímico que el docente sí evalúa. Se mezclan inversiones (ΔG, Km) con definiciones de pasos de la reacción enzimática.`,
    fix:[`ΔG < 0 = exergónica (espontánea); ΔG > 0 = endergónica.`,`E + S ⇌ ES → E + P. Km bajo = afinidad alta.`,`pH extremo cambia la ionización del sitio activo o desnaturaliza la enzima.`],
    oro:`ΔG negativo: sale energía. Km bajo: enzima ansiosa por su sustrato.`, doc:`inversion` },
  { id:`habitos`, n:`Hábitos de examen: tiempo, forma y precisión`, ev:`Parcial 2 (29, 30), Lab 2 (2, 9) y Lab 2 ácidos y bases (5)`, falla:[`p2-29`,`p2-30`,`lab2-2`,`lab2-9`,`lab2b-5`],
    por:`Perdió puntos que no son de conocimiento: dos problemas sin terminar, respuestas tachadas, respuestas con dos valores y redondeo truncado.`,
    fix:[`Reparte el tiempo (1 minuto por pregunta de objetivas, 4–5 minutos por problema) y resuelve primero lo corto.`,`Usa borrador: piensa y luego escribe con tinta, sin tachar. Una sola respuesta por línea.`,`Redondea (no trunques) y escribe la unidad.`],
    oro:`Una respuesta limpia, completa, con unidad.`, doc:null }
];

/* ---------- Familias de problemas que se repiten ---------- */
const RF_FAMILIAS = [
  { n:`Dilución C₁V₁ = C₂V₂`, ap:`Parcial 2: NaBr 3.5 M (650 → 1500 mL) ✓ y NaBr 2.0 M (400 → 1200 mL) ✓ · Lab 2: MgBr₂ 1.6 M desde 4.5 M ✗`, gen:`dilDoc` },
  { n:`Normalidad de una base o sal`, ap:`Parcial 2: 37 g Ca(OH)₂ en 2 L ✗ · Lab 2: 25 g CaCO₃ en 700 mL ✗`, gen:`normDoc` },
  { n:`Molaridad desde gramos`, ap:`Parcial 2: 49 g H₂SO₄ en 500 mL ✓`, gen:`mol` },
  { n:`% m/v, % v/v y preparación`, ap:`Parcial 2: 15 g NaCl en 250 mL ✓ · Lab 2: glucosa 7 % m/v ✗ · Lab ác./bases: 1.6 % p/v (½) y 35 mL en 960 mL ✗`, gen:`pctDoc` },
  { n:`Molalidad`, ap:`Parcial 2: 20 g NaOH en 400 g de agua ✓`, gen:`molalDoc` },
  { n:`pH y pOH de una base fuerte`, ap:`Parcial 2: Ba(OH)₂ 0.025 M ✗`, gen:`baseDoc` },
  { n:`pH de un ácido fuerte desde gramos`, ap:`Parcial 2: 0.315 g HNO₃ en 250 mL (sin terminar)`, gen:`acidG` },
  { n:`Buffer (Henderson–Hasselbalch)`, ap:`Parcial 2: ácido acético/acetato (sin responder)`, gen:`bufDoc` },
  { n:`Balanceo de ecuaciones`, ap:`Parcial 1: Fe + O₂, C₃H₈ + O₂, NH₃ + O₂ ✓✓✓`, gen:null },
  { n:`Estructuras de Lewis (formación e ionización)`, ap:`Parcial 1: MgCl₂ (½), C₂H₄ (½) · Discusión: LiF (½), CaCO₃ (0), HCl (½)`, gen:null }
];

/* ---------- Perfil del docente ---------- */
const RF_PERFIL = {
  estructura:[
    { n:`Parcial`, d:`Parte I objetiva de 4 opciones (a veces 3) y Parte II de problemas con procedimiento visible. Cada pregunta vale 1 punto y el problema puede dar medios puntos. Parcial 1: 45 + 5 en 2 horas. Parcial 2: 20 + 10 en 1 hora; permite calculadora, tabla periódica y hoja de fórmulas.` },
    { n:`Corto de laboratorio / discusión`, d:`10 preguntas de respuesta corta escrita, 1 punto cada una (se dan medios puntos). Mezcla concepto, cálculo y observación de práctica. Se contesta con bolígrafo azul de tinta indeleble.` },
    { n:`Guías de ejercicios`, d:`Tablas y estructuras a completar (hidrocarburos): clasificación por fórmula, hibridación y geometría, nombre ↔ fórmula, análisis carbono por carbono, preguntas de razonamiento y nomenclatura aromática.` }
  ],
  estilos:[
    `"¿Cuál es la diferencia fundamental / principal entre…?" (compara dos conceptos).`,
    `"Según [teoría o definición]… ¿cómo se define…?" (Arrhenius, Lewis, Brønsted–Lowry, Berzelius).`,
    `"¿Cuál de las siguientes afirmaciones es correcta?" (cuatro frases largas, una verdadera).`,
    `"¿Cómo afecta… a…?" y "¿Qué sucede cuando…?" (causa y efecto).`,
    `Contexto clínico para dar sentido: venopunción, eritrocito, glucosa intravenosa, pH de un paciente, buffer de la sangre.`,
    `Definiciones operacionales (sabor de una base) y vocabulario del laboratorio (propipeta, fenolftaleína).`
  ],
  distractores:[
    { t:`Definición cambiada`, d:`Cada opción es la definición correcta de otro concepto.`, ej:`p1-22`, ex:`La opción A es el enlace metálico y la B el covalente.` },
    { t:`Medio acierto`, d:`La opción cruzada mezcla un elemento correcto con uno incorrecto.`, ej:`p1-17`, ex:`"Astato y flúor" tiene el flúor bien y el astato mal.` },
    { t:`Afirmación invertida`, d:`Dice lo contrario de lo correcto (más/menos, sube/baja).`, ej:`p2-6`, ex:`"La concentración final siempre será superior" tras diluir.` },
    { t:`Fórmulas casi iguales`, d:`Opciones que difieren en un H: HCO₃, H₂CO₃, HPO₄, H₂PO₄.`, ej:`p2-20`, ex:`La base conjugada es la que tiene un H menos.` },
    { t:`Tres de cuatro del mismo grupo`, d:`La respuesta es la única que no pertenece al grupo de las demás.`, ej:`p1-27`, ex:`Tres intermoleculares y un solo enlace intramolecular.` },
    { t:`Trampa del rol`, d:`Una opción describe correctamente el rol de otro componente.`, ej:`p2-18`, ex:`"La base débil neutraliza el OH⁻" (lo neutraliza el ácido).` }
  ],
  siguiente:[
    `Las guías de hidrocarburos aliáticos y aromáticos del zip anticipan el contenido del próximo examen.`,
    `Alifáticos: clasificar por fórmula (CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂), hibridación y geometría, nombre ↔ fórmula, análisis de cada carbono en HC≡C−CH=CH−CH₃, y razonamiento (por qué los alquinos son lineales, cis/trans, C₅H₁₀).`,
    `Aromáticos: nombres comunes (fluorobenceno, ácido benzoico, fenol, anilina, alilbenceno), nombres IUPAC con o/m/p y numeración, y fórmulas a partir del nombre (TNT, ácido 4-clorobenzoico).`
  ]
};

/* ---------- Estadísticas derivadas ---------- */
const rfNotaCalc = ev => { const r = RF_HIST.filter(x => x.ev === ev); const p = r.reduce((s, x) => s + x.ok, 0); return { pts:p, tot:r.length, nota:+(p / r.length * 10).toFixed(1) }; };
const rfFechaOrd = e => e.f || `9999`;
const rfPorTema = () => { const m = {}; RF_HIST.forEach(x => { const a = m[x.tm] || (m[x.tm] = { tm:x.tm, ok:0, n:0 }); a.ok += x.ok; a.n++; }); return Object.values(m).map(a => Object.assign(a, { err:1 - a.ok / a.n })).sort((a, b) => b.err - a.err); };
const rfPorNivel = () => { const m = { r:{ n:0, ok:0 }, c:{ n:0, ok:0 }, a:{ n:0, ok:0 } }; RF_HIST.filter(x => x.tipo === `o`).forEach(x => { m[x.lv].n++; m[x.lv].ok += x.ok; }); return m; };
const rfClaves = () => { const c = { A:0, B:0, C:0, D:0, n:0 }, w = { A:0, B:0, C:0, D:0, n:0 }; RF_HIST.filter(x => x.tipo === `o`).forEach(x => { if (x.k){ c[x.k]++; c.n++; } if (!x.ok){ w[x.r]++; w.n++; } }); return { claves:c, falladas:w }; };

/* ===================== RETROALIMENTACIÓN: GENERADORES Y BANCO ===================== */

/* ---------- Generadores con las plantillas que el docente repite ---------- */
const RF_PM = { 'Ca(OH)₂':74, 'CaCO₃':100, 'H₂SO₄':98, 'Na₂CO₃':106, 'Al(OH)₃':78, 'H₃PO₄':98, 'Mg(OH)₂':58, 'NaOH':40, 'KOH':56, 'NaCl':58.5, 'Glucosa':180, 'Urea':60, 'KCl':74.5, 'HNO₃':63, 'HCl':36.5, 'HClO₄':100.5, 'HBr':81 };
GENS.push(
 {id:`dilDoc`,t:`t17`,src:`Parcial 2 (22 y 27) · Lab 2 (7)`,name:`Dilución estilo parcial (sal y stock)`,make(){
   const sal = pick([`NaBr`,`MgBr₂`,`KCl`,`NaNO₃`,`CaCl₂`,`KI`]);
   if (Math.random() < .5){
     const C1 = pick([3.5,4.5,5,6,2.5,8]); const C2 = pick([.5,.8,1.2,1.6,2,2.4].filter(x => x < C1)); const V2 = pick([250,300,400,500,600,750,1000]); const V1 = C2*V2/C1;
     return { q:`Se desea preparar ${V2} mL de una solución de ${sal} ${C2} M a partir de una solución stock ${C1} M. ¿Cuántos mililitros de stock se necesitan?`, unit:`mL`, ans:V1, rel:.02,
       pasos:[`Identifica los roles: stock → C₁ = ${C1} M; solución que se quiere → C₂ = ${C2} M y V₂ = ${V2} mL.`,`V₁ = C₂·V₂ / C₁ = ${C2} × ${V2} / ${C1} = ${nf(V1,1)} mL.`,`Prueba de sentido: V₁ (${nf(V1,1)} mL) < V₂ (${V2} mL) y C₂ < C₁ ✔. Si te sale V₁ > V₂, intercambiaste los datos.`], r:`${nf(V1,1)} mL de stock` };
   }
   const [V1, V2] = pick([[400,1200],[650,1500],[250,750],[300,900],[200,500],[500,1250]]); const C1 = pick([2,2.5,3.5,4,5]); const C2 = C1*V1/V2;
   return { q:`Se tienen ${V1} mL de una solución madre de ${sal} ${C1} M. Se le añade agua destilada hasta alcanzar un volumen final de ${V2} mL. Calcule la concentración molar final.`, unit:`M`, ans:C2, rel:.02,
     pasos:[`Datos: C₁ = ${C1} M, V₁ = ${V1} mL, V₂ = ${V2} mL.`,`C₂ = C₁·V₁ / V₂ = ${C1} × ${V1} / ${V2} = ${sci(C2,3)} M.`,`Prueba de sentido: C₂ < C₁ porque se diluyó ✔.`], r:`${sci(C2,3)} M` };
 }},
 {id:`normDoc`,t:`t16`,src:`Parcial 2 (26) · Lab 2 (6)`,name:`Normalidad estilo parcial`,make(){
   const [s, k] = pick([[`Ca(OH)₂`,2],[`CaCO₃`,2],[`H₂SO₄`,2],[`Na₂CO₃`,2],[`Al(OH)₃`,3],[`H₃PO₄`,3],[`Mg(OH)₂`,2],[`NaOH`,1]]);
   const PE = RF_PM[s]/k; const eq = pick([.25,.4,.5,.8,1,1.5,2]); const g = Math.round(eq*PE*10)/10; const [Vt, VL] = pick([[`2 litros`,2],[`700 mL`,.7],[`500 mL`,.5],[`1 litro`,1],[`250 mL`,.25]]);
   const n = g/PE, N = n/VL;
   return { q:`Determina la normalidad (N) de una disolución acuosa que contiene ${nf(g,1)} g de ${s} (PM ${RF_PM[s]}) disueltos en un volumen total de ${Vt}.`, unit:`N`, ans:N, rel:.02,
     pasos:[`Peso equivalente: Peq = PM ÷ n = ${RF_PM[s]} ÷ ${k} = ${nf(PE,2)} g/eq.`,`Equivalentes = masa ÷ Peq = ${nf(g,1)} g ÷ ${nf(PE,2)} g/eq = ${sci(n,3)} eq. (Ojo: ${nf(PE,2)} es la masa de UN equivalente, no el número de equivalentes.)`,`N = eq ÷ L = ${sci(n,3)} ÷ ${nf(VL,2)} L = ${sci(N,3)} N.`,`Control de unidades: g ÷ (g/eq) = eq; eq ÷ L = N ✔.`], r:`${sci(N,3)} N` };
 }},
 {id:`pctDoc`,t:`t16`,src:`Lab 2 (4) · Lab ác./bases (4 y 5)`,name:`% m/v, % v/v y preparación`,make(){
   const m = Math.floor(Math.random()*3);
   if (m === 0){ const p = pick([2.5,3.3,5,7,10]), V = pick([500,1000,1500,2300,2500]); const g = p*V/100;
     return { q:`Un paciente requiere recibir ${V} mL de una solución intravenosa de glucosa al ${p} % m/v. ¿Cuántos gramos de glucosa pura consumirá tras recibir el volumen total?`, unit:`g`, ans:g, rel:.02,
       pasos:[`${p} % m/v = ${p} g de soluto por cada 100 mL de solución.`,`Estimación: ${V} mL son ${nf(V/100,1)} bloques de 100 mL → unos ${nf(V/100*p,0)} g.`,`g = ${p} × ${V} ÷ 100 = ${nf(g,1)} g.`], r:`${nf(g,1)} g de glucosa` }; }
   if (m === 1){ const a = pick([20,25,35,40,60,75]), b = pick([480,500,600,750,960,1000]); const p = a/b*100;
     return { q:`Calcule el %v/v de una disolución que contiene ${a} mL de etanol (C₂H₅OH) disueltos en ${b} mL de disolución. (Redondea a 2 decimales.)`, unit:`%`, ans:+p.toFixed(2), abs:.005,
       pasos:[`%v/v = mL de soluto ÷ mL de disolución × 100.`,`= ${a} ÷ ${b} × 100 = ${p.toFixed(4)} %.`,`Redondeo a 2 decimales: ${p.toFixed(2)} % (se redondea, no se trunca).`], r:`${p.toFixed(2)} % v/v` }; }
   const p = pick([1.6,2.5,4,5,0.9]), V = pick([100,100,250,500]); const g = p*V/100, sv = V - g;
   return { q:`¿Cuántos mililitros de solvente (agua) se usan para preparar ${V} mL de una disolución acuosa al ${p} % p/v de sulfato de cobre II pentahidratado? (Convención del docente: mL de solvente = volumen de solución − gramos de soluto.)`, unit:`mL`, ans:sv, rel:.01,
     pasos:[`Gramos de soluto = ${p} × ${V} ÷ 100 = ${nf(g,2)} g.`,`mL de solvente = ${V} − ${nf(g,2)} = ${nf(sv,2)} mL.`,`Los ${V} mL son la solución final, no el solvente.`], r:`${nf(sv,2)} mL de agua (con ${nf(g,2)} g de soluto)` };
 }},
 {id:`molalDoc`,t:`t16`,src:`Parcial 2 (25)`,name:`Molalidad (moles por kg de solvente)`,make(){
   const s = pick([`NaOH`,`KOH`,`NaCl`,`Glucosa`,`Urea`,`KCl`]); const g = pick([10,15,20,25,30,40]); const gs = pick([200,250,400,500,800]);
   const n = g/RF_PM[s], m = n/(gs/1000);
   return { q:`Se disuelven ${g} g de ${s} (PM ${RF_PM[s]}) en ${gs} g de agua pura. Determine la molalidad (m) de la solución resultante.`, unit:`m`, ans:m, rel:.02,
     pasos:[`Moles de soluto = ${g} ÷ ${RF_PM[s]} = ${sci(n,3)} mol.`,`Kilogramos de solvente = ${gs} g = ${nf(gs/1000,3)} kg (el agua, no la solución).`,`m = ${sci(n,3)} ÷ ${nf(gs/1000,3)} = ${sci(m,3)} mol/kg.`], r:`${sci(m,3)} m` };
 }},
 {id:`baseDoc`,t:`t20`,src:`Parcial 2 (28)`,name:`pH y pOH de una base fuerte`,make(){
   const [s, k] = pick([[`hidróxido de bario [Ba(OH)₂]`,2],[`hidróxido de calcio [Ca(OH)₂]`,2],[`hidróxido de estroncio [Sr(OH)₂]`,2],[`hidróxido de sodio (NaOH)`,1],[`hidróxido de potasio (KOH)`,1],[`hidróxido de litio (LiOH)`,1]]);
   const M = pick([.005,.01,.025,.04,.05,.08,.1,.15]); const OH = k*M, pOH = -Math.log10(OH), pH = 14 - pOH; const ask = pick([`pH`,`pOH`]);
   return { q:`Calcule el ${ask} de una disolución acuosa ${M} M de ${s} a 25 °C.`, unit:``, ans:ask === `pH` ? pH : pOH, abs:.02,
     pasos:[`Es un hidróxido: una base fuerte que se disocia por completo.`,`[OH⁻] = ${k > 1 ? `${k} × ` : ``}${M} = ${sci(OH,3)} M (cada unidad libera ${k} OH⁻).`,`pOH = −log(${sci(OH,3)}) = ${fx2(pOH)}.`,`pH = 14 − ${fx2(pOH)} = ${fx2(pH)}.`,`Prueba de sentido: una base tiene pH > 7 ✔.`], r:`pOH = ${fx2(pOH)} · pH = ${fx2(pH)}` };
 }},
 {id:`acidG`,t:`t20`,src:`Parcial 2 (30)`,name:`Ácido fuerte desde gramos: M, pH y pOH`,make(){
   const s = pick([`HNO₃`,`HCl`,`HClO₄`,`HBr`]); const mol = pick([.002,.005,.01,.02,.04]); const g = +(mol*RF_PM[s]).toFixed(3); const V = pick([100,250,500,1000]);
   const n = g/RF_PM[s], M = n/(V/1000), pH = -Math.log10(M), pOH = 14 - pH; const ask = pick([`M`,`pH`,`pOH`]);
   const label = ask === `M` ? `la molaridad` : `el ${ask}`;
   return { q:`Calcule ${label} de una disolución acuosa preparada al disolver ${nf(g,3)} g de ${s} (PM ${RF_PM[s]}) en agua suficiente hasta completar ${V} mL de solución a 25 °C.`, unit:ask === `M` ? `M` : ``, ans:ask === `M` ? M : ask === `pH` ? pH : pOH, rel:ask === `M` ? .02 : undefined, abs:ask === `M` ? undefined : .02,
     pasos:[`Moles = ${nf(g,3)} ÷ ${RF_PM[s]} = ${sci(n,3)} mol.`,`M = ${sci(n,3)} ÷ ${nf(V/1000,3)} L = ${sci(M,3)} M.`,`${s} es un ácido fuerte: [H⁺] = M = ${sci(M,3)}.`,`pH = −log(${sci(M,3)}) = ${fx2(pH)} · pOH = 14 − ${fx2(pH)} = ${fx2(pOH)}.`], r:ask === `M` ? `${sci(M,3)} M` : ask === `pH` ? `pH = ${fx2(pH)}` : `pOH = ${fx2(pOH)}` };
 }},
 {id:`bufDoc`,t:`t21`,src:`Parcial 2 (29)`,name:`Buffer desde moles (Henderson–Hasselbalch)`,make(){
   const [ac, sa, Ka] = pick([[`ácido acético (CH₃COOH)`,`acetato de sodio (CH₃COONa)`,1.8e-5],[`ácido fórmico (HCOOH)`,`formiato de sodio (HCOONa)`,1.8e-4],[`ácido láctico (C₃H₆O₃)`,`lactato de sodio`,1.4e-4],[`ácido benzoico (C₆H₅COOH)`,`benzoato de sodio`,6.3e-5]]);
   const na = pick([.1,.15,.2,.25,.3]), nb = pick([.2,.25,.3,.35,.4,.5]); const V = pick([250,500,1000]); const pKa = -Math.log10(Ka), pH = pKa + Math.log10(nb/na);
   return { q:`Calcule el pH de una solución amortiguadora preparada disolviendo ${na} moles de ${ac} y ${nb} moles de ${sa} en agua hasta completar ${V} mL de solución a 25 °C (Ka = ${sci(Ka,1)}).`, unit:``, ans:pH, abs:.03,
     pasos:[`pKa = −log(${sci(Ka,1)}) = ${fx2(pKa)}.`,`Henderson–Hasselbalch: pH = pKa + log(base/ácido). El volumen se cancela: sirve la razón de moles.`,`pH = ${fx2(pKa)} + log(${nb}/${na}) = ${fx2(pKa)} + ${fx2(Math.log10(nb/na))} = ${fx2(pH)}.`,`Con más base que ácido el pH queda por encima del pKa ✔.`], r:`pH = ${fx2(pH)}` };
 }},
 {id:`espBuf`,t:`t21`,src:`Parcial 2 (18 y 20) · Lab 2 (10)`,name:`¿Qué especie del buffer neutraliza qué?`,make(){
   const B = [[`H₂CO₃`,`HCO₃⁻`,`carbónico/bicarbonato`],[`H₂PO₄⁻`,`HPO₄²⁻`,`fosfato`],[`CH₃COOH`,`CH₃COO⁻`,`acético/acetato`],[`NH₄⁺`,`NH₃`,`amonio/amoníaco`],[`HF`,`F⁻`,`fluorhídrico/fluoruro`]];
   const i = Math.floor(Math.random()*B.length); const [ac, ba, nm] = B[i]; const h = Math.random() < .5;
   const ans = h ? ba : ac, par = h ? ac : ba; const otros = B.filter((_, j) => j !== i); const ex = shuf(otros).slice(0, 2).map(x => h ? x[1] : x[0]);
   const opts = shuf([ans, par].concat(ex)); const q = h ? `En el buffer ${nm}, ¿qué especie neutraliza un exceso de iones H⁺?` : `En el buffer ${nm}, ¿qué especie neutraliza una pequeña cantidad de una base fuerte (OH⁻)?`;
   return { q, opts, correct:opts.indexOf(ans), pasos:[h ? `El H⁺ lo acepta la base conjugada: la especie con un H menos, ${ba}.` : `El OH⁻ lo neutraliza el ácido débil: la especie con un H más, ${ac}.`, h ? `${ba} + H⁺ → ${ac}` : `${ac} + OH⁻ → ${ba} + H₂O`, `Regla: el ácido "come" OH⁻; la base "come" H⁺.`], r:ans };
 }},
 {id:`carbMix`,t:`t22`,src:`Guía de alifáticos, sección III`,name:`Hibridación de cada carbono (molécula mixta)`,make(){
   let b; do { b = Array.from({ length:4 }, () => pick([1,1,2,3])); } while (!b.some(x => x > 1) || b.some((x, i) => i < 3 && x + b[i + 1] > 4));
   const n = 5, hs = []; for (let i = 0; i < n; i++) hs.push(4 - (i > 0 ? b[i - 1] : 0) - (i < n - 1 ? b[i] : 0));
   const sym = x => x === 1 ? `−` : x === 2 ? `=` : `≡`; const SUBS = [`₀`,`₁`,`₂`,`₃`];
   const frm = hs.map((h, i) => `C${h ? `H${h > 1 ? SUBS[h] : ``}` : ``}` + (i < n - 1 ? sym(b[i]) : ``)).join(``);
   const hyb = i => { const l = i > 0 ? b[i - 1] : 1, r = i < n - 1 ? b[i] : 1; return (l === 3 || r === 3 || (l === 2 && r === 2)) ? `sp` : (l === 2 || r === 2) ? `sp²` : `sp³`; };
   const D = { sp:`sp · lineal · 180°`, 'sp²':`sp² · trigonal plana · 120°`, 'sp³':`sp³ · tetraédrica · 109.5°` };
   const k = Math.floor(Math.random()*n), h = hyb(k); const ans = D[h];
   const opts = shuf([ans].concat(Object.keys(D).filter(x => x !== h).map(x => D[x]), [h === `sp²` ? `sp² · tetraédrica · 109.5°` : `sp³ · trigonal plana · 120°`]));
   return { q:`En la molécula ${frm} (carbonos numerados C1 a C5 de izquierda a derecha), ¿qué hibridación, geometría y ángulo de enlace tiene el carbono C${k + 1}?`, opts, correct:opts.indexOf(ans),
     pasos:[`Cuenta los enlaces múltiples del C${k + 1}: ${[b[k - 1], b[k]].filter(x => x).map(sym).join(` y `)}.`,`Triple (o dos dobles) → sp; un doble → sp²; todos sencillos → sp³.`,`C${k + 1}: ${ans}.`], r:ans };
 }}
);

/* ---------- Banco de preguntas de refuerzo, estilo docente ----------
   rf = patrón que refuerza · tm = tema del historial · lv = nivel (r, c, a) · la opción 0 es la correcta */
const RF_DOC = [];
const rfD = (rf, tm, lv, q, o, e) => RF_DOC.push({ rf, tm, lv, t:(RF_TEMAS[tm] || {}).t || null, q, o, e, src:`Refuerzo de ${RF_TEMAS[tm].n.toLowerCase()}` });
/* enlace e intermoleculares */
rfD(`enlace`,`enlace`,`r`,`¿Entre qué tipo de elementos se forma por lo general un enlace iónico?`,[`Un metal y un no metal`,`Dos no metales distintos`,`Dos metales`,`Dos átomos iguales`],`El metal cede electrones y el no metal los recibe: se transfieren. Dos no metales comparten (covalente) y dos metales forman un enlace metálico.`);
rfD(`enlace`,`enlace`,`c`,`¿Cuál de estas frases describe el enlace covalente?`,[`Los átomos comparten pares de electrones`,`Un átomo transfiere electrones a otro y los iones se atraen`,`Una nube de electrones rodea a los núcleos metálicos`,`Las moléculas se atraen por dipolos temporales`],`Covalente = compartir. La B es el iónico, la C el metálico y la D son fuerzas entre moléculas.`);
rfD(`enlace`,`enlace`,`a`,`El enlace entre el hidrógeno y el cloro en la molécula de HCl es:`,[`Covalente polar`,`Covalente no polar`,`Iónico`,`Metálico`],`Son dos no metales (comparten) y son distintos: el cloro atrae más los electrones, así que el enlace es polar.`);
rfD(`enlace`,`enlace`,`a`,`El enlace entre los dos átomos de la molécula de Cl₂ es:`,[`Covalente no polar`,`Covalente polar`,`Iónico`,`Puente de hidrógeno`],`Dos átomos iguales atraen los electrones con la misma fuerza: no hay polaridad.`);
rfD(`enlace`,`inter`,`c`,`Un ejemplo de enlace intramolecular es:`,[`El enlace covalente dentro de una molécula`,`El puente de hidrógeno entre dos moléculas de agua`,`La atracción dipolo–dipolo`,`Las fuerzas de dispersión de London`],`Intra = dentro de la molécula. Las otras tres opciones actúan entre moléculas.`);
rfD(`enlace`,`inter`,`r`,`¿Cuáles elementos, unidos al hidrógeno, forman los puentes de hidrógeno más fuertes?`,[`Flúor, oxígeno y nitrógeno`,`Carbono, oxígeno y nitrógeno`,`Cloro, azufre y fósforo`,`Carbono, hidrógeno y cloro`],`Solo F, O y N: pequeños y muy electronegativos. El carbono no forma puentes de hidrógeno fuertes.`);
rfD(`enlace`,`inter`,`r`,`¿Qué fuerza intermolecular existe entre moléculas apolares como el N₂ o el CH₄?`,[`Fuerzas de dispersión de London`,`Puente de hidrógeno`,`Dipolo–dipolo permanente`,`Ión–dipolo`],`Sin dipolos permanentes solo quedan los dipolos instantáneos: dispersión de London.`);
rfD(`enlace`,`enlace`,`c`,`El cloruro de sodio sólido no conduce la electricidad, pero disuelto en agua sí. ¿Por qué?`,[`Porque al disolverse los iones quedan libres y se mueven`,`Porque en agua se forman electrones libres`,`Porque el agua es un metal`,`Porque en estado sólido es covalente`],`En el cristal los iones están fijos. Al disolverse (o fundirse) se mueven y llevan la corriente.`);
rfD(`enlace`,`inter`,`c`,`El agua hierve a una temperatura mucho mayor que el H₂S. La razón es que:`,[`Sus moléculas forman puentes de hidrógeno`,`El H₂S es más polar`,`El agua es un compuesto iónico`,`El agua tiene mayor masa molar`],`El H₂S pesa más (34 frente a 18 g/mol) y aun así hierve menos: la diferencia la hacen los puentes de hidrógeno del agua.`);
rfD(`enlace`,`enlace`,`c`,`La polaridad de un enlace covalente entre dos átomos distintos depende de:`,[`La diferencia de electronegatividad entre ellos`,`El número de neutrones`,`El tamaño del núcleo únicamente`,`La temperatura del ambiente`],`A mayor diferencia de electronegatividad, más polar es el enlace.`);
rfD(`enlace`,`enlace`,`a`,`En el carbonato de calcio (CaCO₃), ¿qué tipos de enlace hay?`,[`Iónico entre Ca²⁺ y CO₃²⁻, y covalente dentro del carbonato`,`Solo iónico`,`Solo covalente`,`Metálico entre el calcio y el carbono`],`El carbonato es un ion poliatómico: covalente por dentro, iónico con el calcio.`);
rfD(`enlace`,`enlace`,`r`,`El enlace metálico se describe como:`,[`Núcleos metálicos rodeados de una nube de electrones`,`Transferencia de electrones de un metal a un no metal`,`Pares de electrones compartidos entre no metales`,`Atracción entre moléculas polares`],`La nube de electrones libres explica la conducción y la maleabilidad de los metales.`);
rfD(`enlace`,`enlace`,`c`,`Según la teoría RPECV, ¿cuál es el orden de repulsión entre pares de electrones, de mayor a menor?`,[`Libre–libre > libre–enlazante > enlazante–enlazante`,`Enlazante–enlazante > libre–enlazante > libre–libre`,`Libre–enlazante > libre–libre > enlazante–enlazante`,`Todas las repulsiones son iguales`],`Los pares libres ocupan más espacio que los enlazantes, por eso se repelen más.`);
rfD(`enlace`,`enlace`,`a`,`Un elemento tiene 4 electrones de valencia. En su símbolo de Lewis, los puntos se colocan:`,[`Uno en cada lado (arriba, derecha, abajo, izquierda)`,`Los cuatro juntos en un mismo lado`,`Dos pares en lados opuestos`,`No se colocan puntos`],`Primero se reparte un electrón por lado y solo después se aparean.`);
/* átomo, tabla y configuración */
rfD(`enlace`,`atomo`,`a`,`¿Cuántos neutrones tiene un átomo de francio con A = 223 y Z = 87?`,[`136`,`87`,`223`,`310`],`Neutrones = A − Z = 223 − 87 = 136. El 87 son los protones.`);
rfD(`enlace`,`atomo`,`a`,`Si el peso atómico del flúor es 19 UMA, un mol de flúor pesa:`,[`19 g`,`9.5 g`,`6.022 × 10²³ g`,`9 g`],`La masa de un mol en gramos coincide con el peso atómico en UMA. El número de Avogadro cuenta partículas, no gramos.`);
rfD(`enlace`,`tabla`,`c`,`¿Cuál es el elemento de mayor radio atómico y cuál el más electronegativo, respectivamente?`,[`Francio y flúor`,`Astato y flúor`,`Hidrógeno y francio`,`Flúor y francio`],`El radio crece hacia abajo y a la izquierda (Fr); la electronegatividad crece hacia arriba y a la derecha (F).`);
rfD(`enlace`,`conf`,`a`,`La configuración electrónica del selenio (Z = 34), siguiendo el orden de llenado de Moeller, es:`,[`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴`,`1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴`,`1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4p⁴ 3d¹⁰`,`1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴`],`El orden de llenado es 3p → 4s → 3d → 4p. Las demás opciones alteran el orden o no suman 34 electrones.`);
rfD(`enlace`,`tabla`,`c`,`Los elementos que pertenecen a un mismo grupo de la tabla periódica tienen en común:`,[`El número de electrones de valencia`,`El nivel de energía`,`El radio atómico`,`La electronegatividad`],`Grupo = columna = mismos electrones de valencia. Periodo = fila = mismo nivel de energía.`);
rfD(`enlace`,`atomo`,`c`,`Los isótopos de un elemento son átomos con:`,[`Igual número atómico y distinto número de masa`,`Igual número de masa y distinto número atómico`,`Igual número de neutrones y distinto de protones`,`Distinta carga eléctrica`],`Mismo Z (protones), distinto A (por distinto número de neutrones).`);
/* inversión de sentido */
rfD(`inversion`,`dil`,`c`,`Al diluir una solución agregando solvente:`,[`Los moles de soluto no cambian y la concentración disminuye`,`Los moles de soluto aumentan y la concentración aumenta`,`Los moles de soluto disminuyen y el volumen baja`,`La concentración se mantiene y el volumen baja`],`Solo se agrega solvente: n constante, volumen ↑, concentración ↓ (C₁V₁ = C₂V₂).`);
rfD(`inversion`,`conc`,`c`,`Las partes por millón (ppm) son más útiles cuando la solución es:`,[`Muy diluida (trazas de soluto)`,`Muy concentrada`,`Saturada`,`Sobresaturada`],`ppm expresa cantidades muy pequeñas de soluto, como contaminantes.`);
rfD(`inversion`,`termo`,`a`,`Una reacción tiene ΔG = −25 kJ/mol. Se clasifica como:`,[`Exergónica (espontánea)`,`Endergónica`,`En equilibrio químico`,`Imposible de realizar`],`ΔG negativo: la reacción libera energía libre. ΔG positivo sería endergónica.`);
rfD(`inversion`,`termo`,`c`,`Una enzima con alta afinidad por su sustrato tiene un Km:`,[`Bajo`,`Alto`,`Igual a la velocidad máxima`,`Independiente de la afinidad`],`Con alta afinidad basta poco sustrato para llegar a la mitad de la velocidad máxima: Km bajo.`);
rfD(`inversion`,`ph`,`a`,`¿Cuál es un valor razonable para el pH de una solución 0.025 M de Ba(OH)₂?`,[`12.7`,`1.3`,`1.6`,`7.0`],`Es una base fuerte: pH > 7. [OH⁻] = 0.05 M → pOH = 1.3 → pH = 12.7. Valores de 1.3 o 1.6 corresponden a un ácido.`);
rfD(`inversion`,`dil`,`a`,`Para preparar 600 mL de una solución 1.6 M a partir de un stock 4.5 M, el volumen de stock será:`,[`Menor que 600 mL (≈ 213 mL)`,`Mayor que 600 mL (≈ 1687 mL)`,`Exactamente 600 mL`,`Cero: no hace falta stock`],`V₁ = C₂V₂/C₁ = 1.6 × 600 / 4.5 = 213 mL. Del stock concentrado siempre se toma menos que el volumen final.`);
rfD(`inversion`,`sol`,`c`,`Al aumentar la temperatura, la solubilidad de un gas en un líquido:`,[`Disminuye`,`Aumenta`,`No cambia`,`Primero aumenta y luego se anula`],`Los gases se disuelven menos al calentar (la bebida gaseosa tibia pierde su gas).`);
rfD(`inversion`,`sol`,`c`,`Al aumentar la presión parcial de un gas sobre un líquido, su solubilidad:`,[`Aumenta (ley de Henry)`,`Disminuye`,`No cambia`,`Se vuelve cero`],`Ley de Henry: la solubilidad es directamente proporcional a la presión parcial.`);
rfD(`inversion`,`ph`,`c`,`En la zona básica de la escala de pH, las concentraciones de H⁺ y OH⁻ son, respectivamente:`,[`[H⁺] menor y [OH⁻] mayor`,`[H⁺] mayor y [OH⁻] menor`,`Ambas iguales`,`Ambas mayores que 10⁻⁷ M`],`pH > 7 significa menos H⁺ y más OH⁻ (Kw = [H⁺][OH⁻] = 10⁻¹⁴).`);
/* bases, pOH y buffers */
rfD(`bases`,`buf`,`c`,`Cuando se añade OH⁻ a un buffer, lo neutraliza:`,[`El componente ácido (HA)`,`El componente básico (A⁻)`,`El agua del buffer`,`El catión de la sal`],`HA + OH⁻ → A⁻ + H₂O. Una base no neutraliza a otra base.`);
rfD(`bases`,`buf`,`c`,`Cuando se añade H⁺ a un buffer, lo neutraliza:`,[`La base conjugada (A⁻)`,`El ácido débil (HA)`,`El solvente`,`El catión de la sal`],`A⁻ + H⁺ → HA.`);
rfD(`bases`,`buf`,`c`,`En el buffer fosfato (H₂PO₄⁻ / HPO₄²⁻), la especie que acepta H⁺ es:`,[`HPO₄²⁻`,`H₂PO₄⁻`,`Ambas por igual`,`Ninguna de las dos`],`La base conjugada es la que tiene un H menos: HPO₄²⁻.`);
rfD(`bases`,`buf`,`c`,`En el buffer carbónico/bicarbonato, la especie que neutraliza un exceso de H⁺ es:`,[`HCO₃⁻ (bicarbonato)`,`H₂CO₃`,`El agua`,`El sodio`],`HCO₃⁻ + H⁺ → H₂CO₃. Es el principal amortiguador de la sangre.`);
rfD(`bases`,`ph`,`a`,`¿Cómo se mide el pH de la sangre de un paciente en el laboratorio clínico?`,[`Con gases arteriales (gasometría)`,`Con papel pH`,`Con tiras reactivas de orina`,`Con fenolftaleína`],`Cuando la pregunta habla de un paciente, el contexto es clínico: gasometría arterial.`);
rfD(`bases`,`acb`,`c`,`El alcohol etílico disuelto en agua es:`,[`Un no electrolito`,`Un electrolito fuerte`,`Un electrolito débil`,`Un ácido fuerte`],`Es una molécula que se disuelve sin formar iones; la solución no conduce la electricidad.`);
rfD(`bases`,`acb`,`c`,`El cloruro de sodio disuelto en agua es un electrolito:`,[`Fuerte`,`Débil`,`No electrolito`,`Neutro`],`Se disocia por completo en Na⁺ y Cl⁻.`);
rfD(`bases`,`acb`,`c`,`El ácido acético disuelto en agua es un electrolito:`,[`Débil`,`Fuerte`,`No electrolito`,`Insoluble`],`Se ioniza solo parcialmente: pocos iones.`);
rfD(`bases`,`acb`,`r`,`Según Arrhenius, una base es una sustancia que:`,[`En agua libera iones OH⁻`,`Acepta protones`,`Dona pares de electrones`,`Acepta pares de electrones`],`Es la teoría más limitada: exige agua y OH⁻.`);
rfD(`bases`,`acb`,`r`,`Según Brønsted–Lowry, una base es una sustancia que:`,[`Acepta protones (H⁺)`,`Libera OH⁻ en agua`,`Dona protones`,`Acepta pares de electrones`],`Por eso el amoníaco (NH₃), sin OH⁻ en la fórmula, es una base.`);
rfD(`bases`,`acb`,`r`,`Según Lewis, un ácido es una sustancia que puede:`,[`Aceptar un par de electrones`,`Donar un par de electrones`,`Donar solo protones`,`Liberar OH⁻`],`Lewis es la definición más amplia: ácido = aceptor de par de electrones.`);
rfD(`bases`,`ph`,`a`,`Una disolución de Ba(OH)₂ 0.01 M tiene una concentración de OH⁻ igual a:`,[`0.02 M`,`0.01 M`,`0.005 M`,`1 × 10⁻¹² M`],`Cada Ba(OH)₂ libera 2 OH⁻: [OH⁻] = 2 × 0.01 = 0.02 M.`);
rfD(`bases`,`ph`,`a`,`El pH de una solución de HCl 0.01 M es:`,[`2`,`12`,`0.01`,`7`],`Ácido fuerte: [H⁺] = 0.01 = 10⁻² → pH = 2.`);
rfD(`bases`,`buf`,`c`,`Un buffer resiste mejor los cambios de pH cuando:`,[`El pH es cercano al pKa y hay buena cantidad de ácido y de base conjugada`,`Solo contiene un ácido fuerte`,`Su pH es siempre 7`,`No contiene ninguna sal`],`El buffer actúa en pKa ± 1 y necesita las dos formas, ácido y base.`);
rfD(`bases`,`buf`,`r`,`La capacidad del cuerpo de mantener estables sus condiciones internas frente a los cambios del exterior se llama:`,[`Homeostasis`,`Equilibrio`,`Sistema buffer`,`Mecanismos de compensación`],`El buffer y la compensación son herramientas de la homeostasis.`);
/* unidades de concentración y soluciones */
rfD(`normalidad`,`conc`,`a`,`El número de equivalentes que hay en 37 g de Ca(OH)₂ (PM 74) es:`,[`1 eq`,`37 eq`,`0.5 eq`,`2 eq`],`Peq = 74/2 = 37 g/eq → equivalentes = 37 g ÷ 37 g/eq = 1 eq. El 37 es una masa por equivalente, no un número de equivalentes.`);
rfD(`normalidad`,`conc`,`c`,`La normalidad se define como:`,[`Equivalentes de soluto por litro de solución`,`Moles de soluto por litro de solución`,`Moles de soluto por kilogramo de solvente`,`Gramos de soluto por 100 mL de solución`],`N = eq/L. Molaridad = mol/L; molalidad = mol/kg de solvente.`);
rfD(`normalidad`,`conc`,`a`,`El peso equivalente del CaCO₃ (PM 100, carga 2) es:`,[`50 g/eq`,`100 g/eq`,`200 g/eq`,`25 g/eq`],`Peq = PM ÷ carga = 100 ÷ 2 = 50 g/eq.`);
rfD(`unidades`,`conc`,`c`,`La molalidad se define como:`,[`Moles de soluto por kilogramo de solvente`,`Moles de soluto por litro de solución`,`Equivalentes por litro de solución`,`Gramos de soluto por 100 g de solución`],`Usa la masa del solvente; por eso no cambia con la temperatura.`);
rfD(`unidades`,`conc`,`c`,`La molaridad se define como:`,[`Moles de soluto por litro de solución`,`Moles de soluto por kilogramo de solvente`,`Equivalentes por litro de solución`,`Gramos de soluto por litro de solvente`],`Usa el volumen de la solución completa.`);
rfD(`unidades`,`conc`,`a`,`Una solución al 7 % m/v tiene 7 g de soluto en cada:`,[`100 mL de solución`,`100 g de solvente`,`1 L de solvente`,`100 g de soluto`],`m/v = masa de soluto por volumen de solución.`);
rfD(`unidades`,`conc`,`a`,`¿Cuántos gramos de glucosa hay en 2300 mL de una solución al 7 % m/v?`,[`161 g`,`16.1 g`,`0.3 g`,`7 g`],`7 g por cada 100 mL × 23 bloques de 100 mL = 161 g.`);
rfD(`unidades`,`conc`,`a`,`35 mL de etanol en 960 mL de disolución equivalen aproximadamente a:`,[`3.65 % v/v`,`27.4 % v/v`,`36.5 % v/v`,`0.365 % v/v`],`35 ÷ 960 × 100 = 3.6458 → 3.65 % (se redondea, no se trunca).`);
rfD(`unidades`,`conc`,`a`,`Para preparar 100 mL de disolución al 1.6 % p/v se usan 1.6 g de soluto y, según la convención del docente, ¿cuántos mL de agua?`,[`98.4 mL`,`100 mL`,`101.6 mL`,`1.6 mL`],`mL de solvente = 100 − 1.6 = 98.4 mL. Los 100 mL son el volumen de la solución final.`);
rfD(`unidades`,`dil`,`c`,`Las propiedades coligativas de una solución dependen de:`,[`La cantidad de partículas de soluto, no de su identidad`,`La identidad química del soluto`,`El volumen del recipiente`,`Únicamente de la temperatura ambiente`],`Coligativa = cuántas partículas, no cuáles.`);
rfD(`unidades`,`dil`,`a`,`Un eritrocito sumergido en una solución hipotónica:`,[`Se hincha y se rompe (hemólisis)`,`Se arruga (crenación)`,`No cambia de forma`,`Se evapora`],`El agua entra por ósmosis hacia el medio más concentrado (el interior de la célula).`);
rfD(`unidades`,`sol`,`c`,`En una solución, el soluto es:`,[`El componente que está en menor cantidad`,`El componente que está en mayor cantidad`,`Siempre un sólido`,`Siempre el agua`],`Soluto = el que se disuelve y está en menor cantidad; solvente = el que está en mayor cantidad.`);
/* laboratorio */
rfD(`lab`,`lab`,`r`,`La propipeta (pera de succión) se usa para:`,[`Aspirar líquido con la pipeta sin usar la boca`,`Medir el pH`,`Calentar soluciones`,`Pesar sólidos`],`Es un instrumento de seguridad para pipetear.`);
rfD(`lab`,`lab`,`r`,`La fenolftaleína en una solución de NaOH se torna:`,[`Rosa o fucsia`,`Incolora`,`Amarilla`,`Azul`],`En medio básico (pH > 8.2) la fenolftaleína es rosa.`);
rfD(`lab`,`lab`,`r`,`La fenolftaleína en medio ácido es:`,[`Incolora`,`Rosa`,`Roja`,`Verde`],`Incolora en ácido y neutro; rosa en base.`);
rfD(`lab`,`lab`,`r`,`El extracto de repollo morado en un medio fuertemente ácido (jugo de limón) toma color:`,[`Rosado o rojo`,`Verde`,`Azul`,`Incoloro`],`El repollo morado es indicador universal: rojo en ácidos y verde-amarillo en bases fuertes.`);
rfD(`lab`,`lab`,`r`,`El gas que se produce al reaccionar magnesio con ácido sulfúrico es:`,[`Hidrógeno`,`Oxígeno`,`Dióxido de carbono`,`Cloro`],`Mg + H₂SO₄ → MgSO₄ + H₂.`);
rfD(`lab`,`lab`,`r`,`El precipitado marrón que se forma al mezclar FeCl₃ con NaOH es:`,[`Hidróxido de hierro III, Fe(OH)₃`,`Cloruro de sodio`,`Óxido de sodio`,`Hierro metálico`],`FeCl₃ + 3 NaOH → Fe(OH)₃↓ + 3 NaCl.`);
rfD(`lab`,`lab`,`r`,`El gas que se libera al agregar HCl a carbonato de calcio es:`,[`Dióxido de carbono (CO₂)`,`Hidrógeno`,`Oxígeno`,`Cloro`],`2 HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.`);
rfD(`lab`,`lab`,`c`,`Al añadir agua al residuo de quemar cinta de magnesio se forma:`,[`Hidróxido de magnesio (leche de magnesia)`,`Cloruro de magnesio`,`Magnesio metálico`,`Carbonato de magnesio`],`Mg → MgO (al quemar); MgO + H₂O → Mg(OH)₂.`);
rfD(`lab`,`lab`,`c`,`El NaCl no presenta olor ni volatilidad porque:`,[`Es un compuesto iónico con fuertes atracciones entre iones`,`Es una molécula covalente apolar`,`Es un gas a temperatura ambiente`,`Es un metal`],`Sus iones se atraen muy fuerte: no pasa a gas, no libera olor.`);
rfD(`lab`,`lab`,`r`,`Entre sodio, magnesio y aluminio, el metal que reacciona más violentamente con el agua es:`,[`Sodio`,`Magnesio`,`Aluminio`,`Los tres reaccionan igual`],`La reactividad con el agua baja en el orden Na ≫ Mg > Al.`);

/* ---------- Preguntas abiertas de respuesta corta (para el Corto) ---------- */
const RF_ABI = [];
const rfA = (rf, tm, q, a, k) => RF_ABI.push({ rf, tm, t:(RF_TEMAS[tm] || {}).t || null, q, a, k, src:`Refuerzo de ${RF_TEMAS[tm].n.toLowerCase()}` });
rfA(`unidades`,`sol`,`¿Cuál es la diferencia entre el soluto y el solvente de una solución?`,`El soluto es el componente que está en menor cantidad y se disuelve; el solvente es el que está en mayor cantidad y lo disuelve.`,[`menor cantidad`,`mayor cantidad`]);
rfA(`unidades`,`conc`,`¿Cuál es la diferencia conceptual principal entre la molaridad (M) y la molalidad (m)?`,`Molaridad = moles de soluto ÷ litros de solución. Molalidad = moles de soluto ÷ kilogramos de solvente (no depende de la temperatura).`,[`moles de soluto`,`litros de solución`,`kg de solvente`]);
rfA(`bases`,`acb`,`¿Cuál es la diferencia entre la base de Arrhenius y la de Brønsted–Lowry?`,`Arrhenius: base = sustancia que en agua libera OH⁻. Brønsted–Lowry: base = aceptor de protones (H⁺), con o sin agua y sin OH⁻ en la fórmula.`,[`libera OH⁻ en agua`,`acepta H⁺`]);
rfA(`enlace`,`enlace`,`¿Cuál es la diferencia entre el enlace iónico y el covalente?`,`Iónico: se transfieren electrones (metal + no metal) y los iones de carga opuesta se atraen. Covalente: se comparten pares de electrones entre no metales.`,[`transfieren`,`comparten`,`metal + no metal`]);
rfA(`enlace`,`atomo`,`Explique qué son los isótopos y cómo se calcula el número de neutrones.`,`Isótopos: átomos del mismo elemento (igual Z) con distinto número de masa (A). Neutrones = A − Z.`,[`igual Z`,`distinto A`,`A − Z`]);
rfA(`inversion`,`sol`,`Entre aumentar la temperatura y aumentar la presión, ¿cuál favorece la solubilidad de un gas en un líquido? Explique.`,`La presión (ley de Henry): la solubilidad del gas es directamente proporcional a su presión parcial. Al aumentar la temperatura la solubilidad del gas disminuye.`,[`presión`,`Henry`,`temperatura disminuye`]);
rfA(`unidades`,`sol`,`Explique en qué consiste el grado de subdivisión de un soluto sólido y cómo influye en la velocidad de disolución.`,`Es qué tan pequeñas son las partículas del soluto. A mayor subdivisión (más superficie de contacto), el soluto se disuelve más rápido.`,[`partículas pequeñas`,`superficie de contacto`,`más rápido`]);
rfA(`inversion`,`ph`,`En la zona básica de la escala de pH, ¿cómo son las concentraciones de H⁺ y OH⁻, respectivamente?`,`[H⁺] menor y [OH⁻] mayor (pH > 7).`,[`H⁺ menor`,`OH⁻ mayor`]);
rfA(`bases`,`buf`,`¿Qué componente del buffer ácido carbónico/bicarbonato neutraliza un exceso de H⁺? Escriba la reacción.`,`El bicarbonato (base conjugada): HCO₃⁻ + H⁺ → H₂CO₃.`,[`bicarbonato`,`HCO₃⁻`]);
rfA(`unidades`,`dil`,`¿De qué dependen las propiedades coligativas? Nombre dos.`,`Dependen del número de partículas de soluto, no de su naturaleza. Ejemplos: descenso de la presión de vapor, aumento del punto de ebullición, descenso del punto de congelación y presión osmótica.`,[`número de partículas`,`dos ejemplos`]);
rfA(`lab`,`lab`,`¿Para qué sirve la propipeta? ¿Por qué se usa?`,`Para aspirar líquidos en la pipeta sin hacerlo con la boca; es una medida de seguridad ante sustancias peligrosas.`,[`aspirar`,`sin la boca`,`seguridad`]);
rfA(`enlace`,`inter`,`Explique por qué las moléculas de agua forman puentes de hidrógeno.`,`El H está unido al oxígeno, muy electronegativo: queda con carga parcial positiva (δ⁺) y es atraído por el par libre del oxígeno (δ⁻) de otra molécula.`,[`H δ⁺`,`O δ⁻`,`par libre`]);
rfA(`inversion`,`termo`,`¿Qué indica un valor negativo de ΔG en una reacción?`,`Que la reacción es espontánea y libera energía libre: exergónica.`,[`espontánea`,`exergónica`]);
rfA(`bases`,`acb`,`¿Por qué el etanol no conduce la electricidad en solución acuosa?`,`Porque es un no electrolito: se disuelve como moléculas sin formar iones, y la corriente necesita iones móviles.`,[`no electrolito`,`no forma iones`]);
const RF_DOCS = () => RF_DOC.concat(typeof PACKS !== `undefined` && PACKS.DOC ? PACKS.DOC : []);
const RF_ABIS = () => RF_ABI.concat(typeof PACKS !== `undefined` && PACKS.DOCA ? PACKS.DOCA : []);

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
      const commit = () => { const v = parseNota(i.value, sc); if (v === undefined){ i.classList.add(`bad`); return; } i.classList.remove(`bad`); if (v !== n.g){ n.g = v; nSave(); motNota(v, m); } };
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
  if (S.mode === `notas`){ const h1 = $(`#head h1`); if (h1) h1.textContent = `Mis notas`; const k = $(`#head .top .k`); if (k) k.textContent = `Organizar · ${curCiclo() ? curCiclo().name : `Notas`}`; document.querySelectorAll(`#head .chips, #head .hstat`).forEach(x => x.remove()); }
  if (S.mode === `inicio`){
    const k = $(`#head .top .k`); if (k) k.textContent = `Química · Laboratorio Clínico`;
    const w = el(`div`, `clockwrap`); w.append(clockBig()); if (typeof motLine === `function`) w.append(motLine());
    if (innerWidth <= 700){ // en el teléfono: hora pequeña junto a los botones y solo la frase debajo
      w.innerHTML = ``; if (typeof motLine === `function`) w.append(motLine()); top.after(w);
      const d = new Date(); if (k){ k.textContent = `${DIAS[d.getDay()][0].toUpperCase() + DIAS[d.getDay()].slice(1)} ${d.getDate()} ${MESES[d.getMonth()].slice(0, 3)} · `; const c = el(`span`, ``); c.dataset.clock = `chip`; c.className = `kclock`; c.onclick = openClockSettings; paintClock(c); k.append(c); }
    } else top.insertBefore(w, tools);
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

/* ======================= FRASES Y FELICITACIONES =======================
   {n} = nombre de la estudiante. Las citas de personas famosas que no tienen una fuente
   exacta comprobada van marcadas como "atribuida a". Versículos: Reina-Valera 1960.      */
const FRASES = [
`{n}, la disciplina de hoy es el título de mañana.`,
`No tienes que estudiar todo hoy. Solo tienes que estudiar hoy.`,
`Cada tarjeta que lees es un ladrillo más de la profesional que estás construyendo.`,
`La motivación te hace empezar; la disciplina te hace llegar. Y tú tienes las dos.`,
`Un día a la vez, un tema a la vez. Así se llega lejos.`,
`{n}, eres capaz. No porque sea fácil, sino porque no te rindes.`,
`Lo que hoy te cuesta, mañana lo vas a explicar con calma.`,
`Detrás de cada resultado de laboratorio confiable hay alguien que estudió como tú lo estás haciendo ahora.`,
`No compitas con nadie: compite con la {n} de ayer.`,
`Veinticinco minutos de enfoque valen más que tres horas distraída.`,
`Si hoy avanzas poquito, igual avanzaste. Eso cuenta.`,
`Tu futuro paciente no conoce tu nombre, pero ya depende de lo que estás aprendiendo hoy.`,
`Las metas grandes se logran con hábitos pequeños repetidos todos los días.`,
`El cansancio pasa; lo aprendido se queda.`,
`{n}, confía en el proceso: repasar, practicar, equivocarte, corregir, dominar.`,
`Equivocarte en la práctica es la mejor forma de no equivocarte en el examen.`,
`Hoy siembras horas de estudio; pronto vas a cosechar tranquilidad en el parcial.`,
`Eres más disciplinada de lo que crees. Mira todo lo que ya has logrado.`,
`La constancia vence lo que la dicha no alcanza.`,
`No esperes tener ganas: empieza, y las ganas llegan en el camino.`,
`Cada pregunta que respondes te acerca a la bata blanca con tu nombre.`,
`Lo difícil no es señal de que no puedes; es señal de que estás creciendo.`,
`{n}, tus metas no tienen fecha de vencimiento, pero tu esfuerzo de hoy sí tiene recompensa.`,
`Estudiar también es un acto de amor por ti misma y por tu futuro.`,
`El conocimiento que ganas hoy nadie te lo puede quitar.`,
`Un tema que hoy parece imposible es el que mañana dominas.`,
`La diferencia entre soñar y lograr se llama disciplina.`,
`Respira, enfócate y da el siguiente paso. Solo uno.`,
`Ser constante no es estudiar perfecto; es volver aunque un día hayas fallado.`,
`Tu esfuerzo silencioso de hoy será tu éxito visible mañana.`,
`{n}, naciste para servir con ciencia y con corazón.`,
`No te compares con el ritmo de otros: tu camino es tuyo y vas bien.`,
`La química no se aprende de una vez: se entiende de a poquito, como tú lo estás haciendo.`,
`Cada error corregido es un concepto que ya no se te olvida.`,
`Hoy es un buen día para demostrarte de lo que eres capaz.`,
`La excelencia no es un acto, es un hábito que se construye cada día.`,
`Pequeños avances diarios forman grandes profesionales.`,
`Que el miedo al examen se convierta en ganas de demostrar lo que sabes.`,
`{n}, cuando termines tu carrera vas a recordar estas noches de estudio con orgullo.`,
`Lo que haces con constancia termina haciéndose fácil.`,
`Estudia como si alguien dependiera de tu precisión, porque algún día será así.`,
`Un buen laboratorista no adivina: mide, calcula y verifica. Hoy estás entrenando eso.`,
`Tu disciplina es tu superpoder.`,
`No importa cuántas veces lo repitas; importa que cada vez lo entiendes mejor.`,
`Si te sientes cansada, descansa, pero no abandones.`,
`El parcial es solo una oportunidad para mostrar lo que ya practicaste.`,
`Lo que entrenas en silencio se nota cuando más importa.`,
`{n}, eres la prueba de que con esfuerzo sí se puede.`,
`Hoy no tienes que ser perfecta, solo tienes que ser constante.`,
`Cada pomodoro terminado es una promesa cumplida contigo misma.`,
`Enfócate en lo que sí puedes controlar: tu esfuerzo de hoy.`,
`Las grandes carreras se construyen en días comunes como este.`,
`Una mente preparada no le teme a ningún examen.`,
`Lo estás haciendo mejor de lo que piensas.`,
`Repasar no es perder tiempo: es asegurar lo que ya ganaste.`,
`Tu yo del futuro te va a agradecer este esfuerzo.`,
`{n}, cada concepto que entiendes es una herramienta más para ayudar a otros.`,
`No es suerte: es preparación.`,
`Avanza aunque sea lento; lo importante es no detenerte.`,
`La disciplina es elegir entre lo que quieres ahora y lo que más quieres.`,
`Hoy estudias por un parcial; mañana trabajarás por la salud de muchas personas.`,
`Tu capacidad no se mide por lo que te cuesta, sino por lo que logras a pesar de eso.`,
`Cree en ti con la misma fuerza con la que estudias.`,
`Cierra las distracciones, abre tus metas.`,
`Un paso hoy, otro mañana, y de pronto ya llegaste.`,
`{n}, tu dedicación es admirable. Sigue así.`,
`El orgullo de aprobar sabe mejor cuando sabes cuánto te esforzaste.`,
`No dejes que un mal día te haga olvidar todos tus buenos días.`,
`La meta está más cerca cada vez que eliges estudiar.`,
`Organizada, enfocada y constante: así se gana un ciclo.`,
`Lo que te propones con disciplina, se cumple.`,
`Un tubo a la vez, una muestra a la vez, una pregunta a la vez.`,
`Entender la teoría hoy te dará seguridad en el laboratorio mañana.`,
`Eres capaz de aprender cualquier cosa si le das el tiempo y la constancia que merece.`,
`{n}, estás formando una profesional que hace las cosas bien.`,
`Lo importante no es la velocidad, sino la dirección. Y vas en la correcta.`,
`Cuando quieras rendirte, recuerda por qué empezaste.`,
`El esfuerzo de hoy es el respaldo de tus decisiones de mañana.`,
`Paciencia contigo misma: el aprendizaje profundo toma tiempo.`,
`Estudiar con calma también es estudiar bien.`,
`Una gota de esfuerzo diario llena el vaso del éxito.`,
`Tienes todo lo necesario para lograrlo: cabeza, corazón y disciplina.`,
`Cada sesión de estudio es una inversión que nunca pierde valor.`,
`{n}, tu historia de éxito se está escribiendo con cada hora de estudio.`,
`Haz hoy lo que otros no quieren, para lograr mañana lo que otros no pueden.`,
`La seguridad en el examen se construye antes del examen.`,
`Tus metas merecen tu mejor versión, y la estás dando.`,
`Aprender ciencia es aprender a pensar con orden. Vas muy bien.`,
`No hay atajos para lo que vale la pena, pero sí hay buenos métodos. Y aquí los tienes.`,
`El mejor momento para estudiar era ayer; el segundo mejor es ahora.`,
`Cada respuesta correcta es una pequeña victoria. Colecciónalas.`,
`{n}, sigue adelante: lo mejor de tu carrera todavía está por venir.`,
`El que persevera alcanza.`,
`Tu constancia de hoy será tu tranquilidad el día del parcial.`,
`Estudia con propósito: no para pasar, sino para saber.`,
`Si lo entiendes, lo recuerdas. Si lo practicas, lo dominas.`,
`Eres una mujer valiente, inteligente y capaz.`,
`Descansar también es parte del plan. Vuelve con fuerza.`,
`Cada concepto difícil que superas te hace más fuerte para el siguiente.`,
`La mejor recompensa al esfuerzo es en lo que te conviertes mientras lo haces.`,
`{n}, nadie puede hacer este camino por ti, y tú lo estás haciendo muy bien.`,
`Concéntrate en el progreso, no en la perfección.`,
`Lo que hoy es práctica, mañana será tu profesión.`,
`Hoy das lo mejor de ti, y eso siempre es suficiente.`,
`Tus manos van a procesar muestras que cambian diagnósticos. Prepáralas con conocimiento.`,
`No es el talento, es la práctica constante la que marca la diferencia.`,
`Un repaso más, una duda menos.`,
`La disciplina convierte las metas en realidades.`,
`Las metas claras y los hábitos firmes siempre ganan.`,
`{n}, te estás convirtiendo en alguien de quien vas a estar muy orgullosa.`,
`Cuando el camino se ponga cuesta arriba, recuerda que la vista desde arriba vale la pena.`,
`Ponle tu sello a cada tarea: esfuerzo, orden y corazón.`,
`Hoy cuenta. Cada día cuenta.`,
`El éxito es la suma de días como este, en los que decides seguir.`,
`No tienes que sentirte lista para empezar; empezar es lo que te prepara.`,
`Tienes la capacidad. Tienes la disciplina. Ahora solo toca seguir.`,
`{n}, que tu constancia sea más grande que tus excusas.`,
`Cada página leída es una pregunta menos que temer.`,
`Estudiar con constancia es la forma más segura de lograr tus sueños.`,
`Lo que hoy parece un montón de fórmulas, mañana será tu herramienta de trabajo.`,
`Celebra cada avance; los grandes logros están hechos de avances pequeños.`,
`La calma también se entrena: respira y sigue.`,
`Tu dedicación de hoy abre las puertas de mañana.`,
`Eres capaz de cosas grandes. Este ciclo es una de ellas.`,
`{n}, sigue brillando: tu esfuerzo ilumina tu camino.`,
`Entre más practicas, más fácil se vuelve. Así funciona el cerebro.`,
`Aprender es un regalo que te das a ti misma todos los días.`,
`Hazlo con miedo si hace falta, pero hazlo.`,
`Tu meta no se mueve; tú te acercas a ella cada día.`,
`Con disciplina, hasta lo difícil se vuelve posible.`,
`Mantente firme: los resultados llegan a quien no se rinde.`,
`Lo vas a lograr. Ya lo estás logrando.`
];
const CITAS = [
[`El éxito es la suma de pequeños esfuerzos repetidos día tras día.`, `Atribuida a Robert Collier`],
[`La educación es el arma más poderosa que puedes usar para cambiar el mundo.`, `Nelson Mandela`],
[`Siempre parece imposible hasta que se hace.`, `Atribuida a Nelson Mandela`],
[`La disciplina es el puente entre las metas y los logros.`, `Jim Rohn`],
[`En el campo de la observación, el azar solo favorece a la mente preparada.`, `Louis Pasteur`],
[`Nada en la vida debe ser temido, solo comprendido.`, `Atribuida a Marie Curie`],
[`Uno nunca se da cuenta de lo que se ha hecho; solo puede ver lo que queda por hacer.`, `Atribuida a Marie Curie`],
[`El genio es un uno por ciento de inspiración y un noventa y nueve por ciento de transpiración.`, `Thomas A. Edison`],
[`La perseverancia no es una carrera larga; son muchas carreras cortas, una tras otra.`, `Walter Elliot`],
[`Nada grande se ha logrado jamás sin entusiasmo.`, `Ralph Waldo Emerson`],
[`Haz lo que puedas, con lo que tengas, donde estés.`, `Theodore Roosevelt`],
[`El conocimiento es poder.`, `Francis Bacon`],
[`Aprender sin pensar es esfuerzo perdido; pensar sin aprender, peligroso.`, `Confucio`],
[`No importa lo lento que vayas, siempre y cuando no te detengas.`, `Atribuida a Confucio`],
[`El fracaso es la oportunidad de comenzar de nuevo con más inteligencia.`, `Atribuida a Henry Ford`],
[`Tanto si crees que puedes como si crees que no puedes, estás en lo cierto.`, `Atribuida a Henry Ford`],
[`No cuentes los días, haz que los días cuenten.`, `Atribuida a Muhammad Ali`],
[`El que lee mucho y anda mucho, ve mucho y sabe mucho.`, `Miguel de Cervantes`],
[`Atribuyo mi éxito a esto: nunca di ni acepté excusas.`, `Atribuida a Florence Nightingale`],
[`Nada funcionará a menos que tú lo hagas.`, `Maya Angelou`],
[`Gota a gota se horada la piedra.`, `Proverbio latino (Ovidio)`],
[`Caer está permitido; levantarse es obligatorio.`, `Proverbio ruso`],
[`La paciencia es amarga, pero su fruto es dulce.`, `Atribuida a Jean-Jacques Rousseau`],
[`Quien se atreve a enseñar nunca debe dejar de aprender.`, `John Cotton Dana`],
[`La ciencia es el alma de la prosperidad de las naciones y la fuente de todo progreso.`, `Atribuida a Louis Pasteur`],
[`Más vale añadir vida a los días que días a la vida.`, `Atribuida a Rita Levi-Montalcini`],
[`Es duro fracasar, pero es todavía peor no haber intentado nunca triunfar.`, `Theodore Roosevelt`],
[`Lo que sabemos es una gota de agua; lo que ignoramos es el océano.`, `Atribuida a Isaac Newton`],
[`Poco a poco se va lejos.`, `Refrán popular`],
[`Querer es poder.`, `Refrán popular`]
];
const BIBLIA = [
[`Todo lo puedo en Cristo que me fortalece.`, `Filipenses 4:13`],
[`Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.`, `Josué 1:9`],
[`No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.`, `Isaías 41:10`],
[`Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.`, `Proverbios 16:3`],
[`Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.`, `Jeremías 29:11`],
[`Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.`, `Colosenses 3:23`],
[`No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.`, `Gálatas 6:9`],
[`Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.`, `Santiago 1:5`],
[`Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia.`, `Proverbios 2:6`],
[`Encomienda a Jehová tu camino, y confía en él; y él hará.`, `Salmos 37:5`],
[`Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.`, `Isaías 40:31`],
[`Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.`, `2 Timoteo 1:7`],
[`Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.`, `Proverbios 3:5-6`],
[`Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos.`, `Salmos 32:8`],
[`El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.`, `Filipenses 1:6`],
[`Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.`, `Mateo 11:28`],
[`Los pensamientos del diligente ciertamente tienden a la abundancia.`, `Proverbios 21:5`],
[`La mano de los diligentes señoreará.`, `Proverbios 12:24`],
[`El alma del perezoso desea, y nada alcanza; mas el alma de los diligentes será prosperada.`, `Proverbios 13:4`],
[`Sabiduría ante todo; adquiere sabiduría; y sobre todas tus posesiones adquiere inteligencia.`, `Proverbios 4:7`],
[`Todo lo que te viniere a la mano para hacer, hazlo según tus fuerzas.`, `Eclesiastés 9:10`],
[`Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.`, `Salmos 46:1`],
[`Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová, que hizo los cielos y la tierra.`, `Salmos 121:1-2`],
[`Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.`, `Romanos 8:28`],
[`Estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano.`, `1 Corintios 15:58`],
[`Corramos con paciencia la carrera que tenemos por delante.`, `Hebreos 12:1`],
[`Porque siete veces cae el justo, y vuelve a levantarse.`, `Proverbios 24:16`],
[`Nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad.`, `Lamentaciones 3:22-23`],
[`Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.`, `Salmos 118:24`],
[`Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará.`, `Deuteronomio 31:6`],
[`Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.`, `1 Pedro 5:7`],
[`Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.`, `Filipenses 4:6`],
[`La paz os dejo, mi paz os doy. No se turbe vuestro corazón, ni tenga miedo.`, `Juan 14:27`],
[`Oirá el sabio, y aumentará el saber, y el entendido adquirirá consejo.`, `Proverbios 1:5`],
[`Da al sabio, y será más sabio; enseña al justo, y aumentará su saber.`, `Proverbios 9:9`],
[`El corazón del entendido adquiere sabiduría; y el oído de los sabios busca la ciencia.`, `Proverbios 18:15`],
[`¿Has visto hombre solícito en su trabajo? Delante de los reyes estará.`, `Proverbios 22:29`],
[`Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría.`, `Salmos 90:12`],
[`A estos cuatro muchachos Dios les dio conocimiento e inteligencia en todas las letras y ciencias.`, `Daniel 1:17`],
[`Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado.`, `Isaías 26:3`],
[`Jehová está en medio de ti, poderoso, él salvará.`, `Sofonías 3:17`],
[`Jehová cumplirá su propósito en mí.`, `Salmos 138:8`],
[`El gozo de Jehová es vuestra fuerza.`, `Nehemías 8:10`],
[`Bástate mi gracia; porque mi poder se perfecciona en la debilidad.`, `2 Corintios 12:9`],
[`No os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal.`, `Mateo 6:34`],
[`Jehová es mi luz y mi salvación; ¿de quién temeré?`, `Salmos 27:1`],
[`El corazón del hombre piensa su camino; mas Jehová endereza sus pasos.`, `Proverbios 16:9`],
[`Porque os es necesaria la paciencia, para que habiendo hecho la voluntad de Dios, obtengáis la promesa.`, `Hebreos 10:36`],
[`Corred de tal manera que lo obtengáis.`, `1 Corintios 9:24`],
[`En lo que requiere diligencia, no perezosos; fervientes en espíritu, sirviendo al Señor.`, `Romanos 12:11`]
];
const FELI = {
  racha:[`¡{k} seguidas bien, {n}! Esa concentración se nota.`, `¡Racha de {k}! Estás en modo experta.`, `{k} correctas al hilo. Así se domina un tema.`, `¡Imparable! {k} respuestas correctas seguidas.`, `¡{k} de {k}! Tu esfuerzo está dando frutos.`, `Racha de {k}, {n}. Tu cerebro está en su mejor momento.`, `¡Qué buena racha! {k} seguidas sin fallar.`, `{k} aciertos seguidos: esto ya no es suerte, es preparación.`],
  dia:[`¡Ya respondiste {k} hoy, {n}! Gran avance.`, `{k} preguntas hoy. Tu constancia es admirable.`, `¡{k} ejercicios en el día! Así se prepara un parcial.`, `Llevas {k} hoy. Cada una suma, ¡felicidades!`, `¡{k} respuestas hoy! Te estás ganando ese aprobado.`],
  pomo:[`¡Pomodoro completado! Te ganaste ese descanso, {n}.`, `¡Pomodoro número {k} de hoy! Disciplina pura.`, `Otro bloque de enfoque terminado. ¡Bien hecho!`, `¡Lo lograste! 25 minutos de puro enfoque.`, `Pomodoro cumplido: una promesa más que te cumpliste.`, `¡Excelente sesión! Estira, toma agua y vuelve con fuerza.`, `¡Bloque terminado! Así, paso a paso, se llega a la meta.`],
  repaso:[`¡Terminaste todo el repaso de este tema, {n}! Felicidades.`, `¡Repaso completo! Ahora ponlo a prueba con unas preguntas.`, `Leíste todas las tarjetas. Eso es compromiso de verdad.`, `¡Tema repasado de principio a fin! Estás lista para practicar.`],
  tarjetas:[`¡{k} tarjetas de repaso hoy! Vas muy bien.`, `{k} tarjetas leídas hoy. Tu cerebro te lo agradece.`, `¡{k} tarjetas! Cada una es un concepto más asegurado.`],
  simAlto:[`¡{k} en el simulacro, {n}! Estás lista. ¡Felicidades!`, `¡Excelente! {k} de nota. Tu disciplina se ve en los resultados.`, `¡Brillante! Un {k} no es casualidad: es preparación.`],
  simBien:[`¡Buen simulacro! Sacaste {k}. Repasa tus errores y vas por el 9.`, `{k} en el simulacro: vas por muy buen camino, {n}.`, `¡Aprobado con {k}! Revisa lo que fallaste y sube un poco más.`],
  simBajo:[`Sacaste {k}, y eso te dice exactamente qué repasar. ¡Ánimo, {n}!`, `Este simulacro es práctica, no sentencia. Repasa los errores y vuelve a intentarlo.`, `No es el resultado final: es tu mapa de lo que falta. Tú puedes, {n}.`],
  nota:[`¡Felicidades por ese {k}, {n}! Tu esfuerzo rindió frutos.`, `¡Un {k}! Celebra este logro, te lo ganaste.`, `¡Qué buena nota! {k} es el reflejo de tu disciplina.`],
  notaTop:[`¡¡{k}!! Excelente, {n}. ¡Eres increíble!`, `¡Notaza! Un {k} merece celebración.`],
  error:[`Un error es solo un dato más. Lee la explicación y sigue.`, `Equivocarse aquí es aprender antes del examen. ¡Bien que lo encontraste!`, `Tranquila, {n}: de este error sale una pregunta que ya no vas a fallar.`, `Fallar en la práctica es parte del plan. Sigue.`, `Respira. Lee la explicación con calma: así se aprende de verdad.`],
  rato:[`¡Llevas {k} minutos estudiando, {n}! Esa constancia vale oro.`, `{k} minutos de estudio. Recuerda tomar agua y estirarte.`, `¡{k} minutos enfocada! Tu disciplina es tu mejor aliada.`]
};

/* ======================= MOTIVACIÓN: frases y felicitaciones ======================= */
function motCfg(){ if (!S.x.mot) S.x.mot = { open:true, every:25, bib:true, cel:true, used:{}, ans:{}, cards:{}, run:0 }; const m = S.x.mot; m.used = m.used || {}; return m; }
const MOT = { streak:0, last:0, min:0, shownOpen:false };
const nm = t => t.replace(/\{n\}/g, S.x.name || `Gaby`);
/* elige sin repetir hasta agotar la lista */
function pickFrom(key, n){
  const m = motCfg(); let u = m.used[key] || [];
  if (u.length >= n) u = u.slice(-Math.min(5, n - 1));
  const free = []; for (let i = 0; i < n; i++) if (!u.includes(i)) free.push(i);
  const i = free[Math.floor(Math.random() * free.length)];
  u.push(i); m.used[key] = u; return i;
}
function frase(){
  const m = motCfg(); const r = Math.random();
  if (m.bib && r < .33) { const [t, s] = BIBLIA[pickFrom(`b`, BIBLIA.length)]; return { t, s, k:`b` }; }
  if (r < (m.bib ? .5 : .25)) { const [t, s] = CITAS[pickFrom(`c`, CITAS.length)]; return { t, s, k:`c` }; }
  return { t:nm(FRASES[pickFrom(`f`, FRASES.length)]), s:``, k:`f` };
}
function feli(kind, k){ const L = FELI[kind]; const t = L[pickFrom(`F_` + kind, L.length)]; return nm(t).replace(/\{k\}/g, k); }
/* ---- toast ---- */
function motToast(o){
  const old = $(`#motoast`); if (old) old.remove();
  const d = el(`div`, `motoast` + (o.big ? ` big` : ``)); d.id = `motoast`; d.setAttribute(`role`, `status`);
  d.innerHTML = `<span class="me">${o.e || `✨`}</span><span class="mt"><b>${o.h || ``}</b>${o.t}${o.s ? `<small>${o.s}</small>` : ``}</span>`;
  const x = btn(`×`, `xbtn`, () => d.remove()); x.setAttribute(`aria-label`, `Cerrar`); d.append(x);
  document.body.append(d);
  if (o.big) confetti();
  const ms = 6000 + Math.min(8000, o.t.length * 45); setTimeout(() => d.classList.add(`out`), ms); setTimeout(() => d.remove(), ms + 400);
}
function confetti(){
  if (matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
  const w = el(`div`, `confw`); const cols = [`var(--acc)`, `#F2AA86`, `#ABA8F2`, `#8DBBE8`, `#F5C451`, `#7CC9B5`];
  for (let i = 0; i < 26; i++){ const p = el(`i`); p.style.cssText = `left:${50 + (Math.random() - .5) * 40}%;background:${cols[i % cols.length]};--dx:${(Math.random() - .5) * 520}px;--dy:${-160 - Math.random() * 300}px;--r:${Math.random() * 720}deg;animation-delay:${Math.random() * .15}s`; w.append(p); }
  document.body.append(w); setTimeout(() => w.remove(), 1800);
}
function celebrate(kind, k, big){
  const m = motCfg(); if (!m.cel) return;
  const now = Date.now(); if (!big && now - MOT.last < 20000) return; MOT.last = now;
  const E = { racha:`🔥`, dia:`🎯`, pomo:`🍅`, repaso:`📚`, tarjetas:`📖`, simAlto:`🏆`, simBien:`🌟`, simBajo:`💪`, nota:`🎉`, notaTop:`🏆`, error:`🌱`, rato:`⏱️` };
  const H = { racha:`¡Racha!`, dia:`¡Meta del día!`, pomo:`¡Pomodoro listo!`, repaso:`¡Repaso completo!`, tarjetas:`¡Gran avance!`, simAlto:`¡Felicidades!`, simBien:`¡Bien hecho!`, simBajo:`¡Ánimo!`, nota:`¡Felicidades!`, notaTop:`¡Felicidades!`, error:``, rato:`¡Sigue así!` };
  const extra = kind === `error` || kind === `simBajo` ? frase() : null;
  motToast({ e:E[kind], h:``, t:feli(kind, k) + (extra ? `<em>“${extra.t}”${extra.s ? ` — ${extra.s}` : ``}</em>` : ``), big });
}
function motPhrase(prefix){ const f = frase(); motToast({ e: f.k === `b` ? `🙏` : f.k === `c` ? `💬` : `✨`, h:prefix || ``, t:`“${f.t}”`, s:f.s }); }
/* ---- ganchos ---- */
const _record = record;
record = function(it, ok){
  _record(it, ok);
  const m = motCfg(), d = todayStr(); if (m.ans.d !== d) m.ans = { d, n:0 }; m.ans.n++;
  if (ok){ MOT.streak++; if ([5, 10, 15, 20, 30, 40, 50, 75, 100].includes(MOT.streak)) return celebrate(`racha`, MOT.streak, MOT.streak >= 10); }
  else { const s = MOT.streak; MOT.streak = 0; if (s >= 3 || Math.random() < .2) return celebrate(`error`); }
  if ([10, 25, 50, 75, 100, 150, 200].includes(m.ans.n)) celebrate(`dia`, m.ans.n, m.ans.n >= 50);
};
const _pomoFinish = pomoFinish;
pomoFinish = function(){ const was = S.x.pst.phase === `study`; _pomoFinish(); if (was){ const n = ((S.x.plog || {})[todayStr()] || { n:1 }).n; celebrate(`pomo`, n, n % 4 === 0); } };
function motSeen(all, it, before){
  const m = motCfg(), d = todayStr(); if (m.cards.d !== d) m.cards = { d, n:0 };
  if (!before){ m.cards.n++; if ([10, 25, 50, 80, 120].includes(m.cards.n)) celebrate(`tarjetas`, m.cards.n); }
  const seen = all.filter(x => S.x.seen[hash(x.title)]).length;
  if (!before && seen === all.length && all.length >= 5) celebrate(`repaso`, all.length, true);
}
function motSim(nota){ celebrate(nota >= 8.5 ? `simAlto` : nota >= 6 ? `simBien` : `simBajo`, String(nota).replace(`.`, `.`), nota >= 8.5); }
function motNota(v, m){ if (v == null || !m) return; const min = m.min != null ? m.min : 6, sc = m.scale || 10; if (v >= sc * .9) celebrate(`notaTop`, nfmt(v), true); else if (v >= min) celebrate(`nota`, nfmt(v), true); }
/* ---- tiempo de estudio activo ---- */
setInterval(() => {
  if (document.visibilityState !== `visible`) return; const m = motCfg(); if (!m.every) return;
  MOT.min++; if (MOT.min % m.every === 0){ if (S.mode !== `simulacro` && !SIM.on) { if (MOT.min % (m.every * 2) === 0) celebrate(`rato`, MOT.min); else motPhrase(`Para ti, ${S.x.name || `Gaby`}: `); } }
}, 60000);
function greet(){ const h = new Date().getHours(); return h < 5 ? `Qué dedicación` : h < 12 ? `Buenos días` : h < 19 ? `Buenas tardes` : `Buenas noches`; }
function motOpen(){ const m = motCfg(); if (!m.open || MOT.shownOpen) return; MOT.shownOpen = true; setTimeout(() => motPhrase(`${greet()}, ${S.x.name || `Gaby`}. `), 1800); }
/* ---- tarjeta en Inicio ---- */
function motCard(){
  const m = motCfg(); if (!m.cur || Date.now() - (m.curT || 0) > 30 * 60000){ m.cur = frase(); m.curT = Date.now(); save(); }
  const c = el(`article`, `card plain motcard`);
  const paint = () => { const f = m.cur; c.innerHTML = `<div class="mk">${f.k === `b` ? `🙏 Palabra para hoy` : f.k === `c` ? `💬 Para inspirarte` : `✨ Para ti, ${S.x.name || `Gaby`}`}</div><p class="mq">“${f.t}”</p>${f.s ? `<p class="ms">— ${f.s}</p>` : ``}`;
    const r = el(`div`, `btnrow`); r.append(btn(`Otra frase`, `btn ghost`, () => { m.cur = frase(); m.curT = Date.now(); save(); paint(); }), btn(`Ajustes`, `btn ghost`, openMotSettings)); c.append(r); };
  paint(); return c;
}
const _vInicio = vInicio;
vInicio = function(v){ _vInicio(v); };
const _openFocus2 = openFocus;
openFocus = function(){ _openFocus2(); const f = $(`#focusroot .focus`); if (f && motCfg().open !== null){ const q = frase(); const p = el(`p`, `fquote`, `“${q.t}”${q.s ? `<small>— ${q.s}</small>` : ``}`); f.append(p); } };
function openMotSettings(){
  const m = motCfg(); const done = () => { save(); };
  openSheet(`Frases y felicitaciones`, b => {
    b.append(fld(`Frase al abrir la página`, toggleBtn(m.open, v => { m.open = v; done(); }), `Un saludo con una frase cada vez que entres`));
    b.append(fld(`Incluir versículos bíblicos`, toggleBtn(m.bib, v => { m.bib = v; done(); }), `Reina-Valera 1960`));
    b.append(fld(`Felicitaciones`, toggleBtn(m.cel, v => { m.cel = v; done(); }), `Rachas de aciertos, pomodoros, repasos completos, simulacros y buenas notas`));
    const s = document.createElement(`select`); s.className = `nedit`; s.innerHTML = `<option value="0">Nunca</option><option value="15">Cada 15 min</option><option value="25">Cada 25 min</option><option value="40">Cada 40 min</option><option value="60">Cada hora</option>`; s.value = String(m.every || 0); s.onchange = () => { m.every = +s.value; done(); };
    b.append(fld(`Frases mientras estudias`, s, `Aparecen abajo sin interrumpir`));
    b.append(el(`p`, `muted`, `Hay ${FRASES.length} frases, ${BIBLIA.length} versículos y ${CITAS.length} citas. No se repiten hasta que salgan todas.`));
  });
}

/* frase pequeña bajo el reloj de Inicio */
function motLine(){
  const m = motCfg(); if (!m.cur || Date.now() - (m.curT || 0) > 30 * 60000){ m.cur = frase(); m.curT = Date.now(); save(); }
  const w = el(`div`, `motline`);
  const paint = () => { const f = m.cur; w.innerHTML = `<span class="mq">${f.k === `b` ? `🙏` : `✨`} “${f.t}”${f.s ? ` <small>— ${f.s}</small>` : ``}</span>`;
    const r = btn(`↻`, `mbtn`, () => { m.cur = frase(); m.curT = Date.now(); save(); paint(); }); r.title = `Otra frase`; r.setAttribute(`aria-label`, `Otra frase`);
    const s = btn(``, `mbtn`, openMotSettings); s.innerHTML = icon(`gear`); s.title = `Ajustes de frases`; s.setAttribute(`aria-label`, `Ajustes de frases`);
    const a = el(`span`, `macts`); a.append(r, s); w.append(a); };
  paint(); return w;
}

/* ======================= REPASO ESPACIADO · PUNTOS DÉBILES · SIMULACRO POR PARCIAL ======================= */
/* ---------- repaso espaciado (tipo Anki, simplificado) ----------
   S.x.srs[id] = { iv:días, ef:facilidad, due:`AAAA-MM-DD`, n:aciertos seguidos, lap:olvidos }      */
function srsCfg(){ if (!S.x.srs) S.x.srs = {}; if (!S.x.srsc) S.x.srsc = { nuevas:10, fichas:true }; return S.x.srsc; }
function addDaysStr(d, n){ const x = pdate(d); x.setDate(x.getDate() + n); return dstr(x); }
function srsUpdate(id, ok, soft){
  srsCfg(); const t = todayStr(); const r = S.x.srs[id] || { iv:0, ef:2.3, n:0, lap:0, due:t };
  if (ok){ r.iv = r.n === 0 ? 1 : r.n === 1 ? 3 : Math.max(r.iv + 1, Math.round(r.iv * r.ef)); r.n++; r.ef = Math.min(2.8, r.ef + .08); }
  else if (soft){ r.iv = Math.max(1, Math.round(r.iv / 2)); r.ef = Math.max(1.3, r.ef - .1); }
  else { r.iv = 0; r.n = 0; r.lap++; r.ef = Math.max(1.3, r.ef - .2); }
  r.iv = Math.min(r.iv, 120); r.due = addDaysStr(t, r.iv || 1); r.last = t; S.x.srs[id] = r;
}
const _recordSrs = record;
record = function(it, ok){
  const id = it.id || ``;
  if (id[0] === `M`) srsUpdate(id, ok);
  else if (id.startsWith(`F_`)) srsUpdate(id.slice(2), ok, HOY.soft);
  HOY.soft = false;
  _recordSrs(it, ok);
};
const HOY = { q:null, i:0, flip:false, done:0, ok:0, custom:null, soft:false, again:new Set() };
function itemById(id){ return ALL.MCQ.find(x => x.id === id) || ALL.FICHAS.find(x => x.id === id); }
function nextParcial(){ const t = todayStr(); return (S.x.ev || []).filter(e => e.type === `parcial` && e.date >= t).sort((a, b) => a.date.localeCompare(b.date))[0] || null; }
function srsQueue(){
  const c = srsCfg(), t = todayStr();
  const due = Object.entries(S.x.srs).filter(([id, r]) => r.due <= t).map(([id]) => itemById(id)).filter(Boolean).filter(x => c.fichas || x.q);
  // nuevas: primero los temas del próximo parcial, luego los temas con repaso leído, luego los elegidos
  const np = nextParcial(); const pref = np && np.topics && np.topics.length ? np.topics : [];
  const readT = new Set(ALL.REPASO.filter(x => S.x.seen[hash(x.title)]).map(x => x.t));
  const pool = ALL.MCQ.concat(c.fichas ? ALL.FICHAS : []).filter(x => !S.x.srs[x.id] && !S.st[x.id] && !S.st[`F_` + x.id]);
  const rank = x => (pref.includes(x.t) ? 0 : 3) + (readT.has(x.t) ? 0 : 1) + (S.sel.has(x.t) ? 0 : 1);
  if (!S.x.srsNew || S.x.srsNew.d !== t) S.x.srsNew = { d:t, n:0 };
  const left = Math.max(0, c.nuevas - S.x.srsNew.n);
  const nuevas = shuf(pool).sort((a, b) => rank(a) - rank(b)).slice(0, left);
  return { due:shuf(due).sort((a, b) => (S.x.srs[a.id].due).localeCompare(S.x.srs[b.id].due)), nuevas };
}
function hoyCounts(){ const q = srsQueue(); return { due:q.due.length, nuevas:q.nuevas.length, total:q.due.length + q.nuevas.length }; }
function startHoy(custom){
  HOY.custom = custom || null; HOY.i = 0; HOY.done = 0; HOY.ok = 0; HOY.flip = false; HOY.again = new Set();
  if (custom) HOY.q = shuf(custom.items).map(x => ({ id:x.id, nueva:!S.x.srs[x.id] }));
  else { const q = srsQueue(); HOY.q = q.due.map(x => ({ id:x.id })).concat(q.nuevas.map(x => ({ id:x.id, nueva:true }))); }
  if (S.mode !== `hoy`) go(`hoy`); else renderView();
}
function vHoy(v){
  if (!HOY.q){
    const k = hoyCounts(), np = nextParcial();
    const box = el(`div`, `simstart`);
    box.append(el(`h2`, ``, `Repaso de hoy`));
    box.append(el(`p`, ``, k.total ? `Tienes <b>${k.due}</b> para repasar${k.nuevas ? ` y <b>${k.nuevas}</b> nuevas` : ``}. Tiempo aproximado: <b>${Math.max(1, Math.round(k.total * .5))} min</b>.` : `¡Al día! No tienes repasos pendientes hoy.`));
    box.append(el(`p`, `muted`, `La página te vuelve a preguntar cada cosa justo cuando la estás por olvidar: lo que fallas vuelve mañana; lo que aciertas, en 3, 7, 15 días y así. Mezcla preguntas de todos los temas que ya practicaste${np ? `, y las nuevas salen primero de los temas de <b>${np.title}</b>` : ``}.`));
    const r = el(`div`, `btnrow`);
    if (k.total) r.append(btn(`Empezar repaso (${k.total})`, `btn acc`, () => startHoy()));
    r.append(btn(`Practicar mis puntos débiles`, `btn ghost`, () => startWeak()));
    r.append(btn(`Ajustes`, `btn ghost`, openSrsSettings));
    box.append(r); v.append(box);
    v.append(weakMap(true));
    return;
  }
  const total = HOY.q.length;
  if (HOY.i >= total){
    const box = el(`div`, `simstart center`);
    const pct = HOY.done ? Math.round(HOY.ok / HOY.done * 100) : 0;
    box.append(el(`h2`, ``, HOY.custom ? `¡Práctica terminada!` : `¡Repaso de hoy completo!`), el(`p`, `score`, `${pct}%`), el(`p`, ``, `${HOY.ok} de ${HOY.done} correctas.`));
    const k = hoyCounts(); if (!HOY.custom && k.total) box.append(el(`p`, `muted`, `Aún quedan ${k.total} disponibles hoy.`));
    const r = el(`div`, `btnrow center`); r.append(btn(`Volver`, `btn`, () => { HOY.q = null; renderView(); })); if (!HOY.custom && k.total) r.append(btn(`Seguir con ${k.total} más`, `btn ghost`, () => startHoy()));
    box.append(r); v.append(box);
    if (!HOY.cel){ HOY.cel = true; setTimeout(() => celebrate(pct >= 80 ? `repaso` : `dia`, HOY.done, pct >= 80), 300); }
    return;
  }
  HOY.cel = false;
  const cur = HOY.q[HOY.i], it = itemById(cur.id);
  if (!it){ HOY.i++; return vHoy(v); }
  const head = el(`div`, `hoyhead`);
  head.innerHTML = `<span>${HOY.custom ? HOY.custom.title : `Repaso de hoy`} · <b>${HOY.i + 1}</b> de ${total}${cur.nueva ? ` · <span class="tagnew">nueva</span>` : ``}</span><div class="bar"><i style="width:${HOY.i / total * 100}%"></i></div>`;
  head.append(btn(`Salir`, `btn ghost`, () => { HOY.q = null; renderView(); }));
  v.append(head);
  const next = () => { HOY.i++; HOY.flip = false; renderView(); topScroll(); };
  const markNew = () => { if (cur.nueva && !HOY.custom){ srsCfg(); if (!S.x.srsNew || S.x.srsNew.d !== todayStr()) S.x.srsNew = { d:todayStr(), n:0 }; S.x.srsNew.n++; } };
  if (it.q){
    v.append(mcqCard(it, ok => {
      HOY.done++; if (ok) HOY.ok++; markNew();
      if (!ok && !HOY.again.has(it.id)){ HOY.again.add(it.id); HOY.q.push({ id:it.id }); }
      const r = el(`div`, `btnrow`); const b = btn(HOY.i + 1 < HOY.q.length ? `Siguiente` : `Terminar`, `btn acc`, next); r.append(b); v.append(r); b.focus();
    }));
  } else {
    const f = it; const w = el(`div`, `flash`); w.style.setProperty(`--c`, `var(--${f.t})`);
    const fig = f.fig ? FIG[f.fig] : null;
    w.innerHTML = `<div class="face ${HOY.flip ? `back` : `front`} solo"><div class="meta"><span class="chip">${TOPICS[f.t].n}</span><span class="src">Fuente: ${f.src}</span></div><p class="${HOY.flip ? `fa` : `fq`}">${HOY.flip ? f.b : f.f}</p>${HOY.flip && fig ? `<div class="ffig">${fig.svg}</div>` : ``}</div>`;
    v.append(w);
    const r = el(`div`, `btnrow center`);
    if (!HOY.flip) r.append(btn(`Ver respuesta`, `btn acc`, () => { HOY.flip = true; renderView(); }));
    else {
      const g = d => { const b = fichaBox(f.id); S.box[f.id] = d < 0 ? 0 : Math.min(3, b + d); HOY.soft = d === 0; record({ id:`F_` + f.id, t:f.t }, d > 0); HOY.done++; if (d > 0) HOY.ok++; markNew(); if (d < 0 && !HOY.again.has(f.id)){ HOY.again.add(f.id); HOY.q.push({ id:f.id }); } save(); next(); };
      r.append(btn(`No la sabía`, `btn ghost`, () => g(-1)), btn(`Más o menos`, `btn ghost`, () => g(0)), btn(`La sabía`, `btn acc`, () => g(1)));
    }
    v.append(r);
  }
}
function openSrsSettings(){
  const c = srsCfg();
  openSheet(`Repaso de hoy`, b => {
    const s = document.createElement(`select`); s.className = `nedit`; s.innerHTML = [0, 5, 10, 15, 20, 30].map(n => `<option value="${n}">${n === 0 ? `Ninguna` : n}</option>`).join(``); s.value = String(c.nuevas); s.onchange = () => { c.nuevas = +s.value; save(); };
    b.append(fld(`Preguntas nuevas por día`, s, `Además de los repasos pendientes`));
    b.append(fld(`Incluir fichas`, toggleBtn(c.fichas, v => { c.fichas = v; save(); }), `Si lo apagas, solo salen preguntas de opción múltiple`));
  });
}
/* ---------- puntos débiles ---------- */
function itemScore(id){
  const st = S.st[id] || S.st[`F_` + id]; if (!st) return null;
  const [o, b] = st; const acc = o / Math.max(1, o + b); const r = S.x.srs && S.x.srs[id];
  const mem = r ? Math.min(1, (r.iv || 0) / 10) : 0;
  return acc * (.55 + .45 * mem);
}
function scoreOf(items){
  if (!items.length) return { dom:0, acc:null, seen:0, n:0 };
  let sum = 0, seen = 0, o = 0, b = 0;
  items.forEach(x => { const s = itemScore(x.id); if (s != null){ sum += s; seen++; const st = S.st[x.id] || S.st[`F_` + x.id]; o += st[0]; b += st[1]; } });
  return { dom: sum / items.length, acc: o + b ? o / (o + b) : null, seen, n:items.length };
}
function lvl(sc){ if (sc.seen < Math.min(3, sc.n)) return [`Sin practicar`, `var(--line2)`, 0]; const d = sc.dom; return d < .3 ? [`Débil`, `var(--bad)`, 1] : d < .6 ? [`En progreso`, `#D9962B`, 2] : d < .85 ? [`Bien`, `#5DAE7A`, 3] : [`Dominado`, `var(--ok)`, 4]; }
function subtopics(t){
  return ALL.REPASO.filter(x => x.t === t).map(r => { const pg = pagesOf(r.src); const items = ALL.MCQ.concat(ALL.FICHAS).filter(q => q.t === t && [...pagesOf(q.src)].some(p => pg.has(p))); return { title:r.title, items }; }).filter(s => s.items.length);
}
function weakMap(compact){
  const box = el(`article`, `card plain wmap`);
  box.append(el(`h3`, ``, `Mapa de dominio`), el(`p`, `muted`, `Qué tanto dominas cada tema según tus respuestas y tus repasos. Toca un tema para ver sus partes y practicar justo lo que te falta.`));
  const g = el(`div`, `wgrid`);
  TORDER.forEach(t => {
    const items = ALL.MCQ.concat(ALL.FICHAS).filter(x => x.t === t); if (!items.length) return;
    const sc = scoreOf(items), L = lvl(sc);
    const b = btn(``, `wcell`, () => openWeakTopic(t)); b.style.setProperty(`--lv`, L[1]); b.style.setProperty(`--c`, `var(--${t})`);
    b.innerHTML = `<span class="wt">${TOPICS[t].n}</span><span class="wn">${TOPICS[t].name}</span><span class="wbar"><i style="width:${Math.round(sc.dom * 100)}%"></i></span><span class="wl">${L[0]} · ${Math.round(sc.dom * 100)}%</span>`;
    g.append(b);
  });
  box.append(g);
  box.append(el(`div`, `wleg`, [[`Sin practicar`, `var(--line2)`], [`Débil`, `var(--bad)`], [`En progreso`, `#D9962B`], [`Bien`, `#5DAE7A`], [`Dominado`, `var(--ok)`]].map(([n, c]) => `<span><u style="background:${c}"></u>${n}</span>`).join(``)));
  if (!compact){ const r = el(`div`, `btnrow`); r.append(btn(`Practicar mis puntos débiles`, `btn acc`, () => startWeak())); box.append(r); }
  return box;
}
function openWeakTopic(t){
  openSheet(`${TOPICS[t].n} · ${TOPICS[t].name}`, b => {
    const subs = subtopics(t).map(s => ({ ...s, sc:scoreOf(s.items) })).sort((a, b) => a.sc.dom - b.sc.dom);
    const all = ALL.MCQ.concat(ALL.FICHAS).filter(x => x.t === t), sc = scoreOf(all);
    b.append(el(`p`, ``, `Dominio del tema: <b>${Math.round(sc.dom * 100)}%</b> · respondiste ${sc.seen} de ${sc.n} preguntas y fichas${sc.acc != null ? ` · precisión ${Math.round(sc.acc * 100)}%` : ``}.`));
    const ul = el(`div`, `wsubs`);
    subs.forEach(s => { const L = lvl(s.sc); const row = el(`div`, `wsub`); row.style.setProperty(`--lv`, L[1]);
      row.innerHTML = `<span class="wsn">${s.title}<small>${L[0]} · ${s.sc.seen}/${s.sc.n} practicadas</small></span><span class="wbar"><i style="width:${Math.round(s.sc.dom * 100)}%"></i></span>`;
      row.append(btn(`Practicar`, `tool`, () => { closeSheet(); startHoy({ title:s.title, items:s.items.slice() }); })); ul.append(row); });
    b.append(ul);
    const r = el(`div`, `btnrow`); r.append(btn(`Practicar lo débil de este tema`, `btn acc`, () => { closeSheet(); startWeak(t); }), btn(`Leer el repaso`, `btn ghost`, () => { closeSheet(); S.sel = new Set([t]); save(); go(`repaso`); })); b.append(r);
  });
}
function startWeak(onlyT){
  const items = ALL.MCQ.concat(ALL.FICHAS).filter(x => onlyT ? x.t === onlyT : S.sel.has(x.t));
  const scored = items.map(x => ({ x, s:itemScore(x.id) }));
  // primero lo fallado, luego lo poco practicado de los temas más débiles
  const tdom = {}; TORDER.forEach(t => tdom[t] = scoreOf(items.filter(x => x.t === t)).dom);
  scored.sort((a, b) => ((a.s == null ? .5 : a.s) + tdom[a.x.t] * .5) - ((b.s == null ? .5 : b.s) + tdom[b.x.t] * .5));
  const pick = scored.filter(y => y.s == null || y.s < .75).slice(0, 15).map(y => y.x);
  if (!pick.length){ celebrate(`repaso`, 0, true); return; }
  startHoy({ title: onlyT ? `Lo débil de ${TOPICS[onlyT].n}` : `Mis puntos débiles`, items:pick });
}
/* ---------- simulacro por parcial ---------- */
function simParcial(e, n){
  const ts = e.topics && e.topics.length ? e.topics : TORDER;
  S.sel = new Set(ts.filter(t => TORDER.includes(t))); save();
  const pool = filt(ALL.MCQ); n = Math.min(n || 20, pool.length);
  // reparte las preguntas entre los temas del parcial, con más peso a los temas débiles
  const by = {}; pool.forEach(q => (by[q.t] = by[q.t] || []).push(q));
  const tw = Object.keys(by).map(t => ({ t, w: 1.5 - scoreOf(by[t]).dom }));
  const W = tw.reduce((s, x) => s + x.w, 0); let qs = [];
  tw.forEach(x => { qs = qs.concat(shuf(by[x.t]).slice(0, Math.max(1, Math.round(n * x.w / W)))); });
  qs = shuf(qs).slice(0, n);
  go(`simulacro`);
  Object.assign(SIM, { saved:false, on:true, qs, i:0, ok:0, wrong:[], byT:{}, timer: 90 * qs.length, t0: Date.now(), fb:`end`, ans:[], pick:null, ev:e.id });
  startTick(); renderView();
}
function simEventSave(id, nota){ const e = (S.x.ev || []).find(x => x.id === id); if (!e) return; e.sims = (e.sims || []).concat([{ d:todayStr(), nota }]).slice(-10); SIM.ev = null; save(); }
function parcialCard(){
  const e = nextParcial(); if (!e) return null; const dd = dayDiff(todayStr(), e.date); if (dd > 14) return null;
  const c = el(`article`, `card plain pcard`);
  const ts = e.topics && e.topics.length ? e.topics : TORDER; const items = ALL.MCQ.concat(ALL.FICHAS).filter(x => ts.includes(x.t)); const sc = scoreOf(items);
  const sims = e.sims || [];
  c.innerHTML = `<div class="mk">${dd === 0 ? `Hoy` : dd === 1 ? `Mañana` : `En ${dd} días`} · ${e.title}</div><p>Dominio de los temas del parcial: <b>${Math.round(sc.dom * 100)}%</b>${sims.length ? ` · simulacros: ${sims.map(s => `<b>${s.nota}</b>`).join(` → `)}` : ``}</p>`;
  const r = el(`div`, `btnrow`); r.append(btn(`Simulacro de este parcial (20)`, `btn acc`, () => simParcial(e, 20)), btn(`Repasar lo débil`, `btn ghost`, () => { S.sel = new Set(ts); save(); startWeak(); }));
  c.append(r); return c;
}
function hoyCard(){
  const k = hoyCounts(); const c = el(`article`, `card plain hoycard`);
  c.innerHTML = `<div class="mk">🧠 Repaso de hoy</div><p>${k.total ? `<b>${k.due}</b> por repasar${k.nuevas ? ` + <b>${k.nuevas}</b> nuevas` : ``} · ~${Math.max(1, Math.round(k.total * .5))} min` : `¡Al día! Sin repasos pendientes.`}</p>`;
  const r = el(`div`, `btnrow`); r.append(btn(k.total ? `Empezar` : `Practicar puntos débiles`, `btn acc`, () => k.total ? startHoy() : startWeak())); c.append(r); return c;
}
const _vInicioE = vInicio;
// El repaso de hoy y el parcial ahora forman parte del "Plan de hoy" del Inicio (ui.js)
vInicio = function(v){ _vInicioE(v); };

/* ======================= ORGANIZAR · AGENDA =======================
   Calendario tipo Google Calendar (Día · Semana · Mes · Lista) sincronizado con su Google Calendar.
   Los eventos propios viven en S.x.ev (los mismos que ya usaban la agenda, el plan de repaso y los avisos).
   Campos nuevos: edate, etime, allDay, rrule, rems [min], loc, desc, gid, gupd.
   "De la app" (punteado, no se edita aquí): plan de repaso, pendientes con fecha, repasos y Pomodoro.   */
const esc = s => String(s == null ? `` : s).replace(/[&<>"']/g, c => ({ '&':`&amp;`, '<':`&lt;`, '>':`&gt;`, '"':`&quot;`, "'":`&#39;` })[c]);
const GPAL = { 1:`#7986CB`, 2:`#33B679`, 3:`#8E24AA`, 4:`#E67C73`, 5:`#F6BF26`, 6:`#F4511E`, 7:`#039BE5`, 8:`#616161`, 9:`#3F51B5`, 10:`#0B8043`, 11:`#D50000` };
const GPALN = { 1:`Lavanda`, 2:`Salvia`, 3:`Uva`, 4:`Flamenco`, 5:`Plátano`, 6:`Mandarina`, 7:`Pavo real`, 8:`Grafito`, 9:`Arándano`, 10:`Albahaca`, 11:`Tomate` };
const CAT0 = [[`parcial`,`Parcial`,4],[`lab`,`Laboratorio`,2],[`tarea`,`Tarea`,7],[`clase`,`Clase`,1],[`estudio`,`Estudio`,10],[`personal`,`Personal`,5],[`otro`,`Otro`,8],[`google`,`Mi calendario`,9]];
const HPX = 46; // alto de una hora en la cuadrícula
const HC = { t:0, v:null };
function agcal(){
  if (!S.x.agcal) S.x.agcal = { cats: CAT0.map(([k, n, c]) => ({ k, n, c })), hidden:[] };
  const a = S.x.agcal; CAT0.forEach(([k, n, c]) => { if (!a.cats.some(x => x.k === k)) a.cats.push({ k, n, c }); }); a.hidden = a.hidden || [];
  return a;
}
const catOf = k => agcal().cats.find(c => c.k === k) || agcal().cats.find(c => c.k === `otro`);
const catColor = k => GPAL[catOf(k).c] || GPAL[8];
function syncETYPE(){ agcal().cats.forEach(c => { ETYPE[c.k] = [c.n, GPAL[c.c]]; }); }
const tzName = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || `America/El_Salvador`; } catch(e){ return `America/El_Salvador`; } };
const tmin = t => { if (!t) return 0; const [h, m] = t.split(`:`).map(Number); return h * 60 + m; };
const mtime = m => { m = Math.max(0, Math.min(24 * 60 - 1, Math.round(m))); return `${pad2(Math.floor(m / 60))}:${pad2(m % 60)}`; };
const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
const remTxt = m => m === 0 ? `A la hora` : m < 60 ? `${m} min antes` : m < 1440 ? `${m / 60} h antes` : m % 10080 === 0 ? `${m / 10080} semana${m > 10080 ? `s` : ``} antes` : `${m / 1440} día${m > 1440 ? `s` : ``} antes`;
const REMS = [0, 5, 10, 15, 30, 60, 120, 1440, 2880, 10080];
function gRems(rems){ const ms = [...new Set(rems || [])].sort((x, y) => x - y), out = [];
  ms.forEach(m => { if (out.length < 5) out.push({ method:`popup`, minutes:m }); if (S.x.agMail && out.length < 5) out.push({ method:`email`, minutes:m }); });
  return { useDefault:false, overrides:out }; }

/* ---------- repeticiones (RRULE) ---------- */
const BYD = [`SU`,`MO`,`TU`,`WE`,`TH`,`FR`,`SA`];
const BYDN = { MO:`L`, TU:`M`, WE:`X`, TH:`J`, FR:`V`, SA:`S`, SU:`D` };
function parseRR(s){ const o = {}; String(s || ``).replace(/^RRULE:/, ``).split(`;`).forEach(p => { const [k, v] = p.split(`=`); if (k && v) o[k] = v; }); return o; }
function rrDates(start, rr, from, to){
  const o = parseRR(rr), f = o.FREQ, iv = Math.max(1, +(o.INTERVAL || 1)), cnt = o.COUNT ? +o.COUNT : null;
  const until = o.UNTIL ? `${o.UNTIL.slice(0, 4)}-${o.UNTIL.slice(4, 6)}-${o.UNTIL.slice(6, 8)}` : null;
  const out = [], sd = pdate(start); let n = 0;
  const take = ds => { if (until && ds > until) return false; if (cnt && n >= cnt) return false; n++; if (ds >= from && ds <= to) out.push(ds); return ds <= to; };
  if (f === `WEEKLY`){
    const days = (o.BYDAY ? o.BYDAY.split(`,`) : [BYD[sd.getDay()]]).map(d => BYD.indexOf(d.slice(-2))).filter(x => x >= 0);
    const wk = new Date(sd); wk.setDate(wk.getDate() - (wk.getDay() + 6) % 7);
    for (let w = 0; w < 600; w++){
      for (const wd of [1, 2, 3, 4, 5, 6, 0]){ if (!days.includes(wd)) continue; const d = new Date(wk); d.setDate(wk.getDate() + (wd + 6) % 7); const ds = dstr(d); if (ds < start) continue; if (!take(ds)) return out; }
      wk.setDate(wk.getDate() + 7 * iv);
    }
    return out;
  }
  for (let i = 0; i < 2000; i++){
    const d = f === `DAILY` ? new Date(sd.getFullYear(), sd.getMonth(), sd.getDate() + i * iv) : f === `MONTHLY` ? new Date(sd.getFullYear(), sd.getMonth() + i * iv, sd.getDate()) : f === `YEARLY` ? new Date(sd.getFullYear() + i * iv, sd.getMonth(), sd.getDate()) : null;
    if (!d) { take(start); break; }
    if (f !== `DAILY` && d.getDate() !== sd.getDate()) continue; // 31 en meses cortos: se salta, como Google
    if (!take(dstr(d))) break;
  }
  return out;
}
function rrText(rr, start){
  if (!rr) return `No se repite`; const o = parseRR(rr), iv = +(o.INTERVAL || 1);
  const U = { DAILY:[`día`,`días`], WEEKLY:[`semana`,`semanas`], MONTHLY:[`mes`,`meses`], YEARLY:[`año`,`años`] }[o.FREQ] || [`vez`,`veces`];
  let t = iv === 1 ? `Cada ${U[0]}` : `Cada ${iv} ${U[1]}`;
  if (o.FREQ === `WEEKLY`){ const ds = (o.BYDAY || BYD[pdate(start).getDay()]).split(`,`); const N = { MO:`lunes`, TU:`martes`, WE:`miércoles`, TH:`jueves`, FR:`viernes`, SA:`sábado`, SU:`domingo` }; t += ` el ${ds.map(d => N[d]).join(`, `)}`; }
  if (o.COUNT) t += ` · ${o.COUNT} veces`; else if (o.UNTIL) t += ` · hasta ${fmtDay(`${o.UNTIL.slice(0, 4)}-${o.UNTIL.slice(4, 6)}-${o.UNTIL.slice(6, 8)}`)}`;
  return t;
}

/* ---------- elementos de la agenda en un rango ---------- */
const evAllDay = e => e.allDay != null ? !!e.allDay : !e.time;
function evEnd(e){ // fin (fecha inclusiva y hora) de la primera ocurrencia
  const ad = evAllDay(e); if (ad) return { edate: e.edate && e.edate >= e.date ? e.edate : e.date, etime:`` };
  let ed = e.edate && e.edate >= e.date ? e.edate : e.date, et = e.etime;
  if (!et || (ed === e.date && tmin(et) <= tmin(e.time))){ const m = tmin(e.time) + 60; if (m >= 1440){ et = `23:59`; } else et = mtime(m); }
  return { edate: ed, etime: et };
}
function occOf(e, from, to){
  const { edate, etime } = evEnd(e), span = dayDiff(e.date, edate), ex = new Set(e.ex || []);
  const starts = e.rrule ? rrDates(e.date, e.rrule, addDays(from, -span), to) : (e.date <= to && edate >= from ? [e.date] : []);
  return starts.filter(d => !ex.has(d)).map(d => ({ kind:`ev`, src:e, id:e.id, key:`${e.id}@${d}`, title:e.title || `(Sin título)`, cat:e.type || `otro`, date:d, edate:addDays(d, span), time: evAllDay(e) ? `` : e.time, etime: evAllDay(e) ? `` : etime, allDay:evAllDay(e), loc:e.loc, rec:!!e.rrule }));
}
function gcItems(){ try { return (JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`).items) || []; } catch(e){ return []; } }
function appItems(from, to){
  const out = [], today = todayStr();
  planItems().forEach(p => { if (p.date >= from && p.date <= to) out.push({ kind:`app`, app:`plan`, src:p, key:`plan@${p.date}@${p.title}`, title:p.title, cat:`estudio`, date:p.date, edate:p.date, allDay:true }); });
  (S.x.agn || []).filter(n => n.kind === `task` && n.date && n.date >= from && n.date <= to).forEach(n => out.push({ kind:`app`, app:`task`, src:n, key:`t@${n.id}`, title:n.text.split(`\n`)[0], cat:`tarea`, date:n.date, edate:n.date, time:n.time || ``, etime: n.time ? mtime(tmin(n.time) + 30) : ``, allDay:!n.time, done:n.done }));
  if (today >= from && today <= to && typeof hoyCounts === `function`){ if (!HC.t || Date.now() - HC.t > 8000){ HC.v = hoyCounts(); HC.t = Date.now(); } const k = HC.v; if (k.total) out.push({ kind:`app`, app:`srs`, key:`srs@${today}`, title:`${k.total} repaso${k.total === 1 ? `` : `s`} pendiente${k.total === 1 ? `` : `s`}`, cat:`estudio`, date:today, edate:today, allDay:true }); }
  Object.entries(S.x.plog || {}).forEach(([d, v]) => { if (d >= from && d <= to && v && v.min) out.push({ kind:`app`, app:`pomo`, key:`p@${d}`, title:`🍅 ${v.min} min de estudio`, cat:`estudio`, date:d, edate:d, allDay:true, done:true }); });
  return out;
}
function agItems(from, to, opts = {}){
  const hid = new Set(opts.all ? [] : agcal().hidden), done = S.x.caldone || {};
  let out = [];
  (S.x.ev || []).forEach(e => out.push(...occOf(e, from, to)));
  const locals = new Set((S.x.ev || []).map(e => e.id)), gids = new Set((S.x.ev || []).map(e => e.gid).filter(Boolean));
  gcItems().forEach(g => {
    if (g.mf && locals.has(g.mf)) return; if (gids.has(g.id) || (g.recId && gids.has(g.recId))) return;
    const ed = g.edate || g.date; if (g.date > to || ed < from) return;
    out.push({ kind:`g`, src:g, id:g.id, key:`g@${g.id}`, title:g.title || `(Sin título)`, cat:g.cat || `google`, date:g.date, edate:ed, time:g.time || ``, etime:g.etime || ``, allDay:!!g.allDay, loc:g.loc, rec:!!g.recId });
  });
  if (!opts.noApp) out.push(...appItems(from, to));
  out = out.filter(x => !hid.has(x.cat) || x.kind === `app` && !hid.has(`app`));
  if (hid.has(`app`)) out = out.filter(x => x.kind !== `app`);
  out.forEach(x => { if (x.kind !== `app`) x.done = !!done[x.key]; });
  return out.sort((a, b) => (a.date + (a.allDay ? `0` : `1`) + (a.time || ``)).localeCompare(b.date + (b.allDay ? `0` : `1`) + (b.time || ``)));
}
/* el resto de la página (mini calendario, Próximos, Inicio) también ve las repeticiones y lo de Google */
function allItems(){
  const t = todayStr(), its = agItems(addDays(t, -31), addDays(t, 200), { all:true, noApp:true });
  return its.map(x => Object.assign({}, x.src && x.kind === `ev` ? x.src : {}, { id:x.id || x.key, title:x.title, type:x.cat, date:x.date, time:x.time, _it:x, rem: x.kind === `ev` ? x.src.rem : -1, topics: x.kind === `ev` ? x.src.topics : [] })).concat(planItems()).sort((a, b) => (a.date + (a.time || `99`)).localeCompare(b.date + (b.time || `99`)));
}

/* ---------- abrir un elemento ---------- */
function openItem(x){
  if (!x) return;
  if (x.kind === `app`){
    if (x.app === `plan`){ const p = x.src; if (p.topics && p.topics.length) S.sel = new Set(p.topics); go(p.sim ? `simulacro` : p.mode || `repaso`); }
    else if (x.app === `task`) openNota(x.src);
    else if (x.app === `srs`) go(`hoy`);
    return;
  }
  if (x.kind === `g`) return openEv(null, { g:x.src });
  openEv(x.src, { occ:x.date });
}
function openEvent(ev, date){ if (ev && ev._it) return openItem(ev._it); return openEv(ev, { date }); }

/* ---------- guardar / borrar ---------- */
function evSaved(e, isNew){
  e.upd = Date.now(); const i = S.x.ev.findIndex(x => x.id === e.id); if (i >= 0) S.x.ev[i] = e; else S.x.ev.push(e);
  save(); gcQueue({ op:`up`, id:e.id }); afterAg();
}
/* lo borrado queda anotado para que la sincronización no lo traiga de vuelta desde otro dispositivo */
function tomb(id){ S.x.del = S.x.del || {}; S.x.del[id] = Date.now(); }
function evDelete(e){ tomb(e.id); S.x.ev = S.x.ev.filter(x => x.id !== e.id); save(); if (e.gid) gcQueue({ op:`del`, id:e.id, gid:e.gid }); afterAg(); }
function afterAg(){ if (typeof renderAgendaHosts === `function`) renderAgendaHosts(); if ([`agenda`,`inicio`].includes(S.mode)) renderView(); renderHead(); if (bp() === `wide`) renderPanel(); }
function toggleDone(x){ S.x.caldone = S.x.caldone || {}; S.x.caldone[x.key] = S.x.caldone[x.key] ? 0 : 1; save(); afterAg(); }

/* ---------- editor de evento ---------- */
function openEv(ev, o = {}){
  const g = o.g, isNew = !ev && !g;
  let e;
  if (g) e = { id:`g:` + g.id, title:g.title, type:g.cat || `google`, date:g.date, edate:g.edate || g.date, time:g.time || ``, etime:g.etime || ``, allDay:!!g.allDay, rems: g.rems || [], loc:g.loc || ``, desc:g.desc || ``, rrule:g.rrule || ``, _g:true };
  else if (ev) e = JSON.parse(JSON.stringify(ev));
  else { const t = o.time || ``; e = { id:String(Date.now()), title:``, type:o.type || `clase`, date:o.date || todayStr(), edate:o.edate || o.date || todayStr(), time:t, etime:o.etime || (t ? mtime(tmin(t) + 60) : ``), allDay: o.allDay != null ? o.allDay : !t, topics:selList().length < TORDER.length ? selList() : [], rem:-1, rems:[30], loc:``, desc:``, rrule:``, plan:true }; }
  if (!e.rems) e.rems = e.rem >= 0 ? [e.rem * 1440] : [];
  if (e.allDay == null) e.allDay = !e.time;
  if (!e.edate) e.edate = e.date;
  if (!e.allDay && !e.etime) e.etime = evEnd(e).etime;
  const occKey = o.occ ? `${e.id}@${o.occ}` : g ? `g@${g.id}` : null;
  let rep = null; // estado del bloque "Personalizado"
  openSheet(isNew ? `Nuevo evento` : g ? `Evento de Google Calendar` : `Editar evento`, b => {
    const t = el(`input`, `inp`); t.placeholder = `Título (ej.: Laboratorio Q3)`; t.value = e.title; t.setAttribute(`aria-label`, `Título`); t.oninput = () => e.title = t.value; b.append(t);
    const cats = el(`div`, `pills agcats`);
    agcal().cats.filter(c => c.k !== `google` || e.type === `google`).forEach(c => { const x = btn(`<i style="background:${GPAL[c.c]}"></i>${esc(c.n)}`, ``, () => { e.type = c.k; drawSheet(); }); x.setAttribute(`aria-pressed`, e.type === c.k); cats.append(x); });
    b.append(cats);
    b.append(fld(`Todo el día`, toggleBtn(e.allDay, v => { e.allDay = v; if (!v && !e.time){ e.time = `08:00`; e.etime = `09:00`; } drawSheet(); })));
    const dIn = (val, f) => { const i = el(`input`, `inp sm`); i.type = `date`; i.value = val; i.onchange = () => f(i.value); return i; };
    const tIn = (val, f) => { const i = el(`input`, `inp sm`); i.type = `time`; i.step = 300; i.value = val; i.onchange = () => f(i.value); return i; };
    const row = (...k) => { const w = el(`span`, `agdt`); w.append(...k); return w; };
    b.append(fld(`Empieza`, row(dIn(e.date, v => { const sp = dayDiff(e.date, e.edate); e.date = v; e.edate = addDays(v, Math.max(0, sp)); drawSheet(); }), ...(e.allDay ? [] : [tIn(e.time, v => { const d = tmin(e.etime) - tmin(e.time); e.time = v; if (e.edate === e.date) e.etime = mtime(tmin(v) + Math.max(15, d)); drawSheet(); })]))));
    b.append(fld(`Termina`, row(dIn(e.edate, v => { e.edate = v < e.date ? e.date : v; drawSheet(); }), ...(e.allDay ? [] : [tIn(e.etime, v => { e.etime = v; })]))));
    // repetir
    const wd = BYD[pdate(e.date).getDay()], dn = DIAS[pdate(e.date).getDay()];
    const PRE = [[``, `No se repite`], [`FREQ=DAILY`, `Cada día`], [`FREQ=WEEKLY;BYDAY=${wd}`, `Cada semana el ${dn}`], [`FREQ=MONTHLY`, `Cada mes el día ${pdate(e.date).getDate()}`], [`FREQ=YEARLY`, `Cada año`], [`custom`, `Personalizado…`]];
    const rs = el(`select`, `inp sm`); rs.setAttribute(`aria-label`, `Repetir`);
    const cur = PRE.find(p => p[0] && p[0] === e.rrule) ? e.rrule : e.rrule ? `custom` : ``;
    PRE.forEach(([k, n]) => { const op = el(`option`, ``, esc(n)); op.value = k; if (k === cur) op.selected = true; rs.append(op); });
    if (cur === `custom` && !rep) rep = parseRR(e.rrule);
    rs.onchange = () => { if (rs.value === `custom`){ rep = Object.assign({ FREQ:`WEEKLY`, INTERVAL:`1`, BYDAY:wd }, parseRR(e.rrule)); e.rrule = buildRR(rep); } else { rep = null; e.rrule = rs.value; } drawSheet(); };
    b.append(fld(`Repetir`, rs, e.rrule ? rrText(e.rrule, e.date) : ``));
    if (rep){
      const box = el(`div`, `agrep`);
      const iv = el(`input`, `inp sm`); iv.type = `number`; iv.min = 1; iv.max = 30; iv.value = rep.INTERVAL || 1; iv.style.width = `64px`; iv.onchange = () => { rep.INTERVAL = String(Math.max(1, +iv.value || 1)); e.rrule = buildRR(rep); drawSheet(); };
      const fq = el(`select`, `inp sm`); [[`DAILY`,`días`],[`WEEKLY`,`semanas`],[`MONTHLY`,`meses`],[`YEARLY`,`años`]].forEach(([k, n]) => { const op = el(`option`, ``, n); op.value = k; if (rep.FREQ === k) op.selected = true; fq.append(op); }); fq.onchange = () => { rep.FREQ = fq.value; if (rep.FREQ !== `WEEKLY`) delete rep.BYDAY; else rep.BYDAY = rep.BYDAY || wd; e.rrule = buildRR(rep); drawSheet(); };
      const l1 = el(`div`, `agrow`); l1.append(el(`span`, ``, `Cada`), iv, fq); box.append(l1);
      if (rep.FREQ === `WEEKLY`){ const dd = el(`div`, `agdays`); const sel = new Set((rep.BYDAY || wd).split(`,`)); [`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`].forEach(d => { const x = btn(BYDN[d], ``, () => { sel.has(d) ? sel.delete(d) : sel.add(d); if (!sel.size) sel.add(wd); rep.BYDAY = [...sel].join(`,`); e.rrule = buildRR(rep); drawSheet(); }); x.setAttribute(`aria-pressed`, sel.has(d)); x.setAttribute(`aria-label`, d); dd.append(x); }); box.append(dd); }
      const fin = el(`div`, `agrow`); const fm = rep.COUNT ? `count` : rep.UNTIL ? `until` : `never`;
      const fs = el(`select`, `inp sm`); [[`never`,`Nunca termina`],[`until`,`Hasta una fecha`],[`count`,`Después de N veces`]].forEach(([k, n]) => { const op = el(`option`, ``, n); op.value = k; if (fm === k) op.selected = true; fs.append(op); });
      fs.onchange = () => { delete rep.COUNT; delete rep.UNTIL; if (fs.value === `count`) rep.COUNT = `10`; if (fs.value === `until`) rep.UNTIL = addDays(e.date, 90).replace(/-/g, ``); e.rrule = buildRR(rep); drawSheet(); };
      fin.append(el(`span`, ``, `Termina`), fs);
      if (fm === `count`){ const c = el(`input`, `inp sm`); c.type = `number`; c.min = 1; c.value = rep.COUNT; c.style.width = `70px`; c.onchange = () => { rep.COUNT = String(Math.max(1, +c.value || 1)); e.rrule = buildRR(rep); drawSheet(); }; fin.append(c, el(`span`, ``, `veces`)); }
      if (fm === `until`){ const u = el(`input`, `inp sm`); u.type = `date`; u.value = `${rep.UNTIL.slice(0, 4)}-${rep.UNTIL.slice(4, 6)}-${rep.UNTIL.slice(6, 8)}`; u.onchange = () => { rep.UNTIL = u.value.replace(/-/g, ``); e.rrule = buildRR(rep); drawSheet(); }; fin.append(u); }
      box.append(fin); b.append(box);
    }
    // recordatorios
    const rw = el(`div`, `agrems`);
    e.rems.slice().sort((a, b) => a - b).forEach(m => { const x = btn(`${remTxt(m)} <b aria-hidden="true">×</b>`, `chipx`, () => { e.rems = e.rems.filter(y => y !== m); drawSheet(); }); x.setAttribute(`aria-label`, `Quitar recordatorio ${remTxt(m)}`); rw.append(x); });
    const ad = el(`select`, `inp sm`); ad.setAttribute(`aria-label`, `Agregar recordatorio`); const o0 = el(`option`, ``, `+ Agregar`); o0.value = ``; ad.append(o0);
    REMS.filter(m => !e.rems.includes(m)).forEach(m => { const op = el(`option`, ``, remTxt(m)); op.value = m; ad.append(op); });
    ad.onchange = () => { if (ad.value !== ``){ e.rems.push(+ad.value); drawSheet(); } }; rw.append(ad);
    b.append(fld(`Recordatorios`, rw, S.x.agMail && gcOn() ? `Llegan al teléfono y por correo` : `Llegan como notificación al teléfono`));
    if (!e._g && [`parcial`,`estudio`,`tarea`,`lab`,`clase`].includes(e.type)){
      const tp = el(`div`, `pills`);
      TORDER.forEach(k => { const x = btn(k.slice(1), ``, () => { e.topics = (e.topics || []).includes(k) ? e.topics.filter(y => y !== k) : (e.topics || []).concat(k); drawSheet(); }); x.setAttribute(`aria-pressed`, (e.topics || []).includes(k)); x.title = TOPICS[k].name; tp.append(x); });
      b.append(fld(`Temas que incluye`, tp));
    }
    if (!e._g && e.type === `parcial`) b.append(fld(`Crear plan de repaso hasta esa fecha`, toggleBtn(e.plan !== false, v => { e.plan = v; }), `Reparte los temas en los días que faltan`));
    const lo = el(`input`, `inp`); lo.placeholder = `Ubicación`; lo.value = e.loc || ``; lo.oninput = () => e.loc = lo.value; lo.setAttribute(`aria-label`, `Ubicación`);
    const de = el(`textarea`, `inp`); de.placeholder = `Descripción`; de.rows = 2; de.value = e.desc || ``; de.oninput = () => e.desc = de.value; de.setAttribute(`aria-label`, `Descripción`);
    b.append(lo, de);
    const msg = el(`p`, `muted`);
    const r = el(`div`, `btnrow`); r.style.marginTop = `12px`;
    r.append(btn(isNew ? `Guardar evento` : `Guardar cambios`, `btn acc`, () => {
      e.title = t.value.trim(); if (!e.title){ msg.textContent = `Escribe un título.`; t.focus(); return; }
      if (!e.allDay && e.edate === e.date && tmin(e.etime) <= tmin(e.time)) e.etime = mtime(tmin(e.time) + 60);
      if (e.allDay){ e.time = ``; e.etime = ``; }
      e.rem = -1; // los avisos usan ahora "rems" (minutos)
      closeSheet();
      if (e._g) return gcEditGoogle(g, e);
      evSaved(e, isNew);
    }));
    if (occKey){ const dn = (S.x.caldone || {})[occKey]; r.append(btn(dn ? `Marcar como pendiente` : `Marcar como hecho`, `btn ghost`, () => { closeSheet(); toggleDone({ key:occKey }); })); }
    if (!isNew && !e._g && typeof cnNewFromEvent === `function`) r.append(btn(`📓 Apuntes en el Cuaderno`, `btn ghost`, () => { closeSheet(); cnNewFromEvent(e); }));
    if (!isNew && !e._g && e.type === `parcial`) r.append(btn(`Simulacro de este parcial`, `btn ghost`, () => { closeSheet(); simParcial(e, 20); }));
    if (!isNew) r.append(btn(`Eliminar`, `btn danger`, () => {
      if (!confirm(e.rrule ? `¿Eliminar este evento y todas sus repeticiones?` : `¿Eliminar este evento?`)) return;
      closeSheet(); if (e._g) gcDelGoogle(g); else evDelete(e);
    }));
    r.append(btn(`Cancelar`, `btn ghost`, closeSheet));
    b.append(r, msg);
    if (gcOn()) b.append(el(`p`, `muted agnote`, g ? `Los cambios se guardan en tu Google Calendar.` : `✓ Se guarda también en tu Google Calendar.`));
    if (isNew) setTimeout(() => { try { t.focus(); } catch(x){} }, 60);
  });
}
function buildRR(o){ return [`FREQ=${o.FREQ}`, +o.INTERVAL > 1 ? `INTERVAL=${o.INTERVAL}` : ``, o.FREQ === `WEEKLY` && o.BYDAY ? `BYDAY=${o.BYDAY}` : ``, o.COUNT ? `COUNT=${o.COUNT}` : ``, o.UNTIL ? `UNTIL=${o.UNTIL}` : ``].filter(Boolean).join(`;`); }

/* ---------- categorías ---------- */
function openCats(){
  openSheet(`Ajustes de la agenda`, b => {
    b.append(fld(`Recordatorios también por correo`, toggleBtn(!!S.x.agMail, v => { S.x.agMail = v; save(); (S.x.ev || []).filter(e => e.gid && (e.rems || []).length).forEach(e => gcQueue({ op:`up`, id:e.id }, true)); gcSync(); drawSheet(); }), gcOn() ? `Google Calendar te manda un correo con cada recordatorio de los eventos de la agenda` : `Funciona cuando conectes tu Google Calendar: Google manda el correo`));
    b.append(el(`h4`, `agh4`, `Categorías`));
    b.append(el(`p`, `muted`, `Toca el color para cambiarlo (son los colores de Google Calendar). El ojo muestra u oculta la categoría en el calendario.`));
    const a = agcal();
    a.cats.forEach(c => {
      const r = el(`div`, `agcatrow`);
      const sw = btn(``, `agsw`, () => { c.open = !c.open; drawSheet(); }); sw.style.background = GPAL[c.c]; sw.setAttribute(`aria-label`, `Color de ${c.n}: ${GPALN[c.c]}`);
      const nm = el(`input`, `inp sm`); nm.value = c.n; nm.setAttribute(`aria-label`, `Nombre`); nm.onchange = () => { c.n = nm.value.trim() || c.n; save(); syncETYPE(); };
      const hid = a.hidden.includes(c.k); const ey = btn(hid ? `Oculta` : `Visible`, `btn ghost`, () => { a.hidden = hid ? a.hidden.filter(x => x !== c.k) : a.hidden.concat(c.k); save(); drawSheet(); afterAg(); });
      r.append(sw, nm, ey); b.append(r);
      if (c.open){ const p = el(`div`, `agpal`); Object.keys(GPAL).forEach(k => { const x = btn(``, ``, () => { c.c = +k; delete c.open; save(); syncETYPE(); drawSheet(); afterAg(); gcRecolor(c.k); }); x.style.background = GPAL[k]; x.title = GPALN[k]; x.setAttribute(`aria-label`, GPALN[k]); x.setAttribute(`aria-pressed`, c.c === +k); p.append(x); }); b.append(p); }
    });
    const hid = a.hidden.includes(`app`); const r = el(`div`, `agcatrow`); r.append(el(`span`, `agsw dash`), el(`span`, `grow`, `De la app (plan de repaso, pendientes, repasos, Pomodoro)`), btn(hid ? `Oculta` : `Visible`, `btn ghost`, () => { a.hidden = hid ? a.hidden.filter(x => x !== `app`) : a.hidden.concat(`app`); save(); drawSheet(); afterAg(); })); b.append(r);
    const d = btn(`Listo`, `btn acc wide`, closeSheet); d.style.marginTop = `10px`; b.append(d);
  });
}

/* ======================= VISTA AGENDA ======================= */
function agState(){ S.x.agv = S.x.agv || { view: `week`, d: todayStr() }; if (!S.x.agv.d) S.x.agv.d = todayStr(); return S.x.agv; }
function agRange(){
  const st = agState(), v = st.view, d = st.d;
  if (v === `day`) return { from:d, to:d, n:1 };
  if (v === `week`){ if (bp() === `phone`) return { from:d, to:addDays(d, 2), n:3 }; const p = pdate(d), m = addDays(d, -((p.getDay() + 6) % 7)); return { from:m, to:addDays(m, 6), n:7 }; }
  if (v === `month`){ const p = pdate(d), f = new Date(p.getFullYear(), p.getMonth(), 1), off = (f.getDay() + 6) % 7, from = addDays(dstr(f), -off); return { from, to:addDays(from, 41), n:42, month:p.getMonth() }; }
  return { from:todayStr() > d ? d : d, to:addDays(d, 59), n:60 };
}
function agMove(dir){
  const st = agState(), r = agRange();
  if (st.view === `month`){ const p = pdate(st.d); st.d = dstr(new Date(p.getFullYear(), p.getMonth() + dir, 1)); }
  else if (st.view === `list`) st.d = addDays(st.d, dir * 30);
  else st.d = addDays(st.d, dir * r.n);
  save(); renderView();
}
function agTitle(){
  const st = agState(), r = agRange(), a = pdate(r.from), b = pdate(r.to), cap = s => s[0].toUpperCase() + s.slice(1);
  if (st.view === `month`){ const p = pdate(st.d); return `${cap(MESES[p.getMonth()])} ${p.getFullYear()}`; }
  if (st.view === `day`) return cap(fmtDay(st.d));
  if (a.getMonth() === b.getMonth()) return `${a.getDate()}–${b.getDate()} de ${MESES[a.getMonth()]} ${a.getFullYear()}`;
  return `${a.getDate()} ${MESES[a.getMonth()].slice(0, 3)} – ${b.getDate()} ${MESES[b.getMonth()].slice(0, 3)} ${b.getFullYear()}`;
}
function vAgenda(v){
  syncETYPE(); const st = agState();
  const bar = el(`div`, `agbar`);
  const nav = el(`div`, `agnav`);
  const hoy = btn(`Hoy`, `btn ghost`, () => { st.d = todayStr(); save(); renderView(); });
  const pv = btn(icon(`left`), `btn ghost icb`, () => agMove(-1)), nx = btn(icon(`right`), `btn ghost icb`, () => agMove(1)); pv.setAttribute(`aria-label`, `Anterior`); nx.setAttribute(`aria-label`, `Siguiente`);
  nav.append(hoy, pv, nx, el(`b`, `agtit`, agTitle())); bar.append(nav);
  const vw = el(`div`, `agviews`); vw.setAttribute(`role`, `tablist`);
  [[`day`,`Día`],[`week`,`Semana`],[`month`,`Mes`],[`list`,`Lista`]].forEach(([k, n]) => { const x = btn(n, ``, () => { st.view = k; save(); renderView(); }); x.setAttribute(`role`, `tab`); x.setAttribute(`aria-selected`, st.view === k); vw.append(x); });
  const tools = el(`div`, `agtools`); tools.append(vw, gcChip());
  const add = btn(icon(`plus`) + `<span class="lbl">Evento</span>`, `btn acc`, () => openEv(null, { date: st.view === `month` || st.view === `list` ? (st.d >= todayStr() ? st.d : todayStr()) : st.d })); add.setAttribute(`aria-label`, `Nuevo evento`);
  tools.append(add); bar.append(tools); v.append(bar);
  // filtro de categorías
  const cf = el(`div`, `agfilt`); const a = agcal();
  a.cats.filter(c => c.k !== `google` || gcOn() || gcItems().length).forEach(c => { const off = a.hidden.includes(c.k); const x = btn(`<i style="background:${GPAL[c.c]}"></i>${esc(c.n)}`, off ? `off` : ``, () => { a.hidden = off ? a.hidden.filter(y => y !== c.k) : a.hidden.concat(c.k); save(); renderView(); }); x.setAttribute(`aria-pressed`, !off); x.title = off ? `Mostrar ${c.n}` : `Ocultar ${c.n}`; cf.append(x); });
  const offA = a.hidden.includes(`app`); const xa = btn(`<i class="dash"></i>De la app`, offA ? `off` : ``, () => { a.hidden = offA ? a.hidden.filter(y => y !== `app`) : a.hidden.concat(`app`); save(); renderView(); }); xa.setAttribute(`aria-pressed`, !offA); cf.append(xa);
  const ed = btn(icon(`gear`), `agcfg`, openCats); ed.setAttribute(`aria-label`, `Ajustes de la agenda`); ed.title = `Ajustes de la agenda: categorías y correo`; cf.append(ed);
  v.append(cf);
  if (GC.err) v.append(el(`div`, `alert`, icon(`bell`) + `<span>${esc(GC.err)}</span>`));
  const r = agRange(), items = agItems(r.from, r.to);
  if (st.view === `month`) v.append(agMonth(r, items));
  else if (st.view === `list`) v.append(agList(r, items));
  else v.append(agGrid(r, items));
  if (gcOn() && gcReady() && Date.now() - GC.last > 60e3) gcSync();
}

/* ---------- Día / Semana ---------- */
function layoutCols(list){
  // reparte en columnas los que se traslapan (como Google Calendar)
  const ev = list.map(w => ({ x:w.x, s:w.s, e:Math.max(w.e, w.s + 20) })).sort((a, b) => a.s - b.s || b.e - a.e);
  let group = [], end = -1; const groups = [];
  ev.forEach(o => { if (o.s >= end && group.length){ groups.push(group); group = []; } group.push(o); end = Math.max(end, o.e); });
  if (group.length) groups.push(group);
  groups.forEach(g => { const cols = []; g.forEach(o => { let c = cols.findIndex(e => e <= o.s); if (c < 0){ c = cols.length; cols.push(0); } cols[c] = o.e; o.c = c; }); g.forEach(o => { o.n = cols.length; }); });
  return ev;
}
function agGrid(r, items){
  const st = agState(), days = []; for (let i = 0; i < r.n; i++) days.push(addDays(r.from, i));
  const today = todayStr(), w = el(`div`, `aggrid`); w.style.setProperty(`--n`, r.n);
  const hd = el(`div`, `agdh`); hd.append(el(`span`));
  days.forEach(d => { const p = pdate(d); const x = btn(`${DIAS[p.getDay()].slice(0, 3)}<b>${p.getDate()}</b>`, d === today ? `hoy` : ``, () => { st.view = `day`; st.d = d; save(); renderView(); }); x.setAttribute(`aria-label`, fmtDay(d)); hd.append(x); });
  w.append(hd);
  // fila "Todo el día" con barras que cruzan días
  const ad = items.filter(x => x.allDay || x.edate > x.date);
  const lanes = []; const bars = [];
  ad.forEach(x => { const a = Math.max(0, dayDiff(r.from, x.date)), b = Math.min(r.n - 1, dayDiff(r.from, x.edate)); if (b < 0 || a > r.n - 1) return; let l = lanes.findIndex(z => z < a); if (l < 0){ l = lanes.length; lanes.push(-1); } lanes[l] = b; bars.push({ x, a, b, l }); });
  const MAXL = bp() === `phone` ? 2 : 3, adr = el(`div`, `agad`); adr.style.height = `${Math.max(1, Math.min(MAXL, lanes.length)) * 20 + 6 + (lanes.length > MAXL ? 16 : 0)}px`;
  adr.append(el(`span`, `l`, `Todo el día`));
  bars.forEach(o => { if (o.l >= MAXL) return; const b = itemEl(o.x, `bars`); b.style.cssText += `;left:calc(var(--gut) + (100% - var(--gut)) * ${o.a} / var(--n) + 2px);width:calc((100% - var(--gut)) * ${o.b - o.a + 1} / var(--n) - 4px);top:${3 + o.l * 20}px`; adr.append(b); });
  if (lanes.length > MAXL) days.forEach((d, i) => { const hidden = bars.filter(o => o.l >= MAXL && o.a <= i && o.b >= i).length; if (hidden){ const m = btn(`+${hidden}`, `agmore`, () => dayPop(d)); m.style.cssText = `left:calc(var(--gut) + (100% - var(--gut)) * ${i} / var(--n) + 2px);top:${3 + MAXL * 20}px`; adr.append(m); } });
  w.append(adr);
  // cuadrícula por horas
  const sc = el(`div`, `agsc`); const body = el(`div`, `agbody`); body.style.height = `${24 * HPX}px`;
  const hrs = el(`div`, `aghrs`); for (let h = 1; h < 24; h++){ const s = el(`span`, ``, `${h % 12 || 12} ${h < 12 ? `am` : `pm`}`); s.style.top = `${h * HPX}px`; hrs.append(s); } body.append(hrs);
  days.forEach((d, i) => {
    const col = el(`div`, `agcol` + (d === today ? ` hoy` : ``)); col.dataset.i = i; col.dataset.d = d;
    const timed = items.filter(x => !x.allDay && x.edate === x.date && x.date === d).map(x => ({ x, s:tmin(x.time), e:tmin(x.etime) || tmin(x.time) + 60 }));
    // eventos con hora que cruzan medianoche: se ven en cada día
    items.filter(x => !x.allDay && x.edate > x.date && x.date <= d && x.edate >= d).forEach(x => timed.push({ x, s: x.date === d ? tmin(x.time) : 0, e: x.edate === d ? tmin(x.etime) : 1440 }));
    layoutCols(timed).forEach(o => { const b = itemEl(o.x, `blk`); b.style.top = `${o.s / 60 * HPX}px`; b.style.height = `${Math.max(18, (o.e - o.s) / 60 * HPX - 2)}px`; b.style.left = `calc(${o.c} * 100% / ${o.n} + 1px)`; b.style.width = `calc(100% / ${o.n} - 3px)`; if (o.e - o.s < 40) b.classList.add(`short`); col.append(b); });
    if (d === today){ const nl = el(`div`, `agnow`); nl.style.top = `${nowMin() / 60 * HPX}px`; col.append(nl); }
    body.append(col);
  });
  sc.append(body); w.append(sc);
  agDrag(body, days);
  requestAnimationFrame(() => { sc.scrollTop = Math.max(0, (days.includes(today) ? nowMin() / 60 - 1.5 : 7) * HPX); });
  return w;
}
function itemEl(x, kind){
  const c = catColor(x.cat), b = el(`div`, `agit ${kind}` + (x.kind === `app` ? ` aa` : ``) + (x.done ? ` done` : ``) + (x.kind === `g` ? ` gg` : ``));
  b.style.setProperty(`--c`, c); b.tabIndex = 0; b.setAttribute(`role`, `button`);
  const tm = x.allDay ? `` : `${fmtTime(x.time)}${x.etime ? `–${fmtTime(x.etime)}` : ``}`;
  b.setAttribute(`aria-label`, `${x.title}${tm ? `, ${tm}` : ``}${x.kind === `app` ? `, de la app` : ``}${x.done ? `, hecho` : ``}`);
  b.innerHTML = kind === `blk` ? `<b>${esc(x.title)}</b><span>${tm}${x.loc ? ` · ${esc(x.loc)}` : ``}</span>${x.kind !== `app` && !x.rec ? `<i class="rs" data-rs="1"></i>` : ``}` : kind === `pill` && !x.allDay && x.edate === x.date ? `<u></u>${x.time ? `<small>${fmtTime(x.time).replace(` `, ``)}</small> ` : ``}${esc(x.title)}` : `${esc(x.title)}`;
  if (kind === `pill` && (x.allDay || x.edate > x.date)) b.classList.add(`agfill`);
  b._it = x;
  b.onclick = ev => { if (b._dragged){ b._dragged = false; return; } ev.stopPropagation(); openItem(x); };
  b.onkeydown = ev => { if (ev.key === `Enter` || ev.key === ` `){ ev.preventDefault(); openItem(x); } };
  return b;
}
/* arrastrar: crear sobre horas vacías, mover un evento o cambiar su duración.
   En pantallas táctiles hay que mantener presionado un momento (así el dedo sigue sirviendo para desplazarse). */
function agDrag(body, days){
  let D = null;
  const snap = m => Math.round(m / 15) * 15;
  const pos = ev => { const r = body.getBoundingClientRect(), cols = body.querySelectorAll(`.agcol`), c0 = cols[0].getBoundingClientRect(); const cw = c0.width; const i = Math.max(0, Math.min(days.length - 1, Math.floor((ev.clientX - c0.left) / cw))); return { i, m: Math.max(0, Math.min(1440, (ev.clientY - r.top) / HPX * 60)) }; };
  const start = (ev, kind, node) => {
    const p = pos(ev); D = { kind, node, p0:p, ev0:ev, id:ev.pointerId, touch: ev.pointerType === `touch`, on:false, moved:false };
    D.cw = body.querySelector(`.agcol`).getBoundingClientRect().width;
    if (node){ const it = node._it; D.it = it; D.s = tmin(it.time); D.e = tmin(it.etime) || D.s + 60; }
    if (D.touch) D.timer = setTimeout(() => { if (D && !D.moved){ D.on = true; try { body.setPointerCapture(D.id); } catch(e){} if (navigator.vibrate) navigator.vibrate(15); begin(); } }, 380);
  };
  const begin = () => {
    if (D.kind === `new`){ D.ghost = el(`div`, `agit blk ghost`); D.ghost.style.setProperty(`--c`, catColor(`clase`)); body.querySelectorAll(`.agcol`)[D.p0.i].append(D.ghost); }
    else D.node.classList.add(`drag`);
  };
  const move = ev => {
    if (!D || ev.pointerId !== D.id) return;
    const dx = ev.clientX - D.ev0.clientX, dy = ev.clientY - D.ev0.clientY;
    if (!D.on){ if (Math.hypot(dx, dy) > 6){ if (D.touch){ clearTimeout(D.timer); D = null; return; } D.on = true; try { body.setPointerCapture(D.id); } catch(e){} begin(); } else return; }
    D.moved = true; const p = pos(ev);
    if (D.kind === `new`){ const a = snap(Math.min(D.p0.m, p.m)), b = Math.max(a + 15, snap(Math.max(D.p0.m, p.m))); D.a = a; D.b = b; D.ghost.style.top = `${a / 60 * HPX}px`; D.ghost.style.height = `${(b - a) / 60 * HPX - 2}px`; D.ghost.innerHTML = `<b>Nuevo evento</b><span>${fmtTime(mtime(a))}–${fmtTime(mtime(b))}</span>`; }
    else if (D.kind === `move`){ const dm = snap(p.m - D.p0.m), di = p.i - D.p0.i; D.dm = dm; D.di = di; const ns = Math.max(0, Math.min(1440 - 15, D.s + dm)); D.node.style.top = `${ns / 60 * HPX}px`; D.node.style.transform = `translateX(${di * D.cw}px)`; D.node.querySelector(`span`).textContent = `${fmtTime(mtime(ns))}–${fmtTime(mtime(ns + D.e - D.s))}`; }
    else if (D.kind === `rs`){ const ne = Math.max(D.s + 15, Math.min(1440, snap(p.m))); D.ne = ne; D.node.style.height = `${(ne - D.s) / 60 * HPX - 2}px`; D.node.querySelector(`span`).textContent = `${fmtTime(mtime(D.s))}–${fmtTime(mtime(ne))}`; }
    ev.preventDefault();
  };
  const end = ev => {
    if (!D || (ev && ev.pointerId !== D.id)) return; clearTimeout(D.timer); const d = D; D = null;
    if (!d.on || !d.moved){ if (d.ghost) d.ghost.remove(); if (d.node) d.node.classList.remove(`drag`); if (!d.on && d.kind === `new` && ev && ev.type === `pointerup` && !d.touch){ const m = Math.floor(d.p0.m / 60) * 60; openEv(null, { date:days[d.p0.i], time:mtime(Math.max(0, m)), etime:mtime(Math.max(0, m) + 60), allDay:false }); } else if (d.on && d.kind === `new` && d.touch){ const m = Math.floor(d.p0.m / 60) * 60; openEv(null, { date:days[d.p0.i], time:mtime(Math.max(0, m)), etime:mtime(Math.max(0, m) + 60), allDay:false }); } return; }
    if (d.node) d.node._dragged = true;
    if (d.kind === `new`){ d.ghost.remove(); openEv(null, { date:days[d.p0.i], time:mtime(d.a), etime:mtime(d.b), allDay:false }); return; }
    const it = d.it;
    if (d.kind === `move`){ const ns = Math.max(0, Math.min(1440 - 15, d.s + (d.dm || 0))), date = addDays(it.date, d.di || 0), dur = d.e - d.s; applyTimes(it, date, mtime(ns), mtime(Math.min(1439, ns + dur))); }
    if (d.kind === `rs`) applyTimes(it, it.date, it.time, mtime(Math.min(1439, d.ne)));
  };
  body.addEventListener(`pointerdown`, ev => {
    if (ev.button > 0) return; const n = ev.target.closest(`.agit`);
    if (n){ const it = n._it; if (!it || it.kind === `app` || it.rec || it.allDay) return; start(ev, ev.target.dataset.rs ? `rs` : `move`, n); return; }
    if (ev.target.closest(`.agcol`)) start(ev, `new`, null);
  });
  body.addEventListener(`pointermove`, move);
  body.addEventListener(`pointerup`, end); body.addEventListener(`pointercancel`, () => { if (D){ clearTimeout(D.timer); if (D.ghost) D.ghost.remove(); if (D.node){ D.node.classList.remove(`drag`); D.node.style.transform = ``; } D = null; } });
  body.addEventListener(`touchmove`, ev => { if (D && D.on) ev.preventDefault(); }, { passive:false });
  body.addEventListener(`contextmenu`, ev => { if (D) ev.preventDefault(); });
}
function applyTimes(it, date, t1, t2){
  if (it.kind === `g`){ const g = it.src; gcEditGoogle(g, { title:g.title, type:g.cat, date, edate:date, time:t1, etime:t2, allDay:false, loc:g.loc, desc:g.desc, rems:g.rems }); return; }
  const e = it.src; e.date = date; e.edate = date; e.time = t1; e.etime = t2; e.allDay = false; evSaved(e);
}
function dayPop(d){
  openSheet(fmtDay(d)[0].toUpperCase() + fmtDay(d).slice(1), b => {
    const its = agItems(d, d); if (!its.length) b.append(el(`p`, `muted`, `Nada en este día.`));
    its.forEach(x => b.append(rowItem(x, d)));
    const r = el(`div`, `btnrow`); r.style.marginTop = `10px`; r.append(btn(`+ Evento este día`, `btn acc`, () => { closeSheet(); openEv(null, { date:d }); }), btn(`Ver el día`, `btn ghost`, () => { closeSheet(); const st = agState(); st.view = `day`; st.d = d; save(); if (S.mode !== `agenda`) go(`agenda`); else renderView(); }));
    b.append(r);
  });
}
function rowItem(x, d){
  const r = btn(``, `agrowit` + (x.kind === `app` ? ` aa` : ``) + (x.done ? ` done` : ``), () => { if (SH) closeSheet(); openItem(x); });
  r.style.setProperty(`--c`, catColor(x.cat));
  const tm = x.allDay ? (x.edate > x.date ? `${pdate(x.date).getDate()}–${pdate(x.edate).getDate()} ${MESES[pdate(x.edate).getMonth()].slice(0, 3)}` : `Todo el día`) : `${fmtTime(x.time)}${x.etime ? `–${fmtTime(x.etime)}` : ``}`;
  r.innerHTML = `<i></i><span class="tm">${tm}</span><span class="tx">${esc(x.title)}<small>${[x.kind === `app` ? `De la app` : x.kind === `g` ? `Google Calendar` : catOf(x.cat).n, x.loc ? esc(x.loc) : ``, x.rec ? `se repite` : ``].filter(Boolean).join(` · `)}</small></span>`;
  return r;
}
/* ---------- Mes ---------- */
function agMonth(r, items){
  const st = agState(), today = todayStr(), w = el(`div`, `agmonth`);
  const hd = el(`div`, `agmwd`); [`L`,`M`,`M`,`J`,`V`,`S`,`D`].forEach(x => hd.append(el(`span`, ``, x))); w.append(hd);
  const MAXL = bp() === `phone` ? 3 : 4;
  for (let wk = 0; wk < 6; wk++){
    const w0 = addDays(r.from, wk * 7), w6 = addDays(w0, 6);
    if (wk === 5 && pdate(w0).getMonth() !== r.month) break;
    const row = el(`div`, `agmrow`);
    for (let i = 0; i < 7; i++){ const d = addDays(w0, i), p = pdate(d); const c = el(`div`, `agmd` + (p.getMonth() !== r.month ? ` o` : ``) + (d === today ? ` hoy` : ``)); const n = btn(String(p.getDate()), `n`, () => { st.view = `day`; st.d = d; save(); renderView(); }); n.setAttribute(`aria-label`, fmtDay(d)); c.append(n); c.onclick = ev => { if (ev.target === c) openEv(null, { date:d }); }; row.append(c); }
    const wi = items.filter(x => x.date <= w6 && x.edate >= w0).sort((a, b) => (b.edate > b.date || b.allDay) - (a.edate > a.date || a.allDay) || a.date.localeCompare(b.date) || dayDiff(b.date, b.edate) - dayDiff(a.date, a.edate) || (a.time || ``).localeCompare(b.time || ``));
    const lanes = [[], [], [], [], [], [], []], hidden = [0, 0, 0, 0, 0, 0, 0];
    wi.forEach(x => {
      const a = Math.max(0, dayDiff(w0, x.date)), b = Math.min(6, dayDiff(w0, x.edate));
      let l = 0; while (true){ let free = true; for (let i = a; i <= b; i++) if (lanes[i][l]){ free = false; break; } if (free) break; l++; }
      if (l >= MAXL){ for (let i = a; i <= b; i++) hidden[i]++; return; }
      for (let i = a; i <= b; i++) lanes[i][l] = 1;
      const p = itemEl(x, `pill`); p.style.cssText += `;left:calc(100% * ${a} / 7 + 2px);width:calc(100% * ${b - a + 1} / 7 - 4px);top:${22 + l * 18}px`; row.append(p);
    });
    hidden.forEach((h, i) => { if (h){ const m = btn(`+${h} más`, `agmore`, () => dayPop(addDays(w0, i))); m.style.cssText = `left:calc(100% * ${i} / 7 + 2px);top:${22 + MAXL * 18}px`; row.append(m); } });
    w.append(row);
  }
  return w;
}
/* ---------- Lista ---------- */
function agList(r, items){
  const w = el(`div`, `aglist`), today = todayStr(); const by = {};
  items.forEach(x => { const d = x.date < r.from ? r.from : x.date; (by[d] = by[d] || []).push(x); });
  const ds = Object.keys(by).sort();
  if (!ds.length) w.append(el(`p`, `muted`, `No hay nada en los próximos 60 días.`));
  ds.forEach(d => { const p = pdate(d); const h = el(`div`, `aglh` + (d === today ? ` hoy` : ``), `<b>${p.getDate()}</b><span>${DIAS[p.getDay()]}<small>${MESES[p.getMonth()]}${d === today ? ` · hoy` : dayDiff(today, d) === 1 ? ` · mañana` : ``}</small></span>`); w.append(h); by[d].forEach(x => w.append(rowItem(x, d))); });
  return w;
}

/* ======================= GOOGLE CALENDAR ======================= */
const GC = { tok:null, exp:0, busy:false, err:``, last:0, timer:null };
const GSCOPE = `https://www.googleapis.com/auth/calendar.events`;
function gcOn(){ return !!S.x.gcalOn; }
function gcReady(){ if (!GC.tok){ try { const t = JSON.parse(sessionStorage.getItem(`quimica_gtok`) || `null`); if (t && t.exp > Date.now() + 60e3){ GC.tok = t.tok; GC.exp = t.exp; } } catch(e){} } return !!GC.tok && GC.exp > Date.now() + 30e3; }
function gcChip(){
  const b = btn(``, `btn ghost gcchip`, () => gcReady() ? gcSync(true) : gcConnect());
  if (!syncAvailable()){ b.innerHTML = `Google Calendar`; b.onclick = () => openSheet(`Google Calendar`, x => x.append(el(`p`, ``, `Para conectar tu Google Calendar primero abre la página desde su dirección en internet e inicia sesión con Google en “Guardar en la nube”.`))); return b; }
  if (!gcOn()){ b.innerHTML = `🔗 <span class="lbl">Conectar </span>Google`; b.title = `Conectar con tu Google Calendar`; return b; }
  b.innerHTML = GC.busy ? `🔄 <span class="lbl">Sincronizando…</span>` : gcReady() ? `🔄 <span class="lbl">Google </span>✓` : `🔄 <span class="lbl">Google: </span>actualizar`;
  b.title = gcReady() ? `Sincronizado con Google Calendar${GC.last ? ` · ${new Date(GC.last).toLocaleTimeString()}` : ``}. Toca para actualizar ahora.` : `Toca para volver a conectar con Google Calendar`;
  if (!gcReady()) b.classList.add(`warn`);
  return b;
}
function gcPaint(){ document.querySelectorAll(`.gcchip`).forEach(c => c.replaceWith(gcChip())); }
async function gcConnect(){
  if (!syncAvailable()) return;
  GC.err = ``;
  try {
    if (!window.firebase || !firebase.apps.length){ await syncInit(); }
    const p = new firebase.auth.GoogleAuthProvider(); p.addScope(GSCOPE);
    const u = firebase.auth().currentUser; if (u && u.email) p.setCustomParameters({ login_hint:u.email });
    const r = u ? await u.reauthenticateWithPopup(p) : await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => firebase.auth().signInWithPopup(p));
    const tok = r && r.credential && r.credential.accessToken; if (!tok) throw new Error(`Google no entregó el permiso del calendario.`);
    GC.tok = tok; GC.exp = Date.now() + 55 * 60e3; try { sessionStorage.setItem(`quimica_gtok`, JSON.stringify({ tok, exp:GC.exp })); } catch(e){}
    if (!S.x.gcalOn){ S.x.gcalOn = true; (S.x.ev || []).forEach(e => { if (!e.gid && e.date >= addDays(todayStr(), -30)) gcQueue({ op:`up`, id:e.id }, true); }); save(); }
    await gcSync(true);
  } catch(e){
    const c = e && e.code || ``;
    GC.err = c.includes(`popup-closed`) || c.includes(`cancelled`) ? `` : c.includes(`user-mismatch`) ? `Elige la misma cuenta de Google con la que guardas tu progreso.` : c.includes(`popup-blocked`) ? `El navegador bloqueó la ventana de Google. Permite ventanas emergentes e inténtalo de nuevo.` : `No se pudo conectar con Google Calendar (${c || e.message}).`;
    gcPaint(); if (S.mode === `agenda`) renderView();
  }
}
function gcDisconnect(){ S.x.gcalOn = false; GC.tok = null; try { sessionStorage.removeItem(`quimica_gtok`); localStorage.removeItem(`quimica_gcal`); } catch(e){} save(); afterAg(); }
async function gapi(method, path, body, qs){
  const u = `https://www.googleapis.com/calendar/v3/calendars/primary/${path}${qs ? `?` + new URLSearchParams(qs) : ``}`;
  const r = await fetch(u, { method, headers:{ Authorization:`Bearer ${GC.tok}`, 'Content-Type':`application/json` }, body: body ? JSON.stringify(body) : undefined });
  if (r.status === 401){ GC.tok = null; try { sessionStorage.removeItem(`quimica_gtok`); } catch(e){} const er = new Error(`auth`); er.auth = true; throw er; }
  if (r.status === 204 || r.status === 410) return null;
  const j = await r.json().catch(() => ({}));
  if (!r.ok){ const er = new Error((j.error && j.error.message) || `Error ${r.status}`); er.status = r.status; throw er; }
  return j;
}
function gcQueue(op, quiet){
  if (!gcOn()) return; S.x.gq = (S.x.gq || []).filter(x => x.id !== op.id); S.x.gq.push(op); save();
  if (!quiet){ clearTimeout(GC.timer); GC.timer = setTimeout(() => gcSync(), 1200); }
}
function toG(e){
  const tz = tzName(), { edate, etime } = evEnd(e), ad = evAllDay(e);
  return { summary:e.title, location:e.loc || ``, description:e.desc || ``, colorId:String(catOf(e.type).c),
    start: ad ? { date:e.date } : { dateTime:`${e.date}T${e.time}:00`, timeZone:tz },
    end: ad ? { date:addDays(edate, 1) } : { dateTime:`${edate}T${etime}:00`, timeZone:tz },
    recurrence: e.rrule ? [`RRULE:` + e.rrule] : [],
    reminders:gRems(e.rems),
    extendedProperties:{ private:{ mf:e.id, qtype:e.type || `otro` } } };
}
function fromG(g){
  const ad = !!(g.start && g.start.date), s = ad ? g.start.date : (g.start && g.start.dateTime || ``), en = ad ? (g.end && g.end.date) : (g.end && g.end.dateTime || ``);
  const loc = dt => { const d = new Date(dt); return { d:dstr(d), t:`${pad2(d.getHours())}:${pad2(d.getMinutes())}` }; };
  let date, edate, time = ``, etime = ``;
  if (ad){ date = s; edate = addDays(en || s, -1); if (edate < date) edate = date; }
  else { const a = loc(s), b = loc(en || s); date = a.d; time = a.t; edate = b.d; etime = b.t; if (etime === `00:00` && edate > date){ edate = addDays(edate, -1); etime = `23:59`; } }
  const cats = agcal().cats, pv = (g.extendedProperties && g.extendedProperties.private) || {};
  const cat = pv.qtype && cats.some(c => c.k === pv.qtype) ? pv.qtype : g.colorId ? ((cats.find(c => c.c === +g.colorId && c.k !== `google`) || {}).k || `google`) : `google`;
  return { id:g.id, recId:g.recurringEventId || null, mf:pv.mf || null, title:g.summary || ``, date, edate, time, etime, allDay:ad, cat, loc:g.location || ``, desc:g.description || ``,
    rems: g.reminders && g.reminders.overrides ? [...new Set(g.reminders.overrides.map(o => o.minutes))] : [], rrule:(g.recurrence || []).map(x => x.replace(/^RRULE:/, ``)).find(x => /FREQ=/.test(x)) || ``, updated:g.updated, link:g.htmlLink };
}
async function gcFlush(){
  const q = (S.x.gq || []).slice();
  for (const op of q){
    try {
      if (op.op === `up`){
        const e = (S.x.ev || []).find(x => x.id === op.id); if (e){
          let gid = e.gid;
          if (!gid){ const f = await gapi(`GET`, `events`, null, { privateExtendedProperty:`mf=${e.id}`, maxResults:5 }); const hit = f && f.items && f.items.find(x => x.status !== `cancelled`); if (hit) gid = hit.id; }
          let res;
          if (gid){ try { res = await gapi(`PUT`, `events/${encodeURIComponent(gid)}`, toG(e)); } catch(er){ if (er.status === 404 || er.status === 410) res = await gapi(`POST`, `events`, toG(e)); else throw er; } }
          else res = await gapi(`POST`, `events`, toG(e));
          if (res){ e.gid = res.id; e.gupd = res.updated; }
        }
      } else if (op.op === `del`){ if (op.gid) try { await gapi(`DELETE`, `events/${encodeURIComponent(op.gid)}`); } catch(er){ if (er.status !== 404 && er.status !== 410) throw er; } }
      else if (op.op === `gpatch`) await gapi(`PATCH`, `events/${encodeURIComponent(op.gid)}`, op.body);
      else if (op.op === `gdel`) try { await gapi(`DELETE`, `events/${encodeURIComponent(op.gid)}`); } catch(er){ if (er.status !== 404 && er.status !== 410) throw er; }
      S.x.gq = (S.x.gq || []).filter(x => x !== op); save();
    } catch(er){ if (er.auth) throw er; GC.err = `No se pudo guardar “${op.id}” en Google: ${er.message}`; }
  }
}
async function gcPull(){
  const from = new Date(); from.setDate(from.getDate() - 30); const to = new Date(); to.setDate(to.getDate() + 180);
  let items = [], page = null, n = 0;
  do { const j = await gapi(`GET`, `events`, null, Object.assign({ timeMin:from.toISOString(), timeMax:to.toISOString(), singleEvents:`true`, orderBy:`startTime`, maxResults:`2500` }, page ? { pageToken:page } : {})); items = items.concat((j && j.items) || []); page = j && j.nextPageToken; n++; } while (page && n < 5);
  const all = items.filter(g => g.status !== `cancelled`).map(fromG);
  // los eventos creados por la página: si se cambiaron en Google, se actualizan aquí
  const pend = new Set((S.x.gq || []).map(x => x.id)); const seen = new Set();
  all.forEach(g => {
    if (!g.mf) return; const e = (S.x.ev || []).find(x => x.id === g.mf); if (!e) return; seen.add(e.id);
    if (g.recId){ e.gid = g.recId; return; } e.gid = g.id;
    if (pend.has(e.id)) return;
    if (g.updated && (!e.gupd || Date.parse(g.updated) > Date.parse(e.gupd) + 2000)){
      Object.assign(e, { title:g.title, date:g.date, edate:g.edate, time:g.time, etime:g.etime, allDay:g.allDay, loc:g.loc, desc:g.desc, rems:g.rems, rrule: e.rrule && !g.rrule ? e.rrule : g.rrule || e.rrule });
      if (g.cat !== `google`) e.type = g.cat; e.gupd = g.updated;
    }
  });
  // borrados en Google (solo los que no se repiten y caen dentro del rango revisado)
  const f0 = dstr(from), t0 = dstr(to);
  S.x.ev = (S.x.ev || []).filter(e => { const gone = e.gid && !e.rrule && !pend.has(e.id) && !seen.has(e.id) && e.date >= f0 && e.date <= t0; if (gone) tomb(e.id); return !gone; });
  try { localStorage.setItem(`quimica_gcal`, JSON.stringify({ t:Date.now(), items: all.filter(g => !g.mf || !(S.x.ev || []).some(e => e.id === g.mf)) })); } catch(e){}
  save();
}
async function gcSync(force){
  if (!gcOn() || GC.busy) return; if (!gcReady()){ gcPaint(); return; }
  GC.busy = true; gcPaint();
  GC.err = ``;
  try { await gcFlush(); await gcPull(); GC.last = Date.now(); }
  catch(e){ if (!e.auth) GC.err = `No se pudo sincronizar con Google Calendar: ${e.message}`; }
  GC.busy = false; gcPaint();
  if (S.mode === `agenda` && !SH) renderView(); if (S.mode === `inicio`) renderView(); renderHead();
}
function gcEditGoogle(g, e){
  const tz = tzName(), body = { summary:e.title, location:e.loc || ``, description:e.desc || ``,
    start: e.allDay ? { date:e.date } : { dateTime:`${e.date}T${e.time}:00`, timeZone:tz }, end: e.allDay ? { date:addDays(e.edate || e.date, 1) } : { dateTime:`${e.edate || e.date}T${e.etime}:00`, timeZone:tz },
    reminders:gRems(e.rems) };
  if (e.type && e.type !== `google`) body.colorId = String(catOf(e.type).c);
  // se ve al instante; luego se confirma con Google
  try { const c = JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`); const it = (c.items || []).find(x => x.id === g.id); if (it) Object.assign(it, { title:e.title, date:e.date, edate:e.edate || e.date, time:e.allDay ? `` : e.time, etime:e.allDay ? `` : e.etime, allDay:e.allDay, loc:e.loc, desc:e.desc, rems:e.rems, cat:e.type }); localStorage.setItem(`quimica_gcal`, JSON.stringify(c)); } catch(x){}
  gcQueue({ op:`gpatch`, id:`g:` + g.id, gid:g.id, body }); afterAg();
}
function gcDelGoogle(g){
  try { const c = JSON.parse(localStorage.getItem(`quimica_gcal`) || `{}`); c.items = (c.items || []).filter(x => x.id !== g.id); localStorage.setItem(`quimica_gcal`, JSON.stringify(c)); } catch(x){}
  gcQueue({ op:`gdel`, id:`g:` + g.id, gid:g.id }); afterAg();
}
function gcRecolor(k){ (S.x.ev || []).filter(e => e.type === k && e.gid).forEach(e => gcQueue({ op:`up`, id:e.id }, true)); gcSync(); }
setInterval(() => { if (document.visibilityState === `visible` && gcOn() && gcReady() && Date.now() - GC.last > 90e3) gcSync(); }, 30e3);

/* ======================= ORGANIZAR · PENDIENTES, NOTAS RÁPIDAS, PANEL 📅, INICIO Y BARRA INFERIOR =======================
   S.x.agn = [{ id, kind:`task`|`note`, text, date, time, color, tags:[], pinned, done, t (tema), created, upd }]   */
const NCOL = [[`verde`,`#33B679`],[`ambar`,`#F6BF26`],[`azul`,`#039BE5`],[`rojo`,`#E67C73`],[`morado`,`#8E24AA`],[`gris`,`#616161`]];
const ncol = k => (NCOL.find(c => c[0] === k) || NCOL[5])[1];
const agn = () => S.x.agn || (S.x.agn = []);
const nid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const tagsOf = txt => [...new Set((String(txt).match(/#[\wáéíóúñü]+/gi) || []).map(t => t.toLowerCase()))];
function nSave(n){ n.upd = Date.now(); n.tags = tagsOf(n.text); const L = agn(), i = L.findIndex(x => x.id === n.id); if (i >= 0) L[i] = n; else L.unshift(n); save(); afterAg(); if ([`pendientes`,`notasr`].includes(S.mode)) renderView(); }
function nDel(n){ tomb(n.id); S.x.agn = agn().filter(x => x.id !== n.id); save(); afterAg(); if ([`pendientes`,`notasr`].includes(S.mode)) renderView(); }

/* ---------- editor de pendiente o nota ---------- */
function openNota(n, kind){
  const isNew = !n; n = n ? JSON.parse(JSON.stringify(n)) : { id:nid(), kind:kind || `note`, text:``, date:``, time:``, color:`verde`, tags:[], pinned:false, done:false, t:``, created:Date.now() };
  const task = n.kind === `task`;
  openSheet(isNew ? (task ? `Nuevo pendiente` : `Nueva nota`) : (task ? `Pendiente` : `Nota`), b => {
    const ta = el(`textarea`, `inp`); ta.rows = task ? 2 : 6; ta.value = n.text; ta.placeholder = task ? `¿Qué tienes que hacer?` : `Escribe tu nota. Usa #etiquetas, por ejemplo #T28 o #lab`; ta.oninput = () => n.text = ta.value; ta.setAttribute(`aria-label`, task ? `Pendiente` : `Nota`); b.append(ta);
    if (task){
      const di = el(`input`, `inp sm`); di.type = `date`; di.value = n.date || ``; di.onchange = () => n.date = di.value; di.setAttribute(`aria-label`, `Fecha`);
      const ti = el(`input`, `inp sm`); ti.type = `time`; ti.value = n.time || ``; ti.onchange = () => n.time = ti.value; ti.setAttribute(`aria-label`, `Hora`);
      const w = el(`span`, `agdt`); w.append(di, ti); b.append(fld(`Fecha`, w, `Opcional · con fecha sale en el calendario`));
      const q = el(`div`, `pills`); [[``, `Sin fecha`], [todayStr(), `Hoy`], [addDays(todayStr(), 1), `Mañana`], [addDays(todayStr(), 7), `En una semana`]].forEach(([d, l]) => { const x = btn(l, ``, () => { n.date = d; if (!d) n.time = ``; drawSheet(); }); x.setAttribute(`aria-pressed`, (n.date || ``) === d); q.append(x); }); b.append(q);
    } else {
      const cs = el(`div`, `ncols`); NCOL.forEach(([k, c]) => { const x = btn(``, ``, () => { n.color = k; drawSheet(); }); x.style.background = c; x.setAttribute(`aria-label`, `Color ${k}`); x.setAttribute(`aria-pressed`, n.color === k); cs.append(x); }); b.append(fld(`Color`, cs));
      b.append(fld(`Fijar arriba`, toggleBtn(!!n.pinned, v => n.pinned = v), `También sale en el Inicio`));
    }
    const ts = el(`select`, `inp sm`); ts.setAttribute(`aria-label`, `Tema`); const o0 = el(`option`, ``, `Sin tema`); o0.value = ``; ts.append(o0);
    TORDER.forEach(t => { const o = el(`option`, ``, `${TOPICS[t].n} · ${esc(TOPICS[t].name)}`); o.value = t; if (n.t === t) o.selected = true; ts.append(o); }); ts.onchange = () => n.t = ts.value; ts.style.maxWidth = `240px`;
    b.append(fld(`Tema`, ts));
    const r = el(`div`, `btnrow`); r.style.marginTop = `12px`;
    r.append(btn(`Guardar`, `btn acc`, () => { if (!n.text.trim()){ ta.focus(); return; } n.text = n.text.trim(); closeSheet(); nSave(n); }));
    if (!isNew) r.append(btn(`Eliminar`, `btn danger`, () => { if (!confirm(`¿Eliminar?`)) return; closeSheet(); nDel(n); }));
    r.append(btn(`Cancelar`, `btn ghost`, closeSheet)); b.append(r);
    setTimeout(() => { try { ta.focus(); } catch(e){} }, 60);
  });
}

/* ---------- Pendientes ---------- */
function quickAdd(kind, ph, onAdd){
  const f = el(`form`, `qadd`); const i = el(`input`, `inp`); i.placeholder = ph; i.setAttribute(`aria-label`, ph); i.enterKeyHint = `done`;
  const b = btn(`Agregar`, `btn acc`); b.type = `submit`;
  f.onsubmit = ev => { ev.preventDefault(); const t = i.value.trim(); if (!t) return; const n = { id:nid(), kind, text:t, date: kind === `task` && onAdd && onAdd.date || ``, time:``, color:`verde`, pinned:false, done:false, t:``, created:Date.now() }; nSave(n); i.value = ``; setTimeout(() => { const j = document.querySelector(`.qadd input`); if (j) j.focus(); }, 30); };
  f.append(i, b); return f;
}
function taskRow(n){
  const r = el(`div`, `tkrow` + (n.done ? ` done` : ``));
  const c = btn(n.done ? `✓` : ``, `tkb`, () => { n.done = !n.done; n.doneAt = n.done ? Date.now() : null; nSave(n); }); c.setAttribute(`role`, `checkbox`); c.setAttribute(`aria-checked`, !!n.done); c.setAttribute(`aria-label`, `Hecho: ${n.text}`);
  const today = todayStr(), sub = [n.date ? (n.date === today ? `Hoy` : n.date === addDays(today, 1) ? `Mañana` : fmtDay(n.date)) + (n.time ? ` · ${fmtTime(n.time)}` : ``) : ``].filter(Boolean).join(``);
  const t = btn(`${esc(n.text)}${sub ? `<small>${sub}</small>` : ``}`, `tktx`, () => openNota(n));
  r.append(c, t); if (n.t) r.append(el(`span`, `tag`, TOPICS[n.t] ? TOPICS[n.t].n.replace(`Tema `, `T`) : ``));
  return r;
}
function vPend(v){
  v.append(quickAdd(`task`, `Anota un pendiente: estudiar…`, { date:`` }));
  const L = agn().filter(n => n.kind === `task`), today = todayStr();
  const G = [[`Vencidas`, L.filter(n => !n.done && n.date && n.date < today), `bad`], [`Hoy`, L.filter(n => n.date === today && (!n.done || (n.doneAt && dstr(new Date(n.doneAt)) === today))), `acc`], [`Próximos días`, L.filter(n => !n.done && n.date > today).sort((a, b) => a.date.localeCompare(b.date)), ``], [`Sin fecha`, L.filter(n => !n.done && !n.date), ``]];
  let any = false;
  G.forEach(([t, l, c]) => { if (!l.length) return; any = true; v.append(el(`h4`, `tkh ${c}`, `${t} · ${l.length}`)); const box = el(`div`, `tkbox`); l.forEach(n => box.append(taskRow(n))); v.append(box); });
  const hechos = L.filter(n => n.done && !(n.date === today && n.doneAt && dstr(new Date(n.doneAt)) === today));
  if (hechos.length){ const d = el(`details`, `tkdone`); d.append(el(`summary`, ``, `Hechos · ${hechos.length}`)); hechos.slice(0, 40).forEach(n => d.append(taskRow(n))); const cl = btn(`Borrar los hechos`, `linkbtn`, () => { if (confirm(`¿Borrar ${hechos.length} pendientes hechos?`)){ hechos.forEach(n => tomb(n.id)); S.x.agn = agn().filter(n => !(n.kind === `task` && n.done)); save(); renderView(); } }); d.append(cl); v.append(d); }
  if (!any) v.append(el(`p`, `muted`, `No tienes pendientes. Escribe arriba lo que tengas que hacer; toca un pendiente para ponerle fecha o tema.`));
}

/* ---------- Notas rápidas ---------- */
function vNotasR(v){
  const top = el(`div`, `nrtop`); const q = el(`input`, `inp`); q.type = `search`; q.placeholder = `🔍 Buscar en tus notas`; q.value = S.x.nrq || ``; q.setAttribute(`aria-label`, `Buscar en tus notas`);
  const nb = btn(icon(`plus`) + ` Nota`, `btn acc`, () => openNota(null, `note`)); top.append(q, nb); v.append(top);
  const L = agn().filter(n => n.kind === `note`), tags = [...new Set(L.flatMap(n => n.tags || []))].sort();
  const tf = el(`div`, `agfilt`); const ct = S.x.nrt || ``;
  [[``, `Todas`]].concat(tags.map(t => [t, t])).forEach(([k, l]) => { const x = btn(esc(l), ct === k ? `on` : ``, () => { S.x.nrt = k; save(); renderView(); }); x.setAttribute(`aria-pressed`, ct === k); tf.append(x); });
  if (tags.length) v.append(tf);
  const grid = el(`div`, `nrgrid`); v.append(grid);
  const draw = () => {
    grid.innerHTML = ``; const s = (S.x.nrq || ``).toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g, ``);
    const ls = L.filter(n => (!ct || (n.tags || []).includes(ct)) && (!s || n.text.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g, ``).includes(s))).sort((a, b) => (b.pinned - a.pinned) || (b.upd || 0) - (a.upd || 0));
    if (!ls.length) grid.append(el(`p`, `muted`, L.length ? `Ninguna nota coincide.` : `Aún no tienes notas. Anota fórmulas, trucos para memorizar o dudas para el docente.`));
    ls.forEach(n => { const [t, ...rest] = n.text.split(`\n`); const c = btn(`${n.pinned ? `<span class="pin">📌</span>` : ``}<b>${esc(t)}</b>${rest.length ? `<span>${esc(rest.join(`\n`)).slice(0, 220)}</span>` : ``}<span class="ntg">${(n.tags || []).map(g => `<i>${esc(g)}</i>`).join(``)}${n.t && TOPICS[n.t] ? `<i>${TOPICS[n.t].n}</i>` : ``}</span>`, `nrc`, () => openNota(n)); c.style.setProperty(`--c`, ncol(n.color)); grid.append(c); });
  };
  q.oninput = () => { S.x.nrq = q.value; draw(); };
  draw();
}

/* ---------- panel rápido 📅 (barra superior) ---------- */
function todayLeft(){
  const t = todayStr(), nm = nowMin();
  return agItems(t, t).filter(x => !x.done && x.app !== `pomo` && (x.allDay || tmin(x.etime || x.time) >= nm)).length;
}
function openQuick(){
  let w0 = S.x.qw || (() => { const p = pdate(todayStr()); return addDays(todayStr(), -((p.getDay() + 6) % 7)); })(); let sel = S.x.qd || todayStr();
  openSheet(`Agenda rápida`, b => {
    const h = el(`div`, `qhd`); const pv = btn(icon(`left`), `btn ghost icb`, () => { w0 = addDays(w0, -7); drawSheet(); }), nx = btn(icon(`right`), `btn ghost icb`, () => { w0 = addDays(w0, 7); drawSheet(); }); pv.setAttribute(`aria-label`, `Semana anterior`); nx.setAttribute(`aria-label`, `Semana siguiente`);
    const p0 = pdate(w0), p6 = pdate(addDays(w0, 6)); h.append(pv, el(`b`, ``, `${p0.getDate()} ${MESES[p0.getMonth()].slice(0, 3)} – ${p6.getDate()} ${MESES[p6.getMonth()].slice(0, 3)}`), nx); b.append(h);
    const strip = el(`div`, `qstrip`); const its = agItems(w0, addDays(w0, 6)); const today = todayStr();
    for (let i = 0; i < 7; i++){ const d = addDays(w0, i), p = pdate(d), n = its.filter(x => x.date <= d && x.edate >= d && x.app !== `pomo`).length;
      const x = btn(`${DIAS[p.getDay()][0].toUpperCase()}<b>${p.getDate()}</b><i>${n ? `•`.repeat(Math.min(3, n)) : ``}</i>`, (d === sel ? `on` : ``) + (d === today ? ` hoy` : ``), () => { sel = d; drawSheet(); }); x.setAttribute(`aria-label`, `${fmtDay(d)}${n ? `, ${n}` : ``}`); x.setAttribute(`aria-pressed`, d === sel); strip.append(x); }
    b.append(strip);
    const di = its.filter(x => x.date <= sel && x.edate >= sel);
    b.append(el(`div`, `qday`, `${fmtDay(sel)[0].toUpperCase() + fmtDay(sel).slice(1)}${sel === today ? ` · quedan ${todayLeft()}` : ``}`));
    if (!di.length) b.append(el(`p`, `muted`, `Nada en este día.`));
    di.forEach(x => b.append(rowItem(x, sel)));
    const r = el(`div`, `btnrow`); r.style.marginTop = `10px`;
    r.append(btn(`+ Evento`, `btn ghost`, () => { closeSheet(); openEv(null, { date:sel }); }), btn(`+ Pendiente`, `btn ghost`, () => { closeSheet(); openNota({ id:nid(), kind:`task`, text:``, date:sel, time:``, created:Date.now() }); }), btn(`Abrir agenda`, `btn acc`, () => { closeSheet(); const st = agState(); st.d = sel; save(); go(`agenda`); }));
    b.append(r);
  });
}
const _renderHeadO = renderHead;
renderHead = function(){
  _renderHeadO();
  const tools = $(`#head .top .tools`); if (!tools) return;
  const n = todayLeft(); const b = btn(`📅${n ? ` <b>${n}</b>` : ``}`, `hbtn hcal`, openQuick); b.title = n ? `Hoy te quedan ${n}` : `Agenda rápida`; b.setAttribute(`aria-label`, n ? `Agenda rápida: hoy te quedan ${n}` : `Agenda rápida`);
  const cd = tools.querySelector(`.cdc`); if (cd) cd.after(b); else tools.prepend(b);
};

/* ---------- Inicio: "Hoy en tu agenda" y "Notas fijadas" ---------- */
function agendaHoyCard(){
  const b = el(`div`, `boxc iag`); const today = todayStr();
  const h = el(`div`, `ihd`); h.append(el(`h3`, ``, `Hoy en tu agenda`), btn(`Abrir agenda ›`, `linkbtn`, () => { agState().d = today; save(); go(`agenda`); })); b.append(h);
  const its = agItems(today, today).filter(x => x.app !== `task` && x.app !== `pomo`);
  const ad = its.filter(x => x.allDay), tm = its.filter(x => !x.allDay);
  if (ad.length){ b.append(el(`div`, `iagk`, `Todo el día · ${ad.length}`)); ad.slice(0, 4).forEach(x => b.append(oneLine(x))); if (ad.length > 4) b.append(btn(`+${ad.length - 4} más`, `linkbtn`, () => dayPop(today))); }
  tm.forEach(x => b.append(oneLine(x)));
  if (!its.length) b.append(el(`p`, `muted`, `Nada en la agenda para hoy.`));
  const tk = agn().filter(n => n.kind === `task` && !n.done && n.date && n.date <= today);
  if (tk.length){ b.append(el(`div`, `iagk`, `Pendientes de hoy`)); const box = el(`div`, `tkbox`); tk.slice(0, 5).forEach(n => box.append(taskRow(n))); b.append(box); if (tk.length > 5) b.append(btn(`Ver los ${tk.length}`, `linkbtn`, () => go(`pendientes`))); }
  b.append(quickAdd(`task`, `Anota algo rápido…`, { date:today }));
  return b;
}
function oneLine(x){
  const r = btn(``, `iagl` + (x.kind === `app` ? ` aa` : ``) + (x.done ? ` done` : ``), () => openItem(x)); r.style.setProperty(`--c`, catColor(x.cat));
  r.innerHTML = `<i></i>${x.allDay ? `` : `<b>${fmtTime(x.time)}</b>`}<span>${esc(x.title)}</span>`; r.title = x.title; return r;
}
function fijadasCard(){
  const ns = agn().filter(n => n.kind === `note` && n.pinned), ps = typeof cnPinned === `function` ? cnPinned() : [];
  if (!ns.length && !ps.length) return null;
  const b = el(`div`, `boxc ifij`); const h = el(`div`, `ihd`); h.append(el(`h3`, ``, `Notas fijadas`), btn(`Cuaderno ›`, `linkbtn`, () => go(`cuaderno`))); b.append(h);
  const g = el(`div`, `nrgrid sm`);
  ps.slice(0, 4).forEach(p => { const c = btn(`<b>📄 ${esc(p.title || `Sin título`)}</b><span>${esc(cnPath(p))}</span>`, `nrc`, () => cnOpenPage(p.id)); c.style.setProperty(`--c`, cnColorOf(p)); g.append(c); });
  ns.slice(0, 4).forEach(n => { const [t, ...rest] = n.text.split(`\n`); const c = btn(`<b>📌 ${esc(t)}</b>${rest.length ? `<span>${esc(rest.join(` `)).slice(0, 90)}</span>` : `<span>Nota rápida</span>`}`, `nrc`, () => openNota(n)); c.style.setProperty(`--c`, ncol(n.color)); g.append(c); });
  b.append(g); return b;
}

/* ---------- barra inferior: 4 accesos + "Más" ---------- */
const NAVDEF = [`inicio`, `estudiar`, `practicar`, `organizar`];
const navFav = () => { const f = (S.x.navFav || NAVDEF).filter(k => SECS.some(s => s.k === k)).slice(0, 4); return f.length ? f : NAVDEF; };
renderBnav = function(){
  const r = $(`#bnav`); r.innerHTML = ``; const fav = navFav();
  fav.forEach(k => r.append(navBtn(SECS.find(s => s.k === k), `bn`)));
  const m = btn(icon(`list`) + `<span>Más</span>`, `bn`, openMas); if (!fav.includes(secOf(S.mode).k)) m.setAttribute(`aria-current`, `page`); m.setAttribute(`aria-label`, `Más secciones`);
  if (!fav.includes(`practicar`) && S.err.length) m.append(el(`span`, `dotb`, S.err.length > 99 ? `99+` : String(S.err.length)));
  r.append(m);
};
function openMas(){
  let edit = false;
  openSheet(`Más`, b => {
    const fav = navFav();
    if (!edit){
      const g = el(`div`, `masg`);
      const add = (ic, t, f, on) => { const x = btn(`${icon(ic)}<span>${t}</span>`, on ? `on` : ``, () => { closeSheet(); f(); }); g.append(x); };
      SECS.filter(s => !fav.includes(s.k)).forEach(s => add(s.ic, s.n, () => goSec(s.k), secOf(S.mode).k === s.k));
      [[`list`, `Pendientes`, `pendientes`], [`notes`, `Notas rápidas`, `notasr`], [`book`, `Cuaderno`, `cuaderno`], [`clip`, `Mis notas`, `notas`]].forEach(([ic, t, m]) => add(ICONS[ic] ? ic : `list`, t, () => go(m), S.mode === m));
      b.append(g);
      const r1 = el(`div`, `fld`); r1.append(el(`span`, ``, `Accesos de la barra inferior<small>${fav.map(k => SECS.find(s => s.k === k).n).join(` · `)}</small>`), btn(`Elegir 4`, `btn ghost`, () => { edit = true; drawSheet(); })); b.append(r1);
      const r2 = el(`div`, `fld`); r2.append(el(`span`, ``, `Google Calendar<small>${gcOn() ? (gcReady() ? `Conectado` : `Conectado · toca para actualizar`) : `Sin conectar`}</small>`), gcOn() ? btn(`Desconectar`, `btn ghost`, () => { if (confirm(`¿Dejar de sincronizar con Google Calendar? Tus eventos siguen aquí y en Google.`)){ gcDisconnect(); drawSheet(); } }) : btn(`Conectar`, `btn acc`, () => { closeSheet(); gcConnect(); })); b.append(r2);
      b.append(fld(`Recordatorios también por correo`, toggleBtn(!!S.x.agMail, v => { S.x.agMail = v; save(); (S.x.ev || []).filter(e => e.gid && (e.rems || []).length).forEach(e => gcQueue({ op:`up`, id:e.id }, true)); gcSync(); }), `Los manda Google Calendar`));
    } else {
      b.append(el(`p`, `muted`, `Elige hasta 4 secciones para la barra de abajo. Las demás quedan en “Más”.`));
      const sel = S.x.navFav ? S.x.navFav.slice() : NAVDEF.slice();
      SECS.forEach(s => { const on = sel.includes(s.k); const x = btn(`<span class="ck">${on ? `✓` : ``}</span>${icon(s.ic)}<span class="nm">${s.n}</span>`, `trow`, () => { const i = sel.indexOf(s.k); if (i >= 0){ if (sel.length > 1) sel.splice(i, 1); } else if (sel.length < 4) sel.push(s.k); S.x.navFav = SECS.map(z => z.k).filter(k => sel.includes(k)); save(); renderBnav(); drawSheet(); }); x.style.setProperty(`--c`, `var(--acc)`); x.setAttribute(`aria-pressed`, on); b.append(x); });
      const d = btn(`Listo`, `btn acc wide`, () => { edit = false; drawSheet(); }); d.style.marginTop = `8px`; b.append(d);
    }
  });
}

/* ======================= ORGANIZAR · CUADERNO (tipo OneNote) =======================
   Cuadernos → secciones → páginas. Se guarda en localStorage `quimica_cuaderno` (se sincroniza con la nube).
   Las imágenes van aparte: IndexedDB en el dispositivo y, con sesión iniciada, en users/{uid}/img/{id}_{n}.
   En la página solo queda <img data-img="id">.                                                         */
const CN_KEY = `quimica_cuaderno`;
let CN = (() => { try { return JSON.parse(localStorage.getItem(CN_KEY) || `null`); } catch(e){ return null; } })();
function cn(){
  if (!CN || !CN.nb){
    const q = { id:nid(), name:`Química`, color:2, order:0 }, b = { id:nid(), name:`Biología`, color:7, order:1 };
    CN = { nb:[q, b], sec:[{ id:nid(), nb:q.id, name:`Apuntes de clase`, color:2, order:0, t:`` }, { id:nid(), nb:q.id, name:`Prácticas de laboratorio`, color:2, order:1, t:`` }, { id:nid(), nb:b.id, name:`Apuntes de clase`, color:7, order:0, t:`` }], pg:[] };
  }
  return CN;
}
let CN_T = null;
function cnTomb(...ids){ const C = cn(); C.del = C.del || {}; ids.forEach(id => { C.del[id] = Date.now(); }); }
function cnSave(now){ clearTimeout(CN_T); const w = () => { try { localStorage.setItem(CN_KEY, JSON.stringify(cn())); } catch(e){ toastMsg(`No hay espacio para guardar el cuaderno en este dispositivo.`); } }; if (now) w(); else CN_T = setTimeout(w, 400); }
const cnNb = id => cn().nb.find(x => x.id === id), cnSec = id => cn().sec.find(x => x.id === id), cnPg = id => cn().pg.find(x => x.id === id);
const cnColorOf = p => { const s = cnSec(p.sec), n = s && cnNb(s.nb); return GPAL[(s && s.color) || (n && n.color) || 8]; };
const cnPath = p => { const s = cnSec(p.sec), n = s && cnNb(s.nb); return [n && n.name, s && s.name].filter(Boolean).join(` › `); };
const cnPinned = () => cn().pg.filter(p => p.pinned).sort((a, b) => (b.updated || 0) - (a.updated || 0));
const cnText = html => { const d = document.createElement(`div`); d.innerHTML = String(html || ``).replace(/<(\/?(?:p|h[1-6]|li|td|th|tr|div|blockquote|pre)\b[^>]*|br\s*\/?)>/gi, ` <$1>`); d.querySelectorAll(`style,script`).forEach(x => x.remove()); return (d.textContent || ``).replace(/\s+/g, ` `).trim(); };
function cnPagesFor(t){ const ss = cn().sec.filter(s => s.t === t).map(s => s.id); return cn().pg.filter(p => ss.includes(p.sec)).sort((a, b) => (b.updated || 0) - (a.updated || 0)); }
function toastMsg(t){ let r = $(`#cntoast`); if (!r){ r = el(`div`, `cntoast`); r.id = `cntoast`; r.setAttribute(`role`, `status`); document.body.append(r); } r.textContent = t; r.classList.add(`on`); clearTimeout(r._t); r._t = setTimeout(() => r.classList.remove(`on`), 2600); }
function cnState(){ S.x.cn = S.x.cn || {}; const st = S.x.cn; if (st.nb && !cnNb(st.nb)) st.nb = null; if (st.sec && !cnSec(st.sec)) st.sec = null; if (st.pg && !cnPg(st.pg)) st.pg = null; if (!st.nb) st.nb = (cn().nb[0] || {}).id; return st; }
const cnWide = () => innerWidth >= 960;

/* ---------- plantillas ---------- */
const FECHA = () => fmtDay(todayStr());
const CNTPL = [
  [`apuntes`, `📝`, `Apuntes de clase`, `Fecha, tema, ideas clave y dudas`, t => `<p><b>Fecha:</b> ${FECHA()}</p><p><b>Tema:</b> ${t || ``}</p><h2>Ideas clave</h2><ul><li><br></li></ul><h2>Ejemplos</h2><p><br></p><h2>Para memorizar</h2><p><br></p><h2>Dudas</h2><ul class="cklist"><li><br></li></ul>`],
  [`lab`, `🧪`, `Práctica de laboratorio`, `Objetivo, materiales, procedimiento, resultados, cálculos y conclusión`, t => `<p><b>Fecha:</b> ${FECHA()} · <b>Práctica:</b> ${t || ``}</p><h2>Objetivo</h2><p><br></p><h2>Materiales y reactivos</h2><ul class="cklist"><li><br></li></ul><h2>Procedimiento</h2><ol><li><br></li></ol><h2>Resultados</h2><table><tbody><tr><th>Ensayo</th><th>Medición</th><th>Resultado</th></tr><tr><td>1</td><td><br></td><td><br></td></tr><tr><td>2</td><td><br></td><td><br></td></tr></tbody></table><h2>Cálculos</h2><p><br></p><h2>Conclusión</h2><p><br></p>`],
  [`ejercicio`, `🧮`, `Ejercicio resuelto`, `Qué pide · datos · fórmula · pasos · resultado · ojo`, t => `<h2>Enunciado</h2><p>${t || `<br>`}</p><p><b>¿Qué me pide?</b> </p><h2>Datos</h2><ul><li><br></li></ul><h2>Fórmula</h2><p><br></p><h2>Pasos</h2><ol><li><br></li></ol><h2>Resultado</h2><p><br></p><p><b>Ojo:</b> </p>`],
  [`resumen`, `📚`, `Resumen de tema`, `Definiciones, fórmulas y “para memorizar”`, t => `<p><b>Tema:</b> ${t || ``}</p><h2>Definiciones</h2><ul><li><br></li></ul><h2>Fórmulas</h2><table><tbody><tr><th>Fórmula</th><th>Cuándo se usa</th></tr><tr><td><br></td><td><br></td></tr></tbody></table><h2>Para memorizar</h2><p><br></p>`],
  [`docente`, `❓`, `Preguntas para el docente`, `Lista de casillas`, t => `<p><b>Clase / tema:</b> ${t || ``}</p><ul class="cklist"><li><br></li></ul>`],
  [`glosario`, `🔤`, `Glosario`, `Término, definición y ejemplo`, t => `<table><tbody><tr><th>Término</th><th>Definición</th><th>Ejemplo</th></tr><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr></tbody></table>`],
  [`caso`, `🩸`, `Caso clínico`, `Paciente, muestra, resultados e interpretación`, t => `<h2>Paciente</h2><p>Edad: · Sexo: · Motivo de la prueba: </p><h2>Muestra</h2><p>Tipo: · Toma: · Conservación: </p><h2>Resultados</h2><table><tbody><tr><th>Prueba</th><th>Resultado</th><th>Valor de referencia</th><th>Interpretación</th></tr><tr><td><br></td><td><br></td><td><br></td><td><br></td></tr></tbody></table><h2>Interpretación</h2><p><br></p>`],
  [`blanco`, `📄`, `En blanco`, `Sin formato`, () => `<p><br></p>`]
];

/* ---------- crear y borrar ---------- */
function cnNewPage(secId, tpl, title){
  const s = cnSec(secId) || cn().sec[0]; if (!s) return null;
  const T = CNTPL.find(x => x[0] === tpl) || CNTPL[CNTPL.length - 1], tm = s.t && TOPICS[s.t] ? `${TOPICS[s.t].n} · ${TOPICS[s.t].name}` : ``;
  const p = { id:nid(), sec:s.id, title:title || (tpl && tpl !== `blanco` ? `${T[2]} · ${pdate(todayStr()).getDate()} ${MESES[pdate(todayStr()).getMonth()].slice(0, 3)}` : ``), html:T[4](tm), snip:``, pinned:false, created:Date.now(), updated:Date.now(), fresh:true };
  cn().pg.push(p); cnSave(true); const st = cnState(); st.nb = s.nb; st.sec = s.id; st.pg = p.id; save(); return p;
}
function cnLeave(){ // páginas en blanco que se abandonan sin escribir: se descartan
  const st = S.x.cn || {}, p = st.pg && cnPg(st.pg); if (!p) return;
  if (!(p.title || ``).trim() && !cnText(p.html) && !/data-img/.test(p.html || ``)){ cnTomb(p.id); cn().pg = cn().pg.filter(x => x.id !== p.id); st.pg = null; cnSave(true); save(); }
  else if (p.fresh && !cnText(p.html).replace(/Fecha:.*$/, ``).trim() && !(p.title || ``).trim()){ /* conserva plantillas con título */ }
}
function pickTpl(secId){
  openSheet(`Nueva página`, b => {
    b.append(el(`p`, `muted`, `Elige una plantilla o empieza en blanco.`));
    const g = el(`div`, `cntpl`);
    CNTPL.forEach(([k, ic, n, d]) => g.append(btn(`<span class="ic">${ic}</span><b>${n}</b><small>${d}</small>`, ``, () => { closeSheet(); cnNewPage(secId, k); renderView(); setTimeout(() => { const t = $(`.cnttl`); if (t && !t.value) t.focus(); }, 80); })));
    b.append(g);
    const im = btn(`⬆ Importar archivo (.md, .html, .txt)`, `btn ghost wide`, () => { closeSheet(); cnImport(secId); }); im.style.marginTop = `10px`; b.append(im);
  });
}
function cnNewFromEvent(e){
  const st = cnState(); let s = (e.topics || []).map(t => cn().sec.find(x => x.t === t)).find(Boolean);
  if (!s && e.type === `lab`) s = cn().sec.find(x => /laboratorio/i.test(x.name));
  if (!s) s = cn().sec.find(x => x.nb === st.nb) || cn().sec[0];
  const p = cnNewPage(s.id, e.type === `lab` ? `lab` : `apuntes`, `${e.title} · ${pdate(e.date).getDate()} ${MESES[pdate(e.date).getMonth()].slice(0, 3)}`);
  if (p){ p.ev = e.id; cnSave(true); }
  go(`cuaderno`);
}
function cnOpenPage(id){ const p = cnPg(id); if (!p) return; const st = cnState(), s = cnSec(p.sec); st.sec = p.sec; st.nb = s && s.nb; st.pg = id; save(); if (S.mode !== `cuaderno`) go(`cuaderno`); else renderView(); }

/* ---------- menús ⋯ ---------- */
function cnMenu(kind, obj){
  const name = kind === `nb` ? `cuaderno` : kind === `sec` ? `sección` : `página`;
  openSheet(kind === `pg` ? (obj.title || `Página`) : obj.name, b => {
    const act = (t, f, cls) => { const x = btn(t, cls || `btn ghost wide`, f); x.style.marginBottom = `6px`; b.append(x); };
    if (kind !== `pg`) act(`Cambiar nombre`, () => { const n = prompt(`Nuevo nombre del ${name}:`, obj.name); if (n && n.trim()){ obj.name = n.trim(); cnSave(); closeSheet(); renderView(); } });
    if (kind !== `pg`){ const p = el(`div`, `agpal`); Object.keys(GPAL).forEach(k => { const x = btn(``, ``, () => { obj.color = +k; cnSave(); drawSheet(); renderView(); }); x.style.background = GPAL[k]; x.title = GPALN[k]; x.setAttribute(`aria-label`, GPALN[k]); x.setAttribute(`aria-pressed`, obj.color === +k); p.append(x); }); b.append(el(`div`, `muted`, `Color`), p); }
    if (kind === `sec`){
      const ts = el(`select`, `inp`); const o0 = el(`option`, ``, `Sin enlazar a un tema`); o0.value = ``; ts.append(o0);
      TORDER.forEach(t => { const o = el(`option`, ``, `${TOPICS[t].n} · ${esc(TOPICS[t].name)}`); o.value = t; if (obj.t === t) o.selected = true; ts.append(o); });
      ts.onchange = () => { obj.t = ts.value; cnSave(); };
      b.append(fld(`Enlazar a un tema`, ts, `Sus páginas salen como “Mis apuntes” en el Repaso de ese tema`));
      const mv = el(`select`, `inp`); cn().nb.forEach(n => { const o = el(`option`, ``, esc(n.name)); o.value = n.id; if (obj.nb === n.id) o.selected = true; mv.append(o); }); mv.onchange = () => { obj.nb = mv.value; cnSave(); renderView(); };
      b.append(fld(`Cuaderno`, mv));
    }
    if (kind === `pg`){
      act(obj.pinned ? `📌 Quitar de fijadas` : `📌 Fijar (sale en el Inicio)`, () => { obj.pinned = !obj.pinned; cnSave(); closeSheet(); renderView(); });
      const mv = el(`select`, `inp`); cn().sec.forEach(s => { const n = cnNb(s.nb); const o = el(`option`, ``, `${esc(n ? n.name : ``)} › ${esc(s.name)}`); o.value = s.id; if (obj.sec === s.id) o.selected = true; mv.append(o); }); mv.onchange = () => { obj.sec = mv.value; const st = cnState(); st.sec = obj.sec; st.nb = cnSec(obj.sec).nb; cnSave(); save(); renderView(); };
      b.append(fld(`Mover a`, mv));
      act(`🖨 Exportar a PDF`, () => { closeSheet(); cnPrint(obj); });
      act(`Duplicar`, () => { const c = Object.assign({}, obj, { id:nid(), title:(obj.title || `Página`) + ` (copia)`, pinned:false, created:Date.now(), updated:Date.now() }); cn().pg.push(c); cnSave(); closeSheet(); cnOpenPage(c.id); });
    }
    act(`Borrar ${name}`, () => {
      const n = kind === `nb` ? cn().sec.filter(s => s.nb === obj.id).length : kind === `sec` ? cn().pg.filter(p => p.sec === obj.id).length : 0;
      if (!confirm(kind === `nb` ? `¿Borrar el cuaderno “${obj.name}” con sus ${n} secciones y todas sus páginas?` : kind === `sec` ? `¿Borrar la sección “${obj.name}” y sus ${n} páginas?` : `¿Borrar la página “${obj.title || `Sin título`}”?`)) return;
      const C = cn();
      if (kind === `nb`){ const ss = C.sec.filter(s => s.nb === obj.id).map(s => s.id); cnTomb(obj.id, ...ss, ...C.pg.filter(p => ss.includes(p.sec)).map(p => p.id)); C.pg = C.pg.filter(p => !ss.includes(p.sec)); C.sec = C.sec.filter(s => s.nb !== obj.id); C.nb = C.nb.filter(x => x.id !== obj.id); }
      if (kind === `sec`){ cnTomb(obj.id, ...C.pg.filter(p => p.sec === obj.id).map(p => p.id)); C.pg = C.pg.filter(p => p.sec !== obj.id); C.sec = C.sec.filter(s => s.id !== obj.id); }
      if (kind === `pg`){ cnTomb(obj.id); C.pg = C.pg.filter(p => p.id !== obj.id); }
      cnSave(true); closeSheet(); renderView();
    }, `btn danger wide`);
  });
}

/* ======================= VISTA ======================= */
function vCuaderno(v){
  const st = cnState(), C = cn(), wide = cnWide();
  const top = el(`div`, `cntop`);
  const q = el(`input`, `inp`); q.type = `search`; q.placeholder = `🔍 Buscar en todos los cuadernos`; q.value = st.q || ``; q.setAttribute(`aria-label`, `Buscar en el cuaderno`);
  const imp = btn(`⬆ <span class="lbl">Importar</span>`, `btn ghost`, () => cnImport(st.sec)); imp.setAttribute(`aria-label`, `Importar archivo`);
  if (wide){
    // menú de cuadernos y páginas (desplegable): el editor ocupa todo el ancho
    const pg = cnPg(st.pg), sc = cnSec(st.sec), nb = cnNb(st.nb);
    const lbl = pg ? `${esc((nb || {}).name || ``)} › ${esc((sc || {}).name || ``)}` : sc ? `${esc((nb || {}).name || ``)} › ${esc(sc.name)}` : esc((nb || {}).name || `Cuadernos`);
    const mb = btn(`<span class="cnmi">📓</span><span class="cnml"><small>Cuaderno y páginas</small><b>${lbl}</b></span><span class="cnmc">${st.menu ? `▴` : `▾`}</span>`, `cnmenub` + (st.menu ? ` on` : ``), () => { st.menu = !st.menu; save(); renderView(); });
    mb.setAttribute(`aria-expanded`, !!st.menu); mb.setAttribute(`aria-label`, `Cuadernos, secciones y páginas`);
    top.append(mb, q, imp);
    if (st.sec) top.append(btn(`+ Página`, `btn acc`, () => { st.menu = false; pickTpl(st.sec); }));
  } else top.append(q, imp);
  v.append(top);
  const res = el(`div`, `cnres`); v.append(res);
  const doSearch = () => {
    res.innerHTML = ``; const s = (st.q || ``).trim().toLowerCase(); if (!s) { res.hidden = true; return; } res.hidden = false;
    const n = s.normalize(`NFD`).replace(/[̀-ͯ]/g, ``), norm = x => x.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g, ``);
    const hits = C.pg.filter(p => norm((p.title || ``) + ` ` + cnText(p.html)).includes(n)).slice(0, 30);
    res.append(el(`div`, `muted`, hits.length ? `${hits.length} resultado${hits.length === 1 ? `` : `s`}` : `Nada coincide.`));
    hits.forEach(p => { const t = cnText(p.html), i = norm(t).indexOf(n); const r = btn(`<b>${esc(p.title || `Sin título`)}</b><small>${esc(cnPath(p))}</small><span>${i >= 0 ? `…` + esc(t.slice(Math.max(0, i - 40), i + 80)) + `…` : ``}</span>`, `cnpg`, () => { st.q = ``; cnOpenPage(p.id); }); res.append(r); });
  };
  q.oninput = () => { st.q = q.value; doSearch(); };
  const g = el(`div`, `cn3` + (wide ? ` wide` : ``));
  if (wide){
    if (!cnPg(st.pg)) st.menu = true;   // sin página abierta: el menú se muestra
    if (!st.sec){ const r = C.pg.filter(p => { const x = cnSec(p.sec); return x && x.nb === st.nb; }).sort((a, b) => (b.updated || 0) - (a.updated || 0))[0]; st.sec = r ? r.sec : (C.sec.find(x => x.nb === st.nb) || {}).id || null; }
    if (st.menu){
      const dd = el(`div`, `cnmenu`); dd.append(cnPaneNb(), cnPanePg());
      if (cnPg(st.pg)){ const x = btn(`✕`, `cnmenux`, () => { st.menu = false; save(); renderView(); }); x.setAttribute(`aria-label`, `Cerrar el menú`); dd.append(x); }
      g.append(dd);
      setTimeout(() => { if (!dd.isConnected || !cnPg(st.pg)) return; const f = e => { if (!dd.isConnected){ document.removeEventListener(`pointerdown`, f, true); return; } if (!dd.contains(e.target) && !e.target.closest(`.cnmenub, .sheet, .cnpop, .scrim`)){ document.removeEventListener(`pointerdown`, f, true); st.menu = false; save(); renderView(); } }; document.addEventListener(`pointerdown`, f, true); }, 0);
    }
    g.append(cnPaneEd());
  }
  else { if (st.pg && cnPg(st.pg)) g.append(cnPaneEd(true)); else if (st.sec && cnSec(st.sec)) g.append(cnPanePg(true)); else g.append(cnPaneNb(true)); }
  v.append(g); doSearch();
}
function cnPaneNb(single){
  const st = cnState(), C = cn(), w = el(`div`, `cnp cnnb`);
  w.append(el(`div`, `cnph`, `Cuadernos`));
  C.nb.slice().sort((a, b) => a.order - b.order).forEach(n => {
    const ns = C.sec.filter(s => s.nb === n.id).sort((a, b) => a.order - b.order), np = C.pg.filter(p => ns.some(s => s.id === p.sec)).length;
    const r = el(`div`, `cnnbr` + (st.nb === n.id ? ` on` : ``)); r.style.setProperty(`--c`, GPAL[n.color || 8]);
    const a = btn(`<span class="ic">📓</span><span><b>${esc(n.name)}</b><small>${ns.length} sección${ns.length === 1 ? `` : `es`} · ${np} página${np === 1 ? `` : `s`}</small></span>`, `cnnbb`, () => { st.nb = n.id; save(); renderView(); });
    const m = btn(`⋯`, `cnmore`, () => cnMenu(`nb`, n)); m.setAttribute(`aria-label`, `Opciones de ${n.name}`);
    r.append(a, m); w.append(r);
    if (st.nb === n.id){
      ns.forEach(s => { const c = C.pg.filter(p => p.sec === s.id).length; const sr = el(`div`, `cnsec` + (st.sec === s.id ? ` on` : ``)); sr.style.setProperty(`--c`, GPAL[s.color || n.color || 8]);
        const sb = btn(`<span>${esc(s.name)}${s.t && TOPICS[s.t] ? ` <i class="tag">${TOPICS[s.t].n.replace(`Tema `, `T`)}</i>` : ``}</span><small>${c}</small>`, `cnsecb`, () => { cnLeave(); st.sec = s.id; st.pg = null; save(); renderView(); });
        const sm = btn(`⋯`, `cnmore`, () => cnMenu(`sec`, s)); sm.setAttribute(`aria-label`, `Opciones de ${s.name}`); sr.append(sb, sm); w.append(sr); });
      const ad = btn(`+ Sección`, `linkbtn cnadd`, () => { const nm = prompt(`Nombre de la sección (por ejemplo: Tema 28 · Éteres):`); if (!nm || !nm.trim()) return; const t = TORDER.find(k => new RegExp(`\\b(tema\\s*)?${k.slice(1)}\\b`, `i`).test(nm)) || ``; const s = { id:nid(), nb:n.id, name:nm.trim(), color:n.color, order:ns.length, t }; C.sec.push(s); cnSave(); st.sec = s.id; st.pg = null; save(); renderView(); });
      w.append(ad);
    }
  });
  const nn = btn(`+ Cuaderno`, `btn ghost`, () => { const nm = prompt(`Nombre del cuaderno (por ejemplo: Hematología):`); if (!nm || !nm.trim()) return; const n = { id:nid(), name:nm.trim(), color:[2, 7, 3, 6, 5, 1][C.nb.length % 6], order:C.nb.length }; C.nb.push(n); C.sec.push({ id:nid(), nb:n.id, name:`Apuntes de clase`, color:n.color, order:0, t:`` }); cnSave(); st.nb = n.id; st.sec = null; st.pg = null; save(); renderView(); });
  nn.style.marginTop = `10px`; w.append(nn);
  return w;
}
function cnPanePg(single){
  const st = cnState(), C = cn(), w = el(`div`, `cnp cnpgs`), s = cnSec(st.sec);
  if (single){ const bk = btn(icon(`left`) + ` ${esc((cnNb(st.nb) || {}).name || `Cuadernos`)}`, `cnback`, () => { st.sec = null; save(); renderView(); }); w.append(bk); }
  if (!s){ w.append(el(`p`, `muted`, `Elige una sección.`)); return w; }
  const h = el(`div`, `cnph row`); h.append(el(`span`, ``, esc(s.name)), btn(`+ Página`, `btn acc sm`, () => pickTpl(s.id))); w.append(h);
  if (s.t && TOPICS[s.t]) w.append(el(`div`, `muted cnlink`, `Enlazada al Repaso del ${TOPICS[s.t].n}`));
  const ps = C.pg.filter(p => p.sec === s.id).sort((a, b) => (b.pinned - a.pinned) || (b.updated || 0) - (a.updated || 0));
  if (!ps.length) w.append(el(`p`, `muted`, `Esta sección no tiene páginas. Toca “+ Página” para empezar con una plantilla.`));
  ps.forEach(p => { const sn = p.snip || cnText(p.html).slice(0, 90); const d = new Date(p.updated || p.created); const ds = dstr(d) === todayStr() ? `hoy` : dstr(d) === addDays(todayStr(), -1) ? `ayer` : `${d.getDate()} ${MESES[d.getMonth()].slice(0, 3)}`;
    w.append(btn(`<span class="row"><b>${p.pinned ? `📌 ` : ``}${esc(p.title || `Sin título`)}</b><small>${ds}</small></span><span>${esc(sn)}${/data-img/.test(p.html || ``) ? ` 🖼` : ``}</span>`, `cnpg` + (st.pg === p.id ? ` on` : ``), () => { cnFlush(); cnLeave(); st.pg = p.id; st.menu = false; save(); renderView(); })); });
  return w;
}

/* ---------- editor ---------- */
const TBTN = [
  [`blk`, `Texto ▾`, `Estilo del párrafo`], [`bold`, `<b>B</b>`, `Negrita`], [`italic`, `<i>I</i>`, `Cursiva`], [`underline`, `<u>U</u>`, `Subrayado`], [`strikeThrough`, `<s>S</s>`, `Tachado`],
  [`fore`, `<span class="cA">A</span>`, `Color de letra`], [`hilite`, `🖍`, `Resaltar`], [`|`],
  [`insertUnorderedList`, `•≡`, `Viñetas`], [`insertOrderedList`, `1≡`, `Numeración`], [`chk`, `☑`, `Lista de tareas`], [`table`, `▦`, `Tabla`], [`link`, `🔗`, `Enlace`], [`|`],
  [`justifyLeft`, `⯇≡`, `Alinear a la izquierda`], [`justifyCenter`, `≡`, `Centrar`], [`removeFormat`, `T̸`, `Quitar formato`], [`|`],
  [`img`, `🖼`, `Insertar imagen`], [`cam`, `📷`, `Tomar foto`], [`draw`, `✏️`, `Dibujar a mano`], [`|`], [`undo`, `↶`, `Deshacer`], [`redo`, `↷`, `Rehacer`]
];
const TCOL = [`#E2E8E6`, `#D50000`, `#F4511E`, `#0B8043`, `#039BE5`, `#8E24AA`, `#616161`, `#000000`];
const HCOL = [`#FFF59D`, `#C8E6C9`, `#B3E5FC`, `#F8BBD0`, `#FFE0B2`, `transparent`];
function cnPaneEd(single, pid, opt = {}){
  const st = cnState(), w = el(`div`, `cnp cned` + (opt.embed ? ` emb` : ``)), p = cnPg(pid || st.pg);
  requestAnimationFrame(() => { const sw = S.x.lect && S.mode === `repaso` ? $(`.lbar`) : $(`#subw`); const h = sw && getComputedStyle(sw).position === `sticky` ? Math.round(sw.getBoundingClientRect().height) : 0; w.style.setProperty(`--cnstk`, `${h}px`); });
  if (!p){ w.append(el(`div`, `cnempty`, `<p class="muted">Elige una página o crea una nueva.</p>`)); if (st.sec) w.firstChild.append(btn(`+ Página`, `btn acc`, () => pickTpl(st.sec))); return w; }
  const hd = el(`div`, `cnedh`);
  if (single){ const bk = btn(icon(`left`) + ` ${esc((cnSec(p.sec) || {}).name || ``)}`, `cnback`, () => { cnFlush(); cnLeave(); st.pg = null; save(); renderView(); }); hd.append(bk); }
  const status = el(`span`, `cnst`, `✓ Guardado`); status.setAttribute(`aria-live`, `polite`);
  const more = btn(`⋯`, `cnmore`, () => { cnFlush(); cnMenu(`pg`, p); }); more.setAttribute(`aria-label`, `Opciones de la página`);
  if (opt.embed){ const op = btn(`Abrir en el Cuaderno ↗`, `linkbtn`, () => { cnFlush(); cnOpenPage(p.id); }); op.style.marginRight = `auto`; hd.append(op); }
  hd.append(status, more); w.append(hd);
  const tt = el(`input`, `cnttl`); tt.value = p.title || ``; tt.placeholder = `Título de la página`; tt.setAttribute(`aria-label`, `Título`);
  w.append(tt, el(`div`, `cnpath muted`, `${esc(cnPath(p))}${p.pinned ? ` · 📌 fijada` : ``}`));
  const tb = el(`div`, `cntb`); tb.setAttribute(`role`, `toolbar`); tb.setAttribute(`aria-label`, `Formato`);
  TBTN.forEach(([k, l, t]) => { if (k === `|`) return tb.append(el(`span`, `sep`)); const x = btn(l, `tbb`); x.dataset.k = k; x.title = t; x.setAttribute(`aria-label`, t); tb.append(x); });
  const tbx = el(`div`, `cntbx`); tbx.hidden = true; // barra secundaria: tabla e imagen
  const ed = el(`div`, `cnedit`); ed.contentEditable = `true`; ed.setAttribute(`role`, `textbox`); ed.setAttribute(`aria-multiline`, `true`); ed.setAttribute(`aria-label`, `Contenido de la página`); ed.spellcheck = true;
  ed.innerHTML = p.html || `<p><br></p>`;
  const wrap = el(`div`, `cnedwrap`); wrap.append(tb, tbx, ed); w.append(wrap);
  cnHydrate(ed).then(() => cnFreeFit(ed)); ed.querySelectorAll(`img`).forEach(i => i.addEventListener(`load`, () => cnFreeFit(ed), { once:true })); cnFreeFit(ed);
  // guardado automático
  let T = null; const mark = t => { status.textContent = t; };
  const doSave = () => { clearTimeout(T); T = null; p.title = tt.value.trim(); p.html = cnSerialize(ed); p.snip = cnText(p.html).slice(0, 120); p.updated = Date.now(); delete p.fresh; cnSave(true); mark(`✓ Guardado`); };
  const later = () => { mark(`Guardando…`); clearTimeout(T); T = setTimeout(doSave, 800); };
  CN_FLUSH = () => { if (T) doSave(); };
  tt.oninput = later; ed.addEventListener(`input`, later);
  tt.onkeydown = e => { if (e.key === `Enter`){ e.preventDefault(); ed.focus(); } };
  // selección guardada (los botones no le quitan el foco)
  let rng = null; const keep = () => { const s = getSelection(); if (s.rangeCount && ed.contains(s.anchorNode)) rng = s.getRangeAt(0).cloneRange(); };
  const restore = () => { ed.focus(); if (rng){ const s = getSelection(); s.removeAllRanges(); s.addRange(rng); } };
  CN_ED = { ed, tbx, later, keep };
  tb.addEventListener(`mousedown`, e => { if (e.target.closest(`.tbb`)) e.preventDefault(); });
  tb.addEventListener(`click`, e => { const b = e.target.closest(`.tbb`); if (!b) return; restore(); cnCmd(b.dataset.k, ed, b, later, p); cnCtx(ed, tbx, later); });
  // lista de tareas: tocar la casilla
  ed.addEventListener(`click`, e => {
    const li = e.target.closest(`ul.cklist > li`); if (li && e.offsetX < 26 && e.target === li){ li.toggleAttribute(`data-done`); later(); return; }
    const im = e.target.closest(`img`); if (im){ cnImgSel(ed, im, tbx, later); }
    const a = e.target.closest(`a[href]`); if (a && (e.ctrlKey || e.metaKey)) window.open(a.href, `_blank`, `noopener`);
  });
  ed.addEventListener(`keydown`, e => { if (e.key === `Tab`){ e.preventDefault(); document.execCommand(e.shiftKey ? `outdent` : `indent`); } });
  // pegar y arrastrar imágenes
  ed.addEventListener(`paste`, e => { const fs = [...(e.clipboardData && e.clipboardData.files || [])].filter(f => /^image\//.test(f.type)); if (fs.length){ e.preventDefault(); cnAddImages(fs, ed, later); return; }
    const h = e.clipboardData && e.clipboardData.getData(`text/html`); if (h){ e.preventDefault(); document.execCommand(`insertHTML`, false, cnClean(h)); } });
  ed.addEventListener(`dragover`, e => { if ([...(e.dataTransfer.items || [])].some(i => i.kind === `file`)) e.preventDefault(); });
  ed.addEventListener(`drop`, e => { const fs = [...(e.dataTransfer.files || [])].filter(f => /^image\//.test(f.type)); if (fs.length){ e.preventDefault(); const r = document.caretRangeFromPoint ? document.caretRangeFromPoint(e.clientX, e.clientY) : null; if (r){ const s = getSelection(); s.removeAllRanges(); s.addRange(r); } cnAddImages(fs, ed, later); } });
  // en el teléfono la barra queda sobre el teclado
  const kb = () => { const vv = window.visualViewport; if (!vv || innerWidth > 700) return; const on = document.activeElement === ed; tb.classList.toggle(`kb`, on); document.body.classList.toggle(`cnediting`, on); if (on){ const off = innerHeight - vv.height - vv.offsetTop; tb.style.bottom = `${Math.max(0, off)}px`; } else tb.style.bottom = ``; };
  ed.addEventListener(`focus`, () => setTimeout(kb, 50)); ed.addEventListener(`blur`, () => setTimeout(kb, 150));
  CN_ED.kb = kb;
  if (p.fresh && !p.title && !opt.embed) setTimeout(() => tt.focus(), 60);
  return w;
}
let CN_FLUSH = null, CN_ED = null;
document.addEventListener(`selectionchange`, () => { const c = CN_ED; if (c && c.ed.isConnected && document.activeElement === c.ed){ c.keep(); cnCtx(c.ed, c.tbx, c.later); } });
if (window.visualViewport){ const f = () => { if (CN_ED && CN_ED.kb && CN_ED.ed.isConnected) CN_ED.kb(); }; visualViewport.addEventListener(`resize`, f); visualViewport.addEventListener(`scroll`, f); }
function cnFlush(){ if (CN_FLUSH) CN_FLUSH(); }
function cnSerialize(ed){
  const c = ed.cloneNode(true);
  c.querySelectorAll(`img[data-img]`).forEach(i => { i.removeAttribute(`src`); });
  c.querySelectorAll(`img.sel`).forEach(i => { i.classList.remove(`sel`); if (!i.className) i.removeAttribute(`class`); });
  c.querySelectorAll(`.cnrsz`).forEach(x => x.remove());
  return c.innerHTML;
}
function cnClean(html){
  const d = new DOMParser().parseFromString(html, `text/html`);
  d.querySelectorAll(`script,style,iframe,object,embed,link,meta,form,input,button`).forEach(x => x.remove());
  d.querySelectorAll(`*`).forEach(n => { [...n.attributes].forEach(a => { if (/^on/i.test(a.name) || (a.name === `href` && /^\s*javascript:/i.test(a.value)) || a.name === `class` && !/^(cklist|al-[lcr])$/.test(a.value) || a.name === `id`) n.removeAttribute(a.name); }); if (n.style){ const keep = [`color`, `background-color`, `text-align`, `font-weight`, `font-style`, `text-decoration`]; const s = n.style; const o = {}; keep.forEach(k => { if (s.getPropertyValue(k)) o[k] = s.getPropertyValue(k); }); n.removeAttribute(`style`); Object.entries(o).forEach(([k, v]) => n.style.setProperty(k, v)); if (!n.getAttribute(`style`)) n.removeAttribute(`style`); } });
  d.querySelectorAll(`img`).forEach(i => { if (!/^data:image\//.test(i.getAttribute(`src`) || ``) && !i.dataset.img) i.remove(); });
  return d.body.innerHTML;
}
function cnCmd(k, ed, b, later, p){
  const ex = (c, v) => { document.execCommand(c, false, v); later(); };
  if ([`bold`,`italic`,`underline`,`strikeThrough`,`insertUnorderedList`,`insertOrderedList`,`justifyLeft`,`justifyCenter`,`undo`,`redo`].includes(k)) return ex(k);
  if (k === `removeFormat`){ ex(`removeFormat`); ex(`formatBlock`, `<p>`); return; }
  if (k === `blk`) return cnPop(b, [[`Título`, () => ex(`formatBlock`, `<h2>`)], [`Subtítulo`, () => ex(`formatBlock`, `<h3>`)], [`Texto`, () => ex(`formatBlock`, `<p>`)], [`Cita`, () => ex(`formatBlock`, `<blockquote>`)]]);
  if (k === `fore`) return cnPop(b, TCOL.map(c => [`<i class="csw" style="background:${c}"></i>`, () => ex(`foreColor`, c)]), true);
  if (k === `hilite`) return cnPop(b, HCOL.map(c => [`<i class="csw" style="background:${c === `transparent` ? `repeating-linear-gradient(45deg,#888 0 2px,transparent 2px 6px)` : c}"></i>`, () => { if (!document.execCommand(`hiliteColor`, false, c)) document.execCommand(`backColor`, false, c); later(); }]), true);
  if (k === `chk`){
    const s = getSelection(); const li = s.anchorNode && (s.anchorNode.nodeType === 1 ? s.anchorNode : s.anchorNode.parentElement).closest(`li`);
    const ul = li && li.parentElement;
    if (ul && ul.classList.contains(`cklist`)){ ul.classList.remove(`cklist`); later(); return; }
    if (!ul || ul.tagName !== `UL`) document.execCommand(`insertUnorderedList`);
    const s2 = getSelection(); const li2 = s2.anchorNode && (s2.anchorNode.nodeType === 1 ? s2.anchorNode : s2.anchorNode.parentElement).closest(`li`); if (li2 && li2.parentElement) li2.parentElement.classList.add(`cklist`); later(); return;
  }
  if (k === `table`) return ex(`insertHTML`, `<table><tbody><tr><th><br></th><th><br></th><th><br></th></tr><tr><td><br></td><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td><td><br></td></tr></tbody></table><p><br></p>`);
  if (k === `link`){ const s = getSelection(); const u = prompt(`Dirección del enlace (https://…):`, `https://`); if (!u || u === `https://`) return; const url = /^https?:\/\//i.test(u) ? u : `https://` + u; if (s.isCollapsed) ex(`insertHTML`, `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(url)}</a>&nbsp;`); else ex(`createLink`, url); ed.querySelectorAll(`a`).forEach(a => { a.target = `_blank`; a.rel = `noopener`; }); return; }
  if (k === `img` || k === `cam`){ const i = el(`input`); i.type = `file`; i.accept = `image/*`; if (k === `cam`) i.setAttribute(`capture`, `environment`); else i.multiple = true; i.onchange = () => { if (i.files.length) cnAddImages([...i.files], ed, later); }; i.click(); return; }
  if (k === `draw`) return cnDraw(ed, later);
}
function cnPop(anchor, items, grid){
  document.querySelectorAll(`.cnpop`).forEach(x => x.remove());
  const m = el(`div`, `cnpop` + (grid ? ` grid` : ``)); items.forEach(([l, f]) => { const x = btn(l, ``, () => { m.remove(); f(); }); x.addEventListener(`mousedown`, e => e.preventDefault()); m.append(x); });
  document.body.append(m); const r = anchor.getBoundingClientRect(); const mh = m.offsetHeight, mw = m.offsetWidth;
  let top = r.bottom + 6; if (top + mh > innerHeight - 8) top = r.top - mh - 6; m.style.top = `${Math.max(8, top)}px`; m.style.left = `${Math.max(8, Math.min(innerWidth - mw - 8, r.left))}px`;
  setTimeout(() => document.addEventListener(`pointerdown`, function f(e){ if (!m.contains(e.target)){ m.remove(); document.removeEventListener(`pointerdown`, f); } }), 0);
}
/* barra secundaria según dónde está el cursor (tabla) */
function cnCtx(ed, tbx, later){
  const s = getSelection(); const n = s.anchorNode && (s.anchorNode.nodeType === 1 ? s.anchorNode : s.anchorNode.parentElement);
  const cell = n && ed.contains(n) && n.closest(`td,th`);
  if (tbx._img && tbx._img.isConnected && tbx._img.classList.contains(`sel`)) return;
  tbx.innerHTML = ``; tbx.hidden = !cell; if (!cell) return;
  const tr = cell.parentElement, tbl = cell.closest(`table`), ci = [...tr.children].indexOf(cell);
  const a = (t, f) => { const b = btn(t, `tbb`, () => { f(); later(); }); b.addEventListener(`mousedown`, e => e.preventDefault()); tbx.append(b); };
  tbx.append(el(`span`, `muted`, `Tabla:`));
  a(`+ fila`, () => { const r = tr.cloneNode(true); r.querySelectorAll(`td,th`).forEach(c => { const d = el(`td`); d.innerHTML = `<br>`; c.replaceWith(d); }); tr.after(r); });
  a(`− fila`, () => { if (tbl.rows.length > 1) tr.remove(); });
  a(`+ columna`, () => [...tbl.rows].forEach(r => { const c = r.children[ci]; const d = el(c && c.tagName === `TH` ? `th` : `td`); d.innerHTML = `<br>`; if (c) c.after(d); else r.append(d); }));
  a(`− columna`, () => { if (tr.children.length > 1) [...tbl.rows].forEach(r => r.children[ci] && r.children[ci].remove()); });
  a(`Quitar tabla`, () => { const pp = el(`p`); pp.innerHTML = `<br>`; tbl.replaceWith(pp); tbx.hidden = true; });
}

/* ---------- imágenes ---------- */
const IDB = { db:null };
function idb(){ return IDB.db ? Promise.resolve(IDB.db) : new Promise((ok, no) => { const r = indexedDB.open(`quimica_img`, 1); r.onupgradeneeded = () => r.result.createObjectStore(`img`); r.onsuccess = () => { IDB.db = r.result; ok(r.result); }; r.onerror = () => no(r.error); }); }
async function idbGet(id){ try { const d = await idb(); return await new Promise(ok => { const q = d.transaction(`img`).objectStore(`img`).get(id); q.onsuccess = () => ok(q.result || null); q.onerror = () => ok(null); }); } catch(e){ return null; } }
async function idbPut(id, v){ try { const d = await idb(); await new Promise(ok => { const t = d.transaction(`img`, `readwrite`); t.objectStore(`img`).put(v, id); t.oncomplete = ok; t.onerror = ok; }); } catch(e){} }
function compress(file, max = 1600, q = .8){
  return new Promise((ok, no) => { const u = URL.createObjectURL(file); const im = new Image(); im.onload = () => { const k = Math.min(1, max / Math.max(im.width, im.height)); const c = document.createElement(`canvas`); c.width = Math.round(im.width * k); c.height = Math.round(im.height * k); const x = c.getContext(`2d`); x.fillStyle = `#fff`; x.fillRect(0, 0, c.width, c.height); x.drawImage(im, 0, 0, c.width, c.height); URL.revokeObjectURL(u); ok(c.toDataURL(`image/jpeg`, q)); }; im.onerror = () => { URL.revokeObjectURL(u); no(new Error(`No se pudo leer la imagen`)); }; im.src = u; });
}
async function cnAddImages(files, ed, later){
  for (const f of files){
    try { const data = await compress(f); const id = `i` + nid(); await idbPut(id, data); imgQueue(id);
      ed.focus(); document.execCommand(`insertHTML`, false, `<img data-img="${id}" src="${data}" alt="" style="width:75%" class="al-c"><p><br></p>`); later(); }
    catch(e){ toastMsg(e.message); }
  }
}
async function cnHydrate(root){
  for (const im of root.querySelectorAll(`img[data-img]`)){
    if (im.getAttribute(`src`)) continue; let d = await idbGet(im.dataset.img);
    if (!d) d = await imgDownload(im.dataset.img);
    if (d) im.src = d; else { im.alt = `Imagen sin descargar`; im.classList.add(`miss`); }
  }
}
/* subir y bajar imágenes de la nube (en trozos, aparte del resto de datos) */
const IMGQ = `quimica_imgq`;
function imgQueue(id){ try { const q = JSON.parse(localStorage.getItem(IMGQ) || `[]`); if (!q.includes(id)) q.push(id); localStorage.setItem(IMGQ, JSON.stringify(q)); } catch(e){} setTimeout(imgUpload, 1500); }
let IMG_BUSY = false;
async function imgUpload(){
  if (IMG_BUSY || typeof SY === `undefined` || !SY.user || !SY.db || !navigator.onLine) return; IMG_BUSY = true;
  try {
    let q = JSON.parse(localStorage.getItem(IMGQ) || `[]`);
    for (const id of q.slice()){
      const d = await idbGet(id); if (!d){ q = q.filter(x => x !== id); continue; }
      const N = 700000, parts = []; for (let i = 0; i < d.length; i += N) parts.push(d.slice(i, i + N));
      const col = SY.db.collection(`users`).doc(SY.user.uid).collection(`img`);
      for (let i = 0; i < parts.length; i++) await col.doc(`${id}_${i}`).set({ d:parts[i], n:parts.length, i });
      q = q.filter(x => x !== id); localStorage.setItem(IMGQ, JSON.stringify(q));
    }
  } catch(e){ if (/permission/i.test(e.code || e.message || ``) && !S.x.imgPermWarn){ S.x.imgPermWarn = 1; save(); toastMsg(`Las fotos del cuaderno se guardan solo en este dispositivo (falta un permiso en Firebase).`); } }
  IMG_BUSY = false;
}
async function imgDownload(id){
  if (typeof SY === `undefined` || !SY.user || !SY.db || !navigator.onLine) return null;
  try { const col = SY.db.collection(`users`).doc(SY.user.uid).collection(`img`); const a = await col.doc(`${id}_0`).get(); if (!a.exists) return null; const x = a.data(); let s = x.d;
    for (let i = 1; i < x.n; i++){ const b = await col.doc(`${id}_${i}`).get(); if (!b.exists) return null; s += b.data().d; }
    await idbPut(id, s); return s; } catch(e){ return null; }
}
setInterval(() => imgUpload(), 60e3);
function cnImgSel(ed, im, tbx, later){
  ed.querySelectorAll(`img.sel`).forEach(x => x !== im && x.classList.remove(`sel`)); ed.querySelectorAll(`.cnrsz`).forEach(x => x.remove());
  im.classList.add(`sel`); tbx._img = im; tbx.hidden = false; tbx.innerHTML = ``;
  const done = () => { im.classList.remove(`sel`); tbx.hidden = true; tbx._img = null; ed.querySelectorAll(`.cnrsz`).forEach(x => x.remove()); document.removeEventListener(`pointerdown`, fuera, true); document.removeEventListener(`keydown`, tecla); };
  const a = (t, f, lab, on) => { const b = btn(t, `tbb` + (on ? ` on` : ``), () => { f(); later(); cnFreeFit(ed); place(); }); b.setAttribute(`aria-label`, lab || t); b.title = lab || t; b.addEventListener(`mousedown`, e => e.preventDefault()); tbx.append(b); return b; };
  const libre = () => im.classList.contains(`free`);
  const pinta = () => {
    tbx.innerHTML = ``; tbx.append(el(`span`, `muted`, `Imagen:`));
    a(`✥ Libre`, () => { if (!libre()) aLibre(); pinta(); }, `Mover libremente por la página`, libre());
    a(`☰ En el texto`, () => { if (libre()) aTexto(); pinta(); }, `Dejarla dentro del texto`, !libre());
    tbx.append(el(`span`, `sep`));
    [25, 50, 75, 100].forEach(n => a(`${n}%`, () => { const ew = ed.clientWidth; im.style.height = ``; if (libre()) im.style.width = `${Math.round(ew * n / 100)}px`; else im.style.width = `${n}%`; }));
    if (!libre()){ a(`⯇`, () => { setAl(`al-l`); }, `Alinear a la izquierda`); a(`⯀`, () => { setAl(`al-c`); }, `Centrar`); a(`⯈`, () => { setAl(`al-r`); }, `Alinear a la derecha`); }
    else { a(`⤒`, () => { im.style.zIndex = `3`; }, `Traer al frente`); a(`⤓`, () => { im.style.zIndex = `1`; }, `Enviar atrás`); }
    a(`↺`, () => { im.style.height = ``; }, `Volver a la proporción original`);
    a(`🗑`, () => { im.remove(); done(); }, `Quitar imagen`);
    a(`Listo`, done);
  };
  const setAl = c => { im.classList.remove(`al-l`, `al-c`, `al-r`); im.classList.add(c); };
  // posición dentro del editor (px)
  const rel = () => { const r = im.getBoundingClientRect(), e = ed.getBoundingClientRect(); return { x:r.left - e.left + ed.scrollLeft, y:r.top - e.top + ed.scrollTop, w:r.width, h:r.height }; };
  function aLibre(){ const q = rel(); im.classList.remove(`al-l`, `al-c`, `al-r`); im.classList.add(`free`); im.style.left = `${Math.round(q.x)}px`; im.style.top = `${Math.round(q.y)}px`; im.style.width = `${Math.round(q.w)}px`; if (im.parentNode !== ed){ const par = im.parentNode; ed.append(im); if (par && par !== ed && !par.textContent.trim() && !par.querySelector(`img`)) par.innerHTML = `<br>`; } }
  function aTexto(){ const q = rel(); im.classList.remove(`free`); im.style.left = im.style.top = im.style.zIndex = ``; im.style.width = `${Math.round(Math.min(100, q.w / ed.clientWidth * 100))}%`; im.style.height = ``; setAl(`al-c`);
    const blocks = [...ed.children].filter(b => b !== im && !b.classList.contains(`cnrsz`)); const e = ed.getBoundingClientRect(); const nb = blocks.find(b => b.getBoundingClientRect().top - e.top + ed.scrollTop >= q.y); const pp = el(`p`); pp.append(im); if (nb) ed.insertBefore(pp, nb); else ed.append(pp); }
  // marco con 8 puntos: esquinas = mantiene la proporción; lados = estira
  const fr = el(`div`, `cnrsz cnfrm`); fr.contentEditable = `false`; fr.setAttribute(`aria-hidden`, `true`);
  const H = [`nw`, `n`, `ne`, `e`, `se`, `s`, `sw`, `w`]; H.forEach(k => { const h = el(`span`, `cnh h-${k}`); h.dataset.k = k; fr.append(h); });
  const place = () => { if (!im.isConnected || !im.classList.contains(`sel`)){ fr.remove(); return; } const q = rel(); Object.assign(fr.style, { left:`${q.x}px`, top:`${q.y}px`, width:`${q.w}px`, height:`${q.h}px` }); };
  ed.append(fr); pinta(); place();
  fr.addEventListener(`pointerdown`, ev => {
    ev.preventDefault(); ev.stopPropagation(); fr.setPointerCapture(ev.pointerId);
    const k = ev.target.dataset && ev.target.dataset.k; const q0 = rel(), ew = ed.clientWidth, ar = q0.h / q0.w;
    if (!k && !libre()){ aLibre(); pinta(); }   // arrastrar la imagen: pasa a modo libre
    const L0 = parseFloat(im.style.left) || q0.x, T0 = parseFloat(im.style.top) || q0.y; let moved = false;
    const mv = e => {
      const dx = e.clientX - ev.clientX, dy = e.clientY - ev.clientY; if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      if (!k){ im.style.left = `${Math.round(Math.max(0, Math.min(ew - q0.w, L0 + dx)))}px`; im.style.top = `${Math.round(Math.max(0, T0 + dy))}px`; }
      else {
        let w = q0.w, h = q0.h, x = L0, y = T0;
        if (k.includes(`e`)) w = q0.w + dx; if (k.includes(`w`)){ w = q0.w - dx; }
        if (k.includes(`s`)) h = q0.h + dy; if (k.includes(`n`)){ h = q0.h - dy; }
        w = Math.max(40, Math.min(libre() ? ew : ew, w)); h = Math.max(30, h);
        if (k.length === 2){ h = w * ar; if (k.includes(`n`)) y = T0 + (q0.h - h); if (k.includes(`w`)) x = L0 + (q0.w - w); im.style.height = ``; }
        else { if (k === `w`) x = L0 + (q0.w - w); if (k === `n`) y = T0 + (q0.h - h); if (k === `n` || k === `s`) im.style.height = `${Math.round(h)}px`; else if (im.style.height) im.style.height = `${Math.round(h)}px`; }
        if (libre()){ im.style.width = `${Math.round(w)}px`; im.style.left = `${Math.round(Math.max(0, x))}px`; im.style.top = `${Math.round(Math.max(0, y))}px`; }
        else im.style.width = `${Math.round(Math.min(100, w / ew * 100))}%`;
      }
      cnFreeFit(ed); place();
    };
    const up = () => { fr.removeEventListener(`pointermove`, mv); fr.removeEventListener(`pointerup`, up); fr.removeEventListener(`pointercancel`, up); if (moved) later(); };
    fr.addEventListener(`pointermove`, mv); fr.addEventListener(`pointerup`, up); fr.addEventListener(`pointercancel`, up);
  });
  const fuera = e => { if (!fr.contains(e.target) && !tbx.contains(e.target) && e.target !== im) done(); };
  const tecla = e => { if ((e.key === `Delete` || e.key === `Backspace`) && im.classList.contains(`sel`) && document.activeElement !== ed){ e.preventDefault(); im.remove(); later(); done(); } else if (e.key === `Escape`) done(); };
  setTimeout(() => { document.addEventListener(`pointerdown`, fuera, true); document.addEventListener(`keydown`, tecla); }, 0);
}
/* las imágenes libres no se salen del editor: crece para contenerlas */
function cnFreeFit(ed){ let b = 0; ed.querySelectorAll(`img.free`).forEach(i => { b = Math.max(b, (parseFloat(i.style.top) || 0) + i.offsetHeight); }); ed.style.minHeight = b ? `${Math.round(b + 40)}px` : ``; }
/* ---------- dibujar a mano ---------- */
function cnDraw(ed, later){
  let col = `#111111`, wd = 3; const strokes = []; let cur = null, cv = null;
  const redraw = () => { const x = cv.getContext(`2d`); x.fillStyle = `#fff`; x.fillRect(0, 0, cv.width, cv.height); strokes.forEach(s => { x.strokeStyle = s.c; x.lineWidth = s.w * (cv.width / cv.clientWidth); x.lineCap = x.lineJoin = `round`; x.beginPath(); s.p.forEach(([a, b], i) => i ? x.lineTo(a, b) : x.moveTo(a, b)); if (s.p.length === 1) x.lineTo(s.p[0][0] + .1, s.p[0][1]); x.stroke(); }); };
  openSheet(`Dibujar a mano`, b => {
    const tools = el(`div`, `cndrawt`);
    [`#111111`, `#D50000`, `#039BE5`, `#0B8043`, `#F4511E`].forEach(c => { const x = btn(``, ``, () => { col = c; tools.querySelectorAll(`.c`).forEach(y => y.setAttribute(`aria-pressed`, y.dataset.c === c)); }); x.className = `c`; x.dataset.c = c; x.style.background = c; x.setAttribute(`aria-pressed`, c === col); x.setAttribute(`aria-label`, `Color`); tools.append(x); });
    [[2, `Fino`], [4, `Medio`], [8, `Grueso`]].forEach(([n, l]) => { const x = btn(l, `btn ghost`, () => { wd = n; }); tools.append(x); });
    tools.append(btn(`↶`, `btn ghost`, () => { strokes.pop(); redraw(); }), btn(`Borrar todo`, `btn ghost`, () => { strokes.length = 0; redraw(); }));
    cv = el(`canvas`, `cndrawc`); b.append(tools, cv);
    requestAnimationFrame(() => { cv.width = cv.clientWidth * 2; cv.height = cv.clientHeight * 2; redraw(); });
    const pt = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height]; };
    cv.onpointerdown = e => { cv.setPointerCapture(e.pointerId); cur = { c:col, w:wd, p:[pt(e)] }; strokes.push(cur); redraw(); };
    cv.onpointermove = e => { if (!cur) return; cur.p.push(pt(e)); redraw(); };
    cv.onpointerup = cv.onpointercancel = () => { cur = null; };
    const r = el(`div`, `btnrow`); r.style.marginTop = `10px`;
    r.append(btn(`Insertar dibujo`, `btn acc`, async () => { if (!strokes.length){ closeSheet(); return; } const data = cv.toDataURL(`image/jpeg`, .85), id = `i` + nid(); await idbPut(id, data); imgQueue(id); closeSheet(); ed.focus(); document.execCommand(`insertHTML`, false, `<img data-img="${id}" src="${data}" alt="Dibujo" style="width:60%" class="al-c"><p><br></p>`); later(); }), btn(`Cancelar`, `btn ghost`, closeSheet));
    b.append(r);
  });
}

/* ---------- importar .md / .html / .txt ---------- */
function mdToHtml(md){
  const L = String(md).replace(/\r/g, ``).split(`\n`), out = []; let i = 0;
  const inl = s => esc(s).replace(/`([^`]+)`/g, `<code>$1</code>`).replace(/\*\*([^*]+)\*\*/g, `<b>$1</b>`).replace(/__([^_]+)__/g, `<b>$1</b>`).replace(/\*([^*]+)\*/g, `<i>$1</i>`).replace(/(^|\W)_([^_]+)_(?=\W|$)/g, `$1<i>$2</i>`).replace(/~~([^~]+)~~/g, `<s>$1</s>`).replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, `<a href="$2" target="_blank" rel="noopener">$1</a>`);
  while (i < L.length){
    const l = L[i];
    if (/^\s*$/.test(l)){ i++; continue; }
    let m;
    if ((m = l.match(/^(#{1,6})\s+(.*)$/))){ const n = m[1].length; out.push(`<${n <= 1 ? `h2` : n === 2 ? `h2` : `h3`}>${inl(m[2])}</${n <= 2 ? `h2` : `h3`}>`); i++; continue; }
    if (/^```/.test(l)){ const b = []; i++; while (i < L.length && !/^```/.test(L[i])) b.push(L[i++]); i++; out.push(`<pre>${esc(b.join(`\n`))}</pre>`); continue; }
    if (/^\s*>/.test(l)){ const b = []; while (i < L.length && /^\s*>/.test(L[i])) b.push(L[i++].replace(/^\s*>\s?/, ``)); out.push(`<blockquote>${inl(b.join(` `))}</blockquote>`); continue; }
    if (/^\s*\|.*\|\s*$/.test(l) && i + 1 < L.length && /^\s*\|?\s*:?-{2,}/.test(L[i + 1])){
      const row = s => s.trim().replace(/^\||\|$/g, ``).split(`|`).map(c => inl(c.trim()));
      const h = row(l); i += 2; const rows = []; while (i < L.length && /^\s*\|.*\|\s*$/.test(L[i])) rows.push(row(L[i++]));
      out.push(`<table><tbody><tr>${h.map(c => `<th>${c}</th>`).join(``)}</tr>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`); continue;
    }
    if (/^\s*[-*+]\s+\[[ xX]\]\s/.test(l)){ const b = []; while (i < L.length && /^\s*[-*+]\s+\[[ xX]\]\s/.test(L[i])){ const mm = L[i++].match(/^\s*[-*+]\s+\[([ xX])\]\s+(.*)$/); b.push(`<li${mm[1].trim() ? ` data-done=""` : ``}>${inl(mm[2])}</li>`); } out.push(`<ul class="cklist">${b.join(``)}</ul>`); continue; }
    if (/^\s*[-*+]\s+/.test(l)){ const b = []; while (i < L.length && /^\s*[-*+]\s+/.test(L[i]) && !/^\s*[-*+]\s+\[[ xX]\]/.test(L[i])) b.push(`<li>${inl(L[i++].replace(/^\s*[-*+]\s+/, ``))}</li>`); out.push(`<ul>${b.join(``)}</ul>`); continue; }
    if (/^\s*\d+[.)]\s+/.test(l)){ const b = []; while (i < L.length && /^\s*\d+[.)]\s+/.test(L[i])) b.push(`<li>${inl(L[i++].replace(/^\s*\d+[.)]\s+/, ``))}</li>`); out.push(`<ol>${b.join(``)}</ol>`); continue; }
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)){ out.push(`<hr>`); i++; continue; }
    const b = []; while (i < L.length && !/^\s*$/.test(L[i]) && !/^(#{1,6}\s|```|\s*>|\s*[-*+]\s|\s*\d+[.)]\s|\s*\|)/.test(L[i])) b.push(L[i++]);
    if (!b.length){ b.push(L[i++]); }
    out.push(`<p>${b.map(inl).join(`<br>`)}</p>`);
  }
  return out.join(``);
}
function cnImport(secId){
  const i = el(`input`); i.type = `file`; i.accept = `.md,.markdown,.txt,.html,.htm,text/plain,text/markdown,text/html`; i.multiple = true;
  i.onchange = async () => {
    const st = cnState(); let s = cnSec(secId || st.sec) || cn().sec.find(x => x.nb === st.nb) || cn().sec[0]; let last = null;
    for (const f of i.files){
      const txt = await f.text(), base = f.name.replace(/\.[^.]+$/, ``);
      let html, title = base;
      if (/\.html?$/i.test(f.name) || /^\s*</.test(txt)){ const d = new DOMParser().parseFromString(txt, `text/html`); const h1 = d.querySelector(`h1`); if (h1){ title = h1.textContent.trim() || base; h1.remove(); } else if (d.title) title = d.title; html = cnClean(d.body.innerHTML); }
      else if (/\.(md|markdown)$/i.test(f.name)){ const m = txt.match(/^\s*#\s+(.+)$/m); if (m) title = m[1].trim(); html = mdToHtml(m ? txt.replace(m[0], ``) : txt); }
      else html = txt.split(/\n{2,}/).map(p => `<p>${esc(p).replace(/\n/g, `<br>`)}</p>`).join(``);
      const p = { id:nid(), sec:s.id, title, html, snip:cnText(html).slice(0, 120), pinned:false, created:Date.now(), updated:Date.now() }; cn().pg.push(p); last = p;
    }
    cnSave(true); if (last){ toastMsg(`${i.files.length === 1 ? `Página importada` : `${i.files.length} páginas importadas`} en “${s.name}”.`); cnOpenPage(last.id); }
  };
  i.click();
}
/* ---------- exportar a PDF (imprimir) ---------- */
async function cnPrint(p){
  const d = document.createElement(`div`); d.innerHTML = p.html || ``;
  for (const im of d.querySelectorAll(`img[data-img]`)){ const s = await idbGet(im.dataset.img); if (s) im.src = s; }
  const f = el(`iframe`); f.style.cssText = `position:fixed;right:0;bottom:0;width:0;height:0;border:0`; document.body.append(f);
  const doc = f.contentDocument;
  doc.open(); doc.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(p.title || `Página`)}</title><style>
  body{font:15px/1.55 "Atkinson Hyperlegible",system-ui,sans-serif;color:#111;margin:18mm 16mm}h1{font:700 24px Georgia,serif;margin:0 0 4px}.m{color:#666;font-size:12px;margin-bottom:16px}
  h2{font:700 19px Georgia,serif;margin:18px 0 6px}h3{font-size:16px;margin:14px 0 4px}table{border-collapse:collapse;width:100%;margin:8px 0}td,th{border:1px solid #999;padding:5px 7px;text-align:left;vertical-align:top}th{background:#eee}
  img{max-width:100%;height:auto}.al-c{display:block;margin:8px auto}.al-l{float:left;margin:4px 12px 8px 0}.al-r{float:right;margin:4px 0 8px 12px}
  ul.cklist{list-style:none;padding-left:4px}ul.cklist li::before{content:"☐ ";}ul.cklist li[data-done]::before{content:"☑ ";}ul.cklist li[data-done]{text-decoration:line-through;color:#777}blockquote{border-left:3px solid #aaa;margin:8px 0;padding:2px 12px;color:#444}
  </style></head><body><h1>${esc(p.title || `Sin título`)}</h1><div class="m">${esc(cnPath(p))} · ${fmtDay(dstr(new Date(p.updated || p.created)))}</div>${d.innerHTML}</body></html>`); doc.close();
  setTimeout(() => { try { f.contentWindow.focus(); f.contentWindow.print(); } catch(e){} setTimeout(() => f.remove(), 60e3); }, 400);
}
/* al salir del cuaderno: guardar y descartar páginas vacías */
const _goCN = go;
go = function(m){ if (S.mode === `cuaderno` && m !== `cuaderno`){ cnFlush(); cnLeave(); document.body.classList.remove(`cnediting`); } _goCN(m); };
addEventListener(`pagehide`, () => { cnFlush(); });

/* ======================= MIS APUNTES EN EL REPASO + MARCAR TEXTO =======================
   · Pestaña “Mis apuntes”: el editor del Cuaderno dentro del Repaso (páginas del tema).
   · Al seleccionar texto de una ficha sale un menú: marcar con color, ⭐ importante, duda al Cuaderno,
     pasar a mis apuntes, repasar luego (pendiente), preguntar, escuchar y copiar.
   · Los marcados se guardan por ficha en S.x.hl[hash(título)] = [{ id, q, s, c, t }] y se sincronizan.     */
const HLC = [[`y`, `Amarillo`], [`o`, `Naranja`], [`r`, `Rojo`], [`p`, `Rosa`], [`v`, `Morado`], [`b`, `Azul`], [`c`, `Celeste`], [`g`, `Verde`]];
const HLI = [`⭐`, `❓`, `⚠️`, `💡`, `📌`, `✅`, `🔥`, `❤️`, `📝`, `📅`];
const hlKey = it => hash(it.title);
const hlOf = it => ((S.x.hl || {})[hlKey(it)] || []);
function repCur(){ if (S.mode !== `repaso` || S.x.rall) return null; const all = filt(ALL.REPASO); if (!all.length) return null; return all[Math.max(0, Math.min(S.x.rpos[selKey()] || 0, all.length - 1))]; }

/* ---------- páginas del Cuaderno para un tema ---------- */
function apSec(t){
  const C = cn(); let s = t ? C.sec.find(x => x.t === t) : C.sec.find(x => !x.t);
  if (!s){ const q = C.nb[0]; s = { id:nid(), nb:q.id, name:t && TOPICS[t] ? `${TOPICS[t].n} · ${TOPICS[t].name}` : `Apuntes de clase`, color:q.color, order:C.sec.filter(x => x.nb === q.id).length, t:t || `` }; C.sec.push(s); cnSave(true); }
  return s;
}
function apNew(t, title, html, ap){
  const s = apSec(t), p = { id:nid(), sec:s.id, title, html, snip:``, pinned:false, created:Date.now(), updated:Date.now() };
  if (ap) p.ap = ap; p.snip = cnText(html).slice(0, 120); cn().pg.push(p); cnSave(true); return p;
}
function apPage(t, kind){
  const s = apSec(t), tn = t && TOPICS[t] ? TOPICS[t].n : `General`;
  let p = cn().pg.find(x => x.sec === s.id && x.ap === kind);
  if (!p) p = kind === `dudas`
    ? apNew(t, `Dudas · ${tn}`, `<p>Dudas que marcaste al leer. Marca ☑ cuando la resuelvas.</p><ul class="cklist"><li><br></li></ul>`, `dudas`)
    : apNew(t, `Apuntes · ${tn}`, (CNTPL.find(x => x[0] === `apuntes`) || CNTPL[0])[4](t && TOPICS[t] ? `${TOPICS[t].n} · ${TOPICS[t].name}` : ``), `apuntes`);
  return p;
}
function apAppend(p, html, toList){
  cnFlush();
  const d = document.createElement(`div`); d.innerHTML = p.html || ``;
  if (toList){
    let ul = [...d.querySelectorAll(`ul.cklist`)].pop(); if (!ul){ ul = document.createElement(`ul`); ul.className = `cklist`; d.append(ul); }
    [...ul.children].forEach(li => { if (!li.textContent.trim() && !li.querySelector(`img`)) li.remove(); });
    const li = document.createElement(`li`); li.innerHTML = html; ul.append(li);
  } else { d.insertAdjacentHTML(`beforeend`, html); }
  p.html = d.innerHTML; p.snip = cnText(p.html).slice(0, 120); p.updated = Date.now(); cnSave(true);
  // si esa página está abierta en un editor, se vuelve a pintar
  if (CN_ED && CN_ED.ed && CN_ED.ed.isConnected && document.querySelector(`.cned`) && S.mode !== `cuaderno`) renderView();
}

/* ---------- pestaña “Mis apuntes” del Repaso ---------- */
function apuntesTab(it, rehacer){
  const w = el(`div`, `aptab`), t = it.t, pgs = cnPagesFor(t);
  S.x.apPg = S.x.apPg || {};
  let cur = cnPg(S.x.apPg[t]); if (!cur || !pgs.includes(cur)) cur = pgs[0];
  if (!cur){
    const e = el(`div`, `apempty`);
    e.append(el(`p`, ``, `Escribe aquí tus apuntes del <b>${TOPICS[t].n}</b> mientras lees. Se guardan en tu Cuaderno, en la sección del tema, y los ves también desde Organizar → Cuaderno.`));
    e.append(btn(`📝 Empezar mis apuntes del ${TOPICS[t].n}`, `btn acc`, () => { const p = apPage(t, `apuntes`); S.x.apPg[t] = p.id; save(); rehacer(); }));
    w.append(e);
  } else {
    const bar = el(`div`, `apbar`); bar.setAttribute(`role`, `tablist`);
    pgs.slice(0, 10).forEach(p => { const b = btn(`${p.ap === `dudas` ? `❓ ` : p.pinned ? `📌 ` : ``}${esc(p.title || `Sin título`)}`, `apch` + (p === cur ? ` on` : ``), () => { cnFlush(); S.x.apPg[t] = p.id; save(); rehacer(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, p === cur); bar.append(b); });
    bar.append(btn(`+ Página`, `apch add`, () => { cnFlush(); const p = apNew(t, `Apuntes · ${it.title}`, (CNTPL.find(x => x[0] === `apuntes`) || CNTPL[0])[4](`${TOPICS[t].n} · ${TOPICS[t].name}`)); S.x.apPg[t] = p.id; save(); rehacer(); }));
    w.append(bar, cnPaneEd(false, cur.id, { embed:true }));
  }
  // lo que marcó en esta ficha
  const hs = hlOf(it);
  const mk = el(`div`, `apmk`);
  mk.append(el(`h4`, ``, `Lo que marcaste en esta ficha${hs.length ? ` · ${hs.length}` : ``}`));
  if (!hs.length) mk.append(el(`p`, `muted`, `En “Leer”, selecciona un texto: puedes marcarlo con color, ⭐ como importante, guardarlo como duda o pasarlo a estos apuntes.`));
  hs.slice().sort((a, b) => (b.c === `i`) - (a.c === `i`) || a.s - b.s).forEach(h => {
    const r = el(`div`, `apmkr`);
    r.append(el(`mark`, `hl hl-${h.c}`, `${h.i ? h.i + ` ` : h.c === `i` ? `⭐ ` : ``}${esc(h.q)}`));
    const a = btn(`📝`, `apmkb`, () => { const p = cur || apPage(t, `apuntes`); apAppend(p, `<blockquote>${esc(h.q)}</blockquote><p><small>— ${esc(it.title)} · ${esc(it.src)}</small></p><p><br></p>`); S.x.apPg[t] = p.id; save(); toastMsg(`Pasado a “${p.title}”.`); rehacer(); }); a.title = `Pasar a mis apuntes`; a.setAttribute(`aria-label`, a.title);
    const x = btn(`✕`, `apmkb`, () => { hlDel(it, h.id); rehacer(); }); x.title = `Quitar marcado`; x.setAttribute(`aria-label`, x.title);
    r.append(a, x); mk.append(r);
  });
  w.append(mk);
  return w;
}

/* ---------- marcados ---------- */
function hlAdd(it, q, s, c, i){ S.x.hl = S.x.hl || {}; const k = hlKey(it); const h = { id:nid(), q, s, c, t:Date.now() }; if (i) h.i = i; (S.x.hl[k] = S.x.hl[k] || []).push(h); save(); return h; }
function hlDel(it, id){ if (typeof tomb === `function`) tomb(id); const k = hlKey(it); S.x.hl[k] = (S.x.hl[k] || []).filter(h => h.id !== id); save(); }
function hlSet(it, id, c, i){ const h = hlOf(it).find(x => x.id === id); if (h){ if (c) h.c = c; if (i !== undefined){ if (i) h.i = i; else delete h.i; } h.t = Date.now(); save(); } }
function txtNodes(root){ const L = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); let n, o = 0; while ((n = w.nextNode())){ L.push({ n, s:o }); o += n.data.length; } return L; }
function hlWrap(root, a, b, h){
  let first = true;
  txtNodes(root).forEach(({ n, s }) => {
    const len = n.data.length, x0 = Math.max(a, s) - s, x1 = Math.min(b, s + len) - s; if (x1 <= x0) return;
    let node = n; if (x1 < len) node.splitText(x1); if (x0 > 0) node = node.splitText(x0);
    if (!node.data.trim() && node.parentNode && /^(UL|OL|TBODY|TR|TABLE)$/.test(node.parentNode.tagName)) return;
    const m = document.createElement(`mark`); m.className = `hl hl-${h.c}`; m.dataset.hl = h.id; if (first && h.i){ m.dataset.ic = h.i; } first = false; node.parentNode.insertBefore(m, node); m.append(node);
  });
}
function hlPaint(root, it){
  root.querySelectorAll(`mark.hl`).forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); m.remove(); p.normalize(); });
  const full = txtNodes(root).map(x => x.n.data).join(``);
  hlOf(it).forEach(h => { let i = full.substr(h.s, h.q.length) === h.q ? h.s : full.indexOf(h.q); if (i < 0){ const z = full.replace(/\s+/g, ` `).indexOf(h.q); if (z < 0) return; i = z; } hlWrap(root, i, i + h.q.length, h); });
  root.dataset.hlx = `1`;
}
// cada vez que se pinta una ficha, se aplican sus marcados
let HL_T = 0;
new MutationObserver(() => { if (HL_T) return; HL_T = requestAnimationFrame(() => { HL_T = 0;
  const it = repCur(); if (!it) return;
  document.querySelectorAll(`#view .rleer:not([data-hlx])`).forEach(r => hlPaint(r, it));
  if (!S.x.selTip){ const r = document.querySelector(`#view .rleer`); const host = r && (r.closest(`.rlc`) || r); if (host && !document.querySelector(`#view .seltip`)){ const tip = el(`div`, `seltip`, `💡 Selecciona cualquier parte del texto para <b>marcarla</b>, guardarla como <b>duda</b> o pasarla a <b>Mis apuntes</b>.`); const x = btn(`Entendido`, `linkbtn`, () => { S.x.selTip = 1; save(); tip.remove(); }); tip.append(x); host.after(tip); } }
}); }).observe(document.getElementById(`view`), { childList:true, subtree:true });

/* ---------- menú al seleccionar ---------- */
let SELM = null;
function selCerrar(){ if (SELM){ SELM.el.remove(); SELM = null; } }
function selInfo(){
  const s = getSelection(); if (!s.rangeCount || s.isCollapsed) return null;
  const r = s.getRangeAt(0), q = s.toString().replace(/\s+/g, ` `).trim(); if (q.length < 2) return null;
  const n = r.commonAncestorContainer, e = n.nodeType === 1 ? n : n.parentElement;
  if (!e || !e.closest(`#view`) || e.closest(`[contenteditable="true"], input, textarea, select, .selmenu, .lbar`)) return null;
  const sc = r.startContainer.nodeType === 1 ? r.startContainer : r.startContainer.parentElement, ec = r.endContainer.nodeType === 1 ? r.endContainer : r.endContainer.parentElement;
  let root = sc && sc.closest(`.rleer`); if (root && !root.contains(ec)) root = null;
  let off = 0; if (root){ const pre = document.createRange(); pre.setStart(root, 0); pre.setEnd(r.startContainer, r.startOffset); off = pre.toString().length; }
  return { q, raw:s.toString(), r, root, off, it:repCur() };
}
function selDuda(q, it){
  const t = it ? it.t : (selList().length === 1 ? selList()[0] : ``), p = apPage(t, `dudas`);
  apAppend(p, `“${esc(q)}”${it ? ` <small>— ${esc(it.title)} · ${esc(it.src)}</small>` : ``}`, true);
  toastMsg(`❓ Duda guardada en el Cuaderno → ${p.title}`);
}
function selApunte(q, it){
  const t = it ? it.t : (selList().length === 1 ? selList()[0] : ``); S.x.apPg = S.x.apPg || {};
  const pgs = t ? cnPagesFor(t) : []; let p = cnPg(S.x.apPg[t]); if (!p || !pgs.includes(p)) p = pgs.find(x => x.ap !== `dudas`) || apPage(t, `apuntes`);
  apAppend(p, `<blockquote>${esc(q)}</blockquote>${it ? `<p><small>— ${esc(it.title)} · ${esc(it.src)}</small></p>` : ``}<p><br></p>`);
  if (t){ S.x.apPg[t] = p.id; save(); }
  toastMsg(`📝 Pasado a tus apuntes → ${p.title}`);
}
function selRepasar(q, it){
  if (typeof nSave !== `function`) return;
  nSave({ id:nid(), kind:`task`, text:`Repasar: “${q.length > 140 ? q.slice(0, 140) + `…` : q}”${it ? ` (${it.title})` : ``}`, date:addDays(todayStr(), 1), time:``, color:``, tags:[], pinned:false, done:0, t:it ? it.t : ``, created:Date.now() });
  toastMsg(`📅 Agregado a Pendientes para mañana.`);
}
function selHablar(q){ try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(q); u.lang = `es-ES`; const v = speechSynthesis.getVoices().find(x => /^es/i.test(x.lang) && /natural|online|google/i.test(x.name)) || speechSynthesis.getVoices().find(x => /^es/i.test(x.lang)); if (v) u.voice = v; u.rate = .95; speechSynthesis.speak(u); } catch(e){} }
function selCopiar(q, it){ const t = q + (it ? `\n— ${it.title} (${it.src})` : ``); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toastMsg(`📋 Copiado.`)).catch(() => toastMsg(`No se pudo copiar.`)); }
function selMenu(info, mark){
  selCerrar();
  const m = el(`div`, `selmenu`); m.setAttribute(`role`, `toolbar`); m.setAttribute(`aria-label`, `Acciones con el texto seleccionado`);
  const it = info.it, q = info.q, puede = !!(it && (info.root || mark));
  const fin = () => { selCerrar(); try { getSelection().removeAllRanges(); } catch(e){} };
  const repinta = () => document.querySelectorAll(`#view .rleer`).forEach(r => hlPaint(r, it));
  // marca (o actualiza) el texto con color y/o ícono
  const marca = (c, i) => { if (!puede) return; const ex = mark || hlOf(it).find(h => h.q === q && h.s === info.off); if (ex) hlSet(it, ex.id, c, i); else hlAdd(it, q, info.off, c || `n`, i); repinta(); };
  const B = (row, html, tip, f, cls = ``) => { const b = btn(html, `smb ${cls}`, f); b.title = tip; b.setAttribute(`aria-label`, tip); row.append(b); return b; };
  const r1 = el(`div`, `smrow`); m.append(r1);
  if (puede){
    HLC.forEach(([c, n]) => { const b = btn(``, `smc hl-${c}` + (mark && mark.c === c ? ` on` : ``), () => { marca(c, mark ? undefined : null); fin(); }); b.title = n; b.setAttribute(`aria-label`, `Marcar en ${n.toLowerCase()}`); r1.append(b); });
    r1.append(el(`span`, `smsep`));
  }
  B(r1, `⭐`, `Importante`, () => { marca(`i`, `⭐`); fin(); toastMsg(`⭐ Marcado como importante.`); }, mark && mark.c === `i` ? `on` : ``);
  B(r1, `❓`, `Duda: se guarda en tu Cuaderno`, () => { marca(mark ? undefined : `n`, `❓`); selDuda(q, it); fin(); });
  B(r1, `📝`, `Pasar a mis apuntes`, () => { marca(mark ? undefined : `n`, `📝`); selApunte(q, it); fin(); });
  B(r1, `📅`, `Repasar luego (Pendientes de mañana)`, () => { marca(mark ? undefined : `n`, `📅`); selRepasar(q, it); fin(); });
  const r2 = el(`div`, `smrow smmas`); r2.hidden = !S.x.smx;
  const mas = B(r1, `⋯`, `Más opciones`, () => { S.x.smx = !S.x.smx; save(); r2.hidden = !S.x.smx; mas.classList.toggle(`on`, !!S.x.smx); selPos(); }, S.x.smx ? `on` : ``);
  if (puede){
    r2.append(el(`span`, `smlab`, `Ícono:`));
    HLI.forEach(ic => B(r2, ic, `Poner ${ic} al texto`, () => { marca(mark ? undefined : `n`, ic); fin(); }, mark && mark.i === ic ? `on` : ``));
    if (mark && mark.i) B(r2, `⊘`, `Quitar el ícono`, () => { hlSet(it, mark.id, null, null); repinta(); fin(); });
    r2.append(el(`span`, `smsep`));
  }
  B(r2, `💬`, `Preguntar: buscar una explicación`, () => { if (typeof ASK !== `undefined`){ ASK.q = q.slice(0, 160); ASK.tab = `mat`; } fin(); go(`preguntar`); });
  B(r2, `🔊`, `Escuchar en voz alta`, () => { selHablar(q); fin(); });
  B(r2, `📋`, `Copiar con la fuente`, () => { selCopiar(q, it); fin(); });
  if (mark) B(r2, `🗑`, `Quitar el marcado`, () => { hlDel(it, mark.id); repinta(); fin(); });
  m.append(r2);
  if (mark && !S.x.smx){ r2.hidden = false; mas.classList.add(`on`); }
  // sin quitar la selección al tocar el menú
  m.addEventListener(`pointerdown`, e => { if (e.target.closest(`button`)) e.preventDefault(); });
  m.addEventListener(`mousedown`, e => e.preventDefault());
  document.body.append(m); SELM = { el:m, info, mark };
  selPos();
  if (!S.x.selTip){ S.x.selTip = 1; save(); const t = document.querySelector(`#view .seltip`); if (t) t.remove(); }
}
function selPos(){
  if (!SELM || (!SELM.markEl && !SELM.info.r)) return; const m = SELM.el;
  const rr = SELM.markEl ? SELM.markEl.getBoundingClientRect() : (() => { const rs = SELM.info.r.getClientRects(); return rs.length ? rs[rs.length - 1] : SELM.info.r.getBoundingClientRect(); })();
  const all = SELM.markEl ? rr : SELM.info.r.getBoundingClientRect();
  const mw = m.offsetWidth, mh = m.offsetHeight;
  let top = rr.bottom + 12; if (top + mh > innerHeight - 8) top = all.top - mh - 12; if (top < 8) top = Math.min(innerHeight - mh - 8, rr.bottom + 12);
  top = Math.max(8, Math.min(innerHeight - mh - 8, top));
  const cx = (rr.left + rr.right) / 2; m.style.top = `${Math.round(top)}px`; m.style.left = `${Math.round(Math.max(8, Math.min(innerWidth - mw - 8, cx - mw / 2)))}px`;
}
let SEL_T = null;
function selCheck(){ clearTimeout(SEL_T); SEL_T = setTimeout(() => { const i = selInfo(); if (!i){ if (SELM && !SELM.mark) selCerrar(); return; } if (SELM && !SELM.mark && SELM.info.q === i.q) { SELM.info = i; selPos(); return; } selMenu(i); }, 280); }
document.addEventListener(`selectionchange`, () => { if (SELM && SELM.mark) return; selCheck(); });
document.addEventListener(`pointerdown`, e => { if (SELM && !SELM.el.contains(e.target) && !e.target.closest(`mark.hl`)) selCerrar(); }, true);
addEventListener(`scroll`, () => { if (SELM) selPos(); }, { passive:true, capture:true });
addEventListener(`resize`, () => selCerrar());
document.addEventListener(`keydown`, e => { if (e.key === `Escape` && SELM) selCerrar(); });
// tocar un texto ya marcado: cambiar color, quitar o usarlo
document.addEventListener(`click`, e => {
  const mk = e.target.closest(`#view .rleer mark.hl`); if (!mk) return;
  const s = getSelection(); if (s && !s.isCollapsed) return;
  const it = repCur(); if (!it) return; const h = hlOf(it).find(x => x.id === mk.dataset.hl); if (!h) return;
  const parts = [...document.querySelectorAll(`#view mark.hl[data-hl="${h.id}"]`)];
  selMenu({ q:h.q, it, root:mk.closest(`.rleer`), off:h.s, r:null }, h); SELM.markEl = parts[parts.length - 1] || mk; selPos();
});

/* ======================= VIDEO DENTRO DE LA PÁGINA + NOTAS DEL VIDEO =======================
   El video de YouTube se ve aquí mismo (youtube-nocookie). Al lado, una página del Cuaderno para
   las notas de ese video; “⏱ Minuto” pega el minuto actual como enlace que salta a ese momento.       */
const VT = { cur:0, frame:null };
// dónde se quedó cada video (en este dispositivo): al volver, sigue desde ahí
const VPOS_K = `quimica_vpos`;
const vpos = (() => { try { return JSON.parse(localStorage.getItem(VPOS_K) || `{}`) || {}; } catch(e){ return {}; } })();
let VPOS_T = 0;
function vposSet(id, t){ if (!id || !(t >= 0)) return; vpos[id] = Math.floor(t); if (VPOS_T) return; VPOS_T = setTimeout(() => { VPOS_T = 0; try { localStorage.setItem(VPOS_K, JSON.stringify(vpos)); } catch(e){} }, 1500); }
const ytEmbed = id => `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1${vpos[id] > 3 ? `&start=${Math.max(0, vpos[id] - 2)}` : ``}&origin=${encodeURIComponent(location.origin)}`;
const mmss = s => { s = Math.max(0, Math.floor(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + `:` + pad2(m) : m) + `:` + pad2(x); };
function ytFrame(v){
  const f = document.createElement(`iframe`); f.src = ytEmbed(v.id); f.title = v.title; f.className = `ytf`;
  f.setAttribute(`allow`, `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen`); f.allowFullscreen = true; f.loading = `lazy`; f.referrerPolicy = `strict-origin-when-cross-origin`;
  f.dataset.vid = v.id;
  f.addEventListener(`load`, () => { VT.frame = f; VT.vid = v.id; VT.cur = vpos[v.id] || 0; try { f.contentWindow.postMessage(JSON.stringify({ event:`listening`, id:`q`, channel:`widget` }), `*`); } catch(e){} });
  return f;
}
addEventListener(`message`, e => { if (!/youtube(-nocookie)?\.com$/.test((e.origin || ``).replace(/^https?:\/\//, ``).replace(/^www\./, ``))) return; let d = e.data; try { if (typeof d === `string`) d = JSON.parse(d); } catch(x){ return; } if (d && d.info && typeof d.info.currentTime === `number`){ VT.cur = d.info.currentTime; const f = [...document.querySelectorAll(`iframe.ytf`)].find(x => x.contentWindow === e.source); const id = f ? f.dataset.vid : VT.vid; if (id && VT.cur > 0) vposSet(id, VT.cur); } });
addEventListener(`pagehide`, () => { try { localStorage.setItem(VPOS_K, JSON.stringify(vpos)); } catch(e){} });
function ytCmd(func, args){ const f = VT.frame; if (!f || !f.isConnected) return false; try { f.contentWindow.postMessage(JSON.stringify({ event:`command`, func, args:args || [] }), `*`); return true; } catch(e){ return false; } }
function videoTab(it, vids, rehacer){
  const w = el(`div`, `vtab`), th = hlKey(it); S.x.vsel = S.x.vsel || {};
  let k = Math.min(S.x.vsel[th] || 0, vids.length - 1); const v = vids[k];
  if (vids.length > 1){ const ch = el(`div`, `apbar`); vids.forEach((x, j) => ch.append(btn(`▶ ${esc(x.title)}`, `apch` + (j === k ? ` on` : ``), () => { cnFlush(); S.x.vsel[th] = j; save(); rehacer(); }))); w.append(ch); }
  const g = el(`div`, `vgrid`);
  const col = el(`div`, `vcol`);
  const box = el(`div`, `vbox`); box.append(ytFrame(v)); col.append(box);
  col.append(el(`div`, `vmeta`, `<b>${esc(v.title)}</b><small>${esc(v.ch)} · refuerza: ${esc(v.src)}</small>`));
  if (vpos[v.id] > 3){ const r = el(`div`, `vres muted`, `⏯ Sigue desde ${mmss(Math.max(0, vpos[v.id] - 2))}. `); r.append(btn(`Ver desde el inicio`, `linkbtn`, () => { delete vpos[v.id]; try { localStorage.setItem(VPOS_K, JSON.stringify(vpos)); } catch(e){} rehacer(); })); col.append(r); }
  const lk = el(`a`, `linkbtn`, `Abrir en YouTube ↗`); lk.href = ytUrl(v.id); lk.target = `_blank`; lk.rel = `noopener`; col.append(lk);
  // notas del video (página del Cuaderno)
  const nt = el(`div`, `vnotes`);
  const sec = it.t, find = () => cn().pg.find(p => p.vid === v.id);
  let p = find();
  const hd = el(`div`, `vnh`); hd.append(el(`b`, ``, `📝 Notas del video`));
  const min = btn(`⏱ Minuto`, `btn ghost sm`, () => {
    let pg = find(); if (!pg){ pg = mkPage(); rehacer(); setTimeout(() => insMin(), 120); return; } insMin();
  }); min.title = `Pegar el minuto actual del video en tus notas`; hd.append(min); nt.append(hd);
  function mkPage(){ const q = apNew(sec, `Notas de video · ${v.title}`, `<p><b>Video:</b> <a href="${ytUrl(v.id)}" target="_blank" rel="noopener">${esc(v.title)}</a> · ${esc(v.ch)}</p><ul><li><br></li></ul>`, `video`); q.vid = v.id; cnSave(true); return q; }
  function insMin(){
    const ed = document.querySelector(`.vnotes .cnedit`); if (!ed) return; const s = VT.cur, a = `<a class="ytt" data-t="${Math.floor(s)}" href="${ytUrl(v.id)}&t=${Math.floor(s)}s" target="_blank" rel="noopener">[${mmss(s)}]</a>&nbsp;`;
    ed.focus(); const sl = getSelection(); if (!sl.rangeCount || !ed.contains(sl.anchorNode)){ const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); sl.removeAllRanges(); sl.addRange(r); }
    document.execCommand(`insertHTML`, false, a); ed.dispatchEvent(new Event(`input`));
  }
  if (!p){
    const e = el(`div`, `apempty`); e.append(el(`p`, ``, `Anota lo que explica el video mientras lo ves. Se guarda en tu Cuaderno, en la sección del ${TOPICS[it.t].n}.`));
    e.append(btn(`📝 Tomar notas de este video`, `btn acc`, () => { mkPage(); rehacer(); setTimeout(() => { const ed = document.querySelector(`.vnotes .cnedit`); if (ed){ ed.focus(); const r = document.createRange(); r.selectNodeContents(ed); r.collapse(false); const sl = getSelection(); sl.removeAllRanges(); sl.addRange(r); } }, 120); }));
    nt.append(e);
  } else nt.append(cnPaneEd(false, p.id, { embed:true }));
  g.append(col, nt); w.append(g);
  w.append(el(`p`, `muted vtip`, `Tip: “⏱ Minuto” pega el momento del video en tus notas; al tocarlo, el video salta a ese momento.`));
  return w;
}
// tocar [mm:ss] en las notas: el video salta a ese momento
document.addEventListener(`click`, e => { const a = e.target.closest(`a.ytt[data-t]`); if (!a || !VT.frame || !VT.frame.isConnected) return; e.preventDefault(); ytCmd(`seekTo`, [+a.dataset.t, true]); ytCmd(`playVideo`); }, true);
// los enlaces de “Video de refuerzo” en otras pantallas abren el video aquí mismo
document.addEventListener(`click`, e => {
  const a = e.target.closest(`a.vidlink`); if (!a || e.ctrlKey || e.metaKey) return; const m = /[?&]v=([\w-]{6,})|youtu\.be\/([\w-]{6,})/.exec(a.href || ``); const id = m && (m[1] || m[2]); const v = id && VIDEOS.find(x => x.id === id); if (!v) return;
  e.preventDefault(); openSheet(v.title, b => { const bx = el(`div`, `vbox`); bx.append(ytFrame(v)); b.append(bx, el(`p`, `muted`, `${esc(v.ch)} · ${esc(v.src)}`)); const l = el(`a`, `linkbtn`, `Abrir en YouTube ↗`); l.href = ytUrl(v.id); l.target = `_blank`; l.rel = `noopener`; b.append(l); });
});

/* ======================= MEMORIZAR (por ficha) =======================
   Todo sale del texto de la misma ficha (material del docente) y de sus preguntas:
   idea clave · glosario · palabras clave · fórmulas y datos · ojo · lo que te preguntan · tarjetas.   */
const MEMO_SKIP = /^(nota|error del material|ojo|ejemplo|ejemplos|los \d+ pasos.*|pasos.*)$/i;
const limpiaT = s => String(s || ``).replace(/\s+/g, ` `).trim();
const cap1 = s => s ? s[0].toUpperCase() + s.slice(1) : s;
function memoData(it){
  if (it._memo) return it._memo;
  const d = document.createElement(`div`); d.innerHTML = it.body || ``;
  const glos = [], seen = new Set(), add = (t, def, how) => { t = limpiaT(t).replace(/[:：.]\s*$/, ``); def = limpiaT(def).replace(/^[:：—–\-,]\s*/, ``); const k = t.toLowerCase(); if (!t || !def || def.length < 4 || t.length > 70 || seen.has(k) || MEMO_SKIP.test(t)) return; seen.add(k); glos.push({ t, d:cap1(def), how }); };
  // definición de la ficha: primer párrafo que no empieza en negrita
  const p0 = [...d.children].find(x => x.tagName === `P` && !x.classList.contains(`note`) && !x.classList.contains(`fx`));
  if (p0){ const f = p0.firstChild; const startsB = f && f.nodeType === 1 && /^(B|STRONG)$/.test(f.tagName); if (!startsB){ const s1 = limpiaT(p0.textContent).split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚÑ])/)[0]; add(it.title.replace(/\s*\(.*?\)\s*$/, ``) + (/\((.*?)\)/.exec(it.title) ? ` (${/\((.*?)\)/.exec(it.title)[1]})` : ``), s1); } }
  // “Término: definición” en listas y párrafos
  d.querySelectorAll(`li, p`).forEach(n => {
    if (n.classList.contains(`note`)) return;
    const b = n.firstElementChild; if (!b || !/^(B|STRONG)$/.test(b.tagName)) return;
    let pre = ``; for (const c of n.childNodes){ if (c === b) break; pre += c.textContent; } if (pre.trim()) return;
    const term = limpiaT(b.textContent), rest = limpiaT(n.textContent.slice(n.textContent.indexOf(b.textContent) + b.textContent.length));
    if (/:$/.test(term) || /^[:—–]/.test(rest)) add(term, rest);
    else if (term.length <= 60 && /^(es|son|=|significa|indica)\b/i.test(rest)) add(term, rest);
  });
  // tablas: primera columna = término; las demás con su encabezado
  d.querySelectorAll(`table`).forEach(tb => {
    const hs = [...tb.querySelectorAll(`thead th, tr:first-child th`)].map(x => limpiaT(x.textContent));
    [...tb.querySelectorAll(`tbody tr`)].filter(r => r.querySelector(`td`)).slice(0, 10).forEach(r => {
      const c = [...r.children].map(x => limpiaT(x.textContent)); if (c.length < 2) return;
      add(c[0], c.slice(1).map((v, i) => hs[i + 1] && c.length > 2 ? `${hs[i + 1]}: ${v}` : v).join(` · `), `tabla`);
    });
  });
  // palabras clave = lo que el docente puso en negrita
  const kw = [], ks = new Set();
  d.querySelectorAll(`b, strong`).forEach(b => { const t = limpiaT(b.textContent).replace(/[:：.,;]\s*$/, ``); const k = t.toLowerCase(); if (t.length < 2 || t.length > 42 || ks.has(k) || MEMO_SKIP.test(t) || /^\d+([.,]\d+)?$/.test(t)) return; ks.add(k); kw.push(t); });
  // contexto de cada palabra clave (la oración donde aparece)
  const texto = limpiaT(d.textContent), oraciones = texto.split(/(?<=[.;:])\s+/);
  const ctx = w => oraciones.find(o => o.toLowerCase().includes(w.toLowerCase())) || ``;
  // fórmulas y datos con números
  const fx = [], fs = new Set(), addF = s => { s = limpiaT(s); const k = s.toLowerCase(); if (s.length < 3 || s.length > 220 || fs.has(k)) return; fs.add(k); fx.push(s); };
  d.querySelectorAll(`.fx`).forEach(n => addF(n.textContent));
  oraciones.forEach(o => { if (/[=⇌→]/.test(o) || /\d\s?(°C|g\/mol|mol|M\b|mL|L\b|%|atm|K\b|nm|kPa|mmHg)/.test(o) || /\bpH\s?[=<>≈]?\s?\d/.test(o)) addF(o); });
  // ojo: notas y errores del material
  const ojo = [...d.querySelectorAll(`.note`)].map(n => limpiaT(n.textContent)).filter(Boolean);
  // preguntas de esta ficha (las que se usan en Comprobar)
  let qs = []; try { qs = (typeof propias === `function` ? propias(it) : []).filter(q => q && q.q && Array.isArray(q.o) && q.o.length); } catch(e){}
  return (it._memo = { glos, kw, ctx, fx:fx.slice(0, 10), ojo, qs });
}
function memoTab(it){
  const D = memoData(it), w = el(`div`, `mtab`);
  w.append(el(`p`, `muted msrc`, `Todo sale de esta ficha · ${esc(it.src)}`));
  // 1. idea clave
  if (it.memo){
    const c = el(`section`, `mcard mkey`); c.append(el(`h4`, ``, `🧠 Idea clave`));
    const m = el(`div`, `mhid`); m.append(el(`p`, `muted`, `Antes de verla, dila en voz alta.`), btn(`Mostrar la idea clave`, `btn acc`, () => { m.innerHTML = `<p class="mbig">${it.memo}</p>`; }));
    c.append(m); w.append(c);
  }
  // 2. glosario
  if (D.glos.length){
    const c = el(`section`, `mcard`); const h = el(`div`, `mh`); h.append(el(`h4`, ``, `📖 Glosario · ${D.glos.length}`));
    const tg = btn(`Tapar definiciones`, `linkbtn`, () => { c.classList.toggle(`tapa`); tg.textContent = c.classList.contains(`tapa`) ? `Mostrar definiciones` : `Tapar definiciones`; }); h.append(tg); c.append(h);
    const dl = el(`dl`, `mglos`); D.glos.forEach(g => { const dt = el(`dt`, ``, esc(g.t)), dd = el(`dd`, ``, esc(g.d)); dd.title = `Toca para ver`; dd.onclick = () => dd.classList.add(`ver`); dl.append(dt, dd); }); c.append(dl);
    c.append(el(`p`, `muted mtip`, `Tip: “Tapar definiciones” y trata de decirlas antes de tocar cada una.`)); w.append(c);
  }
  // 3. palabras clave
  if (D.kw.length){
    const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `🔑 Palabras clave · ${D.kw.length}`));
    const box = el(`div`, `mkw`), sh = el(`p`, `mkwc muted`, `Toca una palabra para ver dónde aparece en la ficha.`);
    D.kw.forEach(k => { const b = btn(esc(k), `mchip`, () => { box.querySelectorAll(`.on`).forEach(x => x.classList.remove(`on`)); b.classList.add(`on`); const o = D.ctx(k); sh.classList.remove(`muted`); sh.innerHTML = o ? esc(o).replace(new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`), `i`), m => `<mark class="hl hl-y">${m}</mark>`) : `—`; }); box.append(b); });
    c.append(box, sh); w.append(c);
  }
  // 4. fórmulas y datos
  if (D.fx.length){ const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `🔢 Fórmulas y datos que debes manejar`)); const ul = el(`ul`, `mfx`); D.fx.forEach(f => ul.append(el(`li`, ``, esc(f)))); c.append(ul); w.append(c); }
  // 5. ojo
  if (D.ojo.length){ const c = el(`section`, `mcard mojo`); c.append(el(`h4`, ``, `⚠️ Ojo (errores frecuentes y aclaraciones)`)); D.ojo.forEach(o => c.append(el(`p`, ``, esc(o)))); w.append(c); }
  // 6. lo que te preguntan
  if (D.qs.length){
    const c = el(`section`, `mcard`); c.append(el(`h4`, ``, `❓ Lo que te pueden preguntar · ${D.qs.length}`));
    const list = el(`div`, `mqs`); let n = 0;
    const more = () => { D.qs.slice(n, n + 6).forEach(q => { const r = el(`div`, `mq`); r.append(el(`p`, `mqq`, q.q)); const a = el(`div`, `mqa`); a.append(btn(`Ver respuesta`, `linkbtn`, () => { a.innerHTML = `<b>${q.o[0]}</b>${q.e ? `<small>${q.e}</small>` : ``}`; })); r.append(a); list.append(r); }); n += 6; mb.hidden = n >= D.qs.length; };
    const mb = btn(`Ver más`, `btn ghost`, more); c.append(list, mb); more(); w.append(c);
  }
  // 7. tarjetas
  const cards = D.glos.map(g => [esc(g.t), esc(g.d)]).concat(D.qs.map(q => [q.q, q.o[0]])).concat(it.memo ? [[`Idea clave de “${esc(it.title)}”`, it.memo]] : []);
  if (cards.length){ const b = btn(`🃏 Repasar con tarjetas (${cards.length})`, `btn acc wide`, () => memoCards(it, cards)); b.style.marginTop = `4px`; w.append(b); }
  if (!D.glos.length && !D.kw.length && !it.memo) w.append(el(`p`, `muted`, `Esta ficha no tiene datos para memorizar.`));
  return w;
}
function memoCards(it, all){
  let L = shuf(all.slice()), i = 0, ok = 0, flip = false; const otra = [];
  openSheet(`Tarjetas · ${it.title}`, b => {
    if (i >= L.length){
      if (otra.length){ b.append(el(`p`, ``, `Te supiste <b>${ok}</b>. Quedan <b>${otra.length}</b> para repasar otra vez.`)); b.append(btn(`Repasar las que fallé`, `btn acc wide`, () => { L = shuf(otra.splice(0)); i = 0; ok = 0; flip = false; drawSheet(); })); }
      else b.append(el(`p`, ``, `¡Listo! Te las supiste todas. 🎉`));
      b.append(btn(`Empezar de nuevo`, `btn ghost wide`, () => { L = shuf(all.slice()); i = 0; ok = 0; otra.length = 0; flip = false; drawSheet(); })); return;
    }
    const [f, r] = L[i];
    b.append(el(`p`, `muted`, `Tarjeta ${i + 1} de ${L.length} · toca la tarjeta para voltearla`));
    const c = btn(``, `mflip` + (flip ? ` on` : ``), () => { flip = !flip; drawSheet(); });
    c.innerHTML = flip ? `<small>Respuesta</small><span>${r}</span>` : `<small>Pregunta / término</small><span>${f}</span>`; b.append(c);
    if (flip){ const row = el(`div`, `mrow`); row.append(btn(`↻ Repasar otra vez`, `btn ghost`, () => { otra.push(L[i]); i++; flip = false; drawSheet(); }), btn(`✓ Me la sé`, `btn acc`, () => { ok++; i++; flip = false; drawSheet(); })); b.append(row); }
  });
}

/* ======================= BARRA DE FICHAS (Anterior · Comprobar · Siguiente) =======================
   Más delgada; se puede minimizar, hacer transparente y mover libremente. Se recuerda en este dispositivo. */
function dockCfg(){ const k = S.x.dk = S.x.dk || { m:`fijo`, o:1 }; if (k.m === `mini`){ k.m = `fijo`; k.mini = true; } return k; }
function dockEnhance(dock){
  const k = dockCfg(); dock.classList.remove(`mini`, `libre`); dock.style.cssText = ``;
  dock.classList.add(`dkx`); if (k.mini) dock.classList.add(`mini`); if (k.m === `libre`) dock.classList.add(`libre`);
  dock.style.setProperty(`--dko`, k.o || 1);
  const grip = btn(`⠿`, `dkgrip`, () => {}); grip.title = `Arrastra para mover la barra`; grip.setAttribute(`aria-label`, grip.title);
  const opt = btn(`⋯`, `dkopt`, () => dockMenu(opt, dock)); opt.title = `Ajustes de la barra`; opt.setAttribute(`aria-label`, opt.title);
  dock.prepend(grip); dock.append(opt);
  if (k.mini){ const mid = dock.querySelector(`.rmid`); if (mid){ mid.dataset.full = mid.textContent; mid.title = mid.textContent; mid.setAttribute(`aria-label`, mid.textContent); mid.textContent = /comprob/i.test(mid.textContent) ? `✓` : /volver/i.test(mid.textContent) ? `📖` : `›`; } }
  if (k.m === `libre`) dockPlace(dock);
  grip.addEventListener(`pointerdown`, ev => {
    ev.preventDefault(); grip.setPointerCapture(ev.pointerId);
    const r0 = dock.getBoundingClientRect(), dx = ev.clientX - r0.left, dy = ev.clientY - r0.top;
    if (k.m !== `libre`){ k.m = `libre`; k.x = r0.left; k.y = r0.top; dock.classList.add(`libre`); dockPlace(dock); }
    const mv = e => { k.x = e.clientX - dx; k.y = e.clientY - dy; dockPlace(dock); };
    const up = () => { grip.removeEventListener(`pointermove`, mv); grip.removeEventListener(`pointerup`, up); save(); };
    grip.addEventListener(`pointermove`, mv); grip.addEventListener(`pointerup`, up);
  });
}
function dockPlace(dock){ const k = dockCfg(), w = dock.offsetWidth || 300, h = dock.offsetHeight || 56; k.x = Math.max(6, Math.min(innerWidth - w - 6, k.x == null ? innerWidth - w - 20 : k.x)); k.y = Math.max(6, Math.min(innerHeight - h - 6, k.y == null ? innerHeight - h - 90 : k.y)); dock.style.left = `${k.x}px`; dock.style.top = `${k.y}px`; }
addEventListener(`resize`, () => { const d = document.querySelector(`.rdock.libre`); if (d) dockPlace(d); });
function dockMenu(anchor, dock){
  document.querySelectorAll(`.dkpop`).forEach(x => x.remove());
  const k = dockCfg(), m = el(`div`, `dkpop`); m.setAttribute(`role`, `dialog`); m.setAttribute(`aria-label`, `Ajustes de la barra`);
  const set = (mode) => { k.m = mode; save(); m.remove(); renderView(); };
  m.append(el(`b`, ``, `Barra de fichas`));
  const opt2 = (l, on, f) => { const b = btn(l, `dkm` + (on ? ` on` : ``), () => { f(); save(); m.remove(); renderView(); }); b.setAttribute(`aria-pressed`, !!on); m.append(b); };
  m.append(el(`small`, `muted`, `Tamaño`));
  opt2(`▭ Completa`, !k.mini, () => { k.mini = false; }); opt2(`▁ Pequeña (solo ‹ ✓ ›)`, k.mini, () => { k.mini = true; });
  m.append(el(`small`, `muted`, `Lugar`));
  opt2(`⬇ Fija abajo`, k.m !== `libre`, () => { k.m = `fijo`; k.x = k.y = null; }); opt2(`✥ Moverla libremente`, k.m === `libre`, () => { k.m = `libre`; });
  const lab = el(`label`, `dkop`, `<span>Opacidad</span>`); const r = el(`input`); r.type = `range`; r.min = `25`; r.max = `100`; r.step = `5`; r.value = Math.round((k.o || 1) * 100); r.setAttribute(`aria-label`, `Opacidad de la barra`);
  const out = el(`small`, ``, `${r.value}%`); r.oninput = () => { k.o = r.value / 100; out.textContent = `${r.value}%`; dock.style.setProperty(`--dko`, k.o); }; r.onchange = () => save();
  lab.append(r, out); m.append(lab, el(`p`, `muted`, `Al pasar el mouse o tocarla se ve completa. Arrastra ⠿ para moverla.`));
  document.body.append(m); const a = anchor.getBoundingClientRect(); const mw = m.offsetWidth, mh = m.offsetHeight;
  m.style.left = `${Math.max(8, Math.min(innerWidth - mw - 8, a.right - mw))}px`; m.style.top = `${a.top - mh - 10 < 8 ? a.bottom + 10 : a.top - mh - 10}px`;
  setTimeout(() => document.addEventListener(`pointerdown`, function f(e){ if (!m.contains(e.target) && e.target !== anchor){ m.remove(); document.removeEventListener(`pointerdown`, f, true); } }, true), 0);
}

/* ======================= NOVEDADES =======================
   Lo nuevo de la página, explicado para Gaby. Para agregar una novedad: poner la entrada ARRIBA
   con un id nuevo (el punto del botón 🎁 aparece hasta que ella la lee).                         */
const NOVEDADES = [
  { id:`2026-11-12a`, d:`2026-11-12`, t:`Nueva sección: Retroalimentación`, l:[
    `Está debajo de Preguntar. Analiza tus 6 evaluaciones y las 52 preguntas que fallaste: dónde, por qué y cómo corregirlo.`,
    `Tiene 4 pestañas: Diagnóstico (tus patrones), Mis fallos (se repasan en 1, 3, 7 y 14 días), Cómo evalúan (estructura y trampas del docente) y Simulacro (parciales y cortos con su estructura y dificultad).`,
    `Los simulacros usan los temas que hay cargados en la app. Lo que falles en ellos se suma a Mis fallos.`] },
  { id:`2026-11-11a`, d:`2026-11-11`, t:`Tema nuevo: 32 (ésteres y amidas)`, l:[
    `Ya está en Estudiar, en la Unidad VII: 13 fichas con dibujos, Memorizar, “Comprueba lo que leíste”, preguntas, ejercicios, formulario, videos y audio con voz natural.`,
    `En Práctica hay 4 ejercicios nuevos: nombrar ésteres, nombrar amidas, clasificar amidas y productos de la hidrólisis.`,
    `El material tiene algunas fórmulas con errores (pág. 7 y 8, entre otras): búscalas por el punto naranja en el número de la ficha.`] },
  { id:`2026-11-09a`, d:`2026-11-09`, t:`Aviso de correcciones del material`, l:[
    `Las fichas donde el material del curso tiene un error, una parte incompleta o una contradicción ahora tienen un punto naranja en su número y una franja ámbar arriba del texto.`,
    `Toca la franja para ver qué dice el material y qué es lo correcto. El botón “⚠ Correcciones” muestra todas las del tema y te lleva a cada ficha.`] },
  { id:`2026-11-08b`, d:`2026-11-08`, t:`Temas nuevos: 30 (aldehídos y cetonas) y 31 (ácidos carboxílicos)`, l:[
    `Ya están en Estudiar, dentro de la Unidad VII: repaso con dibujos, fichas, Memorizar, “Comprueba lo que leíste”, preguntas, ejercicios resueltos, formulario y videos.`,
    `En Práctica hay 6 ejercicios nuevos que cambian cada vez: nombrar aldehídos, cetonas y ácidos, reducción, Tollens/Fehling, nombres comunes y propiedades según los carbonos.`,
    `Lee los recuadros de nota: el material tiene algunos detalles corregidos (un dibujo invertido, los cuerpos cetónicos y la última diapositiva del Tema 31, que está cortada).`] },
  { id:`2026-11-08a`, d:`2026-11-08`, t:`Nuevo color: Frambuesa`, l:[
    `En “Colores” hay un color nuevo: 🍓 Frambuesa, un rosa intenso y alegre.`,
    `Se usa en botones, pestañas y el Pomodoro, en modo día y noche. Los colores de cada tema no cambian.`] },
  { id:`2026-11-06i`, d:`2026-11-06`, t:`Pantalla completa: el texto entra completo y se lee mejor`, l:[
    `En computadora, el texto ocupa más espacio y el dibujo se hace más compacto a la derecha.`,
    `La letra se ajusta sola para que toda la ficha se vea sin bajar (sin quedar nunca más pequeña de lo cómodo). Con A− / A+ la cambias si quieres.`,
    `El botón “1 tema · cambiar” vuelve a abrir la lista de temas aunque el panel derecho esté oculto.`] },
  { id:`2026-11-06h`, d:`2026-11-06`, t:`Menú de marcar más pequeño, 8 colores e íconos`, l:[
    `Al seleccionar texto sale una barrita compacta: 8 colores (amarillo, naranja, rojo, rosa, morado, azul, celeste y verde), ⭐ importante, ❓ duda, 📝 a mis apuntes y 📅 repasar luego.`,
    `Duda, apuntes y repasar luego también dejan su ícono pegado al texto, para que veas qué hiciste con cada parte.`,
    `En ⋯ eliges un ícono para el texto (⭐ ❓ ⚠️ 💡 📌 ✅ 🔥 ❤️ 📝 📅), además de preguntar, escuchar, copiar o quitar el marcado.`] },
  { id:`2026-11-06g`, d:`2026-11-06`, t:`Memorizar con todo lo importante, video que sigue donde quedó y barra que no estorba`, l:[
    `“Memorizar” ahora trae: 🧠 idea clave, 📖 glosario (términos y definiciones de la ficha, con opción de taparlas), 🔑 palabras clave, 🔢 fórmulas y datos, ⚠️ ojo con los errores frecuentes, ❓ lo que te pueden preguntar y 🃏 tarjetas para repasar.`,
    `El video sigue donde lo dejaste aunque cambies a Leer o a otra ficha. “Ver desde el inicio” lo regresa al principio.`,
    `La barra Anterior · Comprobar · Siguiente es más delgada. En ⋯ la haces pequeña (solo ‹ ✓ ›), le bajas la opacidad o la mueves libremente arrastrando ⠿.`] },
  { id:`2026-11-06f`, d:`2026-11-06`, t:`Imágenes y dibujos que se mueven libremente`, l:[
    `Toca una imagen o dibujo del Cuaderno: aparece un marco con 8 puntos. Las esquinas cambian el tamaño sin deformar; los puntos de los lados la estiran.`,
    `Arrástrala desde el centro y la colocas donde quieras en la página (modo ✥ Libre). Con ☰ En el texto vuelve a acomodarse entre los párrafos.`,
    `⤒ / ⤓ la pone delante o detrás, ↺ recupera su forma original y 🗑 (o la tecla Suprimir) la quita.`] },
  { id:`2026-11-06e`, d:`2026-11-06`, t:`Marcar texto, apuntes y videos dentro del Repaso`, l:[
    `Selecciona cualquier parte de una ficha: sale un menú para marcarla con color o ⭐ Importante, guardarla como ❓ Duda en tu Cuaderno, pasarla 📝 a tus apuntes, agregarla a 📅 Pendientes para repasar mañana, 💬 preguntar, 🔊 escucharla o 📋 copiarla con la fuente.`,
    `Tus marcados se quedan guardados en la ficha. Tócalos para cambiar el color o quitarlos.`,
    `“Mis apuntes” ahora es un cuaderno dentro del Repaso: escribes ahí mismo y se guarda en la sección del tema. Abajo ves todo lo que marcaste en esa ficha.`,
    `“Video”: el video de YouTube se ve aquí, con tus notas al lado. “⏱ Minuto” pega el momento del video; al tocarlo, el video salta ahí.`,
    `Cuaderno: la página ocupa todo el ancho. Los cuadernos y páginas están en el menú “Cuaderno y páginas ▾”.`] },
  { id:`2026-11-06d`, d:`2026-11-06`, t:`Repaso en pantalla completa`, l:[
    `En Repaso toca “Pantalla completa”: desaparece todo lo demás y queda solo la ficha.`,
    `En computadora se ve como un libro abierto: texto a la izquierda y dibujo a la derecha. Cambias de ficha con las flechas grandes de los lados (o con ← → del teclado).`,
    `“☰ Fichas” abre la lista de todas las fichas del tema para saltar a cualquiera (✓ = ya leída).`,
    `Arriba tienes A− / A+ para la letra, el modo día/noche y ✕ Salir (o Esc).`,
    `En el teléfono: el texto y el dibujo quedan uno sobre otro, con la barra para pasar de ficha abajo.`] },
  { id:`2026-11-06c`, d:`2026-11-06`, t:`🔍 Ver más grande`, l:[
    `Arriba tienes el botón 🔍. Con A+ / A− (o eligiendo 115 %, 130 %, 150 %, 175 % o 200 %) se agranda la letra, los botones y los dibujos de toda la página.`,
    `Se guarda en cada dispositivo: puedes tener la letra grande en el teléfono y normal en la computadora.`,
    `Cada dibujo tiene su 🔍: lo abre en pantalla completa. Acerca con + / −, con la rueda del ratón o con dos dedos; arrástralo para moverlo y toca dos veces para acercar ahí. ↺ lo ajusta y ✕ cierra.`] },
  { id:`2026-11-06b`, d:`2026-11-06`, t:`Lee y mira el dibujo al mismo tiempo`, l:[
    `En Repaso → Leer, el dibujo ya está junto al texto (en computadora, a la derecha; en el teléfono, arriba).`,
    `Arriba del dibujo tienes 3 botones: ◧ junto al texto, 📌 fijarlo arriba mientras bajas leyendo, y ⧉ ventana flotante.`,
    `La ventana flotante la mueves arrastrando su barra, la agrandas o achicas con − / + (o la esquina) y ▴ la minimiza. Recuerda dónde la dejaste.`,
    `En computadora, el panel de la derecha (Pomodoro, índice y temas) se oculta con “Ocultar panel” y queda una tira delgada con el reloj; tócala para abrirlo de nuevo.`,
    `En computadora, el texto y el dibujo usan todo el ancho de la pantalla, sin espacios vacíos a los lados.`] },
  { id:`2026-11-06a`, d:`2026-11-06`, t:`Tu progreso pasa solo entre el teléfono y la computadora`, l:[
    `Ya no sale el mensaje de “¿Qué progreso conservo?”: los dispositivos juntan los cambios solos y en pocos segundos.`,
    `Si dejas “Comprueba lo que leíste” a medias, en el otro dispositivo te aparece en qué pregunta ibas. Puedes seguir, reiniciar con las mismas preguntas o empezar uno nuevo.`,
    `En Inicio, “Continúa donde quedaste” te lleva directo a la pregunta pendiente.`,
    `Para que funcione, inicia sesión con tu cuenta de Google en los dos (Guardar en la nube).`] },
  { id:`2026-11-04c`, d:`2026-11-04`, t:`Nueva sección: Organizar`, l:[
    `Agenda con vista de día, semana, mes y lista. Se conecta con tu Google Calendar (botón 🔗 Google).`,
    `Pendientes con fecha, notas rápidas con #etiquetas y un Cuaderno tipo OneNote con plantillas de clase, laboratorio, ejercicio resuelto y caso clínico.`,
    `Las páginas del Cuaderno enlazadas a un tema salen como “Mis apuntes” en el Repaso de ese tema.`,
    `El botón 📅 de arriba te muestra lo que te queda hoy. “Mis notas” ahora está en Organizar.`,
    `Puedes recibir los recordatorios también por correo (Agenda → ⚙).`] },
  { id:`2026-11-04b`, d:`2026-11-04`, t:`Inicio y Repaso con nuevo diseño`, l:[
    `Inicio: “Continúa donde quedaste”, plan de hoy y avance de cada tema.`,
    `Repaso: cuadritos con las fichas del tema, pestañas (Leer · Dibujo · Memorizar · Comprobar · Video) y una barra fija abajo para pasar de ficha.`,
    `En la barra de abajo eliges 4 accesos; lo demás está en “Más”.`] },
  { id:`2026-11-04a`, d:`2026-11-04`, t:`Comprueba lo que leíste: ficha nueva y luego repaso`, l:[
    `Solo salen preguntas de la ficha que leíste y de las anteriores del mismo tema, nunca de las que aún no lees.`,
    `Primero todas las de la ficha nueva; luego una pausa con tu resultado y el repaso de las fichas anteriores.`,
    `En ⚙ Ajustes eliges cuántas de repaso, qué fichas entran y si quieres más de lo que fallas.`] },
  { id:`2026-11-02a`, d:`2026-11-02`, t:`Muchas más preguntas por ficha`, l:[
    `Cada ficha tiene ahora alrededor de 20 preguntas distintas, sin repetirse.`,
    `Botones “Siguiente pregunta” y “Repetir preguntas” sin cambiar de ficha.`] },
  { id:`2026-10-28a`, d:`2026-10-28`, t:`Audio-repaso con voz natural`, l:[`Escucha las fichas con una voz más natural y sin cortes.`] }
];
const newsUnread = () => NOVEDADES.filter(n => !(S.x.newsSeen || []).includes(n.id)).length;
function openNovedades(){
  const nuevas = new Set(NOVEDADES.filter(n => !(S.x.newsSeen || []).includes(n.id)).map(n => n.id));
  S.x.newsSeen = NOVEDADES.map(n => n.id); save(); renderHead();
  openSheet(`Novedades`, b => {
    b.append(el(`p`, `muted`, `Lo nuevo de tu página de estudio. Recarga la página para recibir siempre lo último.`));
    NOVEDADES.forEach(n => {
      const c = el(`article`, `nov` + (nuevas.has(n.id) ? ` nueva` : ``));
      c.append(el(`div`, `novd`, `${fmtDay(n.d)[0].toUpperCase() + fmtDay(n.d).slice(1)}${nuevas.has(n.id) ? ` · <b>Nuevo</b>` : ``}`), el(`h4`, ``, n.t));
      const ul = el(`ul`); n.l.forEach(x => ul.append(el(`li`, ``, x))); c.append(ul); b.append(c);
    });
  });
}
const _renderHeadN = renderHead;
renderHead = function(){
  _renderHeadN();
  const tools = $(`#head .top .tools`); if (!tools) return;
  const n = newsUnread(); const b = btn(`🎁${n ? `<i>${n}</i>` : ``}`, `hbtn hnov`, openNovedades);
  b.title = n ? `${n} novedad${n === 1 ? `` : `es`} sin leer` : `Novedades`; b.setAttribute(`aria-label`, b.title);
  tools.prepend(b);
};

/* ======================= LUPA Y TAMAÑO DE LETRA =======================
   Para ver mejor: 🔍 arriba cambia el tamaño de todo el contenido (se guarda en cada dispositivo)
   y cualquier dibujo se abre en pantalla completa para acercarlo y moverlo.                        */
const ZOOMS = [1, 1.15, 1.3, 1.5, 1.75, 2];
function applyZoom(){ const z = +S.x.zoom || 1; document.documentElement.style.setProperty(`--z`, z); document.documentElement.classList.toggle(`zoomed`, z !== 1); }
function setZoom(z){ S.x.zoom = Math.round(Math.max(0.9, Math.min(2, z)) * 100) / 100; save(); applyZoom(); renderAll ? renderAll() : renderView(); }
function openZoom(){
  openSheet(`Ver más grande`, b => {
    const z = +S.x.zoom || 1;
    b.append(el(`p`, `muted`, `Agranda la letra, los botones y los dibujos de toda la página. Se guarda en este dispositivo.`));
    const row = el(`div`, `zrow`);
    const m = btn(`A−`, `zbt sm`, () => { const i = ZOOMS.findIndex(v => v >= z - .001); setZoom(ZOOMS[Math.max(0, i - 1)] || .9); drawSheet(); }); m.setAttribute(`aria-label`, `Letra más pequeña`);
    const p = btn(`A+`, `zbt lg`, () => { const i = ZOOMS.findIndex(v => v > z + .001); setZoom(i < 0 ? 2 : ZOOMS[i]); drawSheet(); }); p.setAttribute(`aria-label`, `Letra más grande`);
    row.append(m, el(`div`, `zval`, `${Math.round(z * 100)} %`), p); b.append(row);
    const ch = el(`div`, `zchips`);
    ZOOMS.forEach(v => { const c = btn(`${Math.round(v * 100)} %`, `zchip` + (Math.abs(v - z) < .01 ? ` on` : ``), () => { setZoom(v); drawSheet(); }); c.setAttribute(`aria-pressed`, Math.abs(v - z) < .01); ch.append(c); });
    b.append(ch);
    b.append(el(`div`, `zprev reptext`, `<p>Ejemplo: el <b>pH</b> = −log [H<sub>3</sub>O<sup>+</sup>]. Una solución con pH 3 es <b>ácida</b>.</p>`));
    b.append(el(`p`, `muted`, `🔍 en cualquier dibujo: lo abre en pantalla completa. Ahí puedes acercar con + / −, con la rueda del ratón o con dos dedos, y moverlo arrastrando.`));
  });
}
/* Visor de dibujos a pantalla completa */
function lupa(fig){
  if (!fig) return; const svg = fig.querySelector(`svg`); if (!svg) return;
  const cap = fig.querySelector(`figcaption`);
  const ov = el(`div`, `lupa`); ov.setAttribute(`role`, `dialog`); ov.setAttribute(`aria-modal`, `true`); ov.setAttribute(`aria-label`, `Dibujo en grande`);
  const top = el(`div`, `lupab`), stage = el(`div`, `lupas`), inner = el(`div`, `lupai`);
  inner.append(svg.cloneNode(true)); stage.append(inner);
  let k = 1, x = 0, y = 0; const pinta = () => { inner.style.transform = `translate(${x}px,${y}px) scale(${k})`; val.textContent = `${Math.round(k * 100)} %`; };
  const zoomA = (nk, cx, cy) => { nk = Math.max(1, Math.min(6, nk)); const r = stage.getBoundingClientRect(); cx = cx == null ? r.width / 2 : cx - r.left; cy = cy == null ? r.height / 2 : cy - r.top; x = cx - (cx - x) * nk / k; y = cy - (cy - y) * nk / k; k = nk; if (k === 1){ x = 0; y = 0; } pinta(); };
  const B = (t, l, f) => { const b = btn(t, `lbt`, f); b.title = l; b.setAttribute(`aria-label`, l); return b; };
  const val = el(`span`, `lval`, `100 %`);
  const cerrar = () => { ov.remove(); document.removeEventListener(`keydown`, kd); };
  top.append(el(`b`, ``, `Dibujo`), B(`−`, `Alejar`, () => zoomA(k / 1.4)), val, B(`+`, `Acercar`, () => zoomA(k * 1.4)), B(`↺`, `Ajustar a la pantalla`, () => { k = 1; x = 0; y = 0; pinta(); }), B(`✕`, `Cerrar`, cerrar));
  ov.append(top, stage);
  if (cap){ const c = el(`div`, `lupac`, cap.innerHTML); ov.append(c); }
  const kd = e => { if (e.key === `Escape`) cerrar(); else if (e.key === `+` || e.key === `=`) zoomA(k * 1.4); else if (e.key === `-`) zoomA(k / 1.4); };
  document.addEventListener(`keydown`, kd);
  stage.addEventListener(`wheel`, e => { e.preventDefault(); zoomA(k * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX, e.clientY); }, { passive:false });
  // arrastrar y pellizcar
  const pts = new Map(); let d0 = 0, k0 = 1;
  stage.addEventListener(`pointerdown`, e => { stage.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x:e.clientX, y:e.clientY }); if (pts.size === 2){ const [a, b] = [...pts.values()]; d0 = Math.hypot(a.x - b.x, a.y - b.y); k0 = k; } });
  stage.addEventListener(`pointermove`, e => { const p = pts.get(e.pointerId); if (!p) return;
    if (pts.size === 1){ x += e.clientX - p.x; y += e.clientY - p.y; pinta(); }
    pts.set(e.pointerId, { x:e.clientX, y:e.clientY });
    if (pts.size === 2 && d0){ const [a, b] = [...pts.values()]; zoomA(k0 * Math.hypot(a.x - b.x, a.y - b.y) / d0, (a.x + b.x) / 2, (a.y + b.y) / 2); } });
  const fin = e => { pts.delete(e.pointerId); if (pts.size < 2) d0 = 0; };
  stage.addEventListener(`pointerup`, fin); stage.addEventListener(`pointercancel`, fin);
  stage.addEventListener(`dblclick`, e => zoomA(k > 1.5 ? 1 : 2.5, e.clientX, e.clientY));
  document.body.append(ov); pinta(); setTimeout(() => top.querySelector(`button:last-child`).focus(), 30);
}
/* 🔍 en cada dibujo de la página */
const _figureL = figure;
figure = function(key, small){
  const d = _figureL(key, small); if (!d) return d;
  const z = btn(`🔍`, `figz`, e => { e.stopPropagation(); lupa(d); }); z.title = `Ver en grande`; z.setAttribute(`aria-label`, `Ver el dibujo en grande`);
  d.append(z); return d;
};
/* botón 🔍 arriba */
const _renderHeadZ = renderHead;
renderHead = function(){
  _renderHeadZ();
  const tools = $(`#head .top .tools`); if (!tools) return;
  const z = +S.x.zoom || 1; const b = btn(`🔍${z !== 1 ? `<i>${Math.round(z * 100)}</i>` : ``}`, `hbtn hzoom`, openZoom);
  b.title = `Ver más grande (tamaño de letra y lupa)`; b.setAttribute(`aria-label`, b.title); tools.prepend(b);
};
applyZoom();
/* la ventana flotante del dibujo se quita al salir del Repaso */
const _renderViewL = renderView;
renderView = function(){ _renderViewL.apply(this, arguments); if (!document.querySelector(`#view .rlc.m-flota`)) document.querySelectorAll(`body > .rfig.flt`).forEach(x => x.remove()); };

/* ======================= PANTALLA COMPLETA DEL REPASO =======================
   Solo la ficha: sin menú, sin panel ni pestañas de sección.
   PC: libro abierto (texto a la izquierda, dibujo a la derecha) con flechas a los lados y lista de fichas desplegable.
   Teléfono: lectura enfocada (texto y dibujo uno sobre otro) con barra fija abajo.                                   */
let LECT_FS = false;
function lectOn(){
  S.x.lect = true; save();
  const d = document.documentElement;
  if (d.requestFullscreen && !document.fullscreenElement) d.requestFullscreen({ navigationUI:`hide` }).then(() => { LECT_FS = true; }).catch(() => {});
  if (S.mode !== `repaso`) go(`repaso`); else { renderAll(); topScroll(); }
}
function lectOff(){
  S.x.lect = false; save(); lectCerrarLista();
  if (document.fullscreenElement && LECT_FS) document.exitFullscreen().catch(() => {}); LECT_FS = false;
  renderAll(); topScroll();
}
document.addEventListener(`fullscreenchange`, () => { if (!document.fullscreenElement && LECT_FS){ LECT_FS = false; if (S.x.lect) lectOff(); } });
document.addEventListener(`keydown`, e => {
  if (!S.x.lect || S.mode !== `repaso` || document.querySelector(`.lupa`) || SH) return;
  const t = e.target; if (t && (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName))) return;
  if (e.key === `Escape` && !document.fullscreenElement) lectOff();   // ← → ya los maneja init.js
});
function lectCerrarLista(){ document.querySelectorAll(`.lfichas`).forEach(x => x.remove()); }
function lectLista(anchor){
  if (document.querySelector(`.lfichas`)){ lectCerrarLista(); return; }
  const all = filt(ALL.REPASO), key = selKey(), cur = all[Math.min(S.x.rpos[key] || 0, all.length - 1)];
  const box = el(`div`, `lfichas`); box.setAttribute(`role`, `dialog`); box.setAttribute(`aria-label`, `Fichas`);
  const temas = [...new Set(all.map(x => x.t))];
  temas.forEach(t => {
    box.append(el(`div`, `lfh`, `${TOPICS[t].n} · ${TOPICS[t].name}`));
    all.filter(x => x.t === t).forEach((x, j) => {
      const b = btn(`<span class="n">${S.x.seen[hash(x.title)] ? `✓` : j + 1}</span><span>${x.title}</span>`, `lfi` + (x === cur ? ` on` : ``) + (S.x.seen[hash(x.title)] ? ` ok` : ``), () => { lectCerrarLista(); S.x.rpos[key] = all.indexOf(x); save(); renderView(); topScroll(); });
      if (x === cur) b.setAttribute(`aria-current`, `true`); box.append(b);
    });
  });
  document.body.append(box);
  const r = anchor.getBoundingClientRect(), z = +S.x.zoom || 1;
  box.style.top = `${Math.round(r.bottom + 8)}px`; const bw = box.getBoundingClientRect().width; box.style.left = `${Math.round(Math.max(8, Math.min(r.right - bw, innerWidth - bw - 8)))}px`;
  const c = box.querySelector(`.on`); if (c) box.scrollTop = c.offsetTop - box.clientHeight / 2;
  setTimeout(() => { const f = e => { if (!box.contains(e.target) && !anchor.contains(e.target)){ lectCerrarLista(); document.removeEventListener(`pointerdown`, f, true); } }; document.addEventListener(`pointerdown`, f, true); }, 0);
}
const _vRepasoL = vRepaso;
vRepaso = function(v){
  _vRepasoL(v);
  const all = filt(ALL.REPASO);
  if (!S.x.lect){
    const tools = v.querySelector(`.rtools`);
    if (tools && all.length && !S.x.rall){ const b = btn(icon(`full`) + ` Pantalla completa`, `btn ghost`, lectOn); b.title = `Leer en pantalla completa, solo la ficha`; tools.append(b); }
    return;
  }
  if (!all.length || S.x.rall) return;
  const key = selKey(), i = Math.min(S.x.rpos[key] || 0, all.length - 1), it = all[i];
  const tema = all.filter(x => x.t === it.t), ti = tema.indexOf(it), phone = bp() === `phone`;
  v.querySelectorAll(`.rtop, .rsq, .rtit, .rsub, .intro`).forEach(x => x.remove());
  // barra de arriba
  const bar = el(`div`, `lbar`);
  const x = btn(`✕<span class="lrl"> Salir</span>`, `lb`, lectOff); x.title = `Salir de pantalla completa`; x.setAttribute(`aria-label`, x.title);
  const tt = el(`div`, `ltt`, `<b>${it.title}</b><small>${TOPICS[it.t].n} · Ficha ${ti + 1} de ${tema.length} · ${it.src}</small>`);
  bar.append(x, tt);
  if (ERRATA[it.title]){ const eb = btn(`⚠`, `lb errlb`, () => errModal(it)); eb.title = `Corrección del material en esta ficha`; eb.setAttribute(`aria-label`, eb.title); bar.append(eb); }
  const fl = btn(`☰<span class="lrl"> Fichas</span>`, `lb`, e => lectLista(fl)); fl.title = `Ver todas las fichas`; fl.setAttribute(`aria-label`, fl.title); fl.setAttribute(`aria-haspopup`, `dialog`);
  const zm = (+S.x.zoom || 1);
  const am = btn(`A−`, `lb`, () => { const k = ZOOMS.findIndex(v => v >= zm - .001); setZoom(ZOOMS[Math.max(0, k - 1)] || .9); }); am.setAttribute(`aria-label`, `Letra más pequeña`);
  const ap = btn(`A+`, `lb`, () => { const k = ZOOMS.findIndex(v => v > zm + .001); setZoom(k < 0 ? 2 : ZOOMS[k]); }); ap.setAttribute(`aria-label`, `Letra más grande`);
  const th = btn(icon(isDark() ? `sun` : `moon`), `lb`, () => { toggleTheme(); renderView(); }); th.setAttribute(`aria-label`, `Cambiar a modo ${isDark() ? `día` : `noche`}`);
  bar.append(fl, am, ap); if (!phone) bar.append(th);
  const pr = el(`div`, `lprog`, `<i style="width:${Math.round((ti + 1) / tema.length * 100)}%"></i>`);
  v.prepend(bar, pr);
  // flechas grandes a los lados (PC)
  if (!phone){
    const mk = (d, lbl) => { const b = btn(icon(d < 0 ? `left` : `right`), `lside ${d < 0 ? `l` : `r`}`, () => { const n = $(`.rdock [data-nav="${d < 0 ? `prev` : `next`}"]`); if (n && !n.disabled) n.click(); }); b.setAttribute(`aria-label`, lbl); b.disabled = d < 0 ? i === 0 : false; return b; };
    v.append(mk(-1, `Ficha anterior`), mk(1, i === all.length - 1 ? `Ir a Fichas` : `Ficha siguiente`));
  }
};
/* salir del modo al cambiar de sección */
const _goL = go;
go = function(mode){ if (S.x.lect && mode !== `repaso`){ S.x.lect = false; lectCerrarLista(); if (document.fullscreenElement && LECT_FS) document.exitFullscreen().catch(() => {}); LECT_FS = false; } return _goL.apply(this, arguments); };
const _renderAllL = renderAll;
renderAll = function(){ const on = !!S.x.lect && S.mode === `repaso`; document.documentElement.classList.toggle(`lect`, on); if (!on) lectCerrarLista(); return _renderAllL.apply(this, arguments); };
document.documentElement.classList.toggle(`lect`, !!S.x.lect && S.mode === `repaso`);

/* ---------- libro: el texto cabe en la pantalla ----------
   Ajusta el tamaño de letra del texto (entre 15 y 21 px, por el zoom) para que toda la ficha
   se lea sin bajar; si aun con 15 px no cabe, se deja con scroll normal.                     */
function lectFit(){
  const w = document.querySelector(`#view .rlc.libro`); if (!w) return;
  const t = w.querySelector(`.rleer`); if (!t) return;
  const top = w.getBoundingClientRect().top + scrollY, dock = document.querySelector(`.rdock`);
  const avail = innerHeight / (+S.x.zoom || 1) - Math.max(0, top - scrollY) / (+S.x.zoom || 1) - 24;
  let fs = 21; t.style.fontSize = `${fs}px`;
  while (fs > 15 && t.scrollHeight > avail){ fs -= 0.5; t.style.fontSize = `${fs}px`; }
  w.classList.toggle(`cabe`, t.scrollHeight <= avail);
  w.style.setProperty(`--lh`, `${Math.max(320, avail)}px`);
}
let LF_T = 0;
new MutationObserver(() => { if (!S.x.lect || LF_T) return; LF_T = requestAnimationFrame(() => { LF_T = 0; const w = document.querySelector(`#view .rlc.libro:not([data-fit])`); if (w){ w.dataset.fit = `1`; lectFit(); } }); }).observe(document.getElementById(`view`), { childList:true, subtree:true });
addEventListener(`resize`, () => { if (S.x.lect) lectFit(); });

/* ======================= AUDIO-REPASO (lectura en voz alta) ======================= */
const AU = { on:false, cards:[], ci:0, si:0, seg:0, sents:[], voices:[], sleepEnd:0, token:0 };
const AU_NATNAME = `Voz de estudio`;
function auCfg(){ if (!S.x.au) S.x.au = { rate:1, voice:``, check:true, pause:2, pos:{} }; return S.x.au; }
const AU_SUP = { '⁰':`0`, '¹':`1`, '²':`2`, '³':`3`, '⁴':`4`, '⁵':`5`, '⁶':`6`, '⁷':`7`, '⁸':`8`, '⁹':`9` };
const AU_SUB = { '₀':`0`, '₁':`1`, '₂':`2`, '₃':`3`, '₄':`4`, '₅':`5`, '₆':`6`, '₇':`7`, '₈':`8`, '₉':`9` };
function speakable(html){
  const d = document.createElement(`div`); d.innerHTML = html; d.querySelectorAll(`svg,script,style`).forEach(x => x.remove());
  d.querySelectorAll(`li`).forEach(li => li.append(`. `)); d.querySelectorAll(`p,h3,h4,tr,div`).forEach(x => x.append(` `));
  let t = d.textContent.replace(/\s+/g, ` `).trim();
  t = t.replace(/10\^?⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (m, e) => `diez a la menos ${[...e].map(c => AU_SUP[c]).join(``)}`)
       .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]*)⁺/g, (m, e) => ` ${e ? [...e].map(c => AU_SUP[c]).join(``) + ` ` : ``}más `).replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]*)⁻/g, (m, e) => ` ${e ? [...e].map(c => AU_SUP[c]).join(``) + ` ` : ``}menos `)
       .replace(/²/g, ` al cuadrado`).replace(/³/g, ` al cubo`).replace(/[⁰¹⁴⁵⁶⁷⁸⁹]/g, c => ` a la ${AU_SUP[c]}`)
       .replace(/[₀-₉]/g, c => AU_SUB[c]);
  const R = [[/⇌|⇄/g, ` en equilibrio con `], [/→|⟶/g, ` produce `], [/←/g, ` viene de `], [/≈/g, ` aproximadamente `], [/≠/g, ` distinto de `], [/≥/g, ` mayor o igual que `], [/≤/g, ` menor o igual que `], [/±/g, ` más o menos `], [/×/g, ` por `], [/·/g, `, `], [/°C/g, ` grados Celsius`], [/\bK\b(?=[\s.,;)])/g, ` kelvin`], [/Δ/g, ` delta `], [/α/g, ` alfa `], [/β/g, ` beta `], [/π/g, ` pi `], [/σ/g, ` sigma `],
    [/\bmol\/L\b/g, ` moles por litro`], [/\bg\/mL\b/g, ` gramos por mililitro`], [/\bg\/mol\b/g, ` gramos por mol`], [/\bg\/L\b/g, ` gramos por litro`], [/\bEq\/L\b/g, ` equivalentes por litro`], [/\bmEq\/L\b/g, ` miliequivalentes por litro`], [/\bmg\/dL\b/g, ` miligramos por decilitro`],
    [/(\d)\s?mL\b/g, `$1 mililitros`], [/(\d)\s?L\b/g, `$1 litros`], [/(\d)\s?mg\b/g, `$1 miligramos`], [/(\d)\s?kg\b/g, `$1 kilogramos`], [/(\d)\s?g\b/g, `$1 gramos`], [/(\d)\s?M\b/g, `$1 molar`], [/(\d)\s?N\b/g, `$1 normal`], [/(\d)\s?m\b/g, `$1 molal`], [/(\d)\s?atm\b/g, `$1 atmósferas`], [/(\d)\s?mmHg\b/g, `$1 milímetros de mercurio`],
    [/\bpKa\b/g, `pe ka`], [/\bpKb\b/g, `pe ka be`], [/\bpKw\b/g, `pe ka uve doble`], [/\bpOH\b/g, `pe o hache`], [/\bpH\b/g, `pe hache`], [/\bKa\b/g, `ka a`], [/\bKb\b/g, `ka be`], [/\bKw\b/g, `ka uve doble`], [/\bIUPAC\b/g, `iupac`], [/\bR−/g, `R `], [/−/g, ` `], [/\s=\s/g, ` igual a `], [/\//g, ` entre `]];
  R.forEach(([a, b]) => t = t.replace(a, b));
  // fórmulas químicas: separa los símbolos para que se lean (CH3CH2OH → C H 3 C H 2 O H)
  t = t.replace(/\b(?:[A-Z][a-z]?\d*){2,}\b/g, m => /^[A-Z][a-z]+$/.test(m) ? m : m.match(/[A-Z][a-z]?|\d+/g).join(` `));
  return t.replace(/\s+/g, ` `).replace(/\s([.,;:])/g, `$1`).replace(/([.:;])(\s*\.)+/g, `$1`).trim();
}
function splitSents(t){ return (t.match(/[^.!?;:]+[.!?;:]*/g) || [t]).map(s => s.trim()).filter(s => s.length > 1).reduce((a, s) => { if (a.length && (a[a.length - 1].length < 40)) a[a.length - 1] += ` ` + s; else a.push(s); return a; }, []); }
function cardScript(it){
  const c = auCfg(); const parts = [`${TOPICS[it.t].n}. ${it.title}.`];
  parts.push(speakable(it.body || ``));
  if (it.fig && FIG[it.fig] && FIG[it.fig].cap) parts.push(`En el dibujo: ` + speakable(FIG[it.fig].cap));
  if (c.check){ const q = checkQ(it); if (q){ parts.push(`Pregunta de repaso: ` + speakable(q.q)); parts.push({ wait:4 }); parts.push(`Respuesta: ` + speakable(q.o[0]) + `. ` + speakable(q.e || ``)); } }
  const out = []; parts.forEach(p => typeof p === `string` ? splitSents(p).forEach(s => out.push(s)) : out.push(p)); return out;
}
function auLoadVoices(){ try { const rank = v => (/natural|neural|online|premium|enhanced|mejorad|siri/i.test(v.name) ? 0 : /google/i.test(v.name) ? 1 : 2) + (/es[-_](MX|US|419|SV|CO|AR|GT|HN)/i.test(v.lang) ? 0 : .5); AU.voices = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang)).sort((a, b) => rank(a) - rank(b)); } catch(e){ AU.voices = []; } }
if (`speechSynthesis` in window){ auLoadVoices(); speechSynthesis.onvoiceschanged = () => { auLoadVoices(); if (S.mode === `escuchar` && !AU.on) renderView(); }; }
function auVoice(){ const c = auCfg(); return AU.voices.find(v => v.voiceURI === c.voice) || AU.voices[0] || null; }
function auKey(){ return selKey(); }
/* ---- voz natural grabada (archivos en audio/) ---- */
AU.idx = null; AU.idxTried = false;
function auLoadIdx(){ if (AU.idxTried) return Promise.resolve(AU.idx); AU.idxTried = true; if (!/^https?:/.test(location.protocol)) return Promise.resolve(null); return fetch(`audio/index.json`).then(r => r.ok ? r.json() : null).catch(() => null).then(j => { AU.idx = j; return j; }); }
function auNat(){ const c = auCfg(); return !!(AU.idx && !c.voice && AU.cards[AU.ci] && AU.idx[hash(AU.cards[AU.ci].title)]); }
function natSents(){ const e = AU.idx[hash(AU.cards[AU.ci].title)]; const segs = [[`b`, e.b]]; if (auCfg().check && e.q) segs.push([`q`, e.q]); const out = []; segs.forEach(([sg, x], si) => x.m.forEach(([t, txt], i) => out.push({ seg:si, sg, t, txt }))); return out; }
function auAudio(){ if (!AU.el){ AU.el = new Audio(); AU.el.preload = `auto`; AU.el.ontimeupdate = auSync; AU.el.onended = () => natNext(AU.token); AU.el.onerror = () => { if (AU.on){ AU.nat = false; AU.sents = []; ttsStep(AU.token); } }; } return AU.el; }
function auSync(){ if (!AU.nat || !AU.on) return; const t = AU.el.currentTime; let i = AU.si; const L = AU.sents; let best = -1; L.forEach((x, j) => { if (x.seg === AU.seg && x.t <= t + .05) best = j; }); if (best >= 0 && best !== i){ AU.si = best; auPaint(); } }
function natPlaySeg(tk){
  const segs = [`b`]; const e = AU.idx[hash(AU.cards[AU.ci].title)]; if (auCfg().check && e.q) segs.push(`q`);
  if (AU.seg >= segs.length){ natCardDone(tk); return; }
  const a = auAudio(); const src = `audio/${hash(AU.cards[AU.ci].title)}.${segs[AU.seg]}.mp3`;
  if (!a.src.endsWith(src)) a.src = src;
  a.playbackRate = auCfg().rate; try { a.preservesPitch = true; } catch(x){}
  if (AU.resumeAt){ a.currentTime = AU.resumeAt; AU.resumeAt = 0; }
  a.play().catch(() => { AU.on = false; auPaint(); });
}
function natNext(tk){ if (tk !== AU.token || !AU.on) return; AU.seg++; AU.resumeAt = 0; natPlaySeg(tk); }
function natCardDone(tk){ S.x.seen[hash(AU.cards[AU.ci].title)] = 1; AU.ci++; AU.si = 0; AU.seg = 0; AU.sents = []; auSavePos();
  if (AU.sleepEnd && Date.now() > AU.sleepEnd){ AU.sleepEnd = 0; auStop(); auRender(); return; }
  if (AU.ci >= AU.cards.length){ auStop(); AU.ci = 0; auSavePos(); celebrate(`repaso`, AU.cards.length, true); auRender(); return; }
  auRender(); setTimeout(() => { if (tk === AU.token && AU.on) auStart(tk); }, auCfg().pause * 1000); }
function auStop(){
  AU.on = false; AU.token++;
  if (AU.el && !AU.el.paused){ AU.resumeAt = AU.el.currentTime; AU.el.pause(); }
  try { speechSynthesis.cancel(); } catch(e){} auPaint();
}
function auStart(tk){
  AU.nat = auNat();
  if (AU.nat){ AU.sents = natSents(); if (AU.seg == null) AU.seg = 0; natPlaySeg(tk); }
  else { if (!AU.sents.length || AU.sents[0].txt) AU.sents = cardScript(AU.cards[AU.ci]); ttsStep(tk); }
  auPaint();
}
function auPlay(){
  AU.on = true; const tk = ++AU.token; try { speechSynthesis.cancel(); } catch(e){}
  if (`mediaSession` in navigator){ try { navigator.mediaSession.metadata = new MediaMetadata({ title: AU.cards[AU.ci] ? AU.cards[AU.ci].title : `Repaso`, artist:`Química · Audio-repaso`, artwork:[{ src:`icons/icon-512.png`, sizes:`512x512`, type:`image/png` }] }); navigator.mediaSession.setActionHandler(`play`, auPlay); navigator.mediaSession.setActionHandler(`pause`, auStop); navigator.mediaSession.setActionHandler(`nexttrack`, () => auJump(1)); navigator.mediaSession.setActionHandler(`previoustrack`, () => auJump(-1)); } catch(e){} }
  auLoadIdx().then(() => { if (tk === AU.token) auStart(tk); });
}
/* ---- voz del navegador: encola las frases seguidas para que no haya cortes ---- */
function ttsStep(tk){
  if (tk !== AU.token || !AU.on) return;
  if (AU.sleepEnd && Date.now() > AU.sleepEnd){ AU.sleepEnd = 0; auStop(); return; }
  if (!(`speechSynthesis` in window)){ auStop(); return; }
  if (AU.si >= AU.sents.length){ AU.seg = 0; natCardDone(tk); return; }
  const s = AU.sents[AU.si];
  if (typeof s === `object` && s.wait){ auPaint(); setTimeout(() => { if (tk !== AU.token) return; AU.si++; ttsStep(tk); }, s.wait * 1000); return; }
  let j = AU.si; const batch = []; while (j < AU.sents.length && typeof AU.sents[j] === `string`){ batch.push(j); j++; }
  const v = auVoice(), rate = auCfg().rate;
  batch.forEach((k, n) => {
    const u = new SpeechSynthesisUtterance(AU.sents[k]); u.lang = `es-ES`; if (v){ u.voice = v; u.lang = v.lang; } u.rate = rate;
    u.onstart = () => { if (tk !== AU.token) return; AU.si = k; auPaint(); };
    if (n === batch.length - 1) u.onend = () => { if (tk !== AU.token) return; AU.si = j; ttsStep(tk); };
    u.onerror = e => { if (tk !== AU.token || e.error === `interrupted` || e.error === `canceled`) return; if (n === batch.length - 1){ AU.si = j; ttsStep(tk); } };
    speechSynthesis.speak(u);
  });
  // Chrome corta la voz tras ~15 s seguidos: un "pausa/continúa" invisible lo evita
  clearInterval(AU.keep); AU.keep = setInterval(() => { if (tk !== AU.token || !speechSynthesis.speaking){ clearInterval(AU.keep); return; } if (!/Android|iPhone|iPad/.test(navigator.userAgent)){ speechSynthesis.pause(); speechSynthesis.resume(); } }, 10000);
}
function auJump(d){ const was = AU.on; auStop(); AU.ci = Math.max(0, Math.min(AU.cards.length - 1, AU.ci + d)); AU.si = 0; AU.seg = 0; AU.resumeAt = 0; AU.sents = []; if (AU.el){ AU.el.removeAttribute(`src`); } auSavePos(); auRender(); if (was) auPlay(); }
function auSavePos(){ auCfg().pos[auKey()] = AU.ci; save(); }
function auPaint(){
  const h = $(`#auread`); if (!h || !AU.cards[AU.ci]) return;
  if (!AU.sents.length) AU.sents = auNat() ? natSents() : cardScript(AU.cards[AU.ci]);
  h.innerHTML = AU.sents.map((s, i) => { const txt = typeof s === `string` ? s : s.txt; const cls = i === AU.si && AU.on ? `cur` : i < AU.si ? `past` : ``; return txt == null ? `<span class="aw ${cls}">⏸ piensa la respuesta…</span>` : `<span class="${cls}">${txt} </span>`; }).join(``);
  const cur = h.querySelector(`.cur`); if (cur && AU.on) cur.scrollIntoView({ block:`nearest`, behavior:`smooth` });
  const pb = $(`#auplay`); if (pb) pb.innerHTML = AU.on ? `⏸ Pausar` : `▶ Escuchar`;
}
function auRender(){ if (S.mode === `escuchar`) renderView(); }
function vEscuchar(v){
  const c = auCfg(); const all = filt(ALL.REPASO);
  if (!all.length){ v.append(el(`div`, `empty`, `No hay tarjetas de repaso en los temas elegidos.`)); return; }
  if (!AU.idxTried){ auLoadIdx().then(j => { if (j && S.mode === `escuchar`) renderView(); }); }
  if (!AU.idx && !(`speechSynthesis` in window)){ v.append(el(`div`, `empty`, `Este navegador no puede leer en voz alta. Prueba con Chrome, Edge o Safari actualizados.`)); return; }
  const k = auKey(); if (AU.key !== k){ auStop(); AU.key = k; AU.cards = all; AU.ci = Math.min(c.pos[k] || 0, all.length - 1); AU.si = 0; AU.seg = 0; AU.resumeAt = 0; AU.sents = []; }
  const it = AU.cards[AU.ci];
  const p = el(`article`, `card plain aup`); p.style.setProperty(`--c`, `var(--${it.t})`);
  p.innerHTML = `<div class="aumeta"><span class="chip">${TOPICS[it.t].n}</span><span class="muted">Tarjeta ${AU.ci + 1} de ${AU.cards.length}</span></div><h3>${it.title}</h3><div class="bar"><i style="width:${(AU.ci) / AU.cards.length * 100}%"></i></div>`;
  const ctr = el(`div`, `auctr`);
  const prev = btn(`⏮`, `btn ghost`, () => auJump(-1)); prev.setAttribute(`aria-label`, `Tarjeta anterior`);
  const play = btn(AU.on ? `⏸ Pausar` : `▶ Escuchar`, `btn acc auplay`, () => AU.on ? auStop() : auPlay()); play.id = `auplay`;
  const nxt = btn(`⏭`, `btn ghost`, () => auJump(1)); nxt.setAttribute(`aria-label`, `Tarjeta siguiente`);
  ctr.append(prev, play, nxt); p.append(ctr);
  const opts = el(`div`, `auopts`);
  const rs = document.createElement(`select`); rs.className = `nedit`; rs.setAttribute(`aria-label`, `Velocidad`); rs.innerHTML = [.8, .9, 1, 1.15, 1.3, 1.5].map(r => `<option value="${r}">${r}×</option>`).join(``); rs.value = String(c.rate); rs.onchange = () => { c.rate = +rs.value; save(); if (AU.on && AU.nat && AU.el) AU.el.playbackRate = c.rate; else if (AU.on){ auStop(); auPlay(); } };
  const vs = document.createElement(`select`); vs.className = `nedit`; vs.setAttribute(`aria-label`, `Voz`);
  const natOpt = AU.idx ? `<option value="">${AU_NATNAME} · natural (recomendada)</option>` : ``;
  vs.innerHTML = natOpt + (AU.voices.length ? AU.voices.map(x => `<option value="${x.voiceURI}">${x.name.replace(/Microsoft |Google /, ``)} (${x.lang})</option>`).join(``) : (natOpt ? `` : `<option value="tts">Voz del sistema</option>`));
  vs.value = AU.idx && (!c.voice || c.voice === ``) ? `` : (auVoice() ? auVoice().voiceURI : ``);
  vs.onchange = () => { const was = AU.on; auStop(); c.voice = vs.value; if (c.voice && !AU.voices.some(x => x.voiceURI === c.voice)) c.voice = ``; if (AU.idx && c.voice && c.voice !== ``) c.voiceTts = true; AU.sents = []; AU.seg = 0; AU.resumeAt = 0; if (AU.el) AU.el.removeAttribute(`src`); save(); if (was) auPlay(); else auPaint(); };
  const sl = document.createElement(`select`); sl.className = `nedit`; sl.setAttribute(`aria-label`, `Apagar en`); sl.innerHTML = `<option value="0">Sin temporizador</option><option value="15">Apagar en 15 min</option><option value="30">Apagar en 30 min</option><option value="60">Apagar en 1 hora</option>`; sl.value = AU.sleepEnd ? String(AU.sleepMin || 0) : `0`; sl.onchange = () => { AU.sleepMin = +sl.value; AU.sleepEnd = AU.sleepMin ? Date.now() + AU.sleepMin * 60000 : 0; };
  opts.append(fld(`Velocidad`, rs), fld(`Voz`, vs), fld(`Temporizador`, sl), fld(`Preguntarme al final de cada tarjeta`, toggleBtn(c.check, x => { const was = AU.on; auStop(); c.check = x; AU.sents = []; AU.seg = 0; AU.resumeAt = 0; save(); if (was) auPlay(); else auPaint(); }), `Lee una pregunta, te da 4 segundos para pensar y luego la respuesta`));
  p.append(opts); v.append(p);
  const rd = el(`div`, `card plain auread`); rd.id = `auread`; v.append(rd);
  v.append(el(`p`, `muted`, AU.idx ? `La voz natural sigue sonando con la pantalla bloqueada y se controla desde la pantalla de bloqueo, como la música. Usa audífonos para concentrarte mejor.` : `Consejo: usa audífonos y deja la pantalla encendida. En algunos teléfonos la lectura se detiene al bloquear la pantalla; si pasa, toca Escuchar y sigue donde quedó.`));
  setTimeout(auPaint, 0);
}
/* botón "Escuchar desde aquí" en el repaso */
const _vRepasoA = vRepaso;
vRepaso = function(v){ _vRepasoA(v); const bar = v.querySelector(`.deckbar, .dbar`) || v.firstElementChild; if (!bar) return; const b = btn(`🔊 Escuchar`, `btn ghost`, () => { const all = filt(ALL.REPASO); const i = S.x.rpos[selKey()] || 0; auCfg().pos[selKey()] = i; AU.key = null; save(); go(`escuchar`); setTimeout(auPlay, 200); }); b.title = `Escuchar el repaso desde esta tarjeta`; bar.append(b); };
document.addEventListener(`visibilitychange`, () => { if (document.visibilityState === `visible` && AU.on && !AU.nat && !speechSynthesis.speaking){ auPlay(); } });

/* ======================= NOTIFICACIONES EN EL TELÉFONO (Firebase Cloud Messaging) =======================
   El token de cada dispositivo se guarda en users/{uid}.push.tokens. Un proceso automático en GitHub
   (cada 15 min) revisa la agenda y el repaso de hoy y envía los avisos, aunque la página esté cerrada.   */
function pushCfg(){ if (!S.x.push) S.x.push = { on:false, hour:19, am:7, daily:true, ev:true, motiv:true }; return S.x.push; }
function pushAvailable(){ return syncAvailable() && window.FB_VAPID && `Notification` in window && `serviceWorker` in navigator && `PushManager` in window; }
function isIOS(){ return /iPhone|iPad|iPod/.test(navigator.userAgent); }
function isStandalone(){ return matchMedia(`(display-mode: standalone)`).matches || navigator.standalone === true; }
async function pushEnable(msg){
  const say = t => { if (msg) msg.innerHTML = t; };
  if (!SY.user){ say(`Primero inicia sesión con Google en “Guardar en la nube”.`); return; }
  if (isIOS() && !isStandalone()){ say(`En iPhone primero instala la página: botón Compartir → <b>Agregar a pantalla de inicio</b>. Luego ábrela desde el ícono y activa aquí las notificaciones.`); return; }
  try {
    const perm = await Notification.requestPermission();
    if (perm !== `granted`){ say(`No diste permiso. Puedes activarlo en los ajustes del navegador para este sitio.`); return; }
    say(`Activando…`);
    if (!firebase.messaging) await loadScript(`lib/firebase-messaging-compat.js`);
    const reg = await navigator.serviceWorker.ready;
    const token = await firebase.messaging().getToken({ vapidKey:window.FB_VAPID, serviceWorkerRegistration:reg });
    if (!token) throw new Error(`sin token`);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || `America/El_Salvador`;
    await docRef().set({ push:{ tokens:firebase.firestore.FieldValue.arrayUnion(token), tz } }, { merge:true });
    try { localStorage.setItem(`quimica_pushtoken`, token); } catch(e){}
    const c = pushCfg(); c.on = true; save();
    say(`¡Listo! Las notificaciones están activas en este dispositivo.`);
    setTimeout(renderView, 1200);
  } catch(e){ say(`No se pudo activar (${e.message || e}). Revisa tu conexión e inténtalo de nuevo.`); }
}
async function pushDisable(msg){
  let tk = null; try { tk = localStorage.getItem(`quimica_pushtoken`); } catch(e){}
  try { if (tk && SY.user) await docRef().set({ push:{ tokens:firebase.firestore.FieldValue.arrayRemove(tk) } }, { merge:true }); if (firebase.messaging) await firebase.messaging().deleteToken(); } catch(e){}
  try { localStorage.removeItem(`quimica_pushtoken`); } catch(e){}
  pushCfg().on = false; save(); renderView();
}
function pushTest(msg){
  navigator.serviceWorker.ready.then(r => r.showNotification(`Química · prueba`, { body:`Así se verán tus recordatorios, ${S.x.name || `Gaby`}.`, icon:`icons/icon-192.png`, badge:`icons/icon-192.png` })).catch(() => { if (msg) msg.textContent = `No se pudo mostrar la prueba.`; });
}
function pushCard(){
  if (!pushAvailable()) return null;
  const c = pushCfg(); const box = el(`article`, `card plain`);
  let mine = false; try { mine = !!localStorage.getItem(`quimica_pushtoken`) && Notification.permission === `granted`; } catch(e){}
  box.append(el(`h3`, ``, `Notificaciones en este dispositivo`));
  box.append(el(`p`, `muted`, `Te avisa aunque la página esté cerrada: tu repaso del día, tus parciales y eventos de la agenda, y una frase para empezar el día.`));
  const msg = el(`p`, `muted`); msg.setAttribute(`aria-live`, `polite`);
  const r = el(`div`, `btnrow`);
  if (!mine) r.append(btn(`Activar notificaciones`, `btn acc`, () => pushEnable(msg)));
  else r.append(btn(`Enviar prueba`, `btn ghost`, () => pushTest(msg)), btn(`Desactivar en este dispositivo`, `btn ghost`, () => pushDisable(msg)));
  box.append(r, msg);
  const hs = document.createElement(`select`); hs.className = `nedit`; hs.innerHTML = Array.from({ length:17 }, (_, i) => i + 6).map(h => `<option value="${h}">${h > 12 ? h - 12 : h}:00 ${h >= 12 ? `p. m.` : `a. m.`}</option>`).join(``); hs.value = String(c.hour); hs.onchange = () => { c.hour = +hs.value; save(); };
  const am = document.createElement(`select`); am.className = `nedit`; am.innerHTML = [5, 6, 7, 8, 9].map(h => `<option value="${h}">${h}:00 a. m.</option>`).join(``); am.value = String(c.am); am.onchange = () => { c.am = +am.value; save(); };
  box.append(fld(`Recordatorio de repaso diario`, toggleBtn(c.daily, v => { c.daily = v; save(); }), `Solo si tienes repasos pendientes`), fld(`Hora del recordatorio diario`, hs));
  box.append(fld(`Parciales y eventos de la agenda`, toggleBtn(c.ev, v => { c.ev = v; save(); }), `Según el recordatorio que elegiste en cada evento, y 1 hora antes si tiene hora`));
  box.append(fld(`Frase para empezar el día`, toggleBtn(c.motiv, v => { c.motiv = v; save(); })), fld(`Hora de la frase y avisos de la mañana`, am));
  box.append(el(`p`, `muted`, `Los avisos pueden llegar con unos minutos de diferencia. ${isIOS() ? `En iPhone solo funcionan con la página instalada en la pantalla de inicio.` : ``}`));
  return box;
}

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
function syncDirty(){ const m = syncMeta(); m.dirty = true; m.changed = Date.now(); setMeta(m); if (SY.user){ clearTimeout(SY.timer); SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 2000); setSync(`pend`); } }

async function syncInit(){
  if (!syncAvailable()) return;
  setSync(`load`);
  try {
    if (!window.firebase){ await loadScript(`lib/firebase-app-compat.js`); await loadScript(`lib/firebase-auth-compat.js`); await loadScript(`lib/firebase-firestore-compat.js`); }
    if (!firebase.apps.length) firebase.initializeApp(window.FB_CONFIG);
    SY.db = firebase.firestore(); SY.on = true;
    firebase.auth().onAuthStateChanged(u => { SY.user = u; if (SY.unsub){ SY.unsub(); SY.unsub = null; } if (u){ syncPull().then(syncListen); } else setSync(`out`); });
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

/* ---------- mezcla automática entre dispositivos (ya no se pregunta qué progreso conservar) ----------
   · Respuestas y contadores (S.st): se suma lo mejor de ambos (máximo de cada contador).
   · Listas con id (eventos, pendientes, notas, páginas del cuaderno): por elemento, gana el cambio más reciente;
     lo borrado en cualquier dispositivo queda borrado (x.del / cuaderno.del).
   · "Comprueba lo que leíste" (x.chk) y "Continúa donde quedaste" (x.last): gana el avance más reciente.
   · Lo que es solo de la pantalla (temas elegidos, pestañas abiertas, vista de la agenda): se queda el de cada dispositivo.
   · Todo lo demás: gana el valor del dispositivo que cambió más recientemente.                                      */
const DEVID = (() => { try { let d = localStorage.getItem(`quimica_dev`); if (!d){ d = Math.random().toString(36).slice(2, 10); localStorage.setItem(`quimica_dev`, d); } return d; } catch(e){ return `x`; } })();
const LOCAL_X = [`sm`, `ptab`, `agv`, `cn`, `nrq`, `nrt`, `rtab`, `rtabFor`, `qw`, `qd`, `syncHide`, `figMode`, `figPos`, `figMin`, `panelOff`, `zoom`, `lect`, `apPg`, `dk`];
const tsOf = o => (o && (o.upd || o.updated || o.t || o.created)) || 0;
function mergeVal(a, b, bn, del){
  if (a === undefined) return b; if (b === undefined) return a;
  if (Array.isArray(a) && Array.isArray(b)){
    const isId = arr => arr.length > 0 && arr.every(x => x && typeof x === `object` && !Array.isArray(x) && `id` in x);
    if ((isId(a) || isId(b)) && (isId(a) || !a.length) && (isId(b) || !b.length)){
      const m = new Map(), order = bn ? b.concat(a) : a.concat(b);
      order.forEach(x => { const y = m.get(x.id); if (!y) m.set(x.id, x); else { const tx = tsOf(x), ty = tsOf(y); if (tx > ty) m.set(x.id, x); } });
      const pick = new Map(); a.forEach(x => pick.set(x.id, x)); b.forEach(y => { const x = pick.get(y.id); if (!x || tsOf(y) > tsOf(x) || (tsOf(y) === tsOf(x) && bn)) pick.set(y.id, y); });
      return [...m.keys()].map(id => pick.get(id)).filter(x => !(del && del[x.id]));
    }
    return bn ? b : a;
  }
  if (a && b && typeof a === `object` && typeof b === `object`){ const o = {}; new Set(Object.keys(a).concat(Object.keys(b))).forEach(k => { o[k] = mergeVal(a[k], b[k], bn, del); }); return o; }
  return bn ? b : a;
}
const newest = (a, b, bn) => !a ? b : !b ? a : (tsOf(b) > tsOf(a) || (tsOf(b) === tsOf(a) && bn)) ? b : a;
function mergeState(L, R, bn){
  const o = Object.assign({}, R, L);
  o.sel = L.sel || R.sel; o.mode = L.mode || R.mode; o.simFb = L.simFb || R.simFb;
  o.st = {}; new Set(Object.keys(L.st || {}).concat(Object.keys(R.st || {}))).forEach(k => { const a = (L.st || {})[k], b = (R.st || {})[k];
    o.st[k] = Array.isArray(a) && Array.isArray(b) ? a.map((v, i) => Math.max(v || 0, b[i] || 0)) : typeof a === `number` && typeof b === `number` ? Math.max(a, b) : a === undefined ? b : a; });
  o.err = bn ? (R.err || []) : (L.err || []);
  o.box = mergeVal(L.box || {}, R.box || {}, bn);
  const lx = L.x || {}, rx = R.x || {}, del = Object.assign({}, rx.del || {}, lx.del || {});
  const cut = Date.now() - 90 * 864e5; Object.keys(del).forEach(k => { if (del[k] < cut) delete del[k]; });
  const x = {};
  new Set(Object.keys(lx).concat(Object.keys(rx))).forEach(k => {
    if (LOCAL_X.includes(k)) x[k] = k in lx ? lx[k] : rx[k];
    else if (k === `last`) x[k] = newest(lx[k], rx[k], bn);
    else if (k === `chk`){ const c = {}; new Set(Object.keys(lx.chk || {}).concat(Object.keys(rx.chk || {}))).forEach(q => { c[q] = newest((lx.chk || {})[q], (rx.chk || {})[q], bn); }); x[k] = c; }
    else if (k === `del`) x[k] = del;
    else x[k] = mergeVal(lx[k], rx[k], bn, del);
  });
  o.x = x; return o;
}
function mergeDatos(L, R, bn){
  const out = Object.assign({}, R, L);
  Object.keys(Object.assign({}, L, R)).forEach(k => {
    if (!(k in L)) return out[k] = R[k]; if (!(k in R) || L[k] === R[k]) return out[k] = L[k];
    let a, b; try { a = JSON.parse(L[k]); b = JSON.parse(R[k]); } catch(e){ return out[k] = bn ? R[k] : L[k]; }
    let m;
    if (k === KEY) m = mergeState(a || {}, b || {}, bn);
    else if (k === `quimica_cuaderno` && a && b){ const del = Object.assign({}, b.del || {}, a.del || {}); m = { nb:mergeVal(a.nb || [], b.nb || [], bn, del), sec:mergeVal(a.sec || [], b.sec || [], bn, del), pg:mergeVal(a.pg || [], b.pg || [], bn, del), del }; }
    else m = mergeVal(a, b, bn);
    out[k] = JSON.stringify(m);
  });
  return out;
}
/* aplica lo que llegó de la nube sin recargar la página */
function applyDatos(d){
  const prev = localData(), changed = Object.keys(d).filter(k => BACKUP_KEYS.includes(k) && d[k] !== prev[k]);
  if (!changed.length) return false;
  SY.applying = true; changed.forEach(k => { try { localStorage.setItem(k, d[k]); } catch(e){} }); SY.applying = false;
  if (changed.some(k => k !== KEY && k !== `quimica_cuaderno`)){ location.reload(); return true; } // videos, dudas o paquetes nuevos
  if (changed.includes(KEY)){ try { const o = JSON.parse(d[KEY]) || {}; S.st = o.st || {}; S.err = o.err || []; S.box = o.box || {}; S.x = o.x || {}; initX(); if (typeof syncETYPE === `function`) syncETYPE(); } catch(e){} }
  if (changed.includes(`quimica_cuaderno`)){ try { CN = JSON.parse(d.quimica_cuaderno); } catch(e){} }
  syncRefresh(); return true;
}
function syncRefresh(){
  const a = document.activeElement;
  if ((typeof SH !== `undefined` && SH) || (a && (a.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)))){ SY.later = true; return; }
  SY.later = false; const y = scrollY;
  try { renderHead(); renderView(); renderPanel(); renderBnav(); } catch(e){}
  scrollTo(0, y);
}
setInterval(() => { if (SY.later) syncRefresh(); }, 3000);
/* lo de la nube, mezclado con lo de este dispositivo */
function syncReceive(r){
  const m = syncMeta();
  if (!r || !r.datos) return false;
  if ((r.updated || 0) <= (m.rev || 0)) return false;
  if (r.devId === DEVID && r.updated === m.rev) return false;
  const local = localData();
  const merged = m.dirty || !m.rev ? mergeDatos(local, r.datos, (r.updated || 0) > (m.changed || 0)) : mergeDatos(local, r.datos, true);
  const igual = Object.keys(r.datos).every(k => !BACKUP_KEYS.includes(k) || merged[k] === r.datos[k]) && Object.keys(merged).every(k => k in r.datos);
  applyDatos(merged);
  const n = syncMeta(); n.uid = SY.user.uid; n.rev = r.updated; n.at = Date.now(); n.dirty = !igual; setMeta(n);
  return !igual;
}
async function syncPull(){
  if (!SY.user || SY.busy) return; SY.busy = true; setSync(`sync`);
  try {
    const snap = await docRef().get({ source:`server` }); const r = snap.exists ? snap.data() : null; const m = syncMeta();
    if (m.uid && m.uid !== SY.user.uid){ m.rev = 0; m.dirty = true; }
    m.uid = SY.user.uid; setMeta(m);
    SY.busy = false;
    if (!r || !r.datos) return syncPush();
    const falta = syncReceive(r);
    if (falta || syncMeta().dirty) return syncPush(); setSync(`ok`);
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo leer la nube.` : ``); }
}
/* tiempo real: lo que se hace en un dispositivo aparece solo en los demás */
function syncListen(){
  if (!SY.user || SY.unsub) return;
  try {
    SY.unsub = docRef().onSnapshot(snap => {
      if (snap.metadata && (snap.metadata.hasPendingWrites || snap.metadata.fromCache)) return;
      const r = snap.exists ? snap.data() : null; if (!r || SY.busy) return;
      if (syncReceive(r)) syncDirty(); else if (!syncMeta().dirty) setSync(`ok`);
    }, () => { SY.unsub = null; });
  } catch(e){}
}
async function syncPush(){
  if (!SY.user) return; if (SY.busy){ SY.again = true; return; } SY.busy = true; setSync(`sync`);
  const m0 = syncMeta(), changed0 = m0.changed || 0;
  try {
    let merged = null, rev = 0;
    await SY.db.runTransaction(async tx => {
      merged = null; const ref = docRef(); const snap = await tx.get(ref); const r = snap.exists ? snap.data() : null; const m = syncMeta();
      let d = localData();
      if (r && r.datos && (r.updated || 0) > (m.rev || 0)){ d = mergeDatos(d, r.datos, (r.updated || 0) > (m.changed || 0)); merged = d; }
      rev = Math.max(Date.now(), ((r && r.updated) || 0) + 1);
      tx.set(ref, { datos:d, updated:rev, dev:devName(), devId:DEVID }, { merge:true });
    });
    if (merged) applyDatos(merged);
    const m = syncMeta(); const more = (m.changed || 0) > changed0;
    m.uid = SY.user.uid; m.rev = rev; m.at = Date.now(); m.dirty = more; setMeta(m);
    SY.busy = false; setSync(more ? `pend` : `ok`);
    if (more || SY.again){ SY.again = false; clearTimeout(SY.timer); SY.timer = setTimeout(() => { SY.timer = null; syncPush(); }, 1500); }
  } catch(e){ SY.busy = false; setSync(navigator.onLine ? `err` : `offline`, navigator.onLine ? `No se pudo guardar en la nube.` : ``); }
}
function syncApply(r){ syncReceive(r); }
function syncConflict(r){ syncReceive(r); syncPush(); }
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
initX(); syncETYPE(); if (Array.isArray(S.x.known)) TORDER.forEach(t => { if (!S.x.known.includes(t)) S.sel.add(t); }); S.x.known = TORDER.slice(); applyTheme(); injectPackCss(); versionNotice();
if (!SECS.some(sc => sc.modes.some(m => m[0] === S.mode))) S.mode = `inicio`;
renderAll();
setInterval(pomoTick, 1000);
document.addEventListener(`keydown`, e => {
  if (e.key === `Escape`){ if ($(`#focusroot`).children.length) closeFocus(); else if (SH) closeSheet(); return; }
  const tag = (document.activeElement && document.activeElement.tagName) || ``;
  if (S.mode === `repaso` && !S.x.rall && !SH && !/INPUT|SELECT|TEXTAREA/.test(tag) && (e.key === `ArrowRight` || e.key === `ArrowLeft`)){ const b = document.querySelector(e.key === `ArrowRight` ? `.decknav [data-nav=next]` : `.decknav [data-nav=prev]`); if (b && !b.disabled){ e.preventDefault(); b.click(); } }
});
try { matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`, () => renderHead()); } catch(e){}
let BPNOW = bp(); addEventListener(`resize`, () => { const b = bp(); if (b !== BPNOW){ BPNOW = b; renderAll(); } });
document.addEventListener(`visibilitychange`, () => { if (!document.hidden) pomoTick(); });

/* Para generar PDF vectoriales desde fuera (impresión del examen): */
window.__doc = (kind, code) => { const d = buildDoc(kind, code ? buildExam(code) : undefined); [...document.body.children].forEach(c => { if (![`STYLE`,`LINK`,`TITLE`,`META`].includes(c.tagName)) c.remove(); }); document.body.className = `printing`; document.body.append(d.root); return d.spec.file; };
window.__buildExam = buildExam;
syncInit();
motOpen();
