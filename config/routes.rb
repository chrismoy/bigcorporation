Rails.application.routes.draw do
  root    'main_pages#home'

  get     'home' => "main_pages#home"
end
