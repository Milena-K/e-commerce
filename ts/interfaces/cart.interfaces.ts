import { IProduct } from "./product.interfaces";

export interface ICartState {
    numberOfItems: number;
    cart: IProduct[];
}
