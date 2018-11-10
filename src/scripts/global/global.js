import sentry from './sentry.js';
import navigation from './nav.js';
import footer from './footer.js';
import head from './head.js';

/**
 * Initializes global functions.
 */
export default function initialize() {
  sentry();
  head();
  navigation();
  footer();
};
