import { useState, useEffect } from "react";
import "./about.css";

function ShopGallerySlider(){

const images = [
"/shop.png",
"/shop1.png",
"/shop2.png",
"/shop3.png"
];

const [current,setCurrent] = useState(0);

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent(prev => (prev + 1) % images.length);

},3000);

return () => clearInterval(interval);

},[images.length]);

return(

<section className="shop-gallery">

<img src={images[current]} alt="shop gallery"/>

</section>

)

}

export default ShopGallerySlider;