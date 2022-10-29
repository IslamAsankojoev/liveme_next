import React from "react";
import BannerSection from "../Home/BannerSection.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./index.module.scss";

import Slider from "react-slick";

const SliderMain = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={style.slider}>
      <Slider {...settings}>
        <div>
          <BannerSection />
        </div>
        <div>
          <BannerSection />
        </div>
        <div>
          <BannerSection />
        </div>
      </Slider>
    </div>
  );
}

export default SliderMain;