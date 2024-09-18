import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsSlice = createApi({
    reducerPath: 'reviews',
    tagTypes: ['Reviews'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://sevenasad.onrender.com/reviews", credentials: "include" }),
    endpoints: (builder) => ({
        getProductReviews: builder.query<any, { id: string | undefined }>({
            query: (arg) => {
                return `/${arg.id}`;
            },
            providesTags: ['Reviews'],
        }),
        addReview: builder.mutation<void, { productId: string | undefined, data: { review: string, rating: number } }>({
            query: (arg) => ({
                url: `/${arg.productId}/reviews`,
                method: 'POST',
                body: {
                    review: arg.data.review,
                    rating: arg.data.rating,
                },
            }),
            invalidatesTags: ['Reviews'],
        }),
    })
})



export const { useGetProductReviewsQuery, useAddReviewMutation } = reviewsSlice