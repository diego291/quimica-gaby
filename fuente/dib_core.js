/* ===================== DIBUJAR: NÚCLEO =====================
   Modelo de molécula, verificación por isomorfismo de grafos, geometría (RPECV), fórmulas condensadas y dibujo SVG.
   molécula = { n, atoms:[{ i, el, x, y, q, d, g? }], bonds:[{ a, b, o, s? }], txt?:[], dash?:[] }
   o = orden de enlace (1, 2, 3 o 1.5 aromático) · d = electrones sin compartir (puntos) · q = carga */

const DB_EL = {
  H:{ e:1, oct:2, en:2.20 }, He:{ e:2, oct:2, en:0 },
  Li:{ e:1, en:.98, met:1 }, Na:{ e:1, en:.93, met:1 }, K:{ e:1, en:.82, met:1 },
  Be:{ e:2, oct:4, en:1.57, met:1 }, Mg:{ e:2, en:1.31, met:1 }, Ca:{ e:2, en:1.00, met:1 }, Ba:{ e:2, en:.89, met:1 },
  B:{ e:3, v:[3], oct:6, en:2.04 }, Al:{ e:3, oct:6, en:1.61, met:1 },
  C:{ e:4, v:[4], en:2.55 }, N:{ e:5, v:[3], en:3.04 }, P:{ e:5, v:[3,5], en:2.19 },
  O:{ e:6, v:[2], en:3.44 }, S:{ e:6, v:[2,4,6], en:2.58 },
  F:{ e:7, v:[1], en:3.98 }, Cl:{ e:7, v:[1], en:3.16 }, Br:{ e:7, v:[1], en:2.96 }, I:{ e:7, v:[1], en:2.66 },
  Ne:{ e:8, en:0 }, Ar:{ e:8, en:0 }
};
const DB_SUBS = `₀₁₂₃₄₅₆₇₈₉`;
const dbSub = n => String(n).replace(/\d/g, d => DB_SUBS[+d]);
const dbSup = q => q === 0 ? `` : (Math.abs(q) > 1 ? String(Math.abs(q)) : ``) + (q > 0 ? `+` : `−`);
const DB_SUPS = { '0':`⁰`, '1':`¹`, '2':`²`, '3':`³`, '4':`⁴`, '5':`⁵`, '6':`⁶`, '7':`⁷`, '8':`⁸`, '9':`⁹`, '+':`⁺`, '−':`⁻` };
const dbSupU = q => dbSup(q).replace(/[0-9+−]/g, c => DB_SUPS[c]);
/* grupos abreviados que el estudiante puede colocar; al verificar se expanden a átomos */
const DB_GRP = {
  'NO₂':{ at:[{ el:`N`, q:1 }, { el:`O`, q:0 }, { el:`O`, q:-1 }], bd:[[0, 1, 2], [0, 2, 1]] },
  'COOH':{ at:[{ el:`C`, q:0 }, { el:`O`, q:0 }, { el:`O`, q:0 }], bd:[[0, 1, 2], [0, 2, 1]] },
  'SO₃H':{ at:[{ el:`S`, q:0 }, { el:`O`, q:0 }, { el:`O`, q:0 }, { el:`O`, q:0 }], bd:[[0, 1, 2], [0, 2, 2], [0, 3, 1]] },
  'CHO':{ at:[{ el:`C`, q:0 }, { el:`O`, q:0 }], bd:[[0, 1, 2]] },
  'CN':{ at:[{ el:`C`, q:0 }, { el:`N`, q:0 }], bd:[[0, 1, 3]] }
};

/* ---------- modelo ---------- */
const dbNew = () => ({ n:0, atoms:[], bonds:[] });
const dbClone = m => JSON.parse(JSON.stringify(m));
function dbAdd(m, el, x, y, o){ const a = Object.assign({ i:++m.n, el, x, y, q:0, d:0 }, o || {}); m.atoms.push(a); return a.i; }
function dbBond(m, a, b, o = 1, s){ const k = { a, b, o }; if (s) k.s = s; m.bonds.push(k); return k; }
const dbAt = (m, i) => m.atoms.find(a => a.i === i);
const dbNb = (m, i) => m.bonds.filter(b => b.a === i || b.b === i).map(b => ({ j:b.a === i ? b.b : b.a, o:b.o, b }));
const dbBS = (m, i) => dbNb(m, i).reduce((s, x) => s + x.o, 0);
const dbOct = a => (DB_EL[a.el] && DB_EL[a.el].oct) || 8;

