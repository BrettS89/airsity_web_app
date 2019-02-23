import { ADD_TO_PLAYLIST, GET_PLAYLIST } from './actionTypes';
import { apiAddToPlaylist, apiGetPlaylist } from '../../lib/apiCalls';

export const addToPlaylist = body => {
  const res = apiAddToPlaylist(body);
  return {
    type: ADD_TO_PLAYLIST,
    payload: res,
  };
};

export const getPlaylist = genre => {
  const res = apiGetPlaylist(genre);
  return {
    type: GET_PLAYLIST,
    payload: res,
  };
};
