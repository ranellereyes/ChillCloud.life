class Song < ApplicationRecord
  validates_uniqueness_of :title
  validates_presence_of :title, :user_id

  has_attached_file :image_url,
    default_url: "https://s3-us-west-1.amazonaws.com/chillcloud-dev/albumDefault.png",
    s3_protocol: :https
  has_attached_file :source,
    default_url: "https://s3-us-west-1.amazonaws.com/chillcloud-dev/nujabes-feather.mp3",
    s3_protocol: :https

  # validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/
  validates_attachment_content_type :source, content_type: /\Aaudio\/.*\z/
  validates_attachment_size :source, :less_than => 20.megabytes

  validates_attachment_size :image_url, :less_than => 4.megabytes
  validates_attachment :image_url,
  content_type: { content_type: ["image/jpeg", "image/png", "image/jpg"]}

  # validates_attachment :source,
  #   content_type: { content_type: ["audio/mid", "audio/mp3", "audio/wav"]}

  belongs_to :user
  has_many :comments
end
