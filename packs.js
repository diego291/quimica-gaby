/* Material nuevo: un paquete por tema (carpeta material/). */
/* ======================= TEMA 30: ALDEHÍDOS Y CETONAS ======================= */
registerPack({
  id:`t30`, version:1,
  topic:{ t:`t30`, n:`Tema 30`, name:`Aldehídos y cetonas`, unit:`Unidad VII · Funciones oxigenadas`, color:[`#8E44AD`,`#CFA6E6`] },

  REPASO:[
{src:`Tema 30, pág. 1–3`,title:`El grupo carbonilo: estructura y geometría`,fig:`carbonilo`,
 body:`<p>El <b>grupo carbonilo</b> es un <b>carbono unido a un oxígeno por un doble enlace</b> (C=O). Es el núcleo funcional de los <b>aldehídos</b> y las <b>cetonas</b>, y también aparece en los ácidos carboxílicos, ésteres y amidas.</p>
 <ul><li><b>Aldehído</b> (R−CHO): el carbonilo está unido a un <b>H</b> y a un grupo R.</li>
 <li><b>Cetona</b> (R−CO−R'): el carbonilo está unido a <b>dos grupos</b> R (alquilo o arilo).</li></ul>
 <p><b>Estructura electrónica y geometría:</b></p>
 <ul><li><b>Hibridación:</b> el carbono del carbonilo es <b>sp²</b>. Forma tres enlaces σ en un mismo plano, a unos <b>120°</b> entre sí.</li>
 <li><b>Geometría trigonal plana:</b> la cara de arriba y la de abajo del carbono quedan libres para el <b>ataque de reactivos</b>.</li>
 <li><b>Doble enlace C=O:</b> un <b>enlace σ</b> fuerte y un <b>enlace π</b>, formado por el solapamiento lateral de los orbitales p sin hibridar del C y del O.</li>
 <li><b>Pares solitarios:</b> el oxígeno conserva <b>dos pares de electrones no enlazantes</b>.</li></ul>`,
 memo:`C=O: C sp², trigonal plano, 120°, 1 σ + 1 π, O con 2 pares libres. Aldehído R−CHO · cetona R−CO−R'.`},
{src:`Tema 30, pág. 4`,title:`Polaridad, resonancia y reactividad del carbonilo`,fig:`polaridadCarbonilo`,
 body:`<ol><li><b>Polaridad del enlace:</b> el oxígeno es mucho más electronegativo que el carbono. Se forma un <b>momento dipolar permanente</b>: <b>δ⁺ en el C</b> y <b>δ⁻ en el O</b>.</li>
 <li><b>Resonancia (2 estructuras de Lewis):</b> la <b>forma neutra</b> (C=O) y la <b>forma dipolar</b> con cargas separadas (C⁺−O⁻). La contribución de la forma dipolar es <b>considerable</b>.</li>
 <li><b>Reactividad:</b> el carbono, pobre en electrones (δ⁺), es un <b>electrófilo</b>: es el blanco del <b>ataque nucleofílico</b>. El oxígeno (δ⁻) actúa como <b>nucleófilo y base débil</b>: puede protonarse en medio ácido.</li></ol>
 <p class="note">Para recordarlo: el nucleófilo (rico en electrones) siempre ataca al <b>carbono</b> del carbonilo; el H⁺ del ácido se une al <b>oxígeno</b>.</p>`,
 memo:`C δ⁺ = electrófilo (lo ataca el nucleófilo). O δ⁻ = nucleófilo y base débil (se protona). Resonancia C=O ↔ C⁺−O⁻.`},
{src:`Tema 30, pág. 4`,title:`Propiedades físicas: polaridad, solubilidad y punto de ebullición`,fig:`fisicasCarbonilo`,
 body:`<ul><li><b>Puntos de ebullición:</b> al ser moléculas <b>polares</b>, se atraen por <b>fuerzas dipolo-dipolo</b>. Por eso sus puntos de ebullición son <b>más altos</b> que los de los hidrocarburos de masa parecida.</li>
 <li><b>Solubilidad:</b> los pares libres del oxígeno forman <b>puentes de hidrógeno con el agua</b>. Los compuestos carbonílicos de bajo peso molecular, <b>hasta 4 carbonos</b>, son solubles en agua.</li></ul>
 <p class="note">Complementario [5]: aldehídos y cetonas <b>no tienen H unido al O</b>, así que no forman puentes de hidrógeno entre sus propias moléculas. Hierven <b>más alto que los alcanos</b>, pero <b>más bajo que los alcoholes</b> de masa parecida. Ejemplo: propano −42 °C, propanal 49 °C, propanona 56 °C, propan-1-ol 97 °C.</p>`,
 memo:`Dipolo-dipolo → hierven más que alcanos (menos que alcoholes). Puente de H con el agua → solubles hasta 4 C.`},
{src:`Tema 30, pág. 5`,title:`Nomenclatura de aldehídos`,fig:`nomAldehido`,
 body:`<p>En los <b>aldehídos</b> (R−CHO) el carbonilo está al <b>final de la cadena</b> (es terminal). Por eso el carbono carbonílico <b>siempre es la posición 1</b> y no hace falta escribir su número.</p>
 <ol><li><b>Cadena principal:</b> la cadena más larga que contenga al grupo −CHO.</li>
 <li><b>Sufijo:</b> se cambia la terminación del alcano por <b>-al</b>.
  <ul><li>H−CHO → <b>metanal</b> (formaldehído)</li><li>CH₃−CHO → <b>etanal</b> (acetaldehído)</li><li>CH₃−CH₂−CHO → <b>propanal</b></li></ul></li>
 <li><b>Dialdehídos:</b> con un −CHO en cada extremo se usa <b>-dial</b>. Ej.: OHC−CH₂−CHO, <b>propanodial</b>.</li>
 <li><b>Anillos:</b> si el −CHO está unido directamente a un anillo, se añade <b>-carbaldehído</b> al nombre del ciclo: <b>ciclohexanocarbaldehído</b>.</li></ol>
 <p>En los anillos aromáticos se usa <b>carbaldehído</b>, pero también se acepta <b>benzaldehído</b>: bencenocarbaldehído = benzaldehído.</p>`,
 memo:`Aldehído: C del CHO = posición 1 · sufijo -al · dos CHO: -dial · CHO en anillo: -carbaldehído (benzaldehído).`},
{src:`Tema 30, pág. 6`,title:`Nomenclatura de cetonas`,fig:`nomCetona`,
 body:`<p>En las <b>cetonas</b> (R−CO−R') el carbonilo está en una <b>posición interna</b> de la cadena.</p>
 <ol><li><b>Cadena principal:</b> la cadena continua más larga que contenga el grupo carbonilo.</li>
 <li><b>Numeración:</b> desde el extremo <b>más cercano al C=O</b>.</li>
 <li><b>Sufijo:</b> se cambia la terminación por <b>-ona</b> y se indica con un número la posición del carbono carbonílico.
  <ul><li>CH₃−CO−CH₃ → <b>propanona</b> (acetona)</li><li>CH₃−CH₂−CO−CH₃ → <b>butan-2-ona</b> (2-butanona)</li><li>CH₃−CO−CH₂−CO−CH₃ → <b>pentano-2,4-diona</b> (dos grupos cetona)</li></ul></li>
 <li><b>Anillos:</b> si no hay otros grupos, el carbono del C=O es automáticamente la <b>posición 1</b> y no se escribe. Regla: nombre del cicloalcano + <b>-ona</b>.
  <ul><li><b>Ciclohexanona:</b> anillo de 6 C con un carbonilo.</li><li><b>2-metilciclohexanona:</b> el metilo está en el C2, junto al carbonilo.</li></ul></li></ol>
 <p class="note">Con dos grupos cetona se conserva la "o" del alcano: pentan<b>o</b>-2,4-diona (igual que en los dioles del Tema 27).</p>`,
 memo:`Cetona: numerar desde el extremo más cercano al C=O · sufijo -ona con número (butan-2-ona) · dos: -diona · anillo: ciclohexanona (C=O = 1).`},
{src:`Tema 30, pág. 7`,title:`Cetonas aromáticas y nomenclatura radicofuncional`,fig:`cetonaAromatica`,
 body:`<p><b>Cetonas aromáticas (IUPAC):</b> la <b>cadena abierta más larga</b> es la cadena principal y el benceno es un sustituyente llamado <b>fenil</b> (o fenilo).</p>
 <ul><li>C₆H₅−CO−CH₃ → <b>1-feniletan-1-ona</b> (o 1-feniletanona)</li>
 <li>C₆H₅−CO−CH₂−CH₃ → <b>1-fenilpropan-1-ona</b></li>
 <li>C₆H₅−CO−CH₂−CH₂−CH₃ → <b>1-fenilbutan-1-ona</b></li></ul>
 <p><b>Nomenclatura radicofuncional:</b> se nombran los <b>dos grupos unidos al carbonilo</b> como sustituyentes, en <b>orden alfabético</b>, y después la palabra <b>cetona</b>.</p>
 <ul><li>C₆H₅−CO−CH₃ → <b>fenil metil cetona</b></li><li>C₆H₅−CO−C₆H₅ → <b>difenil cetona</b></li></ul>
 <p class="note">Nombres comunes de la tabla de la pág. 10: C₆H₅−CO−CH₃ es la <b>acetofenona</b> y C₆H₅−CO−C₆H₅ la <b>benzofenona</b> (difenilmetanona).</p>`,
 memo:`Aromática IUPAC: 1-feniletan-1-ona (fenil = sustituyente). Radicofuncional: grupos en orden alfabético + "cetona": fenil metil cetona, difenil cetona.`},
{src:`Tema 30, pág. 8–9`,title:`Aldehídos comunes y en medicina`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>IUPAC</th><th>Común</th><th>Fórmula</th><th>Usos</th></tr></thead><tbody>
 <tr><td>Metanal</td><td><b>Formaldehído</b></td><td>HCHO</td><td>Conservación de tejidos biológicos, desinfectante, resinas, plásticos (baquelita), fertilizantes.</td></tr>
 <tr><td>Etanal</td><td><b>Acetaldehído</b></td><td>CH₃−CHO</td><td>Síntesis de ácido acético, saborizante, plásticos, perfumes, colorantes.</td></tr>
 <tr><td>Propanal</td><td>Propionaldehído</td><td>CH₃−CH₂−CHO</td><td>Plásticos, resinas, caucho sintético, desinfectantes, conservantes.</td></tr>
 <tr><td>Butanal</td><td>Butiraldehído</td><td>CH₃(CH₂)₂−CHO</td><td>Plastificantes, vulcanización del caucho, solventes, aromas.</td></tr>
 <tr><td>Pentanal</td><td>Valeraldehído</td><td>CH₃(CH₂)₃−CHO</td><td>Saborizantes, plastificantes, resinas.</td></tr>
 <tr><td>Bencenocarbaldehído</td><td><b>Benzaldehído</b></td><td>C₆H₅−CHO</td><td>Aroma a <b>almendras amargas</b>; perfumería, cosméticos, colorantes.</td></tr>
 <tr><td>4-hidroxi-3-metoxibenzaldehído</td><td><b>Vainillina</b></td><td>C₈H₈O₃</td><td>Saborizante principal en alimentos y repostería; perfumería, fármacos.</td></tr>
 <tr><td>(2E)-3-fenilprop-2-enal</td><td><b>Cinamaldehído</b></td><td>C₆H₅−CH=CH−CHO</td><td>Sabor a <b>canela</b>; fungicida, insecticida, repelente.</td></tr>
 <tr><td>3,7-dimetiloct-6-enal</td><td>Citronelal</td><td>C₁₀H₁₈O</td><td>Repelente de insectos (aceite de citronela), perfumería.</td></tr>
 <tr><td>4-metoxibenzaldehído</td><td>Anisaldehído</td><td>C₈H₈O₂</td><td>Aroma floral y a anís; saborizante.</td></tr>
 </tbody></table></div>
 <p><b>Aldehídos importantes en medicina:</b></p>
 <ul><li><b>Retinal</b> (retinaldehído, aldehído de la vitamina A): importante para la <b>visión</b>; también se usa en tratamientos para el acné.</li>
 <li><b>Piridoxal fosfato (PLP):</b> forma coenzimática activa de la <b>vitamina B6</b>; tiene un grupo aldehído unido a un anillo de piridina y participa en la síntesis de neurotransmisores como la <b>serotonina</b>.</li>
 <li><b>Aldosas:</b> azúcares con grupo aldehído, como la <b>glucosa</b>, la <b>galactosa</b> y la <b>manosa</b> (y la ribosa y desoxirribosa).</li></ul>`,
 memo:`Formaldehído = conserva tejidos. Benzaldehído = almendras. Vainillina = vainilla. Cinamaldehído = canela. Retinal = visión. PLP = vitamina B6. Aldosas: glucosa, galactosa, manosa.`},
{src:`Tema 30, pág. 10–11`,title:`Cetonas comunes y en la salud`,fig:`cuerposCetonicos`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>IUPAC</th><th>Común</th><th>Usos</th></tr></thead><tbody>
 <tr><td>Propanona</td><td><b>Acetona</b></td><td>Solvente (esmaltes de uñas, laboratorio), plásticos, desengrasante.</td></tr>
 <tr><td>Butan-2-ona</td><td>Metil etil cetona (MEK)</td><td>Solvente de pinturas, barnices, adhesivos.</td></tr>
 <tr><td>Pentan-2-ona</td><td>Metil propil cetona</td><td>Solvente de lacas y resinas, sabor.</td></tr>
 <tr><td>Pentan-3-ona</td><td>Dietil cetona</td><td>Solvente, precursor de fármacos y pesticidas.</td></tr>
 <tr><td>1-feniletan-1-ona</td><td><b>Acetofenona</b></td><td>Aroma a cereza/almendra, fragancias, fármacos.</td></tr>
 <tr><td>Difenilmetanona</td><td><b>Benzofenona</b></td><td>Filtro <b>UV</b> en bloqueadores solares, fijador de perfumes.</td></tr>
 <tr><td>Ciclohexanona</td><td>Ciclohexanona</td><td>Materia prima del <b>nylon</b>, solvente.</td></tr>
 <tr><td>(bicíclica)</td><td><b>Alcanfor</b></td><td>Descongestionante y analgésico tópico (pomadas), antipolillas.</td></tr>
 <tr><td>(cíclica)</td><td>α-Ionona</td><td>Perfumería (aroma a violeta).</td></tr>
 <tr><td>(cíclica)</td><td>L-Carvona</td><td>Sabor a <b>menta</b> en pastas dentales y chicles.</td></tr>
 </tbody></table></div>
 <p><b>Cetonas importantes en la salud:</b></p>
 <ul><li><b>Cuerpos cetónicos</b> (metabolismo y diagnóstico): tres moléculas que el <b>hígado</b> produce a partir de los <b>ácidos grasos</b> en la <b>cetogénesis</b>. Se activa en el <b>ayuno prolongado</b>, en dietas muy bajas en carbohidratos (cetogénicas) y en la <b>diabetes descompensada</b>. Son fuente de energía alternativa para el cerebro, el corazón y el músculo. El principal es el <b>acetoacetato</b>.</li>
 <li><b>Hormonas esteroideas:</b> como la <b>progesterona</b>.</li>
 <li><b>Cetohexosas:</b> azúcares con grupo cetona, como la <b>fructosa</b>.</li></ul>
 <p class="note">Notas sobre el material: 1) La fórmula CH₃−CO−CH₂−COOH es el <b>ácido acetoacético</b>; el <b>acetoacetato</b> es su forma ionizada (−COO⁻). 2) Los tres cuerpos cetónicos son <b>acetona, acetoacetato y β-hidroxibutirato</b>; el β-hidroxibutirato en realidad no tiene grupo cetona (tiene −OH). 3) La "ritrulosa" no existe con ese nombre: probablemente se refiere a la <b>ribulosa</b> o la <b>eritrulosa</b>, que son cetosas, pero no hexosas (5 y 4 C). 4) De los estrógenos, la <b>estrona</b> tiene cetona; el estradiol no. Complementario [4]: en el laboratorio clínico los cuerpos cetónicos se buscan en <b>orina y sangre</b> (tira reactiva con nitroprusiato).</p>`,
 memo:`Acetona = solvente. Benzofenona = filtro UV. Alcanfor = pomadas. Cuerpos cetónicos (hígado, cetogénesis: ayuno, dieta cetogénica, diabetes descompensada): acetona, acetoacetato, β-hidroxibutirato. Fructosa = cetohexosa.`},
{src:`Tema 30, pág. 12`,title:`Reacciones de adición nucleofílica`,fig:`adicionNu`,
 body:`<p>Las propiedades químicas dependen sobre todo de la <b>polaridad del C=O</b>: carbono con carga parcial positiva (δ⁺) y oxígeno con carga parcial negativa (δ⁻). En los aldehídos el carbonilo es <b>terminal</b> y en las cetonas es <b>intermedio</b>.</p>
 <p><b>Adición</b> = agregar una molécula pequeña a una grande. En la <b>adición nucleofílica</b> el nucleófilo ataca al carbono del carbonilo, se rompe el enlace π y el oxígeno termina como −OH.</p>
 <ul><li><b>Aldehídos:</b> reaccionan <b>rápido</b> con nucleófilos como el <b>HCN</b> (cianuro de hidrógeno), los reactivos de Grignard o los alcoholes. Tienen un solo grupo alquilo: <b>menos impedimento estérico</b> y un carbono <b>más electrofílico</b>.</li>
 <li><b>Cetonas:</b> hacen la misma adición, pero <b>mucho más lento</b>, por el impedimento estérico de sus dos grupos y porque esos grupos estabilizan la carga positiva parcial (efecto inductivo).</li></ul>
 <p>Ejemplos con HCN (forman <b>cianhidrinas</b>: un −OH y un −CN en el mismo carbono):</p>
 <ul><li>ciclohexanona + HCN ⇌ cianhidrina de la ciclohexanona</li><li>benzaldehído + HCN ⇌ mandelonitrilo</li></ul>`,
 memo:`Nucleófilo ataca al C δ⁺ → se rompe π → O queda como −OH. HCN → cianhidrina. Aldehído rápido; cetona lenta (estérico + inductivo).`},
{src:`Tema 30, pág. 13 y 15`,title:`Hidrógenos alfa y condensación aldólica`,fig:`aldolica`,
 body:`<p>El <b>carbono alfa (α)</b> es el que está <b>junto al carbonilo</b>; el siguiente es el <b>beta (β)</b>. Los hidrógenos del carbono α se llaman <b>hidrógenos alfa</b>.</p>
 <ul><li><b>Aldehídos:</b> sus H α son <b>moderadamente ácidos</b>: en <b>medio básico fuerte</b> se desprotonan con facilidad.</li>
 <li><b>Cetonas:</b> sus H α son <b>un poco menos ácidos</b>, pero tienen <b>dos carbonos α</b> (uno a cada lado del carbonilo) y los dos pueden desprotonarse.</li></ul>
 <p><b>Condensación</b>: dos moléculas se unen para formar una sola. Pueden ser dos aldehídos, dos cetonas o un aldehído y una cetona.</p>
 <ul><li><b>Aldehídos:</b> hacen con alta eficiencia la <b>condensación aldólica</b>.</li>
 <li><b>Cetonas:</b> también participan.</li>
 <li>En la <b>gluconeogénesis</b> hay reacciones de este tipo.</li></ul>
 <p>Ejemplo de la pág. 15 (con NaOH): 2 acetonas → <b>β-hidroxicetona</b> (reacción aldólica) → al perder agua, <b>cetona α,β-insaturada</b> o enona (condensación aldólica).</p>
 <p class="note">Complementario [5]: la base arranca un H α y forma un <b>enolato</b>; ese carbono α ataca como nucleófilo al carbonilo de otra molécula. Por eso solo condensan los compuestos que <b>tienen H α</b>.</p>`,
 memo:`C α = junto al C=O. H α ácidos (base fuerte los quita). Aldehído: muy eficiente en condensación aldólica. Cetona: H α un poco menos ácidos, pero 2 C α. Aldólica → β-hidroxi → enona.`},
{src:`Tema 30, pág. 14 y 16`,title:`Oxidación y reducción`,fig:`oxRed`,
 body:`<p><b>Oxidación</b> (ganancia de oxígeno):</p>
 <ul><li><b>Aldehídos:</b> se oxidan con <b>extrema facilidad</b> a <b>ácidos carboxílicos</b>, incluso con oxidantes suaves como el <b>reactivo de Tollens (Ag⁺)</b> o el de <b>Fehling (Cu²⁺)</b>, y con oxidantes fuertes (KMnO₄, CrO₃, Na₂Cr₂O₇/H₂SO₄).</li>
 <li><b>Cetonas:</b> son <b>resistentes a la oxidación</b> suave o moderada porque <b>no tienen H unido al carbono carbonílico</b>. Solo se oxidan en condiciones <b>muy drásticas</b> (enérgica: se rompe el anillo y salen dos −COOH).</li></ul>
 <p><b>Reducción</b> (ganancia de hidrógenos): el grupo carbonilo se transforma en un grupo <b>hidroxilo</b>, con hidruros (<b>NaBH₄</b> o <b>LiAlH₄</b>) o por hidrogenación catalítica (<b>H₂/Ni</b>).</p>
 <ul><li><b>Aldehído</b> → <b>alcohol primario</b>.</li><li><b>Cetona</b> → <b>alcohol secundario</b>.</li></ul>
 <p class="note">El dibujo de la pág. 16 muestra el camino al revés: la <b>oxidación</b> de los alcoholes (Tema 27). La reducción recorre ese camino hacia la izquierda: aldehído → alcohol 1° y cetona → alcohol 2°. Complementario [4]: las pruebas de Tollens y Fehling sirven para distinguir aldehídos de cetonas y se usaron para buscar <b>glucosa</b> (una aldosa) en orina.</p>`,
 memo:`Oxidación: aldehído → ácido (Tollens Ag⁺, Fehling Cu²⁺, KMnO₄). Cetona: resiste (no tiene H en el C=O). Reducción (NaBH₄, LiAlH₄, H₂/Ni): aldehído → alcohol 1°, cetona → alcohol 2°.`},
{src:`Tema 30, pág. 17`,title:`Hemiacetales, acetales, hemicetales y cetales`,fig:`acetal`,
 body:`<ul><li><b>Aldehídos:</b> con <b>una molécula de alcohol</b> forman un <b>hemiacetal</b> (un −OH y un −OR en el mismo carbono). Con un <b>segundo alcohol</b> y un <b>catalizador ácido</b>, se convierten en un <b>acetal</b> (dos −OR) y se libera agua.</li>
 <li><b>Cetonas:</b> con alcoholes forman un <b>hemicetal</b> y después un <b>cetal</b>, con un oxígeno (−OR) a cada lado.</li></ul>
 <p>El primer paso (hemiacetal) lo cataliza un <b>ácido o una base</b>; el segundo (acetal) lo cataliza <b>solo un ácido</b>. Los dos pasos son <b>reversibles</b>.</p>
 <p>Ejemplo: acetona + etanol ⇌ <b>hemicetal</b>: CH₃−C(OH)(OCH₂CH₃)−CH₃.</p>
 <p class="note">Complementario [5]: la glucosa en solución forma un <b>hemiacetal cíclico</b> (su −CHO reacciona con su propio −OH del C5); por eso se dibuja como anillo.</p>`,
 memo:`Aldehído + ROH → hemiacetal (OH + OR) → + ROH/H⁺ → acetal (OR + OR) + H₂O. Cetona → hemicetal → cetal. 1er paso ácido o base; 2.º solo ácido.`},
{src:`Tema 30, pág. 18`,title:`Reactividad relativa: aldehídos frente a cetonas`,fig:`reactividad`,
 body:`<ul><li><b>Aldehídos:</b> tienen <b>mayor reactividad</b> que las cetonas frente al ataque nucleofílico.</li>
 <li><b>Cetonas:</b> tienen <b>menor reactividad</b>. Sus dos grupos alquilo o arilo:
  <ol><li><b>estabilizan la carga parcial positiva</b> del carbono carbonílico por <b>efecto inductivo</b> (el carbono queda menos δ⁺, menos "atractivo"), y</li>
  <li><b>bloquean estéricamente</b> la llegada del nucleófilo.</li></ol></li></ul>
 <p><b>Resumen del tema:</b> el aldehído gana en adición nucleofílica, en oxidación (Tollens/Fehling) y en condensación aldólica. La cetona reacciona igual en adición, pero más lento, y resiste la oxidación.</p>`,
 memo:`Aldehído > cetona (ataque nucleofílico). Cetona: 2 grupos → efecto inductivo (C menos δ⁺) + impedimento estérico.`}
  ],

  MCQ:[
{src:`Tema 30, pág. 3`,q:`El grupo carbonilo está formado por:`,o:[`Un carbono y un oxígeno unidos por un doble enlace`,`Un oxígeno unido a dos carbonos por enlaces simples`,`Un carbono unido a un grupo −OH`,`Un carbono unido a un nitrógeno`],e:`C=O, núcleo de aldehídos y cetonas.`},
{src:`Tema 30, pág. 3`,q:`El carbono del grupo carbonilo tiene hibridación:`,o:[`sp², trigonal plana, ángulos de 120°`,`sp³, tetraédrica, 109.5°`,`sp, lineal, 180°`,`sp³, angular, 104.5°`],e:`Tres enlaces σ en un plano.`},
{src:`Tema 30, pág. 3`,q:`El doble enlace C=O está formado por:`,o:[`Un enlace σ y un enlace π`,`Dos enlaces σ`,`Dos enlaces π`,`Un enlace iónico y uno covalente`],e:`El π viene del solapamiento lateral de orbitales p.`},
{src:`Tema 30, pág. 3`,q:`¿Cuántos pares de electrones no enlazantes conserva el oxígeno del carbonilo?`,o:[`Dos`,`Uno`,`Ninguno`,`Tres`],e:`Por eso puede formar puentes de H con el agua.`},
{src:`Tema 30, pág. 4`,q:`En el grupo carbonilo, la carga parcial positiva (δ⁺) está en:`,o:[`El carbono`,`El oxígeno`,`El hidrógeno del aldehído`,`Ningún átomo; es apolar`],e:`El O es más electronegativo y se queda con δ⁻.`},
{src:`Tema 30, pág. 4`,q:`El carbono del carbonilo actúa como:`,o:[`Electrófilo, blanco del ataque nucleofílico`,`Nucleófilo`,`Base fuerte`,`Grupo saliente`],e:`Es pobre en electrones (δ⁺).`},
{src:`Tema 30, pág. 4`,q:`¿Hasta cuántos carbonos son solubles en agua los compuestos carbonílicos, según el material?`,o:[`Hasta 4`,`Hasta 10`,`Solo el de 1 carbono`,`Ninguno es soluble`],e:`Por puentes de hidrógeno con el agua.`},
{src:`Tema 30, pág. 4`,q:`Aldehídos y cetonas se atraen entre sí principalmente por:`,o:[`Fuerzas dipolo-dipolo`,`Puentes de hidrógeno entre sus moléculas`,`Enlaces iónicos`,`Solo fuerzas de dispersión`],e:`Son polares, pero no tienen H unido al O.`},
{src:`Tema 30, pág. 5`,q:`El nombre IUPAC de CH₃−CH₂−CHO es:`,o:[`Propanal`,`Propanona`,`Propan-1-ol`,`Etanal`],e:`3 C, sufijo -al.`},
{src:`Tema 30, pág. 5`,q:`El nombre común del metanal es:`,o:[`Formaldehído`,`Acetaldehído`,`Acetona`,`Benzaldehído`],e:`H−CHO.`},
{src:`Tema 30, pág. 5`,q:`Un −CHO unido directamente a un ciclohexano se nombra:`,o:[`Ciclohexanocarbaldehído`,`Ciclohexanal`,`Ciclohexanona`,`Hexanodial`],e:`Sufijo -carbaldehído para anillos.`},
{src:`Tema 30, pág. 5`,q:`OHC−CH₂−CHO se llama:`,o:[`Propanodial`,`Propanal`,`Propanodiona`,`Malonaldehído-ona`],e:`Dos −CHO en los extremos: -dial.`},
{src:`Tema 30, pág. 6`,q:`El nombre IUPAC de CH₃−CH₂−CO−CH₃ es:`,o:[`Butan-2-ona`,`Butanal`,`Butan-3-ona`,`Butan-2-ol`],e:`Se numera desde el extremo más cercano al C=O.`},
{src:`Tema 30, pág. 6`,q:`CH₃−CO−CH₂−CO−CH₃ se llama:`,o:[`Pentano-2,4-diona`,`Pentan-2,4-ona`,`Pentanodial`,`Pentano-1,5-diona`],e:`Dos grupos cetona en C2 y C4.`},
{src:`Tema 30, pág. 6`,q:`En la ciclohexanona no se escribe el número del carbonilo porque:`,o:[`En un anillo sin otros grupos el C=O es automáticamente la posición 1`,`Las cetonas nunca llevan número`,`El carbonilo está fuera del anillo`,`El anillo es aromático`],e:`Regla de cetonas cíclicas.`},
{src:`Tema 30, pág. 7`,q:`En la nomenclatura IUPAC de C₆H₅−CO−CH₃, el anillo de benceno se nombra como:`,o:[`Sustituyente fenil (1-feniletan-1-ona)`,`Cadena principal (bencenona)`,`Prefijo benzo-`,`No se nombra`],e:`La cadena abierta es la principal.`},
{src:`Tema 30, pág. 7`,q:`En la nomenclatura radicofuncional, C₆H₅−CO−CH₃ es:`,o:[`Fenil metil cetona`,`Metil fenil cetona`,`Fenilacetona`,`Benzaldehído`],e:`Grupos en orden alfabético + "cetona".`},
{src:`Tema 30, pág. 8`,q:`¿Qué aldehído tiene aroma a almendras amargas?`,o:[`Benzaldehído`,`Cinamaldehído`,`Citronelal`,`Formaldehído`],e:`Bencenocarbaldehído.`},
{src:`Tema 30, pág. 8`,q:`El formaldehído (metanal) se usa en el laboratorio para:`,o:[`Conservar tejidos biológicos`,`Endulzar alimentos`,`Filtrar rayos UV`,`Fabricar nylon`],e:`También es desinfectante.`},
{src:`Tema 30, pág. 9`,q:`El piridoxal fosfato (PLP) es la forma activa de la:`,o:[`Vitamina B6`,`Vitamina A`,`Vitamina C`,`Vitamina D`],e:`Participa en la síntesis de serotonina.`},
{src:`Tema 30, pág. 9`,q:`El retinal es importante para:`,o:[`La visión`,`La coagulación`,`La digestión de grasas`,`El transporte de oxígeno`],e:`Es el aldehído de la vitamina A.`},
{src:`Tema 30, pág. 10`,q:`La benzofenona se usa en bloqueadores solares como:`,o:[`Filtro de radiación ultravioleta`,`Hidratante`,`Colorante`,`Conservante`],e:`Difenilmetanona.`},
{src:`Tema 30, pág. 11`,q:`Los cuerpos cetónicos se producen en el hígado a partir de:`,o:[`Ácidos grasos (cetogénesis)`,`Aminoácidos (transaminación)`,`Glucosa (glucólisis)`,`Colesterol`],e:`Se activa en ayuno, dieta cetogénica o diabetes descompensada.`},
{src:`Tema 30, pág. 11`,q:`El principal cuerpo cetónico, según el material, es el:`,o:[`Acetoacetato`,`Ácido láctico`,`Etanal`,`Ácido cítrico`],e:`Los otros dos: acetona y β-hidroxibutirato.`},
{src:`Tema 30, pág. 11`,q:`La fructosa es una:`,o:[`Cetohexosa`,`Aldohexosa`,`Aldopentosa`,`Hormona esteroidea`],e:`Azúcar de 6 C con grupo cetona.`},
{src:`Tema 30, pág. 12`,q:`Frente a la adición nucleofílica, los aldehídos reaccionan más rápido porque:`,o:[`Tienen menos impedimento estérico y un C más electrofílico`,`Tienen dos grupos alquilo`,`No tienen grupo carbonilo`,`Son aromáticos`],e:`Solo un grupo R unido al C=O.`},
{src:`Tema 30, pág. 12`,q:`La adición de HCN a un aldehído o cetona forma una:`,o:[`Cianhidrina`,`Amida`,`Cetal`,`Enona`],e:`Un −OH y un −CN en el mismo carbono.`},
{src:`Tema 30, pág. 13`,q:`El carbono alfa (α) es:`,o:[`El carbono unido directamente al carbonilo`,`El carbono del carbonilo`,`El último carbono de la cadena`,`El carbono del anillo aromático`],e:`El siguiente es el β.`},
{src:`Tema 30, pág. 13`,q:`Los hidrógenos alfa de los aldehídos se desprotonan con facilidad en:`,o:[`Medio básico fuerte`,`Medio ácido débil`,`Agua pura`,`Presencia de luz`],e:`Son moderadamente ácidos.`},
{src:`Tema 30, pág. 14`,q:`Los aldehídos se oxidan con facilidad a:`,o:[`Ácidos carboxílicos`,`Alcoholes secundarios`,`Cetonas`,`Alcanos`],e:`Incluso con Tollens o Fehling.`},
{src:`Tema 30, pág. 14`,q:`El reactivo de Tollens contiene:`,o:[`Ag⁺`,`Cu²⁺`,`MnO₄⁻`,`Cr³⁺`],e:`Fehling contiene Cu²⁺.`},
{src:`Tema 30, pág. 14`,q:`Las cetonas resisten la oxidación suave porque:`,o:[`No tienen H unido al carbono carbonílico`,`No tienen oxígeno`,`Son apolares`,`Tienen un triple enlace`],e:`Solo se oxidan en condiciones muy drásticas.`},
{src:`Tema 30, pág. 15`,q:`En la condensación aldólica:`,o:[`Dos moléculas carbonílicas se unen para formar una sola`,`Un aldehído se oxida a ácido`,`Una cetona se reduce a alcohol`,`Se rompe un éter`],e:`Puede ser aldehído-aldehído, cetona-cetona o mixta.`},
{src:`Tema 30, pág. 15`,q:`¿En qué vía metabólica se dan reacciones de condensación tipo aldólica, según el material?`,o:[`Gluconeogénesis`,`Cetogénesis`,`Glucogenólisis`,`Lipólisis`],e:`Pág. 15.`},
{src:`Tema 30, pág. 16`,q:`Al reducir un aldehído con NaBH₄ se obtiene:`,o:[`Un alcohol primario`,`Un alcohol secundario`,`Un ácido carboxílico`,`Una cetona`],e:`El C=O pasa a −OH.`},
{src:`Tema 30, pág. 16`,q:`Al reducir una cetona por hidrogenación catalítica (H₂/Ni) se obtiene:`,o:[`Un alcohol secundario`,`Un alcohol primario`,`Un alcohol terciario`,`Un aldehído`],e:`El C del C=O queda unido a dos grupos R.`},
{src:`Tema 30, pág. 17`,q:`Un aldehído que reacciona con una molécula de alcohol forma un:`,o:[`Hemiacetal`,`Acetal`,`Cetal`,`Éster`],e:`Un −OH y un −OR en el mismo C.`},
{src:`Tema 30, pág. 17`,q:`Para pasar de hemiacetal a acetal se necesita:`,o:[`Un segundo alcohol y catalizador ácido`,`Solo una base`,`Agua`,`Un oxidante fuerte`],e:`Se libera agua.`},
{src:`Tema 30, pág. 17`,q:`Una cetona con alcoholes forma primero un ___ y después un ___:`,o:[`Hemicetal; cetal`,`Hemiacetal; acetal`,`Cetal; hemicetal`,`Éster; ácido`],e:`El cetal tiene un −OR a cada lado.`},
{src:`Tema 30, pág. 18`,q:`Las cetonas son menos reactivas que los aldehídos porque sus dos grupos alquilo:`,o:[`Estabilizan la δ⁺ por efecto inductivo y estorban al nucleófilo`,`Hacen al C más positivo`,`Eliminan el doble enlace`,`Las vuelven aromáticas`],e:`Efecto inductivo + impedimento estérico.`}
  ],

  ABIERTAS:[
{src:`Tema 30, pág. 3–4`,q:`Describa la estructura del grupo carbonilo: hibridación, geometría, tipo de enlaces, polaridad y resonancia.`,a:`El carbonilo es un C unido a un O por doble enlace. El C es sp², con tres enlaces σ coplanares a unos 120° (trigonal plano), lo que deja libres sus caras superior e inferior para el ataque de reactivos. El doble enlace tiene un σ y un π (solapamiento lateral de orbitales p). El O conserva dos pares libres. Como el O es más electronegativo, hay un dipolo permanente (δ⁺ en C, δ⁻ en O), y se representa por resonancia entre la forma neutra C=O y la dipolar C⁺−O⁻, con contribución dipolar considerable. Por eso el C es electrófilo y el O es nucleófilo/base débil.`},
{src:`Tema 30, pág. 5–7`,q:`Explique las reglas IUPAC para nombrar aldehídos y cetonas (lineales, con dos grupos, cíclicos y aromáticos) con un ejemplo de cada caso.`,a:`Aldehídos: cadena más larga con el −CHO, el C del CHO es el 1, sufijo -al (propanal); dos CHO: -dial (propanodial); CHO unido a un anillo: -carbaldehído (ciclohexanocarbaldehído, bencenocarbaldehído o benzaldehído). Cetonas: cadena más larga con el C=O, se numera desde el extremo más cercano al carbonilo, sufijo -ona con su número (butan-2-ona); dos grupos: -diona (pentano-2,4-diona); en un anillo el C=O es el 1 y no se escribe (ciclohexanona, 2-metilciclohexanona); aromáticas: la cadena abierta es la principal y el benceno es fenil (1-feniletan-1-ona). Radicofuncional: los dos grupos en orden alfabético + cetona (fenil metil cetona).`},
{src:`Tema 30, pág. 12–18`,q:`Compare aldehídos y cetonas en adición nucleofílica, hidrógenos alfa, oxidación, condensación, reducción y formación de acetales.`,a:`Adición nucleofílica: el aldehído reacciona rápido (un solo R, poco impedimento, C más electrofílico); la cetona, más lento. H α: en el aldehído son moderadamente ácidos; en la cetona algo menos, pero hay dos C α. Oxidación: el aldehído se oxida fácilmente a ácido (Tollens, Fehling, KMnO₄); la cetona resiste porque no tiene H en el C carbonílico. Condensación aldólica: el aldehído la hace con alta eficiencia; la cetona también. Reducción (NaBH₄, LiAlH₄, H₂/Ni): aldehído → alcohol 1°, cetona → alcohol 2°. Con alcoholes: aldehído → hemiacetal → acetal; cetona → hemicetal → cetal.`},
{src:`Tema 30, pág. 11`,q:`¿Qué son los cuerpos cetónicos, dónde y cuándo se producen y por qué interesan en el laboratorio clínico?`,a:`Son tres moléculas (acetona, acetoacetato y β-hidroxibutirato) que el hígado produce a partir de ácidos grasos en la cetogénesis. Esta se activa en el ayuno prolongado, en dietas muy bajas en carbohidratos y en estados patológicos como la diabetes descompensada. Sirven como energía alternativa para el cerebro, el corazón y el músculo. El principal es el acetoacetato. En el laboratorio (complementario [4]) se miden en orina o sangre para detectar cetosis o cetoacidosis.`},
{src:`Tema 30, pág. 18`,q:`Explique por qué los aldehídos son más reactivos que las cetonas frente al ataque nucleofílico.`,a:`En la cetona, los dos grupos alquilo o arilo unidos al carbonilo donan densidad electrónica por efecto inductivo y estabilizan la carga parcial positiva del carbono, que queda menos electrofílico. Además, esos dos grupos bloquean estéricamente la llegada del nucleófilo. El aldehído tiene solo un grupo R y un H pequeño: menos impedimento y un C más δ⁺.`}
  ],

  EJ:[
{src:`Tema 30, pág. 5–6`,q:`Nombre según la IUPAC: a) CH₃−CH₂−CH₂−CHO; b) CH₃−CO−CH₂−CH₂−CH₃; c) CH₃−CO−CH₂−CO−CH₃; d) OHC−CH₂−CH₂−CHO.`,
 pide:`Identificar si es aldehído o cetona, contar carbonos y aplicar el sufijo.`,datos:[`−CHO terminal → -al`,`C=O interno → -ona con número`],f:`raíz + -al / -ona / -dial / -diona`,
 pasos:[`a) −CHO al final, 4 C → butanal.`,`b) C=O interno, 5 C; desde el extremo más cercano queda en el C2 → pentan-2-ona.`,`c) Dos C=O en C2 y C4, 5 C → pentano-2,4-diona.`,`d) Un −CHO en cada extremo, 4 C → butanodial.`],r:`butanal; pentan-2-ona; pentano-2,4-diona; butanodial`},
{src:`Aplicación de Tema 30, pág. 5–7`,q:`Escriba la fórmula semidesarrollada de: a) pentanal; b) pentan-3-ona; c) 2-metilciclohexanona (descríbala); d) fenil metil cetona.`,
 pide:`Pasar del nombre a la fórmula.`,datos:[`-al: CHO en C1`,`-ona: C=O en el número indicado`],f:`—`,
 pasos:[`a) 5 C con CHO al final: CH₃−CH₂−CH₂−CH₂−CHO.`,`b) 5 C con C=O en el centro: CH₃−CH₂−CO−CH₂−CH₃ (dietil cetona).`,`c) Anillo de 6 C con C=O en el C1 y un −CH₃ en el carbono vecino (C2).`,`d) C₆H₅−CO−CH₃ (acetofenona; IUPAC 1-feniletan-1-ona).`],r:`CH₃(CH₂)₃CHO; CH₃CH₂COCH₂CH₃; anillo C=O con CH₃ en C2; C₆H₅COCH₃`},
{src:`Tema 30, pág. 14 y 16`,q:`Indique el producto de: a) oxidar propanal con reactivo de Tollens; b) reducir propanal con NaBH₄; c) reducir propanona con H₂/Ni; d) tratar propanona con Tollens.`,
 pide:`Aplicar oxidación (aldehído → ácido) y reducción (aldehído → alcohol 1°, cetona → alcohol 2°).`,datos:[`Tollens: oxidante suave (Ag⁺)`,`NaBH₄ y H₂/Ni: reductores`],f:`aldehído ⇄ alcohol 1° · aldehído → ácido · cetona ⇄ alcohol 2°`,
 pasos:[`a) El CHO pasa a COOH: ácido propanoico, CH₃CH₂COOH (Tollens positivo: espejo de plata).`,`b) El CHO pasa a CH₂OH: propan-1-ol (alcohol primario).`,`c) El C=O pasa a CH−OH: propan-2-ol (alcohol secundario).`,`d) La cetona no tiene H en el C=O: no se oxida con un oxidante suave (Tollens negativo).`],r:`ácido propanoico; propan-1-ol; propan-2-ol; no reacciona`},
{src:`Tema 30, pág. 17`,q:`El etanal (CH₃−CHO) reacciona con metanol (CH₃OH). Escriba el hemiacetal y, con un segundo metanol y ácido, el acetal.`,
 pide:`Sumar un −OR y después otro.`,datos:[`Hemiacetal: −OH y −OR en el mismo C`,`Acetal: dos −OR + H₂O`],f:`R−CHO + R'OH ⇌ R−CH(OH)(OR') ; + R'OH/H⁺ ⇌ R−CH(OR')₂ + H₂O`,
 pasos:[`El O del metanol ataca al C del carbonilo; el O del C=O queda como −OH.`,`Hemiacetal: CH₃−CH(OH)−OCH₃.`,`Con otro CH₃OH y H⁺, el −OH sale como agua y entra otro −OCH₃.`,`Acetal: CH₃−CH(OCH₃)₂ + H₂O.`],r:`Hemiacetal CH₃CH(OH)OCH₃; acetal CH₃CH(OCH₃)₂`},
{src:`Tema 30, pág. 13 y 15`,q:`En la butan-2-ona (CH₃−CO−CH₂−CH₃): a) ¿cuántos carbonos α tiene y cuáles son?; b) ¿puede hacer condensación aldólica? Justifique.`,
 pide:`Ubicar los carbonos vecinos al C=O.`,datos:[`C α = junto al carbonilo`],f:`—`,
 pasos:[`El C=O es el C2.`,`Sus vecinos son el C1 (CH₃) y el C3 (CH₂): los dos son carbonos α.`,`Tiene H α (3 en el C1 y 2 en el C3), así que una base fuerte puede quitarlos.`,`Sí puede hacer condensación aldólica (las cetonas también participan, aunque menos que los aldehídos).`],r:`2 carbonos α (C1 y C3); sí, porque tiene H α`},
{src:`Tema 30, pág. 4 (complementario [5])`,q:`Ordene de menor a mayor punto de ebullición: propan-1-ol, propano, propanal. Justifique.`,
 pide:`Comparar fuerzas intermoleculares.`,datos:[`Masas parecidas (44 a 60 g/mol)`],f:`dispersión < dipolo-dipolo < puente de H`,
 pasos:[`Propano: apolar, solo fuerzas de dispersión → el más bajo (−42 °C).`,`Propanal: polar, dipolo-dipolo, sin H en el O → intermedio (49 °C).`,`Propan-1-ol: tiene −OH, forma puentes de H entre sus moléculas → el más alto (97 °C).`],r:`propano < propanal < propan-1-ol`}
  ],

  FORM:[
{src:`Tema 30, pág. 3–18`,title:`Aldehídos y cetonas`,rows:[
 [`Fórmulas`,`Aldehído R−CHO (C=O terminal) · cetona R−CO−R' (C=O interno)`],
 [`Carbonilo`,`C sp² · trigonal plano · 120° · 1 σ + 1 π · O con 2 pares libres · δ⁺ C / δ⁻ O`],
 [`Resonancia`,`R₂C=O ↔ R₂C⁺−O⁻ · C electrófilo · O nucleófilo/base débil`],
 [`Físicas`,`Dipolo-dipolo · solubles hasta 4 C (puente de H con agua) · alcano < carbonílico < alcohol`],
 [`Nombres aldehído`,`-al (C del CHO = 1) · -dial · -carbaldehído (anillo) · benzaldehído`],
 [`Nombres cetona`,`-ona con número (butan-2-ona) · -diona · ciclohexanona · 1-feniletan-1-ona · fenil metil cetona`],
 [`Adición nucleofílica`,`Nu ataca al C · HCN → cianhidrina · aldehído rápido, cetona lenta`],
 [`H α`,`Ácidos en base fuerte · cetona: 2 C α · condensación aldólica → β-hidroxi → enona`],
 [`Oxidación`,`Aldehído → ácido (Tollens Ag⁺, Fehling Cu²⁺, KMnO₄, CrO₃) · cetona resiste`],
 [`Reducción`,`NaBH₄, LiAlH₄, H₂/Ni · aldehído → alcohol 1° · cetona → alcohol 2°`],
 [`Con alcoholes`,`Aldehído → hemiacetal → acetal · cetona → hemicetal → cetal (2.º paso: ácido)`],
 [`Salud`,`Formaldehído (tejidos) · retinal (visión) · PLP (B6) · aldosas · cuerpos cetónicos · progesterona · fructosa`]]}
  ],

  FICHAS:[
{src:`Tema 30, pág. 3`,fig:`carbonilo`,f:`Estructura del grupo carbonilo.`,b:`C=O. C sp², trigonal plano, 120°, 1 σ + 1 π, O con 2 pares libres.`},
{src:`Tema 30, pág. 3`,fig:null,f:`Diferencia estructural entre aldehído y cetona.`,b:`Aldehído: C=O unido a un H (terminal, R−CHO). Cetona: C=O unido a dos R (interno, R−CO−R').`},
{src:`Tema 30, pág. 4`,fig:`polaridadCarbonilo`,f:`¿Quién es el electrófilo y quién el nucleófilo en el C=O?`,b:`C δ⁺ = electrófilo (lo ataca el nucleófilo). O δ⁻ = nucleófilo y base débil.`},
{src:`Tema 30, pág. 4`,fig:`fisicasCarbonilo`,f:`Solubilidad y punto de ebullición de aldehídos y cetonas.`,b:`Dipolo-dipolo → hierven más que los alcanos. Puente de H con el agua → solubles hasta 4 C.`},
{src:`Tema 30, pág. 5`,fig:`nomAldehido`,f:`Sufijos de los aldehídos.`,b:`-al (propanal) · -dial (propanodial) · -carbaldehído en anillos (ciclohexanocarbaldehído, benzaldehído).`},
{src:`Tema 30, pág. 6`,fig:`nomCetona`,f:`Cómo se numera y nombra una cetona.`,b:`Desde el extremo más cercano al C=O; -ona con número: butan-2-ona; dos: pentano-2,4-diona; anillo: ciclohexanona.`},
{src:`Tema 30, pág. 7`,fig:`cetonaAromatica`,f:`C₆H₅−CO−CH₃: tres nombres.`,b:`1-feniletan-1-ona (IUPAC) · fenil metil cetona (radicofuncional) · acetofenona (común).`},
{src:`Tema 30, pág. 8–9`,fig:null,f:`Aldehídos y su uso o importancia: formaldehído, benzaldehído, cinamaldehído, retinal, PLP.`,b:`Conserva tejidos · almendras · canela · visión (vitamina A) · vitamina B6 (serotonina).`},
{src:`Tema 30, pág. 11`,fig:`cuerposCetonicos`,f:`Cuerpos cetónicos: cuáles son, dónde y cuándo se forman.`,b:`Acetona, acetoacetato (el principal) y β-hidroxibutirato. Hígado, desde ácidos grasos: ayuno, dieta cetogénica, diabetes descompensada.`},
{src:`Tema 30, pág. 12`,fig:`adicionNu`,f:`Adición nucleofílica con HCN.`,b:`El Nu ataca al C del carbonilo → cianhidrina (−OH y −CN en el mismo C). Aldehído rápido, cetona lenta.`},
{src:`Tema 30, pág. 13`,fig:`aldolica`,f:`Carbono α y condensación aldólica.`,b:`C α = junto al C=O; sus H son ácidos en base fuerte. Dos carbonílicos se unen: β-hidroxi → enona.`},
{src:`Tema 30, pág. 14`,fig:`oxRed`,f:`Oxidación de aldehídos y cetonas.`,b:`Aldehído → ácido carboxílico (Tollens Ag⁺, Fehling Cu²⁺). Cetona: resiste (no tiene H en el C=O).`},
{src:`Tema 30, pág. 16`,fig:`oxRed`,f:`Reducción de aldehídos y cetonas.`,b:`NaBH₄, LiAlH₄ o H₂/Ni. Aldehído → alcohol 1°. Cetona → alcohol 2°.`},
{src:`Tema 30, pág. 17`,fig:`acetal`,f:`Hemiacetal, acetal, hemicetal y cetal.`,b:`Aldehído + ROH → hemiacetal (OH, OR) → + ROH/H⁺ → acetal (OR, OR). Cetona → hemicetal → cetal.`},
{src:`Tema 30, pág. 18`,fig:`reactividad`,f:`¿Por qué la cetona es menos reactiva que el aldehído?`,b:`Dos grupos R: efecto inductivo (C menos δ⁺) e impedimento estérico.`}
  ],

  FQ:[
{src:`Tema 30, pág. 6`,q:`"Nombra CH₃−CH₂−CH₂−CO−CH₃." ¿Qué haces primero?`,o:[`Numero desde el extremo más cercano al C=O`,`Numero desde el extremo más lejano`,`Uso el sufijo -al`,`Lo nombro como éter`],e:`Queda en el C2: pentan-2-ona.`},
{src:`Tema 30, pág. 14`,q:`"¿Cómo distingues un aldehído de una cetona en el laboratorio?"`,o:[`Con Tollens o Fehling: solo el aldehído se oxida`,`Por el color del líquido`,`Con NaBH₄: solo la cetona reacciona`,`Midiendo la densidad`],e:`Tollens: espejo de plata. Fehling: precipitado rojo ladrillo.`},
{src:`Tema 30, pág. 16`,q:`"¿Qué alcohol da la reducción de la butan-2-ona?"`,o:[`Butan-2-ol (alcohol secundario)`,`Butan-1-ol`,`Ácido butanoico`,`Butanal`],e:`Cetona → alcohol 2°.`},
{src:`Tema 30, pág. 17`,q:`"¿Qué se forma al unir un aldehído con un alcohol?"`,o:[`Hemiacetal (y con otro alcohol y ácido, acetal)`,`Cetal`,`Éster`,`Éter`],e:`Las cetonas forman hemicetal y cetal.`}
  ],

  VIDEOS:[
{sub:`Qué son y cómo se nombran`,src:`Tema 30, pág. 3–7`,id:`1fSphTQNsmY`,title:`Aldehídos y cetonas: qué son y cómo nombrarlos`,ch:`Arriba la Ciencia`,rep:[`El grupo carbonilo: estructura y geometría`,`Nomenclatura de aldehídos`,`Nomenclatura de cetonas`]},
{sub:`Nomenclatura (Khan Academy)`,src:`Tema 30, pág. 5–7`,id:`YXziFdWz5Po`,title:`Nomenclatura de aldehídos y cetonas`,ch:`Khan Academy Español`,rep:[`Nomenclatura de aldehídos`,`Nomenclatura de cetonas`,`Cetonas aromáticas y nomenclatura radicofuncional`]},
{sub:`Propiedades físicas`,src:`Tema 30, pág. 4`,id:`s2b5r2VXknw`,title:`Propiedades físicas de los aldehídos y cetonas`,ch:`Khan Academy Español`,rep:[`Propiedades físicas: polaridad, solubilidad y punto de ebullición`,`Polaridad, resonancia y reactividad del carbonilo`]},
{sub:`Adición nucleofílica`,src:`Tema 30, pág. 12 y 18`,id:`asJzrB2PQdA`,title:`Adición nucleofílica a aldehídos y cetonas`,ch:`Maria Laura Porraz`,rep:[`Reacciones de adición nucleofílica`,`Reactividad relativa: aldehídos frente a cetonas`]},
{sub:`Reducción y oxidación`,src:`Tema 30, pág. 14 y 16`,id:`IjanRZsI-2k`,title:`Reacciones de aldehídos y cetonas: hidrogenación o reducción y oxidación`,ch:`Arriba la Ciencia`,rep:[`Oxidación y reducción`]},
{sub:`Tollens y Fehling (glucosa)`,src:`Tema 30, pág. 14`,id:`jSJz1qh8DdQ`,title:`Reactivo de Tollens y Fehling para identificar aldehídos (glucosa)`,ch:`Muñoz Tutoriales`,rep:[`Oxidación y reducción`]},
{sub:`Condensación aldólica`,src:`Tema 30, pág. 13 y 15`,id:`US7ZjqheksI`,title:`Condensación aldólica`,ch:`Khan Academy Español`,rep:[`Hidrógenos alfa y condensación aldólica`]},
{sub:`Hemiacetal, acetal, hemicetal y cetal`,src:`Tema 30, pág. 17`,id:`EAMIj4K5k8k`,title:`Adición de alcohol a aldehídos y cetonas`,ch:`Muñoz Tutoriales`,rep:[`Hemiacetales, acetales, hemicetales y cetales`]}
  ],

  GENS:[
 {id:`nomCarbonilo`,t:`t30`,src:`Tema 30, pág. 5–6`,name:`Nombrar aldehídos y cetonas (IUPAC)`,make(){
   const R = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`,`hept`,`oct`];
   const ald = Math.random() < .45; const n = ald ? between(1, 8) : between(3, 8);
   let p = ald ? 1 : between(2, Math.floor((n + 1) / 2));
   const atoms = []; for (let i = 1; i <= n; i++){ if (ald && i === n) atoms.push(n === 1 ? `H−CHO` : `CHO`); else if (!ald && i === p) atoms.push(`CO`); else atoms.push(i === 1 || i === n ? `CH₃` : `CH₂`); }
   const shown = (ald && n === 1) ? `H−CHO` : atoms.join(`−`);
   const name = ald ? `${R[n]}anal` : (n === 3 ? `propanona` : `${R[n]}an-${p}-ona`);
   const alts = ald ? [n > 2 ? `${R[n]}anona` : `${R[n + 1]}anal`, `${R[n]}an-1-ol`, `ácido ${R[n]}anoico`, n > 1 ? `${R[n - 1]}anal` : `etanal`]
     : [n === 3 ? `propanal` : `${R[n]}an-${n + 1 - p}-ona`, `${R[n]}anal`, n === 3 ? `propan-2-ol` : `${R[n]}an-${p}-ol`, `${R[n + 1] || `non`}an-${p}-ona`];
   const opts = shuf([name].concat([...new Set(alts.filter(x => x !== name))].slice(0, 3)));
   const pasos = ald ? [`El −CHO está al final de la cadena: es un aldehído.`, `Cadena de ${n} C → ${R[n]}ano. El C del CHO es el 1 (no se escribe).`, `Sufijo -al: ${name}.`]
     : [`El C=O está dentro de la cadena: es una cetona.`, `Cadena de ${n} C → ${R[n]}ano.`].concat(n === 3 ? [`Con 3 C el C=O solo puede estar en el centro: propanona (acetona).`] : [`Se numera desde el extremo más cercano al C=O: queda en el C${p}.`, `Sufijo -ona con su número: ${name}.`]);
   return { q:`Elige el nombre IUPAC de: ${shown}`, opts, correct: opts.indexOf(name), pasos, r: name }; }},
 {id:`redCarbonilo`,t:`t30`,src:`Tema 30, pág. 16`,name:`Reducción: ¿qué alcohol se forma?`,make(){
   const L = [[`metanal`,`metanol`,`ald`],[`etanal`,`etanol`,`ald`],[`propanal`,`propan-1-ol`,`ald`],[`butanal`,`butan-1-ol`,`ald`],[`benzaldehído`,`fenilmetanol (alcohol bencílico)`,`ald`],[`propanona`,`propan-2-ol`,`cet`],[`butan-2-ona`,`butan-2-ol`,`cet`],[`pentan-3-ona`,`pentan-3-ol`,`cet`],[`ciclohexanona`,`ciclohexanol`,`cet`]];
   const d = pick(L); const red = pick([`NaBH₄`,`LiAlH₄`,`H₂/Ni`]);
   const wrong = L.filter(x => x[0] !== d[0]).map(x => x[1]);
   const acid = d[2] === `ald` && d[0] !== `benzaldehído` ? `ácido ${d[0].replace(/al$/, `oico`)}` : `no reacciona`;
   const opts = shuf([d[1], acid].concat(shuf(wrong).slice(0, 2)));
   return { q:`¿Qué se obtiene al reducir ${d[0]} con ${red}?`, opts, correct: opts.indexOf(d[1]),
     pasos:[`${d[0]} es ${d[2] === `ald` ? `un aldehído` : `una cetona`}.`, `La reducción (ganancia de H) convierte el C=O en −OH.`, d[2] === `ald` ? `Aldehído → alcohol primario.` : `Cetona → alcohol secundario.`, `Producto: ${d[1]}.`], r: d[1] }; }},
 {id:`tollens`,t:`t30`,src:`Tema 30, pág. 14`,name:`¿Da positivo Tollens o Fehling?`,make(){
   const L = [[`metanal (formaldehído)`,1],[`etanal (acetaldehído)`,1],[`propanal`,1],[`benzaldehído`,1],[`butanal`,1],[`propanona (acetona)`,0],[`butan-2-ona`,0],[`ciclohexanona`,0],[`acetofenona`,0],[`pentan-3-ona`,0]];
   const d = pick(L); const test = pick([`Tollens (Ag⁺)`,`Fehling (Cu²⁺)`]);
   const opts = [`Sí: se oxida a ácido carboxílico`,`No: resiste la oxidación suave`];
   return { q:`¿El compuesto ${d[0]} da positiva la prueba de ${test}?`, opts, correct: d[1] ? 0 : 1,
     pasos:[`Identifica el grupo: ${d[1] ? `−CHO (aldehído)` : `C=O interno (cetona)`}.`, d[1] ? `El aldehído tiene un H en el C del carbonilo y se oxida incluso con oxidantes suaves.` : `La cetona no tiene H en el C del carbonilo: solo se oxida en condiciones drásticas.`, `Respuesta: ${opts[d[1] ? 0 : 1]}.`], r: opts[d[1] ? 0 : 1] }; }}
  ],

  GUIA:[
 { h:`Tema 30 (aldehídos y cetonas): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Todo gira alrededor del <b>grupo carbonilo</b> (C=O): C δ⁺ (electrófilo) y O δ⁻. Lo más evaluable: <b>nombrar</b> (-al, -ona, -carbaldehído, fenil), <b>comparar aldehído y cetona</b> en cada reacción, y la importancia en salud (<b>cuerpos cetónicos</b>).</p>
   <ol><li>Repaso del Tema 30 con sus dibujos. Lee los recuadros: el material tiene un dibujo invertido en la reducción y detalles en los cuerpos cetónicos.</li>
   <li>En <b>Práctica</b>: "Nombrar aldehídos y cetonas", "Reducción: ¿qué alcohol se forma?" y "¿Da positivo Tollens o Fehling?", hasta acertar <b>10 seguidos</b>.</li>
   <li>Haz una tabla de dos columnas (aldehído | cetona) con: adición, H α, oxidación, condensación, reducción, con alcoholes y reactividad.</li>
   <li>Memoriza las tablas de las pág. 8 y 10 por su uso: formaldehído, benzaldehído, vainillina, cinamaldehído, acetona, benzofenona, alcanfor.</li></ol>` }
  ],

  SYN:{ formol:[`formaldehido`,`metanal`], formaldehido:[`metanal`], acetona:[`propanona`], propanona:[`acetona`], carbonilo:[`aldehido`,`cetona`], tollens:[`oxidacion`], fehling:[`oxidacion`], cetonicos:[`cetogenesis`,`acetoacetato`], acetal:[`hemiacetal`], cetal:[`hemicetal`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah30" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah30)"/>`;
    const dbl = (x1, y1, x2, y2, d = 4) => { const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L * d, ny = (x2 - x1) / L * d; return ln((x1 + nx).toFixed(1), (y1 + ny).toFixed(1), (x2 + nx).toFixed(1), (y2 + ny).toFixed(1)) + ln((x1 - nx).toFixed(1), (y1 - ny).toFixed(1), (x2 - nx).toFixed(1), (y2 - ny).toFixed(1)); };
    const C = `var(--t30)`;
    const Ob = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" style="fill:${C}"/>` + T(x, y + 5, `O`, { c:`tw`, fs:13 });
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;
    /* carbonilo trigonal: C en (cx,cy), O arriba, sustituyentes abajo */
    const carb = (cx, cy, l, r, o = {}) => dbl(cx, cy - 16, cx, cy - 58) + Ob(cx, cy - 70) + T(cx, cy + 6, `C`, { fs:18 }) + ln(cx - 10, cy + 6, cx - 48, cy + 30) + ln(cx + 10, cy + 6, cx + 48, cy + 30) + T(cx - 56, cy + 44, l, { a:`end`, fs:o.fs || 16 }) + T(cx + 56, cy + 44, r, { a:`start`, fs:o.fs || 16 });

    F.carbonilo = { src:`Tema 30, pág. 3`, cap:`El carbono del carbonilo es sp²: sus tres enlaces están en un plano a 120°. El doble enlace C=O tiene un enlace σ y uno π. Si el carbonilo lleva un H es un aldehído; si lleva dos grupos R, una cetona.`,
      svg: (() => { let s = ``;
        s += carb(120, 120, `R`, `H`) + T(120, 196, `aldehído (R−CHO)`, { c:`tb` });
        s += carb(330, 120, `R`, `R'`) + T(330, 196, `cetona (R−CO−R')`, { c:`tb` });
        s += T(330, 172, `120°`, { c:`tm` }) + `<path d="M312 134 Q330 146 348 134" class="dash"/>`;
        s += box(430, 26, 120, 152) + T(490, 50, `Carbono sp²`, { c:`tb` }) + T(490, 72, `trigonal plano`, { c:`tm` }) + T(490, 92, `ángulos ≈ 120°`, { c:`tm` }) + T(490, 118, `C=O = σ + π`, { c:`tb` }) + T(490, 142, `O: 2 pares libres`, { c:`tm` }) + T(490, 162, `caras libres al ataque`, { c:`tm` });
        return svg(560, 210, s, `Grupo carbonilo en aldehídos y cetonas`); })() };

    F.polaridadCarbonilo = { src:`Tema 30, pág. 4`, cap:`El oxígeno atrae los electrones del doble enlace: el carbono queda con δ⁺ y el oxígeno con δ⁻. La forma dipolar (C⁺−O⁻) pesa mucho. Por eso el nucleófilo ataca al carbono y el H⁺ se une al oxígeno.`,
      svg: (() => { let s = ``;
        s += carb(90, 120, `R`, `R`) + T(62, 58, `δ⁻`, { c:`tb`, fs:16 }) + T(62, 126, `δ⁺`, { c:`tb`, fs:16 });
        s += T(205, 104, `↔`, { fs:30 });
        s += ln(310, 104, 310, 62) + `<circle cx="310" cy="50" r="13" style="fill:${C}"/>` + T(310, 55, `O⁻`, { c:`tw`, fs:12 }) + T(310, 126, `C⁺`, { fs:18 }) + ln(300, 126, 262, 150) + ln(320, 126, 358, 150) + T(254, 164, `R`, { a:`end`, fs:16 }) + T(366, 164, `R`, { a:`start`, fs:16 });
        s += T(90, 196, `forma neutra`, { c:`tm` }) + T(310, 196, `forma dipolar`, { c:`tm` });
        s += box(410, 30, 140, 70) + T(480, 54, `C δ⁺`, { c:`tb` }) + T(480, 74, `electrófilo`, { c:`tm` }) + T(480, 90, `(lo ataca el Nu⁻)`, { c:`tm`, fs:11 });
        s += box(410, 112, 140, 70) + T(480, 136, `O δ⁻`, { c:`tb` }) + T(480, 156, `nucleófilo y base`, { c:`tm` }) + T(480, 172, `débil (toma H⁺)`, { c:`tm`, fs:11 });
        return svg(560, 210, s, `Polaridad y resonancia del carbonilo`); })() };

    F.fisicasCarbonilo = { src:`Tema 30, pág. 4 y complementario [5]`, cap:`El oxígeno del carbonilo acepta un puente de hidrógeno del agua: por eso los de hasta 4 C se disuelven. Entre sus propias moléculas solo hay atracción dipolo-dipolo, así que hierven más que los alcanos y menos que los alcoholes.`,
      svg: (() => { let s = ``;
        s += carb(90, 110, `CH₃`, `CH₃`, { fs:14 }) + `<line x1="102" y1="40" x2="150" y2="40" class="dash"/>` + T(170, 45, `H−O−H`, { a:`start`, fs:15 }) + T(150, 28, `puente de H`, { c:`tm`, fs:11 });
        s += T(110, 186, `acetona + agua`, { c:`tm` });
        const B = [[`propano`, -42, `dispersión`], [`propanal`, 49, `dipolo-dipolo`], [`propanona`, 56, `dipolo-dipolo`], [`propan-1-ol`, 97, `puente de H`]];
        s += T(400, 24, `Punto de ebullición (°C)`, { c:`tb` }) + ln(300, 150, 540, 150, `dash`);
        B.forEach(([n, v, f], i) => { const x = 300 + i * 62, h = Math.abs(v) * 1.05, y = v >= 0 ? 150 - h : 150;
          s += `<rect x="${x}" y="${y.toFixed(1)}" width="40" height="${h.toFixed(1)}" rx="4" style="fill:${i === 1 || i === 2 ? C : `var(--line2)`}"/>` + T(v >= 0 ? x + 20 : x + 50, v >= 0 ? y - 6 : y + h - 4, v >= 0 ? v : `−` + Math.abs(v), { a: v >= 0 ? `middle` : `start`, c:`tb`, fs:12 }) + T(x + 20, 220, n, { c:`tm`, fs:11 }); });
        return svg(560, 232, s, `Puente de hidrógeno con el agua y puntos de ebullición`); })() };

    F.nomAldehido = { src:`Tema 30, pág. 5`, cap:`En un aldehído el carbono del −CHO siempre es el número 1. Se cambia la -o del alcano por -al; con dos −CHO, -dial; si el −CHO cuelga de un anillo, -carbaldehído.`,
      svg: (() => { let s = ``;
        s += T(30, 50, `CH₃`, { a:`start`, fs:17 }) + T(72, 50, `−`, { a:`start`, fs:17 }) + T(84, 50, `CH₂`, { a:`start`, fs:17 }) + T(122, 50, `−`, { a:`start`, fs:17 }) + hl(132, 30, 50, 28) + T(136, 50, `CHO`, { a:`start`, fs:17 });
        s += T(48, 74, `3`, { c:`tm` }) + T(100, 74, `2`, { c:`tm` }) + T(156, 74, `1`, { c:`tb` }) + T(110, 100, `propanal`, { c:`tb` });
        s += T(250, 50, `OHC−CH₂−CHO`, { a:`start`, fs:17 }) + T(312, 74, `1    2    3`, { c:`tm` }) + T(312, 100, `propanodial`, { c:`tb` });
        s += AR.ring(110, 166, 30, {}, { mode:`none` }) + ln(110, 136, 110, 120) + T(124, 118, `CHO`, { a:`start`, fs:15 }) + T(110, 216, `ciclohexanocarbaldehído`, { c:`tb`, fs:12.5 });
        s += AR.ring(330, 166, 30, {}) + ln(330, 136, 330, 120) + T(344, 118, `CHO`, { a:`start`, fs:15 }) + T(330, 216, `benzaldehído`, { c:`tb` });
        s += box(430, 30, 120, 170) + T(490, 56, `Sufijos`, { c:`tb` }) + T(490, 84, `-al`, { fs:18 }) + T(490, 102, `un CHO (C1)`, { c:`tm`, fs:11 }) + T(490, 130, `-dial`, { fs:18 }) + T(490, 148, `dos CHO`, { c:`tm`, fs:11 }) + T(490, 176, `-carbaldehído`, { fs:15 }) + T(490, 192, `CHO en un anillo`, { c:`tm`, fs:11 });
        return svg(560, 228, s, `Nomenclatura de aldehídos`); })() };

    F.nomCetona = { src:`Tema 30, pág. 6`, cap:`En una cetona se numera desde el extremo más cercano al C=O y se indica su posición antes de -ona. En un anillo el C=O es el 1 y no se escribe.`,
      svg: (() => { let s = ``;
        s += T(24, 52, `CH₃−`, { a:`start`, fs:17 }) + hl(66, 32, 34, 28) + T(68, 52, `CO`, { a:`start`, fs:17 }) + T(98, 52, `−CH₂−CH₃`, { a:`start`, fs:17 });
        s += T(40, 76, `1`, { c:`tm` }) + T(83, 76, `2`, { c:`tb` }) + T(125, 76, `3`, { c:`tm` }) + T(166, 76, `4`, { c:`tm` }) + T(100, 102, `butan-2-ona`, { c:`tb` }) + T(196, 102, `(no butan-3-ona)`, { a:`start`, c:`tm`, fs:11 });
        s += T(220, 52, `CH₃−CO−CH₂−CO−CH₃`, { a:`start`, fs:16 }) + T(318, 78, `pentano-2,4-diona`, { c:`tb` });
        const ket = (cx, cy, me) => { let k = AR.ring(cx, cy, 30, {}, { mode:`none` }) + dbl(cx, cy - 30, cx, cy - 52, 3) + Ob(cx, cy - 62, 10); if (me) k += ln(cx + 26, cy - 15, cx + 48, cy - 28) + T(cx + 52, cy - 30, `CH₃`, { a:`start`, fs:13 }) + T(cx + 18, cy - 4, `2`, { c:`tm`, fs:10.5 }); return k + T(cx, cy - 2, `1`, { c:`tm`, fs:10.5 }); };
        s += ket(90, 206, false) + T(90, 256, `ciclohexanona`, { c:`tb` });
        s += ket(280, 206, true) + T(280, 256, `2-metilciclohexanona`, { c:`tb` });
        s += box(430, 30, 120, 150) + T(490, 56, `Pasos`, { c:`tb` }) + T(490, 82, `1. cadena con C=O`, { c:`tm`, fs:11.5 }) + T(490, 104, `2. numerar desde el`, { c:`tm`, fs:11.5 }) + T(490, 120, `extremo más cercano`, { c:`tm`, fs:11.5 }) + T(490, 142, `3. número + -ona`, { c:`tm`, fs:11.5 }) + T(490, 164, `dos C=O: -diona`, { c:`tm`, fs:11.5 });
        return svg(560, 268, s, `Nomenclatura de cetonas`); })() };

    F.cetonaAromatica = { src:`Tema 30, pág. 7`, cap:`En la IUPAC la cadena abierta manda y el benceno es "fenil". En la radicofuncional se nombran los dos grupos del carbonilo en orden alfabético y se agrega "cetona".`,
      svg: (() => { let s = ``;
        s += AR.ring(80, 110, 34, {}) + ln(110, 93, 140, 76) + dbl(140, 76, 140, 40, 3) + Ob(140, 30, 10) + ln(140, 76, 176, 93) + T(184, 98, `CH₃`, { a:`start`, fs:15 });
        s += T(110, 172, `1-feniletan-1-ona`, { c:`tb` }) + T(110, 190, `fenil metil cetona`, { c:`tm` }) + T(110, 206, `(acetofenona)`, { c:`tm` });
        s += AR.ring(300, 110, 30, {}) + ln(326, 95, 350, 80) + dbl(350, 80, 350, 46, 3) + Ob(350, 36, 10) + ln(350, 80, 374, 95) + AR.ring(400, 110, 30, {}, { rot:-90 });
        s += T(350, 172, `difenil cetona`, { c:`tb` }) + T(350, 190, `difenilmetanona`, { c:`tm` }) + T(350, 206, `(benzofenona, filtro UV)`, { c:`tm` });
        s += T(500, 70, `fenil =`, { c:`tm` }) + T(500, 88, `C₆H₅−`, { c:`tb` }) + T(500, 120, `orden`, { c:`tm` }) + T(500, 136, `alfabético`, { c:`tm` });
        return svg(560, 220, s, `Cetonas aromáticas`); })() };

    F.cuerposCetonicos = { src:`Tema 30, pág. 11`, cap:`Los tres cuerpos cetónicos los produce el hígado a partir de grasas cuando falta glucosa (ayuno, dieta cetogénica, diabetes descompensada). El β-hidroxibutirato se llama así por costumbre, aunque tiene −OH en lugar de C=O.`,
      svg: (() => { let s = ``;
        s += T(280, 26, `Hígado: ácidos grasos → cetogénesis`, { c:`tb` });
        const K = [[`CH₃−CO−CH₃`, `acetona`, `se elimina por el aliento`], [`CH₃−CO−CH₂−COO⁻`, `acetoacetato`, `el principal`], [`CH₃−CH(OH)−CH₂−COO⁻`, `β-hidroxibutirato`, `(sin grupo cetona)`]];
        K.forEach(([f, n, d], i) => { const y = 52 + i * 52; s += box(20, y, 520, 42) + T(36, y + 27, f, { a:`start`, fs:15 }) + T(360, y + 20, n, { a:`start`, c:`tb` }) + T(360, y + 36, d, { a:`start`, c:`tm`, fs:11 }); });
        s += T(280, 222, `Se activa en: ayuno prolongado · dieta cetogénica · diabetes descompensada`, { c:`tm` });
        return svg(560, 234, s, `Cuerpos cetónicos`); })() };

    F.adicionNu = { src:`Tema 30, pág. 12`, cap:`El nucleófilo (rico en electrones) ataca al carbono δ⁺; el enlace π se rompe y el oxígeno queda con carga negativa; al tomar un H⁺ se vuelve −OH. Con HCN se forma una cianhidrina.`,
      svg: (() => { let s = ``;
        s += carb(80, 116, `R`, `H`) + T(170, 120, `Nu⁻`, { c:`tb`, fs:16 }) + `<path d="M152 112 Q122 100 98 112" class="ar" marker-end="url(#ah30)"/>`;
        s += arrow(200, 100, 260) + T(230, 88, `1`, { c:`tm` });
        s += T(320, 62, `O⁻`, { fs:16 }) + ln(320, 70, 320, 96) + T(320, 112, `C`, { fs:17 }) + ln(310, 116, 286, 132) + ln(330, 116, 354, 132) + ln(320, 120, 320, 146) + T(280, 146, `R`, { a:`end` }) + T(360, 146, `H`, { a:`start` }) + T(320, 162, `Nu`, { fs:15 });
        s += T(320, 186, `intermediario`, { c:`tm`, fs:11 });
        s += arrow(380, 100, 430) + T(405, 88, `+ H⁺`, { c:`tm` });
        s += T(490, 62, `OH`, { fs:16 }) + ln(490, 70, 490, 96) + T(490, 112, `C`, { fs:17 }) + ln(480, 116, 460, 132) + ln(500, 116, 520, 132) + ln(490, 120, 490, 146) + T(454, 146, `R`, { a:`end` }) + T(526, 146, `H`, { a:`start` }) + T(490, 162, `Nu`, { fs:15 });
        s += T(280, 212, `Con HCN (Nu = CN): R−CHO + HCN ⇌ R−CH(OH)−CN (cianhidrina)`, { c:`tb`, fs:12.5 });
        return svg(560, 226, s, `Adición nucleofílica al carbonilo`); })() };

    F.aldolica = { src:`Tema 30, pág. 13 y 15`, cap:`El carbono α es el vecino del carbonilo y sus H se pueden arrancar con una base fuerte. En la condensación aldólica dos acetonas se unen (β-hidroxicetona) y luego pierden agua (cetona α,β-insaturada).`,
      svg: (() => { let s = ``;
        s += T(20, 40, `CH₃−CH₂−`, { a:`start`, fs:16 }) + hl(84, 22, 36, 26) + T(86, 40, `CH₂`, { a:`start`, fs:16 }) + T(120, 40, `−CHO`, { a:`start`, fs:16 });
        s += T(102, 62, `α`, { c:`tb`, fs:15 }) + T(60, 62, `β`, { c:`tm`, fs:15 }) + T(240, 40, `H α: se los quita una base fuerte`, { a:`start`, c:`tm` }) + T(240, 58, `cetona: tiene 2 carbonos α`, { a:`start`, c:`tm` });
        s += ln(20, 80, 540, 80, `dash`);
        s += T(70, 122, `2 CH₃−CO−CH₃`, { fs:15 }) + T(70, 142, `acetona`, { c:`tm` });
        s += arrow(140, 116, 190) + T(165, 104, `NaOH`, { c:`tm`, fs:11 });
        s += T(290, 116, `CH₃−CO−CH₂−C(OH)(CH₃)₂`, { fs:14 }) + T(290, 136, `β-hidroxicetona (aldol)`, { c:`tb`, fs:12 });
        s += arrow(290, 150, 290, 178) + T(306, 168, `− H₂O`, { a:`start`, c:`tm` });
        s += T(290, 200, `CH₃−CO−CH=C(CH₃)₂`, { fs:14 }) + T(290, 220, `cetona α,β-insaturada (enona)`, { c:`tb`, fs:12 });
        s += T(490, 128, `2 moléculas`, { c:`tm` }) + T(490, 146, `→ 1 sola`, { c:`tm` }) + T(490, 176, `gluconeogénesis:`, { c:`tm`, fs:11 }) + T(490, 192, `reacciones de este tipo`, { c:`tm`, fs:11 });
        return svg(560, 232, s, `Hidrógenos alfa y condensación aldólica`); })() };

    F.oxRed = { src:`Tema 30, pág. 14 y 16`, cap:`Hacia la derecha es oxidación: el aldehído pasa fácilmente a ácido (Tollens, Fehling); la cetona se queda. Hacia la izquierda es reducción (NaBH₄, LiAlH₄, H₂/Ni): aldehído → alcohol primario y cetona → alcohol secundario.`,
      svg: (() => { let s = ``;
        const row = (y, a, b, c, an, bn, cn) => { let r = box(16, y - 26, 140, 52) + T(86, y, a, { fs:15 }) + T(86, y + 18, an, { c:`tm`, fs:11 }) + box(210, y - 26, 140, 52) + T(280, y, b, { fs:15 }) + T(280, y + 18, bn, { c:`tm`, fs:11 });
          r += arrow(160, y - 8, 206) + arrow(206, y + 8, 160);
          if (c) r += arrow(354, y, 398) + box(402, y - 26, 140, 52) + T(472, y, c, { fs:15 }) + T(472, y + 18, cn, { c:`tm`, fs:11 }); else r += T(450, y + 5, `✕ no se oxida (suave)`, { c:`tb`, fs:12.5 });
          return r; };
        s += T(183, 22, `oxidación →`, { c:`tb`, fs:12 }) + T(183, 132, `← reducción`, { c:`tb`, fs:12 });
        s += row(66, `R−CH₂OH`, `R−CHO`, `R−COOH`, `alcohol 1°`, `aldehído`, `ácido carboxílico`);
        s += row(176, `R−CH(OH)−R'`, `R−CO−R'`, null, `alcohol 2°`, `cetona`, ``);
        s += T(472, 108, `Tollens (Ag⁺) · Fehling (Cu²⁺)`, { c:`tm`, fs:11 }) + T(472, 122, `KMnO₄ · CrO₃`, { c:`tm`, fs:11 });
        s += T(280, 226, `Reductores: NaBH₄ · LiAlH₄ · H₂/Ni`, { c:`tm` });
        return svg(560, 236, s, `Oxidación y reducción de aldehídos y cetonas`); })() };

    F.acetal = { src:`Tema 30, pág. 17`, cap:`Con un alcohol, el aldehído forma un hemiacetal (−OH y −OR en el mismo carbono); con otro alcohol y ácido, un acetal (dos −OR) y sale agua. Las cetonas hacen lo mismo: hemicetal y cetal.`,
      svg: (() => { let s = ``;
        const tet = (cx, cy, top, bot) => T(cx, cy - 26, top, { fs:15 }) + ln(cx, cy - 20, cx, cy - 8) + T(cx, cy + 6, `C`, { fs:17 }) + ln(cx - 10, cy + 2, cx - 28, cy + 2) + ln(cx + 10, cy + 2, cx + 28, cy + 2) + ln(cx, cy + 12, cx, cy + 24) + T(cx, cy + 40, bot, { fs:15 });
        s += carb(70, 104, `R`, `H`, { fs:14 }) + T(70, 172, `aldehído`, { c:`tb` });
        s += arrow(130, 90, 186) + arrow(186, 102, 130) + T(158, 78, `+ R'OH`, { c:`tm`, fs:11 }) + T(158, 120, `ácido o base`, { c:`tm`, fs:10.5 });
        s += tet(260, 100, `OH`, `OR'`) + T(260, 172, `hemiacetal`, { c:`tb` });
        s += arrow(316, 90, 372) + arrow(372, 102, 316) + T(344, 78, `+ R'OH`, { c:`tm`, fs:11 }) + T(344, 120, `solo ácido`, { c:`tm`, fs:10.5 });
        s += tet(440, 100, `OR'`, `OR'`) + T(440, 172, `acetal + H₂O`, { c:`tb` });
        s += ln(20, 190, 540, 190, `dash`) + T(280, 216, `cetona → hemicetal → cetal (un −OR a cada lado)`, { c:`tb` });
        return svg(560, 228, s, `Formación de hemiacetales y acetales`); })() };

    F.reactividad = { src:`Tema 30, pág. 18`, cap:`El aldehído tiene un H pequeño: el nucleófilo llega fácil y el carbono es más positivo. La cetona tiene dos grupos que estorban y que le ceden electrones al carbono (efecto inductivo).`,
      svg: (() => { let s = ``;
        s += carb(110, 110, `R`, `H`) + T(110, 186, `aldehído`, { c:`tb` }) + T(110, 204, `más reactivo`, { c:`tm` }) + T(170, 112, `Nu⁻`, { c:`tb` }) + arrow(160, 104, 126, 104);
        s += carb(330, 110, `R`, `R'`) + T(330, 186, `cetona`, { c:`tb` }) + T(330, 204, `menos reactiva`, { c:`tm` });
        s += `<circle cx="276" cy="150" r="20" class="dash"/><circle cx="388" cy="150" r="20" class="dash"/>` + T(390, 104, `Nu⁻`, { c:`tb` }) + T(410, 86, `✕`, { c:`tb`, fs:13 });
        s += box(440, 40, 110, 130) + T(495, 64, `Cetona:`, { c:`tb` }) + T(495, 88, `1. inductivo`, { c:`tm`, fs:11.5 }) + T(495, 104, `(C menos δ⁺)`, { c:`tm`, fs:11 }) + T(495, 132, `2. estérico`, { c:`tm`, fs:11.5 }) + T(495, 148, `(estorban)`, { c:`tm`, fs:11 });
        return svg(560, 216, s, `Reactividad de aldehídos frente a cetonas`); })() };
  }
});

/* ======================= TEMA 31: ÁCIDOS CARBOXÍLICOS ======================= */
registerPack({
  id:`t31`, version:1,
  topic:{ t:`t31`, n:`Tema 31`, name:`Ácidos carboxílicos`, unit:`Unidad VII · Funciones oxigenadas`, color:[`#4E7D2E`,`#A9D68A`] },

  REPASO:[
{src:`Tema 31, pág. 1–3`,title:`El grupo carboxilo`,fig:`carboxilo`,
 body:`<p>Los <b>ácidos carboxílicos</b> son compuestos orgánicos con el grupo funcional <b>carboxilo</b>: <b>−COOH</b> (o −CO₂H).</p>
 <p>Fórmula general: <b>R−COOH</b>. R es una cadena hidrocarbonada (alifática) o un anillo aromático. En el <b>ácido fórmico</b>, R es solo un átomo de hidrógeno: H−COOH.</p>
 <p><b>Componentes del grupo carboxilo.</b> El nombre "carboxilo" combina los dos grupos que lo forman, unidos al <b>mismo carbono</b>:</p>
 <ul><li><b>Grupo carbonilo (C=O):</b> un carbono unido por doble enlace a un oxígeno (el del Tema 30).</li>
 <li><b>Grupo hidroxilo (−OH):</b> un enlace sencillo entre el carbono y un oxígeno con hidrógeno.</li></ul>
 <p class="note">El material también nombra a los <b>derivados</b> de los ácidos (en los objetivos), pero no los desarrolla. Complementario [5]: los derivados se forman al cambiar el −OH: ésteres (−OR), amidas (−NH₂), cloruros de ácido (−Cl) y anhídridos.</p>`,
 memo:`Carboxilo = carbonilo (C=O) + hidroxilo (−OH) en el mismo C. R−COOH. Fórmico: H−COOH.`},
{src:`Tema 31, pág. 4`,title:`Geometría, polaridad y resonancia del carboxilo`,fig:`geometriaCarboxilo`,
 body:`<p><b>Geometría e hibridación:</b></p>
 <ul><li><b>Hibridación sp²:</b> el carbono carboxílico tiene sus tres enlaces σ en un mismo plano.</li>
 <li><b>Geometría plana trigonal:</b> los ángulos O=C−O, R−C=O y R−C−O miden unos <b>120°</b>.</li>
 <li>Distancias del dibujo: <b>C=O 1.23 Å</b> (más corto) y <b>C−O 1.36 Å</b>.</li></ul>
 <p><b>Polaridad y resonancia:</b></p>
 <ul><li><b>Alta polaridad:</b> los enlaces <b>C=O</b> y <b>O−H</b> son fuertemente polares por la alta electronegatividad del oxígeno. Permiten <b>puentes de hidrógeno</b> entre moléculas (casi siempre forman <b>dímeros</b>).</li>
 <li><b>Estabilización por resonancia del anión carboxilato:</b> cuando el ácido cede su protón (H⁺), el anión R−COO⁻ <b>reparte la carga negativa por igual entre los dos oxígenos</b>. Es la razón principal de que sea <b>más ácido que los alcoholes</b>.</li></ul>`,
 memo:`C sp², trigonal plano, 120°. C=O 1.23 Å · C−O 1.36 Å. Muy polar → puentes de H (dímeros). Carboxilato estabilizado por resonancia → más ácido que un alcohol.`},
{src:`Tema 31, pág. 5`,title:`Propiedades físicas: ebullición y solubilidad`,fig:`dimero`,
 body:`<p>Dependen de la <b>polaridad del −COOH</b> y de su capacidad de formar <b>puentes de hidrógeno</b>.</p>
 <ol><li><b>Puntos de ebullición y fusión elevados:</b> forman <b>dímeros cíclicos</b> estables con <b>dos puentes de hidrógeno</b> entre dos moléculas (el O del carbonilo de una se une al H del hidroxilo de la otra).</li>
 <li><b>Solubilidad en agua:</b>
  <ul><li><b>1 a 4 carbonos:</b> completamente solubles (miscibles), por los puentes de hidrógeno con el agua.</li>
  <li><b>Más de 5 carbonos:</b> la solubilidad <b>disminuye drásticamente</b>: la cadena (apolar, lipofílica) le gana al efecto polar del carboxilo.</li></ul></li></ol>
 <p class="note">Complementario [5]: por los dímeros, el ácido acético (60 g/mol) hierve a 118 °C, más que el etanol (78 °C) y que el propan-1-ol (97 °C). El −COOH puede formar hasta 3 puentes de H con el agua (números 1, 2 y 3 del dibujo de la pág. 5).</p>`,
 memo:`Dímeros cíclicos (2 puentes de H) → ebullición alta. Solubles 1–4 C; desde 5 C baja mucho la solubilidad.`},
{src:`Tema 31, pág. 5`,title:`Propiedades físicas: estado, olor y densidad`,fig:`escalaAcidos`,
 body:`<ol start="3"><li><b>Estado físico y apariencia:</b> de <b>1 a 9 carbonos</b> son <b>líquidos incoloros</b>; de <b>más de 10 carbonos</b> son <b>sólidos cerosos e inodoros</b> (como el ácido esteárico o el palmítico).</li>
 <li><b>Olor y sabor:</b> sabor <b>agrio o ácido</b>.
  <ul><li>Los pequeños (fórmico, acético): olores <b>punzantes y penetrantes</b>.</li>
  <li>De <b>4 a 8 carbonos</b> (butírico, caproico): olores <b>desagradables</b>, a mantequilla rancia, sudor o queso maduro.</li></ul></li>
 <li><b>Densidad:</b> los de menor masa son un poco <b>más densos que el agua</b> (ácido fórmico ≈ 1.22 g/cm³), pero la densidad baja al alargarse la cadena hasta ser <b>menos densos que el agua</b>.</li></ol>`,
 memo:`1–9 C líquidos incoloros · ≥10 C sólidos cerosos. Fórmico/acético: punzantes. 4–8 C: rancios (mantequilla, sudor, queso). Fórmico 1.22 g/cm³; los largos flotan.`},
{src:`Tema 31, pág. 6`,title:`Sustitución nucleofílica de acilo`,fig:`fischer`,
 body:`<p>Las reacciones de sustitución de los ácidos carboxílicos se llaman <b>sustitución nucleofílica de acilo</b>: un <b>nucleófilo</b> (donador de electrones) <b>reemplaza al −OH</b> (o a otro átomo) unido al carbono del carbonilo.</p>
 <p>El mecanismo es de <b>adición-eliminación</b>:</p>
 <ol><li><b>Adición nucleofílica:</b> el nucleófilo ataca al carbono del carbonilo, que es δ⁺ por la electronegatividad del oxígeno. Se rompe el doble enlace C=O y se forma un <b>intermediario tetraédrico</b> (C sp³).</li>
 <li><b>Eliminación:</b> se vuelve a formar el doble enlace del carbonilo y sale un <b>grupo saliente</b> (casi siempre el −OH transformado, como agua, o un grupo activado).</li></ol>
 <p>El ejemplo de la pág. 6 tiene 4 pasos: <b>1)</b> protonación del O del carbonilo; <b>2)</b> ataque del nucleófilo (metanol); <b>3)</b> transferencia de protón; <b>4)</b> eliminación de agua.</p>
 <p class="note">Complementario [5]: ese ejemplo es la <b>esterificación de Fischer</b>: ácido + alcohol, con catalizador ácido, ⇌ <b>éster</b> + agua. Diferencia con el Tema 30: en aldehídos y cetonas el nucleófilo se <b>queda</b> (adición); en los ácidos <b>sustituye</b> al −OH porque hay un grupo que puede salir.</p>`,
 memo:`Sustitución nucleofílica de acilo = adición (Nu ataca al C → intermediario tetraédrico sp³) + eliminación (sale el −OH como agua). Ej.: ácido + alcohol → éster + agua.`},
{src:`Tema 31, pág. 7`,title:`Reacciones de acidez`,fig:`carboxilato`,
 body:`<p>Las reacciones de acidez son la propiedad química <b>más representativa</b> de los ácidos carboxílicos.</p>
 <p><b>1. Disociación ácida:</b> en agua ceden un protón (H⁺) a las moléculas del solvente, en un <b>equilibrio</b>:</p>
 <p class="fx" style="text-align:center">R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺</p>
 <p><b>2. Causa de la acidez: estabilización por resonancia</b> del <b>anión carboxilato</b> (R−COO⁻):</p>
 <ul><li><b>Deslocalización de carga:</b> la carga negativa no se queda en un solo oxígeno: se reparte <b>por igual entre los dos</b>.</li>
 <li><b>Equivalencia de enlaces:</b> las dos estructuras de resonancia tienen la misma energía; los dos enlaces C−O quedan con una <b>longitud intermedia</b> entre simple y doble.</li></ul>
 <p><b>3. Reacción con bases fuertes:</b> reaccionan por completo con hidróxidos alcalinos (NaOH, KOH) y forman <b>sales solubles en agua</b>:</p>
 <p class="fx" style="text-align:center">R−COOH + NaOH → R−COO⁻Na⁺ + H₂O</p>
 <p class="note">El dibujo de la pág. 7 repite el ácido acético en los dos lados de la ecuación; el producto correcto es el <b>ion acetato</b>, CH₃−COO⁻. Complementario [5]: son ácidos <b>débiles</b> (el acético tiene pKa ≈ 4.8, el etanol ≈ 16); por eso es un equilibrio y no una disociación total (Temas 18–20).</p>`,
 memo:`R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺ (ácido débil). Acidez por resonancia del carboxilato (carga repartida en 2 O, enlaces C−O iguales). Con NaOH → sal soluble R−COO⁻Na⁺ + H₂O.`},
{src:`Tema 31, pág. 8`,title:`Nomenclatura IUPAC de ácidos monocarboxílicos`,fig:`nomAcido`,
 body:`<p>Para ácidos alifáticos lineales de una sola cadena:</p>
 <ol><li><b>Palabra inicial:</b> se antepone la palabra <b>"ácido"</b>.</li>
 <li><b>Cadena principal:</b> la cadena continua más larga que contenga el grupo carboxilo.</li>
 <li><b>Numeración:</b> el carbono del −COOH <b>siempre es el C-1</b>; no hace falta escribir su número.</li>
 <li><b>Sufijo:</b> la terminación <b>-o</b> del alcano se cambia por <b>-oico</b>.</li></ol>
 <p class="fx" style="text-align:center">ácido + alcano(−o) + oico</p>
 <ul><li>HCOOH (1 C) → <b>ácido metanoico</b></li><li>CH₃−COOH (2 C) → <b>ácido etanoico</b></li><li>CH₃−CH₂−CH₂−COOH (4 C) → <b>ácido butanoico</b></li></ul>
 <p class="note">El carbono del −COOH <b>se cuenta</b> en la cadena: CH₃−COOH tiene 2 C (etanoico), no 1.</p>`,
 memo:`"ácido" + alcano sin -o + "-oico". C del COOH = C1 (se cuenta, no se escribe). HCOOH metanoico · CH₃COOH etanoico · C₃H₇COOH butanoico.`},
{src:`Tema 31, pág. 9`,title:`Nombres comunes de los ácidos carboxílicos`,fig:null,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Fórmula</th><th>IUPAC</th><th>Común</th><th>Origen del nombre</th></tr></thead><tbody>
 <tr><td>HCOOH</td><td>ácido metanoico</td><td><b>ácido fórmico</b></td><td>latín <i>formica</i> (hormiga)</td></tr>
 <tr><td>CH₃COOH</td><td>ácido etanoico</td><td><b>ácido acético</b></td><td>latín <i>acetum</i> (vinagre)</td></tr>
 <tr><td>CH₃CH₂COOH</td><td>ácido propanoico</td><td><b>ácido propiónico</b></td><td>griego <i>protos pion</i> (primera grasa)</td></tr>
 <tr><td>CH₃(CH₂)₂COOH</td><td>ácido butanoico</td><td><b>ácido butírico</b></td><td>latín <i>butyrum</i> (mantequilla)</td></tr>
 <tr><td>CH₃(CH₂)₃COOH</td><td>ácido pentanoico</td><td><b>ácido valérico</b></td><td>planta <i>Valeriana officinalis</i></td></tr>
 <tr><td>CH₃(CH₂)₁₄COOH</td><td>ácido hexadecanoico</td><td><b>ácido palmítico</b></td><td>aceite de palma</td></tr>
 </tbody></table></div>
 <p class="note">Truco: <b>fó</b>rmico = <b>ho</b>rmiga (picadura), <b>acé</b>tico = vinagre, <b>butí</b>rico = mantequilla (rancia). El palmítico tiene 16 C: por eso es sólido (más de 10 C).</p>`,
 memo:`Fórmico (hormiga, 1 C) · acético (vinagre, 2) · propiónico (3) · butírico (mantequilla, 4) · valérico (valeriana, 5) · palmítico (palma, 16).`},
{src:`Tema 31, pág. 10`,title:`Ácidos dicarboxílicos`,fig:`dicarboxilicos`,
 body:`<p>Cuando una molécula lineal tiene <b>dos grupos carboxilo</b>, uno en cada extremo:</p>
 <ul><li>Se antepone la palabra <b>"ácido"</b>.</li>
 <li>Se <b>mantiene el nombre completo del alcano</b> (con su -o) y se agrega <b>-dioico</b>.</li></ul>
 <div class="scroll"><table class="tbl"><thead><tr><th>Fórmula</th><th>C</th><th>IUPAC</th><th>Común</th></tr></thead><tbody>
 <tr><td>HOOC−COOH</td><td>2</td><td>ácido etanodioico</td><td><b>ácido oxálico</b></td></tr>
 <tr><td>HOOC−CH₂−COOH</td><td>3</td><td>ácido propanodioico</td><td><b>ácido malónico</b></td></tr>
 <tr><td>HOOC−(CH₂)₂−COOH</td><td>4</td><td>ácido butanodioico</td><td><b>ácido succínico</b></td></tr>
 <tr><td>HOOC−(CH₂)₄−COOH</td><td>6</td><td>ácido hexanodioico</td><td><b>ácido adípico</b></td></tr>
 </tbody></table></div>
 <p class="note">El título de la pág. 10 dice "monocarboxílicos", pero el tema de esa diapositiva son los <b>dicarboxílicos</b>. Recuerda: los dos C de los −COOH se cuentan (el oxálico tiene 2 C).</p>`,
 memo:`Dos COOH: "ácido" + alcano completo + "-dioico". Oxálico (2) · malónico (3) · succínico (4) · adípico (6).`},
{src:`Tema 31, pág. 11`,title:`Ácidos cíclicos y aromáticos`,fig:`ciclicosAcido`,
 body:`<p>Cuando el −COOH está unido directamente a un <b>anillo</b>, el carbono del carboxilo <b>no se puede numerar dentro del anillo</b>. En estos casos:</p>
 <ul><li>Se usa el sufijo <b>-carboxílico</b> después del nombre del ciclo.</li>
 <li>El carbono del anillo unido al −COOH es el <b>C-1</b>.</li></ul>
 <ul><li>Anillo de 6 carbonos con −COOH → <b>ácido ciclohexanocarboxílico</b>.</li>
 <li>Benceno con −COOH → <b>ácido bencenocarboxílico</b>, comúnmente <b>ácido benzoico</b>.</li></ul>
 <p class="note">Es la misma idea que los aldehídos del Tema 30: −CHO en un anillo = <b>-carbaldehído</b>; −COOH en un anillo = <b>-carboxílico</b>.</p>`,
 memo:`COOH en un anillo: ácido + ciclo + "-carboxílico" (C del anillo = C1). Ciclohexanocarboxílico · bencenocarboxílico = benzoico.`},
{src:`Tema 31, pág. 12`,title:`Ácidos carboxílicos en medicina`,fig:`medicinaAcidos`,
 body:`<ul><li><b>Medicamentos:</b> <b>ibuprofeno</b>, <b>ácido acetilsalicílico</b> (aspirina), <b>ácido valproico</b> y <b>ácido clavulánico</b>.</li>
 <li><b>Ácidos grasos poliinsaturados:</b> el <b>omega-3</b> y el <b>ácido araquidónico</b> (C₂₀H₃₂O₂, 20 C con 4 dobles enlaces).</li>
 <li><b>Metabolitos.</b></li></ul>
 <p class="note">La diapositiva está cortada: dice "Metabolitos como el ácido…" y no termina. Complementario [4]: metabolitos carboxílicos de interés clínico son el <b>ácido láctico</b> (lactato, medido en sangre), el <b>ácido pirúvico</b> y el <b>ácido cítrico</b> (ciclo de Krebs). El acetoacetato del Tema 30 también es un ácido carboxílico. Confirma con el docente cuál era el ejemplo. Usos complementarios [5]: el ibuprofeno y la aspirina son antiinflamatorios; el valproico, anticonvulsivo; el clavulánico se combina con amoxicilina.</p>`,
 memo:`Fármacos: ibuprofeno, aspirina, valproico, clavulánico. Ácidos grasos: omega-3, araquidónico. Metabolitos (diapositiva cortada; ej. láctico, pirúvico, cítrico).`}
  ],

  MCQ:[
{src:`Tema 31, pág. 3`,q:`El grupo funcional de los ácidos carboxílicos es:`,o:[`−COOH (carboxilo)`,`−CHO (formilo)`,`−OH (hidroxilo) solo`,`−O− (éter)`],e:`También se escribe −CO₂H.`},
{src:`Tema 31, pág. 3`,q:`El grupo carboxilo combina, en el mismo carbono:`,o:[`Un carbonilo (C=O) y un hidroxilo (−OH)`,`Dos carbonilos`,`Un hidroxilo y un éter`,`Un carbonilo y un hidrógeno`],e:`De ahí el nombre carb-oxilo.`},
{src:`Tema 31, pág. 3`,q:`En el ácido fórmico, el grupo R es:`,o:[`Un átomo de hidrógeno`,`Un metilo`,`Un anillo de benceno`,`Un etilo`],e:`H−COOH.`},
{src:`Tema 31, pág. 4`,q:`El carbono carboxílico tiene hibridación y geometría:`,o:[`sp², trigonal plana, unos 120°`,`sp³, tetraédrica`,`sp, lineal`,`sp³, angular`],e:`Sus tres enlaces σ están en un plano.`},
{src:`Tema 31, pág. 4`,q:`En el grupo carboxilo, el enlace C=O mide 1.23 Å y el C−O mide 1.36 Å. Esto indica que:`,o:[`El doble enlace es más corto que el sencillo`,`Los dos son enlaces iguales`,`El sencillo es más corto`,`No hay doble enlace`],e:`Más enlaces = más corto.`},
{src:`Tema 31, pág. 4`,q:`La razón principal de que los ácidos carboxílicos sean más ácidos que los alcoholes es:`,o:[`La resonancia del anión carboxilato, que reparte la carga en dos oxígenos`,`Que tienen más carbonos`,`Que son apolares`,`Que no tienen hidrógeno`],e:`El carboxilato es más estable que el alcóxido.`},
{src:`Tema 31, pág. 5`,q:`Los ácidos carboxílicos tienen puntos de ebullición elevados porque:`,o:[`Forman dímeros cíclicos con dos puentes de hidrógeno`,`Son iónicos`,`Son apolares`,`No forman puentes de hidrógeno`],e:`El O del C=O de uno con el H del −OH del otro.`},
{src:`Tema 31, pág. 5`,q:`Según el material, son completamente solubles en agua los ácidos de:`,o:[`1 a 4 carbonos`,`10 o más carbonos`,`Solo 1 carbono`,`Ninguno`],e:`Desde 5 C la solubilidad baja mucho.`},
{src:`Tema 31, pág. 5`,q:`La solubilidad baja en los ácidos de cadena larga porque:`,o:[`La cadena hidrocarbonada apolar supera el efecto polar del carboxilo`,`Pierden el grupo −COOH`,`Se vuelven iónicos`,`Se evaporan`],e:`La cadena es lipofílica.`},
{src:`Tema 31, pág. 5`,q:`Los ácidos carboxílicos de más de 10 carbonos, como el palmítico, son:`,o:[`Sólidos cerosos e inodoros`,`Gases incoloros`,`Líquidos de olor punzante`,`Líquidos más densos que el agua`],e:`De 1 a 9 C son líquidos.`},
{src:`Tema 31, pág. 5`,q:`Los ácidos de 4 a 8 carbonos (como el butírico) se caracterizan por:`,o:[`Olores desagradables, a mantequilla rancia, sudor o queso`,`Olor a flores`,`No tener olor`,`Olor a almendras`],e:`Los pequeños (fórmico, acético) son punzantes.`},
{src:`Tema 31, pág. 5`,q:`La densidad del ácido fórmico es de aproximadamente:`,o:[`1.22 g/cm³ (más denso que el agua)`,`0.5 g/cm³`,`2.5 g/cm³`,`0.8 g/cm³`],e:`La densidad baja al alargarse la cadena.`},
{src:`Tema 31, pág. 6`,q:`Las reacciones de sustitución de los ácidos carboxílicos se llaman formalmente:`,o:[`Sustitución nucleofílica de acilo`,`Adición electrofílica`,`Eliminación de Hofmann`,`Sustitución electrofílica aromática`],e:`Un nucleófilo reemplaza al −OH.`},
{src:`Tema 31, pág. 6`,q:`El mecanismo de la sustitución nucleofílica de acilo es de:`,o:[`Adición-eliminación`,`Eliminación-adición`,`Solo adición`,`Radicales libres`],e:`Primero se forma el intermediario tetraédrico.`},
{src:`Tema 31, pág. 6`,q:`En el intermediario tetraédrico, el carbono queda con hibridación:`,o:[`sp³`,`sp²`,`sp`,`dsp³`],e:`Se rompió el doble enlace C=O.`},
{src:`Tema 31, pág. 6`,q:`En la eliminación, el grupo saliente suele ser:`,o:[`El −OH transformado (sale como agua)`,`El grupo R`,`El oxígeno del carbonilo`,`El nucleófilo`],e:`Luego se vuelve a formar el C=O.`},
{src:`Tema 31, pág. 7`,q:`La propiedad química más representativa de los ácidos carboxílicos es:`,o:[`Su acidez`,`Su reducción`,`Su combustión`,`Su color`],e:`Ceden H⁺ al agua.`},
{src:`Tema 31, pág. 7`,q:`Al disolverse en agua, un ácido carboxílico:`,o:[`Cede un H⁺ en un equilibrio: R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺`,`Acepta un H⁺`,`Se disocia por completo de forma irreversible`,`No reacciona`],e:`Son ácidos débiles.`},
{src:`Tema 31, pág. 7`,q:`En el anión carboxilato, los dos enlaces C−O:`,o:[`Tienen la misma longitud, intermedia entre simple y doble`,`Uno es simple y otro doble, siempre`,`Son triples`,`No existen`],e:`Equivalencia por resonancia.`},
{src:`Tema 31, pág. 7`,q:`R−COOH + NaOH forma:`,o:[`R−COO⁻Na⁺ + H₂O (sal soluble)`,`R−CH₂OH + NaO`,`R−CHO + NaOH`,`R−COONa + H₂ (gas)`],e:`Neutralización con una base fuerte.`},
{src:`Tema 31, pág. 8`,q:`El nombre IUPAC de CH₃−COOH es:`,o:[`Ácido etanoico`,`Ácido metanoico`,`Ácido etanodioico`,`Etanal`],e:`2 C contando el del COOH.`},
{src:`Tema 31, pág. 8`,q:`En la nomenclatura de los ácidos carboxílicos, el carbono del −COOH es:`,o:[`Siempre el C-1, y no se escribe su número`,`El último carbono`,`Se numera según la cadena`,`No forma parte de la cadena`],e:`Ácido + alcano(−o) + oico.`},
{src:`Tema 31, pág. 8`,q:`CH₃−CH₂−CH₂−COOH se llama:`,o:[`Ácido butanoico`,`Ácido propanoico`,`Ácido butanodioico`,`Butanal`],e:`4 C.`},
{src:`Tema 31, pág. 9`,q:`El ácido fórmico debe su nombre a:`,o:[`La hormiga (latín formica)`,`El vinagre`,`La mantequilla`,`La palma`],e:`Las hormigas lo usan en su picadura.`},
{src:`Tema 31, pág. 9`,q:`El nombre común del ácido etanoico es:`,o:[`Ácido acético`,`Ácido fórmico`,`Ácido butírico`,`Ácido oxálico`],e:`Del latín acetum, vinagre.`},
{src:`Tema 31, pág. 9`,q:`El ácido butírico (butanoico) debe su nombre a:`,o:[`La mantequilla (butyrum)`,`La valeriana`,`El vinagre`,`La hormiga`],e:`Olor a mantequilla rancia.`},
{src:`Tema 31, pág. 9`,q:`El ácido palmítico es el ácido:`,o:[`Hexadecanoico (16 C)`,`Pentanoico (5 C)`,`Butanoico (4 C)`,`Etanoico (2 C)`],e:`Del aceite de palma.`},
{src:`Tema 31, pág. 10`,q:`Un ácido con dos grupos −COOH en los extremos usa la terminación:`,o:[`-dioico`,`-oico`,`-dial`,`-diona`],e:`Y se mantiene el nombre completo del alcano.`},
{src:`Tema 31, pág. 10`,q:`HOOC−COOH (ácido etanodioico) se conoce como:`,o:[`Ácido oxálico`,`Ácido malónico`,`Ácido acético`,`Ácido adípico`],e:`2 C.`},
{src:`Tema 31, pág. 10`,q:`El ácido succínico es el ácido:`,o:[`Butanodioico`,`Propanodioico`,`Hexanodioico`,`Etanodioico`],e:`HOOC−(CH₂)₂−COOH.`},
{src:`Tema 31, pág. 11`,q:`Un −COOH unido directamente a un anillo se nombra con el sufijo:`,o:[`-carboxílico`,`-oico`,`-carbaldehído`,`-ona`],e:`Ej.: ácido ciclohexanocarboxílico.`},
{src:`Tema 31, pág. 11`,q:`El nombre común del ácido bencenocarboxílico es:`,o:[`Ácido benzoico`,`Ácido fórmico`,`Fenol`,`Benzaldehído`],e:`C₆H₅−COOH.`},
{src:`Tema 31, pág. 12`,q:`¿Cuál de estos medicamentos es un ácido carboxílico, según el material?`,o:[`Ácido acetilsalicílico`,`Paracetamol`,`Formaldehído`,`Acetona`],e:`También ibuprofeno, valproico y clavulánico.`},
{src:`Tema 31, pág. 12`,q:`El ácido araquidónico y el omega-3 son ejemplos de:`,o:[`Ácidos grasos poliinsaturados`,`Ácidos dicarboxílicos`,`Cuerpos cetónicos`,`Aldosas`],e:`Cadenas largas con varios dobles enlaces.`}
  ],

  ABIERTAS:[
{src:`Tema 31, pág. 3–4`,q:`Describa la estructura del grupo carboxilo: componentes, hibridación, geometría y polaridad.`,a:`El carboxilo (−COOH) une en el mismo carbono un carbonilo (C=O) y un hidroxilo (−OH). Fórmula general R−COOH (en el fórmico, R = H). El C es sp², con geometría trigonal plana y ángulos de unos 120°; el C=O (1.23 Å) es más corto que el C−O (1.36 Å). Los enlaces C=O y O−H son muy polares por la electronegatividad del O, por eso forman puentes de hidrógeno (dímeros).`},
{src:`Tema 31, pág. 5`,q:`Explique las propiedades físicas de los ácidos carboxílicos en relación con su estructura: ebullición, solubilidad, estado, olor y densidad.`,a:`Ebullición y fusión altas porque forman dímeros cíclicos con dos puentes de hidrógeno. Solubilidad: 1 a 4 C miscibles en agua (puentes de H con el agua); desde 5 C baja mucho porque la cadena apolar domina. Estado: 1 a 9 C líquidos incoloros; más de 10 C sólidos cerosos (palmítico, esteárico). Olor: los pequeños, punzantes; los de 4 a 8 C, desagradables (mantequilla rancia, sudor, queso). Densidad: los pequeños, algo más densos que el agua (fórmico 1.22 g/cm³); disminuye con la cadena hasta ser menor que la del agua.`},
{src:`Tema 31, pág. 4 y 7`,q:`¿Por qué los ácidos carboxílicos son ácidos? Escriba la ecuación de disociación y la reacción con NaOH.`,a:`Ceden el H del −OH al agua: R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺. El anión carboxilato es estable porque la carga negativa se reparte por resonancia entre los dos oxígenos; las dos estructuras tienen la misma energía y los dos enlaces C−O quedan con longitud intermedia. Por eso son más ácidos que los alcoholes. Con bases fuertes reaccionan por completo: R−COOH + NaOH → R−COO⁻Na⁺ + H₂O, una sal soluble en agua.`},
{src:`Tema 31, pág. 6`,q:`Explique el mecanismo de sustitución nucleofílica de acilo y sus pasos.`,a:`Un nucleófilo reemplaza al −OH del carbono carbonílico mediante adición-eliminación. Adición: el nucleófilo ataca al C δ⁺ del carbonilo, se rompe el C=O y se forma un intermediario tetraédrico (sp³). Eliminación: se vuelve a formar el C=O y sale un grupo saliente (el −OH transformado, como agua). En el ejemplo de la pág. 6: 1) protonación del O del carbonilo, 2) ataque del alcohol, 3) transferencia de protón, 4) eliminación de agua; el producto es un éster (esterificación de Fischer, complementario [5]).`},
{src:`Tema 31, pág. 8–11`,q:`Explique cómo se nombran los ácidos monocarboxílicos, dicarboxílicos y cíclicos o aromáticos, con un ejemplo y su nombre común.`,a:`Monocarboxílicos: "ácido" + nombre del alcano cambiando -o por -oico; el C del COOH es el 1 (ácido etanoico = acético). Dicarboxílicos: "ácido" + nombre completo del alcano + -dioico (ácido butanodioico = succínico). Cíclicos y aromáticos: el C del COOH no puede numerarse dentro del anillo; se usa "ácido" + ciclo + -carboxílico y el C del anillo unido al COOH es el 1 (ácido ciclohexanocarboxílico; ácido bencenocarboxílico = benzoico).`}
  ],

  EJ:[
{src:`Tema 31, pág. 8–9`,q:`Dé el nombre IUPAC y el común de: a) HCOOH; b) CH₃−CH₂−COOH; c) CH₃−(CH₂)₃−COOH; d) CH₃−(CH₂)₁₄−COOH.`,
 pide:`Contar carbonos (incluido el del COOH) y aplicar ácido + -oico.`,datos:[`El C del COOH cuenta y es el C1`],f:`ácido + alcano(−o) + oico`,
 pasos:[`a) 1 C → ácido metanoico (fórmico).`,`b) 3 C → ácido propanoico (propiónico).`,`c) 1 + 3 + 1 = 5 C → ácido pentanoico (valérico).`,`d) 1 + 14 + 1 = 16 C → ácido hexadecanoico (palmítico).`],r:`metanoico (fórmico); propanoico (propiónico); pentanoico (valérico); hexadecanoico (palmítico)`},
{src:`Tema 31, pág. 10`,q:`Nombre: a) HOOC−CH₂−COOH; b) HOOC−(CH₂)₄−COOH. Escriba la fórmula del ácido butanodioico.`,
 pide:`Aplicar -dioico conservando el nombre completo del alcano.`,datos:[`Se cuentan los dos C de los COOH`],f:`ácido + alcano + dioico`,
 pasos:[`a) 1 + 1 + 1 = 3 C → ácido propanodioico (malónico).`,`b) 1 + 4 + 1 = 6 C → ácido hexanodioico (adípico).`,`Butanodioico = 4 C con dos COOH: HOOC−CH₂−CH₂−COOH (succínico).`],r:`propanodioico (malónico); hexanodioico (adípico); HOOC−(CH₂)₂−COOH`},
{src:`Tema 31, pág. 7`,q:`Escriba: a) la disociación del ácido propanoico en agua; b) su reacción con NaOH; c) la reacción del ácido acético con KOH.`,
 pide:`Aplicar R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺ y la neutralización.`,datos:[`R = CH₃CH₂− (propanoico)`,`R = CH₃− (acético)`],f:`R−COOH + MOH → R−COO⁻M⁺ + H₂O`,
 pasos:[`a) CH₃CH₂COOH + H₂O ⇌ CH₃CH₂COO⁻ + H₃O⁺ (equilibrio: ácido débil).`,`b) CH₃CH₂COOH + NaOH → CH₃CH₂COO⁻Na⁺ + H₂O.`,`c) CH₃COOH + KOH → CH₃COO⁻K⁺ + H₂O.`,`Complementario [5]: las sales se nombran cambiando -ico por -ato: propanoato de sodio, acetato (etanoato) de potasio.`],r:`Ver pasos; las sales son solubles en agua`},
{src:`Tema 31, pág. 6 (complementario [5])`,q:`El ácido acético reacciona con metanol en medio ácido (esterificación de Fischer). Identifique el nucleófilo, el intermediario, el grupo saliente y los productos.`,
 pide:`Aplicar adición-eliminación.`,datos:[`CH₃COOH + CH₃OH (H⁺)`],f:`R−COOH + R'OH ⇌ R−COOR' + H₂O`,
 pasos:[`1) El H⁺ protona el O del carbonilo (el C queda más δ⁺).`,`2) Nucleófilo: el O del metanol ataca al C → intermediario tetraédrico (C sp³).`,`3) Transferencia de protón: el −OH se convierte en −OH₂⁺.`,`4) Eliminación: sale agua (grupo saliente) y se vuelve a formar el C=O.`,`Productos: CH₃−COO−CH₃ (acetato de metilo, un éster) + H₂O.`],r:`Nu = metanol; intermediario tetraédrico; sale H₂O; acetato de metilo + agua`},
{src:`Tema 31, pág. 5 (complementario [5])`,q:`El ácido acético (60 g/mol) hierve a 118 °C y el propan-1-ol (60 g/mol) a 97 °C. Explique la diferencia.`,
 pide:`Comparar puentes de hidrógeno.`,datos:[`Misma masa molar`],f:`—`,
 pasos:[`Los dos forman puentes de hidrógeno.`,`El ácido tiene C=O y O−H: dos moléculas se unen en un dímero cíclico con dos puentes de H.`,`Separar los dímeros requiere más energía que separar las moléculas del alcohol.`,`Por eso el ácido hierve 21 °C más alto.`],r:`El ácido forma dímeros con dos puentes de H`}
  ],

  FORM:[
{src:`Tema 31, pág. 3–12`,title:`Ácidos carboxílicos`,rows:[
 [`Fórmula`,`R−COOH (−CO₂H) · carboxilo = carbonilo + hidroxilo · fórmico H−COOH`],
 [`Estructura`,`C sp² · trigonal plano · 120° · C=O 1.23 Å · C−O 1.36 Å · muy polar`],
 [`Físicas`,`Dímeros (2 puentes de H) → ebullición alta · solubles 1–4 C · líquidos 1–9 C · sólidos ≥10 C · fórmico 1.22 g/cm³`],
 [`Olor`,`Fórmico/acético punzantes · 4–8 C rancios (mantequilla, sudor, queso)`],
 [`Sustitución de acilo`,`Adición (intermediario tetraédrico sp³) + eliminación (sale −OH como agua) · ácido + alcohol → éster + H₂O`],
 [`Acidez`,`R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺ · resonancia del carboxilato · + NaOH → R−COO⁻Na⁺ + H₂O`],
 [`Nombres`,`ácido + alcano(−o) + oico · C del COOH = 1 · dos COOH: -dioico · anillo: -carboxílico`],
 [`Comunes`,`fórmico 1 · acético 2 · propiónico 3 · butírico 4 · valérico 5 · palmítico 16 · oxálico · malónico · succínico · adípico · benzoico`],
 [`Medicina`,`Ibuprofeno · aspirina · valproico · clavulánico · omega-3 · araquidónico · metabolitos`]]}
  ],

  FICHAS:[
{src:`Tema 31, pág. 3`,fig:`carboxilo`,f:`¿Qué es el grupo carboxilo?`,b:`−COOH = carbonilo (C=O) + hidroxilo (−OH) en el mismo carbono. R−COOH.`},
{src:`Tema 31, pág. 4`,fig:`geometriaCarboxilo`,f:`Hibridación y geometría del carbono carboxílico.`,b:`sp², trigonal plano, unos 120°. C=O 1.23 Å, C−O 1.36 Å.`},
{src:`Tema 31, pág. 5`,fig:`dimero`,f:`¿Por qué hierven tan alto?`,b:`Forman dímeros cíclicos con dos puentes de hidrógeno.`},
{src:`Tema 31, pág. 5`,fig:`escalaAcidos`,f:`Solubilidad y estado según el número de carbonos.`,b:`Solubles 1–4 C (desde 5 C baja mucho). Líquidos 1–9 C; sólidos cerosos con más de 10 C.`},
{src:`Tema 31, pág. 5`,fig:null,f:`Olor de los ácidos carboxílicos.`,b:`Fórmico y acético: punzantes. 4 a 8 C (butírico, caproico): mantequilla rancia, sudor, queso. Largos: inodoros.`},
{src:`Tema 31, pág. 6`,fig:`fischer`,f:`Sustitución nucleofílica de acilo: dos etapas.`,b:`Adición (Nu ataca al C → intermediario tetraédrico sp³) y eliminación (vuelve el C=O, sale el −OH como agua).`},
{src:`Tema 31, pág. 7`,fig:`carboxilato`,f:`Disociación de un ácido carboxílico en agua.`,b:`R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺ (equilibrio, ácido débil).`},
{src:`Tema 31, pág. 7`,fig:`carboxilato`,f:`¿Por qué el carboxilato es estable?`,b:`Resonancia: la carga negativa se reparte por igual en los dos O; los dos C−O tienen la misma longitud.`},
{src:`Tema 31, pág. 7`,fig:null,f:`Ácido carboxílico + NaOH.`,b:`R−COOH + NaOH → R−COO⁻Na⁺ + H₂O. Sal soluble en agua.`},
{src:`Tema 31, pág. 8`,fig:`nomAcido`,f:`Regla IUPAC de los ácidos monocarboxílicos.`,b:`"ácido" + alcano(−o) + "-oico". El C del COOH es el 1 y se cuenta. Ej.: ácido butanoico.`},
{src:`Tema 31, pág. 9`,fig:null,f:`Nombres comunes de C1 a C5 y C16.`,b:`Fórmico (hormiga) · acético (vinagre) · propiónico · butírico (mantequilla) · valérico (valeriana) · palmítico (palma).`},
{src:`Tema 31, pág. 10`,fig:`dicarboxilicos`,f:`Ácidos dicarboxílicos de 2, 3, 4 y 6 C.`,b:`Oxálico (etanodioico) · malónico (propanodioico) · succínico (butanodioico) · adípico (hexanodioico).`},
{src:`Tema 31, pág. 11`,fig:`ciclicosAcido`,f:`COOH unido a un anillo.`,b:`"ácido" + ciclo + "-carboxílico": ciclohexanocarboxílico; bencenocarboxílico = benzoico.`},
{src:`Tema 31, pág. 12`,fig:`medicinaAcidos`,f:`Ácidos carboxílicos en medicina.`,b:`Ibuprofeno, aspirina, valproico, clavulánico · omega-3 y araquidónico · metabolitos.`}
  ],

  FQ:[
{src:`Tema 31, pág. 8`,q:`"Nombra CH₃−CH₂−CH₂−CH₂−COOH." ¿Qué haces primero?`,o:[`Cuento los C incluyendo el del COOH (5)`,`Cuento solo los CH₂`,`Uso el sufijo -al`,`Lo numero desde el CH₃`],e:`Ácido pentanoico (valérico).`},
{src:`Tema 31, pág. 10`,q:`"Nombra HOOC−CH₂−CH₂−COOH." ¿Qué terminación usas?`,o:[`-dioico, con el nombre completo del alcano`,`-oico`,`-diona`,`-carboxílico`],e:`Ácido butanodioico (succínico).`},
{src:`Tema 31, pág. 7`,q:`"¿Por qué el ácido acético es más ácido que el etanol?"`,o:[`Por la resonancia del carboxilato (carga en dos O)`,`Porque tiene más H`,`Porque es más pesado`,`Porque no tiene oxígeno`],e:`El etóxido no tiene resonancia.`},
{src:`Tema 31, pág. 5`,q:`"¿El ácido palmítico es soluble en agua?"`,o:[`No: 16 C, la cadena apolar domina (sólido ceroso)`,`Sí, como todos los ácidos`,`Solo en caliente, igual que el acético`,`Sí, porque tiene −COOH`],e:`Solo los de 1 a 4 C son miscibles.`}
  ],

  VIDEOS:[
{sub:`Introducción (Khan Academy)`,src:`Tema 31, pág. 3–5`,id:`wU0A9Rt4TF0`,title:`Introducción a ácidos carboxílicos`,ch:`Khan Academy Español`,rep:[`El grupo carboxilo`,`Geometría, polaridad y resonancia del carboxilo`]},
{sub:`Nomenclatura y formulación`,src:`Tema 31, pág. 8–11`,id:`qteGkNCKdaA`,title:`Ácidos carboxílicos: nomenclatura y formulación`,ch:`Arriba la Ciencia`,rep:[`Nomenclatura IUPAC de ácidos monocarboxílicos`,`Ácidos dicarboxílicos`]},
{sub:`Nomenclatura paso a paso`,src:`Tema 31, pág. 8–11`,id:`KTmgS0bjgfo`,title:`¿Cómo nombrar ácidos carboxílicos? Nomenclatura IUPAC paso a paso`,ch:`Quimimática`,rep:[`Nomenclatura IUPAC de ácidos monocarboxílicos`,`Ácidos cíclicos y aromáticos`]},
{sub:`Propiedades físicas`,src:`Tema 31, pág. 5`,id:`bxA2H68kVwI`,title:`Propiedades físicas de los ácidos carboxílicos`,ch:`Ernesto Brunet-Romero`,rep:[`Propiedades físicas: ebullición y solubilidad`,`Propiedades físicas: estado, olor y densidad`]},
{sub:`Acidez`,src:`Tema 31, pág. 7`,id:`iZPBAmLuyIo`,title:`Acidez de los ácidos carboxílicos`,ch:`Universitat Politècnica de València`,rep:[`Reacciones de acidez`]},
{sub:`Sustitución nucleofílica acílica`,src:`Tema 31, pág. 6`,id:`2I9wu_99KJw`,title:`Sustitución nucleofílica acílica`,ch:`Khan Academy Español`,rep:[`Sustitución nucleofílica de acilo`]},
{sub:`Esterificación de Fischer`,src:`Tema 31, pág. 6`,id:`CIE-EHg5N28`,title:`Esterificación de Fischer`,ch:`Khan Academy Español`,rep:[`Sustitución nucleofílica de acilo`]}
  ],

  GENS:[
 {id:`nomAcidoC`,t:`t31`,src:`Tema 31, pág. 8 y 10`,name:`Nombrar ácidos carboxílicos (IUPAC)`,make(){
   const R = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`,`hept`,`oct`,`non`,`dec`];
   const di = Math.random() < .3; const n = di ? pick([2,3,4,5,6]) : between(1, 10); const k = n - (di ? 2 : 1) - (di ? 0 : 1);
   let shown;
   if (di) shown = n === 2 ? `HOOC−COOH` : n === 3 ? `HOOC−CH₂−COOH` : `HOOC−(CH₂)${SUBN(n - 2)}−COOH`;
   else shown = n === 1 ? `HCOOH` : n === 2 ? `CH₃−COOH` : n === 3 ? `CH₃−CH₂−COOH` : `CH₃−(CH₂)${SUBN(n - 2)}−COOH`;
   const name = di ? `ácido ${R[n]}anodioico` : `ácido ${R[n]}anoico`;
   const alts = di ? [`ácido ${R[n]}anoico`, `ácido ${R[n - 1] || `met`}anodioico`, `${R[n]}anodial`] : [n > 1 ? `ácido ${R[n - 1]}anoico` : `ácido etanoico`, `ácido ${R[n + 1] || `undec`}anoico`, `${R[n]}anal`, n >= 2 ? `ácido ${R[n]}anodioico` : `metanol`];
   const opts = shuf([name].concat([...new Set(alts.filter(x => x !== name))].slice(0, 3)));
   const pasos = di ? [`Hay un −COOH en cada extremo: es dicarboxílico.`, `Cuenta todos los C, incluidos los dos de los COOH: ${n}.`, `Ácido + nombre completo del alcano (${R[n]}ano) + -dioico: ${name}.`]
     : [`Un solo −COOH: es monocarboxílico.`, `Cuenta los C incluido el del COOH (es el C1): ${n}.`, `Ácido + ${R[n]}ano sin la -o + -oico: ${name}.`];
   return { q:`Elige el nombre IUPAC de: ${shown}`, opts, correct: opts.indexOf(name), pasos, r: name }; }},
 {id:`comunAcido`,t:`t31`,src:`Tema 31, pág. 9–11`,name:`Nombre común ↔ IUPAC de ácidos`,make(){
   const L = [[`ácido metanoico`,`ácido fórmico`],[`ácido etanoico`,`ácido acético`],[`ácido propanoico`,`ácido propiónico`],[`ácido butanoico`,`ácido butírico`],[`ácido pentanoico`,`ácido valérico`],[`ácido hexadecanoico`,`ácido palmítico`],[`ácido etanodioico`,`ácido oxálico`],[`ácido propanodioico`,`ácido malónico`],[`ácido butanodioico`,`ácido succínico`],[`ácido hexanodioico`,`ácido adípico`],[`ácido bencenocarboxílico`,`ácido benzoico`]];
   const d = pick(L); const inv = Math.random() < .5; const ask = inv ? d[1] : d[0], ans = inv ? d[0] : d[1];
   const opts = shuf([ans].concat(shuf(L.filter(x => x !== d)).slice(0, 3).map(x => inv ? x[0] : x[1])));
   return { q:`¿Cuál es el nombre ${inv ? `IUPAC` : `común`} del ${ask}?`, opts, correct: opts.indexOf(ans),
     pasos:[`Relación: ${d[0]} = ${d[1]}.`, `Pistas: fórmico = hormiga · acético = vinagre · butírico = mantequilla · valérico = valeriana · palmítico = palma.`, `Dicarboxílicos: oxálico 2 · malónico 3 · succínico 4 · adípico 6.`], r: ans }; }},
 {id:`propAcido`,t:`t31`,src:`Tema 31, pág. 5`,name:`Estado y solubilidad según los carbonos`,make(){
   const L = [[1,`fórmico`],[2,`acético`],[3,`propiónico`],[4,`butírico`],[6,`hexanoico (caproico)`],[7,`heptanoico`],[8,`octanoico`],[9,`nonanoico`],[12,`dodecanoico (láurico)`],[14,`tetradecanoico (mirístico)`],[16,`palmítico`],[18,`esteárico`]];
   const [n, nm] = pick(L); const opts = [`Líquido y soluble en agua`,`Líquido y poco soluble en agua`,`Sólido ceroso e insoluble en agua`];
   const c = n <= 4 ? 0 : n <= 9 ? 1 : 2;
   return { q:`El ácido ${nm} tiene ${n} carbono${n > 1 ? `s` : ``}. A temperatura ambiente es:`, opts, correct: c,
     pasos:[`Estado: de 1 a 9 C líquidos; más de 10 C sólidos cerosos.`, `Solubilidad: de 1 a 4 C miscibles; desde 5 C baja mucho (domina la cadena apolar).`, `Con ${n} C: ${opts[c].toLowerCase()}.`], r: opts[c] }; }}
  ],

  GUIA:[
 { h:`Tema 31 (ácidos carboxílicos): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Se apoya en el Tema 30: el carboxilo es un <b>carbonilo + hidroxilo</b>. Lo más evaluable: <b>nombrar</b> (-oico, -dioico, -carboxílico y los nombres comunes), <b>explicar la acidez</b> (resonancia del carboxilato) y las <b>propiedades físicas</b> según el número de carbonos.</p>
   <ol><li>Repaso del Tema 31 con sus dibujos. Lee los recuadros: la última diapositiva está cortada y el dibujo de la acidez tiene un error.</li>
   <li>En <b>Práctica</b>: "Nombrar ácidos carboxílicos", "Nombre común ↔ IUPAC" y "Estado y solubilidad según los carbonos", hasta acertar <b>10 seguidos</b>.</li>
   <li>Escribe de memoria: R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺ y R−COOH + NaOH → R−COO⁻Na⁺ + H₂O.</li>
   <li>Compara con el Tema 30: en aldehídos y cetonas el nucleófilo <b>se suma</b> (adición); en los ácidos <b>reemplaza al −OH</b> (sustitución de acilo).</li></ol>` }
  ],

  SYN:{ vinagre:[`acetico`,`etanoico`], acetico:[`etanoico`,`vinagre`], formico:[`metanoico`,`hormiga`], carboxilato:[`acidez`,`resonancia`], aspirina:[`acetilsalicilico`], esterificacion:[`fischer`,`ester`], dimero:[`puente`], omega:[`grasos`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah31" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah31)"/>`;
    const dbl = (x1, y1, x2, y2, d = 4) => { const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L * d, ny = (x2 - x1) / L * d; return ln((x1 + nx).toFixed(1), (y1 + ny).toFixed(1), (x2 + nx).toFixed(1), (y2 + ny).toFixed(1)) + ln((x1 - nx).toFixed(1), (y1 - ny).toFixed(1), (x2 - nx).toFixed(1), (y2 - ny).toFixed(1)); };
    const C = `var(--t31)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;
    /* carboxilo: C en (cx,cy); O doble arriba-derecha; OH abajo-derecha; R a la izquierda */
    const cooh = (cx, cy, R = `R`, o = {}) => { let s = T(cx, cy + 6, `C`, { fs:18 }) + ln(cx - 12, cy, cx - 44, cy) + T(cx - 50, cy + 6, R, { a:`end`, fs:o.fs || 17 });
      s += dbl(cx + 8, cy - 10, cx + 34, cy - 40) + T(cx + 42, cy - 44, `O`, { fs:17 }) + ln(cx + 8, cy + 10, cx + 34, cy + 40) + T(cx + 42, cy + 54, o.minus ? `O⁻` : `OH`, { fs:17 });
      return s; };

    F.carboxilo = { src:`Tema 31, pág. 3`, cap:`El carboxilo junta en el mismo carbono un carbonilo (C=O) y un hidroxilo (−OH). En el ácido fórmico el grupo R es un simple hidrógeno.`,
      svg: (() => { let s = ``;
        s += `<rect x="114" y="30" width="80" height="50" rx="8" style="fill:none;stroke:${C};stroke-width:2;stroke-dasharray:6 4"/>` + T(154, 22, `carbonilo C=O`, { c:`tb`, fs:12 });
        s += `<rect x="114" y="112" width="80" height="58" rx="8" style="fill:none;stroke:${C};stroke-width:2;stroke-dasharray:6 4"/>` + T(154, 188, `hidroxilo −OH`, { c:`tb`, fs:12 });
        s += cooh(120, 96);
        s += T(330, 60, `R−COOH`, { fs:22 }) + T(330, 84, `(o R−CO₂H)`, { c:`tm` });
        s += box(260, 108, 140, 70) + T(330, 132, `ácido fórmico`, { c:`tb` }) + T(330, 158, `H−COOH (R = H)`, { fs:15 });
        s += T(490, 70, `R =`, { c:`tm` }) + T(490, 90, `cadena`, { c:`tm` }) + T(490, 106, `o anillo`, { c:`tm` });
        return svg(560, 200, s, `Grupo carboxilo`); })() };

    F.geometriaCarboxilo = { src:`Tema 31, pág. 4`, cap:`El carbono carboxílico es sp² y plano, con ángulos de unos 120°. El doble enlace C=O (1.23 Å) es más corto que el sencillo C−O (1.36 Å). Los enlaces C=O y O−H son muy polares.`,
      svg: (() => { let s = ``;
        s += cooh(170, 110);
        s += T(222, 72, `1.23 Å`, { a:`start`, c:`tb`, fs:13 }) + T(222, 150, `1.36 Å`, { a:`start`, c:`tb`, fs:13 });
        s += `<path d="M196 92 A30 30 0 0 1 196 128" class="dash"/>` + T(232, 114, `120°`, { a:`start`, c:`tm` });
        s += T(196, 54, `δ⁻`, { c:`tm` }) + T(160, 92, `δ⁺`, { c:`tm` });
        s += box(320, 30, 230, 160) + T(435, 56, `Carbono carboxílico`, { c:`tb` }) + T(435, 80, `hibridación sp²`, { c:`tm` }) + T(435, 100, `trigonal plano · 120°`, { c:`tm` }) + T(435, 128, `C=O y O−H muy polares`, { c:`tm` }) + T(435, 148, `→ puentes de hidrógeno`, { c:`tm` }) + T(435, 172, `(dímeros)`, { c:`tm` });
        return svg(560, 210, s, `Geometría del grupo carboxilo`); })() };

    F.dimero = { src:`Tema 31, pág. 5`, cap:`Dos moléculas de ácido acético se unen por dos puentes de hidrógeno y forman un anillo (dímero cíclico). Separarlas cuesta mucha energía: por eso hierven alto.`,
      svg: (() => { let s = ``;
        s += T(60, 106, `H₃C`, { a:`end`, fs:16 }) + ln(64, 100, 96, 100) + T(104, 106, `C`, { fs:17 }) + dbl(110, 92, 136, 62) + T(146, 58, `O`, { fs:16 }) + ln(110, 112, 136, 142) + T(146, 156, `O−H`, { a:`start`, fs:16 });
        s += `<line x1="184" y1="150" x2="248" y2="150" style="stroke:${C};stroke-width:2.5;stroke-dasharray:4 4"/>` + `<line x1="160" y1="54" x2="250" y2="54" style="stroke:${C};stroke-width:2.5;stroke-dasharray:4 4"/>`;
        s += T(254, 58, `H−O`, { a:`start`, fs:16 }) + ln(290, 62, 314, 92) + T(320, 106, `C`, { fs:17 }) + dbl(314, 112, 290, 142) + T(266, 156, `O`, { a:`start`, fs:16 }) + ln(330, 100, 362, 100) + T(366, 106, `CH₃`, { a:`start`, fs:16 });
        s += T(214, 40, `puente de H`, { c:`tb`, fs:11.5 }) + T(214, 176, `puente de H`, { c:`tb`, fs:11.5 });
        s += box(430, 40, 120, 120) + T(490, 66, `dímero cíclico`, { c:`tb`, fs:12.5 }) + T(490, 90, `2 puentes de H`, { c:`tm`, fs:11.5 }) + T(490, 112, `ácido acético`, { c:`tm`, fs:11.5 }) + T(490, 128, `hierve a 118 °C`, { c:`tm`, fs:11.5 }) + T(490, 144, `(etanol 78 °C)`, { c:`tm`, fs:11 });
        return svg(560, 196, s, `Dímero cíclico de ácido acético`); })() };

    F.escalaAcidos = { src:`Tema 31, pág. 5`, cap:`Al alargarse la cadena, el ácido pasa de líquido soluble a líquido poco soluble y, con más de 10 carbonos, a sólido ceroso. Los de 4 a 8 carbonos son los de olor rancio.`,
      svg: (() => { let s = ``; const x0 = 30, w = 28;
        for (let n = 1; n <= 18; n++){ const x = x0 + (n - 1) * w; s += `<rect x="${x}" y="70" width="${w - 3}" height="34" rx="4" style="fill:${n <= 4 ? C : n <= 9 ? `var(--line2)` : `var(--sunk)`};stroke:var(--line2)"/>` + T(x + (w - 3) / 2, 92, n, { c:n <= 4 ? `tw` : `tm`, fs:11 }); }
        s += T(280, 52, `número de carbonos`, { c:`tm` });
        s += ln(x0, 120, x0 + 4 * w - 3, 120) + T(x0 + 2 * w, 138, `solubles`, { c:`tb`, fs:12 });
        s += ln(x0 + 4 * w, 120, x0 + 9 * w - 3, 120) + T(x0 + 6.5 * w, 138, `poco solubles`, { c:`tb`, fs:12 });
        s += ln(x0 + 9 * w, 120, x0 + 18 * w - 3, 120, `dash`) + T(x0 + 13.5 * w, 138, `insolubles`, { c:`tb`, fs:12 });
        s += T(x0 + 4.5 * w, 168, `líquidos incoloros (1–9 C)`, { c:`tm` }) + T(x0 + 14 * w, 168, `sólidos cerosos (≥10 C)`, { c:`tm` });
        s += `<rect x="${x0 + 3 * w}" y="180" width="${5 * w - 3}" height="22" rx="6" style="fill:${C};opacity:.16"/>` + T(x0 + 5.5 * w, 196, `4–8 C: olor rancio`, { c:`tb`, fs:11.5 });
        s += T(x0 + 14 * w, 196, `palmítico 16 · esteárico 18`, { c:`tm`, fs:11.5 });
        return svg(560, 214, s, `Propiedades de los ácidos según el número de carbonos`); })() };

    F.fischer = { src:`Tema 31, pág. 6`, cap:`Adición-eliminación: el alcohol (nucleófilo) ataca al carbono del carbonilo y se forma un intermediario tetraédrico; luego vuelve el C=O y sale agua. El producto es un éster.`,
      svg: (() => { let s = ``;
        const step = (x, n, t1, t2, f) => box(x, 30, 124, 108) + `<circle cx="${x + 18}" cy="48" r="11" style="fill:${C}"/>` + T(x + 18, 52, n, { c:`tw`, fs:12 }) + T(x + 70, 52, t1, { c:`tb`, fs:12 }) + T(x + 62, 68, t2, { c:`tm`, fs:11 }) + T(x + 62, 108, f, { fs:13.5 });
        s += step(8, 1, `Protonación`, `H⁺ se une al O`, `R−C(=OH⁺)−OH`);
        s += step(146, 2, `Ataque Nu`, `entra el alcohol`, `C sp³ tetraédrico`);
        s += step(284, 3, `Transf. de H⁺`, `−OH → −OH₂⁺`, `C(OH)(OH₂⁺)(OR')`);
        s += step(422, 4, `Eliminación`, `sale agua`, `R−COOR' + H₂O`);
        [134, 272, 410].forEach(x => s += arrow(x, 84, x + 10));
        s += `<rect x="146" y="148" width="124" height="22" rx="6" style="fill:${C};opacity:.16"/>` + T(208, 164, `ADICIÓN`, { c:`tb`, fs:12 });
        s += `<rect x="422" y="148" width="124" height="22" rx="6" style="fill:${C};opacity:.16"/>` + T(484, 164, `ELIMINACIÓN`, { c:`tb`, fs:12 });
        s += T(280, 200, `R−COOH + R'−OH ⇌ R−COO−R' + H₂O (con H⁺)`, { c:`tb` });
        return svg(560, 214, s, `Sustitución nucleofílica de acilo (esterificación)`); })() };

    F.carboxilato = { src:`Tema 31, pág. 7`, cap:`El ácido cede su H⁺ al agua. En el carboxilato la carga negativa se reparte entre los dos oxígenos (resonancia): los dos enlaces C−O quedan iguales. Esa estabilidad explica la acidez.`,
      svg: (() => { let s = ``;
        s += T(280, 28, `R−COOH + H₂O ⇌ R−COO⁻ + H₃O⁺`, { c:`tb`, fs:15 });
        s += cooh(110, 110, `R`, { minus:true }) + T(225, 116, `↔`, { fs:28 });
        s += T(340, 116, `C`, { fs:18 }) + ln(328, 110, 296, 110) + T(290, 116, `R`, { a:`end`, fs:17 }) + ln(348, 100, 374, 70) + T(382, 66, `O⁻`, { fs:17 }) + dbl(348, 120, 374, 150) + T(382, 164, `O`, { fs:17 });
        s += box(430, 64, 120, 92) + T(490, 88, `carga repartida`, { c:`tb`, fs:12 }) + T(490, 108, `en los 2 O`, { c:`tm`, fs:11.5 }) + T(490, 130, `C−O iguales`, { c:`tm`, fs:11.5 }) + T(490, 146, `(intermedios)`, { c:`tm`, fs:11 });
        s += ln(20, 184, 540, 184, `dash`) + T(280, 210, `R−COOH + NaOH → R−COO⁻Na⁺ + H₂O (sal soluble)`, { c:`tb`, fs:14 });
        return svg(560, 222, s, `Acidez y resonancia del carboxilato`); })() };

    F.nomAcido = { src:`Tema 31, pág. 8`, cap:`El carbono del −COOH es siempre el 1 y se cuenta en la cadena. Se escribe "ácido", la raíz del alcano y la terminación -oico.`,
      svg: (() => { let s = ``;
        s += T(30, 56, `CH₃−CH₂−CH₂−`, { a:`start`, fs:19 }) + hl(160, 34, 62, 30) + T(164, 56, `COOH`, { a:`start`, fs:19 });
        s += T(50, 82, `4`, { c:`tm` }) + T(96, 82, `3`, { c:`tm` }) + T(142, 82, `2`, { c:`tm` }) + T(190, 82, `1`, { c:`tb` }) + T(126, 112, `ácido butanoico`, { c:`tb`, fs:15 });
        s += T(280, 160, `ácido  +  alcano(−o)  +  oico`, { c:`tb`, fs:17 });
        s += box(330, 26, 220, 98) + T(440, 50, `HCOOH → ácido metanoico`, { c:`tm`, fs:12.5 }) + T(440, 74, `CH₃COOH → ácido etanoico`, { c:`tm`, fs:12.5 }) + T(440, 98, `C₃H₇COOH → ácido butanoico`, { c:`tm`, fs:12.5 });
        s += T(280, 196, `el C del COOH se cuenta y es el C1 (no se escribe)`, { c:`tm` });
        return svg(560, 210, s, `Nomenclatura de ácidos monocarboxílicos`); })() };

    F.dicarboxilicos = { src:`Tema 31, pág. 10`, cap:`Con un −COOH en cada extremo se conserva el nombre completo del alcano y se agrega -dioico. Los carbonos de los dos COOH se cuentan.`,
      svg: (() => { let s = ``;
        const L = [[`HOOC−COOH`, `2`, `etanodioico`, `oxálico`], [`HOOC−CH₂−COOH`, `3`, `propanodioico`, `malónico`], [`HOOC−(CH₂)₂−COOH`, `4`, `butanodioico`, `succínico`], [`HOOC−(CH₂)₄−COOH`, `6`, `hexanodioico`, `adípico`]];
        s += T(40, 26, `fórmula`, { a:`start`, c:`tm` }) + T(270, 26, `C`, { c:`tm` }) + T(300, 26, `ácido… (IUPAC)`, { a:`start`, c:`tm` }) + T(450, 26, `común`, { a:`start`, c:`tm` });
        L.forEach(([f, n, i, c], k) => { const y = 58 + k * 40; s += (k % 2 ? `` : `<rect x="20" y="${y - 24}" width="520" height="36" rx="6" style="fill:${C};opacity:.10"/>`) + T(40, y, f, { a:`start`, fs:15 }) + T(270, y, n, { c:`tb` }) + T(300, y, i, { a:`start`, fs:14 }) + T(450, y, c, { a:`start`, c:`tb` }); });
        s += T(280, 222, `ácido + alcano completo + dioico`, { c:`tb` });
        return svg(560, 234, s, `Ácidos dicarboxílicos`); })() };

    F.ciclicosAcido = { src:`Tema 31, pág. 11`, cap:`Si el −COOH cuelga de un anillo, no se puede numerar dentro de él: se dice "ácido" + nombre del ciclo + -carboxílico. Con benceno queda el ácido benzoico.`,
      svg: (() => { let s = ``;
        s += AR.ring(110, 130, 36, {}, { mode:`none` }) + ln(110, 94, 110, 70) + T(124, 66, `COOH`, { a:`start`, fs:15 }) + T(120, 112, `1`, { c:`tm`, fs:10.5 });
        s += T(110, 196, `ácido ciclohexanocarboxílico`, { c:`tb`, fs:12.5 });
        s += AR.ring(330, 130, 36, {}) + ln(330, 94, 330, 70) + T(344, 66, `COOH`, { a:`start`, fs:15 });
        s += T(330, 196, `ácido bencenocarboxílico`, { c:`tb`, fs:12.5 }) + T(330, 214, `(ácido benzoico)`, { c:`tm` });
        s += box(450, 60, 100, 100) + T(500, 86, `sufijo`, { c:`tm` }) + T(500, 110, `-carboxílico`, { c:`tb`, fs:12.5 }) + T(500, 134, `C del anillo`, { c:`tm`, fs:11 }) + T(500, 150, `= C1`, { c:`tm`, fs:11 });
        return svg(560, 226, s, `Ácidos cíclicos y aromáticos`); })() };

    F.medicinaAcidos = { src:`Tema 31, pág. 12`, cap:`Todos estos tienen al menos un grupo −COOH. La diapositiva de metabolitos está cortada en el material.`,
      svg: (() => { let s = ``;
        const G = [[`Medicamentos`, [`ibuprofeno`, `ácido acetilsalicílico`, `ácido valproico`, `ácido clavulánico`]], [`Ácidos grasos`, [`omega-3`, `ácido araquidónico`, `(C₂₀H₃₂O₂)`]], [`Metabolitos`, [`(diapositiva cortada)`, `ej.: láctico, pirúvico,`, `cítrico [compl.]`]]];
        G.forEach(([h, it], i) => { const x = 16 + i * 182; s += box(x, 26, 170, 160) + `<rect x="${x}" y="26" width="170" height="30" rx="10" style="fill:${C};opacity:.2"/>` + T(x + 85, 46, h, { c:`tb` }); it.forEach((t, j) => s += T(x + 85, 82 + j * 24, t, { c:`tm`, fs:12.5 })); });
        s += T(280, 210, `R−COOH en todos`, { c:`tb` });
        return svg(560, 222, s, `Ácidos carboxílicos en medicina`); })() };
  }
});

