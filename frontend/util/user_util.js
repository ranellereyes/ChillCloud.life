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

export const editUserRequest = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  })
);
