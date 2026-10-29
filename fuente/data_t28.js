/* ======================= TEMA 28: ÉTERES Y EPÓXIDOS ======================= */
const REPASO_T28 = [
{t:`t28`,src:`Tema 28, pág. 1–3`,title:`Estructura de los éteres`,fig:`eterEstructura`,
 body:`<p>Los <b>éteres</b> tienen un <b>átomo de oxígeno unido a dos grupos alquilo o arilo</b>: <b>R−O−R'</b>. Los dos grupos pueden ser iguales (simétricos) o diferentes (asimétricos).</p>
 <ul><li><b>Geometría angular</b> alrededor del oxígeno, parecida a la del agua (≈ 110°).</li>
 <li>El oxígeno tiene <b>hibridación sp³</b>, con <b>dos pares de electrones libres</b> y <b>dos enlaces σ</b>.</li>
 <li>El enlace <b>C−O es polar</b>.</li></ul>
 <p><b>Tipos de sustituyentes:</b> <b>alifáticos</b> (R son alquilos: metilo, etilo), <b>aromáticos</b> (al menos un R es un anillo, como el anisol C₆H₅−O−CH₃) y <b>cíclicos</b> (las cadenas se unen y forman un anillo que incluye al oxígeno, como el tetrahidrofurano).</p>
 <p class="note">La portada del PDF dice "Tema 29", pero el archivo es el Tema 28. Aquí se usa Tema 28 para todo. Fórmula global de un éter saturado: <b>CₙH₂ₙ₊₂O</b>, la misma que la de los alcoholes (Tema 27, pág. 4).</p>`,
 memo:`Éter = R−O−R'. O sp³, angular (~110°), 2 pares libres, C−O polar.`},
{t:`t28`,src:`Tema 28, pág. 4`,title:`Clasificación por simetría y por naturaleza de los grupos`,fig:`clasifEter`,
 body:`<p><b>1. Por la simetría de los grupos:</b></p>
 <ul><li><b>Simétricos o simples</b> (R = R'): éter dietílico, CH₃CH₂−O−CH₂CH₃.</li>
 <li><b>Asimétricos o mixtos</b> (R ≠ R'): éter etil metílico, CH₃−O−CH₂CH₃.</li></ul>
 <p><b>2. Por la naturaleza química de los grupos:</b></p>
 <ul><li><b>Alifáticos:</b> R y R' son alquilos (cadenas abiertas). Ej.: éter dimetílico CH₃−O−CH₃.</li>
 <li><b>Aromáticos:</b> al menos un grupo es arilo.
  <ul><li><b>Mixtos (alifático-aromático):</b> un alquilo y un arilo. Ej.: anisol C₆H₅−O−CH₃.</li>
  <li><b>Aromáticos puros:</b> dos anillos. Ej.: difenil éter C₆H₅−O−C₆H₅.</li></ul></li></ul>`,
 memo:`Simétrico R = R' · asimétrico R ≠ R' · alifático (alquilos) · aromático (al menos un arilo).`},
{t:`t28`,src:`Tema 28, pág. 5`,title:`Clasificación por la cadena: acíclicos y cíclicos`,fig:`ciclicosEter`,
 body:`<ul><li><b>Acíclicos (cadena abierta):</b> el oxígeno no forma parte de un anillo.</li>
 <li><b>Cíclicos:</b> el oxígeno está dentro de un anillo de carbonos. Según el tamaño:</li></ul>
 <div class="scroll"><table class="tbl"><thead><tr><th>Tipo</th><th>Miembros</th><th>Composición</th><th>Forma</th></tr></thead><tbody>
 <tr><td><b>Epóxidos</b> (oxiranos)</td><td>3</td><td>2 C + 1 O</td><td>Triángulo</td></tr>
 <tr><td><b>Oxetanos</b></td><td>4</td><td>3 C + 1 O</td><td>Cuadrado</td></tr>
 <tr><td><b>Oxolanos</b></td><td>5</td><td>4 C + 1 O</td><td>Pentágono</td></tr>
 <tr><td><b>Oxanos</b></td><td>6</td><td>5 C + 1 O</td><td>Hexágono</td></tr>
 <tr><td><b>Dioxanos</b></td><td>6</td><td>4 C + 2 O</td><td>Hexágono con dos O (el más común: 1,4-dioxano)</td></tr></tbody></table></div>
 <ul><li><b>Éteres corona:</b> macrociclos con muchos grupos éter repetidos, (−CH₂−CH₂−O−)ₙ. Ej.: 18-corona-6.</li>
 <li><b>Criptandos:</b> estructuras tridimensionales (bicíclicas o policíclicas) parecidas a los éteres corona, capaces de <b>encapsular iones</b> por completo.</li></ul>`,
 memo:`3 epóxido · 4 oxetano · 5 oxolano (THF) · 6 oxano · 6 con 2 O dioxano.`},
{t:`t28`,src:`Tema 28, pág. 7`,title:`Nomenclatura IUPAC: alcoxialcanos`,fig:`nombreEter`,
 body:`<p>La <b>cadena más corta</b> unida al oxígeno se nombra como <b>sustituyente alcoxi</b> (R−O−) y la <b>más larga</b> como el <b>alcano principal</b>.</p>
 <ol><li><b>Cadena principal:</b> la cadena carbonada más larga.</li>
 <li><b>Grupo alcoxi:</b> la cadena más corta unida al O termina en <b>-oxi</b>: CH₃−O− metoxi, CH₃CH₂−O− etoxi, C₆H₅−O− fenoxi.</li>
 <li><b>Numerar</b> la cadena principal desde el extremo más cercano al grupo alcoxi.</li>
 <li><b>Nombre:</b> posición del alcoxi + nombre del alcoxi + alcano principal.</li></ol>
 <div class="scroll"><table class="tbl"><thead><tr><th>Fórmula</th><th>Nombre IUPAC</th></tr></thead><tbody>
 <tr><td>CH₃−O−CH₂CH₃</td><td>Metoxietano</td></tr><tr><td>CH₃CH₂−O−CH₂CH₂CH₃</td><td>Etoxipropano (1-etoxipropano)</td></tr><tr><td>CH₃−O−CH(CH₃)₂</td><td>2-metoxipropano</td></tr></tbody></table></div>
 <p class="note">Con la cadena de 1 o 2 carbonos no hace falta el número (metoxietano). Desde 3 carbonos conviene escribirlo: 1-etoxipropano frente a 2-etoxipropano son compuestos distintos.</p>`,
 memo:`Corta = alcoxi (met-oxi, et-oxi). Larga = alcano. "2-metoxipropano".`},
{t:`t28`,src:`Tema 28, pág. 8`,title:`Nomenclatura común`,fig:null,
 body:`<p>Se usa para éteres sencillos.</p>
 <ol><li>Se nombran los <b>dos grupos</b> unidos al oxígeno como radicales (-il o -ílico), en <b>orden alfabético</b>.</li>
 <li>Se antepone la palabra <b>"éter"</b> y se añade <b>"-ílico"</b> al segundo radical, o bien se listan los radicales seguidos de "éter".</li></ol>
 <div class="scroll"><table class="tbl"><thead><tr><th>Fórmula</th><th>Común</th><th>Alternativa</th><th>IUPAC</th></tr></thead><tbody>
 <tr><td>CH₃CH₂−O−CH₂CH₃</td><td>Éter dietílico</td><td>dietil éter</td><td>Etoxietano</td></tr>
 <tr><td>CH₃−O−CH₂CH₃</td><td>Éter etilmetílico</td><td>etil metil éter</td><td>Metoxietano</td></tr>
 <tr><td>C₆H₅−O−CH₃</td><td>Éter fenilmetílico</td><td><b>anisol</b></td><td>Metoxibenceno</td></tr></tbody></table></div>`,
 memo:`Común: "éter" + radicales en orden alfabético + -ílico (éter etilmetílico).`},
{t:`t28`,src:`Tema 28, pág. 9`,title:`Nomenclatura de éteres cíclicos`,fig:`ciclicosEter`,
 body:`<p>La IUPAC usa dos sistemas:</p>
 <p><b>a. Sustitutiva (prefijo "oxa-"):</b> el anillo se ve como un cicloalcano en el que un carbono se reemplazó por oxígeno. Se pone <b>oxa-</b> y el oxígeno recibe la <b>posición 1</b>.</p>
 <ul><li>Anillo de 3 → <b>oxaciclopropano</b>.</li><li>Anillo de 5 → <b>oxaciclopentano</b>.</li></ul>
 <p><b>b. Hantzsch-Widman y nombres aceptados:</b></p>
 <div class="scroll"><table class="tbl"><thead><tr><th>Miembros</th><th>Nombre</th><th>También</th></tr></thead><tbody>
 <tr><td>3</td><td>Oxirano</td><td>Epóxido · oxaciclopropano</td></tr><tr><td>4</td><td>Oxetano</td><td>Oxaciclobutano</td></tr>
 <tr><td>5</td><td>Oxolano</td><td>Tetrahidrofurano (THF)</td></tr><tr><td>6</td><td>Oxano</td><td>Tetrahidropirano (THP)</td></tr></tbody></table></div>
 <p>Con dobles enlaces en el anillo: <b>furano</b> (5 miembros, 2 dobles) y <b>4H-pirano</b> (6 miembros). Con dos O: <b>1,4-dioxano</b>.</p>
 <p class="note">Oxirano, oxetano, oxolano y oxano son los nombres sistemáticos de Hantzsch-Widman; THF y THP son los nombres comunes.</p>`,
 memo:`Oxa- + cicloalcano (O = posición 1). Ox-irano (3), ox-etano (4), ox-olano (5), ox-ano (6).`},
{t:`t28`,src:`Tema 28, pág. 10`,title:`Éteres más comunes y sus usos`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>IUPAC</th><th>Común</th><th>Fórmula</th><th>Tipo</th><th>Uso</th></tr></thead><tbody>
 <tr><td>Etoxietano</td><td>Éter dietílico / etílico</td><td>CH₃CH₂−O−CH₂CH₃</td><td>Acíclico simétrico</td><td>Anestésico general y solvente de laboratorio</td></tr>
 <tr><td>Metoximetano</td><td>Éter dimetílico (DME)</td><td>CH₃−O−CH₃</td><td>Acíclico simétrico</td><td>Propelente de aerosoles, refrigerante</td></tr>
 <tr><td>2-metoxi-2-metilpropano</td><td>Metil tert-butil éter (MTBE)</td><td>CH₃−O−C(CH₃)₃</td><td>Acíclico asimétrico</td><td>Aumenta el octanaje de la gasolina</td></tr>
 <tr><td>Metoxibenceno</td><td>Anisol</td><td>C₆H₅−O−CH₃</td><td>Aromático mixto</td><td>Perfumes, feromonas, insecticidas</td></tr>
 <tr><td>Oxirano</td><td>Óxido de etileno</td><td>C₂H₄O</td><td>Cíclico (epóxido, 3)</td><td>Esterilizante de equipo médico</td></tr>
 <tr><td>Oxolano</td><td>Tetrahidrofurano (THF)</td><td>C₄H₈O</td><td>Cíclico (5)</td><td>Solvente para polímeros</td></tr>
 <tr><td>1,4-dioxano</td><td>Dioxano</td><td>C₄H₈O₂</td><td>Cíclico (6, diéter)</td><td>Solvente industrial</td></tr>
 <tr><td>1,4,7,10,13,16-hexaoxaciclooctadecano</td><td>18-corona-6</td><td>C₁₂H₂₄O₆</td><td>Éter corona</td><td>Transferencia de fase</td></tr></tbody></table></div>
 <p>En el laboratorio clínico: el <b>óxido de etileno</b> esteriliza material sensible al calor y el <b>éter dietílico</b> es un solvente de extracción (muy inflamable).</p>`,
 memo:`Dietil éter = anestésico/solvente · óxido de etileno = esterilizante · THF = solvente.`},
{t:`t28`,src:`Tema 28, pág. 11`,title:`Propiedades físicas de los éteres`,fig:`ebEter`,
 body:`<ol><li><b>Puntos de ebullición y fusión más bajos que los alcoholes</b>, porque no forman puentes de hidrógeno entre sí (no tienen H unido al O); son <b>parecidos a los de los alcanos</b>.</li>
 <li><b>Solubilidad en agua:</b> los de menor peso molecular, porque el oxígeno puede <b>aceptar</b> puentes de hidrógeno del agua.</li>
 <li><b>Polaridad:</b> moderadamente polares.</li>
 <li><b>Estado, olor y volatilidad:</b> los más pequeños son gases; los líquidos son incoloros y <b>muy volátiles</b>.</li>
 <li><b>Densidad</b> menor que el agua.</li>
 <li><b>Altamente inflamables.</b></li></ol>
 <p class="note"><b>Error del material:</b> como ejemplo dice "etanol 78 °C, éter dimetílico 34 °C". El éter <b>dimetílico</b> hierve a −24 °C (es gas); el que hierve a 34.6 °C es el éter <b>dietílico</b> [2]. La comparación justa es entre compuestos de masa parecida: etanol (46 g/mol) 78 °C frente a éter dimetílico (46 g/mol) −24 °C.</p>`,
 memo:`Sin H en el O → no hay puente de H entre éteres → hierven bajo (como alcanos). Pero aceptan puente de H del agua.`},
{t:`t28`,src:`Tema 28, pág. 12`,title:`Propiedades químicas de los éteres`,fig:`reaccEter`,
 body:`<p>Tienen <b>baja reactividad general</b> porque el enlace C−O−C es fuerte y estable (por eso son buenos solventes).</p>
 <ol><li><b>Ruptura con ácidos fuertes (clivaje ácido):</b> con HI o HBr concentrados y calor se rompen los enlaces C−O: <span class="fx" style="display:inline-block;padding:2px 8px;font-size:1rem">R−O−R' + HI → R−I + R'−OH</span></li>
 <li><b>Formación de peróxidos (autooxidación):</b> expuestos al aire y la luz por mucho tiempo, reaccionan lentamente con el O₂ por radicales libres: R−CH₂−O−R + O₂ → R−CH(OOH)−O−R. Los peróxidos son explosivos.</li>
 <li><b>Complejos con ácidos de Lewis:</b> los pares libres del O los hacen <b>donadores de electrones</b>: R₂O + BF₃ → R₂O:BF₃.</li>
 <li><b>Combustión:</b> muy inflamables: CₙH₂ₙ₊₂O + (3n/2) O₂ → n CO₂ + (n+1) H₂O.</li></ol>
 <p class="note">Consejo de laboratorio (complementario [2]): los frascos de éter abiertos hace tiempo pueden acumular peróxidos; por eso se fechan al abrirlos y no se destilan hasta sequedad.</p>`,
 memo:`Casi inertes. Reacciones: HI/HBr (rompe) · O₂ + luz (peróxidos) · BF₃ (complejo) · O₂ (combustión, 3n/2).`},
{t:`t28`,src:`Tema 28, pág. 13`,title:`Epóxidos`,fig:`epoxido`,
 body:`<p>Por su forma de <b>triángulo</b> son <b>muy reactivos e inestables</b>: los ángulos del anillo son de ≈ <b>60°</b> (muy lejos de 109.5°) y sus tres miembros están <b>eclipsados</b>.</p>
 <p>Por eso el anillo <b>se abre con facilidad</b>, incluso a temperatura ambiente y con <b>nucleófilos débiles</b> como el agua, los alcoholes y las aminas. (Un éter común, en cambio, necesita HI caliente.)</p>
 <p><b>Importancia práctica e industrial:</b></p>
 <ul><li><b>Resinas epoxi.</b></li>
 <li><b>Síntesis orgánica:</b> "bloques de construcción" en química farmacéutica para introducir dos carbonos y un −OH en una sola etapa.</li>
 <li><b>Esterilizantes y biocidas:</b> el <b>óxido de etileno</b> se une al ADN y a las proteínas de los microorganismos y los desnaturaliza; se usa para esterilizar equipo médico sensible al calor.</li></ul>
 <p class="note">El material deja "Resinas epoxi" sin descripción. Complementario [2]: son adhesivos y recubrimientos muy resistentes que se forman al abrir epóxidos y unirlos en cadena (pegamentos de dos componentes, pisos y pinturas industriales).</p>`,
 memo:`Epóxido = triángulo (60°) → tenso → se abre fácil (agua, alcoholes, aminas). Óxido de etileno = esteriliza.`}
];

const MCQ_T28 = [
{t:`t28`,src:`Tema 28, pág. 3`,q:`La fórmula general de un éter es:`,o:[`R−O−R'`,`R−OH`,`R−CO−R'`,`R−COO−R'`],e:`Un oxígeno unido a dos grupos alquilo o arilo.`},
{t:`t28`,src:`Tema 28, pág. 3`,q:`El oxígeno de un éter tiene hibridación:`,o:[`sp³, con dos pares libres y dos enlaces σ`,`sp², con un enlace π`,`sp, lineal`,`sp³, sin pares libres`],e:`Geometría angular, parecida a la del agua.`},
{t:`t28`,src:`Tema 28, pág. 3`,q:`El ángulo C−O−C de un éter es aproximadamente:`,o:[`110°`,`180°`,`120°`,`60°`],e:`Geometría angular similar al agua.`},
{t:`t28`,src:`Tema 28, pág. 3`,q:`El enlace C−O de los éteres es:`,o:[`Polar`,`Apolar`,`Iónico`,`Metálico`],e:`El O es más electronegativo que el C.`},
{t:`t28`,src:`Tema 28, pág. 3`,q:`El tetrahidrofurano es un ejemplo de éter:`,o:[`Cíclico`,`Aromático puro`,`Acíclico simétrico`,`Corona`],e:`Las cadenas forman un anillo que incluye al oxígeno.`},
{t:`t28`,src:`Tema 28, pág. 3 · Tema 27, pág. 4`,q:`¿Qué función comparte la fórmula CₙH₂ₙ₊₂O con los éteres?`,o:[`Alcoholes`,`Aldehídos`,`Cetonas`,`Ácidos`],e:`Alcohol y éter con los mismos C son isómeros de función.`},
{t:`t28`,src:`Tema 28, pág. 4`,q:`El éter dietílico (CH₃CH₂−O−CH₂CH₃) es:`,o:[`Simétrico`,`Asimétrico`,`Aromático`,`Cíclico`],e:`R = R' (los dos son etilo).`},
{t:`t28`,src:`Tema 28, pág. 4`,q:`El éter etil metílico (CH₃−O−CH₂CH₃) es:`,o:[`Asimétrico o mixto`,`Simétrico`,`Aromático puro`,`Epóxido`],e:`R ≠ R'.`},
{t:`t28`,src:`Tema 28, pág. 4`,q:`El anisol (C₆H₅−O−CH₃) es un éter:`,o:[`Aromático mixto (alifático-aromático)`,`Aromático puro`,`Alifático simétrico`,`Cíclico`],e:`Un grupo alquilo y un grupo arilo.`},
{t:`t28`,src:`Tema 28, pág. 4`,q:`El difenil éter (C₆H₅−O−C₆H₅) es un éter:`,o:[`Aromático puro`,`Aromático mixto`,`Alifático`,`Corona`],e:`Dos anillos aromáticos unidos al oxígeno.`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`Un epóxido es un éter cíclico de:`,o:[`3 miembros (2 C + 1 O)`,`4 miembros`,`5 miembros`,`6 miembros`],e:`Forma de triángulo.`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`Un oxolano tiene:`,o:[`5 miembros (4 C + 1 O)`,`3 miembros`,`4 miembros`,`6 miembros`],e:`Ejemplo: tetrahidrofurano (THF).`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`Un oxetano tiene:`,o:[`4 miembros (3 C + 1 O)`,`3 miembros`,`5 miembros`,`6 miembros`],e:`Anillo cuadrado.`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`El 1,4-dioxano es un anillo de 6 miembros con:`,o:[`Dos átomos de oxígeno`,`Un oxígeno`,`Un nitrógeno`,`Tres oxígenos`],e:`Dioxano = dos O en el mismo ciclo.`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`Los éteres corona son:`,o:[`Macrociclos con grupos éter repetidos (−CH₂−CH₂−O−)ₙ`,`Éteres de 3 miembros`,`Éteres aromáticos`,`Peróxidos`],e:`Ejemplo: 18-corona-6.`},
{t:`t28`,src:`Tema 28, pág. 5`,q:`Los criptandos se caracterizan por:`,o:[`Encapsular iones en un espacio tridimensional`,`Ser lineales`,`No tener oxígeno`,`Ser gases`],e:`Son bicíclicos o policíclicos, parecidos a los éteres corona.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`En la nomenclatura IUPAC, la cadena más corta unida al O se nombra como:`,o:[`Grupo alcoxi`,`Alcano principal`,`Grupo hidroxi`,`Grupo carbonilo`],e:`La más larga es el alcano principal.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`El grupo CH₃CH₂−O− se llama:`,o:[`Etoxi`,`Metoxi`,`Etil`,`Etanol`],e:`CH₃−O− metoxi; C₆H₅−O− fenoxi.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`El nombre IUPAC de CH₃−O−CH₂CH₃ es:`,o:[`Metoxietano`,`Etoximetano`,`Éter dimetílico`,`Propanol`],e:`Corta (1 C) = metoxi; larga (2 C) = etano.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`El nombre IUPAC de CH₃−O−CH(CH₃)₂ es:`,o:[`2-metoxipropano`,`1-metoxipropano`,`Metoxibutano`,`Isopropanol`],e:`Cadena de 3 C con el metoxi en el C2.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`El nombre IUPAC de CH₃CH₂−O−CH₂CH₂CH₃ es:`,o:[`Etoxipropano`,`Propoxietano`,`Etoxietano`,`Pentanol`],e:`Corta (2 C) = etoxi; larga (3 C) = propano.`},
{t:`t28`,src:`Tema 28, pág. 7`,q:`C₆H₅−O− se nombra como:`,o:[`Fenoxi`,`Fenil`,`Bencilo`,`Fenol`],e:`Grupo alcoxi aromático.`},
{t:`t28`,src:`Tema 28, pág. 8`,q:`En la nomenclatura común, CH₃−O−CH₂CH₃ se llama:`,o:[`Éter etilmetílico`,`Éter metiletílico`,`Metoxietano`,`Éter dietílico`],e:`Radicales en orden alfabético: etil antes que metil.`},
{t:`t28`,src:`Tema 28, pág. 8`,q:`El nombre común del metoxibenceno es:`,o:[`Anisol`,`Fenol`,`Tolueno`,`Anilina`],e:`Éter fenilmetílico.`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`En la nomenclatura "oxa-", el anillo de 5 miembros con un O se llama:`,o:[`Oxaciclopentano`,`Oxaciclopropano`,`Oxano`,`Dioxano`],e:`Ciclopentano con un C reemplazado por O.`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`En la nomenclatura "oxa-", el oxígeno recibe la posición:`,o:[`1`,`2`,`La más alta`,`Ninguna`],e:`Siempre es el átomo 1 del anillo.`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`El oxirano también se llama:`,o:[`Epóxido u oxaciclopropano`,`Oxolano`,`THF`,`Dioxano`],e:`Anillo de 3 miembros.`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`El nombre común del oxolano es:`,o:[`Tetrahidrofurano (THF)`,`Tetrahidropirano`,`Furano`,`Óxido de etileno`],e:`El oxano es el tetrahidropirano (THP).`},
{t:`t28`,src:`Tema 28, pág. 10`,q:`El éter usado como anestésico general y solvente de laboratorio es:`,o:[`Etoxietano (éter dietílico)`,`Metoximetano`,`MTBE`,`Anisol`],e:`También es muy inflamable.`},
{t:`t28`,src:`Tema 28, pág. 10`,q:`El MTBE (metil tert-butil éter) se usa para:`,o:[`Aumentar el octanaje de la gasolina`,`Esterilizar equipo médico`,`Anestesia`,`Perfumes`],e:`Su nombre IUPAC es 2-metoxi-2-metilpropano.`},
{t:`t28`,src:`Tema 28, pág. 10 y 13`,q:`El óxido de etileno (oxirano) se usa en el área de salud como:`,o:[`Esterilizante de equipo médico sensible al calor`,`Anestésico`,`Antibiótico oral`,`Solvente de polímeros`],e:`Desnaturaliza ADN y proteínas de los microorganismos.`},
{t:`t28`,src:`Tema 28, pág. 10`,q:`La fórmula del 18-corona-6 es:`,o:[`C₁₂H₂₄O₆`,`C₁₈H₃₆O₆`,`C₆H₁₂O₆`,`C₁₂H₂₄O₁₈`],e:`6 unidades −CH₂−CH₂−O−: 12 C, 24 H, 6 O.`},
{t:`t28`,src:`Tema 28, pág. 11`,q:`¿Por qué los éteres hierven más bajo que los alcoholes de masa parecida?`,o:[`No forman puentes de hidrógeno entre sus moléculas`,`Son más pesados`,`Son iónicos`,`Tienen enlaces π`],e:`No tienen H unido al O.`},
{t:`t28`,src:`Tema 28, pág. 11`,q:`Los éteres pequeños se disuelven en agua porque:`,o:[`Su oxígeno acepta puentes de hidrógeno del agua`,`Forman puentes de H entre ellos`,`Son iónicos`,`Reaccionan con el agua`],e:`Aceptan, pero no donan, puentes de H.`},
{t:`t28`,src:`Tema 28, pág. 11 · compl. [2]`,q:`¿Qué éter hierve a 34.6 °C?`,o:[`El éter dietílico`,`El éter dimetílico`,`El anisol`,`El THF`],e:`El material atribuye 34 °C al dimetílico, que en realidad hierve a −24 °C.`},
{t:`t28`,src:`Tema 28, pág. 11`,q:`Respecto al agua, la densidad de los éteres es:`,o:[`Menor`,`Mayor`,`Igual`,`Variable según el color`],e:`Flotan sobre el agua.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`Los éteres tienen baja reactividad porque:`,o:[`El enlace C−O−C es fuerte y estable`,`No tienen oxígeno`,`Son iónicos`,`Tienen anillos tensos`],e:`Por eso se usan como solventes.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`La reacción más representativa de los éteres es la ruptura con:`,o:[`HI o HBr concentrados y calor`,`NaOH diluido`,`Agua fría`,`Luz UV sola`],e:`R−O−R' + HI → R−I + R'−OH.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`Al exponer un éter al aire y a la luz por mucho tiempo se forman:`,o:[`Peróxidos orgánicos`,`Alcoholes`,`Alquenos`,`Ácidos carboxílicos`],e:`Autooxidación por radicales libres; los peróxidos son explosivos.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`Frente al BF₃, los éteres actúan como:`,o:[`Donadores de electrones (bases de Lewis)`,`Ácidos de Lewis`,`Oxidantes`,`Catalizadores`],e:`R₂O + BF₃ → R₂O:BF₃, gracias a los pares libres del O.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`En la combustión de 1 mol de etoxietano (C₄H₁₀O), ¿cuántos mol de O₂ se usan?`,o:[`6`,`4`,`6.5`,`5`],e:`3n/2 = 3(4)/2 = 6 → 4 CO₂ + 5 H₂O.`},
{t:`t28`,src:`Tema 28, pág. 13`,q:`Los epóxidos son muy reactivos porque:`,o:[`Su anillo de 3 tiene ángulos de ≈60° y enlaces eclipsados`,`No tienen oxígeno`,`Son lineales`,`Son aromáticos`],e:`La tensión del anillo hace que se abra con facilidad.`},
{t:`t28`,src:`Tema 28, pág. 13`,q:`Los epóxidos pueden reaccionar incluso con:`,o:[`Nucleófilos débiles como agua, alcoholes y aminas`,`Solo HI concentrado`,`Nada a temperatura ambiente`,`Solo metales alcalinos`],e:`A diferencia de los éteres comunes.`},
{t:`t28`,src:`Tema 28, pág. 13`,q:`En síntesis farmacéutica los epóxidos sirven para introducir en una etapa:`,o:[`Dos carbonos y un grupo −OH`,`Un anillo aromático`,`Un grupo nitro`,`Un halógeno`],e:`Funcionan como "bloques de construcción".`}
];

const ABIERTAS_T28 = [
{t:`t28`,src:`Tema 28, pág. 3`,q:`Describa la estructura de un éter: grupo funcional, geometría, hibridación del oxígeno y polaridad.`,a:`Un éter tiene un oxígeno unido a dos grupos alquilo o arilo (R−O−R'). El oxígeno es sp³, con dos pares de electrones libres y dos enlaces σ, por eso la geometría es angular (≈ 110°, como el agua). El enlace C−O es polar, por la diferencia de electronegatividad. Los grupos pueden ser alifáticos, aromáticos o formar un ciclo con el oxígeno.`},
{t:`t28`,src:`Tema 28, pág. 4–5`,q:`Explique los tres criterios de clasificación de los éteres con un ejemplo de cada tipo.`,a:`1) Simetría: simétricos (R = R', éter dietílico) y asimétricos (R ≠ R', éter etil metílico). 2) Naturaleza de los grupos: alifáticos (éter dimetílico), aromáticos mixtos (anisol) y aromáticos puros (difenil éter). 3) Cadena: acíclicos (el O no está en un anillo) y cíclicos: epóxidos (3), oxetanos (4), oxolanos (5, THF), oxanos (6), dioxanos (6 con 2 O), éteres corona y criptandos.`},
{t:`t28`,src:`Tema 28, pág. 7–9`,q:`Explique las reglas para nombrar éteres con la nomenclatura IUPAC, la común y la de éteres cíclicos.`,a:`IUPAC: la cadena más corta unida al O es el grupo alcoxi (metoxi, etoxi, fenoxi) y la más larga el alcano principal; se numera desde el extremo más cercano al alcoxi y se escribe posición + alcoxi + alcano (2-metoxipropano). Común: los dos radicales en orden alfabético con "éter" y -ílico (éter etilmetílico) o seguidos de "éter" (etil metil éter). Cíclicos: prefijo oxa- sobre el cicloalcano con el O en la posición 1 (oxaciclopropano) o nombres de Hantzsch-Widman: oxirano (3), oxetano (4), oxolano/THF (5), oxano/THP (6).`},
{t:`t28`,src:`Tema 28, pág. 11 · Tema 27, pág. 13`,q:`Compare el punto de ebullición y la solubilidad de un éter y un alcohol de masa parecida, y explique por qué difieren.`,a:`El alcohol tiene un H unido al O y forma puentes de hidrógeno entre sus moléculas; el éter no tiene ese H y no puede formarlos entre sí. Por eso el éter hierve mucho más bajo, parecido a un alcano: el etanol (46 g/mol) hierve a 78 °C y el éter dimetílico (46 g/mol) a −24 °C. En agua, los dos se disuelven si son pequeños, porque el O del éter puede aceptar puentes de H del agua, aunque no los done.`},
{t:`t28`,src:`Tema 28, pág. 12–13`,q:`Describa las reacciones de los éteres y explique por qué los epóxidos son mucho más reactivos.`,a:`Los éteres son poco reactivos (C−O−C fuerte). Reacciones: ruptura con HI o HBr concentrados y calor (R−O−R' + HI → R−I + R'−OH); autooxidación con O₂ y luz que forma peróxidos explosivos; complejos con ácidos de Lewis como BF₃ (R₂O:BF₃); combustión (CₙH₂ₙ₊₂O + 3n/2 O₂ → n CO₂ + (n+1) H₂O). Los epóxidos son anillos de 3 con ángulos de ≈ 60° y enlaces eclipsados: esa tensión hace que el anillo se abra fácilmente, incluso con nucleófilos débiles como agua, alcoholes y aminas a temperatura ambiente.`}
];

const EJ_T28 = [
{t:`t28`,src:`Tema 28, pág. 7 (ejemplos)`,q:`Nombre según la IUPAC: a) CH₃−O−CH₂CH₃; b) CH₃CH₂−O−CH₂CH₂CH₃; c) CH₃−O−CH(CH₃)₂.`,
 pide:`Elegir alcoxi (cadena corta) y alcano (cadena larga).`,datos:[`La cadena corta lleva -oxi`],f:`posición + alcoxi + alcano`,
 pasos:[`a) Corta 1 C = metoxi; larga 2 C = etano → metoxietano.`,`b) Corta 2 C = etoxi; larga 3 C = propano; el O está en el C1 → (1-)etoxipropano.`,`c) Corta 1 C = metoxi; larga 3 C = propano con el O en el C central → 2-metoxipropano.`],r:`metoxietano; etoxipropano; 2-metoxipropano`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 7`,q:`Nombre según la IUPAC: a) CH₃−O−CH₃; b) CH₃CH₂−O−CH₂CH₃; c) CH₃−O−CH₂CH₂CH₂CH₃; d) C₆H₅−O−CH₂CH₃.`,
 pide:`Aplicar alcoxi + alcano.`,datos:[`Si las dos cadenas son iguales, una es el alcoxi`],f:`—`,
 pasos:[`a) Metoximetano (éter dimetílico).`,`b) Etoxietano (éter dietílico).`,`c) Metoxi + butano, O en C1 → 1-metoxibutano.`,`d) El anillo es la estructura mayor: etoxi + benceno → etoxibenceno (como el metoxibenceno = anisol).`],r:`metoximetano, etoxietano, 1-metoxibutano, etoxibenceno`},
{t:`t28`,src:`Tema 28, pág. 8`,q:`Dé el nombre común: a) CH₃CH₂−O−CH₂CH₃; b) CH₃−O−CH₂CH₃; c) CH₃−O−CH₂CH₂CH₃; d) C₆H₅−O−CH₃.`,
 pide:`Radicales en orden alfabético + "éter".`,datos:[`-ílico al segundo radical`],f:`éter + radical + radical-ílico`,
 pasos:[`a) Éter dietílico (dietil éter).`,`b) Etil va antes que metil → éter etilmetílico (etil metil éter).`,`c) Metil antes que propil → éter metilpropílico (metil propil éter).`,`d) Éter fenilmetílico = anisol.`],r:`éter dietílico, éter etilmetílico, éter metilpropílico, anisol`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 4–5`,q:`Clasifique (simétrico o asimétrico; alifático, aromático mixto o puro; acíclico o cíclico): a) éter dimetílico; b) anisol; c) difenil éter; d) THF; e) metoxietano.`,
 pide:`Aplicar los tres criterios.`,datos:[`Simetría · naturaleza · cadena`],f:`—`,
 pasos:[`a) Simétrico, alifático, acíclico.`,`b) Asimétrico, aromático mixto, acíclico.`,`c) Simétrico, aromático puro, acíclico.`,`d) Cíclico de 5 miembros (oxolano).`,`e) Asimétrico, alifático, acíclico.`],r:`Ver pasos`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`Nombre con "oxa-" y con Hantzsch-Widman el éter cíclico saturado de: a) 3 miembros; b) 4; c) 5; d) 6. Dé el nombre común cuando exista.`,
 pide:`Relacionar tamaño del anillo con su nombre.`,datos:[`El O ocupa la posición 1`],f:`oxa + cicloalcano`,
 pasos:[`a) Oxaciclopropano = oxirano = epóxido (óxido de etileno si no tiene sustituyentes).`,`b) Oxaciclobutano = oxetano.`,`c) Oxaciclopentano = oxolano = tetrahidrofurano (THF).`,`d) Oxaciclohexano = oxano = tetrahidropirano (THP).`],r:`oxirano, oxetano, oxolano (THF), oxano (THP)`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 12 y Tema 27, pág. 15`,q:`Escriba la combustión completa de: a) metoximetano (C₂H₆O); b) etoxietano (C₄H₁₀O).`,
 pide:`Aplicar CₙH₂ₙ₊₂O + (3n/2) O₂ → n CO₂ + (n+1) H₂O.`,datos:[`n = 2 y n = 4`],f:`O₂ = 3n/2`,
 pasos:[`a) 3(2)/2 = 3 → C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O.`,`Comprobación O: 1 + 6 = 7; 4 + 3 = 7 ✔.`,`b) 3(4)/2 = 6 → C₄H₁₀O + 6 O₂ → 4 CO₂ + 5 H₂O.`,`Comprobación O: 1 + 12 = 13; 8 + 5 = 13 ✔.`],r:`C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O; C₄H₁₀O + 6 O₂ → 4 CO₂ + 5 H₂O`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 12 y Tema 16`,q:`¿Cuántos gramos de O₂ se necesitan para quemar 37 g de éter dietílico (C₄H₁₀O)? (C = 12, H = 1, O = 16)`,
 pide:`Estequiometría de combustión.`,datos:[`37 g de C₄H₁₀O`],f:`n = m / PM`,
 pasos:[`PM = 4(12) + 10(1) + 16 = 74 g/mol.`,`n = 37 / 74 = 0.5 mol.`,`C₄H₁₀O + 6 O₂ → …: 0.5 × 6 = 3 mol de O₂.`,`Masa = 3 × 32 = 96 g de O₂.`],r:`96 g de O₂`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`Complete: a) CH₃−O−CH₂CH₃ + HI (calor); b) (CH₃CH₂)₂O + BF₃; c) R−CH₂−O−R + O₂ (luz).`,
 pide:`Reacciones de los éteres.`,datos:[`HI rompe el enlace C−O`],f:`R−O−R' + HI → R−I + R'−OH`,
 pasos:[`a) Se rompe un enlace C−O: queda un yoduro de alquilo y un alcohol; con R = CH₃: CH₃−I + CH₃CH₂−OH (yodometano + etanol).`,`b) El O dona un par de electrones: (CH₃CH₂)₂O:BF₃ (complejo).`,`c) Autooxidación: R−CH(OOH)−O−R, un hidroperóxido (peligroso, explosivo).`],r:`CH₃I + etanol; complejo con BF₃; peróxido`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 11 · Tema 27, pág. 4`,q:`Escriba un alcohol y un éter de fórmula C₂H₆O y explique cuál hierve más alto.`,
 pide:`Isómeros de función y puente de hidrógeno.`,datos:[`C₂H₆O`],f:`—`,
 pasos:[`Alcohol: CH₃−CH₂−OH (etanol).`,`Éter: CH₃−O−CH₃ (metoximetano o éter dimetílico).`,`Son isómeros de función (misma fórmula, distinta familia).`,`El etanol forma puentes de H entre sus moléculas; el éter no → el etanol hierve más alto (78 °C frente a −24 °C).`],r:`Etanol hierve más alto`},
{t:`t28`,src:`Aplicación de Tema 28, pág. 10`,q:`Calcule la masa molar del óxido de etileno (C₂H₄O), del THF (C₄H₈O) y del 1,4-dioxano (C₄H₈O₂).`,
 pide:`Sumar masas atómicas.`,datos:[`C = 12, H = 1, O = 16`],f:`PM = Σ`,
 pasos:[`C₂H₄O: 24 + 4 + 16 = 44 g/mol.`,`C₄H₈O: 48 + 8 + 16 = 72 g/mol.`,`C₄H₈O₂: 48 + 8 + 32 = 88 g/mol.`],r:`44, 72 y 88 g/mol`}
];

const FORM_T28 = [
{t:`t28`,src:`Tema 28, pág. 3–13`,title:`Éteres y epóxidos`,rows:[
 [`Fórmula`,`R−O−R' · saturado CₙH₂ₙ₊₂O (isómero de los alcoholes)`],[`Estructura`,`O sp³ · angular ≈ 110° · 2 pares libres · C−O polar`],
 [`Clasificación`,`Simétrico / asimétrico · alifático / aromático (mixto, puro) · acíclico / cíclico`],
 [`Cíclicos`,`3 oxirano (epóxido) · 4 oxetano · 5 oxolano (THF) · 6 oxano (THP) · dioxano (2 O) · corona · criptandos`],
 [`IUPAC`,`corta = alcoxi (metoxi, etoxi, fenoxi) + larga = alcano · numerar desde el alcoxi`],
 [`Común`,`éter + radicales alfabéticos + -ílico (éter etilmetílico) · anisol`],
 [`Físicas`,`Sin puente de H entre ellos → hierven bajo · aceptan puente de H del agua · volátiles · inflamables`],
 [`Reacciones`,`+HI/HBr → R−X + R'−OH · O₂/luz → peróxidos · +BF₃ → complejo · combustión 3n/2 O₂`],
 [`Epóxidos`,`Anillo de 3, 60°, tenso → se abre con agua, alcoholes, aminas · óxido de etileno = esterilizante`]]}
];

