import { ADD_TO_PLAYLIST } from '../actions/actionTypes';

export default function(state = {}, { type, payload }) {
  switch(type) {

    case ADD_TO_PLAYLIST:
      return payload;

    default:
      return state;
  }
}
