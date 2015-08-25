Rails.application.routes.draw do
  root    'main_pages#home'

  get     'home' => "main_pages#home"
  get     'stuff' => "main_pages#stuff"
  get     'team' => "main_pages#team"
  get     'about' => "main_pages#about"
  get     'contact' => "main_pages#contact"
  get     'thoughts' => "main_pages#blog", as: :blog
end
