import { createSlice } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";

// function storeUser(state, { payload }) {
//   state = { user: { ...payload.user } };
//   window.sessionStorage.setItem(
//     JSON.stringify({
//       user: { ...payload.user },
//     })
//   );
// }
// let userCredentials = {
//   username: "",
//   password: "",
// };
// storeUser({ payload: userCredentials });

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: null,
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      admin: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(soapApi.endpoints.loginUser.matchFulfilled);
    builder.addMatcher(soapApi.endpoints.getUser.matchFulfilled);
  },
});

export default userSlice.reducer;
