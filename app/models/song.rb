class Song < ApplicationRecord
  validates_uniqueness_of :title
  validates_presence_of :title, :user_id, :source
  before_create :defaults

  belongs_to :user

  def defaults
    self.image_url ||= 'http://i.imgur.com/l7TtZHS.jpg'
  end
end
