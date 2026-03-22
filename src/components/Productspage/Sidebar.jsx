import React from "react";
import { NavLink } from "react-router-dom";
import "./Products.css";

function Sidebar({ setFilter }) {
    return (
        <div className="sidebar">
            <div className="filters-section">
                <h3>FILTERS</h3>
                <label>
                    <input type="radio" name="type" onChange={() => setFilter("egg")} /> Egg
                </label>
                <label>
                    <input type="radio" name="type" onChange={() => setFilter("eggless")} /> Eggless
                </label>
                <label>
                    <input type="radio" name="type" onChange={() => setFilter("")} defaultChecked /> All
                </label>
            </div>

            <div className="products-list-section">
                <h3>PRODUCTS</h3>
                <ul>
                    <li><NavLink to="/products/brownies">Brownies</NavLink></li>
                    <li><NavLink to="/products/cookies">Biscuits, Cookies & Crackers</NavLink></li>
                    <li><NavLink to="/products/breads">Breads</NavLink></li>
                    <li><NavLink to="/products/cakes">Cakes</NavLink></li>
                    <li><NavLink to="/products/combos">Combos</NavLink></li>
                    <li><NavLink to="/products/croissants">Croissant, Danishes & Muffins</NavLink></li>
                    <li><NavLink to="/products/desserts">Desserts & Cupcakes</NavLink></li>
                    <li><NavLink to="/products/pastries">Pastries</NavLink></li>
                    <li><NavLink to="/products/sandwiches">Sandwiches & Savouries</NavLink></li>
                    <li><NavLink to="/products/regional">Regional Delights</NavLink></li>
                    <li><NavLink to="/products/beverages">Beverages</NavLink></li>
                    <li><NavLink to="/products/gifting">Gifting</NavLink></li>
                    <li><NavLink to="/products/chocolates">Chocolates</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
