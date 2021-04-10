// JavaScript Document

$(function () {

"use strict";
      // Slideshow 1
      $("#slider1").responsiveSlides({
       
        speed: 800
      });

      // Slideshow 2
      $("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        speed: 300,
        maxwidth: 540
      });

      // Slideshow 3
      $("#slider3").responsiveSlides({
        manualControls: '#slider3-pager',
        maxwidth: 540
      });

      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
jQuery(window).on('load', function() {

    // will first fade out the loading animation

    jQuery("#status").fadeOut();

    // will fade out the whole DIV that covers the website.

    jQuery("#preloader").delay(500).fadeOut("slow");

})