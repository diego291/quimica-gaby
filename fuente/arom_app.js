/* ======================= GENERADORES: AROMÁTICOS ======================= */
const AR_SUB = [[`Br`,`bromo`],[`Cl`,`cloro`],[`CH₂CH₃`,`etil`],[`F`,`fluoro`],[`CH₃`,`metil`],[`NO₂`,`nitro`],[`I`,`yodo`]];
const arDraw = (subs, nums) => AR.svg(240, 190, AR.ring(120, 95, 40, subs, { nums }), `Anillo de benceno con sustituyentes`, 0);
const POSN = [[1, `orto`, `1,2`], [2, `meta`, `1,3`], [3, `para`, `1,4`]];
GENS.push(
 {id:`ompNombre`,t:`t26`,src:`Tema 26, pág. 12 y 14`,name:`Nombrar bencenos disustituidos`,make(){ const a = pick(AR_SUB), b = Math.random() < .3 ? a : pick(AR_SUB.filter(x => x !== a)); const P = pick(POSN);
   const [f, s] = a[1] <= b[1] ? [a, b] : [b, a]; const loc = P[2].split(`,`)[1];
   const nm = a === b ? `${P[2]}-di${a[1]}benceno` : `1-${f[1]}-${loc}-${s[1]}benceno`;
   const other = POSN.filter(x => x !== P);
   const alts = a === b ? other.map(x => `${x[2]}-di${a[1]}benceno`).concat([`${P[1]}-${a[1]}benceno`]) : [`1-${s[1]}-${loc}-${f[1]}benceno`].concat(other.map(x => `1-${f[1]}-${x[2].split(`,`)[1]}-${s[1]}benceno`));
   const opts = shuf([nm].concat(alts).slice(0, 4));
   return { q:`Elige el nombre IUPAC de este benceno disustituido.`, draw: arDraw({ 0:a[0], [P[0]]:b[0] }), opts, correct: opts.indexOf(nm),
     pasos:[`Los sustituyentes están en posición ${P[1]} (${P[2]}).`, a === b ? `Son iguales: se usa "di" → di${a[1]}.` : `Son distintos: el número 1 lo recibe el primero en orden alfabético (${f[1]}); ${s[1]} queda en ${loc}.`,`Nombre: ${nm} (= ${P[1][0]}-${a === b ? `di` + a[1] : f[1] + s[1]}benceno).`], r: nm }; }},
 {id:`ompPos`,t:`t26`,src:`Tema 26, pág. 12`,name:`¿Orto, meta o para?`,make(){ const a = pick(AR_SUB), b = pick(AR_SUB); const P = pick(POSN); const opts = [`orto (1,2)`,`meta (1,3)`,`para (1,4)`];
   return { q:`¿En qué posición relativa están los dos sustituyentes?`, draw: arDraw({ 0:a[0], [P[0]]:b[0] }), opts, correct: POSN.indexOf(P),
     pasos:[`Pon el número 1 en un sustituyente y cuenta por el camino más corto hasta el otro.`,`Llegas al carbono ${P[2].split(`,`)[1]}.`,`1,2 = orto · 1,3 = meta · 1,4 = para ("La ORTOgrafía es la META PARA aprobar").`], r: opts[POSN.indexOf(P)] }; }},
 {id:`huckel`,t:`t26`,src:`Tema 26, pág. 3`,name:`Regla de Hückel`,make(){ const e = pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]); const n = (e - 2) / 4, ok = Number.isInteger(n); const opts = [`Sí cumple (n entero)`,`No cumple (n no entero)`];
   return { q:`Un anillo cíclico, plano y completamente conjugado tiene ${e} electrones π (${e / 2} dobles enlaces). ¿Cumple la regla de Hückel?`, opts, correct: ok ? 0 : 1,
     pasos:[`4n + 2 = ${e}.`,`4n = ${e - 2} → n = ${e - 2}/4 = ${n}.`, ok ? `n es entero: cumple Hückel → aromático.` : `n no es entero: no cumple Hückel → no es aromático.`], r: opts[ok ? 0 : 1] }; }},
 {id:`monoNombre`,t:`t26`,src:`Tema 26, pág. 13`,name:`Nombres comunes (monosustituidos)`,make(){ const L = [[`CH₃`,`Tolueno`],[`OH`,`Fenol`],[`NH₂`,`Anilina`],[`COOH`,`Ácido benzoico`],[`O−CH₃`,`Anisol`],[`SO₃H`,`Ácido bencenosulfónico`],[`CO−CH₃`,`Acetofenona`],[`CH=CH₂`,`Estireno`],[`NO₂`,`Nitrobenceno`],[`Cl`,`Clorobenceno`],[`CH₂CH₃`,`Etilbenceno`],[`Br`,`Bromobenceno`]];
   const d = pick(L); const opts = shuf([d].concat(shuf(L.filter(x => x !== d)).slice(0, 3))); const names = opts.map(x => x[1]);
   return { q:`¿Cómo se llama este compuesto?`, draw: arDraw({ 0:d[0] }), opts: names, correct: names.indexOf(d[1]),
     pasos:[`El sustituyente es −${d[0]}.`,`Monosustituido: nombre del grupo + benceno, o el nombre común aceptado por la IUPAC.`,`Respuesta: ${d[1]}.`], r: d[1] }; }},
 {id:`seaProd`,t:`t26`,src:`Tema 26, pág. 7–8`,name:`Producto de la reacción del benceno`,make(){ const R = [[`Cl₂ con FeCl₃`,`Clorobenceno`,`halogenación (SEA)`],[`Br₂ con FeBr₃`,`Bromobenceno`,`halogenación (SEA)`],[`HNO₃ con H₂SO₄`,`Nitrobenceno`,`nitración (SEA)`],[`H₂SO₄ (SO₃)`,`Ácido bencenosulfónico`,`sulfonación (SEA, reversible)`],[`CH₃Cl con AlCl₃`,`Tolueno (metilbenceno)`,`alquilación de Friedel-Crafts`],[`(CH₃)₂CHCl con AlCl₃`,`Isopropilbenceno (cumeno)`,`alquilación de Friedel-Crafts`],[`CH₃COCl con AlCl₃`,`Acetofenona`,`acilación de Friedel-Crafts`],[`3 H₂ con Ni o Pt (presión y calor)`,`Ciclohexano`,`hidrogenación (adición forzada)`],[`Cl₂ con luz UV`,`Hexaclorociclohexano`,`halogenación radicalaria (adición)`]];
   const d = pick(R); const opts = shuf([d[1]].concat(shuf(R.filter(x => x !== d && x[1] !== d[1]).map(x => x[1])).slice(0, 3)));
   return { q:`Benceno + ${d[0]} → ¿qué producto se forma?`, opts, correct: opts.indexOf(d[1]), pasos:[`Identifica el reactivo y el catalizador: es una ${d[2]}.`, d[2].includes(`adición`) || d[2].includes(`hidrogenación`) ? `En condiciones forzadas el anillo pierde la aromaticidad.` : `Entra un grupo en lugar de un H y el anillo sigue aromático.`,`Producto: ${d[1]}.`], r: d[1] }; }}
);
