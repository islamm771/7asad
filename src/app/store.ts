import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import loginSlice from './features/LoginSlice'
import marketSlice from './features/marketSlice'
import { productsSlice } from './features/ProductsSlice'
import { reviewsSlice } from './features/ReviewsSlice'
import { favouriteSlice } from './features/FavouriteSlice'
import { cartSlice } from './features/CartSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    login: loginSlice,
    market: marketSlice,
    [productsSlice.reducerPath]: productsSlice.reducer,
    [reviewsSlice.reducerPath]: reviewsSlice.reducer,
    [favouriteSlice.reducerPath]: favouriteSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }).concat([productsSlice.middleware, reviewsSlice.middleware, favouriteSlice.middleware, cartSlice.middleware])
    ),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()