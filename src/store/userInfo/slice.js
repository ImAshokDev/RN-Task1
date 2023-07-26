import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  mySignup: 'False',
};

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    setUserInfo(state, {payload}) {
      state.userInfo = payload;
    },

    setIsAuthenticated(state, {payload}) {
      state.isAuthenticated = payload;
    },

    setMySignup(state, {payload}) {
      state.mySignup = payload;
    },
  },
});