/* valencias permitidas según el elemento y su carga */
function dbVal(el, q){
  if (el === `H`) return q === 0 ? [1] : [0];
  const E = DB_EL[el]; if (!E || !E.v) return null;
  return E.v.map(v => el === `C` ? v - Math.abs(q) : v + q).filter(v => v >= 0);
}
/* hidrógenos implícitos (modo esqueleto): -1 si el átomo tiene más enlaces de los permitidos */
function dbHImp(m, a){
  const vs = dbVal(a.el, a.q || 0); if (!vs) return 0; const s = dbBS(m, a.i);
  for (const v of vs.slice().sort((x, y) => x - y)) if (v >= s - 1e-9){ const h = v - s; return Math.abs(h - Math.round(h)) < 1e-9 ? Math.round(h) : -1; }
  return -1;
}
/* electrones de los puntos que le corresponden por defecto (octeto completo) */
function dbAuto(m){
  m.atoms.forEach(a => { if (a.auto){ const E = DB_EL[a.el]; const s = dbBS(m, a.i);
    if (E && E.met && a.q > 0 && s === 0) a.d = 0; else a.d = Math.max(0, dbOct(a) - 2 * s); delete a.auto; } });
  return m;
}

/* ---------- preparación para comparar ---------- */
function dbExpand(m){
  m.atoms.slice().forEach(a => { if (!a.g) return; const G = DB_GRP[a.g]; if (!G){ return; }
    const ids = G.at.map((s, k) => { if (k === 0){ a.el = s.el; a.q = s.q; delete a.g; return a.i; } return dbAdd(m, s.el, a.x, a.y, { q:s.q }); });
    G.bd.forEach(([p, q, o]) => dbBond(m, ids[p], ids[q], o)); });
  return m;
}
function dbCollapseH(m){
  const quitar = new Set(); m.atoms.forEach(a => { if (a.el !== `H`) return; const nb = dbNb(m, a.i); if (nb.length === 1 && nb[0].o === 1 && dbAt(m, nb[0].j).el !== `H`) quitar.add(a.i); });
  m.atoms = m.atoms.filter(a => !quitar.has(a.i)); m.bonds = m.bonds.filter(b => !quitar.has(b.a) && !quitar.has(b.b)); return m;
}
/* anillos de 6 carbonos con enlaces alternados (Kekulé) → aromáticos (1.5) */
function dbArom(m){
  const adj = {}; m.bonds.forEach(b => { (adj[b.a] = adj[b.a] || []).push([b.b, b]); (adj[b.b] = adj[b.b] || []).push([b.a, b]); });
  const C = new Set(m.atoms.filter(a => a.el === `C`).map(a => a.i)), vistos = new Set(), cic = [];
  C.forEach(s => { const path = [s], bs = [];
    (function dfs(u){ if (path.length === 6){ const e = (adj[u] || []).find(x => x[0] === s); if (!e) return; const bb = bs.concat([e[1]]); const key = path.slice().sort((a, b) => a - b).join(`,`);
        if (vistos.has(key)) return; const os = bb.map(b => b.o); const alt = (os[0] === 1 || os[0] === 2) && os.every((o, k) => o === os[k % 2]) && os[0] !== os[1] && [os[0], os[1]].every(o => o === 1 || o === 2); const ar = os.every(o => o === 1.5);
        if (alt || ar){ vistos.add(key); cic.push(bb); } return; }
      (adj[u] || []).forEach(([v, b]) => { if (path.includes(v) || !C.has(v)) return; path.push(v); bs.push(b); dfs(v); path.pop(); bs.pop(); }); })(s); });
  cic.forEach(bb => bb.forEach(b => { b.o = 1.5; })); return m;
}
function dbPrep(m, mode){ let c = dbExpand(dbClone(m)); if (mode === `esq`) c = dbCollapseH(c); dbArom(c); return c; }
function dbGraph(c, mode){
  const ids = c.atoms.map(a => a.i), ix = {}; ids.forEach((id, k) => { ix[id] = k; });
  const key = c.atoms.map(a => { const h = mode === `esq` ? dbHImp(c, a) : a.d; return `${a.el}|${a.q || 0}|${h < 0 ? `X${Math.random()}` : h}`; });
  const adj = ids.map(() => ids.map(() => 0)); c.bonds.forEach(b => { adj[ix[b.a]][ix[b.b]] = b.o; adj[ix[b.b]][ix[b.a]] = b.o; });
  return { n:ids.length, key, adj };
}
function dbIso(A, B){
  if (A.n !== B.n) return false; const sk = g => g.key.slice().sort().join(`;`); if (sk(A) !== sk(B)) return false;
  const deg = (g, i) => g.adj[i].reduce((s, o) => s + o, 0), da = A.key.map((_, i) => deg(A, i)), db = B.key.map((_, i) => deg(B, i));
  const orden = []; const vis = new Set(); const q = A.key.map((_, i) => i).sort((x, y) => da[y] - da[x]);
  q.forEach(s => { if (vis.has(s)) return; const cola = [s]; vis.add(s); while (cola.length){ const u = cola.shift(); orden.push(u); A.adj[u].forEach((o, v) => { if (o && !vis.has(v)){ vis.add(v); cola.push(v); } }); } });
  const map = new Array(A.n).fill(-1), usado = new Array(B.n).fill(false);
  (function bt(k){ if (k === orden.length) return true; const u = orden[k];
    for (let v = 0; v < B.n; v++){ if (usado[v] || A.key[u] !== B.key[v] || da[u] !== db[v]) continue; let ok = true;
      for (let j = 0; j < k; j++){ const w = orden[j]; if (A.adj[u][w] !== B.adj[v][map[w]]){ ok = false; break; } }
      if (!ok) continue; map[u] = v; usado[v] = true; if (bt(k + 1)) return true; usado[v] = false; map[u] = -1; }
    return false; })(0);
  return !map.includes(-1) || A.n === 0;
}
/* forma abreviada y fórmula molecular (orden de Hill) */
function dbFormula(c, mode){
  const r = {}; c.atoms.forEach(a => { r[a.el] = (r[a.el] || 0) + 1; if (mode === `esq`){ const h = dbHImp(c, a); if (h > 0) r.H = (r.H || 0) + h; } });
  const SEC = [`Li`, `Na`, `K`, `Be`, `Mg`, `Ca`, `Ba`, `Al`, `B`, `Si`, `C`, `Sb`, `As`, `P`, `N`, `H`, `Te`, `Se`, `S`, `At`, `I`, `Br`, `Cl`, `O`, `F`, `He`, `Ne`, `Ar`];
  const ks = Object.keys(r).filter(k => k !== `R`); const ord = r.C ? [`C`, `H`].filter(k => r[k]).concat(ks.filter(k => k !== `C` && k !== `H`).sort()) : ks.sort((a, b) => (SEC.indexOf(a) < 0 ? 99 : SEC.indexOf(a)) - (SEC.indexOf(b) < 0 ? 99 : SEC.indexOf(b)));
  const q = c.atoms.reduce((s, a) => s + (a.q || 0), 0);
  const f = ord.map(k => k + (r[k] > 1 ? dbSub(r[k]) : ``)).join(``) + (q ? dbSupU(q) : ``); return f === `HO⁻` ? `OH⁻` : f;
}

