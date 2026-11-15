/* «Explícalo de otra forma» · Tema 15: soluciones */
Object.assign(OTRA, {
[`Qué es una solución`]:{
  pre:[`Agua con sal y agua con arena: si las dejas en reposo, ¿cuál se separa?`,`La de arena (se va al fondo). La de sal no: es una solución.`],
  idea:`Una solución es una mezcla <b>tan fina</b> que se ve como <b>una sola fase</b>: sus partículas son tan pequeñas (0.1–2 nm) que no se ven, no dispersan la luz y no se asientan.`,
  por:[`Partículas diminutas → no las detiene un filtro ni se van al fondo.`,
    `Transparente no es lo mismo que incolora: el CuSO₄ en agua es azul, pero se ve a través.`,
    `Por eso un suero salino puede pasar días en el estante y sigue igual.`],
  ojo:`Transparente ≠ incolora.`,
  prueba:[[`¿Una solución de CuSO₄ azul deja de ser solución por tener color?`,`No: es transparente y homogénea, aunque tenga color.`]]
},
[`Soluto y solvente`]:{
  pre:[`En el alcohol al 70 %, ¿quién es el solvente: el alcohol o el agua?`,`El alcohol: es el que está en mayor cantidad (70 %).`],
  idea:`La regla es de <b>cantidad</b>, no del estado físico: el que está en <b>mayor</b> cantidad es el <b>solvente</b>; el de menor, el <b>soluto</b>.`,
  por:[`Etanol al 10 %: soluto etanol, solvente agua.`,
    `Etanol al 70 %: se invierte; solvente etanol, soluto agua.`,
    `Suero fisiológico 0.9 %: soluto NaCl, solvente agua.`],
  ojo:`El agua no siempre es el solvente: depende de las proporciones.`,
  prueba:[[`En una mezcla de 40 % agua y 60 % etanol, ¿quién es el soluto?`,`El agua.`]]
},
[`Propiedades generales y coligativas`]:{
  pre:[`Si disuelves 1 mol de azúcar o 1 mol de urea (distintas moléculas, mismas partículas) en la misma agua, ¿cambiará igual su punto de congelación?`,`Sí: las propiedades coligativas dependen de cuántas partículas hay, no de cuáles son.`],
  idea:`<b>Generales</b> = cómo es la solución (homogénea, estable, transparente). <b>Coligativas</b> = efectos que dependen solo de <b>cuántas</b> partículas de soluto hay.`,
  por:[`Las cuatro coligativas: ↓ presión de vapor · ↑ punto de ebullición · ↓ punto de congelación · presión osmótica.`,
    `Más partículas disueltas → el solvente «escapa» peor: le cuesta más evaporarse y congelarse.`,
    `El NaCl cuenta doble: se separa en Na⁺ y Cl⁻.`],
  ojo:`Coligativa = «cuántas», no «cuáles». Fue una de las preguntas falladas del Parcial 2.`,
  prueba:[[`¿De qué depende una propiedad coligativa?`,`Del número de partículas de soluto disueltas.`],[`¿El soluto sube o baja el punto de congelación?`,`Lo baja (descenso crioscópico).`]]
},
[`Factores que afectan la solubilidad`]:{
  pre:[`Al abrir un refresco caliente sale más gas que al abrir uno frío. ¿Qué te dice eso de la solubilidad de los gases?`,`Que a mayor temperatura, los gases se disuelven menos.`],
  idea:`Cuatro factores: <b>naturaleza</b> (semejante disuelve semejante), <b>temperatura</b>, <b>presión</b> (solo gases) y <b>agitación/tamaño</b> (rapidez). La trampa está en la temperatura: sólidos y gases van al revés.`,
  por:[`Sólidos y líquidos: ↑ T → ↑ solubilidad.`,
    `Gases: ↑ T → ↓ solubilidad (las moléculas escapan).`,
    `Gases: ↑ presión → ↑ solubilidad (ley de Henry: el refresco cerrado guarda el CO₂).`,
    `Polar disuelve polar; apolar disuelve apolar: el aceite no se mezcla con agua.`],
  ojo:`Para un gas: presión ↑ ayuda; temperatura ↑ perjudica.`,
  prueba:[[`¿Qué favorece la solubilidad de un gas: más temperatura o más presión?`,`Más presión.`]]
},
[`Velocidad de disolución`]:{
  pre:[`¿Qué se disuelve más rápido en café: azúcar en polvo o un cubo de azúcar? ¿Y al final se disuelve la misma cantidad?`,`El polvo, más rápido. Y sí: la cantidad máxima (solubilidad) es la misma.`],
  idea:`<b>Solubilidad</b> = cuánto se disuelve como máximo. <b>Velocidad</b> = qué tan rápido. Moler, agitar y calentar aceleran, pero no cambian cuánto cabe (salvo la temperatura).`,
  por:[`Partícula pequeña → más superficie de contacto → más rápido.`,
    `Agitar retira lo ya disuelto de la superficie y deja llegar solvente nuevo.`,
    `Calentar aumenta los choques entre moléculas.`],
  ojo:`Agitar acelera, pero no hace que se disuelva más.`,
  prueba:[[`¿Agitar aumenta la solubilidad?`,`No: aumenta la velocidad de disolución.`]]
},
[`Soluciones de uso en el laboratorio clínico`]:{
  pre:[`Si preparas mal la concentración de un reactivo, ¿qué le pasa al resultado de la prueba del paciente?`,`Sale equivocado: la exactitud de la prueba depende de la solución.`],
  idea:`Cinco tipos según su <b>función</b>: <b>buffers</b> (mantienen el pH) · <b>reactivos</b> (reaccionan con el analito) · <b>conservadoras</b> (protegen la muestra) · <b>limpieza</b> · <b>tinciones</b> (colorean).`,
  por:[`Ejemplo de cada una: buffer de fosfatos, reactivo de glucosa, anticoagulante en el tubo, hipoclorito, colorante de Gram.`,
    `Todas exigen una concentración exacta: por eso el resto de la unidad es aprender a calcularla.`],
  ojo:`Asocia cada tipo con el verbo de su función: mantener, reaccionar, conservar, limpiar, colorear.`,
  prueba:[[`¿Qué tipo de solución mantiene el pH estable durante una prueba?`,`Una amortiguadora (buffer).`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t15)`;
  const vaso = (x, dots, settle) => { let s = `<path d="M${x - 45} 30 L${x - 40} 130 L${x + 40} 130 L${x + 45} 30" class="s"/><rect x="${x - 40}" y="60" width="80" height="70" style="fill:var(--t17);opacity:.15"/>`;
    for (let i = 0; i < dots; i++){ const px = x - 32 + (i * 37) % 64, py = settle ? 118 + (i % 3) * 4 : 68 + ((i * 7) % 13) * 4.3; s += `<circle cx="${px}" cy="${py}" r="${settle ? 4 : 2}" style="fill:${settle ? `var(--t23)` : P}"/>`; } return s; };
  set(`Qué es una solución`, [fig(svg(560, 180, vaso(140, 18, false) + T(140, 158, `solución: una fase, no se asienta`, { c:`tb` }) + sep(280, 20, 170) + vaso(420, 12, true) + T(420, 158, `suspensión: se va al fondo`, { c:`tb` }), `Solución frente a suspensión`), `En la solución las partículas son tan pequeñas que quedan repartidas para siempre.`)]);
  set(`Soluto y solvente`, [fig(OTRAH.scale([[`agua 90 %`, 9, `var(--t17)`, `solvente: agua`], [`10 %`, 1, P, `soluto`]], { title:`etanol al 10 %`, label:`Soluto y solvente` }), `En el alcohol al 70 % se invierten los papeles: manda la mayor cantidad.`), fig(OTRAH.scale([[`etanol 70 %`, 7, P, `solvente`], [`agua 30 %`, 3, `var(--t17)`, `soluto`]], { title:`etanol al 70 %`, label:`Soluto y solvente invertidos` }), `El solvente es el que está en mayor cantidad, sea cual sea.`)]);
  set(`Propiedades generales y coligativas`, [fig(flow([[`↓ presión|de vapor`, ``], [`↑ punto de|ebullición`, ``], [`↓ punto de|congelación`, ``], [`presión|osmótica`, ``]], { noArr:1, h:70, title:`coligativas: dependen de CUÁNTAS partículas, no de cuáles`, label:`Propiedades coligativas` }), `Más partículas de soluto → efectos más grandes.`)]);
  set(`Factores que afectan la solubilidad`, [fig(cmp([`Sólidos y líquidos`, `↑ temperatura → ↑ solubilidad`, `la presión casi no influye`], [`Gases`, `↑ temperatura → ↓ solubilidad`, `↑ presión → ↑ solubilidad (Henry)`], { cl:P, cr:R, label:`Temperatura y presión en la solubilidad` }), `Con la temperatura, sólidos y gases van en sentidos opuestos.`)]);
  set(`Velocidad de disolución`, [fig(cmp([`Solubilidad`, `¿CUÁNTO se disuelve?`, `cambia con T y presión`], [`Velocidad de disolución`, `¿qué tan RÁPIDO?`, `moler, agitar, calentar`], { cl:P, cr:G, label:`Solubilidad frente a velocidad` }), `Agitar no hace que quepa más soluto; solo llega antes al máximo.`)]);
  set(`Soluciones de uso en el laboratorio clínico`, [fig(flow([[`Buffer`, `mantener|el pH`], [`Reactivo`, `reaccionar|con el analito`], [`Conservadora`, `proteger|la muestra`], [`Limpieza`, `desinfectar`], [`Tinción`, `colorear`]], { noArr:1, h:84, label:`Tipos de soluciones del laboratorio` }), `Un verbo por cada tipo.`)]);
})();
