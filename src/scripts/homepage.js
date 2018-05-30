// import { MDCLinearProgress } from "@material/linear-progress";

// TODO: Add logic to determine most relevant ranking.
export function guildRanking() {
  if (!$("#guild-progress").length) { return; };

  const api =
    "https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_rankings";

  $.getJSON(api, function (data) {
    let last_tier = Object.values(data.raid_rankings).pop();
    console.log(last_tier);
    for (var key in last_tier.mythic) {
      $('[data-guild-rank="' + key + '"]').html(last_tier.mythic[key]);
    }
  });
  raidProgressBoxes();
  setupNewsModule();
  setupDiscordCount();
}

function raidProgressBoxes() {
  const api =
    "https://raider.io/api/v1/guilds/profile?region=us&realm=blackrock&name=Really%20Bad%20Players&fields=raid_progression";
  const num_relevant_raids = 2;
  const difficulty_map = {
    M: "Mythic",
    H: "Heroic",
    N: "Normal"
  };

  $.getJSON(api, function (data) { }).done(data => {
    const keys = Object.keys(data.raid_progression).slice(-num_relevant_raids);
    const module = $("#guild-progress");
    const loaders = $("#guild-progress__loaders");
    let blocks = "";

    for (var key in keys) {
      const raid_name = keys[key];
      const raid = data.raid_progression[raid_name];
      const defeated_text = raid.summary.slice(0, -2);
      const scale = eval(defeated_text);
      const difficulty = difficulty_map[raid.summary.slice(-1)];
      const friendly_name = raid_name.replace(/-/g, " ");

      blocks =
        `<div class="col-12 raid-progress" data-raid="${raid_name}">
            <div class="flex-row">
                <div class="col-12 raid-progress__summary">
                    <span class="raid-progress__summary-text">${defeated_text}</span>
                </div>
                <div class="col-12 raid-info">
                    <span class="raid-difficulty">${difficulty}</span>
                    <span class="raid-name">${friendly_name}</span>
                </div>
                <div role="progressbar" class="col-12 progressbar mdc-linear-progress" data-progress="${defeated_text}">
                    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                        <span class="mdc-linear-progress__bar-linear"></span>
                    </div>
                </div>
            </div>
        </div>` + blocks;
    }
    module.append(blocks);
    loaders.remove();

    // This is pretty inelegant, but I couldn't get the
    // mdc functions to work with generated content.
    $(window).load(function () {
      $(".mdc-linear-progress").each(function () {
        $(this)
          .find(".mdc-linear-progress__bar")
          .css("transform", "scaleX(" + eval($(this).data("progress")) + ")");
      });
    });
  });
}

function setupNewsModule() {
  const num_news_items = 5;
  const module = $("#news-api-wrapper");
  const request = {
    jsonrpc: "2.0",
    id: Math.round(Math.random() * (999999 - 100000) + 100000),
    method: "News.getNews",
    params: {
      api_key: '7c6d45f85ff6e3be2836593b793985ca5af6413ef6a1eacd',
      preset_id: "48872030",
      page: 1,
      items: num_news_items
    }
  };

  $.post("/api/v1/api.php", JSON.stringify(request), function (response) {
    if (response.result) {
      for (let article of response.result) {
        let article_as_html = $("<div>").html(article.content);
        let article_text = article_as_html.text();
        let article_img = $(article_as_html)
          .find("img:first")
          .attr("src");

        module.append(`
        <div class="article col-12">
          <div class="article__bg" style="background-image: url(${article_img})"></div>
          <div class="news-info">
          <h2 class="news-title">${article.title}</h2>
          <p class="news-snippet">${article_text}</p>        
        </div>
        </div>
        `);
      }
    } else if (response.error) {
      console.log("[Quack][News API]: " + response.error.message);
    }
  });
}

function setupDiscordCount() {
  $.getJSON(
    "https://discordapp.com/api/guilds/142372929961721856/widget.json",
    function (data) {
      let online_users = 0;

      for (var member in data.members) {
        if (data.members[member]["status"] === "online") {
          online_users++;
        }
      }
      const module = $("#discord-box .discord__description");
      if (module) {
        module.html(online_users + " Users Currently Online");
      }
    }
  );
}
