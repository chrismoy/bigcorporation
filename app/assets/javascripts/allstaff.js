//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require home

$(function(){ $(document).foundation(); });

$(document).ready(ready);
$(document).on('page:load', ready);
$(window).resize(resizing);

function ready() {
  setCompanyHeights();
  initialLogoPositions();

  $('#modal-button').click(function() {
    obscure();
    $('#modal').show();
  });
  $('#modal-hide').click(function() {
    obscure();
    $('#modal').hide();
  });
}

function obscure() {
  $('.content').toggleClass('obscure');
}
