import { LOGIN, LOGOUT } from '../scripts/constants';

export const loginLogout = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('in login');
      return { isLoggedIn: true };

    case LOGOUT:
      return { isLoggedIn: false };

    default:
      return state;
  }
};
