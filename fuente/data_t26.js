/* ======================= TEMA 26: HIDROCARBUROS AROMÁTICOS ======================= */
const REPASO_T26 = [
{t:`t26`,src:`Tema 26, pág. 2`,title:`¿Qué es un hidrocarburo aromático?`,fig:`bencenoDona`,
 body:`<p>Los <b>hidrocarburos aromáticos (arenos)</b> son compuestos orgánicos <b>cíclicos e insaturados</b> con una <b>estabilidad química excepcional</b>, debida a la <b>resonancia o deslocalización electrónica π</b>. El representante más simple e importante es el <b>benceno (C₆H₆)</b>.</p>
 <p><b>Aromaticidad:</b> propiedad que da una estabilidad termodinámica y química inusualmente alta a ciertos compuestos cíclicos insaturados. Se debe a la <b>deslocalización continua de electrones π</b> a lo largo de orbitales p paralelos que forman un anillo cerrado.</p>
 <p class="note">Ojo: "aromático" no significa "que huele". Es un tipo de estabilidad. El nombre es histórico.</p>`,
 memo:`Aromático = anillo + electrones π que circulan por todo el anillo = muy estable.`},
{t:`t26`,src:`Tema 26, pág. 3`,title:`Requisitos de la aromaticidad y regla de Hückel`,fig:`requisitos`,
 body:`<p>Para ser aromática, la molécula debe cumplir <b>estrictamente</b> cuatro condiciones:</p>
 <ol><li><b>Ser cíclica:</b> los átomos forman un anillo cerrado.</li>
 <li><b>Ser plana:</b> todos los átomos del ciclo están en el mismo plano.</li>
 <li><b>Estar completamente conjugada:</b> cada átomo del ciclo tiene un orbital p puro y uno hibridado (sp² o sp), para que la nube π fluya sin interrupción por todo el anillo.</li>
 <li><b>Cumplir la regla de Hückel:</b> el número de electrones π deslocalizados es <b>4n + 2</b>, con n entero (0, 1, 2, 3…).</li></ol>
 <p class="fx">Benceno: 6 e⁻ π → 4n + 2 = 6 → 4n = 4 → n = 1 (entero) → aromático</p>
 <p><b>Cómo contar los electrones π:</b> cada doble enlace del anillo aporta 2. El benceno tiene 3 dobles enlaces → 6 e⁻ π.</p>`,
 memo:`Cíclico + plano + conjugado + (4n + 2) e⁻ π con n entero. Números válidos: 2, 6, 10, 14…`},
{t:`t26`,src:`Tema 26, pág. 4`,title:`Enlace y geometría del anillo aromático`,fig:`longitudes`,
 body:`<ul><li><b>Igualdad en las longitudes de enlace:</b> todos los enlaces del anillo miden exactamente lo mismo. No hay sencillos y dobles alternados verdaderos, sino enlaces intermedios: en el benceno todos los C−C miden <b>1.39 Å</b>.</li>
 <li><b>Nube electrónica continua:</b> los electrones π forman dos distribuciones continuas en forma de anillo o "dona", una por encima y otra por debajo del plano molecular.</li></ul>
 <p>Compara (pág. 5): sencillo 1.54 Å, doble 1.34 Å, triple 1.20 Å. El benceno (1.39 Å) queda entre el sencillo y el doble.</p>
 <p class="note">En la pág. 4 dice "1.39 AA": se refiere a 1.39 Å (angstroms).</p>`,
 memo:`Benceno: 6 enlaces iguales de 1.39 Å; dos donas π.`},
{t:`t26`,src:`Tema 26, pág. 5`,title:`Diferencias con los hidrocarburos alifáticos`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Criterio</th><th>Alifáticos</th><th>Aromáticos</th></tr></thead><tbody>
 <tr><td>Estructura</td><td>Cadenas abiertas o anillos no aromáticos (cicloalcanos, cicloalquenos)</td><td>Cíclicos, planos y con conjugación completa</td></tr>
 <tr><td>Regla de Hückel</td><td>No la cumplen</td><td>Cumplen 4n + 2 e⁻ π</td></tr>
 <tr><td>Electrones π</td><td>Localizados entre dos átomos, o ausentes</td><td>Nube continua deslocalizada sobre todo el anillo</td></tr>
 <tr><td>Estabilidad</td><td>Menor; depende de cada enlace</td><td>Elevada, por la alta energía de resonancia</td></tr>
 <tr><td>Reacción principal</td><td>Adición (alquenos, alquinos) o sustitución radicalaria (alcanos)</td><td><b>Sustitución electrófila aromática (SEA)</b>: el anillo queda intacto</td></tr>
 <tr><td>Longitud de enlace</td><td>1.54 / 1.34 / 1.20 Å bien diferenciados</td><td>Todos iguales e intermedios (1.39 Å)</td></tr>
 <tr><td>Combustión</td><td>Llama generalmente más limpia</td><td>Llama muy <b>fuliginosa</b> (humo negro) por su alta proporción de carbono</td></tr>
 <tr><td>RMN-¹H</td><td>Señales entre 0.8 y 6.0 ppm</td><td>Señales entre 7.0 y 8.5 ppm</td></tr></tbody></table></div>`,
 memo:`Alifático = adición. Aromático = sustitución (SEA). Aromático arde con humo negro.`},
{t:`t26`,src:`Tema 26, pág. 6`,title:`Propiedades físicas de los aromáticos`,fig:null,
 body:`<p>Las determinan la simetría y la estabilidad del anillo plano con electrones deslocalizados.</p>
 <ul><li><b>Estado físico:</b> a temperatura ambiente, el benceno y el tolueno son <b>líquidos incoloros</b>; los más pesados son <b>sólidos cristalinos</b> (naftaleno, antraceno).</li>
 <li><b>Olor:</b> intenso.</li><li><b>Punto de ebullición:</b> aumenta con la masa molecular.</li><li><b>Punto de fusión:</b> elevado.</li>
 <li><b>Solubilidad:</b> insolubles o poco solubles en agua.</li><li><b>Densidad:</b> inferior a la del agua.</li>
 <li><b>Inflamabilidad:</b> alta, con <b>llama amarilla hollinosa</b>.</li></ul>`,
 memo:`Benceno y tolueno líquidos; naftaleno y antraceno sólidos. No se mezclan con agua y flotan.`},
{t:`t26`,src:`Tema 26, pág. 7`,title:`Sustitución electrófila aromática (SEA)`,fig:`seaReacciones`,
 body:`<p>Las propiedades químicas dependen de la resonancia y de la gran estabilidad del anillo. Por eso el benceno <b>prefiere sustituir que adicionar</b>: un reactivo deficiente en electrones (electrófilo, <b>E⁺</b>) sustituye a un H del anillo <b>sin alterar el sistema conjugado</b>.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Reacción</th><th>Reactivo + catalizador</th><th>Grupo que entra</th><th>Producto del ejemplo</th></tr></thead><tbody>
 <tr><td>Halogenación</td><td>Cl₂ o Br₂ + FeCl₃ o FeBr₃ (ácido de Lewis)</td><td>−Cl, −Br</td><td>Clorobenceno</td></tr>
 <tr><td>Nitración</td><td>HNO₃ + H₂SO₄</td><td>−NO₂ (nitro)</td><td>Nitrobenceno</td></tr>
 <tr><td>Sulfonación (reversible)</td><td>H₂SO₄ (SO₃)</td><td>−SO₃H</td><td>Ácido bencenosulfónico</td></tr>
 <tr><td>Alquilación de Friedel-Crafts</td><td>R−X + AlCl₃</td><td>−R (alquilo)</td><td>Isopropilbenceno (cumeno)</td></tr>
 <tr><td>Acilación de Friedel-Crafts</td><td>R−CO−Cl + AlCl₃</td><td>−COR (acilo)</td><td>Acetofenona (fenil metil cetona)</td></tr></tbody></table></div>`,
 memo:`SEA: entra E⁺, sale H⁺, el anillo sigue aromático. Fe para halógenos; H₂SO₄ para nitro y sulfo; AlCl₃ para Friedel-Crafts.`},
{t:`t26`,src:`Tema 26, pág. 8`,title:`Reacciones de adición y de oxidación`,fig:`adicionOx`,
 body:`<p><b>Adición (en condiciones forzadas):</b> rompen temporal o permanentemente la aromaticidad.</p>
 <ul><li><b>Hidrogenación catalítica:</b> a alta presión y temperatura, con níquel o platino: benceno + 3 H₂ → <b>ciclohexano</b>.</li>
 <li><b>Halogenación radicalaria:</b> con luz UV intensa, el benceno adiciona cloro y forma <b>hexaclorociclohexano</b>.</li></ul>
 <p><b>Oxidación:</b></p>
 <ul><li>El anillo bencénico es muy <b>resistente</b> a los oxidantes comunes (KMnO₄, K₂Cr₂O₇).</li>
 <li><b>Oxidación de cadenas laterales:</b> si hay una cadena alquílica con al menos un <b>H bencílico</b> (H en el carbono unido al anillo), el oxidante degrada toda la cadena a −COOH y se obtiene <b>ácido benzoico</b>.</li></ul>`,
 memo:`Adición solo forzada (3 H₂ → ciclohexano). Oxidante: el anillo resiste; la cadena lateral → ácido benzoico.`},
{t:`t26`,src:`Tema 26, pág. 9`,title:`Composición química de los aromáticos`,fig:`bencenoDona`,
 body:`<p>Estructura de átomos de <b>carbono e hidrógeno</b> en un anillo plano con enlaces conjugados y deslocalizados. A partir del benceno se derivan la mayoría de los aromáticos.</p>
 <p><b>1. Composición elemental y enlaces</b></p>
 <ul><li>Principalmente C y H. Los <b>heterocíclicos</b> (piridina, furano) incluyen N, O o S.</li>
 <li>Cada carbono del anillo es <b>sp²</b>: geometría plana con ángulos de <b>120°</b>.</li>
 <li>Cada carbono forma <b>3 enlaces σ</b>: dos con carbonos vecinos y uno con un H o sustituyente, en el mismo plano.</li></ul>
 <p><b>2. Nube electrónica π</b></p>
 <ul><li>Cada carbono conserva un <b>orbital p no hibridado</b>, perpendicular al plano. Estos orbitales forman un sistema continuo arriba y abajo del anillo; los electrones no están fijos entre dos carbonos y fluyen por toda la estructura: <b>nube π deslocalizada</b>.</li></ul>`,
 memo:`Cada C: sp², 120°, 3 σ en el plano + 1 p perpendicular.`},
{t:`t26`,src:`Tema 26, pág. 10`,title:`Tipos de estructuras aromáticas`,fig:`tiposArom`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Composición</th><th>Ejemplos</th></tr></thead><tbody>
 <tr><td><b>Monocíclicos</b></td><td>Un solo anillo de 6 carbonos</td><td>Benceno, tolueno, xileno (dimetilbenceno)</td></tr>
 <tr><td><b>Policíclicos (HAP)</b></td><td>Varios anillos bencénicos fusionados que comparten carbonos</td><td>Naftaleno (C₁₀H₈), antraceno (C₁₄H₁₀), benzo[a]pireno</td></tr>
 <tr><td><b>Heterocíclicos</b></td><td>El anillo incluye uno o más heteroátomos (N, O, S) y mantiene los electrones π necesarios</td><td>Piridina (C₅H₅N), furano (C₄H₄O)</td></tr></tbody></table></div>`,
 memo:`Mono (1 anillo) · Poli o HAP (anillos pegados) · Hetero (N, O o S en el anillo).`},
{t:`t26`,src:`Tema 26, pág. 11`,title:`Nomenclatura: bases y conceptos`,fig:`representaciones3`,
 body:`<p>La base es el <b>benceno (C₆H₆)</b>. El nombre depende de si el anillo tiene uno, dos o más sustituyentes, o si actúa como grupo secundario.</p>
 <ol><li>Hay <b>3 formas</b> de representar el anillo: desarrollada, Kekulé y con círculo.</li>
 <li>Puede tener de 1 a 6 sustituyentes.</li>
 <li>Si la cadena sustituyente es larga, el <b>benceno pasa a ser la rama</b> y la cadena es la principal. Entonces el benceno se llama <b>fenilo (C₆H₅−)</b>: unido directamente a la cadena; o <b>bencilo (C₆H₅−CH₂−)</b>: unido a través de un grupo metileno.</li>
 <li>Visto como cicloalqueno, el benceno se llamaría <b>1,3,5-ciclohexatrieno</b>.</li>
 <li>Los derivados llevan el sufijo "<b>benceno</b>": nitrobenceno.</li></ol>`,
 memo:`Fenilo = C₆H₅− (directo). Bencilo = C₆H₅−CH₂− (con un CH₂ en medio).`},
{t:`t26`,src:`Tema 26, pág. 12`,title:`Sustituyentes y prefijos orto, meta, para`,fig:`omp`,
 body:`<p><b>Sustituyentes frecuentes:</b> radicales alquilo (metil, etil, propil…), hidroxilo (−OH), nitro (−NO₂), amino (−NH₂), halógenos (cloro, fluoro, bromo, yodo), nitrilo (−CN), carboxilo (−COOH), formilo (−CHO), acilo (−CO−), ácido sulfónico (−SO₃H) y tiol (−SH).</p>
 <ul><li><b>Un sustituyente:</b> nombre del grupo + "benceno": metilbenceno, nitrobenceno, clorobenceno, etilbenceno.</li>
 <li><b>Más de uno:</b> se numera a partir del primer sustituyente, para que reciban los <b>números más bajos</b> y, si empatan, por <b>orden alfabético</b>.</li>
 <li><b>Alternativa con dos sustituyentes:</b> <b>orto (1,2)</b>, <b>meta (1,3)</b> y <b>para (1,4)</b>. No se usan con 3 o más sustituyentes.</li></ul>
 <p class="fx">1,2-diclorobenceno = orto-diclorobenceno (o-diclorobenceno)</p>
 <p>Truco del material: "<b>La ORTOgrafía es la META PARA aprobar</b>" → orto, meta, para = 1,2 · 1,3 · 1,4.</p>`,
 memo:`o = 1,2 (vecinos) · m = 1,3 (uno en medio) · p = 1,4 (enfrente).`},
{t:`t26`,src:`Tema 26, pág. 13`,title:`Monosustituidos y nombres comunes`,fig:`monosust`,
 body:`<p>Regla: <b>nombre del sustituyente + benceno</b>: bromobenceno, fluorobenceno, nitrobenceno, etilbenceno, ter-butilbenceno.</p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Grupo</th><th>Nombre común (aceptado por la IUPAC)</th><th>Nombre sistemático</th></tr></thead><tbody>
 <tr><td>−CH₃</td><td>Tolueno</td><td>Metilbenceno</td></tr><tr><td>−OH</td><td>Fenol</td><td>Hidroxibenceno</td></tr>
 <tr><td>−NH₂</td><td>Anilina</td><td>Aminobenceno</td></tr><tr><td>−COOH</td><td>Ácido benzoico</td><td>—</td></tr>
 <tr><td>−O−CH₃</td><td>Anisol</td><td>Metoxibenceno</td></tr><tr><td>−SO₃H</td><td>Ácido bencenosulfónico</td><td>—</td></tr>
 <tr><td>−CO−CH₃</td><td>Acetofenona</td><td>Fenil metil cetona</td></tr><tr><td>−CH=CH₂</td><td>Estireno</td><td>Vinilbenceno</td></tr></tbody></table></div>
 <p class="note">En la imagen superior de la pág. 13 el tolueno aparece con "CH₂": debe ser <b>CH₃</b>. Y el ácido bencenosulfónico aparece con "SO₃": el grupo completo es <b>−SO₃H</b>.</p>`,
 memo:`Tolueno CH₃ · fenol OH · anilina NH₂ · ác. benzoico COOH · anisol OCH₃ · estireno CH=CH₂.`},
{t:`t26`,src:`Tema 26, pág. 14`,title:`Disustituidos`,fig:`omp`,
 body:`<p>Tienen 2 sustituyentes iguales o distintos. Pasos:</p>
 <ol><li>Identificar los sustituyentes y sus nombres.</li><li>Numerar los carbonos.</li><li>Nombrar: <b>posiciones + sustituyentes en orden alfabético + benceno</b>. Otra opción: <b>o, m, p + sustituyentes + benceno</b>.</li></ol>
 <div class="scroll"><table class="tbl"><thead><tr><th>Nombre IUPAC</th><th>Con o, m, p</th></tr></thead><tbody>
 <tr><td>1,2-diclorobenceno</td><td>o-diclorobenceno</td></tr><tr><td>1-bromo-3-nitrobenceno</td><td>m-bromonitrobenceno</td></tr>
 <tr><td>1-etil-4-isopropilbenceno</td><td>p-etilisopropilbenceno</td></tr><tr><td>1-etil-2-metilbenceno</td><td>o-etilmetilbenceno</td></tr>
 <tr><td>1-etil-3-metilbenceno</td><td>m-etilmetilbenceno</td></tr><tr><td>1,4-dimetilbenceno</td><td>p-dimetilbenceno (p-xileno)</td></tr></tbody></table></div>
 <p>Con dos sustituyentes distintos, el número 1 lo recibe el que va primero en orden alfabético (bromo antes que nitro; etil antes que metil).</p>`,
 memo:`Disustituido: dos números + orden alfabético, o bien o/m/p.`},
{t:`t26`,src:`Tema 26, pág. 15`,title:`Trisustituidos`,fig:`trisust`,
 body:`<p><b>Procedimiento del material:</b> se identifican los sustituyentes y se numera designando como carbono 1 al que tiene el sustituyente con más carbonos (grupo principal); si no lo hay, se busca que los sustituyentes tengan los <b>números más bajos</b>. Se puede numerar en sentido horario o antihorario. El nombre va en orden alfabético; los repetidos llevan di-, tri-, tetra-. <b>No se usan</b> orto, meta ni para.</p>
 <p><b>Ejemplos del material:</b> 4-bromo-1,2-diclorobenceno · 1-alil-2-cloro-3-etilbenceno · 1,3-dibromo-5-isopropilbenceno · 4-cloro-2-etil-1-metilbenceno · 1,4-dietil-2-metilbenceno · 2-bromo-1-cloro-4-metilbenceno.</p>
 <p class="note">Fíjate en el 4-cloro-2-etil-1-metilbenceno: el C1 es el metilo, no el etilo (que tiene más carbonos). Así los localizadores quedan {1,2,4}; empezando por el etilo serían {1,2,5}. Cuando las dos reglas chocan, en los ejemplos del material <b>ganan los números más bajos</b>, que es la regla IUPAC [2,3].</p>`,
 memo:`Trisustituido: números más bajos + orden alfabético. Sin o/m/p.`},
{t:`t26`,src:`Tema 26, pág. 16 (y pág. 11)`,title:`Cadenas largas: el benceno como fenilo`,fig:`fenilo`,
 body:`<p>Cuando el benceno tiene un radical alquilo largo, el radical pasa a ser la cadena principal y el benceno la rama, con el nombre <b>fenil</b>.</p>
 <ol><li>Identificar la cadena alifática más larga unida al benceno.</li><li>Numerar desde el extremo más cercano al fenilo (número más bajo).</li><li>Nombre: <b>localizador + fenil + nombre del alcano</b>.</li></ol>
 <p><b>Ejemplos del material:</b> C₆H₅−(CH₂)₇−CH₃ → <b>1-feniloctano</b> · <b>3-fenilpentano</b> · <b>2,4-dimetil-3-fenilpentano</b>.</p>
 <p class="note">El material da dos límites distintos: la pág. 11 dice "si supera los 6 carbonos" y la pág. 16, "con 6 carbonos o más". Además, sus ejemplos 3-fenilpentano y 2,4-dimetil-3-fenilpentano tienen cadenas de 5 carbonos. Para el examen, sigue la forma de los ejemplos del docente y, si te piden justificar, pregunta qué criterio exige.</p>`,
 memo:`Cadena larga → la cadena manda: "n-fenil + alcano" (1-feniloctano).`},
{t:`t26`,src:`Tema 26, pág. 17`,title:`Aromáticos famosos`,fig:`famosos`,
 body:`<ul><li><b>TNT (2,4,6-trinitrotolueno):</b> explosivo más estable que la nitroglicerina.</li>
 <li><b>Naftaleno (C₁₀H₈):</b> ingrediente principal de la naftalina.</li>
 <li><b>DDT (diclorodifeniltricloroetano, C₁₄H₉Cl₅):</b> plaguicida, veneno.</li>
 <li>En la lámina también aparece la <b>fenilalanina</b>, un aminoácido con anillo bencénico.</li></ul>
 <p class="note">En la pág. 17 dice "notroglicerina": es nitroglicerina.</p>`,
 memo:`TNT = tolueno + 3 NO₂ en 2, 4, 6. Naftaleno = naftalina.`},
{t:`t26`,src:`Tema 26, pág. 18`,title:`Interés biológico: aminoácidos aromáticos`,fig:`bioArom`,
 body:`<ul><li><b>Fenilalanina:</b> aminoácido esencial, precursor de la tirosina.</li>
 <li><b>Tirosina:</b> precursor directo de las catecolaminas (dopamina, noradrenalina, adrenalina) y de las hormonas tiroideas (T₃ y T₄).</li>
 <li><b>Triptófano:</b> tiene un anillo <b>indol</b> (aromático heterocíclico); es precursor de la <b>serotonina (5-HT)</b> y de la <b>melatonina</b>.</li></ul>
 <p class="note">Relación con el laboratorio (complementario [4]): si falla el paso fenilalanina → tirosina, la fenilalanina se acumula: es la <b>fenilcetonuria</b>, que se detecta en el tamizaje neonatal.</p>`,
 memo:`Fenilalanina → tirosina → catecolaminas y T₃/T₄. Triptófano → serotonina → melatonina.`},
{t:`t26`,src:`Tema 26, pág. 19`,title:`Interés biológico: hormonas y neurotransmisores`,fig:`bioArom`,
 body:`<ul><li><b>Catecolaminas</b> (dopamina, noradrenalina, adrenalina): tienen un grupo <b>catecol</b> (bencenodiol). Ruta: L-tirosina → L-DOPA → dopamina → norepinefrina → epinefrina.</li>
 <li><b>Hormonas tiroideas</b> (triyodotironina T₃ y levotiroxina T₄): derivados <b>yodados aromáticos</b>, esenciales para el metabolismo basal.</li>
 <li><b>Estrógenos</b> (estradiol, estrona): hormonas esteroideas con un <b>anillo A aromático</b>, fundamental para su unión al receptor estrogénico.</li></ul>
 <p class="note">Complementario [4]: en el laboratorio clínico se miden T₃ y T₄ (perfil tiroideo) y las catecolaminas o sus metabolitos (metanefrinas) en orina o plasma.</p>`,
 memo:`Catecol = benceno con 2 OH. T₃ y T₄ = aromáticos con yodo. Estrógenos = anillo A aromático.`},
{t:`t26`,src:`Tema 26, pág. 20`,title:`Fármacos, bases nitrogenadas y sustancias tóxicas`,fig:null,
 body:`<ul><li><b>Fármacos:</b> analgésicos y antiinflamatorios como el acetaminofén; antibióticos como la penicilina y las sulfas; psicofármacos como el diazepam; anestésicos locales como la lidocaína; antineoplásicos como el metotrexato.</li>
 <li><b>Bases nitrogenadas de los ácidos nucleicos:</b> púricas (adenina, guanina) y pirimídicas (citosina, timina, uracilo).</li>
 <li><b>Sustancias tóxicas:</b> el benceno y los <b>hidrocarburos aromáticos policíclicos (HAP)</b> del humo del tabaco, como el <b>benzo[a]pireno</b>.</li></ul>
 <p class="note">En la pág. 20 dice "metrotrexano" y "venzo (A) pireno": los nombres correctos son <b>metotrexato</b> y <b>benzo[a]pireno</b>.</p>`,
 memo:`Fármacos aromáticos: acetaminofén, penicilina, diazepam, lidocaína. Tóxicos: benceno y HAP (benzo[a]pireno).`}
];

