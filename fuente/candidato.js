/* ===================== CANDIDATO A EXAMEN =====================
   Puntos que probablemente preguntará el docente, de mayor a menor importancia.
   Solo estructura del examen y temas: no hay notas, respuestas ni datos personales.
   Puntaje (máx. 12) = suma de cinco señales:
     g · está en una guía de ejercicios del Lic.            4
     r · mismo formato que ya usó en un corto/discusión/parcial   3
     p · se pide con desarrollo (escribir, dibujar, calcular)     2
     c · atraviesa varios temas                                 2
     o · aparece como pregunta objetiva recurrente              1 */

const CD_PESO = { g:4, r:3, p:2, c:2, o:1 }, CD_MAX = 12;
const CD_SENAL = { g:`En una guía del Lic.`, r:`Mismo formato que ya usó`, p:`Se escribe, dibuja o calcula`, c:`Une varios temas`, o:`Objetiva recurrente` };
const CD_UNIDAD = [[`todo`, `Todo`], [`VI`, `Hidrocarburos`], [`VII`, `Oxigenadas`]];

const CD_PERFIL = [
  `<b>Parcial 1 (unidades 1–3):</b> 50 preguntas en 2 horas: 43 objetivas y 7 ejercicios con desarrollo (balancear ecuaciones, símbolos y estructuras de Lewis).`,
  `<b>Parcial 2 (unidades 4–5):</b> 30 preguntas en 1 hora: 20 objetivas y 10 problemas con procedimiento. Los problemas son un tercio del examen.`,
  `<b>Los problemas son plantillas que se repiten con otros números:</b> la dilución (C₁V₁ = C₂V₂) salió en un corto y dos veces en el parcial 2; molaridad, % p/v, normalidad y pH también pasaron del corto al parcial.`,
  `<b>Las guías y los cortos anticipan el formato:</b> la Discusión 1 pidió Lewis, geometría y puente de hidrógeno de LiF, CaCO₃ y HCl, y el parcial 1 volvió a pedir esquemas de Lewis.`,
  `<b>Las objetivas miden comprensión:</b> «¿cuál es la diferencia…?», «¿qué ocurre si…?». Las opciones incorrectas son parecidas a la correcta (Arrhenius, Brønsted y Lewis; H₂PO₄⁻ y HPO₄²⁻).`,
  `<b>Hasta ahora hay dos guías de la Unidad VI:</b> alifáticos (4 secciones: fórmula, nombre, hibridación y razonamiento) y aromáticos (nombrar y dibujar). De la Unidad VII aún no hay guía.`
];

