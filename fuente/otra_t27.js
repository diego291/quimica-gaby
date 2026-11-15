/* «Explícalo de otra forma» · Tema 27: alcoholes y fenoles */
Object.assign(OTRA, {
[`Funciones oxigenadas: estructura y fórmula general`]:{
  pre:[`Si a un alcano le cambias un H por un −OH, ¿cambia el número de H de la fórmula global?`,`No: quitas un H y el −OH trae otro. Por eso un alcohol es CₙH₂ₙ₊₂O, igual que su alcano más un O.`],
  idea:`Una función oxigenada es un <b>hidrocarburo + un grupo con oxígeno</b>. Ese grupo decide cómo se comporta la molécula. Alcohol: −OH en una <b>cadena</b>. Fenol: −OH pegado a un <b>anillo aromático</b>.`,
  por:[`Alcohol: R−OH → CₙH₂ₙ₊₂O (etanol C₂H₆O).`,
    `Fenol: Ar−OH → CₙH₂ₙ₋₆O, porque el anillo aromático ya «quita» 8 H frente al alcano (3 π + 1 anillo, 2 H cada uno).`,
    `Lo que importa es dónde está pegado el −OH: a un carbono sp³ de cadena (alcohol) o a un carbono del anillo (fenol).`],
  ojo:`C₆H₅−CH₂−OH (alcohol bencílico) es un alcohol, no un fenol: el −OH está en el CH₂, no en el anillo.`,
  prueba:[[`¿Fórmula global del propanol?`,`C₃H₈O.`],[`¿El −OH del fenol está en una cadena o en el anillo?`,`Directamente en el anillo aromático.`]]
},
[`Clasificación de las funciones oxigenadas`]:{
  pre:[`El oxígeno puede unirse al carbono con enlace sencillo (C−O) o doble (C=O). ¿Qué funciones crees que van en cada grupo?`,`C−O: alcohol, fenol, éter. C=O: aldehído, cetona. Y el ácido carboxílico tiene los dos (C=O y −OH).`],
  idea:`Clasifica con dos preguntas: <b>¿enlace sencillo o doble con el O?</b> y <b>¿dónde está?</b> (punta o medio de la cadena, anillo, entre dos carbonos).`,
  por:[`C−O con H: alcohol (cadena) o fenol (anillo).`,
    `C−O entre dos carbonos: éter (R−O−R').`,
    `C=O en la punta: aldehído (−CHO). C=O en medio: cetona (R−CO−R').`,
    `C=O y −OH en el mismo carbono: ácido carboxílico (−COOH).`],
  ojo:`Aldehído y cetona tienen la misma fórmula global (CₙH₂ₙO). Lo que cambia es la posición del C=O.`,
  prueba:[[`CH₃−CO−CH₃: ¿aldehído o cetona?`,`Cetona: el C=O está en medio.`],[`¿Qué función es CH₃−O−CH₃?`,`Éter.`]]
},
[`Nomenclatura: regla general y prioridad`]:{
  pre:[`Si una molécula tiene un −OH y un doble enlace, ¿quién da la terminación del nombre?`,`El −OH (sufijo -ol). El doble enlace va en medio como «-en-».`],
  idea:`El nombre se arma por piezas: <b>ramas + cadena + insaturaciones + sufijo del grupo principal</b>. El grupo de mayor prioridad manda en la numeración y da el sufijo.`,
  por:[`Paso 1: identifica el grupo principal (aquí, el −OH).`,
    `Paso 2: cadena más larga que lo contenga.`,
    `Paso 3: numera para que el grupo principal tenga el número más bajo (antes que dobles enlaces y ramas).`,
    `Paso 4: ensambla con el localizador justo antes del sufijo: butan-<b>2</b>-ol.`],
  ojo:`Con −OH presente, el −OH manda en la numeración, no el doble enlace.`,
  prueba:[[`En CH₂=CH−CH₂−OH, ¿qué recibe el número 1?`,`El carbono con el −OH: prop-2-en-1-ol.`]]
},
[`Alcoholes como función principal (sufijo -ol)`]:{
  pre:[`CH₃−CH(CH₃)−CH(OH)−CH₃: ¿desde qué extremo numeras?`,`Desde la derecha: el −OH queda en 2 (desde la izquierda quedaría en 3).`],
  idea:`Mismo método que en alquenos, pero ahora manda el <b>−OH</b>: número más bajo para él, y la terminación del alcano cambia a <b>-ol</b>.`,
  por:[`Ejemplo: 4 carbonos (but-), −OH en 2, metilo en 3 → <b>3-metilbutan-2-ol</b>.`,
    `Con doble enlace: CH₂=CH−CH₂−OH → el −OH en 1, el doble en 2 → <b>prop-2-en-1-ol</b>.`,
    `El número del −OH va pegado al «ol»; el del doble, pegado al «en».`],
  ojo:`Error típico: dar el número bajo al metilo o al doble enlace. Primero el −OH.`,
  prueba:[[`Nombra CH₃−CH₂−CH(OH)−CH₃.`,`Butan-2-ol.`],[`Nombra CH₃−CH(OH)−CH₃.`,`Propan-2-ol (isopropanol).`]]
},
[`Polialcoholes, alcoholes cíclicos y -OH secundario`]:{
  pre:[`«Etanodiol» o «etano-1,2-diol»: ¿se conserva la «o» de etano cuando hay dos −OH?`,`Sí: etano-1,2-diol. Con un solo −OH se pierde (etanol); con -diol, -triol se conserva.`],
  idea:`Tres casos: <b>varios −OH</b> → -diol, -triol · <b>anillo</b> → el C del −OH es siempre el 1 · <b>−OH no principal</b> → prefijo «hidroxi-».`,
  por:[`Etilenglicol: HO−CH₂−CH₂−OH → etano-1,2-diol. Glicerina: propano-1,2,3-triol.`,
    `En un ciclo, como el −OH ya es C1, no se escribe su número: 3-metilciclohexanol.`,
    `Si hay un grupo con más prioridad (por ejemplo una cetona), el −OH pasa a ser prefijo: hidroxi-.`],
  ojo:`-diol conserva la «o»: propano-1,2-diol, no «propan-1,2-diol».`,
  prueba:[[`Nombra HO−CH₂−CH(OH)−CH₂−OH.`,`Propano-1,2,3-triol (glicerina).`]]
},
[`Nombres IUPAC y comunes de alcoholes`]:{
  pre:[`¿Por qué al propan-2-ol le dicen «isopropílico»?`,`Porque el −OH está en el carbono del medio, como en el grupo isopropilo.`],
  idea:`El nombre común describe <b>dónde</b> está el −OH: n- (en la punta de una cadena recta), iso- (ramificación al final), sec- (en un carbono secundario), tert- (en un carbono terciario).`,
  por:[`Carbono 1°: unido a 1 carbono. 2°: a 2. 3°: a 3.`,
    `Butan-2-ol: el −OH está en un C unido a 2 carbonos → sec-butílico.`,
    `2-metilpropan-2-ol: el −OH está en un C unido a 3 carbonos → tert-butílico.`],
  ojo:`El isopropanol (propan-2-ol) es el alcohol de la desinfección en el laboratorio.`,
  prueba:[[`¿Nombre común del metanol?`,`Alcohol metílico (de madera).`],[`¿Qué tipo de carbono tiene el −OH del tert-butílico?`,`Terciario.`]]
},
[`Nomenclatura de fenoles`]:{
  pre:[`En un fenol, ¿qué carbono es el 1?`,`El que tiene el −OH.`],
  idea:`La base es <b>fenol</b>: el C del −OH es el 1, y numeras hacia el lado que dé números más bajos a los demás grupos.`,
  por:[`−CH₃ en 2 → 2-metilfenol (o-metilfenol).`,
    `−Cl en 4 → 4-clorofenol (p-clorofenol).`,
    `Con un solo sustituyente además del −OH, sirven o/m/p: 2 = orto, 3 = meta, 4 = para.`],
  ojo:`El −OH no se nombra como «hidroxi»: ya está incluido en «fenol».`,
  prueba:[[`Fenol con −NO₂ en 3: nombre con número y con prefijo.`,`3-nitrofenol = m-nitrofenol.`]]
},
[`Fenoles polisustituidos, polifenoles y nombres comunes`]:{
  pre:[`Un fenol con Br y dos metilos además del −OH: ¿sirven o, m, p?`,`No: con más de un sustituyente se usan solo números.`],
  idea:`Más de un sustituyente → <b>solo números</b>. Varios −OH en el anillo → se nombra como <b>bencenodiol/triol</b>.`,
  por:[`4-bromo-2,6-dimetilfenol: −OH en 1, metilos a los lados (2 y 6), Br enfrente (4).`,
    `Benceno-1,2-diol = catecol · 1,3 = resorcinol · 1,4 = hidroquinona.`,
    `Los cresoles son metilfenoles (o-, m-, p-cresol).`],
  ojo:`Catecol (1,2) es el que aparece en las catecolaminas del Tema 26.`,
  prueba:[[`¿Qué es el benceno-1,4-diol?`,`Hidroquinona.`],[`¿Qué es el o-cresol?`,`2-metilfenol.`]]
},
[`Propiedades físicas de los alcoholes`]:{
  pre:[`El etanol (46 g/mol) hierve a 78 °C y el propano (44 g/mol) a −42 °C. Con masas casi iguales, ¿qué explica la diferencia?`,`Los puentes de hidrógeno del −OH: hay que romperlos para que el alcohol pase a gas.`],
  idea:`El <b>−OH forma puentes de hidrógeno</b> (O es parte de FON). Eso sube el punto de ebullición y le permite mezclarse con el agua. La cadena de carbono, en cambio, es apolar.`,
  por:[`El alcohol tiene dos «personalidades»: cabeza −OH polar (le gusta el agua) y cola de carbono apolar (no le gusta).`,
    `Cadena corta (1–3 C): manda la cabeza → soluble en agua.`,
    `Cadena larga: manda la cola → cada vez menos soluble (↑ C, ↓ solubilidad).`,
    `Más carbonos → más London → ↑ punto de ebullición.`],
  ojo:`Dos flechas opuestas con el tamaño: ↑ ebullición, ↓ solubilidad.`,
  prueba:[[`¿Quién es más soluble en agua: metanol u octanol?`,`Metanol: su cadena es corta.`],[`¿Por qué el etanol hierve más alto que el propano?`,`Por los puentes de hidrógeno de su −OH.`]]
},
[`Propiedades físicas de los fenoles`]:{
  pre:[`Si un ácido tiene pKa 10 y otro pKa 16, ¿cuál es más ácido?`,`El de pKa 10: menor pKa = más ácido.`],
  idea:`Igual que los alcoholes, los fenoles hacen <b>puentes de hidrógeno</b> (ebullición alta). Además son <b>más ácidos</b> que los alcoholes.`,
  por:[`pKa es una escala inversa: cada unidad menos es 10 veces más ácido.`,
    `Fenol pKa ≈ 10; etanol ≈ 16 → el fenol es mucho más ácido.`,
    `Por eso el fenol reacciona con bases (NaOH) y forma sales, y es cáustico en la piel.`],
  ojo:`El material dice «pKa mayor, por lo que más ácido»: está al revés. <b>Menor pKa = más ácido</b>.`,
  prueba:[[`¿Más ácido: pKa 5 o pKa 10?`,`pKa 5.`]]
},
[`Propiedades químicas de los alcoholes`]:{
  pre:[`Un alcohol tiene dos enlaces clave: O−H y C−O. ¿Qué pasa si rompes cada uno?`,`Si rompes O−H, sale el H (acidez). Si rompes C−O, sale todo el −OH (deshidratación o sustitución).`],
  idea:`Todo se explica por <b>qué enlace se rompe</b>: <b>O−H</b> → actúa como ácido débil · <b>C−O</b> → pierde el −OH · y el carbono del −OH se puede <b>oxidar</b>.`,
  por:[`<b>Acidez:</b> 2 R−OH + 2 Na → 2 R−O⁻Na⁺ + H₂.`,
    `<b>Oxidación:</b> primario → aldehído → ácido carboxílico. Secundario → cetona. Terciario: no se oxida (su C no tiene H).`,
    `<b>Deshidratación:</b> H₂SO₄ y calor → pierde H₂O → alqueno (lo contrario de la hidratación del Tema 24).`],
  ojo:`El alcohol terciario no se oxida: el carbono del −OH no tiene H que perder.`,
  prueba:[[`¿Qué da el etanol al oxidarse suavemente?`,`Etanal (acetaldehído), un aldehído.`],[`¿Qué da el propan-2-ol al oxidarse?`,`Propanona (acetona), una cetona.`]]
},
[`Propiedades químicas de los fenoles`]:{
  pre:[`Un alcohol común no reacciona con NaOH, pero el fenol sí. ¿Qué te dice eso de su acidez?`,`Que el fenol es bastante más ácido: la base acuosa puede quitarle el H.`],
  idea:`El −OH y el anillo se ayudan: el anillo hace al <b>−OH más ácido</b>, y el −OH hace al <b>anillo más reactivo</b> en la sustitución electrófila (lo activa en orto y para).`,
  por:[`C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O (fenóxido de sodio).`,
    `Síntesis de Williamson: fenóxido + CH₃−I → anisol (un éter) + NaI.`,
    `El −OH empuja electrones al anillo, sobre todo hacia orto y para, y ahí entran los electrófilos.`],
  ojo:`Activante = el anillo reacciona más rápido que el benceno, y el grupo nuevo entra en orto o para.`,
  prueba:[[`¿Qué se forma con fenóxido de sodio y CH₃I?`,`Anisol (metoxibenceno).`],[`¿En qué posiciones dirige el −OH a un electrófilo?`,`Orto y para.`]]
},
[`Orden de acidez`]:{
  pre:[`Cuando un ácido pierde H⁺, queda una carga negativa. ¿Dónde estará más cómoda: concentrada en un átomo o repartida en varios?`,`Repartida. Por eso el fenol (carga repartida en el anillo) es más ácido que un alcohol.`],
  idea:`Mientras más <b>estable</b> sea el anión que queda tras perder el H⁺, más ácido es el compuesto. Y en pKa: <b>menor número = más ácido</b>.`,
  por:[`Ácido carboxílico (≈ 5): la carga se reparte entre dos oxígenos.`,
    `Fenol (≈ 10): la carga se reparte por el anillo.`,
    `Agua (15.7) ≈ metanol.`,
    `Alcohol 1° > 2° > 3° (≈ 18): los grupos alquilo empujan electrones y concentran más la carga, así que el anión es menos estable.`],
  ojo:`Ordenar de más a menos ácido = ordenar de menor a mayor pKa.`,
  prueba:[[`Ordena de más a menos ácido: etanol, ácido acético, fenol.`,`Ácido acético > fenol > etanol.`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t27)`;
  set(`Funciones oxigenadas: estructura y fórmula general`, [fig(cmp([`Alcohol: R−OH`, `−OH en una cadena`, `etanol C₂H₆O`, `CₙH₂ₙ₊₂O`], [`Fenol: Ar−OH`, `−OH pegado al anillo`, `fenol C₆H₅OH`, `CₙH₂ₙ₋₆O`], { cl:P, cr:P, label:`Alcohol frente a fenol` }), `Lo que decide es a qué está pegado el −OH.`)]);
  set(`Clasificación de las funciones oxigenadas`, [fig(svg(560, 210, (() => { let s = T(140, 24, `C−O (sencillo)`, { c:`tb`, fs:15, col:P }) + T(420, 24, `C=O (doble)`, { c:`tb`, fs:15, col:P }) + sep(280, 10, 200);
    [[`alcohol`, `R−OH`], [`fenol`, `Ar−OH`], [`éter`, `R−O−R'`]].forEach(([n, f], i) => s += T(90, 60 + i * 44, n, { c:`tb`, a:`start` }) + T(190, 60 + i * 44, f, { c:`tk`, a:`start`, fs:15 }));
    [[`aldehído`, `R−CHO`, `C=O en la punta`], [`cetona`, `R−CO−R'`, `C=O en medio`], [`ác. carboxílico`, `R−COOH`, `C=O + −OH`]].forEach(([n, f, d], i) => s += T(300, 56 + i * 48, n, { c:`tb`, a:`start` }) + T(420, 56 + i * 48, f, { c:`tk`, a:`start`, fs:15 }) + T(300, 73 + i * 48, d, { c:`tm`, a:`start`, fs:11.5 }));
    return s; })(), `Clasificación de funciones oxigenadas`), `Primero mira si el O tiene enlace sencillo o doble con el carbono; luego dónde está.`)]);
  set(`Nomenclatura: regla general y prioridad`, [fig(flow([[`Grupo principal`, `da el sufijo|(-ol)`], [`Cadena`, `la más larga|que lo contenga`], [`Numerar`, `número bajo|para el −OH`], [`Ensamblar`, `ramas + cadena|+ en/in + ol`]], { label:`Pasos de la nomenclatura` }), `El −OH manda antes que los dobles enlaces y las ramas.`)]);
  set(`Alcoholes como función principal (sufijo -ol)`, [fig(svg(560, 150, OTRAH.chain([`CH₃`, `CH`, `CH`, `CH₃`], [1, 1, 1], 110, 110, 60, { nums:[4, 3, 2, 1], br:[{ i:1, l:`CH₃` }, { i:2, l:`OH` }], col:P }) + hl(305, 90, 50, 40, P) + T(280, 142, `−OH en 2 (desde la derecha) → 3-metilbutan-2-ol`, { c:`tb` }), `Numerar un alcohol`), `Se numera desde el extremo que deja el −OH con el número más bajo.`)]);
  set(`Polialcoholes, alcoholes cíclicos y -OH secundario`, [fig(cmp([`1 −OH`, `etanol`, `se pierde la «o»`], [`2 o más −OH`, `etano-1,2-diol`, `se conserva la «o»`], { cr:P, label:`Diol conserva la o` }), `Etanol, pero etanodiol: con -diol y -triol la «o» del alcano se queda.`)]);
  set(`Nombres IUPAC y comunes de alcoholes`, [fig(flow([[`1° (n-)`, `C del OH unido|a 1 carbono`], [`2° (sec-)`, `unido a|2 carbonos`], [`3° (tert-)`, `unido a|3 carbonos`]], { foot:`butan-1-ol (n) · butan-2-ol (sec) · 2-metilpropan-2-ol (tert)`, label:`Alcoholes primarios secundarios terciarios` }), `Cuenta cuántos carbonos tocan al carbono del −OH.`)]);
  set(`Nomenclatura de fenoles`, [fig(flow([[`C1 = OH`, `siempre`], [`Numerar`, `hacia los números|más bajos`], [`Nombre`, `grupo + fenol|4-clorofenol`]], { foot:`Un solo grupo extra: 2 = orto · 3 = meta · 4 = para`, label:`Nombrar un fenol` }), `El −OH ya está incluido en la palabra «fenol».`)]);
  set(`Fenoles polisustituidos, polifenoles y nombres comunes`, [fig(flow([[`1,2-diol`, `catecol`, P], [`1,3-diol`, `resorcinol`, P], [`1,4-diol`, `hidroquinona`, P]], { noArr:1, title:`bencenodioles: posición de los dos −OH`, label:`Bencenodioles` }), `Mismas posiciones que orto, meta y para.`)]);
  set(`Propiedades físicas de los alcoholes`, [fig(svg(560, 170, (() => { let s = ``;
    [[1, `metanol`, `soluble`], [4, `butanol`, `poco soluble`], [8, `octanol`, `insoluble`]].forEach(([n, nm, sol], i) => { const y = 34 + i * 46; s += `<circle cx="70" cy="${y}" r="14" style="fill:${P};opacity:.45"/>` + T(70, y + 5, `OH`, { c:`tb`, fs:11 }) + `<rect x="86" y="${y - 6}" width="${n * 32}" height="12" rx="6" style="fill:var(--muted);opacity:.45"/>` + T(380, y + 5, nm, { c:`tb`, a:`start` }) + T(460, y + 5, sol, { c:`tm`, a:`start` }); });
    return s + T(280, 162, `cabeza polar (OH) + cola apolar: si la cola crece, se disuelve menos`, { c:`tm` }); })(), `Solubilidad según el largo de la cadena`), `La cabeza −OH atrae al agua; la cola de carbono la repele.`)]);
  set(`Propiedades físicas de los fenoles`, [fig(scale([[`más ácido`, 1, R], [`menos ácido`, 1, `var(--muted)`]], { ticks:[[.15, `ác. acético 5`], [.45, `fenol 10`], [.85, `etanol 16`]], foot:`menor pKa = más ácido`, label:`Escala de pKa` }), `El fenol queda más a la izquierda que el etanol: es más ácido.`)]);
  set(`Propiedades químicas de los alcoholes`, [fig(flow([[`Alcohol 1°`, `R−CH₂OH`], [`Aldehído`, `R−CHO`], [`Ácido`, `R−COOH`]], { foot:`2° → cetona · 3° → no se oxida (sin H en su carbono)`, label:`Oxidación de alcoholes` }), `Cada paso de oxidación cambia un enlace C−H por uno C−O.`)]);
  set(`Propiedades químicas de los fenoles`, [fig(flow([[`Fenol`, `C₆H₅OH`], [`+ NaOH`, `le quita el H⁺`], [`Fenóxido`, `C₆H₅O⁻Na⁺`], [`+ CH₃I`, `→ anisol`, P]], { label:`Del fenol al anisol` }), `El fenóxido ataca al CH₃I y forma un éter (síntesis de Williamson).`)]);
  set(`Orden de acidez`, [fig(scale([[`carboxílico`, 1, R, `≈ 5`], [`fenol`, 1, `var(--t20)`, `≈ 10`], [`agua`, 1, `var(--t17)`, `15.7`], [`alcoholes`, 1, `var(--muted)`, `16–18`]], { title:`de más ácido (izquierda) a menos ácido (derecha)`, foot:`la carga del anión: repartida → más ácido · concentrada → menos`, label:`Orden de acidez` }), `Ordenar de más a menos ácido es ordenar de menor a mayor pKa.`)]);
})();
