export function postHasErrored(state = false, action) {
  switch (action.type) {
    case "ERROR_WHILE_FETCHING_POST":
      return action.postHasErrored;

    default:
      return state;
  }
}

export function postIsLoading(state = false, action) {
  switch (action.type) {
    case "POST_ARE_LOADING":
      return action.postIsLoading;

    default:
      return state;
  }
}

export function post(state = [], action) {
  switch (action.type) {
    case "POST_FETCHING_SUCCESSFUL":
      return action.post;

    default:
      return state;
  }
}