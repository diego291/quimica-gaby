/* =====================================================================
   Preguntas extra de "Comprueba lo que leíste", escritas a partir del
   texto de cada tarjeta del repaso. Formato:
   addChecks(`Título exacto de la tarjeta`, [
     [`Pregunta`, [`Correcta`, `Incorrecta 1`, `Incorrecta 2`, `Incorrecta 3`], `Explicación`],
   ]);
   La fuente (tema y página) se toma de la tarjeta.
   ===================================================================== */
const CHECK_EXTRA = {};
function addChecks(title, arr){ (CHECK_EXTRA[title] = CHECK_EXTRA[title] || []).push(...arr); }

/* ---------------- Tema 15 · Soluciones ---------------- */
addChecks(`Qué es una solución`, [
  [`¿Qué significa que una solución sea «homogénea»?`, [`Que se ve una sola fase, igual en toda su extensión`, `Que tiene un solo componente`, `Que siempre es incolora`, `Que se separa en capas al reposar`], `Homogénea = una sola fase uniforme en toda la mezcla.`],
  [`Una solución de CuSO₄ es de color azul. Esto significa que:`, [`Sigue siendo una solución: puede tener color y ser transparente`, `Ya no es una solución porque tiene color`, `Es una suspensión`, `Sus partículas miden más de 100 nm`], `Las soluciones son transparentes, pero pueden tener color: se ve a través de ellas.`],
  [`¿Cuántos componentes como mínimo forman una solución?`, [`Dos`, `Uno`, `Tres`, `Cuatro`], `Es una mezcla homogénea de dos o más sustancias.`],
  [`El O₂ y el CO₂ disueltos en el plasma son ejemplo de solución:`, [`Gas en líquido`, `Sólido en líquido`, `Líquido en líquido`, `Gas en gas`], `No toda solución es sólido en líquido: hay gas en líquido, como los gases del plasma.`],
  [`El etanol mezclado con agua es un ejemplo de solución:`, [`Líquido en líquido`, `Gas en líquido`, `Sólido en sólido`, `Sólido en líquido`], `Etanol en agua: líquido disuelto en líquido.`],
  [`¿Por qué no se ven las partículas de una solución ni a simple vista ni dispersan la luz?`, [`Porque miden entre 0.1 y 2.0 nm`, `Porque están en movimiento`, `Porque tienen carga eléctrica`, `Porque el solvente las oculta`], `Su tamaño (0.1–2.0 nm) es tan pequeño que no se ven ni dispersan la luz.`],
  [`Un frasco de suero salino pasa días en el estante. ¿Qué se espera?`, [`El NaCl sigue disuelto: no se deposita en el fondo`, `El NaCl forma un sedimento blanco`, `Se separan dos capas`, `El agua se evapora por completo`], `Las soluciones no se separan en reposo.`],
]);
addChecks(`Soluto y solvente`, [
  [`La regla para distinguir soluto y solvente se basa en:`, [`La cantidad de cada componente`, `El estado físico (sólido o líquido)`, `El color de la mezcla`, `Cuál se agregó primero`], `La regla es de cantidad, no de estado físico.`],
  [`En etanol al 10 %, ¿cuál es el soluto?`, [`El etanol`, `El agua`, `Ambos`, `Ninguno`], `El etanol está en menor cantidad (10 %), así que es el soluto; el agua (90 %) es el solvente.`],
  [`En etanol al 70 %, ¿cuál es el soluto?`, [`El agua (30 %)`, `El etanol (70 %)`, `No tiene soluto`, `El recipiente`], `Al 70 % se invierte: el solvente es el alcohol y el soluto el agua.`],
  [`En el suero fisiológico al 0.9 %, el solvente es:`, [`El agua`, `El NaCl`, `El suero completo`, `El plasma`], `El NaCl (0.9 %) es el soluto y el agua el solvente.`],
  [`Otro nombre del solvente es:`, [`Disolvente`, `Soluto`, `Precipitado`, `Coloide`], `Solvente y disolvente son sinónimos.`],
  [`El soluto se define como el componente que está en:`, [`Menor cantidad`, `Mayor cantidad`, `Estado sólido siempre`, `Estado líquido siempre`], `Soluto = menor cantidad.`],
]);
addChecks(`Propiedades generales y coligativas`, [
  [`¿Qué describen las propiedades generales de una solución?`, [`Cómo es la solución`, `Cuántas partículas tiene`, `Su punto de congelación`, `Su presión osmótica`], `Las generales describen cómo es la solución; las coligativas dependen de cuántas partículas hay.`],
  [`El aumento ebulloscópico significa que la solución:`, [`Hierve a mayor temperatura que el solvente puro`, `Hierve a menor temperatura`, `Congela a mayor temperatura`, `No puede hervir`], `Aumento ebulloscópico: el punto de ebullición sube.`],
  [`El descenso crioscópico significa que la solución:`, [`Congela a menor temperatura que el solvente puro`, `Congela a mayor temperatura`, `Hierve a menor temperatura`, `Pierde presión osmótica`], `Descenso crioscópico: el punto de congelación baja.`],
  [`«Inseparabilidad mecánica» quiere decir que el soluto:`, [`No se separa por filtración o reposo; solo por destilación, cristalización o evaporación`, `No se puede separar nunca`, `Se separa al filtrar`, `Se separa al centrifugar`], `Solo métodos físicos como destilación, cristalización o evaporación separan los componentes.`],
  [`La «conservación de masa» en una solución se expresa como:`, [`Masa de solución = masa de soluto + masa de solvente`, `Masa de soluto = masa de solvente`, `Masa de solución = masa de solvente`, `Volumen de solución = volumen de soluto`], `La masa total es la suma de soluto y solvente.`],
  [`¿Cuál es una propiedad general (no coligativa) de las soluciones?`, [`Homogeneidad`, `Presión osmótica`, `Descenso de la presión de vapor`, `Descenso crioscópico`], `La homogeneidad es general; las otras tres son coligativas.`],
  [`Que las propiedades coligativas «no dependan de la naturaleza química» significa que:`, [`Importa el número de partículas, no de qué sustancia son`, `Solo funcionan con NaCl`, `Dependen del color del soluto`, `Dependen solo del solvente`], `Coligativas = cuentan partículas, no las identifican.`],
]);
addChecks(`Factores que afectan la solubilidad`, [
  [`¿Qué es la solubilidad?`, [`La cantidad máxima de soluto que puede disolverse`, `La rapidez con que se disuelve un soluto`, `El volumen del solvente`, `La temperatura de ebullición`], `Solubilidad = cuánto soluto como máximo puede disolverse.`],
  [`¿Cuántos factores afectan la solubilidad según el material?`, [`Cuatro: naturaleza, temperatura, presión y pH`, `Dos: temperatura y presión`, `Tres: agitación, temperatura y tamaño`, `Uno: la temperatura`], `Naturaleza de soluto y solvente, temperatura, presión y pH.`],
  [`Para sólidos y líquidos, al aumentar la temperatura la solubilidad:`, [`Aumenta`, `Disminuye`, `No cambia nunca`, `Se vuelve cero`], `Sólidos y líquidos: a mayor temperatura, mayor solubilidad.`],
  [`La presión tiene efecto importante sobre la solubilidad de:`, [`Los gases`, `Los sólidos`, `Los líquidos`, `Todos por igual`], `En sólidos y líquidos el efecto de la presión es insignificante.`],
  [`Una sustancia polar se disolverá mejor en:`, [`Un solvente polar como el agua`, `Un solvente apolar como el aceite`, `Cualquier solvente por igual`, `Ningún solvente`], `Lo semejante disuelve a lo semejante: polar con polar.`],
  [`¿A qué solutos afecta el pH en su solubilidad?`, [`A los que son ácidos o bases débiles`, `A todos los gases`, `Solo al NaCl`, `A ninguno`], `El pH influye en ácidos y bases débiles: su forma ionizada es más soluble.`],
  [`Entre la forma ionizada y la forma neutra de un ácido débil, ¿cuál es más soluble en agua?`, [`La forma ionizada (con carga)`, `La forma neutra`, `Son iguales`, `Ninguna es soluble`], `La forma con carga es mucho más soluble en agua.`],
  [`En la gráfica de gases de la pág. 7, ¿qué pasa con el CO₂ al calentar?`, [`Su solubilidad cae marcadamente`, `Su solubilidad sube`, `Se mantiene plana`, `Primero sube y luego baja`], `Los gases pierden solubilidad al calentar; el CO₂ cae marcadamente.`],
]);
addChecks(`Velocidad de disolución`, [
  [`La velocidad de disolución se refiere a:`, [`Qué tan rápido se disuelve el soluto por unidad de tiempo`, `Cuánto soluto se disuelve como máximo`, `La temperatura de la solución`, `La cantidad de solvente`], `Solubilidad = cuánto; velocidad = qué tan rápido.`],
  [`¿Por qué el azúcar en polvo se disuelve más rápido que un cubo de azúcar?`, [`Tiene más superficie de contacto con el solvente`, `Es más soluble`, `Tiene menos masa total`, `Es otra sustancia`], `Partícula más pequeña = más superficie de contacto = más rápido.`],
  [`El aumento de temperatura acelera la disolución porque:`, [`Aumenta la energía cinética y los choques entre moléculas`, `Disminuye la superficie de contacto`, `Satura la solución`, `Evapora el soluto`], `Más energía cinética: las moléculas chocan más rápido y más seguido.`],
  [`Al acercarse a la saturación, la velocidad de disolución:`, [`Disminuye`, `Aumenta`, `Se mantiene máxima`, `Se vuelve negativa`], `Es máxima al inicio y baja al acercarse a la saturación.`],
  [`¿Qué factor aparece tanto en la solubilidad como en la velocidad de disolución?`, [`La temperatura`, `La agitación`, `El grado de subdivisión`, `La presión`], `La temperatura es el único factor de las dos listas.`],
  [`¿Cuál de estos factores NO cambia la velocidad de disolución según el material?`, [`El color del soluto`, `La agitación`, `El grado de subdivisión`, `La temperatura`], `Los factores son subdivisión, agitación, temperatura y concentración.`],
]);
addChecks(`Soluciones de uso en el laboratorio clínico`, [
  [`¿Qué soluciones mantienen estable el pH durante una reacción o tinción?`, [`Las amortiguadoras (buffers)`, `Las de limpieza`, `Las conservadoras`, `Las tinciones`], `Los buffers mantienen el pH estable.`],
  [`Las soluciones que participan directamente en la determinación del analito son:`, [`Los reactivos`, `Las conservadoras`, `Las de limpieza`, `Las amortiguadoras`], `Los reactivos intervienen directamente en la medición.`],
  [`¿Cuál es la función de las soluciones conservadoras?`, [`Preservar la muestra hasta su análisis`, `Colorear estructuras`, `Desinfectar superficies`, `Regular el pH`], `Las conservadoras preservan la muestra.`],
  [`Las tinciones se usan para:`, [`Colorear estructuras para observarlas al microscopio`, `Desinfectar material`, `Conservar la sangre`, `Medir el pH`], `Las tinciones colorean estructuras para el microscopio.`],
  [`¿Cuántos tipos de soluciones de laboratorio mencionan los objetivos del tema?`, [`Cinco`, `Tres`, `Cuatro`, `Seis`], `Amortiguadoras, reactivos, conservadoras, de limpieza y tinciones.`],
  [`¿Por qué es importante preparar con exactitud estas soluciones?`, [`Porque condiciona la exactitud de cualquier prueba diagnóstica`, `Porque así duran más en el estante`, `Porque cambia su color`, `Porque lo exige el fabricante del equipo`], `Su preparación exacta condiciona la exactitud de las pruebas.`],
  [`Las soluciones para desinfectar superficies y material son las:`, [`De limpieza`, `Tinciones`, `Reactivos`, `Amortiguadoras`], `De limpieza: desinfección de superficies y material.`],
]);

/* ---------------- Tema 16 · Unidades de concentración ---------------- */
addChecks(`Saturación de las soluciones`, [
  [`La saturación es la capacidad máxima de un disolvente para disolver un soluto a:`, [`Una temperatura y presión determinadas`, `Cualquier temperatura`, `Presión cero`, `Solo 25 °C`], `La saturación depende de la temperatura y la presión.`],
  [`En el punto de saturación existe un equilibrio dinámico porque:`, [`La velocidad de disolución es igual a la de cristalización`, `El soluto deja de moverse`, `No hay más solvente`, `La temperatura se vuelve constante`], `Se disuelve y cristaliza soluto a la misma velocidad.`],
  [`Una solución insaturada (diluida):`, [`Tiene menos soluto del que podría disolver`, `Tiene exactamente el máximo de soluto`, `Tiene más soluto que el límite`, `No tiene soluto`], `Insaturada = todavía admite más soluto.`],
  [`Si agrega más soluto a una solución saturada:`, [`Ya no se disuelve`, `Se disuelve más rápido`, `Se vuelve insaturada`, `Se vuelve sobresaturada sola`], `Saturada = máximo; lo que se agregue ya no se disuelve.`],
  [`¿Por qué la solución sobresaturada se considera inestable?`, [`Cualquier perturbación brusca cristaliza el exceso de soluto`, `Se evapora sola`, `Cambia de color`, `Pierde todo el soluto al instante sin causa`], `Tiene más soluto que el límite; una perturbación hace cristalizar el exceso.`],
  [`¿Qué factores afectan la saturación según el material?`, [`Temperatura y naturaleza química`, `Agitación y color`, `Volumen del recipiente y luz`, `Solo la presión`], `Factores: temperatura y naturaleza química.`],
  [`Ordene de menor a mayor cantidad de soluto:`, [`Insaturada < saturada < sobresaturada`, `Saturada < insaturada < sobresaturada`, `Sobresaturada < saturada < insaturada`, `Insaturada < sobresaturada < saturada`], `Insaturada < Saturada (máximo) < Sobresaturada (inestable).`],
]);
addChecks(`Unidades físicas y químicas`, [
  [`¿Qué indican las unidades de concentración?`, [`Cuánto soluto hay en una cantidad de solución o de solvente`, `El color de la solución`, `La temperatura de la solución`, `La velocidad de disolución`], `Expresan la cantidad de soluto en una cantidad de solución o solvente.`],
  [`¿Cuál de estas es una unidad química de concentración?`, [`Molaridad`, `% m/m`, `% v/v`, `ppm`], `Las químicas usan moles o equivalentes: M, m y N.`],
  [`¿Cuál de estas es una unidad física de concentración?`, [`% m/v`, `Molaridad`, `Molalidad`, `Normalidad`], `Las físicas usan masa o volumen: porcentajes y ppm.`],
  [`¿Qué unidad usa el solvente (y no la solución) en el denominador?`, [`La molalidad`, `La molaridad`, `El % m/v`, `La normalidad`], `Solo la molalidad usa kg de solvente.`],
  [`La fórmula de la normalidad es:`, [`Equivalentes de soluto / L de solución`, `Moles de soluto / kg de solvente`, `g de soluto / mL de solución × 100`, `mg de soluto / L de solución`], `N = equivalentes / L de solución (N = M × n).`],
  [`La fórmula del % v/v es:`, [`mL de soluto / mL de solución × 100`, `g de soluto / g de solución × 100`, `g de soluto / mL de solución × 100`, `moles / L`], `% v/v compara volúmenes.`],
  [`Las unidades químicas se basan en:`, [`Moles o equivalentes`, `Solo gramos`, `Solo mililitros`, `Grados Celsius`], `Químicas: moles (M, m) o equivalentes (N).`],
]);
addChecks(`Los tres porcentajes`, [
  [`En todo porcentaje de concentración, se divide entre:`, [`La solución (soluto + solvente)`, `Solo el solvente`, `Solo el soluto`, `El recipiente`], `Clave: soluto entre SOLUCIÓN, por 100.`],
  [`«Se disuelven 25 g en 175 g de agua». La masa de la solución es:`, [`200 g`, `175 g`, `25 g`, `150 g`], `El agua es solo solvente: 25 + 175 = 200 g.`],
  [`«...en agua suficiente hasta 300 mL». ¿Qué representa 300 mL?`, [`El volumen total de la solución`, `El volumen del solvente que hay que sumar`, `El volumen del soluto`, `Un dato que no se usa`], `«Hasta» = ya es la solución; no se suma nada.`],
  [`¿Qué porcentaje es el más usado en sueros, fármacos y química analítica?`, [`% m/v`, `% m/m`, `% v/v`, `ppm`], `El % m/v es el más usado en el laboratorio clínico.`],
  [`En el % m/v se asume que 1 mL de solución pesa aproximadamente:`, [`1 g`, `10 g`, `0.1 g`, `1 kg`], `Se asume 1 mL ≈ 1 g.`],
  [`Despeje: la masa de soluto se calcula como:`, [`% × solución / 100`, `solución / % × 100`, `% / solución`, `solución − %`], `Soluto = % × solución / 100.`],
  [`¿Cuántos gramos de soluto hay en 200 g de una solución al 15 % m/m?`, [`30 g`, `15 g`, `13.3 g`, `185 g`], `Soluto = 15 × 200 / 100 = 30 g.`],
  [`¿Qué cantidad de solución al 5 % m/v se prepara con 10 g de soluto?`, [`200 mL`, `50 mL`, `500 mL`, `20 mL`], `Solución = soluto × 100 / % = 10 × 100 / 5 = 200 mL.`],
]);
addChecks(`Partes por millón (ppm)`, [
  [`¿Para qué tipo de soluciones se usan las ppm?`, [`Muy diluidas (trazas)`, `Muy concentradas`, `Saturadas`, `Sobresaturadas`], `Las ppm son para trazas: impurezas en agua, suelo, aire o medicamentos.`],
  [`Antes de calcular ppm, el soluto debe estar en ___ y el volumen en ___:`, [`mg ; L`, `g ; mL`, `kg ; mL`, `mol ; L`], `ppm = mg / L: verifique unidades antes de dividir.`],
  [`800 mL equivalen a:`, [`0.8 L`, `8 L`, `0.08 L`, `80 L`], `800 mL ÷ 1000 = 0.8 L.`],
  [`Una muestra de 0.5 L contiene 2 mg de un contaminante. ¿Cuántas ppm?`, [`4 ppm`, `1 ppm`, `0.25 ppm`, `2.5 ppm`], `ppm = 2 mg / 0.5 L = 4 ppm.`],
  [`¿Cuál es un uso típico de las ppm según el material?`, [`Impurezas en agua, suelo, aire o medicamentos`, `Preparar suero fisiológico`, `Expresar la acidez de un ácido fuerte`, `Calcular normalidad`], `Se usan para cantidades diminutas (trazas).`],
  [`Una solución contiene 3 ppm de flúor. En 2 L hay:`, [`6 mg de flúor`, `1.5 mg de flúor`, `3 mg de flúor`, `0.6 mg de flúor`], `mg = ppm × L = 3 × 2 = 6 mg.`],
]);
addChecks(`Molaridad (M)`, [
  [`La molaridad se define como:`, [`Moles de soluto por litro de solución`, `Moles de soluto por kg de solvente`, `Gramos de soluto por 100 mL`, `Equivalentes por litro`], `M = moles de soluto / L de solución.`],
  [`¿Cuál es el primer paso de la infografía para calcular molaridad?`, [`Leer el enunciado y pasar el volumen a litros`, `Dividir moles entre litros`, `Calcular la normalidad`, `Multiplicar por 100`], `Paso 1: anotar masa y volumen (en L).`],
  [`Los moles de soluto se calculan como:`, [`masa (g) / PM (g/mol)`, `PM / masa`, `masa × PM`, `volumen / PM`], `Moles = g / PM.`],
  [`¿Por qué se usa la molaridad en el laboratorio?`, [`Simplifica los cálculos estequiométricos y se mide por volumen`, `No depende de la temperatura`, `Mide la capacidad reactiva`, `Es la única unidad exacta`], `Facilita la estequiometría y se trabaja por volumen.`],
  [`En el parcial, ¿qué PM del NaCl se debe usar según la nota de la pág. 16?`, [`58.5 g/mol`, `57 g/mol`, `23 g/mol`, `35.5 g/mol`], `Con Cl = 35.5: 23 + 35.5 = 58.5 g/mol.`],
  [`Se disuelven 2 moles de soluto hasta 4 L de solución. La molaridad es:`, [`0.5 M`, `2 M`, `8 M`, `4 M`], `M = 2 / 4 = 0.5 M.`],
  [`¿Cuántos moles hay en 250 mL de una solución 2 M?`, [`0.5 mol`, `500 mol`, `8 mol`, `2 mol`], `moles = M × L = 2 × 0.25 = 0.5 mol.`],
]);
addChecks(`Molalidad (m)`, [
  [`La molalidad se escribe con:`, [`m minúscula`, `M mayúscula`, `N mayúscula`, `% m/m`], `Molalidad = m minúscula.`],
  [`¿Por qué la molaridad sí cambia con la temperatura?`, [`Porque el volumen cambia al calentar o enfriar`, `Porque la masa cambia con la temperatura`, `Porque los moles se evaporan`, `Porque el PM cambia`], `El volumen varía con la temperatura; la masa no.`],
  [`En un cálculo de molalidad, la masa de solvente debe expresarse en:`, [`Kilogramos`, `Gramos`, `Litros`, `Miligramos`], `m = moles / kg de solvente.`],
  [`Se disuelven 0.4 mol de soluto en 200 g de agua. La molalidad es:`, [`2 m`, `0.08 m`, `0.002 m`, `20 m`], `200 g = 0.2 kg; m = 0.4 / 0.2 = 2 m.`],
  [`500 g de agua equivalen a:`, [`0.5 kg`, `5 kg`, `0.05 kg`, `50 kg`], `500 ÷ 1000 = 0.5 kg.`],
  [`La principal ventaja de la molalidad es que:`, [`No depende de la temperatura`, `Es más fácil de medir con pipeta`, `Usa el volumen de la solución`, `Mide la capacidad reactiva`], `La masa no cambia al calentar o enfriar.`],
]);
addChecks(`Normalidad (N)`, [
  [`La normalidad se define como:`, [`Equivalentes-gramo de soluto por litro de solución`, `Moles por kg de solvente`, `Moles por litro de solución`, `mg por litro`], `N = Eq-g / L.`],
  [`El peso equivalente (PE) se calcula como:`, [`PM / n`, `PM × n`, `masa / PM`, `n / PM`], `PE = PM / n.`],
  [`El número de equivalentes-gramo se calcula como:`, [`masa / PE`, `PE / masa`, `masa × PE`, `PM / masa`], `Eq-g = masa / PE.`],
  [`Para una base, el factor n es:`, [`El número de OH⁻`, `El número de H⁺`, `La carga del anión`, `Siempre 1`], `Bases: n = número de OH⁻ (NaOH = 1, Ca(OH)₂ = 2).`],
  [`El factor n del H₃PO₄ es:`, [`3`, `1`, `2`, `4`], `Libera 3 H⁺.`],
  [`El factor n del Na₂CO₃ es:`, [`2`, `1`, `3`, `6`], `Sal: 2 cationes Na⁺ × carga 1 = 2.`],
  [`Una solución de Ca(OH)₂ 0.1 M tiene una normalidad de:`, [`0.2 N`, `0.1 N`, `0.05 N`, `0.3 N`], `N = M × n = 0.1 × 2 = 0.2 N.`],
  [`Para una sal, el factor n se obtiene como:`, [`Número de cationes × carga de cada catión`, `Número de aniones`, `Número de átomos de oxígeno`, `Siempre 2`], `Sal: cationes × carga (Al₂(SO₄)₃ = 2 × 3 = 6).`],
]);
addChecks(`Qué fórmula usar según el enunciado`, [
  [`El enunciado da gramos de soluto y gramos de solución. Use:`, [`% m/m`, `% v/v`, `% m/v`, `Molaridad`], `g y g: % m/m.`],
  [`El enunciado da mL de soluto líquido y mL de solución. Use:`, [`% v/v`, `% m/m`, `ppm`, `Molalidad`], `mL y mL: % v/v.`],
  [`El enunciado da gramos de soluto y mL de solución, sin pedir «molar». Use:`, [`% m/v`, `% m/m`, `Normalidad`, `ppm`], `g y mL: % m/v.`],
  [`Le dan mg de soluto en litros (cantidades diminutas). Use:`, [`ppm`, `% m/v`, `Molaridad`, `Normalidad`], `mg en L: ppm.`],
  [`Le dan g, la fórmula química y g de agua, y piden «molal». Use:`, [`Molalidad`, `Molaridad`, `% m/m`, `Normalidad`], `Pide molal y da g de solvente: molalidad.`],
  [`Le piden la concentración en «equivalentes». Use:`, [`Normalidad`, `Molaridad`, `% m/v`, `ppm`], `Equivalentes: normalidad.`],
  [`Tiene una solución madre que se va a diluir. Use:`, [`C₁V₁ = C₂V₂`, `% m/m`, `Molalidad`, `ppm`], `Dilución de solución madre: C₁V₁ = C₂V₂ (Tema 17).`],
  [`Le dan g, fórmula química y volumen de solución, y piden «molar». Use:`, [`Molaridad`, `Molalidad`, `% m/v`, `Normalidad`], `Pide molar con volumen de solución: molaridad.`],
]);

