function customToggleHeader() {
  var scrollTop = window.pageYOffset;
  var scrollLimit = window.innerHeight / 2 - 80;

  $('.menu').addClass('detached');

  if (isCurrentPageHome()) {
    $('.floating-couple-name').removeClass('compact').addClass('extended');
  } else {
    $('.floating-couple-name').addClass('compact').removeClass('extended');
  }
}

function onInit() {
  $(window).off('scroll').off('resize');
  /*links li blog*/
  $('.tabs-cnt li').click(function() {
    $('.tabs-cnt li').removeClass('select');
    $(this).addClass('select');
  });

  if (isCurrentPageStore()) {
    setTimeout(function() {
      $('#loading-screen').fadeOut(600);
    }, 1000);
  }

  $(window)
    .on('scroll', customToggleHeader)
    .on('resize', customToggleHeader);
}

function onViewLoad() {
}

function onBoth() {
  customToggleHeader();
  fixLongTitles();
  setWeddingCountdown();
  adjustFloatingCoupleName();
  setCurvedText();
  fadeInUp('.floating-couple-name__content');

  if (isCurrentPageHome()) {
    $('.img-04.bgParallax').show();
    $('.floating-couple-name').addClass('visible');
  } else {
    $('.floating-couple-name').removeClass('visible');
    $('.img-04.bgParallax').hide();
  }

  $('.dropdown-menu > li > a').off('click').on('click', function() {
    toggleMenu();
  });

  $('.scroll-menu li').click(function() {
    $('.scroll-menu li').removeClass('active');
    $(this).addClass('active');
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
