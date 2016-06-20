App.Menu = {
  toggle: function() {
    $('.menu').fadeToggle( "200" );
  }
}

$(document).on( "click", "[data-behavior~=toggle-menu]", function() {
  $(this).children('.btn-hamburger').toggleClass("btn-hamburger-active");
  App.Menu.toggle();
});