const MCQ_T26 = [
{t:`t26`,src:`Tema 26, pág. 2`,q:`Los hidrocarburos aromáticos también se llaman:`,o:[`Arenos`,`Alcanos`,`Alquenos`,`Parafinas`],e:`Hidrocarburos aromáticos = arenos.`},
{t:`t26`,src:`Tema 26, pág. 2`,q:`La estabilidad excepcional de los aromáticos se debe a:`,o:[`La resonancia o deslocalización de electrones π`,`Sus enlaces sencillos`,`Su cadena abierta`,`Los puentes de hidrógeno`],e:`Los electrones π se reparten por todo el anillo.`},
{t:`t26`,src:`Tema 26, pág. 3`,q:`¿Cuál NO es un requisito de la aromaticidad?`,o:[`Tener una cadena ramificada`,`Ser cíclica`,`Ser plana`,`Cumplir 4n + 2 electrones π`],e:`Los cuatro requisitos: cíclica, plana, completamente conjugada y Hückel.`},
{t:`t26`,src:`Tema 26, pág. 3`,q:`Según la regla de Hückel, el número de electrones π debe ser:`,o:[`4n + 2, con n entero`,`4n`,`2n + 2`,`6n`],e:`n = 0, 1, 2, 3… → 2, 6, 10, 14 electrones π.`},
{t:`t26`,src:`Tema 26, pág. 3`,q:`¿Cuántos electrones π tiene el benceno y qué valor de n da?`,o:[`6 electrones; n = 1`,`6 electrones; n = 1.5`,`12 electrones; n = 2.5`,`3 electrones; n = 0.25`],e:`4n + 2 = 6 → n = 1.`},
{t:`t26`,src:`Tema 26, pág. 3`,q:`Un anillo plano y conjugado con 8 electrones π:`,o:[`No cumple Hückel (n = 1.5)`,`Es aromático (n = 2)`,`Es aromático (n = 1)`,`Cumple Hückel con n = 0`],e:`4n + 2 = 8 → 4n = 6 → n = 1.5, no es entero.`},
{t:`t26`,src:`Tema 26, pág. 3`,q:`"Completamente conjugada" significa que:`,o:[`Cada átomo del ciclo tiene un orbital p puro y la nube π fluye por todo el anillo`,`Todos los enlaces son sencillos`,`La molécula tiene muchos H`,`Hay un carbono sp³ en el anillo`],e:`Si un átomo del anillo no tiene orbital p (por ejemplo, un sp³), la nube π se interrumpe.`},
{t:`t26`,src:`Tema 26, pág. 4`,q:`En el benceno, todos los enlaces C−C miden:`,o:[`1.39 Å`,`1.54 Å`,`1.34 Å`,`1.20 Å`],e:`Valor intermedio entre el sencillo (1.54) y el doble (1.34).`},
{t:`t26`,src:`Tema 26, pág. 4`,q:`La nube de electrones π del benceno tiene forma de:`,o:[`Dos "donas", una arriba y otra abajo del plano`,`Una esfera`,`Un cilindro lineal`,`Un tetraedro`],e:`Dos distribuciones continuas en forma de anillo.`},
{t:`t26`,src:`Tema 26, pág. 5`,q:`La reacción principal de los hidrocarburos aromáticos es:`,o:[`Sustitución electrófila aromática`,`Adición electrófila`,`Sustitución radicalaria`,`Eliminación`],e:`Así se conserva intacto el anillo aromático.`},
{t:`t26`,src:`Tema 26, pág. 5`,q:`Al quemarse, los aromáticos producen:`,o:[`Una llama muy fuliginosa (humo negro)`,`Una llama azul y limpia`,`No arden`,`Una llama sin color`],e:`Por su alta proporción de carbono.`},
{t:`t26`,src:`Tema 26, pág. 5`,q:`En RMN-¹H, los protones aromáticos dan señales entre:`,o:[`7.0 y 8.5 ppm`,`0.8 y 6.0 ppm`,`0 y 1 ppm`,`10 y 12 ppm`],e:`Están desprotegidos por la corriente de anillo.`},
{t:`t26`,src:`Tema 26, pág. 6`,q:`A temperatura ambiente, el naftaleno es:`,o:[`Un sólido cristalino`,`Un líquido incoloro`,`Un gas`,`Un líquido viscoso`],e:`Benceno y tolueno son líquidos; naftaleno y antraceno, sólidos.`},
{t:`t26`,src:`Tema 26, pág. 6`,q:`Respecto al agua, los aromáticos son:`,o:[`Insolubles o poco solubles y menos densos`,`Muy solubles y más densos`,`Muy solubles y menos densos`,`Insolubles y más densos`],e:`No se mezclan y flotan.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`En la SEA, el electrófilo (E⁺):`,o:[`Sustituye a un H del anillo sin alterar el sistema conjugado`,`Se adiciona al doble enlace y rompe el anillo`,`Sustituye a un carbono del anillo`,`Oxida el anillo`],e:`Entra E⁺, sale H⁺.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`La halogenación del benceno usa como catalizador:`,o:[`FeCl₃ o FeBr₃ (ácido de Lewis)`,`H₂SO₄`,`Luz UV`,`Pt`],e:`Cl₂ o Br₂ + FeX₃.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`Benceno + HNO₃ (con H₂SO₄) produce:`,o:[`Nitrobenceno`,`Ácido bencenosulfónico`,`Clorobenceno`,`Anilina`],e:`Nitración: entra el grupo −NO₂.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`¿Qué reacción de SEA es reversible según el material?`,o:[`Sulfonación`,`Nitración`,`Halogenación`,`Acilación`],e:`Benceno + H₂SO₄ ⇌ ácido bencenosulfónico.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`Benceno + R−X con AlCl₃ es una:`,o:[`Alquilación de Friedel-Crafts`,`Acilación de Friedel-Crafts`,`Nitración`,`Hidrogenación`],e:`Añade una cadena −R. Con R−CO−Cl sería acilación.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`La acilación de Friedel-Crafts con cloruro de acetilo forma:`,o:[`Acetofenona (fenil metil cetona)`,`Cumeno`,`Tolueno`,`Fenol`],e:`Entra un grupo acilo −COCH₃.`},
{t:`t26`,src:`Tema 26, pág. 8`,q:`Benceno + 3 H₂ (Ni o Pt, alta presión y temperatura) produce:`,o:[`Ciclohexano`,`Hexano`,`Ciclohexeno`,`Tolueno`],e:`Es una adición forzada: se pierde la aromaticidad.`},
{t:`t26`,src:`Tema 26, pág. 8`,q:`Con luz UV intensa, benceno + Cl₂ forma:`,o:[`Hexaclorociclohexano`,`Clorobenceno`,`Diclorobenceno`,`Cloruro de bencilo`],e:`Halogenación radicalaria (adición). Con FeCl₃ sería sustitución → clorobenceno.`},
{t:`t26`,src:`Tema 26, pág. 8`,q:`El tolueno tratado con KMnO₄ produce:`,o:[`Ácido benzoico`,`Ciclohexano`,`Fenol`,`Nada: no reacciona`],e:`El anillo resiste, pero el CH₃ (con H bencílico) se oxida a −COOH.`},
{t:`t26`,src:`Tema 26, pág. 9`,q:`Cada carbono del anillo bencénico tiene hibridación:`,o:[`sp², con ángulos de 120°`,`sp³, con 109.5°`,`sp, con 180°`,`sp², con 90°`],e:`Forma 3 enlaces σ en el plano y conserva un orbital p.`},
{t:`t26`,src:`Tema 26, pág. 9–10`,q:`La piridina es un aromático:`,o:[`Heterocíclico (con N)`,`Policíclico`,`Alifático`,`Monocíclico sin heteroátomos`],e:`C₅H₅N: un N reemplaza a un CH del anillo.`},
{t:`t26`,src:`Tema 26, pág. 10`,q:`El naftaleno (C₁₀H₈) es un aromático:`,o:[`Policíclico (HAP)`,`Heterocíclico`,`Monocíclico`,`Alifático`],e:`Dos anillos fusionados que comparten carbonos.`},
{t:`t26`,src:`Tema 26, pág. 11`,q:`El grupo C₆H₅−CH₂− se llama:`,o:[`Bencilo`,`Fenilo`,`Tolilo`,`Vinilo`],e:`Fenilo es C₆H₅− (unido directamente).`},
{t:`t26`,src:`Tema 26, pág. 11`,q:`Visto como cicloalqueno, el nombre IUPAC del benceno sería:`,o:[`1,3,5-ciclohexatrieno`,`Ciclohexano`,`1,2,3-ciclohexatrieno`,`Hexatrieno`],e:`Seis carbonos en anillo con tres dobles enlaces alternados.`},
{t:`t26`,src:`Tema 26, pág. 12`,q:`El prefijo "meta" indica posiciones:`,o:[`1,3`,`1,2`,`1,4`,`1,5`],e:`Orto 1,2 · meta 1,3 · para 1,4.`},
{t:`t26`,src:`Tema 26, pág. 12`,q:`El o-diclorobenceno es el:`,o:[`1,2-diclorobenceno`,`1,3-diclorobenceno`,`1,4-diclorobenceno`,`1,1-diclorobenceno`],e:`Orto = 1,2.`},
{t:`t26`,src:`Tema 26, pág. 12 y 15`,q:`¿Cuándo NO se usan orto, meta y para?`,o:[`Cuando hay tres o más sustituyentes`,`Cuando hay dos sustituyentes iguales`,`Cuando hay un halógeno`,`Nunca se usan`],e:`Solo sirven para disustituidos.`},
{t:`t26`,src:`Tema 26, pág. 13`,q:`El nombre común del metilbenceno es:`,o:[`Tolueno`,`Fenol`,`Anilina`,`Estireno`],e:`Tolueno = C₆H₅−CH₃.`},
{t:`t26`,src:`Tema 26, pág. 13`,q:`El benceno con un grupo −NH₂ se llama:`,o:[`Anilina`,`Fenol`,`Anisol`,`Tolueno`],e:`Anilina = aminobenceno.`},
{t:`t26`,src:`Tema 26, pág. 13`,q:`El vinilbenceno (C₆H₅−CH=CH₂) se conoce como:`,o:[`Estireno`,`Etilbenceno`,`Acetofenona`,`Cumeno`],e:`Es el monómero del poliestireno (Tema 24, pág. 12).`},
{t:`t26`,src:`Tema 26, pág. 13`,q:`El anisol es:`,o:[`Metoxibenceno (C₆H₅−O−CH₃)`,`Hidroxibenceno`,`Aminobenceno`,`Metilbenceno`],e:`Grupo −O−CH₃.`},
{t:`t26`,src:`Tema 26, pág. 14`,q:`El nombre IUPAC del m-bromonitrobenceno es:`,o:[`1-bromo-3-nitrobenceno`,`1-nitro-3-bromobenceno`,`1-bromo-4-nitrobenceno`,`1-bromo-2-nitrobenceno`],e:`Meta = 1,3; el bromo va primero por orden alfabético y recibe el 1.`},
{t:`t26`,src:`Tema 26, pág. 14`,q:`El p-xileno (p-dimetilbenceno) es el:`,o:[`1,4-dimetilbenceno`,`1,2-dimetilbenceno`,`1,3-dimetilbenceno`,`Etilbenceno`],e:`Para = 1,4.`},
{t:`t26`,src:`Tema 26, pág. 15`,q:`En los bencenos trisustituidos, los nombres de los sustituyentes se ordenan:`,o:[`Alfabéticamente, con di-, tri- si se repiten`,`Por tamaño`,`Por el número de carbono`,`Con orto, meta y para`],e:`Ejemplo: 4-bromo-1,2-diclorobenceno.`},
{t:`t26`,src:`Tema 26, pág. 16`,q:`El nombre de C₆H₅−(CH₂)₇−CH₃ es:`,o:[`1-feniloctano`,`Octilbenceno`,`8-feniloctano`,`1-fenilnonano`],e:`Cadena de 8 C con el fenilo en C1 (según el material).`},
{t:`t26`,src:`Tema 26, pág. 17`,q:`El TNT es el:`,o:[`2,4,6-trinitrotolueno`,`1,3,5-trinitrobenceno`,`Trinitrofenol`,`2,4-dinitrotolueno`],e:`Tolueno con tres grupos nitro en 2, 4 y 6.`},
{t:`t26`,src:`Tema 26, pág. 17`,q:`El ingrediente principal de la naftalina es:`,o:[`Naftaleno (C₁₀H₈)`,`Benceno`,`DDT`,`Tolueno`],e:`Dos anillos fusionados.`},
{t:`t26`,src:`Tema 26, pág. 18`,q:`El aminoácido esencial precursor de la tirosina es:`,o:[`Fenilalanina`,`Triptófano`,`Glicina`,`Serotonina`],e:`Fenilalanina → tirosina.`},
{t:`t26`,src:`Tema 26, pág. 18`,q:`La tirosina es precursora directa de:`,o:[`Catecolaminas y hormonas tiroideas (T₃ y T₄)`,`Serotonina y melatonina`,`Estrógenos`,`Bases nitrogenadas`],e:`Dopamina, noradrenalina, adrenalina y T₃/T₄.`},
{t:`t26`,src:`Tema 26, pág. 18`,q:`El triptófano tiene un anillo indol y es precursor de:`,o:[`Serotonina y melatonina`,`Dopamina`,`Tiroxina`,`Adrenalina`],e:`Triptófano → serotonina (5-HT) → melatonina.`},
{t:`t26`,src:`Tema 26, pág. 19`,q:`Las catecolaminas comparten un grupo:`,o:[`Catecol (bencenodiol)`,`Indol`,`Fenol yodado`,`Ciclohexano`],e:`Benceno con dos OH.`},
{t:`t26`,src:`Tema 26, pág. 19`,q:`T₃ y T₄ son:`,o:[`Derivados yodados aromáticos`,`Esteroides con anillo A aromático`,`Bases púricas`,`Hidrocarburos policíclicos`],e:`Hormonas tiroideas, esenciales para el metabolismo basal.`},
{t:`t26`,src:`Tema 26, pág. 19`,q:`Los estrógenos (estradiol, estrona) tienen:`,o:[`Un anillo A aromático`,`Un grupo catecol`,`Yodo en su estructura`,`Un anillo indol`],e:`Ese anillo es clave para unirse al receptor estrogénico.`},
{t:`t26`,src:`Tema 26, pág. 20`,q:`El benzo[a]pireno del humo del tabaco es un:`,o:[`Hidrocarburo aromático policíclico (HAP) tóxico`,`Fármaco analgésico`,`Aminoácido`,`Heterocíclico con N`],e:`Los HAP son sustancias tóxicas.`},
{t:`t26`,src:`Tema 26, pág. 20`,q:`¿Cuál de estos es un fármaco aromático mencionado en el material?`,o:[`Acetaminofén`,`Etanol`,`Glucosa`,`Urea`],e:`También: penicilina, sulfas, diazepam, lidocaína, metotrexato.`}
];

