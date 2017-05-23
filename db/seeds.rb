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
edimg = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/ed.JPG"
ed = User.new(username: 'Ed Sheeran', password: 'password', image: edimg)
ed.save

Song.destroy_all

feather = File.open("#{Rails.root}/app/assets/music/nujabes-feather.mp3")
luv = File.open("#{Rails.root}/app/assets/music/djo-luv.mp3")
empref = File.open("#{Rails.root}/app/assets/music/emp-reflection.mp3")
aru = File.open("#{Rails.root}/app/assets/music/nuj-aruariandance.mp3")
reflect = File.open("#{Rails.root}/app/assets/music/nujabes-reflectioneternal.mp3")
sand = File.open("#{Rails.root}/app/assets/music/sandstorm.mp3")
sfcorig = File.open("#{Rails.root}/app/assets/music/sfc-origami.mp3")
shapes = File.open("#{Rails.root}/app/assets/music/shape-of-you.mp3")

test_song = File.open("#{Rails.root}/app/assets/music/epikhigh.mp3")


Song.create!(title: 'Feather', user_id: nujabes.id, source: feather)
Song.create!(title: 'Reflection Eternal', user_id: nujabes.id, source: reflect)
Song.create!(title: 'Luv Letter', user_id: dj.id, image_url: djimg, source: luv)
Song.create!(title: 'DUDUDUDUDUUUU', user_id: dududu.id, image_url: dudu, source: sand)
Song.create!(title: 'Aruarian Dance', user_id: nujabes.id, source: aru)
Song.create!(title: 'Origami Airplanes', user_id: sfc.id, image_url: sfcimg, source: sfcorig)
Song.create!(title: 'Shape Of You', user_id: ed.id, image_url: edimg, source: shapes)
Song.create!(title: 'Reflection', user_id: emapea.id, image_url: empimg, source: empref)
