$(document).ready(function () {

    //sliders

    function causeSlider() {
        if ($(window).width() < 650) {
            $('.cause__items').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                dots: true,
                autoplay: true,
            });
        } else {
            $('.cause__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function whoSlider() {
        if ($(window).width() < 550) {
            $('.who__items').slick({
                infinite: true,
                slidesToShow: 1,
                arrows: false,
                dots: true,
                autoplay: true,
            });
        } else {
            $('.who__items').filter('.slick-initialized').slick('unslick');
        }
    }


    $(window).resize(function () {
        whoSlider();
        causeSlider();

    })

    causeSlider();
    whoSlider();









});