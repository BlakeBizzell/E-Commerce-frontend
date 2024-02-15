import { configureStore } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";
import productsSlice from "../slice/getProductsSlice";
import productSlice from "../slice/getProductSlice";
import userSlice from "../slice/getUserSlice";
import GetCartSlice from "../slice/getCartSlice";

export const store = configureStore({
  reducer: {
    [soapApi.reducerPath]: soapApi.reducer,
    products: productsSlice,
    product: productSlice,
    user: userSlice,
    cart: GetCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(soapApi.middleware),
});

export default store;
