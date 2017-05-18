class Song < ApplicationRecord
  validates_uniqueness_of :title
  validates_presence_of :title, :user_id, :source

  belongs_to :user
end
