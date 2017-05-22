
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

export const editSongRequest = (formData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/songs/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);

export const deleteSongRequest = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  })
);
