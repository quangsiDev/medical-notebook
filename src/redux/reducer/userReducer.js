import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { getAPI } from "../../services/axiosCofig";
import localStorageServ from "../../services/localstorageServ";

const initialState = {
  access_token: localStorageServ.accessToken.get(),
  userInfor: localStorageServ.userInfor.get(),
};

export const getUserInforAction = createAsyncThunk(
  "userInfor/getUserInforAction",
  () =>
    getAPI(`user/${localStorageServ.userInfor.get()?._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
);

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfor = action.payload;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
  },
  extraReducers: {
    [getUserInforAction.fulfilled]: (state, action) => {
      state.userInfor = action.payload;
    },
  },
});
export const { setUserInfor, setAccessToken } = userSlice.actions;
export default userSlice.reducer;
