import { GET_SONGS, NEXT_SONG, SET_GENRE } from './actionTypes';
import { apiGetSongs, apiGetSongsLoggedOut } from '../../lib/apiCalls';

export const getSongs = genre => {
  const res = apiGetSongs(genre);
  return {
    type: GET_SONGS,
    payload: res,
  };
};

export const getSongsLoggedOut = genre => {
  const res = apiGetSongsLoggedOut(genre);
  return {
    type: GET_SONGS,
    payload: res,
  };
};

export const nextSong = () => {
  return {
    type: NEXT_SONG,
  };
};

export const setGenre = genre => {
  return {
    type: SET_GENRE,
    payload: genre,
  };
};
