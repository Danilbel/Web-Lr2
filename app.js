$(function () {
    let header = $("#header");
    let headerH = header.height();

    /* Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elId = $(this).data('scroll');
        let elOffset = $(elId).offset().top;
        headerH = header.height();

        $("html, body").animate({
            scrollTop: elOffset - headerH
        });
    });


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

    /* Scroll Up */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

