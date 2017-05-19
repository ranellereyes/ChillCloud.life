class AddAttachmentImageUrlToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :image_url
    end
  end

  def self.down
    remove_attachment :songs, :image_url
  end
end
