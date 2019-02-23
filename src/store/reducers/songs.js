import { GET_SONGS, NEXT_SONG } from '../actions/actionTypes';

export default function(state = [], { type, payload }) {
  switch(type) {

    case GET_SONGS:
      return payload;

    case NEXT_SONG:
      const newState = state;
      newState.shift();
      return newState;

    default:
      return state;
  }
}
