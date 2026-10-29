/* ======================= TEMAS 22 Y 23: HIDROCARBUROS Y ALCANOS ======================= */
const REPASO_ORG = [
{t:`t22`,src:`Tema 22, pág. 3–4`,title:`Química orgánica e hidrocarburos`,fig:null,
 body:`<p><b>Química orgánica:</b> es la química de los compuestos del carbono. El carbono forma enlaces fuertes consigo mismo y con muchos otros elementos, y puede armar <b>cadenas y anillos</b>. Esa variedad es la base de la vida; por eso "orgánico" significa "derivado de los organismos vivos".</p>
 <p>El material divide los compuestos orgánicos en tres clases: (1) hidrocarburos, (2) compuestos con oxígeno y (3) compuestos con nitrógeno.</p>
 <p><b>Hidrocarburos:</b> compuestos formados <b>solo por carbono e hidrógeno</b>. Las clases principales son alcanos, alquenos, alquinos e hidrocarburos aromáticos.</p>
 <p class="note">En el laboratorio clínico verás moléculas orgánicas todo el tiempo: glucosa, colesterol, urea, fármacos y colorantes como el carmín de la pág. 3.</p>`,
 memo:`Hidrocarburo = solo C y H. Si aparece O o N, ya no es hidrocarburo.`},
{t:`t22`,src:`Tema 22, pág. 5`,title:`Clasificación de los hidrocarburos`,fig:`clasifHC`,
 body:`<p>Se clasifican con tres criterios:</p>
 <ol><li><b>Forma de la cadena:</b> acíclicos (cadena abierta, lineal o ramificada, con extremos libres) o cíclicos (forman uno o varios anillos).</li>
 <li><b>Tipo de enlace (saturación):</b> <b>saturados</b>, solo enlaces sencillos C−C y el máximo de hidrógenos; <b>insaturados</b>, al menos un enlace doble (alquenos) o triple (alquinos), con menos hidrógenos.</li>
 <li><b>Aromaticidad:</b> <b>alifáticos</b> (alcanos, alquenos, alquinos y cicloalcanos) frente a <b>aromáticos</b>, que tienen anillos tipo benceno (C₆H₆) con electrones deslocalizados (resonancia) y una estabilidad especial.</li></ol>`,
 memo:`Alifáticos: acíclicos (alcanos, alquenos, alquinos) y alicíclicos (ciclos). Aromáticos: benceno.`},
{t:`t22`,src:`Tema 22, pág. 6`,title:`Estructura de los alifáticos: el esqueleto`,fig:`representaciones`,
 body:`<p>La estructura es un <b>esqueleto de carbonos</b> unidos por enlaces covalentes; las valencias que sobran se completan con hidrógenos. El carbono es <b>tetravalente</b>: siempre forma 4 enlaces.</p>
 <ul><li><b>Acíclicos (cadena abierta):</b> lineal, como el butano, o ramificada, como el isobutano.</li>
 <li><b>Alicíclicos (cadena cerrada):</b> anillos sin la deslocalización de los aromáticos. Ejemplo: ciclohexano, 6 carbonos con enlaces sencillos.</li></ul>
 <p>El objetivo de la pág. 2 pide representar las estructuras de cuatro maneras: <b>molecular</b> (C₄H₁₀), <b>semidesarrollada</b> (CH₃−CH₂−CH₂−CH₃), <b>desarrollada</b> (todos los enlaces dibujados) y <b>lineangular</b> (zigzag donde cada vértice y cada extremo es un carbono).</p>`,
 memo:`El carbono SIEMPRE forma 4 enlaces. Cuéntalos para revisar tus estructuras.`},
{t:`t22`,src:`Tema 22, pág. 7`,title:`Fórmulas generales`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Familia</th><th>Enlace</th><th>Fórmula general</th><th>Ejemplo</th></tr></thead><tbody>
 <tr><td>Alcanos (saturados)</td><td>Solo C−C</td><td>CₙH₂ₙ₊₂</td><td>CH₃−CH₃ (etano)</td></tr>
 <tr><td>Alquenos (insaturados)</td><td>Al menos un C=C</td><td>CₙH₂ₙ</td><td>CH₂=CH₂ (eteno)</td></tr>
 <tr><td>Alquinos (insaturados)</td><td>Al menos un C≡C</td><td>CₙH₂ₙ₋₂</td><td>HC≡CH (etino)</td></tr>
 <tr><td>Alicíclicos (cicloalcanos)</td><td>Anillo de 3 o más C</td><td>CₙH₂ₙ</td><td>ciclohexano C₆H₁₂</td></tr></tbody></table></div>
 <p><b>Truco:</b> cada enlace doble o cada anillo "quita" 2 hidrógenos respecto al alcano. Un triple quita 4.</p>
 <p class="note">En la pág. 7 aparece "etono"; se refiere al <b>etano</b>. Y fíjate que alquenos y cicloalcanos comparten la fórmula CₙH₂ₙ: C₄H₈ puede ser buteno o ciclobutano.</p>`,
 memo:`Alcano 2n+2 · Alqueno 2n · Alquino 2n−2 · Cicloalcano 2n.`},
{t:`t22`,src:`Tema 22, pág. 8–9`,title:`Nomenclatura: las tres partes del nombre`,fig:`partesNombre`,
 body:`<p>La <b>IUPAC</b> (Unión Internacional de Química Pura y Aplicada) fija las reglas para que, al leer un nombre, puedas dibujar la estructura exacta, y al revés. Ejemplo: "2-metilpropano" es una cadena de 3 carbonos con un metilo en el carbono 2.</p>
 <p class="fx">Prefijo (sustituyentes) + Raíz (número de carbonos) + Sufijo (tipo de enlace)</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>C</th><th>Raíz</th><th>C</th><th>Raíz</th></tr></thead><tbody>
 <tr><td>1</td><td>met-</td><td>6</td><td>hex-</td></tr><tr><td>2</td><td>et-</td><td>7</td><td>hept-</td></tr><tr><td>3</td><td>prop-</td><td>8</td><td>oct-</td></tr><tr><td>4</td><td>but-</td><td>9</td><td>non-*</td></tr><tr><td>5</td><td>pent-</td><td>10</td><td>dec-*</td></tr></tbody></table></div>
 <p><b>Sufijos:</b> <b>-ano</b>, solo enlaces sencillos; <b>-eno</b>, al menos un doble; <b>-ino</b>, al menos un triple.</p>
 <p><b>Prefijos:</b> las ramas (grupos alquilo) terminan en -il o -ilo y llevan delante el número del carbono donde están.</p>
 <p class="note">* Non- y dec- vienen de la tabla de n-alcanos del Tema 23, pág. 14; la tabla del Tema 22 llega hasta oct-.</p>`,
 memo:`Met, Et, Prop, But… "Mi Elefante Pide Bananas" para los cuatro primeros.`},
{t:`t22`,src:`Tema 22, pág. 10–11`,title:`Pasos para nombrar (ejemplo con doble enlace)`,fig:`ejemploAlqueno`,
 body:`<ol><li><b>Cadena principal:</b> la cadena continua más larga. Si hay dobles o triples enlaces, <b>debe incluirlos</b> aunque no sea la más larga.</li>
 <li><b>Numerar:</b> desde el extremo más cercano al doble o triple enlace (tiene prioridad); en un alcano, desde el más cercano a las ramas.</li>
 <li><b>Ramas:</b> se indica el número de carbono de cada una; si se repiten, se usa di-, tri-, tetra-.</li>
 <li><b>Ensamblar:</b> ramas en <b>orden alfabético</b> (sin contar di- ni tri-), números separados de letras por guiones y entre sí por comas; al final la raíz con la posición del doble o triple enlace.</li></ol>
 <p><b>Ejemplo del material:</b> CH₃−C(CH₃)=CH−CH(CH₂−CH₃)−CH₂−CH₃</p>
 <ul><li>Cadena de 6 carbonos con el doble enlace: <b>hex-</b> y <b>-eno</b>.</li><li>Se numera desde la izquierda: el doble enlace empieza en C2 → <b>hex-2-eno</b>.</li><li>Ramas: metilo en C2 y etilo en C4.</li><li>Alfabético: etil antes que metil → <b>4-etil-2-metilhex-2-eno</b> (C₉H₁₈).</li></ul>`,
 memo:`Doble/triple manda en la numeración. Ramas por abecedario: Etil antes que Metil.`},
{t:`t22`,src:`Tema 22, pág. 12`,title:`Alcanos: estructura y propiedades`,fig:`hibridacion`,
 body:`<p><b>Estructura:</b> todos sus carbonos tienen hibridación <b>sp³</b>, geometría <b>tetraédrica</b> (≈109.5°) y solo enlaces sencillos σ (sigma) C−C y C−H, por eso tienen <b>libre rotación</b>.</p>
 <p><b>Físicas:</b> apolares, insolubles en agua, puntos de ebullición y fusión bajos. Gases de C1 a C4, líquidos de C5 a C17, sólidos de C18 en adelante.</p>
 <p><b>Químicas:</b> poca reactividad (por eso se llaman "parafinas"). Sus reacciones principales son la <b>combustión</b> y la <b>halogenación radicalaria</b>: con Cl₂ o Br₂ en presencia de luz UV (hν) o calor, un H se <b>sustituye</b> por el halógeno.</p>`,
 memo:`Alcano: sp³, 109.5°, sigma, gira libre, poco reactivo, reacción de SUSTITUCIÓN.`},
{t:`t22`,src:`Tema 22, pág. 13`,title:`Alquenos: estructura y propiedades`,fig:`hibridacion`,
 body:`<p><b>Estructura:</b> los carbonos del doble enlace tienen hibridación <b>sp²</b> y geometría <b>trigonal plana</b> (≈120°). El doble enlace = 1 σ + 1 π (pi). El enlace π <b>impide la libre rotación</b>, y por eso existe la isomería geométrica <b>cis/trans</b>.</p>
 <p><b>Físicas:</b> parecidas a los alcanos, ligeramente más polares por los electrones π; insolubles en agua; puntos de ebullición muy similares a los alcanos del mismo número de carbonos. Los cis suelen hervir un poco más alto que los trans.</p>
 <p><b>Químicas:</b> alta reactividad. Reacción característica: <b>adición electrófila</b>; el enlace π se rompe para formar dos σ nuevos.</p>
 <ul><li>Hidrogenación: alqueno + H₂ (catalizador) → alcano</li><li>Halogenación: alqueno + Br₂ → dihalogenuro adyacente</li><li>Hidratación: alqueno + H₂O/H⁺ → alcohol</li><li>Y polimerización.</li></ul>`,
 memo:`Alqueno: sp², 120°, plano, NO gira (cis/trans), reacción de ADICIÓN.`},
{t:`t22`,src:`Tema 22, pág. 14`,title:`Alquinos: estructura y propiedades`,fig:`hibridacion`,
 body:`<p><b>Estructura:</b> los carbonos del triple enlace tienen hibridación <b>sp</b> y geometría <b>lineal</b> (180°). El triple enlace = 1 σ + 2 π perpendiculares entre sí.</p>
 <p><b>Físicas:</b> levemente más polares que los alquenos; puntos de ebullición ligeramente superiores a alcanos y alquenos de masa parecida, porque al ser lineales se empaquetan mejor.</p>
 <p><b>Químicas:</b> muy alta reactividad. Los alquinos terminales (triple enlace en el extremo) tienen <b>acidez</b>: pueden donar un protón. La hidratación u oximercuración forma compuestos carbonílicos (cetonas o aldehídos).</p>
 <p class="note">Ojo con la pág. 14: el compuesto CH₃CH₂−CH=CH−C≡CH aparece como "Hex-3-en-2-ino", pero según la numeración del propio dibujo el triple enlace está entre C1 y C2, así que el localizador sería 1: <b>hex-3-en-1-ino</b>. Consulta con el docente cuál espera en el examen.</p>`,
 memo:`Alquino: sp, 180°, lineal, 2 enlaces π, terminales con acidez.`},
{t:`t22`,src:`Tema 22, pág. 15`,title:`Tabla comparativa: alcanos, alquenos y alquinos`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Propiedad</th><th>Alcanos</th><th>Alquenos</th><th>Alquinos</th></tr></thead><tbody>
 <tr><th>Enlace</th><td>C−C sencillo</td><td>C=C doble</td><td>C≡C triple</td></tr>
 <tr><th>Geometría</th><td>Tetraédrica (109.5°)</td><td>Trigonal plana (120°)</td><td>Lineal (180°)</td></tr>
 <tr><th>Hibridación</th><td>sp³</td><td>sp²</td><td>sp</td></tr>
 <tr><th>Reactividad</th><td>Muy baja (parafinas)</td><td>Alta (enlaces π)</td><td>Alta (dos π y acidez terminal)</td></tr>
 <tr><th>Reacción principal</th><td>Sustitución radicalaria</td><td>Adición electrófila</td><td>Adición electrófila y sustitución ácida</td></tr></tbody></table></div>
 <p><b>Regla para recordar:</b> el exponente de "sp" baja cuando sube el número de enlaces: sencillo sp³, doble sp², triple sp. Y el ángulo se abre: 109.5° → 120° → 180°.</p>`,
 memo:`1 enlace → sp³ · 2 → sp² · 3 → sp. Ángulos 109.5 · 120 · 180.`},

{t:`t23`,src:`Tema 23, pág. 3`,title:`Generalidades de los alcanos`,fig:`hibridacion`,
 body:`<ul><li>Hidrocarburos con <b>solo enlaces covalentes sencillos</b>: los compuestos orgánicos más sencillos.</li>
 <li>Carbono con hibridación <b>sp³</b> (1 orbital 2s + 3 orbitales 2p), enlaces σ con <b>rotación libre</b>, disposición <b>tetraédrica</b> de <b>109.5°</b>.</li>
 <li><b>No tienen grupos funcionales reactivos.</b> Son ácidos y bases muy débiles, electrófilos y nucleófilos débiles.</li>
 <li>Reaccionan en condiciones extremas (craqueo térmico, combustión a alta temperatura), pero son mucho menos reactivos que los compuestos con grupos funcionales.</li></ul>`,
 memo:`Alcanos = saturados, sp³, 109.5°, sin grupo funcional, poco reactivos.`},
{t:`t23`,src:`Tema 23, pág. 4`,title:`Radicales (grupos) alquilo`,fig:null,
 body:`<p>Fragmentos que resultan de <b>quitarle un H a un alcano</b>. Quedan con un enlace libre, así que no existen solos: siempre van unidos a una cadena como <b>ramas</b>. Fórmula general <b>CₙH₂ₙ₊₁−</b> (un H menos que el alcano) y se simbolizan con <b>R−</b>.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Nombre IUPAC</th><th>Estructura</th><th>Nombre común (complementario [2])</th></tr></thead><tbody>
 <tr><td>Metil</td><td>−CH₃</td><td></td></tr><tr><td>Etil</td><td>−CH₂−CH₃</td><td></td></tr><tr><td>Propil</td><td>−CH₂−CH₂−CH₃</td><td></td></tr>
 <tr><td>1-metiletil</td><td>−CH(CH₃)₂</td><td>isopropil</td></tr><tr><td>Butil</td><td>−CH₂−CH₂−CH₂−CH₃</td><td></td></tr>
 <tr><td>1-metilpropil</td><td>−CH(CH₃)−CH₂−CH₃</td><td>sec-butil</td></tr><tr><td>2-metilpropil</td><td>−CH₂−CH(CH₃)₂</td><td>isobutil</td></tr>
 <tr><td>1,1-dimetiletil</td><td>−C(CH₃)₃</td><td>terc-butil</td></tr><tr><td>Pentil</td><td>−CH₂−(CH₂)₃−CH₃</td><td></td></tr>
 <tr><td>3-metilbutil</td><td>−CH₂−CH₂−CH(CH₃)₂</td><td>isopentil</td></tr><tr><td>2,2-dimetilpropil</td><td>−CH₂−C(CH₃)₃</td><td>neopentil</td></tr></tbody></table></div>
 <p><b>Cómo leer el nombre sistemático:</b> el carbono 1 es el que se une a la cadena principal. "1-metiletil" = un etilo unido por su C1 que además lleva un metilo en ese mismo C1.</p>`,
 memo:`Alcano − 1 H = alquilo (−ano → −ilo). CH₄ → metilo; C₂H₆ → etilo.`},
{t:`t23`,src:`Tema 23, pág. 5`,title:`Conformaciones del etano`,fig:`newman`,
 body:`<p><b>Conformación:</b> las distintas posiciones que adoptan los átomos al <b>girar</b> alrededor del enlace sencillo C−C.</p>
 <p>Los <b>confórmeros</b> (isómeros conformacionales) son <b>la misma molécula</b> en distintas posturas que se convierten entre sí <b>sin romper enlaces</b>. Los isómeros, en cambio, son compuestos distintos.</p>
 <ul><li><b>Eclipsada (0°):</b> los C−H de adelante quedan justo enfrente de los de atrás. <b>Menos estable</b>, por la repulsión entre los electrones de los enlaces.</li>
 <li><b>Alternada o escalonada (60°):</b> los C−H de adelante quedan en medio de los de atrás. <b>Más estable</b>, porque minimiza la repulsión.</li></ul>
 <p>Para dibujarlas se usan la <b>proyección de Newman</b> (se mira la molécula de frente a lo largo del enlace C−C) y la de <b>caballete</b>.</p>`,
 memo:`Eclipsada = enfrentados = inestable. Alternada = intercalados = estable.`},
{t:`t23`,src:`Tema 23, pág. 6`,title:`Conformaciones del butano`,fig:`butanoConf`,
 body:`<p>Se gira el enlace central C2−C3 y hay que mirar dónde quedan los dos <b>metilos</b> (−CH₃), que son grandes.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Conformación</th><th>Ángulo entre CH₃</th><th>Estabilidad</th></tr></thead><tbody>
 <tr><td><b>Anti</b></td><td>180°</td><td>La <b>más estable</b>: metilos lo más alejados, cero tensión</td></tr>
 <tr><td><b>Gauche</b> (sesgada)</td><td>60°</td><td>Estable: alternada pero con los metilos cerca</td></tr>
 <tr><td><b>Eclipsada relativa</b></td><td>120°</td><td>Cierta tensión: los C−H eclipsan a los C−CH₃</td></tr>
 <tr><td><b>Totalmente eclipsada</b></td><td>0°</td><td>La <b>menos estable</b>: los dos CH₃ enfrentados</td></tr></tbody></table></div>`,
 memo:`Anti > Gauche > Eclipsada 120° > Totalmente eclipsada.`},
{t:`t23`,src:`Tema 23, pág. 7`,title:`Conformaciones de los cicloalcanos`,fig:`sillaBote`,
 body:`<p>En un anillo no hay rotación libre, pero el anillo <b>se pliega en 3D</b> para liberar tensión angular y torsional.</p>
 <ul><li><b>Silla:</b> la conformación más estable del ciclohexano, con ángulos tetraédricos de 109°. Sus H pueden estar en posición <b>ecuatorial</b> (horizontal) o <b>axial</b> (vertical).</li>
 <li><b>Bote:</b> forma intermedia y <b>menos estable</b>: eclipsa varios enlaces y los dos H del "mástil" se estorban (interacción estérica).</li></ul>`,
 memo:`Ciclohexano: SILLA estable, BOTE inestable (H del mástil chocan).`},
{t:`t23`,src:`Tema 23, pág. 8`,title:`Nomenclatura IUPAC de alcanos: reglas`,fig:null,
 body:`<p class="fx">Prefijo (sustituyentes) + Raíz (cadena principal) + Sufijo "-ano"</p>
 <ol><li><b>Cadena principal:</b> la de más carbonos. Si hay dos iguales, la que tenga <b>más ramificaciones</b>.</li>
 <li><b>Numerar</b> desde el extremo que dé los <b>números más bajos</b> a los sustituyentes en el primer punto de diferencia. Si hay empate, decide el <b>orden alfabético</b>.</li>
 <li><b>Nombrar los sustituyentes:</b> el alcano cambia -ano por -ilo (−CH₃ metilo, −CH₂CH₃ etilo).</li>
 <li><b>Sustituyentes iguales:</b> di-, tri-, tetra- (dimetil). <b>Cada uno lleva su número:</b> 2,2-dimetil, no "2-dimetil".</li></ol>
 <p><b>Error típico:</b> tomar la cadena "que se ve recta" en el dibujo. La cadena principal puede doblar hacia una rama; cuenta los carbonos por todos los caminos.</p>`,
 memo:`Más larga → números más bajos → abecedario. Un número por cada rama.`},
{t:`t23`,src:`Tema 23, pág. 9`,title:`Ejemplo resuelto: 3-etil-2-metilhexano`,fig:`ejemploAlcano`,
 body:`<p class="fx">CH₃−CH(CH₃)−CH(CH₂CH₃)−CH₂−CH₂−CH₃</p>
 <ol><li>Cadena principal: <b>6 carbonos</b> → hex-.</li>
 <li>Se numera de izquierda a derecha, el extremo más cercano a una rama.</li>
 <li>Sustituyentes: <b>metilo en C2</b> y <b>etilo en C3</b>.</li>
 <li>Orden alfabético: <b>e</b>til antes que <b>m</b>etil.</li>
 <li>Nombre: <b>3-etil-2-metilhexano</b> (C₉H₂₀).</li></ol>
 <p>Comprobación: desde la derecha los números serían 4 y 5; desde la izquierda, 2 y 3, más bajos. Gana la izquierda.</p>
 <p class="note">La pág. 9 menciona el prefijo "iso" para algunos isómeros. Es nomenclatura común (isobutano, isopentano), no IUPAC sistemática.</p>`,
 memo:`Fórmula del nombre: 6 + 1 + 2 = 9 C → C₉H₂₀ (2·9+2).`},
{t:`t23`,src:`Tema 23, pág. 10`,title:`Nomenclatura de cicloalcanos`,fig:`cicloalcanos`,
 body:`<ol><li>Prefijo <b>ciclo-</b> + raíz según el tamaño del anillo: ciclopentano.</li>
 <li>Con <b>un solo sustituyente</b> no se pone número: <b>metilciclopentano</b>.</li>
 <li>Con dos o más, se numera el anillo dando las posiciones más bajas y siguiendo el orden alfabético.</li></ol>
 <p><b>Ejemplo del material:</b> ciclopentano con etilo y metilo en carbonos vecinos → <b>1-etil-2-metilciclopentano</b> (C₈H₁₆). El etilo recibe el 1 porque va primero en el abecedario.</p>`,
 memo:`Un sustituyente: sin número. Dos: el primero del abecedario lleva el 1.`},
{t:`t23`,src:`Tema 23, pág. 11`,title:`Nomenclatura común (no IUPAC)`,fig:null,
 body:`<p>Nombres triviales que vienen del uso histórico. No describen bien las moléculas ni los isómeros, y el problema crece con moléculas grandes. Aun así se usan en la vida diaria, la industria del petróleo, la medicina y la farmacia, y la IUPAC acepta muchos.</p>
 <ul><li><b>Alcohol isopropílico</b> = 2-propanol.</li><li><b>Ácido acético</b> (del latín <i>acetum</i>, vinagre) = ácido etanoico, CH₃COOH.</li><li><b>Morfina</b> (de Morfeo, dios de los sueños).</li></ul>`,
 memo:`Isopropílico = 2-propanol. Acético = etanoico.`},
{t:`t23`,src:`Tema 23, pág. 12–13`,title:`Clasificación: por cadena y por tipo de carbono`,fig:`tiposCarbono`,
 body:`<p><b>Por la cadena:</b> lineales o normales (n-alcanos, sin ramas: pentano); ramificados (con cadenas laterales: 2-metilbutano); cíclicos o cicloalcanos (en anillo, CₙH₂ₙ: ciclopentano).</p>
 <p><b>Por el tipo de carbono</b> (cuántos carbonos tiene unidos):</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Unido a</th><th>Ejemplo del material</th></tr></thead><tbody>
 <tr><td>Primario (1°)</td><td>1 carbono</td><td>Extremos del propano</td></tr><tr><td>Secundario (2°)</td><td>2 carbonos</td><td>Centro del propano</td></tr>
 <tr><td>Terciario (3°)</td><td>3 carbonos</td><td>Centro del isobutano (2-metilpropano)</td></tr><tr><td>Cuaternario (4°)</td><td>4 carbonos</td><td>Centro del neopentano (2,2-dimetilpropano)</td></tr></tbody></table></div>
 <p>Atajo: un CH₃ casi siempre es primario; CH₂, secundario; CH, terciario; C sin H, cuaternario.</p>`,
 memo:`Cuenta los C vecinos, no los H. CH₃=1° · CH₂=2° · CH=3° · C=4°.`},
{t:`t23`,src:`Tema 23, pág. 14–16`,title:`n-alcanos, ramificados y cíclicos`,fig:`pebAlcanos`,
 body:`<p><b>n-alcanos (pág. 14):</b> al aumentar los carbonos aumenta el punto de ebullición: metano −164 °C, butano 0 °C, pentano 36 °C, octano 126 °C, decano 174 °C. Todos tienen densidad menor de 1 (flotan en el agua).</p>
 <p><b>Ramificados (pág. 15):</b></p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Común</th><th>IUPAC</th><th>Fórmula</th><th>Dato clave</th></tr></thead><tbody>
 <tr><td>Isobutano</td><td>2-metilpropano</td><td>C₄H₁₀</td><td>El ramificado más simple; tiene un C terciario</td></tr>
 <tr><td>Isopentano</td><td>2-metilbutano</td><td>C₅H₁₂</td><td>Hierve a 28 °C (menos que el n-pentano)</td></tr>
 <tr><td>Neopentano</td><td>2,2-dimetilpropano</td><td>C₅H₁₂</td><td>C cuaternario central; esférico; hierve a 9.5 °C</td></tr>
 <tr><td>Isohexano</td><td>2-metilpentano</td><td>C₆H₁₄</td><td>Isómero del hexano</td></tr>
 <tr><td>Isooctano</td><td>2,2,4-trimetilpentano</td><td>C₈H₁₈</td><td>Gasolina: referencia de 100 octanos</td></tr></tbody></table></div>
 <p><b>Cíclicos (pág. 16):</b> ciclopropano C₃H₆ (60°), ciclobutano C₄H₈ (88°), ciclopentano C₅H₁₀ (108°), ciclohexano C₆H₁₂ (109.5°), cicloheptano C₇H₁₄ (~109°). Cuanto más lejos de 109.5°, más tensión.</p>`,
 memo:`Más carbonos = hierve más alto. Más ramas = hierve más bajo.`},
{t:`t23`,src:`Tema 23, pág. 17`,title:`Propiedades de los alcanos`,fig:`combustion`,
 body:`<p><b>Físicas:</b> apolares; insolubles en agua; punto de ebullición mayor a mayor número de carbonos y menor a mayor ramificación; gases C1–C4, líquidos C5–C17, sólidos C18 en adelante; menos densos que el agua; incoloros e inodoros; no conducen la electricidad.</p>
 <p><b>Químicas:</b> poca reactividad, porque los enlaces C−C y C−H son muy fuertes y no hay zonas con exceso o falta de electrones. Reacciones principales:</p>
 <ul><li><b>Combustión:</b> con O₂, liberan calor. CH₄ + 2 O₂ → CO₂ + 2 H₂O + energía.</li>
 <li><b>Halogenación por radicales libres:</b> CH₄ + Cl₂ → CH₃Cl + HCl (un H se sustituye por Cl).</li>
 <li>Pueden formar isómeros.</li></ul>`,
 memo:`Combustión → CO₂ + H₂O + energía. Halogenación → sustituye H por Cl o Br.`},
{t:`t23`,src:`Tema 23, pág. 18–19`,title:`Isomería estructural (de cadena)`,fig:`isomerosC5`,
 body:`<p>Compuestos con la <b>misma fórmula molecular</b> pero con los átomos <b>conectados de forma distinta</b>. En los alcanos es isomería de cadena: cambia el esqueleto (lineal o ramificado).</p>
 <ul><li><b>Metano, etano y propano:</b> no tienen isómeros (solo hay una forma de unir sus carbonos).</li>
 <li><b>Butano C₄H₁₀:</b> 2 isómeros: n-butano e isobutano (metilpropano).</li>
 <li><b>Pentano C₅H₁₂:</b> 3 isómeros: n-pentano, isopentano (metilbutano) y neopentano (2,2-dimetilpropano).</li></ul>
 <div class="scroll"><table class="tbl"><thead><tr><th>Alcano</th><th>Hexano</th><th>Heptano</th><th>Octano</th><th>Nonano</th><th>Decano</th></tr></thead><tbody><tr><th>Isómeros</th><td>5</td><td>9</td><td>18</td><td>35</td><td>75</td></tr></tbody></table></div>
 <p><b>No confundas:</b> los isómeros son compuestos distintos (romper y rehacer enlaces); los confórmeros son la misma molécula girada.</p>`,
 memo:`C4: 2 · C5: 3 · C6: 5 · C7: 9 · C8: 18 · C9: 35 · C10: 75.`},
{t:`t23`,src:`Tema 23, pág. 20`,title:`Relevancia clínica de los alcanos`,fig:null,
 body:`<ol><li><b>Toxicología:</b> los alcanos de cadena corta (C1 a C8) son muy lipofílicos y cruzan fácilmente la <b>barrera hematoencefálica</b> (riesgo en inhalación de solventes y combustibles).</li>
 <li><b>Farmacología:</b> el <b>halotano</b> (2-bromo-2-cloro-1,1,1-trifluoroetano), un alcano halogenado, se usó como anestésico general inhalado.</li>
 <li><b>Dermatología y terapéutica:</b> <b>vaselina</b> (petrolato) para la piel y <b>aceite mineral</b> como laxante.</li>
 <li><b>Diagnóstico:</b> los lípidos dañados por radicales libres liberan <b>etano y pentano</b>, que se exhalan: son <b>biomarcadores de estrés oxidativo</b>.</li></ol>`,
 memo:`Tóxicos (cruzan al cerebro) · Halotano · Vaselina/aceite mineral · Etano y pentano en aliento.`}
];

