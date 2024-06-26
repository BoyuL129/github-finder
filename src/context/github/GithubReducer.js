const GithubReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
  }
};

export default GithubReducer;
