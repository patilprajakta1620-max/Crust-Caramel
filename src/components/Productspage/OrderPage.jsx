import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Products.css";

function OrderPage() {

    return (

        <>
            <Navbar />

            <section className="order-page">

                <div className="order-container">

                    <div className="order-image">
                        <img src="/shoppic.png" alt="shop" />
                    </div>

                    <div className="order-box">

                        <h3>Select an option to get started</h3>

                        <button className="order-location-btn">
                            Use my current location
                        </button>

                        <button className="order-location-btn outline">
                            Enter delivery location
                        </button>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    )

}

export default OrderPage;