const ABIERTAS_T26 = [
{t:`t26`,src:`Tema 26, pág. 3`,q:`Enumere los cuatro requisitos de la aromaticidad y demuestre que el benceno los cumple.`,a:`1) Cíclico: los 6 C forman un anillo cerrado. 2) Plano: los 6 C son sp² y están en el mismo plano. 3) Completamente conjugado: cada C tiene un orbital p sin hibridar y la nube π recorre todo el anillo. 4) Hückel: tiene 6 electrones π (3 dobles enlaces × 2); 4n + 2 = 6 → n = 1, que es entero. Cumple los cuatro: es aromático.`},
{t:`t26`,src:`Tema 26, pág. 4–5 y 7`,q:`Explique por qué el benceno prefiere la sustitución a la adición, aunque es un compuesto insaturado.`,a:`El benceno tiene electrones π deslocalizados en todo el anillo, lo que le da una gran energía de resonancia (estabilidad). Una adición rompería esa nube y haría perder la aromaticidad, por eso solo ocurre en condiciones forzadas (3 H₂ con Ni o Pt a alta presión, o Cl₂ con luz UV). En la sustitución electrófila aromática un E⁺ reemplaza a un H y el anillo conserva su sistema conjugado.`},
{t:`t26`,src:`Tema 26, pág. 5`,q:`Mencione cinco diferencias entre hidrocarburos alifáticos y aromáticos.`,a:`Estructura: abiertos o anillos no aromáticos frente a cíclicos, planos y conjugados. Hückel: no la cumplen frente a sí. Electrones π: localizados frente a deslocalizados. Reacción: adición o sustitución radicalaria frente a SEA. Enlaces: 1.54 / 1.34 / 1.20 Å distintos frente a todos iguales (1.39 Å). También: combustión limpia frente a fuliginosa, y RMN 0.8–6.0 frente a 7.0–8.5 ppm.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`Describa las cinco reacciones de sustitución electrófila aromática con su reactivo, catalizador y producto.`,a:`Halogenación: Cl₂ o Br₂ con FeCl₃ o FeBr₃ → clorobenceno o bromobenceno. Nitración: HNO₃ con H₂SO₄ → nitrobenceno. Sulfonación (reversible): H₂SO₄ (SO₃) → ácido bencenosulfónico. Alquilación de Friedel-Crafts: R−X con AlCl₃ → alquilbenceno (con cloruro de isopropilo, cumeno). Acilación de Friedel-Crafts: R−CO−Cl con AlCl₃ → cetona aromática (con cloruro de acetilo, acetofenona).`},
{t:`t26`,src:`Tema 26, pág. 18–20`,q:`Mencione compuestos aromáticos de interés biológico y clínico y su función.`,a:`Aminoácidos: fenilalanina (esencial, forma tirosina), tirosina (forma catecolaminas y T₃/T₄), triptófano (anillo indol, forma serotonina y melatonina). Hormonas: catecolaminas con grupo catecol; T₃ y T₄, derivados yodados que regulan el metabolismo basal; estrógenos con anillo A aromático. Fármacos: acetaminofén, penicilina, sulfas, diazepam, lidocaína, metotrexato. Bases nitrogenadas púricas y pirimídicas. Tóxicos: benceno y HAP como el benzo[a]pireno del tabaco.`}
];

const EJ_T26 = [
{t:`t26`,src:`Aplicación de Tema 26, pág. 3`,q:`Aplique la regla de Hückel a anillos planos y conjugados con: a) 2, b) 4, c) 6, d) 10 y e) 12 electrones π. ¿Cuáles cumplen?`,
 pide:`Despejar n de 4n + 2 = (electrones π) y ver si es entero.`,datos:[`Electrones π de cada caso`],f:`n = (e⁻π − 2) / 4`,
 pasos:[`a) (2 − 2)/4 = 0 → entero ✔.`,`b) (4 − 2)/4 = 0.5 ✘.`,`c) (6 − 2)/4 = 1 ✔ (benceno).`,`d) (10 − 2)/4 = 2 ✔ (naftaleno).`,`e) (12 − 2)/4 = 2.5 ✘.`],r:`Cumplen 2, 6 y 10`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 3`,q:`El naftaleno tiene 5 dobles enlaces en su sistema de dos anillos. ¿Cumple Hückel?`,
 pide:`Contar electrones π y aplicar 4n + 2.`,datos:[`5 dobles enlaces`],f:`4n + 2 = e⁻π`,
 pasos:[`Cada doble enlace aporta 2 e⁻ π: 5 × 2 = 10.`,`4n + 2 = 10 → 4n = 8 → n = 2.`,`n es entero: cumple Hückel (y es plano y conjugado).`],r:`10 e⁻ π, n = 2: aromático`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 3`,q:`¿El ciclohexano es aromático? Justifique con los cuatro requisitos.`,
 pide:`Revisar los requisitos uno por uno.`,datos:[`C₆H₁₂, solo enlaces sencillos`],f:`—`,
 pasos:[`Cíclico: sí.`,`Plano: no; sus carbonos sp³ forman silla o bote (Tema 23, pág. 7).`,`Conjugado: no; no tiene orbitales p ni enlaces π.`,`Hückel: 0 electrones π.`,`Falla tres requisitos: no es aromático (es un cicloalcano, alifático).`],r:`No es aromático`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 7`,q:`Complete con el producto y el nombre de la reacción: a) benceno + Br₂ (FeBr₃); b) benceno + HNO₃ (H₂SO₄); c) benceno + CH₃Cl (AlCl₃); d) benceno + CH₃COCl (AlCl₃); e) benceno + H₂SO₄.`,
 pide:`Identificar el grupo que entra en cada SEA.`,datos:[`Siempre sale un H del anillo`],f:`C₆H₆ + E⁺ → C₆H₅−E + H⁺`,
 pasos:[`a) Halogenación → bromobenceno (C₆H₅Br) + HBr.`,`b) Nitración → nitrobenceno (C₆H₅NO₂) + H₂O.`,`c) Alquilación de Friedel-Crafts → tolueno (metilbenceno) + HCl.`,`d) Acilación de Friedel-Crafts → acetofenona (C₆H₅COCH₃) + HCl.`,`e) Sulfonación (reversible) → ácido bencenosulfónico (C₆H₅SO₃H).`],r:`bromobenceno, nitrobenceno, tolueno, acetofenona, ácido bencenosulfónico`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 8 y Tema 16`,q:`¿Cuántos moles de H₂ se necesitan para hidrogenar 2 mol de benceno a ciclohexano? ¿Cuántos gramos de ciclohexano se forman? (C = 12, H = 1)`,
 pide:`Estequiometría de C₆H₆ + 3 H₂ → C₆H₁₂.`,datos:[`2 mol de benceno`],f:`1 C₆H₆ : 3 H₂ : 1 C₆H₁₂`,
 pasos:[`Relación 1 : 3 → 2 mol × 3 = 6 mol de H₂.`,`Se forman 2 mol de C₆H₁₂.`,`PM del ciclohexano = 6(12) + 12(1) = 84 g/mol.`,`Masa = 2 × 84 = 168 g.`],r:`6 mol de H₂; 168 g de ciclohexano`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 12–14`,q:`Nombre con números y con o/m/p: a) Cl en 1 y Cl en 3; b) CH₃ en 1 y CH₂CH₃ en 2; c) Br en 1 y NO₂ en 4; d) CH₃ en 1 y CH₃ en 4.`,
 pide:`Números + orden alfabético, y su equivalente o/m/p.`,datos:[`o = 1,2 · m = 1,3 · p = 1,4`],f:`—`,
 pasos:[`a) 1,3-diclorobenceno = m-diclorobenceno.`,`b) El etil va antes que el metil: 1-etil-2-metilbenceno = o-etilmetilbenceno.`,`c) 1-bromo-4-nitrobenceno = p-bromonitrobenceno.`,`d) 1,4-dimetilbenceno = p-dimetilbenceno (p-xileno).`],r:`m-dicloro, o-etilmetil, p-bromonitro, p-dimetil`},
{t:`t26`,src:`Tema 26, pág. 15 (ejemplo)`,q:`Un benceno tiene Cl en dos carbonos vecinos y Br en el carbono que queda en posición "para" respecto a uno de los Cl. Nómbrelo.`,
 pide:`Numerar para obtener los localizadores más bajos.`,datos:[`2 Cl vecinos, 1 Br`],f:`Números más bajos → orden alfabético`,
 pasos:[`Opción A: Cl en 1 y 2, Br en 4 → {1,2,4}.`,`Opción B: Br en 1 → los Cl quedarían en 3 y 4 → {1,3,4}.`,`Primer punto de diferencia: 2 < 3, gana la opción A.`,`Alfabético: bromo antes que cloro, con "di" para los dos Cl.`,`Nombre: 4-bromo-1,2-diclorobenceno.`],r:`4-bromo-1,2-diclorobenceno`},
{t:`t26`,src:`Tema 26, pág. 15 (ejemplo)`,q:`Nombre el benceno con CH₃ en un carbono, CH₂CH₃ en el carbono vecino y Cl en posición "para" respecto al CH₃.`,
 pide:`Comparar las numeraciones posibles.`,datos:[`CH₃, C₂H₅ y Cl`],f:`Números más bajos → orden alfabético`,
 pasos:[`CH₃ = 1, etil = 2, Cl = 4 → {1,2,4}.`,`Etil = 1, CH₃ = 2, Cl = 5 → {1,2,5}.`,`Gana {1,2,4}, aunque el etilo tenga más carbonos.`,`Orden alfabético: cloro, etil, metil.`,`Nombre: 4-cloro-2-etil-1-metilbenceno.`],r:`4-cloro-2-etil-1-metilbenceno`},
{t:`t26`,src:`Tema 26, pág. 13`,q:`Dé el nombre común y el sistemático: a) C₆H₅−OH; b) C₆H₅−NH₂; c) C₆H₅−CH₃; d) C₆H₅−O−CH₃; e) C₆H₅−CH=CH₂; f) C₆H₅−CO−CH₃.`,
 pide:`Memorizar los nombres aceptados por la IUPAC.`,datos:[`C₆H₅− = fenilo`],f:`—`,
 pasos:[`a) Fenol = hidroxibenceno.`,`b) Anilina = aminobenceno.`,`c) Tolueno = metilbenceno.`,`d) Anisol = metoxibenceno.`,`e) Estireno = vinilbenceno.`,`f) Acetofenona = fenil metil cetona.`],r:`fenol, anilina, tolueno, anisol, estireno, acetofenona`},
{t:`t26`,src:`Tema 26, pág. 16`,q:`Nombre: a) C₆H₅−(CH₂)₇−CH₃; b) CH₃−CH₂−CH(C₆H₅)−CH₂−CH₃.`,
 pide:`El benceno como rama (fenil) de la cadena principal.`,datos:[`Siguiendo los ejemplos del material`],f:`localizador + fenil + alcano`,
 pasos:[`a) Cadena de 8 C; el fenilo está en un extremo → C1: 1-feniloctano.`,`b) Cadena de 5 C; el fenilo está en C3 desde cualquier extremo: 3-fenilpentano.`],r:`a) 1-feniloctano; b) 3-fenilpentano`},
{t:`t26`,src:`Aplicación de Tema 26, pág. 10 y 17`,q:`Calcule la masa molar de: benceno (C₆H₆), tolueno (C₇H₈), naftaleno (C₁₀H₈) y TNT (C₇H₅N₃O₆). (C = 12, H = 1, N = 14, O = 16)`,
 pide:`Sumar las masas atómicas.`,datos:[`Fórmulas moleculares`],f:`PM = Σ (n × masa atómica)`,
 pasos:[`Benceno: 6(12) + 6(1) = 78 g/mol.`,`Tolueno: 7(12) + 8(1) = 92 g/mol.`,`Naftaleno: 10(12) + 8(1) = 128 g/mol.`,`TNT: 7(12) + 5(1) + 3(14) + 6(16) = 84 + 5 + 42 + 96 = 227 g/mol.`],r:`78, 92, 128 y 227 g/mol`}
];

