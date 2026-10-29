/* ======================= TEMAS 24 Y 25: ALQUENOS Y ALQUINOS ======================= */
const REPASO_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 3`,title:`Generalidades de los alquenos`,fig:`enlacePi`,
 body:`<p>Hidrocarburos <b>insaturados</b> con al menos un enlace doble <b>C=C</b>. Fórmula general <b>CₙH₂ₙ</b>.</p>
 <ul><li><b>Hibridación sp²:</b> el carbono combina su orbital 2s con dos orbitales 2p (2pₓ y 2p_y). Le queda un orbital 2p sin hibridar.</li>
 <li><b>Geometría trigonal plana</b>, con ángulos de ≈120°.</li>
 <li><b>Doble enlace = 1 σ + 1 π:</b> el σ se forma con orbitales híbridos; el π, con los orbitales p que quedaron sin hibridar, por encima y por debajo del plano.</li>
 <li><b>Rigidez:</b> el enlace π impide la libre rotación (rotación restringida). Por eso existe la isomería geométrica <b>cis/trans</b>.</li></ul>`,
 memo:`Alqueno: CₙH₂ₙ · sp² · 120° · plano · 1σ + 1π · no gira.`},
{t:`t24`,src:`Tema 24, pág. 4`,title:`Conformación estructural de los alquenos`,fig:null,
 body:`<p>La define la geometría del doble enlace y la rigidez que impide la rotación.</p>
 <ul><li>Alrededor del C=C la forma es <b>trigonal plana</b>, con ángulos de 120°.</li>
 <li>El enlace <b>π da rigidez</b>: la posición de los sustituyentes alrededor del doble enlace queda <b>fija</b>.</li>
 <li>Las partes de la cadena con enlaces sencillos (C−C) <b>sí giran</b> y adoptan conformaciones escalonadas o eclipsadas, como en los alcanos.</li></ul>
 <p><b>Ejemplo del material:</b> CH₃−CH(CH₃)−CH=CH₂, numerado desde el doble enlace: <b>3-metil-1-buteno</b>. En el formato actual se escribe <b>3-metilbut-1-eno</b>; los dos nombres describen la misma molécula.</p>`,
 memo:`Rígido en el C=C; libre en los enlaces sencillos.`},
{t:`t24`,src:`Tema 24, pág. 5`,title:`Nomenclatura IUPAC de alquenos`,fig:`ejemploPenteno`,
 body:`<ol><li><b>Cadena principal:</b> la que contiene el doble enlace. Si hay varios dobles enlaces, la que contiene más.</li>
 <li><b>Numeración:</b> desde el extremo más cercano al doble enlace. Si empata, desde el extremo más cercano al sustituyente.</li>
 <li><b>Ubicación del doble enlace:</b> se indica con el número del primer carbono del doble enlace (el menor).</li>
 <li><b>Sustituyentes:</b> grupos alquilo y otros, en orden alfabético.</li>
 <li><b>Varios dobles enlaces:</b> -dieno, -trieno, etc.</li>
 <li><b>Isomería geométrica:</b> si aplica, se antepone cis o trans.</li></ol>
 <p><b>Ejemplo del material:</b> CH₃−CH=CH−CH(CH₃)−CH₃</p>
 <ul><li>Cadena de 5 C con el doble enlace → penteno.</li><li>Se numera de izquierda a derecha para dar el número 2 al doble enlace.</li><li>Metilo en C4.</li><li>Nombre: <b>4-metilpent-2-eno</b> (C₆H₁₂). Orden: carbono del sustituyente + sustituyente + raíz + carbono del doble enlace + eno.</li></ul>`,
 memo:`El doble enlace manda: número más bajo para él. Empate → el sustituyente decide.`},
{t:`t24`,src:`Tema 24, pág. 6–7`,title:`Clasificación por número de dobles enlaces`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Dobles enlaces</th><th>Características</th><th>Ejemplos</th></tr></thead><tbody>
 <tr><td>Monoalquenos</td><td>1 (CₙH₂ₙ)</td><td>Insaturados simples; adición electrófila típica</td><td>Eteno CH₂=CH₂, propeno CH₃−CH=CH₂</td></tr>
 <tr><td>Dienos</td><td>2</td><td>Reactividad según qué tan cerca están los dobles enlaces</td><td>Buta-1,3-dieno</td></tr>
 <tr><td>Trienos / polienos</td><td>3 o más</td><td>Frecuentes en productos naturales y pigmentos</td><td>Hexa-1,3,5-trieno; β-caroteno</td></tr></tbody></table></div>
 <p>La pág. 7 muestra el <b>β-caroteno (C₄₀H₅₆)</b>: un polieno con muchos dobles enlaces conjugados. Es el pigmento naranja de la zanahoria y precursor de la vitamina A.</p>`,
 memo:`Mono (1) · Dieno (2) · Trieno/polieno (3+).`},
{t:`t24`,src:`Tema 24, pág. 8`,title:`Disposición de los dobles enlaces y posición`,fig:`dienos`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Estructura</th><th>Característica</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td><b>Conjugados</b></td><td>Separados por UN enlace sencillo (−C=C−C=C−)</td><td>Gran estabilidad por resonancia y deslocalización de electrones π</td><td>Buta-1,3-dieno</td></tr>
 <tr><td><b>Aislados</b></td><td>Separados por DOS o más sencillos (−C=C−C−C=C−)</td><td>Cada doble enlace reacciona por separado, como un monoalqueno</td><td>Penta-1,4-dieno</td></tr>
 <tr><td><b>Acumulados (alenos)</b></td><td>Comparten el mismo carbono (−C=C=C−)</td><td>Muy reactivos e inestables; sus π son perpendiculares</td><td>Propadieno CH₂=C=CH₂</td></tr></tbody></table></div>
 <p><b>Por la posición del doble enlace:</b> <b>terminales</b> (en el C1, como el hex-1-eno: más accesibles a los reactivos) e <b>internos</b> (en el interior, como el hex-3-eno: más impedidos y más estables).</p>`,
 memo:`Conjugado: alterna (=−=). Aislado: lejos (=−−=). Acumulado: pegados (==).`},
{t:`t24`,src:`Tema 24, pág. 9`,title:`Grado de sustitución del doble enlace`,fig:`sustitucion`,
 body:`<p>Se cuenta cuántos grupos de carbono (R) están unidos a los dos carbonos del doble enlace.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Fórmula</th><th>Estabilidad</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td>Monosustituido</td><td>R−CH=CH₂</td><td>La menor</td><td>Propeno</td></tr>
 <tr><td>Disustituido</td><td>R₂C=CH₂ o R−CH=CH−R</td><td>Intermedia (geminal, cis o trans)</td><td>But-2-eno</td></tr>
 <tr><td>Trisustituido</td><td>R₂C=CH−R</td><td>Alta (por hiperconjugación)</td><td>2-metilbut-2-eno</td></tr>
 <tr><td>Tetrasustituido</td><td>R₂C=CR₂</td><td>La máxima</td><td>2,3-dimetilbut-2-eno</td></tr></tbody></table></div>`,
 memo:`Más R en el doble enlace = más estable.`},
{t:`t24`,src:`Tema 24, pág. 9–10`,title:`Isomería geométrica: cis y trans`,fig:`cisTrans`,
 body:`<p>Como el doble enlace no gira, los grupos pueden quedar fijos de dos maneras:</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Isómero</th><th>Posición</th><th>Propiedades</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td><b>Cis (Z)</b></td><td>Grupos principales del <b>mismo lado</b></td><td>Mayor momento dipolar; menos estable por repulsión; punto de ebullición ligeramente mayor</td><td>cis-but-2-eno</td></tr>
 <tr><td><b>Trans (E)</b></td><td>Grupos en <b>lados opuestos</b></td><td>Momento dipolar nulo o muy bajo; más estable</td><td>trans-but-2-eno</td></tr></tbody></table></div>
 <p><b>Condición</b> (complementario [2]): cada carbono del doble enlace debe tener <b>dos grupos distintos</b>. Por eso el propeno y el but-1-eno no tienen cis/trans (su C1 tiene dos H) y el 2-metilbut-2-eno tampoco (su C2 tiene dos CH₃).</p>`,
 memo:`Cis = mismo lado. Trans = cruzados. Necesitas grupos distintos en cada C del doble enlace.`},
{t:`t24`,src:`Tema 24, pág. 11`,title:`Propiedades y reacciones de adición`,fig:`adicionAlqueno`,
 body:`<p><b>Físicas:</b> polaridad y solubilidad parecidas a los alcanos (ligeramente más polares por la movilidad de los electrones π); insolubles en agua; puntos de ebullición muy parecidos a los alcanos del mismo número de C; los cis hierven ligeramente más alto que los trans.</p>
 <p><b>Químicas:</b> alta reactividad. Reacción característica: <b>adición electrófila</b>; el π se rompe y se forman dos σ.</p>
 <ul><li><b>Hidrogenación:</b> eteno + H₂ (Pd/C) → etano.</li>
 <li><b>Halogenación:</b> propeno + Br₂ → 1,2-dibromopropano (pasa por un ion bromonio cíclico).</li>
 <li><b>Hidratación:</b> R−CH=CH₂ + H₂O (H⁺/H₂SO₄, calor) → R−CH(OH)−CH₃: el OH queda en el carbono interno.</li>
 <li>Y polimerización.</li></ul>`,
 memo:`H₂ → alcano · Br₂ → dibromuro vecinal · H₂O/H⁺ → alcohol.`},
{t:`t24`,src:`Tema 24, pág. 12`,title:`Polimerización`,fig:`polimero`,
 body:`<p>Reacción de <b>adición</b> en la que muchas moléculas pequeñas con doble enlace, los <b>monómeros</b>, se unen en cadena mediante enlaces sencillos C−C y forman una macromolécula, el <b>polímero</b>.</p>
 <p class="fx">n (CH₂=CH−R) → −[CH₂−CH(R)]ₙ−</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Polímero</th><th>Monómero</th><th>Usos</th></tr></thead><tbody>
 <tr><td>Polietileno (PE)</td><td>Eteno CH₂=CH₂</td><td>Bolsas, envases, tuberías, cajas; reciclable</td></tr>
 <tr><td>Poliestireno (PS)</td><td>Estireno CH₂=CH−C₆H₅</td><td>Espuma blanca (foto de la pág. 12)</td></tr>
 <tr><td>PVC (policloruro de vinilo)</td><td>Cloruro de vinilo CH₂=CH−Cl</td><td>Tuberías y accesorios</td></tr></tbody></table></div>
 <p>En el laboratorio clínico verás estos materiales todos los días: tubos, puntas de pipeta y recipientes de plástico.</p>`,
 memo:`Monómero con C=C → se abre el doble enlace → cadena larga (polímero).`},
{t:`t24`,src:`Tema 24, pág. 13`,title:`Hidrogenación de aceites`,fig:`hidrogenacion`,
 body:`<p><b>Hidrogenación:</b> adición catalítica de H₂ al doble enlace C=C; el alqueno se convierte en <b>alcano</b> (saturado). Requiere un catalizador metálico heterogéneo: <b>paladio (Pd)</b>, <b>platino (Pt)</b> o <b>níquel (Ni)</b>.</p>
 <p><b>Industria alimentaria:</b> los aceites vegetales líquidos tienen ácidos grasos insaturados (con dobles enlaces). Al hidrogenarlos parcialmente aumenta su punto de fusión y se vuelven grasas sólidas o semisólidas, como la <b>margarina</b> y las mantecas vegetales, que además duran más.</p>
 <p><b>Lo que muestra la imagen de la pág. 13:</b> el ácido oleico (18:1, <b>cis</b>) con H₂/Ni se convierte en ácido esteárico (18:0, saturado), "pero" también puede quedar como ácido <b>elaídico</b> (18:1, <b>trans</b>). Así se forman las grasas trans en la hidrogenación parcial.</p>`,
 memo:`Aceite (cis, líquido) + H₂/Ni → grasa sólida. Parcial → pueden formarse grasas trans.`},
{t:`t24`,src:`Tema 24, pág. 14`,title:`Reactividad de los alquenos`,fig:null,
 body:`<p>La reactividad se debe al doble enlace: un <b>σ fuerte</b> y un <b>π más débil y accesible</b>. El enlace π es una <b>fuente rica en electrones</b> (actúa como nucleófilo) y por eso atrae a reactivos que buscan electrones.</p>
 <ul><li><b>Halogenación</b> (Br₂, Cl₂).</li><li><b>Hidratación</b> (H₂O/H⁺): alcoholes por catálisis ácida.</li><li><b>Hidrogenación catalítica.</b></li><li><b>Oxidación / ozonólisis:</b> rompen o funcionalizan el doble enlace para formar dioles, aldehídos o cetonas.</li><li><b>Polimerización.</b></li></ul>`,
 memo:`π = nube de electrones expuesta → el alqueno "atrae" reactivos.`},

{t:`t25`,src:`Tema 25, pág. 2`,title:`Generalidades de los alquinos`,fig:`cilindroPi`,
 body:`<ul><li>Hidrocarburos alifáticos <b>insaturados</b> con al menos un <b>triple enlace</b> C≡C.</li>
 <li>Hibridación <b>sp</b> en los carbonos del triple enlace; geometría <b>lineal</b> de <b>180°</b>.</li>
 <li>Triple enlace = <b>1 σ + 2 π</b> perpendiculares entre sí.</li>
 <li>Fórmula general <b>CₙH₂ₙ₋₂</b>.</li></ul>
 <p class="note">La pág. 2 muestra numerada la molécula HC≡C−CH(CH₃)−CH₂−CH(CH₃)−CH₂−CH₂−C≡CH. Su nombre sería <b>3,5-dimetilnona-1,8-diino</b> (está resuelto en Ejercicios).</p>`,
 memo:`Alquino: CₙH₂ₙ₋₂ · sp · 180° · lineal · 1σ + 2π.`},
{t:`t25`,src:`Tema 25, pág. 3`,title:`Conformación estructural de los alquinos`,fig:`hibridacion`,
 body:`<p>Depende de la hibridación sp de los carbonos del triple enlace:</p>
 <ol><li><b>Geometría lineal:</b> los dos carbonos del triple enlace y los átomos unidos directamente a ellos quedan en línea recta.</li>
 <li><b>Ángulo de 180°.</b></li>
 <li><b>No hay isomería cis/trans</b>, porque cada carbono del triple enlace solo tiene un grupo además del otro carbono.</li>
 <li>Triple enlace = 1 σ + 2 π.</li>
 <li><b>Cilindro de densidad electrónica:</b> los dos π perpendiculares forman una nube continua con forma de cilindro o dona alrededor del σ. Según el material, esto no lo vuelve más reactivo.</li>
 <li>Por la falta de rotación en el triple enlace, el material indica que los alquinos <b>no forman confórmeros</b>.</li></ol>
 <p class="note">Esto se refiere al triple enlace. Los enlaces sencillos del resto de la cadena sí giran, igual que en los alquenos (Tema 24, pág. 4).</p>`,
 memo:`Línea recta, sin cis/trans, nube cilíndrica de electrones π.`},
{t:`t25`,src:`Tema 25, pág. 4`,title:`Nomenclatura IUPAC de alquinos`,fig:`ejemploPentino`,
 body:`<ol><li>Cadena continua más larga que <b>contenga el triple enlace</b>; se numera desde el extremo más cercano a él para que sus carbonos reciban los números más bajos.</li>
 <li>Prefijo según el número de carbonos (met 1, et 2, prop 3, but 4, pent 5, hex 6…) y sufijo <b>-ino</b>.</li>
 <li>La posición se indica con el número del <b>primer carbono</b> del triple enlace antes de -ino.</li>
 <li>El triple enlace <b>siempre tiene prioridad</b> de numeración sobre los alquilos y los halógenos. Los radicales van en orden alfabético con su número.</li></ol>
 <p><b>Ejemplo del material:</b> CH₃−CH(CH₃)−C≡C−CH₃ → <b>4-metilpent-2-ino</b> (C₆H₁₀).</p>
 <p>Se numera desde la derecha: el triple enlace queda en C2 y el metilo en C4. Desde la izquierda, el triple enlace quedaría en C3.</p>`,
 memo:`Triple enlace = número más bajo, aunque la rama quede con número alto.`},
{t:`t25`,src:`Tema 25, pág. 5`,title:`Casos especiales: diinos y alqueninos`,fig:`alquenino`,
 body:`<p><b>Polialquinos:</b> con dos o más triples enlaces se usan <b>-adiino</b>, <b>-atriino</b>…, numerando desde el extremo que dé los localizadores más bajos a los triples.</p>
 <p class="fx">HC≡C−CH₂−C≡CH → penta-1,4-diino</p>
 <p><b>Alqueninos:</b> tienen dobles y triples enlaces. El sufijo <b>-eno va antes que -ino</b>. Se numera desde el extremo más cercano a <b>cualquiera</b> de las dos insaturaciones.</p>
 <p><b>Desempate:</b> si el doble y el triple están a la misma distancia de los extremos, el <b>doble enlace</b> recibe el número más bajo.</p>
 <p class="fx">CH₂=CH−CH₂−C≡CH → pent-1-en-4-ino</p>`,
 memo:`Diino: "a" + di + ino (penta-1,4-diino). Alquenino: eno antes de ino; empate → gana el doble.`},
{t:`t25`,src:`Tema 25, pág. 6–7`,title:`Clasificación de los alquinos`,fig:`terminalInterno`,
 body:`<p><b>Por la posición del triple enlace (pág. 6):</b></p>
 <div class="scroll"><table class="tbl"><thead><tr><th></th><th>Terminales (monosustituidos)</th><th>Internos (disustituidos)</th></tr></thead><tbody>
 <tr><th>Estructura</th><td>R−C≡C−H</td><td>R−C≡C−R'</td></tr>
 <tr><th>Ubicación</th><td>Extremo de la cadena (C1)</td><td>Interior (C2 o más)</td></tr>
 <tr><th>Ejemplos</th><td>Etino (acetileno) H−C≡C−H; propino CH₃−C≡C−H; 1-butino</td><td>2-butino CH₃−C≡C−CH₃; 2-pentino; 3-hexino</td></tr></tbody></table></div>
 <p><b>Por el número de triples enlaces (pág. 7):</b> monoalquinos (1, CₙH₂ₙ₋₂: propino, but-1-ino); dialquinos o diinos (2, <b>CₙH₂ₙ₋₆</b>: penta-1,4-diino, hexa-1,5-diino); polialquinos (3 o más: octa-1,3,5,7-tetraiino, presentes como toxinas en plantas y hongos).</p>`,
 memo:`Terminal: H en el extremo (es el que tiene acidez). Diino: CₙH₂ₙ₋₆.`},
{t:`t25`,src:`Tema 25, pág. 8`,title:`Serie de los alquinos`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Nombre</th><th>Fórmula</th><th>Semidesarrollada</th></tr></thead><tbody>
 <tr><td>Etino</td><td>C₂H₂</td><td>HC≡CH</td></tr><tr><td>Propino</td><td>C₃H₄</td><td>HC≡C−CH₃</td></tr><tr><td>Butino</td><td>C₄H₆</td><td>HC≡C−CH₂−CH₃</td></tr>
 <tr><td>Pentino</td><td>C₅H₈</td><td>HC≡C−CH₂−CH₂−CH₃</td></tr><tr><td>Hexino</td><td>C₆H₁₀</td><td>HC≡C−(CH₂)₃−CH₃</td></tr><tr><td>Heptino</td><td>C₇H₁₂</td><td>HC≡C−(CH₂)₄−CH₃</td></tr></tbody></table></div>
 <p class="note">En la tabla de la pág. 8 aparece "Etino C₂H": la fórmula correcta es <b>C₂H₂</b>. Y la semidesarrollada del propino aparece como "HC≡C−CH₂": debe ser <b>HC≡C−CH₃</b>. Compruébalo con CₙH₂ₙ₋₂.</p>`,
 memo:`Cada CH₂ que agregas suma C₁H₂: C₂H₂ → C₃H₄ → C₄H₆…`},
{t:`t25`,src:`Tema 25, pág. 9`,title:`Propiedades físicas de los alquinos`,fig:null,
 body:`<ul><li><b>Polaridad:</b> levemente más polares que los alquenos.</li>
 <li><b>Punto de ebullición:</b> ligeramente superior a alcanos y alquenos de masa equivalente, porque al ser lineales se empaquetan mejor. Aumenta con el número de carbonos y disminuye con las ramificaciones.</li>
 <li><b>Estado físico:</b> gases de 2 a 4 C (etino o acetileno), líquidos de 5 a 15 C, sólidos de 16 C o más.</li>
 <li>Menos densos que el agua e inodoros.</li></ul>
 <p class="note">Compara con los alcanos (Tema 23, pág. 17): allí los líquidos van de C5 a C17. Los rangos cambian un poco entre familias.</p>`,
 memo:`Alquinos: gas 2–4 C · líquido 5–15 · sólido 16+.`},
{t:`t25`,src:`Tema 25, pág. 9`,title:`Reacciones de los alquinos`,fig:`reaccAlquino`,
 body:`<p>Muy alta reactividad:</p>
 <ul><li><b>Acidez de los terminales:</b> el H unido al C del triple enlace puede salir como protón. CH₃−C≡C−H + NaH → CH₃−C≡C:⁻ Na⁺ + H₂ (con CH₃Li sale CH₄). Los internos no tienen ese H.</li>
 <li><b>Hidratación</b> (H₂SO₄, H₂O, HgSO₄): forma un enol que se reordena a <b>cetona</b>. Del propino sale la propanona (acetona).</li>
 <li><b>Hidroboración-oxidación</b> ((Cy)₂BH, THF; luego H₂O₂, NaOH): en el alquino terminal forma un <b>aldehído</b> (propanal), según la figura de la pág. 9.</li>
 <li><b>Hidrogenación completa:</b> R−C≡C−R' + 2 H₂ (Pt, Pd o Ni) → R−CH₂−CH₂−R', un alcano. Se necesitan 2 H₂ porque hay dos enlaces π que abrir.</li></ul>`,
 memo:`Terminal = ácido. Hidratación → cetona. + 2 H₂ → alcano.`},
{t:`t25`,src:`Tema 25, pág. 10`,title:`Isomería estructural de los alquinos`,fig:`isomerosAlquino`,
 body:`<p>Misma fórmula molecular (CₙH₂ₙ₋₂), átomos conectados de otra manera:</p>
 <ol><li><b>De posición:</b> la cadena es idéntica y cambia la ubicación del triple enlace. C₄H₆: but-1-ino (terminal) y but-2-ino (interno).</li>
 <li><b>De cadena (esqueleto):</b> cambia la forma de la cadena por ramificaciones. C₅H₈: pent-1-ino (lineal) y 3-metilbut-1-ino (ramificado).</li>
 <li><b>De función:</b> la misma fórmula pertenece a otra familia química. C₄H₆: but-1-ino (alquino) y buta-1,3-dieno (dieno).</li></ol>`,
 memo:`Posición = se mueve el triple. Cadena = se ramifica. Función = cambia de familia.`},
{t:`t25`,src:`Tema 25, pág. 11–15`,title:`Trucos visuales para recordar -ano, -eno, -ino`,fig:`barras`,
 body:`<p>Las últimas láminas son recursos para memorizar: una cerca de <b>una</b> tabla (alcano), de <b>dos</b> tablas (alqueno) y de <b>tres</b> tablas (alquino), y juegos de palabras con la misma idea.</p>
 <p class="fx">una raya (−) → -ano · dos rayas (=) → -eno · tres rayas (≡) → -ino</p>
 <p>La vocal sigue el orden <b>a, e, i</b>, igual que 1, 2, 3 enlaces.</p>`,
 memo:`a-e-i = 1-2-3 rayas.`}
];

