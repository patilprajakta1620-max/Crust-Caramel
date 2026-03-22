import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const items = [
    {
        image: "/Teatime4.jpg",
        title: "Hot Pakoda Treat",
        text: "Crispy, golden-fried pakodas made from fresh ingredients and authentic spices, served hot and perfectly paired with a comforting cup of tea. The perfect snack to enjoy during rainy evenings or relaxing tea-time moments."
    },
    {
        image: "/tea.jpg",
        title: "Samosa Special",
        text: "Deliciously crispy samosas filled with flavourful spiced potatoes and herbs, freshly prepared to give you the perfect balance of crunch and taste. A timeless snack that makes every tea break truly memorable."
    },
    {
        image: "/teatime2.jpg",
        title: "Crunchy Cutlets",
        text: "Golden-brown veg cutlets with a perfectly crispy outer layer and soft, flavourful filling inside. Served hot and packed with delicious spices, these cutlets are the perfect treat to brighten up your evenings."
    },
    {
        image: "/teatime3.jpg",
        title: "Evening Snack Bites",
        text: "A delightful assortment of tasty bites and savoury treats prepared fresh to satisfy your snack cravings. Perfectly paired with tea or coffee, these snacks make every evening gathering more enjoyable."
    }
];

function TeaTime() {

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) => (prev + 1) % items.length);

        }, 10000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="teatime-section">

            <div className="teatime-container">

                {/* TEXT LEFT */}

                <div className="teatime-text">

                    <h3 className="teatime-heading">Tea Time Snacks</h3>

                    <h2>{items[current].title}</h2>

                    <div className="teatime-line"></div>

                    <p>
                        {items[current].text}
                    </p>

                    <button
                        className="teatime-btn"
                        onClick={() => navigate("/products")}
                    >
                        EXPLORE SNACKS
                    </button>

                </div>

                {/* IMAGE RIGHT */}

                <div className="teatime-image">

                    <img
                        src={items[current].image}
                        alt="tea time snacks"
                    />

                </div>

            </div>

        </section>

    )
}

export default TeaTime;
