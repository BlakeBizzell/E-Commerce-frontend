import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      soapApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
