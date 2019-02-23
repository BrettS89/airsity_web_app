import { combineReducers } from 'redux';
import authReducer from './auth';
import songsReducer from './songs';
import addedToPlaylistReducer from './playlist';
import addToListenedReducer from './listened';
import getPlaylistReducer from './playlistGet';
import genreReducer from './genre';
import navReducer from './nav';

export default combineReducers({
  auth: authReducer,
  songs: songsReducer,
  addedToPlaylist: addedToPlaylistReducer,
  addedToListened: addToListenedReducer,
  playlist: getPlaylistReducer,
  genre: genreReducer,
  nav: navReducer,
});