/* f: letras de las señales que cumple. gens: ids de la Práctica infinita. */
const CD_ITEMS = [
  { id:`hib`, u:`VI`, t:`t22`, f:`grpc`, n:`Hibridación, geometría y ángulo de cada carbono`,
    q:`Una tabla o una molécula con los carbonos numerados (C1–C5): hibridación, geometría y ángulo de cada uno. También, por qué un triple enlace es lineal.`,
    ev:`Guía de alifáticos, secciones I, III y IV. Los esquemas de geometría molecular ya salieron en la Discusión 1.`,
    com:`Cuenta los enlaces del carbono: 4 sencillos → sp³, tetraédrica, 109,5°. Un doble → sp², trigonal plana, 120°. Un triple → sp, lineal, 180°.`,
    ana:`Cada carbono se clasifica solo, por sus propios enlaces. En H₂C=CH–C≡CH los dos primeros son sp² y los dos últimos sp. Explica la geometría desde la hibridación, no al revés.`,
    tra:`Práctica «Hibridación de cada carbono (molécula mixta)»: 10 seguidas. Después llena de memoria la tabla de 3 filas (alcano, alqueno, alquino) con hibridación, geometría y ángulo.`,
    gens:[`carbMix`, `hib`] },
  { id:`formg`, u:`VI`, t:`t22`, f:`grpo`, n:`Fórmula general y familia a partir de la fórmula molecular`,
    q:`Dada una fórmula como C₆H₁₀, decir si es alcano, alqueno o alquino; o cuántos H tiene un hidrocarburo de n carbonos.`,
    ev:`Guía de alifáticos, secciones I y IV. Es un cálculo corto, de los que el Lic. repite entre cortos y parciales.`,
    com:`Alcano CₙH₂ₙ₊₂, alqueno CₙH₂ₙ, alquino CₙH₂ₙ₋₂. Cada doble enlace o anillo quita 2 H; cada triple enlace quita 4.`,
    ana:`Un dieno también es CₙH₂ₙ₋₂: por eso la guía pide asumir cadena abierta y un solo tipo de insaturación. Si te sobran H respecto a CₙH₂ₙ₊₂, hay un error de conteo.`,
    tra:`Prácticas «Fórmula molecular (cuántos H)» y «Fórmula: ¿cuántos H?»: 8 de cada una. Cierra dibujando una estructura posible para C₅H₈.`,
    gens:[`hform`, `hInsat`] },
  { id:`nomAlcano`, u:`VI`, t:`t23`, f:`gpco`, n:`Nombrar alcanos ramificados y escribir su fórmula semidesarrollada`,
    q:`Dado el nombre (2-metilpentano, 3-etil-2-metilhexano), escribir la fórmula semidesarrollada, o al revés.`,
    ev:`Guía de alifáticos, sección II (tabla nombre ↔ fórmula).`,
    com:`Nombre = ramas con su número + cadena principal + terminación -ano. La cadena principal es la más larga y se numera desde el extremo que dé los números más bajos a las ramas.`,
    ana:`Errores típicos: elegir la cadena que «se ve» recta y no la más larga; ordenar mal las ramas (el orden es alfabético y di-, tri- no cuentan); olvidar el número de cada rama repetida (2,2-dimetil).`,
    tra:`Práctica «Nombrar alcanos ramificados»: 10 seguidas. Luego escribe tú la estructura de 5 nombres y compárala con la ficha.`,
    gens:[`nombre`] },
  { id:`nomAlquenos`, u:`VI`, t:`t24`, f:`gpco`, n:`Nombrar alquenos y alquinos y ubicar el enlace múltiple`,
    q:`Completar la tabla con 1-butino, 3-hexino o un buteno: nombre, fórmula semidesarrollada y carbono con el enlace múltiple.`,
    ev:`Guía de alifáticos, secciones II y III.`,
    com:`Se numera desde el extremo más cercano al enlace múltiple (manda sobre las ramas) y se escribe el número del primer carbono del enlace: 2-buteno, 1-butino. Terminación -eno o -ino.`,
    ana:`1-buteno y 2-buteno son compuestos distintos. Un alquino tiene 2 H menos que el alqueno con los mismos carbonos. Si hay ramas, el enlace múltiple decide la numeración.`,
    tra:`Prácticas «Nombrar alquenos» y «Nombrar alquinos»: 8 de cada una. Escribe de memoria 1-butino y 2-butino y marca la hibridación de cada carbono.`,
    gens:[`nomAlqueno`, `nomAlquino`] },
  { id:`nomArom`, u:`VI`, t:`t26`, f:`gpco`, n:`Nombrar y dibujar derivados del benceno (orto, meta, para y números)`,
    q:`Nombre ↔ estructura de bencenos sustituidos: fluorbenceno, anilina, ácido 4-clorobenzoico, 2,4,6-trinitrotolueno, m-isopropilfenol, 1-bromo-3,5-dimetilbenceno.`,
    ev:`Guía de aromáticos, partes A y B (nombrar y dibujar).`,
    com:`Orto = posiciones 1,2; meta = 1,3; para = 1,4. Si hay un grupo que da el nombre base (–OH fenol, –COOH ácido benzoico, –NH₂ anilina, –CH₃ tolueno), ese carbono es el 1.`,
    ana:`Con tres o más sustituyentes se usan números, no o/m/p. «m-isopropilfenol» y «3-isopropilfenol» son lo mismo: practica pasar de un sistema al otro. Al dibujar, cuenta las posiciones sobre el hexágono.`,
    tra:`Prácticas «Nombrar bencenos disustituidos» y «¿Orto, meta o para?»: 10 en total. Luego dibuja a mano las 4 estructuras de la parte B de la guía sin mirar la ficha.`,
    gens:[`ompNombre`, `ompPos`] },
  { id:`comp3`, u:`VI`, t:`t22`, f:`gpc`, n:`Comparar etano, eteno y etino: enlaces σ y π, rigidez y reactividad`,
    q:`Comparar la reactividad y la forma de los tres, y explicar cómo influyen la hibridación y los enlaces π en la rigidez de la molécula.`,
    ev:`Guía de alifáticos, sección IV (razonamiento).`,
    com:`Etano: solo enlaces σ, rota libremente, poco reactivo. Eteno: un π, plano y rígido, reactivo. Etino: dos π, lineal, reactivo.`,
    ana:`El enlace π es más débil y más expuesto que el σ: por eso lo insaturado reacciona por adición. Escribe tú la cadena: hibridación → geometría → rigidez → reactividad.`,
    tra:`Tabla comparativa del Tema 22 (Repaso): cópiala de memoria en 3 minutos y corrígela. Redacta 4 líneas que respondan «¿por qué el eteno es plano?».`,
    gens:[] },
  { id:`rxn`, u:`VI`, t:`t25`, f:`rpco`, n:`Completar reacciones: adición (alquenos y alquinos) y sustitución del benceno`,
    q:`Completar o predecir el producto: hidrogenación, halogenación, adición de HX; nitración o halogenación del benceno; moles de H₂ para saturar.`,
    ev:`Los cortos y parciales anteriores pidieron «completar las ecuaciones» y balancear reacciones.`,
    com:`Alquenos y alquinos reaccionan por adición: se rompe el π y se agregan átomos (un alqueno suma 1 H₂; un alquino, 2). El benceno conserva su aromaticidad y reacciona por sustitución: un H sale y entra el grupo nuevo.`,
    ana:`Pregunta clave: ¿adición o sustitución? Si el producto sigue siendo aromático, fue sustitución. Cuenta los H₂ necesarios por cada enlace π.`,
    tra:`Prácticas «Moles de H₂ para saturar» y «Producto de la reacción del benceno»: 6 de cada una. Termina balanceando una reacción a mano.`,
    gens:[`moleH2`, `seaProd`] },
  { id:`cistrans`, u:`VI`, t:`t24`, f:`gpo`, n:`Isomería geométrica cis/trans`,
    q:`Justificar por qué el 2-buteno es trigonal plano en C2 y C3, decir si tiene isomería cis/trans y dibujar ambos isómeros.`,
    ev:`Guía de alifáticos, sección IV.`,
    com:`Hay cis/trans cuando cada carbono del doble enlace tiene dos sustituyentes distintos, y el doble enlace no gira. Cis: los iguales del mismo lado; trans: lados opuestos.`,
    ana:`El 1-buteno y el propeno no tienen isómeros cis/trans: un carbono del doble enlace tiene dos H iguales. Pregúntate siempre: ¿cada carbono tiene dos grupos diferentes?`,
    tra:`Práctica «¿Tiene isómeros cis/trans?»: 10 seguidas. Dibuja a mano cis-2-buteno y trans-2-buteno.`,
    gens:[`cistrans`] },
  { id:`fenilo`, u:`VI`, t:`t26`, f:`gpo`, n:`Nombres comunes y el benceno como sustituyente (fenilo)`,
    q:`Dar el nombre de un anillo unido a una cadena larga (octano) e identificar cuándo el benceno actúa como fenilo; nombres comunes (tolueno, anilina, fenol, ácido benzoico).`,
    ev:`Guía de aromáticos, parte A (anillo con cadena de 8 carbonos) y nombres comunes.`,
    com:`En cadenas largas, la cadena es la principal y el anillo es el sustituyente fenilo (C₆H₅–). Fenilo (C₆H₅–) y bencilo (C₆H₅–CH₂–) no son lo mismo.`,
    ana:`Confundir fenilo con bencilo es el error típico: cuenta los carbonos del grupo. Con cadenas cortas, el benceno es la base (alquilbenceno).`,
    tra:`Práctica «Nombres comunes (monosustituidos)»: 10 seguidas. Haz una lista de 8 nombres comunes con su estructura y cúbrela para repasarla.`,
    gens:[`monoNombre`] },
  { id:`fis`, u:`VI`, t:`t22`, f:`rco`, n:`Propiedades físicas: ebullición, solubilidad y densidad`,
    q:`Por qué los hidrocarburos no se disuelven en agua, cómo cambia la ebullición con el número de carbonos y la ramificación, y quién flota sobre el agua.`,
    ev:`Las fuerzas intermoleculares (dispersión de London, dipolo-dipolo) fueron objetivas del parcial 1.`,
    com:`Son apolares: solo fuerzas de dispersión. Más carbonos → ebullición más alta; más ramificada → ebullición más baja. Insolubles en agua, solubles en disolventes apolares y menos densos que el agua.`,
    ana:`Compara siempre dos moléculas con los mismos carbonos: la lineal tiene más superficie de contacto y por eso hierve más. Los aromáticos también son apolares e insolubles en agua.`,
    tra:`Repaso de «Propiedades» (Temas 22 y 23): una tabla de 3 columnas (alcano, alqueno, alquino) y una frase que explique cada tendencia.`,
    gens:[] },
  { id:`comb`, u:`VI`, t:`t23`, f:`rp`, n:`Combustión: balancear y calcular moles de O₂ y masa`,
    q:`Balancear la combustión de un alcano y calcular moles de O₂, o la masa molar del hidrocarburo.`,
    ev:`Balancear ecuaciones fue ejercicio del parcial 1, y los problemas con procedimiento pesaron un tercio del parcial 2.`,
    com:`CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O. Balancea primero C, luego H y al final O.`,
    ana:`Si el O₂ sale con decimales, multiplica toda la ecuación por 2. Comprueba que cada elemento tenga los mismos átomos a ambos lados.`,
    tra:`Prácticas «Combustión: moles de O₂» y «Masa molar de un alcano»: 6 de cada una.`,
    gens:[`comb`, `pmalc`] },
  { id:`huckel`, u:`VI`, t:`t26`, f:`co`, n:`Aromaticidad: regla de Hückel y diferencias con los alifáticos`,
    q:`Cuál de varias estructuras es aromática y por qué (cíclica, plana, conjugada, 4n+2 electrones π).`,
    ev:`Pregunta de comprensión, el formato que domina las objetivas del Lic.`,
    com:`Aromático = cíclico, plano, con electrones π conjugados y 4n+2 electrones π (benceno: 6). Sus 6 enlaces C–C son idénticos por resonancia.`,
    ana:`Cuenta los electrones π de cada ejemplo y prueba n = 0, 1, 2 (2, 6, 10). Si falla alguno de los requisitos, no es aromático aunque tenga dobles enlaces.`,
    tra:`Práctica «Regla de Hückel»: 10 seguidas, justificando en voz alta cada respuesta.`,
    gens:[`huckel`] },
  { id:`carb`, u:`VI`, t:`t23`, f:`co`, n:`Radicales alquilo y tipo de carbono (1°, 2°, 3°, 4°)`,
    q:`Nombrar un radical (metil, etil, isopropil, terc-butil) y decir qué tipo de carbono es cada uno.`,
    ev:`Es la base de la nomenclatura y vuelve en alcoholes (1°, 2°, 3°).`,
    com:`El tipo se cuenta por los carbonos a los que está unido: primario 1, secundario 2, terciario 3, cuaternario 4. Los radicales se nombran cambiando -ano por -ilo.`,
    ana:`Esta clasificación decide la oxidación de los alcoholes en la Unidad VII. Dominarla aquí te ahorra trabajo después.`,
    tra:`Práctica «Tipo de carbono (1°, 2°, 3°, 4°)»: 10 seguidas.`,
    gens:[`carbono`] },
  { id:`iso`, u:`VI`, t:`t23`, f:`co`, n:`Isomería estructural de cadena`,
    q:`Escribir o contar los isómeros de un alcano (pentano: 3; hexano: 5) o de un alquino de pocos carbonos.`,
    ev:`Atraviesa los temas de alcanos y alquinos.`,
    com:`Misma fórmula molecular, distinta cadena. Busca de forma sistemática: cadena lineal, luego quita un carbono y ponlo como rama en cada posición distinta.`,
    ana:`Evita repetidos: dos dibujos distintos pueden ser el mismo compuesto girado. Compruébalo nombrándolos: si el nombre IUPAC coincide, es el mismo.`,
    tra:`Dibuja los 5 isómeros del hexano y nómbralos. Compáralos con la ficha «Isomería estructural».`,
    gens:[] },
  { id:`conf`, u:`VI`, t:`t23`, f:`o`, n:`Conformaciones del etano, el butano y el ciclohexano`,
    q:`Qué conformación es más estable: alternada o eclipsada, anti o gauche, silla o bote.`,
    ev:`Pregunta objetiva de comprensión; no aparece en las guías.`,
    com:`La alternada es más estable que la eclipsada (menos repulsión). En el butano la más estable es la anti. En el ciclohexano, la silla.`,
    ana:`Regla corta: más cerca = más repulsión = menos estable.`,
    tra:`Lee las 3 fichas de conformaciones una vez y dibuja de memoria el etano en alternada y eclipsada (proyección de Newman).`,
    gens:[] },
  { id:`clin`, u:`VI`, t:`t24`, f:`o`, n:`Aplicaciones y relevancia clínica de los hidrocarburos`,
    q:`Para qué sirve la hidrogenación de aceites, qué es la polimerización o qué aromáticos hay en aminoácidos y fármacos.`,
    ev:`Pregunta objetiva de recuerdo; no aparece en las guías.`,
    com:`Hidrogenación de aceites: convierte dobles enlaces en sencillos y endurece la grasa. Polimerización: muchos alquenos se unen en una cadena larga (polietileno).`,
    ana:`Son preguntas cortas: aprende una frase por tema y una función concreta por ejemplo.`,
    tra:`Lee «Hidrogenación de aceites», «Polimerización» e «Interés biológico» una vez y escribe una frase de cada una.`,
    gens:[] },

  { id:`nomFunc`, u:`VII`, t:`t27`, f:`rpco`, n:`Nomenclatura IUPAC y prioridad del grupo funcional`,
    q:`Nombrar o dibujar alcoholes, fenoles, éteres, aldehídos, cetonas, ácidos, ésteres y amidas, y elegir qué grupo da el sufijo cuando hay varios.`,
    ev:`Aún no hay guía de la Unidad VII. Se espera el mismo formato nombre ↔ estructura de las guías de la Unidad VI.`,
    com:`Prioridad de mayor a menor: ácido carboxílico > éster > amida > aldehído > cetona > alcohol. El grupo de mayor prioridad da el sufijo y numera la cadena.`,
    ana:`Los demás grupos pasan a prefijos (hidroxi-, oxo-, alcoxi-). Practica con moléculas que tengan dos grupos distintos.`,
    tra:`Prácticas «¿Qué función da el sufijo?» y «Nombrar alcoholes»: 5 de cada una. Luego las de aldehídos, ácidos y ésteres.`,
    gens:[`prioFunc`, `nomAlcohol`] },
  { id:`tipoAlc`, u:`VII`, t:`t27`, f:`rpco`, n:`Alcoholes 1°, 2° y 3° y el producto de su oxidación`,
    q:`Clasificar un alcohol y decir si se oxida y a qué: aldehído, cetona o ácido.`,
    ev:`«Completar reacciones» es un formato que el Lic. ya usó. Une alcoholes con aldehídos, cetonas y ácidos.`,
    com:`1° → aldehído y, con más oxidante, ácido carboxílico. 2° → cetona. 3° → no se oxida en condiciones normales (el carbono del –OH no tiene H).`,
    ana:`Cuenta cuántos carbonos están unidos al carbono del –OH: eso define el tipo. Esta clasificación conecta con los Temas 30 y 31.`,
    tra:`Práctica «Alcohol 1°, 2° o 3° y su oxidación»: 10 seguidas, escribiendo el producto de cada una.`,
    gens:[`tipoAlc`] },
  { id:`puenteH`, u:`VII`, t:`t27`, f:`rco`, n:`Puentes de hidrógeno: ebullición y solubilidad de las funciones oxigenadas`,
    q:`Ordenar por ebullición un alcohol, un éter y un alcano de masa parecida; explicar la solubilidad en agua según el número de carbonos.`,
    ev:`Los puentes de hidrógeno salieron como objetiva del parcial 1 y como esquema en la Discusión 1.`,
    com:`Los grupos –OH y N–H forman puentes de hidrógeno: alcoholes, fenoles, ácidos y amidas hierven más que éteres y ésteres de masa parecida. Con muchos carbonos baja la solubilidad en agua.`,
    ana:`Con masas parecidas: ácido carboxílico > alcohol > aldehído/cetona > éter > alcano. Si dudas, cuenta cuántos puentes de H puede formar cada molécula.`,
    tra:`Haz una tabla de 5 filas (alcano, éter, cetona, alcohol, ácido) con la fuerza intermolecular principal de cada una. Repasa «Propiedades físicas» de los Temas 27, 28 y 31.`,
    gens:[] },
  { id:`acidez`, u:`VII`, t:`t27`, f:`rco`, n:`Orden de acidez: ácidos carboxílicos, fenoles y alcoholes`,
    q:`Ordenar por acidez y justificar con la estabilidad del anión (resonancia).`,
    ev:`Se apoya en ácidos y bases (Unidades 4–5), que fueron un parcial completo.`,
    com:`Ácido carboxílico > fenol > alcohol. El carboxilato y el fenóxido se estabilizan por resonancia; el alcóxido no.`,
    ana:`Un grupo atractor de electrones (–NO₂, –Cl) aumenta la acidez; uno donador (–CH₃) la reduce. Explica siempre con la estabilidad del anión.`,
    tra:`Repasa «Orden de acidez» (Tema 27) y «Reacciones de acidez» (Tema 31). Redacta una explicación de 3 líneas sin mirar.`,
    gens:[] },
  { id:`carbonilo`, u:`VII`, t:`t30`, f:`rpo`, n:`Aldehídos y cetonas: nombrar, reconocer (Tollens/Fehling) y reducir`,
    q:`Nombrar un aldehído o una cetona; decir cuál da positivo con Tollens o Fehling; predecir el alcohol que resulta de reducirlo.`,
    ev:`Mismo formato de nombrar y completar reacciones que ya usó el Lic.`,
    com:`Aldehído: –CHO en el extremo, sufijo -al. Cetona: C=O dentro de la cadena, sufijo -ona. Tollens y Fehling dan positivo con aldehídos, no con cetonas. Reducción: aldehído → alcohol 1°; cetona → alcohol 2°.`,
    ana:`Las cetonas no tienen H en el carbono del carbonilo y por eso no se oxidan con facilidad. Pregúntate: ¿el C=O está en el extremo o en medio de la cadena?`,
    tra:`Prácticas «Nombrar aldehídos y cetonas», «¿Da positivo Tollens o Fehling?» y «Reducción: ¿qué alcohol se forma?»: 5 de cada una.`,
    gens:[`nomCarbonilo`, `tollens`, `redCarbonilo`] },
  { id:`acidoC`, u:`VII`, t:`t31`, f:`rpo`, n:`Ácidos carboxílicos: nombres IUPAC y comunes, y propiedades`,
    q:`Nombrar un ácido (IUPAC y común) y decir su estado y solubilidad según el número de carbonos.`,
    ev:`Mismo formato de nombrar que ya usó el Lic.`,
    com:`Sufijo -oico y el carbono del –COOH es el C1. Los de pocos carbonos son líquidos solubles de olor fuerte; al crecer la cadena baja la solubilidad.`,
    ana:`Aprende los nombres comunes de los 4 primeros: fórmico, acético, propiónico y butírico.`,
    tra:`Prácticas «Nombrar ácidos carboxílicos (IUPAC)» y «Nombre común ↔ IUPAC de ácidos»: 8 de cada una.`,
    gens:[`nomAcidoC`, `comunAcido`, `propAcido`] },
  { id:`esterAmida`, u:`VII`, t:`t32`, f:`rpo`, n:`Ésteres y amidas: nombrar, formar (Fischer) e hidrolizar`,
    q:`Nombrar un éster o una amida, escribir el éster que forman un ácido y un alcohol, y los productos de su hidrólisis.`,
    ev:`Mismo formato de nombrar y completar reacciones que ya usó el Lic.`,
    com:`Éster = ácido + alcohol − H₂O, con catalizador ácido (esterificación de Fischer); nombre «alcanoato de alquilo». Amida = ácido + amoníaco o amina. La hidrólisis del éster devuelve ácido y alcohol.`,
    ana:`El nombre del éster se lee al revés: primero la parte del ácido (acetato de etilo: ácido acético + etanol). Las amidas primarias y secundarias forman puentes de hidrógeno.`,
    tra:`Prácticas «Nombrar ésteres», «Nombrar amidas» y «Productos de la hidrólisis de ésteres».`,
    gens:[`nomEsterG`, `nomAmidaG`, `hidrolisisG`] },
  { id:`eteres`, u:`VII`, t:`t28`, f:`rpo`, n:`Éteres y epóxidos: nombrar y clasificar`,
    q:`Nombrar un éter como alcoxialcano y con nombre común, clasificarlo (simétrico, asimétrico, cíclico) y reconocer un epóxido.`,
    ev:`Mismo formato de nombrar y clasificar que ya usó el Lic.`,
    com:`Éter: R–O–R′. IUPAC: la cadena más larga es el alcano y la otra es el alcoxi (metoxietano). Común: «etil metil éter». Epóxido: éter de tres miembros, muy reactivo por la tensión del anillo.`,
    ana:`En el nombre IUPAC la rama más corta lleva el «oxi». El éter no forma puentes de hidrógeno consigo mismo, por eso hierve mucho menos que el alcohol isómero.`,
    tra:`Prácticas «Nombrar éteres (IUPAC)», «Clasificar éteres» y «Nombrar éteres cíclicos»: 5 de cada una.`,
    gens:[`nomEter`, `tipoEter`, `cicloEter`] },
  { id:`clinO`, u:`VII`, t:`t32`, f:`o`, n:`Relevancia en salud: etanol, fenoles, ácidos, anestésicos y urea`,
    q:`Para qué se usa cada compuesto en clínica o laboratorio: etanol (asepsia), fenoles, ácido acético, anestésicos locales, urea, ésteres de colesterol.`,
    ev:`Pregunta objetiva de recuerdo; no aparece en las guías.`,
    com:`Aprende una frase por compuesto: a qué función pertenece y para qué se usa.`,
    ana:`Son preguntas de recuerdo: relaciona cada uso con la función química que lo explica.`,
    tra:`Lee las fichas «en medicina» y «en la salud» de los Temas 27, 30, 31 y 32 una vez.`,
    gens:[] }
];

