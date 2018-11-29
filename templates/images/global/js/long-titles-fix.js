;

function fixLongTitles() {
  var title_h1 = $("#header h1 a").text();
  if(title_h1.length > 50 && title_h1.length <= 60) {
    $(".menu").addClass("fix-long-title-until-60");
  } else if(title_h1.length > 60) {
    $(".menu").addClass("fix-long-title-more-60");
  }
}
