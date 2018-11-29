;

function adjustFloatingCoupleName() {
  var coupleNameElem = $('.floating-couple-name__content--couple-name:first');

  if (coupleNameElem && coupleNameElem.length > 0) {
    var coupleNameLength = $(coupleNameElem).html().length;
    var maxLimit = 18;
    var minLimit = 8;

    if (coupleNameLength > maxLimit) {
      $(coupleNameElem).addClass('long');
    } else if (coupleNameLength < minLimit) {
      $(coupleNameElem).addClass('short');
    }
  }
}
