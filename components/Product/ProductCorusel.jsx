import React from "react";
import Slider from "react-slick";
import style from "./ProductCorusel.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductCorusel = ({ images }) => {
  const settings = {
    dots: true,
    className: style.wrapper,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className={style.corusel}>
      <Slider {...settings}>
        {images.map(({ item }, id) => {
          return (
            <div key={id}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductCorusel