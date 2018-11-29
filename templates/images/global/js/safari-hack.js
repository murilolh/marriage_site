;

function applySafariHack() {
  var isSafari = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;

  if(isSafari) $('html').addClass('is-safari');
}

applySafariHack();
