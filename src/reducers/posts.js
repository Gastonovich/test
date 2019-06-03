    
export function postsHasErrored(state = false, action) {
  switch (action.type) {
    case "ERROR_WHILE_FETCHING_POSTS":
      return action.postsHasErrored;

    default:
      return state;
  }
}

export function postsIsLoading(state = false, action) {
  switch (action.type) {
    case "POSTS_ARE_LOADING":
      return action.postsIsLoading;

    default:
      return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
    case "POSTS_FETCHING_SUCCESSFUL":
      return action.posts;

    default:
      return state;
  }
}