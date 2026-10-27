/* Shared drawing for The Ceiling, Not the Goal. Built once, reused by every chapter.
   Two motion motifs: the staircase (structural descent) and the treadmill (a loop). */
window.Th = (() => {
  const INK = '#f2efe6', DIM = '#9fb0a8', FAINT = '#5d7068';
  const POWER = '#3d8be5', COST = '#e5a33d', TRUST = '#4caf7d', ALARM = '#e5533d';
  const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

  function code(p, lines, { x = 140, y = 200, size = 30, gap = 46, fill = INK, o = 1 } = {}) {
    const g = G(p, { o });
    const ts = lines.map((line, i) => T(g, line, { x, y: y + i * gap, size, fill, font: MONO, weight: 500, anchor: 'start' }));
    return { g, lines: ts };
  }

  // Each step is a path returned directly, so draw(step, t0) works.
  function stair(p, { x = 180, y = 740, n = 6, w = 130, h = 70, color = TRUST, o = 1 } = {}) {
    const g = G(p, { o }), steps = [];
    for (let i = 0; i < n; i++) {
      const sx = x + i * w, sy = y - i * h;
      steps.push(path(g, `M${sx} ${sy} V${sy - h} H${sx + w}`, { stroke: color, 'stroke-width': 5 }, { d: 0 }));
    }
    return { g, steps };
  }

  // A conveyor: two rollers, a belt, and a moving tread. Small enough to read as a loop, not a pill.
  function belt(p, { x = 1080, y = 700, w = 320, h = 60, color = ALARM, o = 1 } = {}) {
    const g = G(p, { o }), r = h / 2;
    const body = path(g, `M${x} ${y} H${x + w} A${r} ${r} 0 0 1 ${x + w} ${y + h} H${x} A${r} ${r} 0 0 1 ${x} ${y}`,
      { stroke: color, 'stroke-width': 5, opacity: .5 }, { d: 0 });
    for (const cx of [x + r, x + w - r]) mk('circle', { cx, cy: y + r, r: r * .52, fill: 'none', stroke: color, 'stroke-width': 3 }, g);
    const tread = path(g, `M${x + r} ${y} H${x + w - r}`, { stroke: color, 'stroke-width': 7 }, { d: 0 });
    tread.removeAttribute('pathLength');                 // keep the dashes in user units
    tread.setAttribute('stroke-dasharray', '18 14');
    return { g, body, tread };
  }

  function stamp(p, text, { x = 800, y = 300, color = ALARM, size = 40, o = 0, pad = 22 } = {}) {
    const g = G(p, { o, s: 1.35, x, y });
    const t = T(g, text, { x: 0, y: 0, size, fill: color, weight: 700, anchor: 'middle' });
    const w = text.length * size * 0.58;
    const r = mk('rect', { x: -w / 2 - pad, y: -size * .95, width: w + pad * 2, height: size * 1.45, rx: 10, fill: 'none', stroke: color, 'stroke-width': 4 }, g);
    g.insertBefore(r, t);
    return g;
  }

  // One path, so draw(arrow, t0) reveals shaft and head together.
  function arrow(p, x1, y1, x2, y2, { color = DIM, width = 3, o = 1, head = 14 } = {}) {
    const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - head * Math.cos(a), by = y2 - head * Math.sin(a);
    const l = `${bx - head * .55 * Math.cos(a - .55)} ${by - head * .55 * Math.sin(a - .55)}`;
    const r = `${bx - head * .55 * Math.cos(a + .55)} ${by - head * .55 * Math.sin(a + .55)}`;
    return path(p, `M${x1} ${y1} L${bx} ${by} M${l} L${x2} ${y2} L${r}`, { stroke: color, 'stroke-width': width }, { d: 0 });
  }

  // The memory dial: three stops, one knob. Returns the stop x positions.
  function dial(p, { x = 200, y = 700, w = 900, stops = ['finite state', '1 stack', '2 stacks'], color = TRUST, o = 1 } = {}) {
    const g = G(p, { o });
    const xs = stops.map((_, i) => x + i * (w / (stops.length - 1)));
    path(g, `M${x} ${y}H${x + w}`, { stroke: FAINT, 'stroke-width': 7 });
    stops.forEach((s, i) => {
      mk('circle', { cx: xs[i], cy: y, r: 9, fill: color }, g);
      T(g, s, { x: xs[i], y: y + 50, size: 22, fill: DIM, anchor: 'middle' });
    });
    const knob = G(g, { x: xs[0], y });
    mk('circle', { cx: 0, cy: 0, r: 21, fill: color, stroke: INK, 'stroke-width': 3 }, knob);
    return { g, knob, xs };
  }

  function box(p, { x, y, w, h, r = 14, stroke = FAINT, fill = 'none', o = 1, width = 3 } = {}) {
    const g = G(p, { o });
    mk('rect', { x, y, width: w, height: h, rx: r, fill, stroke, 'stroke-width': width }, g);
    return g;
  }

  function label(p, str, x, y, { size = 30, fill = INK, anchor = 'start', weight = 500, o = 1 } = {}) {
    return T(p, str, { x, y, size, fill, anchor, weight, o });
  }

  // Visible path inside a positioned group; the group's opacity is the reveal.
  function check(p, x, y, { color = TRUST, size = 44, o = 0 } = {}) {
    const g = G(p, { o, s: .6, x, y });
    path(g, `M${-size * .5} 0 L${-size * .12} ${size * .38} L${size * .55} ${-size * .42}`, { stroke: color, 'stroke-width': 8 });
    return g;
  }

  return { INK, DIM, FAINT, POWER, COST, TRUST, ALARM, MONO, code, stair, belt, stamp, arrow, box, label, check, dial };
})();
