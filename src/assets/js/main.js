;(function($) {
    "use strict";

    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( $('.main_menu_area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();



    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"normal",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        hide_under:768,
                        style:"hesperiden",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"left",
                        v_align:"bottom",
                        h_offset:380,
                        v_offset:0,
                        space:10,
                        tmp: "",
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[950,950,950,700,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();


    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimoninals_carousel(){
        if ( $('.testimonials_slider').length ){
            $('.testimonials_slider').owlCarousel({
                loop:true,
                margin: 130,
                items: 3,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        center: false,
                        margin: 0
                    },
                    700: {
                        items: 2,
                        center: false,
                        margin: 30
                    },
                    992: {
                        items: 3,
                        margin: 70,
                    },
                    1200: {
                        items: 3,
                        margin: 130,
                    }
                }
            })
        }
    }
    testimoninals_carousel();

    /*----------------------------------------------------*/
    /*  Shap Slider
    /*----------------------------------------------------*/
    function shap_carousel(){
        if ( $('.shap_slider_inner').length ){
            $('.shap_slider_inner').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true
            })
        }
    }
    shap_carousel();


    /*----------------------------------------------------*/
    /*  Skill Bar
    /*----------------------------------------------------*/
    function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'
	        }, 1000);

	        Self.find('.number').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 1000
	        });
	      });
	    })
	  }
	}
    progressBarConfig ();

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function home_gallery(){
        if ( $('.ms_portfolio_inner').length ){
            // Activate isotope in container
            $(".ms_portfolio_inner").imagesLoaded( function() {
                $(".ms_portfolio_inner").isotope({
                    itemSelector: '.ms_p_item',
                    layoutMode: 'masonry',
                    percentPosition:true,
                    columnWidth: 1,
                });
            });
        }
    }
    home_gallery();

    /*----------------------------------------------------*/
    /*  Portfolio js
    /*----------------------------------------------------*/
    function portfolio_isotope(){
        if ( $('.portfolio_filter ul li').length ){
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".ms_portfolio_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    portfolio_isotope();


    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ( $('#mapBox1').length ){
        var $lat = $('#mapBox1').data('lat');
        var $lon = $('#mapBox1').data('lon');
        var $zoom = $('#mapBox1').data('zoom');
        var $marker = $('#mapBox1').data('marker');
        var $info = $('#mapBox1').data('info');
        var $markerLat = $('#mapBox1').data('mlat');
        var $markerLon = $('#mapBox1').data('mlon');
        var map = new GMaps({
        el: '#mapBox1',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                }
            ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
              content: $info
            }
        })
    }



})(jQuery)









