import { FETCH_USERS, CREATE_USER, CREATE_USER_ERROR } from '../actions/users'

const initialState = {
  users: {
    results: []
  },
  error: null,
}

export default (state = initialState, action) => {
  const { users } = action;

  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users,
      }
    case CREATE_USER:
      return {
        ...state,
        createdUsers: users,
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}