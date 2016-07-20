`var App = App || {};

App.init = function() {
  new scrollReveal;
}

$(document).on('ready page:change', App.init());
