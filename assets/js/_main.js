+function($) {
  var $footerLink = $('.back-to-top');

  $footerLink.on('click', function(e) {
    e.preventDefault();

    $('html,body').animate({scrollTop: 0}, 200);
  });
}(jQuery);