import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SpecialSlider from "../components/Specialitiespage/SpecialSlider"
import "../components/Specialitiespage/Specialities.css"

function Specialities() {

    const navigate = useNavigate();

    return (

        <>

            <Navbar />

            {/* SECTION 1 - SPECIALITY CAKES BANNER */}

            <section className="special-banner">

                <h1>SPECIALITIES</h1>

                <p>
                    Experience the rich flavours of traditional Indian sweets and snacks made with authentic recipes and the finest ingredients. Our street food collection bring you the taste of home with every bite.
                </p>

                <img src="/CRUST.png" className="special-banner-img" alt="banner" />

            </section>


            {/* SECTION 2 - CLASSIC CAKES */}

            <section className="classic-cakes">

                <h2>Our Classic Street Food</h2>

                <p>
                    Discover the timeless flavours of India with our collection of street food.
                    Prepared using traditional recipes and quality ingredients, these treats capture the essence of street food from across the country.
                    Perfect for celebrations or everyday indulgence.
                </p>

                <div className="cake-grid">

                    <div className="cake-card">
                        <img src="/vadapav.jpg" alt="vadapav" />
                        <h4>VADAPAV</h4>
                    </div>

                    <div className="cake-card">
                        <img src="/pavbhaji4.jpg" alt="pavbhaji" />
                        <h4>PAV BHAAJI</h4>
                    </div>

                    <div className="cake-card">
                        <img src="/panipuri1.jpg" alt="panipuri" />
                        <h4>PANIPURI</h4>
                    </div>

                    <div className="cake-card">
                        <img src="/samosa4.jpg" alt="samosa" />
                        <h4>SAMOSA</h4>
                    </div>

                </div>

            </section>


            {/* SECTION 3 - AUTO SLIDER */}

            <section className="special-slider-section">

                <h2>Our Special Collections</h2>

                <SpecialSlider />

            </section>


            {/* SECTION 4 - PRE ORDER */}

            <section className="preorder">

                <h2>Pre Order Now!</h2>

                <p>
                    To pre-order call us at +91 8182881881 or write to us at
                    contact@crustandcaramel.com
                </p>

                <div className="preorder-btns">

                    <button onClick={() => navigate("/contact")}>
                        CALL NOW
                    </button>

                    <button onClick={() => navigate("/contact")}>
                        EMAIL US
                    </button>

                </div>

            </section>


            <Footer />

        </>

    )

}

export default Specialities;