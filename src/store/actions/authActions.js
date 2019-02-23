import { SIGNUP, LOGIN, IS_LOGGED_IN } from './actionTypes';
import { apiSignup, apiLogin, apiIsLoggedIn } from '../../lib/apiCalls';

export const signup = body => {
  const res = apiSignup(body);
  return {
    type: SIGNUP,
    payload: res,
  };
};

export const login = body => {
  const res = apiLogin(body);
  return {
    type: LOGIN,
    payload: res,
  };
};

export const isLoggedIn = () => {
  const res = apiIsLoggedIn();
  return {
    type: IS_LOGGED_IN,
    payload: res,
  };
};

export const isLoggedInOnLogin = () => {
  return {
    type: IS_LOGGED_IN,
    payload: { status: true },
  };
};
