const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

const initialState = {
  authenticated: true,
  currentUser: {
    email: 'bob@test.com',
    photoURL: '/assets/user.png',
  },
};

const authenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: '/assets/user.png',
        },
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const login = (payload) => {
  return { type: AUTH_LOGIN, payload };
};

export const logout = () => {
  return { type: AUTH_LOGOUT };
};

export default authenticationReducer;
