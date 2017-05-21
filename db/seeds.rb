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
dj = User.new(username: 'DJ Okawari', password: 'password')
dj.save
emapea = User.new(username: 'Emapea', password: 'password')
emapea.save
nymano = User.new(username: 'Nymano', password: 'password')
nymano.save
sfc = User.new(username: 'Songs For Cinema', password: 'password')
sfc.save

Song.destroy_all

test_song = File.open("#{Rails.root}/app/assets/music/nujabes-feather.mp3")

Song.create!(title: 'Feather', user_id: nujabes.id, source: test_song)
Song.create!(title: 'Reflection Eternal', user_id: nujabes.id, source: test_song)
Song.create!(title: 'Modal Soul', user_id: nujabes.id, source: test_song)
