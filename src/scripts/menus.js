import { MDCTemporaryDrawer } from "@material/drawer";
import { MDCMenu, Corner } from "@material/menu";
import { MDCTopAppBar, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { MDCTabBar } from "@material/tabs";
import { Selector } from "./selectors";
// import { MDCRipple } from "@material/ripple";

const drawerEl = document.querySelector(Selector.DRAWER);
const toolbarIconEl = document.querySelector(Selector.HAMBURGER);
const topAppBarElement = document.querySelector(Selector.APPBAR);

export function initAppBar() {
  let topAppBar = new MDCTopAppBar(topAppBarElement);
  let tabBar = MDCTabBar.attachTo(document.querySelector(".mdc-tab-bar"));

  let last_known_scroll_position = 0;
  let ticking = false;

  const header = document.querySelector("#enjin-tray");

  if (header) {
    function scrollEnjinBar(position) {
      if (position >= 40) {
        header.classList.add("user_tray__scrolled");
      } else {
        header.classList.remove("user_tray__scrolled");
      }
    }

    window.addEventListener("scroll", function() {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollEnjinBar(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}

export function initDrawer() {
  const drawer = new MDCTemporaryDrawer(drawerEl);
  toolbarIconEl.addEventListener("click", () => (drawer.open = true));
}

export function initUserMenu() {
  const button = $("#user-button");

  var request = {
    jsonrpc: "2.0",
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: "User.get"
  };

  $.post("/api/v1/api.php", JSON.stringify(request), function(response) {
    const logged_in = response.result.logged_in;

    if (logged_in) {
      button.html(
        `<div class="user-menu__avatar user-menu__slide">
          <img class="user-menu__img" src="${response.result.avatar_medium}">
        </div>`
      );

      const join_link = document.querySelector('.join-site');
      if (join_link) {
        $('#registered-menu .mdc-list-item').last().before(`
          <li class="mdc-list-item" role="menuitem" tabindex="0">
            <a class="join-us" href="#" onclick="Enjin_Core.joinWebsiteRegular(event);return false;" rel="nofollow">Join Website</a>
          </li>
        `);
      }
    } else {
      button.html(`Hello, Guest <i class="material-icons">keyboard_arrow_down</i>`);
    }

    let menuEl = document.querySelector(logged_in ? "#registered-menu" : "#guest-menu");
    let menu = new MDCMenu(menuEl);
    menu.setAnchorCorner(Corner.BOTTOM_START);
    let menuButtonEl = document.querySelector("#user-button");

    menuButtonEl.addEventListener("click", function() {
      menu.open = !menu.open;
    });

    $('.window_header .window_page').html('<i class="material-icons">settings</i>');

    const popups = document.querySelector('.button_window');

    document.addEventListener("click", (e) => {
      let active = document.querySelector('.button_click.active');
      if (active && !e.target.closest('.button_window') && !e.target.closest(".button_click.active")) {
        console.log('Closing an Enjin tray menu');
        active.click();
      }
    });
  
  }).fail(function(error) {
    console.log("[Quack]: Error looking up user information.");
  });
}
