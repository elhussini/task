/*global $, jQyery, alert, console, window*/
$(function () {

//
    //tab

    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
        var tab = $(this).closest('.tab'),
            index = $(this).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        g.preventDefault();
    });


    $('.newsSliderCarousel').owlCarousel({

        margin: 0,
        center: true,
        smartSpeed: 1500,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });





    function setsize() {



        if ($(window).width() < 767) {

            $(".mainBanner").height('auto');

        } else {
            var win_hei = $(window).height(),
                heed = $('header').height();
            $(".mainBanner").height(win_hei - heed);
        }
    }

    setsize();
    $(window).resize(function () {
        setsize();
    });



    // wow

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        }
    );
    wow.init();
//

 var fh = $('footer').innerHeight();
        console.log(fh);
        $('.content').css({
            marginBottom: fh + 'px'
        });
    if ( $(window).width() < 991 ) {
        $('.content').css({
            marginBottom: ''
        })
    }


    $(window).resize(function(){

        var fh = $('footer').innerHeight();
        $('.content').css({
            marginBottom : fh + 'px'
        });

        if ( $(window).width() < 991 ) {
            $('.content').css({
                marginBottom: ''
            })
        }
    });
    //end

});

