import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import { apiSlice } from '@/api/apiSlice';

// TODO: pass initial state of store
// use the fake store api

const store = configureStore({
    reducer: {
        // users: usersReducer
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
