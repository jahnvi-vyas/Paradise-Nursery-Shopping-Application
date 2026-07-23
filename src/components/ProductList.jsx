import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import plants from "../data/plants";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
    const dispatch = useDispatch();

    // Get cart items from Redux
    const cartItems = useSelector((state) => state.cart.cartItems);

    // Check if a product is already added
    const isProductAdded = (id) => {
        return cartItems.some((item) => item.id === id);
    };

    // Add product to cart
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    // Group products by category
    const groupedPlants = useMemo(() => {
        return plants.reduce((groups, plant) => {
            if (!groups[plant.category]) {
                groups[plant.category] = [];
            }

            groups[plant.category].push(plant);

            return groups;
        }, {});
    }, []);

    return (
        <>
            <Header />
            <div className="product-page">
                <h1 className="page-title">Our Houseplants</h1>
                <p className="page-description">
                    Browse our beautiful collection of healthy indoor plants. Click
                    <strong> Add to Cart </strong>
                    to add your favorite plants to your shopping cart.
                </p>
                {Object.entries(groupedPlants).map(([category, products]) => (
                    <div key={category} className="category-section">
                        <h2 className="category-title">
                            {category}
                        </h2>
                        <div className="product-grid">
                            {products.map((plant) => (
                                <div
                                    className="product-card"
                                    key={plant.id}
                                >
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p className="price">${plant.price}</p>
                                    <p className="description">
                                        {plant.description}
                                    </p>
                                    <button
                                        className="add-btn"
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={isProductAdded(plant.id)}
                                    >
                                        {isProductAdded(plant.id)
                                            ? "Added ✓"
                                            : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default ProductList;