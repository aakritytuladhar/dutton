import React from "react";
import Slider from "react-slick";
import slide1 from "../../Assets/carosal4.jpg";
import slide2 from "../../Assets/carosal4.jpg";
import slide3 from "../../Assets/carosal4.jpg";
import slide4 from "../../Assets/carosal4.jpg";
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
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}
export default Carosal;
