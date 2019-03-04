import { ADD_TO_PLAYLIST, GET_PLAYLIST, GET_PLAYLIST_SCROLL, SET_PLAYLIST_GENRE } from './actionTypes';
import { apiAddToPlaylist, apiGetPlaylist } from '../../lib/apiCalls';

export const addToPlaylist = body => {
  const res = apiAddToPlaylist(body);
  return {
    type: ADD_TO_PLAYLIST,
    payload: res,
  };
};

export const getPlaylist = body => {
  const res = apiGetPlaylist(body);
  return {
    type: GET_PLAYLIST,
    payload: res,
  };
};

export const getPlaylistScroll = body => {
  const res = apiGetPlaylist(body);
  return {
    type: GET_PLAYLIST_SCROLL,
    payload: res,
  };
};

export const setPlaylistGenre = body => {
  return {
    type: SET_PLAYLIST_GENRE,
    payload: body,
  };
};
