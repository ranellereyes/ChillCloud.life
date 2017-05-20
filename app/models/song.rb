class Song < ApplicationRecord
  validates_uniqueness_of :title
  validates_presence_of :title, :user_id

  has_attached_file :image_url, default_url: "https://s3-us-west-1.amazonaws.com/chillcloud-dev/albumDefault.png"
  has_attached_file :source

  validates_attachment :image_url,
    content_type: { content_type: ["image/jpeg", "image/png", "image/jpg"]}

  validates_attachment :source,
    content_type: { content_type: ["audio/mid", "audio/mp3", "audio/wav"]}

  belongs_to :user
end
