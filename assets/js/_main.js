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
  var $links = $('.nav a'),
      $window = $(window),
      $sections = [];

  var removeActiveLinks = function() {
    $links.parent().removeClass('active');
  };

  // Setup the sections array.
  var getSectionsObject = function() {
    var $s = [];

    $links.each(function() {
      var $this = $(this),
          $section = $( $this.attr('href') ),
          top   = String($section.offset().top),
          range = String( top + $section.outerHeight() ),
          key = top + '-' + range;

      $s.push( $section );
    });

    $sections = $s;
  };

  var setActiveLink = function() {
    var $this = $(this),
        windowTop = $(window).scrollTop();

    for (var i = $sections.length - 1; i >= 0; i--) {
      var s = $sections[i],
          sectionTop = Number( s.offset().top ),
          sectionBottom = sectionTop + Number(s.outerHeight()),
          href,
          activeLink;

      if (windowTop >= sectionTop && windowTop <= sectionBottom ) {
        // Get the link href.
        sectionId = '#' + s.attr('id');

        // Set the active link if one doesn't exist.
        if (! activeLink) activeLink = $('[href="' + sectionId + '"]');

        // The current active link is different from the "active" sectionId.
        removeActiveLinks();
        activeLink = $('[href="' + sectionId + '"]');
        // Set the nav item class.
        activeLink.parent().addClass('active');
      }
    };
  };

  // Scroll to the page sections on link click.
  $links.on('click', function(e) {
    e.preventDefault();

    var $section = $( $(this).attr('href') );

    if ($section.length) {
      var topVal = Math.max($section.offset().top - 73, 0);
      $('html, body').animate({scrollTop: topVal}, 300);

      removeActiveLinks();

      $(this).parent().addClass('active');
    }
  });

  // Get the sections array on page load/resize.
  $window.on('load resize', getSectionsObject);
  $window.on('load scroll resize', setActiveLink);

}(jQuery);