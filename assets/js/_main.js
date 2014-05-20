+function($) {
  var $footerLink = $('.back-to-top');

  $footerLink.on('click', function(e) {
    e.preventDefault();

    $('html,body').animate({scrollTop: 0}, 200);
  });
}(jQuery);

+function($) {
  var $lazy = $('.lazy'),
      retina = window.devicePixelRatio > 1;

  // Change the data attribute on retina devices, before they're lazyloaded.
  if (retina) {
    $lazy.each(function(i) {
      var $this = $(this),
          original  = $this.data('original');

      extension = original.substr(original.length - 4, original.length);
      original = original.replace(extension, '@2x' + extension);

      $this.attr('data-original', original);
    });
  }

  $lazy.lazyload({
    effect : "fadeIn"
  });
}(jQuery);

+function($) {
  var $links = $('.nav a');

  $links.on('click', function(e) {
    e.preventDefault();

    var $section = $( $(this).attr('href') );

    if ($section.length) {
      var topVal = Math.max($section.offset().top - 73, 0);
      $('html, body').animate({scrollTop: topVal}, 300);
    }
  });
}(jQuery);