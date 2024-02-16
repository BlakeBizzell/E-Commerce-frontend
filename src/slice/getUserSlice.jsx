// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    admin: "",
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.admin = action.payload.admin;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginUser.fulfilled, (state, action) => {
  //       state.userInfo = action.payload.userData;
  //     })
  //     .addCase(logoutUser.fulfilled, (state) => {
  //       state.token = "";
  //       state.username = "";
  //       state.password = "";
  //       state.firstName = "";
  //       state.lastName = "";
  //       state.email = "";
  //       state.admin = "";
  //       state.userInfo = {};
  //     });
  // },
});

export const { setToken, setUserId, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
