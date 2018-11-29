var fn_parallax = function() {
  if (isCurrentPageHome() && $(window).width() > 1024) {
    var scrollOffset = isCurrentPageHome() ? 0 : 80;

    $('.bgParallax').each(function() {
      var $obj = $(this);
      var yPos = -((($(window).scrollTop() + scrollOffset) / $obj.data('speed')));

      var bgpos = '50% ' + yPos + 'px';
      $obj.css('background-position', bgpos);
    });
  }
};

function onInit() {
  $(window).off('scroll').off('resize');

  /*links li blog*/
  $('.tabs-cnt li').click(function() {
    $('.tabs-cnt li').removeClass('select');
    $(this).addClass('select');
  });

  $(window)
    .on('scroll', toggleHeader)
    .on('resize', toggleHeader);

  $('.scroll-menu li').click(function() {
    $('.scroll-menu li').removeClass('active');
    $(this).addClass('active');
  });
}

function onViewLoad() {
}

function onBoth() {
  fixLongTitles();
  toggleHeader();
  setWeddingCountdown();
  adjustFloatingCoupleName();
  fadeInUp('.floating-couple-name__content--couple-name', 1, isCurrentPageHome);
  fadeInUp('.floating-couple-name__content--counter', 300, isCurrentPageHome);
  fadeInUp('.floating-couple-name__content--date', 300, isCurrentPageHome);
  fadeInUp('.txt-page:first .title-top:first', 1, function() {
    return !isCurrentPageHome();
  });

  if (isCurrentPageHome()) {
    $('#page').removeClass('intern');
    $('.img-04.bgParallax').hide().removeClass('zoom-loop');
  } else {
    $('#page').addClass('intern');
    $('.img-04.bgParallax').fadeIn(600).addClass('zoom-loop');
  }

  if (isCurrentPageStore()) {
    $('#page-store').removeClass('container');
    $('#page').addClass('container');
    setTimeout(function() {
      $('#loading-screen').fadeOut(600);
    }, 1000);
  }

  $('.dropdown-menu > li > a').off('click').on('click', function() {
    toggleMenu();
  });

  removeMapScroll();
  animateAnchor();
}

$(document).ready(function() {
  onInit();
  onBoth();

  $(document).on("icasei_template_change icasei_content_change", function() {
    onViewLoad();
    onBoth();
  }).trigger("icasei_content_change");
});