const MCQ_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 3`,q:`La fórmula general de los alquenos (con un doble enlace) es:`,o:[`CₙH₂ₙ`,`CₙH₂ₙ₊₂`,`CₙH₂ₙ₋₂`,`CₙH₂ₙ₋₆`],e:`Un doble enlace quita 2 H respecto al alcano.`},
{t:`t24`,src:`Tema 24, pág. 3`,q:`En la hibridación sp² del alqueno, el carbono combina su orbital 2s con:`,o:[`Dos orbitales 2p (2pₓ y 2p_y)`,`Tres orbitales 2p`,`Un orbital 2p`,`Ningún orbital p`],e:`sp² = 1 s + 2 p. Queda un 2p sin hibridar, que forma el enlace π.`},
{t:`t24`,src:`Tema 24, pág. 3`,q:`El doble enlace C=C está formado por:`,o:[`1 enlace σ (hibridado) y 1 enlace π (no hibridado)`,`2 enlaces σ`,`2 enlaces π`,`1 enlace σ y 2 enlaces π`],e:`σ con orbitales sp²; π con los orbitales p puros.`},
{t:`t24`,src:`Tema 24, pág. 3–4`,q:`¿Por qué los alquenos tienen rotación restringida?`,o:[`El enlace π impide girar alrededor del doble enlace`,`Porque son lineales`,`Porque tienen hibridación sp³`,`Porque no tienen enlaces σ`],e:`Girar rompería el traslape de los orbitales p que forman el π.`},
{t:`t24`,src:`Tema 24, pág. 4`,q:`En un alqueno, las partes de la cadena con enlaces sencillos:`,o:[`Sí giran y adoptan conformaciones escalonadas o eclipsadas`,`Tampoco pueden girar`,`Son siempre planas`,`Forman isómeros cis/trans`],e:`Solo el C=C es rígido.`},
{t:`t24`,src:`Tema 24, pág. 5`,q:`Al numerar la cadena de un alqueno, ¿qué tiene prioridad?`,o:[`Dar el número más bajo al doble enlace`,`Dar el número más bajo al sustituyente`,`El orden alfabético`,`Empezar siempre por la izquierda`],e:`Regla 2: desde el extremo más cercano al doble enlace; si empata, decide el sustituyente.`},
{t:`t24`,src:`Tema 24, pág. 5`,q:`El nombre de CH₃−CH=CH−CH(CH₃)−CH₃ es:`,o:[`4-metilpent-2-eno`,`2-metilpent-3-eno`,`4-metilpentano`,`2-metilpent-2-eno`],e:`Doble enlace en C2 desde la izquierda; metilo en C4.`},
{t:`t24`,src:`Tema 24, pág. 5`,q:`Un alqueno con dos dobles enlaces lleva el sufijo:`,o:[`-dieno`,`-diino`,`-eno doble`,`-dieno-ino`],e:`Dos dobles: -dieno; tres: -trieno.`},
{t:`t24`,src:`Tema 24, pág. 4`,q:`El "3-metil-1-buteno" del material también se escribe:`,o:[`3-metilbut-1-eno`,`2-metilbut-3-eno`,`3-metilbutano`,`1-metilbut-3-eno`],e:`Es el mismo nombre en formato actual: el localizador del doble enlace va antes de -eno.`},
{t:`t24`,src:`Tema 24, pág. 6–7`,q:`El β-caroteno es un ejemplo de:`,o:[`Polieno`,`Alcano`,`Alquino terminal`,`Monoalqueno`],e:`Tiene muchos dobles enlaces conjugados (C₄₀H₅₆).`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`En el buta-1,3-dieno, los dobles enlaces son:`,o:[`Conjugados: separados por un solo enlace sencillo`,`Aislados`,`Acumulados`,`Triples`],e:`C=C−C=C: alternan. Son los más estables por resonancia.`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`El propadieno (CH₂=C=CH₂) es un dieno:`,o:[`Acumulado (aleno)`,`Conjugado`,`Aislado`,`Aromático`],e:`Los dos dobles enlaces comparten el carbono central; es muy reactivo e inestable.`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`El penta-1,4-dieno tiene dobles enlaces:`,o:[`Aislados: cada uno reacciona por separado`,`Conjugados`,`Acumulados`,`En el mismo carbono`],e:`Están separados por dos enlaces sencillos.`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`El hex-1-eno es un alqueno:`,o:[`Terminal`,`Interno`,`Acumulado`,`Tetrasustituido`],e:`El doble enlace está en el C1, en el extremo.`},
{t:`t24`,src:`Tema 24, pág. 9`,q:`¿Cuál es el alqueno más estable según el grado de sustitución?`,o:[`2,3-dimetilbut-2-eno (tetrasustituido)`,`Propeno (monosustituido)`,`But-2-eno (disustituido)`,`2-metilbut-2-eno (trisustituido)`],e:`Más grupos R en el doble enlace = mayor estabilidad.`},
{t:`t24`,src:`Tema 24, pág. 9–10`,q:`En el isómero cis, los grupos principales están:`,o:[`Del mismo lado del doble enlace`,`En lados opuestos`,`En el mismo carbono`,`Fuera del plano`],e:`Cis (Z) = mismo lado. Trans (E) = lados opuestos.`},
{t:`t24`,src:`Tema 24, pág. 9`,q:`Comparado con el trans, el isómero cis:`,o:[`Tiene mayor momento dipolar y es menos estable`,`Es más estable y no tiene momento dipolar`,`Es idéntico en todo`,`No existe en los alquenos`],e:`Los grupos del mismo lado se repelen (menos estable) y no anulan sus polaridades.`},
{t:`t24`,src:`Tema 24, pág. 10 · compl. [2]`,q:`¿Cuál de estos alquenos puede tener isómeros cis y trans?`,o:[`But-2-eno`,`Propeno`,`But-1-eno`,`2-metilbut-2-eno`],e:`Cada carbono del doble enlace del but-2-eno tiene un H y un CH₃ (grupos distintos). Los otros tienen un carbono con dos grupos iguales.`},
{t:`t24`,src:`Tema 24, pág. 11`,q:`Propeno + Br₂ produce:`,o:[`1,2-dibromopropano`,`Propano`,`Propan-2-ol`,`1-bromopropeno + HBr`],e:`Adición: los dos Br se suman a los carbonos del doble enlace (pasando por un ion bromonio).`},
{t:`t24`,src:`Tema 24, pág. 11`,q:`R−CH=CH₂ + H₂O (H⁺, calor) produce:`,o:[`R−CH(OH)−CH₃, un alcohol`,`R−CH₂−CH₃, un alcano`,`Un dihalogenuro`,`Un polímero`],e:`Hidratación: el OH queda en el carbono interno del antiguo doble enlace.`},
{t:`t24`,src:`Tema 24, pág. 11`,q:`Los alquenos cis suelen hervir un poco más alto que los trans porque:`,o:[`Tienen un momento dipolar neto`,`Son más pesados`,`Son lineales`,`Forman puentes de hidrógeno`],e:`Misma masa, pero el cis es polar.`},
{t:`t24`,src:`Tema 24, pág. 12`,q:`La polimerización de alquenos es una reacción de:`,o:[`Adición`,`Sustitución`,`Combustión`,`Neutralización`],e:`El doble enlace se abre y los monómeros se suman en cadena.`},
{t:`t24`,src:`Tema 24, pág. 12`,q:`El PVC se obtiene a partir de:`,o:[`Cloruro de vinilo (CH₂=CH−Cl)`,`Eteno (CH₂=CH₂)`,`Estireno (CH₂=CH−C₆H₅)`,`Propadieno`],e:`PE sale del eteno, PS del estireno y PVC del cloruro de vinilo.`},
{t:`t24`,src:`Tema 24, pág. 13`,q:`¿Qué catalizadores se usan en la hidrogenación de alquenos?`,o:[`Paladio, platino o níquel`,`Ácido sulfúrico`,`Luz ultravioleta`,`Bromo`],e:`Catalizadores metálicos heterogéneos: Pd, Pt o Ni.`},
{t:`t24`,src:`Tema 24, pág. 13`,q:`Al hidrogenar parcialmente un aceite vegetal se obtiene:`,o:[`Una grasa sólida o semisólida, como la margarina`,`Un gas`,`Un alcohol`,`Un aceite más líquido`],e:`Al saturar dobles enlaces sube el punto de fusión.`},
{t:`t24`,src:`Tema 24, pág. 13`,q:`Según la figura de la pág. 13, el ácido oleico (cis) puede convertirse durante la hidrogenación en ácido elaídico, que es:`,o:[`Su isómero trans`,`Un alcano de 18 C`,`Un alquino`,`Un polímero`],e:`Oleico 18:1 cis; elaídico 18:1 trans; esteárico 18:0 (saturado).`},
{t:`t24`,src:`Tema 24, pág. 14`,q:`¿Por qué el enlace π hace reactivos a los alquenos?`,o:[`Es más débil y accesible, y es rico en electrones`,`Es más fuerte que el σ`,`Porque no tiene electrones`,`Porque es iónico`],e:`El π actúa como fuente de electrones (nucleófilo) y atrae reactivos.`},
{t:`t24`,src:`Tema 24, pág. 14`,q:`La ozonólisis de un alqueno:`,o:[`Rompe el doble enlace y puede formar aldehídos o cetonas`,`Forma un alcano`,`Forma un polímero`,`Forma un alquino`],e:`Oxidación/ozonólisis: ruptura o funcionalización del doble enlace.`},

{t:`t25`,src:`Tema 25, pág. 2`,q:`La fórmula general de los alquinos con un triple enlace es:`,o:[`CₙH₂ₙ₋₂`,`CₙH₂ₙ`,`CₙH₂ₙ₊₂`,`CₙH₂ₙ₋₆`],e:`El triple enlace quita 4 H respecto al alcano.`},
{t:`t25`,src:`Tema 25, pág. 2`,q:`Los carbonos del triple enlace tienen hibridación:`,o:[`sp, geometría lineal (180°)`,`sp², trigonal plana`,`sp³, tetraédrica`,`sp², lineal`],e:`Triple = sp, 180°.`},
{t:`t25`,src:`Tema 25, pág. 2–3`,q:`El triple enlace está formado por:`,o:[`1 enlace σ y 2 enlaces π perpendiculares`,`3 enlaces σ`,`2 σ y 1 π`,`3 enlaces π`],e:`Los dos π forman un cilindro de densidad electrónica alrededor del σ.`},
{t:`t25`,src:`Tema 25, pág. 3`,q:`¿Por qué los alquinos no presentan isomería cis/trans?`,o:[`Porque su geometría es lineal (180°)`,`Porque giran libremente`,`Porque son aromáticos`,`Porque tienen hibridación sp³`],e:`Cada carbono del triple enlace solo tiene un grupo además del otro carbono, y están en línea recta.`},
{t:`t25`,src:`Tema 25, pág. 3`,q:`El "cilindro de densidad electrónica" de un alquino se forma por:`,o:[`La superposición de los dos enlaces π perpendiculares`,`Los enlaces C−H`,`Los electrones del σ únicamente`,`Los orbitales sp³`],e:`Una nube continua con forma de dona alrededor del eje σ.`},
{t:`t25`,src:`Tema 25, pág. 4`,q:`El nombre de CH₃−CH(CH₃)−C≡C−CH₃ es:`,o:[`4-metilpent-2-ino`,`2-metilpent-3-ino`,`4-metilpent-2-eno`,`2-metilpentano`],e:`Se numera desde la derecha para dar el 2 al triple enlace; el metilo queda en C4.`},
{t:`t25`,src:`Tema 25, pág. 4`,q:`Si una molécula tiene un triple enlace y un halógeno, la numeración da prioridad a:`,o:[`El triple enlace`,`El halógeno`,`El orden alfabético`,`El sustituyente más grande`],e:`Regla 4: el triple enlace siempre tiene prioridad sobre alquilos y halógenos.`},
{t:`t25`,src:`Tema 25, pág. 5`,q:`El nombre de HC≡C−CH₂−C≡CH es:`,o:[`Penta-1,4-diino`,`Pent-1,4-ino`,`Penta-1,4-dieno`,`Pentino`],e:`Dos triples enlaces: -adiino, con sus localizadores.`},
{t:`t25`,src:`Tema 25, pág. 5`,q:`En un alquenino, si el doble y el triple enlace están a la misma distancia de los extremos:`,o:[`El doble enlace recibe el número más bajo`,`El triple recibe el número más bajo`,`Se numera por orden alfabético`,`Se usa el número más alto`],e:`Criterio de desempate del material.`},
{t:`t25`,src:`Tema 25, pág. 5`,q:`El nombre de CH₂=CH−CH₂−C≡CH es:`,o:[`Pent-1-en-4-ino`,`Pent-4-en-1-ino`,`Pent-1-in-4-eno`,`Penta-1,4-diino`],e:`Empate de distancias → el doble enlace se queda con el 1. El sufijo -eno va antes que -ino.`},
{t:`t25`,src:`Tema 25, pág. 6`,q:`Un alquino terminal tiene la estructura:`,o:[`R−C≡C−H`,`R−C≡C−R'`,`R−CH=CH₂`,`R₂C=CR₂`],e:`Terminal = monosustituido, con H en el C del triple enlace.`},
{t:`t25`,src:`Tema 25, pág. 6`,q:`¿Cuál es un alquino interno?`,o:[`But-2-ino (CH₃−C≡C−CH₃)`,`Etino`,`Propino`,`But-1-ino`],e:`El triple enlace está en el interior (C2 o más).`},
{t:`t25`,src:`Tema 25, pág. 6`,q:`El nombre común del etino es:`,o:[`Acetileno`,`Etileno`,`Acetona`,`Metano`],e:`Etino = acetileno (gas del soplete). Etileno es el eteno, un alqueno.`},
{t:`t25`,src:`Tema 25, pág. 7`,q:`La fórmula general de un dialquino (diino) es:`,o:[`CₙH₂ₙ₋₆`,`CₙH₂ₙ₋₂`,`CₙH₂ₙ₋₄`,`CₙH₂ₙ`],e:`Cada triple enlace resta 4 H: 2n + 2 − 8 = 2n − 6.`},
{t:`t25`,src:`Tema 25, pág. 8`,q:`¿Cuál es la fórmula molecular correcta del etino?`,o:[`C₂H₂`,`C₂H`,`C₂H₄`,`C₂H₆`],e:`2(2) − 2 = 2. La tabla de la pág. 8 tiene una errata ("C₂H").`},
{t:`t25`,src:`Tema 25, pág. 8`,q:`¿Cuál es la fórmula del hexino?`,o:[`C₆H₁₀`,`C₆H₁₂`,`C₆H₁₄`,`C₆H₆`],e:`2(6) − 2 = 10.`},
{t:`t25`,src:`Tema 25, pág. 9`,q:`Los alquinos de 2 a 4 carbonos son, a temperatura ambiente:`,o:[`Gases`,`Líquidos`,`Sólidos`,`Plasmas`],e:`Gases 2–4 C; líquidos 5–15 C; sólidos 16 C o más.`},
{t:`t25`,src:`Tema 25, pág. 9`,q:`Los alquinos hierven un poco más alto que los alquenos de masa parecida porque:`,o:[`Su forma lineal permite un mejor empaquetamiento`,`Son iónicos`,`Forman puentes de hidrógeno`,`Son más densos que el agua`],e:`Al ser lineales se acomodan mejor y cuesta más separarlos.`},
{t:`t25`,src:`Tema 25, pág. 9`,q:`¿Qué alquinos presentan acidez (pueden donar un protón)?`,o:[`Los terminales`,`Los internos`,`Todos por igual`,`Ninguno`],e:`Solo los terminales tienen un H unido al carbono sp del triple enlace.`},
{t:`t25`,src:`Tema 25, pág. 9`,q:`La hidrogenación completa de un alquino necesita:`,o:[`2 moléculas de H₂ por triple enlace y forma un alcano`,`1 H₂ y forma un alcano`,`Agua y ácido`,`Luz UV`],e:`R−C≡C−R' + 2 H₂ → R−CH₂−CH₂−R'.`},
{t:`t25`,src:`Tema 25, pág. 9`,q:`La hidratación del propino (H₂SO₄, H₂O, HgSO₄) produce finalmente:`,o:[`Una cetona (propanona)`,`Un alcano`,`Un ácido carboxílico`,`Un alqueno`],e:`Primero se forma un enol, que se reordena a cetona.`},
{t:`t25`,src:`Tema 25, pág. 10`,q:`But-1-ino y but-2-ino son isómeros de:`,o:[`Posición`,`Función`,`Cadena`,`Conformación`],e:`Misma cadena; cambia la ubicación del triple enlace.`},
{t:`t25`,src:`Tema 25, pág. 10`,q:`But-1-ino y buta-1,3-dieno (ambos C₄H₆) son isómeros de:`,o:[`Función`,`Posición`,`Cadena`,`Geometría (cis/trans)`],e:`Misma fórmula, distinta familia química (alquino y dieno).`},
{t:`t25`,src:`Tema 25, pág. 10`,q:`Pent-1-ino y 3-metilbut-1-ino son isómeros de:`,o:[`Cadena`,`Posición`,`Función`,`Geometría`],e:`El triple sigue en C1, pero cambia la forma del esqueleto (uno es ramificado).`},
{t:`t25`,src:`Tema 25, pág. 11–15`,q:`Según el truco visual, tres rayas (≡) corresponden al sufijo:`,o:[`-ino`,`-ano`,`-eno`,`-ol`],e:`Una raya -ano, dos -eno, tres -ino (a, e, i).`}
];

