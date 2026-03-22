import "./about.css";

function OurPromise() {
    return (

        <section className="promise">

            <h2>Our Promise</h2>
            <div className="about-line"></div>

            <p className="promise-text">
                At Sweet Bakery, every bite reflects our dedication to taste, freshness,
                and heartfelt baking. We promise delightful flavors made with love,
                quality ingredients, and honest care for our customers.
            </p>

            <div className="promise-grid">

                <div className="promise-card">
                    <img src="/icon1.png" alt="Authentic Recipes" />
                    <h3>Authentic Recipes</h3>
                    <p>Traditional home-style recipes made with fresh ingredients.</p>
                </div>

                <div className="promise-card">
                    <img src="/icon2.png" alt="Baked With Love" />
                    <h3>Baked With Love</h3>
                    <p>Every product is crafted with care and passion.</p>
                </div>

                <div className="promise-card">
                    <img src="/ICON10.png" alt="Honestly Priced" />
                    <h3>Honestly Priced</h3>
                    <p>Quality products offered at the right price.</p>
                </div>

                <div className="promise-card">
                    <img src="/icon4.png" alt="Committed To Quality" />
                    <h3>Committed To Quality</h3>
                    <p>From ingredients to service, quality comes first.</p>
                </div>

            </div>

        </section>

    )
}

export default OurPromise;