const FICHAS_T28 = [
{t:`t28`,src:`Tema 28, pág. 3`,fig:`eterEstructura`,f:`Fórmula y estructura de un éter.`,b:`R−O−R'. O sp³, angular (≈ 110°), 2 pares libres, C−O polar.`},
{t:`t28`,src:`Tema 28, pág. 4`,fig:`clasifEter`,f:`Simétrico frente a asimétrico.`,b:`Simétrico R = R' (éter dietílico). Asimétrico R ≠ R' (éter etil metílico).`},
{t:`t28`,src:`Tema 28, pág. 4`,fig:null,f:`Anisol y difenil éter: ¿qué tipo son?`,b:`Anisol: aromático mixto. Difenil éter: aromático puro.`},
{t:`t28`,src:`Tema 28, pág. 5`,fig:`ciclicosEter`,f:`Éteres cíclicos según el tamaño del anillo.`,b:`3 epóxido · 4 oxetano · 5 oxolano · 6 oxano · 6 con 2 O dioxano.`},
{t:`t28`,src:`Tema 28, pág. 5`,fig:null,f:`Éteres corona y criptandos.`,b:`Corona: macrociclos (−CH₂CH₂O−)ₙ. Criptandos: 3D, encapsulan iones.`},
{t:`t28`,src:`Tema 28, pág. 7`,fig:`nombreEter`,f:`Regla IUPAC de los éteres.`,b:`Cadena corta = alcoxi (-oxi); larga = alcano. 2-metoxipropano.`},
{t:`t28`,src:`Tema 28, pág. 7`,fig:null,f:`CH₃−O−CH₂CH₃ (IUPAC y común).`,b:`Metoxietano · éter etilmetílico.`},
{t:`t28`,src:`Tema 28, pág. 8`,fig:null,f:`Nombre común de C₆H₅−O−CH₃.`,b:`Éter fenilmetílico = anisol (metoxibenceno).`},
{t:`t28`,src:`Tema 28, pág. 9`,fig:null,f:`Oxirano, oxolano, oxano.`,b:`Oxirano = epóxido (3). Oxolano = THF (5). Oxano = THP (6).`},
{t:`t28`,src:`Tema 28, pág. 9`,fig:null,f:`Nomenclatura "oxa-".`,b:`Cicloalcano con un C cambiado por O, que es la posición 1: oxaciclopropano.`},
{t:`t28`,src:`Tema 28, pág. 10`,fig:null,f:`Éter anestésico y éter esterilizante.`,b:`Anestésico: éter dietílico. Esterilizante: óxido de etileno (oxirano).`},
{t:`t28`,src:`Tema 28, pág. 10`,fig:null,f:`¿Qué es el MTBE?`,b:`Metil tert-butil éter (2-metoxi-2-metilpropano): aumenta el octanaje.`},
{t:`t28`,src:`Tema 28, pág. 11`,fig:`ebEter`,f:`¿Por qué el éter hierve bajo?`,b:`No forma puentes de H entre sus moléculas (no tiene H en el O).`},
{t:`t28`,src:`Tema 28, pág. 11`,fig:null,f:`¿Por qué los éteres pequeños son solubles en agua?`,b:`El O acepta puentes de H del agua.`},
{t:`t28`,src:`Tema 28, pág. 12`,fig:`reaccEter`,f:`Reacción típica de los éteres.`,b:`Ruptura con HI o HBr y calor: R−O−R' + HI → R−I + R'−OH.`},
{t:`t28`,src:`Tema 28, pág. 12`,fig:null,f:`Peligro de un frasco de éter viejo.`,b:`Peróxidos (autooxidación con O₂ y luz): explosivos.`},
{t:`t28`,src:`Tema 28, pág. 13`,fig:`epoxido`,f:`¿Por qué el epóxido es tan reactivo?`,b:`Anillo de 3 con ángulos de 60° y enlaces eclipsados: se abre fácil.`}
];

