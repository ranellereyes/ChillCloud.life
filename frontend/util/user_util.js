export const randomUsersRequest = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);
