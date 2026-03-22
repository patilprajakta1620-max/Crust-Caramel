import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function CategoryFooter() {
    return (
        <div className="category-footer">
            <h2>Like our products?</h2>
            <div className="line"></div>
            <p>Treat yourself to your favourite Crust and Caramel products or surprise your loved ones with an edible gift.</p>
            <Link to="/order">
                <button className="footer-order-btn">ORDER ONLINE</button>
            </Link>
        </div>
    );
}

export default CategoryFooter;