const MCQ_ORG = [
{t:`t22`,src:`Tema 22, pág. 3`,q:`La química orgánica estudia principalmente:`,o:[`Los compuestos del carbono`,`Solo los compuestos de los seres vivos`,`Los metales y sus sales`,`Los gases nobles`],e:`Es la química de los compuestos del carbono. "Orgánico" significa originalmente "derivado de organismos vivos", pero hoy abarca todos los compuestos del carbono.`},
{t:`t22`,src:`Tema 22, pág. 4`,q:`Un hidrocarburo está formado por:`,o:[`Solo carbono e hidrógeno`,`Carbono, hidrógeno y oxígeno`,`Carbono y nitrógeno`,`Hidrógeno y oxígeno`],e:`Hidrocarburo = solo C y H.`},
{t:`t22`,src:`Tema 22, pág. 4`,q:`¿Cuál NO es una clase principal de hidrocarburo según el material?`,o:[`Alcoholes`,`Alcanos`,`Alquinos`,`Aromáticos`],e:`Los alcoholes tienen oxígeno. Las clases de hidrocarburos son alcanos, alquenos, alquinos y aromáticos.`},
{t:`t22`,src:`Tema 22, pág. 5`,q:`Un hidrocarburo saturado es el que tiene:`,o:[`Solo enlaces sencillos C−C y el máximo de hidrógenos`,`Al menos un enlace doble`,`Al menos un enlace triple`,`Un anillo de benceno`],e:`Saturado = solo enlaces sencillos; los insaturados tienen dobles o triples y menos H.`},
{t:`t22`,src:`Tema 22, pág. 5`,q:`Los hidrocarburos aromáticos se caracterizan por:`,o:[`Anillos tipo benceno con electrones deslocalizados (resonancia)`,`Tener solo cadenas abiertas`,`Tener siempre olor agradable`,`Tener solo enlaces sencillos`],e:`Aromático = anillo bencénico con resonancia y estabilidad especial. El nombre no tiene que ver con el olor.`},
{t:`t22`,src:`Tema 22, pág. 5`,q:`El ciclohexano se clasifica como:`,o:[`Alifático alicíclico (cicloalcano)`,`Aromático monocíclico`,`Alifático acíclico`,`Alquino`],e:`Es un anillo con enlaces sencillos, sin resonancia: cicloalcano, dentro de los alifáticos alicíclicos.`},
{t:`t22`,src:`Tema 22, pág. 6`,q:`¿Cuántos enlaces forma siempre el carbono?`,o:[`4`,`2`,`3`,`6`],e:`El carbono es tetravalente.`},
{t:`t22`,src:`Tema 22, pág. 6`,q:`El isobutano es un ejemplo de cadena:`,o:[`Acíclica ramificada`,`Acíclica lineal`,`Cíclica`,`Aromática`],e:`Butano = lineal; isobutano = ramificado; ciclohexano = cíclico.`},
{t:`t22`,src:`Tema 22, pág. 7`,q:`La fórmula general de los alcanos es:`,o:[`CₙH₂ₙ₊₂`,`CₙH₂ₙ`,`CₙH₂ₙ₋₂`,`CₙHₙ`],e:`Alcanos CₙH₂ₙ₊₂; alquenos y cicloalcanos CₙH₂ₙ; alquinos CₙH₂ₙ₋₂.`},
{t:`t22`,src:`Tema 22, pág. 7`,q:`Un hidrocarburo de fórmula C₅H₈ (de cadena abierta) es probablemente un:`,o:[`Alquino`,`Alcano`,`Alqueno`,`Cicloalcano`],e:`Con n = 5: alcano C₅H₁₂, alqueno C₅H₁₀, alquino C₅H₈ (2n−2 = 8).`},
{t:`t22`,src:`Tema 22, pág. 7`,q:`¿Qué dos familias comparten la fórmula general CₙH₂ₙ?`,o:[`Alquenos y cicloalcanos`,`Alcanos y alquinos`,`Alquinos y aromáticos`,`Alcanos y alquenos`],e:`Tanto un doble enlace como un anillo quitan 2 H respecto al alcano. C₄H₈ puede ser buteno o ciclobutano.`},
{t:`t22`,src:`Tema 22, pág. 8`,q:`¿Qué organismo establece las reglas internacionales de nomenclatura química?`,o:[`La IUPAC`,`La OMS`,`La FDA`,`La NASA`],e:`IUPAC: Unión Internacional de Química Pura y Aplicada.`},
{t:`t22`,src:`Tema 22, pág. 9`,q:`La raíz "hex-" indica una cadena principal de:`,o:[`6 carbonos`,`5 carbonos`,`7 carbonos`,`8 carbonos`],e:`Met 1, et 2, prop 3, but 4, pent 5, hex 6, hept 7, oct 8.`},
{t:`t22`,src:`Tema 22, pág. 9`,q:`El sufijo "-ino" indica:`,o:[`Al menos un enlace triple`,`Solo enlaces sencillos`,`Al menos un enlace doble`,`Un anillo`],e:`-ano sencillos; -eno doble; -ino triple.`},
{t:`t22`,src:`Tema 22, pág. 10`,q:`En un alqueno, la cadena principal debe:`,o:[`Incluir el doble enlace, aunque no sea la más larga`,`Ser siempre la más larga, aunque no tenga el doble enlace`,`Tener la mayor cantidad de ramas`,`Empezar en el carbono más ramificado`],e:`El enlace múltiple tiene prioridad: la cadena principal debe contenerlo.`},
{t:`t22`,src:`Tema 22, pág. 10`,q:`Al ensamblar el nombre, las ramificaciones se escriben:`,o:[`En orden alfabético, sin contar di- ni tri-`,`De la más grande a la más pequeña`,`En el orden en que aparecen en la cadena`,`Por número de carbono`],e:`Orden alfabético ignorando los multiplicadores. "Etil" va antes que "dimetil".`},
{t:`t22`,src:`Tema 22, pág. 10–11`,q:`¿Cuál es el nombre correcto de CH₃−C(CH₃)=CH−CH(CH₂−CH₃)−CH₂−CH₃?`,o:[`4-etil-2-metilhex-2-eno`,`2-metil-4-etilhex-2-eno`,`3-etil-5-metilhex-4-eno`,`4-etil-2-metilhexano`],e:`Cadena de 6 C con el doble enlace en C2; metilo en C2 y etilo en C4; etil antes que metil.`},
{t:`t22`,src:`Tema 22, pág. 12`,q:`Los carbonos de un alcano tienen hibridación:`,o:[`sp³`,`sp²`,`sp`,`sp⁴`],e:`Alcanos sp³, tetraédricos, 109.5°.`},
{t:`t22`,src:`Tema 22, pág. 12`,q:`¿Por qué a los alcanos se les llama "parafinas"?`,o:[`Por su poca reactividad`,`Porque son muy reactivos`,`Porque son aromáticos`,`Porque son solubles en agua`],e:`Parafina viene de "poca afinidad": reaccionan poco.`},
{t:`t22`,src:`Tema 22, pág. 12`,q:`La halogenación de los alcanos ocurre:`,o:[`Por sustitución radicalaria, con luz UV o calor`,`Por adición electrófila, sin luz`,`Solo en medio ácido`,`Por eliminación de agua`],e:`Un H se sustituye por Cl o Br en presencia de luz (hν) o calor.`},
{t:`t22`,src:`Tema 22, pág. 13`,q:`Los carbonos del doble enlace de un alqueno tienen:`,o:[`Hibridación sp² y geometría trigonal plana (120°)`,`Hibridación sp³ y geometría tetraédrica`,`Hibridación sp y geometría lineal`,`Hibridación sp² y geometría lineal`],e:`Doble enlace = sp², 120°, plano.`},
{t:`t22`,src:`Tema 22, pág. 13`,q:`La isomería cis/trans existe en los alquenos porque:`,o:[`El enlace π impide la libre rotación`,`Tienen libre rotación`,`Son aromáticos`,`Tienen hibridación sp³`],e:`El enlace pi "traba" el doble enlace; los grupos no pueden girar y quedan del mismo lado (cis) o en lados opuestos (trans).`},
{t:`t22`,src:`Tema 22, pág. 13`,q:`La reacción característica de los alquenos es la:`,o:[`Adición electrófila`,`Sustitución radicalaria`,`Combustión exclusivamente`,`Neutralización`],e:`El enlace π se rompe y se forman dos enlaces σ nuevos: adición.`},
{t:`t22`,src:`Tema 22, pág. 13`,q:`Alqueno + H₂O en medio ácido (H⁺) produce:`,o:[`Un alcohol`,`Un alcano`,`Un dihalogenuro`,`Un alquino`],e:`Hidratación → alcohol. Hidrogenación (H₂) → alcano. Br₂ → dihalogenuro.`},
{t:`t22`,src:`Tema 22, pág. 14`,q:`Un enlace triple está formado por:`,o:[`1 enlace σ y 2 enlaces π`,`3 enlaces σ`,`2 enlaces σ y 1 enlace π`,`3 enlaces π`],e:`Triple = 1 sigma + 2 pi perpendiculares.`},
{t:`t22`,src:`Tema 22, pág. 14`,q:`¿Por qué los alquinos hierven ligeramente más alto que alcanos y alquenos de masa parecida?`,o:[`Porque su forma lineal permite un mejor empaquetamiento`,`Porque son iónicos`,`Porque forman puentes de hidrógeno con el agua`,`Porque son aromáticos`],e:`Lineales (180°): se acomodan mejor entre sí y hace falta más energía para separarlos.`},
{t:`t22`,src:`Tema 22, pág. 14–15`,q:`Una propiedad química exclusiva de los alquinos terminales es:`,o:[`Su acidez: pueden donar un protón`,`Su nula reactividad`,`La sustitución radicalaria con luz`,`Su isomería cis/trans`],e:`El H del carbono del triple enlace terminal es ácido.`},
{t:`t22`,src:`Tema 22, pág. 15`,q:`Relacione correctamente enlace, hibridación y ángulo:`,o:[`Triple → sp → 180°`,`Doble → sp³ → 109.5°`,`Sencillo → sp² → 120°`,`Triple → sp² → 120°`],e:`Sencillo sp³ 109.5°; doble sp² 120°; triple sp 180°.`},

{t:`t23`,src:`Tema 23, pág. 3`,q:`El ángulo de enlace en un alcano es de aproximadamente:`,o:[`109.5°`,`120°`,`180°`,`90°`],e:`Disposición tetraédrica de 109.5°.`},
{t:`t23`,src:`Tema 23, pág. 3`,q:`¿Por qué los alcanos son poco reactivos?`,o:[`No tienen grupos funcionales reactivos y sus enlaces C−C y C−H son fuertes`,`Porque tienen muchos enlaces dobles`,`Porque son iónicos`,`Porque son aromáticos`],e:`Pág. 3 y 17: sin grupos funcionales, enlaces fuertes y apolares.`},
{t:`t23`,src:`Tema 23, pág. 4`,q:`La fórmula general de un radical alquilo es:`,o:[`CₙH₂ₙ₊₁−`,`CₙH₂ₙ₊₂`,`CₙH₂ₙ`,`CₙH₂ₙ₋₂`],e:`Un hidrógeno menos que el alcano; se simboliza R−.`},
{t:`t23`,src:`Tema 23, pág. 4`,q:`El grupo −CH(CH₃)₂ tiene el nombre sistemático:`,o:[`1-metiletil`,`Propil`,`2-metilpropil`,`1,1-dimetiletil`],e:`Es un etilo unido por su C1, que lleva un metilo: 1-metiletil (isopropilo en nomenclatura común).`},
{t:`t23`,src:`Tema 23, pág. 4`,q:`El grupo −C(CH₃)₃ se llama:`,o:[`1,1-dimetiletil`,`2,2-dimetilpropil`,`Butil`,`1-metilpropil`],e:`Carbono unido a la cadena con dos metilos además del metilo propio del etilo: 1,1-dimetiletil (terc-butilo).`},
{t:`t23`,src:`Tema 23, pág. 5`,q:`Los confórmeros son:`,o:[`La misma molécula en distintas posiciones que se interconvierten sin romper enlaces`,`Compuestos distintos con la misma fórmula`,`Moléculas con distinto número de carbonos`,`Isómeros que solo se forman rompiendo enlaces`],e:`Se interconvierten girando el enlace C−C.`},
{t:`t23`,src:`Tema 23, pág. 5`,q:`En el etano, la conformación más estable es la:`,o:[`Alternada o escalonada (60°)`,`Eclipsada (0°)`,`Anti (180°) con metilos`,`Bote`],e:`Alternada: los C−H se intercalan y la repulsión es mínima.`},
{t:`t23`,src:`Tema 23, pág. 6`,q:`¿Cuál es la conformación MENOS estable del butano?`,o:[`Totalmente eclipsada (0°)`,`Anti (180°)`,`Gauche (60°)`,`Eclipsada relativa (120°)`],e:`Los dos CH₃ quedan enfrentados: máxima repulsión.`},
{t:`t23`,src:`Tema 23, pág. 6`,q:`En la conformación anti del butano, los metilos están a:`,o:[`180°, lo más alejados posible`,`60°`,`0°`,`120°`],e:`Anti = 180°, sin tensión, la más estable.`},
{t:`t23`,src:`Tema 23, pág. 7`,q:`La conformación más estable del ciclohexano es:`,o:[`Silla`,`Bote`,`Plana`,`Eclipsada`],e:`Silla: ángulos tetraédricos de 109°. El bote es menos estable por los H del "mástil".`},
{t:`t23`,src:`Tema 23, pág. 8`,q:`Si hay dos cadenas igual de largas, se elige como principal la que tenga:`,o:[`Mayor número de ramificaciones`,`Menos ramificaciones`,`El doble enlace`,`El metilo más cerca del extremo`],e:`Regla 1 de la pág. 8.`},
{t:`t23`,src:`Tema 23, pág. 8`,q:`¿Cuál nombre está escrito correctamente?`,o:[`2,2-dimetilbutano`,`2-dimetilbutano`,`2,2-metilbutano`,`dimetil-2,2-butano`],e:`Cada sustituyente lleva su número y se usa el multiplicador di-.`},
{t:`t23`,src:`Tema 23, pág. 9`,q:`¿Cuál es el nombre IUPAC de CH₃−CH(CH₃)−CH(CH₂CH₃)−CH₂−CH₂−CH₃?`,o:[`3-etil-2-metilhexano`,`2-metil-3-etilhexano`,`4-etil-5-metilhexano`,`3-etil-2-metilheptano`],e:`Hexano con metilo en C2 y etilo en C3; etil va primero por orden alfabético.`},
{t:`t23`,src:`Tema 23, pág. 9`,q:`La fórmula molecular del 3-etil-2-metilhexano es:`,o:[`C₉H₂₀`,`C₈H₁₈`,`C₉H₁₈`,`C₆H₁₄`],e:`6 + 2 + 1 = 9 carbonos; alcano 2(9)+2 = 20 H.`},
{t:`t23`,src:`Tema 23, pág. 10`,q:`¿Cómo se nombra un ciclopentano con un solo metilo?`,o:[`Metilciclopentano`,`1-metilciclopentano`,`Ciclometilpentano`,`2-metilciclopentano`],e:`Con un solo sustituyente no se pone número.`},
{t:`t23`,src:`Tema 23, pág. 10`,q:`La fórmula del 1-etil-2-metilciclopentano es:`,o:[`C₈H₁₆`,`C₈H₁₈`,`C₇H₁₄`,`C₅H₁₀`],e:`5 + 2 + 1 = 8 C; cicloalcano CₙH₂ₙ = C₈H₁₆.`},
{t:`t23`,src:`Tema 23, pág. 11`,q:`El "alcohol isopropílico" es el nombre común del:`,o:[`2-propanol`,`Etanol`,`Ácido etanoico`,`Metano`],e:`Ejemplo de nomenclatura común de la pág. 11.`},
{t:`t23`,src:`Tema 23, pág. 13`,q:`Un carbono unido directamente a 3 átomos de carbono es:`,o:[`Terciario`,`Secundario`,`Cuaternario`,`Primario`],e:`Se cuentan los carbonos vecinos: 3 → terciario (3°).`},
{t:`t23`,src:`Tema 23, pág. 13`,q:`El carbono central del neopentano (2,2-dimetilpropano) es:`,o:[`Cuaternario`,`Terciario`,`Secundario`,`Primario`],e:`Está unido a 4 carbonos (los cuatro metilos).`},
{t:`t23`,src:`Tema 23, pág. 14`,q:`Según la tabla de n-alcanos, ¿cuál tiene mayor punto de ebullición?`,o:[`Octano (126 °C)`,`Pentano (36 °C)`,`Propano (−42 °C)`,`Metano (−164 °C)`],e:`A más carbonos, más alto el punto de ebullición.`},
{t:`t23`,src:`Tema 23, pág. 15`,q:`El isooctano (2,2,4-trimetilpentano) es importante porque:`,o:[`Es la referencia de 100 octanos de la gasolina`,`Es un anestésico`,`Es el alcano más simple`,`Es un biomarcador de estrés oxidativo`],e:`Resiste la detonación: estándar del octanaje.`},
{t:`t23`,src:`Tema 23, pág. 14–15`,q:`n-pentano (36 °C), isopentano (28 °C) y neopentano (9.5 °C). ¿Qué demuestra?`,o:[`A mayor ramificación, menor punto de ebullición`,`A mayor ramificación, mayor punto de ebullición`,`La ramificación no influye`,`Los isómeros siempre hierven igual`],e:`Los tres son C₅H₁₂; al ramificarse son más compactos y hierven más bajo.`},
{t:`t23`,src:`Tema 23, pág. 16`,q:`¿Cuál cicloalcano tiene el ángulo C−C más alejado de 109.5° (más tensión)?`,o:[`Ciclopropano (60°)`,`Ciclohexano (109.5°)`,`Ciclopentano (108°)`,`Cicloheptano (~109°)`],e:`El ciclopropano está muy forzado: 60° frente a 109.5°.`},
{t:`t23`,src:`Tema 23, pág. 17`,q:`¿Cuál es una propiedad física de los alcanos?`,o:[`Son menos densos que el agua`,`Son muy solubles en agua`,`Conducen la electricidad`,`Tienen olor y color intensos`],e:`Apolares, insolubles, menos densos que el agua, incoloros, inodoros y no conductores.`},
{t:`t23`,src:`Tema 23, pág. 17`,q:`Los productos de la combustión completa del metano son:`,o:[`CO₂ + H₂O + energía`,`CH₃Cl + HCl`,`C + H₂`,`CO + H₂`],e:`CH₄ + 2 O₂ → CO₂ + 2 H₂O + energía.`},
{t:`t23`,src:`Tema 23, pág. 17`,q:`CH₄ + Cl₂ → CH₃Cl + HCl es una reacción de:`,o:[`Halogenación por radicales libres (sustitución)`,`Combustión`,`Adición electrófila`,`Neutralización`],e:`Un H del metano se sustituye por un Cl.`},
{t:`t23`,src:`Tema 23, pág. 18`,q:`¿Cuál de estos alcanos NO tiene isómeros?`,o:[`Propano`,`Butano`,`Pentano`,`Hexano`],e:`Metano, etano y propano solo tienen una forma de unir sus carbonos.`},
{t:`t23`,src:`Tema 23, pág. 19`,q:`¿Cuántos isómeros estructurales tiene el pentano (C₅H₁₂)?`,o:[`3`,`2`,`5`,`9`],e:`n-pentano, isopentano y neopentano.`},
{t:`t23`,src:`Tema 23, pág. 19`,q:`Según la tabla de la pág. 19, el hexano tiene:`,o:[`5 isómeros`,`3 isómeros`,`9 isómeros`,`18 isómeros`],e:`Hexano 5, heptano 9, octano 18, nonano 35, decano 75.`},
{t:`t23`,src:`Tema 23, pág. 20`,q:`El halotano es un ejemplo de:`,o:[`Alcano halogenado usado como anestésico general`,`Laxante`,`Biomarcador de estrés oxidativo`,`Componente de la gasolina`],e:`2-bromo-2-cloro-1,1,1-trifluoroetano, anestésico inhalado.`},
{t:`t23`,src:`Tema 23, pág. 20`,q:`¿Qué alcanos exhalados sirven como biomarcadores de estrés oxidativo?`,o:[`Etano y pentano`,`Metano y butano`,`Octano y decano`,`Propano e isobutano`],e:`Se liberan cuando los radicales libres degradan lípidos.`},
{t:`t23`,src:`Tema 23, pág. 20`,q:`¿Por qué los alcanos de cadena corta son peligrosos al inhalarse?`,o:[`Son muy lipofílicos y cruzan la barrera hematoencefálica`,`Son muy ácidos`,`Son radiactivos`,`Se disuelven en la sangre como iones`],e:`Toxicología: C1 a C8 llegan al sistema nervioso con facilidad.`}
];

