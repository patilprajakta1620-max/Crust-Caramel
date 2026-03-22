import { useState } from "react";
import "../App.css";

function Testimonials(){

const testimonials = [

{
text:"The sweets from Crust & Caramel remind me of traditional homemade flavors. Every bite feels fresh, authentic, and perfectly balanced in sweetness. Truly the best place for Indian sweets!",
name:"Priya Sharma, Pune"
},

{
text:"Their snacks and namkeen are incredibly fresh and crispy. Perfect for tea-time or small gatherings. Once you try them, you’ll definitely come back for more!",
name:"Priya Sharma, kolhapur"
},

{
text:"The cakes are absolutely amazing! Soft, creamy, and beautifully designed. I ordered a birthday cake and everyone at the party loved it.",
name:"Rahul Mehta, Mumbai"
},

{
text:"The dairy products taste so pure and fresh. From shrikhand to other milk-based delights, the quality is outstanding and you can really taste the freshness.   ",
name:"Anjali Kulkarni, Pune"
}

];

const [current,setCurrent] = useState(0);

const nextSlide = ()=>{
setCurrent((current+1)%testimonials.length);
};

const prevSlide = ()=>{
setCurrent((current-1+testimonials.length)%testimonials.length);
};

return(

<section className="testimonials-section">

<h2>Testimonials</h2>

<div className="test-line"></div>

<div className="quotes">“</div>

<div className="testimonial-content">

<button className="arrow left" onClick={prevSlide}>
‹
</button>

<div className="testimonial-text">

<p>{testimonials[current].text}</p>

<h4>{testimonials[current].name}</h4>

</div>

<button className="arrow right" onClick={nextSlide}>
›
</button>

</div>

<div className="test-icons">

<img src="/icon4.png" alt=""/>

<img src="/icon2.png" alt=""/>

</div>

</section>

)

}

export default Testimonials;