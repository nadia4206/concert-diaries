class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :artist, null: false, foreign_key: true
      t.belongs_to :venue, null: false, foreign_key: true
      t.date :show_date
      t.string :highlight
      t.string :image_url

      t.timestamps
    end
  end
end
