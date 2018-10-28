import {MDCRipple} from '@material/ripple';
import * as basicLightbox from 'basiclightbox';
import initializePage from '../global/global';
import {MDCTabBar} from '@material/tab-bar';
import {getWoWCharacters, cleanCharacterHashes} from '../helpers/character';

const rejectSound = new Audio('https://s3.amazonaws.com/files.enjin.com/632721/material/audio/dont-blame-you.mp3');

/**
 * Forces bbcode links to open in a new tab.
 */
function peskyLinks() {
  document.querySelectorAll('.bbcode_url')
      .forEach((url) => url.setAttribute('target', '_blank'));
}

/**
 * Play a stupid sound on rejecting an application.
 */
function rejectAudio() {
  const button =
    document.querySelector('.app_inner_action_approve[data-msg~="reject"]');

  if (button) {
    button.addEventListener('click', () => rejectSound.play());
  }
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
 * Instantiate the navigation bar on the dashboard.
 * @param {Node} dashboard
 */
function linkNavigationButtons(dashboard) {
  const navbar = document.querySelector('.dashboard-navbar');
  const bar = navbar.querySelector('.mdc-tab-bar');
  const tabs = new MDCTabBar(bar);
  const location = window.location.pathname.split('/')[2];
  const locationTab =
    document.querySelector('.mdc-tab[href*="' + location + '"]');

  if (locationTab) {
    locationTab.classList.add('mdc-tab--active');
    const indicator = locationTab.querySelector('.mdc-tab-indicator');
    indicator.classList.add('mdc-tab-indicator--active');
  }

  if (dashboard) {
    navbar.classList.add('show');
    const create =
      document.querySelector('.menu_link[href="/dashboard/website/create"]');

    if (create) {
      const tabElem = bar.querySelector('[href="/dashboard/website"]');
      tabElem.remove();
    }

    tabs.getTabElements_().forEach((tab) => {
      const href = tab.getAttribute('href');

      tab.addEventListener('click', (e) => {
        e.preventDefault();
        $.fn.systemDashboardLoadPage(href);
      });
    });
  }
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
          if (node.classList &&
            (node.classList.value == 'app_inner_area m_system-dashboard'
            || node.classList.value == 'applications')) {
            cleanCharacterHashes();
          }
        });

        mutation.addedNodes.forEach((node) => {
          if (node.classList &&
            node.contains(node.querySelector('.character_list'))) {
            rejectAudio();
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
  linkNavigationButtons(dashboard);
  rejectAudio();
  getWoWCharacters();
  imageReplacement();
  createLightboxes();
  peskyLinks();
  createCharacterMutationObserver(dashboard);
});
