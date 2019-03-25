/* eslint-disable guard-for-in */
import {getRequest} from '../helpers/network';
import {inspect} from 'util';

const config = {
  WarcraftLogs: {
    reports:
      'https://www.warcraftlogs.com:443/v1/reports/guild/really%20bad%20players/blackrock/us?api_key=6dfe043fbb2217edc837899252dd063b',
    report: 'https://www.warcraftlogs.com:443/v1/report/fights/{}?api_key=6dfe043fbb2217edc837899252dd063b',
  },
  zones: {
    21: "Battle of Dazar'alor",
    19: 'Uldir',
    17: 'Antorus, the Burning Throne',
  },
  raids: [],
};

const createZoneBlocks = async () => {
  const raidsElem = document.querySelector('#page-statistics .raids');
  const reports = await getRequest(config.WarcraftLogs.reports);
  console.log(reports);

  for (const report in reports) {
    if (reports[report].zone === -1) {
      continue;
    }

    if (!(reports[report].zone in config.raids)) {
      config.raids[reports[report].zone] = [];
    }

    config.raids[reports[report].zone].push(reports[report]);
  }

  console.log(config.raids);

  const elements = [];
  for (const zone in config.raids) {
    const name = zone in config.zones ? config.zones[zone] : 'Unknown Raid';
    elements.push(`<div class="raids--raid" data-zone="${zone}">
      <h2>${name}</h2>

      <div class="raids--reports" data-zone="${zone}">
        ${getReportElems(config.raids[zone])}
      </div>
    </div>
`);
  }
  raidsElem.insertAdjacentHTML('beforeend', elements.reverse().join(''));
};

const getReportElems = (reports) => {
  return reports
    .map((report) => {
      return `<div class="raid--reports-report" data-id="${report.id}" data-zone="${report.zone}">
      <span class="raid--reports-owner">${report.owner}</span>
      <span class="raid--reports-title">${report.title}</span>
      <span class="raid--reports-date">${report.start}</span>
      <button class="mdc-button" onclick="reportInspect(this.parentNode)" type="button">Mechanic Statistics</button>
    </div>`;
    })
    .join('');
};

const reportInspect = async (reportElem) => {
  const id = reportElem.getAttribute('data-id');
  const report = await getRequest(
    `https://www.warcraftlogs.com:443/v1/report/fights/${id}?api_key=6dfe043fbb2217edc837899252dd063b`
  );

  console.log(report);
};

window.reportInspect = reportInspect;

document.addEventListener('DOMContentLoaded', () => {
  createZoneBlocks();
});
