/* ======================= TEMA 34: AMINOÁCIDOS ======================= */
registerPack({
  id:`t34`, version:1,
  topic:{ t:`t34`, n:`Tema 34`, name:`Aminoácidos`, unit:`Unidad VIII · Compuestos orgánicos nitrogenados`, color:[`#A2467A`,`#E8B0CF`] },

  REPASO:[
{src:`Tema 34, pág. 3`,title:`Definición y estructura del α-aminoácido`,fig:`aaGeneral`,
 body:`<p>Un <b>α-aminoácido</b> se organiza alrededor de un <b>carbono central (carbono α)</b>, el <b>carbono quiral</b>, unido a <b>4 grupos distintos</b>:</p>
 <ul><li>un <b>grupo amino (−NH₂)</b>, de carácter <b>básico</b>;</li>
 <li>un <b>grupo carboxilo (−COOH)</b>, de carácter <b>ácido</b> (o carboxilato, −COO⁻);</li>
 <li>un <b>átomo de hidrógeno</b>;</li>
 <li>una <b>cadena lateral o grupo R</b>.</li></ul>
 <p>A <b>pH 7</b> el carboxilo está como <b>base conjugada (−COO⁻)</b> y el amino como <b>ácido conjugado (−NH₃⁺)</b>. Por eso cada aminoácido puede comportarse como <b>ácido o como base</b>: es <b>anfótero</b>.</p>
 <p class="note">Complementario [5]: en la <b>glicina</b> el grupo R es un H, así que su carbono α <b>no es quiral</b>; todos los demás aminoácidos proteicos sí.</p>`,
 memo:`Cα quiral con 4 grupos: NH₂ (básico), COOH (ácido), H y R. A pH 7: COO⁻ y NH₃⁺ → anfótero. (Glicina: R = H, no quiral.)`},
{src:`Tema 34, pág. 4`,title:`Zwitterión`,fig:`aaZwit`,
 body:`<p>Cuando un α-aminoácido se disuelve en agua o en los fluidos del cuerpo (<b>pH ≈ 7.4</b>) ocurre una <b>transferencia interna de protones</b>: el carboxilo pierde un H (<b>−COO⁻</b>) y el amino lo gana (<b>−NH₃⁺</b>).</p>
 <p>Esa forma <b>neutra en conjunto pero con cargas opuestas en sus extremos</b> se llama <b>zwitterión</b> (o <b>ion dipolar</b>). Le permite <b>interactuar fácilmente con el agua</b> y participar en reacciones bioquímicas.</p>
 <p class="note">Complementario [5]: según el pH cambia la forma. En medio muy <b>ácido</b> predomina el catión (−NH₃⁺ y −COOH); cerca de la neutralidad, el zwitterión; en medio muy <b>básico</b>, el anión (−NH₂ y −COO⁻).</p>`,
 memo:`Zwitterión (ion dipolar): COO⁻ y NH₃⁺ a la vez, carga neta cero, a pH ≈ 7.4. Ácido: catión · neutro: zwitterión · básico: anión.`},
{src:`Tema 34, pág. 5`,title:`Clasificación según el grupo R`,fig:`aaClases`,
 body:`<p>La clasificación más usada es según las <b>propiedades químicas de la cadena lateral (grupo R)</b>, porque determina cómo se pliegan y funcionan las proteínas:</p>
 <ul><li><b>Apolares (hidrofóbicos):</b> cadenas de C e H que repelen el agua; suelen ir al <b>interior</b> de las proteínas. Ej.: valina.</li>
 <li><b>Polares sin carga (hidrofílicos):</b> con −OH, −SH o grupos amida; forman puentes de H con el agua. Ej.: treonina.</li>
 <li><b>Ácidos (carga negativa a pH fisiológico):</b> tienen un segundo grupo carboxilo en la cadena lateral. Ej.: ácido aspártico (aspartato).</li>
 <li><b>Básicos (carga positiva a pH fisiológico):</b> tienen N en la cadena lateral que capta protones. Ej.: lisina.</li></ul>`,
 memo:`Por el grupo R: apolares (hidrofóbicos, valina), polares sin carga (treonina), ácidos (aspartato, carga −) y básicos (lisina, carga +).`},
{src:`Tema 34, pág. 6`,title:`Aminoácidos apolares`,fig:`aaClases`,
 body:`<p>Su grupo R es sobre todo hidrocarburo, sin cargas. Son <b>hidrofóbicos</b> y ayudan a mantener la <b>estructura tridimensional</b> de las proteínas. Hay dos tipos de cadena R:</p>
 <ul><li><b>Alifáticas (7):</b> glicina (Gly, G), alanina (Ala, A), valina (Val, V), leucina (Leu, L), isoleucina (Ile, I), metionina (Met, M) y prolina (Pro, P).</li>
 <li><b>Aromáticas (3):</b> fenilalanina (Phe, F), tirosina (Tyr, Y) y triptófano (Trp, W).</li></ul>
 <p class="note">El material coloca la tirosina y el triptófano dentro de los apolares aromáticos; algunos textos clasifican la tirosina como polar. Para el examen, usa la clasificación del Lic.</p>`,
 memo:`Apolares (10): Gly, Ala, Val, Leu, Ile, Met, Pro (alifáticos) + Phe, Tyr, Trp (aromáticos). Hidrofóbicos; mantienen la estructura 3D.`},
{src:`Tema 34, pág. 7`,title:`Aminoácidos polares sin carga`,fig:`aaClases`,
 body:`<p>Los grupos funcionales de su cadena R (<b>−OH, −SH o grupos amida −CONH₂</b>) interactúan con el agua mediante <b>enlaces de hidrógeno</b> y otras interacciones electrostáticas. Son hidrofílicos y frecuentes en la superficie de las proteínas.</p>
 <ul><li><b>Serina</b> (Ser, S) y <b>treonina</b> (Thr, T): con −OH.</li>
 <li><b>Cisteína</b> (Cys, C): con −SH.</li>
 <li><b>Asparagina</b> (Asn, N) y <b>glutamina</b> (Gln, Q): con grupo amida.</li></ul>`,
 memo:`Polares sin carga (5): Ser, Thr (−OH), Cys (−SH), Asn, Gln (amida −CONH₂). Puentes de H con el agua.`},
{src:`Tema 34, pág. 8`,title:`Aminoácidos ácidos`,fig:`aaClases`,
 body:`<p>Tienen un <b>segundo grupo carboxilo en la cadena lateral</b>. En pH ácido ese grupo está sin cargar (neutro); a <b>pH fisiológico (7.4)</b> está como <b>carboxilato (−COO⁻)</b>, adquiere <b>carga negativa</b> y se les llama:</p>
 <ul><li><b>Aspartato</b> (ácido aspártico, Asp, D).</li>
 <li><b>Glutamato</b> (ácido glutámico, Glu, E).</li></ul>`,
 memo:`Ácidos (2): ácido aspártico y ácido glutámico. Segundo −COOH en R; a pH 7.4 son aspartato y glutamato, con carga negativa.`},
{src:`Tema 34, pág. 9`,title:`Aminoácidos básicos`,fig:`aaClases`,
 body:`<p>Su cadena lateral tiene <b>átomos de nitrógeno que captan protones (H⁺)</b>: funcionan «como imanes» para los protones. A pH fisiológico tienen <b>carga positiva</b>.</p>
 <ul><li><b>Lisina</b> (Lys, K), <b>arginina</b> (Arg, R) e <b>histidina</b> (His, H).</li></ul>
 <p>Su carga positiva permite que las proteínas como las <b>histonas</b> se unan al <b>ADN</b> (carga negativa) para empaquetarlo dentro del núcleo.</p>`,
 memo:`Básicos (3): Lys, Arg, His. N en R capta H⁺ → carga positiva a pH 7.4. Histonas + ADN.`},
{src:`Tema 34, pág. 10`,title:`Propiedades físicas`,fig:null,
 body:`<p>Están determinadas sobre todo por su <b>estructura dipolar</b>: en estado sólido y en solución neutra existen como <b>zwitteriones</b>.</p>
 <ul><li><b>Estado físico:</b> sólidos cristalinos de color blanco.</li>
 <li><b>Puntos de fusión elevados:</b> más de <b>200 °C</b>, por las fuertes atracciones electrostáticas entre cargas opuestas; la mayoría se descompone antes de fundirse.</li>
 <li><b>Solubilidad:</b> solubles en <b>agua</b> y en soluciones ácidas o básicas diluidas.</li>
 <li><b>Sabor:</b> varía según el aminoácido y su isomería; la glicina y la alanina son <b>dulces</b> y la leucina es <b>insípida</b>.</li></ul>
 <p class="note">La diapositiva termina la frase del sabor cortada («…la…»); el resto del texto no se ve en el PDF.</p>`,
 memo:`Sólidos cristalinos blancos; p. de fusión > 200 °C (zwitteriones); solubles en agua y ácidos/bases diluidos; Gly y Ala dulces, Leu insípida.`},
{src:`Tema 34, pág. 11`,title:`Propiedades químicas`,fig:null,
 body:`<p>Derivan de sus tres componentes: el <b>grupo carboxilo</b>, el <b>grupo amino</b> y la <b>cadena lateral (R)</b>.</p>
 <ul><li><b>Comportamiento anfótero</b> (ácido-base).</li>
 <li><b>Capacidad amortiguadora (buffer):</b> las proteínas resisten cambios bruscos de pH al añadir pequeñas cantidades de ácidos o bases.</li>
 <li><b>Formación de enlaces peptídicos</b> (Tema 35).</li>
 <li><b>Reactividad de los grupos R:</b> la <b>cisteína</b> (−SH) se oxida y forma un <b>puente disulfuro (−S−S−)</b>, dando <b>cistina</b>, clave para estabilizar la estructura 3D. Los −OH de <b>serina, treonina y tirosina</b> pueden <b>fosforilarse</b>, un mecanismo esencial de regulación enzimática y señalización celular.</li></ul>`,
 memo:`Anfóteros, buffer, enlace peptídico. Cys + Cys → cistina (puente −S−S−). Ser, Thr, Tyr se fosforilan (regulación enzimática).`},
{src:`Tema 34, pág. 2`,title:`Aminoácidos esenciales y no esenciales`,fig:null,
 body:`<p>El objetivo del tema pide <b>diferenciar aminoácidos esenciales y no esenciales</b> y su importancia en la dieta, pero las diapositivas no desarrollan el punto.</p>
 <p class="note">Complementario [5] (no está en las diapositivas): los <b>esenciales</b> no los sintetiza el organismo y deben venir de la dieta; en adultos son 9: <b>histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano y valina</b>. Los <b>no esenciales</b> los sintetiza el cuerpo. Confirma con el Lic. qué lista espera.</p>`,
 memo:`Esenciales (dieta): His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val. (No vienen en las diapositivas: confirmar con el Lic.)`}
  ],

  ERRATA:{
    [`Definición y estructura del α-aminoácido`]:[
      { tipo:`aviso`, pg:`pág. 3`, que:`La lista de grupos del carbono α`, dice:`Aparece numerada a., (viñeta), a., b.`, ok:`Son cuatro grupos: amino, carboxilo, hidrógeno y cadena lateral R`, por:`Es un defecto de numeración de la diapositiva; el contenido es el mismo.` }],
    [`Propiedades físicas`]:[
      { tipo:`aviso`, pg:`pág. 10`, que:`Frase sobre el sabor`, dice:`Termina cortada: «…la leucina es insípida, la…»`, ok:`El resto no se ve en el PDF`, por:`La diapositiva corta el texto; no hay más información para completarlo.` }]
  },

  MCQ:[
{src:`Tema 34, pág. 3`,q:`El carbono α de un α-aminoácido está unido a:`,o:[`Un grupo amino, un carboxilo, un H y un grupo R`,`Dos grupos amino y dos H`,`Un carboxilo, un hidroxilo y dos R`,`Solo a cadena lateral`],e:`Cuatro grupos distintos: es el carbono quiral.`},
{src:`Tema 34, pág. 3`,q:`Según el material, el carbono α es:`,o:[`Quiral`,`Sp lineal`,`Siempre aromático`,`Un carbono con carga positiva`],e:`Tiene 4 grupos distintos.`},
{src:`Tema 34, pág. 3`,q:`El grupo amino de un aminoácido tiene carácter:`,o:[`Básico`,`Ácido`,`Neutro`,`Oxidante`],e:`Y el carboxilo es ácido.`},
{src:`Tema 34, pág. 3`,q:`A pH 7 el grupo carboxilo de un aminoácido está como:`,o:[`−COO⁻ (base conjugada)`,`−COOH sin cargar`,`−CH₂OH`,`−CO−NH₂`],e:`Cede su protón.`},
{src:`Tema 34, pág. 3`,q:`A pH 7 el grupo amino de un aminoácido está como:`,o:[`−NH₃⁺ (ácido conjugado)`,`−NH₂ sin cargar`,`−NO₂`,`−N=`],e:`Capta un protón.`},
{src:`Tema 34, pág. 3`,q:`Un aminoácido puede comportarse como ácido o como base. Esto se llama:`,o:[`Comportamiento anfótero`,`Isomería óptica`,`Polimerización`,`Desnaturalización`],e:`Anfótero = ácido y base.`},
{src:`Tema 34, pág. 4`,q:`Un zwitterión es una forma del aminoácido:`,o:[`Neutra en conjunto, con cargas opuestas en sus extremos`,`Con carga neta +2`,`Sin ningún grupo ionizado`,`Siempre insoluble en agua`],e:`Se llama también ion dipolar.`},
{src:`Tema 34, pág. 4`,q:`En el zwitterión, ¿qué grupos están cargados?`,o:[`−COO⁻ y −NH₃⁺`,`−COOH y −NH₂`,`−COO⁻ y −NH₂`,`−COOH y −NH₃⁺`],e:`El carboxilo pierde un H y el amino lo gana.`},
{src:`Tema 34, pág. 4`,q:`La formación del zwitterión ocurre por:`,o:[`Una transferencia interna de protones`,`Una oxidación`,`La pérdida de un grupo R`,`La rotura del carbono α`],e:`Del carboxilo al amino de la misma molécula.`},
{src:`Tema 34, pág. 4`,q:`El pH aproximado de los fluidos del cuerpo, donde el aminoácido es zwitterión, es:`,o:[`7.4`,`1.0`,`12`,`3.0`],e:`pH fisiológico ≈ 7.4.`},
{src:`Tema 34, pág. 5`,q:`La clasificación más usada de los aminoácidos se basa en:`,o:[`Las propiedades químicas de la cadena lateral (R)`,`El color`,`El número de carbonos de la molécula`,`El sabor`],e:`Determina cómo se pliegan las proteínas.`},
{src:`Tema 34, pág. 6`,q:`Los aminoácidos apolares suelen ubicarse:`,o:[`En el interior de las proteínas`,`En la superficie en contacto con el agua`,`Fuera de la célula`,`Solo en el ADN`],e:`Son hidrofóbicos.`},
{src:`Tema 34, pág. 6`,q:`¿Cuál es un aminoácido apolar alifático?`,o:[`Valina`,`Serina`,`Lisina`,`Ácido aspártico`],e:`Gly, Ala, Val, Leu, Ile, Met, Pro.`},
{src:`Tema 34, pág. 6`,q:`¿Cuáles son los apolares de cadena aromática?`,o:[`Fenilalanina, tirosina y triptófano`,`Serina, treonina y cisteína`,`Lisina, arginina e histidina`,`Glicina, alanina y prolina`],e:`Phe (F), Tyr (Y) y Trp (W).`},
{src:`Tema 34, pág. 6`,q:`La abreviatura de la leucina es:`,o:[`Leu, L`,`Lys, K`,`Val, V`,`Ile, I`],e:`Lys es lisina; Ile, isoleucina.`},
{src:`Tema 34, pág. 7`,q:`Los aminoácidos polares sin carga tienen en su cadena R grupos como:`,o:[`−OH, −SH o amida (−CONH₂)`,`Solo cadenas de hidrocarburo`,`Un segundo −COOH`,`Un N con carga positiva`],e:`Forman puentes de H con el agua.`},
{src:`Tema 34, pág. 7`,q:`¿Cuál es un aminoácido polar sin carga?`,o:[`Treonina`,`Valina`,`Ácido glutámico`,`Arginina`],e:`Ser, Thr, Cys, Asn, Gln.`},
{src:`Tema 34, pág. 7`,q:`La cisteína pertenece al grupo de los:`,o:[`Polares sin carga (con −SH)`,`Apolares`,`Ácidos`,`Básicos`],e:`Su cadena lateral lleva un tiol.`},
{src:`Tema 34, pág. 8`,q:`Los aminoácidos ácidos tienen en la cadena lateral:`,o:[`Un segundo grupo carboxilo`,`Un grupo amino extra`,`Un anillo aromático`,`Un grupo −SH`],e:`A pH 7.4 quedan con carga negativa.`},
{src:`Tema 34, pág. 8`,q:`A pH fisiológico, el ácido aspártico y el ácido glutámico se llaman:`,o:[`Aspartato y glutamato`,`Asparagina y glutamina`,`Aspartamo y glutatión`,`Aspirina y glutamina`],e:`Forma ionizada del carboxilo de la cadena lateral.`},
{src:`Tema 34, pág. 9`,q:`Los aminoácidos básicos son:`,o:[`Lisina, arginina e histidina`,`Serina, treonina y cisteína`,`Aspartato y glutamato`,`Glicina, alanina y valina`],e:`Su N capta protones.`},
{src:`Tema 34, pág. 9`,q:`A pH fisiológico los aminoácidos básicos tienen carga:`,o:[`Positiva`,`Negativa`,`Cero siempre`,`Doble negativa`],e:`Captan H⁺.`},
{src:`Tema 34, pág. 9`,q:`Las histonas se unen al ADN gracias, sobre todo, a:`,o:[`La carga positiva de sus aminoácidos básicos`,`La carga negativa de sus aminoácidos ácidos`,`Sus aminoácidos apolares`,`Los puentes disulfuro`],e:`Esto permite empaquetar el ADN en el núcleo.`},
{src:`Tema 34, pág. 10`,q:`Los aminoácidos son, en estado puro:`,o:[`Sólidos cristalinos blancos`,`Líquidos incoloros`,`Gases`,`Sólidos amarillos`],e:`Pág. 10.`},
{src:`Tema 34, pág. 10`,q:`Su punto de fusión es alto (más de 200 °C) porque:`,o:[`Hay fuertes atracciones electrostáticas entre sus zwitteriones`,`Son moléculas muy pequeñas y apolares`,`No tienen cargas`,`Forman enlaces metálicos`],e:`Muchos se descomponen antes de fundirse.`},
{src:`Tema 34, pág. 10`,q:`Los aminoácidos son solubles en:`,o:[`Agua y en soluciones ácidas o básicas diluidas`,`Solo en solventes apolares`,`Solo en aceite`,`Ninguno de los anteriores`],e:`Son iones dipolares.`},
{src:`Tema 34, pág. 10`,q:`¿Qué aminoácidos tienen sabor dulce, según el material?`,o:[`Glicina y alanina`,`Leucina y valina`,`Lisina y arginina`,`Cisteína y metionina`],e:`La leucina es insípida.`},
{src:`Tema 34, pág. 11`,q:`La cisteína forma el puente disulfuro (−S−S−) y da:`,o:[`Cistina`,`Cisteamina`,`Citrulina`,`Cistitis`],e:`Estabiliza la estructura 3D de las proteínas.`},
{src:`Tema 34, pág. 11`,q:`¿Qué aminoácidos pueden fosforilarse en su −OH?`,o:[`Serina, treonina y tirosina`,`Valina, leucina e isoleucina`,`Lisina, arginina e histidina`,`Glicina, alanina y prolina`],e:`Mecanismo de regulación enzimática y señalización celular.`},
{src:`Tema 34, pág. 11`,q:`La capacidad amortiguadora de las proteínas significa que:`,o:[`Resisten cambios bruscos de pH`,`Se disuelven en cualquier pH`,`Cambian de color con el pH`,`Siempre aumentan el pH`],e:`Gracias al comportamiento anfótero de sus grupos.`}
  ],

  ABIERTAS:[
{src:`Tema 34, pág. 3–4`,q:`Describa la estructura de un α-aminoácido y explique qué es un zwitterión.`,a:`Un α-aminoácido tiene un carbono central (carbono α, quiral) unido a cuatro grupos distintos: un amino (−NH₂, básico), un carboxilo (−COOH, ácido), un H y una cadena lateral R. En agua y a pH fisiológico (≈ 7.4) hay una transferencia interna de protones: el carboxilo pierde un H (−COO⁻) y el amino lo gana (−NH₃⁺). Esa forma, neutra en conjunto pero con cargas opuestas en los extremos, es el zwitterión o ion dipolar, y le permite interactuar con el agua. Por tener un grupo ácido y uno básico, el aminoácido es anfótero.`},
{src:`Tema 34, pág. 5–9`,q:`Clasifique los 20 aminoácidos proteicos según su grupo R y cite ejemplos de cada clase.`,a:`Apolares (hidrofóbicos): alifáticos (Gly, Ala, Val, Leu, Ile, Met, Pro) y aromáticos (Phe, Tyr, Trp). Polares sin carga: Ser, Thr, Cys, Asn y Gln (con −OH, −SH o amida). Ácidos (carga negativa a pH 7.4): ácido aspártico y ácido glutámico, con un segundo carboxilo. Básicos (carga positiva a pH 7.4): lisina, arginina e histidina, con N en la cadena lateral. Total: 10 + 5 + 2 + 3 = 20.`},
{src:`Tema 34, pág. 10–11`,q:`Explique las propiedades físicas y químicas de los aminoácidos y relaciónelas con su estructura dipolar.`,a:`Físicas: como existen como zwitteriones, son sólidos cristalinos blancos con puntos de fusión altos (más de 200 °C, se descomponen) por las atracciones electrostáticas, y solubles en agua y en soluciones ácidas o básicas diluidas; el sabor varía (Gly y Ala dulces, Leu insípida). Químicas: derivan del carboxilo, del amino y del grupo R. Son anfóteros, dan capacidad amortiguadora, forman enlaces peptídicos y sus cadenas laterales reaccionan: la cisteína forma puentes disulfuro (cistina) y los −OH de Ser, Thr y Tyr pueden fosforilarse.`}
  ],

  EJ:[
{src:`Tema 34, pág. 5–9`,q:`Clasifique según su grupo R: a) valina; b) treonina; c) ácido aspártico; d) lisina; e) fenilalanina.`,
 pide:`Ubicar cada aminoácido en una de las cuatro clases del material.`,datos:[`apolar · polar sin carga · ácido · básico`],f:`Se mira el grupo R: hidrocarburo, −OH/−SH/amida, segundo −COOH o N básico`,
 pasos:[`a) Valina: R de hidrocarburo ramificado → apolar alifático.`,`b) Treonina: R con −OH → polar sin carga.`,`c) Ácido aspártico: R con un segundo −COOH → ácido (aspartato a pH 7.4, carga −).`,`d) Lisina: R con grupo amino → básico (carga + a pH 7.4).`,`e) Fenilalanina: R con anillo aromático → apolar aromático.`],r:`a) apolar; b) polar sin carga; c) ácido; d) básico; e) apolar aromático`},
{src:`Tema 34, pág. 4`,q:`Dibuje la forma de la glicina como zwitterión y diga cuál es su carga neta.`,
 pide:`Colocar −NH₃⁺ y −COO⁻ en la glicina (R = H).`,datos:[`glicina: R = H`,`pH ≈ 7.4`],f:`Zwitterión: H₃N⁺−CHR−COO⁻`,
 pasos:[`Estructura general: H₃N⁺−CHR−COO⁻.`,`En la glicina R = H: H₃N⁺−CH₂−COO⁻.`,`Cargas: +1 (amino) y −1 (carboxilato).`,`Carga neta = +1 − 1 = 0.`],r:`H₃N⁺−CH₂−COO⁻; carga neta 0`},
{src:`Tema 34, pág. 5`,q:`Escriba el nombre, la abreviatura de tres letras y la de una letra de: a) alanina; b) triptófano; c) lisina; d) ácido glutámico.`,
 pide:`Recordar las abreviaturas de la lista del material.`,datos:[`Ala, A · Trp, W · Lys, K · Glu, E`],f:`nombre → Xxx, X`,
 pasos:[`a) Alanina: Ala, A.`,`b) Triptófano: Trp, W.`,`c) Lisina: Lys, K.`,`d) Ácido glutámico: Glu, E.`],r:`Ala/A; Trp/W; Lys/K; Glu/E`},
{src:`Tema 34, pág. 6–9`,q:`Cuente cuántos aminoácidos hay en cada clase del material y verifique que suman 20.`,
 pide:`Sumar los aminoácidos de apolares, polares, ácidos y básicos.`,datos:[`apolares 7 + 3`,`polares 5`,`ácidos 2`,`básicos 3`],f:`Suma de las clases`,
 pasos:[`Apolares: 7 alifáticos + 3 aromáticos = 10.`,`Polares sin carga: Ser, Thr, Cys, Asn, Gln = 5.`,`Ácidos: Asp, Glu = 2.`,`Básicos: Lys, Arg, His = 3.`,`Total: 10 + 5 + 2 + 3 = 20.`],r:`10 + 5 + 2 + 3 = 20`},
{src:`Tema 34, pág. 11`,q:`Dos moléculas de cisteína se oxidan. ¿Qué enlace se forma, cómo se llama el producto y por qué importa?`,
 pide:`Aplicar la reactividad del grupo R de la cisteína.`,datos:[`cisteína: −SH (tiol)`],f:`2 R−SH → R−S−S−R (oxidación)`,
 pasos:[`Dos grupos tiol (−SH) se oxidan y se unen.`,`Se forma un puente disulfuro (−S−S−).`,`El producto es la cistina.`,`Estabiliza la estructura tridimensional de las proteínas.`],r:`Puente disulfuro; cistina; estabiliza la estructura 3D`}
  ],

  FORM:[
{src:`Tema 34, pág. 3–11`,title:`Aminoácidos`,rows:[
 [`Estructura`,`Cα quiral + NH₂ (básico) + COOH (ácido) + H + R · glicina: R = H`],
 [`A pH 7`,`−COO⁻ (base conjugada) y −NH₃⁺ (ácido conjugado) · anfótero`],
 [`Zwitterión`,`Ion dipolar · COO⁻ y NH₃⁺ · carga neta 0 · pH ≈ 7.4`],
 [`Apolares (10)`,`Gly, Ala, Val, Leu, Ile, Met, Pro + Phe, Tyr, Trp (aromáticos) · hidrofóbicos · interior de la proteína`],
 [`Polares sin carga (5)`,`Ser, Thr (−OH) · Cys (−SH) · Asn, Gln (amida) · puentes de H con agua`],
 [`Ácidos (2)`,`Asp, Glu · segundo COOH · a pH 7.4 aspartato y glutamato (carga −)`],
 [`Básicos (3)`,`Lys, Arg, His · N en R · carga + a pH 7.4 · histonas se unen al ADN`],
 [`Físicas`,`Sólidos cristalinos blancos · p. fusión &gt; 200 °C · solubles en agua y ácidos/bases diluidos · Gly y Ala dulces, Leu insípida`],
 [`Químicas`,`Anfóteros · buffer · enlace peptídico · Cys−S−S−Cys = cistina · fosforilación de Ser, Thr, Tyr`],
 [`Abreviaturas`,`Gly G · Ala A · Val V · Leu L · Ile I · Met M · Pro P · Phe F · Tyr Y · Trp W · Ser S · Thr T · Cys C · Asn N · Gln Q · Asp D · Glu E · Lys K · Arg R · His H`]
]}
  ],

  FICHAS:[
{src:`Tema 34, pág. 3`,fig:`aaGeneral`,f:`¿Qué cuatro grupos tiene el carbono α?`,b:`Amino (−NH₂), carboxilo (−COOH), un H y la cadena lateral R. Es el carbono quiral.`},
{src:`Tema 34, pág. 3`,fig:null,f:`¿Por qué el aminoácido es anfótero?`,b:`Tiene un grupo ácido (−COOH) y uno básico (−NH₂): puede actuar como ácido o como base.`},
{src:`Tema 34, pág. 3`,fig:null,f:`Formas del carboxilo y del amino a pH 7.`,b:`−COO⁻ (base conjugada) y −NH₃⁺ (ácido conjugado).`},
{src:`Tema 34, pág. 4`,fig:`aaZwit`,f:`¿Qué es un zwitterión?`,b:`Forma neutra en conjunto, con −COO⁻ y −NH₃⁺ a la vez (ion dipolar). Aparece a pH ≈ 7.4 por transferencia interna de protones.`},
{src:`Tema 34, pág. 5`,fig:`aaClases`,f:`Las cuatro clases por el grupo R.`,b:`Apolares (hidrofóbicos) · polares sin carga · ácidos (carga −) · básicos (carga +).`},
{src:`Tema 34, pág. 6`,fig:`aaClases`,f:`Aminoácidos apolares alifáticos.`,b:`Gly, Ala, Val, Leu, Ile, Met y Pro.`},
{src:`Tema 34, pág. 6`,fig:`aaClases`,f:`Aminoácidos apolares aromáticos.`,b:`Fenilalanina (F), tirosina (Y) y triptófano (W).`},
{src:`Tema 34, pág. 7`,fig:`aaClases`,f:`Aminoácidos polares sin carga.`,b:`Ser, Thr, Cys, Asn y Gln: −OH, −SH o amida; forman puentes de H con el agua.`},
{src:`Tema 34, pág. 8`,fig:`aaClases`,f:`Aminoácidos ácidos.`,b:`Ácido aspártico y ácido glutámico: segundo −COOH; a pH 7.4 son aspartato y glutamato (carga −).`},
{src:`Tema 34, pág. 9`,fig:`aaClases`,f:`Aminoácidos básicos.`,b:`Lisina, arginina e histidina: N en la cadena lateral, carga + a pH 7.4. Las histonas se unen al ADN.`},
{src:`Tema 34, pág. 10`,fig:null,f:`¿Por qué los aminoácidos tienen puntos de fusión altos (> 200 °C)?`,b:`Por las fuertes atracciones electrostáticas entre zwitteriones. Muchos se descomponen antes de fundirse.`},
{src:`Tema 34, pág. 10`,fig:null,f:`Solubilidad y sabor.`,b:`Solubles en agua y en ácidos o bases diluidos. Gly y Ala dulces; Leu insípida.`},
{src:`Tema 34, pág. 11`,fig:null,f:`Puente disulfuro.`,b:`Dos cisteínas se oxidan y unen sus −SH formando −S−S− (cistina); estabiliza la estructura 3D.`},
{src:`Tema 34, pág. 11`,fig:null,f:`Fosforilación en aminoácidos.`,b:`Los −OH de Ser, Thr y Tyr pueden fosforilarse: regulación enzimática y señalización celular.`}
  ],

  FQ:[
{src:`Tema 34, pág. 5`,q:`"Me dan Ser y me piden la clase." ¿Qué haces primero?`,o:[`Miro el grupo R: tiene −OH, es polar sin carga`,`Cuento los carbonos de la cadena principal`,`Veo si es dulce`,`Busco un anillo aromático`],e:`La clasificación es por el grupo R.`},
{src:`Tema 34, pág. 4`,q:`"¿Por qué un aminoácido a pH 7.4 tiene carga neta cero si tiene dos cargas?"`,o:[`Porque tiene una carga + (NH₃⁺) y una − (COO⁻) que se compensan`,`Porque no tiene cargas`,`Porque pierde el grupo R`,`Porque es un gas`],e:`Es un zwitterión.`},
{src:`Tema 34, pág. 9`,q:`"¿Por qué la lisina tiene carga positiva a pH fisiológico?"`,o:[`Su N de la cadena lateral capta un protón`,`Tiene un segundo carboxilo`,`Es apolar`,`Pierde el grupo amino`],e:`Es un aminoácido básico.`},
{src:`Tema 34, pág. 11`,q:`"¿Qué aminoácido forma puentes disulfuro?"`,o:[`Cisteína (−SH)`,`Serina (−OH)`,`Lisina (−NH₂)`,`Valina (hidrocarburo)`],e:`Dos cisteínas dan cistina.`}
  ],

  VIDEOS:[
{sub:`Estructura y clasificación`,src:`Tema 34, pág. 3–9`,id:`f6D6bVmZSlI`,title:`¿Qué es un aminoácido? Estructura y clasificación`,ch:`Anatomy Eusabiaga`,rep:[`Definición y estructura del α-aminoácido`,`Zwitterión`,`Clasificación según el grupo R`]}
  ],

  GENS:[
 {id:`clasAaG`,t:`t34`,src:`Tema 34, pág. 5–9`,name:`Clasificar aminoácidos por su grupo R`,make(){
   const CL = [`Apolar (hidrofóbico)`,`Polar sin carga`,`Ácido (carga negativa a pH 7.4)`,`Básico (carga positiva a pH 7.4)`];
   const L = [[`glicina`,0],[`alanina`,0],[`valina`,0],[`leucina`,0],[`isoleucina`,0],[`metionina`,0],[`prolina`,0],[`fenilalanina`,0],[`tirosina`,0],[`triptófano`,0],[`serina`,1],[`treonina`,1],[`cisteína`,1],[`asparagina`,1],[`glutamina`,1],[`ácido aspártico`,2],[`ácido glutámico`,2],[`lisina`,3],[`arginina`,3],[`histidina`,3]];
   const [nom, k] = pick(L);
   const why = [`su grupo R es un hidrocarburo, sin grupos que formen puentes de H ni cargas`,`su grupo R tiene −OH, −SH o amida y forma puentes de H con el agua`,`su grupo R lleva un segundo carboxilo (queda −COO⁻ a pH 7.4)`,`su grupo R tiene N que capta protones (carga + a pH 7.4)`][k];
   const opts = shuf(CL.slice());
   const art = nom.startsWith(`ácido`) ? `el` : `la`;
   return { q:`Según el material, ¿a qué clase pertenece ${art} ${nom}?`, opts, correct: opts.indexOf(CL[k]),
     pasos:[`Se mira el grupo R de ${nom}: ${why}.`, `Clase: ${CL[k]}.`], r: CL[k] }; }},
 {id:`abrevAaG`,t:`t34`,src:`Tema 34, pág. 6–9`,name:`Abreviaturas de los aminoácidos`,make(){
   const L = [[`glicina`,`Gly, G`],[`alanina`,`Ala, A`],[`valina`,`Val, V`],[`leucina`,`Leu, L`],[`isoleucina`,`Ile, I`],[`metionina`,`Met, M`],[`prolina`,`Pro, P`],[`fenilalanina`,`Phe, F`],[`tirosina`,`Tyr, Y`],[`triptófano`,`Trp, W`],[`serina`,`Ser, S`],[`treonina`,`Thr, T`],[`cisteína`,`Cys, C`],[`asparagina`,`Asn, N`],[`glutamina`,`Gln, Q`],[`lisina`,`Lys, K`],[`arginina`,`Arg, R`],[`histidina`,`His, H`]];
   const d = pick(L);
   const otros = shuf(L.filter(x => x !== d)).slice(0, 3).map(x => x[1]);
   const opts = shuf([d[1]].concat(otros));
   return { q:`¿Cuál es la abreviatura (tres letras, una letra) de la ${d[0]}?`, opts, correct: opts.indexOf(d[1]),
     pasos:[`En el material, la ${d[0]} se escribe ${d[1]}.`], r: d[1] }; }},
 {id:`aaPhG`,t:`t34`,src:`Tema 34, pág. 4 (complementario)`,name:`Forma del aminoácido según el pH`,make(){
   const E = [`Catión: −NH₃⁺ y −COOH`,`Zwitterión: −NH₃⁺ y −COO⁻`,`Anión: −NH₂ y −COO⁻`,`Molécula sin cargas: −NH₂ y −COOH`];
   const C = [[`en un medio muy ácido (pH cercano a 1)`,0],[`en agua a pH ≈ 7`,1],[`en los fluidos del cuerpo (pH ≈ 7.4)`,1],[`en un medio muy básico (pH cercano a 13)`,2]];
   const [c, k] = pick(C);
   const opts = shuf(E.slice());
   return { q:`¿Qué forma predomina en un aminoácido simple (sin grupo R ionizable) ${c}?`, opts, correct: opts.indexOf(E[k]),
     pasos:[k === 0 ? `Con exceso de H⁺, ambos grupos están protonados: el carboxilo es −COOH y el amino −NH₃⁺ (carga neta +).` : k === 1 ? `Cerca de la neutralidad el carboxilo pierde su H y el amino lo gana: zwitterión, carga neta 0.` : `Con exceso de OH⁻ el amino pierde su H: −NH₂ y −COO⁻ (carga neta −).`, `Forma: ${E[k]}.`], r: E[k] }; }}
  ],

  GUIA:[
 { h:`Tema 34 (aminoácidos): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Lo central: la <b>estructura del α-aminoácido</b> (Cα con NH₂, COOH, H y R), el <b>zwitterión</b> y la <b>clasificación por el grupo R</b>. El objetivo del tema también menciona esenciales y no esenciales, pero las diapositivas no lo desarrollan: confírmalo con el Lic.</p>
   <ol><li>Repaso del Tema 34 con sus dibujos.</li>
   <li>Memoriza las 4 clases y sus miembros: <b>10 apolares, 5 polares, 2 ácidos, 3 básicos = 20</b>.</li>
   <li>En <b>Práctica</b>: «Clasificar aminoácidos» y «Abreviaturas», hasta acertar <b>10 seguidos</b>.</li>
   <li>Dibuja de memoria el zwitterión de la glicina y explica de dónde salen las cargas.</li></ol>` }
  ],

  SYN:{ aminoacido:[`alfa`,`zwitterion`,`anfotero`], zwitterion:[`ion dipolar`,`anfotero`], anfotero:[`zwitterion`,`buffer`], apolar:[`hidrofobico`], polar:[`hidrofilico`], acido:[`aspartato`,`glutamato`], basico:[`lisina`,`arginina`,`histidina`], cisteina:[`cistina`,`disulfuro`], histona:[`adn`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah34" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah34)"/>`;
    const C = `var(--t34)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;

    F.aaGeneral = { src:`Tema 34, pág. 3`, cap:`El carbono α (quiral) une un grupo amino, un carboxilo, un H y la cadena lateral R. A pH 7 el amino está como −NH₃⁺ y el carboxilo como −COO⁻.`,
      svg: (() => { let s = ``;
        s += T(220, 106, `Cα`, { fs:22, c:`tb` });
        s += ln(206, 100, 150, 100) + hl(82, 82, 68, 30) + T(116, 104, `H₃N⁺`, { fs:18 }) + T(116, 72, `amino (básico)`, { c:`tm`, fs:12 });
        s += ln(236, 100, 290, 100) + hl(290, 82, 76, 30) + T(328, 104, `COO⁻`, { fs:18 }) + T(328, 72, `carboxilo (ácido)`, { c:`tm`, fs:12 });
        s += ln(220, 86, 220, 52) + T(220, 44, `H`, { fs:18 });
        s += ln(220, 114, 220, 148) + hl(196, 148, 48, 30) + T(220, 170, `R`, { fs:20, c:`tb` }) + T(220, 192, `cadena lateral`, { c:`tm`, fs:12 });
        s += box(400, 40, 150, 120) + T(475, 64, `Cα quiral`, { c:`tb` }) + T(475, 88, `4 grupos distintos`, { fs:12.5 }) + T(475, 112, `anfótero:`, { fs:12.5, c:`tb` }) + T(475, 130, `ácido y base`, { fs:12.5 }) + T(475, 150, `(glicina: R = H)`, { c:`tm`, fs:11.5 });
        return svg(560, 208, s, `Estructura general de un α-aminoácido`); })() };

    F.aaZwit = { src:`Tema 34, pág. 4`, cap:`En agua el carboxilo cede un H al amino de la misma molécula: queda −COO⁻ y −NH₃⁺, con carga neta cero (zwitterión). Con exceso de ácido es catión; con exceso de base, anión.`,
      svg: (() => { let s = ``;
        const col = (x, ttl, fm, ch, hl2) => box(x, 40, 170, 120) + (hl2 ? hl(x + 6, 46, 158, 108) : ``) + T(x + 85, 66, ttl, { c:`tb`, fs:13 }) + T(x + 85, 100, fm[0], { fs:14 }) + T(x + 85, 122, fm[1], { fs:14 }) + T(x + 85, 148, ch, { c:`tm`, fs:12 });
        s += col(10, `Medio ácido`, [`H₃N⁺−CHR−COOH`, ``], `catión · carga neta +1`, false);
        s += col(195, `pH ≈ 7.4`, [`H₃N⁺−CHR−COO⁻`, ``], `zwitterión · carga neta 0`, true);
        s += col(380, `Medio básico`, [`H₂N−CHR−COO⁻`, ``], `anión · carga neta −1`, false);
        s += arrow(185, 100, 195, 100) + arrow(370, 100, 380, 100);
        s += T(280, 20, `← más H⁺                    más OH⁻ →`, { c:`tm`, fs:12 });
        s += T(280, 190, `forma para un aminoácido simple, sin grupo R ionizable`, { c:`tm`, fs:11.5 });
        return svg(560, 202, s, `Estados de ionización del aminoácido según el pH`); })() };

    F.aaClases = { src:`Tema 34, pág. 5–9`, cap:`Los 20 aminoácidos proteicos según su grupo R: 10 apolares, 5 polares sin carga, 2 ácidos y 3 básicos.`,
      svg: (() => { let s = ``;
        const bx2 = (x, y, w, h, ttl, a, b, c) => box(x, y, w, h) + T(x + 12, y + 22, ttl, { a:`start`, c:`tb`, fs:13 }) + T(x + 12, y + 42, a, { a:`start`, fs:11.5 }) + (b ? T(x + 12, y + 58, b, { a:`start`, fs:11.5 }) : ``) + (c ? T(x + 12, y + 74, c, { a:`start`, c:`tm`, fs:11 }) : ``);
        s += bx2(10, 8, 270, 90, `Apolares · hidrofóbicos (10)`, `Gly · Ala · Val · Leu · Ile · Met · Pro`, `Phe · Tyr · Trp (aromáticos)`, `interior de la proteína`);
        s += bx2(290, 8, 260, 90, `Polares sin carga (5)`, `Ser · Thr (−OH)`, `Cys (−SH) · Asn · Gln (amida)`, `puentes de H con el agua`);
        s += bx2(10, 106, 270, 78, `Ácidos · carga − a pH 7.4 (2)`, `Asp · Glu`, `segundo −COOH en R`, ``);
        s += bx2(290, 106, 260, 78, `Básicos · carga + a pH 7.4 (3)`, `Lys · Arg · His`, `N en R que capta H⁺`, ``);
        return svg(560, 194, s, `Clasificación de los aminoácidos según el grupo R`); })() };
  }
});
