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

Song.destroy_all

Song.create!(title: 'Feather', user_id: nujabes.id, source: 'fake.source/1')
Song.create!(title: 'Reflection Eternal', user_id: nujabes.id, source: 'fake.source/2')
Song.create!(title: 'Modal Soul', user_id: nujabes.id, source: 'fake.source/3')
