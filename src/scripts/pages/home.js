import {MDCLinearProgress} from '@material/linear-progress/index';
import {animateProgressBars} from '../helpers/material';
import {getRequest, postRequest} from '../helpers/network';
import config from '../config';
import Flickity from 'flickity-bg-lazyload';
import initializePage from '../global/global';

/**
 * Instantiates homepage carousel.
 */
function carousel() {
  const carousel = document.querySelector('.carousel');

  if (!carousel) {
    return;
  }

  // Flickity needs to be instantiated to a variable.
  // eslint-disable-next-line no-new
  new Flickity(carousel, {
    autoPlay: 5000,
    wrapAround: true,
    bgLazyLoad: 1,
    prevNextButtons: false,
    pageDots: false,
  });
}

/**
 * Creates DOM elements given raiderIO data for the guild.
 */
async function createRaiderIOElements() {
  try {
    const response = await getRequest(config.raiderIO.api);
    const raids = response.raid_progression;
    const ranks = response.raid_rankings[config.progress.slice(-1)[0]];
    const elem = document.getElementById('guild-progress');
    const loaders = document.querySelector('.guild-progress__loaders');

    // eslint-disable-next-line guard-for-in
    for (const id in config.progress) {
      const raidName = config.progress[id];
      const raidData = raids[config.progress[id]];
      elem.insertAdjacentHTML('afterbegin', createProgressionElement(raidName, raidData));
    }

    loaders.remove();

    setTimeout(animateProgressBars, 500);

    let key = 'normal';
    if (ranks.mythic.world !== 0) {
      key = 'mythic';
    } else if (ranks.heroic.world !== 0) {
      key = 'heroic';
    }

    Object.entries(ranks[key]).map(([region, score]) => {
      const elem = document.querySelector('[data-guild-rank=' + region + ']');

      if (elem) {
        elem.insertAdjacentHTML('afterbegin', score);
      } else {
        console.warn('Element for region ' + region + ' was not found.');
      }
    });
  } catch (error) {
    console.error('RaiderIO error: ', error);
  }
}

/**
 * Initializes group payment module.
 */
function createGroupPayModule() {
  const module = document.querySelector('.m_grouppay');
  const holder = document.querySelector('#grouppay');

  if (!module) {
    console.warn('GroupPay module was not found.');
    if (holder) {
      holder.remove();
    }
    return;
  }

  const progress = module.querySelector('.element_progressbar .current');
  const newProgress = holder.querySelector('.mdc-linear-progress');
  const animatedBar = MDCLinearProgress.attachTo(newProgress);
  const progressValue = progress.style.width.slice(0, -1) / 100;
  const history = module.querySelector('.items');

  newProgress.insertAdjacentHTML(
    'beforeend',
    `<div class="grouppay__days">${document.querySelector('.element_progressbar .clabel').innerHTML}</div>`
  );

  if (history) {
    holder.querySelector('.grouppay__recent').insertAdjacentHTML('beforeend', history.innerHTML);
  }

  animatedBar.progress = progressValue;

  holder.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    module.querySelector('.add_days_button').click();
  });
}

/**
 * Turns RaiderIO raid progression data into DOM elements.
 * @param {String} instance
 * @param {JSON} data
 * @return {String} joined string for DOM insertion.
 */
function createProgressionElement(instance, data) {
  const scale = eval(data.summary.slice(0, -2));
  return `
    <div class="col-12 raid-progress mdc-elevation--z2" data-raid="${instance}">
      <div class="flex-row">
        <div class="col-12 raid-progress__summary">
            <span class="raid-progress__summary-text">${data.summary}</span>
        </div>
        <div class="col-12 raid-info">
            <span class="raid-difficulty">${config.raid_difficulties[data.summary.slice(-1)]}</span>
            <span class="raid-name">${instance.replace(/-/g, ' ')}</span>
        </div>
        <div role="progressbar" class="col-12 progressbar mdc-linear-progress" data-scale="${scale}">
          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
              <span class="mdc-linear-progress__bar-linear"></span>
          </div>
        </div>
      </div>
    </div>`;
}

/**
 * Uses Enjin standard API to create news boxes.
 */
async function setupNewsModule() {
  const module = document.getElementById('news-api-wrapper');
  const loaders = document.querySelector('.news--loader');

  if (!module) {
    return;
  }

  const newsData = await postRequest('/api/v1/api.php', {
    jsonrpc: '2.0',
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: 'News.getNews',
    params: {
      api_key: 'c1d9fb6beabb94fb836c3f828766a1a2159015171d17f4a2',
      preset_id: '47505231',
      page: 1,
      items: 5,
    },
  });

  module.insertAdjacentHTML('beforeend', createNewsElements(newsData.result));
  loaders.remove();
}

/**
 * Takes an array of news objects and returns a DOM string.
 * @param {Array} newsItems
 * @return {String} string representation of DOM elements.
 */
function createNewsElements(newsItems) {
  return newsItems
    .map((article) => {
      const responseElem = document.createElement('div');
      responseElem.innerHTML = article.content;
      const articleText = responseElem.innerText;
      const articleIMG = responseElem.querySelectorAll('img')[0].src;

      return `
    <div class='article col-12 mdc-elevation--z2'>
      <div class='article__bg' style='background-image: url(${articleIMG})'></div>
      <div class='news-info'>
        <h2 class='news-title'>${article.title}</h2>
        <p class='news-snippet'>${articleText}</p>
      </div>
    </div>`;
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  carousel();
  createRaiderIOElements();
  createGroupPayModule();
  setupNewsModule();
});
