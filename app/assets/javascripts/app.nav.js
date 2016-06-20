App.Nav = {
  center_links: function() {
    var nav_height = $('.nav-left').height();
    var logo_height = $('#brand-logo').outerHeight();
    var info_height = $('.company-info').outerHeight();
    var link_height = $('.nav-links').outerHeight();
    var link_width = $('.nav-links').width();

    var link_margin = (nav_height - info_height + logo_height - link_height);

    $('.nav-links').css('margin-top', 0.5 * link_margin).css('margin-left', -0.5 * link_width);
  }
}

// $(document).on('page:change', function() {
//   App.Nav.center_links();
// });

// $('.nav').on('change', function() {
//   App.Nav.center_links();
// });

// $(window).on('resize', function() {
//   App.Nav.center_links();
// });

