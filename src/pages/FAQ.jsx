import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Policy.css"

function FAQ() {

    return (

        <>

            <Navbar />

            <section className="policy-hero">

                <h1>Frequently Asked Questions</h1>

                <p>
                    Find answers to the most common questions about orders, delivery
                    and our bakery products.
                </p>

            </section>


            <section className="policy-content">

                <h3>How can I place an order?</h3>
                <p>
                    You can place an order directly through our website by selecting
                    your favorite cakes, pastries or desserts.
                </p>

                <h3>Do you offer customized cakes?</h3>
                <p>
                    Yes, we offer customized cakes for birthdays, weddings and
                    special occasions. Please contact us for details.
                </p>

                <h3>What is the delivery time?</h3>
                <p>
                    Delivery times depend on your location and order type, but we
                    always try to deliver fresh products as quickly as possible.
                </p>

                <h3>Can I pre-order cakes?</h3>
                <p>
                    Yes, you can pre-order cakes for special events by contacting
                    us in advance.
                </p>

                <h3>Do you offer eggless options?</h3>
                <p>
                    Yes, we have a wide range of eggless cakes, brownies and desserts.
                </p>

            </section>

            <Footer />

        </>

    )

}

export default FAQ;