/* ---------------- Tema 17 · Dilución y coligativas ---------------- */
addChecks(`Preparación de soluciones por dilución`, [
  [`Diluir una solución consiste en:`, [`Agregar solvente a una solución concentrada`, `Agregar más soluto`, `Calentar la solución`, `Evaporar el solvente`], `Diluir = agregar solvente: sube el volumen, baja la concentración.`],
  [`Al diluir, el volumen ___ y la concentración ___:`, [`aumenta ; disminuye`, `disminuye ; aumenta`, `aumenta ; aumenta`, `no cambia ; disminuye`], `Más volumen, menor concentración.`],
  [`En C₁V₁ = C₂V₂, ¿qué representan C₁ y V₁?`, [`La concentración y el volumen de la solución madre (stock)`, `La concentración y el volumen finales`, `El soluto y el solvente`, `Los moles y la masa`], `1 = solución madre; 2 = solución final deseada.`],
  [`En la analogía del jugo concentrado, al agregar agua:`, [`El jugo es el mismo; solo queda más «aguado»`, `Hay más jugo que antes`, `Desaparece parte del jugo`, `El jugo se concentra`], `La cantidad de soluto no cambia; se reparte en más volumen.`],
  [`¿Qué volumen de un stock 2 M se necesita para preparar 100 mL de una solución 0.5 M?`, [`25 mL`, `400 mL`, `50 mL`, `10 mL`], `V₁ = C₂V₂ / C₁ = 0.5 × 100 / 2 = 25 mL.`],
  [`Se diluyen 50 mL de NaCl 10 % hasta 500 mL. La nueva concentración es:`, [`1 %`, `100 %`, `5 %`, `0.1 %`], `C₂ = C₁V₁ / V₂ = 10 × 50 / 500 = 1 %.`],
  [`Para obtener C₂ se despeja:`, [`C₂ = C₁V₁ / V₂`, `C₂ = V₂ / C₁V₁`, `C₂ = C₁V₂ / V₁`, `C₂ = C₁ × V₁ × V₂`], `Despeje directo de C₁V₁ = C₂V₂.`],
]);
addChecks(`Las cuatro reglas de la dilución`, [
  [`Si al resolver una dilución le da C₂ mayor que C₁, significa que:`, [`Invirtió algo en el despeje`, `El resultado es correcto`, `Hay que sumar los volúmenes`, `La solución se concentró`], `C₂ siempre es menor que C₁: revise el despeje.`],
  [`V₂ en la fórmula de dilución es:`, [`El volumen final de la solución`, `El volumen de agua que se agrega`, `El volumen de la solución madre`, `La diferencia de volúmenes`], `V₂ es el volumen final; el agua agregada es V₂ − V₁.`],
  [`Si V₁ está en mL, V₂ debe expresarse en:`, [`mL`, `L`, `kg`, `Cualquier unidad`], `V₁ y V₂ en las mismas unidades.`],
  [`Se toman 20 mL de stock para preparar 250 mL finales. ¿Cuánto solvente se agrega?`, [`230 mL`, `250 mL`, `270 mL`, `20 mL`], `Solvente = V₂ − V₁ = 250 − 20 = 230 mL.`],
  [`¿Para qué sirven las cuatro reglas de la dilución?`, [`Para verificar el resultado`, `Para calcular el PM`, `Para hallar la normalidad`, `Para medir la temperatura`], `Úselas para comprobar que el resultado tiene sentido.`],
  [`Si C₁ está en mg/mL, C₂ debe estar en:`, [`mg/mL`, `M`, `%`, `ppm`], `C₁ y C₂ en las mismas unidades.`],
]);
addChecks(`Propiedades coligativas`, [
  [`Las propiedades coligativas dependen exclusivamente de:`, [`La cantidad de partículas de soluto`, `La identidad química del soluto`, `El color del soluto`, `El tipo de recipiente`], `Solo cuenta cuántas partículas hay.`],
  [`Una solución necesita mayor temperatura para hervir que el solvente puro. Esto es:`, [`Aumento ebulloscópico`, `Descenso crioscópico`, `Presión osmótica`, `Descenso de la presión de vapor`], `Ebulloscópico = sube el punto de ebullición.`],
  [`El factor i de van 't Hoff del CaCl₂ es:`, [`3`, `1`, `2`, `4`], `CaCl₂ → Ca²⁺ + 2Cl⁻: 3 partículas.`],
  [`El factor i de la glucosa es:`, [`1`, `2`, `3`, `0`], `La glucosa no se disocia: i = 1.`],
  [`El factor i del NaCl es:`, [`2`, `1`, `3`, `0.5`], `NaCl → Na⁺ + Cl⁻: 2 partículas.`],
  [`Los electrolitos tienen mayor efecto coligativo porque:`, [`Se ionizan y producen más partículas`, `Son más pesados`, `Tienen color`, `No se disuelven`], `Más partículas = más efecto; se multiplica por i.`],
  [`La presión osmótica se relaciona con el paso de solvente a través de:`, [`Una membrana semipermeable`, `Un filtro de papel`, `Una pipeta`, `Un tubo capilar`], `Es la fuerza para detener el paso de solvente por una membrana semipermeable.`],
]);
addChecks(`Tonicidad y eritrocitos`, [
  [`¿Qué solución se considera isotónica para el eritrocito?`, [`NaCl 0.9 %`, `Agua destilada`, `NaCl 3 %`, `NaCl 10 %`], `NaCl 0.9 % tiene la misma presión osmótica que el interior celular.`],
  [`En un medio isotónico, el movimiento neto de agua es:`, [`Nulo`, `Hacia dentro de la célula`, `Hacia fuera de la célula`, `Solo de salida`], `Flujo neto nulo: el eritrocito conserva su forma bicóncava.`],
  [`¿Qué forma conserva el eritrocito en un medio isotónico?`, [`Bicóncava`, `Esférica hinchada`, `Arrugada (crenada)`, `Alargada`], `En isotónico conserva su forma bicóncava normal.`],
  [`En un medio hipertónico, la presión osmótica externa es ___ que la intracelular:`, [`Mayor`, `Menor`, `Igual`, `Nula`], `Hipertónico: mayor presión externa; el agua sale.`],
  [`¿Por qué las suspensiones de glóbulos rojos se preparan en salina 0.9 % y no en agua destilada?`, [`Porque en agua destilada se lisarían antes del análisis`, `Porque el agua destilada los arruga`, `Porque la salina los colorea`, `Porque el agua destilada es tóxica para el analista`], `El agua destilada es hipotónica: provoca hemólisis.`],
  [`La hemólisis consiste en que el eritrocito:`, [`Se hincha y revienta`, `Se arruga`, `Se divide`, `Conserva su forma`], `Hemólisis: entra agua, se hincha y revienta.`],
  [`La crenación ocurre cuando el eritrocito:`, [`Pierde agua y se arruga`, `Gana agua y revienta`, `Está en NaCl 0.9 %`, `Está en agua destilada`], `Crenación: medio hipertónico, el agua sale y la célula se arruga.`],
]);

/* ---------------- Tema 18 · Generalidades ácido-base ---------------- */
addChecks(`Homeostasis y equilibrio`, [
  [`El equilibrio fisiológico es la manifestación de:`, [`La homeostasis`, `La saponificación`, `La conductividad`, `La neutralización`], `El equilibrio es la manifestación de la homeostasis.`],
  [`Que los parámetros oscilen dentro de rangos fisiológicos normales corresponde a lo que en el laboratorio se reporta como:`, [`Valores de referencia`, `Errores de medición`, `Valores críticos únicamente`, `Controles de calidad`], `Esos rangos son los valores de referencia.`],
  [`¿Cuál de estos parámetros forma parte del medio interno que se mantiene estable?`, [`El pH`, `El color de la piel`, `La estatura`, `El grupo sanguíneo`], `Medio interno: temperatura, pH, glucosa, agua y electrolitos.`],
  [`En un arco reflejo, la estructura que procesa la información y decide la respuesta es:`, [`El centro integrador`, `El receptor`, `El efector`, `El estímulo`], `Arco reflejo: receptor → centro integrador → efector.`],
  [`¿Qué sistemas coordinan la cooperación interorgánica jerárquica?`, [`El nervioso y el endocrino, con los sistemas de intercambio`, `Solo el muscular`, `Solo el óseo`, `El tegumentario y el linfático únicamente`], `Nervioso, endocrino y sistemas de intercambio (renal, respiratorio, digestivo).`],
  [`¿Cuál es un sistema de intercambio mencionado en el material?`, [`El renal`, `El esquelético`, `El tegumentario`, `El inmunológico`], `Los sistemas de intercambio son el renal, el respiratorio y el digestivo.`],
  [`El medio interno lo forman los líquidos que:`, [`Bañan a las células (extracelulares)`, `Están dentro del núcleo`, `Se eliminan en la orina`, `Forman el sudor`], `El medio interno son los líquidos extracelulares.`],
]);
addChecks(`Conductividad eléctrica`, [
  [`La conductividad eléctrica es la capacidad de una disolución para:`, [`Transmitir corriente eléctrica`, `Cambiar de color`, `Disolver más soluto`, `Mantener el pH`], `Conductividad = capacidad de transmitir corriente.`],
  [`En un cable metálico, la corriente viaja por:`, [`Electrones`, `Iones`, `Protones`, `Moléculas neutras`], `Metal = electrones; solución = iones.`],
  [`Si una solución no tiene iones:`, [`No conduce la corriente`, `Conduce mejor`, `Se vuelve ácida`, `Se satura`], `Sin iones no hay conducción.`],
  [`¿Qué instrumentos del laboratorio se basan en la conducción por iones?`, [`Los electrodos para medir electrolitos y pH`, `Las centrífugas`, `Los microscopios`, `Las pipetas`], `Es la base de los electrodos de electrolitos y pH.`],
  [`¿Cuál de estos iones puede transportar corriente en una solución?`, [`K⁺`, `Un electrón libre del cobre`, `Una molécula de glucosa`, `Una molécula de urea`], `Iones como Na⁺, K⁺, Cl⁻, H⁺ y OH⁻ transportan la corriente.`],
]);
addChecks(`Electrolitos fuertes, débiles y no electrolitos`, [
  [`Un electrolito débil en agua:`, [`Se ioniza parcialmente; la mayoría queda neutra`, `Se disocia al 100 %`, `No forma ningún ion`, `No se disuelve`], `Débil: ionización parcial y conducción baja.`],
  [`¿Cuál de estos es un electrolito fuerte?`, [`NaOH`, `CH₃COOH`, `NH₃`, `Sacarosa`], `Fuertes: NaCl, HCl, NaOH.`],
  [`El etanol disuelto en agua es:`, [`Un no electrolito`, `Un electrolito fuerte`, `Un electrolito débil`, `Un ácido fuerte`], `No electrolitos: sacarosa, etanol, urea.`],
  [`¿Por qué los no electrolitos no conducen la corriente?`, [`Se disuelven pero no forman iones (enlaces covalentes)`, `No se disuelven`, `Forman demasiados iones`, `Son metales`], `No forman iones: conducción nula.`],
  [`La conducción de un electrolito fuerte es:`, [`Alta`, `Baja`, `Nula`, `Variable según el color`], `Fuerte = 100 % disociado = conducción alta.`],
  [`Además del tipo de electrolito, ¿qué otro factor influye en la conductividad?`, [`La concentración`, `El color del recipiente`, `La forma del vaso`, `La hora del día`], `Influyen la concentración, el tamaño del ion y la pureza del solvente.`],
  [`El NH₃ en agua se clasifica como:`, [`Electrolito débil`, `Electrolito fuerte`, `No electrolito`, `Sal neutra`], `Débiles: CH₃COOH y NH₃.`],
]);
addChecks(`Definiciones operacionales de ácido y base`, [
  [`Una definición operacional describe una sustancia por:`, [`Lo que se observa y mide en el laboratorio`, `Su estructura molecular teórica`, `Su número atómico`, `Su precio`], `Operacional = lo observable y medible.`],
  [`El sabor característico de una base es:`, [`Amargo`, `Agrio`, `Salado`, `Dulce`], `Base: amarga (jabón, bicarbonato, cafeína).`],
  [`¿Qué textura tienen las bases al tacto?`, [`Resbaladiza, jabonosa`, `Áspera`, `Pegajosa`, `Arenosa`], `Las bases se sienten resbaladizas.`],
  [`A 25 °C, una base tiene un pH:`, [`Mayor de 7`, `Menor de 7`, `Igual a 7`, `Igual a 0`], `Base: pH > 7; ácido: pH < 7.`],
  [`El naranja de metilo en una base se ve:`, [`Amarillo`, `Rojo/rosa`, `Azul`, `Incoloro`], `Naranja de metilo: rojo en ácido, amarillo en base.`],
  [`La reacción de un ácido con una base produce:`, [`Sal + agua`, `Hidrógeno gaseoso`, `Jabón + glicerol`, `Dióxido de carbono`], `Neutralización: ácido + base → sal + agua.`],
  [`¿Qué tienen en común ácidos y bases respecto a la conductividad?`, [`Ambos conducen la corriente porque son electrolitos`, `Ninguno conduce`, `Solo los ácidos conducen`, `Solo las bases conducen`], `Ambos son electrolitos.`],
  [`La fenolftaleína en un ácido se ve:`, [`Incolora`, `Rosa intenso`, `Azul`, `Amarilla`], `Fenolftaleína: incolora en ácido, fucsia en base.`],
]);
addChecks(`Indicadores ácido-base`, [
  [`En HIn ⇌ H⁺ + In⁻, la forma In⁻ muestra el color de:`, [`La forma básica`, `La forma ácida`, `La sal neutra`, `El solvente`], `HIn = color ácido; In⁻ = color básico.`],
  [`Dentro del intervalo de viraje, el indicador muestra:`, [`Un color intermedio`, `El color ácido`, `El color básico`, `Ningún color`], `Debajo: color ácido; encima: básico; dentro: intermedio.`],
  [`El rojo fenol vira entre pH:`, [`6.6 y 8.0`, `3.2 y 4.4`, `8.2 y 10.0`, `10.1 y 12.0`], `Rojo fenol: amarillo → rojo entre 6.6 y 8.0.`],
  [`Una muestra de pH 11 con fenolftaleína se verá:`, [`Rosa fucsia`, `Incolora`, `Amarilla`, `Azul`], `pH 11 está por encima del viraje (8.2–10.0): color básico, fucsia.`],
  [`El azul de bromotimol en pH 9 se ve:`, [`Azul`, `Amarillo`, `Verde`, `Rojo`], `Por encima de 7.6 muestra su color básico: azul.`],
  [`¿Qué indicador de la tabla vira en el rango más alcalino?`, [`Amarillo de alizarina (10.1–12.0)`, `Rojo congo (3.0–5.0)`, `Rojo de metilo (4.8–6.0)`, `Naranja de metilo (3.2–4.4)`], `El amarillo de alizarina vira entre 10.1 y 12.0.`],
  [`El rojo de metilo en pH 4.0 se ve:`, [`Rojo`, `Amarillo`, `Anaranjado intermedio`, `Incoloro`], `pH 4.0 está debajo de su viraje (4.8–6.0): color ácido, rojo.`],
  [`¿Por qué un indicador cambia de color?`, [`Sus dos formas (ácida y básica) absorben la luz de forma distinta`, `Porque se descompone`, `Porque se evapora`, `Porque reacciona con el oxígeno`], `Las formas HIn e In⁻ absorben la luz de forma diferente.`],
]);
addChecks(`Cómo se mide el pH en el laboratorio`, [
  [`¿Qué método mide el pH comparando el color con una escala?`, [`El papel o tiras indicadoras`, `El pHmetro de mesa`, `El gasómetro`, `La balanza analítica`], `Las tiras indicadoras se comparan con una escala de color.`],
  [`El pHmetro da una lectura:`, [`Digital, con electrodo`, `Por comparación de colores`, `Por olor`, `Por peso`], `pHmetro de bolsillo o de mesa: lectura digital con electrodo.`],
  [`¿En qué estudio de rutina se incluye una almohadilla de pH?`, [`El uroanálisis (tira reactiva de orina)`, `El hemograma`, `La glucosa capilar`, `El tipeo sanguíneo`], `La tira de orina incluye una almohadilla de pH.`],
  [`¿A qué temperatura se reporta la gasometría mostrada en la pág. 9?`, [`37 °C`, `25 °C`, `0 °C`, `100 °C`], `El reporte se mide a 37 °C (temperatura corporal).`],
  [`Una gasometría con pH 7.30 está:`, [`Por debajo del intervalo de referencia`, `Dentro del intervalo`, `Por encima del intervalo`, `En el límite superior`], `Referencia 7.35–7.45; 7.30 es menor.`],
  [`¿Qué equipo mide el pH de la sangre arterial?`, [`El gasómetro`, `La tira de orina`, `El papel tornasol`, `El refractómetro`], `El gasómetro reporta pH y gases en sangre.`],
]);

/* ---------------- Tema 19 · Teorías ácido-base y Kw ---------------- */
addChecks(`Teoría de Arrhenius (1884)`, [
  [`Según Arrhenius, un ácido es una sustancia que:`, [`Contiene hidrógeno y en agua libera H⁺`, `Acepta un par de electrones`, `Acepta un protón`, `Libera OH⁻ en agua`], `Arrhenius: ácido libera H⁺ en agua (HCl, H₂SO₄).`],
  [`¿En qué medio funciona la teoría de Arrhenius?`, [`Solo en medio acuoso`, `En cualquier solvente`, `En fase gaseosa`, `Solo en metales`], `Se limita a soluciones en agua.`],
  [`En la neutralización de Arrhenius, el H⁺ y el OH⁻ forman:`, [`H₂O`, `H₂`, `O₂`, `H₃O⁺`], `H⁺ + OH⁻ → H₂O, y queda una sal en solución.`],
  [`¿Qué teorías surgieron a partir de las limitantes de Arrhenius?`, [`Brønsted-Lowry y Lewis`, `Dalton y Bohr`, `Le Chatelier y Henry`, `Avogadro y Kw`], `Las limitantes dieron lugar a Brønsted-Lowry y Lewis.`],
  [`¿Cuál de estas sustancias es una base de Arrhenius?`, [`NaOH`, `HCl`, `NH₃`, `BF₃`], `NaOH libera OH⁻ en agua; el NH₃ no tiene OH⁻.`],
  [`¿En qué año se propuso la teoría de Arrhenius?`, [`1884`, `1923`, `1950`, `1800`], `Arrhenius: 1884; Brønsted-Lowry y Lewis: 1923.`],
]);
addChecks(`Teoría de Brønsted-Lowry (1923)`, [
  [`Según Brønsted-Lowry, una base es una especie que:`, [`Acepta un protón (H⁺)`, `Dona un protón`, `Libera OH⁻ en agua`, `Dona un par de electrones siempre`], `Base de Brønsted: aceptor de protones.`],
  [`Las reacciones ácido-base de Brønsted-Lowry son:`, [`Transferencias de protones`, `Transferencias de electrones`, `Disoluciones de sales`, `Cambios de estado`], `Ácido-base = transferencia de H⁺.`],
  [`Un ácido, al ceder su H⁺, se convierte en:`, [`Su base conjugada`, `Su ácido conjugado`, `Agua`, `Una sal neutra`], `Ácido − H⁺ = base conjugada.`],
  [`En NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, ¿quién actúa como ácido?`, [`El H₂O`, `El NH₃`, `El NH₄⁺`, `El OH⁻`], `El agua pierde un H (se vuelve OH⁻): es el ácido.`],
  [`Frente al HCl, el agua se comporta como:`, [`Base`, `Ácido`, `Sal`, `No reacciona`], `El agua es base frente al HCl y ácido frente al NH₃.`],
  [`Un ácido débil genera una base conjugada:`, [`Más fuerte`, `Muy débil`, `Igual de débil`, `Neutra siempre`], `Ácido fuerte → base conjugada muy débil; ácido débil → base conjugada más fuerte.`],
  [`Los miembros de un par conjugado difieren en:`, [`Un H⁺`, `Un electrón`, `Un OH⁻ siempre`, `Una molécula de agua`], `Pares conjugados: difieren en un H.`],
  [`Método rápido para identificar el ácido en una reacción de Brønsted:`, [`Es la especie que pierde un H al pasar a la derecha`, `Es la que tiene más oxígenos`, `Es la que tiene carga negativa`, `Es siempre el agua`], `La que pierde un H es el ácido; la que lo gana, la base.`],
]);
addChecks(`Teoría de Lewis (1923)`, [
  [`La teoría de Lewis se basa en:`, [`Pares de electrones`, `Protones`, `Iones OH⁻ en agua`, `La temperatura`], `Lewis usa pares de electrones, no protones.`],
  [`Una base de Lewis es una especie que:`, [`Dona un par de electrones solitarios`, `Acepta un par de electrones`, `Libera H⁺ en agua`, `Necesita orbitales vacíos`], `Base de Lewis: donador de par de electrones.`],
  [`¿Qué necesita un ácido de Lewis?`, [`Orbitales vacíos`, `Pares de electrones libres`, `Grupos OH⁻`, `Átomos de nitrógeno`], `El ácido acepta electrones: necesita orbitales vacíos.`],
  [`¿Cuál de estas especies es un ácido de Lewis?`, [`AlCl₃`, `NH₃`, `Cl⁻`, `OH⁻`], `Moléculas «con hueco» (B, Al) y cationes metálicos son ácidos.`],
  [`¿Cuál de estas especies es una base de Lewis?`, [`H₂O`, `BF₃`, `Cu²⁺`, `CO₂`], `El O del agua tiene pares libres: base de Lewis.`],
  [`En un enlace covalente coordinado, los dos electrones del enlace los aporta:`, [`El mismo átomo (el de la base)`, `Un electrón cada átomo`, `El ácido`, `El solvente`], `Ambos electrones vienen de la base.`],
  [`Truco para Lewis: los cationes metálicos como Cu²⁺ son:`, [`Ácidos`, `Bases`, `No electrolitos`, `Neutros`], `Cationes metálicos aceptan pares: ácidos de Lewis.`],
]);
addChecks(`Comparación de las tres teorías`, [
  [`¿Qué teoría tiene alcance solo en medio acuoso?`, [`Arrhenius`, `Brønsted-Lowry`, `Lewis`, `Las tres`], `Arrhenius: solo en agua.`],
  [`¿Qué teoría funciona en cualquier solvente o fase gaseosa basándose en protones?`, [`Brønsted-Lowry`, `Arrhenius`, `Lewis`, `Ninguna`], `Brønsted-Lowry: transferencia de H⁺ en cualquier medio.`],
  [`¿Qué teoría incluye especies sin hidrógeno como ácidos?`, [`Lewis`, `Arrhenius`, `Brønsted-Lowry`, `Ninguna`], `Lewis es la más amplia: incluye BF₃, Cu²⁺, etc.`],
  [`El orden de amplitud de las teorías es:`, [`Arrhenius < Brønsted-Lowry < Lewis`, `Lewis < Brønsted-Lowry < Arrhenius`, `Brønsted-Lowry < Arrhenius < Lewis`, `Todas son iguales`], `Agua → protones → electrones: cada una amplía la anterior.`],
  [`¿Qué dos teorías se propusieron en 1923?`, [`Brønsted-Lowry y Lewis`, `Arrhenius y Lewis`, `Arrhenius y Brønsted-Lowry`, `Ninguna`], `Arrhenius es de 1884; las otras dos de 1923.`],
  [`Para Lewis, una base es lo que:`, [`Dona un par de electrones`, `Libera OH⁻ en agua`, `Acepta H⁺`, `Acepta un par de electrones`], `Lewis: base dona par de e⁻.`],
]);
addChecks(`Autoionización del agua y Kw`, [
  [`En la autoionización del agua se forman:`, [`Cantidades iguales de H⁺ y OH⁻`, `Más H⁺ que OH⁻`, `Más OH⁻ que H⁺`, `Solo H⁺`], `H₂O ⇌ H⁺ + OH⁻ en cantidades iguales.`],
  [`¿Qué fracción de moléculas de agua pura se ioniza?`, [`Una fracción muy pequeña`, `La mitad`, `Todas`, `Ninguna`], `Solo una fracción muy pequeña se ioniza.`],
  [`En agua pura a 25 °C, la [OH⁻] es:`, [`1 × 10⁻⁷ M`, `1 × 10⁻¹⁴ M`, `1 × 10⁻¹ M`, `7 M`], `[H⁺] = [OH⁻] = 10⁻⁷ M.`],
  [`Si una solución tiene [OH⁻] = 1 × 10⁻⁵ M, su [H⁺] es:`, [`1 × 10⁻⁹ M`, `1 × 10⁻⁵ M`, `1 × 10⁻⁷ M`, `1 × 10⁻¹⁴ M`], `[H⁺] = 10⁻¹⁴ / 10⁻⁵ = 10⁻⁹ M.`],
  [`Si en una solución aumenta la [H⁺], el producto [H⁺] × [OH⁻]:`, [`Sigue valiendo 10⁻¹⁴`, `Aumenta`, `Disminuye`, `Se vuelve cero`], `El producto siempre vale Kw = 10⁻¹⁴ (a 25 °C).`],
  [`¿Por qué el pH neutro es 7?`, [`Porque en agua pura [H⁺] = 10⁻⁷ M`, `Porque el agua tiene 7 átomos`, `Porque Kw = 7`, `Por convención sin relación con [H⁺]`], `pH = −log 10⁻⁷ = 7.`],
  [`En la autoionización, la ionización y la recombinación ocurren:`, [`Al mismo ritmo (equilibrio)`, `Solo la ionización`, `Solo la recombinación`, `Nunca`], `Es un equilibrio dinámico.`],
]);
addChecks(`Escala de pH y clasificación de soluciones`, [
  [`Una solución con [H⁺] = 1 × 10⁻⁵ M tiene pH:`, [`5`, `9`, `−5`, `10`], `Si [H⁺] = 10⁻ˣ, pH = x.`],
  [`Si [H⁺] = 1 × 10⁻⁹ M, la solución es:`, [`Básica`, `Ácida`, `Neutra`, `Saturada`], `[H⁺] < 10⁻⁷ M: básica (pH 9).`],
  [`Los exponentes de [H⁺] y [OH⁻] siempre suman:`, [`−14`, `−7`, `0`, `14`], `10⁻ᵃ × 10⁻ᵇ = 10⁻¹⁴: a + b = 14.`],
  [`Una solución ácida cumple:`, [`[H⁺] > [OH⁻]`, `[H⁺] < [OH⁻]`, `[H⁺] = [OH⁻]`, `[OH⁻] > 10⁻⁷ M`], `Ácida: más H⁺ que OH⁻; pH < 7.`],
  [`¿Cuál es mayor: 10⁻³ o 10⁻⁷?`, [`10⁻³`, `10⁻⁷`, `Son iguales`, `No se pueden comparar`], `10⁻³ = 0.001 es mayor que 10⁻⁷ = 0.0000001.`],
  [`Si [OH⁻] = 1 × 10⁻⁴ M, el pH es:`, [`10`, `4`, `−4`, `7`], `[H⁺] = 10⁻¹⁰ → pH 10.`],
  [`Una solución neutra a 25 °C tiene:`, [`[H⁺] = [OH⁻] = 10⁻⁷ M`, `[H⁺] = 10⁻¹⁴ M`, `[OH⁻] = 0`, `pH 0`], `Neutra: ambos 10⁻⁷ M, pH 7.`],
]);
addChecks(`Principio de Le Chatelier`, [
  [`Según Le Chatelier, un sistema en equilibrio perturbado:`, [`Se desplaza para contrarrestar la perturbación`, `Se queda igual`, `Se desplaza hacia la perturbación`, `Deja de reaccionar`], `El equilibrio «se defiende»: va contra la perturbación.`],
  [`Al agregar una base al agua, la [H⁺]:`, [`Disminuye`, `Aumenta`, `No cambia`, `Se vuelve 10⁻⁷`], `Aumenta [OH⁻], el pH sube y baja [H⁺].`],
  [`Al agregar un ácido al agua, el pH:`, [`Baja`, `Sube`, `Queda en 7`, `Se vuelve 14`], `Aumenta [H⁺]: pH baja.`],
  [`Como la autoionización del agua es endotérmica, al enfriar el agua la ionización:`, [`Disminuye`, `Aumenta`, `No cambia`, `Se vuelve completa`], `Endotérmica: calentar la aumenta; enfriar la disminuye.`],
  [`¿Qué sistemas del organismo regresan el pH a 7.35–7.45 ante un exceso de ácido?`, [`Los amortiguadores, el pulmón y el riñón`, `El hígado y el páncreas solamente`, `La piel y el músculo`, `El corazón y el bazo`], `Amortiguadores, pulmón y riñón desplazan los equilibrios.`],
  [`Además de concentración y temperatura, el material menciona como factores:`, [`Presión y catalizadores`, `Color y olor`, `Luz y sonido`, `Volumen del recipiente y forma`], `También se mencionan presión y catalizadores.`],
]);

