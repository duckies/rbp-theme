import {MDCRipple} from '@material/ripple';
import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';
import {MDCDrawer} from '@material/drawer';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTabBar} from '@material/tab-bar';
import {postRequest} from '../helpers/network';

const drawerElem = document.querySelector('.mdc-drawer');
const topAppBarElem = document.querySelector('.mdc-top-app-bar');
const tabBarElem = document.querySelector('.mdc-tab-bar');

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
 */
function initScrollingHandler() {
  const enjinTrayElem = document.getElementById('enjin-tray');
  let scrollPos = 0;
  let ticking = false;

  window.addEventListener('scroll', function() {
    scrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollEnjinBar(enjinTrayElem, scrollPos);
        ticking = false;
      });

      ticking = true;
    }
  });
}

/**
 * Initiates Material.io navigation bar.
 */
export function appBar() {
  const drawerObj = MDCDrawer.attachTo(drawerElem);
  const topBar = MDCTopAppBar.attachTo(topAppBarElem);
  const tabs = MDCTabBar.attachTo(tabBarElem);

  // bar.setScrollTarget(document.getElementById('page-wrap'));
  topBar.listen('MDCTopAppBar:nav', () => {
    drawerObj.open = !drawerObj.open;
  });
}

/**
 * Enjin tray closing handler.
 */
function handleTrayClosing() {
  const window = document.querySelector('.window_header .window_page');

  if (!window) {
    return;
  }

  window.innerHTML = '<i class="material-icons">settings</i>';

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
export async function userMenu() {
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
    const menuObj = new MDCMenu(menuElem);
    console.log(json.result);
    const menuButton = document.getElementById('user-button');

    if (json.result.logged_in) {
      const joinLink = document.querySelector('.join-site');

      button.innerHTML =
        `<div class='user-menu__avatar user-menu__slide'>
          <img class='user-menu__img' src='${json.result.avatar_medium}'>
        </div>`;

      if (joinLink) {
        const listElem = menuElem.querySelector('.mdc-list');

        listElem.insertAdjacentHTML('beforeend',
          `<li class='mdc-list-item' role='menuitem' tabindex='0'>
            <a class='join-us' href='#' onclick='Enjin_Core.joinWebsiteRegular(event);return false;' rel='nofollow'>Join Website</a>
          </li>`);

        const linkObj = new link.MDCLink(listElem);
        linkObj.singleSelection = true;
      }

      if (json.result.admin_access.full || json.result.admin_access.limited) {
        menuElem.setAttribute('data-admin', 'True');
      }

      menuElem.querySelectorAll('.mdc-list-item').forEach((item) => {
        MDCRipple.attachTo(item);
      });

      MDCMenuSurface.attachTo(document.querySelector('.mdc-menu-surface'));
      menuObj.setAnchorMargin({top: 50});

      MDCRipple.attachTo(document.querySelector('.user-menu__avatar'));
      const greetings = [
        `Hello ${json.result.username}, you sultry snail.`,
        `Hello ${json.result.username}, you beautiful, rule-breaking moth.`,
        `Hello ${json.result.username}, you powerful musk ox.`,
        `Make way for ${json.result.username}, the worthy sperm.`,
        `Is it ${json.result.username} or is it just hot in here?`,
        `Stay safe out there ${json.result.username}.`,
        `Hello, <${json.result.username} the Irreplaceable>`,
        `Suffer well, ${json.result.username}.`,
        `Oh, hello ${json.result.username}. Have you heard the story of the hozen and the buttercream pie?`,
      ];
      const drawerSubtElem = document.querySelector('.mdc-drawer__subtitle');

      if (drawerSubtElem) {
        const randIndex = Math.floor(Math.random() * greetings.length);
        drawerSubtElem.innerText = greetings[randIndex];
      }
    } else {
      button.innerHTML =
        'Hello, Guest <i class="material-icons">keyboard_arrow_down</i>';
    }


    menuButton.addEventListener('click', () => menuObj.open = !menuObj.open);
  } catch (error) {
    console.error('User menu error: ' + error);
  }
}

/**
 * Initializes menu components.
 */
export default function initialize() {
  userMenu();
  appBar();
  handleTrayClosing();
  initScrollingHandler();
};
