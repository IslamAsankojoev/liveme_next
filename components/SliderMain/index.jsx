import React from "react";
import SliderItem from "./SliderItem";

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
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
      </Slider>
    </div>
  );
}

export default SliderMain;