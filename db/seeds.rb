puts "💣 clearing the database...."
User.destroy_all
Artist.destroy_all
Venue.destroy_all
Show.destroy_all


puts "👯‍♀️ creating users..."

User.create!([
    {
        username: "the_chosen_one",
        email: "harry.potter@hogwarts.com",
        password: "abc123"
    },
    {
        username: "weasley_rocks",
        email: "ron.weasley@hogwarts.com",
        password: "abc123"
    },
    {
        username: "clever_witch",
        email: "hermione.grainger@hogwarts.com",
        password: "abc123"
    }
])

puts "🎶 creating artists..."

Artist.create!([
    {
        artist_name: "Taylor Swift",
        genre: "Pop",
        artist_image: "https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=681&h=383&crop=1"
    },
    {
        artist_name: "Foo Fighters",
        genre: "Rock",
        artist_image: "https://media.pitchfork.com/photos/600065c87766d75d299a35b2/1:1/w_1280,h_1280,c_limit/Foo-Fighters.jpg"
    },
    {
        artist_name: "Blink 182",
        genre: "Rock",
        artist_image: "https://media.pitchfork.com/photos/63455c20ad52edf6c61b433c/1:1/w_2000,h_2000,c_limit/Blink-182.jpg"
    },
    {
        artist_name: "Kacey Musgraves",
        genre: "Country",
        artist_image: "https://imageio.forbes.com/specials-images/imageserve/62142aafa4d89d04e9c0952c/Kacey-Musgraves-Star-Crossed--Unveiled-Tour---New-York--NY/960x0.jpg?height=568&width=711&fit=bounds"
    },
    {
        artist_name: "P!nk",
        genre: "Pop",
        artist_image: "https://consequence.net/wp-content/uploads/2023/02/PNK-Press-Shot-credit-Solve-Sundsbo.jpg?quality=80&w=1031&h=580&crop=1&resize=1031%2C580&strip"
    },
    {
        artist_name: "Beyoncé",
        genre: "Pop",
        artist_image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-946416208.jpg?crop=0.8477751756440282xw:1xh;center,top&resize=1200:*"
    },
    {
        artist_name: "Rihanna",
        genre: "Pop",
        artist_image: "https://stylecaster.com/wp-content/uploads/2022/03/rihanna.jpg"
    },
    {
        artist_name: "Goldfish",
        genre: "Electronic",
        artist_image: "https://i.ytimg.com/vi/_8Qkuar7-hk/maxresdefault.jpg"
    },
    {
        artist_name: "Lizzo",
        genre: "Pop",
        artist_image: "https://people.com/thmb/cZICKcdj1XfGlxw0vyzCnVLAvtg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(839x129:841x131)/Lizzo-b26aa6fdf9964ced8eb7b7f4265f7826.jpg"
    },
    {
        artist_name: "Lake Street Dive",
        genre: "Pop-Soul",
        artist_image: "https://www.rollingstone.com/wp-content/uploads/2018/06/ly772szd-7b55feb3-867f-493e-a96e-a3e04e2470c1.jpg"
    }
])

puts "🌇 creating venues..."

Venue.create!([
    {
        venue_name: "Ruoff Music Center",
        venue_city: "Noblesville",
        venue_state: "IN",
        venue_image: "https://assets.livenationcdn.com/uploads/ruoff-music-center-1.jpeg"
    },
    {
        venue_name: "United Center",
        venue_city: "Chicago",
        venue_state: "IL",
        venue_image: "https://blog.ticketmaster.com/wp-content/uploads/United-Center-Bulls_BSP3742-1024x681.jpg"
    },
    {
        venue_name: "Thalia Hall",
        venue_city: "Chicago",
        venue_state: "IL",
        venue_image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/af/a9/85/thalia-hall.jpg?w=1200&h=-1&s=1"
    },
    {
        venue_name: "Old National Center",
        venue_city: "Indianapolis",
        venue_state: "IN",
        venue_image: "https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-30429/1583428060.jpg"
    },
    {
        venue_name: "Red Rocks Amphitheater",
        venue_city: "Denver",
        venue_state: "CO",
        venue_image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/aa/59/2c.jpg"
    }
])

puts "🎙 creating shows..."

Show.create!([
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 1.week.ago,
    highlight: "Amazing light show!",
    image_url: "https://connorgroup.com/static/4bb1b295ecca0123d20cd18be8066649/cd40e/Concerts_near_San_Antonio-scaled.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 3.years.ago,
    highlight: "Too loud...",
    image_url: "https://imgs.6sqft.com/wp-content/uploads/2021/07/13123945/The-Rooftop-at-Pier-17-concert.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 2.years.ago,
    highlight: "Crazy dance moves!",
    image_url: "https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 1.week.ago,
    highlight: "Rocked",
    image_url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHw%3D&w=1000&q=80"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 2.years.ago,
    highlight: "Mind blown!",
    image_url: "https://townsquare.media/site/660/files/2022/01/attachment-aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 4.years.ago,
    highlight: "Best night ever",
    image_url: "https://www.discoverstarline.com/wp-content/uploads/2019/03/Concert.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 2.years.ago,
    highlight: "Loved every second!",
    image_url: "https://www.visitphilly.com/wp-content/uploads/2021/07/TheMann_JAugust_Lauren_Daigle_2200x1237vp.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 1.week.ago,
    highlight: "Solid opening act",
    image_url: "https://static01.nyt.com/images/2020/03/12/arts/12virus-concerts1/merlin_170369787_3ccd2f4f-b47a-4deb-9cfc-db37ae27e444-mobileMasterAt3x.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 2.years.ago,
    highlight: "Vocals on point",
    image_url: "https://www.phillymag.com/wp-content/uploads/sites/3/2019/05/philadelphia-concerts.jpg"
},
{
    user_id: User.all.sample.id,
    artist_id: Artist.all.sample.id,
    venue_id: Venue.all.sample.id,
    show_date: 3.years.ago,
    highlight: "WOOOO!",
    image_url: "https://texashillcountry.com/wp-content/uploads/SW_DylanRives-640x390.jpg"
}
])

puts "done seeding 🌱"
