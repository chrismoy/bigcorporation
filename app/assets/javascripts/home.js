function resizing() {
  setCompanyHeights();
  setLogoPositions()
}

function setCompanyHeights() {
  var width = $('.company').first().width();

  $('.company').height(width * 0.5);
}

function initialLogoPositions() {
  $( '.company .description img' ).each(function() {
    $(this).on('load', function() {
      $(this).css('margin-top', $(this).height() * -0.5);
      $(this).css('margin-left', $(this).width() * -0.5);
    });

  });
}

function setLogoPositions() {
  $( '.company .description img' ).each(function() {
    $(this).css('margin-top', $(this).height() * -0.5);
    $(this).css('margin-left', $(this).width() * -0.5);
  });
}
