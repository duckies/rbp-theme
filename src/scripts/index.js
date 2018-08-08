import initFooter from './footer';
import initDashboard from './dashboard';
import {initDrawer, initUserMenu, initAppBar} from './menus';
import initCarousel from './hero';
import initHome from './pages/home';
import initApplication from './pages/apply';
import initForum from './pages/forum';
import initRoster from './pages/roster';
import initMDC from './material';
import initAbout from './pages/about';

/**
 *
 * From hence, it is born!
 *
 * TODO: Isolate modules for webpack to load more efficiently.
 *
 */
function loadAll() {
    if (window.duckyload) {
        console.info('[Duckie]: Website scripts already loaded.');
        return;
    }

    window.duckyload = true;

    initUserMenu();
    initCarousel();
    initMDC();
    initFooter();
    initDashboard();
    initDrawer();
    initHome();
    initAppBar();
    initApplication();
    initForum();
    initRoster();
    initAbout();
}

loadAll();
