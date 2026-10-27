// Chalk sketch for the unit header. viewBox 0 0 600 180; keep the left ~200 px light.
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    reset(
      // a staircase, then the same steps as a treadmill: the chapter's two motifs
      P('M230 146h42v-22h42v-22h42v-22h42v-22h42v-22h42') +
      P('M230 146h42v-22h42v-22h42v-22h42v-22h42v-22h42v-22h42', 'faint') +
      `<ellipse class="t breathe" cx="512" cy="36" rx="24" ry="11" fill="none" stroke="currentColor" stroke-width="3" style="--k:${k++}"/>` +
      Tx(230, 172, 'POWER · COST · TRUST', 20, '', 'start')
    ),
  ];
})();
