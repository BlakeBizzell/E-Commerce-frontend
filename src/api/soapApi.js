import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const soapApi = createApi({
  reducerPath: "soapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/api/products" }),
    getProduct: builder.query({ query: (id) => "/api/products/:id" }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddUserMutation,
  useLoginUserMutation,
} = soapApi;
