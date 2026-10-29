/* ======================= ILUSTRACIONES: ALCOHOLES Y FENOLES ======================= */
(() => {
  const { ring } = AR;
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const arrow = (x1, y, x2) => `<line x1="${x1}" y1="${y}" x2="${x2 - 4}" y2="${y}" class="ar" marker-end="url(#ah)"/>`;
  const C = `var(--t27)`;
  const hl = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${C};opacity:.16"/>`;
  const hw = l => 5 + 6 * l.length;
  const chain = (labs, x0, dx, y, o = {}) => { let s = ``; const X = i => x0 + i * dx;
    labs.forEach((l, i) => { s += T(X(i), y + 7, l, { c:`tk`, fs:o.fs || 18 }); if (o.nums) s += T(X(i) + 24, y - 14, o.nums[i], { c:`tm`, fs:12 }); if (i < labs.length - 1) s += ln(X(i) + hw(l), y, X(i + 1) - hw(labs[i + 1]), y); });
    (o.up || []).forEach(b => { s += ln(X(b.i), y - 12, X(b.i), y - 30) + (b.hl ? hl(X(b.i) - 20, y - 56, 40, 24) : ``) + T(X(b.i), y - 38, b.l, { c:`tk`, fs:16 }); });
    (o.dn || []).forEach(b => { s += ln(X(b.i), y + 13, X(b.i), y + 31) + T(X(b.i), y + 50, b.l, { c:`tk`, fs:16 }); });
    return s; };

  FIG.grupoOH = { src:`Tema 27, pág. 3–4`, cap:`Alcohol: el −OH va unido a un carbono de una cadena (R). Fenol: el −OH va unido directamente a un anillo aromático (Ar). Esa diferencia cambia mucho sus propiedades, sobre todo la acidez.`,
    svg: (() => { let s = ``;
      s += T(140, 30, `Alcohol · R−OH`, { c:`tb`, fs:15 }) + chain([`CH₃`, `CH₂`, `OH`], 70, 70, 96) + hl(186, 80, 48, 32);
      s += T(140, 150, `etanol C₂H₆O`, { c:`tm` }) + T(140, 172, `saturado: CₙH₂ₙ₊₂O`, { c:`tb` });
      s += ln(280, 20, 280, 200, `dash`);
      s += T(420, 30, `Fenol · Ar−OH`, { c:`tb`, fs:15 }) + ring(420, 102, 30, { 0:`OH` }, { len:14, fs:15 }) + hl(402, 40, 36, 22);
      s += T(420, 150, `fenol C₆H₆O · timol C₁₀H₁₄O`, { c:`tm` }) + T(420, 172, `CₙH₂ₙ₋₆O (n ≥ 6)`, { c:`tb` });
      return svg(560, 196, s, `Alcohol frente a fenol`); })() };

  FIG.prioridad = { src:`Tema 27, pág. 5–6`, cap:`Cuando hay varias funciones, la de mayor prioridad da el sufijo y las demás se nombran como prefijos. Truco: el ácido está arriba de todo; el alcohol (-ol) le gana solo a amina y éter.`,
    svg: (() => { let s = ``; const L = [[`Ácido carboxílico`, `ácido …-oico`, `carboxi-`], [`Éster`, `-oato de alquilo`, `alcoxicarbonil-`], [`Amida`, `-amida`, `carbamoil-`], [`Nitrilo`, `-nitrilo`, `ciano-`], [`Aldehído`, `-al`, `formil- / oxo-`], [`Cetona`, `-ona`, `oxo-`], [`Alcohol`, `-ol`, `hidroxi-`], [`Fenol`, `-fenol`, `hidroxi-`], [`Amina`, `-amina`, `amino-`], [`Éter`, `-oxi- (alcoxi)`, `alcoxi-`]];
      s += T(60, 20, `Prioridad`, { c:`tm` }) + T(110, 20, `Función`, { a:`start`, c:`tm` }) + T(290, 20, `Sufijo (principal)`, { a:`start`, c:`tm` }) + T(430, 20, `Prefijo (secundario)`, { a:`start`, c:`tm` });
      L.forEach((r, i) => { const y = 32 + i * 25, al = i === 6 || i === 7; s += `<rect x="20" y="${y}" width="${520 - i * 22}" height="21" rx="4" style="fill:${al ? C : `var(--sunk)`};opacity:${al ? .28 : 1}"/>`;
        s += T(60, y + 15, i + 1, { c:`tb`, fs:12.5 }) + T(110, y + 15, r[0], { a:`start`, c:al ? `tb` : `tx`, fs:13 }) + T(290, y + 15, r[1], { a:`start`, fs:12.5 }) + T(430, y + 15, r[2], { a:`start`, c:`tm`, fs:12 }); });
      s += `<line x1="548" y1="36" x2="548" y2="270" class="ar" marker-end="url(#ah)"/>` + T(546, 290, `menor`, { a:`end`, c:`tm`, fs:11 });
      return svg(560, 296, s, `Orden de prioridad de las funciones`); })() };

  FIG.nombreAlcohol = { src:`Tema 27, pág. 5 y 7`, cap:`3-metilbutan-2-ol. Se numera desde la derecha para que el −OH quede en C2 (desde la izquierda quedaría en C3). Se cambia la "o" final de butano por -ol y el localizador va justo antes: butan-2-ol.`,
    svg: svg(560, 190, T(280, 24, `3-metilbutan-2-ol · C₅H₁₂O`, { c:`tb`, fs:15 }) +
      chain([`CH₃`, `CH`, `CH`, `CH₃`], 110, 110, 120, { nums:[4, 3, 2, 1], up:[{ i:2, l:`OH`, hl:true }], dn:[{ i:1, l:`CH₃` }] }) +
      T(330 + 30, 88, `−OH en C2`, { a:`start`, c:`tm` }) + T(220 + 30, 174, `metil en C3`, { a:`start`, c:`tm` }) + `<line x1="490" y1="150" x2="430" y2="150" class="ar" marker-end="url(#ah)"/>` + T(480, 170, `se numera desde aquí`, { c:`tm`, fs:11 }), `Ejemplo de nombre de un alcohol`) };

  FIG.polioles = { src:`Tema 27, pág. 8`, cap:`Con varios −OH se conserva la "o" del alcano y se usa -diol, -triol. En los alcoholes cíclicos el carbono con el −OH es siempre el C1, por eso el ciclohexanol no lleva número.`,
    svg: (() => { let s = ``;
      s += chain([`CH₂`, `CH₂`], 70, 80, 90, { up:[{ i:0, l:`OH`, hl:true }, { i:1, l:`OH`, hl:true }] }) + T(110, 132, `etano-1,2-diol`, { c:`tb` }) + T(110, 150, `etilenglicol`, { c:`tm` });
      s += chain([`CH₂`, `CH`, `CH₂`], 250, 70, 90, { up:[{ i:0, l:`OH`, hl:true }, { i:1, l:`OH`, hl:true }, { i:2, l:`OH`, hl:true }] }) + T(320, 132, `propano-1,2,3-triol`, { c:`tb` }) + T(320, 150, `glicerina / glicerol`, { c:`tm` });
      s += ring(480, 92, 30, { 0:`OH`, 4:`H₃C` }, { mode:`none`, len:14, fs:14, nums:{ 0:1, 5:2, 4:3 } }) + T(480, 160, `3-metilciclohexanol`, { c:`tb` });
      return svg(560, 172, s, `Dioles, trioles y alcoholes cíclicos`); })() };

  FIG.fenolesNom = { src:`Tema 27, pág. 10–12`, cap:`En los fenoles el carbono con el −OH es el C1 y se numera hacia los números más bajos. Con un solo sustituyente se puede usar orto, meta, para (o-cresol = 2-metilfenol). Con dos o más, solo números.`,
    svg: (() => { let s = ``; const N = { nums:{ 0:1, 1:2, 2:3, 3:4, 4:5, 5:6 }, len:14, fs:14 };
      s += ring(70, 86, 30, { 0:`OH`, 1:`CH₃` }, N) + T(70, 160, `2-metilfenol`, { c:`tb`, fs:12.5 }) + T(70, 176, `o-cresol`, { c:`tm` });
      s += ring(205, 86, 30, { 0:`OH`, 3:`Cl` }, N) + T(205, 160, `4-clorofenol`, { c:`tb`, fs:12.5 }) + T(205, 176, `p-clorofenol`, { c:`tm` });
      s += ring(340, 86, 30, { 0:`OH`, 2:`NO₂` }, N) + T(340, 160, `3-nitrofenol`, { c:`tb`, fs:12.5 }) + T(340, 176, `m-nitrofenol`, { c:`tm` });
      s += ring(480, 86, 30, { 0:`OH`, 1:`CH₃`, 5:`CH₃`, 3:`Br` }, N) + T(480, 160, `4-bromo-2,6-`, { c:`tb`, fs:12.5 }) + T(480, 176, `dimetilfenol`, { c:`tb`, fs:12.5 });
      return svg(560, 188, s, `Nomenclatura de fenoles`); })() };

  FIG.polifenoles = { src:`Tema 27, pág. 11–12`, cap:`Con dos o más −OH en el anillo, la raíz pasa a ser "benceno" con -diol o -triol. Sus nombres comunes son muy usados.`,
    svg: (() => { let s = ``; const d = [[{ 0:`OH`, 1:`OH` }, `benceno-1,2-diol`, `catecol`], [{ 0:`OH`, 2:`OH` }, `benceno-1,3-diol`, `resorcinol`], [{ 0:`OH`, 3:`OH` }, `benceno-1,4-diol`, `hidroquinona`], [{ 0:`OH`, 1:`OH`, 2:`OH` }, `benceno-1,2,3-triol`, `pirogalol`]];
      d.forEach((r, i) => { const cx = 70 + i * 140; s += ring(cx, 88, 28, r[0], { len:13, fs:13.5 }) + T(cx, 160, r[2], { c:`tb` }) + T(cx, 177, r[1], { c:`tm`, fs:11.5 }); });
      return svg(560, 188, s, `Polifenoles`); })() };

  FIG.puentesH = { src:`Tema 27, pág. 13–14`, cap:`El O del −OH es muy electronegativo: el H queda parcialmente positivo (δ+) y se atrae con el O de otra molécula (δ−). Esos puentes de hidrógeno (líneas punteadas) elevan el punto de ebullición y permiten que los alcoholes pequeños se disuelvan en agua.`,
    svg: (() => { let s = ``;
      const mol = (x, y, R) => { let m = ``; const ox = x, oy = y; m += T(ox - 15, oy + 5, R, { a:`end`, c:`tk`, fs:16 }) + `<circle cx="${ox}" cy="${oy}" r="11" style="fill:${C};opacity:.85"/>` + T(ox, oy + 5, `O`, { c:`tw` }) + ln(ox + 6, oy + 9, ox + 16, oy + 26) + `<circle cx="${ox + 20}" cy="${oy + 32}" r="7" class="s" style="fill:var(--surface);stroke-width:1.5"/>` + T(ox + 20, oy + 36, `H`, { c:`tb`, fs:10 }) + T(ox + 4, oy - 15, `δ−`, { c:`tm`, fs:11 }) + T(ox + 34, oy + 36, `δ+`, { c:`tm`, fs:11 }); return m; };
      s += T(140, 24, `Entre moléculas de alcohol`, { c:`tb` }) + mol(130, 60, `CH₃CH₂`) + mol(170, 124, `CH₃CH₂`) + `<line x1="152" y1="98" x2="166" y2="113" class="dash" style="stroke:${C};stroke-width:2.5"/>`;
      s += ln(280, 20, 280, 176, `dash`);
      s += T(420, 24, `Alcohol con agua`, { c:`tb` }) + mol(390, 60, `CH₃CH₂`) + `<line x1="412" y1="98" x2="426" y2="113" class="dash" style="stroke:${C};stroke-width:2.5"/>`;
      s += `<circle cx="430" cy="124" r="11" style="fill:var(--t17);opacity:.85"/>` + T(430, 129, `O`, { c:`tw` }) + ln(422, 132, 410, 148) + ln(438, 132, 450, 148) + T(406, 160, `H`, { c:`tb`, fs:12 }) + T(454, 160, `H`, { c:`tb`, fs:12 }) + T(480, 128, `H₂O`, { a:`start`, c:`tm` });
      s += T(280, 196, `- - - puente de hidrógeno`, { c:`tm` });
      return svg(560, 206, s, `Puentes de hidrógeno de los alcoholes`); })() };

  FIG.reaccAlcohol = { src:`Tema 27, pág. 15`, cap:`Las cuatro reacciones de los alcoholes del material. El enlace O−H explica la acidez (sale el H); el enlace C−O permite quitar el −OH completo (deshidratación).`,
    svg: (() => { let s = ``; const rows = [[`Ácido débil`, `2 R−OH + 2 Na`, `2 R−O⁻Na⁺ + H₂`, ``], [`Oxidación (1°)`, `R−CH₂OH`, `R−CHO → R−COOH`, `suave → aldehído; fuerte → ácido`], [`Deshidratación`, `R−CH₂−CH₂OH`, `R−CH=CH₂ + H₂O`, `H₂SO₄ o H₃PO₄ y calor → alqueno`], [`Combustión`, `CₙH₂ₙ₊₁OH + 3n/2 O₂`, `n CO₂ + (n+1) H₂O`, `+ calor`]];
      rows.forEach((r, i) => { const y = 40 + i * 62; s += T(20, y, r[0], { a:`start`, c:`tb` }) + T(250, y, r[1], { a:`end`, c:`tk`, fs:15 }) + arrow(262, y - 5, 312) + T(322, y, r[2], { a:`start`, c:`tk`, fs:15 }) + (r[3] ? T(322, y + 22, r[3], { a:`start`, c:`tm` }) : ``);
        if (i < 3) s += ln(20, y + 36, 540, y + 36, `dash`); });
      return svg(560, 262, s, `Reacciones de los alcoholes`); })() };

  FIG.reaccFenol = { src:`Tema 27, pág. 16`, cap:`El fenol es más ácido que un alcohol: reacciona incluso con NaOH. El −OH activa mucho el anillo y dirige a orto y para: con Br₂ entran tres bromos (2, 4 y 6) sin catalizador.`,
    svg: (() => { let s = ``;
      s += T(20, 34, `Sal`, { a:`start`, c:`tb` }) + T(250, 34, `C₆H₅OH + NaOH`, { a:`end`, c:`tk`, fs:15 }) + arrow(262, 29, 312) + T(322, 34, `C₆H₅O⁻Na⁺ + H₂O`, { a:`start`, c:`tk`, fs:15 });
      s += ln(20, 56, 540, 56, `dash`);
      s += T(20, 84, `Williamson`, { a:`start`, c:`tb` }) + T(250, 84, `C₆H₅O⁻Na⁺ + CH₃−I`, { a:`end`, c:`tk`, fs:15 }) + arrow(262, 79, 312) + T(322, 84, `C₆H₅−O−CH₃ + NaI`, { a:`start`, c:`tk`, fs:15 }) + T(322, 104, `anisol (un éter)`, { a:`start`, c:`tm` });
      s += ln(20, 120, 540, 120, `dash`);
      s += T(20, 150, `Bromación`, { a:`start`, c:`tb` }) + ring(150, 196, 26, { 0:`OH` }, { len:12, fs:13 }) + T(205, 202, `+ 3 Br₂`, { c:`tk` }) + arrow(240, 196, 300) + ring(370, 196, 26, { 0:`OH`, 1:`Br`, 5:`Br`, 3:`Br` }, { len:12, fs:13 }) + T(430, 186, `2,4,6-tribromofenol ↓`, { a:`start`, c:`tb`, fs:12 }) + T(430, 204, `+ 3 HBr`, { a:`start`, c:`tm` });
      return svg(560, 250, s, `Reacciones de los fenoles`); })() };

  FIG.acidez = { src:`Tema 27 (índice, punto 6) · compl. [2]`, cap:`Escala de pKa: cuanto MÁS BAJO el pKa, MÁS ÁCIDO. El fenol (pKa ≈ 10) es mucho más ácido que el etanol (pKa ≈ 16), porque el ion fenóxido se estabiliza por resonancia con el anillo. Valores aproximados de bibliografía complementaria.`,
    svg: (() => { let s = ``; const X = p => 40 + (p - 3) * 34; const d = [[4.8, `ácido acético`, `var(--t18)`], [10, `fenol`, C], [15.7, `agua`, `var(--t17)`], [16, `etanol`, `var(--t23)`], [18, `alcohol 3°`, `var(--t19)`]];
      s += ln(X(3), 110, X(18.5), 110) + [4, 6, 8, 10, 12, 14, 16, 18].map(p => ln(X(p), 105, X(p), 115) + T(X(p), 132, p, { c:`tm`, fs:11 })).join(``) + T(X(18.5) + 4, 114, `pKa`, { a:`start`, c:`tm` });
      d.forEach((r, i) => { const y = i % 2 ? 160 : 70; s += `<circle cx="${X(r[0])}" cy="110" r="7" style="fill:${r[2]}"/>` + ln(X(r[0]), i % 2 ? 118 : 102, X(r[0]), i % 2 ? 144 : 80, `dash`) + T(X(r[0]), y + (i % 2 ? 6 : 0), r[1], { c:`tb`, fs:12.5 }) + T(X(r[0]), y + (i % 2 ? 22 : -16), `≈ ${r[0]}`, { c:`tm`, fs:11 }); });
      s += `<line x1="${X(18)}" y1="20" x2="${X(4)}" y2="20" class="ar" marker-end="url(#ah)"/>` + T((X(4) + X(18)) / 2, 14, `más ácido`, { c:`tb`, fs:12 });
      s += T(280, 206, `Ác. carboxílico > fenol > agua ≈ alcohol 1° > 2° > 3°`, { c:`tb` });
      return svg(560, 216, s, `Escala de acidez`); })() };

  FIG.tipoAlcohol = { src:`Compl. [2] · relacionado con Tema 27, pág. 9 y 15`, cap:`Se cuenta cuántos carbonos están unidos al carbono que tiene el −OH (como en el Tema 23). Importa porque los primarios se oxidan a aldehído y ácido; los secundarios, a cetona; los terciarios casi no se oxidan.`,
    svg: (() => { let s = ``; const d = [[`Primario (1°)`, `R−CH₂−OH`, `1 C vecino`, `propan-1-ol`], [`Secundario (2°)`, `R₂CH−OH`, `2 C vecinos`, `propan-2-ol`], [`Terciario (3°)`, `R₃C−OH`, `3 C vecinos`, `2-metilpropan-2-ol`]];
      d.forEach((r, i) => { const cx = 95 + i * 185; s += `<rect x="${cx - 82}" y="20" width="164" height="128" rx="8" class="bx" style="stroke:${C}"/>` + T(cx, 46, r[0], { c:`tb` }) + T(cx, 82, r[1], { c:`tk`, fs:17 }) + T(cx, 108, r[2], { c:`tm` }) + T(cx, 132, r[3], { c:`tm`, fs:11.5 }); });
      return svg(560, 160, s, `Alcoholes primarios, secundarios y terciarios`); })() };
})();
