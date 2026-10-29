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
