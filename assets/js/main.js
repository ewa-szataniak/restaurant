window.setTimeout(function(){$(".loader").addClass("opacity-hide");}, 300);

$(document).ready(function () {

  
  

  $('.navbar-toggler').click(function (e) {
    e.preventDefault();
    $('header').addClass('mobile-menu-active');
  });
  $('.mobile-menu-close').click(function (e) {
    e.preventDefault();
    $('header').removeClass('mobile-menu-active');
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $("header").addClass("nav-fixed");
    } else {
      $("header").removeClass("nav-fixed");
    }
  });

  $('.collapsible-link1').on('click', function () {
    $('.collapsible2').removeClass('show');
    $('.collapsible1').addClass('show');
  });
  $('.collapsible-link2').on('click', function () {
    $('.collapsible1').removeClass('show');
    $('.collapsible2').addClass('show');
  });


  jQuery(".hero-slider").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 0,

    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      1024: {
        items: 1
      },

      1366: {
        items: 1
      }
    }
  });


  document.getElementById('am-next').addEventListener('click', function () {
    $('.hero-slider').trigger('next.owl.carousel');
  });

  document.getElementById('am-prev').addEventListener('click', function () {
    $('.hero-slider').trigger('prev.owl.carousel');
  });
  
  document.getElementById('am-next-menu').addEventListener('click', function () {
    $('.hero-slider').trigger('next.owl.carousel');
  });

  document.getElementById('am-prev-menu').addEventListener('click', function () {
    $('.hero-slider').trigger('prev.owl.carousel');
  });




  jQuery(".chef-slider").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 0,

    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      1024: {
        items: 1
      },

      1366: {
        items: 1
      }
    }
  });

  document.getElementById('am-next-chef').addEventListener('click', function () {
    $('.chef-slider').trigger('next.owl.carousel');
  });

  document.getElementById('am-prev-chef').addEventListener('click', function () {
    $('.chef-slider').trigger('prev.owl.carousel');
  });
  
  
});

