import {configureStore} from '@reduxjs/toolkit';

import userInfoReducer from './userInfo';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default store;
