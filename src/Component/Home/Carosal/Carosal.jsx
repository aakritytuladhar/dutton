import React from "react";
import Slider from "react-slick";
import slide4 from "../../Assets/c.jpg";
import slide2 from "../../Assets/c2.jpg";
import slide3 from "../../Assets/c3.jpg";
import slide1 from "../../Assets/c5.png";
import "./Carosal.css";
function Carosal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="slideImg" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="slideImg" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="slideImg" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" className="slideImg" />
        </div>
      </Slider>
    </div>
  );
}
export default Carosal;
