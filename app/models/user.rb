class User < ApplicationRecord
    has_many :shows, dependent: :destroy
    has_many :artists, through: :shows
    has_many :venues, through: :shows

    has_secure_password
end
