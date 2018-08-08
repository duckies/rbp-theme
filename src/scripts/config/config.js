export const BlizzardAPI = {
    KEY: 'e82qmvhf6egvsqdmpemmps2dskp62teu',
    GUILD: 'Really Bad Players',
    REALM: 'Blackrock',
    AVATAR_BASE: 'https://render-us.worldofwarcraft.com/character/',
    rosterURL: function() {
        return `https://us.api.battle.net/wow/guild/${this.REALM}/${encodeURIComponent(this.GUILD)}?fields=members&locale=en_US&apikey=${this.KEY}`;
    },
};
