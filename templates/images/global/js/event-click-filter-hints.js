;

$('body').on('click', 'a.hints', function(e) {
    $(".ul-hints a").each(function(){ $(this).removeClass("active"); });
    $(".hints .hotel, .hints .outros, .hints .restaurante, .hints .salaobeleza, #dicas .hotel, #dicas .outros, #dicas .restaurante, #dicas .salaobeleza").hide();
    $(this).addClass("active");

    switch(e.target.id){
      case 'hints-all':
            $(".hints .container, #dicas .def-location, #dicas .def-text").show();
            break;
      case 'hints-hotel':
            $(".hints .hotel, #dicas .hotel").show();
            break;
      case 'hints-halls':
            $(".hints .salaobeleza, #dicas .salaobeleza").show();
            break;
      case 'hints-restaurants':
            $(".hints .restaurante, #dicas .restaurante").show();
            break;
      case 'hints-others':
            $(".hints .outros, #dicas .outros").show();
            break;
    }
});