const cdScore = it => [...it.f].reduce((s, k) => s + CD_PESO[k], 0);
const cdTier = p => p >= 9 ? [`Máxima`, `max`] : p >= 6 ? [`Alta`, `alta`] : p >= 3 ? [`Media`, `media`] : [`Baja`, `baja`];

function cdItem(it, rank, abierto){
  const p = cdScore(it), [tn, tk] = cdTier(p), d = el(`details`, `cditem cd-${tk}`); if (abierto) d.open = true;
  const sm = el(`summary`, `cdsum`);
  sm.innerHTML = `<span class="cdrank" aria-label="Puesto ${rank}">${rank}</span><span class="cdmain"><b class="cdt">${it.n}</b><span class="cdmeta"><span class="cdtier">${tn}</span><span class="cdsc" aria-label="${p} de ${CD_MAX} puntos"><span class="cdbar"><i style="width:${Math.round(p / CD_MAX * 100)}%"></i></span>${p}/${CD_MAX}</span><span class="cdtema">${TOPICS[it.t].n}</span></span></span>`;
  d.append(sm);
  const b = el(`div`, `cdbody`);
  b.append(el(`p`, `cdq`, `<b>Qué te pueden pedir:</b> ${it.q}`));
  const ch = el(`div`, `cdchips`); [...it.f].forEach(k => ch.append(el(`span`, `cdchip`, CD_SENAL[k]))); b.append(ch);
  b.append(el(`p`, `cdev muted`, it.ev));
  [[`Comprender`, it.com], [`Analizar`, it.ana], [`Trabajar`, it.tra]].forEach(([k, t]) => b.append(el(`div`, `cdstep`, `<span class="cdsk">${k}</span><span>${t}</span>`)));
  const a = el(`div`, `btnrow cdact`);
  a.append(btn(`Repasar ${TOPICS[it.t].n}`, `btn`, () => { S.sel = new Set([it.t]); save(); go(`repaso`); }));
  it.gens.forEach(id => { const g = GENS.find(x => x.id === id); if (g) a.append(btn(`Practicar: ${g.n || g.name || g.title}`, `btn ghost`, () => { S.sel.add(g.t); PR.gen = g; PR.cur = null; PR.rand = false; save(); go(`practica`); })); });
  b.append(a); d.append(b); return d;
}

