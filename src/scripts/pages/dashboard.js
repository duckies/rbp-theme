import {MDCRipple} from '@material/ripple';
import {MDCSnackbar} from '@material/snackbar';
import * as basicLightbox from 'basiclightbox';
import initializePage from '../global/global';
import {getWoWCharacters, cleanCharacterHashes} from '../helpers/character';

/**
 * Forces bbcode links to open in a new tab.
 */
function peskyLinks() {
  document.querySelectorAll('.bbcode_url')
    .forEach((url) => url.setAttribute('target', '_blank'));
}

/**
 * Initializes MDCRipple and removes trashcan.
 */
function cleanupMenu() {
  const trash = document.querySelector('.fa.fa-trash');
  const header = document.querySelector('.app_header');

  if (trash && header && !header.classList.contains('app_header_initialized')) {
    trash.parentNode.insertAdjacentText('beforeend', 'Trash');
    trash.remove();

    document.querySelector('.app_header')
      .classList.add('app_header_initialized');
  }

  document.querySelectorAll('.menu_link, .app_sidebar_block')
  .forEach((menu) => MDCRipple.attachTo(menu));
}

/**
 * Watches for applications loaded on dashboard.
 * @param {Node} target
 */
function createCharacterMutationObserver(target) {
  const observer = new MutationObserver((mutations) => {
    if (target.classList.contains('v2_system_dashboard')) {
      cleanupMenu();
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.classList && node.classList.value == 'app_inner_area m_system-dashboard') {
            cleanCharacterHashes();
            // console.info('[Application]: Application removed: ', characterHashes);
          }
        });

        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.contains(node.querySelector('.character_list'))) {
            // console.info('[Application]: Application added: ', characterHashes);
            getWoWCharacters();
            imageReplacement();
            createLightboxes();
            peskyLinks();
          }
        });
      });
    }
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}

/**
 * Replaces smaller enjin images and thumbnails with their larger counterparts.
 */
function imageReplacement() {
  document.querySelectorAll('img[src^="https://assets-cloud.enjin.com/users/"],img[src^="https://resources.enjin.com/profile/images/"],img[src$="site_logo/small.png"]')
    .forEach((img) => img.src = img.src.replace('small', 'medium'));

  document.querySelectorAll('img[src*="/module_appform/thumb"]')
    .forEach((img) => img.src = img.src.replace('thumb', 'full'));
}

/**
 * Creates basicLightboxes out of images uploaded to the application.
 */
function createLightboxes() {
  document.querySelectorAll('.images a').forEach(function(elem) {
    elem.onclick = function(e) {
      e.preventDefault();
      basicLightbox.create(`<img src='${elem.getAttribute('href')}'>`).show();
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const dashboard = document.querySelector('.v2_system_dashboard');

  initializePage();
  getWoWCharacters();
  imageReplacement();
  createLightboxes();
  peskyLinks();
  createCharacterMutationObserver(dashboard);
});
