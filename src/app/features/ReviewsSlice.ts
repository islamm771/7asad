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
        }),
    })
})



export const { useGetProductReviewsQuery } = reviewsSlice