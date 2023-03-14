class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :artist_name, :genre, :artist_image
  has_many :venues
end
