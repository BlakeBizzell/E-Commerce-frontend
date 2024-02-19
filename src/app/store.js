import { configureStore } from "@reduxjs/toolkit";
import { soapApi } from "../api/soapApi";
import productsSlice from "../slice/getProductsSlice";
import productSlice from "../slice/getProductSlice";
import getUserSlice from "../slice/getUserSlice";
import getCartSlice from "../slice/getCartSlice";

export const store = configureStore({
  reducer: {
    [soapApi.reducerPath]: soapApi.reducer,
    products: productsSlice,
    product: productSlice,
    user: getUserSlice,
    cart: getCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(soapApi.middleware),
});

export default store;
