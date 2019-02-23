import { LOGIN, SIGNUP, IS_LOGGED_IN } from '../actions/actionTypes';

export default function(state = false, { type, payload }) {
  switch(type) {

    case SIGNUP:
      return payload;

    case LOGIN:
      return payload;

    case IS_LOGGED_IN:
      return payload.status;

    default:
      return state;
  }
};
