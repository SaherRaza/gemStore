import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, DATA } from "../../assets/data/data";



interface CartItem
{
    product: Product;
    quantity: number;
}

interface CartState
{
    items: CartItem[];
    deliveryFee: number;
    freeDeliveryFrom: number;
}
//state variables
const initialState: CartState = {
    items: [],
    deliveryFee: 15,
    freeDeliveryFrom:200
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addCartItem: (state, action:PayloadAction<{product:Product}>) =>
        {
            const newProduct = action.payload.product;
            const cartItem = state.items.find(
                (item) => item.product.id === newProduct.id
            );
            if (cartItem)
            {
                cartItem.quantity += 1;
            } else
            {
                state.items.push({ product: newProduct, quantity: 1 });
            }
        },
        changeQuantity: (state, action: PayloadAction<{ productId: string; amount: number }>
        ) =>
        {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find((item) => item.product.id === productId);
            if (cartItem)
            {
                cartItem.quantity += amount;
            }
            if (cartItem && cartItem.quantity <= 0)
            {
                state.items = state.items.filter((item) => item !== cartItem);
            }
        },
    },
});

// Selectors
export const selectNumberOfItems = (state: { cart: CartState }) =>
  state.cart.items.length;

export const selectSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state: { cart: CartState }) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) =>
    subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);