import {MDCRipple} from '@material/ripple/index';
import {MDCSelect} from '@material/select/index';
import {MDCTabBar} from '@material/tab-bar/index';
import * as basicLightbox from 'basiclightbox';
import initializePage from '../global/global';
import {getWoWCharacters, cleanCharacterHashes} from '../helpers/character';
import {postRequest} from '../helpers/network';

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
    button.addEventListener('click', () => {
      // Only scare Shammamain a third of the time.
      if (Math.random() >= 0.33) {
        rejectSound.play();
      }
    });
  }
}

/**
 * Logic for pagination.
 */
function paginationHandler() {
  const parent = document.querySelector('.app-meta');
  const zombie = document.querySelector('.app_sidebar_pagination');
  const wrapper = parent.querySelector('.app-meta-pagination');

  if (!zombie) {
    parent.classList.add('mobile-grow');
    return;
  } else {
    wrapper.classList.add('active');
  }

  const paginators = wrapper.querySelectorAll('.mdc-icon-button');
  const current = wrapper.querySelector('.app-meta-pagination__text--current');
  const last = wrapper.querySelector('.app-meta-pagination__text--next');
  const leftButton = wrapper.querySelector('.app-meta-pagination-icon__current');
  const rightButton = wrapper.querySelector('.app-meta-pagination-icon__next');
  const oldLeftButton = zombie.querySelector('.app_sidebar_page_prev');
  const oldRightButton = zombie.querySelector('.app_sidebar_page_next');
  const oldCurrent = zombie.querySelector('.app_sidebar_page_current');
  const oldLast = zombie.querySelector('.app_sidebar_page_last');

  /**
   * Sets the pagination text.
   */
  function setPagination() {
    current.innerText = oldCurrent.innerText;
    last.innerText = oldLast.innerText;

    if (current.innerText === '1') {
      leftButton.setAttribute('disabled', '');
    } else {
      leftButton.removeAttribute('disabled');
    }

    if (current.innerText === oldLast.innerText) {
      rightButton.setAttribute('disabled', '');
    } else {
      rightButton.removeAttribute('disabled');
    }
  }

  setPagination();

  leftButton.addEventListener('click', () => {
    oldLeftButton.click();
    setPagination();
  });
  rightButton.addEventListener('click', () => {
    oldRightButton.click();
    setPagination();
  });

  paginators.forEach((paginator) => {
    const iconRipple = new MDCRipple(paginator);
    iconRipple.unbounded = true;
  });
}

/**
 * Initializes the new select menu navigation.
 */
function cleanupMenu() {
  const appElem = document.querySelector('.applications');
  const header = document.querySelector('.app_header');
  const metaElem = document.querySelector('.app_sidebar_meta');

  if (!appElem) {
    return;
  }

  if (metaElem && !metaElem.classList.contains('meta-initialized')) {
    metaElem.insertAdjacentHTML('afterbegin', `
    <div class="app-meta">
      <div class="app-meta-pagination mdc-elevation--z2">
        <span class="app-meta-pagination__text">Page 
          <span class="app-meta-pagination__text--current">1</span> of 
          <span class="app-meta-pagination__text--next">2</span>
        </span>
        <button class="mdc-icon-button material-icons app-meta-pagination-icon__current">arrow_back_ios</button>
        <button class="mdc-icon-button material-icons app-meta-pagination-icon__next">arrow_forward_ios</button>
      </div>
      <div class="mdc-select mdc-elevation--z2 app-meta-select">
        <input type="hidden" name="enhanced-select">
        <i class="mdc-select__dropdown-icon"></i>
        <div class="mdc-select__selected-text">Open</div>
        <div class="mdc-select__menu mdc-menu mdc-menu-surface app-meta-select">
          <ul class="mdc-list">
            <li class="mdc-list-item mdc-list-item--selected" data-value="/dashboard/applications" aria-selected="true">
              Open
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/general">
              General
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/approved">
              Approved
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/rejected">
              Rejected
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/archive">
              Archived
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/trash">
              Trash
            </li>
            <li class="mdc-list-item" data-value="/dashboard/applications/mine">
              My Applications
            <li>
          </ul>
        </div>
        <span class="mdc-floating-label">Application Category</span>
        <div class="mdc-line-ripple"></div>
      </div>
    </div>
    `);

    metaElem.classList.add('meta-initialized');
    document.querySelector('header').classList.add('pushed');

    const selectElem = metaElem.querySelector('.mdc-select');
    const menuElem = selectElem.querySelector('.mdc-menu');
    const select = new MDCSelect(selectElem);
    const activeHeader = header.querySelector('.app_header_tab.active');

    if (activeHeader) {
      const href = activeHeader.getAttribute('href');
      const target = menuElem.querySelector('[data-value="' + href + '"]');

      // Switch only if we're not the default value.
      // Note: Does not set hidden input value!
      if (target && target.getAttribute('data-value') !== '/dashboard/applications') {
        const active = menuElem.querySelector('.mdc-list-item--selected');
        const text = selectElem.querySelector('.mdc-select__selected-text');

        active.classList.remove('mdc-list-item--selected');
        target.classList.add('mdc-list-item--selected');
        text.innerText = target.innerText.trim();
      }
    } else if (Sentry) {
      Sentry.captureMessage('Active nav. button not found in Dashboard.');
    }

    paginationHandler();

    select.listen('MDCSelect:change', () => {
      $.fn.systemDashboardLoadPage(select.value);
    });
  }
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
  const heroElem = document.querySelector('.hero');

  if (heroElem) {
    heroElem.classList.add('hero-nudge');
  }

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
 * Checks how long ago since an applicant
 * has been seen on the website.
 */
async function addLastLogin() {
  const tooltip = document.querySelector('.app_header_user_avatar');

  if (!tooltip) {
    return;
  }

  const response = await postRequest('/api/v1/api.php', {
    jsonrpc: '2.0',
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: 'Stats.get',
    params: {
      user_id: tooltip.getAttribute('data-minitooltip-userid'),
    },
  });

  if (response.result && response.result.last_seen) {
    const wrapper = document.querySelector('.app_header_user_details');

    if (!wrapper) {
      console.warn('User status checked but nowhere to put it.');
      return;
    }

    wrapper.insertAdjacentHTML('beforeend',
      `<div class="app-meta__last-seen">Last seen ${response.result.last_seen}</div>`);
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
            addLastLogin();
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
  document.querySelectorAll(
    'img[src^="https://assets-cloud.enjin.com/users/"]' +
    ',img[src^="https://resources.enjin.com/profile/images/"]' +
    ',img[src$="site_logo/small.png"]')
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
  cleanupMenu();
  linkNavigationButtons(dashboard);
  addLastLogin();
  rejectAudio();
  imageReplacement();
  createLightboxes();
  peskyLinks();
  getWoWCharacters();
  createCharacterMutationObserver(dashboard);
});
