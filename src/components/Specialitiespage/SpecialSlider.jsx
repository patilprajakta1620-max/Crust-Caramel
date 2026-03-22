import { useState, useEffect } from "react";

const slides = [
    { image: "/cakes.jpg", title: "Cakes" },
    { image: "/gifting5.jpg", title: "Gifting" },
    { image: "/chocolate4.jpg", title: "Chocolates" },
    { image: "/pastry1.jpg", title: "Pastries" },
    { image: "/all sweets.jpg", title: "Sweets" }
];

function SpecialSlider() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="slider">

            <img src={slides[current].image} alt={slides[current].title} />

            <h3>{slides[current].title}</h3>

        </div>

    );

}

export default SpecialSlider;