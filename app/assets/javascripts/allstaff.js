//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks

$(function(){ $(document).foundation(); });

$(document).ready(ready);
$(document).on('page:load', ready);
$(window).resize(resizing);

function ready() {
  setCompanyHeights();
}

function resizing() {
  setCompanyHeights();
}

function setCompanyHeights() {
  var width = $('.company').first().width();
  $('.company').height(width);
}