const FORM_T26 = [
{t:`t26`,src:`Tema 26, pág. 2–16`,title:`Hidrocarburos aromáticos`,rows:[
 [`Benceno`,`C₆H₆ · sp² · 120° · plano · enlaces de 1.39 Å · 6 e⁻ π`],[`Requisitos`,`Cíclico + plano + conjugado + Hückel`],
 [`Hückel`,`e⁻π = 4n + 2 → n = (e⁻π − 2)/4 debe ser entero (2, 6, 10, 14…)`],
 [`SEA`,`X₂/FeX₃ → −X · HNO₃/H₂SO₄ → −NO₂ · H₂SO₄ → −SO₃H · R−X/AlCl₃ → −R · RCOCl/AlCl₃ → −COR`],
 [`Adición forzada`,`+3 H₂ (Ni, Pt) → ciclohexano · +Cl₂ (UV) → hexaclorociclohexano`],[`Oxidación`,`Cadena lateral con H bencílico + KMnO₄ → ácido benzoico`],
 [`Posiciones`,`orto 1,2 · meta 1,3 · para 1,4 (solo con 2 sustituyentes)`],[`Nombres comunes`,`tolueno, fenol, anilina, ác. benzoico, anisol, estireno, acetofenona`],
 [`Ramas`,`fenilo C₆H₅− · bencilo C₆H₅−CH₂−`]]}
];

