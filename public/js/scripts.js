/*!
* Start Bootstrap - Scrolling Nav v5.0.1 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

});

$(document).ready(function() {
    $(this).scrollTop(0);
    $('#mainNav a[href="#"]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $target.offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });

        $('.navwork .nav-item').click(function(){
                // reset active class
                $('.navwork .nav-item').removeClass("active");
                // add active class to selected
                $(this).addClass("active");
                // return needed to make function work
                return false;
        });
        
        var selectedClass = "option-1";
        $(".portfolio li").fadeOut(300);
        $(".portfolio li." + selectedClass).delay(300).fadeIn(300);
	
	$(function() {
		// create an empty variable
                var selectedClass = "option-1";
		// call function when item is clicked
		$(".navwork .nav-item").click(function(){
			// assigns class to selected item
			selectedClass = $(this).attr("data-rel");
			// fades out all portfolio items
			$(".portfolio li").fadeOut(300);
			// fades in selected category
			$(".portfolio li." + selectedClass).delay(300).fadeIn(300);
		});
	});
  
});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //		$('nav').fadeIn("fast");
        //} else {
        //		$('nav').fadeOut("fast");
        //}

        // Assign active class to nav links while scolling
        $('.page-section').each(function(i) {
                if ($(this).position().top - 100 <= scrollDistance) {
                        $('#mainNav .navbar-nav .nav-item a.active').removeClass('active');
                        $('#mainNav .navbar-nav .nav-item a').eq(i).addClass('active');
                }
        });
}).scroll();

function themeToggle() {
    var element = document.body;
    element.classList.toggle("darktheme");

}