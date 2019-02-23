import { GET_PLAYLIST } from '../actions/actionTypes';

export default function(state = [], { type, payload }) {
  switch(type) {

    case GET_PLAYLIST:
      return payload;

    default:
      return state;
  }
}
