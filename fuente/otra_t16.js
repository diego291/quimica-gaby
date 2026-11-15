/* «Explícalo de otra forma» · Tema 16: unidades de concentración */
Object.assign(OTRA, {
[`Saturación de las soluciones`]:{
  pre:[`Echas azúcar a un vaso de agua y llega un momento en que ya no se disuelve y queda en el fondo. ¿Qué tipo de solución tienes en ese momento?`,`Saturada: el agua ya disolvió el máximo posible a esa temperatura.`],
  idea:`Compara con el <b>máximo</b> que cabe: <b>menos</b> → insaturada · <b>justo el máximo</b> → saturada · <b>más que el máximo</b> (inestable) → sobresaturada.`,
  por:[`En la saturada hay equilibrio: tanto soluto se disuelve como el que cristaliza, al mismo ritmo.`,
    `La sobresaturada se logra calentando, disolviendo más y enfriando con cuidado. Un golpe o un cristal la hacen precipitar.`,
    `El máximo cambia con la temperatura: lo que está saturado frío puede estar insaturado caliente.`],
  ojo:`Diluida/concentrada son palabras vagas; insaturada/saturada se comparan con el máximo.`,
  prueba:[[`¿Qué pasa si agregas un cristal a una solución sobresaturada?`,`El exceso de soluto cristaliza de golpe.`]]
},
[`Unidades físicas y químicas`]:{
  pre:[`«Hay 5 gramos en 100 mL» y «hay 0.1 moles en 1 litro». ¿Cuál habla de masa y cuál de número de partículas?`,`La primera es física (masa); la segunda es química (moles = partículas).`],
  idea:`Toda unidad de concentración es una <b>fracción</b>: <b>cuánto soluto / cuánta solución (o solvente)</b>. Las <b>físicas</b> usan gramos o mL; las <b>químicas</b>, moles o equivalentes.`,
  por:[`Físicas: % m/m, % v/v, % m/v, ppm.`,
    `Químicas: M (mol/L de solución), m (mol/kg de <b>solvente</b>), N (eq/L de solución).`,
    `Fíjate en el denominador: casi todas dividen entre <b>solución</b>; solo la molalidad divide entre <b>solvente</b>.`],
  ojo:`Lee siempre la unidad del denominador: solución o solvente.`,
  prueba:[[`¿Cuál unidad divide entre kg de solvente?`,`La molalidad (m).`]]
},
[`Los tres porcentajes`]:{
  pre:[`Un suero al 5 % m/v: ¿cuántos gramos de glucosa hay en 100 mL? ¿Y en 1 000 mL?`,`5 g en 100 mL; 50 g en 1 000 mL (10 veces más volumen, 10 veces más soluto).`],
  idea:`Un porcentaje es una <b>receta por cada 100</b>: «X %» = X de soluto en cada 100 de solución. Para otro volumen, <b>escala con una regla de tres</b> y estima antes de calcular.`,
  por:[`% m/m: g en 100 g de solución. % v/v: mL en 100 mL. % m/v: g en 100 mL.`,
    `El denominador es la <b>solución</b> = soluto + solvente. «25 g en 175 g de agua» → solución = 200 g → 12.5 % m/m.`,
    `Ejemplo del Lab 2: glucosa 7 % m/v en 2 300 mL → 7 g × 23 = 161 g. Un resultado de 0.30 g sería imposible.`,
    `Convención del docente: mL de solvente = mL de solución − g de soluto.`],
  ojo:`Prueba de sentido: si el volumen crece, los gramos también. Si te sale menos de lo que hay en 100 mL, invertiste la regla de tres.`,
  prueba:[[`¿Cuántos gramos de NaCl hay en 500 mL de suero al 0.9 % m/v?`,`4.5 g (0.9 × 5).`],[`35 mL de etanol en 960 mL de solución: ¿% v/v?`,`3.65 % (redondeado, no truncado).`]]
},
[`Partes por millón (ppm)`]:{
  pre:[`¿Por qué no se usa «0.0002 %» para el plomo en el agua?`,`Porque es incómodo: para cantidades diminutas se usan ppm (mg por L).`],
  idea:`ppm = <b>mg de soluto por litro</b> (o por kg). Sirve para <b>trazas</b>: soluciones muy diluidas, no concentradas.`,
  por:[`1 ppm = 1 mg en 1 L de agua (1 kg), o sea 1 parte en un millón.`,
    `Antes de dividir: soluto en <b>mg</b> y volumen en <b>L</b>. 800 mL = 0.8 L.`,
    `Ejemplo: 4 mg de flúor en 800 mL → 4 / 0.8 = 5 ppm.`],
  ojo:`ppm = muy diluida (trazas). Fue un error del Parcial 2: no es para soluciones concentradas.`,
  prueba:[[`2 mg de un contaminante en 500 mL de agua: ¿ppm?`,`4 ppm (2 mg / 0.5 L).`]]
},
[`Molaridad (M)`]:{
  pre:[`Disuelves 2 moles de NaCl y completas 1 L de solución. ¿Cuál es la molaridad? ¿Y si completas 2 L?`,`2 M; con 2 L, 1 M (mismo soluto en el doble de volumen).`],
  idea:`<b>M = moles de soluto / litros de solución</b>. Siempre en dos tiempos: <b>gramos → moles</b> (÷ PM) y luego <b>moles → M</b> (÷ L).`,
  por:[`Paso 1: PM sumando masas atómicas (NaCl = 23 + 35.5 = 58.5 g/mol).`,
    `Paso 2: moles = g / PM.`,
    `Paso 3: volumen en litros (250 mL = 0.25 L).`,
    `Paso 4: M = moles / L.`,
    `Ejemplo: 49 g de H₂SO₄ (PM 98) en 500 mL → 0.5 mol / 0.5 L = 1 M.`],
  ojo:`Si te queda «moles» sin dividir entre litros, aún no es molaridad.`,
  prueba:[[`0.315 g de HNO₃ (PM 63) en 250 mL: ¿M?`,`0.005 mol / 0.25 L = 0.02 M.`]]
},
[`Molalidad (m)`]:{
  pre:[`Si calientas una solución, su volumen crece un poco pero su masa no cambia. ¿Qué unidad no se afecta: la que usa litros o la que usa kilogramos?`,`La que usa kilogramos: la molalidad.`],
  idea:`<b>m = moles de soluto / kg de solvente</b>. Misma idea que la molaridad, pero dividiendo entre la <b>masa del solvente</b> (no de la solución).`,
  por:[`Por usar masa, no cambia con la temperatura; la molaridad sí (el volumen se dilata).`,
    `Ejemplo: 20 g de NaOH (PM 40) en 400 g de agua → 0.5 mol / 0.4 kg = 1.25 m.`,
    `Pasa los gramos de agua a kg (÷ 1 000).`],
  ojo:`M mayúscula: litros de solución. m minúscula: kg de solvente.`,
  prueba:[[`Diferencia en una frase entre M y m.`,`M = mol/L de solución; m = mol/kg de solvente.`]]
},
[`Normalidad (N)`]:{
  pre:[`El H₂SO₄ suelta 2 H⁺ por molécula y el HCl solo 1. Con la misma molaridad, ¿cuál «neutraliza» más?`,`El H₂SO₄: el doble. La normalidad cuenta esa capacidad (equivalentes).`],
  idea:`La normalidad cuenta <b>capacidad de reaccionar</b>: N = M × n, donde n = H⁺, OH⁻ o cargas que aporta cada fórmula. Se resuelve escribiendo las <b>unidades</b> en cada paso.`,
  por:[`PE (peso equivalente) = PM / n → unidad <b>g/eq</b>.`,
    `Equivalentes = masa (g) / PE (g/eq) → unidad <b>eq</b>.`,
    `N = eq / L → unidad <b>eq/L</b>.`,
    `Ejemplo: 37 g de Ca(OH)₂ (PM 74, n = 2) en 2 L → PE 37 g/eq → 1 eq → N = 0.5 N.`],
  ojo:`Los dos errores de Gaby: usar el PE como si fueran equivalentes, y olvidar dividir entre litros. Si tu resultado no termina en «eq/L», falta un paso.`,
  prueba:[[`25 g de CaCO₃ (PM 100, n = 2) en 700 mL: ¿N?`,`PE 50 → 0.5 eq → 0.5 / 0.7 = 0.71 N.`],[`HCl 0.3 M: ¿N?`,`0.3 N (n = 1).`]]
},
[`Qué fórmula usar según el enunciado`]:{
  pre:[`Un problema te da gramos de soluto, la fórmula química y «gramos de agua», y pide «molal». ¿Qué fórmula usas?`,`Molalidad: moles / kg de solvente.`],
  idea:`Lee <b>qué te dan</b> y <b>qué te piden</b>: las unidades del enunciado eligen la fórmula por ti.`,
  por:[`g y g → % m/m. mL y mL → % v/v. g y mL → % m/v. mg y L → ppm.`,
    `«Molar» o mol/L → M. «Molal» o kg de agua → m. «Normal» o equivalentes → N.`,
    `Una solución madre que se diluye → C₁V₁ = C₂V₂ (Tema 17).`],
  ojo:`Antes de calcular, escribe las unidades que tendrá tu respuesta.`,
  prueba:[[`Te dan mL de alcohol y mL de solución. ¿Qué unidad calculas?`,`% v/v.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t16)`;
  set(`Saturación de las soluciones`, [fig(scale([[`insaturada`, 5, G, `menos del máximo`], [`saturada`, 1, P, `justo el máximo`], [`sobresaturada`, 3, R, `más (inestable)`]], { title:`cantidad de soluto disuelto →`, label:`Saturación` }), `La línea de la saturada es el máximo que cabe a esa temperatura.`)]);
  set(`Unidades físicas y químicas`, [fig(cmp([`Físicas (g, mL)`, `% m/m · % v/v · % m/v`, `ppm (mg/L)`, `÷ solución`], [`Químicas (mol, eq)`, `M = mol / L solución`, `m = mol / kg SOLVENTE`, `N = eq / L solución`], { cl:P, cr:P, label:`Unidades de concentración` }), `Solo la molalidad divide entre solvente.`)]);
  set(`Los tres porcentajes`, [fig(flow([[`7 % m/v`, `7 g en|100 mL`], [`× 23`, `2 300 mL =|23 × 100 mL`], [`161 g`, `7 × 23`, P]], { foot:`estima antes: más volumen → más gramos`, label:`Escalar un porcentaje` }), `El problema de la glucosa del Lab 2, resuelto con una regla de tres.`)]);
  set(`Partes por millón (ppm)`, [fig(flow([[`4 mg`, `soluto en mg`], [`800 mL`, `→ 0.8 L`], [`÷`, `mg / L`], [`5 ppm`, ``, P]], { label:`Calcular ppm` }), `Revisa las unidades antes de dividir: mg y L.`)]);
  set(`Molaridad (M)`, [fig(flow([[`49 g H₂SO₄`, ``], [`÷ PM 98`, `g → mol`], [`0.5 mol`, ``], [`÷ 0.5 L`, `mol → M`], [`1 M`, `mol/L`, P]], { label:`Pasos de la molaridad` }), `Gramos → moles → molaridad.`)]);
  set(`Molalidad (m)`, [fig(cmp([`Molaridad (M)`, `mol / L de SOLUCIÓN`, `cambia con la temperatura`], [`Molalidad (m)`, `mol / kg de SOLVENTE`, `no cambia con la temperatura`], { cr:P, label:`Molaridad frente a molalidad` }), `Mismo numerador; distinto denominador.`)]);
  set(`Normalidad (N)`, [fig(flow([[`PE = PM / n`, `74 / 2 = 37|g/eq`], [`eq = g / PE`, `37 g ÷ 37 g/eq|= 1 eq`], [`N = eq / L`, `1 eq ÷ 2 L|= 0.5 eq/L`, P]], { foot:`si la respuesta no termina en «eq/L», falta un paso`, footCol:R, label:`Pasos de la normalidad con unidades` }), `El problema del Ca(OH)₂ del Parcial 2, con las unidades escritas.`)]);
  set(`Qué fórmula usar según el enunciado`, [fig(svg(560, 210, [[`g y g`, `% m/m`], [`mL y mL`, `% v/v`], [`g y mL`, `% m/v`], [`mg y L`, `ppm`], [`«molar»`, `M`], [`«molal»`, `m`], [`«normal»`, `N`], [`madre + diluir`, `C₁V₁ = C₂V₂`]].map(([a, b], i) => { const x = i < 4 ? 20 : 290, y = 30 + (i % 4) * 46; return `<rect x="${x}" y="${y - 20}" width="250" height="34" rx="8" class="bx"/>` + T(x + 14, y + 2, a, { c:`tm`, a:`start` }) + T(x + 236, y + 2, b, { c:`tb`, a:`end`, col:P }); }).join(``), `Qué fórmula según los datos`), `Las unidades del enunciado eligen la fórmula.`)]);
})();
