Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :api do
    namespace :v1 do
    resources :posts, only: %i[index create show destroy] do
      collection do
        put '/like/:id', to: 'posts#like'
      end
    end
    resources :user, only: [:index] do
      collection do
        get '/posts', to: 'user#posts'
      end
    end
    resources :comments, only: [:create]
    end
  end
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  root 'welcome#home'

  match '*path', to: 'welcome#app', via: :all
end
