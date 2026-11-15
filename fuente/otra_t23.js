/* «Explícalo de otra forma» · Tema 23: alcanos */
Object.assign(OTRA, {
[`Generalidades de los alcanos`]:{
  pre:[`Un carbono con 4 vecinos: ¿cómo los acomoda para que queden lo más lejos posible entre sí, en 3D?`,`En un tetraedro, a 109.5° unos de otros (sp³).`],
  idea:`Alcano = <b>solo enlaces sencillos</b>. Cada carbono es <b>sp³</b>, tetraédrico (109.5°), y los enlaces σ <b>giran libremente</b>. Sin π ni grupos funcionales, son <b>poco reactivos</b>.`,
  por:[`4 vecinos → 4 orbitales híbridos (1 s + 3 p = sp³).`,
    `El σ es simétrico alrededor del eje: girar no lo rompe.`,
    `No tienen zonas ricas ni pobres en electrones: casi no atraen ni a electrófilos ni a nucleófilos.`],
  ojo:`109.5° es el ángulo del tetraedro, no 90°: la molécula no es plana.`,
  prueba:[[`¿Qué hibridación y ángulo tienen los carbonos de un alcano?`,`sp³, 109.5°.`]]
},
[`Radicales (grupos) alquilo`]:{
  pre:[`Si al metano (CH₄) le quitas un H, ¿cuántos H quedan y qué pasa con ese enlace libre?`,`Quedan 3 (−CH₃, metilo) y el enlace libre se une a una cadena: por eso un radical siempre es una rama.`],
  idea:`Radical alquilo = <b>alcano − 1 H</b>. Cambia «-ano» por «-il(o)»: metano → metil, etano → etil. Fórmula CₙH₂ₙ₊₁−.`,
  por:[`Metil −CH₃ · etil −CH₂CH₃ · propil −CH₂CH₂CH₃.`,
    `Isopropil: el enlace libre sale del carbono del medio: −CH(CH₃)₂.`,
    `ter-butil: sale de un carbono unido a 3 metilos: −C(CH₃)₃.`],
  ojo:`El radical no existe solo: siempre está pegado a algo (se dibuja con un guion).`,
  prueba:[[`¿Cuántos H tiene un radical propilo?`,`7 (C₃H₇−).`]]
},
[`Conformaciones del etano`]:{
  pre:[`Mira el etano de frente, por el eje C−C. Si giras el carbono de atrás, ¿hay posiciones donde los H de adelante y de atrás «chocan»?`,`Sí: en la eclipsada quedan alineados (más tensión); en la alternada quedan intercalados (más estable).`],
  idea:`Conformaciones = la <b>misma molécula</b> en distintas «posturas» al girar el C−C. <b>Alternada</b> (H intercalados) es estable; <b>eclipsada</b> (H alineados) tiene tensión.`,
  por:[`Proyección de Newman: miras el enlace C−C de frente; el carbono de adelante es un punto y el de atrás, un círculo.`,
    `Eclipsada (0°): los C−H de adelante tapan a los de atrás → repulsión.`,
    `Alternada (60°): quedan intercalados → mínima repulsión.`,
    `Pasar de una a otra no rompe enlaces: no son isómeros distintos.`],
  ojo:`Confórmeros ≠ isómeros. Se convierten entre sí solo girando.`,
  prueba:[[`¿Cuál es más estable: la conformación eclipsada o la alternada?`,`La alternada.`]]
},
[`Conformaciones del butano`]:{
  pre:[`En el butano giras el enlace central. Los dos metilos son «grandes». ¿Dónde estarán más cómodos?`,`Lo más lejos posible: a 180° (anti).`],
  idea:`Mismo giro que en el etano, pero ahora importa <b>dónde quedan los dos CH₃</b>. Más lejos = más estable: <b>anti (180°) > gauche (60°) > eclipsadas</b>.`,
  por:[`Anti: metilos opuestos → la más estable.`,
    `Gauche: alternada, pero metilos a 60° → algo de tensión.`,
    `Eclipsada total (0°): metilos uno encima del otro → la menos estable.`],
  ojo:`Grupos grandes cerca = tensión. Grupos grandes lejos = estabilidad.`,
  prueba:[[`¿Qué conformación del butano es la más estable?`,`La anti (metilos a 180°).`]]
},
[`Conformaciones de los cicloalcanos`]:{
  pre:[`Un hexágono plano tiene ángulos de 120°, pero el carbono sp³ quiere 109.5°. ¿Qué crees que hace el anillo del ciclohexano?`,`Se pliega en 3D (forma de silla) para lograr ángulos de ≈109.5°.`],
  idea:`El ciclohexano <b>no es plano</b>: se dobla en forma de <b>silla</b> para tener ángulos tetraédricos y sin tensión. El bote es una forma intermedia menos estable.`,
  por:[`Silla: ángulos ≈109.5° y enlaces alternados → la más estable.`,
    `Bote: algunos enlaces quedan eclipsados y dos H de las puntas chocan.`,
    `En la silla, cada H es axial (vertical) o ecuatorial (horizontal). Los grupos grandes prefieren ecuatorial.`],
  ojo:`Dibujar el ciclohexano como hexágono es una simplificación: en realidad es una silla.`,
  prueba:[[`¿Cuál es la conformación más estable del ciclohexano?`,`La silla.`]]
},
[`Nomenclatura IUPAC de alcanos: reglas`]:{
  pre:[`Sin doble enlace que mande, ¿qué decide desde qué extremo numerar un alcano ramificado?`,`Las ramas: se numera para que reciban los números más bajos.`],
  idea:`Sin insaturaciones, mandan las <b>ramas</b>: cadena más larga → numerar para que las ramas tengan los <b>números más bajos</b> → ramas en orden alfabético + raíz + «ano».`,
  por:[`Cadena principal: la de más carbonos. Si empatan, la que tenga más ramas.`,
    `Compara números en el primer punto de diferencia: 2,3 gana a 2,4.`,
    `Si empata, el orden alfabético decide quién se lleva el número bajo.`,
    `di-, tri- no cuentan para el orden alfabético; iso- sí.`],
  ojo:`La cadena principal no siempre es la que está escrita en línea recta.`,
  prueba:[[`¿«2,4» o «3,5» para las mismas ramas?`,`2,4 (números más bajos).`]]
},
[`Ejemplo resuelto: 3-etil-2-metilhexano`]:{
  pre:[`En CH₃−CH(CH₃)−CH(CH₂CH₃)−CH₂−CH₂−CH₃, ¿desde qué extremo numeras?`,`Desde la izquierda: las ramas quedan en 2 y 3 (desde la derecha serían 4 y 5).`],
  idea:`Sigue los pasos en orden: <b>6 C</b> (hex) → numerar desde la izquierda → metilo en 2, etilo en 3 → <b>e</b>til antes que <b>m</b>etil → <b>3-etil-2-metilhexano</b>.`,
  por:[`El orden alfabético cambia el orden de escritura, pero no los números.`,
    `Comprobación: cuenta los C totales → 6 + 1 + 2 = 9 → C₉H₂₀ (cumple CₙH₂ₙ₊₂).`],
  ojo:`El etilo de la rama no se suma a la cadena principal si eso no da una cadena más larga.`,
  prueba:[[`¿Por qué «etil» va antes que «metil» si el metilo tiene el número más bajo?`,`Porque el orden de escritura es alfabético, no numérico.`]]
},
[`Nomenclatura de cicloalcanos`]:{
  pre:[`Un anillo de 5 carbonos con un metilo: ¿hace falta decir «1-metil»?`,`No: con un solo grupo, cualquier carbono puede ser el 1. Se dice metilciclopentano.`],
  idea:`<b>ciclo + raíz + ano</b>. Con un sustituyente, sin número. Con varios, numera el anillo para dar los números más bajos (empate → orden alfabético).`,
  por:[`Ciclopentano (5), ciclohexano (6).`,
    `1-etil-2-metilciclopentano: grupos vecinos; el etilo recibe el 1 por orden alfabético.`],
  ojo:`En un anillo puedes numerar en cualquier sentido: elige el que da los números más bajos.`,
  prueba:[[`Nombra un ciclohexano con un solo grupo etilo.`,`Etilciclohexano.`]]
},
[`Nomenclatura común (no IUPAC)`]:{
  pre:[`¿Por qué crees que todavía se dice «alcohol isopropílico» y no solo «propan-2-ol»?`,`Por costumbre: los nombres comunes son históricos y se siguen usando en la vida diaria, la industria y la farmacia.`],
  idea:`Los nombres comunes vienen del <b>uso</b> (vinagre → acético) o de <b>prefijos</b> como n-, iso-, neo-. Son cómodos, pero no describen bien moléculas grandes; por eso existe la IUPAC.`,
  por:[`n- = cadena recta (n-butano).`,
    `iso- = una ramificación CH₃ en el penúltimo carbono (isobutano = 2-metilpropano).`,
    `neo- = un carbono unido a 4 carbonos (neopentano = 2,2-dimetilpropano).`],
  ojo:`Aprende las equivalencias más usadas: isopropílico = propan-2-ol; acético = etanoico.`,
  prueba:[[`IUPAC del isobutano.`,`2-metilpropano.`]]
},
[`Clasificación: por cadena y por tipo de carbono`]:{
  pre:[`En el isobutano, el carbono central está unido a 3 carbonos. ¿Cómo lo llamarías?`,`Terciario (3°).`],
  idea:`Cuenta <b>cuántos carbonos</b> toca cada carbono: 1 → primario · 2 → secundario · 3 → terciario · 4 → cuaternario.`,
  por:[`Propano: los extremos son 1° y el del medio es 2°.`,
    `Isobutano: el central es 3°.`,
    `Neopentano: el central es 4°.`,
    `Esta clasificación vuelve en alcoholes (Tema 27): alcohol 1°, 2°, 3°.`],
  ojo:`Se cuentan carbonos vecinos, no hidrógenos.`,
  prueba:[[`¿Qué tipo de carbono es el C2 del butano?`,`Secundario (unido a 2 carbonos).`]]
},
[`n-alcanos, ramificados y cíclicos`]:{
  pre:[`El pentano lineal hierve a 36 °C y el neopentano (misma fórmula, muy ramificado) a 9.5 °C. ¿Por qué?`,`Las ramas lo vuelven más «redondo»: menos superficie de contacto, menos fuerzas de London.`],
  idea:`Dos reglas para el punto de ebullición: <b>más carbonos → ↑</b> y <b>más ramas → ↓</b>.`,
  por:[`Metano −164 °C → butano 0 °C → pentano 36 °C → octano 126 °C → decano 174 °C.`,
    `Moléculas largas tienen más superficie para atraerse (London).`,
    `Todos flotan en el agua (densidad < 1).`],
  ojo:`Dos flechas distintas: el tamaño sube la ebullición; la ramificación la baja.`,
  prueba:[[`¿Quién hierve más alto: hexano o 2,2-dimetilbutano?`,`El hexano (lineal).`]]
},
[`Propiedades de los alcanos`]:{
  pre:[`¿Por qué la gasolina (alcanos) no se mezcla con el agua y flota encima?`,`Porque es apolar (no se mezcla con el agua polar) y menos densa que el agua.`],
  idea:`Físicas: <b>apolares</b>, insolubles, flotan, no conducen. Químicas: <b>poco reactivos</b>; sus dos reacciones son <b>combustión</b> y <b>halogenación por radicales</b> (con luz).`,
  por:[`Combustión: alcano + O₂ → CO₂ + H₂O + energía (combustibles).`,
    `Halogenación: CH₄ + Cl₂ (luz) → CH₃Cl + HCl (sustitución de un H).`,
    `Son poco reactivos porque los enlaces C−C y C−H son fuertes y casi no polares.`],
  ojo:`Alcanos: sustitución. Alquenos: adición.`,
  prueba:[[`¿Qué productos da la combustión completa de un alcano?`,`CO₂ y H₂O.`]]
},
[`Isomería estructural (de cadena)`]:{
  pre:[`Con 4 carbonos, ¿de cuántas maneras puedes unirlos en cadena?`,`De dos: en línea (butano) o con una rama (isobutano). Los dos son C₄H₁₀.`],
  idea:`Isómeros de cadena = <b>misma fórmula</b>, <b>distinto esqueleto</b> (lineal o ramificado). Con más carbonos, el número de isómeros crece rápido.`,
  por:[`C₁ a C₃: una sola forma, sin isómeros.`,
    `C₄H₁₀: 2 (butano, isobutano).`,
    `C₅H₁₂: 3 (pentano, isopentano, neopentano).`,
    `C₆H₁₄: 5.`],
  ojo:`Girar o dibujar «doblada» la misma cadena no crea un isómero nuevo.`,
  prueba:[[`¿Cuántos isómeros tiene el C₅H₁₂?`,`3.`]]
},
[`Relevancia clínica de los alcanos`]:{
  pre:[`¿Por qué inhalar solventes (alcanos cortos) afecta tan rápido al cerebro?`,`Porque son muy lipofílicos y cruzan con facilidad la barrera hematoencefálica.`],
  idea:`Su <b>afinidad por las grasas</b> (lipofilia) explica casi todo su uso clínico: <b>toxicidad</b> (atraviesan membranas), <b>anestesia</b> (halotano) y <b>piel</b> (vaselina y parafina como barrera).`,
  por:[`Apolar → se disuelve en las membranas lipídicas → entra al sistema nervioso.`,
    `Halotano: alcano halogenado que se usó como anestésico inhalado.`,
    `Vaselina: mezcla de alcanos que forma una capa que retiene la humedad de la piel.`],
  ojo:`Lipofílico = «ama las grasas» = cruza membranas.`,
  prueba:[[`¿Para qué se usa la vaselina en dermatología?`,`Como barrera que retiene la humedad de la piel.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t23)`;
  const newman = (cx, cy, back, lab, sub) => { let s = `<circle cx="${cx}" cy="${cy}" r="34" class="s"/>`;
    [90, 210, 330].forEach(a => { const r = a * Math.PI / 180; s += ln(cx, cy, cx + 34 * Math.cos(r), cy - 34 * Math.sin(r)) + T(cx + 46 * Math.cos(r), cy - 46 * Math.sin(r) + 5, `H`, { c:`tk`, fs:13 }); });
    back.forEach(a => { const r = a * Math.PI / 180; s += ln(cx + 34 * Math.cos(r), cy - 34 * Math.sin(r), cx + 54 * Math.cos(r), cy - 54 * Math.sin(r)) + T(cx + 64 * Math.cos(r), cy - 64 * Math.sin(r) + 5, `H`, { c:`tm`, fs:12 }); });
    return s + `<circle cx="${cx}" cy="${cy}" r="4" style="fill:var(--ink)"/>` + T(cx, cy + 92, lab, { c:`tb` }) + T(cx, cy + 110, sub, { c:`tm` }); };
  set(`Generalidades de los alcanos`, [fig(svg(560, 170, `<circle cx="150" cy="85" r="13" style="fill:${P}"/>` + T(150, 90, `C`, { c:`tw` }) + [[150, 30], [100, 120], [200, 120], [186, 66]].map(([x, y], i) => (i === 3 ? `<line x1="150" y1="85" x2="${x}" y2="${y}" class="dash"/>` : ln(150, 85, x, y)) + `<circle cx="${x}" cy="${y}" r="7" class="s" style="fill:var(--surface)"/>`).join(``) + T(150, 160, `tetraedro · 109.5°`, { c:`tb` }) + sep(290, 20, 160) + T(420, 60, `sp³: 4 vecinos`, { c:`tb` }) + T(420, 86, `solo enlaces σ`, { c:`tm` }) + T(420, 108, `giran libremente`, { c:`tm` }) + T(420, 130, `poco reactivos`, { c:`tm` }), `Carbono tetraédrico`), `La línea punteada va hacia atrás del papel: la molécula es 3D.`)]);
  set(`Radicales (grupos) alquilo`, [fig(flow([[`Metano`, `CH₄`], [`− 1 H`, ``], [`Metil`, `−CH₃|(rama)`, P]], { foot:`alcano − H → «-ilo» · CₙH₂ₙ₊₁−`, label:`De alcano a radical` }), `El guion marca el enlace libre con el que se pega a la cadena.`)]);
  set(`Conformaciones del etano`, [fig(svg(560, 210, newman(150, 80, [80, 200, 320], `eclipsada (0°)`, `H alineados · tensión`) + sep(280, 20, 200) + newman(410, 80, [30, 150, 270], `alternada (60°)`, `H intercalados · estable`), `Proyecciones de Newman del etano`), `Vista de frente al enlace C−C: el punto es el carbono de adelante y el círculo el de atrás.`)]);
  set(`Conformaciones del butano`, [fig(scale([[`anti 180°`, 3, G, `la más estable`], [`gauche 60°`, 3, `var(--t20)`, `estable`], [`eclipsada`, 3, R, `la menos estable`]], { title:`distancia entre los dos CH₃ → estabilidad`, label:`Conformaciones del butano` }), `Metilos lejos = estable; metilos juntos = tensión.`)]);
  set(`Conformaciones de los cicloalcanos`, [fig(svg(560, 160, `<polygon points="71,115 123,86 198,101 243,44 192,72 117,57" class="s" style="stroke:${P};stroke-width:2.5"/>` + T(135, 150, `silla: 109.5° · la más estable`, { c:`tb` }) + sep(330, 20, 150) + `<polygon points="520,70 485,109 415,109 380,70 415,71 485,71" class="s"/>` + T(450, 150, `bote: menos estable`, { c:`tb` }), `Silla y bote`), `El anillo se pliega para que sus ángulos sean tetraédricos.`)]);
  set(`Nomenclatura IUPAC de alcanos: reglas`, [fig(flow([[`Cadena`, `la más larga|(empate: más ramas)`], [`Numerar`, `ramas con|números bajos`], [`Ramas`, `di-, tri-|si se repiten`], [`Nombre`, `alfabético|+ raíz + ano`, P]], { label:`Reglas de nomenclatura de alcanos` }), `Sin dobles enlaces, las ramas deciden la numeración.`)]);
  set(`Ejemplo resuelto: 3-etil-2-metilhexano`, [fig(svg(560, 200, OTRAH.chain([`CH₃`, `CH`, `CH`, `CH₂`, `CH₂`, `CH₃`], [1, 1, 1, 1, 1], 50, 92, 56, { nums:[1, 2, 3, 4, 5, 6], br:[{ i:1, l:`CH₃` }, { i:2, l:`CH₂CH₃` }] }) + hl(118, 96, 50, 34, R) + hl(200, 96, 86, 34, G) + T(142, 150, `metil (2)`, { c:`tb`, col:R }) + T(243, 150, `etil (3)`, { c:`tb`, col:G }) + T(280, 188, `3-etil-2-metilhexano`, { c:`tb`, fs:15 }), `Ejemplo de nomenclatura`), `Números desde la izquierda; orden de escritura alfabético.`)]);
  set(`Nomenclatura de cicloalcanos`, [fig(flow([[`1 grupo`, `metilciclopentano|(sin número)`], [`2 o más`, `números bajos;|empate → alfabético`, P]], { noArr:1, foot:`1-etil-2-metilciclopentano`, label:`Nombres de cicloalcanos` }), `En un anillo, el número 1 se elige.`)]);
  set(`Nomenclatura común (no IUPAC)`, [fig(flow([[`n-butano`, `cadena recta`], [`isobutano`, `2-metilpropano`], [`neopentano`, `2,2-dimetil-|propano`]], { noArr:1, h:84, label:`Prefijos n iso neo` }), `Los prefijos comunes describen la forma de la cadena.`)]);
  set(`Clasificación: por cadena y por tipo de carbono`, [fig(flow([[`1°`, `toca 1 C`], [`2°`, `toca 2 C`], [`3°`, `toca 3 C`], [`4°`, `toca 4 C`, P]], { noArr:1, foot:`propano: extremos 1°, centro 2° · isobutano: centro 3°`, label:`Tipos de carbono` }), `Se cuentan los carbonos vecinos.`)]);
  set(`n-alcanos, ramificados y cíclicos`, [fig(svg(560, 180, (() => { let s = ``; const D = [[`metano`, -164], [`butano`, 0], [`pentano`, 36], [`octano`, 126], [`decano`, 174]]; D.forEach(([n, v], i) => { const x = 70 + i * 105, h = (v + 170) / 3; s += `<rect x="${x - 26}" y="${150 - h}" width="52" height="${h}" rx="6" style="fill:${P};opacity:.5"/>` + T(x, 168, n, { c:`tb`, fs:12 }) + T(x, 142 - h, `${v} °C`, { c:`tm` }); }); return s; })(), `Punto de ebullición de los n-alcanos`), `Más carbonos → punto de ebullición más alto.`)]);
  set(`Propiedades de los alcanos`, [fig(cmp([`Combustión`, `alcano + O₂`, `→ CO₂ + H₂O + energía`], [`Halogenación (luz)`, `CH₄ + Cl₂`, `→ CH₃Cl + HCl`], { cl:R, cr:P, foot:`alcanos: sustitución · alquenos: adición`, label:`Reacciones de los alcanos` }), `Sus dos reacciones típicas.`)]);
  set(`Isomería estructural (de cadena)`, [fig(svg(560, 150, OTRAH.chain([`CH₃`, `CH₂`, `CH₂`, `CH₃`], [1, 1, 1], 40, 66, 50) + T(140, 130, `butano (lineal)`, { c:`tb` }) + sep(280, 20, 118) + OTRAH.chain([`CH₃`, `CH`, `CH₃`], [1, 1], 330, 80, 40, { br:[{ i:1, l:`CH₃` }] }) + T(410, 130, `isobutano (ramificado)`, { c:`tb` }) + T(280, 148, `los dos son C₄H₁₀`, { c:`tm` }), `Isómeros del butano`), `Mismas piezas, otro esqueleto.`)]);
  set(`Relevancia clínica de los alcanos`, [fig(flow([[`Apolar`, `lipofílico`], [`Cruza`, `membranas|y barrera|hematoencefálica`, R], [`Usos`, `anestesia,|vaselina`, P]], { label:`Lipofilia de los alcanos` }), `«Ama las grasas»: entra fácil a las membranas.`)]);
})();