const FICHAS_T26 = [
{t:`t26`,src:`Tema 26, pág. 2`,fig:null,f:`¿Qué es la aromaticidad?`,b:`Estabilidad muy alta de ciertos anillos insaturados por la deslocalización continua de electrones π.`},
{t:`t26`,src:`Tema 26, pág. 3`,fig:`requisitos`,f:`Los 4 requisitos de la aromaticidad.`,b:`Cíclico, plano, completamente conjugado y 4n + 2 electrones π.`},
{t:`t26`,src:`Tema 26, pág. 3`,fig:null,f:`Benceno con la regla de Hückel.`,b:`6 e⁻ π → 4n + 2 = 6 → n = 1 (entero).`},
{t:`t26`,src:`Tema 26, pág. 4`,fig:`longitudes`,f:`Longitud del enlace C−C en el benceno.`,b:`1.39 Å, igual en los seis (entre 1.54 y 1.34).`},
{t:`t26`,src:`Tema 26, pág. 5`,fig:null,f:`Reacción típica: alifáticos frente a aromáticos.`,b:`Alifáticos: adición o sustitución radicalaria. Aromáticos: SEA.`},
{t:`t26`,src:`Tema 26, pág. 6`,fig:null,f:`Estado físico de benceno, tolueno y naftaleno.`,b:`Benceno y tolueno: líquidos incoloros. Naftaleno y antraceno: sólidos cristalinos.`},
{t:`t26`,src:`Tema 26, pág. 7`,fig:`seaReacciones`,f:`Catalizadores de la SEA.`,b:`FeX₃ (halogenación) · H₂SO₄ (nitración) · AlCl₃ (Friedel-Crafts).`},
{t:`t26`,src:`Tema 26, pág. 8`,fig:`adicionOx`,f:`Tolueno + KMnO₄ →`,b:`Ácido benzoico (se oxida la cadena lateral; el anillo resiste).`},
{t:`t26`,src:`Tema 26, pág. 10`,fig:`tiposArom`,f:`Tres tipos de aromáticos.`,b:`Monocíclicos (benceno), policíclicos o HAP (naftaleno), heterocíclicos (piridina, furano).`},
{t:`t26`,src:`Tema 26, pág. 11`,fig:`fenilo`,f:`Fenilo frente a bencilo.`,b:`Fenilo: C₆H₅−. Bencilo: C₆H₅−CH₂−.`},
{t:`t26`,src:`Tema 26, pág. 12`,fig:`omp`,f:`Orto, meta, para.`,b:`1,2 · 1,3 · 1,4. "La ORTOgrafía es la META PARA aprobar".`},
{t:`t26`,src:`Tema 26, pág. 13`,fig:`monosust`,f:`Fenol, anilina, tolueno, anisol.`,b:`−OH · −NH₂ · −CH₃ · −O−CH₃.`},
{t:`t26`,src:`Tema 26, pág. 13`,fig:null,f:`Estireno y acetofenona.`,b:`Estireno: −CH=CH₂ (vinilbenceno). Acetofenona: −CO−CH₃.`},
{t:`t26`,src:`Tema 26, pág. 17`,fig:`famosos`,f:`TNT.`,b:`2,4,6-trinitrotolueno.`},
{t:`t26`,src:`Tema 26, pág. 18`,fig:`bioArom`,f:`Precursores de catecolaminas y serotonina.`,b:`Tirosina (de la fenilalanina) → catecolaminas y T₃/T₄. Triptófano → serotonina y melatonina.`},
{t:`t26`,src:`Tema 26, pág. 19`,fig:null,f:`¿Qué tienen de aromático T₃/T₄ y los estrógenos?`,b:`T₃/T₄: anillos aromáticos con yodo. Estrógenos: anillo A aromático.`}
];

