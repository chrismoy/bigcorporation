class AllstaffController < ApplicationController
  layout "allstaff"

  def home
    # @colors = ['#293249', '#69656F', '#ACA1A1', '#DED2CF', '#F7EFED']
    # @colors = ['#251E1B', '#56555B', '#818782', '#C4C2C3', '#A69A80']
    # @colors = ['#B32229', '#DB482E', '#1B4C26', '#2F5EA7', '#022284', '#4D318D']
    #               Red        Orange     Green       LB          DB      Purple

    @colors = ['#B32229', '#022284', '#1B4C26', '#DB482E', '#4D318D', '#4D318D', '#1B4C26', '#B32229', '#2F5EA7']

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

    count = 0

    @companies.each do |company|
      # company.insert(1, @colors[count])
      company.insert(1, @colors[count])
      if company[0] == "Allstaff"
        company[1] = "FFFFFF"
      else
        count += 1
      end
    end
  end

  def select
  end

  def portal
  end

  def capabilities
  end
end
