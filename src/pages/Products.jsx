import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductsHero from "../components/Productspage/ProductsHero";
import ProductsGrid from "../components/Productspage/ProductsGrid";
import QueriesSection from "../components/Productspage/QueriesSection";

const products = [
    { name: "Brownies", image: "/brownie2.jpg", slug: "brownies", price: 120 },
    { name: "Breads", image: "/breads.jpg", slug: "breads", price: 90 },
    { name: "Croissant, Danish & Muffins", image: "/cupcake1.jpg", slug: "croissants", price: 110 },
    { name: "Pastries", image: "/pastry.jpg", slug: "pastries", price: 95 },
    { name: "Desserts & Cupcakes", image: "/dessert2.jpg", slug: "desserts", price: 130 },
    { name: "Sandwiches & Savouries", image: "/sandwitch8.jpg", slug: "sandwiches", price: 150 },
    { name: "Street Food", image: "/snacks4.jpg", slug: "regional", price: 100 },
    { name: "Beverages", image: "/juces.jpg", slug: "beverages", price: 70 },
    { name: "Biscuits, Cookies & Crackers", image: "/coockie1.jpg", slug: "cookies", price: 85 },
    { name: "Cakes", image: "/cakes6.jpg", slug: "cakes", price: 250 },
    { name: "Combos", image: "/teatime4.jpg", slug: "combos", price: 300 },
    { name: "Chocolates", image: "/chocolate13.jpg", slug: "chocolates", price: 200 },
    { name: "Gifting", image: "/gifting12.jpg", slug: "gifting", price: 350 }
];

function ProductsPage() {

    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const searchTerm = query.get("search") || "";

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <>

            <Navbar />

            {/* HERO SECTION */}
            <ProductsHero />

            {/* PRODUCTS GRID */}
            <ProductsGrid items={filteredProducts} />

            {/* QUERY SECTION */}
            <QueriesSection />

            <Footer />

        </>

    )

}

export default ProductsPage;