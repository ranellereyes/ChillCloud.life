json.partial! 'api/songs/song', song: @song

json.otherSongs(@song.user.songs
  .where("id != ?", @song.id)
  .order("RANDOM()").limit(3)) do |song|
    json.title song.title
    json.image song.image_url
    json.id song.id
end
