;

function setWeddingCountdown() {
  var login = get_meta("noivos");
  load_noivos(login, function(success) {
    if(success) {
      var noivos = this;
      var diff = Math.round((moment(date_format(noivos.get("data_casamento_dt"), "DD[/]MM[/]YYYY"), "DD[/]MM[/]YYYY").toDate() - moment(date_format(noivos.get("data_atual"), "DD[/]MM[/]YYYY"), "DD[/]MM[/]YYYY").toDate()) / (60 * 60 * 24 * 1000));
      var diff_str = "";

      if(diff > 0) {
        if(diff == 1) {
          diff_str = I18n.t("layout.tomorrow");
        } else {
          diff_str = I18n.t("layout.future_wedding_date", {
            dias: diff
          });
        }
      } else if(diff < 0) {
        if(diff == -1) {
          diff_str = I18n.t("layout.yesterday");
        } else {
          var d = diff * -1;
          diff_str = I18n.t("layout.past_wedding_date", {
            dias: d
          });
        }
      } else {
        diff_str = I18n.t("layout.today");
      }

      $(".floating-couple-name__content--counter").html(diff_str);
    }
  });
}
