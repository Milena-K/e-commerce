import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "@/ts/interfaces/product.interfaces";
import { ICartState } from "@/ts/interfaces/cart.interfaces";

const initialCartState: ICartState = {
    numberOfItems: 0,
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        itemAdded: (state, action: PayloadAction<IProduct>) => {
            state.numberOfItems += 1
            state.cart.push(action.payload)
        },
        itemRemoved: (state, action) => {
            const itemRemove: IProduct = action.payload
            const index = state.cart.map(item => item.id).indexOf(itemRemove.id)
            if (index > -1) {
                state.numberOfItems -= 1
                state.cart.splice(index, 1)
            }
        },
        emptyCart: state => {
            state.numberOfItems = 0
            state.cart = []
        }
    }
})

export const { itemAdded, itemRemoved, emptyCart } = cartSlice.actions
export default cartSlice.reducer
