/* «Explícalo de otra forma» · Tema 22: hidrocarburos (panorama) */
Object.assign(OTRA, {
[`Química orgánica e hidrocarburos`]:{
  pre:[`¿Por qué crees que hay millones de compuestos de carbono y muy pocos de, por ejemplo, neón?`,`Porque el carbono forma 4 enlaces fuertes, también consigo mismo: arma cadenas, ramas y anillos casi sin límite.`],
  idea:`La química orgánica es la química del <b>carbono</b>. Su superpoder: <b>4 enlaces</b> y la capacidad de unirse a otros carbonos para formar <b>cadenas y anillos</b>. Los hidrocarburos son el caso más simple: <b>solo C y H</b>.`,
  por:[`Tres grandes clases: hidrocarburos (C, H), compuestos con oxígeno (alcoholes, aldehídos…) y compuestos con nitrógeno (aminas, amidas…).`,
    `Los hidrocarburos son el «esqueleto» del que se derivan los demás al agregar grupos funcionales.`],
  ojo:`Hidrocarburo = solo carbono e hidrógeno. Si aparece O o N, ya es otra familia.`,
  prueba:[[`¿El etanol (C₂H₆O) es un hidrocarburo?`,`No: tiene oxígeno.`]]
},
[`Clasificación de los hidrocarburos`]:{
  pre:[`¿Qué tres preguntas harías para clasificar cualquier hidrocarburo?`,`¿Cadena abierta o anillo? ¿Solo enlaces sencillos o tiene dobles/triples? ¿Es aromático o no?`],
  idea:`Tres preguntas, tres criterios: <b>forma</b> (acíclico o cíclico) · <b>saturación</b> (saturado o insaturado) · <b>aromaticidad</b> (alifático o aromático).`,
  por:[`Saturado = solo enlaces sencillos, el máximo de H («lleno» de H).`,
    `Insaturado = tiene C=C o C≡C, con menos H.`,
    `Aromático = anillo tipo benceno (Tema 26). Todo lo demás es alifático.`],
  ojo:`El ciclohexano es cíclico pero alifático (no es aromático).`,
  prueba:[[`¿El propeno es saturado o insaturado?`,`Insaturado (tiene un C=C).`]]
},
[`Estructura de los alifáticos: el esqueleto`]:{
  pre:[`Si cada carbono siempre hace 4 enlaces, en el propano CH₃−CH₂−CH₃, ¿por qué el del medio lleva solo 2 H?`,`Porque ya usa 2 enlaces con los carbonos vecinos: le quedan 2 para H.`],
  idea:`Arma primero el <b>esqueleto de carbonos</b> y luego <b>completa con H</b> hasta que cada C tenga 4 enlaces.`,
  por:[`Carbono de la punta: 1 vecino C → 3 H (CH₃).`,
    `Carbono en medio: 2 vecinos → 2 H (CH₂).`,
    `Carbono de una rama: 3 vecinos → 1 H (CH). Con 4 vecinos → 0 H (C).`,
    `Un doble enlace cuenta como 2 enlaces: CH₂=CH− tiene menos H.`],
  ojo:`Cuenta los enlaces de cada C: siempre deben sumar 4.`,
  prueba:[[`En el isobutano (CH₃)₃CH, ¿cuántos H tiene el carbono central?`,`1 (tiene 3 vecinos carbono).`]]
},
[`Fórmulas generales`]:{
  pre:[`Si el etano es C₂H₆, ¿cuántos H tendrá el eteno (con un doble enlace)?`,`4 (C₂H₄): el doble enlace quita 2 H.`],
  idea:`Parte del alcano (<b>CₙH₂ₙ₊₂</b>, el máximo de H) y resta <b>2 H por cada π o anillo</b>.`,
  por:[`Alcano: CₙH₂ₙ₊₂.`,
    `1 doble enlace o 1 anillo: CₙH₂ₙ (alquenos y cicloalcanos).`,
    `1 triple (2 π): CₙH₂ₙ₋₂.`,
    `Por eso alqueno y cicloalcano pueden tener la misma fórmula (C₆H₁₂).`],
  ojo:`Más enlaces o anillos → <b>menos</b> H.`,
  prueba:[[`¿Fórmula del ciclopentano?`,`C₅H₁₀.`],[`¿Fórmula del pentino?`,`C₅H₈.`]]
},
[`Nomenclatura: las tres partes del nombre`]:{
  pre:[`En «2-metilpropano», ¿qué parte dice cuántos carbonos tiene la cadena?`,`«prop-» (3 carbonos).`],
  idea:`Todo nombre tiene tres piezas: <b>prefijo</b> (ramas) + <b>raíz</b> (cuántos C) + <b>sufijo</b> (tipo de enlace: -ano, -eno, -ino).`,
  por:[`Raíces: met 1 · et 2 · prop 3 · but 4 · pent 5 · hex 6 · hept 7 · oct 8 · non 9 · dec 10.`,
    `Truco para 1–4: «<b>M</b>i <b>E</b>sposa <b>P</b>refiere <b>B</b>ombones» (met, et, prop, but). De 5 en adelante son números griegos.`,
    `2-metilpropano: cadena de 3 C, rama metilo en el C2.`],
  ojo:`El nombre debe permitirte dibujar la molécula, y la molécula, escribir el nombre.`,
  prueba:[[`¿Cuántos carbonos tiene un «hept-»?`,`7.`]]
},
[`Pasos para nombrar (ejemplo con doble enlace)`]:{
  pre:[`Una molécula tiene una cadena de 6 C sin el doble enlace y otra de 5 C que sí lo contiene. ¿Cuál es la principal?`,`La de 5 C: la cadena principal debe contener el doble enlace.`],
  idea:`Cuatro pasos: <b>cadena</b> (la más larga que contenga el C=C o C≡C) → <b>numerar</b> (desde el lado más cercano a la insaturación) → <b>ramas</b> (con número) → <b>ensamblar</b> (orden alfabético).`,
  por:[`En un alcano sin dobles enlaces, se numera desde el extremo más cercano a la primera rama.`,
    `Ramas repetidas: di-, tri-; esos prefijos no cuentan en el orden alfabético.`,
    `Los detalles de alquenos y alquinos están en los Temas 24 y 25.`],
  ojo:`La insaturación manda sobre la longitud y sobre las ramas.`,
  prueba:[[`¿Qué se numera primero con número bajo: el doble enlace o una rama?`,`El doble enlace.`]]
},
[`Alcanos: estructura y propiedades`]:{
  pre:[`Los alcanos se llaman «parafinas» (poca afinidad). ¿Qué te sugiere eso de su reactividad?`,`Que reaccionan poco: solo tienen enlaces sencillos fuertes, sin π.`],
  idea:`Alcano = <b>todo sencillo</b>: carbonos <b>sp³</b>, tetraédricos (109.5°), con <b>libre rotación</b>. Sin π, son <b>poco reactivos</b>.`,
  por:[`4 vecinos por carbono → sp³ → tetraedro.`,
    `Apolares → insolubles en agua; solo fuerzas de London → ebullición baja.`,
    `Estado: gas (1–4 C), líquido (5–17 C), sólido (18 C o más).`,
    `Reacciones típicas: combustión y sustitución por radicales (halogenación con luz).`],
  ojo:`Más carbonos → ↑ ebullición. Más ramas → ↓ ebullición.`,
  prueba:[[`¿En qué estado está el butano a temperatura ambiente?`,`Gas (4 C).`]]
},
[`Alquenos: estructura y propiedades`]:{
  pre:[`¿Qué le agrega el enlace π a un alqueno frente a un alcano?`,`Rigidez (no gira), posibilidad de cis/trans y una zona rica en electrones que reacciona.`],
  idea:`Alqueno = <b>un C=C</b> (1 σ + 1 π): carbonos <b>sp²</b>, planos (120°), <b>sin rotación</b> y <b>reactivos</b> por adición. Todo el detalle está en el Tema 24.`,
  por:[`El π no gira → isomería cis/trans.`,
    `El π es rico en electrones → atrae electrófilos → adición.`,
    `Físicamente se parecen a los alcanos.`],
  ojo:`Usa «Explícalo de otra forma» del Tema 24 para profundizar.`,
  prueba:[[`¿Qué reacción es típica de un alqueno?`,`La adición electrófila.`]]
},
[`Alquinos: estructura y propiedades`]:{
  pre:[`Con 2 π y solo 2 vecinos por carbono, ¿qué forma tiene el C≡C?`,`Lineal (sp, 180°).`],
  idea:`Alquino = <b>C≡C</b> (1 σ + 2 π): carbonos <b>sp</b>, <b>lineales</b> (180°), muy reactivos; los terminales son <b>ácidos</b>. Detalle en el Tema 25.`,
  por:[`Lineales → se empacan bien → hierven un poco más alto que alcanos y alquenos parecidos.`,
    `El H del alquino terminal puede salir como H⁺ (carbono sp).`],
  ojo:`Sin cis/trans: un palito recto no tiene «lados».`,
  prueba:[[`¿Qué alquinos tienen acidez: los terminales o los internos?`,`Los terminales.`]]
},
[`Tabla comparativa: alcanos, alquenos y alquinos`]:{
  pre:[`Si el número de rayas entre carbonos sube (−, =, ≡), ¿qué pasa con el exponente de «sp» y con el ángulo?`,`El exponente baja (sp³ → sp² → sp) y el ángulo se abre (109.5° → 120° → 180°).`],
  idea:`Una tabla, una regla: <b>más rayas → menos H, exponente de sp menor, ángulo mayor</b>.`,
  por:[`Alcano: −, sp³, 109.5°, tetraédrico, sustitución radicalaria.`,
    `Alqueno: =, sp², 120°, plano, adición.`,
    `Alquino: ≡, sp, 180°, lineal, adición y acidez terminal.`,
    `a-e-i = 1-2-3 rayas (-ano, -eno, -ino).`],
  ojo:`El exponente de sp + el número de π = 3.`,
  prueba:[[`Un carbono sp, ¿cuántos π tiene?`,`2 (es un triple enlace).`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t22)`;
  set(`Química orgánica e hidrocarburos`, [fig(flow([[`Hidrocarburos`, `solo C y H`, P], [`Con oxígeno`, `alcoholes, éteres,|aldehídos, ácidos`], [`Con nitrógeno`, `aminas, amidas`]], { noArr:1, h:84, label:`Clases de compuestos orgánicos` }), `Los hidrocarburos son el esqueleto de los demás.`)]);
  set(`Clasificación de los hidrocarburos`, [fig(flow([[`¿Forma?`, `abierta|o anillo`], [`¿Enlaces?`, `saturado|o insaturado`], [`¿Aromático?`, `benceno|o alifático`]], { noArr:1, h:84, label:`Tres criterios de clasificación` }), `Tres preguntas independientes: una molécula tiene una respuesta para cada una.`)]);
  set(`Estructura de los alifáticos: el esqueleto`, [fig(flow([[`CH₃`, `1 vecino C|→ 3 H`], [`CH₂`, `2 vecinos C|→ 2 H`], [`CH`, `3 vecinos C|→ 1 H`], [`C`, `4 vecinos C|→ 0 H`, P]], { noArr:1, foot:`vecinos C + H = 4 siempre`, label:`Vecinos e hidrógenos` }), `Cada carbono completa sus 4 enlaces con H.`)]);
  set(`Fórmulas generales`, [fig(flow([[`Alcano`, `CₙH₂ₙ₊₂`], [`− 2 H`, `1 doble|o 1 anillo`], [`CₙH₂ₙ`, `alqueno /|cicloalcano`, P], [`− 2 H`, `otro π`], [`CₙH₂ₙ₋₂`, `alquino`, P]], { label:`Fórmulas generales` }), `Cada π o anillo resta 2 hidrógenos.`)]);
  set(`Nomenclatura: las tres partes del nombre`, [fig(svg(560, 130, T(150, 60, `2-metil`, { c:`tk`, fs:24, a:`end` }) + T(152, 60, `prop`, { c:`tk`, fs:24, a:`start`, col:P }) + T(206, 60, `ano`, { c:`tk`, fs:24, a:`start`, col:G }) + T(100, 100, `prefijo: ramas`, { c:`tb` }) + T(185, 120, `raíz: 3 C`, { c:`tb`, col:P }) + T(330, 100, `sufijo: solo sencillos`, { c:`tb`, col:G }), `Tres partes del nombre`), `Prefijo + raíz + sufijo.`)]);
  set(`Pasos para nombrar (ejemplo con doble enlace)`, [fig(flow([[`Cadena`, `la más larga|con el C=C`], [`Numerar`, `lado más cercano|al C=C`], [`Ramas`, `con su número`], [`Ensamblar`, `orden|alfabético`, P]], { label:`Pasos para nombrar` }), `La insaturación manda en los dos primeros pasos.`)]);
  set(`Alcanos: estructura y propiedades`, [fig(scale([[`gas`, 4, `var(--t17)`, `1–4 C`], [`líquido`, 13, `var(--t21)`, `5–17 C`], [`sólido`, 6, `var(--t20)`, `18 C o más`]], { title:`estado de los alcanos según sus carbonos`, label:`Estado de los alcanos` }), `Más carbonos → más fuerzas de London → más difícil de evaporar.`)]);
  set(`Alquenos: estructura y propiedades`, [fig(cmp([`Alcano (C−C)`, `sp³ · 109.5°`, `gira libremente`, `poco reactivo`], [`Alqueno (C=C)`, `sp² · 120° · plano`, `no gira → cis/trans`, `reactivo (adición)`], { cr:P, label:`Alcano frente a alqueno` }), `El π cambia todo: forma, rigidez y reactividad.`)]);
  set(`Alquinos: estructura y propiedades`, [fig(svg(560, 110, T(130, 60, `R`, { c:`tk`, fs:20 }) + ln(145, 54, 200, 54) + [-6, 0, 6].map(o => ln(240, 54 + o, 320, 54 + o).replace(`class="s"`, `class="s" style="stroke:${P}"`)).join(``) + T(220, 60, `C`, { c:`tk`, fs:20 }) + T(340, 60, `C`, { c:`tk`, fs:20 }) + ln(360, 54, 415, 54) + T(430, 60, `H`, { c:`tk`, fs:20, col:R }) + T(280, 98, `lineal, 180° · el H terminal es ácido`, { c:`tb` }), `Alquino lineal`), `Todo en una línea recta.`)]);
  set(`Tabla comparativa: alcanos, alquenos y alquinos`, [fig(svg(560, 190, (() => { let s = ``; const C = [[`alcano`, `−`, `sp³`, `109.5°`], [`alqueno`, `=`, `sp²`, `120°`], [`alquino`, `≡`, `sp`, `180°`]];
    [`familia`, `enlace`, `hibridación`, `ángulo`].forEach((h, j) => s += T(90 + j * 130, 26, h, { c:`tb` }));
    C.forEach((r, i) => r.forEach((c, j) => s += T(90 + j * 130, 66 + i * 40, c, { c:j ? `tk` : `tb`, fs:j ? 18 : 14, col:j ? P : null })));
    return s + ln(30, 38, 530, 38, `dash`) + T(280, 182, `más rayas → exponente de sp menor y ángulo mayor`, { c:`tm` }); })(), `Tabla comparativa`), `Lee la tabla de arriba hacia abajo: todo cambia en la misma dirección.`)]);
})();
