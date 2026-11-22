/* ======================= TEMA 33: AMINAS ======================= */
registerPack({
  id:`t33`, version:1,
  topic:{ t:`t33`, n:`Tema 33`, name:`Aminas`, unit:`Unidad VIII · Compuestos orgánicos nitrogenados`, color:[`#7A4FA3`,`#C9AEE6`] },

  REPASO:[
{src:`Tema 33, pág. 3`,title:`Compuestos nitrogenados y el nitrógeno`,fig:`aminaClase`,
 body:`<p>Los <b>compuestos orgánicos nitrogenados</b> son sustancias de carbono e hidrógeno que tienen <b>al menos un átomo de nitrógeno (N) unido directamente a un carbono</b>; a veces también llevan oxígeno (por ejemplo, las amidas).</p>
 <p>El <b>nitrógeno</b> forma <b>tres enlaces covalentes</b> y conserva <b>un par de electrones libres</b>. Ese par le da a estas moléculas sus propiedades más características: el <b>carácter básico</b> y la capacidad de formar <b>puentes de hidrógeno</b>.</p>`,
 memo:`Orgánico nitrogenado = N unido a un C. El N hace 3 enlaces y tiene 1 par libre: de ahí su carácter básico y los puentes de H.`},
{src:`Tema 33, pág. 4`,title:`Estructura de las aminas: geometría del nitrógeno`,fig:`aminaGeom`,
 body:`<p>Las <b>aminas</b> derivan del <b>amoníaco (NH₃)</b>: uno, dos o los tres H se sustituyen por cadenas carbonadas (grupos <b>alquilo R</b> o <b>arilo Ar</b>).</p>
 <ul><li><b>Hibridación:</b> el N de todas las aminas es <b>sp³</b>.</li>
 <li><b>Geometría piramidal trigonal:</b> los tres enlaces apuntan a los vértices de la base de una pirámide triangular.</li>
 <li><b>Par libre:</b> ocupa el cuarto orbital sp³, en la cúspide de la pirámide. Es el responsable de que las aminas actúen como <b>bases de Lewis</b> y <b>nucleófilos</b>.</li>
 <li><b>Ángulos:</b> el par libre repele más que los enlaces, así que los ángulos se cierran un poco respecto al tetraédrico (109.5°) y quedan cerca de <b>107°</b> (algo más abiertos si los grupos son voluminosos).</li></ul>`,
 memo:`Amina = NH₃ con H cambiados por R o Ar. N sp³, pirámide trigonal, par libre arriba. Par libre → base de Lewis y nucleófilo. Ángulo ≈ 107° (< 109.5°).`},
{src:`Tema 33, pág. 5`,title:`Aminas primarias, secundarias y terciarias`,fig:`aminaClase`,
 body:`<p>El tipo de amina depende de <b>cuántas cadenas carbonadas</b> hay unidas al nitrógeno:</p>
 <ul><li><b>Primaria (R−NH₂):</b> <b>1 grupo carbonado</b> y <b>2 H</b>. Ej.: metilamina.</li>
 <li><b>Secundaria (R₂NH):</b> <b>2 grupos carbonados</b> (iguales o distintos) y <b>1 H</b>. Ej.: dimetilamina.</li>
 <li><b>Terciaria (R₃N):</b> <b>3 grupos carbonados</b> y <b>ningún H</b> directo. Ej.: trietilamina.</li></ul>
 <p class="note">Truco: cuenta las cadenas unidas al <b>N</b>. 1 = primaria, 2 = secundaria, 3 = terciaria. Es distinto de los alcoholes, donde se cuentan los C unidos al carbono del −OH.</p>`,
 memo:`1 cadena en el N y 2 H = primaria; 2 cadenas y 1 H = secundaria; 3 cadenas y 0 H = terciaria. Se cuentan las cadenas en el N.`},
{src:`Tema 33, pág. 6`,title:`Inversión piramidal y puentes de hidrógeno`,fig:`aminaClase`,
 body:`<p><b>Inversión piramidal:</b> en una amina terciaria con tres grupos distintos (R₁R₂R₃N), el N sería teóricamente un <b>centro quiral</b>. Pero a temperatura ambiente el par libre <b>oscila</b> de un lado al otro del plano (como un paraguas que se voltea con el viento) e <b>interconvierte los dos enantiómeros</b> constantemente, así que <b>no se pueden aislar por separado</b>.</p>
 <p><b>Puentes de hidrógeno:</b></p>
 <ul><li>Las aminas <b>primarias y secundarias</b> tienen enlaces <b>N−H</b> polares: forman puentes de H entre sí y eso <b>eleva su punto de ebullición</b>.</li>
 <li>Las <b>terciarias</b> no tienen H unido al N: <b>no forman puentes de H consigo mismas</b> (aunque sí con el agua).</li></ul>`,
 memo:`Terciaria con 3 grupos distintos: el N oscila (inversión piramidal) y no se aíslan enantiómeros. Puentes de H entre sí: 1ª y 2ª sí (N−H); 3ª no, pero sí con el agua.`},
{src:`Tema 33, pág. 7`,title:`Otras clasificaciones de las aminas`,fig:null,
 body:`<p><b>Por la naturaleza de los grupos unidos al N:</b></p>
 <ul><li><b>Alifáticas:</b> los C unidos al N son de cadenas abiertas o ciclos saturados. Ej.: etilamina.</li>
 <li><b>Aromáticas:</b> el N está unido directamente a un anillo aromático. Ej.: anilina (C₆H₅NH₂).</li>
 <li><b>Mixtas (aril-alquilaminas):</b> tienen grupos alifáticos y aromáticos. Ej.: N-metilanilina.</li></ul>
 <p><b>Por la igualdad de los sustituyentes</b> (solo aminas 2ª y 3ª): <b>simétricas</b> (todos iguales; dietilamina) o <b>asimétricas</b> (distintos; etilmetilamina).</p>
 <p><b>Por el número de grupos amino:</b> <b>monoaminas</b> (uno) y <b>poliaminas</b> (dos o más). Ej.: putrescina (1,4-butanodiamina) y cadaverina.</p>`,
 memo:`Naturaleza: alifática (etilamina), aromática (anilina), mixta (N-metilanilina). Sustituyentes: simétrica (dietilamina) o asimétrica (etilmetilamina). Grupos amino: mono o poli (putrescina).`},
{src:`Tema 33, pág. 8`,title:`Nomenclatura IUPAC de aminas primarias`,fig:`nomAmina`,
 body:`<p>Se toma la <b>cadena más larga que contenga el grupo amino</b>, se cambia la terminación <b>-o</b> del alcano por <b>-amina</b> y se indican los demás sustituyentes con el localizador <b>N</b>.</p>
 <p><b>Numeración:</b> el carbono unido al N debe recibir el <b>localizador más bajo posible</b>.</p>
 <ul><li>CH₃−NH₂: <b>metanamina</b> (nombre común: metilamina)</li>
 <li>CH₃−CH₂−CH₂−NH₂: <b>propan-1-amina</b> (o 1-propanamina)</li>
 <li>CH₃−CH(NH₂)−CH₂−CH₃: <b>butan-2-amina</b></li></ul>
 <p class="note">Hay dos métodos aceptados: el <b>sustitutivo</b>, preferido hoy (propan-1-amina), y el <b>radicofuncional</b>, que nombra el alquilo seguido de «amina» (propilamina).</p>`,
 memo:`Alcano −o + amina. Cadena más larga con el N; el C del N con el localizador más bajo. Metanamina, propan-1-amina, butan-2-amina. Radicofuncional: propilamina.`},
{src:`Tema 33, pág. 9`,title:`Nomenclatura de aminas secundarias y terciarias`,fig:`nomAmina`,
 body:`<p>Cuando el N tiene <b>dos o tres cadenas</b>:</p>
 <ul><li><b>Base:</b> se elige la cadena <b>más larga o más compleja</b> como estructura principal (termina en <b>-amina</b>).</li>
 <li><b>Prefijo N-:</b> las demás cadenas del N se nombran como alquilos, en <b>orden alfabético</b>, con el prefijo <b>N-</b> (en cursiva) para indicar que están en el N y no en un carbono.</li></ul>
 <p><b>Ejemplos:</b></p>
 <ul><li>CH₃−NH−CH₂−CH₃: <b>N-metiletanamina</b></li>
 <li>CH₃−N(CH₃)−CH₂−CH₂−CH₃: <b>N,N-dimetilpropan-1-amina</b></li>
 <li>CH₃−CH₂−N(CH₃)−CH₂−CH₂−CH₃: <b>N-etil-N-metilpropan-1-amina</b></li></ul>
 <p class="note">Dos grupos iguales en el N: <b>N,N-di…</b>. Si son distintos, cada uno lleva su N- y van en orden alfabético (etil antes que metil).</p>`,
 memo:`Cadena más larga = base (-amina). Las otras cadenas del N: N-alquilo, en orden alfabético. Iguales: N,N-di. N-metiletanamina; N,N-dimetilpropan-1-amina; N-etil-N-metilpropan-1-amina.`},
{src:`Tema 33, pág. 10`,title:`Aminas aromáticas`,fig:null,
 body:`<p>Cuando el grupo amino está unido directamente a un anillo de benceno, la IUPAC acepta <b>anilina</b> como nombre base (también <b>bencenamina</b>).</p>
 <ul><li><b>Sustituyentes en el anillo:</b> se numeran desde el carbono unido al N (<b>posición 1</b>).</li>
 <li><b>Sustituyentes en el nitrógeno:</b> llevan el prefijo <b>N-</b>.</li></ul>
 <p><b>Ejemplos:</b></p>
 <ul><li>C₆H₅−NH₂: <b>anilina</b> (o bencenamina)</li>
 <li>C₆H₅−NH−CH₃: <b>N-metilanilina</b></li>
 <li>4-Cl−C₆H₄−NH₂: <b>4-cloroanilina</b></li></ul>`,
 memo:`Anilina = bencenamina. El C del anillo con el N es el 1. Sustituyentes del anillo: números; del N: N-. N-metilanilina; 4-cloroanilina.`},
{src:`Tema 33, pág. 11`,title:`Poliaminas`,fig:null,
 body:`<p>Si hay <b>más de un grupo −NH₂</b> en la cadena principal, <b>se conserva la «o» final del alcano</b> y se usan los prefijos multiplicadores (<b>-diamina</b>, <b>-triamina</b>…) con sus localizadores.</p>
 <p><b>Ejemplo:</b> H₂N−CH₂−CH₂−NH₂ → <b>etano-1,2-diamina</b>.</p>
 <p class="note">Diferencia con una monoamina: en la monoamina la «o» se pierde (etanamina); en la diamina se conserva (etano-1,2-diamina) porque el sufijo empieza con consonante.</p>`,
 memo:`Poliamina: se conserva la «o» + di/tri-amina con localizadores. H₂N−CH₂−CH₂−NH₂ = etano-1,2-diamina.`},
{src:`Tema 33, pág. 12`,title:`Aminas importantes en salud`,fig:null,
 body:`<ul><li><b>Aminas biógenas:</b> las <b>catecolaminas</b> adrenalina y noradrenalina, y la <b>dopamina</b>, <b>serotonina</b>, <b>histamina</b> y <b>melatonina</b>.</li>
 <li><b>Fármacos:</b> salbutamol, loratadina, lidocaína, sertralina, metformina, etc.</li>
 <li><b>En nutrición:</b> los <b>aminoácidos</b> y las <b>vitaminas del complejo B</b>.</li></ul>
 <p class="note">Complementario (no está en las diapositivas): las aminas pequeñas son <b>bases débiles</b> (R−NH₂ + H₂O ⇌ R−NH₃⁺ + OH⁻) y, con masa parecida, hierven más alto las primarias que las secundarias y estas más que las terciarias; hierven más bajo que los alcoholes equivalentes porque el N es menos electronegativo que el O.</p>`,
 memo:`Biógenas: adrenalina, noradrenalina, dopamina, serotonina, histamina, melatonina. Fármacos: salbutamol, loratadina, lidocaína, sertralina, metformina. Nutrición: aminoácidos y vitaminas B.`}
  ],

  ERRATA:{
    [`Nomenclatura de aminas secundarias y terciarias`]:[
      { tipo:`aviso`, pg:`pág. 9`, que:`Fórmula del tercer ejemplo`, dice:`CH₃−CH₂−N(CH₃)−CH₂−CH₂−CH₃\\)`, ok:`CH₃−CH₂−N(CH₃)−CH₂−CH₂−CH₃`, por:`Sobra un símbolo «\\)» al final de la fórmula; el nombre N-etil-N-metilpropan-1-amina es correcto.` }],
    [`Aminas aromáticas`]:[
      { tipo:`aviso`, pg:`pág. 10`, que:`Ejemplo «N-metilanilina» en las aminas mixtas`, dice:`Se clasifica como «mixta» en la pág. 7 y como aromática en la pág. 10`, ok:`Es las dos cosas: aromática porque el N está en un anillo, y mixta porque también lleva un metilo`, por:`Son clasificaciones distintas (por naturaleza de los grupos); no se contradicen.` }]
  },

  MCQ:[
{src:`Tema 33, pág. 3`,q:`Un compuesto orgánico nitrogenado tiene, como mínimo:`,o:[`Un átomo de N unido directamente a un carbono`,`Un átomo de O unido a un carbono`,`Un anillo aromático`,`Un grupo carbonilo`],e:`Es la definición del material.`},
{src:`Tema 33, pág. 3`,q:`El nitrógeno forma en las aminas:`,o:[`Tres enlaces covalentes y un par de electrones libres`,`Cuatro enlaces covalentes y ningún par libre`,`Dos enlaces covalentes y dos pares libres`,`Un enlace covalente y tres pares libres`],e:`El par libre explica su carácter básico.`},
{src:`Tema 33, pág. 4`,q:`Las aminas se pueden ver como derivadas de:`,o:[`El amoníaco (NH₃)`,`El agua`,`El metano`,`El ácido carbónico`],e:`Se sustituyen uno, dos o tres H por grupos R o Ar.`},
{src:`Tema 33, pág. 4`,q:`La hibridación del nitrógeno en todas las aminas es:`,o:[`sp³`,`sp²`,`sp`,`s`],e:`Define su forma piramidal.`},
{src:`Tema 33, pág. 4`,q:`La geometría alrededor del N de una amina es:`,o:[`Piramidal trigonal`,`Trigonal plana`,`Lineal`,`Tetraédrica regular con cuatro enlaces`],e:`Tres enlaces en la base y el par libre en la cúspide.`},
{src:`Tema 33, pág. 4`,q:`Los ángulos de enlace en una amina son cercanos a 107° y no a 109.5° porque:`,o:[`El par libre repele más que los enlaces`,`El N es un átomo muy grande`,`Los enlaces C−N son dobles`,`Los H se repelen entre sí`],e:`El par libre comprime los ángulos.`},
{src:`Tema 33, pág. 4`,q:`El par de electrones libres del N hace que las aminas actúen como:`,o:[`Bases de Lewis y nucleófilos`,`Ácidos de Lewis y electrófilos`,`Agentes oxidantes fuertes`,`Compuestos neutros sin reactividad`],e:`Pueden ceder el par.`},
{src:`Tema 33, pág. 5`,q:`Una amina primaria tiene el nitrógeno unido a:`,o:[`Un grupo carbonado y dos H`,`Dos grupos carbonados y un H`,`Tres grupos carbonados`,`Cuatro H`],e:`R−NH₂.`},
{src:`Tema 33, pág. 5`,q:`La dimetilamina, (CH₃)₂NH, es una amina:`,o:[`Secundaria`,`Primaria`,`Terciaria`,`Cuaternaria`],e:`Dos cadenas en el N y un H.`},
{src:`Tema 33, pág. 5`,q:`La trietilamina es una amina:`,o:[`Terciaria`,`Primaria`,`Secundaria`,`Aromática`],e:`Tres grupos etilo en el N, sin H.`},
{src:`Tema 33, pág. 6`,q:`¿Por qué no se pueden aislar los dos enantiómeros de una amina terciaria con tres grupos distintos?`,o:[`Porque el N oscila (inversión piramidal) e interconvierte los enantiómeros`,`Porque el N no tiene par libre`,`Porque no tiene carbono`,`Porque es un compuesto iónico`],e:`El par libre pasa de un lado al otro del plano.`},
{src:`Tema 33, pág. 6`,q:`¿Qué aminas forman puentes de hidrógeno entre sus propias moléculas?`,o:[`Las primarias y las secundarias`,`Solo las terciarias`,`Solo las primarias`,`Ninguna`],e:`Necesitan enlaces N−H.`},
{src:`Tema 33, pág. 6`,q:`Una amina terciaria no forma puentes de H consigo misma porque:`,o:[`No tiene H unido al nitrógeno`,`No tiene nitrógeno`,`Es apolar`,`Es un ácido`],e:`Sí puede formarlos con el agua.`},
{src:`Tema 33, pág. 7`,q:`La anilina (C₆H₅NH₂) es una amina:`,o:[`Aromática`,`Alifática`,`Mixta`,`Terciaria`],e:`El N está unido a un anillo de benceno.`},
{src:`Tema 33, pág. 7`,q:`La N-metilanilina es una amina:`,o:[`Mixta (aril-alquilamina)`,`Alifática`,`Primaria`,`Simétrica`],e:`Tiene un grupo aromático y uno alifático en el N.`},
{src:`Tema 33, pág. 7`,q:`La dietilamina es un ejemplo de amina:`,o:[`Simétrica`,`Asimétrica`,`Primaria`,`Aromática`],e:`Los dos grupos del N son iguales.`},
{src:`Tema 33, pág. 7`,q:`La putrescina (1,4-butanodiamina) es una:`,o:[`Poliamina (diamina)`,`Monoamina`,`Amina terciaria`,`Amina aromática`],e:`Tiene dos grupos amino.`},
{src:`Tema 33, pág. 8`,q:`En el nombre IUPAC de una amina primaria, la terminación del alcano cambia de:`,o:[`-o a -amina`,`-ano a -ol`,`-o a -oico`,`-o a -ona`],e:`Metano → metanamina.`},
{src:`Tema 33, pág. 8`,q:`El nombre IUPAC de CH₃−CH₂−CH₂−NH₂ es:`,o:[`Propan-1-amina`,`Propan-2-amina`,`Etanamina`,`Butan-1-amina`],e:`Tres carbonos, el N en el C1.`},
{src:`Tema 33, pág. 8`,q:`El nombre IUPAC de CH₃−CH(NH₂)−CH₂−CH₃ es:`,o:[`Butan-2-amina`,`Butan-1-amina`,`Propan-2-amina`,`Pentan-2-amina`],e:`Cuatro carbonos; el N en el C2.`},
{src:`Tema 33, pág. 8`,q:`Al numerar la cadena de una amina primaria, el carbono unido al N debe tener:`,o:[`El localizador más bajo posible`,`El localizador más alto posible`,`Siempre el número 1`,`Ningún localizador`],e:`Regla de numeración.`},
{src:`Tema 33, pág. 9`,q:`En CH₃−NH−CH₂−CH₃, el nombre es:`,o:[`N-metiletanamina`,`Dimetilamina`,`N-etilmetanamina`,`Propan-1-amina`],e:`Base etanamina (cadena más larga) y N-metil.`},
{src:`Tema 33, pág. 9`,q:`El prefijo «N-» en el nombre de una amina indica que el grupo está unido:`,o:[`Al átomo de nitrógeno`,`Al primer carbono`,`Al anillo aromático`,`A un oxígeno`],e:`Lo distingue de un localizador de carbono.`},
{src:`Tema 33, pág. 9`,q:`El nombre de CH₃−N(CH₃)−CH₂−CH₂−CH₃ es:`,o:[`N,N-dimetilpropan-1-amina`,`N-metilpropan-1-amina`,`N,N-dimetilbutan-1-amina`,`Trimetilpropanamina`],e:`Dos metilos en el N y cadena base de tres carbonos.`},
{src:`Tema 33, pág. 9`,q:`En N-etil-N-metilpropan-1-amina, los sustituyentes del N se ordenan:`,o:[`Alfabéticamente (etil antes que metil)`,`Por tamaño, de menor a mayor`,`De mayor a menor`,`Al azar`],e:`Regla de orden alfabético.`},
{src:`Tema 33, pág. 10`,q:`En la 4-cloroanilina, el número 1 del anillo es el carbono:`,o:[`Unido al nitrógeno`,`Unido al cloro`,`Opuesto al nitrógeno`,`Elegido al azar`],e:`Se numera desde el C que lleva el N.`},
{src:`Tema 33, pág. 10`,q:`Otro nombre IUPAC aceptado para la anilina es:`,o:[`Bencenamina`,`Fenol`,`Benzaldehído`,`Ciclohexanamina`],e:`C₆H₅−NH₂.`},
{src:`Tema 33, pág. 11`,q:`El nombre de H₂N−CH₂−CH₂−NH₂ es:`,o:[`Etano-1,2-diamina`,`Etanamina`,`Etanodiol`,`Etan-1,2-amina`],e:`Se conserva la «o» y se usa -diamina.`},
{src:`Tema 33, pág. 12`,q:`¿Cuál de estas es una amina biógena?`,o:[`Dopamina`,`Glucosa`,`Colesterol`,`Urea`],e:`Las biógenas incluyen adrenalina, noradrenalina, dopamina, serotonina, histamina y melatonina.`},
{src:`Tema 33, pág. 12`,q:`Las catecolaminas del material son:`,o:[`Adrenalina y noradrenalina (con la dopamina)`,`Serotonina y melatonina`,`Histamina y glicina`,`Metformina y lidocaína`],e:`Pág. 12.`},
{src:`Tema 33, pág. 12`,q:`¿Cuál de estos fármacos aparece en el material como amina de interés en salud?`,o:[`Lidocaína`,`Aspirina`,`Paracetamol`,`Glucosa`],e:`También salbutamol, loratadina, sertralina y metformina.`}
  ],

  ABIERTAS:[
{src:`Tema 33, pág. 3–6`,q:`Describa la estructura de una amina: hibridación y geometría del nitrógeno, par libre, ángulos y consecuencias para su comportamiento.`,a:`Las aminas derivan del NH₃ al cambiar uno, dos o tres H por grupos alquilo o arilo. El N es sp³ con geometría piramidal trigonal: tres enlaces en la base y el par libre en el cuarto orbital sp³, en la cúspide. El par libre repele más que los enlaces, por lo que los ángulos se cierran a unos 107° (menos de 109.5°). Ese par hace de las aminas bases de Lewis y nucleófilos. En las terciarias con tres grupos distintos el N sería quiral, pero la inversión piramidal interconvierte los enantiómeros y no se pueden aislar.`},
{src:`Tema 33, pág. 5–6`,q:`Clasifique las aminas por el número de grupos carbonados en el N y explique cómo afecta a los puentes de hidrógeno y al punto de ebullición.`,a:`Primaria R−NH₂ (1 grupo carbonado, 2 H), secundaria R₂NH (2 grupos, 1 H) y terciaria R₃N (3 grupos, sin H directo). Las primarias y las secundarias tienen enlaces N−H polares y forman puentes de hidrógeno entre sí, lo que eleva su punto de ebullición. Las terciarias no tienen H en el N y no forman puentes consigo mismas, aunque sí con el agua.`},
{src:`Tema 33, pág. 8–11`,q:`Explique las reglas IUPAC para nombrar aminas primarias, secundarias, terciarias, aromáticas y poliaminas, con un ejemplo de cada una.`,a:`Primarias: cadena más larga con el N, -o → -amina, localizador más bajo para el C del N (propan-1-amina, butan-2-amina). Secundarias y terciarias: la cadena más larga o más compleja es la base y las otras cadenas del N se nombran como alquilos con prefijo N- en orden alfabético (N-metiletanamina, N,N-dimetilpropan-1-amina, N-etil-N-metilpropan-1-amina). Aromáticas: anilina (bencenamina), anillo numerado desde el C del N y sustituyentes del N con N- (N-metilanilina, 4-cloroanilina). Poliaminas: se conserva la «o» y se usa -diamina/-triamina con localizadores (etano-1,2-diamina).`},
{src:`Tema 33, pág. 12`,q:`Mencione aminas de importancia en salud y su categoría (biógenas, fármacos o nutrición).`,a:`Biógenas: catecolaminas (adrenalina, noradrenalina), dopamina, serotonina, histamina y melatonina. Fármacos: salbutamol, loratadina, lidocaína, sertralina y metformina. En nutrición: los aminoácidos y las vitaminas del complejo B.`}
  ],

  EJ:[
{src:`Tema 33, pág. 5`,q:`Clasifique como primaria, secundaria o terciaria: a) CH₃−CH₂−NH₂; b) CH₃−NH−CH₂−CH₃; c) (CH₃)₃N; d) C₆H₅−NH₂.`,
 pide:`Contar los grupos carbonados unidos al N.`,datos:[`1 grupo = primaria`,`2 = secundaria`,`3 = terciaria`],f:`Se cuentan las cadenas unidas al nitrógeno`,
 pasos:[`a) El N tiene un etilo y dos H → primaria.`,`b) El N tiene un metilo y un etilo y un H → secundaria.`,`c) El N tiene tres metilos y ningún H → terciaria.`,`d) El N tiene un fenilo y dos H → primaria (y aromática).`],r:`a) primaria; b) secundaria; c) terciaria; d) primaria aromática`},
{src:`Tema 33, pág. 8`,q:`Nombre según IUPAC: a) CH₃−NH₂; b) CH₃−CH₂−CH₂−NH₂; c) CH₃−CH(NH₂)−CH₂−CH₃; d) CH₃−CH(NH₂)−CH₃.`,
 pide:`Cadena más larga con el N, terminación -amina y localizador más bajo.`,datos:[`alcano −o + amina`,`C del N con el número más bajo`],f:`[alcano sin -o] + [localizador] + amina`,
 pasos:[`a) 1 C: metano → metanamina.`,`b) 3 C, N en el C1: propan-1-amina.`,`c) 4 C; el N queda en el C2 (numerando desde cualquier extremo): butan-2-amina.`,`d) 3 C, N en el C2: propan-2-amina.`],r:`metanamina; propan-1-amina; butan-2-amina; propan-2-amina`},
{src:`Tema 33, pág. 9`,q:`Nombre: a) CH₃−NH−CH₂−CH₃; b) CH₃−N(CH₃)−CH₂−CH₂−CH₃; c) CH₃−CH₂−N(CH₃)−CH₂−CH₂−CH₃.`,
 pide:`Elegir la cadena base y nombrar los grupos del N con N-, en orden alfabético.`,datos:[`base = cadena más larga`,`N-alquilo en orden alfabético`,`dos iguales: N,N-di`],f:`N-[alquilos] + [base]-amina`,
 pasos:[`a) Base de 2 C (etanamina) y un metilo en el N: N-metiletanamina.`,`b) Base de 3 C con el N en el C1 (propan-1-amina) y dos metilos en el N: N,N-dimetilpropan-1-amina.`,`c) Base de 3 C; en el N hay un etilo y un metilo; orden alfabético: N-etil-N-metilpropan-1-amina.`],r:`N-metiletanamina; N,N-dimetilpropan-1-amina; N-etil-N-metilpropan-1-amina`},
{src:`Tema 33, pág. 10–11`,q:`Nombre: a) C₆H₅−NH−CH₃; b) 4-Cl−C₆H₄−NH₂; c) H₂N−CH₂−CH₂−NH₂. Escriba la fórmula de la N-metilanilina.`,
 pide:`Aplicar anilina como base (numerar desde el C del N) y la regla de poliaminas.`,datos:[`anilina = bencenamina`,`N- para el N, números para el anillo`,`poliamina: se conserva la «o»`],f:`sustituyentes + anilina / alcano + diamina`,
 pasos:[`a) Anilina con un metilo en el N: N-metilanilina.`,`b) Cloro en el C4 del anillo (el C1 lleva el N): 4-cloroanilina.`,`c) Dos grupos amino en una cadena de 2 C: etano-1,2-diamina.`,`Fórmula de la N-metilanilina: C₆H₅−NH−CH₃.`],r:`N-metilanilina; 4-cloroanilina; etano-1,2-diamina; C₆H₅−NH−CH₃`},
{src:`Tema 33, pág. 6`,q:`¿Cuál tendrá mayor punto de ebullición: la propan-1-amina o la N,N-dimetiletanamina (misma masa molecular)? Justifique.`,
 pide:`Relacionar el tipo de amina con los puentes de hidrógeno.`,datos:[`primaria: N−H, puentes de H`,`terciaria: sin N−H`],f:`Más puentes de H entre moléculas → mayor punto de ebullición`,
 pasos:[`La propan-1-amina es primaria: tiene N−H y forma puentes de H entre sus moléculas.`,`La N,N-dimetiletanamina es terciaria: no tiene H en el N, no forma puentes de H consigo misma.`,`Con la misma masa, la que forma puentes de H hierve a mayor temperatura.`],r:`La propan-1-amina (primaria) hierve más alto`}
  ],

  FORM:[
{src:`Tema 33, pág. 3–12`,title:`Aminas`,rows:[
 [`Definición`,`NH₃ con 1, 2 o 3 H cambiados por R (alquilo) o Ar (arilo) · N unido a C`],
 [`Nitrógeno`,`3 enlaces + 1 par libre · sp³ · pirámide trigonal · ángulo ≈ 107° (&lt; 109.5°)`],
 [`Par libre`,`Base de Lewis y nucleófilo`],
 [`Clasificación`,`1ª R−NH₂ (1 cadena, 2 H) · 2ª R₂NH (2 cadenas, 1 H) · 3ª R₃N (3 cadenas, 0 H)`],
 [`Otras`,`Alifática / aromática / mixta · simétrica / asimétrica · mono / poliamina`],
 [`Puentes de H`,`1ª y 2ª sí (N−H) · 3ª no entre sí (sí con agua) · elevan el punto de ebullición`],
 [`Inversión piramidal`,`3ª con 3 grupos distintos: el N oscila, no se aíslan enantiómeros`],
 [`Nombre 1ª`,`alcano −o + amina · localizador más bajo · propan-1-amina · butan-2-amina · (radicofuncional: propilamina)`],
 [`Nombre 2ª y 3ª`,`base = cadena más larga · N-alquilo en orden alfabético · N,N-di… · N-etil-N-metil…`],
 [`Aromáticas`,`Anilina (bencenamina) · C1 = C del N · N-metilanilina · 4-cloroanilina`],
 [`Poliaminas`,`Se conserva la «o» · etano-1,2-diamina · putrescina (1,4-butanodiamina)`],
 [`Salud`,`Biógenas: adrenalina, noradrenalina, dopamina, serotonina, histamina, melatonina · fármacos: salbutamol, loratadina, lidocaína, sertralina, metformina`]
]}
  ],

  FICHAS:[
{src:`Tema 33, pág. 3`,fig:`aminaGeom`,f:`¿Qué tiene el N de una amina que le da carácter básico?`,b:`Un par de electrones libres (el N hace 3 enlaces y conserva 1 par).`},
{src:`Tema 33, pág. 4`,fig:`aminaGeom`,f:`Hibridación y geometría del N en una amina.`,b:`sp³ y piramidal trigonal; el par libre ocupa el cuarto orbital sp³.`},
{src:`Tema 33, pág. 4`,fig:null,f:`¿Por qué el ángulo es ≈ 107° y no 109.5°?`,b:`El par libre repele más que los enlaces y cierra los ángulos.`},
{src:`Tema 33, pág. 4`,fig:null,f:`El par libre del N: ¿qué papel da a la amina?`,b:`Base de Lewis y nucleófilo.`},
{src:`Tema 33, pág. 5`,fig:`aminaClase`,f:`Amina primaria, secundaria y terciaria.`,b:`1ª R−NH₂ (1 cadena, 2 H) · 2ª R₂NH (2 cadenas, 1 H) · 3ª R₃N (3 cadenas, 0 H). Se cuentan las cadenas en el N.`},
{src:`Tema 33, pág. 6`,fig:null,f:`Inversión piramidal.`,b:`El N de una terciaria con 3 grupos distintos oscila y convierte un enantiómero en el otro; no se aíslan por separado.`},
{src:`Tema 33, pág. 6`,fig:`aminaClase`,f:`¿Qué aminas forman puentes de H entre sí?`,b:`Las primarias y las secundarias (tienen N−H). Las terciarias no, aunque sí con el agua.`},
{src:`Tema 33, pág. 7`,fig:null,f:`Alifática, aromática y mixta: un ejemplo de cada una.`,b:`Etilamina · anilina · N-metilanilina.`},
{src:`Tema 33, pág. 7`,fig:null,f:`Simétrica y asimétrica (aminas 2ª y 3ª).`,b:`Simétrica: grupos iguales en el N (dietilamina). Asimétrica: distintos (etilmetilamina).`},
{src:`Tema 33, pág. 8`,fig:`nomAmina`,f:`Regla IUPAC para aminas primarias.`,b:`Alcano sin -o + amina; el C del N con el localizador más bajo. Propan-1-amina, butan-2-amina.`},
{src:`Tema 33, pág. 9`,fig:`nomAmina`,f:`Regla para aminas secundarias y terciarias.`,b:`Base = cadena más larga; las otras cadenas del N con prefijo N- en orden alfabético. N-etil-N-metilpropan-1-amina.`},
{src:`Tema 33, pág. 10`,fig:null,f:`Nombre de C₆H₅−NH₂ y de C₆H₅−NH−CH₃.`,b:`Anilina (bencenamina) y N-metilanilina.`},
{src:`Tema 33, pág. 11`,fig:null,f:`Nombre de H₂N−CH₂−CH₂−NH₂.`,b:`Etano-1,2-diamina (se conserva la «o»).`},
{src:`Tema 33, pág. 12`,fig:null,f:`Aminas biógenas del material.`,b:`Adrenalina, noradrenalina, dopamina, serotonina, histamina y melatonina.`}
  ],

  FQ:[
{src:`Tema 33, pág. 5`,q:`"¿CH₃−NH−CH₂−CH₃ es primaria, secundaria o terciaria?" ¿Qué haces primero?`,o:[`Cuento las cadenas unidas al nitrógeno: son dos, secundaria`,`Cuento los carbonos de toda la molécula`,`Busco un grupo −OH`,`La nombro como éter`],e:`Dos cadenas en el N y un H: secundaria.`},
{src:`Tema 33, pág. 9`,q:`"Nombra CH₃−CH₂−N(CH₃)−CH₂−CH₂−CH₃." ¿Cuál es el orden de los prefijos N-?`,o:[`N-etil antes que N-metil (alfabético)`,`N-metil antes que N-etil`,`Por tamaño, el más pequeño primero`,`Da igual el orden`],e:`E va antes que M: N-etil-N-metilpropan-1-amina.`},
{src:`Tema 33, pág. 6`,q:`"¿Por qué una amina terciaria no forma puentes de H consigo misma?"`,o:[`No tiene H unido al nitrógeno`,`No tiene nitrógeno`,`Es una sal`,`Su N no tiene par libre`],e:`Sí tiene par libre; lo que le falta es el N−H.`},
{src:`Tema 33, pág. 11`,q:`"¿Por qué etano-1,2-diamina conserva la «o» y etanamina no?"`,o:[`Con prefijos multiplicadores (di-) se conserva la «o» del alcano`,`Porque es aromática`,`Porque es terciaria`,`Es un error del material`],e:`Regla de poliaminas.`}
  ],

  VIDEOS:[
{sub:`Clasificar y nombrar aminas`,src:`Tema 33, pág. 5–11`,id:`1SI8YG8wc3A`,title:`Nomenclatura de las aminas: primarias, secundarias y terciarias (simétricas y asimétricas)`,ch:`YouTube`,rep:[`Aminas primarias, secundarias y terciarias`,`Nomenclatura IUPAC de aminas primarias`,`Nomenclatura de aminas secundarias y terciarias`]}
  ],

  GENS:[
 {id:`clasAminaG`,t:`t33`,src:`Tema 33, pág. 5–6`,name:`Clasificar aminas y puentes de hidrógeno`,make(){
   const L = [[`CH₃−NH₂`,0],[`CH₃−CH₂−NH₂`,0],[`CH₃−CH₂−CH₂−NH₂`,0],[`C₆H₅−NH₂`,0],[`CH₃−NH−CH₃`,1],[`CH₃−NH−CH₂−CH₃`,1],[`CH₃−CH₂−NH−CH₂−CH₃`,1],[`C₆H₅−NH−CH₃`,1],[`(CH₃)₃N`,2],[`CH₃−N(CH₃)−CH₂−CH₃`,2],[`(CH₃−CH₂)₃N`,2]];
   const [f, k] = pick(L);
   const base = [`Primaria; forma puentes de H entre sus moléculas`,`Secundaria; forma puentes de H entre sus moléculas`,`Terciaria; no forma puentes de H entre sus moléculas`,`Terciaria; forma puentes de H entre sus moléculas`];
   const ans = base[k];
   const opts = shuf(base);
   const cadenas = [`una cadena y dos H`,`dos cadenas y un H`,`tres cadenas y ningún H`][k];
   return { q:`Clasifique la amina ${f} y diga si forma puentes de H consigo misma.`, opts, correct: opts.indexOf(ans),
     pasos:[`Se cuentan las cadenas unidas al nitrógeno: ${cadenas}.`, `${[`Primaria`,`Secundaria`,`Terciaria`][k]}: ${k < 2 ? `tiene N−H, forma puentes de H entre sus moléculas` : `no tiene N−H, no forma puentes de H consigo misma (sí con el agua)`}.`], r: ans }; }},
 {id:`nomAminaG`,t:`t33`,src:`Tema 33, pág. 8–9`,name:`Nombrar aminas (IUPAC)`,make(){
   const R = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`];
   const alk = n => `CH₃` + `−CH₂`.repeat(n - 1);
   const nm = (n, pos) => n === 1 ? `metanamina` : n === 2 ? `etanamina` : `${R[n]}an-${pos}-amina`;
   const tipo = pick([0, 0, 1, 2, 3]); /* 0: 1ª con N en C1 · 1: 1ª con N en C2 · 2: N-metil · 3: N,N-dimetil */
   let n, f, name, pasos, alts;
   if (tipo === 0){
     n = between(1, 6); f = `${alk(n)}−NH₂`; name = nm(n, 1);
     pasos = [`Cadena más larga con el N: ${n} C → ${R[n]}ano.`, `Se cambia -o por -amina${n >= 3 ? ` y el N está en el C1` : ``}.`, `Nombre: ${name}.`];
     alts = [n >= 3 ? nm(n, 2) : null, nm(n === 6 ? 5 : n + 1, 1), `${R[n]}anol`, `${R[n]}anamida`];
   } else if (tipo === 1){
     n = between(3, 6); f = `CH₃−CH(NH₂)` + `−CH₂`.repeat(n - 3) + `−CH₃`; name = nm(n, 2);
     pasos = [`Cadena más larga con el N: ${n} C → ${R[n]}ano.`, `El N está en el segundo carbono (numerando desde cualquier extremo el C del N queda en 2).`, `Nombre: ${name}.`];
     alts = [nm(n, 1), nm(n === 6 ? 5 : n + 1, 2), `${R[n]}an-2-ol`, n >= 4 ? `${R[n]}an-3-amina` : null];
   } else {
     n = between(2, 5);
     const base = n === 2 ? `etanamina` : `${R[n]}an-1-amina`, other = n === 5 ? `butan-1-amina` : `${R[n + 1]}an-1-amina`;
     if (tipo === 2){ f = `${alk(n)}−NH−CH₃`; name = `N-metil${base}`; pasos = [`Cadena más larga unida al N: ${n} C → ${base}.`, `El otro grupo del N es un metilo: prefijo N-metil.`, `Nombre: ${name}.`]; alts = [`N,N-dimetil${base}`, base, `N-metil${other}`, `${base} de metilo`]; }
     else { f = `${alk(n)}−N(CH₃)₂`; name = `N,N-dimetil${base}`; pasos = [`Cadena más larga unida al N: ${n} C → ${base}.`, `Hay dos metilos en el N: N,N-dimetil.`, `Nombre: ${name}.`]; alts = [`N-metil${base}`, `dimetil${base}`, `N,N-dimetil${other}`, base]; }
   }
   const opts = shuf([name].concat([...new Set(alts.filter(x => x && x !== name))].slice(0, 3)));
   return { q:`Elige el nombre IUPAC de: ${f}`, opts, correct: opts.indexOf(name), pasos, r: name }; }}
  ],

  GUIA:[
 { h:`Tema 33 (aminas): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Es el primer tema de la Unidad VIII. El N hace 3 enlaces y tiene un par libre: de ahí salen el carácter básico, la geometría piramidal y los puentes de H. Lo más evaluable: <b>clasificar</b> (cuántas cadenas hay en el N) y <b>nombrar</b> (-amina, N-, anilina, diamina).</p>
   <ol><li>Repaso del Tema 33 con sus dibujos.</li>
   <li>En <b>Práctica</b>: «Clasificar aminas y puentes de hidrógeno» y «Nombrar aminas», hasta acertar <b>10 seguidos</b>.</li>
   <li>Aprende la tabla: 1ª, 2ª y 3ª frente a número de cadenas, número de H y puentes de H.</li>
   <li>Nombra a mano los ejemplos de las pág. 8–11 y compáralos con el repaso.</li></ol>` }
  ],

  SYN:{ amina:[`amino`,`nitrogenado`,`amoniaco`], anilina:[`bencenamina`,`aromatica`], putrescina:[`diamina`,`poliamina`], dopamina:[`biogena`,`catecolamina`], adrenalina:[`catecolamina`,`biogena`], histamina:[`biogena`], serotonina:[`biogena`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah33" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    const C = `var(--t33)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;

    F.aminaGeom = { src:`Tema 33, pág. 4`, cap:`El N de una amina es sp³: tres enlaces forman la base de una pirámide y el par libre queda en la cúspide. El par libre repele más que los enlaces y los ángulos se cierran a ≈ 107°.`,
      svg: (() => { let s = ``;
        s += `<ellipse cx="170" cy="40" rx="20" ry="26" style="fill:${C};opacity:.18;stroke:${C};stroke-width:1.5"/>` + T(170, 38, `••`, { fs:20 });
        s += T(170, 92, `N`, { fs:24, c:`tb` });
        s += ln(160, 100, 100, 160) + ln(180, 100, 230, 150) + `<line x1="170" y1="104" x2="176" y2="162" style="stroke:currentColor;stroke-width:5;stroke-linecap:round"/>`;
        s += T(92, 178, `R`, { fs:20 }) + T(176, 184, `R'`, { fs:20 }) + T(250, 172, `R''`, { fs:20 });
        s += `<path d="M100 164 L176 168 L228 150" class="dash" style="fill:none"/>`;
        s += box(300, 22, 244, 160);
        s += T(312, 48, `N sp³`, { a:`start`, c:`tb` }) + T(312, 68, `Geometría piramidal trigonal`, { a:`start`, fs:12.5 });
        s += T(312, 94, `Par libre en la cúspide`, { a:`start`, fs:12.5 }) + T(312, 112, `→ base de Lewis y nucleófilo`, { a:`start`, c:`tm`, fs:12 });
        s += T(312, 138, `Ángulo ≈ 107°`, { a:`start`, c:`tb`, fs:12.5 }) + T(312, 156, `(menor que 109.5° por el par libre)`, { a:`start`, c:`tm`, fs:12 });
        return svg(560, 200, s, `Geometría piramidal del nitrógeno en una amina`); })() };

    F.aminaClase = { src:`Tema 33, pág. 5–6`, cap:`Se cuentan las cadenas unidas al N: una, primaria; dos, secundaria; tres, terciaria. Con N−H hay puentes de hidrógeno entre moléculas; la terciaria no los tiene.`,
      svg: (() => { let s = ``;
        const col = (x, nm, fm, d1, d2, pdh) => box(x, 10, 170, 200) + T(x + 85, 36, nm, { c:`tb` }) + T(x + 85, 78, fm, { fs:19 }) + hl(x + 14, 100, 142, 26) + T(x + 85, 118, d1, { fs:12.5 }) + T(x + 85, 150, d2, { c:`tm`, fs:12 }) + T(x + 85, 184, pdh, { c:`tb`, fs:12 });
        s += col(10, `Primaria`, `R−NH₂`, `1 cadena · 2 H`, `ej.: metilamina`, `puentes de H: sí`);
        s += col(195, `Secundaria`, `R₂NH`, `2 cadenas · 1 H`, `ej.: dimetilamina`, `puentes de H: sí`);
        s += col(380, `Terciaria`, `R₃N`, `3 cadenas · 0 H`, `ej.: trietilamina`, `puentes de H: no`);
        return svg(560, 222, s, `Aminas primarias, secundarias y terciarias`); })() };

    F.nomAmina = { src:`Tema 33, pág. 8–9`, cap:`Alcano sin -o + amina; el C del N con el localizador más bajo. Las otras cadenas del N llevan prefijo N- en orden alfabético; dos iguales, N,N-di.`,
      svg: (() => { let s = ``;
        s += box(10, 10, 540, 52) + T(24, 32, `Primaria`, { a:`start`, c:`tb`, fs:13 }) + T(24, 52, `CH₃−CH₂−CH₂−NH₂ → propan-1-amina   ·   CH₃−CH(NH₂)−CH₂−CH₃ → butan-2-amina`, { a:`start`, fs:12.5 });
        s += box(10, 70, 540, 52) + T(24, 92, `Secundaria`, { a:`start`, c:`tb`, fs:13 }) + T(24, 112, `CH₃−NH−CH₂−CH₃ → N-metiletanamina`, { a:`start`, fs:12.5 });
        s += box(10, 130, 540, 52) + T(24, 152, `Terciaria`, { a:`start`, c:`tb`, fs:13 }) + T(24, 172, `CH₃−N(CH₃)−CH₂−CH₂−CH₃ → N,N-dimetilpropan-1-amina`, { a:`start`, fs:12.5 });
        s += box(10, 190, 540, 40) + T(24, 214, `Aromática: C₆H₅−NH₂ anilina · C₆H₅−NH−CH₃ N-metilanilina · 4-cloroanilina`, { a:`start`, fs:12.5 }) ;
        return svg(560, 240, s, `Reglas de nomenclatura de aminas`); })() };
  }
});
