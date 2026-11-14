/* ===================== DIBUJAR: INTERFAZ ===================== */
const DIB_TABS = [[`aprender`, `Aprender`], [`practicar`, `Practicar`], [`taller`, `Taller libre`]];
const DIBX = { on:false };
const DIB_MASA = { H:1.008, Li:6.94, Be:9.012, B:10.81, C:12.011, N:14.007, O:15.999, F:18.998, Ne:20.18, Na:22.99, Mg:24.305, Al:26.982, P:30.974, S:32.06, Cl:35.45, K:39.098, Ca:40.078, Br:79.904, I:126.904 };
const DIB_TOOLS = {
  atom:{ n:`Átomo`, g:`A`, h:`Elige un elemento y toca el lienzo para colocarlo. Toca un átomo ya colocado para cambiarle el elemento.` },
  bond:{ n:`Enlace`, g:`─`, h:`Toca un átomo y luego otro para unirlos (o arrastra de uno a otro). Toca un enlace para cambiarlo a doble, triple o quitarlo.` },
  dots:{ n:`Electrones`, g:`••`, h:`Toca un átomo para agregarle un electrón (un punto). Después del 8 vuelve a 0. Los puntos se acomodan solos.` },
  charge:{ n:`Carga`, g:`±`, h:`Toca un átomo para cambiar su carga. Metales: +, 2+, 3+. No metales: −, 2−, + (para iones como NH₄⁺). Otro toque la quita.` },
  ring:{ n:`Anillo`, g:`⬡`, h:`Elige el anillo y toca el lienzo para colocarlo. El benceno trae su círculo.` },
  group:{ n:`Grupo`, g:`R`, h:`Elige un grupo (NO₂, COOH…) y toca el lienzo; luego únelo con un enlace al anillo.` },
  move:{ n:`Mover`, g:`✥`, h:`Arrastra un átomo para acomodarlo.` },
  erase:{ n:`Borrar`, g:`⌫`, h:`Toca un átomo o un enlace para quitarlo.` }
};
Object.entries({ atom:`Elige un elemento abajo y toca el lienzo.`, bond:`Toca un átomo y luego otro. Toca un enlace para hacerlo doble o triple.`, dots:`Toca un átomo para sumarle un electrón (un punto).`, charge:`Toca un átomo para cambiarle la carga.`, ring:`Elige el anillo y toca el lienzo.`, group:`Elige un grupo y toca el lienzo; luego únelo con un enlace.`, move:`Arrastra un átomo para acomodarlo.`, erase:`Toca un átomo o un enlace para quitarlo.` }).forEach(([k, s]) => { DIB_TOOLS[k].s = s; });
const DIB_PASOS = [{ k:`atomos`, n:`Átomos`, p:[`atom`, `ring`, `group`], t:[`atom`, `ring`, `group`, `move`, `erase`] }, { k:`enlaces`, n:`Enlaces`, p:[`bond`], t:[`bond`, `move`, `erase`] }, { k:`electrones`, n:`Electrones`, p:[`dots`, `charge`], t:[`dots`, `charge`, `erase`] }];
/* esqueleto de ayuda: átomos y enlaces sencillos del objetivo, sin electrones ni cargas */
const dibEsqueleto = t => { const m = dbClone(t); delete m.txt; delete m.dash; m.atoms.forEach(a => { a.d = 0; a.q = 0; }); m.bonds.forEach(b => { b.o = 1; delete b.s; }); return m; };
const DIB_ANILLOS = { ben:[`Benceno`, 6, 1.5], c3:[`Ciclopropano`, 3, 1], c4:[`Ciclobutano`, 4, 1], c5:[`Ciclopentano`, 5, 1], c6:[`Ciclohexano`, 6, 1] };
const DIB_ELS_ALL = [`C`, `H`, `O`, `N`, `F`, `Cl`, `Br`, `I`, `S`, `P`, `B`, `Li`, `Na`, `K`, `Be`, `Mg`, `Ca`, `Al`, `Ne`];
const dibS = () => { const x = S.x; const d = x.dib || (x.dib = {}); d.tab = d.tab || `aprender`; d.stats = d.stats || {}; d.cfg = d.cfg || { cats:[`atomo`, `ionico`, `lewis`, `geo`, `hc`, `semi`, `arom`, `nombrar`], n:5 }; return d; };
const dibEsc = s => String(s == null ? `` : s).replace(/[&<>"]/g, c => ({ '&':`&amp;`, '<':`&lt;`, '>':`&gt;`, '"':`&quot;` }[c]));

/* ======================= EDITOR DE ESTRUCTURAS ======================= */
function dibEditor(cfg){
  const mode = cfg.mode, tools = cfg.tools;
  const st = { m:cfg.mol ? dbClone(cfg.mol) : dbNew(), tool:tools[0], el:(cfg.els || [`C`])[0], grp:(cfg.groups || [])[0] || null, ring:(cfg.rings || [`ben`])[0], pend:null, undo:[], dn:null, drag:null, bdrag:null, prev:null, showH:false, count:false, ayuda:!!cfg.ayuda, paso:0 };
  const pasos0 = cfg.pasos ? DIB_PASOS.map(p => ({ k:p.k, n:p.n, ok:p.p.some(k => tools.includes(k)), t:tools.filter(k => p.t.includes(k)) })).filter(p => p.ok) : [], pasos = pasos0.length > 1 ? pasos0 : null;
  const stp = pasos ? el(`nav`, `dbstp`) : null, ins = pasos ? el(`div`, `dbins`) : null, inst = pasos ? el(`div`, `dbsr`) : null, nav = pasos ? el(`div`, `btnrow dbnav`) : null, cnt = cfg.need != null && mode === `lewis` ? el(`div`, `dbcnt`) : null; let prevB = null, nextB = null, cbtn = null;
  const root = el(`div`, `dbed`), bar = el(`div`, `dbtools`), pal = el(`div`, `dbpal`), hint = el(`p`, `dbhint`), cw = el(`div`, `dbcw`), acts = el(`div`, `dbacts`), sr = el(`p`, `dbsr`);
  bar.setAttribute(`role`, `toolbar`); bar.setAttribute(`aria-label`, `Herramientas de dibujo`); hint.setAttribute(`aria-live`, `polite`); sr.setAttribute(`aria-live`, `polite`);
  if (pasos){ stp.setAttribute(`aria-label`, `Pasos del ejercicio`); ins.append(stp, inst, hint); } if (cnt){ cnt.setAttribute(`aria-live`, `polite`); cnt.hidden = true; }
  cw.innerHTML = `<svg class="dbcv" viewBox="0 0 360 300" role="application" aria-label="Lienzo para dibujar la estructura. Solo se puede usar con el dedo o el ratón."></svg>`; const svg = cw.firstChild;
  const snap = v => Math.round(v / 10) * 10, clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function render(){ svg.innerHTML = dbInner(st.m, { mode, edit:true, pend:st.pend, prev:st.prev, showH:st.showH, count:st.count }); sr.textContent = `Estructura con ${st.m.atoms.length} átomos y ${st.m.bonds.length} enlaces.`; cntUpdate(); }
  function cntUpdate(){
    if (!cnt) return; cnt.hidden = !st.ayuda; if (!st.ayuda) return; let have = 0; st.m.atoms.forEach(a => { have += a.d | 0; }); st.m.bonds.forEach(b => { have += 2 * (b.o || 0); }); const f = cfg.need - have, par = f > 0 && f % 2 === 0 ? ` (${f / 2} par${f === 2 ? `` : `es`})` : ``;
    cnt.innerHTML = `<div><b>${cfg.need}</b>electrones en total</div><div><b>${have}</b>colocados</div><div class="${f === 0 ? `listo` : `falta`}"><b>${f === 0 ? `✓` : Math.abs(f)}</b>${f === 0 ? `completo` : f > 0 ? `faltan${par}` : `sobran`}</div>`; }
  const push = () => { st.undo.push(JSON.stringify(st.m)); if (st.undo.length > 60) st.undo.shift(); };
  const changed = () => { render(); if (cfg.onchange) cfg.onchange(dbClone(st.m)); };
  const bondOf = (a, b) => st.m.bonds.find(k => (k.a === a && k.b === b) || (k.a === b && k.b === a));
  const api = {
    add(e, x, y, o){ push(); const id = dbAdd(st.m, e, clamp(snap(x), 20, 340), clamp(snap(y), 20, 280), o); changed(); return id; },
    group(g, x, y){ push(); const id = dbAdd(st.m, `R`, clamp(snap(x), 20, 340), clamp(snap(y), 20, 280), { g }); changed(); return id; },
    bond(a, b){ if (a === b || !dbAt(st.m, a) || !dbAt(st.m, b)) return; push(); const ex = bondOf(a, b); if (!ex) dbBond(st.m, a, b, 1); else api.cycleNoPush(ex); changed(); },
    cycleNoPush(b){ const nx = { 1:2, 2:3, 3:0, 1.5:1 }[b.o]; if (!nx) st.m.bonds.splice(st.m.bonds.indexOf(b), 1); else b.o = nx; },
    cycle(b){ push(); api.cycleNoPush(b); changed(); },
    dots(i, n){ const a = dbAt(st.m, i); if (!a) return; push(); a.d = n == null ? ((a.d | 0) + 1) % 9 : n; changed(); },
    charge(i, q){ const a = dbAt(st.m, i); if (!a) return; push(); const sec = (DB_EL[a.el] || {}).met ? [0, 1, 2, 3] : [0, -1, -2, 1]; a.q = q == null ? sec[(Math.max(0, sec.indexOf(a.q || 0)) + 1) % sec.length] : q; changed(); },
    del(i){ push(); st.m.atoms = st.m.atoms.filter(a => a.i !== i); st.m.bonds = st.m.bonds.filter(b => b.a !== i && b.b !== i); if (st.pend === i) st.pend = null; changed(); },
    delBond(b){ push(); st.m.bonds.splice(st.m.bonds.indexOf(b), 1); changed(); },
    ring(kind, x, y){ const [, n, o] = DIB_ANILLOS[kind]; push(); const R = n <= 4 ? 28 : 32, cx = clamp(snap(x), R + 20, 340 - R), cy = clamp(snap(y), R + 20, 280 - R), ids = [];
      for (let k = 0; k < n; k++){ const a = dbRad(-90 + 360 / n * k); ids.push(dbAdd(st.m, `C`, cx + R * Math.cos(a), cy + R * Math.sin(a))); } for (let k = 0; k < n; k++) dbBond(st.m, ids[k], ids[(k + 1) % n], o); changed(); return ids; },
    mol:() => dbClone(st.m), set(m){ push(); st.m = dbClone(m); st.pend = null; changed(); },
    clear(){ if (!st.m.atoms.length) return; push(); st.m = dbNew(); st.pend = null; changed(); },
    undo(){ const s = st.undo.pop(); if (!s) return; st.m = JSON.parse(s); st.pend = null; changed(); },
    tool(k){ setTool(k); }, el(e){ st.el = e; ui(); }, getState:() => st
  };
  function pt(e){ const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY; const q = p.matrixTransform(svg.getScreenCTM().inverse()); return [q.x, q.y]; }
  function hit([x, y]){
    let best = null, bd = 1e9; st.m.atoms.forEach(a => { const d = Math.hypot(a.x - x, a.y - y), r = (a.g ? 28 : dbLabel(st.m, a, mode, {}) ? 22 : 20); if (d <= r && d < bd){ bd = d; best = a; } });
    if (best) return { atom:best };
    for (const b of st.m.bonds){ const A = dbAt(st.m, b.a), B = dbAt(st.m, b.b), dx = B.x - A.x, dy = B.y - A.y, L2 = dx * dx + dy * dy || 1, t = clamp(((x - A.x) * dx + (y - A.y) * dy) / L2, 0, 1); if (Math.hypot(A.x + t * dx - x, A.y + t * dy - y) <= 11) return { bond:b }; }
    return {};
  }
  function tap(d, h, p){
    const T = st.tool;
    if (T === `atom`){ if (h.atom){ if (h.atom.el !== st.el || h.atom.g){ push(); h.atom.el = st.el; delete h.atom.g; changed(); } } else if (!h.bond) api.add(st.el, p[0], p[1]); }
    else if (T === `group`){ if (!h.atom && !h.bond && st.grp) api.group(st.grp, p[0], p[1]); }
    else if (T === `ring`){ if (!h.atom && !h.bond) api.ring(st.ring, p[0], p[1]); }
    else if (T === `bond`){
      if (d.h.atom && h.atom && d.h.atom !== h.atom && d.moved){ api.bond(d.h.atom.i, h.atom.i); st.pend = null; render(); }
      else if (h.atom && !d.moved){ if (st.pend == null){ st.pend = h.atom.i; render(); } else if (st.pend !== h.atom.i){ api.bond(st.pend, h.atom.i); st.pend = null; render(); } else { st.pend = null; render(); } }
      else if (h.bond && !d.moved) api.cycle(h.bond); else { st.pend = null; render(); } }
    else if (T === `dots`){ if (h.atom) api.dots(h.atom.i); }
    else if (T === `charge`){ if (h.atom) api.charge(h.atom.i); }
    else if (T === `erase`){ if (h.atom) api.del(h.atom.i); else if (h.bond) api.delBond(h.bond); }
  }
  svg.addEventListener(`pointerdown`, e => { e.preventDefault(); const p = pt(e), h = hit(p); st.dn = { p, h, moved:false };
    if (st.tool === `move` && h.atom){ push(); st.drag = h.atom; } if (st.tool === `bond` && h.atom) st.bdrag = h.atom;
    try { svg.setPointerCapture(e.pointerId); } catch(_) {} });
  svg.addEventListener(`pointermove`, e => { if (!st.dn) return; const p = pt(e); if (Math.hypot(p[0] - st.dn.p[0], p[1] - st.dn.p[1]) > 7) st.dn.moved = true;
    if (st.drag){ st.drag.x = clamp(p[0], 15, 345); st.drag.y = clamp(p[1], 15, 285); render(); } else if (st.bdrag && st.dn.moved){ st.prev = [st.bdrag.x, st.bdrag.y, p[0], p[1]]; render(); } });
  const fin = e => { if (!st.dn) return; const p = pt(e), d = st.dn, h = hit(p); st.dn = null; st.prev = null; st.bdrag = null;
    if (st.drag){ st.drag.x = snap(st.drag.x); st.drag.y = snap(st.drag.y); st.drag = null; changed(); return; } tap(d, h, p); };
  svg.addEventListener(`pointerup`, fin); svg.addEventListener(`pointercancel`, () => { st.dn = null; st.prev = null; st.bdrag = null; st.drag = null; render(); });
  /* barra de herramientas, paleta y ayudas */
  const bt = {}; tools.forEach(k => { const T = DIB_TOOLS[k], b = btn(`<span class="dbg" aria-hidden="true">${T.g}</span><span>${T.n}</span>`, `dbtool`, () => setTool(k)); b.dataset.tool = k; bt[k] = b; bar.append(b); });
  function setTool(k){ st.tool = k; st.pend = null; ui(); render(); }
  function ui(){
    tools.forEach(k => { bt[k].setAttribute(`aria-pressed`, st.tool === k); bt[k].classList.toggle(`on`, st.tool === k); });
    hint.textContent = pasos ? DIB_TOOLS[st.tool].s : DIB_TOOLS[st.tool].h; pal.innerHTML = ``;
    const chips = (lista, cur, set, fmt) => lista.forEach(x => { const b = btn(fmt ? fmt(x) : x, `dbchip${cur === x ? ` on` : ``}`, () => { set(x); ui(); }); b.setAttribute(`aria-pressed`, cur === x); pal.append(b); });
    if (st.tool === `atom`) chips(cfg.els || [`C`], st.el, x => { st.el = x; }); else if (st.tool === `group`) chips(cfg.groups || [], st.grp, x => { st.grp = x; });
    else if (st.tool === `ring`) chips(cfg.rings || [`ben`], st.ring, x => { st.ring = x; }, x => DIB_ANILLOS[x][0]);
    pal.style.visibility = pal.children.length ? `visible` : `hidden`;
  }
  acts.append(btn(`↶ Deshacer`, `btn ghost sm`, () => api.undo()), btn(`Limpiar`, `btn ghost sm`, () => api.clear()));
  if (mode === `lewis`){ const c = btn(`Contar electrones`, `btn ghost sm`, () => { st.count = !st.count; c.setAttribute(`aria-pressed`, st.count); c.classList.toggle(`on`, st.count); render(); }); c.setAttribute(`aria-pressed`, `false`); c.title = `Muestra cuántos electrones tiene cada átomo a su alrededor (cada enlace cuenta 2)`; cbtn = c; acts.append(c); }
  else { const c = btn(`Mostrar H`, `btn ghost sm`, () => { st.showH = !st.showH; c.setAttribute(`aria-pressed`, st.showH); c.classList.toggle(`on`, st.showH); render(); }); c.setAttribute(`aria-pressed`, `false`); c.title = `Muestra los hidrógenos implícitos de cada carbono`; acts.append(c); }
  /* pasos guiados: solo se ven las herramientas del paso actual */
  function barBuild(){ bar.innerHTML = ``; (pasos ? pasos[st.paso].t : tools).forEach(k => bar.append(bt[k])); }
  function stepUI(){
    stp.innerHTML = ``; pasos.forEach((p, i) => { if (i) stp.append(el(`span`, `dbsl${i <= st.paso ? ` hecho` : ``}`)); const b = btn(`<span class="dbsn" aria-hidden="true">${i < st.paso ? `✓` : i + 1}</span><span>${p.n}</span>`, `dbstep${i === st.paso ? ` on` : i < st.paso ? ` hecho` : ``}`, () => setPaso(i)); if (i === st.paso) b.setAttribute(`aria-current`, `step`); stp.append(b); });
    inst.textContent = `Paso ${st.paso + 1} de ${pasos.length} · ${pasos[st.paso].n}`; prevB.disabled = st.paso === 0; nextB.hidden = st.paso === pasos.length - 1; barBuild(); }
  function setPaso(i){ st.paso = clamp(i, 0, pasos.length - 1); const p = pasos[st.paso]; if (!p.t.includes(st.tool)) st.tool = p.t[0]; st.pend = null; stepUI(); ui(); render(); }
  /* ayuda: contador de electrones, cuentas por átomo y esqueleto (si hay) */
  api.ayuda = on => { st.ayuda = !!on; st.count = st.ayuda; if (cbtn){ cbtn.setAttribute(`aria-pressed`, st.count); cbtn.classList.toggle(`on`, st.count); }
    if (st.ayuda && cfg.esqueleto && !st.m.atoms.length){ st.m = dbClone(cfg.esqueleto); st.pend = null; const k = pasos ? pasos.findIndex(p => p.k === `electrones`) : -1; if (k >= 0){ setPaso(k); return; } }
    render(); };
  if (pasos){ prevB = btn(`← Atrás`, `btn ghost`, () => setPaso(st.paso - 1)); nextB = btn(`Siguiente paso →`, `btn`, () => setPaso(st.paso + 1)); nav.append(prevB, nextB); }
  root.append(...(pasos ? [ins, cw, pal, bar, cnt, acts, nav, sr] : [cw, pal, bar, hint, acts, sr]).filter(Boolean)); if (pasos) stepUI(); ui(); render(); if (st.ayuda) api.ayuda(true);
  const ed = { root, api, get:() => dbClone(st.m), set:api.set, clear:api.clear, st, ayuda:api.ayuda };
  root.__ed = ed; return ed;
}

/* ======================= ANÁLISIS (Taller libre) ======================= */
function dibAnalisis(m, mode){
  if (!m.atoms.length) return `<p class="muted">Dibuja una estructura y aquí verás su fórmula, si cumple las reglas y su geometría.</p>`;
  const c = dbPrep(m, mode), issues = dbValid(c, mode), q = c.atoms.reduce((s, a) => s + (a.q || 0), 0);
  const conocido = c.atoms.every(a => DIB_MASA[a.el]); const masa = c.atoms.reduce((s, a) => s + (DIB_MASA[a.el] || 0) + (mode === `esq` ? Math.max(0, dbHImp(c, a)) * DIB_MASA.H : 0), 0);
  const noH = c.atoms.filter(a => a.el !== `H`); let k = 0; const filas = [];
  noH.forEach((a, i) => { const g = dbVsepr(c, a.i, mode); if (g && g.nb >= 2) filas.push(`<tr><td>${a.el}<sub>${i + 1}</sub></td><td>${g.nb} átomos + ${g.lp} par${g.lp === 1 ? `` : `es`} libre${g.lp === 1 ? `` : `s`} = ${g.sn}</td><td>${g.g}</td><td>${g.ang}</td><td>${g.h}</td></tr>`); });
  const ok = !issues.length;
  return `<div class="dbfa"><div><span>Fórmula</span><b>${dbFormula(c, mode)}</b></div><div><span>Carga neta</span><b>${q === 0 ? `0` : (q > 0 ? `+` : `−`) + Math.abs(q)}</b></div>${conocido ? `<div><span>Masa molar</span><b>${masa.toFixed(2)} g/mol</b></div>` : ``}<div><span>Átomos · enlaces</span><b>${c.atoms.length} · ${c.bonds.length}</b></div></div>
    <p class="${ok ? `dbok` : `dbno`}">${ok ? (mode === `lewis` ? `✔ Todos los átomos tienen su octeto (el H, 2) y su carga es coherente con sus electrones.` : `✔ Las valencias son correctas.`) : `✖ ${issues.map(dibEsc).join(`<br>✖ `)}`}</p>
    ${filas.length ? `<div class="scroll"><table class="tbl"><thead><tr><th>Átomo</th><th>Dominios</th><th>Geometría</th><th>Ángulo</th><th>Hibridación</th></tr></thead><tbody>${filas.join(``)}</tbody></table></div>` : `<p class="muted">Cuando un átomo tenga 2 o más vecinos verás aquí su geometría.</p>`}`;
}

/* ======================= EJERCICIOS ======================= */
const dibNomSub = c => ({ M:`metilo (CH₃)`, Et:`etilo (CH₂CH₃)`, iPr:`isopropilo (CH(CH₃)₂)`, All:`alilo (CH₂−CH=CH₂)`, Oct:`cadena de 8 carbonos (octilo)`, F:`flúor`, Cl:`cloro`, Br:`bromo`, I:`yodo`, OH:`hidroxilo (OH)`, NH2:`amino (NH₂)`, NO2:`nitro (NO₂)`, COOH:`carboxilo (COOH)`, SO3H:`sulfónico (SO₃H)` }[c] || c);
function dibHintHC(it){
  if (it.r){ let t = `Es un anillo de ${it.r.r} carbonos.`; if (it.r.b.includes(2)) t += ` Hay un enlace doble entre dos carbonos del anillo.`; if (it.r.s) t += ` Lleva un metilo.`; return t; }
  const s = it.s; let t = `La cadena principal tiene ${s.n} carbonos.`; s.b.forEach((o, k) => { if (o > 1) t += ` Hay un enlace ${o === 2 ? `doble` : `triple`} entre C${k + 1} y C${k + 2}.`; });
  Object.keys(s.s || {}).forEach(p => s.s[p].forEach(c => { t += ` Hay un ${c === `M` ? `metilo` : `etilo`} en C${p}.`; })); return t;
}
function dibHintAr(it){
  const ks = Object.keys(it.s).map(Number).sort((a, b) => a - b); let t = `Dibuja el anillo de benceno (hexágono con círculo). `;
  t += ks.map(k => `En la posición ${k}: ${it.s[k].map(dibNomSub).join(` y `)}`).join(`; `) + `.`;
  if (ks.length === 2){ const d = Math.abs(ks[1] - ks[0]), dd = Math.min(d, 6 - d); t += ` (${dd === 1 ? `orto` : dd === 2 ? `meta` : `para`})`; } return t;
}
const dibPick = (lista, used, keyf) => { const libres = lista.filter(x => !used.has(keyf(x))); return pick(libres.length ? libres : lista); };
const DIB_GEOCOMBO = [[`lineal`, `180°`, `sp`], [`trigonal plana`, `120°`, `sp²`], [`tetraédrica`, `109.5°`, `sp³`], [`piramidal trigonal`, `≈107°`, `sp³`], [`angular`, `≈104.5°`, `sp³`]];
const DIB_CATS = [
  { k:`atomo`, n:`Símbolos de Lewis`, d:`Dibuja el átomo con sus electrones de valencia.`, make(used){
      const el = dibPick(DB_ATOMOS, used, e => `atomo:${e}`), e = DB_EL[el].e;
      return { id:`atomo:${el}`, cat:`atomo`, tipo:`dibujo`, mode:`lewis`, tools:[`atom`, `dots`, `erase`], els:DB_ATOMOS, target:dbAtomo(el),
        q:`Dibuja el símbolo de Lewis del ${DB_ATNOM[el]} (${el}).`, hint:`${el} está en el grupo ${DB_GRUPO[e]}: tiene ${e} electrón${e === 1 ? `` : `es`} de valencia. Coloca un punto por lado (arriba, derecha, abajo, izquierda) y desde el quinto forma pares.`,
        expl:`${DB_ATNOM[el][0].toUpperCase() + DB_ATNOM[el].slice(1)}: grupo ${DB_GRUPO[e]} → ${e} electrón${e === 1 ? `` : `es`} de valencia, un punto por lado y después pares.` }; } },
  { k:`ionico`, n:`Compuestos iónicos`, d:`Dibuja los iones con su carga y sus electrones.`, make(used){
      const it = dibPick(DB_ION, used, x => `ionico:${x.f}`), [ec, qc, nc] = it.c, [ea, qa, na] = it.a;
      return { id:`ionico:${it.f}`, cat:`ionico`, tipo:`dibujo`, mode:`lewis`, tools:[`atom`, `dots`, `charge`, `move`, `erase`], els:[ec, ea].concat(DB_ATOMOS.filter(x => x !== ec && x !== ea).slice(0, 6)), target:dbIones(it),
        q:`Dibuja los iones que forman el ${it.n} (${it.f}) después de la transferencia de electrones. Escribe la carga de cada ion y sus electrones (sin enlaces entre ellos).`,
        hint:`El metal (${ec}) cede sus electrones de valencia: queda sin puntos y con carga ${dbSupU(qc)}. El no metal (${ea}) recibe electrones hasta tener 8 puntos: carga ${dbSupU(qa)}. Las cargas deben sumar cero: ${nc} × (+${qc}) + ${na} × (−${Math.abs(qa)}) = 0.`,
        expl:`${ec}${dbSupU(qc)}${nc > 1 ? ` (×${nc})` : ``} y ${ea}${dbSupU(qa)}${na > 1 ? ` (×${na})` : ``}: el metal cede, el no metal recibe y las cargas suman cero. En agua: ${it.f} → ${nc > 1 ? nc : ``}${ec}${dbSupU(qc)} + ${na > 1 ? na : ``}${ea}${dbSupU(qa)}.` }; } },
  { k:`lewis`, n:`Estructuras de Lewis`, d:`Dibuja moléculas e iones poliatómicos.`, make(used){
      const it = dibPick(DB_MOL, used, x => `lewis:${x.k}`), m = dbMolDe(it), ev = m.atoms.reduce((s, a) => s + DB_EL[a.el].e, 0) - m.atoms.reduce((s, a) => s + (a.q || 0), 0);
      const els = [...new Set(it.A.map(a => a[0]))].concat([`H`, `C`, `N`, `O`, `F`, `Cl`, `S`, `B`]).filter((x, i, ar) => ar.indexOf(x) === i);
      return { id:`lewis:${it.k}`, cat:`lewis`, tipo:`dibujo`, mode:`lewis`, tools:[`atom`, `bond`, `dots`, `charge`, `move`, `erase`], els, target:m,
        q:`Dibuja la estructura de Lewis de ${it.n} (${it.f}).`,
        hint:`Total de electrones de valencia: ${ev}. Une los átomos con enlaces sencillos (el central es el menos electronegativo, nunca el H), completa los octetos con puntos y, si falta, forma enlaces dobles o triples. Usa “Contar electrones” para verificar.`,
        expl:`${it.f}: ${ev} electrones de valencia en total. Cada átomo completa su octeto (el H, 2) compartiendo pares con enlaces sencillos, dobles o triples y dejando el resto como pares libres.` }; } },
  { k:`geo`, n:`Geometría molecular`, d:`Reconoce geometría, ángulo, hibridación y polaridad.`, make(used){
      const it = dibPick(DB_MOL.filter(x => x.c != null), used, x => `geo:${x.k}`), m = dbMolDe(it), g = dbVsepr(m, m.ids[it.c], `lewis`), pol = it.polar;
      const txt = (gg, p) => `${gg[0]} · ${gg[1]} · ${gg[2]}${p == null ? `` : p ? ` · polar` : ` · no polar`}`; const gc = [g.g, g.ang, g.h], ok = txt(gc, pol);
      const otros = shuf(DIB_GEOCOMBO.filter(x => !(x[0] === g.g && x[1] === g.ang))).slice(0, 3).map(x => txt(x, pol == null ? null : Math.random() < .5)).filter(x => x !== ok);
      const opts = shuf([ok].concat(otros).slice(0, 4));
      return { id:`geo:${it.k}`, cat:`geo`, tipo:`opcion`, fig:dbSvg(m, { mode:`lewis`, max:230 }), q:`¿Cuál es la geometría${it.cn ? ` alrededor de ${it.cn}` : ` del átomo central`} en ${it.n} (${it.f})? Elige geometría, ángulo, hibridación${pol == null ? `` : ` y polaridad de la molécula`}.`,
        opts, correct:opts.indexOf(ok), hint:`Cuenta los dominios del átomo central: átomos enlazados + pares libres. 2 → lineal, 3 → trigonal plana, 4 → tetraédrica (con 1 par libre, piramidal; con 2, angular).`,
        expl:`${it.f}: el átomo ${it.cn ? `(${it.cn})` : `central`} tiene ${g.nb} átomos enlazados y ${g.lp} par${g.lp === 1 ? `` : `es`} libre${g.lp === 1 ? `` : `s`} → ${g.sn} dominios → ${g.g}, ${g.ang}, hibridación ${g.h}.${pol == null ? `` : pol ? ` Es polar: sus enlaces son polares y la forma no los cancela.` : ` Es no polar: sus enlaces se cancelan por la simetría (o no hay diferencia de electronegatividad).`}` }; } },
  { k:`hc`, n:`Hidrocarburos: del nombre al dibujo`, d:`Dibuja la fórmula esquelética de alcanos, alquenos y alquinos.`, make(used){
      const it = dibPick(DB_HC, used, x => `hc:${x.n}`);
      return { id:`hc:${it.n}`, cat:`hc`, tipo:`dibujo`, mode:`esq`, tools:[`atom`, `bond`, `move`, `erase`], els:[`C`], target:dbHCMol(it),
        q:`Dibuja la fórmula esquelética de ${it.n}. Cada vértice o extremo es un carbono; los hidrógenos no se dibujan.`, hint:dibHintHC(it),
        expl:`${it.n}${it.s ? `: ${dbCond(it.s)}` : ``}. Cada carbono completa 4 enlaces con hidrógenos implícitos.` }; } },
  { k:`semi`, n:`Fórmula semidesarrollada`, d:`Escribe la fórmula con los hidrógenos de cada carbono.`, make(used){
      const it = dibPick(DB_HC.filter(x => x.s), used, x => `semi:${x.n}`);
      return { id:`semi:${it.n}`, cat:`semi`, tipo:`texto`, mode:`esq`, target:dbHCMol(it), q:`Escribe la fórmula semidesarrollada de ${it.n}.`, ph:`CH3-CH2-CH3`,
        hint:`${dibHintHC(it)} Cada carbono lleva 4 − (sus enlaces) hidrógenos: CH₃ (1 enlace), CH₂ (2), CH (3), C (4). Usa − = ≡ para los enlaces y (…) para las ramificaciones.`,
        expl:`Fórmula semidesarrollada: <b>${dbCond(it.s)}</b>` }; } },
  { k:`arom`, n:`Aromáticos: del nombre al dibujo`, d:`Dibuja benceno con sus sustituyentes en la posición correcta.`, make(used){
      const it = dibPick(DB_AR, used, x => `arom:${x.n}`);
      return { id:`arom:${it.n}`, cat:`arom`, tipo:`dibujo`, mode:`esq`, tools:[`ring`, `group`, `atom`, `bond`, `move`, `erase`], els:[`C`, `O`, `N`, `F`, `Cl`, `Br`, `I`, `S`], groups:[`NO₂`, `COOH`, `SO₃H`, `CHO`, `CN`], rings:[`ben`, `c6`], target:dbARMol(it),
        q:`Dibuja la estructura de ${it.n}.`, hint:dibHintAr(it),
        expl:`${it.n}: anillo de benceno con ${Object.keys(it.s).map(k => `${it.s[k].map(dibNomSub).join(` y `)} en la posición ${k}`).join(`; `)}.` }; } },
  { k:`nombrar`, n:`Del dibujo al nombre`, d:`Reconoce el nombre de la estructura.`, make(used){
      const arom = Math.random() < .4, lista = arom ? DB_AR : DB_HC, it = dibPick(lista, used, x => `nombrar:${x.n}`);
      const m = arom ? dbARMol(it) : dbHCMol(it), f = x => dbFormula(dbPrep(arom ? dbARMol(x) : dbHCMol(x), `esq`), `esq`), fm = f(it);
      let dis = shuf(lista.filter(x => x !== it && f(x) === fm)); if (dis.length < 3) dis = dis.concat(shuf(lista.filter(x => x !== it && !dis.includes(x) && (arom ? true : dbHCFam(x) === dbHCFam(it)))));
      const opts = shuf([it.n].concat(dis.slice(0, 3).map(x => x.n)));
      return { id:`nombrar:${it.n}`, cat:`nombrar`, tipo:`opcion`, fig:dbSvg(m, { mode:`esq`, max:230 }), q:`¿Cómo se llama este compuesto? (fórmula molecular ${fm})`, opts, correct:opts.indexOf(it.n),
        hint:arom ? `Cuenta los sustituyentes y sus posiciones (orto 1,2 · meta 1,3 · para 1,4).` : `Cuenta los carbonos de la cadena principal, ubica el enlace múltiple y las ramificaciones, y numera desde el extremo que da el número más bajo.`,
        expl:`Se llama <b>${dibEsc(it.n)}</b>.${!arom && it.s ? ` Fórmula semidesarrollada: ${dbCond(it.s)}.` : ``}` }; } }
];
const dibCat = k => DIB_CATS.find(c => c.k === k);

function dibStart(cats, n){
  const used = new Set(), items = []; let g = 0;
  while (items.length < n && g++ < n * 40){ const C = dibCat(cats[items.length % cats.length]), it = C.make(used); if (it && !used.has(it.id)){ used.add(it.id); items.push(it); } }
  Object.assign(DIBX, { on:true, done:false, cats, items:shuf(items), i:0, res:items.map(() => null) }); const s = dibS(); s.tab = `practicar`; save(); renderView(); topScroll();
}
function dibCuenta(it, ok){ if (it.contado) return; it.contado = true; const s = dibS(), c = s.stats[it.cat] || (s.stats[it.cat] = { n:0, ok:0 }); c.n++; if (ok) c.ok++; save(); }

/* ---------- vista de un ejercicio ---------- */
function dibEjercicio(v){
  const X = DIBX, it = X.items[X.i], n = X.items.length, c = el(`section`, `rfcard dbex`), C = dibCat(it.cat);
  c.append(el(`div`, `dbtop`, `<div><b>Ejercicio ${X.i + 1} de ${n}</b><span>${C.n}</span></div><div class="dbprog" aria-hidden="true">${X.items.map((_, k) => `<i class="${X.res[k] ? (X.res[k].first ? `ok` : `no`) : k === X.i ? `cur` : ``}"></i>`).join(``)}</div>`));
  c.append(el(`p`, `q dbq`, dibEsc(it.q)));
  const fb = el(`div`, `dbfb`), nxt = el(`div`, `btnrow dbnext`); fb.setAttribute(`aria-live`, `polite`); nxt.hidden = true;
  let tries = 0;
  const mostrarSig = () => { nxt.hidden = false; nxt.innerHTML = ``; nxt.append(btn(X.i < n - 1 ? `Siguiente ejercicio →` : `Ver resultados`, `btn`, () => { if (X.i < n - 1){ X.i++; } else X.done = true; renderView(); topScroll(); })); };
  const acierto = () => { if (!X.res[X.i]){ X.res[X.i] = { first:tries === 1 && !it.vioSol, tries }; dibCuenta(it, X.res[X.i].first); } };
  const solucion = (parent) => { const m = it.target; const s = el(`div`, `dbsol`); s.append(el(`div`, `dbsolf`, dbSvg(m, { mode:it.mode, max:260 }))); s.append(el(`p`, ``, it.expl)); parent.append(s); };
  const hintBox = el(`div`, `dbhintbox`); hintBox.hidden = true; hintBox.append(el(`p`, ``, `<b>Pista:</b> ${dibEsc(it.hint)}`));
  const verPista = () => { hintBox.hidden = false; };
  const acciones = el(`div`, `btnrow dbacc`);
  if (it.tipo === `opcion`){
    if (it.fig) c.append(el(`div`, `dbstem`, it.fig));
    const box = el(`div`, `opts`); it.opts.forEach((t, i) => { const b = el(`button`, `opt`, `<span class="k">${LET[i]}</span><span>${dibEsc(t)}</span>`); b.type = `button`;
      b.onclick = () => { if (X.res[X.i]) return; const ok = i === it.correct; [...box.children].forEach((y, j) => { y.disabled = true; if (j === it.correct) y.classList.add(`right`); else if (y !== b) y.classList.add(`dim`); }); if (!ok) b.classList.add(`wrong`);
        X.res[X.i] = { first:ok, tries:1 }; dibCuenta(it, ok); fb.innerHTML = ``; fb.append(el(`div`, `fb ${ok ? `ok` : `no`}`, `<strong>${ok ? `¡Correcto!` : `Todavía no.`}</strong> ${it.expl}`)); mostrarSig(); }; box.append(b); }); c.append(box);
    acciones.append(btn(`Pista`, `btn ghost`, verPista)); c.append(acciones, hintBox, fb, nxt); v.append(c); return;
  }
  if (it.tipo === `texto`){
    const w = el(`div`, `dbtxt`); w.innerHTML = `<label for="dbsemi">Tu fórmula</label><input id="dbsemi" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${it.ph}" inputmode="text"><p class="muted">Usa C, H, O, N, F, Cl, Br, I · enlaces <b>-</b> <b>=</b> <b>≡</b> · ramificaciones entre paréntesis, por ejemplo CH3-CH(CH3)-CH3 · repeticiones como CH3(CH2)3CH3.</p>`; c.append(w); const inp = $(`#dbsemi`, w);
    const comprobar = () => { tries++; const pr = dbParse(inp.value); fb.innerHTML = ``; let ok = false, msgs = [];
      if (pr.err) msgs.push(pr.err);
      else { if (pr.sobre) msgs.push(`Un átomo tiene más enlaces de los que admite: el carbono admite 4, el nitrógeno 3, el oxígeno 2 y los halógenos 1.`);
        pr.malos.forEach(a => { const idx = pr.mol.atoms.indexOf(a) + 1; msgs.push(`El átomo ${idx} (${a.el}) lleva ${pr.decl[a.i]} H, pero por sus enlaces debería llevar ${dbHImp(pr.mol, a)}: cada carbono forma 4 enlaces en total.`); });
        if (!msgs.length){ const r2 = dbCheck(pr.mol, it.target, `esq`); if (r2.ok) ok = true; else msgs = r2.msgs; } }
      if (ok){ acierto(); fb.append(el(`div`, `fb ok`, `<strong>¡Correcto!</strong>${tries > 1 ? ` (al intento ${tries})` : ``} ${it.expl}`)); mostrarSig(); acciones.hidden = true; }
      else { fb.append(el(`div`, `fb no`, `<strong>Todavía no.</strong><ul class="dblst">${msgs.map(m => `<li>${dibEsc(m)}</li>`).join(``)}</ul>`)); if (tries >= 2) verPista(); } };
    inp.addEventListener(`keydown`, e => { if (e.key === `Enter`) comprobar(); });
    acciones.append(btn(`Comprobar`, `btn`, comprobar), btn(`Pista`, `btn ghost`, verPista), btn(`Ver solución`, `btn ghost`, () => { if (!X.res[X.i]) X.res[X.i] = { first:false, tries }; dibCuenta(it, false); solucion(fb); mostrarSig(); }));
    c.append(acciones, hintBox, fb, nxt); v.append(c); return;
  }
  /* dibujo */
  const sA = dibS(); if (sA.ayuda == null) sA.ayuda = true;
  const lew = it.mode === `lewis`, need = lew ? it.target.atoms.reduce((s, a) => s + ((DB_EL[a.el] || {}).e || 0) - (a.q || 0), 0) : null, esq = it.cat === `lewis` ? dibEsqueleto(it.target) : null;
  const ed = dibEditor({ mode:it.mode, tools:it.tools, els:it.els, groups:it.groups, rings:it.rings, pasos:true, need, esqueleto:esq, ayuda:lew && sA.ayuda }); X.ed = ed;
  if (lew){ const ay = el(`div`, `dbayu`), nota = el(`p`, `dbayun`); ay.setAttribute(`role`, `group`); ay.setAttribute(`aria-label`, `Nivel de ayuda`);
    const bs = [[true, `Con ayuda`], [false, `Sin ayuda`]].map(([on, t]) => [on, btn(t, `dbayb`, () => { sA.ayuda = on; save(); marca(); ed.ayuda(on); })]);
    const marca = () => { bs.forEach(([on, b]) => b.setAttribute(`aria-pressed`, sA.ayuda === on)); nota.textContent = sA.ayuda ? (esq ? `Con ayuda: ya están los átomos y los enlaces, y ves cuántos electrones faltan.` : `Con ayuda: ves cuántos electrones faltan.`) : `Sin ayuda: dibuja todo tú.`; };
    bs.forEach(([, b]) => ay.append(b)); marca(); c.append(ed.root, ay, nota); } else c.append(ed.root);
  const comprobar = () => { tries++; const u = ed.get(), r2 = dbCheck(u, it.target, it.mode, it.alts); fb.innerHTML = ``;
    if (r2.ok){ acierto(); fb.append(el(`div`, `fb ok`, `<strong>¡Correcto!</strong>${tries > 1 ? ` (al intento ${tries})` : ``} ${it.expl}`)); mostrarSig(); }
    else { fb.append(el(`div`, `fb no`, `<strong>Todavía no.</strong><ul class="dblst">${r2.msgs.map(m => `<li>${dibEsc(m)}</li>`).join(``)}</ul>`)); if (tries >= 2) verPista(); } };
  acciones.append(btn(`Comprobar`, `btn`, comprobar), btn(`Pista`, `btn ghost`, verPista), btn(`Ver solución`, `btn ghost`, () => { it.vioSol = true; if (!X.res[X.i]) X.res[X.i] = { first:false, tries }; dibCuenta(it, false); fb.innerHTML = ``; solucion(fb); mostrarSig(); }));
  c.append(hintBox, fb, nxt, acciones); v.append(c);
}
function dibResumen(v){
  const X = DIBX, tot = X.items.length, ok = X.res.filter(r => r && r.first).length, c = el(`section`, `rfcard dbres`);
  c.append(el(`h2`, ``, `Resultado de la sesión`));
  c.append(el(`div`, `rfscore`, `<p class="score ${ok / tot >= .6 ? `rfok` : `rfno`}">${ok}<small> de ${tot}</small></p><p>correctos al primer intento</p>`));
  c.append(el(`p`, `muted`, ok === tot ? `¡Sesión perfecta! Pasa a otra categoría o súbele la dificultad con más ejercicios.` : `Repasa las lecciones de los que fallaste y vuelve a intentarlos: dibujar bien se logra repitiendo.`));
  X.items.forEach((it, i) => { const r = X.res[i], d = el(`details`, `rfdet`); d.append(el(`summary`, ``, `<span class="rfce" style="background:${r && r.first ? `var(--ok)` : `var(--bad)`}">${r && r.first ? `✓` : `✕`}</span><b>${dibEsc(dibCat(it.cat).n)}</b><span class="rfcn">${dibEsc(it.q.length > 54 ? it.q.slice(0, 52) + `…` : it.q)}</span>`));
    const b = el(`div`, `rfdb`); b.append(el(`p`, ``, dibEsc(it.q))); if (it.tipo === `opcion`){ b.append(el(`div`, `dbsolf`, it.fig)); b.append(el(`p`, `dbok`, `Respuesta: ${dibEsc(it.opts[it.correct])}`)); } else b.append(el(`div`, `dbsolf`, dbSvg(it.target, { mode:it.mode, max:240 })));
    b.append(el(`p`, ``, it.expl)); d.append(b); c.append(d); });
  const row = el(`div`, `btnrow`); row.append(btn(`Otra sesión`, `btn`, () => { DIBX.on = false; renderView(); topScroll(); }), btn(`Ir a las lecciones`, `btn ghost`, () => { DIBX.on = false; dibS().tab = `aprender`; save(); renderView(); topScroll(); })); c.append(row); v.append(c);
}

/* ======================= PESTAÑAS ======================= */
function dibAprender(v){
  const s = dibS(), c = rfSec(`Aprende a dibujar paso a paso`, `Siete lecciones cortas con ejemplos. Después de cada una puedes practicar lo mismo. Todas las figuras se dibujan con el mismo motor que verifica tus ejercicios.`);
  v.append(c);
  DIB_LES.forEach((l, i) => { const d = el(`details`, `rfdet dbles`); if (s.les === l.id) d.open = true;
    d.append(el(`summary`, ``, `<span class="rfpi">${i + 1}</span><b>${l.n}</b><span class="rfcn">${dibEsc(l.res)}</span>`)); const b = el(`div`, `rfdb dbleb`); let hecho = false;
    const armar = () => { if (hecho) return; hecho = true; b.innerHTML = l.html(); const r = el(`div`, `btnrow`); r.append(btn(l.cat === `mixto` ? `Practicar todo` : `Practicar esto`, `btn`, () => dibStart(l.cat === `mixto` ? DIB_CATS.map(x => x.k) : [l.cat], 5))); b.append(r); };
    d.addEventListener(`toggle`, () => { if (d.open){ armar(); s.les = l.id; save(); } }); d.append(b); if (d.open) armar(); v.append(d); });
}
function dibPracticar(v){
  if (DIBX.on){ if (DIBX.done) dibResumen(v); else dibEjercicio(v); return; }
  const s = dibS(), cfg = s.cfg, c = rfSec(`Practica dibujando`, `Elige qué practicar. Dibujas en el lienzo (con el dedo o el ratón) y la app compara tu estructura con la respuesta y te explica en qué te equivocaste.`);
  const ch = el(`div`, `rfchips`);
  DIB_CATS.forEach(C => { const on = cfg.cats.includes(C.k), st = s.stats[C.k]; const b = btn(`${on ? `✓ ` : ``}${C.n}<small>${C.d}${st ? ` · ${st.ok} de ${st.n} al primer intento` : ``}</small>`, `rfchipb`, () => { const i = cfg.cats.indexOf(C.k); if (i >= 0){ if (cfg.cats.length > 1) cfg.cats.splice(i, 1); } else cfg.cats.push(C.k); save(); renderView(); }); b.setAttribute(`aria-pressed`, on); ch.append(b); });
  c.append(ch);
  const nrow = el(`div`, `btnrow dbn`); nrow.append(el(`span`, `muted`, `Ejercicios:`)); [5, 10].forEach(n => { const b = btn(String(n), `btn ghost sm${cfg.n === n ? ` on` : ``}`, () => { cfg.n = n; save(); renderView(); }); b.setAttribute(`aria-pressed`, cfg.n === n); nrow.append(b); }); c.append(nrow);
  const acc = el(`div`, `btnrow`); acc.append(btn(`Empezar práctica`, `btn`, () => dibStart(cfg.cats.slice(), cfg.n))); c.append(acc); v.append(c);
}
function dibTaller(v){
  const s = dibS(), T = s.tall || (s.tall = { mode:`lewis` }); const c = rfSec(`Taller libre`, `Dibuja lo que quieras y la app te dice su fórmula, su masa molar, si cumple las reglas y la geometría de cada átomo. También puedes cargar un ejemplo y modificarlo.`);
  const modos = el(`div`, `rfmodos dbmodos`); [[`lewis`, `Lewis`, `Átomos con todos sus electrones (puntos) y todos los H.`], [`esq`, `Esqueleto`, `Carbonos en los vértices e H implícitos (hidrocarburos y aromáticos).`]].forEach(([k, n, d]) => { const b = btn(`<b>${n}</b><span>${d}</span>`, `rfmodo`, () => { T.mode = k; DIBX.tallMol = null; save(); renderView(); }); b.setAttribute(`aria-pressed`, T.mode === k); modos.append(b); }); c.append(modos);
  const ej = el(`label`, `rfsel inl`); ej.append(el(`span`, ``, `Cargar un ejemplo`)); const sel = el(`select`); sel.setAttribute(`aria-label`, `Cargar un ejemplo`);
  const op = (v2, t) => { const o = el(`option`, ``, t); o.value = v2; return o; }; sel.append(op(``, `— elige —`));
  if (T.mode === `lewis`){ const g = el(`optgroup`); g.label = `Moléculas e iones`; DB_MOL.forEach(it => g.append(op(`m:${it.k}`, `${it.f} · ${it.n}`))); sel.append(g); const g2 = el(`optgroup`); g2.label = `Átomos`; DB_ATOMOS.forEach(e => g2.append(op(`a:${e}`, `${e} · ${DB_ATNOM[e]}`))); sel.append(g2); }
  else { const g = el(`optgroup`); g.label = `Hidrocarburos`; DB_HC.forEach(it => g.append(op(`h:${it.n}`, it.n))); sel.append(g); const g2 = el(`optgroup`); g2.label = `Aromáticos`; DB_AR.forEach(it => g2.append(op(`r:${it.n}`, it.n))); sel.append(g2); }
  ej.append(sel); c.append(ej); v.append(c);
  const card = el(`section`, `rfcard dbtall`), an = el(`div`, `dbana`); an.setAttribute(`aria-live`, `polite`);
  const refresca = m => { DIBX.tallMol = m; an.innerHTML = dibAnalisis(m, T.mode); };
  const lewis = T.mode === `lewis`; const ed = dibEditor({ mode:T.mode, tools:lewis ? [`atom`, `bond`, `dots`, `charge`, `move`, `erase`] : [`atom`, `bond`, `ring`, `group`, `move`, `erase`], els:DIB_ELS_ALL, groups:[`NO₂`, `COOH`, `SO₃H`, `CHO`, `CN`], rings:[`ben`, `c3`, `c4`, `c5`, `c6`], mol:DIBX.tallMol || null, onchange:refresca });
  card.append(ed.root, el(`h3`, `rfh3`, `Análisis de tu estructura`), an); v.append(card); refresca(ed.get());
  sel.onchange = () => { const [t, k] = [sel.value.slice(0, 1), sel.value.slice(2)]; if (!sel.value) return; let m;
    if (t === `m`) m = dbMolDe(DB_MOLK(k)); else if (t === `a`) m = dbAtomo(k); else if (t === `h`) m = dbHCMol(DB_HC.find(x => x.n === k)); else m = dbARMol(DB_AR.find(x => x.n === k));
    ed.set(m); sel.value = ``; };
}
function vDibujo(v){
  const s = dibS(), bar = el(`div`, `rftabs`); bar.setAttribute(`role`, `tablist`);
  DIB_TABS.forEach(([k, n]) => { const b = btn(n, `rft`, () => { s.tab = k; save(); renderView(); topScroll(); }); b.setAttribute(`role`, `tab`); b.setAttribute(`aria-selected`, s.tab === k); bar.append(b); }); v.append(bar);
  ({ aprender:dibAprender, practicar:dibPracticar, taller:dibTaller })[s.tab](v);
}
