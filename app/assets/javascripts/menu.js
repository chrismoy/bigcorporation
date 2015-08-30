function menuButton() {
  $('.menu-button').click(function() {
    $('.directory.mobile').fadeToggle();
    $(this).toggleClass("active");
  });
}

function toggleMenu() {
  var toggleTime = 700;

  $('#scrollContainer').fullpage({
    sectionSelector: '.tile',
    onLeave(index, nextIndex, direction) {
      if(nextIndex == 1 && direction == "up") {
        $('nav').animate({
          left: "-20%"
        }, toggleTime );
      }
    },
    afterLoad(anchorLink, index) {
      if(index == 2) {
        $('nav').animate({
          left: "0"
        }, toggleTime );
      }
    }
  });
}