const FQ_T28 = [
{t:`t28`,src:`Tema 28, pág. 7`,q:`"Nombra CH₃CH₂−O−CH₂CH₂CH₂CH₃ (IUPAC)." ¿Qué haces primero?`,o:[`Elijo la cadena corta como alcoxi y la larga como alcano`,`Busco el −OH`,`Uso -ol`,`Ordeno por número de H`],e:`Etoxi + butano: 1-etoxibutano.`},
{t:`t28`,src:`Tema 28, pág. 9`,q:`"Nombra el éter cíclico de 5 miembros." ¿Qué regla usas?`,o:[`Oxa- + cicloalcano o Hantzsch-Widman (oxolano)`,`Prefijo alcoxi`,`Sufijo -ol`,`Orto/meta/para`],e:`Oxaciclopentano = oxolano = THF.`},
{t:`t28`,src:`Tema 28, pág. 12`,q:`"¿Cuántos O₂ necesita la combustión de un éter de n carbonos?"`,o:[`3n/2, igual que un alcohol`,`(3n + 1)/2`,`n + 1`,`2n`],e:`Misma fórmula global que el alcohol: CₙH₂ₙ₊₂O.`},
{t:`t28`,src:`Tema 28, pág. 11`,q:`"¿Quién hierve más alto: un alcohol o un éter de masa parecida?"`,o:[`El alcohol (puente de H entre moléculas)`,`El éter`,`Iguales`,`Depende del color`],e:`El éter no tiene H en el O.`}
];

