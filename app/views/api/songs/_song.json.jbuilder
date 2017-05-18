json.extract! song, :title, :user_id, :image_url, :genre
json.song_details do
  json.extract! song, :source, :length
end
