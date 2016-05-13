Rails.application.routes.draw do
  root    'main_pages#home'

  get     'home' => "main_pages#home", as: "home"
  get     'work' => "main_pages#work", as: "work"
  get     'about' => "main_pages#about", as: "about"
  get     'contact' => "main_pages#contact", as: "contact"
end
