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
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $('#return').fadeIn(500);
  } else {
    $('#return').fadeOut(500);
  }
});

// ===== Scroll Smoothing =====
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
$(window).scroll(function () {
  var parallaxScroll = $(this).scrollTop();
  $('.parallax').css({
    'transform': 'translate(0px, ' + parallaxScroll / 20 + '%)'
  });
});

// ===== Skill Toggle =====
$(document).ready(function () {
  $('#design').click(debounce(function () {
    $('#design .back').fadeToggle(200);
    $('#frontend .back, #backend .back').fadeOut(200);
  }, 200));
  $('#frontend').click(debounce(function () {
    $('#frontend .back').fadeToggle(200);
    $('#design .back, #backend .back').fadeOut(200);
  }, 200));
  $('#backend').click(debounce(function () {
    $('#backend .back').fadeToggle(200);
    $('#design .back, #frontend .back').fadeOut(200);
  }, 200));
  $("#skills").click(function () {
    $('#design .back, #frontend .back, #backend .back').fadeOut(200);
  });
  $("#skills .skill-container").click(function (e) {
    e.stopPropagation();
  });
});

// ===== Debouncer =====
function debounce(cb, timeout) {
  let lastrun;
  return function (...args) {
    if (lastrun === undefined) {
      lastrun = Date.now();
      cb(...args);
    } else if (Date.now() - lastrun > timeout) {
      lastrun = Date.now();
      cb(...args);
    }
  };
}