/* ---------------- Tema 20 · pH, pOH y constantes ---------------- */
addChecks(`pH y pKa: qué mide cada uno`, [
  [`¿Por qué la fórmula del pH lleva signo negativo?`, [`Porque el logaritmo de un número pequeño es negativo y así el pH queda positivo`, `Porque el pH siempre es negativo`, `Porque así se mide el OH⁻`, `Por convención sin motivo`], `−log de un número menor que 1 da un valor positivo en la escala 0–14.`],
  [`Una solución con [H⁺] = 1 × 10⁻² M tiene pH:`, [`2`, `12`, `−2`, `0.01`], `pH = −log(10⁻²) = 2.`],
  [`El pH de HCl 0.001 M es:`, [`3`, `1`, `11`, `0.001`], `[H⁺] = 10⁻³ → pH 3.`],
  [`Un ácido con Ka = 1 × 10⁻⁴ tiene pKa:`, [`4`, `−4`, `10`, `0.0001`], `pKa = −log(10⁻⁴) = 4.`],
  [`El pKa habla de ___ y el pH habla de ___:`, [`el ácido ; la solución`, `la solución ; el ácido`, `la base ; el agua`, `la temperatura ; la presión`], `pKa = fuerza del ácido; pH = acidez de la solución.`],
  [`Si un ácido tiene Ka más grande, su pKa es:`, [`Más pequeño (ácido más fuerte)`, `Más grande`, `Igual`, `Negativo siempre`], `A menor pKa, más fuerte el ácido.`],
  [`En el ejemplo de la pág. 2, el docente reporta pH 2.45 aunque el redondeo da 2.46 porque:`, [`Lo trunca en lugar de redondear`, `Usa otra fórmula`, `Se equivocó de concentración`, `Usa el pOH`], `−log(3.5 × 10⁻³) = 2.456: truncado 2.45, redondeado 2.46.`],
]);
addChecks(`Escala logarítmica de acidez`, [
  [`Bajar una unidad de pH significa tener:`, [`10 veces más H⁺`, `1 vez más H⁺`, `2 veces más H⁺`, `100 veces menos H⁺`], `Escala logarítmica: cada unidad = factor 10.`],
  [`¿Cuántas veces más H⁺ tiene una solución de pH 5 que una de pH 7?`, [`100`, `2`, `10`, `1 000`], `2 unidades: 10 × 10 = 100.`],
  [`De pH 7 a pH 4, la concentración de H⁺ aumenta:`, [`1 000 veces`, `3 veces`, `30 veces`, `100 veces`], `3 unidades: 10³ = 1 000.`],
  [`Según la tabla de la pág. 7, a pH 5 la [OH⁻] es:`, [`10⁻⁹ M`, `10⁻⁵ M`, `10⁻⁷ M`, `10⁻¹⁴ M`], `[OH⁻] = 10⁻⁽¹⁴⁻⁵⁾ = 10⁻⁹.`],
  [`En la zona ácida de la escala predomina:`, [`Una alta concentración de H⁺`, `El ion OH⁻`, `El agua neutra`, `El sodio`], `Ácida (< 7): alta [H⁺].`],
  [`A cada pH, la [H⁺] es igual a:`, [`10⁻ᵖᴴ`, `10ᵖᴴ`, `14 − pH`, `pH / 14`], `[H⁺] = 10⁻ᵖᴴ.`],
]);
addChecks(`pH de ácidos fuertes`, [
  [`¿Qué porcentaje se disocia un ácido fuerte?`, [`100 %`, `Menos de 5 %`, `50 %`, `0 %`], `Fuerte = disociación completa.`],
  [`¿Se necesita Ka para calcular el pH de un ácido fuerte?`, [`No: la [H⁺] es igual a C₀`, `Sí, siempre`, `Solo si es HCl`, `Solo a 37 °C`], `Fuerte: [H⁺] = C₀, sin Ka.`],
  [`El pH de HCl 0.02 M es aproximadamente:`, [`1.70`, `2.00`, `0.02`, `12.30`], `pH = −log(0.02) = 1.70.`],
  [`Si un ácido aporta 2 H⁺ por molécula y se disocia totalmente, la [H⁺] es:`, [`2 × C₀`, `C₀ / 2`, `C₀`, `√C₀`], `[H⁺] = 2 × C₀ (por ejemplo, H₂SO₄ con disociación total).`],
  [`Con H₂SO₄ 0.005 M y disociación total, la [H⁺] es:`, [`0.01 M`, `0.005 M`, `0.0025 M`, `0.02 M`], `[H⁺] = 2 × 0.005 = 0.01 M → pH 2.`],
  [`¿Cuál de estos es un ácido fuerte?`, [`HNO₃`, `CH₃COOH`, `HF`, `NH₃`], `Fuertes: HCl, HNO₃, H₂SO₄.`],
]);
addChecks(`pH de ácidos débiles`, [
  [`¿Por qué se necesita Ka para un ácido débil?`, [`Porque solo se disocia parcialmente`, `Porque se disocia al 100 %`, `Porque no tiene hidrógeno`, `Porque es una base`], `Débil: disociación parcial; hace falta Ka.`],
  [`El orden correcto para un ácido débil es:`, [`Primero la raíz √(Ka·C₀), después el logaritmo`, `Primero el logaritmo, después la raíz`, `Solo el logaritmo de C₀`, `Multiplicar Ka por 14`], `Débil: raíz primero, luego −log.`],
  [`Un ácido débil 0.1 M con Ka = 1 × 10⁻⁵ tiene [H⁺]:`, [`1 × 10⁻³ M`, `1 × 10⁻⁶ M`, `0.1 M`, `1 × 10⁻⁵ M`], `√(10⁻⁵ × 0.1) = √10⁻⁶ = 10⁻³ M → pH 3.`],
  [`En la fórmula final de la pág. 6, lo que se sustituye en el logaritmo es:`, [`La [H⁺] calculada, no C₀`, `C₀ directamente`, `El Ka`, `El pKa`], `Se usa la [H⁺] = 9.49 × 10⁻⁴, no C₀.`],
  [`A igual concentración, el ácido débil tiene un pH ___ que el fuerte:`, [`Más alto`, `Más bajo`, `Igual`, `Negativo`], `El débil libera muchos menos H⁺: pH 3.02 frente a 1.3.`],
  [`Para el acético 0.05 M, el producto Ka·C₀ vale:`, [`9 × 10⁻⁷`, `1.8 × 10⁻⁵`, `0.05`, `9.49 × 10⁻⁴`], `1.8 × 10⁻⁵ × 0.05 = 9 × 10⁻⁷; su raíz es 9.49 × 10⁻⁴.`],
]);
addChecks(`pOH`, [
  [`El pOH mide la concentración de:`, [`Iones hidroxilo (OH⁻)`, `Iones hidrógeno (H⁺)`, `Sodio`, `Agua`], `pOH = −log [OH⁻].`],
  [`A menor pOH, la solución es:`, [`Más alcalina`, `Más ácida`, `Neutra`, `Saturada`], `Escala inversa: menor pOH = mayor alcalinidad.`],
  [`El pH de NaOH 0.01 M es:`, [`12`, `2`, `10`, `14`], `pOH = −log(0.01) = 2; pH = 14 − 2 = 12.`],
  [`Si el pH es 9, el pOH es:`, [`5`, `9`, `23`, `−5`], `pOH = 14 − 9 = 5.`],
  [`Según el material, un ácido fuerte con pH 1.3 tiene pOH:`, [`12.7`, `1.3`, `15.3`, `7`], `pOH = 14 − 1.3 = 12.7.`],
  [`Para una base, primero se calcula:`, [`El pOH con [OH⁻], y luego pH = 14 − pOH`, `El pH directamente con C₀`, `El pKa`, `La normalidad`], `Bases: primero pOH.`],
  [`La relación pH + pOH = 14 es válida a:`, [`25 °C`, `0 °C`, `37 °C siempre`, `Cualquier temperatura sin cambio`], `Kw = 10⁻¹⁴ a 25 °C.`],
]);
addChecks(`Disociación: fuerte frente a débil`, [
  [`La disociación es el proceso por el que un ácido o base:`, [`Se separa en iones al disolverse en agua`, `Se evapora`, `Cambia de color`, `Se precipita`], `Disociación (ionización) = separarse en iones.`],
  [`La doble flecha (⇌) indica:`, [`Un equilibrio químico (electrolito débil)`, `Una reacción irreversible`, `Una disociación del 100 %`, `Que no hay reacción`], `⇌ = débil, equilibrio.`],
  [`En un ácido débil, la mayoría de las moléculas:`, [`Quedan intactas en su forma neutra`, `Se convierten en iones`, `Se evaporan`, `Reaccionan con el vidrio`], `Débil: < 5 % se disocia; la mayoría queda neutra.`],
  [`HCl + H₂O → H₃O⁺ + Cl⁻ representa:`, [`Un ácido fuerte (disociación completa)`, `Un ácido débil`, `Una base débil`, `Una sal insoluble`], `Una sola flecha: fuerte, irreversible.`],
  [`La disociación de un fuerte se considera:`, [`Irreversible (→)`, `Reversible (⇌)`, `Parcial`, `Nula`], `Fuertes: una sola flecha, irreversible.`],
  [`HA + H₂O ⇌ H₃O⁺ + A⁻ representa:`, [`Un ácido débil`, `Un ácido fuerte`, `Una base fuerte`, `Una neutralización`], `Doble flecha con HA: ácido débil.`],
]);
addChecks(`Constantes Ka y Kb: valor numérico`, [
  [`Las constantes Ka y Kb tienen unidades de:`, [`Ninguna (son adimensionales)`, `mol/L`, `g/mL`, `°C`], `Es un número sin unidades.`],
  [`Un ácido fuerte tiene un pKa:`, [`Menor que 0`, `Entre 2 y 14`, `Igual a 7`, `Mayor que 14`], `Fuerte: Ka ≫ 1, pKa < 0.`],
  [`El rango de Ka de un ácido débil es aproximadamente:`, [`10⁻² a 10⁻¹⁴`, `Mayor que 1`, `Igual a 0`, `10² a 10¹⁴`], `Débiles: Ka entre 10⁻² y 10⁻¹⁴.`],
  [`Entre el HF (Ka 6.8 × 10⁻⁴) y el CH₃COOH (Ka 1.8 × 10⁻⁵), el más fuerte es:`, [`El HF`, `El CH₃COOH`, `Son iguales`, `Ninguno es ácido`], `Mayor Ka = ácido más fuerte.`],
  [`La Kb del NH₃ es 1.8 × 10⁻⁵. La Ka de su ácido conjugado (NH₄⁺) es aproximadamente:`, [`5.6 × 10⁻¹⁰`, `1.8 × 10⁻⁵`, `1 × 10⁻¹⁴`, `1.8 × 10⁻⁹`], `Ka = 10⁻¹⁴ / 1.8 × 10⁻⁵ ≈ 5.6 × 10⁻¹⁰.`],
  [`¿Cuál es una base fuerte según la tabla?`, [`KOH`, `NH₃`, `C₅H₅N`, `CH₃COOH`], `Bases fuertes: NaOH, KOH, Ca(OH)₂.`],
  [`La piridina (C₅H₅N, Kb 1.7 × 10⁻⁹) comparada con el NH₃ (Kb 1.8 × 10⁻⁵) es:`, [`Una base más débil`, `Una base más fuerte`, `Igual de fuerte`, `Un ácido fuerte`], `Menor Kb = base más débil.`],
  [`Si un ácido es muy fuerte, su base conjugada es:`, [`Muy débil`, `Muy fuerte`, `Neutra siempre`, `Un ácido`], `Ka × Kb = 10⁻¹⁴: si Ka es grande, Kb es pequeña.`],
]);
addChecks(`Qué fórmula usar para pH`, [
  [`¿Cuáles son las dos preguntas antes de calcular un pH?`, [`¿Es ácido o base? y ¿es fuerte o débil?`, `¿Qué color tiene? y ¿cuánto pesa?`, `¿Qué temperatura? y ¿qué volumen?`, `¿Es sal? y ¿es gas?`], `Primero ácido/base; luego fuerte/débil.`],
  [`Si el enunciado da Ka o Kb, el compuesto es:`, [`Débil, y se usa la raíz`, `Fuerte, y la concentración pasa directa`, `Una sal neutra`, `Un no electrolito`], `Dan Ka/Kb → débil → raíz.`],
  [`Para una base, al final se obtiene el pH con:`, [`pH = 14 − pOH`, `pH = pOH`, `pH = −log C₀ directamente`, `pH = 14 + pOH`], `Base: OH⁻ → pOH → pH = 14 − pOH.`],
  [`El Ca(OH)₂ se trata como:`, [`Base fuerte: la concentración pasa directa (considerando sus 2 OH⁻)`, `Base débil con Kb`, `Ácido débil`, `No electrolito`], `Ca(OH)₂ es base fuerte.`],
  [`El HF se trata como:`, [`Ácido débil: se usa la raíz con Ka`, `Ácido fuerte`, `Base fuerte`, `Sal neutra`], `HF, CH₃COOH y NH₃ son débiles.`],
  [`Para un ácido trabajas con ___; para una base con ___:`, [`H⁺ y pH ; OH⁻ y pOH`, `OH⁻ ; H⁺`, `Ka ; pH`, `pOH ; Ka`], `Ácido: H⁺/pH. Base: OH⁻/pOH.`],
]);

/* ---------------- Tema 21 · Cálculos, titulación y buffers ---------------- */
addChecks(`Qué te van a pedir en este tema`, [
  [`Al calcular el pH de ácidos y bases fuertes hay que considerar:`, [`La estequiometría de la disociación total`, `La tabla ICE`, `La aproximación del 5 %`, `La ecuación de Henderson-Hasselbalch`], `Fuertes: estequiometría de la disociación total.`],
  [`Para el pH de buffers se aplica:`, [`Henderson-Hasselbalch`, `C₁V₁ = C₂V₂`, `Kw directamente`, `La ley de Henry`], `Objetivo: aplicar Henderson-Hasselbalch a buffers.`],
  [`Las concentraciones desconocidas en titulaciones se obtienen con:`, [`La relación del punto de equivalencia`, `El pKa`, `La molalidad`, `Las ppm`], `Titulación: relación del punto de equivalencia.`],
  [`¿Qué dos datos se usan para interpretar acidosis o alcalosis metabólica?`, [`pH sanguíneo y bicarbonato`, `Glucosa y urea`, `Sodio y potasio`, `Hemoglobina y hematocrito`], `Objetivo 6: pH y HCO₃⁻.`],
  [`Un buffer resiste cambios de pH gracias a:`, [`Su par conjugado`, `Su color`, `Su temperatura`, `Su volumen`], `El par conjugado HA/A⁻ es la clave del buffer.`],
  [`Para el pH de ácidos débiles se usan ecuaciones de equilibrio y:`, [`La aproximación según Ka`, `La normalidad`, `La conductividad`, `El punto final`], `Débiles: equilibrio y aproximación según Ka.`],
]);
addChecks(`De gramos a pH (ácidos y bases fuertes)`, [
  [`¿Cuál es el primer paso de la ruta de gramos a pH?`, [`Moles = gramos / PM`, `pH = −log [H⁺]`, `M = moles / L`, `14 − pOH`], `Ruta: g → mol → M → [H⁺]/[OH⁻] → log.`],
  [`Se disuelven 0.73 g de HCl (PM 36.5) hasta 2 L. El pH es:`, [`2`, `1`, `12`, `0.73`], `0.73/36.5 = 0.02 mol; 0.02/2 = 0.01 M; pH = 2.`],
  [`0.4 g de NaOH (PM 40) en 1 L de solución dan un pH de:`, [`12`, `2`, `10`, `14`], `0.01 mol en 1 L = 0.01 M; pOH 2; pH 12.`],
  [`Para una base fuerte como el Ca(OH)₂, la [OH⁻] es:`, [`M × número de OH⁻`, `M / 2`, `√(Kb × C₀)`, `M − 2`], `Base fuerte: [OH⁻] = M × número de OH⁻.`],
  [`En el ejercicio 2 (3.16 g de NaOH en 2.5 L), la molaridad obtenida es:`, [`0.0316 M`, `0.079 M`, `3.16 M`, `0.316 M`], `0.079 mol / 2.5 L = 0.0316 M.`],
  [`Después de calcular el pOH de una base, el pH se obtiene con:`, [`14 − pOH`, `pOH × 14`, `pOH − 14`, `−log pOH`], `El otro valor: 14 − el que calculaste.`],
]);
addChecks(`Ley del equilibrio en ácidos y bases débiles`, [
  [`¿Por qué el agua no aparece en la expresión de Ka?`, [`Porque es líquido puro`, `Porque no reacciona`, `Porque es un gas`, `Porque su concentración es cero`], `Los líquidos puros no entran en la expresión.`],
  [`La expresión de Kb para B + H₂O ⇌ BH⁺ + OH⁻ es:`, [`[BH⁺][OH⁻] / [B]`, `[B] / [BH⁺][OH⁻]`, `[BH⁺][OH⁻][H₂O] / [B]`, `[B][OH⁻]`], `Productos arriba, reactivos abajo (sin el agua).`],
  [`En la constante de equilibrio, ¿qué va en el numerador?`, [`Los productos`, `Los reactivos`, `El agua`, `La temperatura`], `K = productos / reactivos.`],
  [`La ionización de un débil «no llega al final» porque:`, [`Alcanza un equilibrio dinámico`, `Se acaba el agua`, `El ácido se evapora`, `Se forma un precipitado`], `Las reacciones directa e inversa ocurren a la misma velocidad.`],
  [`En un equilibrio dinámico, las reacciones directa e inversa:`, [`Ocurren a la misma velocidad`, `Se detienen`, `Solo ocurre la directa`, `Solo ocurre la inversa`], `Equilibrio dinámico = velocidades iguales.`],
]);
addChecks(`Tabla ICE y aproximación del 5 %`, [
  [`En la tabla ICE, la fila «E» corresponde a:`, [`Equilibrio`, `Energía`, `Exceso`, `Error`], `ICE: Inicio, Cambio, Equilibrio.`],
  [`En la fila de Cambio, cada ion producido:`, [`Aumenta en +x`, `Disminuye en −x`, `No cambia`, `Aumenta en +2x siempre`], `Ácido: −x; cada ion: +x.`],
  [`Sustituyendo la tabla ICE en Ka se obtiene:`, [`Ka = x² / (C₀ − x)`, `Ka = x / C₀`, `Ka = C₀ − x`, `Ka = x² × C₀`], `Ka = x² / (C₀ − x).`],
  [`Para CH₃COOH 0.1 M (Ka 1.8 × 10⁻⁵), C₀/Ka vale ≈ 5 556. ¿Se puede aproximar?`, [`Sí, porque es mayor que 400`, `No, porque es mayor que 400`, `Solo si es base`, `Nunca se puede`], `C₀/Ka > 400: C₀ − x ≈ C₀.`],
  [`Si C₀/Ka no supera 400:`, [`Hay que resolver la ecuación cuadrática`, `Se usa igual la raíz`, `El ácido es fuerte`, `El pH es 7`], `La aproximación ya no es confiable.`],
  [`Para una base débil, x = [OH⁻] ≈:`, [`√(Kb · C₀)`, `√(Ka · C₀)`, `Kb × C₀`, `C₀ / Kb`], `Base débil: x ≈ √(Kb · C₀).`],
  [`En la fila de Inicio, la concentración de cada ion es:`, [`0`, `C₀`, `x`, `Ka`], `Al inicio no hay iones: 0 → +x → x.`],
]);
addChecks(`Porcentaje de ionización`, [
  [`Un ácido 0.01 M con [H⁺] = 1 × 10⁻⁴ M tiene un % de ionización de:`, [`1 %`, `10 %`, `0.01 %`, `100 %`], `% = 10⁻⁴ / 0.01 × 100 = 1 %.`],
  [`Un % de ionización menor de 5 % confirma que el ácido es:`, [`Débil`, `Fuerte`, `Una base`, `Neutro`], `Débil = menos de 5 %.`],
  [`En el ejemplo 1, x² = 1.8 × 10⁻⁶. ¿Cuánto vale x?`, [`1.34 × 10⁻³ M`, `1.8 × 10⁻³ M`, `3.24 × 10⁻¹² M`, `0.10 M`], `√(1.8 × 10⁻⁶) = 1.34 × 10⁻³.`],
  [`En el ejemplo del ácido acético 0.10 M, el pH obtenido es:`, [`2.87`, `1.34`, `4.74`, `3.02`], `pH = −log(1.34 × 10⁻³) = 2.87.`],
  [`En la fórmula del % de ionización, x corresponde a:`, [`La [H⁺] en el equilibrio`, `El Ka`, `El volumen`, `El pH`], `% = x / C₀ × 100, con x = [H⁺].`],
]);
addChecks(`pH de una base débil (amoníaco)`, [
  [`Al sacar −log de la [OH⁻] de una base, se obtiene:`, [`El pOH`, `El pH`, `El pKa`, `El Kb`], `Error típico: con una base, el logaritmo da pOH.`],
  [`En el ejemplo del NH₃ 0.15 M, x² vale:`, [`2.7 × 10⁻⁶`, `1.8 × 10⁻⁵`, `0.15`, `1.64 × 10⁻³`], `x² = 1.8 × 10⁻⁵ × 0.15 = 2.7 × 10⁻⁶.`],
  [`NH₃ 0.10 M (Kb 1.8 × 10⁻⁵) tiene un pH aproximado de:`, [`11.13`, `2.87`, `9.26`, `13.00`], `x = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³; pOH 2.87; pH 11.13.`],
  [`En la tabla ICE del NH₃, la concentración de NH₄⁺ en el equilibrio es:`, [`x`, `0.15 − x`, `0.15`, `0`], `[NH₄⁺] = [OH⁻] = x.`],
  [`En la reacción NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, el ion que define el pOH es:`, [`OH⁻`, `NH₄⁺`, `H₂O`, `NH₃`], `El OH⁻ producido determina el pOH.`],
]);
addChecks(`Valoración (titulación) ácido-base`, [
  [`El titulante (valorante) es:`, [`La solución estándar de concentración conocida`, `La muestra de concentración desconocida`, `El indicador`, `El agua destilada`], `Valorante = concentración conocida.`],
  [`¿Dónde se colocan el analito y el indicador?`, [`En el matraz Erlenmeyer`, `En la bureta`, `En el pie de sujeción`, `En una pipeta Pasteur`], `Erlenmeyer: analito + indicador.`],
  [`¿Qué función tiene el pie de sujeción?`, [`Sostener la bureta`, `Contener el analito`, `Medir el pH`, `Calentar la solución`], `El pie de sujeción sostiene la bureta.`],
  [`Con ácido fuerte y base fuerte, la neutralización es:`, [`Completa: H₃O⁺ + OH⁻ → 2 H₂O`, `Parcial`, `Nula`, `Reversible siempre`], `Fuerte-fuerte: reacción completa.`],
  [`La titulación sirve para conocer:`, [`La concentración desconocida de un ácido o una base`, `El color de una solución`, `La temperatura de ebullición`, `La masa molar del agua`], `Es una técnica cuantitativa para hallar concentraciones.`],
]);
addChecks(`Equivalencia, punto final e indicador`, [
  [`El punto de equivalencia es el momento en que:`, [`Moles de H⁺ = moles de OH⁻`, `El indicador cambia de color`, `Se acaba el valorante`, `El pH llega a 14`], `Equivalencia: momento teórico exacto.`],
  [`Con ácido fuerte y base fuerte a 25 °C, el pH en el punto de equivalencia es:`, [`7.00`, `4.74`, `9.00`, `1.00`], `Fuerte-fuerte: pH 7 en la equivalencia.`],
  [`El punto final es:`, [`El punto experimental en que el indicador cambia de color`, `El momento teórico exacto`, `El inicio de la titulación`, `Cuando se rompe la bureta`], `Final = viraje del indicador o salto del potenciómetro.`],
  [`¿Qué indicador se usa para una titulación fuerte-fuerte según el material?`, [`Fenolftaleína o azul de bromotimol`, `Rojo congo`, `Amarillo de alizarina`, `Ninguno`], `Fenolftaleína o azul de bromotimol.`],
  [`Se titulan 25 mL de HCl con 20 mL de NaOH 0.1 M. La concentración del HCl es:`, [`0.08 M`, `0.125 M`, `0.1 M`, `0.05 M`], `Mₐ = 0.1 × 20 / 25 = 0.08 M.`],
  [`10 mL de H₂SO₄ se neutralizan con 20 mL de NaOH 0.1 M. La molaridad del H₂SO₄ es:`, [`0.1 M`, `0.2 M`, `0.05 M`, `0.4 M`], `Mₐ × 10 × 2 = 0.1 × 20 × 1 → Mₐ = 0.1 M.`],
  [`La fórmula Nₐ × Vₐ = N_b × V_b se relaciona con:`, [`La normalidad del Tema 16`, `La molalidad`, `Las ppm`, `La ley de Henry`], `Es la misma idea de la normalidad.`],
]);
addChecks(`Solución amortiguadora (buffer)`, [
  [`Otros nombres de la solución amortiguadora son:`, [`Buffer, tampón o reguladora`, `Indicador o titulante`, `Electrolito fuerte`, `Solución madre`], `Buffer = tampón = reguladora.`],
  [`Un buffer también resiste cambios de pH cuando:`, [`Se diluye`, `Se evapora por completo`, `Se le agrega un ácido fuerte en exceso grande`, `Se congela`], `Resiste pequeñas adiciones de ácido o base, y la dilución.`],
  [`Las dos especies del buffer deben estar en concentraciones:`, [`Elevadas y parecidas`, `Muy bajas`, `Muy diferentes`, `Iguales a cero`], `Dos especies en concentraciones elevadas y parecidas.`],
  [`En un buffer, el ácido débil (HA) neutraliza:`, [`Los OH⁻ que se agreguen`, `Los H⁺ que se agreguen`, `El agua`, `La sal`], `HA atrapa OH⁻; A⁻ atrapa H⁺.`],
  [`Cuando entra ácido fuerte a un buffer, el pH:`, [`Apenas baja`, `Baja drásticamente`, `Sube`, `Llega a 0`], `A⁻ + H⁺ → HA: el H⁺ fuerte se convierte en ácido débil.`],
  [`¿Por qué el buffer necesita las dos especies (HA y A⁻)?`, [`Una neutraliza el ácido y la otra la base que se agregan`, `Para cambiar de color`, `Para aumentar la temperatura`, `No necesita las dos`], `Necesitas los dos: cada uno atrapa un tipo de ion.`],
]);
addChecks(`Ejemplos de buffers`, [
  [`Los componentes del buffer bicarbonato son:`, [`H₂CO₃ / HCO₃⁻`, `CH₃COOH / CH₃COONa`, `NH₃ / NH₄Cl`, `H₂PO₄⁻ / HPO₄²⁻`], `Bicarbonato: H₂CO₃ / HCO₃⁻.`],
  [`El buffer fosfato está formado por:`, [`H₂PO₄⁻ / HPO₄²⁻`, `H₂CO₃ / HCO₃⁻`, `HCOOH / HCOONa`, `Tris-HCl`], `Fosfato: H₂PO₄⁻ / HPO₄²⁻.`],
  [`¿Qué buffer se forma con NH₃ y NH₄Cl?`, [`Amoniacal`, `Acetato`, `Citrato`, `Fosfato`], `Amoniacal: NH₃ / NH₄Cl.`],
  [`¿Para qué se usan los buffers de pH 4.01, 7.00 y 10.01 de la foto?`, [`Para calibrar el electrodo del pHmetro`, `Para teñir muestras`, `Para conservar orina`, `Para diluir sangre`], `Son buffers de calibración del pHmetro.`],
  [`El Tris-HCl trabaja en un rango de pH de:`, [`7 a 9`, `2 a 4`, `10 a 12`, `0 a 1`], `Tris-HCl: pH 7 a 9.`],
  [`El HEPES trabaja en un rango de pH de:`, [`6.8 a 8.8`, `3.0 a 4.6`, `10.1 a 12.0`, `1 a 3`], `HEPES: pH 6.8 a 8.8.`],
  [`¿Qué buffers se mencionan como biológicos (en la sangre)?`, [`Bicarbonato y fosfato`, `Acetato y formiato`, `Tris y HEPES`, `Citrato y amoniacal`], `Biológicos: bicarbonato y fosfato.`],
]);
addChecks(`Ecuación de Henderson-Hasselbalch`, [
  [`Si en un buffer acetato (pKa 4.74) la base es 10 veces el ácido, el pH es:`, [`5.74`, `3.74`, `4.74`, `14.74`], `log 10 = 1: pH = 4.74 + 1 = 5.74.`],
  [`Si el ácido es 10 veces la base (pKa 4.74), el pH es:`, [`3.74`, `5.74`, `4.74`, `−4.74`], `log 0.1 = −1: pH = 3.74.`],
  [`Henderson-Hasselbalch también se puede usar con:`, [`Moles, porque ambos están en el mismo volumen`, `Gramos sin convertir`, `Mililitros de agua`, `Temperaturas`], `pH = pKa + log (moles base / moles ácido).`],
  [`Para un buffer básico, primero se calcula:`, [`pOH = pKb + log ([ácido conjugado] / [base débil])`, `pH = pKa + log ([base]/[ácido])`, `pH = 7`, `Kw`], `Buffer básico: pOH con pKb; luego pH = 14 − pOH.`],
  [`En la fórmula del buffer ácido, ¿qué va en el numerador del logaritmo?`, [`La base conjugada`, `El ácido débil`, `El agua`, `El pKa`], `Base ARRIBA, ácido ABAJO.`],
  [`En el ejemplo del material, log(0.30/0.20) vale aproximadamente:`, [`0.176`, `1.5`, `0.30`, `−0.176`], `log 1.5 = 0.176; pH = 4.92.`],
]);
addChecks(`Acidosis y alcalosis metabólica`, [
  [`El rango de referencia del bicarbonato en sangre arterial es:`, [`22–26 mmol/L`, `35–45 mmol/L`, `7.35–7.45 mmol/L`, `135–145 mmol/L`], `HCO₃⁻: 22–26 mmol/L.`],
  [`El rango de referencia de la pCO₂ arterial es:`, [`35–45 mmHg`, `22–26 mmHg`, `80–100 mmHg`, `7.35–7.45 mmHg`], `pCO₂: 35–45 mmHg.`],
  [`pH 7.52 con HCO₃⁻ 32 mmol/L sugiere:`, [`Alcalosis metabólica`, `Acidosis metabólica`, `Equilibrio normal`, `Acidosis respiratoria`], `pH alto con HCO₃⁻ alto: alcalosis metabólica.`],
  [`En la acidosis metabólica, el HCO₃⁻ está bajo porque:`, [`Se consumió la base del tampón`, `Se produjo en exceso`, `El riñón lo concentró`, `La muestra se diluyó`], `Se consumió la base del tampón.`],
  [`Con HCO₃⁻ 30 mmol/L y pCO₂ 40 mmHg, el pH es aproximadamente:`, [`7.50`, `7.40`, `7.30`, `7.20`], `6.1 + log(30 / 1.2) = 6.1 + log 25 = 7.50.`],
  [`En la ecuación de la sangre, el factor 0.03 multiplica a:`, [`La pCO₂`, `El HCO₃⁻`, `El pH`, `El pKa`], `pH = 6.1 + log ([HCO₃⁻] / (0.03 × pCO₂)).`],
  [`«Metabólica» significa que la alteración principal está en:`, [`El HCO₃⁻`, `La pCO₂`, `La glucosa`, `El sodio`], `Metabólica = la culpa es del HCO₃⁻.`],
]);

