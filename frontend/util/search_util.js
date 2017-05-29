
const queryRequest = (search) => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: {search}
  })
);

export default queryRequest; 
