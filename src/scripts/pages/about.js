import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';
import * as basicLightbox from 'basiclightbox';

const panels = document.querySelector('.panels');

const map = {
  'guild': 0,
  'ranks': 1,
  'loot': 2,
  'addons': 3,
};

/**
 * Updates the index of the active tab.
 * @param {int} index
 */
function updatePanel(index) {
  let activePanel = panels.querySelector('.panel.active');

  if (activePanel) {
    activePanel.classList.remove('active');
  }

  let newActivePanel =
    panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
  if (newActivePanel) {
    newActivePanel.classList.add('active');
  }
}

/**
 * Creates the tab bar.
 */
function handleTabs() {
  const panel = map[window.location.hash.substr(1)];
  const toolbar = new MDCTabBar(document.querySelector('.about-tabs'));
  const tabs = document.querySelectorAll('.about-tabs .mdc-tab');
  const ranksButton = document.querySelector('.ranks-button');
  const buttons = document.querySelectorAll('.addon-block--btn');
  let index = 0;

  buttons.forEach((button) => MDCRipple.attachTo(button));

  panels.querySelectorAll('.lightbox').forEach((img) => {
    img.addEventListener('click', (e) => {
      basicLightbox.create(`<img src='${img.dataset.src}'>`).show();
    });
  });

  if (ranksButton) {
    ranksButton.addEventListener('click', (e) => {
      e.preventDefault();
      index = 1;
      toolbar.activateTab(index);
      updatePanel(index);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      if (history.pushState) {
        history.pushState(null, null, tab.getAttribute('href'));
      } else {
        location.hash = tab.getAttribute('href');
      }
      e.preventDefault();
    });
  });

  if (panel) {
    toolbar.activateTab(panel);
    updatePanel(panel);
  }

  toolbar.listen('MDCTabBar:activated',
    ({detail: tabs}) => updatePanel(tabs.index));
}

/**
 * Initializes about page event handlers.
 */
export default function initialize() {
  const pageElem = document.querySelector('#page-about .about');

  if (!pageElem) {
    return;
  }

  handleTabs();
}
