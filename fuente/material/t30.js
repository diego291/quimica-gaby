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
