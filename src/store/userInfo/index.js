import {userInfoSlice} from './slice';

export const {setUserInfo, setIsAuthenticated, setMySignup} =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
