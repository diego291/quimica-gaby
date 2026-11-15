/* «Explícalo de otra forma» · Tema 25: alquinos */
Object.assign(OTRA, {
[`Generalidades de los alquinos`]:{
  pre:[`Si un doble enlace es 1 σ + 1 π, ¿cuántos π crees que tiene un triple enlace? ¿Y cuántos vecinos le quedan a cada carbono?`, `2 π (más el σ). A cada carbono le quedan 2 vecinos, así que es sp y queda en línea recta, a 180°.`],
  idea:`Mismo juego que en los alquenos, con un π más: el triple enlace es <b>1 σ + 2 π</b>. Cada carbono tiene solo <b>2 vecinos</b> → <b>sp</b> → <b>lineal (180°)</b>.`,
  por:[`Con 2 vecinos, el carbono solo necesita 2 orbitales híbridos (sp). Le quedan <b>2 orbitales p</b> sin hibridar, y cada uno forma un π.`,
    `Los dos π son perpendiculares entre sí (uno arriba-abajo, otro adelante-atrás).`,
    `Dos cosas alrededor de un punto quedan lo más lejos posible en línea recta: por eso 180°.`,
    `<b>Fórmula:</b> cada π quita 2 H al alcano. Alcano CₙH₂ₙ₊₂ → alqueno CₙH₂ₙ (1 π) → alquino CₙH₂ₙ₋₂ (2 π).`],
  ojo:`Más enlaces entre los carbonos = <b>menos</b> hidrógenos. Si te sale más H en el alquino que en el alcano, invertiste la fórmula.`,
  prueba:[[`¿Fórmula del alquino de 4 carbonos?`,`C₄H₆ (CₙH₂ₙ₋₂ con n = 4).`],[`¿Hibridación y ángulo del carbono del C≡C?`,`sp, 180°.`]]
},
[`Conformación estructural de los alquinos`]:{
  pre:[`Para que haya cis/trans, cada carbono del enlace múltiple necesita dos grupos distintos. ¿Cuántos grupos (aparte del otro carbono) tiene cada carbono del C≡C?`,`Solo uno. Sin dos grupos no hay «mismo lado» ni «lados opuestos»: no hay cis/trans.`],
  idea:`El alquino es un <b>palito recto</b>: R−C≡C−R' en línea. En una línea no existe «arriba» y «abajo» del enlace, así que no hay cis/trans.`,
  por:[`Los dos π rodean al σ por todos lados y forman una nube con forma de <b>cilindro</b> alrededor del eje.`,
    `Como esa nube es simétrica alrededor del eje, girar el triple enlace no cambia nada: por eso el material dice que no forma confórmeros en ese enlace.`,
    `El resto de la cadena, con enlaces sencillos, sí gira, igual que en alcanos y alquenos.`],
  ojo:`Alqueno: rígido y con cis/trans. Alquino: lineal y <b>sin</b> cis/trans.`,
  prueba:[[`¿El but-2-ino tiene isómeros cis/trans? ¿Por qué?`,`No. Cada carbono del C≡C tiene un solo grupo (CH₃) y la molécula es lineal.`]]
},
[`Nomenclatura IUPAC de alquinos`]:{
  pre:[`En los alquenos mandaba el doble enlace al numerar. ¿Quién manda en los alquinos?`,`El triple enlace: se numera desde el extremo más cercano a él, aunque la rama quede con número alto.`],
  idea:`Las mismas tres preguntas del Tema 24: <b>¿qué cadena?</b> (la que contiene el C≡C) → <b>¿desde dónde cuento?</b> (extremo más cercano al C≡C) → <b>¿qué escribo?</b> (ramas + raíz + número + «ino»).`,
  por:[`Ejemplo CH₃−CH(CH₃)−C≡C−CH₃: 5 carbonos → pent-.`,
    `Desde la derecha el C≡C queda en 2; desde la izquierda, en 3. Gana la derecha.`,
    `El metilo queda entonces en C4 → <b>4-metilpent-2-ino</b>.`,
    `El triple enlace tiene prioridad sobre ramas y halógenos al numerar.`],
  ojo:`Error típico: numerar desde el lado de la rama para que el metilo quede en 2. La rama no decide si el C≡C ya marcó el sentido.`,
  prueba:[[`Nombra HC≡C−CH₂−CH₃.`,`But-1-ino.`],[`Nombra CH₃−C≡C−CH₂−CH₂−CH₃.`,`Hex-2-ino (desde la izquierda el C≡C queda en 2).`]]
},
[`Casos especiales: diinos y alqueninos`]:{
  pre:[`Una molécula tiene un C=C y un C≡C. ¿Qué sufijo crees que va primero en el nombre: -eno o -ino?`,`-eno, y luego -ino: «pent-1-en-4-ino». Va en orden alfabético de la terminación.`],
  idea:`Dos reglas: <b>1)</b> numera desde el extremo más cercano a <b>cualquier</b> insaturación; <b>2)</b> solo si hay empate, el <b>doble</b> enlace se lleva el número más bajo.`,
  por:[`Ejemplo CH₂=CH−CH₂−C≡CH: el C=C está en el extremo izquierdo (1) y el C≡C en el derecho (también 1 si cuentas desde allá). Hay empate.`,
    `Empate → gana el doble: se numera desde la izquierda. C=C en 1, C≡C en 4 → <b>pent-1-en-4-ino</b>.`,
    `Con dos triples enlaces se agrega «a» y «di»: HC≡C−CH₂−C≡CH → <b>penta-1,4-diino</b>.`],
  ojo:`El doble solo gana en caso de empate. Si el triple está más cerca de un extremo, numeras desde ahí.`,
  prueba:[[`Nombra HC≡C−CH₂−CH₂−C≡CH.`,`Hexa-1,5-diino.`],[`¿Qué terminación va primero: -eno o -ino?`,`-eno (por ejemplo, pent-1-en-4-ino).`]]
},
[`Clasificación de los alquinos`]:{
  pre:[`Un alquino tiene el C≡C en la punta de la cadena; otro, en medio. ¿Cuál conserva un H pegado directamente al carbono del triple enlace?`,`El de la punta (terminal): H−C≡C−R. El interno tiene grupos de carbono en ambos lados.`],
  idea:`<b>Terminal</b> = C≡C en el C1, con un H en la punta. <b>Interno</b> = C≡C en medio, sin ese H. Ese H es lo que vuelve <b>ácido</b> al terminal.`,
  por:[`Un carbono sp tiene más carácter «s» (50 %) que uno sp² o sp³; el orbital s retiene a los electrones más cerca del núcleo.`,
    `Por eso, cuando el H sale como protón, el par de electrones queda estable en el carbono: el H del alquino terminal es más ácido que el de alquenos y alcanos.`,
    `<b>Por número de triples:</b> 1 → monoalquino (CₙH₂ₙ₋₂) · 2 → diino (CₙH₂ₙ₋₆, según el material) · 3 o más → polialquino.`],
  ojo:`Propino y but-1-ino son terminales; but-2-ino y hex-3-ino son internos. Solo los terminales reaccionan como ácidos.`,
  prueba:[[`¿El pent-2-ino es terminal o interno?`,`Interno.`],[`¿Cuál de los dos tiene un H ácido: propino o but-2-ino?`,`El propino (terminal).`]]
},
[`Serie de los alquinos`]:{
  pre:[`El etino es C₂H₂. Si le agregas un CH₂ a la cadena, ¿qué fórmula obtienes?`,`C₃H₄ (propino): cada CH₂ suma 1 C y 2 H.`],
  idea:`La serie crece de <b>CH₂ en CH₂</b>. Con CₙH₂ₙ₋₂ puedes construir y comprobar cualquier fórmula sin memorizar la tabla.`,
  por:[`Etino C₂H₂ → propino C₃H₄ → butino C₄H₆ → pentino C₅H₈ → hexino C₆H₁₀ → heptino C₇H₁₂.`,
    `Comprobación rápida: los H son el doble de los C, menos 2.`,
    `Así detectas los dos errores de la tabla del material (C₂H para el etino y −CH₂ al final del propino): no cumplen la fórmula.`],
  ojo:`Si una fórmula de alquino no cumple «H = 2C − 2», está mal escrita.`,
  prueba:[[`¿Fórmula del octino (8 C)?`,`C₈H₁₄.`],[`¿Es correcta «C₅H₁₀» para el pentino?`,`No: esa es de un alqueno (o cicloalcano). El pentino es C₅H₈.`]]
},
[`Propiedades físicas de los alquinos`]:{
  pre:[`¿Qué se apila mejor en una caja: lápices rectos o ganchos doblados? ¿Qué tiene que ver con el punto de ebullición?`,`Los lápices. Moléculas rectas se acercan más, se atraen más (London) y cuesta más separarlas: hierven más alto.`],
  idea:`Al ser <b>lineales</b>, los alquinos se empacan mejor que alcanos y alquenos de tamaño parecido → punto de ebullición <b>un poco mayor</b>.`,
  por:[`Más carbonos → molécula más grande → más fuerzas de London → ↑ punto de ebullición.`,
    `Más ramificaciones → molécula más «redonda», menos contacto → ↓ punto de ebullición.`,
    `Siguen siendo casi apolares: menos densos que el agua e insolubles en ella.`,
    `<b>Estado:</b> 2–4 C gas · 5–15 C líquido · 16 C o más sólido.`],
  ojo:`Dos flechas distintas: más carbonos ↑ ebullición; más ramas ↓ ebullición.`,
  prueba:[[`¿En qué estado está el etino a temperatura ambiente?`,`Gas (tiene 2 C).`],[`¿Quién hierve más alto: hex-1-ino o 3,3-dimetilbut-1-ino (ambos C₆H₁₀)?`,`El hex-1-ino: es lineal y tiene más contacto; el otro está ramificado.`]]
},
[`Reacciones de los alquinos`]:{
  pre:[`Un alquino tiene 2 π. Si cada H₂ abre un π, ¿cuántos H₂ necesitas para llegar hasta el alcano?`,`Dos: uno lo convierte en alqueno y el otro en alcano.`],
  idea:`Igual que en los alquenos, los π se abren y se agregan átomos; la diferencia es que hay <b>dos π</b> que abrir. Además, el alquino terminal puede perder su H como ácido.`,
  por:[`<b>Hidrogenación:</b> R−C≡C−R' + 2 H₂ (Pt, Pd o Ni) → R−CH₂−CH₂−R' (alcano).`,
    `<b>Hidratación (H₂SO₄, H₂O, HgSO₄):</b> se agrega agua y se forma un enol (C=C con OH), que se reacomoda solo a una <b>cetona</b>. Propino → propanona (acetona).`,
    `<b>Hidroboración-oxidación:</b> en el terminal, el oxígeno termina en el C1 → <b>aldehído</b> (propanal), según la figura del material.`,
    `<b>Acidez:</b> una base fuerte (NaH) le quita el H al terminal y forma un acetiluro: CH₃−C≡C:⁻ Na⁺ + H₂.`],
  ojo:`Hidratación → cetona; hidroboración → aldehído. Mismo alquino, distinto producto según el reactivo.`,
  prueba:[[`¿Cuántos moles de H₂ necesita 1 mol de propino para llegar a propano?`,`2.`],[`¿Qué da el propino con H₂O, H₂SO₄ y HgSO₄?`,`Propanona (acetona), vía un enol.`]]
},
[`Isomería estructural de los alquinos`]:{
  pre:[`Tienes las mismas «piezas» C₄H₆. ¿De cuántas maneras distintas podrías armarlas?`,`Moviendo el triple enlace, ramificando la cadena o incluso armando otra familia (un dieno).`],
  idea:`Misma fórmula, distinta conexión. Pregunta qué cambió: <b>¿se movió el C≡C?</b> → posición · <b>¿se ramificó?</b> → cadena · <b>¿cambió de familia?</b> → función.`,
  por:[`<b>Posición:</b> but-1-ino y but-2-ino (misma cadena, C≡C en otro lugar).`,
    `<b>Cadena:</b> pent-1-ino (recto) y 3-metilbut-1-ino (ramificado).`,
    `<b>Función:</b> but-1-ino y buta-1,3-dieno. Los dos son C₄H₆ porque 2 π cuentan igual, estén en un triple o en dos dobles.`],
  ojo:`Para que sean isómeros, la fórmula molecular tiene que ser idéntica. Cuenta C y H antes de clasificar.`,
  prueba:[[`¿Qué tipo de isómeros son pent-1-ino y pent-2-ino?`,`De posición.`],[`¿Qué tipo son but-1-ino y buta-1,3-dieno?`,`De función.`]]
},
[`Trucos visuales para recordar -ano, -eno, -ino`]:{
  pre:[`Las vocales a, e, i van en orden. ¿Con qué número de rayas entre carbonos las asociarías?`,`a = 1 raya, e = 2 rayas, i = 3 rayas.`],
  idea:`<b>a · e · i = 1 · 2 · 3</b>. -ano (−), -eno (=), -ino (≡).`,
  por:[`Con cada raya extra entra un π y salen 2 H: CₙH₂ₙ₊₂ → CₙH₂ₙ → CₙH₂ₙ₋₂.`,
    `Y cambia la forma: sp³ (109.5°) → sp² (120°, plano) → sp (180°, recto).`],
  ojo:`Una sola tabla resume tres temas: terminación, fórmula y geometría van juntas.`,
  prueba:[[`Un compuesto termina en -ino. ¿Cuántas rayas hay y qué geometría tiene ese carbono?`,`3 rayas (C≡C), lineal a 180°.`]]
}
});
(() => { const { T, svg, ln, arr, hl, dot, sep, fig, G, R, set, chain, C } = OTRAH; const P = `var(--t25)`;
  const ch = (labs, bonds, x0, dx, y, o = {}) => chain(labs, bonds, x0, dx, y, Object.assign({ col:P }, o));

  set(`Generalidades de los alquinos`, [fig(svg(560, 200, (() => { let s = ``;
    [[44, [`CH₃`, `CH₃`], [1], `etano · C₂H₆`, `0 π`], [104, [`CH₂`, `CH₂`], [2], `eteno · C₂H₄`, `1 π → −2 H`], [164, [`CH`, `CH`], [3], `etino · C₂H₂`, `2 π → −4 H`]].forEach(r => { s += ch(r[1], r[2], 70, 110, r[0]) + T(300, r[0] + 6, r[3], { c:`tb`, a:`start` }) + T(450, r[0] + 6, r[4], { c:`tm`, a:`start` }); });
    return s; })(), `Cada enlace pi quita dos hidrógenos`), `Mismo número de carbonos: cada π que se agrega quita 2 H.`)]);

  set(`Conformación estructural de los alquinos`, [fig(svg(560, 210, (() => { let s = ``; const y = 80;
    s += ln(120, y, 190, y) + ln(250, y, 320, y) + [-6, 0, 6].map(o => ln(190, y + o, 250, y + o)).join(``).replaceAll(`class="s"`, `class="s" style="stroke:${P}"`) + C(190, y, P) + C(250, y, P) + T(100, y + 6, `R`, { c:`tk` }) + T(340, y + 6, `R'`, { c:`tk` });
    s += `<path d="M155 ${y + 32} Q220 ${y + 52} 285 ${y + 32}" class="dash"/>` + T(220, y + 66, `180° · todo en una línea`, { c:`tm` });
    s += sep(390, 20, 200) + T(475, 50, `¿cis/trans?`, { c:`tb` }) + T(475, 80, `cada C del C≡C tiene`, { c:`tm` }) + T(475, 98, `1 solo grupo`, { c:`tm` }) + T(475, 132, `no hay «mismo lado»`, { c:`tm` }) + T(475, 158, `→ no existe`, { c:`tb`, col:R });
    return s; })(), `Alquino lineal sin cis trans`), `Los cuatro átomos quedan en línea recta. Sin dos grupos por carbono, no hay forma de tener cis o trans.`)]);

  set(`Nomenclatura IUPAC de alquinos`, [fig(svg(560, 318, (() => { let s = ``; const labs = [`CH₃`, `CH`, `C`, `C`, `CH₃`], bo = [1, 1, 3, 1];
    s += T(280, 22, `Desde la derecha: el C≡C queda en 2 y el metilo en 4  ✓`, { c:`tb`, col:G });
    s += ch(labs, bo, 90, 95, 78, { nums:[5, 4, 3, 2, 1], br:[{ i:1, l:`CH₃` }] }) + hl(90 + 2 * 95 - 30, 50, 95 + 60, 56, P);
    s += ln(20, 148, 540, 148, `dash`) + T(280, 172, `Desde la izquierda: el C≡C queda en 3  ✗`, { c:`tb`, col:R });
    s += ch(labs, bo, 90, 95, 228, { nums:[1, 2, 3, 4, 5], br:[{ i:1, l:`CH₃` }] });
    s += T(280, 310, `El C≡C manda → 4-metilpent-2-ino`, { c:`tm` });
    return s; })(), `Numerar un alquino desde cada extremo`), `Gana el sentido que da el número más bajo al triple enlace, aunque la rama quede en 4.`)]);

  set(`Casos especiales: diinos y alqueninos`, [fig(svg(560, 200, (() => { let s = ``;
    s += ch([`CH₂`, `CH`, `CH₂`, `C`, `CH`], [2, 1, 1, 3], 70, 105, 70, { nums:[1, 2, 3, 4, 5] });
    s += hl(40, 44, 155, 54, `var(--t24)`) + hl(355, 44, 165, 54, P);
    s += T(117, 128, `doble en 1`, { c:`tb` }) + T(437, 128, `triple: también 1 desde la derecha`, { c:`tb`, fs:12.5 });
    s += T(280, 164, `Empate → gana el doble → se numera desde la izquierda`, { c:`tm` }) + T(280, 188, `pent-1-en-4-ino  (eno antes que ino)`, { c:`tb` });
    return s; })(), `Desempate en un alquenino`), `Las dos insaturaciones están a la misma distancia de su extremo; por eso decide el doble enlace.`)]);

  set(`Clasificación de los alquinos`, [fig(svg(560, 200, (() => { let s = ``;
    s += T(140, 26, `terminal`, { c:`tb`, fs:16 }) + ch([`H`, `C`, `C`, `R`], [1, 3, 1], 50, 60, 80) + hl(34, 58, 32, 44, R) + T(50, 130, `este H puede salir como H⁺`, { c:`tm`, a:`start` }) + T(140, 154, `(acidez del terminal)`, { c:`tm` });
    s += sep(280, 20, 180);
    s += T(420, 26, `interno`, { c:`tb`, fs:16 }) + ch([`R`, `C`, `C`, `R'`], [1, 3, 1], 330, 60, 80) + T(420, 140, `grupos de carbono a ambos lados`, { c:`tm` }) + T(420, 158, `sin H en el C≡C → no es ácido`, { c:`tm` });
    return s; })(), `Alquino terminal frente a interno`), `El terminal conserva un H unido al carbono sp; ese H es el que le da acidez.`)]);

  set(`Serie de los alquinos`, [fig(svg(560, 150, (() => { let s = ``;
    const F = [`C₂H₂`, `C₃H₄`, `C₄H₆`, `C₅H₈`, `C₆H₁₀`];
    F.forEach((f, i) => { const x = 60 + i * 110; s += `<rect x="${x - 40}" y="40" width="80" height="40" rx="10" class="bx"/>` + T(x, 66, f, { c:`tk` }); if (i < 4) s += arr(x + 42, 60, x + 68, 60) + T(x + 55, 104, `+CH₂`, { c:`tm`, fs:11.5 }); });
    s += T(280, 136, `H = 2·C − 2  en todos`, { c:`tb` });
    return s; })(), `Serie de los alquinos de CH2 en CH2`), `Cada paso suma un CH₂. Si una fórmula no cumple H = 2C − 2, no es de un alquino.`)]);

  set(`Propiedades físicas de los alquinos`, [fig(svg(560, 150, (() => { let s = ``;
    s += `<rect x="40" y="50" width="80" height="34" rx="8" style="fill:var(--t17);opacity:.25"/><rect x="120" y="50" width="250" height="34" style="fill:var(--t21);opacity:.25"/><rect x="370" y="50" width="150" height="34" rx="8" style="fill:var(--t20);opacity:.25"/>`;
    s += T(80, 72, `gas`, { c:`tb` }) + T(245, 72, `líquido`, { c:`tb` }) + T(445, 72, `sólido`, { c:`tb` });
    s += T(80, 104, `2–4 C`, { c:`tm` }) + T(245, 104, `5–15 C`, { c:`tm` }) + T(445, 104, `16 C o más`, { c:`tm` });
    s += arr(40, 128, 520, 128) + T(280, 146, `más carbonos → más London → ↑ ebullición`, { c:`tm` });
    return s; })(), `Estado físico según el número de carbonos`), `Mientras más carbonos, más se atraen las moléculas y más cuesta separarlas.`)]);

  set(`Reacciones de los alquinos`, [fig(svg(560, 250, (() => { let s = ``;
    const box = (x, y, t1, t2) => `<rect x="${x}" y="${y}" width="190" height="48" rx="10" class="bx"/>` + T(x + 95, y + 20, t1, { c:`tb` }) + T(x + 95, y + 38, t2, { c:`tm` });
    s += `<rect x="200" y="96" width="160" height="58" rx="12" style="fill:${P};opacity:.2;stroke:${P};stroke-width:2"/>` + T(280, 122, `R−C≡C−H`, { c:`tk`, fs:20 }) + T(280, 142, `2 π para abrir`, { c:`tm`, fs:11.5 });
    [[4, 14, `+ 2 H₂ (Pt, Pd, Ni)`, `→ alcano`], [4, 186, `+ NaH`, `→ acetiluro (sale el H)`]].forEach(b => s += ln(194, b[1] + 24, 200, 125, `dash`) + box(...b));
    [[366, 14, `H₂O, H₂SO₄, HgSO₄`, `→ enol → cetona`], [366, 186, `hidroboración-oxidación`, `→ aldehído (terminal)`]].forEach(b => s += ln(366, b[1] + 24, 360, 125, `dash`) + box(...b));
    return s; })(), `Mapa de reacciones de los alquinos`), `Hidratación da cetona; hidroboración da aldehído. Para llegar al alcano se gastan 2 H₂.`)]);

  set(`Isomería estructural de los alquinos`, [fig(svg(560, 230, (() => { let s = ``;
    const row = (y, tag, a, b) => T(20, y, tag, { c:`tb`, a:`start` }) + T(130, y, a, { c:`tk`, a:`start`, fs:15 }) + T(370, y, b, { c:`tk`, a:`start`, fs:15 });
    s += row(40, `Posición`, `HC≡C−CH₂−CH₃`, `CH₃−C≡C−CH₃`) + T(130, 60, `se movió el C≡C (C₄H₆)`, { c:`tm`, a:`start` });
    s += ln(20, 80, 540, 80, `dash`) + row(112, `Cadena`, `HC≡C−CH₂CH₂CH₃`, `HC≡C−CH(CH₃)₂`) + T(130, 132, `se ramificó (C₅H₈)`, { c:`tm`, a:`start` });
    s += ln(20, 152, 540, 152, `dash`) + row(184, `Función`, `HC≡C−CH₂−CH₃`, `CH₂=CH−CH=CH₂`) + T(130, 204, `cambió de familia: alquino → dieno (C₄H₆)`, { c:`tm`, a:`start` });
    return s; })(), `Tres tipos de isomería estructural`), `Antes de clasificar, comprueba que los dos tengan la misma fórmula molecular.`)]);

  set(`Trucos visuales para recordar -ano, -eno, -ino`, [fig(svg(560, 190, (() => { let s = ``;
    [[95, 1, `-ano`, `CₙH₂ₙ₊₂ · sp³ · 109.5°`, `var(--t23)`], [280, 2, `-eno`, `CₙH₂ₙ · sp² · 120°`, `var(--t24)`], [465, 3, `-ino`, `CₙH₂ₙ₋₂ · sp · 180°`, P]].forEach(([x, n, suf, d, c]) => {
      s += T(x, 40, suf, { c:`tk`, fs:26 }) + (n === 1 ? [0] : n === 2 ? [-6, 6] : [-9, 0, 9]).map(o => `<line x1="${x - 40}" y1="${90 + o}" x2="${x + 40}" y2="${90 + o}" class="s" style="stroke:${c};stroke-width:3"/>`).join(``);
      s += T(x, 135, `${n} raya${n > 1 ? `s` : ``}`, { c:`tb` }) + T(x, 158, d, { c:`tm` }); });
    return s; })(), `a e i igual a 1 2 3 rayas`), `La vocal, el número de rayas, la fórmula y la geometría van juntas.`)]);
})();
