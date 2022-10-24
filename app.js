$(function () {
    /* Blog Slider */
    let slider = $("#blogSlider");

    slider.slick({
        infinite: true,
        slidersToShow: 2,
        slidersToScroll: 2,
        fade: true,
        arrows: false,
        dots: true
    });

});