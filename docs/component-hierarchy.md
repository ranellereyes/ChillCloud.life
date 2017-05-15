# Component Hierarchy

### App

- Nav Container
- Player Container

### Nav Container

- Search Container
- Auth Container

### Auth Container

- Login Form

### Search Container

- Search Bar

### Stream

- Side Bar Container
- Song Detail List Container
  - Song Detail List Items

### UsersView

- Song Detail List Container
- Side Bar Container

### Side Bar

- Artist List Items

### Song View

- Side Bar Container
- Comments Container
  - Comment Items
- Create Comment Form

path | Component
-----|----------
/ | App
/stream | Stream
/users/:id | UsersView
/songs/:id | SongView
