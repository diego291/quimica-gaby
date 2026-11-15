/* ======================= "EXPLÍCALO DE OTRA FORMA" =======================
   Explicación complementaria por ficha (no está en las diapositivas del docente). Se indexa por el título de la ficha.
   Formato fijo: pre = pregunta previa (con respuesta), idea, por = por qué es así, ojo = error típico, prueba = [[pregunta, respuesta], …]. */
const OTRA = {
[`Generalidades de los alquenos`]:{
  pre:[`Un carbono del C=C está unido a 3 átomos. ¿Cómo se acomodan 3 cosas alrededor de un punto para quedar lo más lejos posible entre sí?`, `En un triángulo plano, a 120° unas de otras. Por eso el carbono es sp² y la molécula es plana.`],
  idea:`El doble enlace son <b>dos enlaces distintos</b>: un <b>σ</b> fuerte entre los núcleos y un <b>π</b> débil, por arriba y por debajo del plano. Casi todo lo que sigue en el tema sale de esa diferencia.`,
  por:[`Cada carbono tiene <b>3 vecinos</b>, así que usa 3 orbitales híbridos (sp²) para 3 enlaces σ y le queda 1 orbital p sin hibridar.`,
    `Los dos orbitales p se tocan <b>de lado</b> y forman el π, arriba y abajo del plano.`,
    `Un solapamiento de lado es menos firme que uno frontal: por eso el π es el enlace débil y el que reacciona.`,
    `<b>Truco:</b> cuenta vecinos. 4 → sp³ (109.5°) · 3 → sp² (120°) · 2 → sp (180°).`,
    `<b>Fórmula:</b> cada enlace π quita 2 H al alcano (CₙH₂ₙ₊₂ → CₙH₂ₙ). Los cicloalcanos también son CₙH₂ₙ, así que la fórmula sola no prueba que sea alqueno.`],
  ojo:`σ = el que se queda. π = el que se rompe cuando el alqueno reacciona.`,
  prueba:[[`¿Qué hibridación tiene un carbono con 3 vecinos?`,`sp², con ángulos de 120°.`],[`Si el propano es C₃H₈, ¿cuál es la fórmula del alqueno de 3 carbonos?`,`C₃H₆ (propeno): 2 H menos por el π.`]]
},
[`Conformación estructural de los alquenos`]:{
  pre:[`¿Qué le pasaría al π si giras un extremo del C=C?`,`Los dos orbitales p dejarían de tocarse y el π se rompería. Por eso no gira.`],
  idea:`El <b>σ</b> gira libremente (es simétrico alrededor del eje que une los núcleos). El <b>π</b> no: fija la posición de todo lo que rodea al C=C.`,
  por:[`Al no girar, los grupos quedan en un plano y en posiciones fijas. De ahí saldrá la isomería cis/trans.`,
    `El resto de la cadena, con enlaces sencillos, sigue girando como en un alcano.`,
    `Para nombrar el ejemplo del material (CH₃−CH(CH₃)−CH=CH₂), numeras desde el extremo más cercano al doble enlace: C1=C2, metilo en C3 → 3-metilbut-1-eno.`],
  ojo:`La rigidez es solo del C=C. Los C−C sencillos de la misma molécula sí giran.`,
  prueba:[[`En CH₃−CH=CH−CH₂−CH₃, ¿qué enlaces giran y cuál no?`,`Los C−C sencillos giran; el C2=C3 no.`]]
},
[`Nomenclatura IUPAC de alquenos`]:{
  pre:[`Una molécula se puede numerar de izquierda a derecha o al revés. ¿Qué debe decidir el lado: el doble enlace, el sustituyente o el tamaño del grupo?`,`El doble enlace, porque define la reactividad. El sustituyente solo desempata.`],
  idea:`Tres preguntas en orden: <b>¿qué cadena?</b> (la que contiene el C=C) → <b>¿desde dónde cuento?</b> (extremo más cercano al C=C) → <b>¿qué escribo?</b> (sustituyentes en orden alfabético + raíz + número + «eno»).`,
  por:[`Ejemplo CH₃−CH=CH−CH(CH₃)−CH₃: la cadena tiene 5 C → pent-.`,
    `Desde la izquierda el C=C queda en 2; desde la derecha, en 3. Gana la izquierda.`,
    `El metilo queda en C4. Nombre: <b>4-metilpent-2-eno</b>.`,
    `Comprobación: el número del C=C va justo antes de «eno»; el del metilo, antes de «metil».`],
  ojo:`Error típico: numerar desde el lado del sustituyente. Pregunta primero qué extremo queda más cerca del C=C.`,
  prueba:[[`Nombra CH₂=CH−CH₂−CH₃.`,`But-1-eno.`],[`Nombra CH₃−C(CH₃)=CH−CH₃.`,`2-metilbut-2-eno. El C=C queda en 2 desde cualquier lado (empate), y el metilo decide: queda más cerca desde la izquierda.`]]
},
[`Clasificación por número de dobles enlaces`]:{
  pre:[`Mono-, di-, tri-, poli-: ¿qué crees que cuentan estos prefijos en un alqueno?`,`Cuántos dobles enlaces C=C tiene la molécula.`],
  idea:`Es un conteo: <b>1</b> C=C → monoalqueno, <b>2</b> → dieno, <b>3 o más</b> → trieno o polieno. Lo interesante viene cuando hay varios: importa qué tan cerca están (siguiente ficha).`,
  por:[`El β-caroteno tiene una cadena larga de dobles enlaces que alternan con sencillos. Los electrones π se reparten por toda esa cadena, y una cadena así absorbe luz visible: de ahí el color naranja.`,
    `Contexto clínico: el organismo lo transforma en vitamina A.`],
  ojo:`«Dieno» es exactamente 2. «Polieno» es 3 o más.`,
  prueba:[[`¿Cuántos C=C tiene el buta-1,3-dieno? ¿Y el hexa-1,3,5-trieno?`,`2 y 3.`]]
},
[`Disposición de los dobles enlaces y posición`]:{
  pre:[`Dos dobles enlaces pueden estar pegados, separados por 1 enlace sencillo o por 2 o más. ¿Cuál separación crees que permite que sus electrones π «se comuniquen» mejor?`,`La de 1 enlace sencillo: sus orbitales p quedan alineados y paralelos (conjugados).`],
  idea:`Cuenta los enlaces sencillos entre los dos C=C: <b>0</b> → acumulado · <b>1</b> → conjugado · <b>2 o más</b> → aislado.`,
  por:[`<b>Conjugados:</b> los orbitales p de los 4 carbonos quedan paralelos, los electrones π se reparten (resonancia) y la molécula se estabiliza.`,
    `<b>Aislados:</b> están tan lejos que no se comunican; cada C=C actúa como un monoalqueno aparte.`,
    `<b>Acumulados:</b> el carbono central usa dos orbitales p perpendiculares para sus dos π; la molécula es inestable y muy reactiva.`,
    `<b>Posición:</b> el C=C terminal (en C1) está más expuesto, por eso es más accesible. El interno tiene más grupos alrededor, por eso es más estable (ver la ficha siguiente).`,
    `<b>Para recordar:</b> = − = (alternan) · = − − = (lejos) · == (pegados).`],
  ojo:`Hex-1-eno es terminal; hex-3-eno es interno.`,
  prueba:[[`CH₂=CH−CH₂−CH=CH₂: ¿conjugado, aislado o acumulado?`,`Aislado (penta-1,4-dieno): hay 2 enlaces sencillos entre los C=C.`],[`¿El hex-2-eno es terminal o interno?`,`Interno.`]]
},
[`Grado de sustitución del doble enlace`]:{
  pre:[`Si un carbono del C=C cambia un H por un grupo alquilo (R), ¿la molécula gana o pierde estabilidad?`,`Gana: el R cede un poco de densidad electrónica al C=C (hiperconjugación).`],
  idea:`Cuenta los <b>R</b> unidos a los dos carbonos del C=C: 1 → mono · 2 → di · 3 → tri · 4 → tetra. <b>Más R = más estable</b> (↑ R, ↑ estabilidad).`,
  por:[`Los grupos alquilo ceden densidad electrónica al doble enlace y lo estabilizan; los H no lo hacen.`,
    `Cuentan solo los R pegados a los dos carbonos del C=C. No es lo mismo que «tener ramas» en otra parte de la cadena.`],
  ojo:`Propeno (R−CH=CH₂): 1 R. But-2-eno: 2 R. 2-metilbut-2-eno: 3 R.`,
  prueba:[[`¿Cuál es el grado de sustitución del CH₃−CH=CH−CH₃?`,`Disustituido (2 R).`],[`¿Cuál es más estable: propeno o 2-metilbut-2-eno?`,`2-metilbut-2-eno (trisustituido frente a monosustituido).`]]
},
[`Isomería geométrica: cis y trans`]:{
  pre:[`Pon CH₃ y H en cada carbono de un C=C de dos formas distintas. ¿Por qué son moléculas diferentes y no la misma?`,`Porque el C=C no gira: para pasar de una a otra habría que romper el π.`],
  idea:`<b>Cis</b> = los grupos iguales del mismo lado. <b>Trans</b> = cruzados, en lados opuestos.`,
  por:[`<b>Polaridad:</b> en cis los dipolos de los enlaces C−R se suman y la molécula queda polar; en trans se cancelan. Por eso el cis tiene dipolo-dipolo extra y hierve un poco más alto.`,
    `<b>Estabilidad:</b> en cis los grupos del mismo lado se estorban (repulsión); en trans no. Por eso trans es más estable.`,
    `<b>¿Existe cis/trans?</b> Mira cada carbono del C=C: ¿tiene dos grupos distintos? Si alguno tiene dos iguales (por ejemplo dos H), no hay cis/trans.`,
    `Resumen con flechas: cis → ↑ polaridad, ↑ punto de ebullición, ↓ estabilidad. Trans → ↑ estabilidad.`],
  ojo:`El material pone Z junto a cis y E junto a trans. En el but-2-eno coinciden, pero en general Z/E se define por la prioridad de los grupos y no por «mismo lado» a secas. Confirma con el docente cuál usa.`,
  prueba:[[`¿Tiene cis/trans el but-1-eno? ¿Y el but-2-eno?`,`El but-1-eno no (su C1 tiene dos H). El but-2-eno sí.`],[`¿Quién hierve más alto: cis o trans?`,`El cis, por su dipolo neto.`]]
},
[`Propiedades y reacciones de adición`]:{
  pre:[`El π es una nube de electrones expuesta. ¿Qué atraerá: partículas con exceso de electrones o con falta de ellos?`,`Las que tienen falta (electrófilos), como H⁺ o el Br₂.`],
  idea:`En una adición, el <b>π se rompe</b> y sus 2 electrones forman <b>2 enlaces σ nuevos</b>: se cambia 1 enlace débil por 2 fuertes.`,
  por:[`<b>Físicas:</b> son casi apolares, por eso no se disuelven en agua (polar). Entre sí solo tienen fuerzas de London, por eso su punto de ebullición es parecido al del alcano del mismo tamaño.`,
    `<b>Qué se agrega en cada caso:</b> H₂ → un H en cada C (queda alcano). Br₂ → un Br en cada C (dibromuro vecinal). H₂O/H⁺ → un H en un C y un OH en el otro.`,
    `<b>¿Dónde va el OH?</b> El H se va al carbono que ya tiene más H, y el OH al otro (regla de Markovnikov). La ficha lo muestra con R−CH=CH₂ → R−CH(OH)−CH₃; el nombre de la regla no viene en el material.`],
  ojo:`Predecir un producto: dibuja el C=C, rompe el π y pega lo que llega a cada carbono.`,
  prueba:[[`Producto de propeno + H₂.`,`Propano.`],[`Producto de propeno + H₂O/H⁺.`,`Propan-2-ol (el OH queda en el carbono interno).`],[`Producto de eteno + Br₂.`,`1,2-dibromoetano.`]]
},
[`Polimerización`]:{
  pre:[`Muchos clips unidos en cadena: ¿qué debe pasar con el π de cada monómero para que se una al siguiente?`,`Se abre: sus electrones forman enlaces σ con los vecinos.`],
  idea:`Es una <b>adición repetida</b>: cada monómero abre su π y se une al siguiente por un enlace σ C−C. La cadena principal queda con enlaces sencillos.`,
  por:[`Lee la fórmula n(CH₂=CH−R) → −[CH₂−CH(R)]ₙ−: lo único que cambia entre un plástico y otro es <b>R</b>.`,
    `R = H → polietileno (viene del eteno). R = −C₆H₅ → poliestireno. R = −Cl → PVC.`],
  ojo:`El monómero lleva C=C; el polímero ya no tiene ese doble enlace en la cadena principal.`,
  prueba:[[`¿Qué monómero origina el polietileno?`,`Eteno, CH₂=CH₂.`],[`¿Quién es R en el PVC?`,`−Cl (cloruro de vinilo, CH₂=CH−Cl).`]]
},
[`Hidrogenación de aceites`]:{
  pre:[`Una cadena recta se apila ordenada; una con «codos» no. ¿Cuál se empaca mejor y tiende a ser sólida a temperatura ambiente?`,`La recta: las cadenas se acercan más y se atraen más.`],
  idea:`Hidrogenar = <b>quitar C=C</b> → cadena más recta → se empaca mejor → ↑ punto de fusión → el aceite líquido pasa a grasa sólida.`,
  por:[`El doble enlace <b>cis</b> dobla la cadena (hace un «codo») y evita que las moléculas se acerquen.`,
    `El H₂ y el alqueno no reaccionan solos; el metal (Pd, Pt o Ni) les da una superficie donde reaccionar.`,
    `<b>Total o parcial:</b> total → todo saturado (ácido esteárico). Parcial → pueden quedar C=C, y algunos cis pasan a trans (ácido elaídico). La cadena trans es más recta que la cis, y por eso se parece a una grasa saturada.`],
  ojo:`Parcial no es lo mismo que total: en la parcial pueden formarse grasas trans.`,
  prueba:[[`¿Por qué el aceite es líquido y la margarina sólida?`,`El aceite tiene dobles enlaces cis que doblan la cadena. Al hidrogenarlo parcialmente, las cadenas quedan más rectas, se empacan mejor y el punto de fusión sube.`],[`¿Qué catalizadores usa la hidrogenación?`,`Pd, Pt o Ni.`]]
},
[`Reactividad de los alquenos`]:{
  pre:[`El σ es fuerte; el π, débil y expuesto. ¿Cuál se rompe cuando un alqueno reacciona?`,`El π.`],
  idea:`Toda la reactividad cabe en una frase: el <b>π, rico en electrones, ataca</b> a un reactivo que busca electrones; se rompe y se forman <b>2 σ</b>.`,
  por:[`<b>Halogenación:</b> agrega un halógeno a cada C.`,
    `<b>Hidratación:</b> agrega H y OH.`,
    `<b>Hidrogenación:</b> agrega H y H.`,
    `<b>Oxidación u ozonólisis:</b> rompe o funcionaliza el C=C (dioles, aldehídos o cetonas).`,
    `<b>Polimerización:</b> encadena muchos alquenos.`,
    `Un alcano no tiene π, y por eso reacciona mucho menos.`],
  ojo:`Ante cualquier reacción de alquenos, pregúntate dónde está el π y qué se pega en cada carbono.`,
  prueba:[[`¿Por qué el eteno reacciona con Br₂ y el etano no?`,`El eteno tiene un π rico en electrones; el etano no tiene π.`],[`¿Qué enlace se rompe en una adición?`,`El π.`]]
}
};
function otraHtml(o){
  const li = a => a.map(x => `<li>${x}</li>`).join(``);
  const det = (q, a) => `<details class="otraq"><summary>${q}</summary><p>${a}</p></details>`;
  return `<p class="otranota">Explicación complementaria: no está en las diapositivas. Para el examen cuenta lo que dice la ficha; esto es para entenderla.</p>
  <section class="otrab pre"><h4>1 · Antes de leer, piensa</h4>${det(o.pre[0], o.pre[1])}</section>
  <section class="otrab idea"><h4>2 · La idea</h4><p>${o.idea}</p></section>
  <section class="otrab por"><h4>3 · Por qué es así</h4><ul>${li(o.por)}</ul></section>
  ${o.ojo ? `<section class="otrab ojo"><h4>4 · Ojo</h4><p>${o.ojo}</p></section>` : ``}
  <section class="otrab prueba"><h4>5 · Pruébate</h4>${o.prueba.map(p => det(p[0], p[1])).join(``)}</section>`;
}
function otraOpen(it){
  const o = OTRA[it.title]; if (!o) return;
  openSheet(`Explicado de otra forma`, b => {
    b.append(el(`p`, `rsub`, `${TOPICS[it.t].n} · ${it.title}`));
    const w = el(`div`, `otra`); w.innerHTML = otraHtml(o); b.append(w);
    const r = el(`div`, `btnrow`); r.append(btn(`Volver a la ficha`, `btn acc`, closeSheet)); b.append(r);
  });
}
