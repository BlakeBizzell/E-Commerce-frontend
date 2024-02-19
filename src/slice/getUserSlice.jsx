import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

function getUser(user) {
  console.log("User data:", user.id);
}

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      soapApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const userId = payload.user;

        getUser(userId);
      }
    );

    builder.addMatcher(
      soapApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          user: payload,
        };
      }
    );
  },
});

export default userSlice.reducer;
