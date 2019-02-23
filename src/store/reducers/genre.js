import { SET_GENRE } from '../actions/actionTypes';

export default function(state = { value: 'hiphop', display: 'hip hop' }, { type, payload }) {
  switch(type) {

    case SET_GENRE:
      return payload;

    default:
      return state; 
  }
}
