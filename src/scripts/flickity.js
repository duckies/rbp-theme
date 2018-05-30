import Flickity from 'flickity-bg-lazyload';

export function flickityCarousel() {
    var carousel = document.querySelector('.carousel');

    if (carousel) {
        var flkty = new Flickity(carousel, {
            autoPlay: true,
            // cellAlign: 'center',
            wrapAround: true,
            bgLazyLoad: 1,
            prevNextButtons: false,
            pageDots: false,
        });
    }
}