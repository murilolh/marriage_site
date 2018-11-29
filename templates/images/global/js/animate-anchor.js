;

function animateAnchor() {
  $(".anchor").off('click').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 800);
  });

  $(".anchor-back").off('click').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
  });
}
