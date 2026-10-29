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
vInicio = function(v){ _vInicioE(v); const w = el(`div`, `twocol`); w.append(hoyCard()); const p = parcialCard(); if (p) w.append(p); const kids = [...v.children]; const at = kids.find(x => !x.classList.contains(`alert`) && !x.dataset.sync && x.tagName !== `P`); v.insertBefore(w, at || null); };
