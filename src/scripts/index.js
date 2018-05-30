import { systemFooter } from './footer';
import { initDashboard } from './dashboard';
import { initDrawer, initUserMenu, initAppBar } from './menus';
import { flickityCarousel } from './flickity';
import { guildRanking } from './homepage';

systemFooter();
initDashboard();
flickityCarousel();
initUserMenu();
initDrawer();
guildRanking();
initAppBar();