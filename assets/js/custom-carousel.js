
// owlcarousel


$(document).on('ready', function() {
"use strict";
// team carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 15
            }
        }
    })
	
// Logo carousel
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
	//Video Popup
    var url = $("#cartoonVideo").attr('src');
    
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
	
})