const ABIERTAS_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 3–4`,q:`Explique por qué el doble enlace de los alquenos es rígido y qué consecuencia tiene.`,a:`El doble enlace tiene un σ y un π; el π se forma por el traslape lateral de orbitales p sin hibridar. Para girar habría que romper ese traslape, así que no hay rotación libre alrededor del C=C. Consecuencia: los grupos quedan fijos y aparece la isomería geométrica cis/trans. Las partes con enlaces sencillos sí siguen girando.`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`Diferencie dienos conjugados, aislados y acumulados con un ejemplo de cada uno.`,a:`Conjugados: dobles enlaces separados por un solo enlace sencillo (C=C−C=C); son muy estables por resonancia (buta-1,3-dieno). Aislados: separados por dos o más sencillos; cada doble enlace reacciona por separado (penta-1,4-dieno). Acumulados o alenos: comparten el mismo carbono (C=C=C); son muy reactivos e inestables (propadieno).`},
{t:`t24`,src:`Tema 24, pág. 9–10`,q:`Describa los isómeros cis y trans del but-2-eno y compare su estabilidad y polaridad.`,a:`En el cis-but-2-eno los dos CH₃ están del mismo lado del doble enlace; en el trans, en lados opuestos. El cis tiene mayor momento dipolar (sus polaridades no se anulan) y es menos estable por la repulsión entre los grupos; hierve ligeramente más alto. El trans tiene momento dipolar nulo o muy bajo y es más estable.`},
{t:`t24`,src:`Tema 24, pág. 12–13`,q:`Explique la polimerización y la hidrogenación de alquenos y dé un ejemplo de su uso.`,a:`Polimerización: muchos monómeros con doble enlace se unen en cadena mediante enlaces sencillos y forman un polímero; por ejemplo, el eteno da polietileno (bolsas, envases) y el cloruro de vinilo da PVC (tuberías). Hidrogenación: adición de H₂ al doble enlace con catalizador de Pd, Pt o Ni para formar un alcano; se usa para convertir aceites vegetales líquidos en grasas sólidas como la margarina.`},
{t:`t25`,src:`Tema 25, pág. 2–3`,q:`Describa la estructura del triple enlace y explique por qué los alquinos no tienen isomería cis/trans.`,a:`El triple enlace tiene un enlace σ (orbitales sp) y dos enlaces π perpendiculares, que forman un cilindro de densidad electrónica alrededor del σ. Los carbonos sp son lineales (180°): los dos carbonos del triple enlace y los átomos unidos a ellos quedan en línea recta. Cada carbono del triple solo tiene un sustituyente, así que no puede haber "mismo lado" ni "lado opuesto": no hay cis/trans.`},
{t:`t25`,src:`Tema 25, pág. 4–5`,q:`Enumere las reglas para nombrar un alquino, incluidos los casos de diinos y alqueninos.`,a:`1) Cadena más larga que contenga el triple enlace. 2) Numerar desde el extremo más cercano al triple enlace; tiene prioridad sobre alquilos y halógenos. 3) Raíz + localizador del primer carbono del triple + -ino. 4) Ramas en orden alfabético con sus números. Diinos: -adiino con los dos localizadores (penta-1,4-diino). Alqueninos: -eno antes que -ino; se numera desde el extremo más cercano a cualquier insaturación y, si empatan, el doble enlace recibe el número menor (pent-1-en-4-ino).`},
{t:`t25`,src:`Tema 25, pág. 6 y 9`,q:`¿Qué diferencia hay entre un alquino terminal y uno interno en estructura y reactividad?`,a:`Terminal: R−C≡C−H, el triple enlace está en C1 y hay un H unido a un carbono sp; ese H es ácido y puede salir como protón (con NaH forma un acetiluro). Interno: R−C≡C−R', el triple está en el interior (C2 o más) y no tiene ese H ácido. Ejemplos: propino (terminal) y but-2-ino (interno).`},
{t:`t25`,src:`Tema 25, pág. 10`,q:`Explique los tres tipos de isomería estructural de los alquinos con un ejemplo de cada uno.`,a:`Posición: la misma cadena con el triple enlace en otro lugar (but-1-ino y but-2-ino, C₄H₆). Cadena: cambia el esqueleto por ramificaciones (pent-1-ino y 3-metilbut-1-ino, C₅H₈). Función: la misma fórmula en otra familia química (but-1-ino y buta-1,3-dieno, C₄H₆).`}
];