const ABIERTAS_ORG = [
{t:`t22`,src:`Tema 22, pág. 5–7`,q:`Explique cómo se clasifican los hidrocarburos según el tipo de enlace y escriba la fórmula general de cada familia alifática.`,a:`Saturados: solo enlaces sencillos (alcanos, CₙH₂ₙ₊₂). Insaturados: al menos un doble enlace (alquenos, CₙH₂ₙ) o un triple (alquinos, CₙH₂ₙ₋₂). Los cicloalcanos son saturados de cadena cerrada con fórmula CₙH₂ₙ. Cada doble enlace o anillo resta 2 H al alcano; cada triple, 4.`},
{t:`t22`,src:`Tema 22, pág. 12–15`,q:`Relacione el tipo de enlace con la hibridación, la geometría y la reactividad en alcanos, alquenos y alquinos.`,a:`Alcanos: enlace sencillo, sp³, tetraédrica (109.5°), muy poco reactivos, sustitución radicalaria. Alquenos: doble enlace (1σ + 1π), sp², trigonal plana (120°), reactivos, adición electrófila. Alquinos: triple enlace (1σ + 2π), sp, lineal (180°), muy reactivos, adición electrófila y acidez de los terminales. Los enlaces π son los responsables de la mayor reactividad.`},
{t:`t22`,src:`Tema 22, pág. 10–11`,q:`Describa los pasos IUPAC para nombrar un hidrocarburo con un enlace doble y aplíquelos a 4-etil-2-metilhex-2-eno.`,a:`1) Cadena continua más larga que contenga el doble enlace: 6 C (hex-). 2) Numerar desde el extremo más cercano al doble enlace: queda en C2 (hex-2-eno). 3) Ubicar las ramas: metilo en C2 y etilo en C4. 4) Ensamblar en orden alfabético: 4-etil-2-metilhex-2-eno. Fórmula: C₉H₁₈.`},
{t:`t22`,src:`Tema 22, pág. 13`,q:`¿Por qué los alquenos presentan isomería cis/trans y los alcanos no?`,a:`Porque el enlace π del doble enlace impide la libre rotación alrededor del C=C; los grupos quedan fijos del mismo lado (cis) o en lados opuestos (trans). En los alcanos todos los enlaces son σ y giran libremente, así que esas posiciones se interconvierten (son conformaciones, no isómeros).`},
{t:`t23`,src:`Tema 23, pág. 5–6`,q:`Diferencie conformación de isomería y ordene por estabilidad las conformaciones del butano.`,a:`Las conformaciones son posiciones de la misma molécula que se obtienen girando un enlace sencillo, sin romper enlaces. Los isómeros son compuestos distintos con la misma fórmula y distinta conexión de átomos. Butano, de más a menos estable: anti (180°) > gauche (60°) > eclipsada relativa (120°) > totalmente eclipsada (0°).`},
{t:`t23`,src:`Tema 23, pág. 8–9`,q:`Enumere las reglas IUPAC para nombrar un alcano ramificado.`,a:`1) Elegir la cadena más larga; si hay empate, la de más ramificaciones. 2) Numerar desde el extremo que dé los números más bajos a los sustituyentes; si hay empate, por orden alfabético. 3) Nombrar los sustituyentes cambiando -ano por -ilo. 4) Usar di-, tri-, tetra- para grupos iguales, con un número por cada uno. 5) Escribir los sustituyentes en orden alfabético y terminar con la raíz + -ano.`},
{t:`t23`,src:`Tema 23, pág. 14–17`,q:`Explique cómo influyen el número de carbonos y la ramificación en el punto de ebullición de los alcanos, con ejemplos del material.`,a:`A más carbonos, mayor punto de ebullición: metano −164 °C, pentano 36 °C, octano 126 °C. A mayor ramificación, menor punto de ebullición, porque la molécula es más compacta y tiene menos superficie de contacto: n-pentano 36 °C, isopentano 28 °C y neopentano 9.5 °C, los tres C₅H₁₂.`},
{t:`t23`,src:`Tema 23, pág. 20`,q:`Mencione cuatro áreas donde los alcanos tienen relevancia clínica y un ejemplo de cada una.`,a:`Toxicología: los alcanos C1–C8 son lipofílicos y cruzan la barrera hematoencefálica. Farmacología: halotano como anestésico general inhalado. Dermatología y terapéutica: vaselina para la piel y aceite mineral como laxante. Diagnóstico: etano y pentano en el aire exhalado como biomarcadores de estrés oxidativo.`}
];

