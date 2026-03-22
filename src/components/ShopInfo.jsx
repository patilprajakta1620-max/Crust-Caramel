import "../App.css";
import { useNavigate } from "react-router-dom";

function ShopInfo() {

  const navigate = useNavigate();

  return (
    <section className="shop-info">

      <div className="shop-image">
        <img src="/shopinfo.png" alt="shop" />
      </div>

      <div className="shop-cards">

        <div className="shop-card">
          <img src="/icon6.png" alt="sweets" />
          <h3>Sweets</h3>
          <p>Authentic handcrafted mithai prepared fresh every day.</p>
        </div>

        <div className="shop-card">
          <img src="/icon3.png" alt="snacks" />
          <h3>Snacks</h3>
          <p>Crispy snacks perfect for tea time cravings.</p>
        </div>

        <div className="shop-card">
          <img src="/icon9.png" alt="milk" />
          <h3>Milk Products</h3>
          <p>Pure dairy delights made from fresh milk.</p>
        </div>

        <div className="shop-card">
          <img src="/icon.png" alt="namkeen" />
          <h3>Namkeens</h3>
          <p>Crunchy namkeens with rich Indian flavours.</p>
        </div>

      </div>

      <div className="shop-btn">
        <button
          className="know-btn"
          onClick={() => navigate("/products")}
        >
          Know More
        </button>
      </div>

    </section>
  );
}

export default ShopInfo;