App.Turblinks = {
  disabled: function() {
    return typeof Turbolinks == 'undefined'
  },
  enabled: function() {
    return typeof Turbolinks != 'undefined'
  }
}
