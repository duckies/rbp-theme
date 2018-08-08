import Flickity from 'flickity-bg-lazyload';

/**
 * Instantiates homepage carousel element.
 */
export default function initialize() {
    const carousel = document.querySelector('.carousel');

    if (carousel) {
        new Flickity(carousel, {
            autoPlay: 5000,
            wrapAround: true,
            bgLazyLoad: 1,
            prevNextButtons: false,
            pageDots: false,
        });
    }
}
