# Component Hierarchy

### App

- Nav Container
- Player Container

### Nav Container

- Search Container
  - Search List Items
- Auth Container
- Upload Container

### Auth Container

- Login Form

### Search Container

- Search Bar

### Stream

- Side Bar Container
- Song Detail List Container
  - Song Detail List Items

### UsersView

- Update Form
- Song Detail List Container
- Side Bar Container

### Side Bar

- Artist List Items (Trending Artists/Songs)

### Song View

- Side Bar Container
- Comments Container
  - Comment Items
- Create Comment Form

### Upload

- Upload Form

path | Component
-----|----------
/ | App
/stream | Stream
/users/:id | UsersView
/songs/:id | SongView
