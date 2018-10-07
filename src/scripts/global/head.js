/**
 * Replaces favicon in head tags.
 */
export default function initialize() {
  const viewport = document.querySelector('meta[name="viewport"]');

  if (!viewport) {
    return;
  }

  // Remove old favicons.
  document.querySelectorAll('head link[rel="icon"]')
    .forEach((link) => link.remove());

  // Inject new favicons.
  document.querySelector('head').insertAdjacentHTML('beforeend',
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="https://s3.amazonaws.com/files.enjin.com/632721/material/images/favicon.png" sizes="32x32" type="image/png">`);
}
