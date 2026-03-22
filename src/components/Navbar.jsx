import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Navbar() {

  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const term = search.toLowerCase().trim();

    const routes = {
      brownies: "/products/brownies",
      breads: "/products/breads",
      croissants: "/products/croissants",
      TraditionalSweets: "/products/traditional-sweets",
      pastries: "/products/pastries",
      desserts: "/products/desserts",
      cupcakes: "/products/desserts",
      sandwiches: "/products/sandwiches",
      snacks: "/products/regional",
      street: "/products/regional",
      beverages: "/products/beverages",
      juices: "/products/beverages",
      cookies: "/products/cookies",
      biscuits: "/products/cookies",
      cakes: "/products/cakes",
      combos: "/products/combos",
      chocolates: "/products/chocolates",
      gifting: "/products/gifting",
      milk: "/products/milk-products",

    };

    if (routes[term]) {
      navigate(routes[term]);
    } else {
      navigate("/products");
    }

    setSearch("");
  };

  return (
    <nav className="navbar">

      <Link to="/">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </Link>

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        {/* PRODUCTS MEGA MENU */}

        <li className="products-menu">

          <Link to="/products">Products</Link>

          <div className="mega-menu">

            <div className="menu-column">
              <li><Link to="/products/brownies">Brownies</Link></li>
              <li><Link to="/products/breads">Breads</Link></li>
              <li><Link to="/products/combos">Combos</Link></li>
              <li><Link to="/products/desserts">Desserts & Cupcakes</Link></li>
              <li><Link to="/products/sandwiches">Sandwiches & Savouries</Link></li>
              <li><Link to="/products/beverages">Juices</Link></li>
              <li><Link to="/products/traditional-sweets">Traditional Indian Sweets</Link></li>
            </div>

            <div className="menu-column">
              <li><Link to="/products/cookies">Biscuits, Cookies & Crackers</Link></li>
              <li><Link to="/products/cakes">Cakes</Link></li>
              <li><Link to="/products/croissants">Croissant, Danish & Muffins</Link></li>
              <li><Link to="/products/pastries">Pastries</Link></li>
              <li><Link to="/products/regional">Street Foods</Link></li>
              <li><Link to="/products/gifting">Gifting</Link></li>
              <li><Link to="/products/chocolates">Chocolates</Link></li>
              <li><Link to="/products/milk-products">Milk Products</Link></li>
            </div>

          </div>

        </li>

        <li>
          <Link to="/specialities">Specialities</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>

      <div className="nav-right">

        <form onSubmit={handleSearch} className="search-form">

          <input
            type="text"
            placeholder="Search products..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </form>

        <Link to="/order" className="order-btn">
          Order Now
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;