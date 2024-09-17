import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './features/ProductsSlice'
import marketSlice from './features/marketSlice'
import { reviewsSlice } from './features/ReviewsSlice'

export const store = configureStore({
    reducer: {
        market: marketSlice,
        [productsSlice.reducerPath]: productsSlice.reducer,
        [reviewsSlice.reducerPath]: reviewsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([productsSlice.middleware, reviewsSlice.middleware])
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch