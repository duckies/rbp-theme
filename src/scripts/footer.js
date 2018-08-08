import {getRequest} from './helpers/network';

/**
 * Injects the footer into the system page since
 * enjin is sensationalist and rmeoves footers here.
 */
function injectFooter() {
  const element = document.querySelector('#section-footer .section');

  element.insertAdjacentHTML('beforeend', `
    <footer class="footer">
        <div class="flex-container">
            <div class="footer__background">
                <div class="footer__top">
                    <div class="footer-block footer-block--padded">
                        <div class="footer__logo">
                            <img src="https://s3.amazonaws.com/files.enjin.com/632721/material/images/logo_medium.png">
                        </div>
                        <div class="footer__description">
                            <span class="footer__description--guild">Really Bad Players</span>
                            <span class="footer__description--info">US / Blackrock / Horde</span>
                        </div>
                    </div>
                    <div class="footer-block footer-block--padded">
                        <div class="footer-block--title">Navigation</div>
                        <ul class="footer-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/apply">Application</a></li>
                            <li><a href="/forum">Forum</a></li>
                            <li><a href="/roster">Roster</a></li>
                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">Logs</a></li>
                        </ul>
                    </div>
                    <div class="footer-block footer-block--padded">
                        <div class="footer-block--title">About</div>
                        <ul class="footer-list">
                            <li><a href="/about#guild">Guild History</a></li>
                            <li><a href="/about#ranks">Ranking Structure</a></li>
                            <li><a href="/about#loot">Loot Distribution</a></li>
                            <li><a href="/about#addons">Required Addons</a></li>
                        </ul>
                    </div>
                    <div class="footer-block footer-block--padded">
                        <div class="footer-block--title">Resources</div>
                        <ul class="footer-list">
                            <li><a href="https://www.warcraftlogs.com/guild/id/5825">WarcraftLogs</a></li>
                            <li><a href="https://www.wowprogress.com/guild/us/blackrock/Really+Bad+Players">Wowprogress</a></li>
                            <li><a href="https://raider.io/guilds/us/blackrock/Really%20Bad%20Players">Raider.IO</a></li>
                            <li><a href="https://www.raidbots.com/simbot">Raidbots</a></li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <div class="discord-parent">
                            <div class="discord-title">Discord</div>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="footer__bottom--left">
                        <span class="copyright-info">Copyright © Really Bad Players. All rights reserved.</span>
                    </div>
                    <div class="footer__bottom--right">
                        <span class="footer-links">Designed by <a href="https://worldofwarcraft.com/en-us/character/blackrock/duckie">Duckie</a> Powered by <a href="https://www.enjin.com/">Enjin</a></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>`);
}

/**
 * Creates a discord channel element.
 * @param{String} channelName
 * @param{String} channelID
 * @return {Node} channel
 */
function createChannel(channelName, channelID) {
  const channel = document.createElement('div');
  const name = document.createElement('div');
  const members = document.createElement('div');

  members.classList.add('discord-widget__members');
  channel.classList.add('discord-widget__channel');
  channel.setAttribute('data-id', channelID);
  name.classList.add('discord-widget__channel__name');
  name.innerHTML = channelName;

  channel.appendChild(name);
  channel.appendChild(members);
  return channel;
}

/**
 * Creates a Discord member node.
 * @param {String} memberName
 * @param {String} memberAvatar
 * @param {String} playing
 * @return {Node} member
 */
function createMember(memberName, memberAvatar, playing) {
  const member = document.createElement('div');
  const avatarWrap = document.createElement('div');
  const avatarImg = document.createElement('img');
  const name = document.createElement('span');

  member.classList.add('discord-widget-member');
  avatarWrap.classList.add('discord-widget-member__avatar');
  avatarImg.src = memberAvatar;
  name.innerHTML = memberName;
  name.classList.add('discord-widget-member__name');

  avatarWrap.appendChild(avatarImg);
  member.appendChild(avatarWrap);
  member.appendChild(name);

  if (playing) {
    const game = document.createElement('span');
    game.classList.add('discord-widget-member__game');
    game.innerHTML = playing.name;
    member.appendChild(game);
  }

  return member;
}

/**
 * Creates Discord channel view.
 */
async function setupDiscord() {
  const element = document.querySelector('.discord-parent');
  let onlineCount = 0;

  if (element) {
    try {
      const json = await getRequest('https://discordapp.com/api/servers/142372929961721856/embed.json');
      const channels = json['channels'].sort((a, b) => a.position - b.position);
      const discord = document.createElement('div');
      discord.classList.add('discord-widget');

      for (let channel of channels) {
        discord.appendChild(createChannel(channel.name, channel.id));
      }

      // Specialty online channel.
      discord.appendChild(createChannel('Online Users', 0));

      for (const member of json['members']) {
        if (member['channel_id']) {
          const channel =
            discord.querySelector('div[data-id="' + member.channel_id + '"]');

          channel.appendChild(createMember(member.username, member.avatar_url));
        }

        const channel =
          discord.querySelector('div[data-id="0"] .discord-widget__members');

        if (member['status'] === 'online') {
          onlineCount++;
          channel.appendChild(
            createMember(member.username, member.avatar_url, member.game));
        }
      }

      // Append the count to the sidebar description.
      const sidebarElement =
        document.querySelector('#discord-box .discord__description');
      if (sidebarElement) {
        const description = `${onlineCount} Members Currently Online`;
        sidebarElement.innerHTML = description;
      }

      element.appendChild(discord);
    } catch (error) {
      console.error('Discord widget failure ' + error);
    }
  }
}

/**
 * Initializer
 */
export default function initialize() {
  // Tampering with the system page could change this number, spooky!
  const SYSTEM_PAGE = 13020514;

  if (current_page_id === SYSTEM_PAGE) {
    injectFooter();
  }

  setupDiscord();
}
