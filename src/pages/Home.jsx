import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ShopInfo from "../components/ShopInfo";
import Products from "../components/Products";
import Gifting from "../components/Gifting";
import TeaTime from "../components/TeaTime";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
import LikeProducts from "../components/LikeProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Navbar />
      <Banner />
      <ShopInfo />
      <Products />
      <Gifting />
      <TeaTime />
      <BestSellers />
      <Testimonials />
      <LikeProducts />
      <Footer />
    </div>
  );
}

export default Home;