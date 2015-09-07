//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require foundation
//= require scrollReveal.min
//= require imagesLoaded.min
//= require video
//= require bigvideo
//= require jquery.fullPage.min
//= require menu
//= require videoPlayer

var ready = function() {
  new scrollReveal;
  $(document).foundation();
  menuButton();
  toggleMenu();
  // centerDirectory();
  initVideo();
};

$(document).ready(ready);
$(document).on('page:load', ready);
