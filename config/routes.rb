Rails.application.routes.draw do
  root to: 'pages#home'


  #API routing
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :trainings, only: [ :index, :show, :create ]
    end
  end
end
