$(function () {
    let menuOpen = false;
    let currentMenuItem;
    $('.js-menu').on('click', function (evt) {
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
let numSlide = 0;
$(function () {
    const slidesContainer = document.querySelector(`.gesture__slider`);
    const letterImageContainer = document.querySelector(`.letter__image-slider`);
    const letterContainer = document.querySelector(`.letter__slider`);

    function initSlider() {
        $(slidesContainer).slick({
            autoplay: true,
            autoplaySpeed: 800,
            fade: true,
            vertical: false,
            slidesToShow: 1,
            infinite: false,
            dots: true,
            arrows: false,
        });
    }

    function initLetterImageSlider() {
        $(letterImageContainer).slick({
            fade: true,
            vertical: false,
            slidesToShow: 1,
            infinite: false,
            dots: false,
            arrows: false,
        });
    }

    function initLetterSlider() {
        $(letterContainer).slick({
            fade: true,
            vertical: false,
            slidesToShow: 1,
            infinite: false,
            dots: true,
            arrows: true,
        });
    }

    if (slidesContainer) {
        initSlider();
        $(slidesContainer).on('afterChange', function (event, slick, currentSlide, nextSlide) {
            if (currentSlide == $(slidesContainer).slick("getSlick").slideCount - 1) {
                $(slidesContainer).slick('slickPause');
            }
            $(slidesContainer).slick('slickGoTo', 1);
        });

        $('.js-start-slider').on('click', function (evt) {
            evt.preventDefault();
            $(slidesContainer).slick('unslick')
            initSlider();
        })
    }

    if (letterImageContainer && letterContainer) {
        initLetterImageSlider();
        initLetterSlider();

        $(letterContainer).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            numSlide = nextSlide;
            $(letterImageContainer).slick('slickGoTo', nextSlide);
        });

        $(letterImageContainer).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $(letterContainer).slick('slickGoTo', nextSlide);
        });
    }

    $('.js-audio').on('click', function (evt) {
        evt.preventDefault();
        let currentSlide = $(letterContainer).slick('slickCurrentSlide');
        let audio = new Audio;

        let currentRusAudio = '';
        let arrRusWord = $('.rusWord');

        let rusWord1 = arrRusWord[0] ? (($(arrRusWord[0]).html()).replace(/,/g, "")).toLowerCase() : '';
        let rusWord2 = arrRusWord[1] ? (($(arrRusWord[1]).html()).replace(/,/g, "")).toLowerCase() : '';
        let rusWord3 = arrRusWord[2] ? (($(arrRusWord[2]).html()).replace(/,/g, "")).toLowerCase() : '';

        let currentBashAudio = '';
        let arrBashWord = $('.bashWord');

        let bashWord1 = arrBashWord[0] ? (($(arrBashWord[0]).html()).replace(/,/g, "")).toLowerCase() : '';
        let bashWord2 = arrBashWord[1] ? (($(arrBashWord[1]).html()).replace(/,/g, "")).toLowerCase() : '';
        let bashWord3 = arrBashWord[2] ? (($(arrBashWord[2]).html()).replace(/,/g, "")).toLowerCase() : '';

        if ($(this).index() === 1) {
            switch (currentSlide) {
                case 0:
                    currentRusAudio = rusWord1;
                    break;
                case 1:
                    currentRusAudio = rusWord2;
                    break;
                case 2:
                    currentRusAudio = rusWord3;
                    break;
                default:
            }
            audio.src = `/app/audio/russianWords/${currentRusAudio}.mp3`;
        } else {

            switch (currentSlide) {
                case 0:
                    currentBashAudio = bashWord1;
                    break;
                case 1:
                    currentBashAudio = bashWord2;
                    break;
                case 2:
                    currentBashAudio = bashWord3;
                    break;
                default:
            }
            audio.src = `/app/audio/bashkirWords/${currentBashAudio}.mp3`;
        }
        audio.play();
    })

    $('.letter-audio').on('click', function (evt) {
        evt.preventDefault();
        let audio = new Audio;

        let letter = $('.letter').html();

        audio.src = `/app/audio/letters/${letter[0]}.mp3`;
        audio.play();
    })
})