/* ---------- verificación y diagnóstico ---------- */
const dbLabEl = a => a.g || a.el;
/* ¿la estructura es válida por sí sola? (octeto y carga formal en Lewis; valencia en esqueleto) */
function dbValid(c, mode){
  const msgs = [], vistos = new Set();
  if (mode === `lewis`) c.atoms.forEach(a => { const E = DB_EL[a.el]; if (!E) return; const s = dbBS(c, a.i), tot = a.d + 2 * s, fc = E.e - a.d - s, nu = E.met && s === 0 && a.d === 0;
    const carga = `Revisa la carga del ${a.el}: por sus electrones debería ser ${fc === 0 ? `0 (neutro)` : (fc > 0 ? `+` : `−`) + Math.abs(fc)}.`;
    let m1 = ``; if (nu){ if (fc !== (a.q || 0)) m1 = carga; }
    else if (tot !== dbOct(a)) m1 = `Un ${a.el} tiene ${tot} electrones a su alrededor (cada enlace cuenta 2 y cada punto 1); debe tener ${dbOct(a)}.`;
    else if (fc !== (a.q || 0)) m1 = carga;
    if (m1 && !vistos.has(m1)){ vistos.add(m1); msgs.push(m1); } });
  else { const sobre = c.atoms.filter(a => dbHImp(c, a) < 0); if (sobre.length) msgs.push(`Un ${sobre[0].el} tiene demasiados enlaces: el carbono admite 4, el nitrógeno 3, el oxígeno 2 y los halógenos 1.`); }
  return msgs;
}
function dbDiag(user, target, mode){
  const u = dbPrep(user, mode), t = dbPrep(target, mode), msgs = [];
  if (!u.atoms.length) return [`Todavía no hay nada dibujado.`];
  const cnt = c => { const r = {}; c.atoms.forEach(a => { r[a.el] = (r[a.el] || 0) + 1; if (mode === `esq`){ /* H implícitos no se cuentan por separado */ } }); return r; };
  const cu = cnt(u), ct = cnt(t); const els = Object.keys(Object.assign({}, cu, ct));
  els.forEach(e => { const d = (cu[e] || 0) - (ct[e] || 0), k = Math.abs(d), un = mode === `esq` && e === `C` ? `carbono` : `átomo de ${e}`, pl = mode === `esq` && e === `C` ? `carbonos` : `átomos de ${e}`;
    if (d < 0) msgs.push(`Te ${k === 1 ? `falta` : `faltan`} ${k} ${k === 1 ? un : pl}.`);
    else if (d > 0) msgs.push(`Te ${k === 1 ? `sobra` : `sobran`} ${k} ${k === 1 ? un : pl}.`); });
  dbValid(u, mode).forEach(x => msgs.push(x));
  const qu = u.atoms.reduce((s, a) => s + (a.q || 0), 0), qt = t.atoms.reduce((s, a) => s + (a.q || 0), 0);
  if (qu !== qt) msgs.push(`La carga total no coincide: tu dibujo tiene ${qu > 0 ? `+` : ``}${qu} y debería tener ${qt > 0 ? `+` : ``}${qt}.`);
  const ord = c => { const r = { 1:0, 2:0, 3:0 }; c.bonds.forEach(b => { if (r[b.o] !== undefined) r[b.o]++; }); return r; }, ou = ord(u), ot = ord(t);
  if (ou[2] !== ot[2] || ou[3] !== ot[3]) msgs.push(`Los enlaces múltiples no coinciden: en tu dibujo hay ${ou[2]} doble${ou[2] === 1 ? `` : `s`} y ${ou[3]} triple${ou[3] === 1 ? `` : `s`}; el compuesto tiene ${ot[2]} doble${ot[2] === 1 ? `` : `s`} y ${ot[3]} triple${ot[3] === 1 ? `` : `s`}.`);
  if (mode === `lewis` && !msgs.length){ const du = u.atoms.reduce((s, a) => s + a.d, 0), dt = t.atoms.reduce((s, a) => s + a.d, 0); if (du !== dt) msgs.push(`Revisa los electrones sin compartir (pares libres): tu dibujo tiene ${du} y el compuesto ${dt}.`); }
  if (!msgs.length) msgs.push(`Los átomos, las cargas y los enlaces coinciden en número, pero están conectados de otra manera. Revisa qué átomo va unido a cuál (átomo central, ramificaciones o posición de los sustituyentes).`);
  return msgs.slice(0, 4);
}
function dbCheck(user, target, mode, alts){
  if (!user.atoms.length) return { ok:false, msgs:[`Todavía no hay nada dibujado.`] };
  const gu = dbGraph(dbPrep(user, mode), mode); const todos = [target].concat(alts || []);
  if (todos.some(t => dbIso(gu, dbGraph(dbPrep(t, mode), mode)))) return { ok:true, msgs:[] };
  return { ok:false, msgs:dbDiag(user, target, mode) };
}

