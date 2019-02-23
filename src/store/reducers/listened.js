import { ADD_TO_LISTENED } from '../actions/actionTypes';

export default function(state = {}, { type, payload }) {
  switch(type) {
    
    case ADD_TO_LISTENED:
      return payload;

    default:
      return state;
  } 
}
