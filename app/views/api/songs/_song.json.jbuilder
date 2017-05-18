json.extract! song, :title, :artist_id, :image_url, :genre
json.song_details do
  json.extract! :source, :length, :waveform
end
