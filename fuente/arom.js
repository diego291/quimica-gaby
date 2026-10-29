/* ======================= DIBUJO DE ANILLOS AROMÁTICOS ======================= */
const AR = (() => {
  const T = (x, y, s, o = {}) => `<text x="${(+x).toFixed(1)}" y="${(+y).toFixed(1)}" text-anchor="${o.a || `middle`}" class="${o.c || `tk`}"${o.fs ? ` style="font-size:${o.fs}px"` : ``}>${s}</text>`;
  const V = (cx, cy, r, i, rot = -90) => { const a = (rot + 60 * i) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a), Math.cos(a), Math.sin(a)]; };
  /* anillo de 6: subs = {vértice: etiqueta}; o.mode = 'circle' | 'kek' | 'none'; o.nums = {vértice: número}; o.N = vértice con N; o.hi = vértice resaltado */
  const ring = (cx, cy, r, subs = {}, o = {}) => { let s = ``; const mode = o.mode || `circle`, col = o.col ? `;stroke:${o.col}` : ``;
    const P = [0, 1, 2, 3, 4, 5].map(i => V(cx, cy, r, i, o.rot));
    s += `<path d="${P.map((p, i) => (i ? `L` : `M`) + p[0].toFixed(1) + ` ` + p[1].toFixed(1)).join(``)}Z" class="s" style="fill:none${col}"/>`;
    if (mode === `circle`) s += `<circle cx="${cx}" cy="${cy}" r="${(r * .58).toFixed(1)}" class="s" style="fill:none${col}"/>`;
    if (mode === `kek`) [0, 2, 4].map(i => (i + (o.kshift || 0)) % 6).forEach(i => { const a = P[i], b = P[(i + 1) % 6];
      const sh = (p) => [cx + (p[0] - cx) * .78, cy + (p[1] - cy) * .78]; const A = sh(a), B = sh(b);
      const k = .12, A2 = [A[0] + (B[0] - A[0]) * k, A[1] + (B[1] - A[1]) * k], B2 = [B[0] - (B[0] - A[0]) * k, B[1] - (B[1] - A[1]) * k];
      s += `<line x1="${A2[0].toFixed(1)}" y1="${A2[1].toFixed(1)}" x2="${B2[0].toFixed(1)}" y2="${B2[1].toFixed(1)}" class="s" style="${col.slice(1)}"/>`; });
    if (o.hi != null){ const p = P[o.hi]; s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="8" style="fill:var(--mark);stroke:var(--t15);stroke-width:1.5"/>`; }
    if (o.N != null){ const p = P[o.N]; s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="9" style="fill:var(--surface)"/>` + T(p[0], p[1] + 5, o.Nl || `N`, { c:`tb`, fs:14 }); }
    for (const k in subs){ const p = P[k], L = o.len || 20, x2 = p[0] + p[2] * L, y2 = p[1] + p[3] * L;
      s += `<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="s"/>`;
      const a = p[2] > .3 ? `start` : p[2] < -.3 ? `end` : `middle`; const lx = x2 + p[2] * 4, ly = y2 + (p[3] < -.3 ? -5 : p[3] > .3 ? 15 : 5);
      s += T(lx, ly, subs[k], { a, fs:o.fs || 15 }); }
    if (o.nums) for (const k in o.nums){ const p = P[k]; s += T(cx + (p[0] - cx) * .74, cy + (p[1] - cy) * .74 + 4, o.nums[k], { c:`tm`, fs:10.5 }); }
    return s; };
  const svg = (w, h, body, label, y0 = 0) => `<svg viewBox="0 ${y0} ${w} ${h}" role="img" aria-label="${label}" style="max-width:${w}px">${body}</svg>`;
  return { T, V, ring, svg };
})();
