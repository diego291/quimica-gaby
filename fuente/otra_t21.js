/* «Explícalo de otra forma» · Tema 21: cálculos, titulación y buffers */
Object.assign(OTRA, {
[`Qué te van a pedir en este tema`]:{
  pre:[`De todo el tema, ¿qué tipos de ejercicio crees que salen en el parcial?`,`pH de fuertes, pH de débiles (con Ka), titulación, buffers con Henderson-Hasselbalch e interpretación de acidosis y alcalosis.`],
  idea:`El tema es un <b>menú de cinco ejercicios</b>. Reconoce cuál te piden y usa su plantilla.`,
  por:[`1) Fuerte desde gramos → M → pH.`,
    `2) Débil → tabla ICE → √(Ka·C₀) → pH.`,
    `3) Titulación → moles H⁺ = moles OH⁻.`,
    `4) Buffer → pH = pKa + log(base/ácido).`,
    `5) Clínica → pH y HCO₃⁻ para decidir acidosis o alcalosis.`],
  ojo:`Resuelve primero los de plantilla corta (buffer, ácido fuerte) y deja los largos al final: en el Parcial 2 quedaron dos sin terminar.`,
  prueba:[[`Te dan un ácido débil y su sal. ¿Qué fórmula usas?`,`Henderson-Hasselbalch (es un buffer).`]]
},
[`De gramos a pH (ácidos y bases fuertes)`]:{
  pre:[`Para llegar de «0.182 g de HCl en 500 mL» al pH, ¿cuántos pasos hay?`,`Cuatro: gramos → moles → M → [H⁺] → pH.`],
  idea:`Una sola ruta para todo: <b>g → mol → M → [H⁺] u [OH⁻] → pH o pOH → el otro</b>.`,
  por:[`moles = g / PM; M = moles / L.`,
    `Ácido: [H⁺] = M × n.º de H⁺. Base: [OH⁻] = M × n.º de OH⁻.`,
    `Ejemplo: 0.182 g HCl / 36.5 = 0.00499 mol / 0.5 L = 0.00997 M → pH 2.0.`],
  ojo:`En bases, el log te da pOH. El pH sale de 14 − pOH.`,
  prueba:[[`2 g de NaOH (PM 40) en 500 mL: ¿pH?`,`0.05 mol / 0.5 L = 0.1 M → pOH 1 → pH 13.`]]
},
[`Ley del equilibrio en ácidos y bases débiles`]:{
  pre:[`En Ka = [H₃O⁺][A⁻] / [HA], ¿qué va arriba: lo que se formó o lo que quedó sin disociar?`,`Arriba lo que se formó (productos); abajo lo que queda (reactivos).`],
  idea:`Ka es una <b>razón</b>: <b>productos / reactivos</b>. Si sale grande, el ácido se disoció mucho; si sale pequeña, poco.`,
  por:[`HA + H₂O ⇌ H₃O⁺ + A⁻ → Ka = [H₃O⁺][A⁻] / [HA].`,
    `B + H₂O ⇌ BH⁺ + OH⁻ → Kb = [BH⁺][OH⁻] / [B].`,
    `El agua no aparece: es líquido puro y su concentración casi no cambia.`],
  ojo:`Arriba productos, abajo reactivos, y sin agua.`,
  prueba:[[`Escribe Kb del NH₃.`,`Kb = [NH₄⁺][OH⁻] / [NH₃].`]]
},
[`Tabla ICE y aproximación del 5 %`]:{
  pre:[`Si de 0.10 M de ácido acético solo se disocian 0.0013 M, ¿cambia mucho 0.10 − 0.0013?`,`Casi nada (0.0987 ≈ 0.10). Por eso se puede ignorar x en el denominador.`],
  idea:`ICE = <b>Inicio, Cambio, Equilibrio</b>. Del ácido se pierden x; de cada ion se ganan x. Si x es diminuta frente a C₀, <b>C₀ − x ≈ C₀</b> y queda <b>x = √(Ka·C₀)</b>.`,
  por:[`I: HA = C₀; H⁺ = 0; A⁻ = 0.`,
    `C: HA −x; H⁺ +x; A⁻ +x.`,
    `E: HA = C₀ − x; H⁺ = x; A⁻ = x → Ka = x² / (C₀ − x).`,
    `La aproximación vale si C₀ / Ka > 400 (equivale a ionizarse menos del 5 %).`],
  ojo:`x es [H⁺] en un ácido, pero [OH⁻] en una base.`,
  prueba:[[`C₀ = 0.1 y Ka = 1.8 × 10⁻⁵: ¿se puede aproximar?`,`Sí: 0.1 / 1.8 × 10⁻⁵ ≈ 5 556 > 400.`]]
},
[`Porcentaje de ionización`]:{
  pre:[`De cada 100 moléculas de ácido acético 0.10 M, ¿cuántas crees que sueltan su H⁺?`,`Alrededor de 1 (1.34 %).`],
  idea:`% ionización = <b>lo que se disoció / lo que había × 100</b> = [H⁺] / C₀ × 100. Si es menor de 5 %, confirma que es débil.`,
  por:[`Ejemplo: [H⁺] = 1.34 × 10⁻³, C₀ = 0.10 → 1.34 %.`,
    `Un ácido fuerte tendría 100 %.`,
    `Curiosidad: si diluyes un débil, el % de ionización aumenta (Le Chatelier), aunque haya menos H⁺ en total.`],
  ojo:`El denominador es la concentración inicial, no la de equilibrio.`,
  prueba:[[`[H⁺] = 2 × 10⁻³ M y C₀ = 0.2 M: ¿% ionización?`,`1 %.`]]
},
[`pH de una base débil (amoníaco)`]:{
  pre:[`En el NH₃, la x de la tabla ICE es [OH⁻]. Si sacas −log x, ¿obtienes pH o pOH?`,`pOH. El pH sale de 14 − pOH.`],
  idea:`Igual que un ácido débil, pero con <b>Kb</b> y <b>OH⁻</b>: x = √(Kb·C₀) = [OH⁻] → <b>pOH</b> → pH = 14 − pOH.`,
  por:[`NH₃ 0.15 M, Kb 1.8 × 10⁻⁵ → x² = 2.7 × 10⁻⁶ → x = 1.64 × 10⁻³ M.`,
    `pOH = 2.78 → pH = 11.22.`,
    `Prueba de sentido: base → pH > 7 ✓.`],
  ojo:`Error típico: llamar pH al −log [OH⁻]. Con una base, el log da pOH.`,
  prueba:[[`[OH⁻] = 10⁻³ M en una base débil: ¿pH?`,`pOH 3 → pH 11.`]]
},
[`Valoración (titulación) ácido-base`]:{
  pre:[`Tienes un ácido de concentración desconocida y una base de concentración conocida. ¿Cómo averiguas cuánto ácido hay?`,`Agregas base con la bureta hasta neutralizar exactamente, y con el volumen gastado calculas.`],
  idea:`Titular = <b>contar moles con un volumen</b>. Agregas una solución conocida (en la bureta) hasta neutralizar la desconocida (en el matraz). En ese punto, <b>moles de H⁺ = moles de OH⁻</b>.`,
  por:[`Bureta: titulante (concentración conocida). Matraz Erlenmeyer: analito + indicador.`,
    `Para ácido y base de 1 H⁺ / 1 OH⁻: C_ácido × V_ácido = C_base × V_base.`,
    `Ejemplo: 25 mL de HCl gastan 20 mL de NaOH 0.1 M → C_HCl = 0.1 × 20 / 25 = 0.08 M.`],
  ojo:`Se parece a C₁V₁ = C₂V₂, pero aquí son dos sustancias distintas que reaccionan.`,
  prueba:[[`¿Dónde va el indicador en una titulación?`,`En el matraz, con el analito.`]]
},
[`Equivalencia, punto final e indicador`]:{
  pre:[`¿El momento en que cambia el color del indicador es exactamente el momento en que se neutralizó todo?`,`Casi, pero no exactamente: el cambio de color es el punto final (experimental); la neutralización exacta es el punto de equivalencia (teórico).`],
  idea:`<b>Equivalencia</b> = lo teórico (moles H⁺ = moles OH⁻). <b>Punto final</b> = lo que ves (el indicador cambia). Se elige un indicador que vire lo más cerca posible de la equivalencia.`,
  por:[`Ácido fuerte + base fuerte: la equivalencia es a pH 7.`,
    `Cerca de la equivalencia, una sola gota cambia mucho el pH: por eso el indicador vira de golpe.`,
    `Fenolftaleína vira en 8.2–10: con fuerte-fuerte el salto es tan grande que funciona bien.`],
  ojo:`Equivalencia = teoría. Punto final = observación.`,
  prueba:[[`¿Qué pH tiene la equivalencia de HCl con NaOH?`,`7.`]]
},
[`Solución amortiguadora (buffer)`]:{
  pre:[`Un buffer tiene un ácido débil (HA) y su base conjugada (A⁻). Si le agregas OH⁻, ¿cuál de los dos lo neutraliza?`,`El ácido HA: HA + OH⁻ → A⁻ + H₂O. Una base no neutraliza a otra base.`],
  idea:`Un buffer tiene <b>dos guardianes</b>: el <b>ácido (HA)</b> se come el <b>OH⁻</b> que entra; la <b>base (A⁻)</b> se come el <b>H⁺</b> que entra. Por eso el pH casi no cambia.`,
  por:[`Entra H⁺: A⁻ + H⁺ → HA (la base lo atrapa).`,
    `Entra OH⁻: HA + OH⁻ → A⁻ + H₂O (el ácido lo neutraliza).`,
    `Funciona mejor cuando hay cantidades parecidas de HA y A⁻.`,
    `Si se gasta uno de los guardianes, el buffer deja de funcionar (se rebasa su capacidad).`],
  ojo:`Error del Parcial 2: «la base débil neutraliza el OH⁻». Es al revés: el OH⁻ lo neutraliza el ácido.`,
  prueba:[[`¿Qué componente del buffer neutraliza un ácido fuerte?`,`La base conjugada (A⁻).`],[`¿Qué componente neutraliza una base fuerte?`,`El ácido débil (HA).`]]
},
[`Ejemplos de buffers`]:{
  pre:[`En el par H₂PO₄⁻ / HPO₄²⁻, ¿cuál acepta protones?`,`HPO₄²⁻: la que tiene un H menos es la base.`],
  idea:`Todo buffer es un <b>par conjugado</b>: dos especies que se diferencian en <b>un H⁺</b>. La que tiene <b>un H menos</b> es la <b>base</b> (acepta H⁺).`,
  por:[`Bicarbonato (sangre): H₂CO₃ (ácido) / HCO₃⁻ (base).`,
    `Fosfato (intracelular, orina): H₂PO₄⁻ (ácido) / HPO₄²⁻ (base).`,
    `Acetato: CH₃COOH / CH₃COO⁻. Amoniacal: NH₄⁺ (ácido) / NH₃ (base).`,
    `En el laboratorio: PBS (pH 7.4), Tris, HEPES; y los buffers de calibración del pHmetro (4, 7, 10).`],
  ojo:`Error del Parcial 2: el fosfato que acepta H⁺ es HPO₄²⁻, no H₂PO₄⁻.`,
  prueba:[[`En el buffer bicarbonato, ¿qué especie acepta H⁺?`,`HCO₃⁻.`]]
},
[`Ecuación de Henderson-Hasselbalch`]:{
  pre:[`Si en un buffer hay la misma cantidad de ácido y de base, ¿cuánto vale log(base/ácido)? ¿Y el pH?`,`log 1 = 0, así que pH = pKa.`],
  idea:`<b>pH = pKa + log(base / ácido)</b>. Parte del pKa y lo <b>ajusta</b>: más base → pH sube por encima del pKa; más ácido → baja.`,
  por:[`Ejemplo: acético 0.20 M + acetato 0.30 M → pKa 4.74 + log(1.5) = 4.74 + 0.18 = 4.92.`,
    `Sirve con moles directamente: el volumen se cancela en la razón.`,
    `Problema 29 del Parcial 2: 0.25 mol de acético y 0.35 de acetato → 4.74 + log(1.4) = 4.89. Son tres líneas.`],
  ojo:`Arriba va la <b>base</b> (sal, A⁻), abajo el <b>ácido</b>. Si los inviertes, el pH sale del lado equivocado del pKa.`,
  prueba:[[`pKa 4.74, base 0.1 M, ácido 0.1 M: ¿pH?`,`4.74.`],[`Si hay más base que ácido, ¿el pH queda arriba o abajo del pKa?`,`Arriba.`]]
},
[`Acidosis y alcalosis metabólica`]:{
  pre:[`Si el cuerpo gasta bicarbonato (la base del buffer de la sangre) para neutralizar ácidos, ¿cómo quedan el HCO₃⁻ y el pH?`,`HCO₃⁻ bajo y pH bajo: acidosis metabólica.`],
  idea:`Dos datos y dos preguntas: <b>¿pH bajo o alto?</b> (acidosis o alcalosis) y <b>¿el HCO₃⁻ va en la misma dirección?</b> (si sí, es metabólica).`,
  por:[`Referencias: pH 7.35–7.45 · HCO₃⁻ 22–26 mmol/L · pCO₂ 35–45 mmHg.`,
    `Acidosis metabólica: pH ↓ y HCO₃⁻ ↓ (cetoacidosis, diarrea, insuficiencia renal).`,
    `Alcalosis metabólica: pH ↑ y HCO₃⁻ ↑ (vómitos que pierden ácido).`,
    `En metabólica, pH y HCO₃⁻ se mueven en la misma dirección.`],
  ojo:`Un pH de 7.45 está en el límite; 7.46 ya es alcalemia.`,
  prueba:[[`pH 7.28 y HCO₃⁻ 15 mmol/L: ¿qué trastorno?`,`Acidosis metabólica.`],[`pH 7.52 y HCO₃⁻ 32 mmol/L: ¿qué trastorno?`,`Alcalosis metabólica.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t21)`;
  set(`Qué te van a pedir en este tema`, [fig(flow([[`Fuerte`, `g → M → pH`], [`Débil`, `ICE → √`], [`Titulación`, `mol H⁺ =|mol OH⁻`], [`Buffer`, `Henderson-|Hasselbalch`, P], [`Clínica`, `pH + HCO₃⁻`]], { noArr:1, h:84, label:`Tipos de ejercicio` }), `Cinco plantillas: reconoce cuál te piden.`)]);
  set(`De gramos a pH (ácidos y bases fuertes)`, [fig(flow([[`gramos`, ``], [`÷ PM`, `moles`], [`÷ L`, `M`], [`× n`, `[H⁺] u [OH⁻]`], [`−log`, `pH o pOH`, P]], { foot:`si calculaste pOH: pH = 14 − pOH`, label:`De gramos a pH` }), `La misma ruta para ácidos y bases fuertes.`)]);
  set(`Ley del equilibrio en ácidos y bases débiles`, [fig(svg(560, 140, T(280, 40, `HA + H₂O ⇌ H₃O⁺ + A⁻`, { c:`tk`, fs:20 }) + T(200, 92, `Ka =`, { c:`tk`, fs:20, a:`end` }) + T(300, 82, `[H₃O⁺] [A⁻]`, { c:`tk`, fs:18, col:G }) + ln(225, 90, 375, 90) + T(300, 114, `[HA]`, { c:`tk`, fs:18, col:R }) + T(450, 82, `productos`, { c:`tm` }) + T(450, 114, `reactivos`, { c:`tm` }), `Expresión de Ka`), `Arriba lo que se formó, abajo lo que queda; el agua no aparece.`)]);
  set(`Tabla ICE y aproximación del 5 %`, [fig(svg(560, 190, (() => { let s = ``; const H = [``, `HA`, `H⁺`, `A⁻`], rows = [[`I`, `C₀`, `0`, `0`], [`C`, `−x`, `+x`, `+x`], [`E`, `C₀ − x ≈ C₀`, `x`, `x`]];
    H.forEach((h, j) => s += T(80 + j * 130, 30, h, { c:`tb` }));
    rows.forEach((r, i) => r.forEach((c, j) => s += T(80 + j * 130, 66 + i * 36, c, { c:j ? `tk` : `tb`, fs:j ? 16 : 14, col:i === 2 && j ? P : null })));
    return s + ln(30, 42, 530, 42, `dash`) + T(280, 180, `Ka = x² / C₀  →  x = √(Ka·C₀)`, { c:`tb`, fs:15 }); })(), `Tabla ICE`), `Si x es muy pequeña, C₀ − x se aproxima a C₀.`)]);
  set(`Porcentaje de ionización`, [fig(svg(560, 150, (() => { let s = ``; for (let i = 0; i < 100; i++){ const x = 30 + (i % 25) * 20, y = 24 + Math.floor(i / 25) * 22; s += `<circle cx="${x}" cy="${y}" r="7" style="fill:${i === 0 ? R : `var(--muted)`};opacity:${i === 0 ? 1 : .35}"/>`; } return s + T(280, 130, `100 moléculas de ácido acético 0.10 M: solo ≈ 1 suelta su H⁺ (1.34 %)`, { c:`tb` }); })(), `Porcentaje de ionización`), `Menos del 5 % → ácido débil.`)]);
  set(`pH de una base débil (amoníaco)`, [fig(flow([[`NH₃ 0.15 M`, `Kb 1.8 × 10⁻⁵`], [`x = √(Kb·C₀)`, `= [OH⁻]|1.64 × 10⁻³`], [`pOH`, `2.78`], [`pH`, `14 − 2.78|= 11.22`, P]], { foot:`con una base, −log da pOH (no pH)`, footCol:R, label:`pH de una base débil` }), `La misma tabla ICE, pero x es [OH⁻].`)]);
  set(`Valoración (titulación) ácido-base`, [fig(svg(560, 220, `<rect x="120" y="14" width="22" height="110" rx="4" class="s"/><rect x="122" y="40" width="18" height="82" style="fill:${G};opacity:.35"/>` + ln(131, 124, 131, 140) + T(150, 50, `bureta: titulante`, { c:`tb`, a:`start` }) + T(150, 68, `(concentración conocida)`, { c:`tm`, a:`start` }) + `<path d="M110 150 L100 205 L162 205 L152 150 Z" class="s"/><path d="M104 185 L101 205 L161 205 L158 185 Z" style="fill:${R};opacity:.35"/>` + T(175, 190, `matraz: analito + indicador`, { c:`tb`, a:`start` }) + sep(370, 20, 210) + T(465, 80, `en la equivalencia:`, { c:`tb` }) + T(465, 108, `mol H⁺ = mol OH⁻`, { c:`tk`, fs:16, col:P }) + T(465, 140, `C·V (ácido) = C·V (base)`, { c:`tk`, fs:16 }), `Montaje de una titulación`), `Arriba lo conocido, abajo lo desconocido.`)]);
  set(`Equivalencia, punto final e indicador`, [fig(svg(560, 190, `<polyline points="40,160 140,152 220,140 260,120 272,100 278,60 284,36 300,26 400,20 520,16" class="s" style="stroke:${P};stroke-width:3"/>` + ln(278, 10, 278, 170, `dash`) + T(278, 184, `equivalencia (pH 7)`, { c:`tb` }) + T(40, 30, `pH`, { c:`tm`, a:`start` }) + T(520, 176, `mL de base`, { c:`tm`, a:`end` }) + T(400, 60, `salto brusco: una gota`, { c:`tm` }) + T(400, 76, `cambia mucho el pH`, { c:`tm` }), `Curva de titulación`), `El indicador vira dentro del salto, muy cerca de la equivalencia.`)]);
  set(`Solución amortiguadora (buffer)`, [fig(svg(560, 180, T(280, 30, `buffer = HA + A⁻`, { c:`tb`, fs:16 }) + `<rect x="30" y="50" width="230" height="90" rx="12" class="bx"/>` + T(145, 76, `entra H⁺`, { c:`tb`, col:R }) + T(145, 104, `A⁻ + H⁺ → HA`, { c:`tk`, fs:16 }) + T(145, 128, `lo atrapa la BASE`, { c:`tm` }) + `<rect x="300" y="50" width="230" height="90" rx="12" class="bx"/>` + T(415, 76, `entra OH⁻`, { c:`tb`, col:G }) + T(415, 104, `HA + OH⁻ → A⁻ + H₂O`, { c:`tk`, fs:16 }) + T(415, 128, `lo neutraliza el ÁCIDO`, { c:`tm` }) + T(280, 170, `cada intruso lo neutraliza su contrario`, { c:`tb`, col:P }), `Mecanismo del buffer`), `Una base no neutraliza a otra base: el OH⁻ lo neutraliza el ácido.`)]);
  set(`Ejemplos de buffers`, [fig(svg(560, 190, [[`H₂CO₃`, `HCO₃⁻`, `bicarbonato`], [`H₂PO₄⁻`, `HPO₄²⁻`, `fosfato`], [`CH₃COOH`, `CH₃COO⁻`, `acetato`], [`NH₄⁺`, `NH₃`, `amoniacal`]].map(([a, b, n], i) => { const y = 30 + i * 40; return T(70, y + 5, n, { c:`tm`, a:`start` }) + T(250, y + 5, a, { c:`tk`, fs:16, col:R }) + T(330, y + 5, `⇌`, { c:`tk` }) + T(420, y + 5, b, { c:`tk`, fs:16, col:G }); }).join(``) + T(250, 184, `ácido (dona H⁺)`, { c:`tb`, col:R }) + T(420, 184, `base (acepta H⁺)`, { c:`tb`, col:G }), `Pares de buffers`), `La base es la que tiene un H menos.`)]);
  set(`Ecuación de Henderson-Hasselbalch`, [fig(flow([[`pKa`, `−log 1.8×10⁻⁵|= 4.74`], [`base / ácido`, `0.35 / 0.25|= 1.4`], [`log`, `log 1.4|= 0.15`], [`pH`, `4.74 + 0.15|= 4.89`, P]], { foot:`base arriba, ácido abajo · base = ácido → pH = pKa`, label:`Henderson Hasselbalch paso a paso` }), `El problema 29 del Parcial 2, en cuatro pasos.`)]);
  set(`Acidosis y alcalosis metabólica`, [fig(scale([[`acidosis`, 3, R, `pH < 7.35`], [`normal`, 2, G, `7.35–7.45`], [`alcalosis`, 3, `var(--t17)`, `pH > 7.45`]], { foot:`metabólica: el HCO₃⁻ va en la misma dirección que el pH`, label:`Estado ácido base` }), `Primero mira el pH; luego confirma con el bicarbonato.`)]);
})();
