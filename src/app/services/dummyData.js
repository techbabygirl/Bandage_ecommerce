import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        // GET ALL PRODUCTS
        getLimitedProducts: builder.query({
            query: (num) => `/products?limit=${num}`
        }),

        // GET LIMITED PRODUCTS
        getAllProducts: builder.query({
            query: (num) => `/products`
        }),

        // Get single product
        getSingleProduct: builder.query({
            query: (id) => `/product/${id}`
        }),

    })
})


export const { useGetLimitedProductsQuery, useGetAllProductsQuery, useGetSingleProductQuery } = productsApi