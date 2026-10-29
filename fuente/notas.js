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
