import axios from 'axios';
import { URI } from '../config';

const getToken = () => {
  let config = {
    headers: {
      authorization: localStorage.getItem('token'),
    }
  };

  // if(!config.headers.authorization) {
  //   throw new Error('No token');
  // }
  return config;
};

// Signup
export const apiSignup = async body => {
  try {
    const { data } = await axios.post(`${URI}/auth/signup`, body);
    return data;
  } catch(e) {
    return false;
  }
};

// Login
export const apiLogin = async body => {
  try {
    const { data } = await axios.post(`${URI}/auth/login`, body);
    return data;
  } catch(e) {
    return false;
  }
};

// Is logged in
export const apiIsLoggedIn = async () => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${URI}/auth/isloggedin`, config);
    return data;
  } catch(e) {
    console.log('A check login error has occured', e);
    throw 'an error occured';
  }
};

// Get songs logged in
export const apiGetSongs = async genre => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${URI}/songs/get/${genre}`, config);
    return data;
  } catch(e) {
    return false;
  }
};

// Get songs logged out
export const apiGetSongsLoggedOut = async genre => {
  try {
    const { data } = await axios.get(`${URI}/songs/getnoauth/${genre}`);
    console.log(data);
    return data;
  } catch(e) {
    console.log(e);
    return false;
  }
};

// Like song
export const apiAddToPlaylist = async body => {
  try {
    const config = getToken();
    const { data } = await axios.post(`${URI}/playlist/add`, body, config);
    return data;
  } catch(e) {
    return false;
  }
};

// Listened to song
export const apiAddToListened = async body => {
  try {
    const config = getToken();
    const { data } = await axios.post(`${URI}/listened/add`, body, config);
    return data;
  } catch(e) {
    return false;
  }
};

// Get playlist
export const apiGetPlaylist = async params => {
  try {
    const config = getToken();
    const { data } = await axios.get(`${URI}/playlist/get/${params.genre}/${params.date}`, config);
    return data;
  } catch(e) {
    return false;
  }
};