const EJ_ORG = [
{t:`t22`,src:`Aplicación de Tema 22, pág. 7`,q:`Escriba la fórmula molecular de: a) un alcano de 5 C; b) un alqueno de 5 C; c) un alquino de 5 C; d) el ciclopentano. ¿Cuáles tienen la misma fórmula?`,
 pide:`Aplicar las fórmulas generales con n = 5.`,datos:[`n = 5`],f:`Alcano CₙH₂ₙ₊₂ · Alqueno CₙH₂ₙ · Alquino CₙH₂ₙ₋₂ · Cicloalcano CₙH₂ₙ`,
 pasos:[`a) H = 2(5) + 2 = 12 → C₅H₁₂ (pentano).`,`b) H = 2(5) = 10 → C₅H₁₀ (penteno).`,`c) H = 2(5) − 2 = 8 → C₅H₈ (pentino).`,`d) H = 2(5) = 10 → C₅H₁₀ (ciclopentano).`,`El penteno y el ciclopentano comparten C₅H₁₀: son isómeros.`],
 r:`C₅H₁₂, C₅H₁₀, C₅H₈ y C₅H₁₀; penteno y ciclopentano tienen la misma fórmula`},
{t:`t22`,src:`Aplicación de Tema 22, pág. 5 y 7`,q:`Clasifique cada fórmula (considere cadena abierta salvo que se indique): a) C₄H₁₀; b) C₃H₄; c) C₆H₁₂ en anillo; d) C₂H₄.`,
 pide:`Comparar el número de H con 2n+2, 2n y 2n−2.`,datos:[`Calcular 2n+2 para cada una`],f:`Si H = 2n+2 alcano; 2n alqueno o ciclo; 2n−2 alquino`,
 pasos:[`a) n = 4: 2n+2 = 10 = H → alcano (butano).`,`b) n = 3: 2n−2 = 4 = H → alquino (propino).`,`c) n = 6 en anillo: 2n = 12 = H → cicloalcano (ciclohexano).`,`d) n = 2: 2n = 4 = H → alqueno (eteno).`],
 r:`a) alcano; b) alquino; c) cicloalcano; d) alqueno`},
{t:`t22`,src:`Aplicación de Tema 22, pág. 2, 3 y 6`,q:`Represente el butano de cuatro formas: molecular, semidesarrollada, desarrollada y lineangular.`,
 pide:`Las cuatro representaciones que pide el objetivo de la pág. 2.`,datos:[`Butano: 4 C, alcano`],f:`C₄H₁₀`,
 pasos:[`Molecular: C₄H₁₀ (solo cuenta átomos).`,`Semidesarrollada: CH₃−CH₂−CH₂−CH₃ (se ven los enlaces C−C).`,`Desarrollada: se dibujan TODOS los enlaces, incluidos los 10 C−H (como el dibujo de la pág. 6).`,`Lineangular: un zigzag de 3 segmentos; cada extremo y cada vértice es un carbono y los H no se dibujan.`],
 r:`C₄H₁₀ · CH₃−CH₂−CH₂−CH₃ · desarrollada · zigzag de 4 vértices`,ojo:`En la lineangular cuenta los extremos: 3 segmentos = 4 carbonos.`},
{t:`t22`,src:`Aplicación de Tema 22, pág. 9`,q:`Nombre: a) CH₃−CH₂−CH₂−CH₂−CH₂−CH₃; b) CH₂=CH−CH₃; c) HC≡C−CH₂−CH₃; d) CH₃−CH=CH−CH₃.`,
 pide:`Raíz + sufijo + posición del enlace múltiple.`,datos:[`Raíces: et 2, prop 3, but 4, hex 6`],f:`-ano / -eno / -ino`,
 pasos:[`a) 6 C, solo sencillos → hexano.`,`b) 3 C, doble enlace entre C1 y C2 → propeno (prop-1-eno).`,`c) 4 C, triple entre C1 y C2 → but-1-ino.`,`d) 4 C, doble entre C2 y C3 → but-2-eno.`],
 r:`hexano · propeno · but-1-ino · but-2-eno`},
{t:`t22`,src:`Tema 22, pág. 10–11 (ejemplo)`,q:`Nombre el compuesto CH₃−C(CH₃)=CH−CH(CH₂−CH₃)−CH₂−CH₃ y escriba su fórmula molecular.`,
 pide:`Aplicar los cuatro pasos con un alqueno ramificado.`,datos:[`Hay un doble enlace y dos ramas`],f:`Prefijos + raíz + localizador + -eno`,
 pasos:[`Cadena más larga que contiene el C=C: 6 carbonos → hex- … -eno.`,`Numerar desde el extremo más cercano al doble enlace: el C=C empieza en C2 → hex-2-eno.`,`Ramas: metilo en C2 y etilo en C4.`,`Orden alfabético: 4-etil-2-metilhex-2-eno.`,`Carbonos: 6 + 1 + 2 = 9; alqueno CₙH₂ₙ → C₉H₁₈.`],
 r:`4-etil-2-metilhex-2-eno, C₉H₁₈`},
{t:`t22`,src:`Aplicación de Tema 22, pág. 12–15`,q:`En CH₂=CH−C≡CH, indique la hibridación y el ángulo de cada carbono (numere de izquierda a derecha).`,
 pide:`Identificar el tipo de enlace de cada carbono.`,datos:[`C1=C2 doble; C3≡C4 triple`],f:`Sencillos sp³ · doble sp² · triple sp`,
 pasos:[`C1 y C2 forman el doble enlace → sp², 120°.`,`C3 y C4 forman el triple enlace → sp, 180°.`,`No hay carbonos sp³ en esta molécula.`],
 r:`C1 y C2: sp² (120°); C3 y C4: sp (180°)`},
{t:`t22`,src:`Aplicación de Tema 22, pág. 12–13`,q:`Complete y nombre el tipo de reacción: a) CH₄ + Cl₂ (luz) → ; b) CH₂=CH₂ + H₂ (catalizador) → ; c) CH₂=CH₂ + Br₂ → ; d) CH₂=CH₂ + H₂O (H⁺) → .`,
 pide:`Reconocer sustitución (alcanos) y adición (alquenos).`,datos:[`Alcanos: sustitución radicalaria`,`Alquenos: adición`],f:`—`,
 pasos:[`a) Sustitución radicalaria: CH₃Cl + HCl.`,`b) Hidrogenación (adición): CH₃−CH₃, etano.`,`c) Halogenación (adición): CH₂Br−CH₂Br, un dihalogenuro adyacente (1,2-dibromoetano).`,`d) Hidratación (adición): CH₃−CH₂OH, etanol.`],
 r:`a) CH₃Cl + HCl; b) etano; c) 1,2-dibromoetano; d) etanol`,ojo:`En la sustitución sale un subproducto (HCl). En la adición todo se suma en una sola molécula.`},
{t:`t22`,src:`Tema 22, pág. 14 (revisión del nombre)`,q:`Nombre CH₃CH₂−CH=CH−C≡CH numerando desde el extremo del triple enlace, como en el dibujo de la pág. 14.`,
 pide:`Nombrar un compuesto con doble y triple enlace.`,datos:[`6 carbonos`,`C1≡C2 triple; C3=C4 doble`],f:`hex- + localizador -en- + localizador -ino`,
 pasos:[`Cadena de 6 C con ambos enlaces → hex-.`,`Numerando desde el triple enlace (como el dibujo): triple entre C1 y C2, doble entre C3 y C4.`,`Se escribe el doble ("en") antes del triple ("ino"): hex-3-en-1-ino.`],
 r:`hex-3-en-1-ino`,ojo:`El material lo rotula "Hex-3-en-2-ino", pero su propia numeración pone el triple enlace en C1. Confírmalo con el docente.`},

{t:`t23`,src:`Tema 23, pág. 9 (ejemplo)`,q:`Nombre CH₃−CH(CH₃)−CH(CH₂CH₃)−CH₂−CH₂−CH₃ y escriba su fórmula molecular.`,
 pide:`Aplicar las reglas IUPAC a un alcano con dos ramas distintas.`,datos:[`Ramas: un CH₃ y un CH₂CH₃`],f:`Prefijos (alfabético) + raíz + -ano`,
 pasos:[`Cadena más larga: 6 carbonos → hexano.`,`Numerar desde la izquierda: ramas en 2 y 3 (desde la derecha serían 4 y 5).`,`Metilo en C2, etilo en C3.`,`Alfabético: 3-etil-2-metilhexano.`,`6 + 1 + 2 = 9 C → C₉H₂₀.`],
 r:`3-etil-2-metilhexano, C₉H₂₀`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 8`,q:`Nombre CH₃−CH(CH₃)−CH₂−CH(CH₃)−CH₃.`,
 pide:`Alcano con dos ramas iguales.`,datos:[`Dos grupos CH₃ como ramas`],f:`di- + metil`,
 pasos:[`Cadena principal: 5 carbonos → pentano.`,`Desde cualquier extremo las ramas quedan en 2 y 4.`,`Dos metilos iguales: 2,4-dimetil.`,`Nombre: 2,4-dimetilpentano. Fórmula: 5 + 2 = 7 C → C₇H₁₆.`],
 r:`2,4-dimetilpentano (C₇H₁₆)`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 8 y 15`,q:`Nombre según IUPAC el isooctano: CH₃−C(CH₃)₂−CH₂−CH(CH₃)−CH₃.`,
 pide:`Alcano con tres metilos.`,datos:[`C2 lleva dos metilos; C4 lleva uno`],f:`tri- + metil`,
 pasos:[`Cadena principal: 5 C → pentano.`,`Desde la izquierda: metilos en 2, 2 y 4. Desde la derecha: 2, 4 y 4. En el primer punto de diferencia (segundo número) 2 < 4: gana la izquierda.`,`Tres metilos → trimetil, con un número por cada uno.`,`Nombre: 2,2,4-trimetilpentano (C₈H₁₈).`],
 r:`2,2,4-trimetilpentano`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 8`,q:`Nombre CH₃−CH₂−CH(CH₂CH₃)−CH₂−CH(CH₃)−CH₂−CH₃.`,
 pide:`Resolver un empate de numeración con el orden alfabético.`,datos:[`Ramas: un etilo y un metilo`],f:`Regla del primer punto de diferencia y, si empata, alfabético`,
 pasos:[`Cadena principal: 7 carbonos → heptano.`,`Desde la izquierda: etilo en 3, metilo en 5 → (3,5). Desde la derecha: metilo en 3, etilo en 5 → (3,5). Empate.`,`Desempate alfabético: el etilo (e) recibe el número más bajo.`,`Nombre: 3-etil-5-metilheptano (C₁₀H₂₂).`],
 r:`3-etil-5-metilheptano`},
{t:`t23`,src:`Tema 23, pág. 10 (ejemplo)`,q:`Nombre un ciclopentano con un etilo y un metilo en carbonos vecinos. Calcule su fórmula.`,
 pide:`Nomenclatura de cicloalcanos con dos sustituyentes.`,datos:[`Anillo de 5 C`,`Etilo y metilo en carbonos contiguos`],f:`ciclo + raíz; números más bajos y alfabético`,
 pasos:[`Anillo de 5 C → ciclopentano.`,`Dos sustituyentes: hay que numerar; los vecinos quedan en 1 y 2.`,`El etilo va primero en el abecedario → recibe el 1.`,`Nombre: 1-etil-2-metilciclopentano.`,`5 + 2 + 1 = 8 C; cicloalcano CₙH₂ₙ → C₈H₁₆.`],
 r:`1-etil-2-metilciclopentano, C₈H₁₆`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 13`,q:`Clasifique los 8 carbonos del 2,2,4-trimetilpentano en primarios, secundarios, terciarios y cuaternarios.`,
 pide:`Contar los carbonos vecinos de cada carbono.`,datos:[`CH₃−C(CH₃)₂−CH₂−CH(CH₃)−CH₃`],f:`1° = 1 C vecino · 2° = 2 · 3° = 3 · 4° = 4`,
 pasos:[`C1 (CH₃), C5 (CH₃) y los 3 metilos de las ramas: 1 vecino cada uno → 5 primarios.`,`C3 (CH₂): unido a C2 y C4 → secundario.`,`C4 (CH): unido a C3, C5 y un metilo → terciario.`,`C2 (C sin H): unido a C1, C3 y dos metilos → cuaternario.`,`Total: 5 + 1 + 1 + 1 = 8 ✔.`],
 r:`5 primarios, 1 secundario, 1 terciario y 1 cuaternario`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 4`,q:`Escriba la estructura de 4-(1-metiletil)heptano y su fórmula molecular.`,
 pide:`Usar un radical alquilo ramificado como sustituyente.`,datos:[`1-metiletil = −CH(CH₃)₂`],f:`Heptano con la rama en C4`,
 pasos:[`Heptano: CH₃−CH₂−CH₂−CH₂−CH₂−CH₂−CH₃.`,`En C4 se reemplaza un H por −CH(CH₃)₂.`,`Estructura: CH₃−CH₂−CH₂−CH(CH(CH₃)₂)−CH₂−CH₂−CH₃.`,`7 + 3 = 10 C → C₁₀H₂₂.`],
 r:`CH₃CH₂CH₂−CH[CH(CH₃)₂]−CH₂CH₂CH₃, C₁₀H₂₂`,ojo:`En nomenclatura común es 4-isopropilheptano.`},
{t:`t23`,src:`Tema 23, pág. 14, 15 y 19`,q:`Escriba los 3 isómeros del C₅H₁₂ y ordénelos de mayor a menor punto de ebullición.`,
 pide:`Isomería de cadena y efecto de la ramificación.`,datos:[`n-pentano 36 °C (pág. 14)`,`isopentano 28 °C; neopentano 9.5 °C (pág. 15)`],f:`Más ramificación → menor punto de ebullición`,
 pasos:[`n-pentano: CH₃−CH₂−CH₂−CH₂−CH₃ (lineal).`,`Isopentano (2-metilbutano): CH₃−CH(CH₃)−CH₂−CH₃.`,`Neopentano (2,2-dimetilpropano): C(CH₃)₄.`,`Orden: n-pentano (36 °C) > isopentano (28 °C) > neopentano (9.5 °C).`],
 r:`n-pentano > isopentano > neopentano`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 14 y Tema 16, pág. 14`,q:`Calcule la masa molar del octano (C₈H₁₈) y cuántos moles hay en 57 g.`,
 pide:`Unir química orgánica con el cálculo de moles del Tema 16.`,datos:[`C = 12; H = 1`,`masa = 57 g`],f:`PM = 12·n(C) + 1·n(H) ; moles = g / PM`,
 pasos:[`PM = 8 × 12 + 18 × 1 = 96 + 18 = 114 g/mol.`,`Moles = 57 / 114 = 0.50 mol.`],r:`114 g/mol; 0.50 mol`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 17`,q:`Escriba y balancee la combustión completa del propano (C₃H₈).`,
 pide:`Balancear C, luego H y al final O.`,datos:[`Modelo: CH₄ + 2 O₂ → CO₂ + 2 H₂O`],f:`CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O`,
 pasos:[`Carbonos: 3 C → 3 CO₂.`,`Hidrógenos: 8 H → 4 H₂O.`,`Oxígenos a la derecha: 3 × 2 + 4 × 1 = 10 O → 5 O₂.`,`C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O + energía.`],
 r:`C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O`,ojo:`Con la fórmula: (3·3+1)/2 = 5 O₂ ✔.`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 6`,q:`Ordene de más a menos estable las conformaciones del butano y explique por qué la anti es la más estable.`,
 pide:`Relacionar la distancia entre metilos con la estabilidad.`,datos:[`Ángulos: anti 180°, gauche 60°, eclipsada 120°, totalmente eclipsada 0°`],f:`Más lejos los CH₃ → menos repulsión → más estable`,
 pasos:[`Anti (180°): metilos lo más alejados, sin tensión.`,`Gauche (60°): alternada, pero los metilos están cerca.`,`Eclipsada relativa (120°): C−H eclipsan a C−CH₃, hay tensión.`,`Totalmente eclipsada (0°): los dos CH₃ enfrentados, máxima repulsión.`],
 r:`Anti > gauche > eclipsada (120°) > totalmente eclipsada (0°)`},
{t:`t23`,src:`Aplicación de Tema 23, pág. 14 y 17`,q:`¿En qué estado se encuentran a temperatura ambiente el butano, el hexano y el octadecano (C₁₈H₃₈)?`,
 pide:`Usar la regla C1–C4 gas, C5–C17 líquido, C18+ sólido.`,datos:[`Butano 4 C; hexano 6 C; octadecano 18 C`],f:`—`,
 pasos:[`Butano (4 C): gas. Por eso se usa en tanques de gas (foto de la pág. 17).`,`Hexano (6 C): líquido (hierve a 69 °C, pág. 14).`,`Octadecano (18 C): sólido, como las parafinas de las velas.`],
 r:`Butano gas; hexano líquido; octadecano sólido`}
];

