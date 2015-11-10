//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require foundation
//= require scrollReveal.min
//= require jquery.fullPage.min

var ready = function() {
  new scrollReveal;
  $(document).foundation();
};

$(document).ready(ready);
$(document).on('page:load', ready);
