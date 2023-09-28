# frozen_string_literal: true

class RandomMessageController < ApplicationController
  def index
    message = Message.order('RANDOM()').first
    p 'the message is', message
    render json: message
  end
end
