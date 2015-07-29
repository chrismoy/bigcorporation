function resizing() {
  setCompanyHeights();
  setLogoPositions();
}

function setCompanyHeights() {
  var width = $('.company').first().width();
  var highlightRatio = 0.1;

  $('.company').height(width);
  $('.highlight').height(highlightRatio * width);
  $('.highlight').width(highlightRatio * width);
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
