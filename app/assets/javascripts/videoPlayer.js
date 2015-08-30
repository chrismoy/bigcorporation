function initVideo() {
  videojs("homeVideo").ready(function(){
    var myPlayer = this;
    myPlayer.isFullscreen(true);
    myPlayer.play();
  });
}
