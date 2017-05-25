export const randomUsersRequest = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const singleUserRequest = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const editUserRequest = (formData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);
