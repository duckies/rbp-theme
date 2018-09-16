import {MDCRipple} from '@material/ripple';
import {MDCMenu, Corner} from '@material/menu';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTemporaryDrawer} from '@material/drawer';
import {MDCTabBar} from '@material/tab-bar';
import {postRequest} from './helpers/network';

const drawerEl = document.querySelector('.mdc-drawer--temporary');
const toolbarIconEl =
  document.querySelector('.mdc-top-app-bar__navigation-icon');

/**
 * Class toggle depending on Enjin notification bar location.
 * @param {Node} header
 * @param {int} position
 */
function scrollEnjinBar(header, position) {
  if (position > 0) {
    header.classList.add('user_tray__scrolled');
  } else {
    header.classList.remove('user_tray__scrolled');
  }
}

/**
 * When the header scrolls past a certain point and collapses,
 * we must also do the same with the #enjin-tray.
 * @param {Node} header
 */
function appBarScrollingHandler(header) {
  let scrollPos = 0;
  let ticking = false;

  window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollEnjinBar(header, scrollPos);
        ticking = false;
      });

      ticking = true;
    }
  });
}

/**
 * Initiates Material.io navigation bar.
 */
export function initAppBar() {
  const header = document.getElementById('enjin-tray');
  MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
  MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

  if (header) {
    appBarScrollingHandler(header);
  }
}

/**
 * Initializes pullout menu drawer.
 */
export function initDrawer() {
  const drawer = new MDCTemporaryDrawer(drawerEl);
  toolbarIconEl.addEventListener('click', () => (drawer.open = true));
}

/**
 * Enjin tray closing handler.
 */
function handleTrayClosing() {
  document.querySelector('.window_header .window_page')
    .innerHTML = '<i class="material-icons">settings</i>';

  document.addEventListener('click', (e) => {
    let active = document.querySelector('.button_click.active');
    if (active &&
      !e.target.closest('.button_window') &&
        !e.target.closest('.button_click.active')) {
      active.click();
    }
  });
}

/**
 * Requests Enjin for their profile, and creates the dropdown.
 */
export async function initUserMenu() {
  const button = document.getElementById('user-button');

  const request = {
    jsonrpc: '2.0',
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: 'User.get',
  };

  try {
    const json = await postRequest('/api/v1/api.php', request);
    const menuSelector = json.result.logged_in ? '#registered-menu' : '#guest-menu';
    const menuElem = document.querySelector(menuSelector);
    const menu = new MDCMenu(menuElem);
    const menuButton = document.getElementById('user-button');

    if (json.result.logged_in) {
      const joinLink = document.querySelector('.join-site');

      button.innerHTML =
        `<div class='user-menu__avatar user-menu__slide'>
          <img class='user-menu__img' src='${json.result.avatar_medium}'>
        </div>`;

      if (joinLink) {
        const list = menuElem.querySelector('.mdc-list');

        list.insertAdjacentHTML('beforeend',
          `<li class='mdc-list-item' role='menuitem' tabindex='0'>
            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>
          </li>`);
      }

      menuElem.querySelectorAll('.mdc-list-item').forEach((item) => {
        MDCRipple.attachTo(item);
      });

      MDCRipple.attachTo(document.querySelector('.user-menu__avatar'));
      handleTrayClosing();
    } else {
      button.innerHTML =
        'Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';
    }

    menu.setAnchorCorner(Corner.BOTTOM_START);
    menuButton.addEventListener('click', () => menu.open = !menu.open);
  } catch (error) {
    console.error('Enjin user request error: ' + error);
  }
}
