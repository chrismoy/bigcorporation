function initVideo() {
  videojs("homeVideo").ready(function(){
    var myPlayer = this;

    // EXAMPLE: Start playing the video.
    myPlayer.play();
  });
}