/* ---------------- Tema 22 · Generalidades de hidrocarburos ---------------- */
addChecks(`Química orgánica e hidrocarburos`, [
  [`¿Por qué el carbono permite tanta variedad de compuestos?`, [`Forma enlaces fuertes consigo mismo y con otros elementos, y arma cadenas y anillos`, `Porque es un metal`, `Porque es un gas noble`, `Porque solo forma un enlace`], `Su capacidad de formar cadenas y anillos es la base de la vida.`],
  [`Originalmente, «orgánico» significa:`, [`Derivado de los organismos vivos`, `Que contiene metales`, `Que es soluble en agua`, `Que es artificial`], `Orgánico = derivado de organismos vivos.`],
  [`¿En cuántas clases divide el material a los compuestos orgánicos?`, [`Tres: hidrocarburos, compuestos con oxígeno y con nitrógeno`, `Dos: ácidos y bases`, `Cuatro: alcanos, alquenos, alquinos y aromáticos`, `Una sola`], `Hidrocarburos, compuestos con O y compuestos con N.`],
  [`Si una molécula contiene C, H y O, ¿es un hidrocarburo?`, [`No, porque tiene oxígeno`, `Sí, siempre`, `Solo si es líquida`, `Solo si tiene anillos`], `Hidrocarburo = solo C y H.`],
  [`¿Cuál de estas moléculas orgánicas se ve en el laboratorio clínico según el material?`, [`Colesterol`, `Cloruro de sodio`, `Agua`, `Dióxido de carbono`], `Glucosa, colesterol, urea, fármacos y colorantes.`],
  [`El colorante mostrado en la pág. 3 es:`, [`El carmín`, `La fenolftaleína`, `El azul de metileno`, `La eosina`], `El carmín es un colorante orgánico.`],
]);
addChecks(`Clasificación de los hidrocarburos`, [
  [`¿Cuáles son los tres criterios para clasificar hidrocarburos?`, [`Forma de la cadena, tipo de enlace y aromaticidad`, `Color, olor y sabor`, `Masa, volumen y densidad`, `pH, Ka y Kb`], `Cadena, saturación y aromaticidad.`],
  [`Un hidrocarburo acíclico tiene:`, [`Cadena abierta con extremos libres`, `Uno o varios anillos`, `Anillos tipo benceno`, `Solo enlaces triples`], `Acíclico = cadena abierta (lineal o ramificada).`],
  [`Un hidrocarburo insaturado tiene:`, [`Al menos un enlace doble o triple`, `Solo enlaces sencillos`, `El máximo de hidrógenos`, `Átomos de oxígeno`], `Insaturado: doble (alqueno) o triple (alquino).`],
  [`¿Qué familias son alifáticas?`, [`Alcanos, alquenos, alquinos y cicloalcanos`, `Solo el benceno`, `Los aromáticos`, `Alcoholes y fenoles`], `Alifáticos frente a aromáticos.`],
  [`La fórmula del benceno es:`, [`C₆H₆`, `C₆H₁₂`, `C₆H₁₄`, `C₆H₁₀`], `Benceno: C₆H₆.`],
  [`La estabilidad especial de los aromáticos se debe a:`, [`Electrones deslocalizados (resonancia)`, `Enlaces sencillos únicamente`, `La presencia de oxígeno`, `Su cadena abierta`], `Resonancia: electrones deslocalizados en el anillo.`],
]);
addChecks(`Estructura de los alifáticos: el esqueleto`, [
  [`En la estructura de un hidrocarburo, las valencias que sobran del carbono se completan con:`, [`Hidrógenos`, `Oxígenos`, `Nitrógenos`, `Electrones libres`], `El esqueleto de C se completa con H.`],
  [`El butano es un ejemplo de cadena:`, [`Lineal`, `Ramificada`, `Cíclica`, `Aromática`], `Butano: lineal; isobutano: ramificada.`],
  [`El ciclohexano tiene:`, [`6 carbonos en anillo con enlaces sencillos`, `6 carbonos en cadena abierta`, `Un anillo aromático`, `Un enlace triple`], `Ciclohexano: alicíclico de 6 C.`],
  [`La fórmula CH₃−CH₂−CH₂−CH₃ es una representación:`, [`Semidesarrollada`, `Molecular`, `Lineangular`, `Desarrollada`], `Semidesarrollada: grupos CH₃ y CH₂ unidos.`],
  [`La fórmula C₄H₁₀ es una representación:`, [`Molecular`, `Semidesarrollada`, `Desarrollada`, `Lineangular`], `Molecular: solo cuenta átomos.`],
  [`En la representación lineangular, cada vértice y cada extremo representa:`, [`Un carbono`, `Un hidrógeno`, `Un oxígeno`, `Un enlace doble`], `Zigzag: cada vértice y extremo es un C.`],
  [`Los alicíclicos son anillos:`, [`Sin la deslocalización de los aromáticos`, `Con resonancia como el benceno`, `De cadena abierta`, `Con oxígeno`], `Alicíclicos: anillos sin deslocalización.`],
]);
addChecks(`Fórmulas generales`, [
  [`La fórmula general de los alquinos es:`, [`CₙH₂ₙ₋₂`, `CₙH₂ₙ₊₂`, `CₙH₂ₙ`, `CₙHₙ`], `Alquinos: CₙH₂ₙ₋₂.`],
  [`¿Cuántos hidrógenos tiene un alcano de 6 carbonos?`, [`14`, `12`, `10`, `6`], `2(6) + 2 = 14 → C₆H₁₄.`],
  [`¿Cuántos hidrógenos tiene un alqueno de 5 carbonos?`, [`10`, `12`, `8`, `5`], `2(5) = 10 → C₅H₁₀.`],
  [`Cada enlace doble o cada anillo quita al alcano:`, [`2 hidrógenos`, `1 hidrógeno`, `4 hidrógenos`, `Ningún hidrógeno`], `Doble o anillo: −2 H; triple: −4 H.`],
  [`La fórmula C₄H₈ puede corresponder a:`, [`Buteno o ciclobutano`, `Butano`, `Butino`, `Benceno`], `CₙH₂ₙ: alqueno o cicloalcano.`],
  [`La fórmula del ciclohexano es:`, [`C₆H₁₂`, `C₆H₁₄`, `C₆H₆`, `C₆H₁₀`], `Cicloalcano CₙH₂ₙ: C₆H₁₂.`],
  [`En la pág. 7 aparece «etono»; se refiere a:`, [`El etano`, `El eteno`, `El etino`, `La etanona`], `Es una errata: se refiere al etano.`],
]);
addChecks(`Nomenclatura: las tres partes del nombre`, [
  [`¿Qué indica la raíz del nombre IUPAC?`, [`El número de carbonos de la cadena principal`, `El tipo de enlace`, `Las ramificaciones`, `La posición del doble enlace`], `Raíz = número de carbonos.`],
  [`El sufijo «-eno» indica:`, [`Al menos un enlace doble`, `Solo enlaces sencillos`, `Un enlace triple`, `Un anillo aromático`], `-ano sencillo; -eno doble; -ino triple.`],
  [`La raíz para 3 carbonos es:`, [`prop-`, `but-`, `et-`, `pent-`], `1 met, 2 et, 3 prop, 4 but.`],
  [`La raíz «oct-» indica:`, [`8 carbonos`, `6 carbonos`, `10 carbonos`, `4 carbonos`], `oct- = 8.`],
  [`Las ramas (grupos alquilo) terminan en:`, [`-il o -ilo`, `-ano`, `-ol`, `-ona`], `Prefijos: metil, etil, propil…`],
  [`«2-metilpropano» describe:`, [`Una cadena de 3 C con un metilo en el carbono 2`, `Una cadena de 2 C con un propilo`, `Una cadena de 4 C lineal`, `Un anillo de 3 C`], `Prop = 3 C; metil en C2.`],
  [`¿Qué significa IUPAC?`, [`Unión Internacional de Química Pura y Aplicada`, `Instituto Universal de Química Pura`, `Índice Unificado de Compuestos`, `Unión Industrial de Petróleo y Carbono`], `IUPAC fija las reglas de nomenclatura.`],
  [`La raíz «dec-» corresponde a:`, [`10 carbonos`, `9 carbonos`, `12 carbonos`, `2 carbonos`], `non- = 9; dec- = 10.`],
]);
addChecks(`Pasos para nombrar (ejemplo con doble enlace)`, [
  [`Si una rama se repite dos veces, se usa el prefijo:`, [`di-`, `tri-`, `bis-`, `tetra-`], `di-, tri-, tetra- para ramas repetidas.`],
  [`Al ordenar alfabéticamente las ramas, los prefijos di- y tri-:`, [`No se cuentan`, `Se cuentan como letra d o t`, `Van siempre primero`, `Van siempre al final`], `Se ignoran di-, tri- para el orden alfabético.`],
  [`En un alcano (sin dobles ni triples), se numera desde el extremo más cercano a:`, [`Las ramas`, `El carbono con más H`, `El extremo derecho siempre`, `El grupo más pesado`], `En alcanos manda la cercanía a las ramas.`],
  [`En el nombre IUPAC, los números se separan de las letras con:`, [`Guiones`, `Comas`, `Puntos`, `Espacios`], `Números-letras con guion; números entre sí con comas.`],
  [`¿Qué fórmula molecular tiene el 4-etil-2-metilhex-2-eno?`, [`C₉H₁₈`, `C₉H₂₀`, `C₆H₁₂`, `C₈H₁₆`], `6 + 2 + 1 = 9 C; alqueno: C₉H₁₈.`],
  [`¿Por qué «etil» se escribe antes que «metil»?`, [`Por orden alfabético (e antes que m)`, `Porque es más grande`, `Porque está en C4`, `Por ser el primero de la cadena`], `Ramas en orden alfabético.`],
  [`La cadena principal de un alqueno debe incluir el doble enlace aunque:`, [`No sea la cadena más larga`, `Tenga ramas`, `Sea cíclica`, `Tenga más de 10 C`], `Debe contener el doble o triple enlace.`],
]);
addChecks(`Alcanos: estructura y propiedades`, [
  [`La geometría de los carbonos de un alcano es:`, [`Tetraédrica (≈109.5°)`, `Trigonal plana (120°)`, `Lineal (180°)`, `Cuadrada (90°)`], `sp³ → tetraédrica.`],
  [`Los alcanos tienen libre rotación porque:`, [`Solo tienen enlaces sencillos σ`, `Tienen enlaces π`, `Son lineales`, `Son aromáticos`], `Enlaces σ: permiten rotación.`],
  [`Los alcanos de C5 a C17 a temperatura ambiente son:`, [`Líquidos`, `Gases`, `Sólidos`, `Plasmas`], `C1–C4 gases, C5–C17 líquidos, C18+ sólidos.`],
  [`Los alcanos en agua son:`, [`Insolubles, porque son apolares`, `Muy solubles`, `Electrolitos fuertes`, `Ácidos`], `Apolares: no se mezclan con agua.`],
  [`El metano y el butano a temperatura ambiente son:`, [`Gases`, `Líquidos`, `Sólidos`, `Cristales`], `C1–C4: gases.`],
  [`En la halogenación de un alcano, el halógeno:`, [`Sustituye a un hidrógeno`, `Se adiciona a un doble enlace`, `Rompe la cadena en dos`, `Forma un alcohol`], `Reacción de sustitución radicalaria.`],
  [`¿Qué condiciones necesita la halogenación radicalaria?`, [`Luz UV (hν) o calor`, `Agua y ácido`, `Un catalizador de níquel y H₂`, `Temperatura bajo cero`], `Cl₂ o Br₂ con luz UV o calor.`],
]);
addChecks(`Alquenos: estructura y propiedades`, [
  [`El ángulo de enlace en el doble enlace C=C es aproximadamente:`, [`120°`, `109.5°`, `180°`, `90°`], `sp² → trigonal plana, 120°.`],
  [`Un doble enlace está formado por:`, [`1 enlace σ y 1 enlace π`, `2 enlaces σ`, `2 enlaces π`, `1 σ y 2 π`], `Doble = σ + π.`],
  [`Comparando isómeros, los cis suelen hervir:`, [`Un poco más alto que los trans`, `Mucho más bajo`, `Igual siempre`, `No hierven`], `Los cis suelen hervir un poco más alto.`],
  [`Alqueno + H₂ con catalizador produce:`, [`Un alcano (hidrogenación)`, `Un alcohol`, `Un dihalogenuro`, `Un alquino`], `Hidrogenación: alqueno → alcano.`],
  [`Alqueno + Br₂ produce:`, [`Un dihalogenuro adyacente`, `Un alcano`, `Un alcohol`, `Un éter`], `Halogenación por adición.`],
  [`En la adición electrófila, el enlace π:`, [`Se rompe para formar dos σ nuevos`, `Se vuelve triple`, `No cambia`, `Se convierte en un anillo`], `La adición rompe el π.`],
  [`¿Cómo son los puntos de ebullición de los alquenos frente a alcanos del mismo número de carbonos?`, [`Muy similares`, `Mucho más altos`, `Mucho más bajos`, `No se pueden comparar`], `Muy similares a los alcanos.`],
]);
addChecks(`Alquinos: estructura y propiedades`, [
  [`Los carbonos del triple enlace tienen hibridación:`, [`sp`, `sp²`, `sp³`, `sp⁴`], `Triple → sp, lineal.`],
  [`El ángulo de un alquino en el triple enlace es:`, [`180°`, `120°`, `109.5°`, `90°`], `Geometría lineal: 180°.`],
  [`Los dos enlaces π del triple enlace son:`, [`Perpendiculares entre sí`, `Paralelos`, `Iguales al σ`, `Inexistentes`], `1 σ + 2 π perpendiculares.`],
  [`Un alquino terminal es aquel cuyo triple enlace:`, [`Está en el extremo de la cadena`, `Está en el centro`, `Forma un anillo`, `Tiene oxígeno`], `Terminal = triple en el extremo; tiene acidez.`],
  [`La hidratación u oximercuración de un alquino forma:`, [`Compuestos carbonílicos (cetonas o aldehídos)`, `Alcanos`, `Éteres`, `Ésteres`], `Hidratación → carbonílicos.`],
  [`Según la numeración del dibujo de la pág. 14, el nombre correcto sería:`, [`hex-3-en-1-ino`, `hex-3-en-2-ino`, `hex-1-en-3-ino`, `hex-2-ino`], `El triple está entre C1 y C2: localizador 1.`],
  [`Comparados con los alquenos, los alquinos son:`, [`Levemente más polares`, `Totalmente apolares`, `Iónicos`, `Mucho menos polares`], `Levemente más polares que los alquenos.`],
]);
addChecks(`Tabla comparativa: alcanos, alquenos y alquinos`, [
  [`La reacción principal de los alcanos es:`, [`Sustitución radicalaria`, `Adición electrófila`, `Sustitución ácida`, `Polimerización`], `Alcanos: sustitución radicalaria.`],
  [`La reacción principal de los alquenos es:`, [`Adición electrófila`, `Sustitución radicalaria`, `Combustión únicamente`, `Neutralización`], `Alquenos: adición electrófila.`],
  [`¿Qué familia tiene «acidez terminal»?`, [`Los alquinos`, `Los alcanos`, `Los alquenos`, `Ninguna`], `Alquinos terminales: dos π y acidez.`],
  [`¿Qué geometría tienen los alquenos en el doble enlace?`, [`Trigonal plana`, `Tetraédrica`, `Lineal`, `Piramidal`], `Alquenos: trigonal plana, 120°.`],
  [`Al aumentar el número de enlaces entre carbonos, el ángulo:`, [`Se abre: 109.5° → 120° → 180°`, `Se cierra`, `No cambia`, `Se vuelve 90°`], `Más enlaces: ángulo más abierto.`],
  [`La reactividad de los alcanos es:`, [`Muy baja (parafinas)`, `Alta`, `Muy alta`, `Explosiva siempre`], `Alcanos: muy baja reactividad.`],
]);

