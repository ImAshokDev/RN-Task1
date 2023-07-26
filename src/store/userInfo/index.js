import {userInfoSlice} from './slice';

export const {setUserInfo, setIsAuthenticated} = userInfoSlice.actions;

export default userInfoSlice.reducer;
