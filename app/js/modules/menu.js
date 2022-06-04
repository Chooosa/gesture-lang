$(function () {
    let menuOpen = false;
    let currentMenuItem;
    $('.js-menu').on('click', function(evt){
        evt.preventDefault();
        if (!menuOpen) {
            currentMenuItem = $('.footer__item--active');
            currentMenuItem.removeClass('footer__item--active');
            $(this).find('span').text('Закрыть');
            $(this).parent().addClass('footer__item--active');
            $('.overlay').fadeIn(300);
            $('.footer__submenu').fadeIn(300);
            menuOpen = true;
        } else {
            currentMenuItem.addClass('footer__item--active');
            $(this).find('span').text('Меню');
            $(this).parent().removeClass('footer__item--active');
            $('.overlay').fadeOut(300);
            $('.footer__submenu').fadeOut(300);
            menuOpen = false;
        }
    })
});