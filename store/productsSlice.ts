import { IProduct } from "@/ts/interfaces/product.interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    showCategory: string,
    products: IProduct[]
}

let initialState: IInitialState = {
    showCategory: 'all',
    products: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        showCategory(state, action) {
            const category = action.payload
            state.showCategory = category
        }
    },
})

export default productsSlice.reducer
export const { showCategory } = productsSlice.actions
