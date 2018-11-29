;

function removeMapScroll() {
  var $map;
  var $cover;

  $map = $('.map-container');
  $cover = $('<div class="cover"></div>');
  $map.append($cover);
  $cover.off('click').on('click', function() {
    $cover.remove();
  });
}
