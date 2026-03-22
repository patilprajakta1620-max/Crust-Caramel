import "../App.css";

function BestSellers() {

    const products = [

        {
            img: "/cake1.jpg",
            name: "Birthday Ice Cream Theme Cake"
        },

        {
            img: "/jalebi1.jpg",
            name: "Classic Jalebi"
        },

        {
            img: "/GulabPak1.jpg",
            name: "Gulab Pak Sweet"
        },

        {
            img: "/snacks4.jpg",
            name: "Vada Pav Burger"
        },

        {
            img: "/rasmalai1.jpg",
            name: "Rasmalai Dessert"
        },

        {
            img: "/samosa.jpg",
            name: "Crispy Veg Samosa"
        },

        {
            img: "/kaju katali.jpg",
            name: "Kaju Katli Sweet"
        },

        {
            img: "/gulabjamun.jpg",
            name: "Gulab Jamun Bowl"
        }
    ];

    return (

        <section className="bestseller-section">

            <h2>Our Best-Sellers</h2>

            <div className="best-line"></div>

            <div className="bestseller-grid">

                {products.map((item, index) => (
                    <div className="bestseller-card" key={index}>

                        <img src={item.img} alt={item.name} />

                        <h3>{item.name}</h3>

                    </div>
                ))}

            </div>

        </section>

    )

}

export default BestSellers;