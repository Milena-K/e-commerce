import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'

interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ICartState {
    numberOfItems: number,
    cart: IProduct[]
}

const initialCartState: ICartState = {
    numberOfItems: 0,
    cart: [],
}

// TODO: pass initial state of store
// use the fake store api

const store = configureStore({
    reducer: {
        // users: usersReducer
        cart: cartReducer
    },
    initialCartState,
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
