json.extract! song, :id, :title, :user_id, :image_url, :genre
json.artist song.user.username
json.artistAvatar song.user.image
json.song_details do
  json.extract! song, :source, :length
end