const EJ_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 5 (ejemplo)`,q:`Nombre CH₃−CH=CH−CH(CH₃)−CH₃ y escriba su fórmula molecular.`,
 pide:`Aplicar las reglas IUPAC de alquenos.`,datos:[`Un doble enlace y una rama metilo`],f:`Prefijo + raíz + localizador + eno`,
 pasos:[`Cadena principal con el doble enlace: 5 C → pent-…-eno.`,`Desde la izquierda el doble enlace queda en C2; desde la derecha, en C3. Gana la izquierda.`,`Metilo en C4.`,`Nombre: 4-metilpent-2-eno.`,`6 C en total, CₙH₂ₙ → C₆H₁₂.`],r:`4-metilpent-2-eno, C₆H₁₂`},
{t:`t24`,src:`Tema 24, pág. 4 (ejemplo)`,q:`Nombre CH₃−CH(CH₃)−CH=CH₂.`,
 pide:`Numerar desde el doble enlace aunque la rama quede con número mayor.`,datos:[`Doble enlace en un extremo`],f:`—`,
 pasos:[`Cadena de 4 C con el doble enlace → but-…-eno.`,`Se numera desde la derecha (el CH₂=): el doble enlace queda en C1.`,`Metilo en C3.`,`Nombre: 3-metilbut-1-eno (en el material: 3-metil-1-buteno). Fórmula C₅H₁₀.`],r:`3-metilbut-1-eno (3-metil-1-buteno)`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 5 (regla 2)`,q:`Nombre CH₃−CH(CH₃)−CH=CH−CH₂−CH₃.`,
 pide:`Resolver un empate en la posición del doble enlace.`,datos:[`6 C en la cadena`,`Doble enlace en el centro`],f:`Empate → el sustituyente decide`,
 pasos:[`Cadena de 6 C → hex-…-eno.`,`Desde ambos extremos el doble enlace queda en C3: empate.`,`Se numera desde el extremo más cercano al sustituyente: desde la izquierda el metilo queda en C2 (desde la derecha quedaría en C5).`,`Nombre: 2-metilhex-3-eno (C₇H₁₄).`],r:`2-metilhex-3-eno`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 5`,q:`Nombre CH₂=C(CH₃)−CH₂−CH₃.`,
 pide:`Alqueno con la rama en un carbono del doble enlace.`,datos:[`Doble enlace entre C1 y C2`],f:`—`,
 pasos:[`Cadena más larga que contiene el doble enlace: 4 C.`,`Numerar desde el CH₂=: doble enlace en C1.`,`Metilo en C2.`,`Nombre: 2-metilbut-1-eno (C₅H₁₀).`],r:`2-metilbut-1-eno`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 8`,q:`Clasifique como conjugado, aislado o acumulado: a) CH₂=CH−CH=CH₂; b) CH₂=CH−CH₂−CH=CH₂; c) CH₂=C=CH₂. Nómbrelos.`,
 pide:`Contar cuántos enlaces sencillos separan los dobles enlaces.`,datos:[`Conjugado: 1 sencillo entre ellos`,`Aislado: 2 o más`,`Acumulado: 0 (mismo carbono)`],f:`—`,
 pasos:[`a) Un solo sencillo entre los dobles enlaces → conjugado: buta-1,3-dieno.`,`b) Dos sencillos entre ellos → aislado: penta-1,4-dieno.`,`c) Comparten el carbono central → acumulado (aleno): propadieno.`],r:`a) conjugado; b) aislado; c) acumulado`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 9–10 · compl. [2]`,q:`¿Cuáles tienen isomería cis/trans? Propeno, but-1-eno, but-2-eno, 2-metilbut-2-eno, pent-2-eno.`,
 pide:`Revisar si cada carbono del doble enlace tiene dos grupos distintos.`,datos:[`Condición: grupos distintos en cada C del C=C`],f:`—`,
 pasos:[`Propeno CH₂=CH−CH₃: el C1 tiene dos H → NO.`,`But-1-eno CH₂=CH−CH₂CH₃: el C1 tiene dos H → NO.`,`But-2-eno CH₃−CH=CH−CH₃: cada C tiene H y CH₃ → SÍ.`,`2-metilbut-2-eno (CH₃)₂C=CH−CH₃: el C2 tiene dos CH₃ → NO.`,`Pent-2-eno CH₃−CH=CH−CH₂CH₃: C2 (H y CH₃), C3 (H y C₂H₅) → SÍ.`],r:`Solo but-2-eno y pent-2-eno`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 9`,q:`Clasifique por grado de sustitución y ordene de menor a mayor estabilidad: 2,3-dimetilbut-2-eno, propeno, 2-metilbut-2-eno, but-2-eno.`,
 pide:`Contar los grupos R unidos a los carbonos del doble enlace.`,datos:[`Más R = más estable`],f:`—`,
 pasos:[`Propeno CH₃−CH=CH₂: 1 R → monosustituido.`,`But-2-eno CH₃−CH=CH−CH₃: 2 R → disustituido.`,`2-metilbut-2-eno (CH₃)₂C=CH−CH₃: 3 R → trisustituido.`,`2,3-dimetilbut-2-eno (CH₃)₂C=C(CH₃)₂: 4 R → tetrasustituido.`],r:`Propeno < but-2-eno < 2-metilbut-2-eno < 2,3-dimetilbut-2-eno`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 11`,q:`Complete: a) propeno + H₂ (Pd/C); b) propeno + Br₂; c) propeno + H₂O (H⁺); d) but-2-eno + H₂.`,
 pide:`Reacciones de adición al doble enlace.`,datos:[`Hidratación: OH al carbono interno (R−CH(OH)−CH₃)`],f:`Adición: se rompe el π`,
 pasos:[`a) CH₃−CH₂−CH₃, propano.`,`b) CH₃−CHBr−CH₂Br, 1,2-dibromopropano.`,`c) CH₃−CH(OH)−CH₃, propan-2-ol (como el patrón R−CH(OH)−CH₃ de la pág. 11).`,`d) CH₃−CH₂−CH₂−CH₃, butano.`],r:`a) propano; b) 1,2-dibromopropano; c) propan-2-ol; d) butano`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 12`,q:`Escriba la unidad que se repite en el polímero de: a) eteno; b) cloruro de vinilo; c) estireno. Nombre cada polímero.`,
 pide:`Aplicar n(CH₂=CH−R) → −[CH₂−CH(R)]ₙ−.`,datos:[`R = H, Cl o C₆H₅`],f:`n (CH₂=CH−R) → −[CH₂−CH(R)]ₙ−`,
 pasos:[`a) R = H: −[CH₂−CH₂]ₙ− → polietileno (PE).`,`b) R = Cl: −[CH₂−CHCl]ₙ− → PVC.`,`c) R = C₆H₅: −[CH₂−CH(C₆H₅)]ₙ− → poliestireno (PS).`],r:`PE, PVC y PS`},
{t:`t24`,src:`Aplicación de Tema 24, pág. 3 y Tema 25, pág. 10`,q:`¿Qué fórmula tiene un dieno de 5 carbonos? ¿Con qué familia es isómero?`,
 pide:`Cada doble enlace resta 2 H al alcano.`,datos:[`Pentano C₅H₁₂`],f:`2 dobles: CₙH₂ₙ₋₂`,
 pasos:[`Alcano de 5 C: C₅H₁₂.`,`Cada doble enlace resta 2 H; con dos: 12 − 4 = 8 → C₅H₈.`,`C₅H₈ es la misma fórmula que el pentino (CₙH₂ₙ₋₂).`,`Un dieno y un alquino con los mismos C son isómeros de función (como buta-1,3-dieno y but-1-ino, C₄H₆).`],r:`C₅H₈; isómero de función de los pentinos`},

