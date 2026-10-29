/* ======================= GENERADORES: ÉTERES ======================= */
const ALCOXI = [``,`metoxi`,`etoxi`,`propoxi`,`butoxi`];
const RAD = [``,`CH₃`,`CH₃CH₂`,`CH₃CH₂CH₂`,`CH₃(CH₂)₃`];
const buildEter = () => { for (let k = 0; k < 40; k++){ const L = between(1, 6), a = between(1, Math.min(3, L)); let p = L >= 3 && Math.random() < .5 ? between(2, L - 1) : 1;
    if (a === L && p !== 1) continue; p = Math.min(p, L + 1 - p);
    const OR = `O−${RAD[a]}`;
    const atoms = []; for (let i = 1; i <= L; i++){ const n = (i > 1) + (i < L) + (i === p); const b = [`C`,`CH`,`CH₂`,`CH₃`][4 - n]; atoms.push(b); }
    let shown; if (p === 1) shown = `${RAD[a]}−O−` + atoms.join(`−`).replace(/^CH₃$/, `CH₃`); else { atoms[p - 1] += `(${OR})`; shown = atoms.join(`−`); }
    if (p === 1 && L > 1) shown = `${RAD[a]}−O−` + atoms.slice().join(`−`);
    const loc = L >= 3 ? `${p}-` : ``; const name = `${loc}${ALCOXI[a]}${ROOT[L]}ano`;
    const alts = [L >= 3 ? `${L + 1 - p === p ? p + 1 : L + 1 - p}-${ALCOXI[a]}${ROOT[L]}ano` : `${ALCOXI[a]}${ROOT[L + 1]}ano`, a !== L ? `${loc}${ALCOXI[Math.min(L, 4)]}${ROOT[a]}ano` : `${ROOT[a]}oxi${ROOT[L]}ano`, `${ROOT[L + a]}an-${Math.max(1, p)}-ol`, `${loc}${ALCOXI[a]}${ROOT[L]}eno`];
    return { L, a, p, name, alts: [...new Set(alts.filter(x => x !== name))], shown, C: L + a }; }
  return { L:2, a:1, p:1, name:`metoxietano`, alts:[`etoximetano`,`propan-1-ol`,`metoxieteno`], shown:`CH₃−O−CH₂−CH₃`, C:3 }; };
const ETYPES = [[`CH₃−O−CH₃`,`Simétrico · alifático`],[`CH₃CH₂−O−CH₂CH₃`,`Simétrico · alifático`],[`CH₃−O−CH₂CH₃`,`Asimétrico · alifático`],[`CH₃−O−C(CH₃)₃ (MTBE)`,`Asimétrico · alifático`],[`C₆H₅−O−CH₃ (anisol)`,`Asimétrico · aromático mixto`],[`C₆H₅−O−CH₂CH₃`,`Asimétrico · aromático mixto`],[`C₆H₅−O−C₆H₅`,`Simétrico · aromático puro`],[`CH₃CH₂−O−CH₂CH₂CH₃`,`Asimétrico · alifático`]];
const ETOPTS = [`Simétrico · alifático`,`Asimétrico · alifático`,`Asimétrico · aromático mixto`,`Simétrico · aromático puro`];
const CICLO = [[3,`oxirano (epóxido)`,`oxaciclopropano`],[4,`oxetano`,`oxaciclobutano`],[5,`oxolano (THF)`,`oxaciclopentano`],[6,`oxano (THP)`,`oxaciclohexano`]];
GENS.push(
 {id:`nomEter`,t:`t28`,src:`Tema 28, pág. 7`,name:`Nombrar éteres (IUPAC)`,make(){ const M = buildEter(); const opts = shuf([M.name].concat(M.alts.slice(0, 3)));
   return { q:`Elige el nombre IUPAC de: ${M.shown}`, opts, correct: opts.indexOf(M.name),
     pasos:[`Cadena corta unida al O: ${M.a} C → ${ALCOXI[M.a]} (grupo alcoxi).`,`Cadena larga: ${M.L} C → ${ROOT[M.L]}ano (alcano principal).`].concat(M.L >= 3 ? [`Se numera desde el extremo más cercano al O: queda en el C${M.p}.`] : [`Con 1 o 2 carbonos no hace falta número.`]).concat([`Nombre: ${M.name} (C${SUBN(M.C)}H${SUBN(2 * M.C + 2)}O).`]), r: M.name }; }},
 {id:`tipoEter`,t:`t28`,src:`Tema 28, pág. 4`,name:`Clasificar éteres`,make(){ const d = pick(ETYPES);
   return { q:`¿Cómo se clasifica el éter ${d[0]}?`, opts: ETOPTS, correct: ETOPTS.indexOf(d[1]), pasos:[`Simetría: ¿los dos grupos unidos al O son iguales?`,`Naturaleza: ¿hay anillos aromáticos? Uno = mixto; dos = puro; ninguno = alifático.`,`Respuesta: ${d[1]}.`], r: d[1] }; }},
 {id:`cicloEter`,t:`t28`,src:`Tema 28, pág. 5 y 9`,name:`Nombrar éteres cíclicos`,make(){ const d = pick(CICLO); const sys = Math.random() < .5; const opts = CICLO.map(x => sys ? x[2] : x[1]);
   return { q:`Un éter cíclico saturado tiene un anillo de ${d[0]} miembros (${d[0] - 1} C + 1 O). ¿Cómo se llama ${sys ? `con el prefijo "oxa-"` : `(Hantzsch-Widman / común)`}?`, opts, correct: opts.indexOf(sys ? d[2] : d[1]),
     pasos:[`Cuenta los átomos del anillo: ${d[0]}.`,`Oxa- + cicloalcano de ${d[0]} → ${d[2]}.`,`Hantzsch-Widman: 3 oxirano · 4 oxetano · 5 oxolano · 6 oxano.`,`Respuesta: ${sys ? d[2] : d[1]}.`], r: sys ? d[2] : d[1] }; }},
 {id:`combEter`,t:`t28`,src:`Tema 28, pág. 12`,name:`Combustión de éteres: moles de O₂`,make(){ const L = [[2,`metoximetano`],[3,`metoxietano`],[4,`etoxietano`],[4,`1-metoxipropano`],[5,`etoxipropano`],[6,`propoxipropano`],[6,`etoxibutano`]]; const [n, nm] = pick(L); const o2 = 3 * n / 2;
   return { q:`En la combustión completa de 1 mol de ${nm} (C${SUBN(n)}H${SUBN(2 * n + 2)}O), ¿cuántos moles de O₂ se necesitan?`, unit:`mol O₂`, ans:o2, abs:.01,
     pasos:[`Fórmula del material: CₙH₂ₙ₊₂O + (3n/2) O₂ → n CO₂ + (n+1) H₂O.`,`n = ${n} → O₂ = 3(${n})/2 = ${nf(o2, 1)}.`,`Productos: ${n} CO₂ + ${n + 1} H₂O.`], r:`${nf(o2, 1)} mol de O₂` }; }}
);
