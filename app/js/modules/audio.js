$(function(){
    $('.js-audio').on('click', function(evt){
        evt.preventDefault();
        var audio = new Audio;
        audio.src = $(this).attr('data-src');
        audio.play();
    })
});