const VIDEOS_T28 = [
{t:`t28`,sub:`Éteres: introducción y propiedades`,src:`Tema 28, pág. 3–11`,id:`WaQw-1aJt6s`,title:`Éteres: introducción, nomenclatura, usos y propiedades físicas`,ch:``,rep:[`Estructura de los éteres`,`Propiedades físicas de los éteres`]},
{t:`t28`,sub:`Nomenclatura común y IUPAC`,src:`Tema 28, pág. 7–8`,id:`J4-S9OrGNfI`,title:`Nomenclatura de éteres (común y IUPAC)`,ch:``,rep:[`Nomenclatura IUPAC: alcoxialcanos`,`Nomenclatura común`]},
{t:`t28`,sub:`Nomenclatura de éteres (fácil)`,src:`Tema 28, pág. 7`,id:`-CgF3GWEJLU`,title:`Nomenclatura de éteres (bien fácil)`,ch:``,rep:[`Nomenclatura IUPAC: alcoxialcanos`]},
{t:`t28`,sub:`Nomenclatura IUPAC para éteres`,src:`Tema 28, pág. 7`,id:`iz65h9vWsCU`,title:`Nomenclatura IUPAC para éteres`,ch:``,rep:[`Nomenclatura IUPAC: alcoxialcanos`]},
{t:`t28`,sub:`Reacciones de los éteres`,src:`Tema 28, pág. 12`,id:`w34Sl7v2N6w`,title:`Reacciones químicas de éteres`,ch:``,rep:[`Propiedades químicas de los éteres`]},
{t:`t28`,sub:`Éteres: teoría completa`,src:`Tema 28, pág. 3–13`,id:`x8sLYeRYwLw`,title:`Tema 9. Éteres`,ch:``,rep:[`Clasificación por simetría y por naturaleza de los grupos`,`Propiedades químicas de los éteres`]},
{t:`t28`,sub:`Nomenclatura de epóxidos`,src:`Tema 28, pág. 9 y 13`,id:`svLxWJI98I0`,title:`Nomenclatura de epóxidos`,ch:``,rep:[`Nomenclatura de éteres cíclicos`]},
{t:`t28`,sub:`Epóxidos: reactividad y toxicidad`,src:`Tema 28, pág. 13`,id:`yjtJMSNzgvA`,title:`Nomenclatura de epóxidos, óxidos de alqueno u oxiranos. Reactividad y toxicidad`,ch:``,rep:[`Epóxidos`,`Nomenclatura de éteres cíclicos`]},
{t:`t28`,sub:`Apertura de epóxidos`,src:`Tema 28, pág. 13`,id:`yNm_PwpZitg`,title:`Apertura de epóxidos (oxaciclopropanos)`,ch:``,rep:[`Epóxidos`]}
];
VIDEOS.push(...VIDEOS_T28);
