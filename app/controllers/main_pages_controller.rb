class MainPagesController < ApplicationController
  before_action :set_fade

  def home
  end

  def stuff
  end

  def team
  end

  def about
  end

  def contact
  end

  private

    def set_fade
      @fadeTime = "1.0s"
      @fadeDistance = "5rem"
    end
end
