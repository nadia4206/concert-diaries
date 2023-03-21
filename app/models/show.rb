class Show < ApplicationRecord
  belongs_to :user
  belongs_to :artist
  belongs_to :venue

  validates :user_id, presence: true
  validates :artist_id, presence: true
  validates :venue_id, presence: true
  validates :show_date, presence: true

end
