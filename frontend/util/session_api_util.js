// SESSION AUTH METHODS

export const loginRequest = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  })
);

export const logoutRequest = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const signupRequest = user => (
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: {user}
	})
);

// USERS REQUEST

export const usersRequest = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const userRequest = user => (
  $.ajax({
    method: 'GET',
    url: '/api/users/:id',
    data: {user}
  })
);

export const editUserRequest = user => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users/:id/edit',
    data: {user}
  })
);
