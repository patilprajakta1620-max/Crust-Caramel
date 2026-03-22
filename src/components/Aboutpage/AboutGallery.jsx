import { useState, useEffect } from "react";
import "./about.css";

function AboutGallery() {

    const images = [
        "/nankatai.png",
        "/cupcake2.jpg",
        "/all sw.png",
        "/snacks1.jpg"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) => (prev + 1) % images.length);

        }, 3000);

        return () => clearInterval(interval);

    }, [images.length]);

    return (

        <section className="about-gallery">

            <div className="gallery-container">

                <img
                    src={images[current]}
                    alt="all sweets1.jpg"
                />

            </div>

        </section>

    )

}

export default AboutGallery;