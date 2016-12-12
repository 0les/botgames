(function($) {
  "use strict";

  $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  $('.game-logo').bind('click', function(event) {
    var wasShown = $(this).hasClass('active');
    $('.games-section article').addClass('hidden');
    $('.game-logo').removeClass('active');

    if (!wasShown) {
      $(this).addClass('active');
      $('#' + event.currentTarget.id + '-info').removeClass('hidden');
    }
  });

  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 160
  });

  $('.main-navbar').affix({offset: {top: 80}});

  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('.btn-go-top').show("slow", function() {
          $('.btn-go-top').css({position: 'fixed', display: 'block'});
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('.btn-go-top').hide("slow", function() {
          $('.btn-go-top').css({display: 'none'});
        });
      }
    }
  });

  //var s = skrollr.init();

})(jQuery);