/* ---------------- Tema 23 · Alcanos ---------------- */
addChecks(`Generalidades de los alcanos`, [
  [`La hibridación sp³ del carbono combina:`, [`1 orbital 2s y 3 orbitales 2p`, `1 orbital 2s y 2 orbitales 2p`, `1 orbital 2s y 1 orbital 2p`, `2 orbitales 2s`], `sp³ = 1 s + 3 p.`],
  [`¿Tienen grupos funcionales reactivos los alcanos?`, [`No`, `Sí, un grupo −OH`, `Sí, un doble enlace`, `Sí, un grupo carbonilo`], `No tienen grupos funcionales reactivos.`],
  [`¿En qué condiciones reaccionan los alcanos?`, [`Condiciones extremas: craqueo térmico o combustión a alta temperatura`, `A temperatura ambiente con agua`, `Con cualquier ácido débil`, `Al contacto con la luz visible sin reactivos`], `Solo en condiciones extremas.`],
  [`Como ácidos y bases, los alcanos son:`, [`Muy débiles`, `Muy fuertes`, `Ácidos fuertes`, `Bases fuertes`], `Son ácidos y bases muy débiles.`],
  [`Los alcanos se describen como los compuestos orgánicos:`, [`Más sencillos`, `Más reactivos`, `Más polares`, `Con más grupos funcionales`], `Solo enlaces sencillos: los más sencillos.`],
]);
addChecks(`Radicales (grupos) alquilo`, [
  [`Un radical alquilo resulta de:`, [`Quitarle un hidrógeno a un alcano`, `Agregarle un hidrógeno a un alcano`, `Quitarle un carbono`, `Agregarle un oxígeno`], `Alcano − 1 H = alquilo.`],
  [`¿Por qué los radicales alquilo no existen solos?`, [`Porque quedan con un enlace libre y van unidos como ramas`, `Porque son gases`, `Porque son iónicos`, `Porque se evaporan`], `Siempre van unidos a una cadena.`],
  [`El nombre común del grupo −C(CH₃)₃ es:`, [`terc-butil`, `isobutil`, `sec-butil`, `neopentil`], `1,1-dimetiletil = terc-butil.`],
  [`El nombre común del 2-metilpropil (−CH₂−CH(CH₃)₂) es:`, [`isobutil`, `terc-butil`, `sec-butil`, `isopropil`], `2-metilpropil = isobutil.`],
  [`El grupo 1-metilpropil (−CH(CH₃)−CH₂−CH₃) se conoce como:`, [`sec-butil`, `terc-butil`, `isobutil`, `butil`], `1-metilpropil = sec-butil.`],
  [`El grupo −CH₂−C(CH₃)₃ se llama:`, [`2,2-dimetilpropil (neopentil)`, `isopentil`, `terc-butil`, `pentil`], `Neopentil = 2,2-dimetilpropil.`],
  [`¿Con qué símbolo general se representa un radical alquilo?`, [`R−`, `X−`, `Ar−`, `OH−`], `Se simboliza R−.`],
  [`En el nombre sistemático de un alquilo, el carbono 1 es:`, [`El que se une a la cadena principal`, `El más alejado de la cadena`, `El que tiene más H`, `Cualquiera`], `C1 = carbono de unión a la cadena.`],
]);
addChecks(`Conformaciones del etano`, [
  [`Una conformación es:`, [`Una posición distinta de los átomos al girar alrededor del enlace C−C`, `Un compuesto diferente`, `Una reacción química`, `Un tipo de enlace`], `Conformación = postura al girar el enlace sencillo.`],
  [`En la conformación eclipsada del etano, el ángulo entre los C−H de adelante y atrás es:`, [`0°`, `60°`, `120°`, `180°`], `Eclipsada = 0°: enfrentados.`],
  [`La conformación eclipsada es menos estable por:`, [`La repulsión entre los electrones de los enlaces`, `La falta de hidrógenos`, `La presencia de enlaces π`, `La ruptura de enlaces`], `Enlaces enfrentados = más repulsión.`],
  [`¿Qué proyección mira la molécula de frente a lo largo del enlace C−C?`, [`Newman`, `Caballete`, `Fischer`, `Lewis`], `Proyección de Newman.`],
  [`Los confórmeros se convierten entre sí:`, [`Sin romper enlaces`, `Rompiendo enlaces`, `Solo con catalizador`, `Nunca`], `Misma molécula, distinta postura.`],
  [`La conformación alternada (escalonada) corresponde a un giro de:`, [`60°`, `0°`, `90°`, `180°`], `Alternada = 60°: intercalados.`],
]);
addChecks(`Conformaciones del butano`, [
  [`En las conformaciones del butano se gira el enlace:`, [`C2−C3`, `C1−C2`, `C3−C4`, `C1−C4`], `Se gira el enlace central.`],
  [`En la conformación gauche, el ángulo entre los metilos es:`, [`60°`, `180°`, `0°`, `120°`], `Gauche (sesgada): 60°.`],
  [`En la totalmente eclipsada, los metilos están a:`, [`0°`, `60°`, `120°`, `180°`], `Los dos CH₃ enfrentados: 0°.`],
  [`El orden de estabilidad del butano es:`, [`Anti > Gauche > Eclipsada 120° > Totalmente eclipsada`, `Totalmente eclipsada > Anti > Gauche`, `Gauche > Anti > Eclipsada`, `Todas igual`], `Más lejos los metilos = más estable.`],
  [`¿Por qué la conformación anti es la más estable?`, [`Los metilos están lo más alejados posible, sin tensión`, `Los metilos están enfrentados`, `No tiene metilos`, `Tiene un doble enlace`], `Anti: 180°, cero tensión.`],
  [`La conformación eclipsada relativa (120°) tiene cierta tensión porque:`, [`Los C−H eclipsan a los C−CH₃`, `Los dos CH₃ están enfrentados`, `Los metilos están a 180°`, `Se rompe el enlace`], `Eclipsada 120°: C−H frente a C−CH₃.`],
]);
addChecks(`Conformaciones de los cicloalcanos`, [
  [`En un anillo de cicloalcano, la rotación es:`, [`No libre, pero el anillo se pliega en 3D`, `Totalmente libre`, `Igual que en el etano`, `Imposible de cualquier forma`], `El anillo se pliega para liberar tensión.`],
  [`En la conformación silla, los H en posición ecuatorial están:`, [`Horizontales`, `Verticales`, `Eclipsados`, `En el mástil`], `Ecuatorial = horizontal; axial = vertical.`],
  [`Los H en posición axial están:`, [`Verticales`, `Horizontales`, `En el centro del anillo`, `Ausentes`], `Axial = vertical.`],
  [`La conformación bote es inestable porque:`, [`Eclipsa varios enlaces y los H del «mástil» se estorban`, `No tiene hidrógenos`, `Tiene ángulos de 180°`, `Rompe el anillo`], `Interacción estérica en el mástil.`],
  [`El anillo se pliega para liberar tensión:`, [`Angular y torsional`, `Eléctrica`, `Osmótica`, `Superficial`], `Libera tensión angular y torsional.`],
  [`En la silla, los ángulos del ciclohexano son de aproximadamente:`, [`109° (tetraédricos)`, `120°`, `90°`, `60°`], `Ángulos tetraédricos de 109°.`],
]);
addChecks(`Nomenclatura IUPAC de alcanos: reglas`, [
  [`El sufijo de todo alcano es:`, [`-ano`, `-eno`, `-ino`, `-ilo`], `Prefijo + raíz + -ano.`],
  [`Se numera la cadena desde el extremo que dé:`, [`Los números más bajos a los sustituyentes en el primer punto de diferencia`, `Los números más altos`, `El carbono con más H`, `Siempre desde la izquierda`], `Números más bajos en el primer punto de diferencia.`],
  [`Al convertir un alcano en sustituyente, -ano cambia a:`, [`-ilo`, `-ol`, `-eno`, `-ona`], `Metano → metilo; etano → etilo.`],
  [`¿Cómo se escriben dos metilos en el carbono 2?`, [`2,2-dimetil`, `2-dimetil`, `2-metil-metil`, `dimetil-2`], `Cada rama lleva su número.`],
  [`Error típico al elegir la cadena principal:`, [`Tomar la cadena «que se ve recta» en el dibujo`, `Contar todos los caminos`, `Elegir la más larga`, `Usar orden alfabético`], `Cuente los carbonos por todos los caminos.`],
  [`El prefijo para cuatro sustituyentes iguales es:`, [`tetra-`, `tri-`, `di-`, `penta-`], `di-, tri-, tetra-.`],
]);
addChecks(`Ejemplo resuelto: 3-etil-2-metilhexano`, [
  [`En el 3-etil-2-metilhexano, la cadena principal tiene:`, [`6 carbonos`, `9 carbonos`, `3 carbonos`, `8 carbonos`], `hex- = 6 carbonos.`],
  [`¿En qué carbono está el metilo?`, [`C2`, `C3`, `C4`, `C5`], `Metilo en C2; etilo en C3.`],
  [`Si se numerara desde la derecha, los localizadores serían:`, [`4 y 5`, `2 y 3`, `1 y 2`, `3 y 4`], `Desde la derecha: 4 y 5; desde la izquierda 2 y 3 (gana).`],
  [`El prefijo «iso» (isobutano, isopentano) pertenece a la nomenclatura:`, [`Común, no IUPAC sistemática`, `IUPAC sistemática`, `De Lewis`, `De Newman`], `«Iso» es nomenclatura común.`],
  [`El número total de carbonos del 3-etil-2-metilhexano se obtiene como:`, [`6 + 1 + 2 = 9`, `6 + 3 + 2 = 11`, `6 × 2 = 12`, `3 + 2 = 5`], `Cadena + metilo + etilo = 9 C → C₉H₂₀.`],
]);
addChecks(`Nomenclatura de cicloalcanos`, [
  [`El nombre de un cicloalcano lleva el prefijo:`, [`ciclo-`, `iso-`, `neo-`, `di-`], `ciclo- + raíz + -ano.`],
  [`En un anillo con dos sustituyentes, el carbono 1 lo recibe:`, [`El sustituyente que va primero en orden alfabético`, `El más grande siempre`, `El de la derecha`, `El metilo siempre`], `En el ejemplo, el etilo recibe el 1.`],
  [`Un ciclohexano con un solo etilo se llama:`, [`Etilciclohexano`, `1-etilciclohexano`, `Ciclohexiletano`, `2-etilciclohexano`], `Con un solo sustituyente no se pone número.`],
  [`El ciclopentano tiene:`, [`5 carbonos en anillo`, `6 carbonos en anillo`, `5 carbonos en cadena abierta`, `Un doble enlace`], `ciclo + pent = anillo de 5 C.`],
  [`Con dos o más sustituyentes, el anillo se numera dando:`, [`Las posiciones más bajas y siguiendo el orden alfabético`, `Las posiciones más altas`, `Cualquier número`, `Solo el número 1`], `Posiciones más bajas; empate → abecedario.`],
]);
addChecks(`Nomenclatura común (no IUPAC)`, [
  [`El ácido acético se llama en IUPAC:`, [`Ácido etanoico`, `Ácido metanoico`, `Ácido propanoico`, `Etanol`], `Acético = etanoico, CH₃COOH.`],
  [`El nombre «acético» viene del latín acetum, que significa:`, [`Vinagre`, `Leche`, `Sal`, `Aceite`], `Acetum = vinagre.`],
  [`El nombre «morfina» proviene de:`, [`Morfeo, dios de los sueños`, `Un científico llamado Morf`, `La palabra forma`, `Un mineral`], `De Morfeo, dios de los sueños.`],
  [`¿Cuál es una desventaja de los nombres comunes?`, [`No describen bien las moléculas ni los isómeros`, `Son muy largos`, `Nadie los usa`, `Están prohibidos`], `No describen bien la estructura, sobre todo en moléculas grandes.`],
  [`¿Dónde se siguen usando los nombres comunes?`, [`Vida diaria, industria del petróleo, medicina y farmacia`, `En ningún lugar`, `Solo en exámenes`, `Solo en la IUPAC`], `Se usan ampliamente y la IUPAC acepta muchos.`],
  [`La fórmula del ácido acético es:`, [`CH₃COOH`, `HCOOH`, `CH₃OH`, `C₂H₆`], `Ácido etanoico: CH₃COOH.`],
]);
addChecks(`Clasificación: por cadena y por tipo de carbono`, [
  [`Un carbono primario está unido a:`, [`1 carbono`, `2 carbonos`, `3 carbonos`, `4 carbonos`], `Primario (1°): un C vecino.`],
  [`El carbono central del propano es:`, [`Secundario`, `Primario`, `Terciario`, `Cuaternario`], `Unido a 2 C: secundario.`],
  [`Un grupo CH₂ dentro de una cadena casi siempre es un carbono:`, [`Secundario`, `Primario`, `Terciario`, `Cuaternario`], `CH₂ = 2°.`],
  [`Para clasificar un carbono se cuentan:`, [`Los carbonos vecinos, no los H`, `Los hidrógenos`, `Los enlaces dobles`, `Los oxígenos`], `Cuente los C vecinos.`],
  [`El 2-metilbutano es un alcano:`, [`Ramificado`, `Lineal (normal)`, `Cíclico`, `Aromático`], `Tiene una cadena lateral.`],
  [`Los n-alcanos son:`, [`Lineales o normales, sin ramas`, `Ramificados`, `Cíclicos`, `Aromáticos`], `n = normal, sin ramas.`],
  [`Un carbono sin hidrógenos unido a 4 carbonos es:`, [`Cuaternario`, `Terciario`, `Secundario`, `Primario`], `C sin H = 4°.`],
]);
addChecks(`n-alcanos, ramificados y cíclicos`, [
  [`¿A qué temperatura hierve el butano según la tabla?`, [`0 °C`, `36 °C`, `−164 °C`, `126 °C`], `Butano: 0 °C.`],
  [`El punto de ebullición del octano es:`, [`126 °C`, `36 °C`, `174 °C`, `0 °C`], `Octano: 126 °C.`],
  [`Los n-alcanos en el agua:`, [`Flotan, porque su densidad es menor de 1`, `Se hunden`, `Se disuelven`, `Reaccionan`], `Densidad < 1: flotan.`],
  [`El isooctano es la referencia de:`, [`100 octanos de la gasolina`, `0 octanos`, `Punto de congelación`, `pH neutro`], `Isooctano: 100 octanos.`],
  [`¿Qué cicloalcano tiene ángulos de 109.5° (sin tensión)?`, [`Ciclohexano`, `Ciclopropano`, `Ciclobutano`, `Ciclopentano`], `Ciclohexano: 109.5°.`],
  [`El ángulo del ciclopropano es de:`, [`60°`, `88°`, `108°`, `109.5°`], `Ciclopropano: 60°, máxima tensión.`],
  [`El neopentano hierve más bajo que el n-pentano porque:`, [`Es más ramificado (casi esférico)`, `Tiene más carbonos`, `Es polar`, `Tiene un doble enlace`], `Más ramas = hierve más bajo.`],
  [`El isohexano (2-metilpentano) es isómero de:`, [`El hexano`, `El pentano`, `El heptano`, `El ciclohexano`], `Ambos son C₆H₁₄.`],
]);
addChecks(`Propiedades de los alcanos`, [
  [`¿Conducen la electricidad los alcanos?`, [`No`, `Sí, muy bien`, `Solo los gaseosos`, `Solo en agua`], `No conducen la electricidad.`],
  [`¿Cómo son los alcanos en color y olor?`, [`Incoloros e inodoros`, `Amarillos y olorosos`, `Rojos e inodoros`, `Incoloros y con olor fuerte`], `Incoloros e inodoros.`],
  [`¿Por qué los alcanos son poco reactivos?`, [`Sus enlaces C−C y C−H son muy fuertes y no tienen zonas con exceso o falta de electrones`, `Porque son iónicos`, `Porque tienen dobles enlaces`, `Porque son ácidos fuertes`], `Enlaces fuertes y sin polaridad.`],
  [`En la combustión del metano, por cada CH₄ se necesitan:`, [`2 O₂`, `1 O₂`, `3 O₂`, `4 O₂`], `CH₄ + 2 O₂ → CO₂ + 2 H₂O + energía.`],
  [`La combustión de los alcanos:`, [`Libera calor`, `Absorbe calor`, `No cambia la energía`, `Produce H₂`], `Combustión → CO₂ + H₂O + energía.`],
  [`En CH₄ + Cl₂ → CH₃Cl + HCl, además del clorometano se forma:`, [`HCl`, `H₂O`, `CO₂`, `H₂`], `El H sustituido sale como HCl.`],
]);
addChecks(`Isomería estructural (de cadena)`, [
  [`Los isómeros estructurales tienen:`, [`La misma fórmula molecular pero distinta conexión de átomos`, `Distinta fórmula molecular`, `La misma estructura girada`, `Distinto número de carbonos`], `Misma fórmula, distinto esqueleto.`],
  [`¿Cuántos isómeros tiene el butano?`, [`2`, `3`, `1`, `5`], `n-butano e isobutano.`],
  [`¿Cuántos isómeros tiene el heptano?`, [`9`, `5`, `18`, `35`], `C7: 9 isómeros.`],
  [`¿Cuántos isómeros tiene el decano?`, [`75`, `35`, `18`, `9`], `C10: 75 isómeros.`],
  [`¿Cuántos isómeros tiene el octano?`, [`18`, `9`, `35`, `5`], `C8: 18 isómeros.`],
  [`En los alcanos, la isomería estructural es de tipo:`, [`Cadena (cambia el esqueleto)`, `Posición del grupo funcional`, `Geométrica cis/trans`, `Óptica`], `Isomería de cadena: lineal o ramificado.`],
  [`Los isómeros del pentano son n-pentano, isopentano y:`, [`Neopentano`, `Isobutano`, `Ciclopentano`, `Hexano`], `Neopentano = 2,2-dimetilpropano.`],
]);
addChecks(`Relevancia clínica de los alcanos`, [
  [`¿Qué alcanos son muy lipofílicos y cruzan la barrera hematoencefálica?`, [`Los de cadena corta (C1 a C8)`, `Los de más de 20 C`, `Los cicloalcanos únicamente`, `Ninguno`], `C1–C8: riesgo en inhalación de solventes.`],
  [`La vaselina (petrolato) se usa en:`, [`Dermatología, para la piel`, `Anestesia general`, `Diagnóstico de diabetes`, `Tinciones`], `Vaselina para la piel.`],
  [`El aceite mineral se usa como:`, [`Laxante`, `Anestésico`, `Antibiótico`, `Colorante`], `Aceite mineral: laxante.`],
  [`El nombre IUPAC del halotano es:`, [`2-bromo-2-cloro-1,1,1-trifluoroetano`, `2-metilpropano`, `Clorometano`, `1,1-dicloroetano`], `Halotano: alcano halogenado.`],
  [`El etano y el pentano en el aliento provienen de:`, [`Lípidos dañados por radicales libres`, `La digestión de proteínas`, `El metabolismo de la glucosa`, `La respiración normal sin daño`], `Biomarcadores de estrés oxidativo.`],
  [`¿Para qué se usó el halotano?`, [`Como anestésico general inhalado`, `Como laxante`, `Como desinfectante`, `Como combustible`], `Anestésico general inhalado.`],
]);

/* ---------------- Tema 24 · Alquenos ---------------- */
addChecks(`Generalidades de los alquenos`, [
  [`Al hibridarse en sp², al carbono le queda:`, [`Un orbital 2p sin hibridar`, `Ningún orbital libre`, `Dos orbitales 2p sin hibridar`, `Un orbital 2s libre`], `Le queda un orbital p para el enlace π.`],
  [`El enlace π del doble enlace se forma con:`, [`Los orbitales p sin hibridar, por encima y por debajo del plano`, `Los orbitales híbridos sp²`, `Los orbitales s`, `Los electrones del hidrógeno`], `σ con híbridos; π con los p sin hibridar.`],
  [`La geometría del alqueno alrededor del doble enlace es:`, [`Trigonal plana (≈120°)`, `Tetraédrica`, `Lineal`, `Octaédrica`], `sp² → trigonal plana.`],
  [`¿Qué tipo de isomería permite la rigidez del doble enlace?`, [`Geométrica cis/trans`, `De cadena`, `Óptica`, `Conformacional libre`], `La rotación restringida origina cis/trans.`],
  [`Un alqueno de 4 carbonos con un doble enlace tiene fórmula:`, [`C₄H₈`, `C₄H₁₀`, `C₄H₆`, `C₄H₄`], `CₙH₂ₙ: C₄H₈.`],
  [`Los alquenos se clasifican como hidrocarburos:`, [`Insaturados`, `Saturados`, `Aromáticos`, `Oxigenados`], `Tienen al menos un C=C.`],
]);
addChecks(`Conformación estructural de los alquenos`, [
  [`El enlace π hace que la posición de los sustituyentes alrededor del doble enlace:`, [`Quede fija`, `Gire libremente`, `Cambie sola`, `Desaparezca`], `Rigidez: sustituyentes fijos.`],
  [`Las partes con enlaces sencillos de un alqueno pueden adoptar conformaciones:`, [`Escalonadas o eclipsadas, como en los alcanos`, `Solo cis`, `Solo trans`, `Ninguna`], `Los C−C sencillos sí giran.`],
  [`El ángulo alrededor del C=C es de:`, [`120°`, `109.5°`, `180°`, `90°`], `Trigonal plana: 120°.`],
  [`«3-metil-1-buteno» y «3-metilbut-1-eno» son:`, [`La misma molécula escrita en dos formatos`, `Isómeros distintos`, `Un alcano y un alqueno`, `Compuestos sin relación`], `Dos formatos del mismo nombre.`],
  [`En CH₃−CH(CH₃)−CH=CH₂, la numeración empieza:`, [`Desde el doble enlace (CH₂=)`, `Desde el CH₃ de la izquierda`, `Desde el metilo`, `Desde el centro`], `El doble enlace recibe el número más bajo.`],
]);
addChecks(`Nomenclatura IUPAC de alquenos`, [
  [`Si un alqueno tiene varios dobles enlaces, la cadena principal es la que:`, [`Contiene más dobles enlaces`, `Es más larga aunque no los tenga`, `Tiene más ramas`, `Tiene menos carbonos`], `Debe contener la mayor cantidad de dobles enlaces.`],
  [`La posición del doble enlace se indica con:`, [`El número del primer carbono del doble enlace (el menor)`, `El número del segundo carbono`, `La suma de ambos`, `No se indica`], `Se usa el menor de los dos números.`],
  [`Si la distancia al doble enlace empata desde ambos extremos, decide:`, [`El sustituyente más cercano`, `El orden alfabético de la raíz`, `El extremo izquierdo`, `El número de hidrógenos`], `Empate → el sustituyente decide.`],
  [`Un alqueno con tres dobles enlaces lleva el sufijo:`, [`-trieno`, `-dieno`, `-ino`, `-tetraeno`], `-dieno, -trieno…`],
  [`Si aplica la isomería geométrica, el nombre lleva antepuesto:`, [`cis o trans`, `iso o neo`, `orto o para`, `sec o terc`], `Se antepone cis o trans.`],
  [`La fórmula del 4-metilpent-2-eno es:`, [`C₆H₁₂`, `C₆H₁₄`, `C₅H₁₀`, `C₆H₁₀`], `5 + 1 = 6 C; alqueno: C₆H₁₂.`],
]);
addChecks(`Clasificación por número de dobles enlaces`, [
  [`Un monoalqueno tiene:`, [`1 doble enlace`, `2 dobles enlaces`, `3 o más dobles enlaces`, `Ningún doble enlace`], `Mono = 1.`],
  [`El buta-1,3-dieno es un ejemplo de:`, [`Dieno`, `Monoalqueno`, `Trieno`, `Alquino`], `Dos dobles enlaces: dieno.`],
  [`El hexa-1,3,5-trieno tiene:`, [`3 dobles enlaces`, `2 dobles enlaces`, `1 doble enlace`, `6 dobles enlaces`], `Trieno = 3.`],
  [`La fórmula del β-caroteno es:`, [`C₄₀H₅₆`, `C₆H₆`, `C₂₀H₄₂`, `C₁₈H₃₄O₂`], `β-caroteno: C₄₀H₅₆.`],
  [`El β-caroteno es precursor de:`, [`La vitamina A`, `La vitamina C`, `La glucosa`, `El colesterol`], `Pigmento naranja de la zanahoria, precursor de la vitamina A.`],
  [`Los polienos son frecuentes en:`, [`Productos naturales y pigmentos`, `Combustibles gaseosos únicamente`, `Sales inorgánicas`, `Metales`], `Trienos/polienos: productos naturales y pigmentos.`],
  [`La reactividad de los dienos depende de:`, [`Qué tan cerca están los dobles enlaces`, `Su color`, `El número de hidrógenos solamente`, `Nada`], `Depende de la disposición de los dobles enlaces.`],
]);
addChecks(`Disposición de los dobles enlaces y posición`, [
  [`Los dobles enlaces conjugados están separados por:`, [`Un enlace sencillo`, `Dos o más sencillos`, `Ningún enlace (comparten carbono)`, `Un enlace triple`], `Conjugado: =−= alterna.`],
  [`Los dienos conjugados son muy estables por:`, [`Resonancia y deslocalización de electrones π`, `Tener pocos electrones`, `Ser alcanos`, `Ser lineales`], `Gran estabilidad por resonancia.`],
  [`En los dienos aislados, cada doble enlace:`, [`Reacciona por separado, como un monoalqueno`, `Está deslocalizado`, `Comparte el mismo carbono`, `Es inestable`], `Aislados: reaccionan independientes.`],
  [`Los alenos (acumulados) son:`, [`Muy reactivos e inestables`, `Los más estables`, `Aromáticos`, `Saturados`], `Acumulados: π perpendiculares, inestables.`],
  [`El hex-3-eno es un alqueno:`, [`Interno`, `Terminal`, `Acumulado`, `Aromático`], `Doble enlace en el interior: interno.`],
  [`Los alquenos internos, comparados con los terminales, son:`, [`Más impedidos y más estables`, `Más accesibles y menos estables`, `Iguales`, `Aromáticos`], `Internos: más impedidos y estables.`],
  [`En los alenos, los dos enlaces π son:`, [`Perpendiculares`, `Paralelos`, `Conjugados`, `Deslocalizados`], `Acumulados: π perpendiculares.`],
]);
addChecks(`Grado de sustitución del doble enlace`, [
  [`El grado de sustitución se determina contando:`, [`Los grupos de carbono (R) unidos a los carbonos del doble enlace`, `Los hidrógenos totales`, `Los dobles enlaces`, `Los oxígenos`], `Cuente los R en el C=C.`],
  [`El propeno es un alqueno:`, [`Monosustituido`, `Disustituido`, `Trisustituido`, `Tetrasustituido`], `R−CH=CH₂: monosustituido.`],
  [`El 2-metilbut-2-eno es un alqueno:`, [`Trisustituido`, `Monosustituido`, `Disustituido`, `Tetrasustituido`], `R₂C=CH−R: trisustituido.`],
  [`El alqueno monosustituido tiene estabilidad:`, [`La menor`, `La máxima`, `Intermedia`, `Igual a todos`], `Menos R = menos estable.`],
  [`La alta estabilidad del trisustituido se explica por:`, [`Hiperconjugación`, `Puentes de hidrógeno`, `Enlaces iónicos`, `Ser aromático`], `Más R → más hiperconjugación.`],
  [`El but-2-eno es un alqueno:`, [`Disustituido`, `Monosustituido`, `Trisustituido`, `Tetrasustituido`], `R−CH=CH−R: disustituido.`],
]);
addChecks(`Isomería geométrica: cis y trans`, [
  [`El isómero trans tiene los grupos principales:`, [`En lados opuestos`, `Del mismo lado`, `En el mismo carbono`, `Fuera de la molécula`], `Trans = cruzados.`],
  [`¿Qué isómero tiene momento dipolar nulo o muy bajo?`, [`Trans`, `Cis`, `Ambos igual`, `Ninguno`], `Trans: momento dipolar nulo o muy bajo.`],
  [`¿Qué isómero es más estable?`, [`Trans`, `Cis`, `Son iguales`, `Depende del color`], `El cis sufre repulsión entre grupos.`],
  [`Cis también se denomina:`, [`Z`, `E`, `R`, `S`], `Cis (Z), trans (E).`],
  [`¿Por qué el but-1-eno no tiene isómeros cis/trans?`, [`Su C1 tiene dos hidrógenos (grupos iguales)`, `Porque no tiene doble enlace`, `Porque es cíclico`, `Porque es muy pequeño`], `Cada C del doble enlace necesita dos grupos distintos.`],
  [`¿Por qué el 2-metilbut-2-eno no tiene cis/trans?`, [`Su C2 tiene dos CH₃ iguales`, `Tiene un triple enlace`, `No tiene metilos`, `Es aromático`], `Grupos iguales en un carbono del doble enlace.`],
  [`El isómero cis tiene un punto de ebullición:`, [`Ligeramente mayor que el trans`, `Mucho menor`, `Igual`, `No hierve`], `Cis: mayor momento dipolar, hierve un poco más alto.`],
]);
addChecks(`Propiedades y reacciones de adición`, [
  [`Eteno + H₂ con Pd/C produce:`, [`Etano`, `Etanol`, `Etino`, `Dibromoetano`], `Hidrogenación: alqueno → alcano.`],
  [`La halogenación del propeno pasa por un intermediario:`, [`Ion bromonio cíclico`, `Carbanión libre`, `Radical metilo`, `Anillo aromático`], `Br₂ forma un ion bromonio cíclico.`],
  [`En la hidratación de R−CH=CH₂, el OH queda en:`, [`El carbono interno`, `El carbono terminal`, `Ningún carbono`, `El oxígeno`], `R−CH(OH)−CH₃: OH en el C interno.`],
  [`¿Qué catalizador se usa en la hidratación de alquenos?`, [`Ácido (H⁺/H₂SO₄) con calor`, `Luz UV`, `Níquel sin agua`, `NaOH`], `Hidratación con catálisis ácida.`],
  [`Los alquenos en agua son:`, [`Insolubles`, `Muy solubles`, `Electrolitos fuertes`, `Ácidos fuertes`], `Polaridad parecida a alcanos: insolubles.`],
  [`El producto de propeno + Br₂ es un:`, [`Dibromuro vecinal (1,2-dibromopropano)`, `Alcohol`, `Alcano`, `Bromuro de hidrógeno`], `Dos Br en carbonos vecinos.`],
]);
addChecks(`Polimerización`, [
  [`Las moléculas pequeñas que se unen para formar un polímero se llaman:`, [`Monómeros`, `Confórmeros`, `Isómeros`, `Radicales alquilo`], `Monómeros → polímero.`],
  [`En la polimerización, el doble enlace del monómero:`, [`Se abre y forma enlaces sencillos C−C en cadena`, `Se vuelve triple`, `No cambia`, `Se convierte en anillo aromático`], `Se abre el C=C para formar la cadena.`],
  [`El polietileno se obtiene a partir de:`, [`Eteno`, `Estireno`, `Cloruro de vinilo`, `Propano`], `PE: monómero eteno.`],
  [`El poliestireno (PS) se obtiene del:`, [`Estireno (CH₂=CH−C₆H₅)`, `Eteno`, `Cloruro de vinilo`, `Butano`], `PS: estireno.`],
  [`¿Qué polímero se usa en bolsas, envases y tuberías, y es reciclable?`, [`Polietileno`, `Poliestireno`, `Teflón`, `Nylon`], `PE: bolsas, envases, tuberías.`],
  [`¿Qué polímero forma la espuma blanca de la foto de la pág. 12?`, [`Poliestireno`, `PVC`, `Polietileno`, `Caucho`], `Espuma blanca: poliestireno.`],
  [`¿Dónde se ven estos polímeros en el laboratorio clínico?`, [`Tubos, puntas de pipeta y recipientes de plástico`, `En los reactivos de glucosa`, `En las tinciones`, `En el agua destilada`], `Material plástico de uso diario.`],
]);
addChecks(`Hidrogenación de aceites`, [
  [`La hidrogenación es la adición de ___ al doble enlace C=C:`, [`H₂`, `H₂O`, `Br₂`, `O₂`], `Adición catalítica de H₂.`],
  [`Los aceites vegetales líquidos contienen ácidos grasos:`, [`Insaturados`, `Saturados únicamente`, `Aromáticos`, `Sin carbono`], `Tienen dobles enlaces.`],
  [`Al hidrogenar un aceite, su punto de fusión:`, [`Aumenta`, `Disminuye`, `No cambia`, `Desaparece`], `Se vuelve grasa sólida o semisólida.`],
  [`El ácido oleico es:`, [`18:1, cis`, `18:0, saturado`, `18:1, trans`, `16:0`], `Oleico: 18 C, un doble enlace cis.`],
  [`El ácido esteárico es:`, [`18:0, saturado`, `18:1, cis`, `18:1, trans`, `18:2`], `Esteárico: totalmente saturado.`],
  [`Las grasas trans se forman en:`, [`La hidrogenación parcial`, `La hidrogenación completa`, `La combustión`, `La polimerización`], `Hidrogenación parcial → puede formarse elaídico (trans).`],
  [`¿Qué tipo de catalizador requiere la hidrogenación?`, [`Metálico heterogéneo (Pd, Pt o Ni)`, `Enzimático`, `Ácido fuerte`, `Luz UV`], `Pd, Pt o Ni.`],
]);
addChecks(`Reactividad de los alquenos`, [
  [`En el doble enlace, el enlace más débil y accesible es:`, [`El π`, `El σ`, `El C−H`, `Ninguno`], `σ fuerte, π débil y accesible.`],
  [`El enlace π actúa como:`, [`Nucleófilo (fuente rica en electrones)`, `Electrófilo`, `Ácido de Lewis`, `Catión`], `Nube de electrones expuesta: nucleófilo.`],
  [`Los alquenos atraen reactivos que:`, [`Buscan electrones`, `Ceden electrones`, `Son apolares sin carga`, `Son gases nobles`], `Atrae electrófilos.`],
  [`La hidratación de alquenos produce:`, [`Alcoholes por catálisis ácida`, `Alcanos`, `Éteres`, `Ésteres`], `H₂O/H⁺ → alcohol.`],
  [`La oxidación u ozonólisis de alquenos puede formar:`, [`Dioles, aldehídos o cetonas`, `Alcanos`, `Alquinos`, `Sales`], `Rompen o funcionalizan el doble enlace.`],
  [`¿Cuál de estas NO es una reacción de los alquenos mencionada?`, [`Sustitución radicalaria de alcanos`, `Halogenación`, `Hidratación`, `Polimerización`], `La sustitución radicalaria es típica de alcanos.`],
]);