function vCandidato(v){
  const x = S.x; if (!CD_UNIDAD.some(u => u[0] === x.cdf)) x.cdf = `todo`;
  const c0 = el(`section`, `rfcard`); c0.append(el(`h2`, ``, `Candidato a examen`), el(`p`, `muted rfsub`, `Los puntos que más probablemente pregunte el Lic., de mayor a menor importancia. Empieza por arriba: ahí van la comprensión, el análisis y el trabajo con más retorno.`));
  const pf = el(`details`, `cdperf`); pf.append(el(`summary`, ``, `Qué mostraron los parciales, cortos y guías del Lic.`)); const ul = el(`ul`, `rfli`); CD_PERFIL.forEach(t => ul.append(el(`li`, ``, t))); pf.append(ul); c0.append(pf);
  const cm = el(`details`, `cdperf`); cm.append(el(`summary`, ``, `Cómo se calcula el orden (puntaje de 12)`));
  const ul2 = el(`ul`, `rfli`); Object.keys(CD_PESO).forEach(k => ul2.append(el(`li`, ``, `<b>+${CD_PESO[k]}</b> ${CD_SENAL[k]}`)));
  cm.append(ul2, el(`p`, `muted`, `Máxima: 9 o más · Alta: 6 a 8 · Media: 3 a 5 · Baja: menos de 3. Es una estimación, no una lista oficial del Lic.`)); c0.append(cm);
  const fl = el(`div`, `cdfil`); fl.setAttribute(`role`, `group`); fl.setAttribute(`aria-label`, `Filtrar por unidad`);
  CD_UNIDAD.forEach(([k, n]) => { const b = btn(n, `cdf${x.cdf === k ? ` on` : ``}`, () => { x.cdf = k; save(); renderView(); }); b.setAttribute(`aria-pressed`, x.cdf === k); fl.append(b); });
  c0.append(fl); v.append(c0);
  const lista = CD_ITEMS.filter(it => x.cdf === `todo` || it.u === x.cdf).map(it => [it, cdScore(it)]).sort((a, b) => b[1] - a[1]);
  const w = el(`div`, `cdlist`); lista.forEach(([it], i) => w.append(cdItem(it, i + 1, i === 0))); v.append(w);
  v.append(el(`p`, `muted cdnota`, `Cuando el Lic. entregue la guía de la Unidad VII o aclare qué temas entran al parcial, hay que actualizar este orden.`));
}
