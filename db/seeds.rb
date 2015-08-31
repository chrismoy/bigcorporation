pages = [["intro", "http://vjs.zencdn.net/v/oceans.mp4"],
         ["home", "/assets/SkylineBlack.jpg"]]

pages.each do |page|
  Page.create!(name: page[0], background: page[2])
end
