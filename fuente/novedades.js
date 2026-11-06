/* ======================= NOVEDADES =======================
   Lo nuevo de la página, explicado para Gaby. Para agregar una novedad: poner la entrada ARRIBA
   con un id nuevo (el punto del botón 🎁 aparece hasta que ella la lee).                         */
const NOVEDADES = [
  { id:`2026-11-06b`, d:`2026-11-06`, t:`Lee y mira el dibujo al mismo tiempo`, l:[
    `En Repaso → Leer, el dibujo ya está junto al texto (en computadora, a la derecha; en el teléfono, arriba).`,
    `Arriba del dibujo tienes 3 botones: ◧ junto al texto, 📌 fijarlo arriba mientras bajas leyendo, y ⧉ ventana flotante.`,
    `La ventana flotante la mueves arrastrando su barra, la agrandas o achicas con − / + (o la esquina) y ▴ la minimiza. Recuerda dónde la dejaste.`,
    `En computadora, el panel de la derecha (Pomodoro, índice y temas) se oculta con “Ocultar panel” y queda una tira delgada con el reloj; tócala para abrirlo de nuevo.`] },
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
