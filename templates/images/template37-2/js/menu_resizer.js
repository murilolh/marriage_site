$(document).on("icasei_template_change",function(){
  window.menuClosed = true;

  var menu = $('#menu');
  var trigger = $('#punch');

  $(trigger).off('click').on('click', function(event){
    if(window.menuClosed) {
      window.menuClosed = false;
      $(menu).addClass('open');
    }
  });

  $(menu).off('click').on('click', function(event){
    if(!window.menuClosed) {
      $(menu).removeClass('open');
      setTimeout(function() {
        window.menuClosed = true;
      },400);
    }
  });
});
