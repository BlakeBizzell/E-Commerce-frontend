import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

const getCartSlice = createSlice({
  name: "cart",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      soapApi.endpoints.getCartItems.matchFulfilled,
      (state, { payload }) => {
        return payload.results;
      }
    );
  },
});

export default getCartSlice;
