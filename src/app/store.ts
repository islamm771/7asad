import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import loginSlice from './features/LoginSlice'
import marketSlice from './features/marketSlice'
import { productsSlice } from './features/ProductsSlice'
import { reviewsSlice } from './features/ReviewsSlice'
import { favouriteSlice } from './features/FavouriteSlice'
import { cartSlice } from './features/CartSlice'


export const store = configureStore({
    reducer: {
        login: loginSlice,
        market: marketSlice,
        [productsSlice.reducerPath]: productsSlice.reducer,
        [reviewsSlice.reducerPath]: reviewsSlice.reducer,
        [favouriteSlice.reducerPath]: favouriteSlice.reducer,
        [cartSlice.reducerPath]: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([productsSlice.middleware, reviewsSlice.middleware, favouriteSlice.middleware, cartSlice.middleware])
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()