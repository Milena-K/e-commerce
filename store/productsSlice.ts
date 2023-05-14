import { IProduct } from "@/ts/interfaces/product.interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProduct[] = []

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProduct: (state, action: PayloadAction<IProduct>) => {

        }
    }
})
