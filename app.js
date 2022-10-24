$(function () {
    /* Blog Slider */
    let slider = $("#blogSlider");

    slider.slick({
        infinite: true,
        slidersToShow: 1,
        slidersToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});