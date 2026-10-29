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