const FORM_ORG = [
{t:`t22`,src:`Tema 22, pág. 7–9`,title:`Fórmulas y nombres`,rows:[
 [`Alcano`,`CₙH₂ₙ₊₂ · sufijo -ano`],[`Alqueno`,`CₙH₂ₙ · sufijo -eno`],[`Alquino`,`CₙH₂ₙ₋₂ · sufijo -ino`],[`Cicloalcano`,`CₙH₂ₙ · prefijo ciclo-`],
 [`Raíces`,`1 met · 2 et · 3 prop · 4 but · 5 pent · 6 hex · 7 hept · 8 oct · 9 non · 10 dec`],[`Nombre`,`Prefijo (ramas) + Raíz (C) + Sufijo (enlace)`]]},
{t:`t22`,src:`Tema 22, pág. 12–15`,title:`Hibridación y reactividad`,rows:[
 [`Sencillo C−C`,`sp³ · tetraédrica · 109.5° · sustitución radicalaria`],[`Doble C=C`,`sp² · trigonal plana · 120° · 1σ + 1π · adición electrófila`],[`Triple C≡C`,`sp · lineal · 180° · 1σ + 2π · adición y acidez terminal`],
 [`Adiciones del alqueno`,`+H₂ → alcano · +Br₂ → dihalogenuro · +H₂O/H⁺ → alcohol`]]},
{t:`t23`,src:`Tema 23, pág. 4–17`,title:`Alcanos`,rows:[
 [`Radical alquilo`,`CₙH₂ₙ₊₁− (−ano → −ilo)`],[`Reglas IUPAC`,`Cadena más larga → números más bajos → alfabético → di/tri con un número por rama`],
 [`Tipos de carbono`,`1° (1 C vecino) · 2° · 3° · 4°`],[`Estados`,`C1–C4 gas · C5–C17 líquido · C18+ sólido`],[`Punto de ebullición`,`↑ con más C · ↓ con más ramas`],
 [`Combustión`,`CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O`],[`Isómeros`,`C4: 2 · C5: 3 · C6: 5 · C7: 9 · C8: 18 · C9: 35 · C10: 75`],[`Conformaciones del butano`,`Anti > gauche > eclipsada > totalmente eclipsada`]]}
];

