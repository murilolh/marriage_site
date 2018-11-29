;

var fadeInUp = function(selector, delay, condition) {
  delay = typeof delay === 'undefined' ? 1 : delay;
  condition = typeof condition === 'undefined' ? function() { return true; } : condition;

  $(document).on('icasei_template_change icasei_content_change', function() {
    $(selector).removeClass('fade-in-up');
    if(condition()) {
      setTimeout(function() {
        $(selector).addClass('fade-in-up');
      }, delay);
    }
  });
}
