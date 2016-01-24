App.Menu = {
  toggle: function() {
    $('.menu').fadeToggle( "200" );
  }
}

$(document).on( "click", "[data-behavior~=toggle-menu]", function() {
  $(this).toggleClass("btn-hamburger-active");
  // $('header .btn').toggleClass( "active" );
  App.Menu.toggle();
});
