Rails.application.routes.draw do
  root    'main_pages#home'

  get     'main_pages/home'
  get     'main_pages/stuff'
  get     'main_pages/team'
  get     'main_pages/about'
  get     'main_pages/contact'
  get     'allstaff/home'
  get     'allstaff/select'
  get     'allstaff/portal'
  get     'allstaff/capabilities'
end
