export const songsRequest = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs'
  })
);

export const newSongRequest = (song) => (
  $.ajax({
    method: 'POST',
    url: `/api/songs/`,
    data: {song}
  })
);

export const songRequest = (song) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${song.id}`,
    data: {song}
  })
);

export const editSongRequest = (song) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/songs/${song.id}`,
    data: {song}
  })
);

export const deleteSongRequest = (song) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/songs/${song.id}`
  })
);
