;

function toggleHeader() {
  var scrollTop = window.pageYOffset;
  var scrollLimit = window.innerHeight / 2 - 80;

  if(isCurrentPageHome()) {
    $('.floating-couple-name').removeClass('compact');

    if(scrollTop > scrollLimit) {
      $('.menu').addClass('detached');
    } else {
      $('.menu').removeClass('detached');
    }
  } else {
    $('.floating-couple-name').addClass('compact');
    $('.menu').addClass('detached');
  }
}
