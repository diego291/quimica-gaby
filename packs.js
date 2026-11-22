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
