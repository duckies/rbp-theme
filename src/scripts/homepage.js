// TODO: Extract to some settings file.
const difficulties = {
  'M': 'Mythic',
  'H': 'Heroic',
  'N': 'Normal',
};

/**
 * Creates DOM elements given raiderIO data for the guild.
 */
function createRaiderIOElements() {
  const url = 'https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings,raid_progression';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error('RaiderIO request network error: ', response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
      const elem = document.getElementById('guild-progress');
      const loaders = document.getElementById('guild-progress__loaders');
      const raids = Object.entries(data.raid_progression).slice(-2);
      const ranks = Object.entries(data.raid_rankings).pop()[1];

      elem.insertAdjacentHTML('afterbegin', createProgressionElements(raids));
      loaders.remove();

      let key = '';
      if (ranks.mythic.world !== 0) {
        key = 'mythic';
      } else if (ranks.mythic.world !== 0) {
        key = 'heroic';
      } else {
        key = 'normal';
      }

      Object.entries(ranks[key]).map(([region, score]) => {
        let elem = document.querySelector('[data-guild-rank=' + region + ']');

        if (elem) {
          elem.insertAdjacentHTML('afterbegin', score);
        } else {
          console.log('Element for given region ' + region + ' was not found.');
        }
      });
    })
    .catch((error) => console.log(error));
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
        <div role="progressbar" class="col-12 progressbar mdc-linear-progress">
          <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style="transform: scaleX(${eval(progress.summary.slice(0, -2))})">
              <span class="mdc-linear-progress__bar-linear"></span>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/**
 * Uses Enjin standard API to create news boxes.
 */
function setupNewsModule() {
  const newsItems = 5;
  const module = document.getElementById('news-api-wrapper');
  // const module = $('#news-api-wrapper');
  const request = {
    jsonrpc: '2.0',
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: 'News.getNews',
    params: {
      api_key: '7c6d45f85ff6e3be2836593b793985ca5af6413ef6a1eacd',
      preset_id: '48872030',
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
  }).catch((error) => console.log(error));
}

/**
 * Takes an array of news objects and returns a DOM string.
 * @param {Array} newsItems
 * @return {String} string representation of DOM elements.
 */
function createNewsElements(newsItems) {
  return newsItems.map((article) => {
    // jQuery is simply much easier to use here.
    const articleHTML = $('<div>').html(article.content);
    const articleText = articleHTML.text();
    const articleIMG = $(articleHTML).find('img:first').attr('src');

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
 * Requests Discord online user count.
 */
function setupDiscordCount() {
  fetch('https://discordapp.com/api/guilds/142372929961721856/widget.json')
    .then((response) => {
      if (!response.ok) {
        throw Error('Discord request error: ', response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      const online = data.members.filter((usr) => usr.status === 'online');
      const ele = document.querySelector('#discord-box .discord__description');
      const description = `${online.length} Users Currently Online`;

      ele.insertAdjacentHTML('afterbegin', description);
    }).catch((error) => console.log(error));
}

/**
 * Initiator function for the homepage.
 */
export function initiateHomepage() {
  const sidebar = document.getElementById('homepage-sidebar');

  if (!sidebar) {
    return;
  }

  setupNewsModule();
  createRaiderIOElements();
  setupDiscordCount();
}
