class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :venue_name
      t.string :venue_city
      t.string :venue_state
      t.string :venue_image

      t.timestamps
    end
  end
end
