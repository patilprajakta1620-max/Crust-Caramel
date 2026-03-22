import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import About from "./pages/About";
import Specialities from "./pages/Specialities";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import CookiePolicy from "./pages/CookiePolicy";
import MilkProducts from "./components/Productspage/MilkProducts";
import TraditionalSweets from "./components/Productspage/TraditionalSweets";
import OrderPage from "./components/Productspage/OrderPage";




import Brownies from "./components/Productspage/Brownies";
import Breads from "./components/Productspage/Breads";
import Cakes from "./components/Productspage/Cakes";
import Cookies from "./components/Productspage/Cookies";
import Croissants from "./components/Productspage/Croissants";
import DessertsCupcakes from "./components/Productspage/DessertsCupcakes";
import Pastries from "./components/Productspage/Pastries";
import Sandwiches from "./components/Productspage/Sandwiches";
import Regional from "./components/Productspage/Regional";
import Beverages from "./components/Productspage/Beverages";
import Combos from "./components/Productspage/Combos";
import Chocolates from "./components/Productspage/Chocolates";
import Gifting from "./components/Productspage/Gifting";


function App() {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/products" element={<ProductsPage />} />

            <Route path="/specialities" element={<Specialities />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/refund-policy" element={<RefundPolicy />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/cookie-policy" element={<CookiePolicy />} />

            <Route path="/products/milk-products" element={<MilkProducts />} />

            <Route path="/products/traditional-sweets" element={<TraditionalSweets />} />

            <Route path="/order" element={<OrderPage />} />






            <Route path="/products/brownies" element={<Brownies />} />
            <Route path="/products/breads" element={<Breads />} />
            <Route path="/products/cakes" element={<Cakes />} />
            <Route path="/products/cookies" element={<Cookies />} />
            <Route path="/products/croissants" element={<Croissants />} />
            <Route path="/products/desserts" element={<DessertsCupcakes />} />
            <Route path="/products/pastries" element={<Pastries />} />
            <Route path="/products/sandwiches" element={<Sandwiches />} />
            <Route path="/products/regional" element={<Regional />} />
            <Route path="/products/beverages" element={<Beverages />} />
            <Route path="/products/combos" element={<Combos />} />
            <Route path="/products/chocolates" element={<Chocolates />} />
            <Route path="/products/gifting" element={<Gifting />} />

        </Routes>

    );

}

export default App;