{t:`t25`,src:`Tema 25, pág. 4 (ejemplo)`,q:`Nombre CH₃−CH(CH₃)−C≡C−CH₃ y escriba su fórmula.`,
 pide:`Numerar dando prioridad al triple enlace.`,datos:[`Cadena de 5 C`],f:`Prefijo + raíz + localizador + ino`,
 pasos:[`Cadena de 5 C con el triple enlace → pent-…-ino.`,`Desde la derecha, el triple enlace empieza en C2; desde la izquierda, en C3. Se numera desde la derecha.`,`El metilo queda en C4.`,`Nombre: 4-metilpent-2-ino.`,`6 C, CₙH₂ₙ₋₂ → C₆H₁₀.`],r:`4-metilpent-2-ino, C₆H₁₀`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 4 y 6`,q:`Nombre y clasifique (terminal o interno): a) HC≡C−CH₂−CH₃; b) CH₃−C≡C−CH₃; c) CH₃−CH₂−C≡C−CH₂−CH₃.`,
 pide:`Nombre y posición del triple enlace.`,datos:[`Terminal: triple en C1`],f:`—`,
 pasos:[`a) 4 C, triple en C1 → but-1-ino. Terminal. C₄H₆.`,`b) 4 C, triple en C2 → but-2-ino. Interno. C₄H₆.`,`c) 6 C, triple en C3 → hex-3-ino. Interno. C₆H₁₀.`],r:`but-1-ino (terminal); but-2-ino y hex-3-ino (internos)`},
{t:`t25`,src:`Tema 25, pág. 3 (estructura de la figura)`,q:`Nombre la molécula de la pág. 3: CH₃−CH₂−C(CH₃)(CH₂−CH₃)−C≡C−CH₃.`,
 pide:`Elegir la cadena más larga que contenga el triple enlace.`,datos:[`El carbono cuaternario tiene un metilo y dos etilos`],f:`—`,
 pasos:[`La cadena más larga con el triple: CH₃−C≡C−C−CH₂−CH₃ = 6 C → hex-…-ino.`,`Se numera desde el CH₃ junto al triple: el triple queda en C2.`,`En C4 quedan un metilo y un etilo.`,`Alfabético: 4-etil-4-metilhex-2-ino.`,`9 C, CₙH₂ₙ₋₂ → C₉H₁₆.`],r:`4-etil-4-metilhex-2-ino, C₉H₁₆`},
{t:`t25`,src:`Tema 25, pág. 2 (estructura numerada)`,q:`Nombre HC≡C−CH(CH₃)−CH₂−CH(CH₃)−CH₂−CH₂−C≡CH.`,
 pide:`Diino ramificado: empate en los triples, desempate con las ramas.`,datos:[`9 C en la cadena`,`Dos triples enlaces y dos metilos`],f:`-adiino`,
 pasos:[`Cadena de 9 C con los dos triples → nona-…-diino.`,`Desde ambos extremos los triples quedan en 1 y 8: empate.`,`Desempate por las ramas: desde la izquierda quedan en 3 y 5; desde la derecha, en 5 y 7. Gana la izquierda.`,`Nombre: 3,5-dimetilnona-1,8-diino.`,`11 C; diino CₙH₂ₙ₋₆ → C₁₁H₁₆.`],r:`3,5-dimetilnona-1,8-diino, C₁₁H₁₆`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 5`,q:`Nombre: a) HC≡C−CH=CH₂; b) CH₂=CH−C≡C−CH₃.`,
 pide:`Alqueninos y su regla de desempate.`,datos:[`-eno antes que -ino`,`Empate → el doble enlace recibe el número menor`],f:`—`,
 pasos:[`a) 4 C. Desde cualquier extremo las insaturaciones quedan en {1,3}: empate. El doble enlace recibe el 1 → but-1-en-3-ino.`,`b) 5 C. Desde la izquierda: doble en 1 y triple en 3 → {1,3}. Desde la derecha: triple en 2 y doble en 4 → {2,4}. Gana {1,3} → pent-1-en-3-ino.`],r:`a) but-1-en-3-ino; b) pent-1-en-3-ino`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 7`,q:`Calcule la fórmula de penta-1,4-diino y hexa-1,5-diino.`,
 pide:`Usar CₙH₂ₙ₋₆ para diinos.`,datos:[`n = 5 y n = 6`],f:`CₙH₂ₙ₋₆`,
 pasos:[`Penta-1,4-diino: 2(5) − 6 = 4 → C₅H₄ (HC≡C−CH₂−C≡CH: cuenta 1 + 2 + 1 = 4 H ✔).`,`Hexa-1,5-diino: 2(6) − 6 = 6 → C₆H₆.`],r:`C₅H₄ y C₆H₆`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 9`,q:`Complete: a) propino + 2 H₂ (Pd/C); b) propino + H₂O (H₂SO₄, HgSO₄); c) propino + NaH.`,
 pide:`Reacciones de los alquinos del material.`,datos:[`Hidratación → enol → cetona`],f:`—`,
 pasos:[`a) Hidrogenación completa: CH₃−CH₂−CH₃, propano.`,`b) Hidratación: enol que se reordena a CH₃−CO−CH₃, propanona (acetona).`,`c) Acidez del terminal: CH₃−C≡C:⁻ Na⁺ + H₂ (acetiluro de sodio).`],r:`a) propano; b) propanona; c) acetiluro + H₂`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 10`,q:`Escriba y nombre todos los alquinos de fórmula C₅H₈. Indique qué tipo de isomería hay entre ellos.`,
 pide:`Isomería de posición y de cadena.`,datos:[`5 C, un triple enlace`],f:`—`,
 pasos:[`Cadena lineal, triple en C1: HC≡C−CH₂−CH₂−CH₃ → pent-1-ino.`,`Cadena lineal, triple en C2: CH₃−C≡C−CH₂−CH₃ → pent-2-ino.`,`Cadena ramificada: HC≡C−CH(CH₃)−CH₃ → 3-metilbut-1-ino.`,`Pent-1-ino y pent-2-ino: posición. Pent-1-ino y 3-metilbut-1-ino: cadena.`],r:`pent-1-ino, pent-2-ino y 3-metilbut-1-ino`},
{t:`t25`,src:`Aplicación de Tema 22, pág. 15 y Tema 25, pág. 2`,q:`Compare etano, eteno y etino: fórmula, hibridación, ángulo y número de enlaces π.`,
 pide:`Relacionar el tipo de enlace con la estructura.`,datos:[`2 C cada uno`],f:`Sencillo sp³ · doble sp² · triple sp`,
 pasos:[`Etano CH₃−CH₃: C₂H₆, sp³, 109.5°, 0 π.`,`Eteno CH₂=CH₂: C₂H₄, sp², 120°, 1 π.`,`Etino HC≡CH: C₂H₂, sp, 180°, 2 π.`],r:`C₂H₆/sp³/109.5°/0π · C₂H₄/sp²/120°/1π · C₂H₂/sp/180°/2π`},
{t:`t25`,src:`Aplicación de Tema 25, pág. 9`,q:`Indique el estado físico a temperatura ambiente de: etino, hex-1-ino y hexadec-1-ino (C₁₆).`,
 pide:`Usar los rangos del material para alquinos.`,datos:[`Gases 2–4 C; líquidos 5–15; sólidos 16+`],f:`—`,
 pasos:[`Etino (2 C): gas, el acetileno de los sopletes.`,`Hex-1-ino (6 C): líquido.`,`Hexadec-1-ino (16 C): sólido.`],r:`gas, líquido y sólido`}
];

const FORM_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 3–14`,title:`Alquenos`,rows:[
 [`Fórmula`,`CₙH₂ₙ (un doble enlace)`],[`Estructura`,`sp² · trigonal plana · 120° · 1σ + 1π · sin rotación`],
 [`Nombre`,`Cadena con el C=C · número más bajo al doble enlace · empate → sustituyente · -eno, -dieno, -trieno`],
 [`Disposición`,`Conjugados (=−=) · aislados (=−−=) · acumulados (==)`],[`Sustitución`,`Mono < di < tri < tetra (estabilidad)`],
 [`Cis / trans`,`Cis: mismo lado (polar, menos estable) · trans: opuestos (más estable)`],
 [`Adiciones`,`+H₂ (Pd, Pt, Ni) → alcano · +Br₂ → dibromuro · +H₂O/H⁺ → alcohol`],[`Polímeros`,`Eteno → PE · cloruro de vinilo → PVC · estireno → PS`]]},
{t:`t25`,src:`Tema 25, pág. 2–10`,title:`Alquinos`,rows:[
 [`Fórmula`,`CₙH₂ₙ₋₂ · diinos CₙH₂ₙ₋₆`],[`Estructura`,`sp · lineal · 180° · 1σ + 2π · sin cis/trans`],
 [`Nombre`,`Triple con número más bajo (prioridad sobre ramas y halógenos) · -ino, -adiino · alquenino: -en-…-ino; empate → doble enlace menor`],
 [`Tipos`,`Terminal R−C≡C−H (ácido) · interno R−C≡C−R'`],[`Estados`,`Gases 2–4 C · líquidos 5–15 · sólidos 16+`],
 [`Reacciones`,`+2 H₂ → alcano · hidratación → enol → cetona · terminal + NaH → acetiluro`],[`Isomería`,`Posición · cadena · función (alquino ↔ dieno)`]]}
];

