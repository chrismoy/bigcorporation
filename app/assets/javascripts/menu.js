function menuButton() {
  $('.menu-button').click(function() {
    $('.directory').toggleClass("active");
  });
}

function toggleMenu() {
  var toggleTime = 700;

  $('#scrollContainer').fullpage({
    sectionSelector: '.tile',
    onLeave(index, nextIndex, direction) {
      if(nextIndex == 1 && direction == "up") {
        $('nav').toggleClass("active");
      }
    },
    afterLoad(anchorLink, index) {
      if(index == 2) {
        $('nav').toggleClass("active");
      }
    }
  });
}
