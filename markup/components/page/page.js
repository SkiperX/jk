
import svg4everybody from 'svg4everybody/dist/svg4everybody'
import Inputmask from "inputmask/dist/inputmask/inputmask.numeric.extensions";


export default function() {
    /* */
    $.fn.extend({
        autoHeight: function () {
            function autoHeight_(element) {
                var a = $(element).outerHeight() - $(element).height();
                return $(element)
                    .css({'height': 'auto', 'overflow-y': 'hidden'})
                    .height(element.scrollHeight - a);
            }

            return this.each(function () {
                autoHeight_(this).on('input', function () {
                    autoHeight_(this);
                });
            });
        }
    });
    /**/

    if (($("body").width() > 991) && ($(window).height() > 650)) {
        $("body").prepend($(".page-header").clone().addClass("fixed-header"));
        /*$(window).scroll(function () {
            if ($(window).scrollTop() > $(".page-header").outerHeight() +200) {
                $(".fixed-header").addClass("sticky");

                $(".page__up").fadeIn();

            } else {
                $(".fixed-header").removeClass("sticky");

                $(".page__up").fadeOut();

            }
        })*/
        $(".page__up").on('click', function() {
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 800);
            return false;
        });
        $('body').keydown(function (e) {
            if (e.which == '9') {
                $('body').addClass('tab-user');
            }
        });
    }
    svg4everybody();

    $(".form-control").focus(function(e){
        $(this).parent().addClass("is-active is-completed");
    });

    $(".form-control").on('change blur', function(e){
        mInputSetState()
    })
    mInputSetState()
    function mInputSetState() {
        $(".form-control").each(function(i,e) {
            if($(this).val() === "") {
                $(this).parent().removeClass("is-completed");
                $(this).parent().removeClass("is-active");
            } else {
                $(this).parent().addClass("is-active is-completed");
            }
        })
    }



    function addScript(link, callback) {
        var script = document.createElement('script');
        script.src = link;
        document.body.appendChild(script);
        script.onload = function() {
            callback()
        };
    }

    $('.lightgallery').lightGallery({
        selector: 'a',
    });
    //$('input[type="tel"]').inputmask("+9 (999) 999-99-99");
    new Inputmask("+9 (999) 999-99-99").mask('input[type="tel"]')


    $('.selectric').selectric();


    $("textarea.form-control").autoHeight();

    $('.modal').on('shown.bs.modal', function (e) {
        try {
            $("textarea.form-control").autoHeight();
            $(window).trigger('resize');
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent .initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }

    })

    $('.datepicker-here').datepicker({
        autoClose: true
    })

    $('.modal').each(function (i, e) {
        $(this).appendTo('body')
    });

    //$('.selectric').selectric();

    $('[data-js-sync]').on('blur', function (e) {

        const name = $(this).attr('data-js-sync')
        const val = $(this).val();
        $(`[data-js-sync='${name}']`).val(val);
        mInputSetState()
    })

    $('.page__wrapper > *:not(.modal), .page-footer, .page-header').find('.container').each(function(i, e) {

        if ($(this).closest('.modal, .fixed-header, .swiper-container').length) {

        } else {
            if ($(this).offset().top < $(window).height()) {

            } else {
                $(this).addClass('wow').addClass('fadeInMy');
            }

        }
    })
    new WOW().init({
        offset:       100
    });
}


