class Comment < ApplicationRecord
  validates_presence_of :body, :user_id, :song_id

  belongs_to :user
  belongs_to :song
end
