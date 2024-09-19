import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartSlice = createApi({
    reducerPath: 'cart',
    tagTypes: ['Cart'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://sevenasad.onrender.com/cart", credentials: "include" }),
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => '/getCart',
            providesTags: ['Cart'],
        }),
        addToCart: builder.mutation<void, { productId: string, quantity: number }>({
            query: (arg) => ({
                url: '/add',
                method: 'POST',
                body: {
                    quantity: arg.quantity,
                    product: [arg.productId]
                },
            }),
            invalidatesTags: ['Cart'],
        }),
        removeFromCart: builder.mutation<void, { productId: string }>({
            query: (arg) => ({
                url: `/remove`,
                method: 'DELETE',
                body: {
                    product: arg.productId
                },
            }),
            invalidatesTags: ['Cart'],
        })
    })
})

export const { useGetCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartSlice;
