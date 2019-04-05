
export default function () {
    let context = 'b-video';
    $('body').on('click',`.${context}__image`, function(e) {
        $(this).closest(`.${context}__video`).find('iframe').attr('src',$(this).closest(`.${context}__video`).find('iframe').data('src'));
        $(this).fadeOut();
    })
}
