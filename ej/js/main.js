(function ($) {
    "use strict";

    /////////preloader-active//////////
    
    $(window).load(function () {
        setTimeout(function () {
            $('.spinner').fadeOut("slow");

            setTimeout(function () {
                $('#loading').fadeOut("slow");
                setTimeout(function () {
                    $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                    $('#footer').fadeIn('slow');
                }, 1500);
            }, 1500);
        }, 1500);
    });
    
    
    

     /////////mobile-menu-active//////////

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
    });
    
    


        /////////sticky-menu-active//////////
    
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                $(".main-menu").removeClass("sticky");
            } else {
                $(".main-menu").addClass("sticky");
            }
        });



    /////////banner-active//////////
    
    $('.banner-active').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });



    /////////wow animation-active//////////
    
    new WOW().init();


    /////////testimonial-active//////////
    
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    
    
   /////////brand active//////////
    
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
               {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    
///////    form area validator   //////
    
     $('#validateForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            full_name: {
                validators: {
                    stringLength: {
                        min: 5,
                        message: 'Please Enter your Full name with minimum 5 letters length'
                    },
                    notEmpty: {
                        message: 'Please Enter your Full name'
                    }
                }
            },
            phone: {
                validators: {
                    numeric: {
                        message: 'The phone no must be a number'
                    },
                    notEmpty: {
                        message: 'Please Enter your phone number'
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        min: 15,
                        max: 100,
                        message: 'Please enter at least 15 characters and no more than 100'
                    },
                    notEmpty: {
                        message: 'Please Enter Message'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your email address'
                    },
                    emailAddress: {
                        message: 'Please Enter a valid email address'
                    }
                }
            },
        }
    });

    // /////   //    contact us validateForm
    $('#validateForm_ctn_us').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            full_name: {
                validators: {
                    stringLength: {
                        min: 5,
                        message: 'Please Enter your Full name with minimum 5 letters length'
                    },
                    notEmpty: {
                        message: 'Please Enter your Full name'
                    }
                }
            },
            phone: {
                validators: {
                    numeric: {
                        message: 'The phone no must be a number'
                    },
                    notEmpty: {
                        message: 'Please Enter your phone number'
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        min: 15,
                        max: 100,
                        message: 'Please enter at least 15 characters and no more than 100'
                    },
                    notEmpty: {
                        message: 'Please Enter Message'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your email address'
                    },
                    emailAddress: {
                        message: 'Please Enter a valid email address'
                    }
                }
            },
        }
    });
    

    
    
    $('#click_me').click(function(){
        $('.contact_form').toggleClass('open');
    });

$('.contact_now').click(function(){
        $('.contact_form').toggleClass('open');
    });

    

    /////////back to top active//////////
    
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var back2top = $(".back-to-top")
        if (scrolling > 100) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
    });
    

})(jQuery);
