import { GET_PLAYLIST, GET_PLAYLIST_SCROLL, SET_PLAYLIST_GENRE } from '../actions/actionTypes';

const INITIAL_STATE = {
  playlist: [],
  genre: 'all'
}

export default function(state = INITIAL_STATE, { type, payload }) {
  switch(type) {

    case GET_PLAYLIST:
      return {
        ...state,
        playlist: payload,
      };

    case GET_PLAYLIST_SCROLL:
      return {
        ...state,
        playlist: [...state.playlist, ...payload],
      };

    case SET_PLAYLIST_GENRE:
      return {
        ...state,
        genre: payload,
      };

    default:
      return state;
  }
}
