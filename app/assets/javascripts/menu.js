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
      if(nextIndex == 1 && direction == "up") {
        $('nav').removeClass("active");
      }
      if(nextIndex > 1 && direction == "down") {
        $('nav').addClass("active");
      }
    }
  });
}

function centerDirectory() {
  var $directory = $('.directory');
  directoryHeight = $directory.height();
  directoryMargin = directoryHeight * -0.5;
  $directory.css("margin-top", directoryMargin );
}
