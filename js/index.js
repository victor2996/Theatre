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
    $('.poster__show .owl-carousel').owlCarousel({
        items: 1
    });
});
