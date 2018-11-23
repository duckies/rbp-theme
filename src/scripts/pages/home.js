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
  const url = 'https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression';
  const wanted = ['antorus-the-burning-throne', 'uldir'];

  try {
    const json = await getRequest(url);
    const elem = document.getElementById('guild-progress');
    const loaders = document.querySelector('.guild-progress__loaders');
    const raids = Object.entries(json.raid_progression)
      .filter((raid) => wanted.includes(raid[0]));
    const ranks = Object.entries(json.raid_rankings).pop()[1];

    elem.insertAdjacentHTML('afterbegin', createProgressionElements(raids));
    loaders.remove();

    setTimeout(animateProgressBars, 500);
    console.log(ranks);
    const key = ((ranks) => {
      switch (ranks) {
      case ranks.mythic.world !== 0:
        return 'mythic';
      case ranks.heroic.world !== 0:
        return 'heroic';
      default:
        return 'normal';
      }
    })(ranks);

    console.log(key);

    // let key = '';
    // if (ranks.mythic.world !== 0) {
    //   key = 'mythic';
    // } else if (ranks.heroic.world !== 0) {
    //   key = 'heroic';
    // } else {
    //   key = 'normal';
    // }

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

  newProgress
    .insertAdjacentHTML('beforeend',
      `<div class="grouppay__days">${document.querySelector('.element_progressbar .clabel').innerHTML}</div>`);

  if (history) {
    holder.querySelector('.grouppay__recent')
      .insertAdjacentHTML('beforeend', history.innerHTML);
  }

  animatedBar.progress = progressValue;

  holder.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    module.querySelector('.add_days_button').click();
  });
}

/**
 * Turns RaiderIO raid progression data into DOM elements.
 * @param {Object} raids
 * @return {String} joined string for DOM insertion.
 */
function createProgressionElements(raids) {
  console.log(raids);
  return raids.map(([instance, progress]) => {
    return `
    <div class="col-12 raid-progress mdc-elevation--z2" data-raid="${instance}">
      <div class="flex-row">
        <div class="col-12 raid-progress__summary">
            <span class="raid-progress__summary-text">${progress.summary}</span>
        </div>
        <div class="col-12 raid-info">
            <span class="raid-difficulty">${config.raid_difficulties[progress.summary.slice(-1)]}</span>
            <span class="raid-name">${instance.replace(/-/g, ' ')}</span>
        </div>
        <div role="progressbar" class="col-12 progressbar mdc-linear-progress" data-scale="${eval(progress.summary.slice(0, -2))}">
          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
              <span class="mdc-linear-progress__bar-linear"></span>
          </div>
        </div>
      </div>
    </div>`;
  }).reverse().join('');
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
      api_key: '1cda2ce03bfa7f559e6b083ca73e514325664ad1982a9bf8',
      preset_id: '47505231',
      page: 1,
      items: 6,
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
  return newsItems.map((article) => {
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
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  carousel();
  createRaiderIOElements();
  createGroupPayModule();
  setupNewsModule();
});
