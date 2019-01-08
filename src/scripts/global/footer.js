import {getRequest} from '../helpers/network';

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

      for (const channel of channels) {
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
 * Initializer for footer.
 */
export default function initialize() {
  setupDiscord();
}
