# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get '/message/random', to: 'random_message#index'
end
