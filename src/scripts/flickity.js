import Flickity from 'flickity-bg-lazyload';

/**
 * Instantiates homepage carousel element.
 */
export function flickityCarousel() {
    const carousel = document.querySelector('.carousel');

    if (carousel) {
        new Flickity(carousel, {
            autoPlay: 5000,
            // cellAlign: 'center',
            wrapAround: true,
            bgLazyLoad: 1,
            prevNextButtons: false,
            pageDots: false,
        });
    }
}
