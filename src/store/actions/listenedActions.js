import { ADD_TO_LISTENED } from './actionTypes';
import { apiAddToListened } from '../../lib/apiCalls';

export const addToListened = body => {
  const res = apiAddToListened(body);
  return {
    type: ADD_TO_LISTENED,
    payload: res,
  };
};
