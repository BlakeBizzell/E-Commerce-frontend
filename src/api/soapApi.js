import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const soapApi = createApi({
  reducerPath: "soapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-commerce-api-oddb.onrender.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/api/products" }),
    getProduct: builder.query({ query: (id) => `/api/products/${id}` }),
    getUsers: builder.query({ query: () => "/auth/users" }),
    getUser: builder.query({ query: (id) => `auth/users/${id}` }),
    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/products/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/api/products",
        method: "POST",
        body: productData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/auth/users/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
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
    addToCart: builder.mutation({
      query: ({ userId, productId, quantity }) => ({
        url: `/auth/users/${userId}/cart`,
        method: "POST",
        body: { productId, quantity },
      }),
    }),
    removeFromCart: builder.mutation({
      query: ({ userId, cartItemId }) => ({
        url: `/auth/users/${userId}/cart/${cartItemId}`,
        method: "DELETE",
      }),
    }),
    getCartItems: builder.query({
      query: (userId) => `/auth/users/${userId}/cart`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateUserMutation,
  useAddUserMutation,
  useLoginUserMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartItemsQuery,
} = soapApi;
