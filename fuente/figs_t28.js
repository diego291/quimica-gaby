/* ======================= ILUSTRACIONES: ÉTERES Y EPÓXIDOS ======================= */
(() => {
  const { ring } = AR;
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || `middle`}" class="${o.c || `tx`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="ahd"/></marker></defs>`;
  const svg = (w, h, body, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
  const ln = (x1, y1, x2, y2, cls = `s`) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
  const arrow = (x1, y, x2) => `<line x1="${x1}" y1="${y}" x2="${x2 - 4}" y2="${y}" class="ar" marker-end="url(#ah)"/>`;
  const C = `var(--t28)`;
  const O = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" style="fill:${C}"/>` + T(x, y + 5, `O`, { c:`tw`, fs:13 });
  /* polígono de n lados con O en el vértice superior; dobles: lista de aristas [i,j] */
  const pring = (cx, cy, r, n, dbl = [], extraO = []) => { const P = Array.from({ length:n }, (_, i) => { const a = (-90 + i * 360 / n) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
    let s = `<path d="${P.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1].toFixed(1)).join(``)}Z" class="s"/>`;
    dbl.forEach(([a, b]) => { const sh = p => [cx + (p[0] - cx) * .74, cy + (p[1] - cy) * .74]; const A = sh(P[a]), B = sh(P[b]); s += ln(A[0].toFixed(1), A[1].toFixed(1), B[0].toFixed(1), B[1].toFixed(1)); });
    [0].concat(extraO).forEach(i => s += `<circle cx="${P[i][0].toFixed(1)}" cy="${P[i][1].toFixed(1)}" r="9" style="fill:var(--surface)"/>` + T(P[i][0].toFixed(1), (P[i][1] + 5).toFixed(1), `O`, { c:`tb`, fs:14 }));
    return s; };

  FIG.eterEstructura = { src:`Tema 28, pág. 3`, cap:`El oxígeno del éter usa dos de sus cuatro orbitales sp³ para unirse a los dos carbonos y guarda dos pares de electrones libres. Por eso la molécula es angular, como el agua, con unos 110° entre los enlaces.`,
    svg: (() => { let s = ``;
      s += ln(150, 120, 92, 160) + ln(150, 120, 208, 160) + O(150, 120, 15);
      s += `<circle cx="70" cy="172" r="22" style="fill:var(--sunk);stroke:var(--line2)"/>` + T(70, 178, `R`, { c:`tk`, fs:20 }) + `<circle cx="230" cy="172" r="22" style="fill:var(--sunk);stroke:var(--line2)"/>` + T(230, 178, `R'`, { c:`tk`, fs:20 });
      s += `<ellipse cx="128" cy="88" rx="9" ry="16" transform="rotate(-25 128 88)" style="fill:${C};opacity:.25;stroke:${C}"/><ellipse cx="172" cy="88" rx="9" ry="16" transform="rotate(25 172 88)" style="fill:${C};opacity:.25;stroke:${C}"/>`;
      s += T(123, 92, `··`, { c:`tb`, fs:14 }) + T(177, 92, `··`, { c:`tb`, fs:14 }) + T(150, 50, `2 pares libres`, { c:`tm` });
      s += `<path d="M128 135 A26 26 0 0 0 172 135" class="dash"/>` + T(150, 160, `≈ 110°`, { c:`tb`, fs:13 });
      s += T(410, 60, `R−O−R'`, { c:`tk`, fs:26 }) + T(410, 92, `O con hibridación sp³`, { c:`tx`, fs:15 }) + T(410, 116, `2 enlaces σ + 2 pares libres`, { c:`tm` }) + T(410, 138, `geometría angular, como el agua`, { c:`tm` }) + T(410, 160, `enlace C−O polar (δ− en el O)`, { c:`tm` });
      s += T(410, 196, `metoxietano: CH₃−O−CH₂−CH₃`, { c:`tb`, fs:13 });
      return svg(560, 214, s, `Estructura de un éter`); })() };

  FIG.clasifEter = { src:`Tema 28, pág. 4`, cap:`Dos criterios del material: la simetría (¿los dos grupos son iguales?) y la naturaleza de los grupos (¿son cadenas o anillos?).`,
    svg: (() => { let s = ``; const box = (x, y, w, h, t, sub, mol) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="bx"/>` + T(x + w / 2, y + 22, t, { c:`tb` }) + T(x + w / 2, y + 40, sub, { c:`tm`, fs:11.5 }) + T(x + w / 2, y + h - 16, mol, { c:`tk`, fs:14.5 });
      s += T(20, 22, `Por simetría`, { a:`start`, c:`tb`, fs:14 });
      s += box(20, 32, 250, 92, `Simétrico (simple)`, `R = R'`, `CH₃CH₂−O−CH₂CH₃`) + box(290, 32, 250, 92, `Asimétrico (mixto)`, `R ≠ R'`, `CH₃−O−CH₂CH₃`);
      s += T(20, 152, `Por naturaleza de los grupos`, { a:`start`, c:`tb`, fs:14 });
      s += box(20, 162, 160, 112, `Alifático`, `dos alquilos`, `CH₃−O−CH₃`);
      s += `<rect x="200" y="162" width="160" height="112" rx="10" class="bx"/>` + T(280, 184, `Aromático mixto`, { c:`tb` }) + T(280, 200, `alquilo + arilo · anisol`, { c:`tm`, fs:11.5 }) + ring(262, 240, 18, { 1:`O−CH₃` }, { len:10, fs:12.5 });
      s += `<rect x="380" y="162" width="160" height="112" rx="10" class="bx"/>` + T(460, 184, `Aromático puro`, { c:`tb` }) + T(460, 200, `dos arilos · difenil éter`, { c:`tm`, fs:11.5 }) + ring(424, 244, 17) + ring(496, 244, 17) + ln(440, 236, 452, 230) + ln(468, 230, 480, 236) + T(460, 234, `O`, { c:`tb`, fs:13 });
      return svg(560, 286, s, `Clasificación de los éteres`); })() };

  FIG.ciclicosEter = { src:`Tema 28, pág. 5 y 9`, cap:`Éteres cíclicos: el oxígeno (arriba) forma parte del anillo. El número de átomos del anillo da el nombre. Furano y 4H-pirano tienen dobles enlaces; el 1,4-dioxano tiene dos oxígenos.`,
    svg: (() => { let s = ``; const d = [[3, `Oxirano`, `epóxido · 3`], [4, `Oxetano`, `4 miembros`], [5, `Oxolano`, `THF · 5`], [6, `Oxano`, `THP · 6`]];
      d.forEach((r, i) => { const cx = 75 + i * 137; s += pring(cx, 70, 32, r[0]) + T(cx, 132, r[1], { c:`tb` }) + T(cx, 149, r[2], { c:`tm`, fs:11.5 }); });
      s += ln(20, 166, 540, 166, `dash`);
      s += pring(110, 222, 30, 5, [[1, 2], [3, 4]]) + T(110, 280, `Furano`, { c:`tb` }) + T(110, 296, `5 · aromático`, { c:`tm`, fs:11.5 });
      s += pring(280, 222, 32, 6, [[1, 2], [4, 5]]) + T(280, 280, `4H-pirano`, { c:`tb` }) + T(280, 296, `6 · dos dobles`, { c:`tm`, fs:11.5 });
      s += pring(450, 222, 32, 6, [], [3]) + T(450, 280, `1,4-dioxano`, { c:`tb` }) + T(450, 296, `6 · dos oxígenos`, { c:`tm`, fs:11.5 });
      return svg(560, 306, s, `Éteres cíclicos`); })() };

  FIG.nombreEter = { src:`Tema 28, pág. 7`, cap:`2-metoxipropano. La cadena corta (1 C) unida al oxígeno es el grupo metoxi; la larga (3 C) es el propano. El oxígeno está en el carbono 2 de la cadena principal.`,
    svg: (() => { let s = ``; const X = i => 130 + i * 110;
      [`CH₃`, `CH`, `CH₃`].forEach((l, i) => { s += T(X(i), 120, l, { c:`tk`, fs:19 }) + T(X(i) + 26, 100, i + 1, { c:`tm`, fs:12 }); if (i < 2) s += ln(X(i) + 24, 113, X(i + 1) - 24, 113); });
      s += `<rect x="${X(0) - 34}" y="92" width="${X(2) - X(0) + 68}" height="34" rx="8" style="fill:var(--t23);opacity:.12"/>` + T(X(1), 150, `propano (cadena larga) → alcano principal`, { c:`tm` });
      s += ln(X(1), 98, X(1), 74) + O(X(1), 60) + ln(X(1) + 12, 54, X(1) + 52, 40) + T(X(1) + 76, 42, `CH₃`, { c:`tk`, fs:18 });
      s += `<rect x="${X(1) - 16}" y="20" width="132" height="54" rx="10" style="fill:${C};opacity:.12"/>` + T(X(1) + 160, 30, `metoxi`, { a:`start`, c:`tb` }) + T(X(1) + 160, 48, `(cadena corta + O)`, { a:`start`, c:`tm`, fs:11.5 });
      s += T(280, 196, `2-metoxipropano`, { c:`tb`, fs:17 }) + T(280, 216, `posición + alcoxi + alcano`, { c:`tm` });
      return svg(560, 228, s, `Ejemplo de nombre de un éter`); })() };

  FIG.ebEter = { src:`Tema 28, pág. 11 · valores: compl. [2]`, cap:`Puntos de ebullición de compuestos de masa casi igual. El alcohol hierve muy alto por sus puentes de hidrógeno; el éter, sin ellos, hierve casi como el alcano. El material da 34 °C para el éter dimetílico, pero ese valor es del dietílico.`,
    svg: (() => { let s = ``; const Y = v => 150 - (v + 50) * 0.8; const grp = [[`46 g/mol`, [[`propano`, -42, `var(--t23)`], [`éter dimetílico`, -24, C], [`etanol`, 78, `var(--t27)`]]], [`74 g/mol`, [[`pentano (72)`, 36, `var(--t23)`], [`éter dietílico`, 34.6, C], [`butan-1-ol`, 118, `var(--t27)`]]]];
      s += ln(40, Y(0), 540, Y(0), `dash`) + T(36, Y(0) + 4, `0 °C`, { a:`end`, c:`tm`, fs:11 });
      grp.forEach((g, gi) => { const x0 = 70 + gi * 250; s += T(x0 + 105, 202, g[0], { c:`tb` });
        g[1].forEach((b, i) => { const x = x0 + i * 75, y = Y(Math.max(b[1], 0)), h = Math.abs(Y(b[1]) - Y(0)); s += `<rect x="${x}" y="${b[1] >= 0 ? y : Y(0)}" width="56" height="${h}" rx="4" style="fill:${b[2]}"/>` + T(x + 28, (b[1] >= 0 ? y - 6 : Y(b[1]) + 14), `${b[1]} °C`, { c:`tb`, fs:11.5 }) + T(x + 28, 182, b[0], { c:`tm`, fs:10.5 }); }); });
      return svg(560, 212, s, `Punto de ebullición de éteres, alcoholes y alcanos`); })() };

  FIG.reaccEter = { src:`Tema 28, pág. 12`, cap:`Los éteres reaccionan poco. Estas son las cuatro reacciones del material.`,
    svg: (() => { let s = ``; const rows = [[`Ruptura ácida`, `R−O−R' + HI`, `R−I + R'−OH`, `HI o HBr concentrados y calor`], [`Peróxidos`, `R−CH₂−O−R + O₂`, `R−CH(OOH)−O−R`, `aire y luz por mucho tiempo · explosivos`], [`Ácido de Lewis`, `R₂O + BF₃`, `R₂O:BF₃`, `el O dona un par de electrones`], [`Combustión`, `CₙH₂ₙ₊₂O + 3n/2 O₂`, `n CO₂ + (n+1) H₂O`, `muy inflamables`]];
      rows.forEach((r, i) => { const y = 38 + i * 60; s += T(20, y, r[0], { a:`start`, c:`tb` }) + T(258, y, r[1], { a:`end`, c:`tk`, fs:15 }) + arrow(268, y - 5, 318) + T(328, y, r[2], { a:`start`, c:`tk`, fs:15 }) + T(328, y + 20, r[3], { a:`start`, c:`tm` });
        if (i < 3) s += ln(20, y + 34, 540, y + 34, `dash`); });
      return svg(560, 250, s, `Reacciones de los éteres`); })() };

  FIG.epoxido = { src:`Tema 28, pág. 13`, cap:`El epóxido es un triángulo: sus ángulos de unos 60° están muy lejos de los 109.5° normales. Esa tensión hace que el anillo se abra con facilidad, incluso con agua, y se forma un compuesto con dos grupos funcionales.`,
    svg: (() => { let s = ``;
      s += ln(70, 150, 150, 150) + ln(70, 150, 110, 86) + ln(150, 150, 110, 86) + O(110, 80, 14);
      s += ln(70, 150, 40, 176) + ln(150, 150, 180, 176) + T(32, 192, `H`, { c:`tk`, fs:14 }) + T(188, 192, `H`, { c:`tk`, fs:14 });
      s += `<path d="M84 150 A16 16 0 0 1 78 137" class="dash"/>` + T(110, 140, `≈ 60°`, { c:`tb`, fs:13 }) + T(110, 214, `óxido de etileno (oxirano)`, { c:`tm` });
      s += T(110, 34, `anillo tenso`, { c:`tb`, fs:14 });
      s += T(250, 118, `+ H₂O`, { c:`tk`, fs:16 }) + arrow(220, 132, 320) + T(270, 150, `se abre el anillo`, { c:`tm`, fs:11 });
      s += T(430, 124, `HO−CH₂−CH₂−OH`, { c:`tk`, fs:17 }) + T(430, 146, `etano-1,2-diol (Tema 27)`, { c:`tm` });
      s += T(430, 180, `Usos: resinas epoxi · síntesis de fármacos`, { c:`tm` }) + T(430, 198, `esterilización de equipo médico`, { c:`tm` });
      return svg(560, 222, s, `Apertura de un epóxido`); })() };
})();