/* ---------------- Tema 25 · Alquinos ---------------- */
addChecks(`Generalidades de los alquinos`, [
  [`Los alquinos se clasifican como hidrocarburos:`, [`Alifáticos insaturados`, `Saturados`, `Aromáticos`, `Oxigenados`], `Al menos un triple enlace C≡C.`],
  [`La geometría alrededor del triple enlace es:`, [`Lineal (180°)`, `Trigonal plana`, `Tetraédrica`, `Angular`], `sp → lineal.`],
  [`Un alquino de 5 carbonos con un triple enlace tiene fórmula:`, [`C₅H₈`, `C₅H₁₀`, `C₅H₁₂`, `C₅H₆`], `CₙH₂ₙ₋₂: C₅H₈.`],
  [`¿Cuántos enlaces π hay en un triple enlace?`, [`2`, `1`, `3`, `0`], `1 σ + 2 π.`],
  [`El nombre de la molécula numerada de la pág. 2 es:`, [`3,5-dimetilnona-1,8-diino`, `3,5-dimetilnon-1-ino`, `4,6-dimetilnona-1,8-diino`, `Dimetilnonano`], `Dos triples (1 y 8) y metilos en 3 y 5.`],
  [`Los dos enlaces π del triple enlace están:`, [`Perpendiculares entre sí`, `En el mismo plano`, `Paralelos al σ`, `Separados por un carbono`], `π perpendiculares.`],
]);
addChecks(`Conformación estructural de los alquinos`, [
  [`En un alquino, los dos carbonos del triple enlace y los átomos unidos directamente quedan:`, [`En línea recta`, `En ángulo de 120°`, `En forma tetraédrica`, `En un anillo`], `Geometría lineal.`],
  [`Según el material, el cilindro de densidad electrónica:`, [`No vuelve más reactivo al alquino`, `Lo hace explotar`, `Lo vuelve aromático`, `Rompe el enlace σ`], `El material indica que no lo vuelve más reactivo.`],
  [`¿Qué partes de la cadena de un alquino sí giran?`, [`Los enlaces sencillos del resto de la cadena`, `El triple enlace`, `Ninguna parte`, `Solo los hidrógenos del triple`], `El triple no gira; los sencillos sí.`],
  [`Cada carbono del triple enlace tiene, además del otro carbono:`, [`Solo un grupo`, `Dos grupos`, `Tres grupos`, `Ningún grupo`], `Por eso no hay cis/trans.`],
  [`Según el material, por la falta de rotación del triple enlace los alquinos:`, [`No forman confórmeros`, `Forman muchos confórmeros`, `Tienen isómeros cis/trans`, `Son aromáticos`], `El triple enlace no gira.`],
  [`El ángulo de enlace en el triple enlace es:`, [`180°`, `120°`, `109.5°`, `90°`], `Lineal: 180°.`],
]);
addChecks(`Nomenclatura IUPAC de alquinos`, [
  [`El sufijo de los alquinos es:`, [`-ino`, `-eno`, `-ano`, `-ilo`], `Alquinos: -ino.`],
  [`La posición del triple enlace se indica con:`, [`El número del primer carbono del triple enlace`, `El último carbono`, `El número del metilo`, `No se indica`], `Número antes de -ino.`],
  [`En el 4-metilpent-2-ino, ¿en qué carbono está el metilo?`, [`C4`, `C2`, `C3`, `C1`], `Numerando desde la derecha: triple en C2, metilo en C4.`],
  [`La fórmula del 4-metilpent-2-ino es:`, [`C₆H₁₀`, `C₆H₁₂`, `C₅H₈`, `C₆H₁₄`], `6 C; alquino: C₆H₁₀.`],
  [`Si se numerara el 4-metilpent-2-ino desde la izquierda, el triple quedaría en:`, [`C3`, `C2`, `C1`, `C4`], `Por eso se numera desde la derecha.`],
  [`La cadena principal de un alquino es:`, [`La continua más larga que contenga el triple enlace`, `La más ramificada`, `La que tenga más hidrógenos`, `Cualquier cadena`], `Debe contener el triple enlace.`],
]);
addChecks(`Casos especiales: diinos y alqueninos`, [
  [`Un compuesto con tres triples enlaces lleva la terminación:`, [`-atriino`, `-adiino`, `-trieno`, `-ino`], `-adiino, -atriino…`],
  [`En un alquenino, ¿qué sufijo va primero?`, [`-eno, antes que -ino`, `-ino, antes que -eno`, `Ninguno`, `-ano`], `-eno antes que -ino.`],
  [`En un alquenino se numera desde el extremo más cercano a:`, [`Cualquiera de las dos insaturaciones`, `Solo el triple enlace`, `Solo el doble enlace`, `Las ramas`], `La insaturación más cercana manda; empate → doble enlace.`],
  [`El penta-1,4-diino tiene sus triples enlaces en:`, [`C1 y C4`, `C1 y C3`, `C2 y C4`, `C1 y C5`], `Localizadores 1 y 4.`],
  [`En el pent-1-en-4-ino, el doble enlace está en:`, [`C1`, `C4`, `C2`, `C3`], `Doble en C1, triple en C4.`],
  [`En «penta-1,4-diino», la «a» después de «pent» se agrega porque:`, [`Hay varios triples enlaces (polialquino)`, `Es un alcano`, `Tiene un anillo`, `Es un error`], `Diino: «a» + di + ino.`],
]);
addChecks(`Clasificación de los alquinos`, [
  [`Un alquino interno tiene la estructura:`, [`R−C≡C−R'`, `R−C≡C−H`, `H−C≡C−H`, `R−C=C−R`], `Internos: disustituidos.`],
  [`Los alquinos terminales también se llaman:`, [`Monosustituidos`, `Disustituidos`, `Trisustituidos`, `Aromáticos`], `Terminal = monosustituido.`],
  [`El propino es un alquino:`, [`Terminal`, `Interno`, `Diino`, `Aromático`], `CH₃−C≡C−H: terminal.`],
  [`El 3-hexino es un alquino:`, [`Interno`, `Terminal`, `Diino`, `Cíclico`], `Triple en el interior.`],
  [`Los polialquinos como el octa-1,3,5,7-tetraiino se encuentran como:`, [`Toxinas en plantas y hongos`, `Componentes de la gasolina`, `Vitaminas`, `Plásticos`], `Polialquinos: toxinas naturales.`],
  [`El hexa-1,5-diino es un ejemplo de:`, [`Dialquino (diino)`, `Monoalquino`, `Polialquino`, `Alqueno`], `Dos triples enlaces.`],
  [`¿Qué tipo de alquino tiene acidez?`, [`El terminal, por su H en el extremo`, `El interno`, `Ninguno`, `Ambos igual`], `El H unido al C del triple puede salir como protón.`],
]);
addChecks(`Serie de los alquinos`, [
  [`La fórmula del propino es:`, [`C₃H₄`, `C₃H₆`, `C₃H₈`, `C₃H₂`], `CₙH₂ₙ₋₂ con n = 3.`],
  [`La fórmula del butino es:`, [`C₄H₆`, `C₄H₈`, `C₄H₁₀`, `C₄H₄`], `n = 4: C₄H₆.`],
  [`La fórmula del heptino es:`, [`C₇H₁₂`, `C₇H₁₄`, `C₇H₁₆`, `C₇H₁₀`], `n = 7: C₇H₁₂.`],
  [`La semidesarrollada correcta del propino es:`, [`HC≡C−CH₃`, `HC≡C−CH₂`, `H₂C=C=CH₂`, `HC≡CH`], `La tabla tiene una errata: es HC≡C−CH₃.`],
  [`Al agregar un CH₂ a la serie, la fórmula suma:`, [`C₁H₂`, `C₁H₄`, `C₂H₂`, `H₂`], `C₂H₂ → C₃H₄ → C₄H₆…`],
  [`La fórmula del pentino es:`, [`C₅H₈`, `C₅H₁₀`, `C₅H₆`, `C₅H₁₂`], `n = 5: C₅H₈.`],
]);
addChecks(`Propiedades físicas de los alquinos`, [
  [`Los alquinos de 5 a 15 carbonos son a temperatura ambiente:`, [`Líquidos`, `Gases`, `Sólidos`, `Plasmas`], `Gas 2–4 · líquido 5–15 · sólido 16+.`],
  [`Los alquinos de 16 carbonos o más son:`, [`Sólidos`, `Líquidos`, `Gases`, `No existen`], `Sólidos desde 16 C.`],
  [`Comparados con el agua, los alquinos son:`, [`Menos densos`, `Más densos`, `Igual de densos`, `Solubles`], `Menos densos que el agua.`],
  [`¿Cómo cambia el punto de ebullición de los alquinos con las ramificaciones?`, [`Disminuye`, `Aumenta`, `No cambia`, `Se duplica`], `Más ramas = hierve más bajo.`],
  [`El etino (acetileno) a temperatura ambiente es:`, [`Gas`, `Líquido`, `Sólido`, `Cristal`], `C2–C4: gases.`],
  [`El olor de los alquinos según el material es:`, [`Inodoros`, `Muy fuerte`, `Dulce`, `A almendras`], `Menos densos que el agua e inodoros.`],
]);
addChecks(`Reacciones de los alquinos`, [
  [`Al tratar propino con NaH, además del acetiluro se libera:`, [`H₂`, `CH₄`, `H₂O`, `CO₂`], `CH₃−C≡C−H + NaH → CH₃−C≡C:⁻ Na⁺ + H₂.`],
  [`Si se usa CH₃Li en lugar de NaH, se libera:`, [`CH₄`, `H₂`, `LiOH`, `C₂H₆`], `Con CH₃Li sale CH₄.`],
  [`La hidratación de un alquino forma primero un:`, [`Enol, que se reordena a cetona`, `Alcano`, `Éter`, `Aldehído directamente siempre`], `Enol → cetona.`],
  [`La hidroboración-oxidación de un alquino terminal forma:`, [`Un aldehído (propanal en el ejemplo)`, `Una cetona`, `Un alcano`, `Un ácido carboxílico`], `Según la figura de la pág. 9: aldehído.`],
  [`¿Por qué la hidrogenación completa de un alquino necesita 2 H₂?`, [`Porque hay dos enlaces π que abrir`, `Porque tiene dos carbonos`, `Porque es aromático`, `Porque es terminal`], `Dos π → 2 H₂.`],
  [`La hidrogenación completa de un alquino produce:`, [`Un alcano`, `Un alqueno`, `Un alcohol`, `Una cetona`], `R−C≡C−R' + 2 H₂ → R−CH₂−CH₂−R'.`],
  [`¿Por qué los alquinos internos no tienen acidez?`, [`No tienen H unido al carbono del triple enlace`, `Porque son lineales`, `Porque tienen dos π`, `Porque son gases`], `Los internos no tienen ese H.`],
]);
addChecks(`Isomería estructural de los alquinos`, [
  [`En la isomería de posición, lo que cambia es:`, [`La ubicación del triple enlace`, `La familia química`, `La forma de la cadena`, `El número de carbonos`], `Posición = se mueve el triple.`],
  [`En la isomería de función, los isómeros:`, [`Pertenecen a familias químicas distintas`, `Tienen distinta fórmula`, `Solo cambian la posición`, `Son el mismo compuesto`], `Función = cambia de familia.`],
  [`El 3-metilbut-1-ino tiene fórmula:`, [`C₅H₈`, `C₄H₆`, `C₅H₁₀`, `C₆H₁₀`], `Es isómero de cadena del pent-1-ino.`],
  [`Los isómeros estructurales de los alquinos comparten:`, [`La misma fórmula molecular`, `La misma estructura`, `El mismo nombre`, `El mismo punto de ebullición`], `Misma fórmula, distinta conexión.`],
  [`En la isomería de cadena, lo que cambia es:`, [`La forma del esqueleto por ramificaciones`, `La familia química`, `La posición del triple enlace únicamente`, `El número de hidrógenos`], `Cadena = se ramifica.`],
  [`El but-2-ino es un alquino:`, [`Interno`, `Terminal`, `Ramificado`, `Cíclico`], `Triple entre C2 y C3.`],
]);
addChecks(`Trucos visuales para recordar -ano, -eno, -ino`, [
  [`Según el truco, una raya (−) corresponde a:`, [`-ano`, `-eno`, `-ino`, `-ol`], `Una raya: enlace sencillo, -ano.`],
  [`Según el truco, dos rayas (=) corresponden a:`, [`-eno`, `-ano`, `-ino`, `-ona`], `Dos rayas: doble enlace, -eno.`],
  [`La cerca de dos tablas representa:`, [`Un alqueno`, `Un alcano`, `Un alquino`, `Un aromático`], `Dos tablas = doble enlace.`],
  [`El orden de las vocales a, e, i corresponde a:`, [`1, 2 y 3 enlaces`, `3, 2 y 1 enlaces`, `Número de carbonos`, `Número de hidrógenos`], `a-e-i = 1-2-3 rayas.`],
  [`La cerca de tres tablas representa:`, [`Un alquino`, `Un alqueno`, `Un alcano`, `Un cicloalcano`], `Tres tablas = triple enlace.`],
]);

