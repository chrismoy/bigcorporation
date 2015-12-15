var App = App || {};

App.init = function() {
  new scrollReveal;
}

$(document).on('page:change', App.init());
