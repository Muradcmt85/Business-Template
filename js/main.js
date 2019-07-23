/*
 ==========   Js INDEX Table============
1.Hide menu Responsive time
2.Sticky Header
3.Main Slider
4.About Slider
5.Counter
6.Magnific Popup
7.Testimonial Slider
8.Brand Slider
9.Pricing
10.Scroll up to top
11.Preloader

 ========== Js INDEX Table End ============
*/
(function ($) {
    "use strict";

     	// onePageNav hide menu when responsive work it
		$('.header-nav').onePageNav({
		    currentClass: 'active',
		    changeHash: false,
		    scrollSpeed: 500,
		    scrollThreshold: 1,
		    filter: '',
		    easing: 'swing',
		    begin: function() {
		        //I get fired when the animation is starting

	        	if($(window).width() < 991){
	        		$('.cssmenu ul').slideUp().removeClass('open');
	        	}
		           
		    }, 
		    end: function() { 
		         
		    },
		    scrollChange: function($currentListItem) {
		        //I get fired when you enter a section and I pass the list item of the section
 
		    }
		});


     	// onePageNav hide menu when responsive work it
 

		// Sticky Header
 		function sticky_header(){
	    	$(".sticky-on").sticky({topSpacing: 0});
	 		};
 		sticky_header();

 		// Language switcher
	    function languageSwitcher() {
	        if ($("#polyglot-language-options").length) {
	            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
	                effect: 'slide',
	                animSpeed: 150,
	                testMode: true,
	                onChange: function(evt) {
	                    // alert("The selected language is: " + evt.selectedItem);
	                }
	            });
	        };
	    }
	    languageSwitcher();

 

	    // Hero slides Start here
	    function hero_slider(){
	        $(".hero-slider").owlCarousel({
	            items: 1,
	            loop:true,
	            autoplay:false,
	            smartSpeed: 2000,
	            margin: 0,
	            dots:false,
	            nav: true,
	            navText:['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
	            responsive:{
	                0: {
	            		nav: false,
	                	dots:true,
	                },
	                575: {
	            		nav: false,
	                	dots:true,
	                },
	                800: {
	                	dots:false,
	                },
	                1000: {
	                    dots:false,
	                }, 
	                1400: {
	                    dots:false,
	                },
	            }
	        });
	    };
	    hero_slider();

	    // Hero slides End here



		//Testimonial section Start here

		$('.about-slider').owlCarousel({
			    loop:true,
			    nav:false,
	            dots:true,
	            autoplay:false,
	            smartSpeed: 1500,
	            margin: 0,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			});

		//Testimonial section End here

		//About Counter section Start here
		$('.counter').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 4000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
		
		//About Counter section End here	


		// magnific activition are here

		$('.view').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
				},
			  // other options
			});

		$('.video-view').magnificPopup({
			  type: 'iframe',
			});

		// magnific activition end here

		//Testimonial section Start here

		$('.testimonial-slider').owlCarousel({
			    loop:true,
			    nav:false,
	            dots:true,
	            autoplay:false,
	            smartSpeed: 1500,
	            margin: 0,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			});

		//Testimonial section End here	

		//Testimonial section Start here

		$('.brand-slider').owlCarousel({
			    loop:true,
			    nav:false,
	            dots:false,	            
	            autoplay:true,
	            smartSpeed: 1500,
	            margin: 0,
			    responsive:{
			        0:{
			            items:3
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:5
			        }
			    }
			});

		//Testimonial section End here


		/*START Pricing JS*/
		$('.pricing-tab-switcher').on('click', function() {
		$(this).toggleClass('active');

		$('.pricing-amount').toggleClass('change-subs-duration');
		});
		/*END Pricing JS */


	    // Offcanvas Menu
	    $(".js-offcanvas-close").on("click",function(){
          $("#js_offcanvas_menu").css('right' , '-500px');
        });

        $("#sidebar_menu_icon").on("click",function(){
            $("#js_offcanvas_menu").css('right' , '0');
        });


        /* ========Portfolio imagesLoaded active ============*/
       $('#portfolio-grid').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });
        });

        /* ========Portfolio imagesLoaded active ============*/

        //animation scroll js click a smoth scroll button a click a
		var html_body = $('html, body');
		$('.nav-menu a').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		html_body.animate({
		scrollTop: target.offset().top - 90
		}, 1500);
		return false;
		}
		}
		});

        //animation scroll js click a smoth scroll button a click a


		// scroll top seciton start here

		  var scrollTop = $(".scrollTop");

		  $(window).scroll(function() {
		    // declare variable
		    var topPos = $(this).scrollTop();

		    // if user scrolls down - show scroll to top button
		    if (topPos > 100) {
		      $(scrollTop).css("opacity", "1");

		    } else {
		      $(scrollTop).css("opacity", "0");
		    }

		  }); // scroll END

		  //Click event to scroll to top
		  $(scrollTop).click(function() {
		    $('html, body').animate({
		      scrollTop: 0
		    }, 800);
		    return false;

		  }); // click() scroll top EMD


		  // Scroll top End here

		  
		//preloader js start here
		$(window).on('load', function () {
		$("#preloader").delay(1000).fadeOut(1000);
		});

		//preloader js end here

})(jQuery);
