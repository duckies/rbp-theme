import {MDCRipple} from '@material/ripple';

document.querySelectorAll('head link[rel="icon"]')
  .forEach((link) => link.remove());

const viewport = document.querySelector('.meta[name="viewport"]');

if (!viewport) {
  document.querySelector('head')
  .insertAdjacentHTML('beforeend',
  `<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">`);
}

/**
 * Instatiates material design components.
 */
export default function initMDC() {
  const ripples = document.querySelectorAll('.mdc-ripple-surface');

  ripples.forEach((ripple) => new MDCRipple(ripple));
}

