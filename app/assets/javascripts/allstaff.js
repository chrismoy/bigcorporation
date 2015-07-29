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
}
