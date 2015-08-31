class MainPagesController < ApplicationController
  before_action :set_fade
  before_action :set_background

  def home
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
