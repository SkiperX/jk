import base from "../../static/js/base/base";

export default function() {

    var context = 'b-gallery-tabs';

    $(`.${context} .tab-pane`).each(function(i,e) {
        var thumbsOption = {
            spaceBetween: 0,
            slidesPerView: 7,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                },
            }
        };
        var galleryThumbs = new Swiper($(this).find(`.gallery-thumbs`), thumbsOption);
        var topOption = {
            spaceBetween: 0,
            navigation: {
                nextEl: `.${context} .swiper-button-next`,
                prevEl: `.${context} .swiper-button-prev`,
            },
            thumbs: {
                swiper: galleryThumbs
            }
        };
        var galleryTop = new Swiper($(this).find(`.gallery-top`), topOption);
    });

    base.setHeight($(`.b-gallery-slider__slide, .${context} iframe`));

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        try {
            $(window).trigger('resize');
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }
    })


}
