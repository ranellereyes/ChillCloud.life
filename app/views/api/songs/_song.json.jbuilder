json.extract! song, :id, :title, :user_id, :image_url, :genre
json.artist song.user.username
json.artistAvatar song.user.image

json.comments(song.comments) do |comment|
  json.user_id comment.user_id
  json.id comment.id
  json.body comment.body
  json.user comment.user.username
  json.avatar comment.user.image
  json.date comment.created_at
end

json.song_details do
  json.extract! song, :source, :length
end
