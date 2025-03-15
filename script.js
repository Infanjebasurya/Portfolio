$(document).ready(function () {
    // Sticky navbar on scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll to top on scroll-up button click
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto"); // Remove smooth scroll for this action
    });

    // Smooth scroll on menu item click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth"); // Re-enable smooth scroll
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["Front End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Front End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // Owl Carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});