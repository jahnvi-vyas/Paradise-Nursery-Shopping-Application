import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";

const AboutUs = () => {
    return (
        <div
            className="landing-page"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="overlay">
                <div className="about-container">
                    <h1>🌿 Paradise Nursery</h1>

                    <p>
                        Welcome to <strong>Paradise Nursery</strong>, your trusted
                        destination for beautiful and healthy houseplants. Whether you are
                        decorating your home, brightening your office, or searching for the
                        perfect gift, we have a wide variety of indoor plants to suit every
                        space and lifestyle.
                    </p>

                    <p>
                        We carefully select each plant to ensure excellent quality and offer
                        affordable prices, making it easy for everyone to enjoy the beauty
                        and benefits of nature. Start your green journey with Paradise
                        Nursery and bring freshness into your everyday life.
                    </p>

                    <Link to="/plants">
                        <button className="get-started-btn">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;