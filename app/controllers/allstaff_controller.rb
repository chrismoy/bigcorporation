class AllstaffController < ApplicationController
  layout "allstaff"

  def home
    @companies = [
      ["Select Staffing"],
      ["Fellows Staffing"],
      ["Jeane Thorne Staffing"],
      ["Select Advantage"],
      ["Allstaff"],
      ["Digital Staffing"],
      ["Andrews Staffing"],
      ["Behavioral Staffing"],
      ["Fellows Financial"],
      ["All Calls"]
    ]
  end

  def select
  end

  def portal
  end

  def capabilities
  end
end
