$(function () {
    /* waypoints  */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('static');
        }
        else {
            $('nav').removeClass('static');
        }

    }, {
            offset: '80px'
        });


    /* Buttons Scrolls  */
    $('.js--btnSeeMore').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });
    
    $('.js--btnOrder').click(function () {
        $('html,body').animate({ scrollTop: $('.js--Order').offset().top }, 1000);
    });

  

    /* Smooth Scrolling  */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $('.js--navIcon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--navIcon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-circled');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-circled');
        }
    });

});



