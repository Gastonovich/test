export function errorWhileFetchingPosts(bool) {
  return {
    type: "ERROR_WHILE_FETCHING_POSTS",
    postsHasErrored: bool
  };
}

export function postsIsLoading(bool) {
  return {
    type: "POSTS_ARE_LOADING",
    postsIsLoading: bool
  };
}

export function postsFetchingSuccessful(posts) {
  return {
    type: "POSTS_FETCHING_SUCCESSFUL",
    posts
  };
}

export function postsFetching() {
  let url = "https://simple-blog-api.crew.red/posts";
  return dispatch => {
    dispatch(postsIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(postsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(posts => dispatch(postsFetchingSuccessful(posts)))
      .catch(() => dispatch(errorWhileFetchingPosts(true)));
  };
}

export function errorWhileFetchingPost(bool) {
  return {
    type: "ERROR_WHILE_FETCHING_POST",
    postHasErrored: bool
  };
}

export function postIsLoading(bool) {
  return {
    type: "POST_ARE_LOADING",
    postIsLoading: bool
  };
}

export function postFetchingSuccessful(post) {
  return {
    type: "POST_FETCHING_SUCCESSFUL",
    post
  };
}

export function postFetching(id) {
  let url = `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`;
  return dispatch => {
    dispatch(postIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(postIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(post => dispatch(postFetchingSuccessful(post)))
      .catch(() => dispatch(errorWhileFetchingPost(true)));
  };
}
