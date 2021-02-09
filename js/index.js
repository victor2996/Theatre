$(document).ready(function () {
    $(window).scroll(function () {
        if (pageYOffset > 100) {
            $('.navbar').addClass('navbar-active');
            $('.navbar__phone').addClass('navbar__phone-active');
            $('.container-adaptive').removeClass('container');
            $('.navbar__burger').addClass('navbar__burger-active');
        } else {
            $('.navbar').removeClass('navbar-active');
            $('.navbar__phone').removeClass('navbar__phone-active');
            $('.container-adaptive').addClass('container');
            $('.navbar__burger').removeClass('navbar__burger-active');
        }
    });
});

$(document).ready(function () {
    $('.navbar__menu, .navbar__burger_menu').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function () {
    $('.navbar__burger_icon').click(function (event) {
        $('.navbar__burger_menu').addClass('open');
    });
});
$(document).ready(function () {
    $('.navbar__burger_menu-close').click(function (event) {
        $('.navbar__burger_menu').removeClass('open');
    });
});
$(document).ready(function () {
    $('.poster__show .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navElement: 'div'
    });
});
$(document).ready(function () {
    $('.supplies__slider .owl-carousel').owlCarousel({
        items: 4,
        freeDrag: false,
        autoWidth: true,
        autoHeight: true,
        loop: true
    });
});
$(document).ready(function () {
    $('.owl-carousel.carousel-top').owlCarousel({
        responsive: {
            0: {
                items: 2,
                loop: true,
                autoWidth: false,
                autoHeight: false,
                margin: 50
            },
            575: {
                items: 2,
                loop: true,
                autoWidth: false,
                autoHeight: false,
                margin: 80
            },
            768: {
                items: 4,
                loop: true,
                autoWidth: true,
                autoHeight: true,
                margin: 80
            }
        }
    });
});
$(document).ready(function () {
    $('.owl-carousel.carousel-bottom').owlCarousel({
        responsive: {
            0: {
                items: 2,
                loop: true,
                autoWidth: false,
                autoHeight: false,
                margin: 50
            },
            575: {
                items: 2,
                loop: true,
                autoWidth: false,
                autoHeight: false,
                margin: 80
            },
            768: {
                items: 4,
                loop: true,
                autoWidth: true,
                autoHeight: true,
                margin: 80
            }
        }
    });
});