const FICHAS_ORG = [
{t:`t22`,src:`Tema 22, pág. 4`,fig:null,f:`¿Qué es un hidrocarburo?`,b:`Compuesto formado solo por carbono e hidrógeno.`},
{t:`t22`,src:`Tema 22, pág. 5`,fig:`clasifHC`,f:`Saturado frente a insaturado.`,b:`Saturado: solo enlaces sencillos. Insaturado: al menos un doble (alqueno) o un triple (alquino).`},
{t:`t22`,src:`Tema 22, pág. 6`,fig:null,f:`¿Cuántos enlaces forma el carbono?`,b:`Siempre 4 (es tetravalente).`},
{t:`t22`,src:`Tema 22, pág. 7`,fig:null,f:`Fórmulas generales de alcano, alqueno y alquino.`,b:`CₙH₂ₙ₊₂ · CₙH₂ₙ · CₙH₂ₙ₋₂. Cicloalcano: CₙH₂ₙ.`},
{t:`t22`,src:`Tema 22, pág. 9`,fig:`partesNombre`,f:`Las tres partes de un nombre IUPAC.`,b:`Prefijo (ramas) + raíz (número de C) + sufijo (-ano, -eno, -ino).`},
{t:`t22`,src:`Tema 22, pág. 9`,fig:null,f:`Raíces de 1 a 8 carbonos.`,b:`Met, et, prop, but, pent, hex, hept, oct.`},
{t:`t22`,src:`Tema 22, pág. 10`,fig:null,f:`¿Desde dónde se numera un alqueno?`,b:`Desde el extremo más cercano al doble enlace; tiene prioridad sobre las ramas.`},
{t:`t22`,src:`Tema 22, pág. 15`,fig:`hibridacion`,f:`Hibridación y ángulo: sencillo, doble, triple.`,b:`sp³ 109.5° · sp² 120° · sp 180°.`},
{t:`t22`,src:`Tema 22, pág. 13`,fig:null,f:`Reacción característica de los alquenos.`,b:`Adición electrófila: el enlace π se rompe y se forman dos σ.`},
{t:`t22`,src:`Tema 22, pág. 13`,fig:null,f:`¿Por qué hay isómeros cis/trans en alquenos?`,b:`Porque el enlace π impide la libre rotación.`},
{t:`t23`,src:`Tema 23, pág. 4`,fig:null,f:`¿Qué es un radical alquilo?`,b:`Un alcano sin un H (CₙH₂ₙ₊₁−, R−). Se nombra cambiando -ano por -ilo.`},
{t:`t23`,src:`Tema 23, pág. 4`,fig:null,f:`Nombre sistemático de −CH(CH₃)₂.`,b:`1-metiletil (isopropilo).`},
{t:`t23`,src:`Tema 23, pág. 5`,fig:`newman`,f:`Etano: ¿eclipsada o alternada es más estable?`,b:`Alternada (60°): menos repulsión entre enlaces.`},
{t:`t23`,src:`Tema 23, pág. 6`,fig:`butanoConf`,f:`Conformación más estable del butano.`,b:`Anti (180°): los metilos lo más lejos posible.`},
{t:`t23`,src:`Tema 23, pág. 7`,fig:`sillaBote`,f:`Conformación más estable del ciclohexano.`,b:`Silla. El bote es menos estable por los H del "mástil".`},
{t:`t23`,src:`Tema 23, pág. 8`,fig:null,f:`Regla 1 para elegir la cadena principal.`,b:`La más larga; si empatan, la que tenga más ramificaciones.`},
{t:`t23`,src:`Tema 23, pág. 8`,fig:null,f:`Si la numeración empata, ¿quién decide?`,b:`El orden alfabético: el sustituyente que va primero recibe el número más bajo.`},
{t:`t23`,src:`Tema 23, pág. 9`,fig:`ejemploAlcano`,f:`CH₃−CH(CH₃)−CH(C₂H₅)−CH₂−CH₂−CH₃`,b:`3-etil-2-metilhexano (C₉H₂₀).`},
{t:`t23`,src:`Tema 23, pág. 13`,fig:`tiposCarbono`,f:`Carbono terciario.`,b:`El que está unido directamente a 3 carbonos (ej. centro del isobutano).`},
{t:`t23`,src:`Tema 23, pág. 14–15`,fig:`pebAlcanos`,f:`¿Cómo cambia el punto de ebullición con las ramas?`,b:`Más ramas → menor punto de ebullición (neopentano 9.5 °C, n-pentano 36 °C).`},
{t:`t23`,src:`Tema 23, pág. 17`,fig:null,f:`Estados de los alcanos a temperatura ambiente.`,b:`C1–C4 gases · C5–C17 líquidos · C18+ sólidos.`},
{t:`t23`,src:`Tema 23, pág. 19`,fig:`isomerosC5`,f:`¿Cuántos isómeros tienen el butano y el pentano?`,b:`Butano 2; pentano 3.`},
{t:`t23`,src:`Tema 23, pág. 20`,fig:null,f:`Un alcano usado como anestésico.`,b:`Halotano (2-bromo-2-cloro-1,1,1-trifluoroetano).`},
{t:`t23`,src:`Tema 23, pág. 20`,fig:null,f:`Biomarcadores de estrés oxidativo en el aliento.`,b:`Etano y pentano.`}
];

