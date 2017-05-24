export const deleteCommentRequest = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  })
);

export const createCommentRequest = comment => (
	$.ajax({
		method: 'POST',
		url: '/api/comments',
		data: {comment}
	})
);
