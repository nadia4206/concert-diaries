class Venue < ApplicationRecord
    has_many :shows, dependent: :destroy
    has_many :users, through: :shows
    has_many :artists, through: :shows
end
