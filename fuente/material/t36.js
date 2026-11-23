/* ======================= TEMA 36: PROTEÍNAS ======================= */
registerPack({
  id:`t36`, version:1,
  topic:{ t:`t36`, n:`Tema 36`, name:`Proteínas`, unit:`Unidad VIII · Compuestos orgánicos nitrogenados`, color:[`#B0603A`,`#EDBA9C`] },

  REPASO:[
{src:`Tema 36, pág. 3`,title:`Definición desde la química orgánica`,fig:`proteNiveles`,
 body:`<p>Las <b>proteínas</b> son <b>macromoléculas poliméricas</b> (<b>poliamidas naturales</b>) de <b>alto peso molecular</b>, formadas por la <b>condensación lineal</b> de unidades llamadas <b>α-aminoácidos</b>, unidos covalentemente mediante <b>enlaces amida sustituidos</b> (en bioquímica, <b>enlaces peptídicos</b>).</p>
 <p>Sus unidades básicas son compuestos <b>bifuncionales</b>: en el mismo carbono (el <b>carbono α</b>, adyacente al carbonilo) tienen un grupo <b>amino (−NH₂)</b> y un grupo <b>ácido carboxílico (−COOH)</b>, además de un <b>átomo de hidrógeno</b> y una <b>cadena lateral variable (−R)</b>.</p>`,
 memo:`Proteína = poliamida natural de alto peso molecular: α-aminoácidos unidos por enlaces amida (peptídicos). Cada aa: NH₂, COOH, H y R en el carbono α.`},
{src:`Tema 36, pág. 4`,title:`Definición desde la biología molecular y la fisiología`,fig:null,
 body:`<p><b>Biología molecular y genética:</b> la proteína es el <b>producto funcional final de la expresión génica</b>: la <b>traducción física</b> de la información genética contenida en la secuencia de nucleótidos del <b>ADN</b> (a través del <b>ARN mensajero</b>), siguiendo las reglas del <b>código genético</b>. Es el vehículo por el cual el <b>genotipo se convierte en fenotipo</b>.</p>
 <p><b>Fisiología:</b> son <b>máquinas moleculares y componentes estructurales fundamentales de la célula</b>. El dibujo de la diapositiva resume sus funciones: <b>transporte, estructura, catálisis, regulación y señalización, movimiento</b> y defensa (inmunoglobulinas).</p>
 <p class="note">El texto de la diapositiva sobre fisiología termina cortado en el PDF («…fundamentales de la célula, responsables…»).</p>`,
 memo:`Biología molecular: producto final de la expresión génica (ADN → ARNm → proteína); genotipo → fenotipo. Fisiología: máquinas moleculares y componentes estructurales de la célula.`},
{src:`Tema 36, pág. 5`,title:`Definición desde la nutrición y la bioquímica estructural`,fig:null,
 body:`<p><b>Nutrición y bromatología:</b> son <b>macronutrientes esenciales</b> compuestos por <b>carbono, hidrógeno, oxígeno y nitrógeno (CHON)</b>, a menudo con <b>azufre</b>. Su función principal <b>no es aportar energía</b> (aunque rinden ≈ <b>4 kcal/g</b>), sino suministrar <b>nitrógeno orgánico y aminoácidos esenciales</b> que el organismo no puede sintetizar <i>de novo</i> para construir y reparar sus tejidos.</p>
 <p><b>Bioquímica y biología estructural:</b> son <b>biomoléculas con una conformación tridimensional específica y estable (estructura nativa)</b>, organizada en niveles <b>primario, secundario, terciario</b> y, a veces, <b>cuaternario</b>, indispensable para su actividad biológica. Si la pierden (<b>desnaturalización</b>), siguen siendo la misma poliamida para la química orgánica, pero <b>dejan de ser funcionales</b>.</p>`,
 memo:`Nutrición: CHON (+ S), ≈ 4 kcal/g, aportan N y aminoácidos esenciales. Estructura: conformación 3D nativa; sin ella no hay función aunque siga siendo la misma poliamida.`},
{src:`Tema 36, pág. 6 y 8`,title:`Estructura primaria y secundaria`,fig:`proteNiveles`,
 body:`<p>La arquitectura de una proteína se organiza en <b>cuatro niveles jerárquicos</b> que determinan su forma tridimensional y, por tanto, su función.</p>
 <p><b>1. Estructura primaria (secuencia lineal):</b> la secuencia específica y lineal de aminoácidos de la cadena polipeptídica, determinada <b>directamente por la información genética del ADN</b>. Su enlace estabilizador es el <b>enlace peptídico</b>.</p>
 <p><b>2. Estructura secundaria (plegamiento local):</b> plegamiento regular y repetitivo de segmentos cercanos de la cadena, debido a interacciones entre los átomos del <b>esqueleto peptídico</b> (sin involucrar aún a los grupos R). <b>Enlace estabilizador: puentes de hidrógeno</b> entre el <b>oxígeno del C=O</b> de un aminoácido y el <b>hidrógeno del N−H</b> de otro.</p>
 <ul><li><b>Hélice alfa (α):</b> la cadena se enrolla en espiral hacia la derecha.</li>
 <li><b>Lámina plegada beta (β):</b> segmentos que se disponen en paralelo o antiparalelo formando una estructura en zigzag o acordeón.</li></ul>`,
 memo:`1ª: secuencia de aa, la dicta el ADN, enlace peptídico. 2ª: plegamiento local del esqueleto, puentes de H C=O···H−N; hélice α (espiral) y lámina β (zigzag, paralela o antiparalela).`},
{src:`Tema 36, pág. 7`,title:`Estructura terciaria y cuaternaria`,fig:`proteInter`,
 body:`<p><b>3. Estructura terciaria (conformación tridimensional):</b> plegamiento global de <b>toda la cadena polipeptídica sobre sí misma</b>, lo que le da su forma funcional (globular o fibrosa). Se estabiliza por interacciones <b>entre los grupos R</b>:</p>
 <ul><li><b>Interacciones hidrofóbicas:</b> los aminoácidos apolares se agrupan en el <b>interior</b> de la proteína para evitar el contacto con el agua.</li>
 <li><b>Puentes disulfuro (−S−S−):</b> enlaces <b>covalentes fuertes</b> entre dos aminoácidos de <b>cisteína</b>.</li>
 <li><b>Puentes de hidrógeno y enlaces iónicos (puentes salinos):</b> entre grupos R polares o con cargas opuestas.</li>
 <li><b>Fuerzas de Van der Waals:</b> atracciones débiles de corto alcance entre átomos cercanos.</li></ul>
 <p><b>4. Estructura cuaternaria (ensamblaje de subunidades):</b> solo en proteínas formadas por <b>dos o más cadenas polipeptídicas</b> (subunidades o protómeros) que se ensamblan en un complejo funcional único; por ejemplo, la <b>hemoglobina</b>, de cuatro subunidades. Se estabiliza con las mismas interacciones no covalentes de la terciaria (hidrofóbicas, puentes de H, enlaces iónicos) y, a veces, <b>puentes disulfuro entre cadenas</b>.</p>`,
 memo:`3ª: plegado global de una cadena; entre grupos R: hidrofóbicas (interior), −S−S− (covalente), puentes de H e iónicos, Van der Waals. 4ª: 2 o más cadenas (hemoglobina: 4).`},
{src:`Tema 36, pág. 9`,title:`Proteínas fibrosas (escleroproteínas)`,fig:`proteForma`,
 body:`<p>Por su <b>forma física tridimensional y solubilidad</b>, las proteínas se dividen en tres grupos. Las <b>fibrosas</b> tienen forma <b>alargada, filamentosa o de bastón</b>, con las cadenas dispuestas paralelamente a lo largo de un mismo eje, formando fibras o láminas.</p>
 <ul><li><b>Solubilidad:</b> <b>insolubles en agua</b> y en soluciones salinas diluidas.</li>
 <li><b>Estructura:</b> predomina la <b>secundaria</b> (hélices α o láminas β repetitivas), con escaso plegamiento terciario complejo.</li>
 <li><b>Función:</b> estructural, mecánica, de soporte y protección.</li>
 <li><b>Ejemplos:</b> colágeno, queratina, elastina, fibroína.</li></ul>`,
 memo:`Fibrosas: alargadas, insolubles en agua, predomina la 2ª, función estructural/protección. Colágeno, queratina, elastina, fibroína.`},
{src:`Tema 36, pág. 10`,title:`Proteínas globulares (esferoproteínas)`,fig:`proteForma`,
 body:`<p>Sus cadenas se pliegan intensamente sobre sí mismas formando una estructura <b>compacta, casi esférica u ovoide</b>.</p>
 <ul><li><b>Solubilidad:</b> <b>solubles en agua</b>.</li>
 <li><b>Estructura:</b> secundaria (hélices α, láminas β y giros) dentro de una <b>terciaria</b> y, a menudo, <b>cuaternaria</b> altamente específica.</li>
 <li><b>Función:</b> dinámica, metabólica y reguladora (catálisis, transporte, defensa y señalización).</li>
 <li><b>Ejemplos:</b> enzimas, proteínas de transporte, inmunoglobulinas, hormonas proteicas.</li></ul>`,
 memo:`Globulares: compactas, casi esféricas, solubles en agua, 3ª y a menudo 4ª; función dinámica (catálisis, transporte, defensa, señalización). Enzimas, inmunoglobulinas, hormonas.`},
{src:`Tema 36, pág. 11`,title:`Proteínas de membrana (o mixtas)`,fig:`proteForma`,
 body:`<p>Categoría física particular, caracterizada por su <b>interacción con las bicapas lipídicas</b> de las membranas celulares.</p>
 <ul><li><b>Solubilidad:</b> <b>insolubles en agua pura</b>.</li>
 <li><b>Estructura:</b> combinan <b>regiones fibrosas</b> (hélices α o barriles β que atraviesan la membrana) con <b>dominios globulares</b> que sobresalen hacia el medio acuoso intracelular o extracelular.</li>
 <li><b>Función:</b> transporte selectivo de iones y moléculas, recepción de señales y adhesión celular.</li>
 <li><b>Ejemplos:</b> canales iónicos, bombas de sodio-potasio (Na⁺/K⁺-ATPasa) y receptores acoplados a proteínas G.</li></ul>`,
 memo:`Membrana (mixtas): interactúan con la bicapa lipídica, insolubles en agua pura, regiones fibrosas + dominios globulares. Canales, Na⁺/K⁺-ATPasa, receptores acoplados a proteínas G.`},
{src:`Tema 36, pág. 12`,title:`Clasificación química: holoproteínas`,fig:`proteHetero`,
 body:`<p>Según su <b>composición química</b>, las proteínas se clasifican en dos grupos. Las <b>holoproteínas (proteínas simples)</b> están constituidas <b>únicamente por aminoácidos</b>: al someterse a <b>hidrólisis completa</b>, solo producen <b>aminoácidos libres</b>.</p>
 <p>Se subdividen según su forma física y solubilidad en <b>globulares</b> (solubles en agua) y <b>fibrosas</b> (insolubles; la diapositiva corta el texto en este punto).</p>`,
 memo:`Holoproteína (simple): solo aminoácidos; hidrólisis completa → solo aa libres. Globulares (solubles) y fibrosas (insolubles).`},
{src:`Tema 36, pág. 13`,title:`Clasificación química: heteroproteínas (conjugadas)`,fig:`proteHetero`,
 body:`<p>Las <b>heteroproteínas</b> tienen una <b>parte proteica</b> (cadenas de aminoácidos, la <b>apoproteína</b>) unida de forma estable a una fracción <b>no proteica</b>, el <b>grupo prostético</b>. Se clasifican según la naturaleza química de ese grupo:</p>
 <ul><li><b>Glucoproteínas:</b> con carbohidratos; ej. los antígenos del grupo sanguíneo A, B, O.</li>
 <li><b>Lipoproteínas:</b> con lípidos; HDL, LDL, VLDL.</li>
 <li><b>Nucleoproteínas:</b> unidas a ácidos nucleicos (ADN o ARN).</li>
 <li><b>Fosfoproteínas:</b> proteínas fosforiladas.</li>
 <li><b>Cromoproteínas:</b> con un pigmento; hemoglobina y mioglobina.</li>
 <li><b>Metaloproteínas:</b> con un metal; ferritina.</li></ul>`,
 memo:`Heteroproteína = apoproteína + grupo prostético. Gluco (A, B, O) · Lipo (HDL, LDL, VLDL) · Nucleo (ADN/ARN) · Fosfo (fosforiladas) · Cromo (hemoglobina, mioglobina) · Metalo (ferritina).`},
{src:`Tema 36, pág. 14`,title:`Propiedades físicas: solubilidad y tamaño`,fig:null,
 body:`<p>Las propiedades físicas <b>dependen de los aminoácidos que las componen y de su estructura tridimensional</b>.</p>
 <ul><li><b>Solubilidad:</b> las <b>globulares</b> son solubles en agua; las <b>fibrosas</b>, no.</li>
 <li><b>Tamaño y peso molecular (carácter coloidal):</b> son macromoléculas de <b>elevado peso molecular</b>, desde unos <b>5,000 Da</b> hasta <b>varios millones de Daltons</b>. El material indica que «no se disuelven».</li></ul>
 <p class="note">Complementario [5]: por su tamaño forman <b>dispersiones coloidales</b>, no soluciones verdaderas, y por eso no atraviesan las membranas de diálisis (a diferencia de los péptidos pequeños).</p>`,
 memo:`Globulares solubles, fibrosas no. Peso molecular de ≈ 5,000 Da a millones de Da: carácter coloidal.`},
{src:`Tema 36, pág. 14`,title:`Punto isoeléctrico (pI)`,fig:`protePI`,
 body:`<p>Las proteínas son <b>anfóteras</b> por los grupos ionizables de sus cadenas laterales y por sus grupos amino y carboxilo. Cada proteína tiene su propio <b>punto isoeléctrico (pI)</b>: el <b>pH en el que hay igualdad de cargas positivas y negativas</b> (carga neta cero).</p>
 <ul><li>En el pI su <b>solubilidad es mínima</b> y tienden a <b>precipitar</b>.</li>
 <li><b>Proteínas ácidas:</b> pI menor a 7. <b>Neutras:</b> pI cercano a 7. <b>Alcalinas:</b> pI mayor a 7.</li></ul>
 <p class="note">Complementario [5] (el objetivo pide la aplicación en el laboratorio clínico): si el pH es <b>menor que el pI</b>, la proteína tiene carga neta <b>positiva</b>; si es <b>mayor</b>, <b>negativa</b>. En la <b>electroforesis</b> de proteínas del suero (pH ≈ 8.6) todas quedan con carga negativa y migran hacia el <b>ánodo (+)</b>; la <b>precipitación isoeléctrica</b> aprovecha que en el pI la proteína es menos soluble.</p>`,
 memo:`pI = pH con carga neta cero → solubilidad mínima, precipita. Ácidas: pI &lt; 7; alcalinas: pI &gt; 7. pH &lt; pI: carga +; pH &gt; pI: carga −.`},
{src:`Tema 36, pág. 14 y 17`,title:`Desnaturalización`,fig:`proteFactores`,
 body:`<p><b>Desnaturalización:</b> pérdida de la <b>estructura tridimensional</b> por <b>ruptura de las fuerzas intermoleculares</b>, <b>sin ruptura de los enlaces peptídicos</b>. Los agentes pueden ser el <b>pH</b>, la <b>temperatura</b>, la <b>agitación mecánica</b>, los <b>solventes orgánicos</b> y los <b>detergentes</b>.</p>
 <p>La proteína <b>pierde su solubilidad y su función biológica</b>, pero <b>aumenta su viscosidad</b>. La estructura primaria (la secuencia) se conserva.</p>`,
 memo:`Desnaturalizar = perder la estructura 3D sin romper enlaces peptídicos. Agentes: pH, temperatura, agitación, solventes orgánicos, detergentes. Pierde solubilidad y función; aumenta la viscosidad.`},
{src:`Tema 36, pág. 16`,title:`Propiedades químicas`,fig:null,
 body:`<p>Están determinadas por los factores anteriores:</p>
 <ol><li><b>Amortiguadores fisiológicos:</b> el grupo carboxilo actúa como ácido y el grupo amino como base.</li>
 <li><b>Especificidad:</b> cada individuo tiene proteínas únicas.</li>
 <li><b>Hidrólisis:</b> <b>ácida y básica</b> (ruptura de enlaces peptídicos por ácidos o bases muy fuertes y expuestos por horas) y <b>enzimática</b> (proteasas y peptidasas: tripsina, quimotripsina, pepsina).</li>
 <li><b>Reactividad de las cadenas R:</b> formación de <b>puentes disulfuro</b> (cisteína), <b>fosforilación</b> (serina, treonina y tirosina), <b>glucosilación</b> (unión covalente con carbohidratos) y <b>acetilación y metilación</b>.</li>
 <li><b>Reacciones colorimétricas e identificación:</b> reacción de <b>Biuret</b> (el texto de la diapositiva se corta aquí; la imagen muestra el ensayo con sulfato de cobre diluido, con resultado positivo violeta y negativo azul).</li></ol>
 <p class="note">Complementario [5]: el Biuret detecta enlaces peptídicos (Cu²⁺ en medio alcalino); da violeta con proteínas y péptidos de al menos tres aminoácidos. La diapositiva 15 solo trae un enlace de Google Drive del Lic.</p>`,
 memo:`Buffer · especificidad · hidrólisis (ácida/básica; enzimática: tripsina, quimotripsina, pepsina) · reactividad de R (−S−S−, fosforilación Ser/Thr/Tyr, glucosilación, acetilación, metilación) · Biuret.`},
{src:`Tema 36, pág. 17`,title:`Factores que afectan la conformación estructural`,fig:`proteFactores`,
 body:`<p><b>Factores extrínsecos (ambientales y químicos):</b></p>
 <ul><li><b>Temperatura elevada:</b> aumenta la vibración molecular y rompe puentes de hidrógeno e interacciones hidrofóbicas.</li>
 <li><b>pH extremo:</b> altera las cargas eléctricas de los grupos R y rompe los puentes salinos.</li>
 <li><b>Solventes orgánicos (etanol, acetona):</b> penetran en el interior y alteran las interacciones hidrofóbicas.</li>
 <li><b>Detergentes (ej. SDS):</b> se unen a zonas apolares, destruyendo el núcleo hidrofóbico y desplegando la cadena.</li>
 <li><b>Agentes caotrópicos (urea, guanidinio):</b> desorganizan el agua circundante y rompen puentes de hidrógeno internos.</li>
 <li><b>Fuerzas mecánicas (agitación, alta presión):</b> rompen las interacciones débiles por cizallamiento o compresión.</li></ul>
 <p><b>Factores intrínsecos (propios y biológicos):</b></p>
 <ul><li><b>Secuencia de aminoácidos (primaria):</b> dicta el plegamiento espontáneo; una sola mutación puede alterar toda la forma.</li>
 <li><b>Puentes disulfuro (−S−S−):</b> estabilizan rígidamente la estructura terciaria.</li>
 <li><b>Proteínas chaperonas:</b> asisten y guían el plegamiento correcto dentro del entorno celular.</li>
 <li><b>Modificaciones postraduccionales:</b> adición de grupos (fosfatos, glúcidos, hidroxilos) que inducen cambios de forma regulados.</li>
 <li><b>Unión a cofactores y ligandos:</b> iones metálicos (Zn²⁺, Fe²⁺) o sustratos necesarios para estabilizar la conformación activa.</li>
 <li><b>Interacciones entre cadenas laterales:</b> equilibrio entre fuerzas de Van der Waals, enlaces de hidrógeno y repulsiones estéricas.</li></ul>`,
 memo:`Extrínsecos: temperatura, pH extremo, solventes orgánicos, detergentes (SDS), caotrópicos (urea, guanidinio), fuerza mecánica. Intrínsecos: secuencia, −S−S−, chaperonas, modificaciones postraduccionales, cofactores/ligandos, cadenas laterales.`}
  ],

  ERRATA:{
    [`Definición desde la biología molecular y la fisiología`]:[
      { tipo:`aviso`, pg:`pág. 4`, que:`Frase final de fisiología`, dice:`Termina cortada: «…componentes estructurales fundamentales de la célula, responsables…»`, ok:`El resto no se ve en el PDF`, por:`La diapositiva corta el texto; no hay más información para completarlo.` }],
    [`Clasificación química: holoproteínas`]:[
      { tipo:`aviso`, pg:`pág. 12`, que:`Subdivisión de las holoproteínas`, dice:`Termina cortada: «…globulares (solubles en agua) y fibrosas (…»`, ok:`Fibrosas: insolubles en agua (según la pág. 9)`, por:`El PDF corta la frase; el dato se toma de la diapositiva de proteínas fibrosas.` }],
    [`Propiedades físicas: solubilidad y tamaño`]:[
      { tipo:`aviso`, pg:`pág. 14 y 1`, que:`Sección 5 del índice y «no se disuelven»`, dice:`El índice anuncia «5. Propiedades físicas: punto isoeléctrico» pero no hay diapositiva propia; el pI está dentro de la pág. 14. Además se dice que las proteínas «no se disuelven»`, ok:`El pI se estudia en la pág. 14; las proteínas forman dispersiones coloidales`, por:`Las globulares sí se «disuelven» en agua como dispersión coloidal; confirma con el Lic. cómo lo espera en el examen.` }],
    [`Propiedades químicas`]:[
      { tipo:`aviso`, pg:`pág. 16`, que:`Punto 5, reacción de Biuret`, dice:`El texto se corta: «5. Reacciones colorimétricas e identificación: reacción de Biuret…»`, ok:`No hay más texto; la imagen muestra el ensayo (positivo violeta, negativo azul)`, por:`La diapositiva se corta en el PDF.` }]
  },

  MCQ:[
{src:`Tema 36, pág. 3`,q:`Desde la química orgánica, las proteínas son:`,o:[`Poliamidas naturales de alto peso molecular`,`Poliésteres de ácidos grasos`,`Polisacáridos ramificados`,`Polímeros de nucleótidos`],e:`Se forman por condensación lineal de α-aminoácidos.`},
{src:`Tema 36, pág. 3`,q:`Las unidades que forman las proteínas son los:`,o:[`α-aminoácidos`,`Monosacáridos`,`Ácidos grasos`,`Nucleótidos`],e:`Unidos por enlaces peptídicos.`},
{src:`Tema 36, pág. 3`,q:`El enlace que une los aminoácidos de una proteína es un enlace:`,o:[`Amida sustituido (peptídico)`,`Éster`,`Glucosídico`,`Fosfodiéster`],e:`En bioquímica se llama enlace peptídico.`},
{src:`Tema 36, pág. 4`,q:`Desde la biología molecular, una proteína es el:`,o:[`Producto funcional final de la expresión génica`,`Material genético de la célula`,`Almacén de energía`,`Solvente de la célula`],e:`Traduce la información del ADN a través del ARN mensajero.`},
{src:`Tema 36, pág. 4`,q:`«El vehículo mediante el cual el genotipo se convierte en fenotipo» describe a:`,o:[`La proteína`,`El ARN de transferencia`,`El lípido`,`El carbohidrato`],e:`Pág. 4.`},
{src:`Tema 36, pág. 5`,q:`Las proteínas están formadas, sobre todo, por:`,o:[`C, H, O y N (a menudo con azufre)`,`Solo C e H`,`C, H, O y P`,`Solo C y N`],e:`CHON.`},
{src:`Tema 36, pág. 5`,q:`En nutrición, la función principal de las proteínas es:`,o:[`Suministrar nitrógeno orgánico y aminoácidos esenciales`,`Aportar la mayor parte de la energía`,`Almacenar grasa`,`Disolver vitaminas`],e:`Aunque rinden ≈ 4 kcal/g, no es su función principal.`},
{src:`Tema 36, pág. 5`,q:`Una proteína que pierde su estructura nativa:`,o:[`Sigue siendo la misma poliamida, pero deja de ser funcional`,`Se convierte en un lípido`,`Se hidroliza siempre a aminoácidos`,`Gana actividad biológica`],e:`Desnaturalización.`},
{src:`Tema 36, pág. 6`,q:`La estructura primaria de una proteína es:`,o:[`La secuencia lineal de aminoácidos`,`El plegamiento local en hélice`,`El plegamiento global 3D`,`El ensamblaje de subunidades`],e:`La determina el ADN.`},
{src:`Tema 36, pág. 6`,q:`El enlace estabilizador de la estructura primaria es:`,o:[`El enlace peptídico`,`El puente de hidrógeno`,`El puente disulfuro`,`El enlace iónico`],e:`Une los aminoácidos en secuencia.`},
{src:`Tema 36, pág. 6`,q:`La estructura primaria está determinada directamente por:`,o:[`La información genética del ADN`,`La temperatura`,`El pH`,`Las chaperonas`],e:`Pág. 6.`},
{src:`Tema 36, pág. 6`,q:`La estructura secundaria se estabiliza por puentes de hidrógeno entre:`,o:[`El O del C=O de un aminoácido y el H del N−H de otro`,`Dos grupos R apolares`,`Dos cisteínas`,`Dos subunidades`],e:`Interacciones del esqueleto peptídico, sin grupos R.`},
{src:`Tema 36, pág. 6`,q:`¿Cuáles son las dos formas principales de estructura secundaria?`,o:[`Hélice α y lámina β`,`Globular y fibrosa`,`Cis y trans`,`Apoproteína y grupo prostético`],e:`La hélice se enrolla a la derecha; la lámina forma zigzag.`},
{src:`Tema 36, pág. 6`,q:`En la lámina plegada β, los segmentos se disponen:`,o:[`En paralelo o antiparalelo, en zigzag o acordeón`,`En espiral hacia la derecha`,`En una esfera compacta`,`En una sola línea recta sin pliegues`],e:`La hélice α es la espiral.`},
{src:`Tema 36, pág. 7`,q:`La estructura terciaria es el plegamiento global de:`,o:[`Toda la cadena polipeptídica sobre sí misma`,`Un segmento corto del esqueleto`,`Varias cadenas ensambladas`,`Solo los extremos de la cadena`],e:`Dan forma funcional globular o fibrosa.`},
{src:`Tema 36, pág. 7`,q:`Las interacciones de la estructura terciaria ocurren entre:`,o:[`Los grupos R (cadenas laterales)`,`Solo los grupos C=O y N−H del esqueleto`,`Las bases del ADN`,`Los extremos N y C terminales`],e:`A diferencia de la secundaria.`},
{src:`Tema 36, pág. 7`,q:`En la interacción hidrofóbica, los aminoácidos apolares se agrupan:`,o:[`En el interior de la proteína`,`En la superficie en contacto con el agua`,`Fuera de la célula`,`En el ADN`],e:`Evitan el contacto con el agua.`},
{src:`Tema 36, pág. 7`,q:`Los puentes disulfuro (−S−S−) se forman entre:`,o:[`Dos cisteínas`,`Dos serinas`,`Dos lisinas`,`Una valina y una alanina`],e:`Son enlaces covalentes fuertes.`},
{src:`Tema 36, pág. 7`,q:`Los puentes salinos son enlaces:`,o:[`Iónicos entre grupos R con cargas opuestas`,`Covalentes entre cisteínas`,`Peptídicos`,`Glucosídicos`],e:`Se forman con los puentes de H entre grupos R polares.`},
{src:`Tema 36, pág. 7`,q:`Las fuerzas de Van der Waals son:`,o:[`Atracciones débiles de corto alcance entre átomos cercanos`,`Enlaces covalentes fuertes`,`Enlaces iónicos`,`Enlaces peptídicos`],e:`Pág. 7.`},
{src:`Tema 36, pág. 7`,q:`La estructura cuaternaria se presenta únicamente en proteínas formadas por:`,o:[`Dos o más cadenas polipeptídicas (subunidades)`,`Una sola cadena`,`Menos de 10 aminoácidos`,`Solo hélices α`],e:`Ejemplo: la hemoglobina, de cuatro subunidades.`},
{src:`Tema 36, pág. 7`,q:`Las subunidades de una proteína con estructura cuaternaria también se llaman:`,o:[`Protómeros`,`Apoproteínas`,`Grupos prostéticos`,`Cofactores`],e:`Pág. 7.`},
{src:`Tema 36, pág. 9`,q:`Las proteínas fibrosas son:`,o:[`Insolubles en agua, de función estructural`,`Solubles en agua, de función catalítica`,`Siempre enzimas`,`Hormonas`],e:`Colágeno, queratina, elastina y fibroína.`},
{src:`Tema 36, pág. 9`,q:`¿Cuál es una proteína fibrosa?`,o:[`Colágeno`,`Inmunoglobulina`,`Hexoquinasa`,`Insulina`],e:`También queratina, elastina y fibroína.`},
{src:`Tema 36, pág. 9`,q:`En las proteínas fibrosas predomina la estructura:`,o:[`Secundaria (hélices α o láminas β repetitivas)`,`Cuaternaria`,`Terciaria muy compleja`,`Primaria únicamente`],e:`Con escaso plegamiento terciario complejo.`},
{src:`Tema 36, pág. 10`,q:`Las proteínas globulares son:`,o:[`Compactas, casi esféricas y solubles en agua`,`Alargadas e insolubles`,`Insolubles en agua pura`,`Solo estructurales`],e:`Su función es dinámica, metabólica y reguladora.`},
{src:`Tema 36, pág. 10`,q:`¿Cuál es un ejemplo de proteína globular?`,o:[`Inmunoglobulina`,`Queratina`,`Elastina`,`Fibroína`],e:`También enzimas, proteínas de transporte y hormonas proteicas.`},
{src:`Tema 36, pág. 11`,q:`Las proteínas de membrana (mixtas) son:`,o:[`Insolubles en agua pura, con regiones fibrosas y dominios globulares`,`Solubles en agua, esféricas`,`Siempre fibrosas`,`Sin estructura secundaria`],e:`Interactúan con la bicapa lipídica.`},
{src:`Tema 36, pág. 11`,q:`¿Cuál es una proteína de membrana?`,o:[`La bomba Na⁺/K⁺-ATPasa`,`El colágeno`,`La ferritina`,`La queratina`],e:`También los canales iónicos y los receptores acoplados a proteínas G.`},
{src:`Tema 36, pág. 12`,q:`Una holoproteína (proteína simple) está formada:`,o:[`Únicamente por aminoácidos`,`Por aminoácidos y un grupo prostético`,`Por ADN y proteína`,`Por lípidos`],e:`Su hidrólisis completa produce solo aminoácidos libres.`},
{src:`Tema 36, pág. 13`,q:`En una heteroproteína, la parte no proteica se llama:`,o:[`Grupo prostético`,`Apoproteína`,`Protómero`,`Cofactor génico`],e:`La parte de aminoácidos es la apoproteína.`},
{src:`Tema 36, pág. 13`,q:`La parte de aminoácidos de una heteroproteína se llama:`,o:[`Apoproteína`,`Grupo prostético`,`Holoproteína`,`Subunidad`],e:`Pág. 13.`},
{src:`Tema 36, pág. 13`,q:`Las lipoproteínas HDL, LDL y VLDL son heteroproteínas con grupo prostético:`,o:[`Lipídico`,`Glucídico`,`Metálico`,`Nucleico`],e:`Lipoproteínas.`},
{src:`Tema 36, pág. 13`,q:`La hemoglobina y la mioglobina son:`,o:[`Cromoproteínas`,`Glucoproteínas`,`Nucleoproteínas`,`Fosfoproteínas`],e:`Pág. 13.`},
{src:`Tema 36, pág. 13`,q:`La ferritina es una:`,o:[`Metaloproteína`,`Lipoproteína`,`Cromoproteína`,`Glucoproteína`],e:`Contiene hierro.`},
{src:`Tema 36, pág. 13`,q:`Las proteínas unidas a ácidos nucleicos (ADN o ARN) son:`,o:[`Nucleoproteínas`,`Fosfoproteínas`,`Glucoproteínas`,`Cromoproteínas`],e:`Pág. 13.`},
{src:`Tema 36, pág. 14`,q:`El punto isoeléctrico (pI) es el pH en el que la proteína tiene:`,o:[`Igualdad de cargas positivas y negativas`,`Máxima carga positiva`,`Máxima solubilidad`,`Máxima carga negativa`],e:`Carga neta cero.`},
{src:`Tema 36, pág. 14`,q:`En su punto isoeléctrico, la solubilidad de una proteína es:`,o:[`Mínima, y tiende a precipitar`,`Máxima`,`Igual en cualquier pH`,`Nula en cualquier pH`],e:`Por eso el pI se usa para separarlas.`},
{src:`Tema 36, pág. 14`,q:`El pI de una proteína ácida es:`,o:[`Menor a 7`,`Mayor a 7`,`Siempre igual a 7`,`Igual a 14`],e:`Neutras cerca de 7; alcalinas mayor a 7.`},
{src:`Tema 36, pág. 14`,q:`La desnaturalización de una proteína implica:`,o:[`Pérdida de la estructura 3D sin romper enlaces peptídicos`,`Ruptura de todos los enlaces peptídicos`,`Cambio de la secuencia de aminoácidos`,`Aumento de la solubilidad y de la función`],e:`Se rompen fuerzas intermoleculares.`},
{src:`Tema 36, pág. 14`,q:`Al desnaturalizarse, una proteína:`,o:[`Pierde solubilidad y función, pero aumenta su viscosidad`,`Aumenta su función`,`Disminuye su viscosidad`,`Cambia de pI y de secuencia`],e:`Pág. 14.`},
{src:`Tema 36, pág. 14`,q:`El peso molecular de las proteínas va desde unos:`,o:[`5,000 Da hasta varios millones de Da`,`18 Da hasta 100 Da`,`100 Da hasta 500 Da`,`1 Da hasta 10 Da`],e:`Carácter coloidal.`},
{src:`Tema 36, pág. 16`,q:`El carácter de amortiguador fisiológico de las proteínas se debe a que:`,o:[`El carboxilo actúa como ácido y el amino como base`,`No tienen grupos ionizables`,`Son lípidos`,`Son insolubles`],e:`Pág. 16.`},
{src:`Tema 36, pág. 16`,q:`Las enzimas que hidrolizan proteínas son:`,o:[`Proteasas y peptidasas (tripsina, quimotripsina, pepsina)`,`Amilasas`,`Lipasas`,`Ureasas`],e:`Hidrólisis enzimática.`},
{src:`Tema 36, pág. 16`,q:`¿En qué aminoácidos ocurre la fosforilación?`,o:[`Serina, treonina y tirosina`,`Valina, leucina e isoleucina`,`Lisina, arginina e histidina`,`Glicina, alanina y prolina`],e:`Reactividad de las cadenas R.`},
{src:`Tema 36, pág. 16`,q:`La reacción de Biuret es una reacción:`,o:[`Colorimétrica para identificar proteínas`,`De combustión`,`De saponificación`,`De hidrólisis ácida`],e:`El resultado positivo es violeta.`},
{src:`Tema 36, pág. 17`,q:`¿Cuál es un factor extrínseco que altera la conformación de una proteína?`,o:[`Temperatura elevada`,`La secuencia de aminoácidos`,`Las chaperonas`,`Los cofactores`],e:`Los otros tres son intrínsecos.`},
{src:`Tema 36, pág. 17`,q:`La urea y el guanidinio son agentes:`,o:[`Caotrópicos: desorganizan el agua y rompen puentes de H internos`,`Detergentes`,`Solventes orgánicos`,`Cofactores`],e:`Pág. 17.`},
{src:`Tema 36, pág. 17`,q:`El SDS (detergente) desnaturaliza porque:`,o:[`Se une a zonas apolares y destruye el núcleo hidrofóbico`,`Rompe los enlaces peptídicos`,`Aumenta el pI`,`Forma puentes disulfuro`],e:`Despliega la cadena.`},
{src:`Tema 36, pág. 17`,q:`Las proteínas chaperonas:`,o:[`Asisten y guían el plegamiento correcto`,`Hidrolizan las proteínas`,`Desnaturalizan las proteínas`,`Sintetizan el ADN`],e:`Factor intrínseco.`},
{src:`Tema 36, pág. 17`,q:`Según el material, una sola mutación puede alterar toda la forma de la proteína porque:`,o:[`La secuencia de aminoácidos dicta el plegamiento espontáneo`,`Las proteínas no tienen estructura`,`Las chaperonas se destruyen`,`El pH cambia`],e:`Factor intrínseco.`}
  ],

  ABIERTAS:[
{src:`Tema 36, pág. 6–8`,q:`Describa los cuatro niveles de estructura de una proteína, con el enlace o interacción que estabiliza cada uno.`,a:`Primaria: secuencia lineal de aminoácidos determinada por el ADN, estabilizada por el enlace peptídico. Secundaria: plegamiento local y repetitivo del esqueleto peptídico (hélice α en espiral hacia la derecha, lámina β en zigzag paralela o antiparalela), estabilizado por puentes de hidrógeno entre el O del C=O y el H del N−H. Terciaria: plegamiento global de toda la cadena, estabilizado por interacciones entre grupos R: hidrofóbicas, puentes disulfuro (cisteínas), puentes de hidrógeno y enlaces iónicos, y fuerzas de Van der Waals. Cuaternaria: ensamblaje de dos o más cadenas polipeptídicas (subunidades), como la hemoglobina, estabilizada por las mismas interacciones no covalentes y a veces por puentes disulfuro entre cadenas.`},
{src:`Tema 36, pág. 9–13`,q:`Clasifique las proteínas según su forma y solubilidad y según su composición química, con ejemplos.`,a:`Por forma y solubilidad: fibrosas (alargadas, insolubles, estructurales: colágeno, queratina, elastina, fibroína), globulares (compactas, solubles en agua, dinámicas: enzimas, proteínas de transporte, inmunoglobulinas, hormonas) y de membrana o mixtas (interactúan con la bicapa lipídica, insolubles en agua pura: canales iónicos, Na⁺/K⁺-ATPasa, receptores acoplados a proteínas G). Por composición: holoproteínas (solo aminoácidos) y heteroproteínas (apoproteína más grupo prostético): glucoproteínas (grupo sanguíneo A, B, O), lipoproteínas (HDL, LDL, VLDL), nucleoproteínas (ADN o ARN), fosfoproteínas, cromoproteínas (hemoglobina, mioglobina) y metaloproteínas (ferritina).`},
{src:`Tema 36, pág. 14`,q:`Explique qué es el punto isoeléctrico y por qué es importante para la solubilidad de las proteínas y para su separación en el laboratorio.`,a:`El punto isoeléctrico (pI) es el pH en el que la proteína tiene igualdad de cargas positivas y negativas (carga neta cero); cada proteína tiene el suyo (ácidas pI menor a 7, neutras cerca de 7, alcalinas mayor a 7). En el pI la solubilidad es mínima y la proteína tiende a precipitar. Esto permite separarlas: por precipitación isoeléctrica ajustando el pH al pI, y por electroforesis, donde a un pH distinto del pI las proteínas tienen carga neta y migran hacia el ánodo o el cátodo según su signo (complementario).`},
{src:`Tema 36, pág. 14 y 17`,q:`Defina desnaturalización y mencione los agentes y mecanismos que la provocan.`,a:`Es la pérdida de la estructura tridimensional por ruptura de las fuerzas intermoleculares, sin romper los enlaces peptídicos; la proteína pierde solubilidad y función y aumenta su viscosidad. Agentes: temperatura elevada (aumenta la vibración y rompe puentes de H e interacciones hidrofóbicas), pH extremo (altera las cargas y rompe puentes salinos), solventes orgánicos (alteran las interacciones hidrofóbicas), detergentes como el SDS (destruyen el núcleo hidrofóbico), agentes caotrópicos como urea y guanidinio (desorganizan el agua y rompen puentes de H) y fuerzas mecánicas (rompen interacciones débiles por cizallamiento o compresión).`}
  ],

  EJ:[
{src:`Tema 36, pág. 6–7`,q:`Indique el nivel de estructura (primaria, secundaria, terciaria o cuaternaria) de: a) la secuencia Gly-Ala-Ser-Lys; b) una hélice α; c) los puentes disulfuro entre dos cisteínas de la misma cadena; d) la hemoglobina formada por cuatro cadenas.`,
 pide:`Asociar cada descripción con su nivel.`,datos:[`1ª secuencia · 2ª plegamiento local del esqueleto · 3ª plegamiento global (grupos R) · 4ª varias cadenas`],f:`Se identifica qué se describe: secuencia, esqueleto, grupos R o subunidades`,
 pasos:[`a) Una secuencia lineal de aminoácidos: primaria.`,`b) La hélice α es un plegamiento local estabilizado por puentes de H del esqueleto: secundaria.`,`c) Un puente disulfuro une grupos R de cisteínas de una sola cadena: terciaria.`,`d) Cuatro cadenas ensambladas: cuaternaria.`],r:`a) primaria; b) secundaria; c) terciaria; d) cuaternaria`},
{src:`Tema 36, pág. 9–13`,q:`Clasifique cada proteína según el material: a) colágeno; b) inmunoglobulina; c) Na⁺/K⁺-ATPasa; d) hemoglobina; e) LDL; f) ferritina.`,
 pide:`Dar la clase por forma (fibrosa, globular, de membrana) o por composición (heteroproteína y grupo prostético).`,datos:[`fibrosa · globular · de membrana`,`gluco · lipo · nucleo · fosfo · cromo · metaloproteína`],f:`Se mira la forma física y el grupo prostético`,
 pasos:[`a) Colágeno: fibrosa (holoproteína), estructural.`,`b) Inmunoglobulina: globular, de defensa.`,`c) Na⁺/K⁺-ATPasa: de membrana (mixta).`,`d) Hemoglobina: heteroproteína, cromoproteína (grupo hemo con hierro; globular).`,`e) LDL: heteroproteína, lipoproteína.`,`f) Ferritina: heteroproteína, metaloproteína.`],r:`a) fibrosa; b) globular; c) de membrana; d) cromoproteína; e) lipoproteína; f) metaloproteína`},
{src:`Tema 36, pág. 14 (complementario)`,q:`Una proteína tiene pI = 4.7. ¿Qué carga neta tiene a pH 7.4 y a pH 3? ¿A qué pH es menos soluble?`,
 pide:`Comparar el pH con el pI.`,datos:[`pI = 4.7`,`pH &gt; pI: carga neta −`,`pH &lt; pI: carga neta +`],f:`Carga neta según el pH respecto al pI; solubilidad mínima en el pI`,
 pasos:[`pH 7.4 es mayor que 4.7: carga neta negativa.`,`pH 3 es menor que 4.7: carga neta positiva.`,`En el pI (4.7) la carga neta es cero y la solubilidad es mínima.`],r:`pH 7.4: carga −; pH 3: carga +; menos soluble a pH 4.7`},
{src:`Tema 36, pág. 14 y 17`,q:`Al hervir la clara de un huevo se vuelve blanca y sólida. ¿Qué ocurrió con la proteína, qué se rompió y qué se conservó?`,
 pide:`Aplicar el concepto de desnaturalización por temperatura.`,datos:[`agente: temperatura elevada`],f:`Calor → rompe puentes de H e interacciones hidrofóbicas`,
 pasos:[`La temperatura elevada aumenta la vibración molecular.`,`Se rompen puentes de hidrógeno e interacciones hidrofóbicas: la proteína se desnaturaliza y pierde su estructura 3D (y su solubilidad).`,`No se rompen los enlaces peptídicos.`,`La estructura primaria (la secuencia de aminoácidos) se conserva.`],r:`Desnaturalización; se rompen interacciones débiles; se conservan los enlaces peptídicos y la secuencia`},
{src:`Tema 36, pág. 14 y 16`,q:`Compare la desnaturalización con la hidrólisis de una proteína.`,
 pide:`Distinguir qué se rompe y qué se obtiene en cada proceso.`,datos:[`desnaturalización: fuerzas intermoleculares`,`hidrólisis: enlaces peptídicos`],f:`Desnaturalización: estructura 3D · hidrólisis: enlaces peptídicos`,
 pasos:[`Desnaturalización: se rompen las fuerzas intermoleculares (puentes de H, hidrofóbicas, iónicas) y se pierde la estructura 3D; los enlaces peptídicos quedan intactos.`,`Hidrólisis: se rompen los enlaces peptídicos con ácidos o bases muy fuertes durante horas, o con proteasas y peptidasas (tripsina, quimotripsina, pepsina).`,`Con la hidrólisis completa de una holoproteína se obtienen solo aminoácidos libres.`],r:`Desnaturalización no rompe enlaces peptídicos; la hidrólisis sí y libera aminoácidos`}
  ],

  FORM:[
{src:`Tema 36, pág. 3–17`,title:`Proteínas`,rows:[
 [`Definición`,`Poliamidas naturales de alto peso molecular · α-aminoácidos unidos por enlaces peptídicos`],
 [`Estructura 1ª`,`Secuencia de aa (la dicta el ADN) · enlace peptídico`],
 [`Estructura 2ª`,`Hélice α · lámina β (paralela/antiparalela) · puentes de H C=O···H−N del esqueleto`],
 [`Estructura 3ª`,`Plegado global de una cadena · entre grupos R: hidrofóbicas, −S−S−, puentes de H e iónicos, Van der Waals`],
 [`Estructura 4ª`,`Dos o más cadenas (subunidades) · hemoglobina (4)`],
 [`Por forma`,`Fibrosas (insolubles, estructurales) · globulares (solubles, dinámicas) · de membrana (mixtas)`],
 [`Por composición`,`Holoproteínas (solo aa) · heteroproteínas (apoproteína + grupo prostético)`],
 [`Heteroproteínas`,`Gluco (A, B, O) · lipo (HDL, LDL, VLDL) · nucleo (ADN/ARN) · fosfo · cromo (hemoglobina, mioglobina) · metalo (ferritina)`],
 [`pI`,`pH con carga neta 0 · solubilidad mínima, precipita · ácidas pI &lt; 7 · alcalinas pI &gt; 7`],
 [`Desnaturalización`,`Pierde la estructura 3D sin romper enlaces peptídicos · pierde solubilidad y función · ↑ viscosidad`],
 [`Hidrólisis`,`Ácida o básica (muy fuertes, horas) · enzimática: tripsina, quimotripsina, pepsina`],
 [`Reactividad de R`,`−S−S− (Cys) · fosforilación (Ser, Thr, Tyr) · glucosilación · acetilación · metilación`],
 [`Factores extrínsecos`,`Temperatura · pH extremo · solventes orgánicos · detergentes (SDS) · caotrópicos (urea, guanidinio) · fuerzas mecánicas`],
 [`Factores intrínsecos`,`Secuencia · −S−S− · chaperonas · modificaciones postraduccionales · cofactores y ligandos · cadenas laterales`]
]}
  ],

  FICHAS:[
{src:`Tema 36, pág. 3`,fig:null,f:`¿Qué son las proteínas desde la química orgánica?`,b:`Poliamidas naturales de alto peso molecular: α-aminoácidos unidos por enlaces amida sustituidos (peptídicos).`},
{src:`Tema 36, pág. 4`,fig:null,f:`Proteína desde la biología molecular.`,b:`Producto funcional final de la expresión génica: ADN → ARNm → proteína. Convierte el genotipo en fenotipo.`},
{src:`Tema 36, pág. 5`,fig:null,f:`Función nutricional principal de las proteínas.`,b:`Suministrar nitrógeno orgánico y aminoácidos esenciales (no energía, aunque rinden ≈ 4 kcal/g).`},
{src:`Tema 36, pág. 6`,fig:`proteNiveles`,f:`Estructura primaria.`,b:`Secuencia lineal de aminoácidos, determinada por el ADN. La estabiliza el enlace peptídico.`},
{src:`Tema 36, pág. 6`,fig:`proteNiveles`,f:`Estructura secundaria.`,b:`Plegamiento local del esqueleto: hélice α y lámina β. Puentes de H entre C=O y N−H.`},
{src:`Tema 36, pág. 7`,fig:`proteInter`,f:`Estructura terciaria: ¿qué interacciones la estabilizan?`,b:`Entre grupos R: hidrofóbicas, puentes disulfuro, puentes de H y enlaces iónicos, Van der Waals.`},
{src:`Tema 36, pág. 7`,fig:`proteNiveles`,f:`Estructura cuaternaria.`,b:`Ensamblaje de 2 o más cadenas polipeptídicas (subunidades). Ej.: hemoglobina, 4 subunidades.`},
{src:`Tema 36, pág. 9`,fig:`proteForma`,f:`Proteínas fibrosas.`,b:`Alargadas, insolubles, estructurales (secundaria predominante). Colágeno, queratina, elastina, fibroína.`},
{src:`Tema 36, pág. 10`,fig:`proteForma`,f:`Proteínas globulares.`,b:`Compactas, solubles, función dinámica (catálisis, transporte, defensa). Enzimas, inmunoglobulinas, hormonas.`},
{src:`Tema 36, pág. 11`,fig:`proteForma`,f:`Proteínas de membrana.`,b:`Interactúan con la bicapa; insolubles en agua pura; regiones fibrosas y dominios globulares. Canales, Na⁺/K⁺-ATPasa, receptores acoplados a proteínas G.`},
{src:`Tema 36, pág. 12`,fig:`proteHetero`,f:`Holoproteína y heteroproteína.`,b:`Holo: solo aminoácidos. Hetero: apoproteína (aa) + grupo prostético (no proteico).`},
{src:`Tema 36, pág. 13`,fig:`proteHetero`,f:`Tipos de heteroproteínas y ejemplo de cada una.`,b:`Gluco (A, B, O) · lipo (HDL, LDL, VLDL) · nucleo (ADN/ARN) · fosfo · cromo (hemoglobina, mioglobina) · metalo (ferritina).`},
{src:`Tema 36, pág. 14`,fig:`protePI`,f:`Punto isoeléctrico.`,b:`pH con igualdad de cargas + y −. Solubilidad mínima: precipita. Ácidas pI &lt; 7; alcalinas pI &gt; 7.`},
{src:`Tema 36, pág. 14`,fig:null,f:`Desnaturalización.`,b:`Pérdida de la estructura 3D sin romper enlaces peptídicos. Pierde solubilidad y función; aumenta la viscosidad.`},
{src:`Tema 36, pág. 16`,fig:null,f:`Hidrólisis de proteínas.`,b:`Ácida o básica (muy fuertes, horas) o enzimática (tripsina, quimotripsina, pepsina).`},
{src:`Tema 36, pág. 17`,fig:`proteFactores`,f:`Factores extrínsecos de desnaturalización.`,b:`Temperatura, pH extremo, solventes orgánicos, detergentes (SDS), caotrópicos (urea, guanidinio), fuerzas mecánicas.`},
{src:`Tema 36, pág. 17`,fig:`proteFactores`,f:`Factores intrínsecos.`,b:`Secuencia de aa, puentes disulfuro, chaperonas, modificaciones postraduccionales, cofactores/ligandos, interacciones de las cadenas laterales.`}
  ],

  FQ:[
{src:`Tema 36, pág. 6–7`,q:`"¿A qué nivel pertenecen los puentes de H entre el C=O y el N−H del esqueleto?" ¿Qué haces primero?`,o:[`Veo si participan los grupos R o solo el esqueleto: solo el esqueleto, secundaria`,`Cuento los aminoácidos de la cadena`,`Busco un grupo prostético`,`Veo si es soluble en agua`],e:`Si interviene el esqueleto, es secundaria; si intervienen los grupos R, es terciaria.`},
{src:`Tema 36, pág. 13`,q:`"La ferritina, ¿qué tipo de proteína es?" ¿Qué haces primero?`,o:[`Identifico el grupo prostético: un metal, metaloproteína`,`Cuento sus subunidades`,`Mido su pI`,`La clasifico como fibrosa`],e:`Las heteroproteínas se nombran por su grupo prostético.`},
{src:`Tema 36, pág. 14`,q:`"¿Por qué una proteína precipita en su pI?"`,o:[`Con carga neta cero hay menos repulsión entre moléculas y su solubilidad es mínima`,`Porque se rompen sus enlaces peptídicos`,`Porque pierde su secuencia`,`Porque se vuelve un lípido`],e:`El pI es el pH de carga neta cero.`},
{src:`Tema 36, pág. 14`,q:`"Calenté una proteína y perdió su función. ¿Rompí sus enlaces peptídicos?"`,o:[`No: se desnaturalizó, se rompieron fuerzas débiles y la secuencia sigue igual`,`Sí, siempre`,`Sí, y cambió su secuencia`,`No pasó nada con la estructura`],e:`La desnaturalización no rompe enlaces peptídicos.`}
  ],

  VIDEOS:[],

  GENS:[
 {id:`nivelEstrG`,t:`t36`,src:`Tema 36, pág. 6–7`,name:`Nivel de estructura de una proteína`,make(){
   const NV = [`Primaria`,`Secundaria`,`Terciaria`,`Cuaternaria`];
   const L = [
    [`la secuencia lineal de aminoácidos unidos por enlaces peptídicos`,0,`Es solo la secuencia de aa.`],
    [`la secuencia determinada directamente por la información genética del ADN`,0,`La secuencia la dicta el ADN.`],
    [`la hélice α y la lámina β`,1,`Son plegamientos locales y repetitivos del esqueleto.`],
    [`los puentes de hidrógeno entre el O del C=O de un aminoácido y el H del N−H de otro`,1,`Interviene el esqueleto peptídico, sin los grupos R.`],
    [`el plegamiento global tridimensional de toda una cadena polipeptídica`,2,`Plegamiento de toda la cadena sobre sí misma.`],
    [`los puentes disulfuro entre cisteínas y las interacciones hidrofóbicas entre grupos R`,2,`Interacciones entre grupos R de una misma cadena.`],
    [`el ensamblaje de dos o más cadenas polipeptídicas, como en la hemoglobina`,3,`Solo existe con varias subunidades.`],
    [`un complejo de subunidades (protómeros) estabilizado por interacciones no covalentes`,3,`Varias cadenas forman un complejo funcional.`]];
   const [d, k, w] = pick(L);
   const opts = shuf(NV.slice());
   return { q:`¿A qué nivel de estructura corresponde ${d}?`, opts, correct: opts.indexOf(NV[k]),
     pasos:[w, `Nivel: estructura ${NV[k].toLowerCase()}.`], r: NV[k] }; }},
 {id:`clasFormaG`,t:`t36`,src:`Tema 36, pág. 9–11`,name:`Fibrosa, globular o de membrana`,make(){
   const CL = [`Fibrosa (insoluble, estructural)`,`Globular (soluble, dinámica)`,`De membrana (mixta)`,`Heteroproteína (solo por su grupo prostético)`];
   const L = [[`el colágeno`,0],[`la queratina`,0],[`la elastina`,0],[`la fibroína`,0],[`una enzima`,1],[`una inmunoglobulina`,1],[`una proteína de transporte`,1],[`una hormona proteica`,1],[`la bomba Na⁺/K⁺-ATPasa`,2],[`un canal iónico`,2],[`un receptor acoplado a proteínas G`,2]];
   const [n, k] = pick(L);
   const opts = shuf(CL.slice());
   return { q:`Según su forma y solubilidad, ${n} es una proteína:`, opts, correct: opts.indexOf(CL[k]),
     pasos:[[`Alargada, insoluble en agua y de función estructural.`,`Compacta, soluble en agua y de función dinámica (catálisis, transporte, defensa, señalización).`,`Interactúa con la bicapa lipídica, insoluble en agua pura.`][k], `Clase: ${CL[k]}.`], r: CL[k] }; }},
 {id:`heteroG`,t:`t36`,src:`Tema 36, pág. 13`,name:`Tipos de heteroproteínas`,make(){
   const T = [`Glucoproteína`,`Lipoproteína`,`Nucleoproteína`,`Fosfoproteína`,`Cromoproteína`,`Metaloproteína`];
   const L = [[`los antígenos del grupo sanguíneo A, B y O`,0,`carbohidrato`],[`HDL, LDL y VLDL`,1,`lípido`],[`las unidas a ADN o ARN`,2,`ácido nucleico`],[`las proteínas fosforiladas`,3,`fosfato`],[`la hemoglobina`,4,`pigmento`],[`la mioglobina`,4,`pigmento`],[`la ferritina`,5,`metal`]];
   const [d, k, gp] = pick(L);
   const bad = shuf(T.filter((x, i) => i !== k)).slice(0, 3);
   const opts = shuf([T[k]].concat(bad));
   return { q:`Según el material, ${d} pertenece${d.startsWith(`las`) || d.startsWith(`los`) || d.startsWith(`HDL`) ? `n` : ``} a las heteroproteínas del tipo:`, opts, correct: opts.indexOf(T[k]),
     pasos:[`Las heteroproteínas se nombran por su grupo prostético; aquí es ${gp}.`, `Tipo: ${T[k].toLowerCase()}.`], r: T[k] }; }},
 {id:`piG`,t:`t36`,src:`Tema 36, pág. 14 (complementario)`,name:`Carga y solubilidad según el pH y el pI`,make(){
   const pI = pick([4.7, 5.5, 6.0, 8.0, 9.5, 10.5]);
   const pH = pick([2, 3, 4, 5, 6, 7, 7.4, 8, 9, 10, 11, 12].filter(x => x !== pI));
   const mod = Math.random() < .22; const ph = mod ? pI : pH;
   const k = ph < pI ? 0 : ph > pI ? 1 : 2;
   const O = [`Carga neta positiva; más soluble que en su pI`,`Carga neta negativa; más soluble que en su pI`,`Carga neta cero; solubilidad mínima (precipita)`,`Carga neta cero; solubilidad máxima`];
   const opts = shuf(O.slice());
   return { q:`Una proteína tiene pI = ${pI}. ¿Qué carga neta y qué solubilidad tiene a pH ${ph}?`, opts, correct: opts.indexOf(O[k]),
     pasos:[k === 2 ? `pH = pI: igualdad de cargas + y −, carga neta cero.` : `pH ${ph} ${k === 0 ? `menor` : `mayor`} que el pI (${pI}): la carga neta es ${k === 0 ? `positiva` : `negativa`}.`, k === 2 ? `En el pI la solubilidad es mínima y tiende a precipitar.` : `Lejos del pI hay carga neta y la proteína es más soluble que en su pI.`], r: O[k] }; }},
 {id:`desnatG`,t:`t36`,src:`Tema 36, pág. 17`,name:`Cómo desnaturaliza cada agente`,make(){
   const L = [[`la temperatura elevada`,`Aumenta la vibración molecular y rompe puentes de hidrógeno e interacciones hidrofóbicas`],[`un pH extremo`,`Altera las cargas eléctricas de los grupos R y rompe los puentes salinos`],[`un solvente orgánico (etanol, acetona)`,`Penetra en el interior y altera las interacciones hidrofóbicas`],[`un detergente (SDS)`,`Se une a zonas apolares, destruye el núcleo hidrofóbico y despliega la cadena`],[`un agente caotrópico (urea, guanidinio)`,`Desorganiza el agua circundante y rompe puentes de hidrógeno internos`],[`la agitación mecánica o la alta presión`,`Rompe las interacciones débiles por cizallamiento o compresión`]];
   const [n, m] = pick(L);
   const bad = shuf(L.filter(x => x[1] !== m)).slice(0, 3).map(x => x[1]);
   const opts = shuf([m].concat(bad));
   return { q:`¿Cómo desnaturaliza a una proteína ${n}?`, opts, correct: opts.indexOf(m),
     pasos:[`Mecanismo del material: ${m.charAt(0).toLowerCase()}${m.slice(1)}.`, `Ningún agente rompe los enlaces peptídicos: solo se pierde la estructura 3D.`], r: m }; }}
  ],

  GUIA:[
 { h:`Tema 36 (proteínas): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Cierra la Unidad VIII. Se examina con facilidad: <b>niveles de estructura</b> y su enlace estabilizador, <b>clasificación</b> (forma y composición), <b>pI</b> y <b>desnaturalización</b>.</p>
   <ol><li>Repaso del Tema 36 con sus dibujos.</li>
   <li>Aprende la escalera: 1ª peptídico → 2ª puentes de H del esqueleto → 3ª grupos R → 4ª subunidades.</li>
   <li>En <b>Práctica</b>: «Nivel de estructura», «Fibrosa, globular o de membrana», «Tipos de heteroproteínas», «Carga y solubilidad según el pH y el pI» y «Cómo desnaturaliza cada agente», hasta acertar <b>10 seguidos</b>.</li>
   <li>Apréndete la diferencia: desnaturalizar rompe la estructura 3D; hidrolizar rompe los enlaces peptídicos.</li></ol>` }
  ],

  SYN:{ proteina:[`polipeptido`,`poliamida`], estructura:[`primaria`,`secundaria`,`terciaria`,`cuaternaria`], helice:[`alfa`,`secundaria`], lamina:[`beta`,`secundaria`], fibrosa:[`escleroproteina`,`colageno`,`queratina`], globular:[`esferoproteina`,`enzima`], holoproteina:[`simple`], heteroproteina:[`conjugada`,`grupo prostetico`,`apoproteina`], punto:[`isoelectrico`,`pi`], isoelectrico:[`pi`,`solubilidad`], desnaturalizacion:[`desnaturalizar`,`urea`,`sds`,`caotropico`], hemoglobina:[`cromoproteina`,`cuaternaria`], ferritina:[`metaloproteina`], biuret:[`colorimetrica`], chaperona:[`plegamiento`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah36" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah36)"/>`;
    const C = `var(--t36)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h, op = .16) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:${op}"/>`;

    F.proteNiveles = { src:`Tema 36, pág. 6–8`, cap:`Cuatro niveles jerárquicos: la secuencia (1ª) se pliega localmente (2ª), luego en 3D (3ª) y, en algunas proteínas, se ensambla con otras cadenas (4ª).`,
      svg: (() => { let s = ``;
        const col = (x, n, ttl, l1, l2) => box(x, 20, 124, 150) + hl(x + 8, 28, 108, 26) + T(x + 62, 46, n + `ª ` + ttl, { c:`tb`, fs:12.5 }) + T(x + 62, 82, l1, { fs:11.5 }) + T(x + 62, 100, l2, { c:`tm`, fs:11 });
        s += col(8, 1, `primaria`, `secuencia de aa`, `enlace peptídico`);
        s += col(148, 2, `secundaria`, `hélice α · lámina β`, `puentes de H`);
        s += col(288, 3, `terciaria`, `plegado global`, `entre grupos R`);
        s += col(428, 4, `cuaternaria`, `2 o más cadenas`, `subunidades`);
        s += arrow(134, 95, 146) + arrow(274, 95, 286) + arrow(414, 95, 426);
        s += T(70, 140, `Gly-Ala-Ser-…`, { fs:11 }) + T(210, 140, `espiral · zigzag`, { fs:11 }) + T(350, 140, `núcleo hidrofóbico`, { fs:11 }) + T(490, 140, `ej.: hemoglobina`, { fs:11 });
        return svg(560, 190, s, `Los cuatro niveles de estructura de una proteína`); })() };

    F.proteInter = { src:`Tema 36, pág. 7`, cap:`La estructura terciaria se estabiliza por interacciones entre los grupos R. Solo el puente disulfuro es covalente.`,
      svg: (() => { let s = ``;
        const row = (y, ttl, d) => box(10, y, 540, 44) + hl(18, y + 8, 150, 28) + T(93, y + 27, ttl, { c:`tb`, fs:12.5 }) + T(182, y + 27, d, { a:`start`, fs:12 });
        s += row(10, `Hidrofóbicas`, `aa apolares agrupados en el interior, lejos del agua`);
        s += row(62, `Puente disulfuro`, `−S−S− entre dos cisteínas · covalente, fuerte`);
        s += row(114, `Puentes de H e iónicos`, `entre grupos R polares o con cargas opuestas (salinos)`);
        s += row(166, `Van der Waals`, `atracciones débiles de corto alcance entre átomos cercanos`);
        return svg(560, 220, s, `Interacciones que estabilizan la estructura terciaria`); })() };

    F.proteForma = { src:`Tema 36, pág. 9–11`, cap:`Clasificación por forma y solubilidad: fibrosas (insolubles, estructurales), globulares (solubles, dinámicas) y de membrana (insolubles en agua pura).`,
      svg: (() => { let s = ``;
        const col = (x, ttl, a, b, c, d) => box(x, 10, 176, 180) + hl(x + 8, 18, 160, 28) + T(x + 88, 37, ttl, { c:`tb`, fs:13 }) + T(x + 88, 70, a, { fs:12 }) + T(x + 88, 94, b, { c:`tm`, fs:11.5 }) + T(x + 88, 122, c, { fs:11.5 }) + T(x + 88, 160, d, { c:`tm`, fs:11 });
        s += col(6, `Fibrosas`, `alargadas`, `insolubles en agua`, `función estructural`, `colágeno · queratina`);
        s += col(192, `Globulares`, `compactas, esféricas`, `solubles en agua`, `catálisis · transporte`, `enzimas · inmunoglobulinas`);
        s += col(378, `De membrana`, `fibrosa + globular`, `insolubles en agua pura`, `canales · receptores`, `Na⁺/K⁺-ATPasa`);
        return svg(560, 200, s, `Proteínas fibrosas, globulares y de membrana`); })() };

    F.proteHetero = { src:`Tema 36, pág. 12–13`, cap:`Holoproteína: solo aminoácidos. Heteroproteína: apoproteína + grupo prostético; el tipo lo da el grupo prostético.`,
      svg: (() => { let s = ``;
        s += box(10, 10, 170, 60) + T(95, 36, `Holoproteína`, { c:`tb` }) + T(95, 56, `solo aminoácidos`, { fs:12 });
        s += box(10, 84, 170, 100) + hl(18, 92, 154, 26) + T(95, 110, `Heteroproteína`, { c:`tb` }) + T(95, 138, `apoproteína (aa)`, { fs:12 }) + T(95, 158, `+ grupo prostético`, { fs:12, c:`tb` }) + T(95, 176, `(parte no proteica)`, { fs:11, c:`tm` });
        const r = (y, a, b) => box(210, y, 340, 28) + T(222, y + 19, a, { a:`start`, c:`tb`, fs:12 }) + T(344, y + 19, b, { a:`start`, fs:11.5 });
        s += r(10, `Glucoproteínas`, `carbohidrato · grupo sanguíneo A, B, O`) + r(42, `Lipoproteínas`, `lípido · HDL, LDL, VLDL`) + r(74, `Nucleoproteínas`, `ácidos nucleicos · ADN o ARN`) + r(106, `Fosfoproteínas`, `fosfato · proteínas fosforiladas`) + r(138, `Cromoproteínas`, `pigmento · hemoglobina, mioglobina`) + r(170, `Metaloproteínas`, `metal · ferritina`);
        s += arrow(182, 134, 208);
        return svg(560, 210, s, `Holoproteínas y heteroproteínas`); })() };

    F.protePI = { src:`Tema 36, pág. 14`, cap:`En el pI la carga neta es cero y la solubilidad es mínima. Por debajo del pI la carga neta es positiva; por encima, negativa (complementario).`,
      svg: (() => { let s = ``;
        s += `<line x1="30" y1="158" x2="530" y2="158" class="s"/>` + arrow(500, 158, 532);
        s += hl(222, 50, 116, 98, .2) + T(280, 70, `pH = pI`, { c:`tb`, fs:14 }) + T(280, 92, `carga neta 0`, { fs:12.5 }) + T(280, 112, `solubilidad mínima`, { fs:12 }) + T(280, 130, `precipita`, { c:`tb`, fs:12 });
        s += T(110, 80, `pH &lt; pI`, { c:`tb`, fs:13 }) + T(110, 100, `carga neta +`, { fs:12.5 }) + T(110, 118, `más soluble`, { c:`tm`, fs:12 });
        s += T(450, 80, `pH &gt; pI`, { c:`tb`, fs:13 }) + T(450, 100, `carga neta −`, { fs:12.5 }) + T(450, 118, `más soluble`, { c:`tm`, fs:12 });
        s += T(280, 182, `ácidas: pI &lt; 7 · neutras ≈ 7 · alcalinas: pI &gt; 7`, { c:`tm`, fs:12 });
        s += T(60, 28, `← más ácido`, { c:`tm`, fs:11.5 }) + T(500, 28, `más básico →`, { c:`tm`, fs:11.5 });
        return svg(560, 194, s, `Punto isoeléctrico, carga y solubilidad`); })() };

    F.proteFactores = { src:`Tema 36, pág. 14 y 17`, cap:`La desnaturalización rompe fuerzas débiles, no enlaces peptídicos. Factores extrínsecos (ambientales y químicos) e intrínsecos (propios).`,
      svg: (() => { let s = ``;
        s += box(10, 10, 270, 190) + hl(18, 18, 254, 26) + T(145, 36, `Extrínsecos (ambientales)`, { c:`tb`, fs:12.5 });
        ['Temperatura elevada','pH extremo','Solventes orgánicos (etanol, acetona)','Detergentes (SDS)','Caotrópicos (urea, guanidinio)','Fuerzas mecánicas'].forEach((t, i) => { s += T(22, 66 + i * 22, `• ` + t, { a:`start`, fs:12 }); });
        s += box(290, 10, 260, 190) + hl(298, 18, 244, 26) + T(420, 36, `Intrínsecos (propios)`, { c:`tb`, fs:12.5 });
        ['Secuencia de aminoácidos','Puentes disulfuro','Chaperonas','Modificaciones postraduccionales','Cofactores y ligandos','Interacciones de cadenas laterales'].forEach((t, i) => { s += T(302, 66 + i * 22, `• ` + t, { a:`start`, fs:12 }); });
        return svg(560, 210, s, `Factores que afectan la conformación de las proteínas`); })() };
  }
});
