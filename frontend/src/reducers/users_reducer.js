import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';

export default function usersReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_USERS:
      newState = {};
      action.users.forEach(user => {
        newState[user._id] = user;
      });
      return newState;
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user._id]: action.user });
    default:
      return state;
  }
}