
export default class Base {
    constructor() {

    }
    static setHeight($e) {
        function a($e) {
            var h = 0;
            $e.css('height', '');
            $($e).each(function(e) {
                if ($(this).outerHeight(true) > h) {
                    h = $(this).outerHeight(true);
                }
            });
            $($e).outerHeight(h);
        }
        a($e);
        $(window).resize(function () {
            a($e);
        });
        $e.find('img').load(function () {
            a($e);
        })
    }
}
