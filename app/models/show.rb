class Show < ApplicationRecord
  belongs_to :user
  belongs_to :artist
  belongs_to :venue
end
