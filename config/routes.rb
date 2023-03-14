Rails.application.routes.draw do
  resources :shows
  resources :venues
  resources :artists
  resources :users
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