const FICHAS_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 3`,fig:`enlacePi`,f:`Estructura del doble enlace.`,b:`1 σ + 1 π; sp²; 120°; plano; no gira.`},
{t:`t24`,src:`Tema 24, pág. 5`,fig:null,f:`Regla de numeración de alquenos.`,b:`Número más bajo al doble enlace; si empata, al sustituyente.`},
{t:`t24`,src:`Tema 24, pág. 5`,fig:`ejemploPenteno`,f:`CH₃−CH=CH−CH(CH₃)−CH₃`,b:`4-metilpent-2-eno (C₆H₁₂).`},
{t:`t24`,src:`Tema 24, pág. 8`,fig:`dienos`,f:`Conjugado, aislado y acumulado.`,b:`Conjugado: =−= (buta-1,3-dieno). Aislado: =−−= (penta-1,4-dieno). Acumulado: == (propadieno).`},
{t:`t24`,src:`Tema 24, pág. 9`,fig:`sustitucion`,f:`¿Qué alqueno es más estable según la sustitución?`,b:`El tetrasustituido (R₂C=CR₂). Más R = más estable.`},
{t:`t24`,src:`Tema 24, pág. 9–10`,fig:`cisTrans`,f:`Cis frente a trans.`,b:`Cis: grupos del mismo lado, polar, menos estable. Trans: lados opuestos, más estable.`},
{t:`t24`,src:`Tema 24, pág. 10 · compl. [2]`,fig:null,f:`¿Por qué el propeno no tiene cis/trans?`,b:`Su C1 tiene dos H iguales; se necesitan dos grupos distintos en cada C del doble enlace.`},
{t:`t24`,src:`Tema 24, pág. 11`,fig:`adicionAlqueno`,f:`Alqueno + H₂O/H⁺ →`,b:`Alcohol (R−CH(OH)−CH₃).`},
{t:`t24`,src:`Tema 24, pág. 12`,fig:`polimero`,f:`Monómeros de PE, PVC y PS.`,b:`Eteno, cloruro de vinilo y estireno.`},
{t:`t24`,src:`Tema 24, pág. 13`,fig:`hidrogenacion`,f:`Catalizadores de la hidrogenación.`,b:`Paladio (Pd), platino (Pt) o níquel (Ni).`},
{t:`t24`,src:`Tema 24, pág. 13`,fig:null,f:`¿Por qué la margarina es sólida?`,b:`Porque se hidrogenan los dobles enlaces del aceite y sube su punto de fusión.`},
{t:`t25`,src:`Tema 25, pág. 2`,fig:`cilindroPi`,f:`Estructura del triple enlace.`,b:`1 σ + 2 π perpendiculares; sp; 180°; lineal.`},
{t:`t25`,src:`Tema 25, pág. 3`,fig:null,f:`¿Tienen cis/trans los alquinos?`,b:`No: son lineales y cada C del triple solo tiene un grupo.`},
{t:`t25`,src:`Tema 25, pág. 4`,fig:`ejemploPentino`,f:`CH₃−CH(CH₃)−C≡C−CH₃`,b:`4-metilpent-2-ino (C₆H₁₀).`},
{t:`t25`,src:`Tema 25, pág. 5`,fig:null,f:`HC≡C−CH₂−C≡CH`,b:`Penta-1,4-diino.`},
{t:`t25`,src:`Tema 25, pág. 5`,fig:`alquenino`,f:`Desempate en un alquenino.`,b:`Si doble y triple quedan a igual distancia, el doble enlace recibe el número menor (pent-1-en-4-ino).`},
{t:`t25`,src:`Tema 25, pág. 6`,fig:`terminalInterno`,f:`Alquino terminal frente a interno.`,b:`Terminal R−C≡C−H (en C1, ácido). Interno R−C≡C−R'.`},
{t:`t25`,src:`Tema 25, pág. 7`,fig:null,f:`Fórmula general de los diinos.`,b:`CₙH₂ₙ₋₆.`},
{t:`t25`,src:`Tema 25, pág. 9`,fig:null,f:`Estados de los alquinos.`,b:`Gases 2–4 C · líquidos 5–15 C · sólidos 16 C o más.`},
{t:`t25`,src:`Tema 25, pág. 9`,fig:`reaccAlquino`,f:`Hidratación de un alquino.`,b:`Forma un enol que pasa a cetona (propino → propanona).`},
{t:`t25`,src:`Tema 25, pág. 10`,fig:`isomerosAlquino`,f:`Tres tipos de isomería estructural.`,b:`Posición (mueve el triple), cadena (ramifica), función (cambia de familia).`}
];

