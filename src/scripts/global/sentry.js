/**
 * Initializer
 */
export default function initialize() {
  if (Sentry) {
    Sentry.init({
      dsn: 'https://26c15a32dfc6457cae94b98a9876c8e3@sentry.io/199271',
    });
  } else {
    console.warn('Sentry was not found.');
  }
}
