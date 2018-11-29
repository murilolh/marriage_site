;

var closeMenu = function(trigger) {
  $('#menu #cont li').removeClass('select')
  $(trigger).addClass('select');
  $('#punch').click();
};
