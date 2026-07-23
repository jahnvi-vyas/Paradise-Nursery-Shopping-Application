import React from "react";
import Header from "./Header";

const AboutUs = () => {
    return (
        <>
            <Header />

            <div className="about-page">
                <div className="about-card">
                    <h1>About Paradise Nursery</h1>

                    <p>
                        Welcome to <strong>Paradise Nursery</strong>, your trusted destination
                        for beautiful, healthy, and affordable houseplants. We believe that
                        every home deserves the freshness and beauty of nature.
                    </p>

                    <p>
                        Our collection includes a wide range of indoor plants, succulents,
                        and tropical plants carefully selected to brighten your home,
                        improve air quality, and create a relaxing atmosphere.
                    </p>

                    <p>
                        Whether you're a beginner or an experienced plant enthusiast,
                        Paradise Nursery is here to help you find the perfect plants for
                        your living or workspace with exceptional quality and customer
                        service.
                    </p>

                    <div className="about-features">
                        <div className="feature-card">
                            <h3>🌿 Quality Plants</h3>
                            <p>Healthy plants sourced from trusted nurseries.</p>
                        </div>

                        <div className="feature-card">
                            <h3>🚚 Fast Delivery</h3>
                            <p>Fresh plants delivered safely to your doorstep.</p>
                        </div>

                        <div className="feature-card">
                            <h3>💚 Customer Care</h3>
                            <p>Helping every customer create a beautiful green home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;