/* ---------------- Tema 26 · Hidrocarburos aromáticos ---------------- */
addChecks(`¿Qué es un hidrocarburo aromático?`, [
  [`El representante más simple e importante de los aromáticos es:`, [`El benceno (C₆H₆)`, `El ciclohexano`, `El etino`, `El metano`], `Benceno: C₆H₆.`],
  [`En química, «aromático» significa:`, [`Un tipo de estabilidad, no que huela`, `Que tiene buen olor`, `Que es volátil`, `Que es un perfume`], `El nombre es histórico.`],
  [`Los hidrocarburos aromáticos son compuestos:`, [`Cíclicos e insaturados`, `De cadena abierta saturados`, `Inorgánicos`, `Sin carbono`], `Cíclicos, insaturados y muy estables.`],
  [`La deslocalización de electrones π ocurre a lo largo de:`, [`Orbitales p paralelos que forman un anillo cerrado`, `Orbitales s`, `Enlaces σ solamente`, `Átomos de hidrógeno`], `Orbitales p paralelos en anillo.`],
  [`La aromaticidad da una estabilidad:`, [`Termodinámica y química inusualmente alta`, `Muy baja`, `Igual a la de los alcanos`, `Solo física`], `Estabilidad inusualmente alta.`],
]);
addChecks(`Requisitos de la aromaticidad y regla de Hückel`, [
  [`Que una molécula sea «plana» significa que:`, [`Todos los átomos del ciclo están en el mismo plano`, `No tiene hidrógenos`, `Es lineal`, `Tiene un solo enlace`], `Plana: todos en el mismo plano.`],
  [`¿Cuántos electrones π aporta cada doble enlace del anillo?`, [`2`, `1`, `3`, `4`], `Cada doble enlace aporta 2 e⁻ π.`],
  [`¿Cuál de estos números de electrones π cumple la regla de Hückel?`, [`10`, `8`, `4`, `12`], `4n + 2 con n = 2 → 10.`],
  [`Con n = 0, la regla de Hückel da:`, [`2 electrones π`, `0 electrones π`, `4 electrones π`, `6 electrones π`], `4(0) + 2 = 2.`],
  [`Un anillo plano y conjugado con 14 electrones π:`, [`Cumple Hückel (n = 3)`, `No cumple Hückel`, `Es antiaromático siempre`, `No es cíclico`], `4n + 2 = 14 → n = 3.`],
  [`En un anillo completamente conjugado, cada átomo tiene un orbital p puro y uno hibridado:`, [`sp² o sp`, `sp³`, `Solo s`, `d`], `Para que la nube π fluya sin interrupción.`],
  [`¿Cuántas condiciones debe cumplir una molécula para ser aromática?`, [`Cuatro`, `Dos`, `Tres`, `Cinco`], `Cíclica, plana, conjugada y Hückel.`],
]);
addChecks(`Enlace y geometría del anillo aromático`, [
  [`En el benceno, los enlaces del anillo son:`, [`Todos iguales e intermedios entre sencillo y doble`, `Sencillos y dobles alternados verdaderos`, `Todos triples`, `Todos sencillos de 1.54 Å`], `Todos miden 1.39 Å.`],
  [`La longitud de un enlace C−C sencillo es:`, [`1.54 Å`, `1.34 Å`, `1.20 Å`, `1.39 Å`], `Sencillo 1.54 · doble 1.34 · triple 1.20.`],
  [`La longitud de un enlace C=C doble es:`, [`1.34 Å`, `1.54 Å`, `1.20 Å`, `1.39 Å`], `Doble: 1.34 Å.`],
  [`La longitud de un enlace C≡C triple es:`, [`1.20 Å`, `1.34 Å`, `1.39 Å`, `1.54 Å`], `Triple: 1.20 Å.`],
  [`Las dos «donas» de electrones π del benceno están:`, [`Una por encima y otra por debajo del plano`, `Ambas en el plano`, `Dentro del anillo`, `Fuera de la molécula`], `Nube continua arriba y abajo.`],
  [`«1.39 AA» en la pág. 4 se refiere a:`, [`1.39 angstroms (Å)`, `1.39 átomos`, `1.39 ácidos`, `1.39 nanómetros`], `Es 1.39 Å.`],
]);
addChecks(`Diferencias con los hidrocarburos alifáticos`, [
  [`En los alifáticos, los electrones π están:`, [`Localizados entre dos átomos, o ausentes`, `Deslocalizados sobre todo el anillo`, `En una nube continua`, `En dos donas`], `Alifáticos: π localizados.`],
  [`La alta estabilidad de los aromáticos se debe a su alta energía de:`, [`Resonancia`, `Combustión`, `Ionización`, `Fusión`], `Elevada energía de resonancia.`],
  [`En la SEA, el anillo aromático:`, [`Queda intacto`, `Se rompe`, `Se convierte en alcano`, `Pierde todos los H`], `Sustitución: el anillo se conserva.`],
  [`Los alifáticos al arder producen una llama:`, [`Generalmente más limpia`, `Muy fuliginosa`, `Verde`, `Sin calor`], `Aromáticos: humo negro; alifáticos: más limpia.`],
  [`¿Por qué los aromáticos arden con humo negro?`, [`Por su alta proporción de carbono`, `Por tener oxígeno`, `Por ser gases`, `Por tener nitrógeno`], `Alta proporción de C.`],
  [`En RMN-¹H, los alifáticos dan señales entre:`, [`0.8 y 6.0 ppm`, `7.0 y 8.5 ppm`, `10 y 12 ppm`, `0 y 0.5 ppm`], `Aromáticos: 7.0–8.5 ppm.`],
  [`¿Cumplen los alifáticos la regla de Hückel?`, [`No`, `Sí, siempre`, `Solo los alcanos`, `Solo los alquinos`], `Solo los aromáticos la cumplen.`],
]);
addChecks(`Propiedades físicas de los aromáticos`, [
  [`A temperatura ambiente, el benceno y el tolueno son:`, [`Líquidos incoloros`, `Sólidos cristalinos`, `Gases`, `Líquidos de color rojo`], `Benceno y tolueno: líquidos incoloros.`],
  [`El antraceno a temperatura ambiente es:`, [`Sólido cristalino`, `Líquido`, `Gas`, `Plasma`], `Los más pesados son sólidos.`],
  [`El olor de los aromáticos es:`, [`Intenso`, `Inexistente`, `Muy suave`, `A vinagre`], `Olor intenso.`],
  [`El punto de ebullición de los aromáticos aumenta con:`, [`La masa molecular`, `La cantidad de agua`, `Las ramificaciones`, `La presión baja`], `Más masa = hierve más alto.`],
  [`Los aromáticos tienen inflamabilidad:`, [`Alta, con llama amarilla hollinosa`, `Nula`, `Baja, con llama azul`, `Solo en agua`], `Alta, llama amarilla con hollín.`],
  [`En el agua, los aromáticos son:`, [`Insolubles o poco solubles`, `Muy solubles`, `Electrolitos fuertes`, `Ácidos`], `Insolubles o poco solubles.`],
  [`El punto de fusión de los aromáticos es:`, [`Elevado`, `Muy bajo`, `Igual a 0 °C`, `Negativo siempre`], `Punto de fusión elevado.`],
]);
addChecks(`Sustitución electrófila aromática (SEA)`, [
  [`¿Por qué el benceno prefiere la sustitución a la adición?`, [`Para no alterar su sistema conjugado estable`, `Porque no tiene hidrógenos`, `Porque es saturado`, `Porque no reacciona con nada`], `La sustitución conserva la aromaticidad.`],
  [`En la SEA, ¿qué sale del anillo?`, [`Un H⁺`, `Un carbono`, `Un electrón`, `Un OH⁻`], `Entra E⁺, sale H⁺.`],
  [`¿Qué grupo entra en la sulfonación?`, [`−SO₃H`, `−NO₂`, `−Cl`, `−COR`], `Sulfonación: −SO₃H.`],
  [`¿Qué catalizador usa la alquilación de Friedel-Crafts?`, [`AlCl₃`, `FeBr₃`, `H₂SO₄`, `Ni`], `Friedel-Crafts: AlCl₃.`],
  [`En el ejemplo de alquilación, el producto es:`, [`Isopropilbenceno (cumeno)`, `Acetofenona`, `Nitrobenceno`, `Tolueno`], `Cumeno = isopropilbenceno.`],
  [`El FeCl₃ en la halogenación actúa como:`, [`Ácido de Lewis`, `Base de Lewis`, `Reductor`, `Solvente`], `Catalizador ácido de Lewis.`],
  [`El producto de la halogenación con Cl₂ es:`, [`Clorobenceno`, `Hexaclorociclohexano`, `Cloruro de vinilo`, `Clorometano`], `SEA: clorobenceno.`],
  [`Un electrófilo es un reactivo:`, [`Deficiente en electrones`, `Rico en electrones`, `Sin carga ni afinidad`, `Que dona pares de electrones`], `E⁺ busca electrones.`],
]);
addChecks(`Reacciones de adición y de oxidación`, [
  [`Las reacciones de adición en el benceno ocurren solo en condiciones:`, [`Forzadas`, `Ambientales`, `De congelación`, `Sin ningún reactivo`], `Rompen temporal o permanentemente la aromaticidad.`],
  [`¿Cuántas moléculas de H₂ se necesitan para convertir benceno en ciclohexano?`, [`3`, `1`, `2`, `6`], `Benceno + 3 H₂ → ciclohexano.`],
  [`Frente a oxidantes comunes como KMnO₄, el anillo bencénico:`, [`Es muy resistente`, `Se destruye rápido`, `Se vuelve ácido benzoico siempre`, `Explota`], `El anillo resiste los oxidantes comunes.`],
  [`Un hidrógeno bencílico es el que está:`, [`En el carbono unido al anillo`, `En el anillo`, `En el extremo de la cadena`, `En un grupo OH`], `H bencílico: en el C unido al anillo.`],
  [`Al oxidar la cadena lateral de un alquilbenceno con H bencílico, toda la cadena se convierte en:`, [`−COOH (ácido benzoico)`, `−OH`, `−CHO siempre`, `−CH₃`], `Se degrada a −COOH.`],
  [`¿Qué catalizadores se usan en la hidrogenación del benceno?`, [`Níquel o platino`, `FeCl₃`, `AlCl₃`, `H₂SO₄`], `Ni o Pt, alta presión y temperatura.`],
]);
addChecks(`Composición química de los aromáticos`, [
  [`Los aromáticos heterocíclicos, además de C y H, contienen:`, [`N, O o S`, `Solo metales`, `Solo flúor`, `Gases nobles`], `Piridina (N), furano (O).`],
  [`Los ángulos del anillo bencénico son de:`, [`120°`, `109.5°`, `180°`, `90°`], `sp² → plano, 120°.`],
  [`¿Cuántos enlaces σ forma cada carbono del anillo bencénico?`, [`3`, `4`, `2`, `1`], `Dos con C vecinos y uno con H o sustituyente.`],
  [`El orbital p no hibridado de cada carbono está:`, [`Perpendicular al plano del anillo`, `En el plano del anillo`, `Ausente`, `Unido al H`], `Forma la nube π arriba y abajo.`],
  [`El furano es un aromático:`, [`Heterocíclico con oxígeno`, `Policíclico`, `Monocíclico sin heteroátomos`, `Alifático`], `Furano: anillo con O.`],
  [`¿De qué compuesto se derivan la mayoría de los aromáticos?`, [`Del benceno`, `Del metano`, `Del etileno`, `Del agua`], `El benceno es la base.`],
]);
addChecks(`Tipos de estructuras aromáticas`, [
  [`Los aromáticos policíclicos (HAP) tienen:`, [`Varios anillos bencénicos fusionados que comparten carbonos`, `Un solo anillo`, `Heteroátomos en el anillo`, `Cadenas abiertas`], `HAP: anillos fusionados.`],
  [`La fórmula del antraceno es:`, [`C₁₄H₁₀`, `C₁₀H₈`, `C₆H₆`, `C₇H₈`], `Antraceno: C₁₄H₁₀.`],
  [`El xileno es:`, [`Dimetilbenceno`, `Metilbenceno`, `Hidroxibenceno`, `Aminobenceno`], `Xileno: dimetilbenceno.`],
  [`La fórmula de la piridina es:`, [`C₅H₅N`, `C₄H₄O`, `C₆H₆`, `C₁₀H₈`], `Piridina: C₅H₅N.`],
  [`El tolueno es un aromático:`, [`Monocíclico`, `Policíclico`, `Heterocíclico`, `Alifático`], `Un solo anillo de 6 C.`],
  [`El benzo[a]pireno es un aromático:`, [`Policíclico (HAP)`, `Monocíclico`, `Heterocíclico`, `Alifático`], `HAP del humo del tabaco.`],
]);
addChecks(`Nomenclatura: bases y conceptos`, [
  [`El grupo C₆H₅− unido directamente a una cadena se llama:`, [`Fenilo`, `Bencilo`, `Tolilo`, `Vinilo`], `Fenilo = C₆H₅− directo.`],
  [`¿Cuántas formas de representar el anillo bencénico menciona el material?`, [`Tres: desarrollada, Kekulé y con círculo`, `Una`, `Dos`, `Cinco`], `Desarrollada, Kekulé y círculo.`],
  [`¿Cuántos sustituyentes puede tener el anillo bencénico?`, [`De 1 a 6`, `Solo 1`, `Hasta 3`, `Hasta 12`], `Uno por cada carbono.`],
  [`Los derivados del benceno llevan el sufijo:`, [`«benceno» (por ejemplo, nitrobenceno)`, `-ano`, `-ol`, `-ilo`], `Nitrobenceno, clorobenceno…`],
  [`Si la cadena sustituyente es larga, el benceno pasa a ser:`, [`La rama`, `La cadena principal`, `Un heteroátomo`, `Un catalizador`], `Se nombra como fenilo.`],
  [`La diferencia entre fenilo y bencilo es:`, [`El bencilo tiene un CH₂ entre el anillo y la cadena`, `El fenilo tiene un CH₂ extra`, `Son lo mismo`, `El bencilo no tiene anillo`], `Bencilo = C₆H₅−CH₂−.`],
]);
addChecks(`Sustituyentes y prefijos orto, meta, para`, [
  [`El prefijo «para» indica posiciones:`, [`1,4`, `1,2`, `1,3`, `1,5`], `para = 1,4 (enfrente).`],
  [`El prefijo «orto» indica posiciones:`, [`1,2`, `1,3`, `1,4`, `1,6`], `orto = 1,2 (vecinos).`],
  [`El grupo −NO₂ se llama:`, [`Nitro`, `Amino`, `Nitrilo`, `Hidroxilo`], `−NO₂ = nitro.`],
  [`El grupo −CN se llama:`, [`Nitrilo`, `Nitro`, `Carboxilo`, `Tiol`], `−CN = nitrilo.`],
  [`El grupo −CHO se llama:`, [`Formilo`, `Acilo`, `Carboxilo`, `Hidroxilo`], `−CHO = formilo.`],
  [`El grupo −SH se llama:`, [`Tiol`, `Sulfónico`, `Hidroxilo`, `Amino`], `−SH = tiol.`],
  [`El p-diclorobenceno es el:`, [`1,4-diclorobenceno`, `1,2-diclorobenceno`, `1,3-diclorobenceno`, `1,1-diclorobenceno`], `p = 1,4.`],
  [`Con un solo sustituyente, el nombre se forma como:`, [`Nombre del grupo + benceno`, `Número + grupo + benceno`, `orto + grupo`, `fenil + grupo`], `Ej.: clorobenceno, etilbenceno.`],
]);
addChecks(`Monosustituidos y nombres comunes`, [
  [`El nombre común del hidroxibenceno es:`, [`Fenol`, `Anilina`, `Tolueno`, `Anisol`], `−OH: fenol.`],
  [`El benceno con un grupo −COOH se llama:`, [`Ácido benzoico`, `Ácido bencenosulfónico`, `Fenol`, `Acetofenona`], `−COOH: ácido benzoico.`],
  [`La acetofenona tiene el grupo:`, [`−CO−CH₃`, `−O−CH₃`, `−CH=CH₂`, `−NH₂`], `Acetofenona = fenil metil cetona.`],
  [`El nombre sistemático del anisol es:`, [`Metoxibenceno`, `Metilbenceno`, `Hidroxibenceno`, `Vinilbenceno`], `Anisol: −O−CH₃.`],
  [`En la imagen de la pág. 13, el grupo del tolueno debe ser:`, [`CH₃`, `CH₂`, `OH`, `NH₂`], `Errata: tolueno lleva CH₃.`],
  [`El grupo completo del ácido bencenosulfónico es:`, [`−SO₃H`, `−SO₃`, `−SH`, `−SO₂`], `Errata: el grupo es −SO₃H.`],
  [`El nombre sistemático de la anilina es:`, [`Aminobenceno`, `Nitrobenceno`, `Hidroxibenceno`, `Metilbenceno`], `Anilina: −NH₂.`],
]);
addChecks(`Disustituidos`, [
  [`Con dos sustituyentes distintos, el número 1 lo recibe:`, [`El que va primero en orden alfabético`, `El más grande`, `El de la derecha`, `El nitro siempre`], `Bromo antes que nitro; etil antes que metil.`],
  [`El o-etilmetilbenceno en nomenclatura IUPAC es:`, [`1-etil-2-metilbenceno`, `1-metil-2-etilbenceno`, `1-etil-3-metilbenceno`, `1-etil-4-metilbenceno`], `orto = 1,2; etil primero.`],
  [`El 1-etil-3-metilbenceno con prefijos es:`, [`m-etilmetilbenceno`, `o-etilmetilbenceno`, `p-etilmetilbenceno`, `etilmetilbenceno`], `1,3 = meta.`],
  [`El 1-etil-4-isopropilbenceno con prefijos es:`, [`p-etilisopropilbenceno`, `o-etilisopropilbenceno`, `m-etilisopropilbenceno`, `isopropiletilbenceno`], `1,4 = para.`],
  [`Para nombrar un disustituido se indican las posiciones, los sustituyentes en orden ___ y «benceno»:`, [`Alfabético`, `De tamaño`, `De número de carbonos`, `Aleatorio`], `Orden alfabético.`],
  [`El p-xileno también se llama:`, [`1,4-dimetilbenceno`, `1,2-dimetilbenceno`, `1,3-dimetilbenceno`, `Tolueno`], `p-xileno = 1,4-dimetilbenceno.`],
]);
addChecks(`Trisustituidos`, [
  [`En los trisustituidos se pueden usar orto, meta y para:`, [`No`, `Sí, siempre`, `Solo con halógenos`, `Solo con metilos`], `No se usan con 3 o más sustituyentes.`],
  [`Según el material, cuando la regla del grupo con más carbonos y la de números más bajos chocan, gana:`, [`La de números más bajos (regla IUPAC)`, `La del grupo más grande`, `El orden alfabético siempre`, `La que dé números más altos`], `En los ejemplos ganan los números más bajos.`],
  [`En el 4-cloro-2-etil-1-metilbenceno, el C1 lo tiene:`, [`El metilo`, `El etilo`, `El cloro`, `Ningún sustituyente`], `Así los localizadores quedan {1,2,4}.`],
  [`El anillo de un trisustituido se puede numerar en sentido:`, [`Horario o antihorario`, `Solo horario`, `Solo antihorario`, `Ninguno`], `Se puede numerar en ambos sentidos.`],
  [`En el 1,3-dibromo-5-isopropilbenceno, el prefijo «di» indica:`, [`Dos bromos`, `Dos isopropilos`, `Dos anillos`, `Dos carbonos`], `Repetidos con di-, tri-…`],
  [`¿Cuántos sustituyentes tiene el 1,4-dietil-2-metilbenceno?`, [`3`, `2`, `4`, `5`], `Dos etilos y un metilo.`],
]);
addChecks(`Cadenas largas: el benceno como fenilo`, [
  [`Cuando el benceno tiene un radical alquilo largo, la cadena principal es:`, [`La cadena alifática`, `El benceno`, `El radical más corto`, `Ninguna`], `La cadena manda; el benceno es fenil.`],
  [`Para nombrar el compuesto, la cadena se numera desde el extremo:`, [`Más cercano al fenilo`, `Más alejado del fenilo`, `Con más H`, `Izquierdo siempre`], `El fenilo debe tener el número más bajo.`],
  [`El nombre 3-fenilpentano indica:`, [`Un fenilo en el carbono 3 de una cadena de 5 C`, `Tres fenilos`, `Un pentilo en el carbono 3 del benceno`, `Un anillo de 5 C`], `Localizador + fenil + alcano.`],
  [`El nombre del compuesto se forma como:`, [`Localizador + fenil + nombre del alcano`, `Benceno + alcano`, `Fenil + benceno`, `Alcano + benceno`], `Ej.: 1-feniloctano.`],
  [`En el 2,4-dimetil-3-fenilpentano, la cadena principal tiene:`, [`5 carbonos`, `6 carbonos`, `7 carbonos`, `3 carbonos`], `pent- = 5.`],
]);
addChecks(`Aromáticos famosos`, [
  [`Comparado con la nitroglicerina, el TNT es:`, [`Más estable`, `Menos estable`, `Igual de estable`, `No es explosivo`], `TNT: explosivo más estable.`],
  [`En el TNT, los grupos nitro están en las posiciones:`, [`2, 4 y 6`, `1, 2 y 3`, `1, 3 y 5`, `3, 4 y 5`], `2,4,6-trinitrotolueno.`],
  [`El DDT se usó como:`, [`Plaguicida`, `Anestésico`, `Colorante`, `Combustible`], `DDT: plaguicida, veneno.`],
  [`La fórmula del DDT es:`, [`C₁₄H₉Cl₅`, `C₁₀H₈`, `C₇H₅N₃O₆`, `C₆H₆`], `Diclorodifeniltricloroetano: C₁₄H₉Cl₅.`],
  [`¿Qué aminoácido con anillo bencénico aparece en la lámina?`, [`Fenilalanina`, `Glicina`, `Alanina`, `Valina`], `La fenilalanina tiene anillo bencénico.`],
  [`La fórmula del naftaleno es:`, [`C₁₀H₈`, `C₁₄H₁₀`, `C₆H₆`, `C₇H₈`], `Naftaleno: C₁₀H₈.`],
]);
addChecks(`Interés biológico: aminoácidos aromáticos`, [
  [`La fenilalanina es un aminoácido:`, [`Esencial`, `No esencial siempre producido por el cuerpo`, `Alifático`, `Sin anillo`], `Aminoácido esencial.`],
  [`El anillo del triptófano se llama:`, [`Indol`, `Catecol`, `Piridina`, `Furano`], `Triptófano: anillo indol.`],
  [`El triptófano es precursor de la serotonina y de:`, [`La melatonina`, `La adrenalina`, `La tiroxina`, `El estradiol`], `Triptófano → serotonina → melatonina.`],
  [`¿Qué enfermedad aparece si falla el paso fenilalanina → tirosina?`, [`Fenilcetonuria`, `Diabetes`, `Hipotiroidismo`, `Anemia`], `La fenilalanina se acumula.`],
  [`¿Dónde se detecta la fenilcetonuria?`, [`En el tamizaje neonatal`, `En el hemograma de adultos`, `En el uroanálisis rutinario`, `En la glucosa capilar`], `Tamizaje neonatal.`],
  [`La tirosina es precursora de las hormonas tiroideas:`, [`T₃ y T₄`, `Insulina y glucagón`, `Cortisol y aldosterona`, `TSH y LH`], `Tirosina → T₃ y T₄.`],
]);
addChecks(`Interés biológico: hormonas y neurotransmisores`, [
  [`El grupo catecol es:`, [`Un benceno con dos OH (bencenodiol)`, `Un benceno con un NH₂`, `Un anillo indol`, `Un benceno con yodo`], `Catecol = bencenodiol.`],
  [`La ruta correcta de síntesis de catecolaminas es:`, [`L-tirosina → L-DOPA → dopamina → norepinefrina → epinefrina`, `Dopamina → L-DOPA → tirosina`, `Epinefrina → norepinefrina → dopamina`, `Triptófano → dopamina`], `De tirosina a epinefrina.`],
  [`Las hormonas tiroideas son esenciales para:`, [`El metabolismo basal`, `La coagulación`, `La visión nocturna`, `La digestión de grasas`], `T₃ y T₄: metabolismo basal.`],
  [`En los estrógenos, el anillo aromático es el anillo:`, [`A`, `B`, `C`, `D`], `Anillo A aromático, clave para el receptor.`],
  [`Los metabolitos de catecolaminas que se miden en orina o plasma son:`, [`Metanefrinas`, `Creatininas`, `Bilirrubinas`, `Uratos`], `Se miden catecolaminas o metanefrinas.`],
  [`El nombre de la T₄ es:`, [`Levotiroxina`, `Triyodotironina`, `Tirosina`, `Dopamina`], `T₃ = triyodotironina; T₄ = levotiroxina.`],
  [`¿Qué perfil del laboratorio mide T₃ y T₄?`, [`El perfil tiroideo`, `El perfil lipídico`, `El perfil hepático`, `El perfil renal`], `Perfil tiroideo.`],
]);
addChecks(`Fármacos, bases nitrogenadas y sustancias tóxicas`, [
  [`La lidocaína es un:`, [`Anestésico local`, `Antibiótico`, `Antineoplásico`, `Psicofármaco`], `Lidocaína: anestésico local.`],
  [`El diazepam es un:`, [`Psicofármaco`, `Antibiótico`, `Anestésico local`, `Analgésico`], `Diazepam: psicofármaco.`],
  [`El metotrexato es un:`, [`Antineoplásico`, `Analgésico`, `Antibiótico`, `Anestésico`], `Metotrexato: antineoplásico.`],
  [`¿Cuáles son las bases nitrogenadas púricas?`, [`Adenina y guanina`, `Citosina y timina`, `Uracilo y timina`, `Citosina y uracilo`], `Púricas: A y G.`],
  [`¿Cuál de estas es una base pirimídica?`, [`Citosina`, `Adenina`, `Guanina`, `Cafeína`], `Pirimídicas: C, T y U.`],
  [`La penicilina y las sulfas son ejemplos de:`, [`Antibióticos`, `Anestésicos`, `Antineoplásicos`, `Hormonas`], `Antibióticos aromáticos.`],
  [`El acetaminofén es un:`, [`Analgésico y antiinflamatorio`, `Antibiótico`, `Anestésico local`, `Antineoplásico`], `Acetaminofén: analgésico.`],
]);

