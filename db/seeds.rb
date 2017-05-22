# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

nujabes = User.new(username: 'Nujabes', password: 'password')
nujabes.save
djimg = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/DJOkawari.jpg"
dj = User.new(username: 'DJ Okawari', password: 'password', image: djimg)
dj.save
empimg = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/emapea.JPG"
emapea = User.new(username: 'Emapea', password: 'password', image: empimg)
emapea.save
nymimg = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/nymano.jpg"
nymano = User.new(username: 'Nymano', password: 'password', image: nymimg)
nymano.save
sfcimg = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/SongsForCinema.jpg"
sfc = User.new(username: 'Songs For Cinema', password: 'password', image: sfcimg)
sfc.save
dudu = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/dudududu.jpg"
dududu = User.new(username: 'Darude', password: 'password', image: dudu)
dududu.save

Song.destroy_all

feather = File.open("#{Rails.root}/app/assets/music/nujabes-feather.mp3")
test_song = File.open("#{Rails.root}/app/assets/music/epikhigh.mp3")

Song.create!(title: 'Feather', user_id: nujabes.id, source: feather)
Song.create!(title: 'Reflection Eternal', user_id: nujabes.id, source: test_song)
Song.create!(title: 'Luv Letter', user_id: dj.id, image_url: djimg, source: test_song)
Song.create!(title: 'Flower Dance', user_id: dj.id, image_url: djimg, source: test_song)
Song.create!(title: 'DUDUDUDUDUUUU', user_id: dududu.id, image_url: dudu, source: test_song)
