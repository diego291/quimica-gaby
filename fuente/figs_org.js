/* ======================= ILUSTRACIONES: HIDROCARBUROS Y ALCANOS ======================= */
(() => {
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const box = (x, y, w, h, txt, col, fs = 13) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" class="bx" style="stroke:${col || `var(--line2)`}"/>` + T(x + w / 2, y + h / 2 + fs * .36, txt, { c: `tb`, fs });
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const elbow = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} H${(x1 + x2) / 2} V${y2} H${x2 - 4}" class="ar" marker-end="url(#ah)"/>`;
  const poly = (cx, cy, r, n, rot = -90) => { let p = ``; for (let i = 0; i < n; i++){ const a = (rot + i * 360 / n) * Math.PI / 180; p += (i ? `L` : `M`) + (cx + r * Math.cos(a)).toFixed(1) + ` ` + (cy + r * Math.sin(a)).toFixed(1); } return `<path d="${p}Z" class="s"/>`; };
  const zig = (pts) => `<path d="${pts.map((p, i) => (i ? `L` : `M`) + p[0] + ` ` + p[1]).join(``)}" class="s" style="stroke-width:2.5"/>`;

  FIG.clasifHC = { src:`Tema 22, pág. 5`, cap:`Árbol de clasificación de los hidrocarburos, como en el esquema de la pág. 5. Los Temas 22 y 23 se enfocan en la rama de los alifáticos.`,
    svg: svg(560, 300,
      box(8, 132, 112, 34, `HIDROCARBUROS`, `var(--ink)`, 12) +
      elbow(120, 149, 160, 92) + elbow(120, 149, 160, 238) +
      box(160, 75, 100, 34, `Alifáticos`, `var(--t22)`) + box(160, 221, 100, 34, `Aromáticos`, `var(--t20)`) +
      elbow(260, 92, 300, 46) + elbow(260, 92, 300, 140) +
      box(300, 29, 100, 34, `Acíclicos`, `var(--t22)`) + box(300, 123, 100, 34, `Alicíclicos`, `var(--t22)`) +
      T(410, 20, `Alcanos  CH₃−CH₃`, { a:`start`, c:`tm`, fs:12 }) + T(410, 42, `Alquenos  CH₂=CH₂`, { a:`start`, c:`tm`, fs:12 }) + T(410, 64, `Alquinos  HC≡CH`, { a:`start`, c:`tm`, fs:12 }) +
      T(410, 120, `Cicloalcanos`, { a:`start`, c:`tm`, fs:12 }) + T(410, 140, `Cicloalquenos`, { a:`start`, c:`tm`, fs:12 }) + T(410, 160, `Cicloalquinos`, { a:`start`, c:`tm`, fs:12 }) +
      poly(520, 136, 16, 6) +
      elbow(260, 238, 300, 210) + elbow(260, 238, 300, 270) +
      box(300, 193, 110, 34, `Monocíclicos`, `var(--t20)`, 12) + box(300, 253, 110, 34, `Policíclicos`, `var(--t20)`, 12) +
      poly(445, 210, 15, 6, -90) + `<circle cx="445" cy="210" r="8" class="s"/>` + T(470, 214, `benceno`, { a:`start`, c:`tm`, fs:12 }) +
      poly(445, 270, 15, 6, -90) + poly(471, 270, 15, 6, -90) + T(495, 274, `naftaleno`, { a:`start`, c:`tm`, fs:12 }),
      `Clasificación de los hidrocarburos`) };

  FIG.representaciones = { src:`Tema 22, pág. 2, 3 y 6`, cap:`El mismo butano escrito de cuatro maneras. En la lineangular cada vértice y cada extremo es un carbono; los hidrógenos no se dibujan.`,
    svg: (() => { let s = ``;
      s += T(70, 24, `Molecular`, { c:`tb` }) + T(70, 76, `C₄H₁₀`, { c:`tk`, fs:24 });
      s += T(370, 24, `Semidesarrollada`, { c:`tb` }) + T(370, 76, `CH₃−CH₂−CH₂−CH₃`, { c:`tk`, fs:20 });
      s += T(150, 128, `Desarrollada`, { c:`tb` });
      const xs = [60, 120, 180, 240];
      xs.forEach(x => { s += T(x, 196, `C`, { c:`tk`, fs:18 }) + ln(x, 172, x, 182) + ln(x, 202, x, 212) + T(x, 168, `H`, { c:`tm`, fs:14 }) + T(x, 228, `H`, { c:`tm`, fs:14 }); });
      for (let i = 0; i < 3; i++) s += ln(xs[i] + 10, 190, xs[i + 1] - 10, 190);
      s += ln(30, 190, 50, 190) + T(22, 195, `H`, { c:`tm`, fs:14 }) + ln(250, 190, 270, 190) + T(279, 195, `H`, { c:`tm`, fs:14 });
      s += T(440, 128, `Lineangular`, { c:`tb` }) + zig([[370, 210], [415, 170], [460, 210], [505, 170]]);
      [[370, 210], [415, 170], [460, 210], [505, 170]].forEach((p, i) => s += `<circle cx="${p[0]}" cy="${p[1]}" r="4" style="fill:var(--t22)"/>` + T(p[0], p[1] + (i % 2 ? -10 : 22), `C${i + 1}`, { c:`tm`, fs:11 }));
      s += ln(300, 108, 300, 240, `dash`) + ln(20, 104, 540, 104, `dash`);
      return svg(560, 245, s, `Cuatro representaciones del butano`); })() };

  FIG.partesNombre = { src:`Tema 22, pág. 9–11`, cap:`El nombre se arma como un rompecabezas: prefijos (ramas con su número), raíz (cuántos carbonos) y sufijo (tipo de enlace) con su localizador.`,
    svg: (() => { const parts = [[`4-etil-2-metil`, `var(--t16)`, `Prefijos: ramas`, `en orden alfabético`], [`hex`, `var(--t22)`, `Raíz: 6 C`, `cadena principal`], [`-2-`, `var(--t20)`, `Localizador`, `doble enlace en C2`], [`eno`, `var(--t15)`, `Sufijo: C=C`, `-ano · -eno · -ino`]];
      const w = [200, 70, 64, 70]; let x = 40, s = ``;
      parts.forEach((p, i) => { s += `<rect x="${x}" y="40" width="${w[i]}" height="52" rx="8" style="fill:${p[1]};opacity:.16"/><rect x="${x}" y="40" width="${w[i]}" height="52" rx="8" class="s" style="stroke:${p[1]};stroke-width:2"/>` + T(x + w[i] / 2, 74, p[0], { c:`tk`, fs:20 });
        const ty = i % 2 ? 150 : 128; s += ln(x + w[i] / 2, 94, x + w[i] / 2, ty - 16, `dash`) + T(x + w[i] / 2, ty, p[2], { c:`tb`, fs:12.5 }) + T(x + w[i] / 2, ty + 16, p[3], { c:`tm`, fs:11.5 }); x += w[i] + 8; });
      s += T(280, 24, `Prefijo + Raíz + Sufijo`, { c:`tb` }) + T(280, 196, `4-etil-2-metilhex-2-eno · C₉H₁₈`, { c:`tm` });
      return svg(560, 206, s, `Partes de un nombre IUPAC`); })() };

  FIG.ejemploAlqueno = { src:`Tema 22, pág. 10–11`, cap:`Cadena principal numerada desde el extremo más cercano al doble enlace. Las ramas se nombran con el número del carbono donde están.`,
    svg: (() => { const X = i => 50 + i * 82; let s = ``;
      const lab = [`CH₃`, `C`, `CH`, `CH`, `CH₂`, `CH₃`];
      lab.forEach((l, i) => s += T(X(i), 100, l, { c:`tk`, fs:19 }) + T(X(i), 70, i + 1, { c:`tm`, fs:12 }));
      for (let i = 0; i < 5; i++){ const x1 = X(i) + 22, x2 = X(i + 1) - 22; s += i === 1 ? ln(x1, 90, x2, 90) + ln(x1, 98, x2, 98) : ln(x1, 94, x2, 94); }
      s += `<rect x="${X(1) - 24}" y="76" width="${X(2) - X(1) + 48}" height="32" rx="6" style="fill:var(--t15);opacity:.12"/>`;
      s += ln(X(1), 108, X(1), 130) + T(X(1), 152, `CH₃`, { c:`tk`, fs:17 }) + T(X(1), 176, `metil en C2`, { c:`tm`, fs:12 });
      s += ln(X(3), 108, X(3), 130) + T(X(3), 152, `CH₂`, { c:`tk`, fs:17 }) + ln(X(3), 158, X(3), 172) + T(X(3), 192, `CH₃`, { c:`tk`, fs:17 }) + T(X(3) + 44, 176, `etil en C4`, { a:`start`, c:`tm`, fs:12 });
      s += T(X(1) + 41, 128, `doble en C2`, { c:`tm`, fs:12 });
      s += T(280, 30, `4-etil-2-metilhex-2-eno`, { c:`tb`, fs:15 });
      return svg(560, 205, s, `Ejemplo de nomenclatura de un alqueno`); })() };

  FIG.hibridacion = { src:`Tema 22, pág. 12–15 · Tema 23, pág. 3`, cap:`Un enlace sencillo da sp³ y forma de tetraedro; un doble, sp² y forma plana; un triple, sp y forma de línea. El ángulo se abre: 109.5° → 120° → 180°.`,
    svg: (() => { let s = ``;
      const C = (x, y, col) => `<circle cx="${x}" cy="${y}" r="13" style="fill:${col}"/>` + T(x, y + 5, `C`, { c:`tw`, fs:13 });
      const H = (x, y) => `<circle cx="${x}" cy="${y}" r="8" class="s" style="fill:var(--surface);stroke-width:1.5"/>`;
      // sp3
      s += ln(95, 105, 95, 48) + ln(95, 105, 45, 135) + ln(95, 105, 145, 135) + `<line x1="95" y1="105" x2="112" y2="150" class="s" style="stroke-dasharray:4 3"/>`;
      s += H(95, 42) + H(40, 138) + H(150, 138) + H(114, 156) + C(95, 105, `var(--t22)`);
      s += `<path d="M78 92 A22 22 0 0 1 112 92" class="dash"/>` + T(122, 84, `109.5°`, { a:`start`, c:`tm`, fs:11 });
      s += T(95, 190, `Alcano · sp³`, { c:`tb` }) + T(95, 208, `tetraédrica`, { c:`tm`, fs:12 }) + T(95, 224, `C−C sencillo (σ)`, { c:`tm`, fs:12 });
      // sp2
      s += ln(255, 105, 225, 60) + ln(255, 105, 225, 150) + ln(255, 101, 315, 101) + ln(255, 109, 315, 109) + ln(315, 105, 345, 60) + ln(315, 105, 345, 150);
      s += H(221, 55) + H(221, 155) + H(349, 55) + H(349, 155) + C(255, 105, `var(--t20)`) + C(315, 105, `var(--t20)`);
      s += `<path d="M243 86 A22 22 0 0 0 243 124" class="dash"/>` + T(222, 109, `120°`, { c:`tm`, fs:11 });
      s += T(285, 190, `Alqueno · sp²`, { c:`tb` }) + T(285, 208, `trigonal plana`, { c:`tm`, fs:12 }) + T(285, 224, `C=C: 1σ + 1π`, { c:`tm`, fs:12 });
      // sp
      s += ln(400, 105, 425, 105) + ln(445, 98, 495, 98) + ln(445, 105, 495, 105) + ln(445, 112, 495, 112) + ln(515, 105, 540, 105);
      s += H(394, 105) + H(546, 105) + C(435, 105, `var(--t15)`) + C(505, 105, `var(--t15)`);
      s += T(470, 80, `180°`, { c:`tm`, fs:11 });
      s += T(470, 190, `Alquino · sp`, { c:`tb` }) + T(470, 208, `lineal`, { c:`tm`, fs:12 }) + T(470, 224, `C≡C: 1σ + 2π`, { c:`tm`, fs:12 });
      s += ln(188, 30, 188, 230, `dash`) + ln(380, 30, 380, 230, `dash`);
      return svg(560, 236, s, `Hibridación y geometría del carbono`); })() };

  const newman = (cx, cy, front, back, lab) => { let s = `<circle cx="${cx}" cy="${cy}" r="30" class="s" style="fill:var(--surface)"/>`;
    back.forEach(a => { const r = a * Math.PI / 180; s += ln(cx + 30 * Math.cos(r), cy + 30 * Math.sin(r), cx + 52 * Math.cos(r), cy + 52 * Math.sin(r)) + T(cx + 62 * Math.cos(r), cy + 62 * Math.sin(r) + 4, lab[1], { c:`tm`, fs:12 }); });
    front.forEach(a => { const r = a * Math.PI / 180; s += ln(cx, cy, cx + 48 * Math.cos(r), cy + 48 * Math.sin(r)) + T(cx + 58 * Math.cos(r), cy + 58 * Math.sin(r) + 4, lab[0], { c:`tb`, fs:12 }); });
    return s + `<circle cx="${cx}" cy="${cy}" r="3" style="fill:var(--ink)"/>`; };
  FIG.newman = { src:`Tema 23, pág. 5`, cap:`Proyección de Newman: se mira el enlace C−C de frente. El carbono de adelante es el punto central; el de atrás, el círculo. Alternada: los H se intercalan (estable). Eclipsada: quedan enfrentados (inestable).`,
    svg: svg(560, 230,
      newman(140, 105, [-90, 30, 150], [-30, 90, 210], [`H`, `H`]) + T(140, 200, `Alternada (60°)`, { c:`tb` }) + T(140, 218, `más estable`, { c:`tm` }) +
      newman(420, 105, [-90, 30, 150], [-80, 40, 160], [`H`, `H`]) + T(420, 200, `Eclipsada (0°)`, { c:`tb` }) + T(420, 218, `menos estable: los enlaces chocan`, { c:`tm` }) +
      `<path d="M240 105 h80" class="ar" marker-end="url(#ah)"/><path d="M320 115 h-80" class="ar" marker-end="url(#ah)"/>` + T(280, 96, `girar 60°`, { c:`tm`, fs:12 }) + T(280, 134, `sin romper enlaces`, { c:`tm`, fs:12 }),
      `Conformaciones del etano en proyección de Newman`) };

  FIG.butanoConf = { src:`Tema 23, pág. 6`, cap:`Conformaciones del butano vistas a lo largo del enlace C2−C3. Cuanto más lejos están los dos CH₃, más estable es la conformación.`,
    svg: (() => { let s = ``; const data = [[`Anti`, 180, `la más estable`, 4], [`Gauche`, 60, `estable`, 3], [`Eclipsada`, 120, `tensión`, 2], [`Tot. eclipsada`, 0, `la menos estable`, 1]];
      data.forEach((d, i) => { const cx = 72 + i * 138, cy = 90;
        s += `<circle cx="${cx}" cy="${cy}" r="26" class="s" style="fill:var(--surface)"/><circle cx="${cx}" cy="${cy}" r="3" style="fill:var(--ink)"/>`;
        const fa = -90, ba = -90 + d[1] + (d[1] === 0 ? 8 : 0);
        const fr = fa * Math.PI / 180, br = ba * Math.PI / 180;
        s += ln(cx, cy, cx + 42 * Math.cos(fr), cy + 42 * Math.sin(fr)) + `<circle cx="${(cx + 50 * Math.cos(fr)).toFixed(1)}" cy="${(cy + 50 * Math.sin(fr)).toFixed(1)}" r="9" style="fill:var(--t23)"/>`;
        s += ln(cx + 26 * Math.cos(br), cy + 26 * Math.sin(br), cx + 42 * Math.cos(br), cy + 42 * Math.sin(br)) + `<circle cx="${(cx + 50 * Math.cos(br)).toFixed(1)}" cy="${(cy + 50 * Math.sin(br)).toFixed(1)}" r="9" style="fill:var(--t23);opacity:.55"/>`;
        s += T(cx, 172, d[0], { c:`tb`, fs:13 }) + T(cx, 189, `${d[1]}°`, { c:`tk`, fs:14 }) + T(cx, 206, d[2], { c:`tm`, fs:11.5 });
        s += `<rect x="${cx - 30}" y="214" width="60" height="8" rx="4" style="fill:var(--line)"/><rect x="${cx - 30}" y="214" width="${d[3] * 15}" height="8" rx="4" style="fill:var(--t23)"/>`; });
      s += `<circle cx="34" cy="20" r="7" style="fill:var(--t23)"/>` + T(46, 24, `CH₃ de adelante`, { a:`start`, c:`tm`, fs:11 }) + `<circle cx="164" cy="20" r="7" style="fill:var(--t23);opacity:.55"/>` + T(176, 24, `CH₃ de atrás`, { a:`start`, c:`tm`, fs:11 }) + T(540, 24, `barra = estabilidad`, { a:`end`, c:`tm`, fs:11 });
      return svg(560, 230, s, `Conformaciones del butano`); })() };

  FIG.sillaBote = { src:`Tema 23, pág. 7`, cap:`El ciclohexano no es plano: se pliega. La silla tiene los ángulos ideales (109°) y es la más estable. En el bote, dos H de las "proas" (mástil) quedan muy cerca y se repelen.`,
    svg: svg(560, 210,
      `<path d="M40 110 L95 85 L160 100 L215 75 L195 120 L130 105 Z" class="s" style="stroke-width:2.5;fill:var(--t23);fill-opacity:.08"/>` +
      ln(95, 85, 95, 55) + T(95, 50, `H`, { c:`tm`, fs:12 }) + ln(130, 105, 130, 135) + T(130, 148, `H`, { c:`tm`, fs:12 }) + ln(215, 75, 238, 66) + T(246, 68, `H`, { c:`tm`, fs:12 }) +
      T(128, 178, `Silla`, { c:`tb` }) + T(128, 196, `más estable · 109°`, { c:`tm` }) +
      `<path d="M330 110 L370 130 L450 130 L490 110 L455 92 L365 92 Z" class="s" style="stroke-width:2.5;fill:var(--t15);fill-opacity:.06"/>` +
      ln(330, 110, 345, 62) + ln(490, 110, 475, 62) + `<circle cx="345" cy="56" r="10" class="s" style="stroke:var(--t15)"/><circle cx="475" cy="56" r="10" class="s" style="stroke:var(--t15)"/>` + T(345, 60, `H`, { c:`tb`, fs:12 }) + T(475, 60, `H`, { c:`tb`, fs:12 }) +
      `<path d="M358 50 Q410 28 462 50" class="dash" style="stroke:var(--t15)"/>` + T(410, 30, `H del "mástil" chocan`, { c:`tm`, fs:12 }) +
      T(410, 178, `Bote`, { c:`tb` }) + T(410, 196, `menos estable`, { c:`tm` }),
      `Conformaciones silla y bote del ciclohexano`) };

  FIG.ejemploAlcano = { src:`Tema 23, pág. 8–9`, cap:`3-etil-2-metilhexano. La cadena principal (resaltada) tiene 6 carbonos y se numera desde la izquierda porque así las ramas quedan en 2 y 3.`,
    svg: (() => { const X = i => 50 + i * 85; let s = `<rect x="22" y="78" width="${X(5) - X(0) + 56}" height="34" rx="8" style="fill:var(--t23);opacity:.13"/>`;
      const lab = [`CH₃`, `CH`, `CH`, `CH₂`, `CH₂`, `CH₃`];
      lab.forEach((l, i) => s += T(X(i), 101, l, { c:`tk`, fs:19 }) + T(X(i), 68, i + 1, { c:`tm`, fs:12 }));
      for (let i = 0; i < 5; i++) s += ln(X(i) + 22, 95, X(i + 1) - 22, 95);
      s += ln(X(1), 110, X(1), 130) + T(X(1), 152, `CH₃`, { c:`tk`, fs:17 }) + T(X(1), 174, `metil (C2)`, { c:`tm`, fs:12 });
      s += ln(X(2), 110, X(2), 130) + T(X(2), 152, `CH₂`, { c:`tk`, fs:17 }) + ln(X(2), 158, X(2), 172) + T(X(2), 192, `CH₃`, { c:`tk`, fs:17 }) + T(X(2) + 32, 174, `etil (C3)`, { a:`start`, c:`tm`, fs:12 });
      s += T(280, 30, `3-etil-2-metilhexano · C₉H₂₀`, { c:`tb`, fs:15 });
      return svg(560, 205, s, `Ejemplo de nomenclatura de un alcano`); })() };

  FIG.cicloalcanos = { src:`Tema 23, pág. 10 y 16`, cap:`Los cicloalcanos más comunes en notación lineangular y su ángulo C−C. Cuanto más lejos de 109.5°, más tensión tiene el anillo.`,
    svg: (() => { let s = ``; const d = [[3, `ciclopropano`, `C₃H₆`, `60°`], [4, `ciclobutano`, `C₄H₈`, `88°`], [5, `ciclopentano`, `C₅H₁₀`, `108°`], [6, `ciclohexano`, `C₆H₁₂`, `109.5°`]];
      d.forEach((c, i) => { const cx = 75 + i * 137; s += poly(cx, 75, 38, c[0], c[0] === 4 ? -45 : -90).replace(`class="s"`, `class="s" style="stroke-width:2.5"`) + T(cx, 145, c[1], { c:`tb`, fs:13 }) + T(cx, 163, c[2], { c:`tm` }) + T(cx, 183, c[3], { c:`tk`, fs:15 }); });
      s += `<rect x="40" y="196" width="480" height="8" rx="4" style="fill:var(--line)"/>` + d.map((c, i) => `<circle cx="${75 + i * 137}" cy="200" r="6" style="fill:${i < 2 ? `var(--t15)` : `var(--t18)`}"/>`).join(``);
      return svg(560, 214, s, `Cicloalcanos y sus ángulos`); })() };

  FIG.tiposCarbono = { src:`Tema 23, pág. 13`, cap:`2,2,4-trimetilpentano (isooctano) con cada carbono clasificado. Se cuentan los carbonos vecinos, no los hidrógenos.`,
    svg: (() => { const X = i => 60 + i * 105; let s = ``;
      const main = [[`CH₃`, `1°`, `var(--t17)`], [`C`, `4°`, `var(--t15)`], [`CH₂`, `2°`, `var(--t18)`], [`CH`, `3°`, `var(--t20)`], [`CH₃`, `1°`, `var(--t17)`]];
      const node = (x, y, l, k, col) => `<circle cx="${x}" cy="${y}" r="22" style="fill:${col};opacity:.18"/><circle cx="${x}" cy="${y}" r="22" class="s" style="stroke:${col}"/>` + T(x, y + 6, l, { c:`tk`, fs:16 }) + T(x + 28, y - 18, k, { a:`start`, c:`tb`, fs:13 });
      for (let i = 0; i < 4; i++) s += ln(X(i) + 22, 110, X(i + 1) - 22, 110);
      s += ln(X(1), 88, X(1), 62) + ln(X(1), 132, X(1), 158) + ln(X(3), 132, X(3), 158);
      main.forEach((m, i) => s += node(X(i), 110, m[0], m[1], m[2]));
      s += node(X(1), 40, `CH₃`, `1°`, `var(--t17)`) + node(X(1), 180, `CH₃`, `1°`, `var(--t17)`) + node(X(3), 180, `CH₃`, `1°`, `var(--t17)`);
      s += T(420, 30, `1° unido a 1 C · 2° a 2 C`, { c:`tm`, fs:12 }) + T(420, 48, `3° a 3 C · 4° a 4 C`, { c:`tm`, fs:12 });
      s += T(480, 200, `5 × 1° · 1 × 2° · 1 × 3° · 1 × 4°`, { c:`tb`, fs:12 });
      return svg(560, 214, s, `Tipos de carbono en el isooctano`); })() };

  FIG.pebAlcanos = { src:`Tema 23, pág. 14 (datos de la tabla) y pág. 15`, cap:`Punto de ebullición de los n-alcanos según la tabla de la pág. 14. Sube con cada carbono agregado. Los puntos naranja son los isómeros ramificados del pentano: hierven más bajo.`,
    svg: (() => { const bp = [-164, -89, -42, 0, 36, 69, 98, 126, 151, 174, 196, 216, 235, 254, 271];
      const X = n => 70 + (n - 1) / 14 * 450, Y = t => 190 - (t + 180) / 470 * 170; let s = ``;
      s += `<rect x="${X(1)}" y="20" width="${X(4.5) - X(1)}" height="170" style="fill:var(--t17);opacity:.07"/>` + T((X(1) + X(4.5)) / 2, 34, `gases`, { c:`tm`, fs:11 });
      s += `<rect x="${X(4.5)}" y="20" width="${X(15) - X(4.5)}" height="170" style="fill:var(--t18);opacity:.06"/>` + T((X(4.5) + X(15)) / 2, 34, `líquidos (C5–C17)`, { c:`tm`, fs:11 });
      [-150, 0, 150, 300].forEach(t => s += ln(66, Y(t), 525, Y(t), `dash`) + T(60, Y(t) + 4, t, { a:`end`, c:`tm`, fs:11 }));
      s += ln(70, 190, 525, 190);
      [1, 4, 5, 8, 10, 15].forEach(n => s += T(X(n), 206, `C${n}`, { c:`tm`, fs:11 }));
      s += `<path d="${bp.map((t, i) => (i ? `L` : `M`) + X(i + 1).toFixed(1) + ` ` + Y(t).toFixed(1)).join(``)}" class="ln" style="stroke:var(--t23)"/>`;
      bp.forEach((t, i) => s += `<circle cx="${X(i + 1).toFixed(1)}" cy="${Y(t).toFixed(1)}" r="3.5" style="fill:var(--t23)"/>`);
      s += `<circle cx="${X(5)}" cy="${Y(28)}" r="5" style="fill:var(--t20)"/><circle cx="${X(5)}" cy="${Y(9.5)}" r="5" style="fill:var(--t20)"/>`;
      s += T(X(5) + 10, Y(36) - 6, `n-pentano 36 °C`, { a:`start`, c:`tm`, fs:11 }) + T(X(5) + 10, Y(9.5) + 14, `neopentano 9.5 °C`, { a:`start`, c:`tm`, fs:11 });
      s += `<text x="20" y="105" transform="rotate(-90 20 105)" text-anchor="middle" class="tm">°C</text>` + T(295, 224, `Número de carbonos`, { c:`tm`, fs:12 });
      return svg(560, 232, s, `Punto de ebullición de los n-alcanos`); })() };

  FIG.isomerosC5 = { src:`Tema 23, pág. 15 y 19`, cap:`Los tres isómeros del C₅H₁₂ en notación lineangular. Misma fórmula, distinto esqueleto; cuanto más ramificado, menor punto de ebullición.`,
    svg: (() => { let s = ``;
      s += zig([[30, 100], [65, 70], [100, 100], [135, 70], [170, 100]]) + T(100, 150, `n-pentano`, { c:`tb` }) + T(100, 168, `lineal · 36 °C`, { c:`tm` });
      s += zig([[220, 100], [255, 70], [290, 100], [325, 70]]) + ln(255, 70, 255, 32, `s`).replace(`class="s"`, `class="s" style="stroke-width:2.5"`) + T(275, 150, `isopentano`, { c:`tb` }) + T(275, 168, `2-metilbutano · 28 °C`, { c:`tm` });
      s += `<path d="M450 80 L450 32 M450 80 L412 80 M450 80 L488 80 M450 80 L450 128" class="s" style="stroke-width:2.5"/>` + `<circle cx="450" cy="80" r="4" style="fill:var(--t23)"/>` + T(450, 150, `neopentano`, { c:`tb` }) + T(450, 168, `2,2-dimetilpropano · 9.5 °C`, { c:`tm` });
      s += T(280, 22, `C₅H₁₂`, { c:`tk`, fs:16 }) + `<path d="M60 190 H500" class="ar" marker-end="url(#ah)"/>` + T(280, 206, `más ramificación → menor punto de ebullición`, { c:`tm`, fs:12 });
      return svg(560, 214, s, `Isómeros del pentano`); })() };

  FIG.combustion = { src:`Tema 23, pág. 17`, cap:`Las dos reacciones típicas de los alcanos: combustión (libera energía, la del gas de cocina) y halogenación por radicales (un H se cambia por un halógeno).`,
    svg: svg(560, 190,
      T(280, 26, `Combustión`, { c:`tb` }) + T(280, 60, `CH₄ + 2 O₂ → CO₂ + 2 H₂O + energía`, { c:`tk`, fs:18 }) +
      `<path d="M500 80 q8 -14 0 -26 q14 10 8 26 z" style="fill:var(--t20)"/>` +
      ln(40, 88, 520, 88, `dash`) +
      T(280, 116, `Halogenación por radicales libres (luz o calor)`, { c:`tb` }) + T(280, 150, `CH₄ + Cl₂ → CH₃Cl + HCl`, { c:`tk`, fs:18 }) +
      T(280, 176, `sustitución: un H sale y entra un Cl`, { c:`tm` }),
      `Reacciones de los alcanos`) };
})();
