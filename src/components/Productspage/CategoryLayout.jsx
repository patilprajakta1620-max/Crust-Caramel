import React, { useState } from "react";
import CategoryHero from "./CategoryHero";
import CategoryFooter from "./CategoryFooter";
import Sidebar from "./Sidebar";
import ProductsGrid from "./ProductsGrid";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Products.css";

function CategoryLayout({ title, description, icon, items }) {

    const [filter, setFilter] = useState("");

    const filteredItems =
        filter === ""
            ? items
            : items.filter(item => item.type === filter);

    return (
        <div className="category-page-wrapper">

            <Navbar />

            {/* HERO SECTION */}
            <CategoryHero
                title={title}
                description={description}
                icon={icon}
            />

            {/* PRODUCTS + SIDEBAR */}
            <div className="category-content">

                <Sidebar setFilter={setFilter} />

                <ProductsGrid items={filteredItems} />

            </div>

            <CategoryFooter />

            <Footer />

        </div>
    );
}

export default CategoryLayout;