/* ---------- geometría (RPECV) ---------- */
const DB_GEO = {
  '1,0':{ g:`lineal`, ang:`180°`, h:`sp` }, '2,0':{ g:`lineal`, ang:`180°`, h:`sp` }, '3,0':{ g:`trigonal plana`, ang:`120°`, h:`sp²` },
  '2,1':{ g:`angular`, ang:`≈120°`, h:`sp²` }, '4,0':{ g:`tetraédrica`, ang:`109.5°`, h:`sp³` },
  '3,1':{ g:`piramidal trigonal`, ang:`≈107°`, h:`sp³` }, '2,2':{ g:`angular`, ang:`≈104.5°`, h:`sp³` },
  '1,1':{ g:`lineal`, ang:`180°`, h:`sp` }, '1,2':{ g:`lineal`, ang:`180°`, h:`sp` }, '1,3':{ g:`lineal`, ang:`180°`, h:`sp` }
};
function dbVsepr(c, i, mode){
  const a = dbAt(c, i); if (!a) return null; let nb = dbNb(c, i).length, lp;
  if (mode === `esq`){ const h = Math.max(0, dbHImp(c, a)); nb += h; lp = (DB_EL[a.el].e - (a.q || 0) - (dbBS(c, i) + h)) / 2; } else lp = a.d / 2;
  lp = Math.max(0, Math.floor(lp + 1e-9)); const G = DB_GEO[`${nb},${lp}`] || null;
  return Object.assign({ nb, lp, sn:nb + lp }, G || { g:`no cubierta en este curso`, ang:``, h:`` });
}

