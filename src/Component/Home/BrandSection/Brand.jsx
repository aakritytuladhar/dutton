import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bmw from "../../Assets/brands/bmw.png";
import mercedes from "../../Assets/brands/mercedes.png";
import ford from "../../Assets/brands/ford.png";
import peugeot from "../../Assets/brands/peugeot.png";
import volks from "../../Assets/brands/volks.png";
import audiCar from "../../Assets/brands/audi.png";

const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    centerMode: true, // Center the current card
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carBrands = [
    { id: 1, images: audiCar, title: "Audi" },
    { id: 2, images: bmw, title: "BMW" },
    { id: 3, images: ford, title: "Ford" },
    { id: 4, images: mercedes, title: "Mercedes Benz" },
    { id: 5, images: peugeot, title: "Peugeot" },
    { id: 6, images: volks, title: "Volkswagen" },
  ];

  return (
    <div>
      <Slider {...settings}>
        {carBrands.map((brand, index) => (
          <div key={index}>
            <div className="brandContainer">
              <img src={brand.images} alt={brand.title} className="brandImg" />
              <h3
                style={{ fontSize: "16px", margin: "0", textAlign: "center" }}>
                {brand.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
