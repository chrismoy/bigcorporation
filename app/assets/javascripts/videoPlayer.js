function initVideo() {
  var BV = new $.BigVideo({
    doLoop:true,
    container:$('.content.home')
  });
  BV.init();
  BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
}
