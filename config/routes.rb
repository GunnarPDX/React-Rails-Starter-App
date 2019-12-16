Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
      resources :profile
      resources :user
    end
  end
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  root 'welcome#home'

  match '*path', to: 'welcome#app', via: :all
end
