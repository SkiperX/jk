export default function () {
    window.loc = []
    $('.b-floor-choice__svg').on('click', function(e) {
        let percentX = e.offsetX / ($('.b-floor-choice__svg').width() / 100);
        let percentY = e.offsetY / ($('.b-floor-choice__svg').height() / 100);

        let posX = Math.round(1440/100*percentX);
        let posY = Math.round(1131/100*percentY);
        window.loc.push(`${posX},${posY}`);
        console.log(window.loc.join(' '));
    })

    $('.b-floor-choice').mousemove(function(e) {
        console.log(e.offsetY)
        //$('.b-floor-choice__label').css('top', e.offsetY+'px').css('left',  e.offsetX+'px');
    })
    $('.b-floor-choice [data-floor]').mouseenter(function (e) {
        $('.b-floor-choice__label').addClass('b-floor-choice__label_show');
        $('.b-floor-choice__label-num').text($(this).attr('data-floor'));
        $('.b-floor-choice__label').css('top', $(this).attr('data-floor-y')+'%').css('left',  $(this).attr('data-floor-x')+'%');
    })
    $('.b-floor-choice [data-floor]').mouseleave(function (e) {
        $('.b-floor-choice__label').removeClass('b-floor-choice__label_show');
    })
}
