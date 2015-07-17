Rails.application.routes.draw do
  get 'main_pages/home'

  get 'main_pages/stuff'

  get 'main_pages/team'

  get 'main_pages/about'

  get 'main_pages/contact'

  get 'home/stuff'

  get 'home/team'

  get 'home/about'

  get 'home/contact'

  root    'main_pages#home'
end
