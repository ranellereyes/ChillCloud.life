# API ENDPOINTS

## HTML API

### Root

- `GET /` : loads React web app

## JSON API

### Users

- `GET api/users` : gets all users
- `POST api/users` : creates new user
- `PATCH api/users` : edits user info
- `GET api/users/:id` : gets user info

### Session

- `POST api/session` : create new session
- `DELETE api/session` : log current user out

### Songs

- `GET api/songs` : gets all songs
- `GET api/songs/:id` : gets specific song
- `POST api/songs` : creates new song
- `DELETE api/songs` : deletes song
- `PATCH api/songs/:id` : edits song

### Comments

- `GET api/songs/:id/comments` : gets all comments for specific song
- `POST api/comments` : creates new comment
- `DELETE api/comments/:id` : deletes comment
