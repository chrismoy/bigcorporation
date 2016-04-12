Rails.application.routes.draw do
  root    'main_pages#home'

  get     'home' => "main_pages#home", as: "home"
  get     'home' => "main_pages#work", as: "work"
  get     'home' => "main_pages#about", as: "about"
  get     'home' => "main_pages#contact", as: "contact"
end
