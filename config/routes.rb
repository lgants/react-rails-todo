Rails.application.routes.draw do
  scope '/api' do
    resources :tasks, only: [:create, :destroy]
    resources :lists, only: [:create]
  end
end
