// gallery-section
$(document).ready(function () {
    // Original code for Slick initialization and button click events
    $('.gallery-container').slick({
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          pauseOnHover: false, // Disable pause on hover
    });
  
    $('.slider-prev').on('click', function () {
        $('.gallery-container').slick('slickPrev');
        resetTimer();
    });
  
    $('.slider-next').on('click', function () {
        $('.gallery-container').slick('slickNext');
        resetTimer();
    });
  
    function resetTimer() {
        $('.gallery-container').slick('slickPause');
        setTimeout(function () {
            $('.gallery-container').slick('slickPlay');
        }, 4000);
    }
  
    // Additional function to position slider-prev and slider-next buttons inside the gallery container
    function positionButtonsInsideGallery() {
        // Append slider-prev and slider-next buttons to the gallery container
        $('.gallery-container').append($('.slider-prev'));
        $('.gallery-container').append($('.slider-next'));
  
        // Position the buttons inside the gallery container
        var containerWidth = $('.gallery-container').width();
        var buttonWidth = $('.slider-prev').width(); // Assuming both buttons have the same width
  
        // Adjust left and right positions to keep buttons inside the container
        $('.slider-prev').css('left', '10px');
        $('.slider-next').css('right', '10px');
  
        // Check if buttons are overflowing and adjust positions accordingly
        if ($('.slider-prev').offset().left < $('.gallery-container').offset().left) {
            $('.slider-prev').css('left', '0');
        }
  
        if (($('.slider-next').offset().left + buttonWidth) > ($('.gallery-container').offset().left + containerWidth)) {
            $('.slider-next').css('right', '0');
        }
    }
  
    // Call the function to append and position buttons inside the gallery on document ready
    positionButtonsInsideGallery();
  
    // Handle window resize to reposition the buttons
    $(window).on('resize', function () {
        positionButtonsInsideGallery();
    });
  });

  // function for parallax
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var slides = document.querySelectorAll('.slide');

        slides.forEach(function(slide) {
            var translateY = (scroll * 0.5) + "px";
            slide.style.transform = "translateY(" + translateY + ")";
        });
    });
});
