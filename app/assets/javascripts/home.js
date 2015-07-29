function resizing() {
  setCompanyHeights();
}

function setCompanyHeights() {
  var width = $('.company').first().width();

  $('.company').height(width * 0.5);
}

function initialLogoPositions() {
  $( '.company img' ).each(function() {
    $(this).on('load', function() {
      $(this).css('margin-top', $(this).height() * -0.5);
      $(this).css('margin-left', $(this).width() * -0.5);
    });

  });
}

function setLogoPositions() {
  $( '.company img' ).each(function() {
    $(this).css('margin-top', $(this).height() * -0.5);
    $(this).css('margin-left', $(this).width() * -0.5);
  });
}
