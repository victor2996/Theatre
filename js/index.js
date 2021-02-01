$(document).ready(function () {
    $(window).scroll(function () {
        if (pageYOffset > 100) {
            $('.navbar').addClass('navbar-active');
            $('.navbar__phone').addClass('navbar__phone-active');
            $('.container-adaptive').removeClass('container');
        } else {
            $('.navbar').removeClass('navbar-active');
            $('.navbar__phone').removeClass('navbar__phone-active');
            $('.container-adaptive').addClass('container');
        }
    });
});
$(document).ready(function () {
    $('.navbar__menu').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function () {
    $('.poster__show .owl-carousel').owlCarousel({
        items: 1
    });
});
$(document).ready(function () {
    $('.supplies__images .owl-carousel').owlCarousel({
        items: 4,
        freeDrag: false,
        autoWidth: true,
        autoHeight: true,
        loop: true
    });
});
// $(document).ready(function () {
//     $('.supplies__slider .owl-carousel').owlCarousel({
//         items: 2,
//         freeDrag: false,
//         autoWidth: true,
//         autoHeight: true,
//         loop: true
//     });
// });
$(document).ready(function () {
    $('.owl-carousel.carousel-top').owlCarousel({
        items: 4,
        autoWidth: true,
        autoHeight: true,
        loop: true,
        margin: 80
    });
});
$(document).ready(function () {
    $('.owl-carousel.carousel-bottom').owlCarousel({
        items: 4,
        autoWidth: true,
        autoHeight: true,
        loop: true,
        margin: 80
    });
});
