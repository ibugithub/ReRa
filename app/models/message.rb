# frozen_string_literal: true

class Message < ApplicationRecord
  scope :random, -> { order('RANDOM()').first }
end
