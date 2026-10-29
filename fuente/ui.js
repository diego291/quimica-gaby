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
  const _was = S.x.seen[hash(it.title)]; S.x.seen[hash(it.title)] = 1; motSeen(all, it, _was); S.x.last = { mode:`repaso`, sel:selList(), i, n:all.length, title:it.title };
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
