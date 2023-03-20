Rails.application.routes.draw do
  resources :shows
  resources :venues
  resources :artists
  resources :users, only: [:show, :create, :index]
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
end
