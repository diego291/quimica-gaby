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
/* ---------- Dibujos de «otra forma» (SVG propio; usa las mismas clases de color que las ilustraciones del material) ---------- */
(() => {
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs || o.col ? ` style="${o.fs ? `font-size:${o.fs}px;` : ``}${o.col ? `fill:${o.col}` : ``}"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const arr = (x1, y1, x2, y2, col) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah)"${col ? ` style="stroke:${col}"` : ``}/>`;
  const hl = (x, y, w, h, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${col};opacity:.16"/>`;
  const dot = (x, y, r = 8, fill = `var(--surface)`) => `<circle cx="${x}" cy="${y}" r="${r}" class="s" style="fill:${fill};stroke-width:1.5"/>`;
  const C = (x, y) => `<circle cx="${x}" cy="${y}" r="13" style="fill:var(--t24)"/>` + T(x, y + 5, `C`, { c:`tw` });
  const lobe = (x, y, rx, ry, col = `var(--t24)`) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" style="fill:${col};opacity:.3;stroke:${col};stroke-width:1.5"/>`;
  const sep = (x, y1, y2) => ln(x, y1, x, y2, `dash`);
  const hw = l => 5 + 6 * l.length;
  const bond = (x1, x2, y, n, col) => { const st = col ? ` style="stroke:${col}"` : ``; const off = n === 1 ? [0] : n === 2 ? [-4, 4] : [-6, 0, 6];
    return off.map(o => `<line x1="${x1}" y1="${y + o}" x2="${x2}" y2="${y + o}" class="s"${st}/>`).join(``); };
  const chain = (labs, bonds, x0, dx, y, o = {}) => { let s = ``; const X = i => x0 + i * dx;
    labs.forEach((l, i) => { s += T(X(i), y + 7, l, { c:`tk`, fs:o.fs || 19 }); if (o.nums && o.nums[i] != null) s += T(X(i), y - 22, o.nums[i], { c:`tm`, fs:13 }); });
    bonds.forEach((b, i) => { s += bond(X(i) + hw(labs[i]), X(i + 1) - hw(labs[i + 1]), y, b, b > 1 ? `var(--t24)` : null); });
    (o.br || []).forEach(b => { s += ln(X(b.i), y + 13, X(b.i), y + 33) + T(X(b.i), y + 54, b.l, { c:`tk`, fs:17 }); });
    return s; };
  const fig = (svgStr, cap) => ({ svg:svgStr, cap });
  const G = `var(--t18)`, R = `var(--t15)`, A = `var(--t24)`;
  const set = (t, figs) => { OTRA[t].figs = figs; };
  window.OTRAH = { T, svg, ln, arr, hl, dot, lobe, sep, bond, hw, fig, G, R, set, chain:(labs, bonds, x0, dx, y, o = {}) => { let s = ``; const X = i => x0 + i * dx; const col = o.col || `var(--t24)`;
    labs.forEach((l, i) => { s += T(X(i), y + 7, l, { c:`tk`, fs:o.fs || 19 }); if (o.nums && o.nums[i] != null) s += T(X(i), y - 22, o.nums[i], { c:`tm`, fs:13 }); });
    bonds.forEach((b, i) => { s += bond(X(i) + hw(labs[i]), X(i + 1) - hw(labs[i + 1]), y, b, b > 1 ? col : null); });
    (o.br || []).forEach(b => { s += ln(X(b.i), y + 13, X(b.i), y + 33) + T(X(b.i), y + 54, b.l, { c:`tk`, fs:17 }); });
    return s; },
    C:(x, y, col = `var(--t24)`) => `<circle cx="${x}" cy="${y}" r="13" style="fill:${col}"/>` + T(x, y + 5, `C`, { c:`tw` }) };

  /* 1 · Generalidades */
  set(`Generalidades de los alquenos`, [
    fig(svg(560, 215, (() => { let s = ``; const y = 100;
      s += hl(205, 14, 150, 190, A);
      [[95, `sp³`, `4 vecinos · 109.5°`, `alcano`], [280, `sp²`, `3 vecinos · 120° · plano`, `cada C del C=C`], [465, `sp`, `2 vecinos · 180° · lineal`, `alquino`]].forEach(c => { s += T(c[0], 32, c[1], { c:`tb`, fs:16 }) + T(c[0], 180, c[2], { c:`tm` }) + T(c[0], 198, c[3], { c:`tm` }); });
      [[-40, -40], [40, -40], [-40, 40], [40, 40]].forEach(d => s += ln(95, y, 95 + d[0], y + d[1]) + dot(95 + d[0], y + d[1]));
      [[0, -50], [-43, 25], [43, 25]].forEach(d => s += ln(280, y, 280 + d[0], y + d[1]) + dot(280 + d[0], y + d[1]));
      [[-50, 0], [50, 0]].forEach(d => s += ln(465, y, 465 + d[0], y + d[1]) + dot(465 + d[0], y + d[1]));
      return s + C(95, y) + C(280, y) + C(465, y); })(), `Contar vecinos de un carbono`),
      `Cuenta los vecinos del carbono: 4 → sp³, 3 → sp², 2 → sp. En el alqueno cada carbono del C=C tiene 3 vecinos.`),
    fig(svg(560, 215, (() => { let s = ``;
      s += lobe(112, 100, 40, 22) + lobe(168, 100, 40, 22) + ln(112, 100, 168, 100, `dash`) + dot(112, 100, 4, A) + dot(168, 100, 4, A);
      s += T(140, 30, `σ: de frente`, { c:`tb`, fs:16 }) + T(140, 160, `sobre el eje entre los núcleos`, { c:`tm` }) + T(140, 180, `fuerte y protegido`, { c:`tm` });
      s += sep(280, 20, 200);
      [395, 445].forEach(x => { s += lobe(x, 62, 26, 32) + lobe(x, 138, 26, 32); });
      s += dot(395, 100, 4, A) + dot(445, 100, 4, A);
      s += T(420, 30, `π: de lado`, { c:`tb`, fs:16 }) + T(420, 190, `arriba y abajo del plano`, { c:`tm` }) + T(420, 208, `más débil y expuesto`, { c:`tm` });
      return s; })(), `Enlace sigma de frente y enlace pi de lado`),
      `Dos orbitales se pueden tocar de frente (σ) o de lado (π). El de lado se solapa menos y queda expuesto: por eso es el que reacciona.`)
  ]);

  /* 2 · Conformación */
  set(`Conformación estructural de los alquenos`, [
    fig(svg(560, 230, (() => { let s = ``; const y = 108;
      s += sep(187, 20, 215) + sep(373, 20, 215);
      s += ln(68, y, 122, y) + C(68, y) + C(122, y) + `<path d="M62 78 A34 16 0 0 1 128 78" class="ar" marker-end="url(#ah)"/><path d="M128 138 A34 16 0 0 1 62 138" class="ar" marker-end="url(#ah)"/>`;
      s += T(95, 30, `enlace sencillo (σ)`, { c:`tb` }) + T(95, 186, `gira libremente`, { c:`tm` });
      s += lobe(255, y - 40, 22, 30) + lobe(255, y + 40, 22, 30) + lobe(305, y - 40, 22, 30) + lobe(305, y + 40, 22, 30) + ln(255, y, 305, y) + ln(255, y + 5, 305, y + 5) + C(255, y) + C(305, y);
      s += T(280, 30, `doble enlace (σ + π)`, { c:`tb` }) + T(280, 186, `p paralelos: se tocan`, { c:`tm` });
      s += lobe(430, y - 40, 22, 30) + lobe(430, y + 40, 22, 30) + lobe(500, y, 34, 14, R) + ln(430, y, 500, y) + C(430, y) + C(500, y);
      s += T(465, 30, `si giras un extremo…`, { c:`tb` }) + T(465, 186, `los p dejan de tocarse:`, { c:`tm` }) + T(465, 204, `el π se rompería`, { c:`tm` });
      return s; })(), `Por qué el doble enlace no gira`),
      `El σ no depende de la orientación, por eso gira. El π necesita que los dos orbitales p estén paralelos; al girar, se separan.`)
  ]);

  /* 3 · Nomenclatura */
  set(`Nomenclatura IUPAC de alquenos`, [
    fig(svg(560, 318, (() => { let s = ``; const labs = [`CH₃`, `CH`, `CH`, `CH`, `CH₃`], bo = [1, 2, 1, 1];
      s += T(280, 22, `Desde la izquierda: el C=C queda en 2 y el metilo en 4  ✓`, { c:`tb`, col:G });
      s += chain(labs, bo, 90, 95, 78, { nums:[1, 2, 3, 4, 5], br:[{ i:3, l:`CH₃` }] });
      s += hl(90 + 95 - 36, 50, 95 + 72, 56, A);
      s += sep(20, 148, 148).replace(`x1="20"`, `x1="20"`) + ln(20, 148, 540, 148, `dash`);
      s += T(280, 172, `Desde la derecha: el C=C queda en 3 y el metilo en 2  ✗`, { c:`tb`, col:R });
      s += chain(labs, bo, 90, 95, 228, { nums:[5, 4, 3, 2, 1], br:[{ i:3, l:`CH₃` }] });
      s += T(280, 310, `Gana el lado que da el número más bajo al C=C → 4-metilpent-2-eno`, { c:`tm` });
      return s; })(), `Numerar la cadena desde cada extremo`),
      `Se cuenta desde el extremo más cercano al doble enlace. Los números sobre cada carbono muestran cómo queda con cada sentido.`)
  ]);

  /* 4 · Clasificación por número */
  set(`Clasificación por número de dobles enlaces`, [
    fig(svg(560, 210, (() => { let s = ``;
      const rows = [[[`CH₂`, `CH₂`], [2], 44, `1 C=C → monoalqueno`], [[`CH₂`, `CH`, `CH`, `CH₂`], [2, 1, 2], 100, `2 C=C → dieno`], [[`CH₂`, `CH`, `CH`, `CH`, `CH`, `CH₂`], [2, 1, 2, 1, 2], 156, `3 o más → trieno / polieno`]];
      rows.forEach(r => { s += chain(r[0], r[1], 40, 56, r[2]) + T(360, r[2] + 6, r[3], { c:`tb`, a:`start` }); });
      s += T(280, 200, `Solo hay que contar los signos =`, { c:`tm` });
      return s; })(), `Contar los dobles enlaces`),
      `Eteno, buta-1,3-dieno y hexa-1,3,5-trieno: cada = suma un doble enlace.`)
  ]);

  /* 5 · Disposición */
  set(`Disposición de los dobles enlaces y posición`, [
    fig(svg(560, 230, (() => { let s = ``;
      const rows = [[[`CH₂`, `CH`, `CH`, `CH₂`], [2, 1, 2], 46, `Conjugado`, `1 sencillo en medio`, `los π se comunican → estable`],
        [[`CH₂`, `CH`, `CH₂`, `CH`, `CH₂`], [2, 1, 1, 2], 112, `Aislado`, `2 sencillos en medio`, `cada C=C va por su lado`],
        [[`CH₂`, `C`, `CH₂`], [2, 2], 178, `Acumulado (aleno)`, `0 sencillos: comparten un C`, `muy reactivo e inestable`]];
      rows.forEach(r => { s += chain(r[0], r[1], 40, 56, r[2]) + T(335, r[2] - 8, r[3], { c:`tb`, a:`start` }) + T(335, r[2] + 9, r[4], { c:`tm`, a:`start` }) + T(335, r[2] + 25, r[5], { c:`tm`, a:`start` }); });
      s += ln(20, 80, 540, 80, `dash`) + ln(20, 146, 540, 146, `dash`);
      return s; })(), `Conjugado, aislado y acumulado`),
      `Cuenta los enlaces sencillos entre los dos C=C: 1 → conjugado, 2 o más → aislado, 0 → acumulado.`)
  ]);

  /* 6 · Sustitución */
  set(`Grado de sustitución del doble enlace`, [
    fig(svg(560, 262, (() => { let s = ``; const y = 100;
      const cols = [[70, [1, 0, 0, 0], `monosustituido`, `1 R`], [205, [1, 0, 0, 1], `disustituido`, `2 R`], [340, [1, 1, 1, 0], `trisustituido`, `3 R`], [475, [1, 1, 1, 1], `tetrasustituido`, `4 R`]];
      cols.forEach(([cx, rs, nm, n]) => { const a = cx - 24, b = cx + 24, c9 = x => `<circle cx="${x}" cy="${y}" r="9" style="fill:var(--t24)"/>` + T(x, y + 4, `C`, { c:`tw`, fs:10 });
        s += ln(a, y - 4, b, y - 4, `s`).replace(`class="s"`, `class="s" style="stroke:var(--t24)"`) + ln(a, y + 4, b, y + 4, `s`).replace(`class="s"`, `class="s" style="stroke:var(--t24)"`);
        const pos = [[a - 26, y - 40], [a - 26, y + 40], [b + 26, y - 40], [b + 26, y + 40]];
        const isR = nm === `monosustituido` ? [1, 0, 0, 0] : nm === `disustituido` ? [1, 0, 0, 1] : nm === `trisustituido` ? [1, 1, 1, 0] : [1, 1, 1, 1];
        pos.forEach((p, i) => { s += ln(i < 2 ? a : b, y, p[0], p[1]); s += (i === 3 ? c9(a) + c9(b) : ``); s += isR[i] ? hl(p[0] - 14, p[1] - 15, 28, 26, R) + T(p[0], p[1] + 5, `R`, { c:`tk`, col:R }) : T(p[0], p[1] + 5, `H`, { c:`tm`, fs:14 }); });
        s += T(cx, 190, nm, { c:`tb`, fs:12.5 }) + T(cx, 208, n, { c:`tm` }); });
      s += arr(60, 250, 500, 250, A) + T(280, 240, `más R en el C=C → más estable`, { c:`tm` });
      return s; })(), `Grados de sustitución del doble enlace`),
      `R es un grupo de carbono (como CH₃). Cuenta cuántos R salen de los dos carbonos del C=C: mientras más, más estable.`)
  ]);

  /* 7 · cis / trans */
  set(`Isomería geométrica: cis y trans`, [
    fig(svg(560, 272, (() => { let s = ``; const y = 108;
      const mol = (cx, trans) => { let m = ``; const a = cx - 34, b = cx + 34;
        m += ln(a, y - 4, b, y - 4) + ln(a, y + 4, b, y + 4) + ln(a, y, a - 34, y - 46) + ln(a, y, a - 34, y + 46) + ln(b, y, b + 34, y - 46) + ln(b, y, b + 34, y + 46) + C(a, y) + C(b, y);
        const me = (x, yy) => hl(x - 26, yy - 18, 52, 28, R) + T(x, yy + 3, `CH₃`, { c:`tk`, fs:17 });
        m += me(a - 46, y - 58) + T(a - 46, y + 70, `H`, { c:`tm`, fs:15 });
        m += trans ? T(b + 46, y - 55, `H`, { c:`tm`, fs:15 }) + me(b + 46, y + 64) : me(b + 46, y - 58) + T(b + 46, y + 70, `H`, { c:`tm`, fs:15 });
        return m; };
      s += mol(140, false) + mol(420, true) + sep(280, 20, 262);
      s += T(140, 24, `cis`, { c:`tb`, fs:16 }) + T(420, 24, `trans`, { c:`tb`, fs:16 });
      s += arr(120, 244, 120, 206, R) + arr(160, 244, 160, 206, R) + T(140, 262, `los dipolos se suman → polar`, { c:`tm` });
      s += arr(400, 244, 400, 206, R) + arr(440, 206, 440, 244, R) + T(420, 262, `los dipolos se cancelan → apolar`, { c:`tm` });
      return s; })(), `Dipolos de los isómeros cis y trans`),
      `Cada enlace C–CH₃ tiene un pequeño dipolo (flechas rojas). En cis apuntan al mismo lado y se suman; en trans apuntan en sentidos opuestos y se anulan.`)
  ]);

  /* 8 · Adición */
  set(`Propiedades y reacciones de adición`, [
    fig(svg(560, 262, (() => { let s = ``;
      s += T(60, 24, `antes: 1 σ + 1 π`, { c:`tm`, a:`start` }) + T(550, 24, `después: 2 σ nuevos`, { c:`tm`, a:`end` });
      s += chain([`C`, `C`], [2], 60, 60, 66) + T(190, 73, `+  X–Y`, { c:`tk` }) + arr(250, 66, 322, 66);
      s += ln(380, 66, 440, 66) + C(380, 66) + C(440, 66) + ln(380, 66, 380, 34) + T(380, 26, `X`, { c:`tk`, col:R }) + ln(440, 66, 440, 98) + T(440, 116, `Y`, { c:`tk`, col:R });
      s += ln(20, 136, 540, 136, `dash`);
      s += chain([`CH₃`, `CH`, `CH₂`], [1, 2], 40, 65, 182) + T(250, 189, `+  H₂O`, { c:`tk` }) + arr(290, 182, 340, 182);
      s += chain([`CH₃`, `CH`, `CH₃`], [1, 1], 380, 60, 182, { br:[{ i:1, l:`OH` }] });
      s += hl(166, 160, 40, 44, G) + hl(96, 160, 40, 44, A);
      s += T(150, 222, `el H se va al C con más H (CH₂)`, { c:`tm` }) + T(150, 240, `el OH queda en el C interno (CH)`, { c:`tm` }) + T(440, 258, `propan-2-ol`, { c:`tb` });
      return s; })(), `El pi se rompe y se forman dos enlaces sigma`),
      `Arriba: lo que pasa siempre. Abajo: el ejemplo del material (propeno + agua). El OH queda en el carbono interno.`)
  ]);

  /* 9 · Polimerización */
  set(`Polimerización`, [
    fig(svg(560, 266, (() => { let s = ``;
      s += T(280, 18, `monómeros: cada uno con un C=C`, { c:`tm` }) + T(280, 44, `CH₂=CH–R   +   CH₂=CH–R   +   CH₂=CH–R   + …`, { c:`tk`, fs:17 });
      s += arr(280, 56, 280, 90) + T(296, 78, `se abre el π de cada uno`, { c:`tm`, a:`start` });
      s += chain([`CH₂`, `CH`, `CH₂`, `CH`, `CH₂`, `CH`], [1, 1, 1, 1, 1], 60, 88, 124, { br:[{ i:1, l:`R` }, { i:3, l:`R` }, { i:5, l:`R` }] });
      s += T(280, 202, `polímero: cadena larga de enlaces sencillos C–C`, { c:`tm` });
      [[100, `R = H`, `polietileno (PE)`], [280, `R = C₆H₅`, `poliestireno (PS)`], [460, `R = Cl`, `PVC`]].forEach(c => { s += hl(c[0] - 75, 214, 150, 44, A) + T(c[0], 234, c[1], { c:`tb` }) + T(c[0], 251, c[2], { c:`tm` }); });
      return s; })(), `De monómeros a polímero`),
      `Lo único que cambia entre un plástico y otro es R.`)
  ]);

  /* 10 · Hidrogenación */
  set(`Hidrogenación de aceites`, [
    fig(svg(560, 262, (() => { let s = ``;
      [62, 112, 162].forEach((y, i) => { const k = 70 + i * 30; s += `<polyline points="30,${y} ${k},${y} ${k + 22},${y - 26} ${k + 44},${y} 235,${y}" class="s" style="stroke:${R}"/>`; });
      s += `<ellipse cx="150" cy="88" rx="26" ry="11" class="dash"/><ellipse cx="190" cy="138" rx="22" ry="10" class="dash"/>` + T(222, 80, `huecos`, { c:`tm`, fs:11.5, a:`end` });
      s += arr(246, 112, 308, 112) + T(277, 98, `+ H₂`, { c:`tk`, fs:15 }) + T(277, 134, `Ni`, { c:`tm` });
      [100, 118, 136].forEach(y => s += ln(325, y, 530, y, `s`).replace(`class="s"`, `class="s" style="stroke:${A}"`));
      s += T(132, 206, `aceite: dobles enlaces cis`, { c:`tb` }) + T(132, 224, `hacen «codos» y no se acomodan`, { c:`tm` }) + T(132, 242, `→ líquido`, { c:`tm` });
      s += T(428, 206, `grasa hidrogenada: cadenas rectas`, { c:`tb` }) + T(428, 224, `se acomodan y se atraen más`, { c:`tm` }) + T(428, 242, `→ sólida`, { c:`tm` });
      return s; })(), `Empaque de cadenas con y sin dobles enlaces cis`),
      `Cada cadena es un ácido graso. Quitar el C=C quita el codo, y las cadenas rectas se empacan mejor.`)
  ]);

  /* 11 · Reactividad */
  set(`Reactividad de los alquenos`, [
    fig(svg(560, 222, (() => { let s = ``;
      const box = (x, y, t1, t2) => `<rect x="${x}" y="${y}" width="170" height="48" rx="10" class="bx"/>` + T(x + 85, y + 20, t1, { c:`tb` }) + T(x + 85, y + 38, t2, { c:`tm` });
      const L = [[10, 14, `Halogenación`, `agrega X y X (Br₂, Cl₂)`], [10, 87, `Hidratación`, `agrega H y OH → alcohol`], [10, 160, `Hidrogenación`, `agrega H y H → alcano`]];
      const Rr = [[380, 50, `Oxidación / ozonólisis`, `rompe o funcionaliza el C=C`], [380, 124, `Polimerización`, `encadena muchos alquenos`]];
      s += `<rect x="205" y="78" width="150" height="62" rx="12" style="fill:var(--t24);opacity:.2;stroke:var(--t24);stroke-width:2"/>` + T(280, 104, `C=C`, { c:`tk`, fs:24 }) + T(280, 126, `el π ataca y se rompe`, { c:`tm`, fs:11.5 });
      L.forEach(b => { s += ln(180, b[1] + 24, 205, 109, `dash`) + box(...b); });
      Rr.forEach(b => { s += ln(380, b[1] + 24, 355, 109, `dash`) + box(...b); });
      return s; })(), `Mapa de reacciones de los alquenos`),
      `Todas las reacciones salen del mismo punto: el π.`)
  ]);
})();

function otraHtml(o){
  const li = a => a.map(x => `<li>${x}</li>`).join(``);
  const det = (q, a) => `<details class="otraq"><summary>${q}</summary><p>${a}</p></details>`;
  return `<div class="otra"><div class="otrabanner"><span>Estás viendo la <b>explicación de otra forma</b>. Se mantiene en las siguientes fichas.</span><button type="button" class="btn ghost" data-otra-volver>Ver la ficha original</button></div>
  <p class="otranota">Explicación complementaria: no está en las diapositivas. Para el examen cuenta lo que dice la ficha; esto es para entenderla.</p>
  <section class="otrab pre"><h4>1 · Antes de leer, piensa</h4>${det(o.pre[0], o.pre[1])}</section>
  <section class="otrab idea"><h4>2 · La idea</h4><p>${o.idea}</p></section>
  ${(o.figs || []).map(f => `<figure class="fig otrafig">${f.svg}<figcaption>${f.cap}</figcaption></figure>`).join(``)}
  <section class="otrab por"><h4>3 · Por qué es así</h4><ul>${li(o.por)}</ul></section>
  ${o.ojo ? `<section class="otrab ojo"><h4>4 · Ojo</h4><p>${o.ojo}</p></section>` : ``}
  <section class="otrab prueba"><h4>5 · Pruébate</h4>${o.prueba.map(p => det(p[0], p[1])).join(``)}</section>
  <p class="otrafin"><button type="button" class="btn ghost" data-otra-volver>Ver la ficha original</button></p></div>`;
}
/* Modo «otra forma»: reemplaza el texto de la pestaña Leer (el dibujo se queda) y se mantiene al cambiar de ficha hasta volver a la ficha original. */
const otraOn = it => !!(S.x.otra && OTRA[it.title]);
function otraBind(root){
  root.querySelectorAll(`[data-otra-volver]`).forEach(b => b.onclick = () => { S.x.otra = false; save(); renderView(); renderPanel(); });
}
