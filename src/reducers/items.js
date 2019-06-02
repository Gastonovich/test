export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case "ERROR_WHILE_FETCHING":
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case "ARE_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case "ITEMS_FETCHING_SUCCESSFUL":
      return action.items;

    default:
      return state;
  }
}
