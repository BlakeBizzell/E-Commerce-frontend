import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

const productSlice = createSlice({
  name: "product",
  initialState: null,
  extraReducers: (builder) => {
    builder.addMatcher(
      soapApi.endpoints.getProduct.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default productSlice;
