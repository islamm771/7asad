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
        }),
        getProduct: builder.query<any, { id: string | undefined }>({
            query: (arg) => {
                return `/one/${arg.id}`;
            },
        }),
    })
})



export const { useGetProductsQuery, useGetProductQuery } = productsSlice