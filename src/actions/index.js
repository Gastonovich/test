export function errorWhileFetching(bool) {
  return {
    type: "ERROR_WHILE_FETCHING",
    hasErrored: bool
  };
}

export function isLoading(bool) {
  return {
    type: "ARE_LOADING",
    isLoading: bool
  };
}

export function fetchingSuccessful(items) {
  return {
    type: "ITEMS_FETCHING_SUCCESSFUL",
    items
  };
}

export function postsFetching() {
  let url = "https://simple-blog-api.crew.red/posts";
  return dispatch => {
    dispatch(isLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(fetchingSuccessful(items)))
      .catch(() => dispatch(errorWhileFetching(true)));
  };
}

export function commentsFetching(id) {
  let url = `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`;
  return dispatch => {
    dispatch(isLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(isLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(fetchingSuccessful(items)))
      .catch(() => dispatch(errorWhileFetching(true)));
  };
}