const FQ_T26 = [
{t:`t26`,src:`Tema 26, pág. 3`,q:`"¿Este anillo es aromático?" ¿Qué haces primero?`,o:[`Reviso cíclico, plano y conjugado, y luego cuento los e⁻ π para Hückel`,`Cuento solo los carbonos`,`Veo si tiene olor`,`Calculo su masa molar`],e:`Los cuatro requisitos; Hückel: n = (e⁻π − 2)/4 debe ser entero.`},
{t:`t26`,src:`Tema 26, pág. 7`,q:`"Benceno + reactivo con catalizador": ¿qué tipo de reacción esperas?`,o:[`Sustitución electrófila aromática (entra un grupo y sale un H)`,`Adición al doble enlace`,`Combustión`,`Eliminación`],e:`Solo con condiciones forzadas (H₂ a presión, UV) hay adición.`},
{t:`t26`,src:`Tema 26, pág. 12–15`,q:`"Nombra este benceno con 3 sustituyentes." ¿Qué regla aplicas?`,o:[`Números más bajos y orden alfabético, sin o/m/p`,`Usar orto, meta y para`,`Numerar desde el sustituyente más pequeño`,`Ordenar por tamaño`],e:`o/m/p solo sirven con dos sustituyentes.`},
{t:`t26`,src:`Tema 26, pág. 16`,q:`"Benceno unido a una cadena larga": ¿quién es la cadena principal?`,o:[`La cadena alifática; el benceno se nombra como fenil`,`Siempre el benceno`,`El grupo más pequeño`,`Ninguno`],e:`Ejemplo: 1-feniloctano.`}
];

