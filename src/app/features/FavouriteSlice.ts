import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favouriteSlice = createApi({
    reducerPath: 'favourites',
    tagTypes: ['Favourites'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://sevenasad.onrender.com/favorites", credentials: "include" }),
    endpoints: (builder) => ({
        getFavourites: builder.query({
            query: () => '/getFavorites',
            providesTags: ['Favourites'],
        }),
        addFavourite: builder.mutation<void, { productId: string }>({
            query: (arg) => ({
                url: '/add',
                method: 'POST',
                body: {
                    product: arg.productId
                },
            }),
            invalidatesTags: ['Favourites'],
        }),
        removeFavourite: builder.mutation<void, { favouriteId: string }>({
            query: (arg) => ({
                url: `/delete/${arg.favouriteId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Favourites'],
        })
    })
})

export const { useGetFavouritesQuery, useAddFavouriteMutation, useRemoveFavouriteMutation } = favouriteSlice;
