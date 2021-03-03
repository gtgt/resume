(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href^="#"]:not([href="#"])').click(function(e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var hash = this.hash, $target = $(hash);
            $target = $target.length ? $target : $('[name=' + hash.slice(1) + ']');
            if ($target.length) {
                e.preventDefault();
                let $sideNav = $('.navbar-brand', '#sideNav'), sideNavHeight = $sideNav.outerHeight();
                let offset = $sideNav.width() > sideNavHeight ? sideNavHeight : 0;
                $('html, body').animate({scrollTop: $target.offset().top - offset}, 1000, 'easeInOutExpo', function() {
                    if (hash !== location.hash) {
                        history.pushState({}, '', hash);
                    }
                });
                return false;
            }
        }
    });
    $(window).on('load', function() {
        if (location.hash) {
            $('a.js-scroll-trigger[href^="'+location.hash+'"]').triggerHandler('click');
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav',
        offset: 50,
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    // Initiate aos_init() function
    aos_init();

    // Hero typed
    $('.typed').each(function() {
        var typed_strings = $(this).data('typed-items');
        typed_strings = typed_strings.split(',');
        new Typed(this, {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    });

    $(window).on('load', function() {
        // Porfolio isotope (filter)
        if ($.fn.isotope) {
            var $projectIsotope = $('.project-container').isotope({
                itemSelector: '.project-item'
            });

            $('#project-filters li').on('click', function() {
                $('#project-filters li').removeClass('filter-active');
                $(this).addClass('filter-active');

                $projectIsotope.isotope({
                    filter: $(this).data('filter')
                });
                aos_init();
            });
        }
        // Initiate venobox (lightbox feature used in portofilo)
        if ($.fn.venobox) {
            $('.venobox').venobox({
                'titleattr': 'data-title',
                'share': false
            });
        }
    });

    // Project details carousel
    if ($.fn.owlCarousel) {
        $('.project-details-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            loop: true,
            items: 1,
            autoHeight: true,
        });
    }

})(jQuery); // End of use strict
