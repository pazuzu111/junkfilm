Rails.application.routes.draw do
  root 'pages#home'

  get '/movies' => 'pages#movies'

 
end
