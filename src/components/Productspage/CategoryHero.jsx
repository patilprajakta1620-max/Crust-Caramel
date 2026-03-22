import React from "react";
import "./Products.css";

function CategoryHero({ title, description, icon }) {
    return (
        <div className="category-hero">
            <h1>{title}</h1>
            <div className="line"></div>
            <p>{description}</p>
            {icon && <img src={icon} alt="icon" className="hero-icon" />}
        </div>
    );
}

export default CategoryHero;
