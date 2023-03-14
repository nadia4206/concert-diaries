class Artist < ApplicationRecord
    has_many :shows, dependent: :destroy
    has_many :users, through: :shows
    has_many :venues, through: :shows
end
