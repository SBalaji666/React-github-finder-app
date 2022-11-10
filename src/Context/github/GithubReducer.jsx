function GithubReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payLoad,
        loading: true,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payLoad.user,
        repos: action.payLoad.repos,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loading: true,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default GithubReducer;
