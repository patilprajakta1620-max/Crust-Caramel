import "../App.css";
import { useNavigate } from "react-router-dom";

function Gifting() {

    const navigate = useNavigate();

    return (

        <section className="gifting-section">

            <div className="gifting-container">

                {/* IMAGE LEFT */}

                <div className="gifting-image">
                    <img src="/gifting.jpg" alt="gift hamper" />
                </div>

                {/* TEXT RIGHT */}

                <div className="gifting-text">

                    <h2>Packed with love & <br /> all your favourites!</h2>

                    <div className="gifting-line"></div>

                    <p>
                        Now gift your loved ones our special hampers curated with
                        our signature products.
                    </p>

                    <button
                        className="gifting-btn"
                        onClick={() => navigate("/products/gifting")}
                    >
                        KNOW MORE
                    </button>

                </div>

            </div>

        </section>

    )

}

export default Gifting;