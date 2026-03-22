import { Link } from "react-router-dom";
import "./Products.css";

function ProductsGrid({ items }) {
    if (!items || items.length === 0) {
        return <div className="products-grid-empty">No products found.</div>;
    }

    return (
        <div className="products-grid">
            {items.map((product, index) => (
                <div className="product-card" key={product.id || index}>
                    <Link to={`/products/${product.slug || ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={product.image} alt={product.name} />
                        {product.type === "egg" && (
                            <span className="type-badge egg">Egg</span>
                        )}
                        {product.type === "eggless" && (
                            <span className="type-badge eggless">Eggless</span>
                        )}
                        <h3>{product.name}</h3>
                        <p>₹ {product.price}</p>
                    </Link>
                    <Link to="/order">
                        <button className="order-btn">ORDER ONLINE</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductsGrid;