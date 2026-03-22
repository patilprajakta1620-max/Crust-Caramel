import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../App.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* LOGO */}

                <div className="footer-logo">
                    <img src="/logo.png" alt="logo" />
                </div>


                {/* NAVIGATION */}

                <div className="footer-col">

                    <Link to="/">Home</Link>

                    <Link to="/about">About Us</Link>

                    <Link to="/products">Products</Link>

                    <Link to="/specialities">Specialities</Link>

                    <Link to="/contact">Contact Us</Link>

                </div>


                {/* POLICIES */}

                <div className="footer-col">

                    <Link to="/privacy-policy">Privacy Policy</Link>

                    <Link to="/cookie-policy">Cookie Policy</Link>

                    <Link to="/refund-policy">Refund Policy</Link>

                    <Link to="/faq">FAQ</Link>

                </div>


                {/* CONTACT */}

                <div className="footer-contact">

                    <p>📞 +91 98765 43210</p>

                    <p>✉ crustandcaramel@gmail.com</p>

                    <div className="social-icons">
                        <a className="icons" href="https://www.youtube.com/"><FaYoutube /></a>
                        <a className="icons" href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className="icons" href="https://www.facebook.com/"><FaFacebook /></a>


                    </div>

                </div>

            </div>

        </footer >

    )

}

export default Footer;