# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Comment.destroy_all

u1i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/NujabesAvatar.jpg"
u1 = User.new(username: 'Nujabes', password: 'password', image: u1i)
u1.save

u2i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/DJOkawari.jpg"
u2 = User.new(username: 'DJ Okawari', password: 'password', image: u2i)
u2.save

u3i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/ed.JPG"
u3 = User.new(username: 'Ed Sheeran', password: 'password', image: u3i)
u3.save

u4i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/2ne1/2cxvihy.jpg"
u4 = User.new(username: '2ne1', password: 'password', image: u4i)
u4.save

u5i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Cassie/ae25814e2fa0419bc1a0e78738006487.jpg"
u5 = User.new(username: 'Cassie', password: 'password', image: u5i)
u5.save

u6i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Jack+Johnson/jack-johnson-live-ebet-roberts-650.jpg"
u6 = User.new(username: 'Jack Johnson', password: 'password', image: u6i)
u6.save

u7i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Mario/images.jpg"
u7 = User.new(username: 'Mario', password: 'password', image: u7i)
u7.save

u8i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/New+Heights/download+(1).jpg"
u8 = User.new(username: 'New Heights', password: 'password', image: u8i)
u8.save

u9i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/RADWIMPS/54cbca502562d82969a9e4a9_54f7bbf954861665787506b1_320.jpg"
u9 = User.new(username: 'Radwimps', password: 'password', image: u9i)
u9.save

u10i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/george/hqdefault.jpg"
u10 = User.new(username: 'George', password: 'password', image: u10i)
u10.save

u11i = "https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/nelly/nelly-2002-billboard-650x430.jpg"
u11 = User.new(username: 'Nelly', password: 'password', image: u11i)
u11.save

u12 = User.new(username: 'Demo', password: 'password')
u12.save

feather = File.open("#{Rails.root}/app/assets/music/nujabes-feather.mp3")
luv = File.open("#{Rails.root}/app/assets/music/djo-luv.mp3")
aru = File.open("#{Rails.root}/app/assets/music/nuj-aruariandance.mp3")
reflect = File.open("#{Rails.root}/app/assets/music/nujabes-reflectioneternal.mp3")
shapes = File.open("#{Rails.root}/app/assets/music/shape-of-you.mp3")

Song.create!(
  title: "If I Were You",
  user_id: u4.id,
  image_url: u4i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/2ne1/2NE1-If_I_Were_You_Unplugged_Ver_.mp3")
)

Song.create!(
  title: "그리워해요 - Missing You",
  user_id: u4.id,
  image_url: u4i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/2ne1/2NE1_-%EA%B7%B8%EB%A6%AC%EC%9B%8C%ED%95%B4%EC%9A%94_MISSING_YOU_.mp3")
)

Song.create!(
  title: "Gotta Be You",
  user_id: u4.id,
  image_url: u4i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/2ne1/2NE1_%ED%88%AC%EC%95%A0%EB%8B%88%EC%9B%90_-_Gotta_Be_You.mp3")
)

Song.create!(
  title: "Me and U",
  user_id: u5.id,
  image_url: u5i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Cassie/Cassie-Me+and+U.mp3")
)

Song.create!(
  title: "Sitting, Waiting, Wishing",
  user_id: u6.id,
  image_url: u6i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Jack+Johnson/06+Sitting%2C+Waiting%2C+Wishing.mp3")
)

Song.create!(
  title: "Do You Remember",
  user_id: u6.id,
  image_url: u6i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Jack+Johnson/13+Do+You+Remember.mp3")
)

Song.create!(
  title: "Better Together",
  user_id: u6.id,
  image_url: u6i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Jack+Johnson/Jack+Johson+-+Better+Together.mp3")
)

Song.create!(
  title: "Just a Friend",
  user_id: u7.id,
  image_url: u7i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Mario/Just+a+Friend+Mario.mp3")
)

Song.create!(
  title: "Peaches",
  user_id: u8.id,
  image_url: u8i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/New+Heights/Peaches+-New+Heights++Lyrics.mp3")
)

Song.create!(
  title: "Take Me On",
  user_id: u8.id,
  image_url: u8i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/New+Heights/Take+Me+On.mp3")
)

Song.create!(
  title: "Iindesuka?",
  user_id: u9.id,
  image_url: u9i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/RADWIMPS/Iindesuka+(By+Radwimps)+-+English+and+Romaji+Lyrics.mp3")
)

Song.create!(
  title: "Memeshi",
  user_id: u9.id,
  image_url: u9i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/RADWIMPS/Memeshi.mp3")
)

Song.create!(
  title: "Futarigoto",
  user_id: u9.id,
  image_url: u9i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/RADWIMPS/RADWIMPS-futarigoto_isshou_ni_ichido_no_wapu_ver_.mp3")
)

Song.create!(
  title: "Zen Zen Zense",
  user_id: u9.id,
  image_url: u9i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/RADWIMPS/RADWIMPS-%E5%89%8D%E5%89%8D%E5%89%8D%E4%B8%96.mp3")
)

Song.create!(
  title: "Lie To Me",
  user_id: u10.id,
  image_url: u10i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/george/Lie+To+Me++-+George.mp3")
)

Song.create!(
  title: "Such a Fool",
  user_id: u10.id,
  image_url: u10i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/george/George+Nozuka+-+Such+A+Fool.mp3")
)

Song.create!(
  title: "Over and Over",
  user_id: u11.id,
  image_url: u11i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/nelly/Over+And+Over+Again++-+Nelly.mp3")
)

Song.create!(
  title: "Dilemma",
  user_id: u11.id,
  image_url: u11i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/nelly/nelly-+dilemma.mp3")
)

Song.create!(
  title: "Cave Me In",
  user_id: u12.id,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Gallant+x+Tablo+x+Eric+Nam+-+Cave+Me+In+(Official+Video).mp3")
)

Song.create!(
  title: "Awoo",
  user_id: u12.id,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/MV_Lim_Kim(%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A8%E1%84%85%E1%85%B5%E1%86%B7)_(Togeworl(%E1%84%90%E1%85%AE%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AF%E1%86%AF))Awoo.mp3")
)

Song.create!(
  title: "Weak",
  user_id: u12.id,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/Passion+-+Weak.mp3")
)

Song.create!(title: 'Feather', user_id: u1.id, source: feather)
Song.create!(title: 'Reflection Eternal', user_id: u1.id, source: reflect)
Song.create!(title: 'Luv Letter', user_id: u2.id, image_url: u2i, source: luv)
Song.create!(title: 'Aruarian Dance', user_id: u1.id, source: aru)
Song.create!(title: 'Shape Of You', user_id: u3.id, image_url: u3i, source: shapes)

60.times do
  Comment.create!(
    song_id: (Song.first.id..Song.last.id).to_a.sample,
    user_id: (User.first.id..User.last.id).to_a.sample,
    body: [
      "Awesome",
      "Hi!",
      "Good stuff!",
      "I love leaving comments on songs!",
      "Happy hour?",
      "Happy hour!",
      "Cool beans",
      "I'd listen to this song on a ferry."
    ].sample
  )
end
