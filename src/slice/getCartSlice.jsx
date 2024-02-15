import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

const GetCartSlice = createSlice({
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

export default GetCartSlice;
