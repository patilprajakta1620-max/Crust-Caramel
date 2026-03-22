import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./Policy.css"

function CookiePolicy() {

    return (

        <>

            <Navbar />

            <section className="policy-hero">

                <h1>Cookie Policy</h1>

                <p>
                    This website uses cookies to improve your browsing experience
                    and provide personalized services.
                </p>

            </section>


            <section className="policy-content">

                <h3>What Are Cookies?</h3>
                <p>
                    Cookies are small text files stored on your device that help
                    websites remember user preferences and improve functionality.
                </p>

                <h3>How We Use Cookies</h3>
                <p>
                    We use cookies to analyze website traffic, remember user
                    preferences and improve our services.
                </p>

                <h3>Managing Cookies</h3>
                <p>
                    You can control or disable cookies through your browser
                    settings if you prefer not to allow them.
                </p>

                <h3>Updates to This Policy</h3>
                <p>
                    We may update this cookie policy from time to time to reflect
                    changes in technology or legal requirements.
                </p>

            </section>

            <Footer />

        </>

    )

}

export default CookiePolicy;