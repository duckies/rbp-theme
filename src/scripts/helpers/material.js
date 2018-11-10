import {MDCLinearProgress} from '@material/linear-progress/index';

/**
 * Uses timeout to avoid reflow hiding our cute animations.
 */
export function animateProgressBars() {
  document.querySelectorAll('.mdc-linear-progress').forEach((barElem) => {
    const progress = barElem.getAttribute('data-scale');
    const bar = new MDCLinearProgress(barElem);
    bar.progress = progress;
  });
}
