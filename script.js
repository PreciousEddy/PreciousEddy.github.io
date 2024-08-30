$(document).ready(function() {
  // Toggle menu on click
  $('#menu').click(function() {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });

  // Show/Hide the "back to top" button on scroll
  $(window).on('scroll load', function() {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');

      if ($(window).scrollTop() > 0) {
          $('.top').fadeIn(); // Show the "back to top" button
      } else {
          $('.top').fadeOut(); // Hide the "back to top" button
      }
  });

  // Smooth scrolling to section on clicking a link
  $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear'); // Scroll animation duration: 500ms
  });
});
