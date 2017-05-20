class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false, unique: true
      t.integer :user_id, null: false
      t.string :image
      t.string :genre
      t.string :length
      t.timestamps
    end

    add_index :songs, :title, unique: true
    add_index :songs, :user_id
  end
end
