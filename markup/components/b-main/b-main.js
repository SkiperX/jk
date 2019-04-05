import base from "../../static/js/base/base";

export default function () {


    if ($('.b-main').length) {
        function fixHead() {
            if ($('body').width() <= 991) {
               // return
            }
            $('.page__header + *').find('.b-main__slide').css('padding-top', '');
            $('.page__header').css('margin-bottom', '');

            var p = parseFloat($('.page__header + *').find('.b-main__slide').eq(0).css('padding-top'));
            var h = parseFloat($('.page__header').outerHeight());
            var headH = $('.page__header').outerHeight();

            var headPadding = p+h;

            $('.page__header + *').find('.b-main__slide').css('padding-top', headPadding + 'px');
            $('.page__header')
                .css('margin-bottom', -headH)
                .addClass('page__header_white');
        }
        fixHead()
    }


    let context = 'b-main'
    let swiper = new Swiper(`.${context} .swiper-container`, {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: `.${context} .swiper-button-next`,
            prevEl: `.${context} .swiper-button-prev`,
        },
    });
    base.setHeight($(`.${context}__slide`))



}

