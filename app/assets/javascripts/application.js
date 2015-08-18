// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require scrollReveal.min
//= require turbolinks
//= require menu

$(function(){
  new scrollReveal;
  $(document).foundation();
  $('.menu-button').click(function() {
    $('.directory').toggle();
  });

  var BV = new $.BigVideo();
  BV.init();
  if (Modernizr.touch) {
      BV.show('SkylineBlack2.jpg');
  } else {
      BV.show('slowBoat.mp4',{ambient:true});
  }
});
