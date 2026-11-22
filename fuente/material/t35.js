/* ======================= TEMA 35: PÉPTIDOS ======================= */
registerPack({
  id:`t35`, version:1,
  topic:{ t:`t35`, n:`Tema 35`, name:`Péptidos`, unit:`Unidad VIII · Compuestos orgánicos nitrogenados`, color:[`#3F7C8C`,`#9FD2DF`] },

  REPASO:[
{src:`Tema 35, pág. 3`,title:`Péptidos: definición y diferencia con las proteínas`,fig:`peptClas`,
 body:`<p>Los <b>péptidos</b> son biomoléculas formadas por la unión de <b>dos o más aminoácidos</b> mediante un enlace covalente llamado <b>enlace peptídico</b>. En esencia son <b>cadenas cortas de aminoácidos</b>: la estructura intermedia entre los aminoácidos individuales y las proteínas completas.</p>
 <p><b>Diferencia con las proteínas:</b> el tamaño y la complejidad estructural.</p>
 <ul><li><b>Péptidos:</b> cadenas lineales relativamente cortas (generalmente <b>hasta 50 aminoácidos</b>), sin estructura tridimensional compleja.</li>
 <li><b>Proteínas:</b> suelen superar los <b>50–100 aminoácidos</b> y se pliegan en estructuras 3D específicas para cumplir su función.</li></ul>
 <p class="note">El material incluye un video en esta diapositiva (youtu.be/z2sICp8E1BA).</p>`,
 memo:`Péptido: 2 o más aminoácidos unidos por enlace peptídico; hasta ≈ 50 aa, sin estructura 3D compleja. Proteína: más de 50–100 aa, con plegamiento 3D.`},
{src:`Tema 35, pág. 4`,title:`Formación del enlace peptídico`,fig:`peptForm`,
 body:`<p><b>Formación:</b> se origina por una <b>reacción de condensación</b>: el <b>grupo carboxilo (−COOH)</b> de un aminoácido se une al <b>grupo amino (−NH₂)</b> del siguiente y se <b>libera una molécula de agua (H₂O)</b>.</p>
 <p>Es un <b>enlace amida</b> sustituido entre el grupo <b>α-carboxilo</b> de un aminoácido y el <b>α-amino</b> de otro (−CO−NH−).</p>
 <p><b>Direccionalidad:</b> toda cadena peptídica tiene <b>dos extremos distintos</b>:</p>
 <ul><li><b>N-terminal:</b> con un grupo amino libre; ahí <b>inicia</b> la secuencia.</li>
 <li><b>C-terminal:</b> con un grupo carboxilo libre; ahí <b>termina</b>.</li></ul>
 <p class="note">Complementario [5]: por convención la secuencia se escribe de izquierda a derecha, del N-terminal al C-terminal. Una cadena lineal de <b>n</b> aminoácidos tiene <b>n − 1</b> enlaces peptídicos y se liberan <b>n − 1</b> moléculas de agua al formarla.</p>`,
 memo:`Condensación: −COOH + −NH₂ → −CO−NH− + H₂O (enlace amida). N-terminal: NH₂ libre, inicio. C-terminal: COOH libre, fin. n aa → n − 1 enlaces.`},
{src:`Tema 35, pág. 4`,title:`Clasificación según la configuración (cis y trans)`,fig:`peptForm`,
 body:`<p>Según la <b>configuración espacial</b> (isomería geométrica) alrededor del enlace C−N, los dos carbonos α adyacentes pueden estar:</p>
 <ul><li><b>Enlace peptídico trans:</b> los dos Cα están en <b>lados opuestos</b> del enlace C−N. Es el más común (<b>99.9 %</b>).</li>
 <li><b>Enlace peptídico cis:</b> los dos Cα están del <b>mismo lado</b> del enlace C−N.</li></ul>
 <p class="note">Complementario [5]: el objetivo del tema habla del <b>carácter parcial de doble enlace</b> del enlace peptídico (por resonancia entre C−N y C=N⁺), que lo hace <b>rígido y plano</b> y explica por qué la forma trans domina.</p>`,
 memo:`Trans: Cα en lados opuestos del enlace C−N, 99.9 %. Cis: Cα del mismo lado. El enlace tiene carácter parcial de doble enlace: rígido y plano.`},
{src:`Tema 35, pág. 5`,title:`Clasificación según los grupos que participan`,fig:`peptForm`,
 body:`<ul><li><b>Enlace peptídico normal (α-peptídico):</b> entre el <b>carboxilo unido al Cα</b> de un aminoácido y el <b>amino unido al Cα</b> del siguiente.</li>
 <li><b>Enlace isopeptídico:</b> es un enlace amida que se forma <b>fuera de la cadena principal</b>, con el grupo amino o carboxilo de una <b>cadena lateral (R)</b> en lugar de los grupos α. Ejemplo: el enlace entre el <b>grupo γ-carboxilo del glutamato</b> y la <b>cisteína</b> en el <b>glutatión</b>.</li></ul>
 <p class="note">Complementario [5]: el <b>glutatión</b> (γ-Glu-Cys-Gly) es un tripéptido antioxidante.</p>`,
 memo:`Normal (α): α-COOH con α-NH₂. Isopeptídico: usa un grupo de la cadena lateral (γ-carboxilo del Glu con la Cys en el glutatión).`},
{src:`Tema 35, pág. 5`,title:`Clasificación según el número de residuos`,fig:`peptClas`,
 body:`<p>Se clasifican según cuántos enlaces peptídicos (o residuos) contienen:</p>
 <ul><li><b>Dipéptidos, tripéptidos, tetrapéptidos y oligopéptidos:</b> entre <b>1 y 9 enlaces peptídicos</b> (de <b>2 a 10 aminoácidos</b>).</li>
 <li><b>Polipéptidos:</b> <b>10 o más enlaces peptídicos</b>: cadenas largas que, al plegarse, forman las proteínas.</li></ul>
 <p class="note">La figura de la pág. 8 muestra: péptidos de 2 a 10 aminoácidos, polipéptidos de 10 a 50 y proteínas de más de 50. Los límites se solapan en 10; para ordenar, usa la regla del texto (≤ 9 enlaces = oligopéptido; ≥ 10 enlaces = polipéptido).</p>`,
 memo:`Di-, tri-, tetra-, oligopéptido: 1–9 enlaces (2–10 aa). Polipéptido: ≥ 10 enlaces. Proteína: más de 50 aa.`},
{src:`Tema 35, pág. 6`,title:`Propiedades físicas de los péptidos`,fig:null,
 body:`<p>Dependen del <b>tamaño de la cadena</b>, de la naturaleza <b>polar o apolar de los grupos R</b> y de su <b>carácter dipolar</b>.</p>
 <ul><li><b>Aspecto:</b> sólidos cristalinos o polvos amorfos, generalmente blancos.</li>
 <li><b>Puntos de fusión:</b> mayores de <b>200 °C</b>; como los aminoácidos libres, existen como <b>zwitteriones</b> en estado sólido.</li>
 <li><b>Solubilidad:</b> generalmente solubles en <b>agua, ácidos diluidos y bases diluidas</b>, por sus grupos polares, los enlaces peptídicos (que forman puentes de H) y sus extremos cargados.</li>
 <li><b>Propiedades osmóticas y difusión:</b> por su tamaño relativamente pequeño ejercen <b>presión osmótica considerable</b> y <b>atraviesan membranas semipermeables o de diálisis</b>, a diferencia de las proteínas.</li>
 <li><b>Sabor:</b> con muchos aminoácidos hidrofóbicos, <b>amargo</b> (quesos maduros); <b>dulce</b> (aspartamo, dipéptido artificial de ácido aspártico y fenilalanina); <b>umami</b> (péptidos ricos en glutamato).</li></ul>`,
 memo:`Sólidos blancos; p. fusión > 200 °C; solubles en agua, ácidos y bases diluidos; atraviesan membranas de diálisis (las proteínas no); amargo (hidrofóbicos), dulce (aspartamo = Asp + Phe), umami (glutamato).`},
{src:`Tema 35, pág. 7`,title:`Propiedades químicas: hidrólisis y Biuret`,fig:null,
 body:`<p>Están determinadas por la reactividad de sus <b>extremos terminales</b>, los <b>enlaces peptídicos</b> y las <b>cadenas laterales (R)</b>.</p>
 <ul><li><b>Comportamiento anfótero</b> y carácter ácido-base.</li>
 <li><b>Hidrólisis del enlace peptídico:</b> los enlaces son muy estables, pero pueden romperse por hidrólisis (agua que regenera los aminoácidos libres):
  <ul><li><b>Química:</b> calentar el péptido con ácidos fuertes (como <b>HCl 6 M a 110 °C durante 24 h</b>) o con bases fuertes.</li>
  <li><b>Enzimática:</b> catalizada de forma rápida y específica por <b>peptidasas o proteasas</b>, como la <b>tripsina, la pepsina y la quimotripsina</b>, que cortan enlaces entre aminoácidos específicos.</li></ul></li>
 <li><b>Reacciones colorimétricas (reacción de Biuret)</b> y <b>reactividad de los extremos (secuenciación)</b>: el material solo los enuncia.</li></ul>
 <p class="note">Complementario [5]: en la reacción de <b>Biuret</b>, los péptidos con al menos dos enlaces peptídicos dan, con Cu²⁺ en medio alcalino, un color violeta; el dipéptido no lo da.</p>`,
 memo:`Hidrólisis: química (HCl 6 M, 110 °C, 24 h, o bases) o enzimática (tripsina, pepsina, quimotripsina). Biuret: reacción colorimétrica del enlace peptídico. Secuenciación: extremos terminales.`},
{src:`Tema 35, pág. 7`,title:`Propiedades químicas: puentes disulfuro y otras reacciones`,fig:null,
 body:`<ul><li><b>Puentes disulfuro y oxidorreducción:</b> los residuos de <b>cisteína</b> pueden oxidarse y formar <b>enlaces covalentes disulfuro (−S−S−)</b>.</li>
 <li><b>Condensación y modificación química:</b> los grupos reactivos (amino, carboxilo, hidroxilo, tiol) permiten <b>acilación, esterificación, fosforilación o glicosilación</b>, fundamentales en la regulación biológica y en la síntesis química de péptidos en el laboratorio.</li></ul>
 <p class="note">El objetivo del tema pide destacar <b>péptidos de interés clínico</b> (hormonas o antioxidantes). En las diapositivas solo aparece el <b>glutatión</b> (antioxidante). Complementario [5]: ejemplos de hormonas peptídicas son la <b>insulina</b> (51 aa), el <b>glucagón</b> (29 aa) y la <b>oxitocina</b> (9 aa).</p>`,
 memo:`Cys + Cys → puente −S−S−. Modificaciones: acilación, esterificación, fosforilación, glicosilación. Clínicos: glutatión (antioxidante); insulina, glucagón, oxitocina (hormonas).`}
  ],

  ERRATA:{
    [`Propiedades químicas: hidrólisis y Biuret`]:[
      { tipo:`error`, pg:`pág. 7`, que:`Concentración del ácido para hidrolizar`, dice:`HCl6 M`, ok:`HCl 6 M (ácido clorhídrico 6 mol/L)`, por:`Falta el espacio; «HCl6» no es una fórmula.` }],
    [`Clasificación según el número de residuos`]:[
      { tipo:`aviso`, pg:`pág. 5 y 8`, que:`Límites entre péptido y polipéptido`, dice:`Texto: oligopéptidos hasta 9 enlaces y polipéptidos desde 10 enlaces. Figura: péptidos de 2 a 10 aminoácidos y polipéptidos de 10 a 50`, ok:`Los límites no coinciden exactamente: 9 enlaces son 10 aminoácidos y 10 enlaces son 11`, por:`La figura se solapa en 10. Confirma con el Lic. el corte exacto antes del examen.` }]
  },

  MCQ:[
{src:`Tema 35, pág. 3`,q:`Un péptido es una cadena de:`,o:[`Dos o más aminoácidos unidos por enlaces peptídicos`,`Un solo aminoácido`,`Monosacáridos`,`Ácidos grasos`],e:`Es la estructura intermedia entre el aminoácido y la proteína.`},
{src:`Tema 35, pág. 3`,q:`Los péptidos tienen generalmente hasta:`,o:[`50 aminoácidos`,`5 aminoácidos`,`500 aminoácidos`,`2000 aminoácidos`],e:`Las proteínas suelen superar los 50–100.`},
{src:`Tema 35, pág. 3`,q:`La principal diferencia entre un péptido y una proteína es:`,o:[`El tamaño y la complejidad estructural`,`El tipo de enlace que los une`,`El color`,`Que las proteínas no tienen aminoácidos`],e:`Ambos tienen enlaces peptídicos.`},
{src:`Tema 35, pág. 3`,q:`A diferencia de las proteínas, los péptidos:`,o:[`No tienen una estructura tridimensional compleja`,`Siempre son insolubles`,`No contienen nitrógeno`,`Tienen enlaces iónicos entre aminoácidos`],e:`Son cadenas lineales relativamente cortas.`},
{src:`Tema 35, pág. 4`,q:`El enlace peptídico se forma por una reacción de:`,o:[`Condensación`,`Oxidación`,`Neutralización`,`Combustión`],e:`Se libera una molécula de agua.`},
{src:`Tema 35, pág. 4`,q:`¿Qué grupos se unen para formar el enlace peptídico?`,o:[`El −COOH de un aminoácido y el −NH₂ del siguiente`,`Dos grupos −NH₂`,`Dos grupos −COOH`,`Un −OH y un −SH`],e:`Se pierde H₂O.`},
{src:`Tema 35, pág. 4`,q:`¿Qué molécula se libera al formar un enlace peptídico?`,o:[`Agua`,`Dióxido de carbono`,`Amoníaco`,`Oxígeno`],e:`Por eso es una condensación.`},
{src:`Tema 35, pág. 4`,q:`El enlace peptídico es, químicamente, un enlace:`,o:[`Amida`,`Éster`,`Éter`,`Glucosídico`],e:`−CO−NH−.`},
{src:`Tema 35, pág. 4`,q:`El extremo N-terminal de un péptido tiene:`,o:[`Un grupo amino libre`,`Un grupo carboxilo libre`,`Un puente disulfuro`,`Un grupo fosfato`],e:`Ahí inicia la secuencia.`},
{src:`Tema 35, pág. 4`,q:`El extremo C-terminal de un péptido tiene:`,o:[`Un grupo carboxilo libre`,`Un grupo amino libre`,`Un anillo aromático`,`Un grupo −SH`],e:`Ahí termina la secuencia.`},
{src:`Tema 35, pág. 4`,q:`Una cadena peptídica tiene:`,o:[`Dos extremos distintos (direccionalidad)`,`Dos extremos iguales`,`Un solo extremo`,`Ningún extremo libre`],e:`N-terminal y C-terminal.`},
{src:`Tema 35, pág. 4`,q:`El enlace peptídico trans, el más común, representa aproximadamente:`,o:[`99.9 %`,`50 %`,`10 %`,`0.1 %`],e:`Los dos Cα quedan en lados opuestos del enlace C−N.`},
{src:`Tema 35, pág. 4`,q:`En el enlace peptídico cis, los dos carbonos α:`,o:[`Están del mismo lado del enlace C−N`,`Están en lados opuestos del enlace C−N`,`Están unidos por un puente disulfuro`,`No existen`],e:`En el trans están en lados opuestos.`},
{src:`Tema 35, pág. 5`,q:`El enlace peptídico normal (α-peptídico) se forma entre:`,o:[`El carboxilo del Cα de un aminoácido y el amino del Cα del siguiente`,`Dos cadenas laterales`,`Dos grupos amino`,`El carboxilo de una cadena lateral y el agua`],e:`Usa los grupos α.`},
{src:`Tema 35, pág. 5`,q:`Un enlace isopeptídico es un enlace amida que:`,o:[`Se forma con un grupo de la cadena lateral, fuera de la cadena principal`,`Solo existe en los carbohidratos`,`Une dos aminoácidos por sus grupos α`,`Es un enlace iónico`],e:`Ejemplo: el glutatión.`},
{src:`Tema 35, pág. 5`,q:`El glutatión es un ejemplo de péptido con enlace:`,o:[`Isopeptídico (γ-carboxilo del glutamato con la cisteína)`,`Disulfuro únicamente`,`Glucosídico`,`Fosfodiéster`],e:`Pág. 5.`},
{src:`Tema 35, pág. 5`,q:`Un péptido de 2 aminoácidos se llama:`,o:[`Dipéptido`,`Tripéptido`,`Polipéptido`,`Proteína`],e:`Tiene un enlace peptídico.`},
{src:`Tema 35, pág. 5`,q:`Un tripéptido tiene:`,o:[`3 aminoácidos y 2 enlaces peptídicos`,`3 aminoácidos y 3 enlaces peptídicos`,`2 aminoácidos y 3 enlaces`,`3 aminoácidos y 1 enlace`],e:`Enlaces = aminoácidos − 1.`},
{src:`Tema 35, pág. 5`,q:`Los oligopéptidos contienen según el material:`,o:[`De 1 a 9 enlaces peptídicos (2 a 10 aminoácidos)`,`10 o más enlaces peptídicos`,`Más de 100 aminoácidos`,`Solo un aminoácido`],e:`Los polipéptidos tienen 10 o más.`},
{src:`Tema 35, pág. 5`,q:`Los polipéptidos contienen:`,o:[`10 o más enlaces peptídicos`,`Hasta 3 enlaces`,`Un solo enlace`,`Ningún enlace`],e:`Cadenas largas que, al plegarse, forman proteínas.`},
{src:`Tema 35, pág. 6`,q:`Los péptidos puros y secos son generalmente:`,o:[`Sólidos cristalinos o polvos amorfos blancos`,`Líquidos amarillos`,`Gases incoloros`,`Metales`],e:`Existen como zwitteriones.`},
{src:`Tema 35, pág. 6`,q:`Su punto de fusión es alto (mayor de 200 °C) porque:`,o:[`Existen como zwitteriones con atracciones electrostáticas`,`Son apolares`,`No tienen cargas`,`Pesan muy poco`],e:`Igual que los aminoácidos libres.`},
{src:`Tema 35, pág. 6`,q:`Los péptidos son generalmente solubles en:`,o:[`Agua, ácidos diluidos y bases diluidas`,`Solo en aceite`,`Solo en éter`,`Ninguno`],e:`Por sus grupos polares y extremos cargados.`},
{src:`Tema 35, pág. 6`,q:`A diferencia de las proteínas, los péptidos:`,o:[`Pueden atravesar membranas semipermeables o de diálisis`,`Nunca se disuelven`,`No ejercen presión osmótica`,`Son más grandes`],e:`Su tamaño es relativamente pequeño.`},
{src:`Tema 35, pág. 6`,q:`Los péptidos con muchos aminoácidos hidrofóbicos suelen tener sabor:`,o:[`Amargo`,`Dulce`,`Salado`,`Ácido`],e:`Como los quesos maduros.`},
{src:`Tema 35, pág. 6`,q:`El aspartamo es un dipéptido artificial de:`,o:[`Ácido aspártico y fenilalanina`,`Glicina y alanina`,`Lisina y arginina`,`Cisteína y serina`],e:`Tiene sabor dulce.`},
{src:`Tema 35, pág. 6`,q:`El sabor umami se asocia a péptidos ricos en:`,o:[`Glutamato`,`Valina`,`Cisteína`,`Glicina`],e:`Pág. 6.`},
{src:`Tema 35, pág. 7`,q:`La hidrólisis química del enlace peptídico se logra con:`,o:[`Ácidos fuertes (HCl 6 M, 110 °C, 24 h) o bases fuertes`,`Agua fría`,`Luz visible`,`Cualquier azúcar`],e:`El enlace es muy estable en condiciones normales.`},
{src:`Tema 35, pág. 7`,q:`La hidrólisis enzimática del enlace peptídico la catalizan:`,o:[`Peptidasas o proteasas, como tripsina, pepsina y quimotripsina`,`Lipasas`,`Amilasas`,`Fosfatasas`],e:`Cortan enlaces entre aminoácidos específicos.`},
{src:`Tema 35, pág. 7`,q:`La reacción de Biuret es una reacción:`,o:[`Colorimétrica`,`De combustión`,`De precipitación sin color`,`De oxidación del agua`],e:`El material la enuncia entre las propiedades químicas.`},
{src:`Tema 35, pág. 7`,q:`Los puentes disulfuro entre residuos de cisteína se forman por:`,o:[`Oxidación de los grupos tiol (−SH)`,`Hidrólisis del enlace peptídico`,`Reducción de un carbonilo`,`Esterificación`],e:`Dan enlaces −S−S−.`},
{src:`Tema 35, pág. 7`,q:`¿Cuál de estas es una modificación química de los péptidos mencionada en el material?`,o:[`Fosforilación`,`Fusión nuclear`,`Fermentación`,`Saponificación`],e:`También acilación, esterificación y glicosilación.`}
  ],

  ABIERTAS:[
{src:`Tema 35, pág. 3–4`,q:`Defina péptido, explique cómo se forma el enlace peptídico y qué es la direccionalidad de la cadena.`,a:`Un péptido es una biomolécula formada por dos o más aminoácidos unidos por enlaces peptídicos; es una cadena corta (hasta unos 50 aminoácidos), intermedia entre el aminoácido y la proteína. El enlace se forma por condensación: el carboxilo (−COOH) de un aminoácido reacciona con el amino (−NH₂) del siguiente y se libera una molécula de agua, quedando un enlace amida (−CO−NH−). La cadena tiene dos extremos distintos: el N-terminal, con un amino libre, donde inicia la secuencia, y el C-terminal, con un carboxilo libre, donde termina.`},
{src:`Tema 35, pág. 4–5`,q:`Explique las tres formas de clasificar el enlace o la cadena peptídica que presenta el material.`,a:`1) Por la configuración espacial: enlace trans (los dos Cα en lados opuestos del enlace C−N, 99.9 %) y cis (del mismo lado). 2) Por los grupos que participan: enlace peptídico normal (α-carboxilo con α-amino) e isopeptídico (se forma con un grupo de la cadena lateral, como el γ-carboxilo del glutamato con la cisteína en el glutatión). 3) Por el número de residuos: dipéptidos, tripéptidos, tetrapéptidos y oligopéptidos (1 a 9 enlaces, 2 a 10 aminoácidos) y polipéptidos (10 o más enlaces), que al plegarse forman las proteínas.`},
{src:`Tema 35, pág. 6–7`,q:`Resuma las propiedades físicas y químicas de los péptidos.`,a:`Físicas: sólidos cristalinos o polvos amorfos blancos, con punto de fusión mayor de 200 °C (zwitteriones), solubles en agua y en ácidos o bases diluidos, con presión osmótica considerable y capaces de atravesar membranas de diálisis; el sabor puede ser amargo (hidrofóbicos), dulce (aspartamo) o umami (glutamato). Químicas: anfóteros; el enlace peptídico es estable pero se hidroliza con ácidos o bases fuertes (HCl 6 M, 110 °C, 24 h) o con peptidasas (tripsina, pepsina, quimotripsina); reacción de Biuret; reactividad de los extremos (secuenciación); puentes disulfuro entre cisteínas; y modificaciones como acilación, esterificación, fosforilación y glicosilación.`}
  ],

  EJ:[
{src:`Tema 35, pág. 4`,q:`Escriba la reacción de formación del dipéptido glicil-alanina (Gly−Ala) a partir de glicina y alanina e indique el extremo N-terminal y el C-terminal.`,
 pide:`Unir el −COOH de la glicina con el −NH₂ de la alanina, liberando agua.`,datos:[`Gly: H₂N−CH₂−COOH`,`Ala: H₂N−CH(CH₃)−COOH`],f:`H₂N−CHR−COOH + H₂N−CHR'−COOH → H₂N−CHR−CO−NH−CHR'−COOH + H₂O`,
 pasos:[`El carboxilo de la glicina reacciona con el amino de la alanina.`,`Se libera H₂O y queda el enlace peptídico −CO−NH−.`,`Producto: H₂N−CH₂−CO−NH−CH(CH₃)−COOH.`,`N-terminal: la glicina (amino libre). C-terminal: la alanina (carboxilo libre).`],r:`H₂N−CH₂−CO−NH−CH(CH₃)−COOH + H₂O; N-terminal Gly, C-terminal Ala`},
{src:`Tema 35, pág. 4–5`,q:`Un péptido tiene 8 aminoácidos. ¿Cuántos enlaces peptídicos tiene, cuántas moléculas de agua se liberaron al formarlo y cómo se clasifica?`,
 pide:`Relacionar aminoácidos, enlaces y agua; clasificar según el material.`,datos:[`n = 8 aminoácidos`],f:`enlaces = n − 1 · agua liberada = n − 1`,
 pasos:[`Enlaces peptídicos = 8 − 1 = 7.`,`Cada enlace libera una molécula de agua: 7 H₂O.`,`7 enlaces está entre 1 y 9: oligopéptido.`],r:`7 enlaces; 7 H₂O; oligopéptido`},
{src:`Tema 35, pág. 5`,q:`Una cadena de 25 aminoácidos y otra de 3 aminoácidos: ¿cómo se clasifica cada una y cuántos enlaces peptídicos tiene?`,
 pide:`Aplicar la regla del número de enlaces.`,datos:[`≤ 9 enlaces: oligopéptido (incluye di-, tri-, tetra-)`,`≥ 10 enlaces: polipéptido`],f:`enlaces = n − 1`,
 pasos:[`25 aminoácidos → 24 enlaces (≥ 10): polipéptido.`,`3 aminoácidos → 2 enlaces: tripéptido.`],r:`25 aa: polipéptido (24 enlaces); 3 aa: tripéptido (2 enlaces)`},
{src:`Tema 35, pág. 5`,q:`En el glutatión, el enlace entre el glutamato y la cisteína usa el γ-carboxilo de la cadena lateral del glutamato. ¿Cómo se llama este tipo de enlace y en qué se diferencia del normal?`,
 pide:`Distinguir el enlace α-peptídico del isopeptídico.`,datos:[`glutatión: antioxidante`],f:`Normal: α-COOH + α-NH₂ · Isopeptídico: grupo de la cadena lateral`,
 pasos:[`El enlace usa un carboxilo de la cadena lateral (γ), no el α-carboxilo.`,`Está fuera de la cadena principal: es un enlace isopeptídico.`,`El normal (α-peptídico) une el α-carboxilo de uno con el α-amino del siguiente.`],r:`Isopeptídico: usa un grupo de la cadena lateral; el normal usa los grupos α`},
{src:`Tema 35, pág. 7`,q:`Indique dos formas de hidrolizar un péptido y para qué sirve la reacción de Biuret según el material.`,
 pide:`Recordar las condiciones químicas y enzimáticas.`,datos:[`HCl 6 M, 110 °C, 24 h`,`tripsina, pepsina, quimotripsina`],f:`péptido + (n − 1) H₂O → n aminoácidos`,
 pasos:[`Química: calentar con ácido fuerte (HCl 6 M, 110 °C, 24 h) o con bases fuertes.`,`Enzimática: peptidasas o proteasas (tripsina, pepsina, quimotripsina), rápida y específica.`,`Ambas rompen el enlace peptídico y liberan los aminoácidos libres.`,`El Biuret es una reacción colorimétrica característica de los péptidos y las proteínas.`],r:`Con ácidos/bases fuertes (HCl 6 M, 110 °C, 24 h) o con peptidasas; Biuret: reacción colorimétrica`}
  ],

  FORM:[
{src:`Tema 35, pág. 3–8`,title:`Péptidos`,rows:[
 [`Definición`,`2 o más aminoácidos unidos por enlace peptídico · hasta ≈ 50 aa · sin 3D complejo`],
 [`Proteína`,`&gt; 50–100 aa · estructura tridimensional específica`],
 [`Formación`,`Condensación: −COOH + −NH₂ → −CO−NH− + H₂O · enlace amida`],
 [`Extremos`,`N-terminal (NH₂ libre, inicio) · C-terminal (COOH libre, fin)`],
 [`Cantidad`,`n aa → n − 1 enlaces y n − 1 H₂O`],
 [`Configuración`,`Trans: Cα en lados opuestos, 99.9 % · cis: del mismo lado`],
 [`Grupos`,`Normal (α-peptídico): α-COOH + α-NH₂ · isopeptídico: cadena lateral (glutatión)`],
 [`Número`,`Di-, tri-, tetra-, oligo-: 1–9 enlaces (2–10 aa) · poli-: ≥ 10 enlaces`],
 [`Físicas`,`Sólidos blancos · p. fusión &gt; 200 °C · solubles en agua, ácidos y bases diluidos · atraviesan diálisis · amargo, dulce (aspartamo), umami`],
 [`Hidrólisis`,`Química: HCl 6 M, 110 °C, 24 h, o bases · enzimática: tripsina, pepsina, quimotripsina`],
 [`Otras`,`Biuret (colorimétrica) · secuenciación · −S−S− (cisteína) · acilación, esterificación, fosforilación, glicosilación`]
]}
  ],

  FICHAS:[
{src:`Tema 35, pág. 3`,fig:`peptClas`,f:`¿Qué es un péptido?`,b:`Cadena de 2 o más aminoácidos unidos por enlaces peptídicos; generalmente hasta ≈ 50 aa.`},
{src:`Tema 35, pág. 3`,fig:`peptClas`,f:`Péptido frente a proteína.`,b:`Se diferencian por el tamaño y la complejidad: péptidos hasta ≈ 50 aa sin 3D complejo; proteínas más de 50–100 aa con plegamiento 3D.`},
{src:`Tema 35, pág. 4`,fig:`peptForm`,f:`¿Cómo se forma el enlace peptídico?`,b:`Condensación: el −COOH de un aminoácido con el −NH₂ del siguiente, liberando H₂O. Es un enlace amida (−CO−NH−).`},
{src:`Tema 35, pág. 4`,fig:`peptDir`,f:`N-terminal y C-terminal.`,b:`N-terminal: amino libre, inicio de la secuencia. C-terminal: carboxilo libre, final.`},
{src:`Tema 35, pág. 4`,fig:null,f:`Enlace peptídico trans y cis.`,b:`Trans: Cα en lados opuestos del enlace C−N (99.9 %). Cis: Cα del mismo lado.`},
{src:`Tema 35, pág. 5`,fig:null,f:`Enlace normal e isopeptídico.`,b:`Normal: α-COOH con α-NH₂. Isopeptídico: usa un grupo de la cadena lateral, p. ej. el γ-carboxilo del glutamato con la cisteína en el glutatión.`},
{src:`Tema 35, pág. 5`,fig:`peptClas`,f:`Clasificación por número de residuos.`,b:`Di-, tri-, tetra- y oligopéptidos: 1–9 enlaces (2–10 aa). Polipéptidos: 10 o más enlaces.`},
{src:`Tema 35, pág. 4`,fig:null,f:`Un péptido de n aminoácidos: ¿cuántos enlaces y cuánta agua?`,b:`n − 1 enlaces peptídicos y n − 1 moléculas de H₂O liberadas.`},
{src:`Tema 35, pág. 6`,fig:null,f:`Aspecto, punto de fusión y solubilidad de los péptidos.`,b:`Sólidos blancos; p. fusión > 200 °C (zwitteriones); solubles en agua, ácidos y bases diluidos.`},
{src:`Tema 35, pág. 6`,fig:null,f:`¿Por qué los péptidos atraviesan membranas de diálisis y las proteínas no?`,b:`Por su tamaño relativamente pequeño; ejercen presión osmótica considerable.`},
{src:`Tema 35, pág. 6`,fig:null,f:`Sabor de los péptidos.`,b:`Amargo (muchos aa hidrofóbicos), dulce (aspartamo: Asp + Phe) y umami (ricos en glutamato).`},
{src:`Tema 35, pág. 7`,fig:null,f:`Hidrólisis del enlace peptídico.`,b:`Química: HCl 6 M, 110 °C, 24 h o bases fuertes. Enzimática: tripsina, pepsina, quimotripsina.`},
{src:`Tema 35, pág. 7`,fig:null,f:`Reacciones químicas que enuncia el material.`,b:`Biuret (colorimétrica), secuenciación (extremos), puentes disulfuro (Cys), acilación, esterificación, fosforilación y glicosilación.`}
  ],

  FQ:[
{src:`Tema 35, pág. 5`,q:`"Un péptido tiene 6 aminoácidos. ¿Cuántos enlaces peptídicos tiene?" ¿Qué haces primero?`,o:[`Aplico n − 1: 6 − 1 = 5 enlaces`,`Cuento 6 enlaces, uno por aminoácido`,`Multiplico por 2`,`Sumo 1 y obtengo 7`],e:`Enlaces = aminoácidos − 1.`},
{src:`Tema 35, pág. 4`,q:`"¿Qué se libera al formarse un enlace peptídico?"`,o:[`Una molécula de agua`,`Una molécula de CO₂`,`Una molécula de NH₃`,`Nada`],e:`Es una condensación.`},
{src:`Tema 35, pág. 4`,q:`"En Ala−Gly−Ser (de izquierda a derecha), ¿cuál es el N-terminal?"`,o:[`Ala: el primero tiene el amino libre`,`Ser`,`Gly`,`Los tres`],e:`Se escribe de N-terminal a C-terminal (complementario).`},
{src:`Tema 35, pág. 7`,q:`"¿Qué enzimas cortan péptidos?"`,o:[`Peptidasas o proteasas (tripsina, pepsina, quimotripsina)`,`Amilasas`,`Lipasas`,`Ureasas`],e:`Hidrólisis enzimática del enlace peptídico.`}
  ],

  VIDEOS:[
{sub:`Péptidos: definición`,src:`Tema 35, pág. 3`,id:`z2sICp8E1BA`,title:`Video de la diapositiva 3 del Lic. (definición de péptidos)`,ch:`Material del Lic.`,rep:[`Péptidos: definición y diferencia con las proteínas`]},
{sub:`Enlace peptídico`,src:`Tema 35, pág. 4`,id:`S6aIS2aoy9Q`,title:`Video de la diapositiva 4 del Lic. (enlace peptídico)`,ch:`Material del Lic.`,rep:[`Formación del enlace peptídico`,`Clasificación según la configuración (cis y trans)`]}
  ],

  GENS:[
 {id:`peptClasG`,t:`t35`,src:`Tema 35, pág. 4–5`,name:`Enlaces y clasificación de un péptido`,make(){
   const n = pick([2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 20, 30, 40, 45]);
   const cl = n === 2 ? `dipéptido` : n === 3 ? `tripéptido` : n === 4 ? `tetrapéptido` : n <= 9 ? `oligopéptido` : `polipéptido`;
   const E = k => `${k} ${k === 1 ? `enlace` : `enlaces`}`;
   const ans = `${E(n - 1)}; ${cl}`;
   const bad = [`${E(n)}; ${cl}`, `${E(n - 1)}; ${n <= 9 ? `polipéptido` : `oligopéptido`}`, `${E(n + 1)}; ${cl}`, `${E(n - 2)}; ${n === 2 ? `tripéptido` : `dipéptido`}`];
   const opts = shuf([ans].concat([...new Set(bad.filter(x => x !== ans && !x.startsWith(`0 `) && !x.startsWith(`-`)))].slice(0, 3)));
   return { q:`Una cadena lineal tiene ${n} aminoácidos. ¿Cuántos enlaces peptídicos tiene y cómo se clasifica según el material?`, opts, correct: opts.indexOf(ans),
     pasos:[`Enlaces = n − 1 = ${n} − 1 = ${n - 1}.`, n === 2 ? `2 aminoácidos: dipéptido.` : n === 3 ? `3 aminoácidos: tripéptido.` : n === 4 ? `4 aminoácidos: tetrapéptido.` : n <= 9 ? `${n - 1} enlaces (entre 1 y 9): oligopéptido.` : `${n - 1} enlaces (10 o más): polipéptido.`, `Respuesta: ${ans}.`], r: ans }; }},
 {id:`aguaPeptG`,t:`t35`,src:`Tema 35, pág. 4`,name:`Agua liberada al formar un péptido`,make(){
   const n = pick([2, 3, 4, 5, 6, 8, 10, 12, 20]);
   const ans = `${n - 1}`;
   const opts = shuf([ans, `${n}`, `${n + 1}`, `${n - 2}`].filter((x, i, a) => a.indexOf(x) === i && +x >= 1));
   return { q:`Se unen ${n} aminoácidos en una cadena lineal por enlaces peptídicos. ¿Cuántas moléculas de agua se liberan en total?`, opts, correct: opts.indexOf(ans),
     pasos:[`Cada enlace peptídico se forma por condensación y libera 1 H₂O.`, `Una cadena lineal de ${n} aminoácidos tiene ${n} − 1 = ${n - 1} enlaces.`, `Se liberan ${n - 1} moléculas de agua.`], r: ans }; }},
 {id:`termPeptG`,t:`t35`,src:`Tema 35, pág. 4`,name:`N-terminal y C-terminal`,make(){
   const A = [`Gly`,`Ala`,`Val`,`Leu`,`Ser`,`Cys`,`Lys`,`Glu`,`Phe`,`Pro`,`Thr`,`Asp`];
   const t = shuf(A).slice(0, 3); const nterm = Math.random() < .5;
   const ans = nterm ? t[0] : t[2];
   const opts = shuf(t.slice());
   return { q:`El tripéptido ${t.join(`−`)} está escrito de izquierda a derecha como se escribe habitualmente. ¿Cuál es el residuo ${nterm ? `N-terminal (con el grupo amino libre)` : `C-terminal (con el grupo carboxilo libre)`}?`, opts, correct: opts.indexOf(ans),
     pasos:[`Por convención, la secuencia se escribe del extremo N-terminal (izquierda) al C-terminal (derecha).`, nterm ? `El primero (${t[0]}) conserva el grupo amino libre.` : `El último (${t[2]}) conserva el grupo carboxilo libre.`, `Respuesta: ${ans}.`], r: ans }; }}
  ],

  GUIA:[
 { h:`Tema 35 (péptidos): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Cierra la Unidad VIII: aminoácidos → <b>péptidos</b> → proteínas. Lo central es el <b>enlace peptídico</b> (condensación, −CO−NH−, pierde H₂O), los <b>extremos N y C</b>, la <b>clasificación</b> (cis/trans, normal/isopeptídico, por número de residuos) y las <b>propiedades</b>.</p>
   <ol><li>Repaso del Tema 35 con sus dibujos y los dos videos del Lic.</li>
   <li>En <b>Práctica</b>: «Enlaces y clasificación», «Agua liberada» y «N-terminal y C-terminal», hasta acertar <b>10 seguidos</b>.</li>
   <li>Escribe a mano la formación de un dipéptido y marca el enlace peptídico.</li>
   <li>Mira el aviso del repaso: los límites oligopéptido/polipéptido del texto y de la figura no coinciden; confírmalo con el Lic.</li></ol>` }
  ],

  SYN:{ peptido:[`enlace peptidico`,`aminoacido`], enlace:[`amida`,`condensacion`], glutation:[`antioxidante`,`isopeptidico`], aspartamo:[`dulce`,`dipeptido`], biuret:[`colorimetrica`], tripsina:[`proteasa`,`peptidasa`], proteasa:[`peptidasa`,`hidrolisis`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah35" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah35)"/>`;
    const C = `var(--t35)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.18"/>`;

    F.peptForm = { src:`Tema 35, pág. 4`, cap:`El −COOH de un aminoácido y el −NH₂ del siguiente se condensan: sale una molécula de agua y queda el enlace peptídico −CO−NH−, un enlace amida.`,
      svg: (() => { let s = ``;
        s += T(280, 22, `condensación`, { c:`tm`, fs:12 });
        s += T(110, 76, `H₂N−CHR−COOH`, { fs:16 }) + T(280, 76, `+`, { fs:18 }) + T(440, 76, `H₂N−CHR'−COOH`, { fs:16 });
        s += arrow(280, 96, 280, 128);
        s += hl(244, 144, 62, 30) + T(280, 166, `H₂N−CHR−CO−NH−CHR'−COOH`, { fs:16 }) + T(280, 200, `+ H₂O`, { c:`tb`, fs:15 });
        s += T(275, 138, `enlace peptídico`, { c:`tb`, fs:12 });
        s += T(60, 166, `N-terminal`, { c:`tm`, fs:11.5 }) + T(510, 166, `C-terminal`, { c:`tm`, fs:11.5 });
        return svg(560, 214, s, `Formación del enlace peptídico`); })() };

    F.peptDir = { src:`Tema 35, pág. 4`, cap:`La cadena tiene dirección: empieza en el extremo N-terminal (amino libre) y termina en el C-terminal (carboxilo libre). Se escribe de N a C.`,
      svg: (() => { let s = ``;
        ['aa₁','aa₂','aa₃','aa₄'].forEach((a, i) => { s += box(70 + i * 110, 56, 80, 44) + T(110 + i * 110, 84, a, { fs:16, c:`tb` }); if (i < 3) s += hl(150 + i * 110, 70, 30, 16) + T(165 + i * 110, 83, `CO−NH`, { fs:9 }); });
        s += T(70, 40, `H₃N⁺ (amino libre)`, { a:`start`, c:`tm`, fs:12 }) + T(70, 24, `N-terminal · inicio`, { a:`start`, c:`tb`, fs:13 });
        s += T(490, 40, `COO⁻ (carboxilo libre)`, { a:`end`, c:`tm`, fs:12 }) + T(490, 24, `C-terminal · fin`, { a:`end`, c:`tb`, fs:13 });
        s += arrow(90, 130, 470, 130) + T(280, 154, `se lee de N a C`, { c:`tm`, fs:12 });
        return svg(560, 166, s, `Direccionalidad de una cadena peptídica`); })() };

    F.peptClas = { src:`Tema 35, pág. 3–5 y 8`, cap:`Por el número de aminoácidos: péptidos (2 a 10), polipéptidos (hasta ≈ 50) y proteínas (más de 50). Enlaces = aminoácidos − 1.`,
      svg: (() => { let s = ``;
        s += box(10, 30, 160, 96) + T(90, 56, `Péptidos`, { c:`tb` }) + T(90, 78, `2 a 10 aa`, { fs:13 }) + T(90, 98, `1 a 9 enlaces`, { c:`tm`, fs:12 }) + T(90, 116, `di · tri · tetra · oligo`, { c:`tm`, fs:11.5 });
        s += box(200, 30, 160, 96) + T(280, 56, `Polipéptidos`, { c:`tb` }) + T(280, 78, `hasta ≈ 50 aa`, { fs:13 }) + T(280, 98, `≥ 10 enlaces`, { c:`tm`, fs:12 }) + T(280, 116, `cadenas largas`, { c:`tm`, fs:11.5 });
        s += hl(390, 30, 160, 96) + box(390, 30, 160, 96) + T(470, 56, `Proteínas`, { c:`tb` }) + T(470, 78, `&gt; 50–100 aa`, { fs:13 }) + T(470, 98, `plegamiento 3D`, { c:`tm`, fs:12 }) + T(470, 116, `función específica`, { c:`tm`, fs:11.5 });
        s += arrow(172, 78, 198, 78) + arrow(362, 78, 388, 78);
        s += T(280, 156, `Los límites de la figura se solapan en 10; el texto usa 9 y 10 enlaces`, { c:`tm`, fs:11.5 });
        return svg(560, 168, s, `Péptidos, polipéptidos y proteínas según el tamaño`); })() };
  }
});
