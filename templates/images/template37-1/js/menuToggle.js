$(document).ready(function() {
	if ($(window).width() > 640) {
		$("#main_template").delegate(".open-menu-rsp", "click", function() {
			$('#cont ul').slideToggle();
		});
		$("#main_template").delegate("#menu a", "click", function() {
			$('#cont ul').slideToggle();
		});
	}
});
