import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
    reducerPath: 'products',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://sevenasad.onrender.com/product" }),
    endpoints: (builder) => ({
        getProducts: builder.query<any, { category: string }>({
            query: (arg) => {
                if (arg?.category) {
                    return `/forCategory/${arg.category}`;
                }
                return '/all';
            },
            providesTags: ["Products"]
        }),
        getProduct: builder.query<any, { id: string | undefined }>({
            query: (arg) => {
                return `/one/${arg.id}`;
            },
        }),
        addProduct: builder.mutation<any, { product: unknown }>({
            query: (arg) => ({
                url: `/addOne`,
                method: 'POST',
                body: arg.product,
                credentials: "include"
            }),
            invalidatesTags: ['Products'],
        }),
        editProduct: builder.mutation<any, { id: string | undefined, product: unknown }>({
            query: (arg) => ({
                url: `/update/${arg.id}`,
                method: 'PATCH',
                body: arg.product,
                credentials: "include"
            }),
            invalidatesTags: ['Products'],
        }),
        deleteProduct: builder.mutation<any, { id: string | undefined }>({
            query: (arg) => ({
                url: `/delete/${arg.id}`,
                method: 'DELETE',
                credentials: "include"
            }),
            invalidatesTags: ['Products'],
        }),
    })
})



export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation } = productsSlice