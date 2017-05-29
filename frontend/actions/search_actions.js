import queryRequest from "../util/search_util";

export const SEARCH = "SEARCH";

export const receiveSearch = (search) => ({
    type: SEARCH,
    search
});

export const actionSearch = (search) => dispatch => {
  return queryRequest(search).then(
    resp => dispatch(receiveSearch(resp))
  );
};
