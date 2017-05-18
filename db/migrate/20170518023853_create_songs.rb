class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false, unique: true
      t.integer :artist_id, null: false
      t.string :image_url
      t.string :genre
      t.string :source, unique: true
      t.string :length
      t.timestamps
    end

    add_index :songs, :title, unique: true
    add_index :songs, :artist_id, unique: true
  end
end
