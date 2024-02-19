import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";
import { useGetUserQuery } from "../api/soapApi";

function getUserFunc(user) {
  console.log(user);
}

const getUserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      soapApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        const userId = payload.user.id;
        return payload.user;
      }
    );

    builder.addMatcher(
      soapApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state,
          userData: payload,
        };
      }
    );
  },
});

export default getUserSlice.reducer;
