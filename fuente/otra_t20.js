/* «Explícalo de otra forma» · Tema 20: pH, pOH y constantes */
Object.assign(OTRA, {
[`pH y pKa: qué mide cada uno`]:{
  pre:[`Dos frascos: uno con mucho ácido débil y otro con poco ácido fuerte. ¿Qué número describe «cuánto H⁺ hay ahora» y cuál «qué tan fácil suelta su H⁺ el ácido»?`,`pH: cuánto H⁺ hay en la solución. pKa: la fuerza propia del ácido (qué tan fácil se disocia).`],
  idea:`<b>pH</b> describe la <b>solución</b> (cuánto H⁺ hay). <b>pKa</b> describe al <b>ácido</b> (su fuerza). En los dos: <b>número menor = más ácido</b>.`,
  por:[`pH = −log [H⁺]. El «−» convierte el log (negativo para números pequeños) en un número positivo.`,
    `pKa = −log Ka. Ka grande (ácido fuerte) → pKa pequeño.`,
    `La «p» siempre significa «−log»: pH, pOH, pKa, pKb.`],
  ojo:`pKa menor = ácido más fuerte. Es la misma inversión del fenol en el Tema 27.`,
  prueba:[[`¿Qué ácido es más fuerte: pKa 3 o pKa 5?`,`El de pKa 3.`],[`[H⁺] = 3.5 × 10⁻³ M: ¿pH?`,`2.46 (redondeado; el docente lo reporta truncado como 2.45).`]]
},
[`Escala logarítmica de acidez`]:{
  pre:[`De pH 7 a pH 4 hay 3 unidades. ¿El jugo de pH 4 tiene 3 veces o 1 000 veces más H⁺ que el agua?`,`1 000 veces: cada unidad de pH es ×10.`],
  idea:`La escala de pH es de <b>saltos de 10</b>: bajar 1 unidad = 10 veces más H⁺. Bajar 2 = 100 veces. Bajar 3 = 1 000 veces.`,
  por:[`[H⁺] = 10⁻ᵖᴴ y [OH⁻] = 10⁻⁽¹⁴⁻ᵖᴴ⁾.`,
    `pH 2 → [H⁺] = 10⁻² y [OH⁻] = 10⁻¹².`,
    `Por eso un pH de sangre de 7.0 (en lugar de 7.4) ya es una acidosis grave: es más del doble de H⁺.`],
  ojo:`Restar pH no da «veces»: la diferencia es el exponente de 10.`,
  prueba:[[`¿Cuántas veces más H⁺ tiene pH 3 que pH 6?`,`1 000 veces (10³).`]]
},
[`pH de ácidos fuertes`]:{
  pre:[`El HCl se separa al 100 %. Si pones 0.05 mol en 1 L, ¿cuánto H⁺ hay?`,`0.05 M: todo el ácido se convirtió en H⁺.`],
  idea:`Fuerte = se disocia todo → <b>[H⁺] = concentración del ácido</b> (× el número de H⁺ que libera). Luego pH = −log [H⁺].`,
  por:[`HCl 0.05 M → [H⁺] = 0.05 → pH = 1.3.`,
    `HNO₃ desde gramos: 0.315 g / 63 = 0.005 mol / 0.25 L = 0.02 M → pH 1.70.`,
    `Si libera 2 H⁺ (H₂SO₄ con disociación total): [H⁺] = 2 × C₀.`],
  ojo:`Si no alcanzas a terminar, deja el planteamiento escrito: el docente da puntos por el desarrollo.`,
  prueba:[[`HCl 0.001 M: ¿pH?`,`3.`]]
},
[`pH de ácidos débiles`]:{
  pre:[`Ácido acético 0.05 M y HCl 0.05 M: misma concentración. ¿Tendrán el mismo pH?`,`No: el acético solo suelta una parte de su H⁺, así que tiene menos H⁺ y su pH es más alto (3.02 frente a 1.3).`],
  idea:`Débil = suelta <b>solo una parte</b> de su H⁺. No puedes usar la concentración directa: necesitas <b>Ka</b> y la raíz: <b>[H⁺] = √(Ka · C₀)</b>.`,
  por:[`Ejemplo: Ka = 1.8 × 10⁻⁵, C₀ = 0.05 → [H⁺] = √(9 × 10⁻⁷) = 9.49 × 10⁻⁴ → pH 3.02.`,
    `Pista para reconocerlo: el enunciado te da Ka, o el ácido es acético, HF, etc.`,
    `Prueba de sentido: el pH del débil debe ser más alto que el del fuerte a igual concentración.`],
  ojo:`Si te dan Ka, casi seguro es débil y va la raíz.`,
  prueba:[[`¿Por qué un ácido débil tiene pH más alto que uno fuerte de igual concentración?`,`Porque se disocia solo parcialmente: libera menos H⁺.`]]
},
[`pOH`]:{
  pre:[`Para Ba(OH)₂ 0.025 M, ¿qué calculas primero: [H⁺] o [OH⁻]?`,`[OH⁻] (es una base): 2 × 0.025 = 0.05 M → pOH 1.30 → pH 12.70.`],
  idea:`Con una <b>base</b> trabajas al revés: primero <b>[OH⁻] → pOH</b>, y al final <b>pH = 14 − pOH</b>.`,
  por:[`pOH = −log [OH⁻].`,
    `Multiplica por el número de OH⁻ que libera: Ba(OH)₂ y Ca(OH)₂ dan 2.`,
    `pH + pOH = 14 (a 25 °C).`],
  ojo:`Error del Parcial 2: calcular −log(0.025) como si fuera [H⁺]. Una base nunca puede tener pH 1.6: si te sale ácido, invertiste.`,
  prueba:[[`NaOH 0.01 M: ¿pOH y pH?`,`pOH 2, pH 12.`],[`Ca(OH)₂ 0.005 M: ¿[OH⁻]?`,`0.01 M (×2).`]]
},
[`Disociación: fuerte frente a débil`]:{
  pre:[`¿Qué significa la flecha doble (⇌) en una ecuación?`,`Que la reacción va y viene: hay equilibrio y no se disocia todo.`],
  idea:`<b>Fuerte</b>: flecha simple (→), se separa el 100 %. <b>Débil</b>: flecha doble (⇌), la mayoría queda sin separarse (< 5 %).`,
  por:[`HCl + H₂O → H₃O⁺ + Cl⁻ (todo).`,
    `CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻ (poquito).`,
    `«Fuerte» no es «concentrado»: un ácido fuerte puede estar diluido y un débil, concentrado.`],
  ojo:`Fuerte/débil = cuánto se disocia. Concentrado/diluido = cuánto hay.`,
  prueba:[[`¿Qué flecha lleva la disociación del NH₃ en agua?`,`Doble (⇌): es una base débil.`]]
},
[`Constantes Ka y Kb: valor numérico`]:{
  pre:[`Ka del HF = 6.8 × 10⁻⁴ y del acético = 1.8 × 10⁻⁵. ¿Cuál es más fuerte?`,`El HF: su Ka es mayor (10⁻⁴ > 10⁻⁵).`],
  idea:`<b>K grande = fuerte</b>. <b>pK pequeño = fuerte</b>. Son la misma información en dos escalas opuestas.`,
  por:[`Fuertes: K ≫ 1, pK < 0, se disocian al 100 %.`,
    `Débiles: K entre 10⁻² y 10⁻¹⁴, pK entre 2 y 14.`,
    `Compara exponentes: 10⁻⁴ es mayor que 10⁻⁵.`],
  ojo:`Dos flechas opuestas: Ka ↑ → fuerza ↑; pKa ↑ → fuerza ↓.`,
  prueba:[[`Ka = 10⁻³ y Ka = 10⁻⁷: ¿cuál tiene el pKa menor?`,`El de Ka = 10⁻³ (pKa 3).`]]
},
[`Qué fórmula usar para pH`]:{
  pre:[`Te dan «KOH 0.02 M». ¿Es ácido o base? ¿Fuerte o débil?`,`Base fuerte: [OH⁻] = 0.02 → pOH 1.70 → pH 12.30.`],
  idea:`Antes de la calculadora, <b>dos preguntas</b>: ¿ácido o base? (H⁺/pH u OH⁻/pOH) y ¿fuerte o débil? (directo o raíz con K).`,
  por:[`Ácido fuerte: pH = −log C₀.`,
    `Ácido débil: [H⁺] = √(Ka·C₀).`,
    `Base fuerte: pOH = −log(n·C₀) → pH = 14 − pOH.`,
    `Base débil: [OH⁻] = √(Kb·C₀) → pOH → pH.`],
  ojo:`Prueba de sentido final: ácido → pH < 7; base → pH > 7.`,
  prueba:[[`NH₃ 0.1 M con Kb = 1.8 × 10⁻⁵: ¿qué fórmula?`,`Base débil: [OH⁻] = √(Kb·C₀), luego pOH y pH = 14 − pOH.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t20)`;
  set(`pH y pKa: qué mide cada uno`, [fig(cmp([`pH`, `describe la SOLUCIÓN`, `¿cuánto H⁺ hay?`, `−log [H⁺]`], [`pKa`, `describe al ÁCIDO`, `¿qué tan fácil suelta H⁺?`, `−log Ka`], { cl:P, cr:P, foot:`en los dos: número menor = más ácido`, label:`pH frente a pKa` }), `La «p» siempre significa «−log».`)]);
  set(`Escala logarítmica de acidez`, [fig(svg(560, 170, (() => { let s = ``; [[7, 1], [6, 10], [5, 100], [4, 1000]].forEach(([p, v], i) => { const x = 70 + i * 140, h = 12 + Math.log10(v) * 26; s += `<rect x="${x - 30}" y="${122 - h}" width="60" height="${h}" rx="6" style="fill:${R};opacity:${.25 + i * .15}"/>` + T(x, 142, `pH ${p}`, { c:`tb` }) + T(x, 112 - h, `×${v}`, { c:`tk`, fs:15 }); if (i < 3) s += `<line x1="${x + 36}" y1="92" x2="${x + 104}" y2="92" class="ar" marker-end="url(#ah)"/>`; }); return s + T(280, 162, `cada unidad que baja el pH → 10 veces más H⁺`, { c:`tm` }); })(), `Escala logarítmica`), `De pH 7 a pH 4: 10 × 10 × 10 = 1 000 veces más H⁺.`)]);
  set(`pH de ácidos fuertes`, [fig(flow([[`0.315 g HNO₃`, ``], [`÷ 63`, `0.005 mol`], [`÷ 0.25 L`, `0.02 M`], [`fuerte`, `[H⁺] = 0.02`], [`pH 1.70`, `−log`, P]], { label:`pH de un ácido fuerte desde gramos` }), `El problema 30 del Parcial 2, completo.`)]);
  set(`pH de ácidos débiles`, [fig(cmp([`HCl 0.05 M (fuerte)`, `se separa todo`, `[H⁺] = 0.05`, `pH 1.3`], [`Acético 0.05 M (débil)`, `se separa poco`, `[H⁺] = √(Ka·C₀) ≈ 9.5 × 10⁻⁴`, `pH 3.02`], { cl:R, cr:P, label:`Fuerte frente a débil` }), `Misma concentración, distinto pH.`)]);
  set(`pOH`, [fig(flow([[`Ba(OH)₂`, `0.025 M`], [`× 2 OH⁻`, `[OH⁻] = 0.05`], [`pOH`, `−log 0.05|= 1.30`], [`pH`, `14 − 1.30|= 12.70`, P]], { foot:`base → pOH primero · un pH < 7 para una base delata el error`, footCol:R, label:`pH de una base fuerte` }), `El problema 28 del Parcial 2, bien resuelto.`)]);
  set(`Disociación: fuerte frente a débil`, [fig(svg(560, 170, (() => { let s = ``; const box = (x, n, lab, sub) => { let t = `<rect x="${x - 110}" y="20" width="220" height="100" rx="10" class="bx"/>`; for (let i = 0; i < 10; i++){ const cx = x - 85 + (i % 5) * 42, cy = 50 + Math.floor(i / 5) * 40; t += i < n ? T(cx - 8, cy + 5, `H⁺`, { c:`tb`, col:R, fs:11 }) + T(cx + 10, cy + 5, `A⁻`, { c:`tm`, fs:11 }) : T(cx, cy + 5, `HA`, { c:`tk`, fs:13 }); } return t + T(x, 142, lab, { c:`tb` }) + T(x, 160, sub, { c:`tm` }); };
    return box(140, 10, `fuerte (→)`, `todo separado`) + box(420, 1, `débil (⇌)`, `casi todo queda como HA`); })(), `Disociación fuerte y débil`), `En el débil la mayoría de las moléculas no suelta su H⁺.`)]);
  set(`Constantes Ka y Kb: valor numérico`, [fig(cmp([`Ka grande`, `pKa pequeño`, `→ ácido FUERTE`], [`Ka pequeña`, `pKa grande`, `→ ácido DÉBIL`], { cl:R, cr:P, label:`Ka y pKa` }), `K y pK cuentan lo mismo en escalas opuestas.`)]);
  set(`Qué fórmula usar para pH`, [fig(svg(560, 200, (() => { let s = ``; const c = [[`ácido fuerte`, `pH = −log C₀`], [`ácido débil`, `[H⁺] = √(Ka·C₀)`], [`base fuerte`, `pOH = −log(n·C₀)`], [`base débil`, `[OH⁻] = √(Kb·C₀)`]];
    s += T(150, 22, `fuerte`, { c:`tb`, col:R }) + T(410, 22, `débil`, { c:`tb`, col:P });
    c.forEach(([a, f], i) => { const x = i % 2 ? 290 : 30, y = 36 + Math.floor(i / 2) * 76; s += `<rect x="${x}" y="${y}" width="240" height="60" rx="10" class="bx"/>` + T(x + 120, y + 24, a, { c:`tb` }) + T(x + 120, y + 46, f, { c:`tk`, fs:14 }); });
    return s + T(280, 194, `bases: al final, pH = 14 − pOH`, { c:`tb`, col:G }); })(), `Cuatro casos de pH`), `Dos preguntas: ¿ácido o base? ¿fuerte o débil?`)]);
})();
