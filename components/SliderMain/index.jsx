import React from "react";
import SliderItem from "./SliderItem";
import style from "./index.module.scss";
import Slider from "react-slick";

import banner1 from "../../public/banners/баннер1.webp";
import banner2 from "../../public/banners/banner2.png";
import banner3 from "../../public/banners/banner3.png";

const SliderMain = () => {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className={style.slider}>
      <Slider {...settings}>
        <div>
          <SliderItem image={banner2} grid={{ left: '4', center: '5', right: '3' }} />
        </div>
        <div>
          <SliderItem image={banner1} grid={{ left: '1', center: '5', right: '6' }} />
        </div>
        <div>
          <SliderItem image={banner3} grid={{ left: '4', center: '5', right: '3' }} />
        </div>
      </Slider>
    </div>
  );
}

export default SliderMain;