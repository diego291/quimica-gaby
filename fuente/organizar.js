/* ======================= ORGANIZAR · PENDIENTES, NOTAS RÁPIDAS, PANEL 📅, INICIO Y BARRA INFERIOR =======================
   S.x.agn = [{ id, kind:`task`|`note`, text, date, time, color, tags:[], pinned, done, t (tema), created, upd }]   */
const NCOL = [[`verde`,`#33B679`],[`ambar`,`#F6BF26`],[`azul`,`#039BE5`],[`rojo`,`#E67C73`],[`morado`,`#8E24AA`],[`gris`,`#616161`]];
const ncol = k => (NCOL.find(c => c[0] === k) || NCOL[5])[1];
const agn = () => S.x.agn || (S.x.agn = []);
const nid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const tagsOf = txt => [...new Set((String(txt).match(/#[\wáéíóúñü]+/gi) || []).map(t => t.toLowerCase()))];
function nSave(n){ n.upd = Date.now(); n.tags = tagsOf(n.text); const L = agn(), i = L.findIndex(x => x.id === n.id); if (i >= 0) L[i] = n; else L.unshift(n); save(); afterAg(); if ([`pendientes`,`notasr`].includes(S.mode)) renderView(); }
function nDel(n){ S.x.agn = agn().filter(x => x.id !== n.id); save(); afterAg(); if ([`pendientes`,`notasr`].includes(S.mode)) renderView(); }

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
  if (hechos.length){ const d = el(`details`, `tkdone`); d.append(el(`summary`, ``, `Hechos · ${hechos.length}`)); hechos.slice(0, 40).forEach(n => d.append(taskRow(n))); const cl = btn(`Borrar los hechos`, `linkbtn`, () => { if (confirm(`¿Borrar ${hechos.length} pendientes hechos?`)){ S.x.agn = agn().filter(n => !(n.kind === `task` && n.done)); save(); renderView(); } }); d.append(cl); v.append(d); }
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