const FQ_ORG2 = [
{t:`t24`,src:`Tema 24, pág. 5`,q:`"Nombra CH₃−CH₂−CH=CH−CH₃": ¿por dónde numeras?`,o:[`Desde la derecha, para dar el 2 al doble enlace`,`Desde la izquierda`,`Desde el carbono con más H`,`Da igual`],e:`Desde la derecha el doble enlace queda en C2 (pent-2-eno); desde la izquierda, en C3.`},
{t:`t24`,src:`Tema 24, pág. 9–10`,q:`"¿Este alqueno tiene isómeros cis/trans?" ¿Qué revisas?`,o:[`Que cada C del doble enlace tenga dos grupos distintos`,`Que tenga más de 4 C`,`Que sea terminal`,`Que tenga ramificaciones`],e:`Si un carbono del C=C tiene dos grupos iguales, no hay cis/trans.`},
{t:`t24`,src:`Tema 24, pág. 8`,q:`"CH₂=CH−CH=CH−CH₃": ¿qué tipo de dieno es?`,o:[`Conjugado (un sencillo entre los dobles)`,`Aislado`,`Acumulado`,`No es dieno`],e:`Penta-1,3-dieno: los dobles están separados por un solo enlace sencillo.`},
{t:`t25`,src:`Tema 25, pág. 4`,q:`"Una molécula tiene un triple enlace en un extremo y un metilo en el otro." ¿Desde dónde numeras?`,o:[`Desde el triple enlace`,`Desde el metilo`,`Por orden alfabético`,`Desde la izquierda siempre`],e:`El triple enlace siempre tiene prioridad sobre los sustituyentes.`},
{t:`t25`,src:`Tema 25, pág. 5`,q:`"Hay un doble y un triple enlace a la misma distancia de los extremos." ¿Qué regla aplicas?`,o:[`El doble enlace recibe el número más bajo`,`El triple recibe el número más bajo`,`Se numera por orden alfabético`,`No se puede nombrar`],e:`Desempate de alqueninos.`},
{t:`t25`,src:`Tema 25, pág. 10`,q:`"But-1-ino y buta-1,3-dieno": ¿qué isomería aplica?`,o:[`De función`,`De posición`,`De cadena`,`Cis/trans`],e:`Misma fórmula C₄H₆, distinta familia.`}
];

