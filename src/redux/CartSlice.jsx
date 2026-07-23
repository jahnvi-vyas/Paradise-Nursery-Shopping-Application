import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

// Calculate total quantity and total amount
const calculateTotals = (state) => {
    let quantity = 0;
    let amount = 0;

    state.cartItems.forEach((item) => {
        quantity += item.quantity;
        amount += item.quantity * item.price;
    });

    state.totalQuantity = quantity;
    state.totalAmount = Number(amount.toFixed(2));
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        // Add Product
        addItem: (state, action) => {
            const product = action.payload;

            const existingItem = state.cartItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...product,
                    quantity: 1,
                });
            }

            calculateTotals(state);
        },

        // Increase Quantity
        increaseQuantity: (state, action) => {
            const id = action.payload;

            const item = state.cartItems.find(
                (product) => product.id === id
            );

            if (item) {
                item.quantity += 1;
            }

            calculateTotals(state);
        },

        // Decrease Quantity
        decreaseQuantity: (state, action) => {
            const id = action.payload;

            const item = state.cartItems.find(
                (product) => product.id === id
            );

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(
                        (product) => product.id !== id
                    );
                }
            }

            calculateTotals(state);
        },

        // Delete Product
        deleteItem: (state, action) => {
            const id = action.payload;

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== id
            );

            calculateTotals(state);
        },

        // Clear Cart (Optional)
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const {
    addItem,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;