/* ---------- constructores con distribución automática ---------- */
const dbRad = g => g * Math.PI / 180, dbDir = g => [Math.cos(dbRad(g)), -Math.sin(dbRad(g))];
function dbSubst(m, from, ang, code, L = 32){
  const p = dbAt(m, from), [ux, uy] = dbDir(ang), P = (k, a) => { const [dx, dy] = dbDir(a); return [p.x + ux * L + dx * L * k, p.y + uy * L + dy * L * k]; };
  const C = (x, y) => dbAdd(m, `C`, x, y);
  const simple = { Cl:`Cl`, Br:`Br`, F:`F`, I:`I`, OH:`O`, NH2:`N` }; const grupos = { NO2:`NO₂`, COOH:`COOH`, SO3H:`SO₃H`, CHO:`CHO`, CN:`CN` };
  const x1 = p.x + ux * L, y1 = p.y + uy * L;
  if (code === `M`){ const c = C(x1, y1); dbBond(m, from, c, 1); return c; }
  if (simple[code]){ const c = dbAdd(m, simple[code], x1, y1); dbBond(m, from, c, 1); return c; }
  if (grupos[code]){ const c = dbAdd(m, `R`, x1 + ux * 6, y1 + uy * 6, { g:grupos[code] }); dbBond(m, from, c, 1); return c; }
  const a0 = C(x1, y1); dbBond(m, from, a0, 1); const q = dbAt(m, a0);
  const paso = (id, a, o = 1) => { const t = dbAt(m, id), [dx, dy] = dbDir(a), n = C(t.x + dx * L, t.y + dy * L); dbBond(m, id, n, o); return n; };
  if (code === `Et`){ paso(a0, ang + 60); return a0; }
  if (code === `iPr`){ paso(a0, ang + 60); paso(a0, ang - 60); return a0; }
  if (code === `All`){ const c2 = paso(a0, ang + 60); paso(c2, ang - 5, 2); return a0; }
  if (code === `Oct`){ let id = a0; for (let k = 0; k < 7; k++) id = paso(id, ang + (k % 2 ? -30 : 30)); return a0; }
  return a0;
}
/* cadena abierta en zigzag: spec = { n, b:[órdenes], s:{ posición: [códigos] } } */
function dbChain(spec){
  const m = dbNew(), n = spec.n, L = 34, P = [[50, 120]], sp = k => spec.b[k - 1] === 3 || spec.b[k] === 3; let cur = 30;
  for (let k = 0; k < n - 1; k++){ if (k > 0 && !sp(k)) cur = -cur; const [dx, dy] = [Math.cos(dbRad(cur)), Math.sin(dbRad(cur))]; P.push([P[k][0] + L * dx, P[k][1] + L * dy]); }
  const t3 = spec.b.indexOf(3); if (t3 >= 0){ const ang = Math.atan2(P[t3 + 1][1] - P[t3][1], P[t3 + 1][0] - P[t3][0]), co = Math.cos(-ang), si = Math.sin(-ang), [ox, oy] = P[0];
    P.forEach((p, k) => { const dx = p[0] - ox, dy = p[1] - oy; P[k] = [ox + dx * co - dy * si, oy + dx * si + dy * co]; }); }
  const ids = P.map(([x, y]) => dbAdd(m, `C`, x, y)); spec.b.forEach((o, k) => dbBond(m, ids[k], ids[k + 1], o));
  Object.keys(spec.s || {}).forEach(pos => { const k = +pos - 1, subs = spec.s[pos], c = P[k];
    const u = j => { const dx = P[j][0] - c[0], dy = P[j][1] - c[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
    let vx = 0, vy = 0; [k - 1, k + 1].filter(j => j >= 0 && j < n).forEach(j => { const [a, b] = u(j); vx -= a; vy -= b; });
    const l = Math.hypot(vx, vy) || 1; vx /= l; vy /= l; const ang = Math.atan2(-vy, vx) * 180 / Math.PI;
    subs.forEach((code, t) => dbSubst(m, ids[k], subs.length === 1 ? ang : ang + (t ? -42 : 42), code)); });
  return m;
}
/* anillo de n carbonos: spec = { r:n, b:[n órdenes], s:{ posición: [códigos] } } */
function dbRing(spec){
  const m = dbNew(), n = spec.r, R = n <= 4 ? 30 : 34, cx = 180, cy = 130, ids = [];
  for (let k = 0; k < n; k++){ const a = -90 + 360 / n * k; ids.push(dbAdd(m, `C`, cx + R * Math.cos(dbRad(a)), cy + R * Math.sin(dbRad(a)))); }
  for (let k = 0; k < n; k++) dbBond(m, ids[k], ids[(k + 1) % n], spec.b[k]);
  Object.keys(spec.s || {}).forEach(pos => { const k = +pos - 1, a = -90 + 360 / n * k; spec.s[pos].forEach((code, t) => dbSubst(m, ids[k], -a + (spec.s[pos].length > 1 ? (t ? -35 : 35) : 0), code, code === `M` || code === `Et` || code === `iPr` || code === `All` || code === `Oct` ? 32 : 30)); });
  return m;
}
const dbBenceno = subs => dbRing({ r:6, b:[1.5, 1.5, 1.5, 1.5, 1.5, 1.5], s:subs });

/* ---------- fórmulas condensadas (semidesarrolladas) ---------- */
function dbCond(spec){
  const n = spec.n, nombre = { M:`CH₃`, Et:`CH₂CH₃`, Cl:`Cl`, Br:`Br`, F:`F`, I:`I` }, out = [];
  for (let k = 0; k < n; k++){ const sub = (spec.s || {})[k + 1] || []; const enl = (k > 0 ? spec.b[k - 1] : 0) + (k < n - 1 ? spec.b[k] : 0) + sub.length;
    const h = 4 - enl; let t = `C` + (h > 0 ? `H` + (h > 1 ? dbSub(h) : ``) : ``); sub.forEach(c => { t += `(${nombre[c]})`; }); out.push(t); }
  return out.map((t, k) => t + (k < n - 1 ? ({ 1:`−`, 2:`=`, 3:`≡` })[spec.b[k]] : ``)).join(``);
}
/* lee una fórmula escrita por la estudiante: CH3-CH(CH3)-CH2-CH3, CH3(CH2)3CH3, CH2=CH-CH3, HC≡C-CH3 */
function dbParse(str){
  const s0 = String(str || ``).replace(/[₀-₉]/g, d => String(DB_SUBS.indexOf(d))).replace(/[–−—]/g, `-`).replace(/\s+/g, ``);
  if (!s0) return { err:`Escribe la fórmula.` };
  const m = dbNew(), decl = {};
  function seq(txt, prev){
    let i = 0, enl = 1, ult = prev, hay = false;
    const err = e => ({ err:e });
    while (i < txt.length){ const c = txt[i];
      if (c === `-`){ enl = 1; i++; hay = `b`; continue; } if (c === `=`){ enl = 2; i++; hay = `b`; continue; } if (c === `≡` || c === `#`){ enl = 3; i++; hay = `b`; continue; }
      if (c === `(`){ let d = 1, j = i + 1; while (j < txt.length && d){ if (txt[j] === `(`) d++; else if (txt[j] === `)`) d--; j++; } if (d) return err(`Falta cerrar un paréntesis.`);
        const inner = txt.slice(i + 1, j - 1); let k = j, num = ``; while (k < txt.length && /\d/.test(txt[k])){ num += txt[k]; k++; }
        if (num){ let p = ult; for (let r = 0; r < +num; r++){ const res = seq(inner, p); if (res.err) return res; p = res.ult; } ult = p; enl = 1; }
        else { const res = seq(inner, ult); if (res.err) return res; }
        i = k; hay = false; continue; }
      if (c === `)`) return err(`Hay un paréntesis de cierre de más.`);
      const mt = txt.slice(i).match(/^(Cl|Br|F|I)|^(?:H(\d*))?(C|N|O|S)(?:H(\d*))?/);
      if (!mt) return err(`No reconozco "${txt.slice(i, i + 2)}". Usa C, H, O, N, F, Cl, Br, I, paréntesis y los enlaces - = ≡.`);
      const el = mt[1] || mt[3], hv = x => x === undefined ? 0 : (x === `` ? 1 : +x), h = mt[1] ? null : hv(mt[2]) + hv(mt[4]);
      const id = dbAdd(m, el, 0, 0); decl[id] = h; if (ult != null) dbBond(m, ult, id, enl); ult = id; enl = 1; hay = false; i += mt[0].length; }
    if (hay === `b`) return err(`Después de un enlace falta un átomo.`);
    return { ult };
  }
  const r = seq(s0, null); if (r.err) return r; if (!m.atoms.length) return { err:`Escribe la fórmula.` };
  /* ¿los hidrógenos escritos coinciden con los que exige la valencia? */
  const malos = m.atoms.filter(a => decl[a.i] !== null && decl[a.i] !== undefined && dbHImp(m, a) !== decl[a.i] && dbHImp(m, a) >= 0);
  const sobre = m.atoms.find(a => dbHImp(m, a) < 0);
  return { mol:m, decl, malos, sobre };
}

/* ---------- dibujo SVG ---------- */
const dbLabel = (m, a, mode, o = {}) => {
  if (a.g) return a.g; if (mode === `lewis`) return a.el;
  if (a.el === `C`){ if (!o.showH) return ``; const h = dbHImp(m, a); return `C` + (h > 0 ? `H` + (h > 1 ? dbSub(h) : ``) : ``); }
  const h = dbHImp(m, a); if (a.el === `H`) return `H`; return a.el + (h > 0 ? `H` + (h > 1 ? dbSub(h) : ``) : ``);
};
const dbShort = t => !t ? 0 : t.length === 1 ? 10 : 7 + 5.5 * t.length;
function dbDots(m, a){
  const n = Math.min(8, a.d | 0); if (n <= 0) return [];
  const dist = (p, q) => { const d = Math.abs(p - q) % 360; return d > 180 ? 360 - d : d; };
  const vecinos = dbNb(m, a.i).map(x => x.j).concat((m.dash || []).filter(d => d.a === a.i || d.b === a.i).map(d => d.a === a.i ? d.b : d.a));
  const angs = vecinos.map(j => { const o = dbAt(m, j); return Math.atan2(-(o.y - a.y), o.x - a.x) * 180 / Math.PI; });
  const R = 20, out = []; let slots;
  if (!angs.length){ /* símbolo de Lewis: un punto por lado y después se aparean */
    const lados = [90, 0, 270, 180], cuenta = [0, 0, 0, 0]; for (let i = 0; i < n; i++) cuenta[i % 4]++; slots = lados.map((s, k) => [s, cuenta[k]]).filter(x => x[1]);
  } else { /* con enlaces: pares libres en la distribución que más los separa de los enlaces y entre sí */
    const np = Math.floor(n / 2), ns = n % 2, k = np + ns, cand = [90, 0, 270, 180, 45, 135, 225, 315]; let mejor = null;
    (function comb(ini, cur){ if (cur.length === k){ let mn = 999; cur.forEach((s, x) => { angs.forEach(b => { mn = Math.min(mn, dist(s, b)); }); cur.forEach((t, y) => { if (y > x) mn = Math.min(mn, dist(s, t)); }); });
        const ejes = cur.filter(s => s % 90 === 0).length; if (!mejor || mn > mejor.mn + 1e-9 || (Math.abs(mn - mejor.mn) < 1e-9 && ejes > mejor.ejes)) mejor = { mn, ejes, s:cur.slice() }; return; }
      for (let i = ini; i < cand.length; i++){ cur.push(cand[i]); comb(i + 1, cur); cur.pop(); } })(0, []);
    slots = (mejor ? mejor.s : []).map((s, x) => [s, ns && x === k - 1 ? 1 : 2]);
  }
  slots.forEach(([s, cnt]) => { const [dx, dy] = dbDir(s), cx = a.x + dx * R, cy = a.y + dy * R, px = -dy, py = dx;
    if (cnt === 1) out.push([cx, cy]); else { out.push([cx + px * 3.6, cy + py * 3.6]); out.push([cx - px * 3.6, cy - py * 3.6]); } });
  return out;
}
function dbArCirc(m){
  const adj = {}; m.bonds.filter(b => b.o === 1.5).forEach(b => { (adj[b.a] = adj[b.a] || []).push(b.b); (adj[b.b] = adj[b.b] || []).push(b.a); });
  const vistos = new Set(), out = [];
  Object.keys(adj).map(Number).forEach(s => { const path = [s];
    (function dfs(u){ if (path.length === 6){ if (adj[u].includes(s)){ const k = path.slice().sort((a, b) => a - b).join(`,`); if (!vistos.has(k)){ vistos.add(k); out.push(path.slice()); } } return; }
      adj[u].forEach(v => { if (!path.includes(v)){ path.push(v); dfs(v); path.pop(); } }); })(s); });
  return out.map(ids => { const P = ids.map(i => dbAt(m, i)), cx = P.reduce((s, p) => s + p.x, 0) / 6, cy = P.reduce((s, p) => s + p.y, 0) / 6, r = P.reduce((s, p) => s + Math.hypot(p.x - cx, p.y - cy), 0) / 6; return [cx, cy, r * .58]; });
}
function dbInner(m, o = {}){
  const mode = o.mode || `lewis`, f = v => (+v).toFixed(1); let s = ``;
  dbArCirc(m).forEach(([cx, cy, r]) => { s += `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" class="dbc"/>`; });
  const lab = new Map(); m.atoms.forEach(a => lab.set(a.i, dbLabel(m, a, mode, o)));
  m.bonds.forEach(b => { const a = dbAt(m, b.a), c = dbAt(m, b.b); if (!a || !c) return;
    const dx = c.x - a.x, dy = c.y - a.y, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L, sa = dbShort(lab.get(a.i)), sc = dbShort(lab.get(c.i));
    const x1 = a.x + ux * sa, y1 = a.y + uy * sa, x2 = c.x - ux * sc, y2 = c.y - uy * sc, nx = -uy, ny = ux;
    const ln = (off, cl = `dbs`) => `<line x1="${f(x1 + nx * off)}" y1="${f(y1 + ny * off)}" x2="${f(x2 + nx * off)}" y2="${f(y2 + ny * off)}" class="${cl}"/>`;
    if (b.s === `w`) s += `<polygon points="${f(x1)},${f(y1)} ${f(x2 + nx * 5)},${f(y2 + ny * 5)} ${f(x2 - nx * 5)},${f(y2 - ny * 5)}" class="dbw"/>`;
    else if (b.s === `h`){ for (let k = 1; k <= 6; k++){ const t = k / 7, w = 1 + 4.5 * t, cx = x1 + (x2 - x1) * t, cy = y1 + (y2 - y1) * t; s += `<line x1="${f(cx + nx * w)}" y1="${f(cy + ny * w)}" x2="${f(cx - nx * w)}" y2="${f(cy - ny * w)}" class="dbs thin"/>`; } }
    else if (b.o === 2) s += ln(-3) + ln(3); else if (b.o === 3) s += ln(0) + ln(-4.2) + ln(4.2); else s += ln(0); });
  (m.dash || []).forEach(d => { const a = dbAt(m, d.a), c = dbAt(m, d.b); if (a && c){ const dx = c.x - a.x, dy = c.y - a.y, L = Math.hypot(dx, dy) || 1; s += `<line x1="${f(a.x + dx / L * 12)}" y1="${f(a.y + dy / L * 12)}" x2="${f(c.x - dx / L * 12)}" y2="${f(c.y - dy / L * 12)}" class="dbs dsh"/>`; } });
  m.atoms.forEach(a => { const t = lab.get(a.i);
    if (o.edit && !t) s += `<circle cx="${f(a.x)}" cy="${f(a.y)}" r="3.6" class="dbv"/>`;
    if (t) s += `<text x="${f(a.x)}" y="${f(a.y)}" dy=".36em" text-anchor="middle" class="dbt${a.el === `C` && !a.g ? ` c` : ``}">${t}</text>`;
    if (a.q) s += `<text x="${f(a.x + 9 + 3 * Math.max(0, (t || ``).length - 1))}" y="${f(a.y - 8)}" class="dbch">${dbSup(a.q)}</text>`;
    if (mode === `lewis`) dbDots(m, a).forEach(([x, y]) => { s += `<circle cx="${f(x)}" cy="${f(y)}" r="2.3" class="dbd"/>`; });
    if (o.count && mode === `lewis`){ const E = DB_EL[a.el], sm = dbBS(m, a.i), tot = a.d + 2 * sm, ok = tot === dbOct(a) || (E && E.met && a.q > 0 && sm === 0 && a.d === 0); s += `<text x="${f(a.x + 13)}" y="${f(a.y + 24)}" class="dbn ${ok ? `ok` : `no`}">${E && E.met && a.q > 0 && sm === 0 && a.d === 0 ? `✓` : tot}</text>`; }
    if (o.pend === a.i) s += `<circle cx="${f(a.x)}" cy="${f(a.y)}" r="15" class="dbp"/>`;
    if (o.mark && o.mark[a.i]) s += `<circle cx="${f(a.x)}" cy="${f(a.y)}" r="16" class="dbm ${o.mark[a.i]}"/>`; });
  (m.txt || []).forEach(t => { s += `<text x="${f(t.x)}" y="${f(t.y)}" text-anchor="${t.a || `middle`}" class="dbx${t.c ? ` ` + t.c : ``}">${t.t}</text>`; });
  if (o.prev) s += `<line x1="${f(o.prev[0])}" y1="${f(o.prev[1])}" x2="${f(o.prev[2])}" y2="${f(o.prev[3])}" class="dbs dsh"/>`;
  return s;
}
function dbBox(m, pad = 30){
  const xs = m.atoms.map(a => a.x).concat((m.txt || []).map(t => t.x)), ys = m.atoms.map(a => a.y).concat((m.txt || []).map(t => t.y));
  if (!xs.length) return [0, 0, 360, 260]; const x0 = Math.min(...xs) - pad, y0 = Math.min(...ys) - pad, x1 = Math.max(...xs) + pad, y1 = Math.max(...ys) + pad;
  let w = x1 - x0, h = y1 - y0; if (w < 150){ const d = (150 - w) / 2; return [x0 - d, y0 - (h < 110 ? (110 - h) / 2 : 0), 150, Math.max(h, 110)]; }
  return [x0, y0, w, h];
}
function dbSvg(m, o = {}){
  const [x, y, w, h] = o.vb || dbBox(m, o.pad), mw = o.max || Math.round(Math.min(420, w * 1.25));
  return `<svg viewBox="${(+x).toFixed(0)} ${(+y).toFixed(0)} ${(+w).toFixed(0)} ${(+h).toFixed(0)}" class="dbsvg" role="img" aria-label="${(o.aria || `Estructura de ${dbFormula(dbPrep(m, o.mode || `lewis`), o.mode || `lewis`)}`).replace(/"/g, `'`)}" style="max-width:${mw}px">${dbInner(m, o)}</svg>`;
}
