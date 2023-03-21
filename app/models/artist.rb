class Artist < ApplicationRecord
    has_many :shows, dependent: :destroy
    has_many :users, through: :shows
    has_many :venues, through: :shows

    validates :artist_name, presence: true
    validates :genre, presence: true
    validates :artist_image, presence: true
end
