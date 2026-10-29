/* ======================= ILUSTRACIONES: ALQUENOS Y ALQUINOS ======================= */
(() => {
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const arrow = (x1, y, x2) => `<line x1="${x1}" y1="${y}" x2="${x2 - 4}" y2="${y}" class="ar" marker-end="url(#ah)"/>`;
  const hl = (x, y, w, h, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:${col};opacity:.14"/>`;
  const hw = l => 5 + 6 * l.length;
  const bond = (x1, x2, y, n, col) => { const st = col ? ` style="stroke:${col}"` : ``; const off = n === 1 ? [0] : n === 2 ? [-4, 4] : [-6, 0, 6];
    return off.map(o => `<line x1="${x1}" y1="${y + o}" x2="${x2}" y2="${y + o}" class="s"${st}/>`).join(``); };
  /* cadena condensada: labs = etiquetas, bonds = orden de cada enlace, nums = números sobre cada C (o null) */
  const chain = (labs, bonds, x0, dx, y, o = {}) => { let s = ``; const X = i => x0 + i * dx;
    labs.forEach((l, i) => { s += T(X(i), y + 7, l, { c:`tk`, fs:o.fs || 19 }); if (o.nums && o.nums[i] != null) s += T(X(i), y - 22, o.nums[i], { c:`tm`, fs:12 }); });
    bonds.forEach((b, i) => { const col = b > 1 ? (o.col || `var(--t24)`) : null; s += bond(X(i) + hw(labs[i]), X(i + 1) - hw(labs[i + 1]), y, b, col); });
    (o.br || []).forEach(b => { s += ln(X(b.i), y + 13, X(b.i), y + 33) + T(X(b.i), y + 54, b.l, { c:`tk`, fs:17 }); });
    return s; };

  FIG.enlacePi = { src:`Tema 24, pág. 3 y 14`, cap:`El doble enlace: el σ va en línea recta entre los dos carbonos; el π se forma arriba y abajo del plano con los orbitales p sin hibridar. Por eso el π es más débil, está más expuesto y no deja girar la molécula.`,
    svg: (() => { let s = ``;
      const lobe = (x, y, up) => `<ellipse cx="${x}" cy="${up ? y - 38 : y + 38}" rx="17" ry="32" style="fill:var(--t24);opacity:.28;stroke:var(--t24);stroke-width:1.5"/>`;
      s += lobe(230, 130, true) + lobe(330, 130, true) + lobe(230, 130, false) + lobe(330, 130, false);
      s += `<path d="M230 72 Q280 52 330 72" class="dash"/><path d="M230 188 Q280 208 330 188" class="dash"/>`;
      s += ln(230, 130, 330, 130) + ln(230, 130, 180, 100) + ln(230, 130, 180, 160) + ln(330, 130, 380, 100) + ln(330, 130, 380, 160);
      [[174, 96], [174, 164], [386, 96], [386, 164]].forEach(p => s += `<circle cx="${p[0]}" cy="${p[1]}" r="8" class="s" style="fill:var(--surface);stroke-width:1.5"/>`);
      [230, 330].forEach(x => s += `<circle cx="${x}" cy="130" r="13" style="fill:var(--t24)"/>` + T(x, 135, `C`, { c:`tw`, fs:13 }));
      s += T(280, 124, `σ`, { c:`tb`, fs:15 }) + T(280, 46, `π (arriba)`, { c:`tb` }) + T(280, 226, `π (abajo)`, { c:`tb` });
      s += T(100, 50, `orbital p`, { c:`tm` }) + T(100, 66, `sin hibridar`, { c:`tm` }) + `<line x1="140" y1="62" x2="210" y2="80" class="dash"/>`;
      s += T(470, 70, `plano de 120°`, { c:`tm` }) + T(470, 86, `(sp²)`, { c:`tm` }) + T(470, 196, `no gira`, { c:`tb` });
      return svg(560, 240, s, `Enlace sigma y enlace pi del doble enlace`); })() };

  FIG.ejemploPenteno = { src:`Tema 24, pág. 5`, cap:`4-metilpent-2-eno. Se numera desde la izquierda porque así el doble enlace queda en C2 (desde la derecha quedaría en C3). El metilo queda en C4.`,
    svg: svg(560, 200, T(280, 28, `4-metilpent-2-eno · C₆H₁₂`, { c:`tb`, fs:15 }) + hl(108, 80, 180, 32, `var(--t24)`) +
      chain([`CH₃`, `CH`, `CH`, `CH`, `CH₃`], [1, 2, 1, 1], 70, 105, 96, { nums:[1, 2, 3, 4, 5], br:[{ i:3, l:`CH₃` }] }) +
      T(197, 136, `doble enlace en C2`, { c:`tm` }) + T(385 + 44, 150, `metil en C4`, { a:`start`, c:`tm` }), `Ejemplo de nombre de un alqueno`) };

  FIG.dienos = { src:`Tema 24, pág. 8`, cap:`Lo que separa a los dobles enlaces define el tipo de dieno: un enlace sencillo (conjugado), dos o más (aislado) o ninguno, porque comparten el carbono (acumulado).`,
    svg: (() => { let s = ``;
      s += T(20, 40, `Conjugado`, { a:`start`, c:`tb` }) + T(20, 56, `buta-1,3-dieno`, { a:`start`, c:`tm` }) + chain([`CH₂`, `CH`, `CH`, `CH₂`], [2, 1, 2], 220, 90, 46);
      s += T(20, 130, `Aislado`, { a:`start`, c:`tb` }) + T(20, 146, `penta-1,4-dieno`, { a:`start`, c:`tm` }) + chain([`CH₂`, `CH`, `CH₂`, `CH`, `CH₂`], [2, 1, 1, 2], 190, 82, 136);
      s += T(20, 220, `Acumulado`, { a:`start`, c:`tb` }) + T(20, 236, `propadieno (aleno)`, { a:`start`, c:`tm` }) + chain([`CH₂`, `C`, `CH₂`], [2, 2], 250, 90, 226);
      s += T(355, 80, `1 sencillo en medio · muy estable`, { c:`tm` }) + T(354, 170, `2 sencillos · reaccionan por separado`, { c:`tm` }) + T(340, 260, `comparten un C · muy reactivo`, { c:`tm` });
      s += ln(20, 98, 540, 98, `dash`) + ln(20, 188, 540, 188, `dash`);
      return svg(560, 272, s, `Dienos conjugados, aislados y acumulados`); })() };

  FIG.sustitucion = { src:`Tema 24, pág. 9`, cap:`Se cuentan los grupos de carbono (R) unidos al doble enlace. Cuantos más R, más estable es el alqueno.`,
    svg: (() => { let s = ``; const rows = [[`Monosustituido`, `R−CH=CH₂`, `propeno`], [`Disustituido`, `R−CH=CH−R`, `but-2-eno`], [`Trisustituido`, `R₂C=CH−R`, `2-metilbut-2-eno`], [`Tetrasustituido`, `R₂C=CR₂`, `2,3-dimetilbut-2-eno`]];
      rows.forEach((r, i) => { const y = 44 + i * 50; s += `<rect x="20" y="${y - 22}" width="440" height="40" rx="7" class="bx"/>` + `<rect x="20" y="${y - 22}" width="${40 + i * 30}" height="40" rx="7" style="fill:var(--t24);opacity:${.15 + i * .12}"/>`;
        s += T(34, y + 4, r[0], { a:`start`, c:`tb` }) + T(260, y + 5, r[1], { c:`tk`, fs:17 }) + T(450, y + 4, r[2], { a:`end`, c:`tm` }); });
      s += `<line x1="505" y1="30" x2="505" y2="200" class="ar" marker-end="url(#ah)"/>` + T(505, 222, `más estable`, { c:`tb` });
      return svg(560, 232, s, `Grado de sustitución y estabilidad`); })() };

  FIG.cisTrans = { src:`Tema 24, pág. 9–10`, cap:`But-2-eno. Como el doble enlace no gira, los CH₃ quedan fijos: del mismo lado (cis) o cruzados (trans). Son compuestos distintos.`,
    svg: (() => { let s = ``;
      const mol = (cx, trans) => { let m = ``; const a = cx - 34, b = cx + 34, y = 120;
        m += ln(a, y - 4, b, y - 4) + ln(a, y + 4, b, y + 4);
        m += ln(a, y, a - 34, y - 46) + ln(a, y, a - 34, y + 46) + ln(b, y, b + 34, y - 46) + ln(b, y, b + 34, y + 46);
        m += `<circle cx="${a}" cy="${y}" r="12" style="fill:var(--t24)"/>` + T(a, y + 5, `C`, { c:`tw` }) + `<circle cx="${b}" cy="${y}" r="12" style="fill:var(--t24)"/>` + T(b, y + 5, `C`, { c:`tw` });
        const me = (x, yy) => hl(x - 26, yy - 18, 52, 28, `var(--t15)`) + T(x, yy + 3, `CH₃`, { c:`tk`, fs:17 });
        m += me(a - 46, y - 58) + T(a - 46, y + 70, `H`, { c:`tk` });
        m += trans ? T(b + 46, y - 55, `H`, { c:`tk` }) + me(b + 46, y + 64) : me(b + 46, y - 58) + T(b + 46, y + 70, `H`, { c:`tk` });
        return m; };
      s += mol(140, false) + mol(420, true) + ln(280, 30, 280, 230, `dash`);
      s += T(140, 30, `cis-but-2-eno (Z)`, { c:`tb`, fs:15 }) + T(140, 222, `mismo lado · polar · menos estable`, { c:`tm` });
      s += T(420, 30, `trans-but-2-eno (E)`, { c:`tb`, fs:15 }) + T(420, 222, `lados opuestos · más estable`, { c:`tm` });
      return svg(560, 236, s, `Isómeros cis y trans del but-2-eno`); })() };

  FIG.adicionAlqueno = { src:`Tema 24, pág. 11`, cap:`En la adición se rompe el enlace π y cada carbono del doble enlace recibe un átomo o grupo nuevo.`,
    svg: (() => { let s = ``; const rows = [[`CH₂=CH₂ + H₂`, `Pd/C`, `CH₃−CH₃`, `hidrogenación → alcano`], [`CH₃−CH=CH₂ + Br₂`, ``, `CH₃−CHBr−CH₂Br`, `halogenación → dibromuro`], [`R−CH=CH₂ + H₂O`, `H⁺, calor`, `R−CH(OH)−CH₃`, `hidratación → alcohol`]];
      rows.forEach((r, i) => { const y = 46 + i * 66; s += T(130, y, r[0], { c:`tk`, fs:16 }) + arrow(240, y - 5, 310) + T(275, y - 14, r[1], { c:`tm`, fs:11 }) + T(420, y, r[2], { c:`tk`, fs:16 }) + T(280, y + 24, r[3], { c:`tm` });
        if (i < 2) s += ln(30, y + 40, 530, y + 40, `dash`); });
      return svg(560, 210, s, `Reacciones de adición de los alquenos`); })() };

  FIG.polimero = { src:`Tema 24, pág. 12`, cap:`Polimerización por adición: cada monómero abre su doble enlace y se une al siguiente. La cadena final solo tiene enlaces sencillos.`,
    svg: (() => { let s = ``;
      [0, 1, 2].forEach(i => s += chain([`CH₂`, `CH₂`], [2], 50 + i * 150, 70, 50, { fs:16 }));
      s += T(290 + 160, 56, `…`, { c:`tk` }) + T(280, 96, `muchos monómeros de eteno`, { c:`tm` });
      s += `<line x1="280" y1="106" x2="280" y2="140" class="ar" marker-end="url(#ah)"/>` + T(292, 128, `se abren los dobles enlaces`, { a:`start`, c:`tm`, fs:11 });
      s += T(28, 186, `−`, { c:`tk` }) + chain([`CH₂`, `CH₂`, `CH₂`, `CH₂`, `CH₂`, `CH₂`], [1, 1, 1, 1, 1], 70, 84, 180, { fs:16 }) + T(532, 186, `−`, { c:`tk` });
      s += T(280, 230, `polietileno: −[CH₂−CH₂]ₙ−`, { c:`tb`, fs:15 });
      return svg(560, 246, s, `Polimerización del eteno`); })() };

  FIG.hidrogenacion = { src:`Tema 24, pág. 13`, cap:`El ácido oleico (cis) tiene un "codo" en el doble enlace y por eso el aceite es líquido. Al hidrogenarlo con Ni queda recto y saturado (esteárico). En la hidrogenación parcial puede quedar recto pero con el doble enlace en trans (elaídico): una grasa trans.`,
    svg: (() => { let s = ``;
      const zig = (pts, col) => `<path d="${pts.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1].toFixed(1)).join(``)}" class="s" style="stroke-width:2.5${col ? `;stroke:${col}` : ``}"/>`;
      const straight = (x, y, n) => Array.from({ length:n }, (_, i) => [x + i * 14, y + (i % 2 ? 9 : 0)]);
      // oleico: dos tramos con codo
      const a = straight(30, 70, 9), last = a[a.length - 1];
      const b = Array.from({ length:9 }, (_, i) => [last[0] + 10 + i * 10, last[1] + 10 + i * 11 - (i % 2 ? 0 : 6)]);
      s += zig(a) + zig(b) + ln(last[0], last[1], b[0][0], b[0][1], `s`) + `<line x1="${last[0] + 3}" y1="${last[1] + 6}" x2="${b[0][0] + 3}" y2="${b[0][1] + 6}" class="s" style="stroke:var(--t24);stroke-width:2.5"/>`;
      s += `<circle cx="${last[0] + 5}" cy="${last[1] + 5}" r="15" style="fill:none;stroke:var(--t24);stroke-width:1.5;stroke-dasharray:3 3"/>`;
      s += T(110, 36, `Ácido oleico 18:1 cis`, { c:`tb` }) + T(110, 200, `aceite líquido`, { c:`tm` });
      s += arrow(235, 110, 305) + T(270, 98, `H₂ / Ni`, { c:`tb` });
      s += zig(straight(320, 60, 16)) + T(430, 36, `Ácido esteárico 18:0`, { c:`tb` }) + T(430, 92, `saturado · grasa sólida`, { c:`tm` });
      const tr = straight(320, 140, 16); s += zig(tr) + `<line x1="${tr[7][0]}" y1="${tr[7][1] - 5}" x2="${tr[8][0]}" y2="${tr[8][1] - 5}" class="s" style="stroke:var(--t24);stroke-width:2.5"/>`;
      s += T(430, 128, `"pero" también: ácido elaídico 18:1 trans`, { c:`tb`, fs:12 }) + T(430, 176, `recto con doble enlace trans · grasa trans`, { c:`tm` });
      return svg(560, 214, s, `Hidrogenación del ácido oleico`); })() };

  FIG.cilindroPi = { src:`Tema 25, pág. 2–3`, cap:`El triple enlace: un σ en el eje y dos π perpendiculares que se funden en una nube con forma de cilindro alrededor de los carbonos. Todo queda en línea recta (180°).`,
    svg: (() => { let s = ``;
      s += `<rect x="190" y="78" width="180" height="84" rx="42" style="fill:var(--t25);opacity:.2;stroke:var(--t25);stroke-width:1.5"/>`;
      s += `<ellipse cx="280" cy="120" rx="88" ry="20" style="fill:none;stroke:var(--t25);stroke-width:1.2;stroke-dasharray:4 3"/>`;
      s += ln(110, 120, 230, 120) + ln(230, 120, 330, 120) + ln(330, 120, 450, 120);
      [[100, 120], [460, 120]].forEach(p => s += `<circle cx="${p[0]}" cy="${p[1]}" r="10" class="s" style="fill:var(--surface);stroke-width:1.5"/>` + T(p[0], p[1] + 5, `H`, { c:`tb`, fs:12 }));
      [230, 330].forEach(x => s += `<circle cx="${x}" cy="120" r="14" style="fill:var(--t25)"/>` + T(x, 125, `C`, { c:`tw`, fs:13 }));
      s += T(280, 112, `σ`, { c:`tb`, fs:15 }) + T(280, 62, `nube π cilíndrica (2 π)`, { c:`tb` });
      s += `<path d="M86 160 Q280 200 474 160" class="dash"/>` + T(280, 206, `180° · lineal · sp`, { c:`tb` }) + T(280, 224, `etino (acetileno) H−C≡C−H`, { c:`tm` });
      return svg(560, 236, s, `Triple enlace y cilindro de densidad electrónica`); })() };

  FIG.ejemploPentino = { src:`Tema 25, pág. 4`, cap:`4-metilpent-2-ino. Se numera desde la derecha porque así el triple enlace queda en C2. El triple manda aunque la rama quede con un número más alto.`,
    svg: svg(560, 200, T(280, 28, `4-metilpent-2-ino · C₆H₁₀`, { c:`tb`, fs:15 }) + hl(213, 80, 180, 32, `var(--t25)`) +
      chain([`CH₃`, `CH`, `C`, `C`, `CH₃`], [1, 1, 3, 1], 70, 105, 96, { nums:[5, 4, 3, 2, 1], col:`var(--t25)`, br:[{ i:1, l:`CH₃` }] }) +
      T(302, 140, `triple enlace en C2`, { c:`tm` }) + T(175, 178, `metil en C4`, { c:`tm` }) + `<line x1="500" y1="56" x2="440" y2="56" class="ar" marker-end="url(#ah)"/>` + T(470, 48, `se numera desde aquí`, { c:`tm`, fs:11 }), `Ejemplo de nombre de un alquino`) };

  FIG.alquenino = { src:`Tema 25, pág. 5`, cap:`Pent-1-en-4-ino. Desde cualquier extremo, la primera insaturación queda en C1: hay empate. Entonces el doble enlace recibe el número más bajo. El sufijo -eno va antes que -ino.`,
    svg: svg(560, 190, T(280, 28, `pent-1-en-4-ino`, { c:`tb`, fs:15 }) +
      chain([`CH₂`, `CH`, `CH₂`, `C`, `CH`], [2, 1, 1, 3], 70, 105, 96, { nums:[1, 2, 3, 4, 5], col:`var(--t25)` }) +
      T(122, 136, `doble en C1`, { c:`tm` }) + T(437, 136, `triple en C4`, { c:`tm` }) + T(280, 170, `empate {1} frente a {1} → gana el doble enlace`, { c:`tb` }), `Ejemplo de alquenino`) };

  FIG.terminalInterno = { src:`Tema 25, pág. 6 y 9`, cap:`El alquino terminal tiene un H unido al carbono del triple enlace: ese H es ácido. El interno tiene carbono a ambos lados y no lo tiene.`,
    svg: (() => { let s = ``;
      s += T(20, 40, `Terminal`, { a:`start`, c:`tb` }) + T(20, 56, `propino`, { a:`start`, c:`tm` }) + hl(196, 70, 36, 34, `var(--t15)`) + chain([`H`, `C`, `C`, `CH₃`], [1, 3, 1], 214, 90, 86, { col:`var(--t25)` });
      s += T(214, 130, `H ácido`, { c:`tb`, fs:12 });
      s += ln(20, 150, 540, 150, `dash`);
      s += T(20, 180, `Interno`, { a:`start`, c:`tb` }) + T(20, 196, `but-2-ino`, { a:`start`, c:`tm` }) + chain([`CH₃`, `C`, `C`, `CH₃`], [1, 3, 1], 214, 90, 206, { col:`var(--t25)` });
      s += T(350, 248, `sin H en el triple enlace`, { c:`tm` });
      return svg(560, 260, s, `Alquino terminal e interno`); })() };

  FIG.reaccAlquino = { src:`Tema 25, pág. 9`, cap:`Reacciones de los alquinos del material, con el propino como ejemplo.`,
    svg: (() => { let s = ``; const rows = [[`CH₃−C≡CH + 2 H₂`, `Pt, Pd o Ni`, `CH₃−CH₂−CH₃`, `hidrogenación completa → alcano (2 π, 2 H₂)`], [`CH₃−C≡CH + H₂O`, `H₂SO₄, HgSO₄`, `CH₃−CO−CH₃`, `hidratación → enol → cetona (propanona)`], [`CH₃−C≡C−H + NaH`, ``, `CH₃−C≡C:⁻ Na⁺ + H₂`, `acidez del alquino terminal`]];
      rows.forEach((r, i) => { const y = 46 + i * 66; s += T(125, y, r[0], { c:`tk`, fs:15 }) + arrow(230, y - 5, 300) + T(265, y - 14, r[1], { c:`tm`, fs:10.5 }) + T(420, y, r[2], { c:`tk`, fs:15 }) + T(280, y + 24, r[3], { c:`tm` });
        if (i < 2) s += ln(30, y + 40, 530, y + 40, `dash`); });
      return svg(560, 210, s, `Reacciones de los alquinos`); })() };

  FIG.isomerosAlquino = { src:`Tema 25, pág. 10`, cap:`Los tres tipos de isomería estructural: cambia la posición del triple enlace, la forma de la cadena o la familia química, pero la fórmula molecular es la misma.`,
    svg: (() => { let s = ``; const rows = [[`Posición · C₄H₆`, `HC≡C−CH₂−CH₃`, `CH₃−C≡C−CH₃`, `but-1-ino`, `but-2-ino`], [`Cadena · C₅H₈`, `HC≡C−CH₂−CH₂−CH₃`, `HC≡C−CH(CH₃)−CH₃`, `pent-1-ino`, `3-metilbut-1-ino`], [`Función · C₄H₆`, `HC≡C−CH₂−CH₃`, `CH₂=CH−CH=CH₂`, `but-1-ino (alquino)`, `buta-1,3-dieno (dieno)`]];
      rows.forEach((r, i) => { const y = 40 + i * 78; s += T(280, y, r[0], { c:`tb` }) + T(145, y + 30, r[1], { c:`tk`, fs:15 }) + T(415, y + 30, r[2], { c:`tk`, fs:15 }) + T(145, y + 50, r[3], { c:`tm` }) + T(415, y + 50, r[4], { c:`tm` }) + T(280, y + 34, `↔`, { c:`tb`, fs:16 });
        if (i < 2) s += ln(30, y + 64, 530, y + 64, `dash`); });
      return svg(560, 250, s, `Isomería estructural de los alquinos`); })() };

  FIG.barras = { src:`Tema 25, pág. 11–15`, cap:`El truco de las cercas: una tabla, dos o tres. Las vocales a, e, i siguen el mismo orden que 1, 2 y 3 enlaces.`,
    svg: (() => { let s = ``; const fam = [[`alcANO`, `C−C`, 1, `var(--t23)`], [`alquENO`, `C=C`, 2, `var(--t24)`], [`alquINO`, `C≡C`, 3, `var(--t25)`]];
      fam.forEach((f, i) => { const cx = 95 + i * 185; s += ln(cx - 60, 50, cx - 60, 140) + ln(cx + 60, 50, cx + 60, 140);
        const off = f[2] === 1 ? [95] : f[2] === 2 ? [80, 110] : [70, 95, 120];
        off.forEach(y => s += `<rect x="${cx - 62}" y="${y - 6}" width="124" height="12" rx="3" style="fill:${f[3]}"/>`);
        s += T(cx, 172, f[0], { c:`tb`, fs:16 }) + T(cx, 194, f[1] + ` · ${f[2]} ${f[2] === 1 ? `raya` : `rayas`}`, { c:`tm` }); });
      return svg(560, 210, s, `Truco visual de ano, eno e ino`); })() };
})();
