import {animateProgressBars} from '../helpers/material';
import {getRequest} from '../helpers/network';

// TODO: Extract things like this to a constants file.
const difficulties = {
  'M': 'Mythic',
  'H': 'Heroic',
  'N': 'Normal',
};

/**
 * Creates DOM elements given raiderIO data for the guild.
 */
async function createRaiderIOElements() {
  const url = 'https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression';
  const wanted = ['antorus-the-burning-throne', 'uldir'];

  try {
    const json = await getRequest(url);
    const elem = document.getElementById('guild-progress');
    const loaders = document.getElementById('guild-progress__loaders');
    const raids = Object.entries(json.raid_progression)
      .filter((raid) => wanted.includes(raid[0]));
    const ranks = Object.entries(json.raid_rankings).pop()[1];

    elem.insertAdjacentHTML('afterbegin', createProgressionElements(raids));
    loaders.remove();

    setTimeout(animateProgressBars, 500);

    let key = '';
    if (ranks.mythic.world !== 0) {
      key = 'mythic';
    } else if (ranks.heroic.world !== 0) {
      key = 'heroic';
    } else {
      key = 'normal';
    }

    Object.entries(ranks[key]).map(([region, score]) => {
      let elem = document.querySelector('[data-guild-rank=' + region + ']');

      if (elem) {
        elem.insertAdjacentHTML('afterbegin', score);
      } else {
        console.warn('Element for region ' + region + ' was not found.');
      }
    });
  } catch (error) {
    console.error('RaiderIO network error: ', error);
  }
}

/**
 * Initializes group payment module.
 */
function createGroupPayModule() {
  const module = document.querySelector('.m_grouppay');
  const holder = document.querySelector('#grouppay');

  if (!module) {
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
  return raids.map(([instance, progress]) => {
    return `
    <div class="col-12 raid-progress" data-raid="${instance}">
      <div class="flex-row">
        <div class="col-12 raid-progress__summary">
            <span class="raid-progress__summary-text">${progress.summary}</span>
        </div>
        <div class="col-12 raid-info">
            <span class="raid-difficulty">${difficulties[progress.summary.slice(-1)]}</span>
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
function setupNewsModule() {
  const newsItems = 5;
  const module = document.getElementById('news-api-wrapper');
  const loaders = document.querySelector('.news--loader');

  const request = {
    jsonrpc: '2.0',
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: 'News.getNews',
    params: {
      api_key: '1cda2ce03bfa7f559e6b083ca73e514325664ad1982a9bf8',
      preset_id: '47505231',
      page: 1,
      items: newsItems,
    },
  };

  fetch('/api/v1/api.php', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {'Content-Type': 'application/json'},
  })
  .then((response) => {
    if (!response.ok) {
      throw Error('Enjin API request failed: ', response.statusText);
    }
    return response.json();
  }).then((data) => {
    module.insertAdjacentHTML('beforeend', createNewsElements(data.result));
    loaders.remove();
  }).catch((error) => console.log(error));
}

/**
 * Takes an array of news objects and returns a DOM string.
 * @param {Array} newsItems
 * @return {String} string representation of DOM elements.
 */
function createNewsElements(newsItems) {
  return newsItems.map((article) => {
    let articleElem = document.createElement('div');
    articleElem.innerHTML = article.content;
    const articleText = articleElem.innerText;
    const articleIMG = articleElem.querySelectorAll('img')[0].src;

    return `
    <div class='article col-12'>
      <div class='article__bg' style='background-image: url(${articleIMG})'></div>
      <div class='news-info'>
        <h2 class='news-title'>${article.title}</h2>
        <p class='news-snippet'>${articleText}</p>
      </div>
    </div>`;
  }).join('');
}

/**
 * Initiator function for the homepage.
 */
export default function initialize() {
  const sidebar = document.getElementById('homepage-sidebar');

  if (!sidebar) {
    return;
  }

  setupNewsModule();
  createRaiderIOElements();
  createGroupPayModule();
}
