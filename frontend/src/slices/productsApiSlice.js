import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getProducts: builder.query({
            query: () => ({
                url:  PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),  
        getProductsDetail: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST'
            }),
            invalidatesTags:['Product']
        })
    }),
})

export const {useGetProductsQuery, useGetProductsDetailQuery, useCreateProductMutation} = productsApiSlice

