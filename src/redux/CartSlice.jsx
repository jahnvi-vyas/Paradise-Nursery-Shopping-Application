import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const calculateTotals = (state) => {
    state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        // Add Item
        addItem: (state, action) => {
            const item = action.payload;

            const existingItem = state.cartItems.find(
                (product) => product.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1,
                });
            }

            calculateTotals(state);
        },

        // Remove Item Completely
        removeItem: (state, action) => {
            const id = action.payload;

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== id
            );

            calculateTotals(state);
        },

        // Increase / Decrease Quantity
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;

            const item = state.cartItems.find(
                (product) => product.id === id
            );

            if (!item) return;

            item.quantity += amount;

            // Remove if quantity becomes 0
            if (item.quantity <= 0) {
                state.cartItems = state.cartItems.filter(
                    (product) => product.id !== id
                );
            }

            calculateTotals(state);
        },
    },
});

export const {
    addItem,
    removeItem,
    updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;