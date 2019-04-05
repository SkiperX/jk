export default function() {


    $(".gamburger").on("click", function (e) {

        $(".gamburger").toggleClass("open");
        $('body').toggleClass('menu-open');

        if ($(this).is('.open')) {
            $(".page__menu").addClass('page__menu_open')
        } else {
            $(".page__menu").removeClass('page__menu_open')
        }

        return false
    });
}
