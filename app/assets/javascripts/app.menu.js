App.Menu = {
  toggle: function() {
    $('.menu').fadeToggle( "200", "easeInCubic" );
  }
}

$(document).on( "click", "[data-behavior~=toggle-menu]", function() {
  $(this).toggleClass("btn-hamburger-active");
});
