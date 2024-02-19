import { createSlice } from "@reduxjs/toolkit";
const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.user.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(storeUserId.fulfilled, (state, action) => {
      state.user.id = action.payload;
    });
  },
});

export const { setUserId } = userIdSlice.actions;
export default userIdSlice.reducer;
