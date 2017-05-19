class AddAttachmentSourceToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :source
    end
  end

  def self.down
    remove_attachment :songs, :source
  end
end