/* ---------------- Tema 27 · Alcoholes y fenoles ---------------- */
addChecks(`Funciones oxigenadas: estructura y fórmula general`, [
  [`En las funciones oxigenadas, el oxígeno actúa como:`, [`Heteroátomo dentro de un grupo funcional`, `Catalizador`, `Solvente`, `Un sustituyente sin efecto`], `El O es el heteroátomo clave.`],
  [`En la fórmula R−OH de los alcoholes, R representa:`, [`Una cadena alifática`, `Un anillo aromático`, `Un halógeno`, `Un metal`], `R = alifática; Ar = aromática.`],
  [`En la fórmula Ar−OH, Ar representa:`, [`Un anillo aromático (como el fenilo)`, `Una cadena alifática`, `El argón`, `Un grupo ácido`], `Ar = arilo.`],
  [`La fórmula global del etanol es:`, [`C₂H₆O`, `C₂H₄O`, `C₂H₆O₂`, `CH₄O`], `CₙH₂ₙ₊₂O con n = 2 → C₂H₆O.`],
  [`La fórmula global del timol es:`, [`C₁₀H₁₄O`, `C₆H₆O`, `C₁₀H₈`, `C₇H₈O`], `CₙH₂ₙ₋₆O con n = 10 → C₁₀H₁₄O.`],
  [`Con la fórmula CₙH₂ₙ₊₂O, un alcohol de 3 carbonos es:`, [`C₃H₈O`, `C₃H₆O`, `C₃H₄O`, `C₃H₈O₂`], `2(3) + 2 = 8.`],
  [`En la fórmula de los fenoles CₙH₂ₙ₋₆O, el mínimo de n es:`, [`6`, `1`, `3`, `10`], `n ≥ 6: el anillo tiene 6 C.`],
  [`Según la fórmula CₙH₂ₙ₋₆O, el fenol simple (n = 6) es:`, [`C₆H₆O`, `C₆H₁₂O`, `C₆H₁₄O`, `C₆H₅O`], `2(6) − 6 = 6 → C₆H₆O.`],
]);
addChecks(`Clasificación de las funciones oxigenadas`, [
  [`Las funciones oxigenadas se clasifican por la cadena y por:`, [`El tipo de enlace del oxígeno (sencillo o doble)`, `El color`, `El olor`, `La masa del oxígeno`], `C−O frente a C=O.`],
  [`¿Qué funciones tienen solo enlace C−O sencillo?`, [`Alcohol, fenol y éter`, `Aldehído y cetona`, `Ácido y éster`, `Solo el éster`], `C−O: alcohol, fenol y éter.`],
  [`La fórmula del grupo éter es:`, [`R−O−R'`, `R−OH`, `R−CHO`, `R−COOH`], `Éter: R−O−R'.`],
  [`La propanona (acetona) pertenece a la función:`, [`Cetona`, `Aldehído`, `Éter`, `Alcohol`], `Carbonilo intermedio: cetona.`],
  [`El acetato de etilo es un:`, [`Éster`, `Ácido carboxílico`, `Éter`, `Cetona`], `−COO−R': éster.`],
  [`¿Qué función comparte la fórmula CₙH₂ₙO₂ con los ácidos carboxílicos?`, [`Éster`, `Aldehído`, `Éter`, `Alcohol`], `Ácido/éster son isómeros de función.`],
  [`El propanal pertenece a la función:`, [`Aldehído`, `Cetona`, `Alcohol`, `Éster`], `Carbonilo terminal R−CHO.`],
  [`La fórmula global de aldehídos y cetonas es:`, [`CₙH₂ₙO`, `CₙH₂ₙ₊₂O`, `CₙH₂ₙO₂`, `CₙH₂ₙ₋₆O`], `Aldehído/cetona: CₙH₂ₙO.`],
]);
addChecks(`Nomenclatura: regla general y prioridad`, [
  [`La cadena principal en la nomenclatura es:`, [`La cadena continua más larga que contiene el grupo principal`, `La más corta`, `La que tiene más ramas`, `Cualquier cadena`], `Más larga con el grupo principal.`],
  [`La numeración comienza por el extremo que da:`, [`El número más bajo al grupo principal`, `El número más alto al grupo principal`, `El número más bajo a las ramas`, `Cualquier número`], `Grupo principal con el número más bajo.`],
  [`Los sustituyentes se escriben antes de la raíz en orden:`, [`Alfabético`, `De tamaño`, `De prioridad`, `Numérico`], `Orden alfabético.`],
  [`Entre aldehído y cetona, ¿cuál tiene mayor prioridad?`, [`Aldehído`, `Cetona`, `Tienen la misma`, `Ninguna`], `Aldehído > cetona.`],
  [`¿Qué función tiene la menor prioridad entre las oxigenadas?`, [`Éter`, `Alcohol`, `Cetona`, `Éster`], `El éter es la última.`],
  [`La función de mayor prioridad entre las oxigenadas es:`, [`Ácido carboxílico`, `Alcohol`, `Éster`, `Aldehído`], `El ácido va primero.`],
  [`El sufijo del nombre lo da:`, [`La función de mayor prioridad`, `El sustituyente más grande`, `La función de menor prioridad`, `El doble enlace`], `La función principal da el sufijo.`],
]);
addChecks(`Alcoholes como función principal (sufijo -ol)`, [
  [`Para nombrar un alcohol, al alcano se le cambia la última vocal por:`, [`-ol`, `-al`, `-ona`, `-oico`], `Butano → butanol.`],
  [`En el prop-2-en-1-ol, ¿quién manda en la numeración?`, [`El −OH`, `El doble enlace`, `El metilo`, `Ninguno`], `El −OH tiene prioridad sobre el doble enlace.`],
  [`El nombre común del prop-2-en-1-ol es:`, [`Alcohol alílico`, `Alcohol bencílico`, `Alcohol isopropílico`, `Alcohol etílico`], `CH₂=CH−CH₂−OH = alílico.`],
  [`Los dobles enlaces en un alcohol se indican con:`, [`-en, antes de -ol`, `-in, después de -ol`, `ene- al inicio`, `No se indican`], `Ej.: prop-2-en-1-ol.`],
  [`El localizador del −OH se escribe:`, [`Justo antes de la terminación -ol`, `Al final del nombre`, `Al inicio del nombre`, `No se escribe`], `Ej.: butan-2-ol.`],
  [`¿Cuántos carbonos tiene la cadena principal del 3-metilbutan-2-ol?`, [`4`, `5`, `3`, `6`], `but- = 4.`],
]);
addChecks(`Polialcoholes, alcoholes cíclicos y -OH secundario`, [
  [`Un alcohol con tres −OH lleva la terminación:`, [`-triol`, `-diol`, `-tetraol`, `-ol`], `Tres −OH: -triol.`],
  [`En los polialcoholes, la «o» del alcano:`, [`Se conserva (etanodiol)`, `Se elimina (etandiol)`, `Se cambia por «a»`, `Se duplica`], `Se conserva la «o».`],
  [`El nombre de un anillo de 6 C con −OH y un metilo en posición 3 es:`, [`3-metilciclohexanol`, `1-metilciclohexan-3-ol`, `3-metilhexanol`, `Metilciclohexano`], `OH = C1, no se indica.`],
  [`En el 4-hidroxibutan-2-ona, el sufijo lo da:`, [`La cetona`, `El alcohol`, `El metilo`, `El doble enlace`], `La cetona tiene mayor prioridad.`],
  [`En un alcohol cíclico con un solo −OH, el número del OH:`, [`No se indica, porque siempre es C1`, `Siempre se escribe 1`, `Se escribe al final`, `Depende del anillo`], `No se indica salvo que haya varios.`],
  [`Un alcohol con cuatro −OH lleva la terminación:`, [`-tetraol`, `-triol`, `-diol`, `-pentol`], `Cuatro −OH: -tetraol.`],
]);
addChecks(`Nombres IUPAC y comunes de alcoholes`, [
  [`El etanol también se conoce como:`, [`Alcohol etílico o alcohol fino`, `Alcohol de madera`, `Isopropanol`, `Glicerina`], `Etanol = alcohol fino.`],
  [`El nombre IUPAC del alcohol isobutílico es:`, [`2-metilpropan-1-ol`, `2-metilpropan-2-ol`, `Butan-2-ol`, `Butan-1-ol`], `(CH₃)₂CH−CH₂−OH.`],
  [`El alcohol sec-butílico es:`, [`Butan-2-ol`, `Butan-1-ol`, `2-metilpropan-2-ol`, `Propan-2-ol`], `CH₃−CH₂−CH(OH)−CH₃.`],
  [`El pentan-1-ol se conoce como:`, [`Alcohol n-amílico`, `Alcohol n-butílico`, `Alcohol alílico`, `Alcohol bencílico`], `5 C: n-amílico.`],
  [`El propan-2-ol es un alcohol:`, [`Secundario`, `Primario`, `Terciario`, `Aromático`], `Su C−OH se une a 2 carbonos.`],
  [`El 2-metilpropan-2-ol es un alcohol:`, [`Terciario`, `Primario`, `Secundario`, `Fenólico`], `Su C−OH se une a 3 carbonos.`],
  [`El IUPAC del alcohol bencílico es:`, [`Fenilmetanol`, `Hidroxibenceno`, `Metilfenol`, `Bencenol`], `C₆H₅−CH₂−OH.`],
  [`El metanol es tóxico y se conoce como alcohol:`, [`De madera`, `Fino`, `De botiquín`, `Alílico`], `Metanol = alcohol de madera.`],
]);
addChecks(`Nomenclatura de fenoles`, [
  [`Un fenol con −CH₃ en C2 se llama:`, [`2-metilfenol (o-metilfenol)`, `3-metilfenol`, `4-metilfenol`, `1-metilfenol`], `2 = orto.`],
  [`El 3-nitrofenol con prefijos es:`, [`m-nitrofenol`, `o-nitrofenol`, `p-nitrofenol`, `nitrobenceno`], `3 = meta.`],
  [`La estructura base para nombrar fenoles es:`, [`El fenol (C₆H₅OH)`, `El tolueno`, `El ciclohexano`, `El naftaleno`], `Se usa fenol como base.`],
  [`La numeración del anillo del fenol se hace en la dirección que dé:`, [`Los números más bajos a los sustituyentes`, `Los números más altos`, `Siempre horaria`, `Siempre antihoraria`], `Horaria o antihoraria, la de números más bajos.`],
  [`El 4-clorofenol con prefijos es:`, [`p-clorofenol`, `o-clorofenol`, `m-clorofenol`, `clorobenceno`], `4 = para.`],
  [`Los sustituyentes de un fenol se escriben antes de «fenol» en orden:`, [`Alfabético`, `De tamaño`, `Numérico inverso`, `De prioridad`], `Orden alfabético.`],
]);
addChecks(`Fenoles polisustituidos, polifenoles y nombres comunes`, [
  [`El resorcinol es el:`, [`Benceno-1,3-diol`, `Benceno-1,2-diol`, `Benceno-1,4-diol`, `Benceno-1,2,3-triol`], `Resorcinol: 1,3.`],
  [`El pirogalol es el:`, [`Benceno-1,2,3-triol`, `Benceno-1,3-diol`, `Benceno-1,4-diol`, `Hidroxibenceno`], `Pirogalol: 1,2,3.`],
  [`El ácido salicílico es el:`, [`Ácido 2-hidroxibenzoico`, `2,4,6-trinitrofenol`, `Benceno-1,2-diol`, `4-hidroxibenzoico`], `−COOH gana al −OH.`],
  [`¿Por qué el ácido salicílico se nombra «ácido … hidroxi…»?`, [`Porque el −COOH tiene mayor prioridad que el −OH`, `Porque no tiene −OH`, `Porque es un éster`, `Porque es un alcohol`], `−COOH da el nombre.`],
  [`El eugenol es el:`, [`2-metoxi-4-(prop-2-en-1-il)fenol`, `2-isopropil-5-metilfenol`, `4-metilfenol`, `Benceno-1,2-diol`], `Eugenol.`],
  [`Los polifenoles se nombran como derivados de:`, [`Benceno, con -diol o -triol`, `Fenol, con orto y para`, `Ciclohexano`, `Tolueno`], `Benceno-1,2-diol, etc.`],
  [`El p-cresol es el:`, [`4-metilfenol`, `2-metilfenol`, `3-metilfenol`, `Benceno-1,4-diol`], `p = 4.`],
  [`El catecol es el grupo que comparten:`, [`Las catecolaminas`, `Las hormonas tiroideas`, `Los esteroides`, `Las bases púricas`], `Dopamina, adrenalina…`],
]);
addChecks(`Propiedades físicas de los alcoholes`, [
  [`Al aumentar el tamaño del alcohol, su solubilidad en agua:`, [`Disminuye`, `Aumenta`, `No cambia`, `Se vuelve infinita`], `Más cadena = menos soluble.`],
  [`Los alcoholes de 1 a 11 C son:`, [`Líquidos incoloros, poco viscosos, de olor penetrante`, `Sólidos cerosos`, `Gases`, `Sólidos coloreados`], `Líquidos de 1 a 11 C.`],
  [`La densidad de los alcoholes, comparada con la del agua, es:`, [`Menor`, `Mayor`, `Igual`, `Diez veces mayor`], `Menor; los polialcoholes son más densos.`],
  [`Los alcoholes reaccionan con Na y K liberando:`, [`H₂`, `O₂`, `CO₂`, `Cl₂`], `Se forma alcóxido + H₂.`],
  [`El etanol hierve a 78 °C, mientras el propano (masa parecida) hierve a:`, [`−42 °C`, `78 °C`, `100 °C`, `200 °C`], `La diferencia la hacen los puentes de H.`],
  [`El pKa del etanol (≈ 16) comparado con el del agua (≈ 15.7) es:`, [`Muy parecido`, `Mucho menor`, `Mucho mayor`, `Igual a 5`], `Acidez muy parecida.`],
  [`Los polialcoholes, comparados con el agua, son:`, [`Más densos`, `Menos densos`, `Gases`, `Insolubles siempre`], `Polialcoholes: más densos.`],
]);
addChecks(`Propiedades físicas de los fenoles`, [
  [`Al contacto con la piel, los fenoles son:`, [`Cáusticos`, `Inofensivos`, `Hidratantes`, `Anestésicos sin riesgo`], `Fenol: cáustico.`],
  [`El olor del fenol es:`, [`Dulzón y penetrante`, `Inodoro`, `A vinagre`, `A huevo podrido`], `Olor dulzón penetrante.`],
  [`El pKa del fenol es aproximadamente:`, [`10`, `16`, `5`, `1`], `Fenol ≈ 10; etanol ≈ 16.`],
  [`Al reaccionar con bases, los fenoles forman:`, [`Sales`, `Alquenos`, `Éteres siempre`, `Gases nobles`], `Fenol + base → sal (fenóxido).`],
  [`El error del material sobre el pKa es que dice:`, [`«pKa mayor», cuando el fenol tiene pKa MENOR`, `«pKa menor», cuando es mayor`, `Que el fenol es básico`, `Que el fenol no tiene pKa`], `A menor pKa, mayor acidez.`],
  [`Los fenoles tienen puntos de ebullición elevados por:`, [`Puentes de hidrógeno intermoleculares`, `Enlaces iónicos`, `No tener polaridad`, `Ser gases`], `Puentes de H.`],
]);
addChecks(`Propiedades químicas de los alcoholes`, [
  [`La acidez de los alcoholes se explica por el enlace:`, [`O−H`, `C−C`, `C−H`, `C=O`], `O−H: acidez; C−O: se va el −OH.`],
  [`Un alcohol primario con oxidantes fuertes llega hasta:`, [`Ácido carboxílico`, `Aldehído solamente`, `Alqueno`, `Éter`], `R−CH₂OH → R−CHO → R−COOH.`],
  [`Los alcoholes terciarios frente a la oxidación:`, [`Prácticamente no se oxidan`, `Forman aldehídos`, `Forman cetonas`, `Forman ácidos`], `No tienen H en el C−OH.`],
  [`¿Qué catalizadores ácidos se usan en la deshidratación?`, [`H₂SO₄ o H₃PO₄`, `NaOH`, `AlCl₃`, `Ni`], `Ácido fuerte y calor.`],
  [`En la combustión de un alcohol de n carbonos se forman:`, [`n CO₂ y (n+1) H₂O`, `n CO₂ y n H₂O`, `2n CO₂`, `Solo H₂O`], `CₙH₂ₙ₊₁OH + (3n/2) O₂.`],
  [`¿Cuántos mol de O₂ necesita la combustión de 1 mol de propanol (n = 3)?`, [`4.5`, `3`, `6`, `9`], `3n/2 = 4.5.`],
  [`La sal que forma un alcohol con Na metálico se llama:`, [`Alcóxido`, `Fenóxido`, `Carboxilato`, `Haluro`], `R−O⁻Na⁺.`],
  [`El enlace C−O de los alcoholes permite:`, [`Quitar todo el grupo −OH`, `Liberar H⁺`, `Formar anillos aromáticos`, `Oxidar el carbono vecino`], `Ej.: la deshidratación.`],
]);
addChecks(`Propiedades químicas de los fenoles`, [
  [`¿Reacciona un alcohol común con NaOH acuoso como el fenol?`, [`No`, `Sí, igual`, `Sí, más rápido`, `Solo los terciarios`], `Solo el fenol, por su mayor acidez.`],
  [`El ion fenóxido es un buen:`, [`Nucleófilo`, `Electrófilo`, `Oxidante`, `Catalizador`], `Ataca a los haluros de alquilo.`],
  [`En la síntesis de Williamson, el fenóxido reacciona con haluros de alquilo:`, [`Primarios`, `Terciarios`, `Aromáticos`, `De cualquier tipo`], `Haluros primarios.`],
  [`El −OH del fenol dirige a las posiciones:`, [`Orto y para`, `Solo meta`, `Solo orto`, `Ninguna`], `Activante orto/para.`],
  [`La nitración del fenol se hace con:`, [`Ácido nítrico diluido`, `H₂SO₄ concentrado`, `Br₂`, `NaOH`], `HNO₃ diluido.`],
  [`La sulfonación del fenol se hace con:`, [`Ácido sulfúrico concentrado`, `HNO₃ diluido`, `Br₂`, `CH₃−I`], `H₂SO₄ concentrado.`],
  [`Para bromar el fenol, ¿hace falta FeBr₃?`, [`No; entra sin catalizador y entran tres Br`, `Sí, como el benceno`, `Sí, y entra un solo Br`, `No reacciona con Br₂`], `El −OH activa mucho el anillo.`],
  [`El precipitado de la bromación del fenol es:`, [`2,4,6-tribromofenol`, `Bromobenceno`, `4-bromofenol`, `HBr`], `Precipitado blanco.`],
]);
addChecks(`Orden de acidez`, [
  [`La regla de oro de la acidez es:`, [`Menor pKa = más ácido`, `Mayor pKa = más ácido`, `pKa no tiene relación`, `pKa 7 = más ácido`], `Menor pKa, más ácido.`],
  [`El orden correcto de acidez es:`, [`Ácido carboxílico > fenol > agua ≈ alcohol`, `Alcohol > fenol > ácido`, `Fenol > ácido > alcohol`, `Agua > fenol > ácido`], `COOH ≈ 5, fenol ≈ 10, agua 15.7.`],
  [`Entre los alcoholes, el orden de acidez es:`, [`1° > 2° > 3°`, `3° > 2° > 1°`, `2° > 1° > 3°`, `Todos iguales`], `El terciario es el menos ácido (≈ 18).`],
  [`El fenol es más ácido que el etanol porque el fenóxido:`, [`Reparte su carga negativa por el anillo (resonancia)`, `No tiene carga`, `Es un gas`, `Tiene más hidrógenos`], `Estabilización por resonancia.`],
  [`Los grupos −NO₂ en el fenol:`, [`Aumentan su acidez`, `Disminuyen su acidez`, `No la cambian`, `Lo vuelven básico`], `Atraen electrones.`],
  [`El pKa aproximado de un ácido carboxílico es:`, [`5`, `10`, `16`, `18`], `≈ 5.`],
  [`Para desprotonar el etanol se necesita:`, [`Na metálico`, `NaOH acuoso`, `Agua`, `HCl`], `El fenol basta con NaOH.`],
]);

/* ---------------- Tema 28 · Éteres ---------------- */
addChecks(`Estructura de los éteres`, [
  [`Un éter tiene un átomo de oxígeno unido a:`, [`Dos grupos alquilo o arilo`, `Un H y un alquilo`, `Un doble enlace C=O`, `Un metal`], `R−O−R'.`],
  [`La geometría alrededor del oxígeno de un éter es:`, [`Angular (≈ 110°), parecida a la del agua`, `Lineal (180°)`, `Plana trigonal (120°)`, `Octaédrica`], `Angular, ≈ 110°.`],
  [`La hibridación del oxígeno en un éter es:`, [`sp³`, `sp²`, `sp`, `No tiene`], `sp³ con 2 pares libres.`],
  [`¿Cuántos pares de electrones libres tiene el oxígeno de un éter?`, [`2`, `0`, `1`, `3`], `Dos pares libres y dos enlaces σ.`],
  [`El enlace C−O en un éter es:`, [`Polar`, `Apolar`, `Iónico`, `Metálico`], `C−O polar.`],
  [`El tetrahidrofurano es un éter:`, [`Cíclico`, `Aromático`, `Alifático acíclico`, `Simétrico lineal`], `El O forma parte del anillo.`],
  [`La fórmula global de un éter saturado es:`, [`CₙH₂ₙ₊₂O`, `CₙH₂ₙO`, `CₙH₂ₙO₂`, `CₙH₂ₙ₋₆O`], `Igual que la de los alcoholes.`],
]);
addChecks(`Clasificación por simetría y por naturaleza de los grupos`, [
  [`Un éter simétrico tiene:`, [`R = R'`, `R ≠ R'`, `Un anillo`, `Dos oxígenos`], `Simétrico o simple: R = R'.`],
  [`El éter etil metílico (CH₃−O−CH₂CH₃) es:`, [`Asimétrico o mixto`, `Simétrico`, `Cíclico`, `Aromático puro`], `R ≠ R'.`],
  [`El anisol (C₆H₅−O−CH₃) es un éter:`, [`Mixto alifático-aromático`, `Aromático puro`, `Alifático`, `Cíclico`], `Un alquilo y un arilo.`],
  [`El difenil éter es un éter:`, [`Aromático puro`, `Alifático`, `Mixto`, `Cíclico`], `Dos anillos.`],
  [`El éter dimetílico es un éter:`, [`Alifático y simétrico`, `Aromático`, `Asimétrico`, `Cíclico`], `CH₃−O−CH₃.`],
  [`Un éter es aromático si:`, [`Al menos un grupo es arilo`, `Los dos grupos son alquilos`, `Tiene olor`, `Tiene un doble enlace C=O`], `Al menos un arilo.`],
]);
addChecks(`Clasificación por la cadena: acíclicos y cíclicos`, [
  [`Un epóxido es un anillo de:`, [`3 miembros (2 C + 1 O)`, `4 miembros`, `5 miembros`, `6 miembros`], `Triángulo.`],
  [`Un oxetano tiene:`, [`4 miembros (3 C + 1 O)`, `3 miembros`, `5 miembros`, `6 miembros`], `Cuadrado.`],
  [`Un oxolano tiene:`, [`5 miembros (4 C + 1 O)`, `3 miembros`, `4 miembros`, `6 miembros`], `Pentágono (THF).`],
  [`Un oxano tiene:`, [`6 miembros (5 C + 1 O)`, `5 miembros`, `4 miembros`, `3 miembros`], `Hexágono.`],
  [`El dioxano más común es el:`, [`1,4-dioxano`, `1,2-dioxano`, `1,3-dioxano`, `1,5-dioxano`], `Anillo de 6 con 2 O.`],
  [`Los éteres corona son:`, [`Macrociclos con muchos grupos éter repetidos`, `Éteres de 3 miembros`, `Éteres lineales`, `Éteres aromáticos puros`], `Ej.: 18-corona-6.`],
  [`Los criptandos pueden:`, [`Encapsular iones por completo`, `Arder sin oxígeno`, `Formar epóxidos`, `Romper el ADN`], `Estructuras tridimensionales.`],
  [`En un éter acíclico, el oxígeno:`, [`No forma parte de un anillo`, `Está dentro de un anillo`, `Tiene doble enlace`, `No existe`], `Cadena abierta.`],
]);
addChecks(`Nomenclatura IUPAC: alcoxialcanos`, [
  [`En IUPAC, la cadena más corta unida al O se nombra como:`, [`Alcoxi (sustituyente)`, `Alcano principal`, `Sufijo -ol`, `Sufijo -éter`], `Corta = alcoxi.`],
  [`El grupo CH₃CH₂−O− se llama:`, [`Etoxi`, `Metoxi`, `Fenoxi`, `Propoxi`], `Etoxi.`],
  [`El grupo C₆H₅−O− se llama:`, [`Fenoxi`, `Metoxi`, `Bencilo`, `Fenol`], `Fenoxi.`],
  [`El nombre IUPAC de CH₃−O−CH(CH₃)₂ es:`, [`2-metoxipropano`, `1-metoxipropano`, `Isopropoxi metano`, `Metoxietano`], `Metoxi en C2 del propano.`],
  [`El nombre IUPAC de CH₃CH₂−O−CH₂CH₂CH₃ es:`, [`1-etoxipropano`, `Propoxietano`, `2-etoxipropano`, `Etoxibutano`], `Corta = etoxi; larga = propano.`],
  [`La cadena principal se numera desde el extremo:`, [`Más cercano al grupo alcoxi`, `Más alejado del alcoxi`, `Con más ramas`, `Izquierdo siempre`], `Alcoxi con el número más bajo.`],
  [`¿Por qué en el metoxietano no hace falta número?`, [`Porque la cadena principal tiene solo 2 C`, `Porque es cíclico`, `Porque no tiene O`, `Porque es aromático`], `Con 1–2 C no hay ambigüedad.`],
]);
addChecks(`Nomenclatura común`, [
  [`El nombre común de CH₃CH₂−O−CH₂CH₃ es:`, [`Éter dietílico`, `Éter dimetílico`, `Éter etilmetílico`, `Anisol`], `Dietil éter.`],
  [`El nombre IUPAC del éter dietílico es:`, [`Etoxietano`, `Metoxietano`, `Dietoxietano`, `Etoxipropano`], `Etoxietano.`],
  [`El éter fenilmetílico también se llama:`, [`Anisol`, `Fenol`, `Tolueno`, `Difenil éter`], `C₆H₅−O−CH₃.`],
  [`En la nomenclatura común, los radicales se escriben en orden:`, [`Alfabético`, `De tamaño`, `Numérico`, `De prioridad`], `Etil antes que metil.`],
  [`El nombre común de CH₃−O−CH₂CH₃ es:`, [`Éter etilmetílico`, `Éter metiletílico`, `Éter dietílico`, `Etoxietano`], `Alfabético: etil, metil.`],
  [`La nomenclatura común se usa para éteres:`, [`Sencillos`, `Cíclicos complejos`, `Corona`, `Criptandos`], `Para éteres sencillos.`],
]);
addChecks(`Nomenclatura de éteres cíclicos`, [
  [`En la nomenclatura sustitutiva, el prefijo de los éteres cíclicos es:`, [`oxa-`, `oxi-`, `oxo-`, `epoxi-`], `oxa- + cicloalcano.`],
  [`En la nomenclatura «oxa-», el oxígeno recibe la posición:`, [`1`, `2`, `3`, `La última`], `O = posición 1.`],
  [`Un anillo de 3 miembros con O se llama en forma sustitutiva:`, [`Oxaciclopropano`, `Oxaciclobutano`, `Oxaciclopentano`, `Oxano`], `3 = ciclopropano.`],
  [`El nombre común del oxolano es:`, [`Tetrahidrofurano (THF)`, `Tetrahidropirano (THP)`, `Furano`, `Dioxano`], `5 miembros = THF.`],
  [`El nombre común del oxano es:`, [`Tetrahidropirano (THP)`, `Tetrahidrofurano`, `Oxirano`, `Pirano`], `6 miembros = THP.`],
  [`El furano tiene:`, [`5 miembros y 2 dobles enlaces`, `6 miembros sin dobles enlaces`, `3 miembros`, `Dos oxígenos`], `Furano: 5 miembros, 2 dobles.`],
  [`El oxetano en forma sustitutiva es:`, [`Oxaciclobutano`, `Oxaciclopropano`, `Oxaciclopentano`, `Oxaciclohexano`], `4 = ciclobutano.`],
  [`Oxirano, oxetano, oxolano y oxano son nombres del sistema:`, [`Hantzsch-Widman`, `Común`, `De Kekulé`, `De Hückel`], `Sistemáticos Hantzsch-Widman.`],
]);
addChecks(`Éteres más comunes y sus usos`, [
  [`El éter dietílico se usa como:`, [`Anestésico general y solvente de laboratorio`, `Esterilizante`, `Propelente`, `Aditivo de gasolina`], `Dietil éter.`],
  [`El éter dimetílico (DME) se usa como:`, [`Propelente de aerosoles y refrigerante`, `Anestésico`, `Esterilizante`, `Perfume`], `DME.`],
  [`El MTBE se usa para:`, [`Aumentar el octanaje de la gasolina`, `Esterilizar`, `Anestesiar`, `Perfumar`], `Metil tert-butil éter.`],
  [`El óxido de etileno se usa como:`, [`Esterilizante de equipo médico`, `Solvente de polímeros`, `Propelente`, `Anestésico`], `Esteriliza material sensible al calor.`],
  [`El THF se usa como:`, [`Solvente para polímeros`, `Esterilizante`, `Aditivo de gasolina`, `Perfume`], `Tetrahidrofurano.`],
  [`El anisol se usa en:`, [`Perfumes, feromonas e insecticidas`, `Gasolina`, `Anestesia`, `Esterilización`], `Metoxibenceno.`],
  [`La fórmula del 18-corona-6 es:`, [`C₁₂H₂₄O₆`, `C₄H₈O₂`, `C₂H₄O`, `C₄H₈O`], `Éter corona.`],
  [`La fórmula del 1,4-dioxano es:`, [`C₄H₈O₂`, `C₄H₈O`, `C₂H₄O`, `C₆H₁₂O`], `Diéter de 6 miembros.`],
]);
addChecks(`Propiedades físicas de los éteres`, [
  [`Los puntos de ebullición de los éteres son, comparados con los de los alcoholes:`, [`Más bajos`, `Más altos`, `Iguales`, `Mucho más altos`], `No forman puentes de H entre sí.`],
  [`¿Por qué los éteres no forman puentes de H entre sí?`, [`No tienen H unido al O`, `No tienen oxígeno`, `Son iónicos`, `Son aromáticos`], `Sin O−H.`],
  [`Los éteres pequeños son solubles en agua porque el O puede:`, [`Aceptar puentes de H del agua`, `Donar H⁺`, `Formar enlaces iónicos`, `Disociarse`], `Aceptor de puentes de H.`],
  [`El punto de ebullición real del éter dimetílico es:`, [`−24 °C (es gas)`, `34 °C`, `78 °C`, `100 °C`], `Error del material: 34.6 °C es el dietílico.`],
  [`El éter dietílico hierve a:`, [`34.6 °C`, `−24 °C`, `78 °C`, `100 °C`], `Muy volátil.`],
  [`La densidad de los éteres, comparada con la del agua, es:`, [`Menor`, `Mayor`, `Igual`, `El doble`], `Menor que el agua.`],
  [`La polaridad de los éteres es:`, [`Moderada`, `Nula`, `Iónica`, `Mayor que la del agua`], `Moderadamente polares.`],
  [`Los puntos de ebullición de los éteres se parecen a los de:`, [`Los alcanos`, `Los alcoholes`, `Los ácidos`, `Las sales`], `Parecidos a alcanos.`],
]);
addChecks(`Propiedades químicas de los éteres`, [
  [`¿Por qué los éteres son buenos solventes?`, [`Tienen baja reactividad (enlace C−O−C estable)`, `Son muy reactivos`, `Son iónicos`, `Son ácidos fuertes`], `Casi inertes.`],
  [`El clivaje ácido de un éter se hace con:`, [`HI o HBr concentrados y calor`, `NaOH`, `Agua fría`, `KMnO₄`], `Rompe los enlaces C−O.`],
  [`R−O−R' + HI produce:`, [`R−I + R'−OH`, `R−OH + R'−OH`, `R−O−I`, `Alqueno + agua`], `Clivaje ácido.`],
  [`Expuestos al aire y la luz mucho tiempo, los éteres forman:`, [`Peróxidos explosivos`, `Alcoholes`, `Ácidos carboxílicos`, `Epóxidos`], `Autooxidación.`],
  [`La formación de peróxidos ocurre por un mecanismo de:`, [`Radicales libres`, `SEA`, `Adición electrófila`, `Neutralización`], `Radicales libres.`],
  [`R₂O + BF₃ forma un complejo porque el oxígeno es:`, [`Donador de electrones (base de Lewis)`, `Aceptor de electrones`, `Un metal`, `Un ácido de Brønsted`], `Pares libres del O.`],
  [`¿Por qué se fechan los frascos de éter al abrirlos?`, [`Porque con el tiempo acumulan peróxidos`, `Porque cambian de color`, `Porque se congelan`, `Porque pierden el oxígeno`], `Riesgo de explosión.`],
  [`¿Cuántos mol de O₂ necesita la combustión de 1 mol de éter dietílico (n = 4)?`, [`6`, `4`, `5`, `8`], `3n/2 = 6.`],
]);
addChecks(`Epóxidos`, [
  [`Los ángulos del anillo de un epóxido son de:`, [`≈ 60°`, `109.5°`, `120°`, `180°`], `Muy tensos.`],
  [`Los epóxidos son muy reactivos porque:`, [`Su anillo de 3 está muy tenso`, `No tienen oxígeno`, `Son aromáticos`, `Son iónicos`], `Ángulos de 60°, eclipsados.`],
  [`El anillo de un epóxido se abre incluso con:`, [`Agua, alcoholes y aminas`, `Solo HI caliente`, `Solo luz UV`, `Nada`], `Nucleófilos débiles.`],
  [`Un éter común, para romperse, necesita:`, [`HI caliente`, `Solo agua`, `Aire`, `Una amina`], `Contraste con el epóxido.`],
  [`El óxido de etileno esteriliza porque:`, [`Se une al ADN y a las proteínas de los microorganismos`, `Los congela`, `Los disuelve en agua`, `Los calienta`], `Los desnaturaliza.`],
  [`En la síntesis farmacéutica, los epóxidos sirven para introducir:`, [`Dos carbonos y un −OH en una etapa`, `Un anillo aromático`, `Un halógeno`, `Un metal`], `Bloques de construcción.`],
  [`Las resinas epoxi son:`, [`Adhesivos y recubrimientos muy resistentes`, `Anestésicos`, `Combustibles`, `Esterilizantes`], `Pegamentos de dos componentes.`],
  [`El óxido de etileno es útil para material:`, [`Sensible al calor`, `Solo metálico`, `Que se esteriliza en autoclave`, `Desechable sin esterilizar`], `Alternativa a la autoclave.`],
]);
