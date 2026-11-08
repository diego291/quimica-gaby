/* ======================= NOVEDADES =======================
   Lo nuevo de la página, explicado para Gaby. Para agregar una novedad: poner la entrada ARRIBA
   con un id nuevo (el punto del botón 🎁 aparece hasta que ella la lee).                         */
const NOVEDADES = [
  { id:`2026-11-08a`, d:`2026-11-08`, t:`Nuevo color: Frambuesa`, l:[
    `En “Colores” hay un color nuevo: 🍓 Frambuesa, un rosa intenso y alegre.`,
    `Se usa en botones, pestañas y el Pomodoro, en modo día y noche. Los colores de cada tema no cambian.`] },
  { id:`2026-11-06i`, d:`2026-11-06`, t:`Pantalla completa: el texto entra completo y se lee mejor`, l:[
    `En computadora, el texto ocupa más espacio y el dibujo se hace más compacto a la derecha.`,
    `La letra se ajusta sola para que toda la ficha se vea sin bajar (sin quedar nunca más pequeña de lo cómodo). Con A− / A+ la cambias si quieres.`,
    `El botón “1 tema · cambiar” vuelve a abrir la lista de temas aunque el panel derecho esté oculto.`] },
  { id:`2026-11-06h`, d:`2026-11-06`, t:`Menú de marcar más pequeño, 8 colores e íconos`, l:[
    `Al seleccionar texto sale una barrita compacta: 8 colores (amarillo, naranja, rojo, rosa, morado, azul, celeste y verde), ⭐ importante, ❓ duda, 📝 a mis apuntes y 📅 repasar luego.`,
    `Duda, apuntes y repasar luego también dejan su ícono pegado al texto, para que veas qué hiciste con cada parte.`,
    `En ⋯ eliges un ícono para el texto (⭐ ❓ ⚠️ 💡 📌 ✅ 🔥 ❤️ 📝 📅), además de preguntar, escuchar, copiar o quitar el marcado.`] },
  { id:`2026-11-06g`, d:`2026-11-06`, t:`Memorizar con todo lo importante, video que sigue donde quedó y barra que no estorba`, l:[
    `“Memorizar” ahora trae: 🧠 idea clave, 📖 glosario (términos y definiciones de la ficha, con opción de taparlas), 🔑 palabras clave, 🔢 fórmulas y datos, ⚠️ ojo con los errores frecuentes, ❓ lo que te pueden preguntar y 🃏 tarjetas para repasar.`,
    `El video sigue donde lo dejaste aunque cambies a Leer o a otra ficha. “Ver desde el inicio” lo regresa al principio.`,
    `La barra Anterior · Comprobar · Siguiente es más delgada. En ⋯ la haces pequeña (solo ‹ ✓ ›), le bajas la opacidad o la mueves libremente arrastrando ⠿.`] },
  { id:`2026-11-06f`, d:`2026-11-06`, t:`Imágenes y dibujos que se mueven libremente`, l:[
    `Toca una imagen o dibujo del Cuaderno: aparece un marco con 8 puntos. Las esquinas cambian el tamaño sin deformar; los puntos de los lados la estiran.`,
    `Arrástrala desde el centro y la colocas donde quieras en la página (modo ✥ Libre). Con ☰ En el texto vuelve a acomodarse entre los párrafos.`,
    `⤒ / ⤓ la pone delante o detrás, ↺ recupera su forma original y 🗑 (o la tecla Suprimir) la quita.`] },
  { id:`2026-11-06e`, d:`2026-11-06`, t:`Marcar texto, apuntes y videos dentro del Repaso`, l:[
    `Selecciona cualquier parte de una ficha: sale un menú para marcarla con color o ⭐ Importante, guardarla como ❓ Duda en tu Cuaderno, pasarla 📝 a tus apuntes, agregarla a 📅 Pendientes para repasar mañana, 💬 preguntar, 🔊 escucharla o 📋 copiarla con la fuente.`,
    `Tus marcados se quedan guardados en la ficha. Tócalos para cambiar el color o quitarlos.`,
    `“Mis apuntes” ahora es un cuaderno dentro del Repaso: escribes ahí mismo y se guarda en la sección del tema. Abajo ves todo lo que marcaste en esa ficha.`,
    `“Video”: el video de YouTube se ve aquí, con tus notas al lado. “⏱ Minuto” pega el momento del video; al tocarlo, el video salta ahí.`,
    `Cuaderno: la página ocupa todo el ancho. Los cuadernos y páginas están en el menú “Cuaderno y páginas ▾”.`] },
  { id:`2026-11-06d`, d:`2026-11-06`, t:`Repaso en pantalla completa`, l:[
    `En Repaso toca “Pantalla completa”: desaparece todo lo demás y queda solo la ficha.`,
    `En computadora se ve como un libro abierto: texto a la izquierda y dibujo a la derecha. Cambias de ficha con las flechas grandes de los lados (o con ← → del teclado).`,
    `“☰ Fichas” abre la lista de todas las fichas del tema para saltar a cualquiera (✓ = ya leída).`,
    `Arriba tienes A− / A+ para la letra, el modo día/noche y ✕ Salir (o Esc).`,
    `En el teléfono: el texto y el dibujo quedan uno sobre otro, con la barra para pasar de ficha abajo.`] },
  { id:`2026-11-06c`, d:`2026-11-06`, t:`🔍 Ver más grande`, l:[
    `Arriba tienes el botón 🔍. Con A+ / A− (o eligiendo 115 %, 130 %, 150 %, 175 % o 200 %) se agranda la letra, los botones y los dibujos de toda la página.`,
    `Se guarda en cada dispositivo: puedes tener la letra grande en el teléfono y normal en la computadora.`,
    `Cada dibujo tiene su 🔍: lo abre en pantalla completa. Acerca con + / −, con la rueda del ratón o con dos dedos; arrástralo para moverlo y toca dos veces para acercar ahí. ↺ lo ajusta y ✕ cierra.`] },
  { id:`2026-11-06b`, d:`2026-11-06`, t:`Lee y mira el dibujo al mismo tiempo`, l:[
    `En Repaso → Leer, el dibujo ya está junto al texto (en computadora, a la derecha; en el teléfono, arriba).`,
    `Arriba del dibujo tienes 3 botones: ◧ junto al texto, 📌 fijarlo arriba mientras bajas leyendo, y ⧉ ventana flotante.`,
    `La ventana flotante la mueves arrastrando su barra, la agrandas o achicas con − / + (o la esquina) y ▴ la minimiza. Recuerda dónde la dejaste.`,
    `En computadora, el panel de la derecha (Pomodoro, índice y temas) se oculta con “Ocultar panel” y queda una tira delgada con el reloj; tócala para abrirlo de nuevo.`,
    `En computadora, el texto y el dibujo usan todo el ancho de la pantalla, sin espacios vacíos a los lados.`] },
  { id:`2026-11-06a`, d:`2026-11-06`, t:`Tu progreso pasa solo entre el teléfono y la computadora`, l:[
    `Ya no sale el mensaje de “¿Qué progreso conservo?”: los dispositivos juntan los cambios solos y en pocos segundos.`,
    `Si dejas “Comprueba lo que leíste” a medias, en el otro dispositivo te aparece en qué pregunta ibas. Puedes seguir, reiniciar con las mismas preguntas o empezar uno nuevo.`,
    `En Inicio, “Continúa donde quedaste” te lleva directo a la pregunta pendiente.`,
    `Para que funcione, inicia sesión con tu cuenta de Google en los dos (Guardar en la nube).`] },
  { id:`2026-11-04c`, d:`2026-11-04`, t:`Nueva sección: Organizar`, l:[
    `Agenda con vista de día, semana, mes y lista. Se conecta con tu Google Calendar (botón 🔗 Google).`,
    `Pendientes con fecha, notas rápidas con #etiquetas y un Cuaderno tipo OneNote con plantillas de clase, laboratorio, ejercicio resuelto y caso clínico.`,
    `Las páginas del Cuaderno enlazadas a un tema salen como “Mis apuntes” en el Repaso de ese tema.`,
    `El botón 📅 de arriba te muestra lo que te queda hoy. “Mis notas” ahora está en Organizar.`,
    `Puedes recibir los recordatorios también por correo (Agenda → ⚙).`] },
  { id:`2026-11-04b`, d:`2026-11-04`, t:`Inicio y Repaso con nuevo diseño`, l:[
    `Inicio: “Continúa donde quedaste”, plan de hoy y avance de cada tema.`,
    `Repaso: cuadritos con las fichas del tema, pestañas (Leer · Dibujo · Memorizar · Comprobar · Video) y una barra fija abajo para pasar de ficha.`,
    `En la barra de abajo eliges 4 accesos; lo demás está en “Más”.`] },
  { id:`2026-11-04a`, d:`2026-11-04`, t:`Comprueba lo que leíste: ficha nueva y luego repaso`, l:[
    `Solo salen preguntas de la ficha que leíste y de las anteriores del mismo tema, nunca de las que aún no lees.`,
    `Primero todas las de la ficha nueva; luego una pausa con tu resultado y el repaso de las fichas anteriores.`,
    `En ⚙ Ajustes eliges cuántas de repaso, qué fichas entran y si quieres más de lo que fallas.`] },
  { id:`2026-11-02a`, d:`2026-11-02`, t:`Muchas más preguntas por ficha`, l:[
    `Cada ficha tiene ahora alrededor de 20 preguntas distintas, sin repetirse.`,
    `Botones “Siguiente pregunta” y “Repetir preguntas” sin cambiar de ficha.`] },
  { id:`2026-10-28a`, d:`2026-10-28`, t:`Audio-repaso con voz natural`, l:[`Escucha las fichas con una voz más natural y sin cortes.`] }
];
const newsUnread = () => NOVEDADES.filter(n => !(S.x.newsSeen || []).includes(n.id)).length;
function openNovedades(){
  const nuevas = new Set(NOVEDADES.filter(n => !(S.x.newsSeen || []).includes(n.id)).map(n => n.id));
  S.x.newsSeen = NOVEDADES.map(n => n.id); save(); renderHead();
  openSheet(`Novedades`, b => {
    b.append(el(`p`, `muted`, `Lo nuevo de tu página de estudio. Recarga la página para recibir siempre lo último.`));
    NOVEDADES.forEach(n => {
      const c = el(`article`, `nov` + (nuevas.has(n.id) ? ` nueva` : ``));
      c.append(el(`div`, `novd`, `${fmtDay(n.d)[0].toUpperCase() + fmtDay(n.d).slice(1)}${nuevas.has(n.id) ? ` · <b>Nuevo</b>` : ``}`), el(`h4`, ``, n.t));
      const ul = el(`ul`); n.l.forEach(x => ul.append(el(`li`, ``, x))); c.append(ul); b.append(c);
    });
  });
}
const _renderHeadN = renderHead;
renderHead = function(){
  _renderHeadN();
  const tools = $(`#head .top .tools`); if (!tools) return;
  const n = newsUnread(); const b = btn(`🎁${n ? `<i>${n}</i>` : ``}`, `hbtn hnov`, openNovedades);
  b.title = n ? `${n} novedad${n === 1 ? `` : `es`} sin leer` : `Novedades`; b.setAttribute(`aria-label`, b.title);
  tools.prepend(b);
};
