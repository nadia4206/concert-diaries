class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :artist_name
      t.string :genre
      t.string :artist_image

      t.timestamps
    end
  end
end
