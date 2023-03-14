class VenueSerializer < ActiveModel::Serializer
  attributes :id, :venue_name, :venue_city, :venue_state, :venue_image
  has_many :artists
end