const VIDEOS_ORG2 = [
{t:`t24`,sub:`Hibridación sp²`,src:`Tema 24, pág. 3`,id:`9_JS-ulcuA0`,title:`Hibridación sp3, sp2 y sp en el carbono. Resumen`,ch:`Javier Valdés Gómez`,rep:[`Generalidades de los alquenos`,`Reactividad de los alquenos`]},
{t:`t24`,sub:`Nombrar alquenos paso a paso`,src:`Tema 24, pág. 4–5`,id:`7y12B4bdtLM`,title:`¿Cómo nombrar alquenos paso a paso?`,ch:`Al fin entendí`,rep:[`Nomenclatura IUPAC de alquenos`,`Conformación estructural de los alquenos`]},
{t:`t24`,sub:`Isomería cis-trans`,src:`Tema 24, pág. 9–10`,id:`NmpFruTOVtc`,title:`Cómo identificar isómeros cis-trans en alquenos`,ch:``,rep:[`Isomería geométrica: cis y trans`]},
{t:`t24`,sub:`Isómeros geométricos (cis, trans, Z y E)`,src:`Tema 24, pág. 9–10`,id:`tudB9n2Bvlo`,title:`Isómeros geométricos (cis, trans, Z y E)`,ch:``,rep:[`Isomería geométrica: cis y trans`]},
{t:`t24`,sub:`Dienos`,src:`Tema 24, pág. 6–8`,id:`dNDi1PCwYb4`,title:`Tema 11. Dienos`,ch:``,rep:[`Disposición de los dobles enlaces y posición`,`Clasificación por número de dobles enlaces`]},
{t:`t24`,sub:`Reacciones de adición`,src:`Tema 24, pág. 11 y 14`,id:`_vG2aIl3RDY`,title:`Reacciones de los alquenos y los alquinos: hidrogenación, halogenación, hidrohalogenación e hidratación`,ch:`Arriba la Ciencia`,rep:[`Propiedades y reacciones de adición`,`Reactividad de los alquenos`]},
{t:`t24`,sub:`Polimerización por adición`,src:`Tema 24, pág. 12`,id:`MQBu623YhJs`,title:`Reacciones de polimerización: polímeros de adición`,ch:``,rep:[`Polimerización`]},
{t:`t24`,sub:`Hidrogenación de grasas`,src:`Tema 24, pág. 13`,id:`nNSuQQ34CSs`,title:`Hidrogenación de las grasas insaturadas`,ch:``,rep:[`Hidrogenación de aceites`]},
{t:`t24`,sub:`Ácidos grasos cis y trans`,src:`Tema 24, pág. 13`,id:`YREDfs0xzk8`,title:`Ácidos grasos cis y trans`,ch:``,rep:[`Hidrogenación de aceites`]},
{t:`t25`,sub:`Hibridación sp`,src:`Tema 25, pág. 2–3`,id:`BVHhN1h7Zkw`,title:`Hibridación del carbono: sp3, sp2 y sp`,ch:`Sonia Ag`,rep:[`Generalidades de los alquinos`,`Conformación estructural de los alquinos`]},
{t:`t25`,sub:`Nomenclatura de alquinos`,src:`Tema 25, pág. 4`,id:`MkfkLK9PDmo`,title:`Nomenclatura de alquinos (muchos ejemplos)`,ch:``,rep:[`Nomenclatura IUPAC de alquinos`]},
{t:`t25`,sub:`Nomenclatura de alquinos (fácil)`,src:`Tema 25, pág. 4`,id:`TOJhD8f62no`,title:`Nomenclatura de alquinos (bien fácil)`,ch:``,rep:[`Nomenclatura IUPAC de alquinos`,`Serie de los alquinos`]},
{t:`t25`,sub:`Alquinos ramificados y diinos`,src:`Tema 25, pág. 4–5`,id:`yFbWWmJwnG4`,title:`Nomenclatura de alquinos: ramificados, con uno o más triples enlaces`,ch:``,rep:[`Casos especiales: diinos y alqueninos`]},
{t:`t25`,sub:`Alqueninos`,src:`Tema 25, pág. 5`,id:`aQIBobbzYA8`,title:`Nomenclatura de alqueninos`,ch:``,rep:[`Casos especiales: diinos y alqueninos`]},
{t:`t25`,sub:`Alquinos y alqueninos`,src:`Tema 25, pág. 4–5`,id:`pj76iwcsMl4`,title:`Alquinos y alqueninos`,ch:``,rep:[`Casos especiales: diinos y alqueninos`]},
{t:`t25`,sub:`Acidez de los alquinos terminales`,src:`Tema 25, pág. 6 y 9`,id:`jf6Rlvm5SRc`,title:`Hidrógeno ácido de los alquinos`,ch:``,rep:[`Reacciones de los alquinos`,`Clasificación de los alquinos`]},
{t:`t25`,sub:`Alquinos: teoría y reacciones`,src:`Tema 25, pág. 2–9`,id:`RJyOEALyrX0`,title:`Tema 10. Alquinos`,ch:``,rep:[`Reacciones de los alquinos`,`Propiedades físicas de los alquinos`]},
{t:`t25`,sub:`Isomería estructural`,src:`Tema 25, pág. 10`,id:`sjEkbM_H4tk`,title:`Isómeros estructurales: de cadena, de posición y de función`,ch:`Javier Valdés Gómez`,rep:[`Isomería estructural de los alquinos`]}
];

VIDEOS.push(...VIDEOS_ORG2);
