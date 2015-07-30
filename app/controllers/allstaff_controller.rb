class AllstaffController < ApplicationController
  layout "allstaff"

  def home
    # @colors = ['#293249', '#69656F', '#ACA1A1', '#DED2CF', '#F7EFED']
    # @colors = ['#251E1B', '#56555B', '#818782', '#C4C2C3', '#A69A80']
    # @colors = ['#B32229', '#DB482E', '#1B4C26', '#2F5EA7', '#022284', '#4D318D']
    #               Red        Orange     Green       LB          DB      Purple

    @colors = ['#B32229', '#022284', '#1B4C26', '#DB482E', '#4D318D', '#4D318D', '#1B4C26', '#B32229', '#2F5EA7']

    @companies = [
      ["Allstaff", "dfasdf"],
      ["Select Staffing", "Select Staffing understands the traits that make an outstanding office professional. When you need top talent with strong organizational skills, a knack for multi-tasking and the ability to maintain order in the midst of chaos, we deliver. We not only ensure that the candidate has the proper qualifications to perform the job, but also has the right qualities to fit in with your team and thrive in your corporate culture."],
      ["Fellows Staffing", "Fellows Staffing brings you the most accomplished talent for Contract, Contract-to-Hire and Direct Placement. Our recruiting capabilities extend across a full range of management, operations, and clerical roles. The experienced professionals at Fellows Staffing provide candidates in positions ranging from entry to senior level roles across a wide variety of disciplines, business environments, and industries."],
      ["Jeane Thorne Staffing", "Jeane Thorne Staffing is a service-minded team of professionals who take great pride in calling Minnesota our home. For over 44 years Jeane Thorne Staffing has shared our commitment to excellence with a variety of organizations and motivated candidates and are proud to serve a meaningful role in either your career path, or in providing your business staffing solutions. We provide Solutions for challenges in Staffing and Employment."],
      ["Select Advantage", "Our Skilled Industrial Recruiters provide professional and experienced Contract, Contract-to-Hire and Direct Staffing workers for assembly, distribution, manufacturing, production and warehouse positions. This includes Maintenance Technicians, Shipping and Receiving, Machine Operators, Skilled Machinists, Pickers and Packers, Quality Control, Forklift Drivers, Project Workers, and much more."],
      ["Digital Staffing", "Digital Staffings responsiveness and comprehension of the technical marketplace is second to none and we understand the Information Technology space and the professionals who work in it. From Directors of IT to Project Managers, Desktop Support to Help Desk, we have the contacts to help find the right person for the job and the right job for the person."],
      ["Andrews Staffing", "Our business is people. We exist because of clients, employees and the communities we serve. Andrews Staffing specializes in finding Light Industrial talent, including Industrial Management, Machining, Maintenance Mechanic, Manufacturing / Production, Quality Assurance, Warehouse / Distribution, Scheduling, Procurement, Equipment Maintenance, Inventory Control, Production Coordination and much more."],
      ["Behavioral Staffing", "Behavioral Staffing is committed to providing personalized recruiting and placement services that help our Clients achieve their staffing goals. We offer temporary, temporary-to-hire and direct-hire placement opportunities. Our proven ability to both locate and seamlessly integrate the best available talent has earned us a solid reputation for excellence, reliability, and unmatched client service solutions."],
      ["Fellows Financial", "Fellows Financial we are at the forefront of staffing services for financial and accounting professionals in the Chicagoland area. We have weathered the ups and downs of the market and have stayed current with the changing landscape of the employment business. Although we are proud to have withstood the test of time, we look forward to the next position we fill and the next job candidate we represent."],
      ["All Calls", "The Call Center industry has continual change; technology changes daily, companies expect more for less and contact center leaders are stuck in the middle trying to understand how to make it all work. Call Center Outsourcing provides many organizations the best solution for cost reduction, higher customer satisfaction and access to industry leading technology that increases the touch point’s customer can use to get the service they need."]
    ]

    count = 0

    @companies.each do |company|
      company.insert(2, @colors[count])
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