const FQ_ORG = [
{t:`t22`,src:`Tema 22, pág. 7`,q:`"¿Cuántos hidrógenos tiene un alquino de 7 carbonos?"`,o:[`CₙH₂ₙ₋₂ → 12 H`,`CₙH₂ₙ₊₂ → 16 H`,`CₙH₂ₙ → 14 H`,`CₙHₙ → 7 H`],e:`Alquino: 2(7) − 2 = 12.`},
{t:`t22`,src:`Tema 22, pág. 9`,q:`"El compuesto tiene solo enlaces sencillos y 5 C en cadena lineal." ¿Qué sufijo y raíz?`,o:[`pent- + -ano`,`pent- + -eno`,`but- + -ano`,`pent- + -ino`],e:`Solo sencillos → -ano; 5 C → pent-: pentano.`},
{t:`t22`,src:`Tema 22, pág. 10`,q:`"CH₃−CH=CH−CH₂−CH₃: ¿desde qué extremo numeras?"`,o:[`Desde la izquierda, el más cercano al doble enlace`,`Desde la derecha`,`Da igual`,`Desde el carbono con más hidrógenos`],e:`El doble enlace queda en C2 desde la izquierda (pent-2-eno); desde la derecha quedaría en C3.`},
{t:`t22`,src:`Tema 22, pág. 12–13`,q:`"Propeno + H₂ con catalizador": ¿qué tipo de reacción?`,o:[`Adición (hidrogenación) → propano`,`Sustitución radicalaria`,`Combustión`,`Neutralización`],e:`Los alquenos reaccionan por adición; con H₂ se convierten en alcano.`},
{t:`t23`,src:`Tema 23, pág. 8`,q:`"Dos cadenas de 6 C empatan en longitud." ¿Qué regla aplicas?`,o:[`Elegir la de más ramificaciones`,`Elegir la que se ve horizontal`,`Elegir la de menos ramificaciones`,`Elegir la que tenga el metilo más cerca del extremo`],e:`Regla 1 de la pág. 8.`},
{t:`t23`,src:`Tema 23, pág. 8`,q:`"Ramas en (3,5) desde ambos extremos, un etilo y un metilo." ¿Qué decide la numeración?`,o:[`El orden alfabético: el etilo recibe el número menor`,`El grupo más grande`,`El metilo, por ser más simple`,`Se elige al azar`],e:`Empate → orden alfabético.`},
{t:`t23`,src:`Tema 23, pág. 13`,q:`"Clasifica el carbono CH del isobutano."`,o:[`Contar carbonos vecinos → terciario`,`Contar hidrógenos → primario`,`Por su posición en la cadena → secundario`,`Por la hibridación → cuaternario`],e:`Se cuentan carbonos unidos: 3 → terciario.`},
{t:`t23`,src:`Tema 23, pág. 14–17`,q:`"¿Cuál hierve más alto: n-hexano o 2,2-dimetilbutano?"`,o:[`Regla: con la misma fórmula, menos ramas → hierve más alto → n-hexano`,`Más ramas hierve más alto`,`Más carbonos (son iguales) → hierven igual`,`El que tenga más hidrógenos`],e:`Ambos C₆H₁₄; el lineal hierve más alto.`},
{t:`t23`,src:`Tema 23, pág. 17`,q:`"Balancea la combustión del butano." ¿Qué relación usas para el O₂?`,o:[`(3n+1)/2 → 6.5 O₂ por mol de butano`,`n + 1 O₂`,`2n + 2 O₂`,`n O₂`],e:`C₄H₁₀ + 6.5 O₂ → 4 CO₂ + 5 H₂O (o ×2: 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O).`}
];

