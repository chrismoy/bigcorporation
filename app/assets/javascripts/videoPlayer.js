function initVideo() {
  var BV = new $.BigVideo({
    doLoop:true,
    container:$('.content.home')
  });
  BV.init();
  if (Modernizr.touch) {
      BV.show(image-url('SkylineBlack.jpg'));
  } else {
      BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
  }
}
