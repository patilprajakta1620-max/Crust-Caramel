import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../components/Contactpage/contact.css"

function Contact() {

    return (

        <>

            <Navbar />

            {/* CONTACT HEADING */}

            {/* CONTACT HEADING */}

            <section className="contact-hero">

                <h1>Contact Us</h1>

                <p>
                    We would love to hear from you. Share your thoughts and queries with us!
                </p>

                <img src="/letter.png" alt="letter" className="contact-letter" />

            </section>


            {/* CONTACT FORM SECTION */}

            <section className="contact-section">

                <div className="contact-container">


                    {/* FORM */}

                    <div className="contact-form">

                        <form>

                            <label>First Name:- <span>*</span></label>
                            <input type="text" required />

                            <label>Last Name:- <span>*</span></label>
                            <input type="text" required />

                            <label>Mobile:- <span>*</span></label>
                            <input type="tel" required />

                            <label>Email:- <span>*</span></label>
                            <input type="email" required />

                            <label>Requirement Date & Time:-</label>
                            <input type="datetime-local" />

                            <label>City:- <span>*</span></label>
                            <input type="text" required />

                            <label>Zip Code:- <span>*</span></label>
                            <input type="text" required />

                            <div className="contact-btns">

                                <button type="submit">SUBMIT</button>
                                <button type="reset">RESET</button>

                            </div>

                        </form>

                    </div>


                    {/* CONTACT DETAILS */}

                    <div className="contact-info">

                        <img src="/letter1.png" alt="contact" />

                        <h3>Crust and Caramel</h3>

                        <p><strong>Registered Address:</strong></p>

                        <p>
                            55/56, Deonar Village Road, Opp.<br />
                            Metal Box Company, <br />
                            Mumbai-400088,<br />
                            Maharashtra, India
                        </p>

                        <p><strong>Grievance & Nodal Officer:</strong></p>

                        <p>
                            Ms. Simantini Budukh,<br />
                            General Counsel & Company Secretary
                        </p>

                        <p><strong>Contact Details:</strong></p>

                        <p>📞 +91 9865321478</p>

                        <p>✉ contact@crustandcaramel.com</p>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    )

}

export default Contact;