/* ======================= TEMA 32: ÉSTERES Y AMIDAS ======================= */
registerPack({
  id:`t32`, version:1,
  topic:{ t:`t32`, n:`Tema 32`, name:`Ésteres y amidas`, unit:`Unidad VII · Funciones oxigenadas`, color:[`#3E5BA9`,`#9FB4EC`] },

  REPASO:[
{src:`Tema 32, pág. 1–3`,title:`Ésteres y amidas: derivados de los ácidos`,fig:`derivados`,
 body:`<p>Los <b>ésteres</b> y las <b>amidas</b> son dos familias de compuestos orgánicos <b>derivados de los ácidos carboxílicos</b> (Tema 31). En los dos casos, el <b>−OH del ácido se reemplaza</b> por otro átomo o grupo:</p>
 <ul><li><b>Ácido carboxílico:</b> R−CO−<b>OH</b></li>
 <li><b>Éster:</b> R−CO−<b>OR'</b> (el −OH se cambia por un grupo <b>alcoxi</b>, que viene de un alcohol)</li>
 <li><b>Amida:</b> R−CO−<b>NH₂</b> (el −OH se cambia por un grupo <b>amino</b>, que viene del amoníaco o de una amina)</li></ul>
 <p>Los dos conservan la parte <b>acilo</b> (R−C=O) del ácido.</p>
 <p class="note">Complementario [5]: también son derivados los cloruros de ácido (−Cl) y los anhídridos; el material solo desarrolla ésteres y amidas.</p>`,
 memo:`Derivados del ácido: el −OH se cambia. Éster R−CO−OR' (alcoxi, del alcohol). Amida R−CO−NH₂ (amino, del NH₃ o amina). Ambos conservan el acilo R−C=O.`},
{src:`Tema 32, pág. 3`,title:`Estructura de los ésteres`,fig:`esterPartes`,
 body:`<p>Un <b>éster</b> se forma, formalmente, por la reacción entre un <b>ácido carboxílico</b> y un <b>alcohol</b>. El proceso se llama <b>esterificación</b>.</p>
 <p><b>Fórmula general:</b> R−COO−R' (o R−CO−O−R').</p>
 <ul><li><b>R:</b> un <b>H</b> o una cadena (alquilo o arilo) que viene del <b>ácido carboxílico</b>.</li>
 <li><b>R':</b> <b>únicamente</b> una cadena (alquilo o arilo) que viene del <b>alcohol</b>. <b>Nunca puede ser H</b>: si lo fuera, el compuesto sería un ácido carboxílico.</li></ul>
 <p><b>Partes de la estructura:</b> la molécula se divide en dos fragmentos:</p>
 <ul><li><b>Parte acilo (R−C=O):</b> viene del ácido y contiene el carbonilo.</li>
 <li><b>Parte alcoxi (−O−R'):</b> viene del alcohol; contiene un <b>oxígeno sp³</b> unido a la cadena R'.</li></ul>`,
 memo:`Éster = ácido + alcohol. R−COO−R'. R: H o cadena (del ácido). R': solo cadena (del alcohol), nunca H. Acilo (R−C=O) + alcoxi (−O−R', O sp³).`},
{src:`Tema 32, pág. 4`,title:`Estructura y clasificación de las amidas`,fig:`amidasClase`,
 body:`<p>Una <b>amida</b> se forma por la reacción entre un <b>ácido carboxílico</b> y el <b>amoníaco (NH₃)</b> o una <b>amina</b>.</p>
 <ul><li><b>Grupo funcional:</b> un grupo amino (−NH₂, −NHR o −NR₂) sustituye al −OH del ácido.</li>
 <li><b>Fórmula general:</b> R−CO−NR'R''.</li>
 <li><b>R:</b> un H o una cadena (alquilo o arilo) que viene del ácido.</li>
 <li><b>R' y R'':</b> pueden ser <b>H o cadenas</b>. De ellos depende el tipo de amida.</li></ul>
 <p>La amida combina una parte <b>acilo</b> (R−C=O) con un grupo <b>amino</b> (−NR'R''). Según lo que lleva el nitrógeno:</p>
 <ul><li><b>Primarias:</b> el N conserva sus <b>dos H</b> (R−CONH₂).</li>
 <li><b>Secundarias:</b> <b>un H</b> del N se cambia por una cadena (R−CONH−R').</li>
 <li><b>Terciarias:</b> los <b>dos H</b> del N se cambian por cadenas (R−CONR'R'').</li></ul>
 <p class="note">Truco: cuenta las cadenas unidas al <b>nitrógeno</b>, no al carbono. 0 cadenas en el N = primaria; 1 = secundaria; 2 = terciaria.</p>`,
 memo:`Amida = ácido + NH₃ o amina. R−CO−NR'R''. Primaria −NH₂ (0 cadenas en N) · secundaria −NHR' (1) · terciaria −NR'R'' (2).`},
{src:`Tema 32, pág. 3 y 5`,title:`Esterificación de Fischer`,fig:`fischer32`,
 body:`<p>La conversión de un ácido en sus derivados se basa en la <b>sustitución nucleofílica en el grupo acilo</b> (Tema 31). El −OH del ácido es un <b>mal grupo saliente</b>: se reemplaza por un grupo <b>alcoxi (−OR')</b> para formar <b>ésteres</b>, o por un grupo <b>amino (−NR'R'')</b> para formar <b>amidas</b>.</p>
 <p><b>Esterificación de Fischer (vía directa):</b> es el método clásico. Un ácido carboxílico reacciona con un <b>alcohol</b> en presencia de un <b>catalizador ácido</b> (H₂SO₄ o HCl anhidro).</p>
 <p class="fx" style="text-align:center">R−COOH + R'−OH ⇌ R−COO−R' + H₂O (con H⁺)</p>
 <p>Es una reacción <b>reversible</b>, de <b>equilibrio</b>: el agua puede volver a romper el éster (hidrólisis).</p>
 <p class="note">Complementario [5]: para obtener más éster se usa exceso de alcohol o se retira el agua (principio de Le Châtelier). El oxígeno del −OR' del éster viene del <b>alcohol</b>; el del agua, del <b>ácido</b>.</p>`,
 memo:`Fischer: ácido + alcohol (H⁺: H₂SO₄ o HCl anhidro) ⇌ éster + agua. Reversible (equilibrio). −OH = mal grupo saliente.`},
{src:`Tema 32, pág. 4–5`,title:`Formación de amidas: ácido + amoníaco o amina`,fig:`amidaForm`,
 body:`<p><b>Reacción directa con amoníaco o aminas (requiere calor elevado).</b> Al mezclar un ácido con amoníaco (NH₃) o una amina (R'−NH₂), la sustitución <b>no ocurre de inmediato</b>.</p>
 <ol><li><b>Primero, una reacción ácido-base rápida:</b> se forma una <b>sal de carboxilato de amonio</b>.
  <p class="fx" style="text-align:center">R−COOH + R'−NH₂ → R−COO⁻ ⁺NH₃−R'</p></li>
 <li><b>Después, calentar fuertemente</b> (Δ &gt; 100 °C) para provocar la <b>deshidratación</b> (pérdida de agua):
  <p class="fx" style="text-align:center">R−COO⁻ ⁺NH₃−R' → R−CO−NH−R' + H₂O (Δ)</p></li></ol>
 <p>Ejemplo del material: ácido acético + NH₃ a <b>150 °C</b> → <b>acetamida</b> (CH₃−CONH₂) + H₂O.</p>
 <p>En general: R−COOH + H−NR'R'' → R−CO−NR'R'' + H₂O (Δ).</p>
 <p class="note">¿Por qué hace falta tanto calor? Porque el amoníaco o la amina son <b>bases</b>: lo primero que hacen es quitarle el H⁺ al ácido. El carboxilato que se forma ya no es atacable; solo el calor fuerte saca el agua y forma la amida.</p>`,
 memo:`Ácido + NH₃/amina → primero sal de carboxilato de amonio (ácido-base) → calor fuerte (>100 °C, ej. 150 °C) → amida + H₂O.`},
{src:`Tema 32, pág. 6 y 8`,title:`Nomenclatura de ésteres`,fig:`nomEster`,
 body:`<p>Se nombra <b>por separado</b> la parte que viene del <b>ácido</b> y la que viene del <b>alcohol</b>, unidas por la palabra <b>"de"</b>:</p>
 <p class="fx" style="text-align:center">[ácido con terminación -oato] + de + [grupo alquilo con terminación -ilo]</p>
 <ul><li><b>Parte del ácido</b> (cadena con el C=O): se quita la palabra "ácido" y se cambia <b>-oico</b> (o -ico) por <b>-oato</b> (o -ato).</li>
 <li><b>Parte del alcohol</b> (cadena unida al −O−): se nombra el sustituyente terminado en <b>-ilo</b>.</li></ul>
 <ul><li>Ácido metanoico + metanol → <b>metanoato de metilo</b> (HCOOCH₃)</li>
 <li>Ácido etanoico + etanol → <b>etanoato de etilo</b> (CH₃COOCH₂CH₃)</li></ul>
 <p><b>Con nombres comunes (pág. 8):</b> fórmico → <b>formiato</b>, acético → <b>acetato</b>, butírico → <b>butirato</b>, benzoico → <b>benzoato</b>.</p>
 <ul><li>Acetato de metilo: CH₃−COO−CH₃</li><li>Acetato de etilo: CH₃−COO−CH₂−CH₃</li><li>Benzoato de metilo: C₆H₅−COO−CH₃</li><li>Formiato de metilo: H−COO−CH₃</li><li>Butirato de metilo: CH₃−CH₂−CH₂−COO−CH₃</li></ul>
 <p class="note">Ojo con el orden: en la fórmula el ácido va primero (R−COO−), pero en el nombre la cadena del alcohol va <b>al final</b> ("de metilo"). CH₃−COO−CH₂CH₃ es etanoato de <b>etilo</b>; CH₃CH₂−COO−CH₃ es propanoato de <b>metilo</b>.</p>`,
 memo:`Éster: [ácido -oato] + "de" + [alquilo -ilo]. Metanoato de metilo, etanoato (acetato) de etilo. Común: formiato, acetato, butirato, benzoato.`},
{src:`Tema 32, pág. 7`,title:`Ésteres ramificados, cíclicos y aromáticos`,fig:`esterCiclo`,
 body:`<p><b>Ramificaciones en la cadena del ácido:</b> la numeración <b>siempre empieza en el carbono del carbonilo</b> (C1).</p>
 <p>Ejemplo: CH₃−CH(CH₃)−CH₂−CO−O−CH₃</p>
 <ul><li>Cadena del ácido: 4 C (butanoato) con un metilo en el C3 → <b>3-metilbutanoato</b>.</li>
 <li>Grupo del oxígeno: 1 C → <b>de metilo</b>.</li>
 <li>Nombre: <b>3-metilbutanoato de metilo</b> (C₆H₁₂O₂).</li></ul>
 <p><b>Ésteres unidos a anillos aromáticos o ciclos:</b></p>
 <ul><li><b>Parte del ácido en un anillo:</b> se cambia <b>-carboxílico</b> por <b>-carboxilato</b>.
  <ul><li>C₆H₅−COO−CH₃: <b>benzoato de metilo</b> (o bencenocarboxilato de metilo)</li><li>C₆H₁₁−COO−CH₂CH₃: <b>ciclohexanocarboxilato de etilo</b></li></ul></li>
 <li><b>Parte del alcohol en un anillo:</b> si el O está unido a un anillo aromático (viene de un fenol), se usa <b>fenilo</b>.
  <ul><li>CH₃COO−C₆H₅: <b>etanoato de fenilo</b> (acetato de fenilo)</li></ul></li></ul>`,
 memo:`Ramificado: numerar desde el C del C=O (3-metilbutanoato de metilo). Ácido en anillo: -carboxilato (benzoato de metilo, ciclohexanocarboxilato de etilo). O unido a benceno: de fenilo.`},
{src:`Tema 32, pág. 9 y 12`,title:`Nomenclatura de amidas primarias`,fig:`nomAmida`,
 body:`<p>Se parte del nombre del ácido de origen: se quita la palabra <b>"ácido"</b> y se cambia <b>-oico</b> (o -ico) por <b>-amida</b>. El carbono del carbonilo <b>siempre es el C1</b>.</p>
 <ul><li>H−CONH₂ (ácido metanoico) → <b>metanamida</b> (formamida)</li>
 <li>CH₃−CONH₂ (ácido etanoico) → <b>etanamida</b> (acetamida)</li>
 <li>CH₃−CH₂−CONH₂ → <b>propanamida</b></li>
 <li>CH₃−CH₂−CH₂−CONH₂ (ácido butanoico) → <b>butanamida</b></li></ul>
 <p><b>Otros ejemplos de la pág. 12:</b></p>
 <ul><li>CH₃−CH(OH)−CH₂−CONH₂ → <b>3-hidroxibutanamida</b></li>
 <li>H₂N−CO−CO−NH₂ → <b>etanodiamida</b> (dos grupos amida)</li>
 <li>H₂N−CO−NH₂ → <b>urea</b></li>
 <li><b>Nylon:</b> una poliamida, cadena larga de unidades −(CH₂)₅−CO−NH− repetidas.</li></ul>`,
 memo:`Amida primaria: quitar "ácido", -oico → -amida. C del C=O = C1. Metanamida (formamida), etanamida (acetamida), butanamida. Dos: etanodiamida.`},
{src:`Tema 32, pág. 10–11`,title:`Amidas N-sustituidas, ramificadas y cíclicas`,fig:`amidaN`,
 body:`<p><b>Amidas secundarias y terciarias (N-sustituidas):</b> tienen uno o dos grupos alquilo o arilo en el nitrógeno. Esos grupos se nombran <b>primero</b>, con el prefijo <b><i>N</i>-</b>, para indicar que están en el nitrógeno y no en la cadena. Si hay dos iguales: <b><i>N,N</i>-di…</b></p>
 <ul><li>CH₃−CONH−CH₃ → <b><i>N</i>-metiletanamida</b></li>
 <li>CH₃−CONH−CH₂CH₃ → <b><i>N</i>-etiletanamida</b></li>
 <li>CH₃−CH₂−CON(CH₃)₂ → <b><i>N,N</i>-dimetilpropanamida</b></li></ul>
 <p><b>Ramificaciones en la cadena del ácido:</b> se numera desde el carbono carbonílico (C1).</p>
 <ul><li>CH₃−CH(CH₃)−CH₂−CO−NH−CH₂CH₃ → <b><i>N</i>-etil-3-metilbutanamida</b></li></ul>
 <p><b>Amidas unidas a anillos:</b> se usa <b>-carboxamida</b> (el carbono carbonílico no se cuenta dentro del ciclo).</p>
 <ul><li>C₆H₅−CONH₂ → <b>benzamida</b> (o bencenocarboxamida)</li>
 <li>C₅H₉−CONH₂ → <b>ciclopentanocarboxamida</b></li>
 <li>C₆H₁₁−CONH−CH₃ → <b><i>N</i>-metilciclohexanocarboxamida</b></li></ul>
 <p class="note">El <i>N</i> se trata como un número de posición: <i>N</i>-etil-3-metil va en orden alfabético (etil antes que metil), igual que los sustituyentes de la cadena.</p>`,
 memo:`Grupos en el N: prefijo N- (N-metiletanamida); dos iguales: N,N-di (N,N-dimetilpropanamida). Ramificada: numerar desde el C=O (N-etil-3-metilbutanamida). Anillo: -carboxamida (benzamida).`},
{src:`Tema 32, pág. 13`,title:`Ésteres de colesterol`,fig:`colesterol`,
 body:`<p>Los <b>ésteres de colesterol</b> son la forma en que el colesterol se <b>empaqueta</b> en el centro <b>hidrofóbico</b> de las <b>lipoproteínas</b> (LDL, HDL) para su <b>transporte en la sangre</b> y su <b>almacenamiento</b> dentro de las células.</p>
 <p>Se forman por <b>esterificación</b>: el <b>−OH del carbono 3</b> (C3) del colesterol libre se une al <b>−COOH de un ácido graso</b> y se libera una molécula de agua.</p>
 <p class="fx" style="text-align:center">Colesterol−OH + HOOC−R → Colesterol−O−CO−R + H₂O</p>
 <p>En el cuerpo la reacción la catalizan enzimas: la <b>ACAT</b> (acil-CoA colesterol aciltransferasa) o la <b>LCAT</b> (lecitina colesterol aciltransferasa). El ácido graso llega activado como <b>acil graso-CoA</b>.</p>
 <p class="note">Complementario [4]: la ACAT trabaja dentro de las células y la LCAT en el plasma (sobre las HDL). En el laboratorio, el "colesterol total" incluye el libre y el esterificado; por eso el método enzimático usa primero una <b>colesterol esterasa</b>, que rompe el éster.</p>`,
 memo:`Ésteres de colesterol: −OH del C3 del colesterol + −COOH de un ácido graso → éster + H₂O. Van dentro de LDL/HDL (transporte y almacenamiento). Enzimas ACAT o LCAT.`},
{src:`Tema 32, pág. 1, 14 y 17`,title:`La urea y los anestésicos locales`,fig:`urea`,
 body:`<p><b>Urea: la amida más simple</b> (H₂N−CO−NH₂).</p>
 <ul><li>Es el <b>principal producto de desecho del metabolismo del nitrógeno</b> en los humanos.</li>
 <li>En el organismo se forma en el <b>ciclo de la urea</b> (en el hígado).</li>
 <li>En medicina se usa en <b>cremas dermatológicas</b> de alta hidratación (<b>queratolíticas</b>) y en pruebas diagnósticas (<b>prueba del aliento para <i>Helicobacter pylori</i></b>).</li></ul>
 <p><b>Anestésicos locales: ésteres frente a amidas</b> (portada). Se distinguen por la cantidad de letras "i" en el nombre:</p>
 <ul><li><b>Ésteres (una sola "i", la de -caína):</b> cocaína, procaína, proparacaína, cloroprocaína, tetracaína.</li>
 <li><b>Amidas (dos "i"):</b> l<b>i</b>docaína, pr<b>i</b>locaína, mep<b>i</b>vacaína, bup<b>i</b>vacaína, rop<b>i</b>vacaína, et<b>i</b>docaína.</li></ul>
 <p class="note">Complementario [4]: en el laboratorio clínico la urea se mide en sangre (o como <b>nitrógeno ureico, BUN</b>) para evaluar la función renal. Complementario [5]: los anestésicos tipo éster se rompen más rápido en el cuerpo (los hidrolizan esterasas del plasma) que los tipo amida, que son más estables, como se ve en las propiedades químicas.</p>`,
 memo:`Urea H₂N−CO−NH₂: desecho del N, ciclo de la urea; cremas queratolíticas, prueba del aliento (H. pylori). Anestésicos: una "i" = éster (procaína); dos "i" = amida (lidocaína).`},
{src:`Tema 32, pág. 15`,title:`Propiedades físicas: ésteres frente a amidas`,fig:`fisicas32`,
 body:`<div class="scroll"><table class="tbl"><thead><tr><th>Propiedad</th><th>Ésteres (R−COO−R')</th><th>Amidas (R−CO−NR'R'')</th></tr></thead><tbody>
 <tr><td><b>Ebullición y fusión</b></td><td><b>Moderados o bajos.</b> No forman puentes de H entre sí (no tienen H unido a O). Dipolo-dipolo.</td><td><b>Muy altos.</b> Las 1ª y 2ª forman redes de puentes de H (H unido a N). Las 3ª, menores (sin N−H).</td></tr>
 <tr><td><b>Solubilidad en agua</b></td><td><b>Moderada a baja.</b> Los pequeños (hasta 3–5 C) se disuelven porque <b>aceptan</b> puentes de H del agua; baja rápido al crecer la cadena.</td><td><b>Alta</b> (masa baja/media). <b>Aceptan y donan</b> (1ª y 2ª) puentes de H. Las pequeñas son miscibles.</td></tr>
 <tr><td><b>Estado (25 °C)</b></td><td>Los pequeños: <b>líquidos volátiles</b>. Los de cadena muy larga (ceras, grasas): sólidos.</td><td>Casi todas <b>sólidas cristalinas</b>. Excepción: la <b>formamida</b> es líquida.</td></tr>
 <tr><td><b>Olor</b></td><td><b>Agradable, afrutado y floral</b>: olor de frutas, flores y perfumes. Muy volátiles.</td><td>Generalmente <b>inodoras</b> o de olor débil; impuras, olor amoniacal.</td></tr>
 <tr><td><b>Polaridad</b></td><td><b>Moderada</b> (C=O y enlace C−O).</td><td><b>Alta</b>, por la fuerte resonancia C=O ↔ C=N⁺ (O⁻).</td></tr>
 <tr><td><b>Fuerzas</b></td><td>Dipolo-dipolo y dispersión de London.</td><td>Puentes de H muy intensos (1ª y 2ª) y dipolo-dipolo fuerte (1ª, 2ª y 3ª).</td></tr>
 <tr><td><b>Densidad</b></td><td><b>Menos densos que el agua</b> (≈ 0.85–0.95 g/cm³).</td><td><b>Más densas</b> que los ésteres (≈ 1.0 g/cm³ o más).</td></tr>
 </tbody></table></div>`,
 memo:`Ésteres: sin puente de H entre sí → hierven bajo, volátiles, olor a frutas, menos densos que el agua. Amidas (1ª y 2ª): N−H → puentes de H → hierven muy alto, sólidas (salvo formamida), inodoras, muy polares.`},
{src:`Tema 32, pág. 16`,title:`Propiedades químicas: reactividad e hidrólisis`,fig:`hidrolisis`,
 body:`<p><b>Reactividad del carbonilo:</b></p>
 <ul><li><b>Ésteres: moderada.</b> Más reactivos que las amidas, pero menos que los haluros de acilo y los anhídridos. El oxígeno deslocaliza su par de electrones por resonancia, pero menos que el nitrógeno.</li>
 <li><b>Amidas: baja (muy estables).</b> Son los derivados <b>menos reactivos</b>: la fuerte resonancia del par libre del N reduce mucho la electrofilia del C=O.</li></ul>
 <p><b>Comportamiento ácido-base:</b> los ésteres son <b>prácticamente neutros</b> (solo se protonan con ácidos muy fuertes). Las amidas son <b>neutras</b> o extremadamente poco básicas: el par libre del N está ocupado en la resonancia, así que <b>no actúan como bases</b> en agua a pH neutro.</p>
 <p><b>Hidrólisis</b> (romper con agua):</p>
 <ul><li><b>Éster, en ácido:</b> <b>reversible</b>. Con agua y un ácido mineral (H₂SO₄/HCl) y calor → ácido carboxílico + alcohol. R−COOR' + H₂O ⇌ R−COOH + R'−OH</li>
 <li><b>Éster, en base: saponificación</b>, <b>irreversible</b>. Con NaOH o KOH → sal de carboxilato + alcohol. Se usa para fabricar <b>jabones</b>. R−COOR' + NaOH → R−COONa + R'−OH</li>
 <li><b>Amida, en ácido:</b> <b>irreversible</b> y en condiciones drásticas (reflujo prolongado con ácido fuerte) → ácido carboxílico + sal de amonio.</li>
 <li><b>Amida, en base:</b> <b>irreversible</b>, con calor intenso y base concentrada → sal de carboxilato + amoníaco (gas) o amina. R−CONH₂ + NaOH → R−COONa + NH₃↑</li></ul>
 <p class="note">Por eso el enlace amida (el <b>enlace peptídico</b> de las proteínas, complementario [5]) es tan resistente, y los anestésicos tipo amida duran más en el cuerpo que los tipo éster.</p>`,
 memo:`Reactividad: éster moderada > amida baja (resonancia del N). Hidrólisis ácida del éster: reversible. Saponificación (NaOH): irreversible → sal + alcohol (jabones). Amidas: hidrólisis solo con condiciones drásticas.`}
  ],

  ERRATA:{
    [`La urea y los anestésicos locales`]:[
      { tipo:`error`, pg:`portada`, que:`Lista de anestésicos tipo éster`, dice:`"Tetriracaína" y "Tettracaína" (dos veces)`, ok:`Tetracaína (una sola vez)`, por:`Errores de escritura en la imagen; es el mismo fármaco.` }],
    [`Ésteres ramificados, cíclicos y aromáticos`]:[
      { tipo:`error`, pg:`pág. 7`, que:`Fórmula molecular del 3-metilbutanoato de metilo`, dice:`C₅H₁₀O₂`, ok:`C₆H₁₂O₂`, por:`Tiene 5 C en la parte del ácido (4 de la cadena + 1 del metilo) y 1 C del metilo del alcohol: 6 C.` }],
    [`Nomenclatura de ésteres`]:[
      { tipo:`error`, pg:`pág. 8`, que:`Fórmula del benzoato de metilo`, dice:`C₅H₆−COO−CH₃`, ok:`C₆H₅−COO−CH₃`, por:`El grupo fenilo es C₆H₅.` },
      { tipo:`error`, pg:`pág. 8`, que:`Fórmula del butirato de metilo`, dice:`CH₃−CH₂−CH₃−COO−CH₃`, ok:`CH₃−CH₂−CH₂−COO−CH₃`, por:`Un CH₃ solo puede ir al final de la cadena; el carbono del medio es CH₂.` }],
    [`Nomenclatura de amidas primarias`]:[
      { tipo:`aviso`, pg:`pág. 12`, que:`Fórmula del nylon`, dice:`[−CH₂−CH₂−CH₂−CH₂−CH₂−CO−NH−] con "n = 6"`, ok:`El 6 es el número de carbonos de la unidad (nylon-6); n, las veces que se repite la unidad, es muy grande`, por:`Una poliamida tiene cientos de unidades repetidas.` }],
    [`Propiedades químicas: reactividad e hidrólisis`]:[
      { tipo:`error`, pg:`pág. 16`, que:`Amidas en agua`, dice:`"No actúan como bases en medio acuoso H neutro"`, ok:`No actúan como bases en medio acuoso a pH neutro`, por:`Error de escritura (falta la "p").` }]
  },

  MCQ:[
{src:`Tema 32, pág. 3`,q:`Ésteres y amidas son derivados de los:`,o:[`Ácidos carboxílicos`,`Aldehídos`,`Alcanos`,`Éteres`],e:`El −OH del ácido se reemplaza.`},
{src:`Tema 32, pág. 3`,q:`En un éster, el −OH del ácido se reemplaza por:`,o:[`Un grupo alcoxi (−OR')`,`Un grupo amino (−NH₂)`,`Un hidrógeno`,`Un halógeno`],e:`Viene del alcohol.`},
{src:`Tema 32, pág. 3`,q:`La fórmula general de un éster es:`,o:[`R−COO−R'`,`R−CO−NH₂`,`R−O−R'`,`R−COOH`],e:`También R−CO−O−R'.`},
{src:`Tema 32, pág. 3`,q:`En un éster R−COO−R', el grupo R' nunca puede ser:`,o:[`Un átomo de hidrógeno`,`Un metilo`,`Un etilo`,`Un fenilo`],e:`Si fuera H, sería un ácido carboxílico.`},
{src:`Tema 32, pág. 3`,q:`La parte alcoxi (−O−R') de un éster proviene del:`,o:[`Alcohol`,`Ácido carboxílico`,`Amoníaco`,`Agua`],e:`La parte acilo viene del ácido.`},
{src:`Tema 32, pág. 3`,q:`El oxígeno de la parte alcoxi del éster tiene hibridación:`,o:[`sp³`,`sp²`,`sp`,`No tiene hibridación`],e:`Pág. 3.`},
{src:`Tema 32, pág. 4`,q:`Una amida se forma por la reacción de un ácido carboxílico con:`,o:[`Amoníaco o una amina`,`Un alcohol`,`Agua`,`Un aldehído`],e:`El grupo amino sustituye al −OH.`},
{src:`Tema 32, pág. 4`,q:`R−CONH−R' es una amida:`,o:[`Secundaria`,`Primaria`,`Terciaria`,`Cuaternaria`],e:`Una cadena en el nitrógeno.`},
{src:`Tema 32, pág. 4`,q:`En una amida primaria, el nitrógeno tiene:`,o:[`Dos hidrógenos (−NH₂)`,`Un hidrógeno`,`Ningún hidrógeno`,`Tres cadenas`],e:`R−CONH₂.`},
{src:`Tema 32, pág. 4`,q:`R−CONR'R'' es una amida:`,o:[`Terciaria`,`Secundaria`,`Primaria`,`Cíclica`],e:`Los dos H del N fueron reemplazados.`},
{src:`Tema 32, pág. 5`,q:`La conversión de un ácido en éster o amida es una:`,o:[`Sustitución nucleofílica en el grupo acilo`,`Adición electrofílica`,`Oxidación`,`Eliminación de Hofmann`],e:`El −OH es un mal grupo saliente.`},
{src:`Tema 32, pág. 5`,q:`La esterificación de Fischer necesita:`,o:[`Ácido carboxílico, alcohol y un catalizador ácido`,`Ácido carboxílico y NaOH`,`Alcohol y amoníaco`,`Aldehído y agua`],e:`H₂SO₄ o HCl anhidro.`},
{src:`Tema 32, pág. 5`,q:`La esterificación de Fischer es una reacción:`,o:[`Reversible, de equilibrio`,`Irreversible`,`Explosiva`,`Que no produce agua`],e:`Ácido + alcohol ⇌ éster + agua.`},
{src:`Tema 32, pág. 5`,q:`Al mezclar un ácido carboxílico con amoníaco, lo primero que se forma es:`,o:[`Una sal de carboxilato de amonio`,`Una amida`,`Un éster`,`Un alcohol`],e:`Es una reacción ácido-base rápida.`},
{src:`Tema 32, pág. 5`,q:`Para convertir la sal de carboxilato de amonio en amida se necesita:`,o:[`Calentar fuertemente (más de 100 °C)`,`Enfriar a 0 °C`,`Agregar agua`,`Agregar un alcohol`],e:`Se provoca la deshidratación.`},
{src:`Tema 32, pág. 4`,q:`Ácido acético + NH₃ a 150 °C produce:`,o:[`Acetamida (etanamida) + agua`,`Acetato de etilo + agua`,`Etanol + amoníaco`,`Metilamina`],e:`CH₃−CONH₂ + H₂O.`},
{src:`Tema 32, pág. 6`,q:`En el nombre de un éster, la parte del ácido termina en:`,o:[`-oato`,`-ilo`,`-amida`,`-ol`],e:`Ej.: etanoato.`},
{src:`Tema 32, pág. 6`,q:`En el nombre de un éster, la parte del alcohol termina en:`,o:[`-ilo`,`-oato`,`-ol`,`-ona`],e:`Ej.: de metilo.`},
{src:`Tema 32, pág. 6`,q:`CH₃COOCH₂CH₃ se llama:`,o:[`Etanoato de etilo`,`Etanoato de metilo`,`Propanoato de metilo`,`Etil etanoico`],e:`Ácido de 2 C + alcohol de 2 C.`},
{src:`Tema 32, pág. 6`,q:`HCOOCH₃ se llama:`,o:[`Metanoato de metilo`,`Etanoato de metilo`,`Metanoato de etilo`,`Ácido metanoico`],e:`También formiato de metilo.`},
{src:`Tema 32, pág. 8`,q:`El nombre común del etanoato de metilo es:`,o:[`Acetato de metilo`,`Formiato de metilo`,`Butirato de metilo`,`Benzoato de metilo`],e:`CH₃−COO−CH₃.`},
{src:`Tema 32, pág. 7`,q:`En un éster ramificado, la numeración de la cadena del ácido empieza en:`,o:[`El carbono del carbonilo (C1)`,`El carbono unido al oxígeno del alcohol`,`El extremo más ramificado`,`El metilo del alcohol`],e:`Ej.: 3-metilbutanoato de metilo.`},
{src:`Tema 32, pág. 7`,q:`C₆H₅−COO−CH₃ se llama:`,o:[`Benzoato de metilo`,`Etanoato de fenilo`,`Metil benceno`,`Benzamida`],e:`O bencenocarboxilato de metilo.`},
{src:`Tema 32, pág. 7`,q:`CH₃COO−C₆H₅ se llama:`,o:[`Etanoato de fenilo`,`Benzoato de metilo`,`Fenol`,`Acetofenona`],e:`El O está unido al anillo: de fenilo.`},
{src:`Tema 32, pág. 7`,q:`Si la parte del ácido está en un anillo, el éster usa la terminación:`,o:[`-carboxilato`,`-carboxílico`,`-carboxamida`,`-oico`],e:`Ciclohexanocarboxilato de etilo.`},
{src:`Tema 32, pág. 9`,q:`Para nombrar una amida primaria se cambia la terminación -oico del ácido por:`,o:[`-amida`,`-amina`,`-oato`,`-ilo`],e:`Y se quita la palabra "ácido".`},
{src:`Tema 32, pág. 9`,q:`CH₃−CONH₂ se llama:`,o:[`Etanamida (acetamida)`,`Metanamida`,`Etilamina`,`Etanoato de amonio`],e:`2 C.`},
{src:`Tema 32, pág. 9`,q:`H−CONH₂ se llama:`,o:[`Metanamida (formamida)`,`Etanamida`,`Urea`,`Metilamina`],e:`Del ácido metanoico.`},
{src:`Tema 32, pág. 10`,q:`CH₃−CONH−CH₃ se llama:`,o:[`N-metiletanamida`,`2-metiletanamida`,`Propanamida`,`Metil etanoato`],e:`El metilo está en el nitrógeno.`},
{src:`Tema 32, pág. 10`,q:`CH₃−CH₂−CON(CH₃)₂ se llama:`,o:[`N,N-dimetilpropanamida`,`N-dimetilpropanamida`,`2,2-dimetilpropanamida`,`Dimetilpropanoato`],e:`Dos metilos iguales en el N.`},
{src:`Tema 32, pág. 10`,q:`El prefijo N- en el nombre de una amida indica que el sustituyente está:`,o:[`Unido al nitrógeno`,`En el carbono 1`,`En un anillo`,`Unido al oxígeno`],e:`No a la cadena principal.`},
{src:`Tema 32, pág. 11`,q:`Una amida unida directamente a un anillo usa la terminación:`,o:[`-carboxamida`,`-amida solamente`,`-carboxilato`,`-amina`],e:`Ej.: ciclopentanocarboxamida.`},
{src:`Tema 32, pág. 11`,q:`C₆H₅−CONH₂ se llama:`,o:[`Benzamida`,`Anilina`,`Benzoato`,`Fenilamina`],e:`O bencenocarboxamida.`},
{src:`Tema 32, pág. 13`,q:`Los ésteres de colesterol se transportan en la sangre dentro de:`,o:[`El centro hidrofóbico de las lipoproteínas (LDL, HDL)`,`Los glóbulos rojos`,`El plasma, disueltos libremente`,`La orina`],e:`También se almacenan en las células.`},
{src:`Tema 32, pág. 13`,q:`En la formación del éster de colesterol, el colesterol aporta:`,o:[`El −OH del carbono 3`,`Un grupo −COOH`,`Un grupo amino`,`Un carbonilo`],e:`El ácido graso aporta el −COOH.`},
{src:`Tema 32, pág. 13`,q:`Las enzimas que forman ésteres de colesterol, según el material, son:`,o:[`ACAT o LCAT`,`Amilasa y lipasa`,`ALT y AST`,`Ureasa`],e:`Aciltransferasas.`},
{src:`Tema 32, pág. 14`,q:`La urea es:`,o:[`La amida más simple (H₂N−CO−NH₂)`,`Un éster`,`Un ácido carboxílico`,`Una cetona`],e:`Pág. 14.`},
{src:`Tema 32, pág. 14`,q:`La urea es el principal producto de desecho del metabolismo del:`,o:[`Nitrógeno`,`Carbono`,`Hierro`,`Calcio`],e:`Se forma en el ciclo de la urea.`},
{src:`Tema 32, pág. 14`,q:`La urea se usa en una prueba del aliento para detectar:`,o:[`Helicobacter pylori`,`Diabetes`,`Anemia`,`Tuberculosis`],e:`También en cremas queratolíticas.`},
{src:`Tema 32, pág. 1`,q:`Según la regla de la portada, la lidocaína es un anestésico tipo:`,o:[`Amida (dos "i")`,`Éster (una "i")`,`Cetona`,`Éter`],e:`Lidocaína: l-i-docaína.`},
{src:`Tema 32, pág. 1`,q:`¿Cuál de estos anestésicos es un éster?`,o:[`Procaína`,`Lidocaína`,`Bupivacaína`,`Ropivacaína`],e:`Una sola "i" (la de -caína).`},
{src:`Tema 32, pág. 15`,q:`Los ésteres tienen puntos de ebullición bajos o moderados porque:`,o:[`No forman puentes de hidrógeno entre sus propias moléculas`,`Son iónicos`,`Tienen enlaces N−H`,`Son muy pesados`],e:`No tienen H unido a O.`},
{src:`Tema 32, pág. 15`,q:`Las amidas primarias y secundarias tienen puntos de ebullición muy altos porque:`,o:[`Forman puentes de hidrógeno intensos (H unido a N)`,`Son apolares`,`Son gases`,`No tienen oxígeno`],e:`Las terciarias, sin N−H, hierven menos.`},
{src:`Tema 32, pág. 15`,q:`El olor característico de los ésteres es:`,o:[`Agradable, afrutado y floral`,`Amoniacal`,`A huevo podrido`,`Ninguno`],e:`Olor de frutas y perfumes.`},
{src:`Tema 32, pág. 15`,q:`¿Cuál es la amida líquida a temperatura ambiente que menciona el material?`,o:[`Formamida`,`Acetamida`,`Urea`,`Benzamida`],e:`Casi todas las demás son sólidas.`},
{src:`Tema 32, pág. 15`,q:`La densidad de la mayoría de los ésteres simples es:`,o:[`Menor que la del agua (0.85–0.95 g/cm³)`,`Mayor que 2 g/cm³`,`Igual a la del mercurio`,`Exactamente 1 g/cm³`],e:`Las amidas son más densas.`},
{src:`Tema 32, pág. 16`,q:`¿Cuál derivado del ácido carboxílico es el menos reactivo?`,o:[`La amida`,`El éster`,`El haluro de acilo`,`El anhídrido`],e:`Por la fuerte resonancia del N.`},
{src:`Tema 32, pág. 16`,q:`La hidrólisis de un éster en medio ácido es:`,o:[`Reversible`,`Irreversible`,`Imposible`,`Explosiva`],e:`Da ácido + alcohol en equilibrio.`},
{src:`Tema 32, pág. 16`,q:`La saponificación es la hidrólisis de un éster con:`,o:[`Una base fuerte (NaOH o KOH)`,`Un ácido débil`,`Agua sola`,`Un alcohol`],e:`Irreversible; da sal + alcohol (jabones).`},
{src:`Tema 32, pág. 16`,q:`Los productos de R−CONH₂ + NaOH (con calor) son:`,o:[`R−COONa + NH₃`,`R−COOR' + H₂O`,`R−CH₂OH + NaNH₂`,`R−CN + H₂O`],e:`Sale amoníaco gaseoso.`},
{src:`Tema 32, pág. 16`,q:`Las amidas no actúan como bases en agua porque:`,o:[`El par libre del N está deslocalizado en el carbonilo (resonancia)`,`No tienen nitrógeno`,`Son iónicas`,`Son insolubles`],e:`Pág. 16.`}
  ],

  ABIERTAS:[
{src:`Tema 32, pág. 3–4`,q:`Compare la estructura de un éster y una amida: fórmula general, partes y origen de cada parte.`,a:`Los dos derivan de un ácido carboxílico al cambiar su −OH. Éster: R−COO−R'; parte acilo (R−C=O) del ácido y parte alcoxi (−O−R', O sp³) del alcohol; R puede ser H o cadena, R' solo cadena (si fuera H sería un ácido). Amida: R−CO−NR'R''; parte acilo del ácido y grupo amino (−NH₂, −NHR o −NR₂) del amoníaco o una amina; R' y R'' pueden ser H o cadenas, y según cuántos H se reemplacen es primaria (−NH₂), secundaria (−NHR') o terciaria (−NR'R'').`},
{src:`Tema 32, pág. 5`,q:`Explique cómo se convierte un ácido carboxílico en un éster y en una amida, con sus ecuaciones y condiciones.`,a:`Ambas son sustituciones nucleofílicas en el acilo: el −OH, mal grupo saliente, se cambia por −OR' o −NR'R''. Éster (esterificación de Fischer): ácido + alcohol con catalizador ácido (H₂SO₄ o HCl anhidro); reversible, de equilibrio: R−COOH + R'−OH ⇌ R−COO−R' + H₂O. Amida: con NH₃ o una amina, primero hay una reacción ácido-base rápida que forma una sal de carboxilato de amonio (R−COO⁻ ⁺NH₃−R'); después se calienta fuerte (más de 100 °C, ej. 150 °C) para deshidratar: R−CO−NH−R' + H₂O.`},
{src:`Tema 32, pág. 6–11`,q:`Explique las reglas para nombrar ésteres y amidas (simples, ramificados, cíclicos y N-sustituidos) con un ejemplo de cada caso.`,a:`Ésteres: [ácido con -oato] + de + [alquilo con -ilo]: etanoato de etilo (acetato de etilo). Ramificados: se numera desde el C del carbonilo: 3-metilbutanoato de metilo. Ácido en un anillo: -carboxilato (benzoato de metilo, ciclohexanocarboxilato de etilo); O unido a un benceno: de fenilo (etanoato de fenilo). Amidas: se quita "ácido" y -oico pasa a -amida: etanamida (acetamida). Grupos en el N con prefijo N-: N-metiletanamida; dos iguales, N,N-di: N,N-dimetilpropanamida. Ramificadas: desde el C1: N-etil-3-metilbutanamida. En anillos: -carboxamida: benzamida, ciclopentanocarboxamida.`},
{src:`Tema 32, pág. 15`,q:`Compare las propiedades físicas de ésteres y amidas y explíquelas por la estructura.`,a:`Los ésteres no tienen H unido a O, así que no forman puentes de H entre sí: hierven bajo o moderado, son líquidos volátiles (los pequeños), de olor afrutado, moderadamente polares y menos densos que el agua; solo aceptan puentes de H del agua (solubles hasta 3–5 C). Las amidas 1ª y 2ª tienen N−H y forman redes de puentes de H: hierven muy alto, son sólidas cristalinas (salvo la formamida), inodoras, muy polares por la resonancia C=O ↔ C=N⁺, más densas, y aceptan y donan puentes de H con el agua (muy solubles). Las 3ª, sin N−H, hierven menos.`},
{src:`Tema 32, pág. 13–14 y 16`,q:`Explique la importancia biomédica de los ésteres de colesterol, la urea y la estabilidad del enlace amida.`,a:`Los ésteres de colesterol se forman al unir el −OH del C3 del colesterol con el −COOH de un ácido graso (enzimas ACAT o LCAT); son la forma en que el colesterol viaja en el centro hidrofóbico de LDL y HDL y se almacena en las células. La urea (H₂N−CO−NH₂), la amida más simple, es el principal desecho del nitrógeno, se forma en el ciclo de la urea y se usa en cremas queratolíticas y en la prueba del aliento para H. pylori (en el laboratorio se mide para evaluar el riñón). Las amidas son los derivados menos reactivos (resonancia del N) y solo se hidrolizan en condiciones drásticas; por eso los anestésicos tipo amida son más estables que los tipo éster.`}
  ],

  EJ:[
{src:`Tema 32, pág. 6–8`,q:`Nombre los ésteres: a) CH₃−COO−CH₃; b) CH₃−CH₂−COO−CH₂−CH₃; c) H−COO−CH₂−CH₃; d) CH₃−CH₂−CH₂−COO−CH₃.`,
 pide:`Separar la parte del ácido (con el C=O) y la del alcohol (unida al O).`,datos:[`R−COO−: ácido → -oato`,`−O−R': alcohol → de …ilo`],f:`[ácido -oato] de [alquilo -ilo]`,
 pasos:[`a) Ácido de 2 C (etanoico) + metilo → etanoato de metilo (acetato de metilo).`,`b) Ácido de 3 C (propanoico) + etilo → propanoato de etilo.`,`c) Ácido de 1 C (metanoico) + etilo → metanoato de etilo (formiato de etilo).`,`d) Ácido de 4 C (butanoico) + metilo → butanoato de metilo (butirato de metilo).`],r:`etanoato de metilo; propanoato de etilo; metanoato de etilo; butanoato de metilo`},
{src:`Tema 32, pág. 5`,q:`Escriba la esterificación de Fischer del ácido acético con etanol y nombre el producto. ¿Qué hace falta y por qué es reversible?`,
 pide:`Aplicar R−COOH + R'−OH ⇌ R−COO−R' + H₂O.`,datos:[`R = CH₃`,`R' = CH₂CH₃`],f:`R−COOH + R'−OH ⇌ R−COO−R' + H₂O (H⁺)`,
 pasos:[`CH₃−COOH + CH₃CH₂−OH ⇌ CH₃−COO−CH₂CH₃ + H₂O.`,`Producto: etanoato de etilo (acetato de etilo), con olor a frutas o a quitaesmalte.`,`Hace falta un catalizador ácido (H₂SO₄ o HCl anhidro).`,`Es reversible porque el agua puede hidrolizar el éster de nuevo (hidrólisis ácida).`],r:`Etanoato de etilo + agua; catalizador ácido; equilibrio`},
{src:`Tema 32, pág. 4 y 9–10`,q:`Clasifique y nombre: a) CH₃−CH₂−CONH₂; b) CH₃−CONH−CH₂CH₃; c) H−CON(CH₃)₂; d) CH₃−CH₂−CH₂−CONH−CH₃.`,
 pide:`Contar las cadenas en el N y aplicar -amida y N-.`,datos:[`0 cadenas en N = 1ª; 1 = 2ª; 2 = 3ª`],f:`[N-sustituyentes] + raíz del ácido + amida`,
 pasos:[`a) −NH₂: primaria. Ácido de 3 C → propanamida.`,`b) Un etilo en el N: secundaria. Ácido de 2 C → N-etiletanamida.`,`c) Dos metilos en el N: terciaria. Ácido de 1 C → N,N-dimetilmetanamida (dimetilformamida, complementario [5]).`,`d) Un metilo en el N: secundaria. Ácido de 4 C → N-metilbutanamida.`],r:`1ª propanamida; 2ª N-etiletanamida; 3ª N,N-dimetilmetanamida; 2ª N-metilbutanamida`},
{src:`Tema 32, pág. 4–5`,q:`El ácido propanoico reacciona con metilamina (CH₃−NH₂). Escriba los dos pasos hasta la amida y nómbrela.`,
 pide:`Paso ácido-base y luego deshidratación con calor.`,datos:[`R = CH₃CH₂`,`R'−NH₂ = CH₃NH₂`],f:`R−COOH + R'NH₂ → R−COO⁻ ⁺NH₃R' → (Δ) R−CONHR' + H₂O`,
 pasos:[`1) Ácido-base: CH₃CH₂−COOH + CH₃NH₂ → CH₃CH₂−COO⁻ ⁺NH₃−CH₃ (sal de carboxilato de amonio).`,`2) Calentar fuerte (más de 100 °C): CH₃CH₂−COO⁻ ⁺NH₃−CH₃ → CH₃CH₂−CO−NH−CH₃ + H₂O.`,`Nombre: ácido de 3 C → propanamida; metilo en el N → N-metilpropanamida (secundaria).`],r:`N-metilpropanamida`},
{src:`Tema 32, pág. 16`,q:`Escriba la hidrólisis del acetato de etilo: a) en medio ácido; b) con NaOH (saponificación). Nombre los productos.`,
 pide:`Romper el enlace éster con agua.`,datos:[`Acetato de etilo: CH₃−COO−CH₂CH₃`],f:`Ácida: éster + H₂O ⇌ ácido + alcohol · Básica: éster + NaOH → sal + alcohol`,
 pasos:[`a) CH₃−COO−CH₂CH₃ + H₂O ⇌ CH₃−COOH + CH₃CH₂OH (H⁺, calor): ácido acético + etanol. Reversible.`,`b) CH₃−COO−CH₂CH₃ + NaOH → CH₃−COONa + CH₃CH₂OH: acetato (etanoato) de sodio + etanol. Irreversible.`,`La saponificación de grasas (ésteres de ácidos grasos) produce jabones.`],r:`a) ácido acético + etanol (equilibrio); b) acetato de sodio + etanol`},
{src:`Tema 32, pág. 7`,q:`Compruebe la fórmula molecular del 3-metilbutanoato de metilo, CH₃−CH(CH₃)−CH₂−CO−O−CH₃.`,
 pide:`Contar C, H y O.`,datos:[`Material: dice C₅H₁₀O₂`],f:`—`,
 pasos:[`Carbonos: CH₃ (1) + CH (1) + CH₃ ramificación (1) + CH₂ (1) + C=O (1) + O−CH₃ (1) = 6.`,`Hidrógenos: 3 + 1 + 3 + 2 + 0 + 3 = 12.`,`Oxígenos: 2 (el del C=O y el del −O−).`,`Fórmula: C₆H₁₂O₂ (el material tiene un error; ver la corrección de la ficha).`],r:`C₆H₁₂O₂`}
  ],

  FORM:[
{src:`Tema 32, pág. 3–16`,title:`Ésteres y amidas`,rows:[
 [`Éster`,`R−COO−R' · acilo (del ácido) + alcoxi −OR' (del alcohol, O sp³) · R' nunca es H`],
 [`Amida`,`R−CO−NR'R'' · 1ª −NH₂ · 2ª −NHR' · 3ª −NR'R''`],
 [`Fischer`,`R−COOH + R'−OH ⇌ R−COO−R' + H₂O · catalizador ácido (H₂SO₄, HCl anhidro) · reversible`],
 [`Amida desde ácido`,`R−COOH + R'NH₂ → sal R−COO⁻ ⁺NH₃R' → (Δ > 100 °C) R−CONHR' + H₂O`],
 [`Nombre éster`,`[ácido -oato] de [alquilo -ilo] · etanoato de etilo · formiato, acetato, butirato, benzoato · -carboxilato · de fenilo`],
 [`Nombre amida`,`-oico → -amida · etanamida (acetamida) · N-metil… · N,N-dimetil… · -carboxamida (benzamida)`],
 [`Físicas`,`Éster: sin puente de H entre sí, volátil, afrutado, &lt; 1 g/cm³ · amida 1ª/2ª: puentes de H, sólida (salvo formamida), inodora, muy polar`],
 [`Reactividad`,`Haluro de acilo > anhídrido > éster > amida (la menos reactiva)`],
 [`Hidrólisis`,`Éster + H₂O (H⁺) ⇌ ácido + alcohol · éster + NaOH → sal + alcohol (saponificación) · amida: drástica → ácido + sal de amonio / sal + NH₃`],
 [`Salud`,`Ésteres de colesterol (C3−OH + ácido graso; ACAT/LCAT; LDL, HDL) · urea H₂N−CO−NH₂ (desecho del N, H. pylori) · anestésicos: 1 "i" éster, 2 "i" amida`]]}
  ],

  FICHAS:[
{src:`Tema 32, pág. 3`,fig:`derivados`,f:`¿Qué cambia del ácido al éster y a la amida?`,b:`Se cambia el −OH: por −OR' (éster) o por −NH₂/−NHR/−NR₂ (amida).`},
{src:`Tema 32, pág. 3`,fig:`esterPartes`,f:`Partes de un éster y su origen.`,b:`Acilo R−C=O (del ácido) + alcoxi −O−R' (del alcohol). R' nunca es H.`},
{src:`Tema 32, pág. 4`,fig:`amidasClase`,f:`Amidas primarias, secundarias y terciarias.`,b:`1ª R−CONH₂ · 2ª R−CONH−R' · 3ª R−CONR'R''. Se cuentan las cadenas en el N.`},
{src:`Tema 32, pág. 5`,fig:`fischer32`,f:`Esterificación de Fischer.`,b:`Ácido + alcohol ⇌ éster + agua, con catalizador ácido. Reversible.`},
{src:`Tema 32, pág. 5`,fig:`amidaForm`,f:`Ácido + amoníaco: ¿qué pasa?`,b:`Primero, sal de carboxilato de amonio (ácido-base). Con calor fuerte (>100 °C) pierde agua → amida.`},
{src:`Tema 32, pág. 6`,fig:`nomEster`,f:`Regla para nombrar ésteres.`,b:`[ácido -oato] + de + [alquilo -ilo]. CH₃COOCH₂CH₃ = etanoato de etilo.`},
{src:`Tema 32, pág. 8`,fig:null,f:`Nombres comunes de ésteres de la pág. 8.`,b:`Formiato, acetato, butirato, benzoato (de metilo, de etilo…).`},
{src:`Tema 32, pág. 7`,fig:`esterCiclo`,f:`Ésteres con anillos.`,b:`Ácido en anillo: -carboxilato (benzoato de metilo). O unido a benceno: de fenilo (etanoato de fenilo).`},
{src:`Tema 32, pág. 9`,fig:`nomAmida`,f:`Regla para nombrar amidas primarias.`,b:`Quitar "ácido" y cambiar -oico por -amida: etanamida (acetamida). C del C=O = C1.`},
{src:`Tema 32, pág. 10`,fig:`amidaN`,f:`Amidas con grupos en el nitrógeno.`,b:`Prefijo N-: N-metiletanamida. Dos iguales: N,N-dimetilpropanamida.`},
{src:`Tema 32, pág. 11`,fig:`amidaN`,f:`Amida unida a un anillo.`,b:`-carboxamida: benzamida, ciclopentanocarboxamida, N-metilciclohexanocarboxamida.`},
{src:`Tema 32, pág. 13`,fig:`colesterol`,f:`Ésteres de colesterol.`,b:`−OH del C3 del colesterol + −COOH de un ácido graso (ACAT/LCAT). Viajan dentro de LDL y HDL.`},
{src:`Tema 32, pág. 14`,fig:`urea`,f:`Urea: estructura e importancia.`,b:`H₂N−CO−NH₂. Desecho del N (ciclo de la urea). Cremas queratolíticas, prueba del aliento para H. pylori.`},
{src:`Tema 32, pág. 1`,fig:null,f:`Anestésicos locales: ¿éster o amida?`,b:`Una "i" = éster (procaína, cocaína, tetracaína). Dos "i" = amida (lidocaína, bupivacaína).`},
{src:`Tema 32, pág. 15`,fig:`fisicas32`,f:`Ésteres frente a amidas: ebullición, olor y estado.`,b:`Éster: hierve bajo, volátil, afrutado. Amida 1ª/2ª: puentes de H, hierve muy alto, sólida, inodora.`},
{src:`Tema 32, pág. 16`,fig:`hidrolisis`,f:`Hidrólisis de ésteres.`,b:`Ácida: reversible → ácido + alcohol. Básica (saponificación): irreversible → sal + alcohol (jabones).`},
{src:`Tema 32, pág. 16`,fig:null,f:`¿Cuál es más reactivo: éster o amida?`,b:`El éster. La amida es el derivado menos reactivo (resonancia del par libre del N).`}
  ],

  FQ:[
{src:`Tema 32, pág. 6`,q:`"Nombra CH₃−CH₂−COO−CH₃." ¿Qué haces primero?`,o:[`Separo la parte del ácido (con el C=O) de la del alcohol (unida al O)`,`Cuento todos los C juntos`,`Uso el sufijo -amida`,`Lo nombro como éter`],e:`Propanoato de metilo.`},
{src:`Tema 32, pág. 4`,q:`"¿R−CONH−CH₃ es primaria, secundaria o terciaria?"`,o:[`Secundaria: una cadena en el N`,`Primaria`,`Terciaria`,`No es amida`],e:`Cuenta las cadenas unidas al nitrógeno.`},
{src:`Tema 32, pág. 15`,q:`"¿Por qué la acetamida es sólida y el acetato de metilo es líquido?"`,o:[`La amida forma puentes de H (N−H); el éster no`,`El éster es más pesado`,`La amida es iónica`,`El éster tiene más oxígenos`],e:`Las amidas 1ª y 2ª tienen H unido a N.`},
{src:`Tema 32, pág. 16`,q:`"¿Qué es la saponificación?"`,o:[`Hidrólisis de un éster con base fuerte: sal + alcohol (irreversible)`,`Formación de un éster con ácido`,`Hidrólisis de una amida con ácido`,`Oxidación de un alcohol`],e:`Así se fabrican los jabones.`}
  ],

  VIDEOS:[
{sub:`Derivados de los ácidos`,src:`Tema 32, pág. 3–5`,id:`gFHgEubZwL4`,title:`Derivados de ácidos carboxílicos: amidas, anhídridos, ésteres y haluros`,ch:`Arriba la Ciencia`,rep:[`Ésteres y amidas: derivados de los ácidos`,`Estructura de los ésteres`]},
{sub:`Nombrar ésteres`,src:`Tema 32, pág. 6–8`,id:`Tqs5U3DN4RA`,title:`Ésteres: qué son y cómo nombrarlos y formularlos`,ch:`Arriba la Ciencia`,rep:[`Nomenclatura de ésteres`,`Ésteres ramificados, cíclicos y aromáticos`]},
{sub:`Ésteres paso a paso`,src:`Tema 32, pág. 6–7`,id:`0QB8FuIYHHo`,title:`Nomenclatura de ésteres, fácil y paso a paso`,ch:`La Química de Yamil`,rep:[`Nomenclatura de ésteres`]},
{sub:`Tipos de amidas`,src:`Tema 32, pág. 4`,id:`T2vcVlKfPmY`,title:`Amida primaria, secundaria y terciaria`,ch:`Química con Manzanitas`,rep:[`Estructura y clasificación de las amidas`]},
{sub:`Nombrar amidas`,src:`Tema 32, pág. 9–11`,id:`WUTSuRV40Q0`,title:`Nomenclatura de amidas`,ch:`Muñoz Tutoriales`,rep:[`Nomenclatura de amidas primarias`,`Amidas N-sustituidas, ramificadas y cíclicas`]},
{sub:`Esterificación de Fischer`,src:`Tema 32, pág. 5`,id:`ozKkp2Scl18`,title:`Preparación de ésteres por esterificación de Fischer`,ch:`Khan Academy Español`,rep:[`Esterificación de Fischer`]},
{sub:`Saponificación`,src:`Tema 32, pág. 16`,id:`0uGpN84wUbE`,title:`Saponificación de ésteres: hidrólisis básica y formación de jabón`,ch:`Muñoz Tutoriales`,rep:[`Propiedades químicas: reactividad e hidrólisis`]}
  ],

  GENS:[
 {id:`nomEsterG`,t:`t32`,src:`Tema 32, pág. 6`,name:`Nombrar ésteres (IUPAC)`,make(){
   const R = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`], A = [``,`metilo`,`etilo`,`propilo`,`butilo`];
   const AF = [``,`CH₃`,`CH₂−CH₃`,`CH₂−CH₂−CH₃`,`CH₂−CH₂−CH₂−CH₃`];
   const n = between(1, 6), m = between(1, 4);
   const acid = n === 1 ? `H−COO−` : n === 2 ? `CH₃−COO−` : n === 3 ? `CH₃−CH₂−COO−` : `CH₃−(CH₂)${SUBN(n - 2)}−COO−`;
   const name = `${R[n]}anoato de ${A[m]}`;
   const alts = [m <= 6 && n <= 4 && m !== n ? `${R[m]}anoato de ${A[n]}` : `${R[n === 6 ? 5 : n + 1]}anoato de ${A[m]}`, `${R[n]}anoato de ${A[m === 4 ? 3 : m + 1]}`, `${A[m].replace(/o$/, ``)} ${R[n]}anoico`, `ácido ${R[n]}anoico`];
   const opts = shuf([name].concat([...new Set(alts.filter(x => x !== name))].slice(0, 3)));
   return { q:`Elige el nombre IUPAC de: ${acid}${AF[m]}`, opts, correct: opts.indexOf(name),
     pasos:[`Parte del ácido (con el C=O): ${n} C → ácido ${R[n]}anoico → ${R[n]}anoato.`, `Parte del alcohol (unida al −O−): ${m} C → ${A[m]}.`, `Nombre: [ácido -oato] de [alquilo -ilo] = ${name}.`], r: name }; }},
 {id:`nomAmidaG`,t:`t32`,src:`Tema 32, pág. 9–10`,name:`Nombrar amidas (IUPAC)`,make(){
   const R = [``,`met`,`et`,`prop`,`but`,`pent`,`hex`];
   const n = between(1, 6); const k = pick([0, 0, 1, 2, 3]);
   const acil = n === 1 ? `H−CO−` : n === 2 ? `CH₃−CO−` : n === 3 ? `CH₃−CH₂−CO−` : `CH₃−(CH₂)${SUBN(n - 2)}−CO−`;
   const Nn = [`NH₂`, `NH−CH₃`, `NH−CH₂CH₃`, `N(CH₃)₂`][k], pre = [``, `N-metil`, `N-etil`, `N,N-dimetil`][k];
   const tipo = [`primaria`, `secundaria`, `secundaria`, `terciaria`][k];
   const name = `${pre}${R[n]}anamida`;
   const alts = [k ? `${R[n]}anamida` : `N-metil${R[n]}anamida`, `${pre}${R[n === 6 ? 5 : n + 1]}anamida`, `${pre}${R[n]}anamina`, k === 3 ? `N-dimetil${R[n]}anamida` : `${R[n]}anoato de amonio`];
   const opts = shuf([name].concat([...new Set(alts.filter(x => x !== name))].slice(0, 3)));
   return { q:`Elige el nombre IUPAC de: ${acil}${Nn}`, opts, correct: opts.indexOf(name),
     pasos:[`Cadena con el C=O: ${n} C → ácido ${R[n]}anoico → ${R[n]}anamida.`, k ? `Grupos en el nitrógeno: se nombran primero con el prefijo N-${k === 3 ? ` (dos iguales: N,N-di)` : ``}.` : `El N no tiene cadenas (−NH₂): no lleva prefijo.`, `Es una amida ${tipo}. Nombre: ${name}.`], r: name }; }},
 {id:`clasAmidaG`,t:`t32`,src:`Tema 32, pág. 4 y 15`,name:`Clasificar amidas y sus puentes de hidrógeno`,make(){
   const L = [[`CH₃−CONH₂`,0],[`H−CONH₂`,0],[`C₆H₅−CONH₂`,0],[`CH₃−CH₂−CONH₂`,0],[`CH₃−CONH−CH₃`,1],[`CH₃−CONH−CH₂CH₃`,1],[`C₆H₁₁−CONH−CH₃`,1],[`CH₃−CH₂−CON(CH₃)₂`,2],[`H−CON(CH₃)₂`,2],[`CH₃−CON(CH₂CH₃)₂`,2]];
   const [f, k] = pick(L); const opts = [`Primaria; forma puentes de H entre sus moléculas`,`Secundaria; forma puentes de H entre sus moléculas`,`Terciaria; no forma puentes de H entre sus moléculas`,`Terciaria; forma puentes de H entre sus moléculas`];
   return { q:`¿Qué tipo de amida es ${f}?`, opts, correct: k,
     pasos:[`Cuenta las cadenas unidas al nitrógeno: ${k}.`, `0 = primaria (−NH₂), 1 = secundaria (−NHR'), 2 = terciaria (−NR'R'').`, k < 2 ? `Tiene H unido al N: puede formar puentes de H entre sus moléculas.` : `No tiene H unido al N: no forma puentes de H entre sus moléculas (hierve más bajo).`], r: opts[k] }; }},
 {id:`hidrolisisG`,t:`t32`,src:`Tema 32, pág. 16`,name:`Productos de la hidrólisis de ésteres`,make(){
   const L = [[`acetato de metilo`,`ácido acético`,`acetato de sodio`,`metanol`],[`acetato de etilo`,`ácido acético`,`acetato de sodio`,`etanol`],[`formiato de etilo`,`ácido fórmico`,`formiato de sodio`,`etanol`],[`propanoato de metilo`,`ácido propanoico`,`propanoato de sodio`,`metanol`],[`butanoato de etilo`,`ácido butanoico`,`butanoato de sodio`,`etanol`],[`benzoato de metilo`,`ácido benzoico`,`benzoato de sodio`,`metanol`]];
   const d = pick(L); const base = Math.random() < .5;
   const ans = base ? `${d[2]} + ${d[3]}` : `${d[1]} + ${d[3]} (en equilibrio)`;
   const opts = shuf([ans, base ? `${d[1]} + ${d[3]} (en equilibrio)` : `${d[2]} + ${d[3]}`, `${d[1]} + amoníaco`, `${d[3].replace(/ol$/, `al`)} + ${d[1]}`]);
   return { q:`¿Qué productos da la hidrólisis del ${d[0]} ${base ? `con NaOH (saponificación)` : `con agua y ácido (H₂SO₄)`}?`, opts, correct: opts.indexOf(ans),
     pasos:[`El éster se rompe en su parte del ácido y su parte del alcohol (${d[3]}).`, base ? `Con NaOH el ácido queda como sal de sodio: ${d[2]}. Es irreversible.` : `Con ácido sale el ácido libre: ${d[1]}. Es reversible.`, `Productos: ${ans}.`], r: ans }; }}
  ],

  GUIA:[
 { h:`Tema 32 (ésteres y amidas): cómo estudiarlo`, go:[`practica`,`Ir a Práctica`], html:`<p>Los dos salen del ácido del Tema 31 al cambiar su −OH: por <b>−OR'</b> (éster) o por <b>−NH₂/−NHR/−NR₂</b> (amida). Lo más evaluable: <b>nombrar</b> (-oato de …ilo; -amida, N-…), <b>clasificar amidas</b>, las dos <b>reacciones de formación</b> y la <b>tabla de propiedades</b> éster frente a amida.</p>
   <ol><li>Repaso del Tema 32 con sus dibujos. Mira los puntos naranjas: el material tiene fórmulas con errores en las pág. 7 y 8.</li>
   <li>En <b>Práctica</b>: "Nombrar ésteres", "Nombrar amidas", "Clasificar amidas" y "Productos de la hidrólisis", hasta acertar <b>10 seguidos</b>.</li>
   <li>Escribe de memoria la esterificación de Fischer y los dos pasos de la formación de amidas.</li>
   <li>Haz la tabla éster | amida con: puentes de H, ebullición, estado, olor, solubilidad, reactividad e hidrólisis.</li></ol>` }
  ],

  SYN:{ ester:[`esterificacion`,`fischer`,`oato`], amida:[`amino`,`carboxamida`], saponificacion:[`jabon`,`hidrolisis`], jabon:[`saponificacion`], urea:[`ciclo`,`pylori`], lidocaina:[`anestesico`,`amida`], procaina:[`anestesico`,`ester`], colesterol:[`lcat`,`acat`,`lipoproteina`], acetato:[`etanoato`] },

  figs(F, AR){
    const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
    const defs = `<defs><marker id="ah32" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
    const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
    const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    const arrow = (x1, y1, x2, y2 = y1) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ar" marker-end="url(#ah32)"/>`;
    const dbl = (x1, y1, x2, y2, d = 4) => { const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L * d, ny = (x2 - x1) / L * d; return ln((x1 + nx).toFixed(1), (y1 + ny).toFixed(1), (x2 + nx).toFixed(1), (y2 + ny).toFixed(1)) + ln((x1 - nx).toFixed(1), (y1 - ny).toFixed(1), (x2 - nx).toFixed(1), (y2 - ny).toFixed(1)); };
    const C = `var(--t32)`;
    const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>`;
    const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;
    /* acilo genérico: C en (cx,cy), O arriba; R a la izquierda; X a la derecha */
    const acyl = (cx, cy, R, X, o = {}) => T(cx, cy + 6, `C`, { fs:18 }) + dbl(cx, cy - 12, cx, cy - 42) + T(cx, cy - 50, `O`, { fs:17 }) + ln(cx - 12, cy, cx - 40, cy) + T(cx - 46, cy + 6, R, { a:`end`, fs:o.fs || 17 }) + ln(cx + 12, cy, cx + 40, cy) + T(cx + 46, cy + 6, X, { a:`start`, fs:o.fs || 17 });

    F.derivados = { src:`Tema 32, pág. 3`, cap:`Del ácido carboxílico salen sus derivados cambiando el −OH: si entra un −OR' (de un alcohol) es un éster; si entra un −NH₂ (del amoníaco o una amina) es una amida. La parte acilo R−C=O se conserva.`,
      svg: (() => { let s = ``;
        s += acyl(90, 100, `R`, `OH`) + T(90, 150, `ácido carboxílico`, { c:`tb` });
        s += acyl(280, 100, `R`, `OR'`) + hl(316, 82, 52, 28) + T(280, 150, `éster`, { c:`tb` }) + T(280, 168, `−OH → −OR' (alcoxi)`, { c:`tm` });
        s += acyl(460, 100, `R`, `NH₂`) + hl(496, 82, 52, 28) + T(460, 150, `amida`, { c:`tb` }) + T(460, 168, `−OH → −NH₂ (amino)`, { c:`tm` });
        s += arrow(160, 60, 214, 60) + T(187, 48, `+ alcohol`, { c:`tm`, fs:11 });
        s += `<path d="M120 46 Q280 0 430 46" class="dash"/>` + T(280, 18, `+ amoníaco o amina`, { c:`tm`, fs:11 });
        s += `<rect x="40" y="186" width="480" height="26" rx="8" style="fill:${C};opacity:.12"/>` + T(280, 204, `parte acilo R−C=O: igual en los tres`, { c:`tb`, fs:12.5 });
        return svg(560, 222, s, `Ácido carboxílico, éster y amida`); })() };

    F.esterPartes = { src:`Tema 32, pág. 3`, cap:`El éster tiene dos partes: el acilo (R−C=O), que viene del ácido, y el alcoxi (−O−R'), que viene del alcohol. R' siempre es una cadena; si fuera H, sería un ácido.`,
      svg: (() => { let s = ``;
        s += `<rect x="40" y="34" width="160" height="96" rx="10" style="fill:none;stroke:${C};stroke-width:2;stroke-dasharray:6 4"/>` + T(120, 152, `acilo (del ácido)`, { c:`tb` });
        s += `<rect x="208" y="70" width="130" height="60" rx="10" style="fill:none;stroke:var(--muted);stroke-width:2;stroke-dasharray:6 4"/>` + T(272, 152, `alcoxi (del alcohol)`, { c:`tb` });
        s += acyl(160, 104, `R`, `O`) + ln(222, 104, 250, 104) + T(256, 110, `R'`, { a:`start`, fs:17 }) + T(214, 92, `sp³`, { c:`tm`, fs:11 });
        s += box(380, 30, 170, 150) + T(465, 54, `R`, { c:`tb` }) + T(465, 72, `H o cadena`, { c:`tm`, fs:12 }) + T(465, 88, `(del ácido)`, { c:`tm`, fs:11 }) + T(465, 116, `R'`, { c:`tb` }) + T(465, 134, `solo cadena`, { c:`tm`, fs:12 }) + T(465, 150, `(del alcohol)`, { c:`tm`, fs:11 }) + T(465, 168, `nunca H`, { c:`tb`, fs:12 });
        s += T(190, 194, `R−COO−R'  =  R−CO−O−R'`, { c:`tb` });
        return svg(560, 206, s, `Partes de un éster`); })() };

    F.amidasClase = { src:`Tema 32, pág. 4`, cap:`Se cuentan las cadenas unidas al nitrógeno: ninguna, primaria; una, secundaria; dos, terciaria.`,
      svg: (() => { let s = ``;
        const A = [[`H`, `H`, `primaria`, `R−CONH₂`], [`R'`, `H`, `secundaria`, `R−CONH−R'`], [`R'`, `R''`, `terciaria`, `R−CONR'R''`]];
        A.forEach(([a, b, n, f], i) => { const cx = 70 + i * 180; s += T(cx, 96, `C`, { fs:18 }) + dbl(cx, 84, cx, 56) + T(cx, 48, `O`, { fs:16 }) + ln(cx - 12, 90, cx - 34, 90) + T(cx - 40, 96, `R`, { a:`end` }) + ln(cx + 12, 90, cx + 36, 90) + T(cx + 46, 96, `N`, { fs:18, c:`tb` }) + ln(cx + 56, 90, cx + 80, 90) + T(cx + 86, 96, a, { a:`start` }) + ln(cx + 46, 104, cx + 46, 126) + T(cx + 46, 144, b, {});
          s += `<circle cx="${cx + 46}" cy="90" r="16" style="fill:${C};opacity:.15"/>` + T(cx + 30, 176, n, { c:`tb` }) + T(cx + 30, 196, f, { c:`tm` }) + T(cx + 30, 214, `${i} cadena${i === 1 ? `` : `s`} en el N`, { c:`tm`, fs:11 }); });
        return svg(560, 226, s, `Clasificación de las amidas`); })() };

    F.fischer32 = { src:`Tema 32, pág. 5`, cap:`El ácido y el alcohol se unen con ayuda de un ácido (H⁺) y sale una molécula de agua. Es un equilibrio: el agua puede volver a romper el éster.`,
      svg: (() => { let s = ``;
        s += T(80, 92, `R−COOH`, { fs:17 }) + T(80, 114, `ácido`, { c:`tm` }) + T(150, 92, `+`, { fs:18 }) + T(220, 92, `R'−OH`, { fs:17 }) + T(220, 114, `alcohol`, { c:`tm` });
        s += arrow(270, 78, 340) + arrow(340, 96, 270) + T(305, 64, `H⁺`, { c:`tb` }) + T(305, 120, `H₂SO₄ o HCl`, { c:`tm`, fs:11 });
        s += T(420, 92, `R−COO−R'`, { fs:17 }) + T(420, 114, `éster`, { c:`tm` }) + T(492, 92, `+ H₂O`, { a:`start`, fs:17 });
        s += hl(40, 140, 480, 30) + T(280, 160, `reversible: es un equilibrio (el agua hidroliza el éster)`, { c:`tb`, fs:12.5 });
        s += T(280, 196, `el −OH del ácido (mal grupo saliente) se cambia por −OR'`, { c:`tm` });
        return svg(560, 210, s, `Esterificación de Fischer`); })() };

    F.amidaForm = { src:`Tema 32, pág. 4–5`, cap:`El amoníaco o la amina primero actúan como base y forman una sal. Solo calentando fuerte (más de 100 °C) la sal pierde agua y se forma la amida.`,
      svg: (() => { let s = ``;
        s += box(10, 50, 160, 80) + T(90, 82, `R−COOH`, { fs:16 }) + T(90, 104, `+ R'−NH₂`, { fs:16 });
        s += arrow(172, 90, 214) + T(193, 74, `rápido`, { c:`tm`, fs:11 });
        s += box(216, 50, 160, 80) + T(296, 80, `R−COO⁻ ⁺NH₃−R'`, { fs:14.5 }) + T(296, 102, `sal de carboxilato`, { c:`tm`, fs:11 }) + T(296, 116, `de amonio`, { c:`tm`, fs:11 });
        s += arrow(378, 90, 420) + T(399, 36, `Δ > 100 °C`, { c:`tb`, fs:11.5 });
        s += box(422, 50, 130, 80) + T(487, 82, `R−CO−NH−R'`, { fs:14.5 }) + T(487, 104, `+ H₂O`, { fs:15 }) + T(487, 120, `amida`, { c:`tb`, fs:12 });
        s += T(90, 156, `1. ácido-base`, { c:`tm` }) + T(400, 156, `2. deshidratación`, { c:`tm` });
        s += hl(30, 172, 500, 30) + T(280, 192, `Ej.: CH₃−COOH + NH₃ (150 °C) → CH₃−CONH₂ (acetamida) + H₂O`, { c:`tb`, fs:12.5 });
        return svg(560, 212, s, `Formación de amidas`); })() };

    F.nomEster = { src:`Tema 32, pág. 6`, cap:`El nombre se arma al revés de como se escribe la fórmula: primero la parte del ácido (-oato) y al final la del alcohol (de …ilo).`,
      svg: (() => { let s = ``;
        s += hl(40, 34, 154, 34) + T(117, 58, `CH₃−COO`, { fs:20 }) + T(206, 58, `−`, { fs:20 }) + `<rect x="218" y="34" width="110" height="34" rx="6" style="fill:var(--line2);opacity:.5"/>` + T(273, 58, `CH₂−CH₃`, { fs:20 });
        s += T(117, 92, `ácido etanoico`, { c:`tm` }) + T(117, 110, `→ etanoato`, { c:`tb` }) + T(273, 92, `etanol`, { c:`tm` }) + T(273, 110, `→ de etilo`, { c:`tb` });
        s += T(195, 146, `etanoato de etilo`, { c:`tb`, fs:18 }) + T(195, 166, `(acetato de etilo)`, { c:`tm` });
        s += box(370, 26, 180, 160) + T(460, 50, `-oico → -oato`, { c:`tb` }) + T(460, 70, `alcohol → …ilo`, { c:`tb` }) + T(460, 98, `comunes:`, { c:`tm` }) + T(460, 118, `fórmico → formiato`, { c:`tm`, fs:11.5 }) + T(460, 136, `acético → acetato`, { c:`tm`, fs:11.5 }) + T(460, 154, `butírico → butirato`, { c:`tm`, fs:11.5 }) + T(460, 172, `benzoico → benzoato`, { c:`tm`, fs:11.5 });
        s += T(195, 198, `[ácido -oato] + de + [alquilo -ilo]`, { c:`tm` });
        return svg(560, 210, s, `Nomenclatura de ésteres`); })() };

    F.esterCiclo = { src:`Tema 32, pág. 7`, cap:`Si el anillo está del lado del ácido, se usa -carboxilato (o benzoato). Si el anillo está unido al oxígeno (viene de un fenol), es "de fenilo".`,
      svg: (() => { let s = ``;
        s += AR.ring(70, 120, 32, {}) + ln(102, 120, 126, 120) + T(132, 126, `COO−CH₃`, { a:`start`, fs:15 });
        s += T(140, 186, `benzoato de metilo`, { c:`tb` }) + T(140, 204, `(bencenocarboxilato de metilo)`, { c:`tm`, fs:11 });
        s += T(300, 126, `CH₃−COO−`, { a:`end`, fs:15 }) + AR.ring(336, 120, 32, {}) ;
        s += T(318, 186, `etanoato de fenilo`, { c:`tb` }) + T(318, 204, `(acetato de fenilo)`, { c:`tm`, fs:11 });
        s += box(410, 40, 140, 120) + T(480, 64, `anillo en el ácido`, { c:`tm`, fs:11.5 }) + T(480, 82, `-carboxilato`, { c:`tb` }) + T(480, 112, `anillo en el O`, { c:`tm`, fs:11.5 }) + T(480, 130, `de fenilo`, { c:`tb` });
        s += T(280, 34, `3-metilbutanoato de metilo: numerar desde el C del C=O (C₆H₁₂O₂)`, { c:`tm`, fs:12 });
        return svg(560, 214, s, `Ésteres con anillos`); })() };

    F.nomAmida = { src:`Tema 32, pág. 9 y 12`, cap:`Se quita la palabra "ácido" y la terminación -oico se cambia por -amida. El carbono del carbonilo es siempre el 1.`,
      svg: (() => { let s = ``;
        const L = [[`H−CONH₂`, `metanamida`, `formamida`], [`CH₃−CONH₂`, `etanamida`, `acetamida`], [`CH₃−CH₂−CONH₂`, `propanamida`, ``], [`CH₃−(CH₂)₂−CONH₂`, `butanamida`, ``], [`H₂N−CO−NH₂`, `urea`, `la amida más simple`], [`H₂N−CO−CO−NH₂`, `etanodiamida`, `dos grupos amida`]];
        L.forEach(([f, n, c], i) => { const y = 40 + i * 30; s += (i % 2 ? `` : `<rect x="20" y="${y - 20}" width="520" height="28" rx="6" style="fill:${C};opacity:.10"/>`) + T(40, y, f, { a:`start`, fs:15 }) + T(290, y, n, { a:`start`, c:`tb` }) + T(420, y, c, { a:`start`, c:`tm`, fs:12 }); });
        s += T(280, 222, `ácido …oico  →  …amida`, { c:`tb`, fs:15 });
        return svg(560, 234, s, `Nomenclatura de amidas primarias`); })() };

    F.amidaN = { src:`Tema 32, pág. 10–11`, cap:`Los grupos unidos al nitrógeno van al inicio con N- (o N,N- si son dos iguales). Si el grupo amida cuelga de un anillo, se usa -carboxamida.`,
      svg: (() => { let s = ``;
        s += T(30, 44, `CH₃−CO−NH−`, { a:`start`, fs:16 }) + hl(132, 26, 44, 26) + T(136, 44, `CH₃`, { a:`start`, fs:16 }) + T(330, 44, `N-metiletanamida`, { a:`start`, c:`tb` });
        s += T(30, 84, `CH₃−CH₂−CO−N(`, { a:`start`, fs:16 }) + hl(160, 66, 40, 26) + T(162, 84, `CH₃`, { a:`start`, fs:16 }) + T(200, 84, `)₂`, { a:`start`, fs:16 }) + T(330, 84, `N,N-dimetilpropanamida`, { a:`start`, c:`tb` });
        s += T(30, 124, `CH₃−CH(CH₃)−CH₂−CO−NH−CH₂CH₃`, { a:`start`, fs:15 }) + T(330, 124, `N-etil-3-metilbutanamida`, { a:`start`, c:`tb` });
        s += ln(20, 142, 540, 142, `dash`);
        s += AR.ring(80, 186, 26, {}) + ln(106, 186, 126, 186) + T(130, 192, `CONH₂`, { a:`start`, fs:14 }) + T(100, 230, `benzamida`, { c:`tb`, fs:12 });
        s += AR.ring(300, 186, 26, {}, { mode:`none` }) + ln(326, 186, 346, 186) + T(350, 192, `CONH−CH₃`, { a:`start`, fs:14 }) + T(350, 230, `N-metilciclohexanocarboxamida`, { c:`tb`, fs:12 });
        return svg(560, 242, s, `Amidas N-sustituidas y cíclicas`); })() };

    F.colesterol = { src:`Tema 32, pág. 13`, cap:`El −OH del carbono 3 del colesterol se une al −COOH de un ácido graso y sale agua. El éster resultante es muy hidrofóbico y viaja dentro de las lipoproteínas.`,
      svg: (() => { let s = ``;
        s += box(10, 40, 150, 70) + T(85, 70, `Colesterol−OH`, { fs:15 }) + T(85, 92, `(−OH en el C3)`, { c:`tm`, fs:11 });
        s += T(176, 80, `+`, { fs:18 });
        s += box(192, 40, 130, 70) + T(257, 70, `HOOC−R`, { fs:15 }) + T(257, 92, `ácido graso`, { c:`tm`, fs:11 });
        s += arrow(326, 76, 368) + T(347, 28, `ACAT / LCAT`, { c:`tb`, fs:11 });
        s += box(370, 40, 180, 70) + T(460, 66, `Colesterol−O−CO−R`, { fs:14 }) + T(460, 86, `+ H₂O`, { fs:14 }) + T(460, 102, `éster de colesterol`, { c:`tb`, fs:11 });
        s += `<circle cx="160" cy="176" r="44" style="fill:none;stroke:${C};stroke-width:3"/>` + `<circle cx="160" cy="176" r="22" style="fill:${C};opacity:.25"/>` + T(160, 180, `ésteres`, { c:`tb`, fs:11 });
        s += T(160, 236, `lipoproteína (LDL, HDL)`, { c:`tm`, fs:11.5 });
        s += T(330, 160, `centro hidrofóbico:`, { a:`start`, c:`tm` }) + T(330, 180, `transporte en sangre`, { a:`start`, c:`tb`, fs:12.5 }) + T(330, 200, `y almacenamiento`, { a:`start`, c:`tb`, fs:12.5 }) + T(330, 216, `en las células`, { a:`start`, c:`tm`, fs:11.5 });
        return svg(560, 246, s, `Ésteres de colesterol`); })() };

    F.urea = { src:`Tema 32, pág. 1 y 14`, cap:`La urea es la amida más simple: un carbonilo con dos −NH₂. En los anestésicos locales, una sola "i" en el nombre indica un éster y dos "i", una amida.`,
      svg: (() => { let s = ``;
        s += acyl(130, 96, `H₂N`, `NH₂`) + T(130, 140, `urea`, { c:`tb`, fs:16 }) + T(130, 160, `desecho del nitrógeno`, { c:`tm`, fs:11.5 }) + T(130, 176, `ciclo de la urea (hígado)`, { c:`tm`, fs:11.5 }) + T(130, 196, `cremas · prueba H. pylori`, { c:`tm`, fs:11.5 });
        s += box(280, 24, 130, 190) + T(345, 46, `Ésteres`, { c:`tb` }) + T(345, 64, `una "i"`, { c:`tm`, fs:11 });
        [`cocaína`, `procaína`, `proparacaína`, `cloroprocaína`, `tetracaína`].forEach((n, i) => s += T(345, 90 + i * 22, n, { c:`tm`, fs:12 }));
        s += box(420, 24, 130, 190) + T(485, 46, `Amidas`, { c:`tb` }) + T(485, 64, `dos "i"`, { c:`tm`, fs:11 });
        [`lidocaína`, `prilocaína`, `mepivacaína`, `bupivacaína`, `ropivacaína`, `etidocaína`].forEach((n, i) => s += T(485, 90 + i * 20, n, { c:`tm`, fs:12 }));
        return svg(560, 224, s, `Urea y anestésicos locales`); })() };

    F.fisicas32 = { src:`Tema 32, pág. 15`, cap:`La diferencia clave es el H unido al nitrógeno: las amidas primarias y secundarias forman puentes de hidrógeno entre sus moléculas; los ésteres no pueden.`,
      svg: (() => { let s = ``;
        const R = [[`puentes de H entre sí`, `no`, `sí (1ª y 2ª)`], [`ebullición`, `baja / moderada`, `muy alta`], [`estado (25 °C)`, `líquidos volátiles`, `sólidos (salvo formamida)`], [`olor`, `afrutado, floral`, `inodoras`], [`polaridad`, `moderada`, `alta (resonancia)`], [`densidad`, `&lt; agua (0.85–0.95)`, `≈ 1 g/cm³ o más`]];
        s += T(230, 26, `Ésteres`, { c:`tb` }) + T(430, 26, `Amidas`, { c:`tb` });
        R.forEach(([p, e, a], i) => { const y = 54 + i * 30; s += (i % 2 ? `` : `<rect x="10" y="${y - 20}" width="540" height="28" rx="6" style="fill:${C};opacity:.10"/>`) + T(20, y, p, { a:`start`, c:`tm`, fs:12.5 }) + T(230, y, e, { fs:13 }) + T(430, y, a, { fs:13 }); });
        return svg(560, 230, s, `Propiedades físicas de ésteres y amidas`); })() };

    F.hidrolisis = { src:`Tema 32, pág. 16`, cap:`Romper un éster con agua y ácido es reversible; con NaOH (saponificación) es irreversible y da una sal y un alcohol. Las amidas, mucho más estables, solo se rompen en condiciones drásticas.`,
      svg: (() => { let s = ``;
        s += T(280, 24, `más reactivo  ←  haluro de acilo > anhídrido > éster > amida  →  más estable`, { c:`tm`, fs:12 });
        s += box(10, 40, 540, 50) + T(24, 62, `Éster + H₂O (H⁺)`, { a:`start`, c:`tb`, fs:13 }) + T(24, 80, `R−COOR' + H₂O ⇌ R−COOH + R'−OH`, { a:`start`, fs:13 }) + T(540, 70, `reversible`, { a:`end`, c:`tb`, fs:12 });
        s += box(10, 98, 540, 50) + T(24, 120, `Éster + NaOH (saponificación)`, { a:`start`, c:`tb`, fs:13 }) + T(24, 138, `R−COOR' + NaOH → R−COONa + R'−OH`, { a:`start`, fs:13 }) + T(540, 128, `irreversible · jabones`, { a:`end`, c:`tb`, fs:12 });
        s += box(10, 156, 540, 60) + T(24, 178, `Amida (condiciones drásticas, calor)`, { a:`start`, c:`tb`, fs:13 }) + T(24, 196, `ácido: → R−COOH + sal de amonio`, { a:`start`, fs:12.5 }) + T(24, 210, `base: R−CONH₂ + NaOH → R−COONa + NH₃↑`, { a:`start`, fs:12.5 }) + T(540, 190, `irreversible`, { a:`end`, c:`tb`, fs:12 });
        return svg(560, 226, s, `Reactividad e hidrólisis`); })() };
  }
});
