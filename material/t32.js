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
