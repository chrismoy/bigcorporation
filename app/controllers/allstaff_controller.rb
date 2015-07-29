class AllstaffController < ApplicationController
  layout "allstaff"

  def home
    @companies = [
      ["Select Staffing", "#1B4C26"],
      ["Fellows Staffing", "#022284"],
      ["Jeane Thorne Staffing", "#000000"],
      ["Select Advantage", "#2F5EA7"],
      ["Allstaff", "#F3EDDD"],
      ["Digital Staffing", "#000000"],
      ["Andrews Staffing", "#2F5EA7"],
      ["Behavioral Staffing", "#4D318D"],
      ["Fellows Financial", "#B32229"],
      ["All Calls", "#26357A"]
    ]
  end

  def select
  end

  def portal
  end

  def capabilities
  end
end
