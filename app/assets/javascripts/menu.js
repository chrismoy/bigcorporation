function menuButton() {
  $('.menu-button').click(function() {
    $('.directory.mobile').fadeToggle();
    $(this).toggleClass("active");
  });
}
