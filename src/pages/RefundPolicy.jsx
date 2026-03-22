import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Policy.css"

function RefundPolicy() {

    return (

        <>

            <Navbar />

            <section className="policy-hero">

                <h1>Refund & Cancellation Policy</h1>

                <p>
                    At Crust & Caramel, we aim to deliver fresh and high-quality bakery
                    products. If you are not satisfied with your order, please review
                    our refund and cancellation policy below.
                </p>

            </section>


            <section className="policy-content">

                <h3>Order Cancellation</h3>
                <p>
                    Orders can be cancelled within a limited time after placing them.
                    Once preparation has started, cancellation may not be possible.
                </p>

                <h3>Refund Eligibility</h3>
                <p>
                    Refunds may be issued if the order was incorrect, damaged during
                    delivery, or failed to arrive within the expected delivery time.
                </p>

                <h3>Non-Refundable Items</h3>
                <p>
                    Customized cakes and special orders cannot be refunded once
                    preparation has started.
                </p>

                <h3>Refund Processing</h3>
                <p>
                    Approved refunds will be processed through the original payment
                    method within a few business days.
                </p>

            </section>

            <Footer />

        </>

    )

}

export default RefundPolicy;