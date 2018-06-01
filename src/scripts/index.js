import {systemFooter} from './footer';
import {initDashboard} from './dashboard';
import {initDrawer, initUserMenu, initAppBar} from './menus';
import {flickityCarousel} from './flickity';
import {initiateHomepage} from './homepage';


// import {MDCSnackbar,MDCSnackbarFoundation} from '@material/snackbar';
if (!('fetch' in window)) {
    console.log('Fetch API is not found, site functionality reduced');
}

initUserMenu();
systemFooter();
initDashboard();
flickityCarousel();
initDrawer();
initiateHomepage();
initAppBar();
