import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<AboutUs />} />

        {/* Product Listing Page */}
        <Route path="/plants" element={<ProductList />} />

        {/* Shopping Cart Page */}
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;