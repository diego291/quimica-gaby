/* «Explícalo de otra forma» · Tema 26: hidrocarburos aromáticos */
Object.assign(OTRA, {
[`¿Qué es un hidrocarburo aromático?`]:{
  pre:[`El benceno tiene 3 dobles enlaces, pero casi no hace las reacciones de adición típicas de los alquenos. ¿Qué crees que lo protege?`,`Sus electrones π no están fijos en 3 dobles enlaces: se reparten por todo el anillo (resonancia), y eso lo vuelve muy estable.`],
  idea:`Aromático no significa «que huele». Significa un <b>anillo</b> cuyos electrones π están <b>repartidos por todo el ciclo</b>, y eso le da una estabilidad excepcional.`,
  por:[`En un alqueno, los 2 electrones π están entre dos carbonos. En el benceno, los 6 electrones π circulan por los 6 carbonos.`,
    `Electrones repartidos en más espacio = menos energía = más estabilidad.`,
    `Por eso el benceno «defiende» su anillo: prefiere cambiar un H por otro grupo (sustitución) antes que romper la nube π (adición).`],
  ojo:`El círculo dentro del hexágono representa esa nube repartida, no tres dobles enlaces fijos.`,
  prueba:[[`¿A qué se debe la estabilidad del benceno?`,`A la deslocalización (resonancia) de sus 6 electrones π por todo el anillo.`],[`¿«Aromático» se refiere al olor?`,`No: es una propiedad de la estructura electrónica.`]]
},
[`Requisitos de la aromaticidad y regla de Hückel`]:{
  pre:[`Para que el agua fluya en un circuito cerrado, el tubo tiene que ser continuo y sin cortes. ¿Qué crees que necesita la nube π para «fluir» por un anillo?`,`Un anillo cerrado, plano y con un orbital p en cada átomo, sin interrupciones. Y además el número correcto de electrones (4n + 2).`],
  idea:`Cuatro condiciones, como una lista de chequeo: <b>cíclica · plana · conjugada en todo el anillo · 4n + 2 electrones π</b>. Si falla una, no es aromática.`,
  por:[`<b>Cíclica:</b> sin anillo no hay circuito.`,
    `<b>Plana:</b> los orbitales p tienen que quedar paralelos para tocarse.`,
    `<b>Conjugada:</b> si un átomo del anillo es sp³, corta el circuito.`,
    `<b>Hückel:</b> cuenta electrones π (2 por cada doble enlace del anillo). Resuelve 4n + 2 = e⁻: si n sale entero (0, 1, 2…), cumple. Benceno: 6 → n = 1 ✓.`],
  ojo:`El número de electrones π, no el de carbonos. Ciclobutadieno: 4 e⁻ → n = 0.5 → no es aromático.`,
  prueba:[[`Un anillo plano y conjugado tiene 10 e⁻ π. ¿Cumple Hückel?`,`Sí: 4n + 2 = 10 → n = 2.`],[`¿Y uno con 8 e⁻ π?`,`No: n = 1.5, no es entero.`]]
},
[`Enlace y geometría del anillo aromático`]:{
  pre:[`Si el benceno tuviera dobles y sencillos alternados de verdad, ¿cómo serían las longitudes de sus enlaces?`,`Alternarían entre cortas (1.34 Å) y largas (1.54 Å). Pero todas miden 1.39 Å: no hay alternancia real.`],
  idea:`Los 6 enlaces C–C son <b>iguales</b> e intermedios entre sencillo y doble: «enlace y medio».`,
  por:[`Más electrones entre dos átomos → enlace más corto: triple 1.20 < doble 1.34 < sencillo 1.54 Å.`,
    `En el benceno cada enlace comparte electrones π «a medias», así que su longitud cae entre doble y sencillo: 1.39 Å.`,
    `La nube π queda como dos «donas», una arriba y otra abajo del plano del anillo.`],
  ojo:`Más enlaces entre átomos = <b>más corto</b>, no más largo.`,
  prueba:[[`Ordena de menor a mayor longitud: sencillo, doble, triple, benceno.`,`Triple (1.20) < doble (1.34) < benceno (1.39) < sencillo (1.54).`]]
},
[`Diferencias con los hidrocarburos alifáticos`]:{
  pre:[`Un alqueno tiene su π fijo entre 2 carbonos; el benceno lo tiene repartido. ¿Cuál «se rendirá» más fácil ante un reactivo?`,`El alqueno: su π es local y débil. El benceno pierde mucha estabilidad si rompe su anillo, así que prefiere sustituir.`],
  idea:`La diferencia de fondo es <b>dónde están los electrones π</b>: localizados (alifáticos) o repartidos en un anillo (aromáticos). De ahí sale todo lo demás.`,
  por:[`π localizado → menos estable → reacciona por <b>adición</b> (rompe el π).`,
    `π deslocalizado → muy estable → reacciona por <b>sustitución</b> (conserva el anillo).`,
    `Los cicloalcanos y cicloalquenos son anillos, pero no cumplen Hückel ni tienen conjugación completa: siguen siendo alifáticos.`],
  ojo:`Tener un anillo no basta para ser aromático.`,
  prueba:[[`¿Qué reacción es típica del benceno y cuál de un alqueno?`,`Benceno: sustitución electrófila aromática. Alqueno: adición.`],[`¿El ciclohexeno es aromático?`,`No: tiene un solo C=C y carbonos sp³ que cortan la conjugación.`]]
},
[`Propiedades físicas de los aromáticos`]:{
  pre:[`El benceno es casi apolar. ¿Se disolverá en agua? ¿Flotará o se hundirá?`,`No se disuelve (apolar frente a polar) y flota: es menos denso que el agua.`],
  idea:`Se comportan como los demás hidrocarburos (apolares, insolubles, menos densos que el agua), pero su anillo <b>plano y simétrico</b> se acomoda muy bien en el sólido: por eso su punto de fusión es alto.`,
  por:[`Moléculas planas se apilan como monedas → el sólido es ordenado → cuesta fundirlo.`,
    `Más masa molecular → más fuerzas de London → ↑ punto de ebullición.`,
    `Tienen mucho carbono por cada H, así que arden con llama amarilla y hollín (combustión incompleta).`],
  ojo:`Benceno y tolueno son líquidos; naftaleno y antraceno (más pesados) son sólidos.`,
  prueba:[[`¿Por qué la llama del benceno es hollinosa?`,`Porque tiene mucho carbono en proporción al H y no se quema por completo.`],[`¿El benceno es soluble en agua?`,`No (o muy poco): es apolar.`]]
},
[`Sustitución electrófila aromática (SEA)`]:{
  pre:[`El anillo es rico en electrones. ¿Qué tipo de reactivo lo atacará: uno con exceso o con falta de electrones?`,`Uno con falta de electrones: un electrófilo (E⁺).`],
  idea:`Patrón único: <b>entra un E⁺ y sale un H⁺</b>. El anillo queda intacto. Lo único que cambia entre reacciones es qué E⁺ se fabrica.`,
  por:[`El benceno no ataca a Cl₂ ni a HNO₃ tal cual: son poco electrófilos. El catalizador los «activa» para formar un E⁺ fuerte.`,
    `<b>Halogenación:</b> X₂ + FeX₃ → X⁺ → halobenceno.`,
    `<b>Nitración:</b> HNO₃ + H₂SO₄ → NO₂⁺ → nitrobenceno.`,
    `<b>Sulfonación:</b> SO₃ en H₂SO₄ → ácido bencenosulfónico (reversible).`,
    `<b>Friedel-Crafts:</b> R−Cl o R−CO−Cl + AlCl₃ → alquil- o acilbenceno.`],
  ojo:`Sustituir = cambiar un H por otro grupo. El número de electrones π del anillo no cambia.`,
  prueba:[[`¿Qué grupo entra en la nitración y con qué reactivos?`,`−NO₂, con HNO₃ + H₂SO₄.`],[`¿Para qué sirve el FeBr₃ en la bromación?`,`Es un ácido de Lewis que activa al Br₂ para formar el electrófilo.`]]
},
[`Reacciones de adición y de oxidación`]:{
  pre:[`Si el anillo es tan estable, ¿qué hará falta para obligarlo a adicionar H₂?`,`Condiciones forzadas: alta presión, alta temperatura y catalizador (Ni o Pt).`],
  idea:`El benceno <b>puede</b> adicionar, pero solo a la fuerza, porque pierde su aromaticidad. Y casi no se oxida: lo que se oxida es la <b>cadena lateral</b>.`,
  por:[`<b>Hidrogenación:</b> benceno + 3 H₂ (Ni o Pt, presión y calor) → ciclohexano. Son 3 H₂ porque hay 3 pares de electrones π.`,
    `<b>Halogenación radicalaria:</b> con luz UV intensa → hexaclorociclohexano.`,
    `<b>Oxidación:</b> KMnO₄ no rompe el anillo, pero si hay un H en el carbono pegado al anillo (H bencílico), la cadena se oxida hasta −COOH: tolueno → ácido benzoico.`],
  ojo:`Sin H bencílico (por ejemplo, ter-butilbenceno) la cadena no se oxida.`,
  prueba:[[`¿Cuántos H₂ necesita el benceno para formar ciclohexano?`,`3.`],[`¿Qué da el tolueno con KMnO₄?`,`Ácido benzoico.`]]
},
[`Composición química de los aromáticos`]:{
  pre:[`Cada carbono del benceno está unido a 2 carbonos y 1 H. ¿Cuántos vecinos tiene y qué hibridación le toca?`,`3 vecinos → sp², plano, 120°. Le queda un orbital p para la nube π.`],
  idea:`Cada carbono del anillo es <b>sp²</b>: 3 enlaces σ en el plano y <b>1 orbital p</b> perpendicular. Los 6 orbitales p juntos forman la nube π.`,
  por:[`Mismo truco del Tema 24: 3 vecinos → sp² → 120°. Un hexágono regular tiene ángulos internos de 120°: encaja perfecto, por eso el anillo es plano.`,
    `6 orbitales p paralelos, uno por carbono, aportan 6 electrones π.`,
    `Los heterocíclicos (piridina, furano) cambian un C por N, O o S y siguen siendo aromáticos si cumplen las 4 condiciones.`],
  ojo:`Benceno: C₆H₆, 6 σ C−C, 6 σ C−H y 6 electrones π.`,
  prueba:[[`¿Qué hibridación y ángulo tiene cada carbono del benceno?`,`sp², 120°.`]]
},
[`Tipos de estructuras aromáticas`]:{
  pre:[`¿Qué pasa si dos anillos de benceno comparten un lado?`,`Se forman policíclicos fusionados, como el naftaleno (dos anillos).`],
  idea:`Tres tipos según el anillo: <b>uno</b> solo (monocíclico), <b>varios pegados</b> (policíclico) o con un <b>átomo distinto de C</b> en el anillo (heterocíclico).`,
  por:[`Monocíclicos: benceno, tolueno, xileno.`,
    `Policíclicos (HAP): naftaleno (2 anillos), antraceno (3), benzo[a]pireno (tóxico del humo del tabaco).`,
    `Heterocíclicos: piridina (N), furano (O); son la base de las bases nitrogenadas del ADN.`],
  ojo:`«Hetero» = otro átomo en el anillo, no otro grupo colgando.`,
  prueba:[[`¿De qué tipo es la piridina?`,`Heterocíclica (tiene N en el anillo).`],[`¿Y el naftaleno?`,`Policíclico (dos anillos fusionados).`]]
},
[`Nomenclatura: bases y conceptos`]:{
  pre:[`Si el benceno está pegado a una cadena muy larga, ¿quién crees que da el nombre principal?`,`La cadena. Entonces el benceno se nombra como rama: fenilo.`],
  idea:`El benceno es la base del nombre, salvo cuando la cadena es más importante. Entonces se vuelve rama: <b>fenil</b> (C₆H₅−) o <b>bencil</b> (C₆H₅−CH₂−).`,
  por:[`Fenilo: el anillo va pegado directo a la cadena.`,
    `Bencilo: entre el anillo y la cadena hay un CH₂.`,
    `Las tres formas de dibujarlo (desarrollada, Kekulé, círculo) son la misma molécula.`],
  ojo:`Fenil ≠ bencil: cuenta si hay un CH₂ de por medio.`,
  prueba:[[`C₆H₅−CH₂−Cl: ¿fenilo o bencilo?`,`Bencilo (cloruro de bencilo): hay un CH₂ entre el anillo y el Cl.`]]
},
[`Sustituyentes y prefijos orto, meta, para`]:{
  pre:[`En un hexágono, desde el carbono 1, ¿qué posiciones quedan «pegadas», «salteadas» y «enfrente»?`,`Pegada: 2 (orto). Salteada: 3 (meta). Enfrente: 4 (para).`],
  idea:`Con dos sustituyentes: <b>orto = 1,2</b> (vecinos) · <b>meta = 1,3</b> (uno de por medio) · <b>para = 1,4</b> (enfrente).`,
  por:[`Truco por orden alfabético de cercanía: <b>o</b>rto (contiguo), <b>m</b>eta (en medio), <b>p</b>ara (paralelo, opuesto).`,
    `Con números: se numera desde un sustituyente para dar los números más bajos; si empatan, decide el orden alfabético.`,
    `1,5 es lo mismo que 1,3 contando hacia el otro lado; 1,6 es lo mismo que 1,2.`],
  ojo:`o/m/p solo sirven con exactamente dos sustituyentes.`,
  prueba:[[`1,3-diclorobenceno con prefijo:`,`m-diclorobenceno.`],[`p-xileno con números:`,`1,4-dimetilbenceno.`]]
},
[`Monosustituidos y nombres comunes`]:{
  pre:[`¿Cómo nombrarías un benceno con un solo −Br?`,`Bromobenceno: nombre del grupo + benceno.`],
  idea:`Regla general: <b>grupo + benceno</b>. Pero algunos tienen nombre común aceptado que hay que saber: tolueno, fenol, anilina, ácido benzoico, anisol, estireno, acetofenona.`,
  por:[`Asocia cada nombre común con su grupo: <b>tolueno</b> −CH₃ · <b>fenol</b> −OH · <b>anilina</b> −NH₂ · <b>ácido benzoico</b> −COOH · <b>anisol</b> −OCH₃ · <b>estireno</b> −CH=CH₂ · <b>acetofenona</b> −CO−CH₃.`,
    `El estireno es el monómero del poliestireno (Tema 24): un «vinil» pegado al benceno.`],
  ojo:`Fenol tiene −OH; anilina tiene −NH₂. Son los que más se confunden.`,
  prueba:[[`¿Qué grupo tiene la anilina?`,`−NH₂ (aminobenceno).`],[`¿Nombre común del metoxibenceno?`,`Anisol.`]]
},
[`Disustituidos`]:{
  pre:[`Benceno con Br en 1 y NO₂ en 3. ¿Qué va primero en el nombre?`,`El orden alfabético: bromo antes que nitro → 1-bromo-3-nitrobenceno (m-bromonitrobenceno).`],
  idea:`Tres pasos: <b>¿qué grupos?</b> → <b>numera para que queden lo más bajo posible</b> → <b>escribe en orden alfabético</b> + benceno. O usa o/m/p.`,
  por:[`Con dos grupos, uno siempre va en 1; el otro queda en 2, 3 o 4 según la posición.`,
    `Si da igual por qué lado numeras, el 1 lo recibe el que va primero en el alfabeto.`,
    `Equivalencias: 1,2 = o · 1,3 = m · 1,4 = p.`],
  ojo:`El orden alfabético ignora «di-» y «tri-»: «dimetil» se ordena por la m.`,
  prueba:[[`Nombra un benceno con −CH₂CH₃ en 1 y −CH₃ en 2.`,`1-etil-2-metilbenceno (o-etilmetilbenceno).`],[`¿Qué es el p-diclorobenceno con números?`,`1,4-diclorobenceno.`]]
},
[`Trisustituidos`]:{
  pre:[`Con tres grupos, ¿puedes decir orto, meta o para?`,`No: esos prefijos solo sirven para dos. Con tres se usan números.`],
  idea:`Numera para que el conjunto de números sea <b>lo más bajo posible</b> (el material da el C1 al grupo con más carbonos si lo hay) y escribe los grupos en <b>orden alfabético</b>.`,
  por:[`Puedes contar en sentido horario o antihorario: elige el que da los números más bajos.`,
    `Grupos repetidos: di-, tri- (1,3-dibromo…).`,
    `Ejemplo del material: 1,3-dibromo-5-isopropilbenceno → los tres grupos quedan alternados (1, 3, 5).`],
  ojo:`Compara las series de números en el primer punto de diferencia: 1,2,4 gana a 1,3,4.`,
  prueba:[[`¿Se puede decir «m-dibromoisopropilbenceno» para un trisustituido?`,`No: con tres sustituyentes solo se usan números.`]]
},
[`Cadenas largas: el benceno como fenilo`]:{
  pre:[`Tienes C₆H₅−(CH₂)₇−CH₃. ¿Cuántos carbonos tiene la cadena y quién manda?`,`8 carbonos: la cadena manda y el benceno se nombra como «fenil». → 1-feniloctano.`],
  idea:`Si la cadena es larga, se invierten los papeles: la cadena es la principal y el benceno la rama <b>fenil</b>. Se numera desde el extremo más cercano al fenilo.`,
  por:[`Pasos: cadena más larga unida al anillo → numerar para que el fenilo tenga el número más bajo → localizador + fenil + alcano.`,
    `Ejemplos del material: 1-feniloctano, 3-fenilpentano, 2,4-dimetil-3-fenilpentano.`],
  ojo:`El material da dos límites distintos (más de 6 carbonos y 6 carbonos). Pregunta al docente cuál usa.`,
  prueba:[[`Nombra CH₃−CH₂−CH(C₆H₅)−CH₂−CH₃.`,`3-fenilpentano.`]]
},
[`Aromáticos famosos`]:{
  pre:[`¿Por qué el nombre «2,4,6-trinitrotolueno» ya te dice cómo es la molécula?`,`Tolueno (benceno + CH₃ en C1) con tres grupos nitro en 2, 4 y 6.`],
  idea:`Lee el nombre como receta: <b>base + grupos + posiciones</b>. Así descifras TNT, DDT o naftaleno sin memorizar el dibujo.`,
  por:[`TNT: tolueno + 3 NO₂ en 2, 4 y 6 (alrededor del CH₃).`,
    `Naftaleno: dos anillos fusionados (C₁₀H₈), la naftalina.`,
    `DDT: dos anillos con Cl (difenil) y un CCl₃ (tricloro etano).`,
    `Fenilalanina: un aminoácido con un anillo de benceno.`],
  ojo:`Todos son aromáticos por su anillo de benceno, aunque tengan usos muy distintos.`,
  prueba:[[`¿Cuántos grupos nitro tiene el TNT y dónde?`,`3, en los carbonos 2, 4 y 6.`]]
},
[`Interés biológico: aminoácidos aromáticos`]:{
  pre:[`Si la fenilalanina se convierte en tirosina y ese paso falla, ¿qué se acumula?`,`La fenilalanina: es la fenilcetonuria, que se busca en el tamizaje neonatal.`],
  idea:`Piensa en una <b>cadena de producción</b>: fenilalanina → tirosina → catecolaminas y hormonas tiroideas. Triptófano → serotonina y melatonina.`,
  por:[`La tirosina es fenilalanina con un −OH en el anillo.`,
    `Si una enzima de la cadena falla, el producto anterior se acumula y el siguiente falta. Por eso el laboratorio mide el anterior.`,
    `El triptófano tiene un anillo indol (aromático heterocíclico, con N).`],
  ojo:`Precursor = lo que viene antes. La fenilalanina es precursora de la tirosina, no al revés.`,
  prueba:[[`¿De qué aminoácido sale la serotonina?`,`Del triptófano.`],[`¿Qué se acumula en la fenilcetonuria?`,`Fenilalanina.`]]
},
[`Interés biológico: hormonas y neurotransmisores`]:{
  pre:[`Las catecolaminas tienen un «catecol». Si catecol es un bencenodiol, ¿qué tiene en el anillo?`,`Dos grupos −OH en el anillo de benceno.`],
  idea:`Varias moléculas clave del cuerpo son aromáticas: <b>catecolaminas</b> (catecol), <b>hormonas tiroideas</b> (anillos con yodo) y <b>estrógenos</b> (un anillo aromático).`,
  por:[`Ruta para memorizar en orden: tirosina → L-DOPA → dopamina → noradrenalina → adrenalina.`,
    `T₃ y T₄: el número indica cuántos yodos tienen (3 o 4).`,
    `En los estrógenos, el anillo A aromático es lo que les permite unirse a su receptor.`],
  ojo:`T₃ = triyodotironina (3 I); T₄ = tiroxina (4 I).`,
  prueba:[[`¿Cuál viene antes: dopamina o adrenalina?`,`Dopamina.`],[`¿Qué distingue a T₃ de T₄?`,`El número de átomos de yodo: 3 o 4.`]]
},
[`Fármacos, bases nitrogenadas y sustancias tóxicas`]:{
  pre:[`El ADN tiene bases nitrogenadas con anillos que contienen N. ¿Qué tipo de aromático son?`,`Heterocíclicos (anillos con N).`],
  idea:`El anillo aromático aparece en tres mundos: <b>medicamentos</b>, <b>bases del ADN/ARN</b> y <b>tóxicos</b> como el benceno y los HAP.`,
  por:[`Púricas (2 anillos): adenina y guanina. Pirimídicas (1 anillo): citosina, timina, uracilo.`,
    `Truco: «<b>Pu</b>ro <b>A</b>gua <b>G</b>» → púricas A y G.`,
    `El benzo[a]pireno es un HAP del humo del tabaco: varios anillos fusionados.`],
  ojo:`Púricas: 2 anillos (A, G). Pirimídicas: 1 anillo (C, T, U).`,
  prueba:[[`¿La timina es púrica o pirimídica?`,`Pirimídica.`],[`¿Qué tipo de compuesto es el benzo[a]pireno?`,`Un hidrocarburo aromático policíclico (HAP).`]]
}
});
(() => { const { T, svg, ln, hl, sep, fig, G, R, set, flow, cmp, scale } = OTRAH; const P = `var(--t26)`;
  /* anillo con círculo; subs = {pos: etiqueta}, pos 1..6 empezando arriba y en sentido horario */
  const ring = (cx, cy, r, subs = {}, nums) => { let s = ``; const pt = k => { const a = (-90 + (k - 1) * 60) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    s += `<polygon points="${[1, 2, 3, 4, 5, 6].map(k => pt(k).join(`,`)).join(` `)}" class="s"/><circle cx="${cx}" cy="${cy}" r="${r * .55}" class="s" style="stroke:${P}"/>`;
    Object.entries(subs).forEach(([k, l]) => { const [x, y] = pt(+k), a = (-90 + (k - 1) * 60) * Math.PI / 180; const x2 = cx + (r + 18) * Math.cos(a), y2 = cy + (r + 18) * Math.sin(a); s += ln(x, y, x2, y2) + T(cx + (r + 34) * Math.cos(a), cy + (r + 34) * Math.sin(a) + 5, l, { c:`tk`, fs:15 }); });
    if (nums) [1, 2, 3, 4, 5, 6].forEach(k => { const a = (-90 + (k - 1) * 60) * Math.PI / 180; s += T(cx + (r - 13) * Math.cos(a), cy + (r - 13) * Math.sin(a) + 4, k, { c:`tm`, fs:11 }); });
    return s; };

  set(`¿Qué es un hidrocarburo aromático?`, [fig(svg(560, 190, ring(140, 90, 52) + T(140, 178, `6 e⁻ π repartidos en todo el anillo`, { c:`tm` }) + sep(280, 20, 180) + T(420, 70, `alqueno: 2 e⁻ π`, { c:`tb` }) + T(420, 88, `fijos en un C=C`, { c:`tm` }) + ln(375, 128, 455, 128) + ln(375, 136, 455, 136) + T(420, 178, `localizado → menos estable`, { c:`tm` }), `Nube pi repartida frente a localizada`), `El círculo representa los electrones π repartidos por los 6 carbonos.`)]);

  set(`Requisitos de la aromaticidad y regla de Hückel`, [fig(flow([[`Cíclica`, `anillo cerrado`], [`Plana`, `p paralelos`], [`Conjugada`, `un p en cada|átomo, sin sp³`], [`4n + 2 e⁻ π`, `n entero`]], { foot:`Benceno: 6 e⁻ → n = 1 ✓   ·   8 e⁻ → n = 1.5 ✗`, label:`Cuatro requisitos de aromaticidad` }), `Si falla cualquiera de los cuatro, la molécula no es aromática.`)]);

  set(`Enlace y geometría del anillo aromático`, [fig(svg(560, 150, (() => { let s = ``; const L = [[`triple`, 1.20], [`doble`, 1.34], [`benceno`, 1.39], [`sencillo`, 1.54]];
    L.forEach(([n, v], i) => { const y = 24 + i * 30, w = (v - 1.0) * 700; s += `<rect x="130" y="${y}" width="${w}" height="20" rx="5" style="fill:${n === `benceno` ? P : `var(--muted)`};opacity:${n === `benceno` ? .55 : .3}"/>` + T(120, y + 15, n, { c:`tb`, a:`end` }) + T(140 + w, y + 15, `${v.toFixed(2)} Å`, { c:`tm`, a:`start` }); });
    return s; })(), `Longitudes de enlace`), `El enlace del benceno queda entre el doble y el sencillo: «enlace y medio».`)]);

  set(`Diferencias con los hidrocarburos alifáticos`, [fig(cmp([`Alifáticos`, `π localizado (o sin π)`, `menos estables`, `reaccionan por adición`], [`Aromáticos`, `π repartido en el anillo`, `muy estables`, `reaccionan por sustitución`], { cr:P, label:`Alifáticos frente a aromáticos` }), `Todo sale de dónde están los electrones π.`)]);

  set(`Propiedades físicas de los aromáticos`, [fig(cmp([`Como otros hidrocarburos`, `apolares`, `insolubles en agua`, `menos densos que el agua`], [`Propio del anillo plano`, `se apilan como monedas`, `punto de fusión alto`, `llama amarilla con hollín`], { cr:P, label:`Propiedades físicas de los aromáticos` }), `Lo que comparten con otros hidrocarburos y lo que les da el anillo plano.`)]);

  set(`Sustitución electrófila aromática (SEA)`, [fig(svg(560, 170, ring(90, 85, 40, { 1:`H` }) + T(185, 90, `+  E⁺`, { c:`tk` }) + `<line x1="225" y1="85" x2="300" y2="85" class="ar" marker-end="url(#ah)"/>` + T(262, 74, `catalizador`, { c:`tm`, fs:11 }) + ring(380, 85, 40, { 1:`E` }) + T(475, 90, `+  H⁺`, { c:`tk` }) + T(280, 162, `entra E⁺, sale H⁺ · el anillo queda intacto`, { c:`tb` }), `Patrón de la sustitución electrófila`), `Halogenación (E = X), nitración (NO₂), sulfonación (SO₃H) y Friedel-Crafts (R o R−CO) siguen el mismo patrón.`)]);

  set(`Reacciones de adición y de oxidación`, [fig(flow([[`Tolueno`, `C₆H₅−CH₃|tiene H bencílico`], [`KMnO₄`, `oxida la cadena,|no el anillo`, R], [`Ácido benzoico`, `C₆H₅−COOH`]], { foot:`Sin H en el carbono pegado al anillo → no se oxida`, label:`Oxidación de la cadena lateral` }), `El anillo resiste al KMnO₄; la cadena con H bencílico no.`)]);

  set(`Composición química de los aromáticos`, [fig(svg(560, 180, ring(150, 90, 55, {}, true) + T(150, 175, `6 C sp² · 120° · plano`, { c:`tm` }) + sep(290, 20, 170) + T(420, 50, `cada carbono:`, { c:`tb` }) + T(420, 78, `3 enlaces σ en el plano`, { c:`tm` }) + T(420, 100, `+ 1 orbital p perpendicular`, { c:`tm` }) + T(420, 134, `6 orbitales p → 6 e⁻ π`, { c:`tb`, col:P }), `Composición del benceno`), `Cada carbono aporta un orbital p y un electrón a la nube π.`)]);

  set(`Tipos de estructuras aromáticas`, [fig(svg(560, 170, (() => { let s = ring(80, 80, 40) + T(80, 156, `monocíclico`, { c:`tb` }) + sep(170, 20, 160);
    s += ring(250, 80, 36) + ring(312, 80, 36) + T(281, 156, `policíclico (naftaleno)`, { c:`tb` }) + sep(380, 20, 160);
    s += ring(470, 80, 40) + `<circle cx="470" cy="40" r="11" style="fill:${R};opacity:.3"/>` + T(470, 45, `N`, { c:`tk`, fs:14 }) + T(470, 156, `heterocíclico (piridina)`, { c:`tb` });
    return s; })(), `Tres tipos de aromáticos`), `Uno solo, varios fusionados o con otro átomo dentro del anillo.`)]);

  set(`Nomenclatura: bases y conceptos`, [fig(svg(560, 190, ring(110, 70, 38, { 4:`R` }) + T(110, 180, `fenil: C₆H₅− directo`, { c:`tb` }) + sep(280, 20, 180) + ring(400, 70, 38, { 4:`CH₂−R` }) + T(400, 180, `bencil: C₆H₅−CH₂−`, { c:`tb` }), `Fenilo frente a bencilo`), `La diferencia es el CH₂ entre el anillo y la cadena.`)]);

  set(`Sustituyentes y prefijos orto, meta, para`, [fig(svg(560, 214, [[95, 2, `orto · 1,2`], [280, 3, `meta · 1,3`], [465, 4, `para · 1,4`]].map(([x, k, l]) => ring(x, 92, 42, { 1:`X`, [k]:`Y` }, true) + T(x, 206, l, { c:`tb` })).join(``) + sep(187, 20, 180) + sep(373, 20, 180), `Posiciones orto meta para`), `Vecinos (orto), uno de por medio (meta) y enfrente (para).`)]);

  set(`Monosustituidos y nombres comunes`, [fig(svg(560, 170, [[`CH₃`, `tolueno`], [`OH`, `fenol`], [`NH₂`, `anilina`], [`COOH`, `ác. benzoico`]].map(([g, n], i) => { const x = 70 + i * 140; return ring(x, 92, 32, { 1:g }) + T(x, 160, n, { c:`tb` }); }).join(``), `Nombres comunes de monosustituidos`), `Los más usados. Fenol (−OH) y anilina (−NH₂) son los que más se confunden.`)]);

  set(`Disustituidos`, [fig(svg(560, 200, ring(150, 100, 46, { 1:`Br`, 3:`NO₂` }, true) + sep(300, 20, 190) + T(430, 60, `1-bromo-3-nitrobenceno`, { c:`tb` }) + T(430, 86, `= m-bromonitrobenceno`, { c:`tm` }) + T(430, 126, `b antes que n →`, { c:`tm` }) + T(430, 146, `el bromo recibe el 1`, { c:`tm` }), `Nombre de un disustituido`), `Posiciones 1 y 3 → meta. El orden alfabético decide quién se nombra primero.`)]);

  set(`Trisustituidos`, [fig(svg(560, 200, ring(150, 100, 46, { 1:`Br`, 3:`Br`, 5:`iPr` }, true) + sep(300, 20, 190) + T(430, 60, `1,3-dibromo-5-isopropilbenceno`, { c:`tb`, fs:12.5 }) + T(430, 96, `tres grupos → solo números`, { c:`tm` }) + T(430, 118, `(nada de o, m, p)`, { c:`tm` }), `Nombre de un trisustituido`), `Grupos alternados en 1, 3 y 5; repetidos con «di».`)]);

  set(`Cadenas largas: el benceno como fenilo`, [fig(svg(560, 150, ring(70, 70, 34) + ln(104, 70, 130, 70) + [`CH₂`, `(CH₂)₆`, `CH₃`].map((l, i) => T(160 + i * 100, 77, l, { c:`tk` })).join(``) + ln(184, 70, 222, 70) + ln(300, 70, 338, 70) + [1, `2 … 7`, 8].map((n, i) => T(160 + i * 100, 46, n, { c:`tm` })).join(``) + T(280, 135, `8 C en la cadena → 1-feniloctano`, { c:`tb` }), `Benceno como rama fenil`), `La cadena manda; el anillo se nombra «fenil» con el número más bajo.`)]);

  set(`Aromáticos famosos`, [fig(svg(560, 190, ring(150, 100, 44, { 1:`CH₃`, 2:`NO₂`, 4:`NO₂`, 6:`NO₂` }) + sep(300, 20, 180) + T(430, 70, `2,4,6-trinitrotolueno`, { c:`tb` }) + T(430, 98, `tolueno (CH₃ en 1)`, { c:`tm` }) + T(430, 118, `+ 3 nitro en 2, 4 y 6`, { c:`tm` }), `Estructura del TNT`), `El nombre describe la molécula: base, grupos y posiciones.`)]);

  set(`Interés biológico: aminoácidos aromáticos`, [fig(flow([[`Fenilalanina`, `esencial`], [`Tirosina`, `+ OH en el anillo`], [`Catecolaminas|y T₃/T₄`, ``]], { foot:`Si falla el primer paso: se acumula fenilalanina (fenilcetonuria)`, footCol:R, label:`Ruta de la fenilalanina` }), `Triptófano sigue otra ruta: serotonina y melatonina.`)]);

  set(`Interés biológico: hormonas y neurotransmisores`, [fig(flow([[`Tirosina`, ``], [`L-DOPA`, ``], [`Dopamina`, ``], [`Noradre-|nalina`, ``], [`Adrenalina`, ``]], { h:56, label:`Ruta de las catecolaminas` }), `El orden de la ruta, de izquierda a derecha.`)]);

  set(`Fármacos, bases nitrogenadas y sustancias tóxicas`, [fig(cmp([`Púricas (2 anillos)`, `adenina (A)`, `guanina (G)`], [`Pirimídicas (1 anillo)`, `citosina (C)`, `timina (T)`, `uracilo (U)`], { cl:P, label:`Bases púricas y pirimídicas` }), `Púricas: A y G. Pirimídicas: C, T y U.`)]);
})();