const VIDEOS_T26 = [
{t:`t26`,sub:`Estructura del benceno`,src:`Tema 26, pág. 2, 4 y 9`,id:`knQC41WFp6A`,title:`Benceno: estructura y enlaces. Resonancia e hibridación`,ch:``,rep:[`¿Qué es un hidrocarburo aromático?`,`Composición química de los aromáticos`,`Enlace y geometría del anillo aromático`]},
{t:`t26`,sub:`Resonancia del benceno`,src:`Tema 26, pág. 2 y 4`,id:`I81w426AY-g`,title:`Resonancia: benceno`,ch:``,rep:[`Enlace y geometría del anillo aromático`]},
{t:`t26`,sub:`Regla de Hückel`,src:`Tema 26, pág. 3`,id:`7SlTcn7QBEc`,title:`Regla de Hückel 4n+2: compuestos aromáticos y antiaromáticos`,ch:``,rep:[`Requisitos de la aromaticidad y regla de Hückel`]},
{t:`t26`,sub:`Aromaticidad y Hückel en el benceno`,src:`Tema 26, pág. 3`,id:`tqWRjmONM5s`,title:`Benceno: aromaticidad y aplicación de las reglas de Hückel`,ch:``,rep:[`Requisitos de la aromaticidad y regla de Hückel`]},
{t:`t26`,sub:`Hidrocarburos aromáticos (panorama)`,src:`Tema 26, pág. 2–10`,id:`FyZ8Zc3exC0`,title:`Hidrocarburos aromáticos`,ch:``,rep:[`¿Qué es un hidrocarburo aromático?`,`Propiedades físicas de los aromáticos`,`Tipos de estructuras aromáticas`]},
{t:`t26`,sub:`Sustitución electrófila aromática`,src:`Tema 26, pág. 7`,id:`DSx8MphKjvs`,title:`Reacciones del benceno: sustitución electrofílica aromática`,ch:``,rep:[`Sustitución electrófila aromática (SEA)`]},
{t:`t26`,sub:`Halogenación, nitración y sulfonación`,src:`Tema 26, pág. 7`,id:`W66T6UZSsng`,title:`Sustitución electrofílica aromática 1: halogenación, nitración y sulfonación`,ch:``,rep:[`Sustitución electrófila aromática (SEA)`]},
{t:`t26`,sub:`Reacciones de los aromáticos`,src:`Tema 26, pág. 7–8`,id:`qNwd_Tc_etU`,title:`Reacciones de hidrocarburos aromáticos. Reacciones del benceno`,ch:`Química con Irwin`,rep:[`Reacciones de adición y de oxidación`,`Sustitución electrófila aromática (SEA)`]},
{t:`t26`,sub:`Nomenclatura del benceno`,src:`Tema 26, pág. 11–13`,id:`137EHGg92Uk`,title:`Nomenclatura de benceno (hidrocarburos aromáticos)`,ch:``,rep:[`Nomenclatura: bases y conceptos`,`Monosustituidos y nombres comunes`]},
{t:`t26`,sub:`Orto, meta y para`,src:`Tema 26, pág. 12 y 14`,id:`54Xum62T-6E`,title:`Nomenclatura del benceno (orto, meta y para)`,ch:``,rep:[`Sustituyentes y prefijos orto, meta, para`,`Disustituidos`]},
{t:`t26`,sub:`Disustituidos`,src:`Tema 26, pág. 14`,id:`numhsJfo6e4`,title:`Derivados disustituidos del benceno`,ch:``,rep:[`Disustituidos`]},
{t:`t26`,sub:`Trisustituidos`,src:`Tema 26, pág. 15`,id:`dRCaP_CKkwY`,title:`Nombra derivados trisustituidos del benceno`,ch:``,rep:[`Trisustituidos`]},
{t:`t26`,sub:`Ejercicios resueltos de nomenclatura`,src:`Tema 26, pág. 12–16`,id:`KFppakMNlNE`,title:`Ejercicios resueltos de nomenclatura de compuestos derivados del benceno`,ch:``,rep:[`Trisustituidos`,`Cadenas largas: el benceno como fenilo`]},
{t:`t26`,sub:`Aminoácidos aromáticos`,src:`Tema 26, pág. 18`,id:`yksqp9h8Qu8`,title:`Aminoácidos aromáticos explicados`,ch:``,rep:[`Interés biológico: aminoácidos aromáticos`]},
{t:`t26`,sub:`Síntesis de catecolaminas`,src:`Tema 26, pág. 19`,id:`Ujbgr-9noOA`,title:`Síntesis de catecolaminas (dopamina, norepinefrina, epinefrina)`,ch:``,rep:[`Interés biológico: hormonas y neurotransmisores`]}
];
VIDEOS.push(...VIDEOS_T26);
