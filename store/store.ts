import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import { apiSlice } from '@/api/apiSlice';

const store = configureStore({
    reducer: {
        // users: usersReducer
        cart: cartReducer,
        products: productsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export default store;
export type AppDispatch = typeof store.dispatch
