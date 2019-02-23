import { SET_PAGE } from '../actions/actionTypes';

export default function(state = 'landing', { type, payload }) {
  switch(type) {

    case SET_PAGE:
      return payload;

    default:
      return state;
  }
}
