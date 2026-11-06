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
  cnHydrate(ed);
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
  c.querySelectorAll(`img[data-img]`).forEach(i => { i.removeAttribute(`src`); i.classList.remove(`sel`); });
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
  const a = (t, f, lab) => { const b = btn(t, `tbb`, () => { f(); later(); place(); }); b.setAttribute(`aria-label`, lab || t); b.addEventListener(`mousedown`, e => e.preventDefault()); tbx.append(b); };
  tbx.append(el(`span`, `muted`, `Imagen:`));
  [25, 50, 75, 100].forEach(n => a(`${n}%`, () => { im.style.width = `${n}%`; }));
  a(`⯇`, () => { im.className = `sel al-l`; }, `Alinear a la izquierda`); a(`⯀`, () => { im.className = `sel al-c`; }, `Centrar`); a(`⯈`, () => { im.className = `sel al-r`; }, `Alinear a la derecha`);
  a(`🗑`, () => { im.remove(); tbx.hidden = true; tbx._img = null; ed.querySelectorAll(`.cnrsz`).forEach(x => x.remove()); }, `Quitar imagen`);
  a(`Listo`, () => { im.classList.remove(`sel`); tbx.hidden = true; tbx._img = null; ed.querySelectorAll(`.cnrsz`).forEach(x => x.remove()); });
  // tirador para cambiar el tamaño
  const h = el(`span`, `cnrsz`); h.contentEditable = `false`; h.setAttribute(`aria-hidden`, `true`);
  const place = () => { if (!im.isConnected || !im.classList.contains(`sel`)){ h.remove(); return; } const r = im.getBoundingClientRect(), e = ed.getBoundingClientRect(); h.style.left = `${r.right - e.left - 9}px`; h.style.top = `${r.bottom - e.top - 9 + ed.scrollTop}px`; };
  ed.append(h); place();
  h.onpointerdown = ev => { ev.preventDefault(); h.setPointerCapture(ev.pointerId); const e0 = ed.getBoundingClientRect(), r0 = im.getBoundingClientRect(); const mv = e => { const w = Math.max(10, Math.min(100, (r0.width + e.clientX - ev.clientX) / e0.width * 100)); im.style.width = `${Math.round(w)}%`; place(); }; const up = () => { h.removeEventListener(`pointermove`, mv); h.removeEventListener(`pointerup`, up); later(); }; h.addEventListener(`pointermove`, mv); h.addEventListener(`pointerup`, up); };
}
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
