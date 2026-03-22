import { Link } from "react-router-dom";
import "./about.css";

function LikeProducts(){

return(

<section className="like-section">

<h2>Cravings? We’ve Got It All</h2>

<div className="like-line"></div>

<p>
From authentic sweets and fresh dairy products to delicious snacks, pastries and desserts, everything you love is waiting at Crust & Caramel. <br />
Explore our wide range of products and satisfy your cravings with just a click.           
</p>

<Link to="/order">
<button className="like-btn">
ORDER ONLINE
</button>
</Link>

<img src="/icon3.png" className="like-cart"/>

</section>

)

}

export default LikeProducts;