// (function ($) {
//   "use strict";
//
//   // Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });
//   $('.back-to-top').click(function(){
//     $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
//     return false;
//   });
//
//   var siteMenuClone = function() {
//
// 		$('.js-clone-nav').each(function() {
// 			var $this = $(this);
// 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
// 		});
//
//
// 		setTimeout(function() {
//
// 			var counter = 0;
//       $('.site-mobile-menu .has-children').each(function(){
//         var $this = $(this);
//
//         $this.prepend('<span class="arrow-collapse collapsed">');
//
//         $this.find('.arrow-collapse').attr({
//           'data-toggle' : 'collapse',
//           'data-target' : '#collapseItem' + counter,
//         });
//
//         $this.find('> ul').attr({
//           'class' : 'collapse',
//           'id' : 'collapseItem' + counter,
//         });
//
//         counter++;
//
//       });
//
//     }, 1000);
//
// 		$('body').on('click', '.arrow-collapse', function(e) {
//       var $this = $(this);
//       if ( $this.closest('li').find('.collapse').hasClass('show') ) {
//         $this.removeClass('active');
//       } else {
//         $this.addClass('active');
//       }
//       e.preventDefault();
//
//     });
//
// 		$(window).resize(function() {
// 			var $this = $(this),
// 				w = $this.width();
//
// 			if ( w > 768 ) {
// 				if ( $('body').hasClass('offcanvas-menu') ) {
// 					$('body').removeClass('offcanvas-menu');
// 				}
// 			}
// 		})
//
// 		$('body').on('click', '.js-menu-toggle', function(e) {
// 			var $this = $(this);
// 			e.preventDefault();
//
// 			if ( $('body').hasClass('offcanvas-menu') ) {
// 				$('body').removeClass('offcanvas-menu');
// 				$('body').find('.js-menu-toggle').removeClass('active');
// 			} else {
// 				$('body').addClass('offcanvas-menu');
// 				$('body').find('.js-menu-toggle').addClass('active');
// 			}
// 		})
//
// 		// click outisde offcanvas
// 		$(document).mouseup(function(e) {
// 	    var container = $(".site-mobile-menu");
// 	    if (!container.is(e.target) && container.has(e.target).length === 0) {
// 	      if ( $('body').hasClass('offcanvas-menu') ) {
// 					$('body').removeClass('offcanvas-menu');
// 					$('body').find('.js-menu-toggle').removeClass('active');
// 				}
// 	    }
// 		});
// 	};
// 	siteMenuClone();
//
// 	var siteScroll = function() {
//
//   	$(window).scroll(function() {
//
//   		var st = $(this).scrollTop();
//
//   		if (st > 100) {
//   			$('.js-sticky-header').addClass('shrink');
//   		} else {
//   			$('.js-sticky-header').removeClass('shrink');
//   		}
//
//   	})
//
//   };
//   siteScroll();
//
//   var siteSticky = function() {
// 		$(".js-sticky-header").sticky({topSpacing:0});
// 	};
// 	siteSticky();
//
//   var siteOwlCarousel = function() {
//   	$('.testimonial-carousel').owlCarousel({
// 		  center: true,
// 	    items: 1,
// 	    loop: true,
// 	    margin: 0,
// 	    autoplay: true,
// 	    smartSpeed: 1000,
// 		});
//   };
//   siteOwlCarousel();
//
//
// })(jQuery);
//
// AOS.init({
// 	easing: 'ease',
// 	duration: 1000,
// 	once: true
// });
//
// (function ($) {
// "use strict";
// // TOP Menu Sticky
// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 400) {
//     $("#sticky-header").removeClass("sticky");
//     $('#back-top').fadeIn(500);
// 	} else {
//     $("#sticky-header").addClass("sticky");
//     $('#back-top').fadeIn(500);
// 	}
// });
//
//
//
//
//
// $(document).ready(function(){
//
// // mobile_menu
// var menu = $('ul#navigation');
// if(menu.length){
// 	menu.slicknav({
// 		prependTo: ".mobile_menu",
// 		closedSymbol: '+',
// 		openedSymbol:'-'
// 	});
// };
// // blog-menu
//   // $('ul#blog-menu').slicknav({
//   //   prependTo: ".blog_menu"
//   // });
//
// // review-active
// $('.slider_active').owlCarousel({
//   loop:true,
//   margin:0,
// items:1,
// autoplay:true,
// navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
//   nav:true,
// dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
//   responsive:{
//       0:{
//           items:1,
//           nav:false,
//       },
//       767:{
//           items:1,
//           nav:false,
//       },
//       992:{
//           items:1,
//           nav:false
//       },
//       1200:{
//           items:1,
//           nav:false
//       },
//       1600:{
//           items:1,
//           nav:true
//       }
//   }
// });
//
// // review-active
// $('.testmonial_active ').owlCarousel({
//   loop:true,
//   margin:0,
// items:1,
// autoplay:true,
// navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
//   nav:true,
// dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
//
//   responsive:{
//       0:{
//           items:1,
//           dots:false,
//           nav:false,
//       },
//       767:{
//           items:1,
//           dots:false,
//           nav:false,
//       },
//       992:{
//           items:1,
//           nav:false
//       },
//       1200:{
//           items:1,
//           nav:false
//       },
//       1500:{
//           items:1
//       }
//   }
// });
//
// // review-active
// $('.case_active').owlCarousel({
//   loop:true,
//   margin:30,
// items:1,
// autoplay:true,
// navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
//   nav:false,
// dots:true,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//       },
//       767:{
//           items:2,
//       },
//       992:{
//           items:3
//       },
//       1200:{
//           items:3
//       },
//       1500:{
//           items:3
//       }
//   }
// });
//
// // review-active
// $('.testmonial_active2').owlCarousel({
//   loop:true,
//   margin:0,
// items:1,
// autoplay:false,
// navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
//   nav:false,
// dots:true,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
// // dotsData: true,
// center: true,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//       },
//       767:{
//           items:1,
//           nav:false
//       },
//       992:{
//           items:1
//       },
//       1200:{
//           items:1
//       },
//       1500:{
//           items:1
//       }
//   }
// });
//
// // for filter
//   // init Isotope
//   var $grid = $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//       // use outer width of grid-sizer for columnWidth
//       columnWidth: 1
//     }
//   });
//
//   // filter items on button click
//   $('.portfolio-menu').on('click', 'button', function () {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });
//
//   //for menu active class
//   $('.portfolio-menu button').on('click', function (event) {
//     $(this).siblings('.active').removeClass('active');
//     $(this).addClass('active');
//     event.preventDefault();
// 	});
//
//   // wow js
//   new WOW().init();
//
//   // counter
//   $('.counter').counterUp({
//     delay: 10,
//     time: 10000
//   });
//
// /* magnificPopup img view */
// $('.popup-image').magnificPopup({
// 	type: 'image',
// 	gallery: {
// 	  enabled: true
// 	}
// });
//
// /* magnificPopup img view */
// $('.img-pop-up').magnificPopup({
// 	type: 'image',
// 	gallery: {
// 	  enabled: true
// 	}
// });
//
// /* magnificPopup video view */
// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });
//
//
//   // scrollIt for smoth scroll
//   $.scrollIt({
//     upKey: 38,             // key code to navigate to the next section
//     downKey: 40,           // key code to navigate to the previous section
//     easing: 'linear',      // the easing function for animation
//     scrollTime: 600,       // how long (in ms) the animation takes
//     activeClass: 'active', // class given to the active nav element
//     onPageChange: null,    // function(pageIndex) that is called when page is changed
//     topOffset: 0           // offste (in px) for fixed top navigation
//   });
//
//   // scrollup bottom to top
//   $.scrollUp({
//     scrollName: 'scrollUp', // Element ID
//     topDistance: '4500', // Distance from top before showing element (px)
//     topSpeed: 300, // Speed back to top (ms)
//     animation: 'fade', // Fade, slide, none
//     animationInSpeed: 200, // Animation in speed (ms)
//     animationOutSpeed: 200, // Animation out speed (ms)
//     scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
//     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//   });
//
//
//   // blog-page
//
//   //brand-active
// $('.brand-active').owlCarousel({
//   loop:true,
//   margin:30,
// items:1,
// autoplay:true,
//   nav:false,
// dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//
//       },
//       767:{
//           items:4
//       },
//       992:{
//           items:7
//       }
//   }
// });
//
// // blog-dtails-page
//
//   //project-active
// $('.project-active').owlCarousel({
//   loop:true,
//   margin:30,
// items:1,
// // autoplay:true,
// navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
// nav:true,
// dots:false,
// // autoplayHoverPause: true,
// // autoplaySpeed: 800,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//
//       },
//       767:{
//           items:1,
//           nav:false
//       },
//       992:{
//           items:2,
//           nav:false
//       },
//       1200:{
//           items:1,
//       },
//       1501:{
//           items:2,
//       }
//   }
// });
//
// if (document.getElementById('default-select')) {
//   $('select').niceSelect();
// }
//
//   //about-pro-active
// $('.details_active').owlCarousel({
//   loop:true,
//   margin:0,
// items:1,
// // autoplay:true,
// navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
// nav:true,
// dots:false,
// // autoplayHoverPause: true,
// // autoplaySpeed: 800,
//   responsive:{
//       0:{
//           items:1,
//           nav:false
//
//       },
//       767:{
//           items:1,
//           nav:false
//       },
//       992:{
//           items:1,
//           nav:false
//       },
//       1200:{
//           items:1,
//       }
//   }
// });
//
// });
//
// // resitration_Form
// $(document).ready(function() {
// 	$('.popup-with-form').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#name',
//
// 		// When elemened is focused, some mobile browsers in some cases zoom in
// 		// It looks not nice, so we disable it:
// 		callbacks: {
// 			beforeOpen: function() {
// 				if($(window).width() < 700) {
// 					this.st.focus = false;
// 				} else {
// 					this.st.focus = '#name';
// 				}
// 			}
// 		}
//   });
//   var wow = new WOW(
//     {
//       boxClass:     'wow',      // animated element css class (default is wow)
//       animateClass: 'animated', // animation css class (default is animated)
//       offset:       0,          // distance to the element when triggering the animation (default is 0)
//       mobile:       true,       // trigger animations on mobile devices (default is true)
//       live:         true,       // act on asynchronously loaded content (default is true)
//       callback:     function(box) {
//         // the callback is fired every time an animation is started
//         // the argument that is passed in is the DOM node being animated
//       },
//       scrollContainer: null,    // optional scroll container selector, otherwise use window,
//       resetAnimation: true,     // reset animation on end (default is true)
//     }
//   );
//   wow.init();
// });
//
//
//
// //------- Mailchimp js --------//
// function mailChimp() {
//   $('#mc_embed_signup').find('form').ajaxChimp();
// }
// mailChimp();
//
//
//
//         // Search Toggle
//         $("#search_input_box").hide();
//         $("#search").on("click", function () {
//             $("#search_input_box").slideToggle();
//             $("#search_input").focus();
//         });
//         $("#close_search").on("click", function () {
//             $('#search_input_box').slideUp(500);
//         });
//         // Search Toggle
//         $("#search_input_box").hide();
//         $("#search_1").on("click", function () {
//             $("#search_input_box").slideToggle();
//             $("#search_input").focus();
//         });
//
// })(jQuery);
//
// (function ($) {
//   "use strict";
//
//   $('#datepicker').datepicker();
//
//   $('.popup-youtube, .popup-vimeo').magnificPopup({
//     // disableOn: 700,
//     type: 'iframe',
//     mainClass: 'mfp-fade',
//     removalDelay: 160,
//     preloader: false,
//     fixedContentPos: false
//   });
//
//   $(document).ready(function() {
//     $('select').niceSelect();
//   });
//
//   var review = $('.client_review_part');
//   if (review.length) {
//     review.owlCarousel({
//       items: 1,
//       loop: true,
//       dots: true,
//       autoplay: true,
//       autoplayHoverPause: true,
//       autoplayTimeout: 5000,
//       nav: false,
//       smartSpeed: 2000,
//     });
//   }
//   // menu fixed js code
//   $(window).scroll(function () {
//     var window_top = $(window).scrollTop() + 1;
//     if (window_top > 50) {
//       $('.main_menu').addClass('menu_fixed animated fadeInDown');
//     } else {
//       $('.main_menu').removeClass('menu_fixed animated fadeInDown');
//     }
//   });
//
// //   $(document).ready(function(){
//
// //     var owl_1 = $('#owl-1');
// //     var owl_2 = $('#owl-2');
//
// //     owl_1.owlCarousel({
// //       loop:true,
// //       margin:10,
// //       nav:false,
// //       items: 1,
// //       dots: false,
// //       navText: false,
// //       autoplay: true,
//
// //     });
// //  owl_2.find(".item").click(function(){
// //     var slide_index = owl_2.find(".item").index(this);
// //     owl_1.trigger('to.owl.carousel',[slide_index,300]);
// //   });
//
// //     owl_2.owlCarousel({
// //       margin:50,
// //       nav: true,
// //       items: 3,
// //       dots: false,
// //       center: true,
// //       loop:true,
// //       navText: false,
// //       autoplay: true,
// //       center: true
// //     });
//
// //   });
//
//
//
//   $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     speed: 300,
//     infinite: true,
//     asNavFor: '.slider-nav-thumbnails',
//     // autoplay:true,
//     pauseOnFocus: true,
//     dots: true,
//   });
//
//   $('.slider-nav-thumbnails').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider',
//     focusOnSelect: true,
//     infinite: true,
//     prevArrow: false,
//     nextArrow: false,
//     centerMode: true,
//     responsive: [
//       {
//         breakpoint: 480,
//         settings: {
//           centerMode: false,
//         }
//       }
//     ]
//   });
//
//   //remove active class from all thumbnail slides
//   $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
//
//   //set active class to first thumbnail slides
//   $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
//
//   // On before slide change match active thumbnail to current slide
//   $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//     var mySlideNumber = nextSlide;
//     $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
//     $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
//  });
//
//  //UPDATED
//
//  $('.slider').on('afterChange', function(event, slick, currentSlide){
//    $('.content').hide();
//    $('.content[data-id=' + (currentSlide + 1) + ']').show();
//  });
//
//  $('.gallery_img').magnificPopup({
//   type: 'image',
//   gallery:{
//     enabled:true
//   }
// });
//
// //------- Mailchimp js --------//
// function mailChimp() {
//   $('#mc_embed_signup').find('form').ajaxChimp();
// }
// mailChimp();
//
//
// }(jQuery));
//
//
// AOS.init({
//  duration: 800,
//  easing: 'slide',
//  once: true
// });
//
// jQuery(document).ready(function($) {
//
//  "use strict";
//
//
//
//  var siteMenuClone = function() {
//
//    $('.js-clone-nav').each(function() {
//      var $this = $(this);
//      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
//    });
//
//
//    setTimeout(function() {
//
//      var counter = 0;
//      $('.site-mobile-menu .has-children').each(function(){
//        var $this = $(this);
//
//        $this.prepend('<span class="arrow-collapse collapsed">');
//
//        $this.find('.arrow-collapse').attr({
//          'data-toggle' : 'collapse',
//          'data-target' : '#collapseItem' + counter,
//        });
//
//        $this.find('> ul').attr({
//          'class' : 'collapse',
//          'id' : 'collapseItem' + counter,
//        });
//
//        counter++;
//
//      });
//
//    }, 1000);
//
//    $('body').on('click', '.arrow-collapse', function(e) {
//      var $this = $(this);
//      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
//        $this.removeClass('active');
//      } else {
//        $this.addClass('active');
//      }
//      e.preventDefault();
//
//    });
//
//    $(window).resize(function() {
//      var $this = $(this),
//        w = $this.width();
//
//      if ( w > 768 ) {
//        if ( $('body').hasClass('offcanvas-menu') ) {
//          $('body').removeClass('offcanvas-menu');
//        }
//      }
//    })
//
//    $('body').on('click', '.js-menu-toggle', function(e) {
//      var $this = $(this);
//      e.preventDefault();
//
//      if ( $('body').hasClass('offcanvas-menu') ) {
//        $('body').removeClass('offcanvas-menu');
//        $this.removeClass('active');
//      } else {
//        $('body').addClass('offcanvas-menu');
//        $this.addClass('active');
//      }
//    })
//
//    // click outisde offcanvas
//    $(document).mouseup(function(e) {
//      var container = $(".site-mobile-menu");
//      if (!container.is(e.target) && container.has(e.target).length === 0) {
//        if ( $('body').hasClass('offcanvas-menu') ) {
//          $('body').removeClass('offcanvas-menu');
//        }
//      }
//    });
//  };
//  siteMenuClone();
//
//
//  var sitePlusMinus = function() {
//    $('.js-btn-minus').on('click', function(e){
//      e.preventDefault();
//      if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
//        $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
//      } else {
//        $(this).closest('.input-group').find('.form-control').val(parseInt(0));
//      }
//    });
//    $('.js-btn-plus').on('click', function(e){
//      e.preventDefault();
//      $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
//    });
//  };
//  // sitePlusMinus();
//
//
//  var siteSliderRange = function() {
//    $( "#slider-range" ).slider({
//      range: true,
//      min: 0,
//      max: 500,
//      values: [ 75, 300 ],
//      slide: function( event, ui ) {
//        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//      }
//    });
//    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
//  };
//  // siteSliderRange();
//
//
//
//  var siteCarousel = function () {
//    if ( $('.nonloop-block-13').length > 0 ) {
//      $('.nonloop-block-13').owlCarousel({
//        center: false,
//        items: 1,
//        loop: true,
//        stagePadding: 0,
//        margin: 0,
//        autoplay: true,
//        nav: true,
//        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
//        responsive:{
//          600:{
//            margin: 0,
//            nav: true,
//            items: 2
//          },
//          1000:{
//            margin: 0,
//            stagePadding: 0,
//            nav: true,
//            items: 3
//          },
//          1200:{
//            margin: 0,
//            stagePadding: 0,
//            nav: true,
//            items: 4
//          }
//        }
//      });
//    }
//
//
//    if ( $('.nonloop-block-14').length > 0 ) {
//      $('.nonloop-block-14').owlCarousel({
//        center: false,
//        items: 1,
//        loop: true,
//        stagePadding: 0,
//        margin: 0,
//        autoplay: true,
//        nav: true,
//        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
//        responsive:{
//          600:{
//            margin: 20,
//            nav: true,
//            items: 2
//          },
//          1000:{
//            margin: 30,
//            stagePadding: 0,
//            nav: true,
//            items: 2
//          },
//          1200:{
//            margin: 30,
//            stagePadding: 0,
//            nav: true,
//            items: 3
//          }
//        }
//      });
//    }
//
//    $('.slide-one-item').owlCarousel({
//      center: false,
//      items: 1,
//      loop: true,
//      stagePadding: 0,
//      margin: 0,
//      autoplay: true,
//      pauseOnHover: false,
//      nav: true,
//      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
//    });
//
//
//    if ( $('.owl-4-slider').length > 0 ) {
//      var owl4 = $('.owl-4-slider').owlCarousel({
//        loop: true,
//        autoHeight: true,
//        margin: 0,
//        autoplay: true,
//        smartSpeed: 1000,
//        items: 4,
//        nav: false,
//        navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
//        responsive:{
//          0:{
//              items:1
//          },
//          600:{
//              items:3
//          },
//          1000:{
//              items:4
//          }
//        }
//      });
//
//      $('.js-custom-next-v2').click(function(e) {
//        e.preventDefault();
//        owl4.trigger('next.owl.carousel');
//      })
//      $('.js-custom-prev-v2').click(function(e) {
//        e.preventDefault();
//        owl4.trigger('prev.owl.carousel');
//      })
//    }
//
//  };
//  siteCarousel();
//
//  var siteStellar = function() {
//    $(window).stellar({
//      responsive: false,
//      parallaxBackgrounds: true,
//      parallaxElements: true,
//      horizontalScrolling: false,
//      hideDistantElements: false,
//      scrollProperty: 'scroll'
//    });
//  };
//  siteStellar();
//
//  var siteCountDown = function() {
//
//    $('#date-countdown, #date-countdown2').countdown('2033/10/10', function(event) {
//      var $this = $(this).html(event.strftime(''
//        + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
//        + '<span class="countdown-block"><span class="label">%d</span> days </span>'
//        + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
//        + '<span class="countdown-block"><span class="label">%M</span> min </span>'
//        + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
//    });
//
//  };
//  siteCountDown();
//
//  var siteDatePicker = function() {
//
//    if ( $('.datepicker').length > 0 ) {
//      $('.datepicker').datepicker();
//    }
//
//  };
//  siteDatePicker();
//
//  var siteSticky = function() {
//    $(".js-sticky-header").sticky({topSpacing:0});
//  };
//  siteSticky();
//
//  // navigation
//  var OnePageNavigation = function() {
//    var navToggler = $('.site-menu-toggle');
//    $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
//      e.preventDefault();
//
//      var hash = this.hash;
//
//      $('html, body').animate({
//        'scrollTop': $(hash).offset().top
//      }, 600, 'easeInOutCirc', function(){
//        window.location.hash = hash;
//      });
//
//    });
//  };
//  // OnePageNavigation();
//
//  var siteScroll = function() {
//
//
//
//    $(window).scroll(function() {
//
//      var st = $(this).scrollTop();
//
//      if (st > 100) {
//        $('.js-sticky-header').addClass('shrink');
//      } else {
//        $('.js-sticky-header').removeClass('shrink');
//      }
//
//    })
//
//  };
//  siteScroll();
//
//
//  $(function () {
//    $("#bgndVideo").YTPlayer();
//  });
//
// });
// jQuery(function($) {
//
// 	'use strict';
//
// 	$(".loader").delay(1000).fadeOut("slow");
//   $("#overlayer").delay(1000).fadeOut("slow");
//
// 	var siteMenuClone = function() {
//
// 		$('.js-clone-nav').each(function() {
// 			var $this = $(this);
// 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
// 		});
//
//
// 		setTimeout(function() {
//
// 			var counter = 0;
//       $('.site-mobile-menu .has-children').each(function(){
//         var $this = $(this);
//
//         $this.prepend('<span class="arrow-collapse collapsed">');
//
//         $this.find('.arrow-collapse').attr({
//           'data-toggle' : 'collapse',
//           'data-target' : '#collapseItem' + counter,
//         });
//
//         $this.find('> ul').attr({
//           'class' : 'collapse',
//           'id' : 'collapseItem' + counter,
//         });
//
//         counter++;
//
//       });
//
//     }, 1000);
//
// 		$('body').on('click', '.arrow-collapse', function(e) {
//       var $this = $(this);
//       if ( $this.closest('li').find('.collapse').hasClass('show') ) {
//         $this.removeClass('active');
//       } else {
//         $this.addClass('active');
//       }
//       e.preventDefault();
//
//     });
//
// 		$(window).resize(function() {
// 			var $this = $(this),
// 				w = $this.width();
//
// 			if ( w > 768 ) {
// 				if ( $('body').hasClass('offcanvas-menu') ) {
// 					$('body').removeClass('offcanvas-menu');
// 				}
// 			}
// 		})
//
// 		$('body').on('click', '.js-menu-toggle', function(e) {
// 			var $this = $(this);
// 			e.preventDefault();
//
// 			if ( $('body').hasClass('offcanvas-menu') ) {
// 				$('body').removeClass('offcanvas-menu');
// 				$this.removeClass('active');
// 			} else {
// 				$('body').addClass('offcanvas-menu');
// 				$this.addClass('active');
// 			}
// 		})
//
// 		// click outisde offcanvas
// 		$(document).mouseup(function(e) {
// 	    var container = $(".site-mobile-menu");
// 	    if (!container.is(e.target) && container.has(e.target).length === 0) {
// 	      if ( $('body').hasClass('offcanvas-menu') ) {
// 					$('body').removeClass('offcanvas-menu');
// 				}
// 	    }
// 		});
// 	};
// 	siteMenuClone();
//
//
// 	var sitePlusMinus = function() {
// 		$('.js-btn-minus').on('click', function(e){
// 			e.preventDefault();
// 			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
// 				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
// 			} else {
// 				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
// 			}
// 		});
// 		$('.js-btn-plus').on('click', function(e){
// 			e.preventDefault();
// 			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
// 		});
// 	};
// 	// sitePlusMinus();
//
//    var siteIstotope = function() {
//   	/* activate jquery isotope */
// 	  var $container = $('#posts').isotope({
// 	    itemSelector : '.item',
// 	    isFitWidth: true
// 	  });
//
// 	  $(window).resize(function(){
// 	    $container.isotope({
// 	      columnWidth: '.col-sm-3'
// 	    });
// 	  });
//
// 	  $container.isotope({ filter: '*' });
//
// 	    // filter items on button click
// 	  $('#filters').on( 'click', 'button', function(e) {
// 	  	e.preventDefault();
// 	    var filterValue = $(this).attr('data-filter');
// 	    $container.isotope({ filter: filterValue });
// 	    $('#filters button').removeClass('active');
// 	    $(this).addClass('active');
// 	  });
//   }
//
//   siteIstotope();
//
//   var fancyBoxInit = function() {
// 	  $('.fancybox').on('click', function() {
// 		  var visibleLinks = $('.fancybox');
//
// 		  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );
//
// 		  return false;
// 		});
// 	}
// 	fancyBoxInit();
//
//
// 	var stickyFillInit = function() {
// 		$(window).on('resize orientationchange', function() {
// 	    recalc();
// 	  }).resize();
//
// 	  function recalc() {
// 	  	if ( $('.jm-sticky-top').length > 0 ) {
// 		    var elements = $('.jm-sticky-top');
// 		    Stickyfill.add(elements);
// 	    }
// 	  }
// 	}
// 	stickyFillInit();
//
//
// 	// navigation
//   var OnePageNavigation = function() {
//     var navToggler = $('.site-menu-toggle');
//    	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
//       e.preventDefault();
//
//       var hash = this.hash;
//
//       $('html, body').animate({
//         'scrollTop': $(hash).offset().top
//       }, 600, 'easeInOutCirc', function(){
//         window.location.hash = hash;
//       });
//
//     });
//   };
//   OnePageNavigation();
//
//   var counterInit = function() {
// 		if ( $('.section-counter').length > 0 ) {
// 			$('.section-counter').waypoint( function( direction ) {
//
// 				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
//
// 					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
// 					$('.number').each(function(){
// 						var $this = $(this),
// 							num = $this.data('number');
// 							console.log(num);
// 						$this.animateNumber(
// 						  {
// 						    number: num,
// 						    numberStep: comma_separator_number_step
// 						  }, 7000
// 						);
// 					});
//
// 				}
//
// 			} , { offset: '95%' } );
// 		}
//
// 	}
// 	counterInit();
//
// });
