class ShowSerializer < ActiveModel::Serializer
  attributes :id, :show_date, :highlight, :image_url
  has_one :user
  has_one :artist
  has_one :venue
end
