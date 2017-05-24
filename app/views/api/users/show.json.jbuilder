json.partial! 'api/users/user', user: @user

# json.extract! user, :id, :username, :image

json.songs(@user.songs) do |song|
  json.partial! 'api/songs/song', song: song
  # json.extract! song, :id, :title, :user_id, :image_url, :genre
  # json.artist song.user.username
  # json.artistAvatar song.user.image
  #
  # json.song_details do
  #   json.extract! song, :source, :length
  # end

end
