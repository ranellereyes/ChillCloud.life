import queryRequest from "../util/search_util";

export const SEARCH = "SEARCH";
export const CLEAR = "CLEAR";

export const receiveSearch = (search) => ({
    type: SEARCH,
    search
});

export const receiveBlank = () => ({
  type: CLEAR
});

export const actionSearch = (search) => dispatch => {
  return queryRequest(search).then(
    resp => dispatch(receiveSearch(resp))
  );
};
