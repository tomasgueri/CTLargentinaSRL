
/* ---------------------------------------------
Preloader - Home page
 --------------------------------------------- */
    "use strict";
jQuery(window).on('load', function() {

    // will first fade out the loading animation
    jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(500).fadeOut("slow");

})



// Carousel - Top banner
$('#myCarousel').carousel({
interval: 6000,
pause: "false"
});


(function($) {
  

/* ---------------------------------------------
Counter JS
--------------------------------------------- */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 60);
        }
    }
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
})(jQuery);



/* ---------------------------------------------
Portfolio mixItUp
--------------------------------------------- */

$(function() {
  
    var filterList = {

        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.app, .card, .icon'
                }
            });

        }

    };

    // Run the show!
    filterList.init();


});

$(document).ready(function() {


/* ---------------------------------------------
owl-carousel2 - Blog popup Slider
--------------------------------------------- */

 $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },

        }
    })


    /* ---------------------------------------------
    owl-carousel - Header Logo Slider
    --------------------------------------------- */

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1500,
                margin: 0,
            },


            414: {
                items: 2,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1500,
                margin: 20,
            },
            480: {
                items: 3,

                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1500,
                margin: 20,
            },
            600: {
                items: 4,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1500,
                margin: 20,
            },
            1200: {
                items: 5,
                nav: true,
                loop: true,
                autoplay: false,
                autoplayTimeout: 1500,
                margin: 5,
            }




        }
    })

});


// animation
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 120, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
});
wow.init();




//nstSlider


$('.nstSlider-1').nstSlider({
"left_grip_selector": ".leftGrip-1",
"right_grip_selector": ".rightGrip-1",
"value_bar_selector": ".bar-1",
"highlight": {
"grip_class": "gripHighlighted",
"panel_selector": ".highlightPanel"
},
"value_changed_callback": function(cause, leftValue, rightValue) {
$('.leftLabel-1').text(leftValue);
$('.rightLabel-1').text(rightValue);
},
});

// Call methods and such...
var highlightMin = Math.random() * 20,
highlightMax = highlightMin + Math.random() * 80;
$('.nstSlider-1').nstSlider('highlight_range', highlightMin, highlightMax);



$('.nstSlider-2').nstSlider({
"left_grip_selector": ".leftGrip-2",
"right_grip_selector": ".rightGrip-2",
"value_bar_selector": ".bar-2",
"highlight": {
"grip_class": "gripHighlighted",
"panel_selector": ".highlightPanel"
},
"value_changed_callback": function(cause, leftValue, rightValue) {
$('.leftLabel-2').text(leftValue);
$('.rightLabel-2').text(rightValue);
},
});

// Call methods and such...
var highlightMin = Math.random() * 20,
highlightMax = highlightMin + Math.random() * 80;
$('.nstSlider-2').nstSlider('highlight_range', highlightMin, highlightMax);



	$('.nstSlider-3').nstSlider({
	"left_grip_selector": ".leftGrip-3",
	"right_grip_selector": ".rightGrip-3",
	"value_bar_selector": ".bar-3",
	"highlight": {
	"grip_class": "gripHighlighted",
	"panel_selector": ".highlightPanel"
	},
	"value_changed_callback": function(cause, leftValue, rightValue) {
	$('.leftLabel-3').text(leftValue);
	$('.rightLabel-3').text(rightValue);
	},
	});

// Call methods and such...
var highlightMin = Math.random() * 20,
highlightMax = highlightMin + Math.random() * 80;
$('.nstSlider-3').nstSlider('highlight_range', highlightMin, highlightMax);

//nstSlider






$('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },

        }
    })

