(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


// Class 6 - 1st Terminal
    $(document).ready(function () {
        $('.class-button').click(function (event) {
            event.preventDefault();
            
            // Close all class sections
            $('.class-resources').hide();
            
            // Open the selected class section
            var targetClass = $(this).attr('class').split(' ')[1];
            $('#' + targetClass + '-resources').show();
            
            // Hide the 1st Terminal section if it's not the computer class 6 section
            if (targetClass !== 'class6') {
                $('#class6-computer-1st-terminal').hide();
            }
            
            // Hide the 1st Terminal section if it's not the computer class 5 section
            if (targetClass !== 'class5') {
                $('#class5-computer-1st-terminal').hide();
            }
        });
    });
    
    function showTerminal(id) {
        $('#' + id).toggle();
    }
    

    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // MyWebsite Part 1 .js Starts


  
    //My Website Part 1 .js File ENDS


    

     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

})(jQuery);

