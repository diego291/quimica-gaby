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
  tag:`<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>`
};
const icon = (n, cls = `ic`) => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ``}</svg>`;
const SECS = [
  { k:`inicio`, n:`Inicio`, ic:`home`, modes:[[`inicio`,`Hoy`],[`guia`,`Cómo estudiar`],[`progreso`,`Mi progreso`]] },
  { k:`estudiar`, n:`Estudiar`, ic:`book`, modes:[[`repaso`,`Repaso`],[`escuchar`,`Escuchar`],[`fichas`,`Fichas`],[`videos`,`Videos`],[`formulario`,`Formulario`]] },
  { k:`practicar`, n:`Practicar`, ic:`pencil`, modes:[[`hoy`,`Para hoy`],[`preguntas`,`Preguntas`],[`ejercicios`,`Ejercicios`],[`practica`,`Práctica`],[`formula`,`¿Qué fórmula?`],[`lab`,`Laboratorio`]] },
  { k:`examen`, n:`Examen`, ic:`clip`, modes:[[`simulacro`,`Simulacro`],[`impreso`,`Parcial impreso`]] },
  { k:`organizar`, n:`Organizar`, ic:`cal`, modes:[[`agenda`,`Agenda`],[`pendientes`,`Pendientes`],[`notasr`,`Notas`],[`cuaderno`,`Cuaderno`],[`notas`,`Mis notas`]] },
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
  x.plog = x.plog || {}; x.ev = x.ev || []; x.seen = x.seen || {}; x.days = x.days || []; x.sm = x.sm || {}; x.rpos = x.rpos || {}; x.ptab = x.ptab || {}; x.chkModo = x.chkModo || {};
  if (!x.name) x.name = `Gaby`;
  if (x.sm.inicio === `notas`) delete x.sm.inicio; // "Mis notas" pasó a Organizar
  if (x.pst.run && x.pst.end <= Date.now()){ if (x.pst.phase === `study`) logPomo(); x.pst.run = false; pomoAdvance(); }
}
function markDay(){ const t = todayStr(), d = S.x.days || (S.x.days = []); if (!d.includes(t)){ d.push(t); if (d.length > 90) d.splice(0, d.length - 90); } }
function streak(){ const d = new Set(S.x.days || []); let s = todayStr(); if (!d.has(s)) s = addDays(s, -1); let n = 0; while (d.has(s)){ n++; s = addDays(s, -1); } return n; }

/* ---------- navegación ---------- */
function go(mode){ if (S.mode === `escuchar` && mode !== `escuchar` && typeof auStop === `function` && AU.on) auStop(); S.mode = mode; S.x.sm[secOf(mode).k] = mode; if (![`inicio`,`guia`,`progreso`,`preguntar`,`notas`,`agenda`,`pendientes`,`notasr`,`cuaderno`].includes(mode)) S.x.last = Object.assign(S.x.last && S.x.last.mode === mode ? S.x.last : {}, { mode, sel:selList(), t:Date.now() }); save(); SIM.on = false; stopTick(); closeSheet(); renderAll(); topScroll(); }
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
  const p = $(`#panel`); p.innerHTML = ``; const np = [`agenda`, `cuaderno`].includes(S.mode); $(`#app`).classList.toggle(`nopanel`, np); if (bp() !== `wide` || np) return;
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
  if (libro){ txt.prepend(el(`h2`, `ltit`, it.title)); }
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
  tools.append(btn(`Ver todas`, `btn ghost`, () => { S.x.rall = true; save(); renderView(); renderPanel(); }));
  top.append(lb, tools); v.append(top);
  const sq = el(`nav`, `rsq`); sq.setAttribute(`aria-label`, `Fichas del ${TOPICS[it.t].n}`); sq.style.setProperty(`--c`, `var(--${it.t})`);
  tema.forEach((x, j) => { const b = btn(String(j + 1), (S.x.seen[hash(x.title)] ? `ok` : ``) + (x === it ? ` cur` : ``), () => jump(all.indexOf(x)));
    b.title = x.title; b.setAttribute(`aria-label`, `Ficha ${j + 1}: ${x.title}`); if (x === it) b.setAttribute(`aria-current`, `true`); sq.append(b); });
  v.append(sq); requestAnimationFrame(() => { const c = sq.querySelector(`.cur`); if (c && sq.scrollWidth > sq.clientWidth) sq.scrollLeft = c.offsetLeft - sq.clientWidth / 2 + c.offsetWidth / 2; });
  v.append(el(`h2`, `rtit`, it.title));
  v.append(el(`p`, `rsub`, `Ficha ${ti + 1} de ${tema.length} · Fuente: ${it.src}${all.length > tema.length ? ` · tarjeta ${i + 1} de ${all.length}` : ``}`));
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