/* ======================= VIDEOS DE REFUERZO (verificados: título y canal) ======================= */
const VIDEOS = [
{t:`t15`,sub:`Soluciones, soluto y solvente`,src:`Tema 15, pág. 3–5`,id:`KNW67u4uEZo`,title:`Las soluciones químicas: soluto y solvente, tipos y propiedades`,ch:`Astraway`,rep:[`Qué es una solución`,`Soluto y solvente`,`Propiedades generales y coligativas`]},
{t:`t15`,sub:`Factores de la solubilidad`,src:`Tema 15, pág. 6–8`,id:`dFU77uIeo50`,title:`Factores que afectan la solubilidad, parte I`,ch:`Química General USB`,rep:[`Factores que afectan la solubilidad`,`Velocidad de disolución`]},
{t:`t16`,sub:`Saturación`,src:`Tema 16, pág. 3`,id:`nGgGrehTnD0`,title:`Soluciones diluidas, concentradas, saturadas y sobresaturadas`,ch:`Conocimiento en un click`,rep:[`Saturación de las soluciones`]},
{t:`t16`,sub:`Porcentajes m/m, v/v, m/v`,src:`Tema 16, pág. 6–10`,id:`SRoyZ5Lc4fc`,title:`Concentración masa a masa, masa a volumen y volumen a volumen`,ch:`Arriba la Ciencia`,rep:[`Los tres porcentajes`,`Unidades físicas y químicas`]},
{t:`t16`,sub:`Porcentajes y ppm`,src:`Tema 16, pág. 6–12`,id:`qQTdEZ0trBk`,title:`Porcentaje en masa, en volumen, masa a volumen y partes por millón`,ch:`La Química de Yamil`,rep:[`Partes por millón (ppm)`,`Los tres porcentajes`]},
{t:`t16`,sub:`Molaridad`,src:`Tema 16, pág. 14–16`,id:`6pJUmCRnklE`,title:`Mol y molaridad, teoría y ejercicios resueltos`,ch:`AntonioProfe`,rep:[`Molaridad (M)`]},
{t:`t16`,sub:`Molaridad, molalidad y normalidad`,src:`Tema 16, pág. 14–26`,id:`CwtV2Kd-Ooo`,title:`Molaridad, normalidad y molalidad explicadas fácil (con ejercicios)`,ch:`Academia Internet`,rep:[`Molaridad (M)`,`Molalidad (m)`,`Normalidad (N)`,`Qué fórmula usar según el enunciado`]},
{t:`t16`,sub:`Molalidad`,src:`Tema 16, pág. 18–20`,id:`ozJKJReVKRM`,title:`Molalidad (m): problemas y ejercicios resueltos`,ch:`TutoReal`,rep:[`Molalidad (m)`]},
{t:`t16`,sub:`Normalidad y peso equivalente`,src:`Tema 16, pág. 22–26`,id:`oIBNevJjbFM`,title:`Normalidad, equivalente gramo y peso equivalente: ejercicios`,ch:`TutoReal`,rep:[`Normalidad (N)`]},
{t:`t17`,sub:`Dilución C₁V₁ = C₂V₂`,src:`Tema 17, pág. 3–7`,id:`pakE51IpETU`,title:`Cálculos para hacer diluciones C1·V1 = C2·V2, ejemplos resueltos`,ch:`profesor10demates`,rep:[`Preparación de soluciones por dilución`,`Las cuatro reglas de la dilución`]},
{t:`t17`,sub:`Solución de trabajo desde un stock (laboratorio)`,src:`Tema 17, pág. 3`,id:`LFvIPNHcz94`,title:`¿Cómo preparar una solución de trabajo a partir de una solución stock?`,ch:`Scientificprotocols`,rep:[`Preparación de soluciones por dilución`]},
{t:`t17`,sub:`Propiedades coligativas`,src:`Tema 17, pág. 9–10`,id:`mQIW5eMrB9c`,title:`Teoría y ejemplos de propiedades coligativas (presión de vapor, Tc, Te y ósmosis)`,ch:`Sergyprofe`,rep:[`Propiedades coligativas`]},
{t:`t17`,sub:`Ósmosis y tonicidad`,src:`Tema 17, pág. 11–12`,id:`xcDNAxwIMkY`,title:`Ósmosis: soluciones hipotónicas, isotónicas e hipertónicas`,ch:`Biologicamente`,rep:[`Tonicidad y eritrocitos`]},
{t:`t17`,sub:`Ósmosis en el eritrocito`,src:`Tema 17, pág. 12`,id:`WrYcqz3Fgtw`,title:`Ósmosis en el eritrocito`,ch:`Fabián en la Escuela`,rep:[`Tonicidad y eritrocitos`]},
{t:`t18`,sub:`Electrolitos fuertes, débiles y no electrolitos`,src:`Tema 18, pág. 4–5`,id:`vLVRsh8SfeY`,title:`¿Qué es un electrolito? Diferencia entre electrolito fuerte y débil`,ch:`Elías Natán Jiménez Alvarado`,rep:[`Electrolitos fuertes, débiles y no electrolitos`,`Conductividad eléctrica`]},
{t:`t18`,sub:`Cómo identificarlos`,src:`Tema 18, pág. 5`,id:`42Ws0MS99kk`,title:`¿Cómo identificar un no electrolito, un electrolito fuerte o uno débil?`,ch:`Elías Natán Jiménez Alvarado`,rep:[`Electrolitos fuertes, débiles y no electrolitos`]},
{t:`t18`,sub:`Indicadores ácido-base`,src:`Tema 18, pág. 6–8`,id:`xTtqVRFWivw`,title:`Indicadores ácido-base`,ch:`Manuela Martín Sánchez`,rep:[`Indicadores ácido-base`,`Definiciones operacionales de ácido y base`]},
{t:`t19`,sub:`Arrhenius, Brønsted-Lowry y Lewis`,src:`Tema 19, pág. 3–10`,id:`Igb21Z5_KKI`,title:`Teorías ácido-base (Arrhenius, Brönsted-Lowry, Lewis)`,ch:`Amigos de la Química`,rep:[`Teoría de Arrhenius (1884)`,`Teoría de Brønsted-Lowry (1923)`,`Teoría de Lewis (1923)`,`Comparación de las tres teorías`]},
{t:`t19`,sub:`Resumen de las tres teorías`,src:`Tema 19, pág. 3–10`,id:`7Hw2wpaXFSE`,title:`Teorías ácido-base: Arrhenius, Brønsted-Lowry y Lewis. Resumen`,ch:`Clases Manuel de las Heras`,rep:[`Comparación de las tres teorías`]},
{t:`t19`,sub:`Autoionización del agua y Kw`,src:`Tema 19, pág. 11–13`,id:`yUzCnWgItGo`,title:`Autoionización del agua y Kw (producto iónico del agua)`,ch:`Guillermo Villagómez`,rep:[`Autoionización del agua y Kw`,`Escala de pH y clasificación de soluciones`]},
{t:`t20`,sub:`pH y pOH de ácidos y bases fuertes`,src:`Tema 20, pág. 2–7`,id:`BUIH8mfN2fU`,title:`¿Qué es el pH y el pOH? Cálculos con ácidos y bases fuertes`,ch:`Quimiayudas`,rep:[`pH y pKa: qué mide cada uno`,`pH de ácidos fuertes`,`pOH`,`Escala logarítmica de acidez`]},
{t:`t20`,sub:`pH de fuertes: ejercicios`,src:`Tema 20, pág. 5 y 7`,id:`vPfyuue7jT4`,title:`pH y pOH: ácidos y bases fuertes, intro y ejercicios resueltos`,ch:`Profe Edi`,rep:[`pH de ácidos fuertes`]},
{t:`t20`,sub:`Fuertes, débiles y Ka`,src:`Tema 20, pág. 8–10`,id:`Mkr2Pl6DVTo`,title:`Ácidos y bases fuertes y débiles, Ka (constante de disociación ácida)`,ch:`Guillermo Villagómez`,rep:[`Disociación: fuerte frente a débil`,`Constantes Ka y Kb: valor numérico`]},
{t:`t20`,sub:`pH de ácidos y bases débiles`,src:`Tema 20, pág. 6 · Tema 21, pág. 6–9`,id:`_zpj9s2Q9IQ`,title:`pH y pOH: cálculos con ácidos y bases débiles`,ch:`Quimiayudas`,rep:[`pH de ácidos débiles`,`Qué fórmula usar para pH`,`pH de una base débil (amoníaco)`]},
{t:`t20`,sub:`pKa y pH`,src:`Tema 20, pág. 1 y 3`,id:`JwuNuX_8FrI`,title:`pKa y pH: constante de acidez para ácidos débiles`,ch:`WissenSync`,rep:[`pH y pKa: qué mide cada uno`]},
{t:`t21`,sub:`Ka y pH de un ácido débil`,src:`Tema 21, pág. 4–7`,id:`p6ya13Ue7qA`,title:`Cálculo de Ka y pH en un ácido débil (ejercicio resuelto)`,ch:`Angel Cuesta`,rep:[`Ley del equilibrio en ácidos y bases débiles`,`Tabla ICE y aproximación del 5 %`]},
{t:`t21`,sub:`Porcentaje de ionización`,src:`Tema 21, pág. 6–7`,id:`tFu7FUT5cHQ`,title:`Porcentaje de ionización de un ácido débil`,ch:`Química para la Sociedad`,rep:[`Porcentaje de ionización`]},
{t:`t21`,sub:`Valoración: teoría`,src:`Tema 21, pág. 10–11`,id:`jeidMhgSrZc`,title:`Valoración o titulación ácido-base (teoría)`,ch:`Amigos de la Química`,rep:[`Valoración (titulación) ácido-base`,`Equivalencia, punto final e indicador`]},
{t:`t21`,sub:`Valoración en el laboratorio`,src:`Tema 21, pág. 10–11`,id:`Zps36BWNf5M`,title:`Valoración ácido-base: experimental`,ch:`Breaking Vlad`,rep:[`Valoración (titulación) ácido-base`]},
{t:`t21`,sub:`Curvas de valoración`,src:`Tema 21, pág. 11`,id:`typEIs-CD8E`,title:`Curvas de valoración ácido-base`,ch:`Amigos de la Química`,rep:[`Equivalencia, punto final e indicador`]},
{t:`t21`,sub:`Henderson-Hasselbalch`,src:`Tema 21, pág. 14–15`,id:`TdkD9k-s7ks`,title:`Ecuación de Henderson-Hasselbalch, ejemplo 1`,ch:`WissenSync`,rep:[`Ecuación de Henderson-Hasselbalch`,`Solución amortiguadora (buffer)`]},
{t:`t21`,sub:`Buffer de acetatos`,src:`Tema 21, pág. 14–15`,id:`5kKrPlI7ee0`,title:`Ecuación de Henderson-Hasselbalch: buffer de acetatos, ejemplo 2`,ch:`WissenSync`,rep:[`Ecuación de Henderson-Hasselbalch`]},
{t:`t21`,sub:`Gasometría: acidosis y alcalosis`,src:`Tema 21, pág. 2 (objetivo 6)`,id:`yPTtXpUv7Oo`,title:`Interpretación de gasometría: acidosis/alcalosis metabólica y respiratoria`,ch:`UVM Medicina`,rep:[`Acidosis y alcalosis metabólica`]},
{t:`t21`,sub:`Gasometría con casos clínicos`,src:`Tema 21, pág. 2 (objetivo 6)`,id:`hI-8e8T1DIk`,title:`Interpretación de gasometría arterial (acidosis, alcalosis) con casos clínicos`,ch:`Enfermera Coagulada`,rep:[`Acidosis y alcalosis metabólica`]},
{t:`t22`,sub:`Clasificación de los hidrocarburos`,src:`Tema 22, pág. 4–7`,id:`v0dtJFHybIk`,title:`Hidrocarburos: clasificación`,ch:`El canal de la química`,rep:[`Química orgánica e hidrocarburos`,`Clasificación de los hidrocarburos`,`Fórmulas generales`]},
{t:`t22`,sub:`Hibridación sp³, sp² y sp`,src:`Tema 22, pág. 12–15`,id:`9_JS-ulcuA0`,title:`Hibridación sp3, sp2 y sp en el carbono. Resumen`,ch:`Javier Valdés Gómez`,rep:[`Alcanos: estructura y propiedades`,`Alquenos: estructura y propiedades`,`Alquinos: estructura y propiedades`,`Tabla comparativa: alcanos, alquenos y alquinos`]},
{t:`t22`,sub:`Hibridación (explicación paso a paso)`,src:`Tema 22, pág. 12–15`,id:`BVHhN1h7Zkw`,title:`Hibridación del carbono: sp3, sp2 y sp`,ch:`Sonia Ag`,rep:[`Tabla comparativa: alcanos, alquenos y alquinos`]},
{t:`t22`,sub:`Nombrar alcanos, alquenos y alquinos`,src:`Tema 22, pág. 8–11`,id:`t1Oq9V8RhHU`,title:`Alcanos, alquenos y alquinos: nomenclatura y formulación orgánica`,ch:`Clases Particulares en Ávila`,rep:[`Nomenclatura: las tres partes del nombre`,`Pasos para nombrar (ejemplo con doble enlace)`]},
{t:`t22`,sub:`Nombrar alquenos paso a paso`,src:`Tema 22, pág. 10–11`,id:`7y12B4bdtLM`,title:`¿Cómo nombrar alquenos paso a paso?`,ch:`Al fin entendí`,rep:[`Pasos para nombrar (ejemplo con doble enlace)`]},
{t:`t22`,sub:`Nombrar alquenos y alquinos`,src:`Tema 22, pág. 10–14`,id:`lw4xdm8ldUg`,title:`Cómo nombrar alquenos y alquinos`,ch:`Arriba la Ciencia`,rep:[`Alquinos: estructura y propiedades`]},
{t:`t22`,sub:`Reacciones de adición`,src:`Tema 22, pág. 13–14`,id:`_vG2aIl3RDY`,title:`Reacciones de los alquenos y alquinos: hidrogenación, halogenación e hidratación`,ch:`Arriba la Ciencia`,rep:[`Alquenos: estructura y propiedades`]},
{t:`t23`,sub:`Alcanos de cadena lineal`,src:`Tema 23, pág. 3 y 14`,id:`PqAQ4KDWzkQ`,title:`Formulación orgánica: alcanos acíclicos de cadena lineal`,ch:`8CIFRAS`,rep:[`Generalidades de los alcanos`,`n-alcanos, ramificados y cíclicos`]},
{t:`t23`,sub:`Radicales alquilo`,src:`Tema 23, pág. 4`,id:`-uG_dWrcj5A`,title:`Formulación orgánica: radicales / alquilos`,ch:`8CIFRAS`,rep:[`Radicales (grupos) alquilo`]},
{t:`t23`,sub:`Alcanos ramificados`,src:`Tema 23, pág. 8–9`,id:`3OgAdOSpRHg`,title:`Formulación orgánica: alcanos acíclicos ramificados`,ch:`8CIFRAS`,rep:[`Nomenclatura IUPAC de alcanos: reglas`,`Ejemplo resuelto: 3-etil-2-metilhexano`]},
{t:`t23`,sub:`Nomenclatura de alcanos paso a paso`,src:`Tema 23, pág. 8–9`,id:`3TmTDYyQBjo`,title:`Nomenclatura de alcanos (paso a paso)`,ch:`Emmanuel Asesorías`,rep:[`Nomenclatura IUPAC de alcanos: reglas`]},
{t:`t23`,sub:`Tipos de carbono`,src:`Tema 23, pág. 13`,id:`ImIFJUc-AcE`,title:`Formulación orgánica: carbono primario, secundario, terciario, cuaternario`,ch:`8CIFRAS`,rep:[`Clasificación: por cadena y por tipo de carbono`]},
{t:`t23`,sub:`Identificar tipos de carbono`,src:`Tema 23, pág. 13`,id:`GeJcjqJWXTg`,title:`¿Cómo identificar carbonos primarios, secundarios, terciarios y cuaternarios?`,ch:`Miss Ime`,rep:[`Clasificación: por cadena y por tipo de carbono`]},
{t:`t23`,sub:`Proyección de Newman del etano`,src:`Tema 23, pág. 5`,id:`EpfJO6lmM1w`,title:`Proyección de Newman del etano`,ch:`Randall Syedd`,rep:[`Conformaciones del etano`]},
{t:`t23`,sub:`Conformaciones del butano`,src:`Tema 23, pág. 6`,id:`TDvNhs8ZUhA`,title:`Conformaciones del butano: análisis conformacional`,ch:`Química en Todo`,rep:[`Conformaciones del butano`]},
{t:`t23`,sub:`Silla del ciclohexano`,src:`Tema 23, pág. 7`,id:`-Zsrtn6-S5M`,title:`Conformaciones de silla del ciclohexano`,ch:`FoodScience Español`,rep:[`Conformaciones de los cicloalcanos`]},
{t:`t23`,sub:`Hidrocarburos cíclicos`,src:`Tema 23, pág. 10 y 16`,id:`CfrRBR5eZxU`,title:`Hidrocarburos cíclicos: nomenclatura y formulación orgánica`,ch:`Clases Particulares en Ávila`,rep:[`Nomenclatura de cicloalcanos`]},
{t:`t23`,sub:`Propiedades físicas`,src:`Tema 23, pág. 14–17`,id:`UKzDDv3rpOw`,title:`Propiedades físicas de alcanos`,ch:`Germán Fernández`,rep:[`Propiedades de los alcanos`,`n-alcanos, ramificados y cíclicos`]},
{t:`t23`,sub:`Combustión`,src:`Tema 23, pág. 17`,id:`9DCatYLMNbo`,title:`Propiedades químicas de los alcanos: combustión`,ch:`Quimicalino`,rep:[`Propiedades de los alcanos`]},
{t:`t23`,sub:`Halogenación`,src:`Tema 23, pág. 17`,id:`APBR1-QFceI`,title:`Halogenación de alcanos`,ch:`Quimicalino`,rep:[`Propiedades de los alcanos`]},
{t:`t23`,sub:`Isomería estructural`,src:`Tema 23, pág. 18–19`,id:`sjEkbM_H4tk`,title:`Isómeros estructurales: de cadena, de posición y de función`,ch:`Javier Valdés Gómez`,rep:[`Isomería estructural (de cadena)`]}
];
