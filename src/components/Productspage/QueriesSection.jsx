import { Link } from "react-router-dom";
import "./Products.css";

function QueriesSection(){

return(

<section className="queries">

<h2>For Queries & Orders</h2>

<div className="line"></div>

<p>Please contact us for queries or order discussions.</p>

<Link to="/contact" className="contact-btn">

CONTACT US

</Link>

</section>

)

}

export default QueriesSection;