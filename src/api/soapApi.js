import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const soapApi = createApi({
  reducerPath: "soapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/api/products" }),
    getProduct: builder.query({ query: (id) => "/api/products/:id" }),
    addUser: builder.query({ query: () => "/auth/users" }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useAddUserQuery } =
  soapApi;
