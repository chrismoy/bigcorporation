function menuButton() {
  $('.menu-button').click(function() {
    $('.directory').toggleClass("active");
  });
}

function toggleMenu() {
  var toggleTime = 700;

  $('#scrollContainer').fullpage({
    sectionSelector:'.tile',
    anchors:['intro', 'home', 'services', 'about', 'contact'],
    menu:'#mainMenu',
    onLeave(index, nextIndex, direction) {
      if((nextIndex == 1 && direction == "up") || (nextIndex == 2 && direction == "down")) {
        $('nav').toggleClass("active");
      }
    }
  });
}
