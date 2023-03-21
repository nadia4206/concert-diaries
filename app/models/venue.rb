class Venue < ApplicationRecord
    has_many :shows, dependent: :destroy
    has_many :users, through: :shows
    has_many :artists, through: :shows

    validates :venue_name, presence: true
    validates :venue_city, presence: true
    validates :venue_image, presence: true
end
