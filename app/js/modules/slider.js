$(function(){
    const slidesContainer = document.querySelector(`.gesture__slider`);
    const letterImageContainer = document.querySelector(`.letter__image-slider`);
    const letterContainer = document.querySelector(`.letter__slider`);

    function initSlider(){
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

    function initLetterImageSlider(){
        $(letterImageContainer).slick({
            fade: true,
            vertical: false,
            slidesToShow: 1,
            infinite: false,
            dots: false,
            arrows: false,
        });
    }

    function initLetterSlider(){
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
       $(slidesContainer).on('afterChange', function(event, slick, currentSlide, nextSlide){
            if(currentSlide == $(slidesContainer).slick("getSlick").slideCount-1) {
                $(slidesContainer).slick('slickPause');
            }
            $(slidesContainer).slick('slickGoTo', 1);
        });

        $('.js-start-slider').on('click', function(evt){
            evt.preventDefault();
            $(slidesContainer).slick('unslick')
            initSlider();
        })
    }

    if (letterImageContainer && letterContainer) {
        initLetterImageSlider();
        initLetterSlider();

        $(letterContainer).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            console.log(nextSlide);
            $(letterImageContainer).slick('slickGoTo', nextSlide);
        });

        $(letterImageContainer).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            console.log(nextSlide);
            $(letterContainer).slick('slickGoTo', nextSlide);
        });
    }

})