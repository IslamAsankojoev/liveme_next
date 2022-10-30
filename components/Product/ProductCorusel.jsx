import React, { Component } from "react";
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
  const imagesList = Array(10).fill(images[0]);

  return (
    <div className={style.corusel}>
      <Slider {...settings}>
        <div>
          <img src="http://livemeshop.com/media/product_gallary/images/2022/10/29/mango.webp" alt="" />
        </div>
        <div>
          <img src="http://livemeshop.com/media/product_gallary/images/2022/10/29/mango.webp" alt="" />
        </div>
        <div>
          <img src="http://livemeshop.com/media/product_gallary/images/2022/10/29/mango.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ProductCorusel