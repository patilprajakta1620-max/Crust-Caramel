import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Policy.css"

function PrivacyPolicy() {

    return (

        <>

            <Navbar />

            <section className="policy-hero">

                <h1>Privacy Policy</h1>

                <p>
                    At Crust & Caramel, we respect your privacy and are committed to protecting
                    your personal information. This policy explains how we collect, use and
                    protect your data when you use our website.
                </p>

            </section>


            <section className="policy-content">

                <h3>Information We Collect</h3>
                <p>
                    We may collect personal information such as your name, email address,
                    phone number, delivery address and order details when you place an
                    order or contact us through our website.
                </p>

                <h3>How We Use Your Information</h3>
                <p>
                    Your information is used to process orders, improve our services,
                    communicate with you about orders and provide a better user experience.
                </p>

                <h3>Data Protection</h3>
                <p>
                    We implement security measures to ensure that your personal data is
                    safe and protected from unauthorized access.
                </p>

                <h3>Third-Party Services</h3>
                <p>
                    We may use trusted third-party services such as payment gateways and
                    delivery partners to complete your orders.
                </p>

                <h3>Your Rights</h3>
                <p>
                    You may request access, correction or deletion of your personal data
                    by contacting us through our website.
                </p>

            </section>

            <Footer />

        </>

    )

}

export default PrivacyPolicy;