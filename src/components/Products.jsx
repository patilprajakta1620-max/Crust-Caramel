import "../App.css";
import { useNavigate } from "react-router-dom";

function Products() {

    const navigate = useNavigate();

    const products = [
        { img: "/cakee.jpg", title: "CAKES" },
        { img: "/snacks.jpg", title: "SNACKS & BAKED GOODS" },
        { img: "/dessert8.jpg", title: "DESSERTS & CUPCAKES" },
        { img: "/pastry.jpg", title: "PASTRIES" },
        { img: "/kaju katali.jpg", title: "TRADITIONAL INDIAN SWEETS" },
        { img: "/juces7.jpg", title: "JUICES" }
    ];

    return (

        <section className="products-section">

            <h2 className="products-title">Our Products</h2>

            <div className="products-grid">

                {products.map((item, index) => (
                    <div
                        className="product-card"
                        key={index}
                        onClick={() => navigate("/products")}
                        style={{ cursor: "pointer" }}
                    >

                        <img src={item.img} alt={item.title} />

                        <h3>{item.title}</h3>

                    </div>
                ))}

            </div>

            <div className="products-btn">
                <button onClick={() => navigate("/products")}>
                    VIEW MORE
                </button>
            </div>

        </section>

    )

}

export default Products;