function onInit() {
  $(window).off('scroll').off('resize');

  $(window)
    .on('scroll', toggleHeader)
    .on('resize', toggleHeader);

  /*links li blog*/
  $('.tabs-cnt li').click(function(){
    $('.tabs-cnt li').removeClass('select');
      $(this).addClass('select');
  });
}

function onViewLoad() {
}

function onBoth() {
  fixLongTitles();
  setWeddingCountdown();
  adjustFloatingCoupleName();
  toggleHeader();
  fadeInUp('.floating-couple-name__content');

  if(isCurrentPageStore()) {
    $('#page-store').removeClass('container');
    $('#page').addClass('container');
    setTimeout(function() {
      $('#loading-screen').fadeOut(600);
    }, 1000);
  }

  $('.scroll-menu li').click(function(){
    $('.scroll-menu li').removeClass('active');
      $(this).addClass('active');
  });

  $('.dropdown-menu > li > a').off('click').on('click', function(){
    toggleMenu();
  });

  removeMapScroll();
  animateAnchor();
}

$(document).ready(function(){
  onInit();
  onBoth();

  $(document).on("icasei_template_change icasei_content_change", function() {
    onViewLoad();
    onBoth();
  }).trigger("icasei_content_change");
});
