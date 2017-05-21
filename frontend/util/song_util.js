
export const songsRequest = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs'
  })
);

export const newSongRequest = (formData) => (
  $.ajax({
    method: 'POST',
    url: `/api/songs/`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);

export const songRequest = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
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
