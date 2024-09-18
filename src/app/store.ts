import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './features/ProductsSlice'
import marketSlice from './features/marketSlice'
import { reviewsSlice } from './features/ReviewsSlice'
import { favouriteSlice } from './features/favouriteSlice'

export const store = configureStore({
    reducer: {
        market: marketSlice,
        [productsSlice.reducerPath]: productsSlice.reducer,
        [reviewsSlice.reducerPath]: reviewsSlice.reducer,
        [favouriteSlice.reducerPath]: favouriteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([productsSlice.middleware, reviewsSlice.middleware, favouriteSlice.middleware])
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch