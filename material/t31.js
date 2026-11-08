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
