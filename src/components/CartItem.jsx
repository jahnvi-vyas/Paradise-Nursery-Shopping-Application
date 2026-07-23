import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import {
    removeItem,
    updateQuantity,
} from "../redux/CartSlice";

const CartItem = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalQuantity = useSelector(
        (state) => state.cart.totalQuantity
    );

    const totalAmount = useSelector(
        (state) => state.cart.totalAmount
    );

    const handleIncrease = (id) => {
        dispatch(
            updateQuantity({
                id,
                amount: 1,
            })
        );
    };

    const handleDecrease = (id) => {
        dispatch(
            updateQuantity({
                id,
                amount: -1,
            })
        );
    };

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        alert("Checkout Coming Soon!");
    };

    // Empty Cart UI
    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div className="cart-page">
                    <div className="cart-summary">
                        <h2>Your Shopping Cart</h2>
                        <p>Your cart is currently empty.</p>
                        <Link to="/plants">
                            <button className="continue-btn">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="cart-page">
                <div className="cart-summary">
                    <h2>Shopping Cart</h2>
                    <h3>Total Plants: {totalQuantity}</h3>
                    <h3>Total Amount: ${totalAmount}</h3>
                </div>
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="cart-item"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>
                                Unit Price: ${item.price}
                            </p>
                            <p>
                                Quantity: {item.quantity}
                            </p>
                            <p>
                                Total:
                                <strong>
                                    {" "}
                                    ${(item.price * item.quantity).toFixed(2)}
                                </strong>
                            </p>
                            <div className="quantity-controls">
                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrease(item.id)}>+</button>
                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="cart-buttons">
                    <Link to="/plants">
                        <button className="continue-btn">
                            Continue Shopping
                        </button>
                    </Link>
                    <button
                        className="checkout-btn"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>

            </div>
        </>
    );
};

export default CartItem;