# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_14_173204) do
  create_table "artists", force: :cascade do |t|
    t.string "artist_name"
    t.string "genre"
    t.string "artist_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "artist_id", null: false
    t.integer "venue_id", null: false
    t.date "show_date"
    t.string "highlight"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_shows_on_artist_id"
    t.index ["user_id"], name: "index_shows_on_user_id"
    t.index ["venue_id"], name: "index_shows_on_venue_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", force: :cascade do |t|
    t.string "venue_name"
    t.string "venue_city"
    t.string "venue_state"
    t.string "venue_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "shows", "artists"
  add_foreign_key "shows", "users"
  add_foreign_key "shows", "venues"
end
