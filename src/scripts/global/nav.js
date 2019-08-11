import {MDCRipple} from '@material/ripple/index';
import {MDCMenu} from '@material/menu/index';
import {MDCMenuSurface} from '@material/menu-surface/index';
import {MDCDrawer} from '@material/drawer/index';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTabBar} from '@material/tab-bar/index';
import {postRequest} from '../helpers/network';
// import {MDCTabIndicator} from '@material/tab-indicator';

const drawerElem = document.querySelector('.mdc-drawer');
const topAppBarElem = document.querySelector('.mdc-top-app-bar');
const tabBarElem = document.querySelector('.mdc-tab-bar');


/**
 * Initiates the navigation bar.
 */
function initAppBar() {
  const drawerObj = MDCDrawer.attachTo(drawerElem);
  const topBar = MDCTopAppBar.attachTo(topAppBarElem);
  const enjinTray = document.querySelector('#enjin-tray');

  MDCTabBar.attachTo(tabBarElem);

  // const indicators = tabBarElem.querySelectorAll('.mbc-tab-indicator');

  // indicators.forEach((indicator) => MDCTabIndicator.attachTo(indicator));

  topBar.listen('MDCTopAppBar:nav', () => {
    drawerObj.open = !drawerObj.open;
  });

  // Hacky way of applying default scrolling to the tray.
  // NOTE: Must change MAX_TOP_APP_BAR_HEIGHT to 133
  // in mdc-top-app-bar constants.js.
  if (enjinTray) {
    MDCTopAppBar.attachTo(enjinTray);
  }
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
    const active = document.querySelector('.button_click.active');
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
async function userMenu() {
  const button = document.getElementById('user-button');

  try {
    const json = await postRequest('/api/v1/api.php', {
      jsonrpc: '2.0',
      id: Math.round(Math.random() * (999999 - 100000) + 100000),
      method: 'User.get',
    });

    const menuSelector = json.result.logged_in
      ? '#registered-menu' : '#guest-menu';
    const menuElem = document.querySelector(menuSelector);
    const menuObj = new MDCMenu(menuElem);
    const menuButton = document.getElementById('user-button');

    if (json.result.logged_in) {
      // if (Sentry) {
      //   Sentry.configureScope((scope) => {
      //     scope.setUser({
      //       'username': json.result.username,
      //       'raw': json.result,
      //     });
      //   });
      // }

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
  initAppBar();
  handleTrayClosing();
};
