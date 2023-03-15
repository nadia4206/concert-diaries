class User < ApplicationRecord
    has_secure_password

    has_many :shows, dependent: :destroy
    has_many :artists, through: :shows
    has_many :venues, through: :shows

    validates :username, presence: true
    validates :username, uniqueness: true
end
