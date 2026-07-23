import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Header = () => {
    const location = useLocation();

    const totalQuantity = useSelector(
        (state) => state.cart.totalQuantity
    );

    return (
        <header className="header">
            <div className="logo">
                <h2>🌿 Paradise Nursery</h2>
            </div>

            <nav className="navbar">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "active-link" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active-link" : ""}
                >
                    About Us
                </Link>

                <Link
                    to="/plants"
                    className={location.pathname === "/plants" ? "active-link" : ""}
                >
                    Plants
                </Link>

                <Link
                    to="/cart"
                    className={`cart-link ${location.pathname === "/cart" ? "active-link" : ""
                        }`}
                >
                    <FaShoppingCart size={22} />
                    <span className="cart-count">{totalQuantity}</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;