import navigation from './nav.js';
import footer from './footer.js';
import head from './head.js';

/**
 * Initializes global functions.
 */
export default function initialize() {
  head();
  navigation();
  footer();
};
