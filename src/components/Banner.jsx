import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Banner() {

    const navigate = useNavigate();   // ⭐ important

    const slides = [
        {
            image: "/sthali.png",
            title: "Traditional Indian Sweets",
            subtitle: "Taste the sweetness of authentic mithai"
        },
        {
            image: "/snacksthali.png",
            title: "Snacks & Namkeens",
            subtitle: "Crispy and spicy snacks for every mood"
        },
        {
            image: "/milkp.png",
            title: "Fresh Dairy Products",
            subtitle: "Pure milk, paneer and dairy delights"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="banner">

            <img
                src={slides[current].image}
                className="banner-img"
                alt="banner"
            />

            <div className="banner-text">

                <h1>{slides[current].title}</h1>

                <p>{slides[current].subtitle}</p>

                <button
                    className="banner-btn"
                    onClick={() => navigate("/order")}
                >
                    Order Now
                </button>

            </div>

        </div>

    )
}

export default Banner;