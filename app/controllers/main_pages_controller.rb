class MainPagesController < ApplicationController
  before_action :set_fade
  before_action :set_background

  def home
    @picture = "SkylineBlack.jpg"
  end

  def stuff
  end

  def team
  end

  def about
  end

  def contact
  end

  def blog
  end

  private

    def set_fade
      @fadeTime = "1.0s"
      @fadeDistance = "5rem"
    end

    def set_background
      @background = "url(<%= image_path('SkylineBlack.jpg') %>)"
    end
end
