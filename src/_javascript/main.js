import $ from 'jquery';

// ===== Bulma Mobile Menu =====
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach($element => {
      $element.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const $target = document.getElementById($element.dataset.target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $element.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// ===== Scroll to Top =====
$(window).scroll(() => {
  if ($(this).scrollTop() >= 50) {
    $('#return').fadeIn(500);
  } else {
    $('#return').fadeOut(500);
  }
});

// ===== Scroll Smoothing =====
$(() => {
  $('a[href*="#"]:not([href="#"])').click(() => {
    if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('nav').height()
        }, 500);
        return false;
      }
    }
  });
});

// ===== Parallax Scroll =====
$(window).scroll(() => {
	const parallaxScroll = $(this).scrollTop();
	$('.parallax').css({
		'transform' : 'translate(0px, ' + parallaxScroll/20 + '%)'
	});
});

// ===== Skill Toggle =====
$(document).ready(() => {

	$('#design').click(
    debounce(() => {
      $('#design .back').fadeToggle(200);
      $('#frontend .back, #backend .back').fadeOut(200);
    }, 200);
  );

  $('#frontend').click(
    debounce(() => {
      $('#frontend .back').fadeToggle(200);
      $('#design .back, #backend .back').fadeOut(200);
    }, 200);
  );

  $('#backend').click(
    debounce(() => {
      $('#backend .back').fadeToggle(200);
      $('#design .back, #frontend .back').fadeOut(200);
    }, 200);
  );

  $("#skills").click(() => {
    $('#design .back, #frontend .back, #backend .back').fadeOut(200);
  });

  $("#skills .skill-container").click(event => {
    event.stopPropagation();
  });

});

// ===== Debouncer =====
const debounce = (cb, timeout) => {
  let lastrun;
  return ((...args) => {
    if(lastrun === undefined) {
      lastrun = Date.now();
      cb(...args);
    } else if (Date.now() - lastrun > timeout) {
      lastrun = Date.now();
      cb(...args);
    }
  });
};
