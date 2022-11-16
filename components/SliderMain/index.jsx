import React from 'react'
import Slider from 'react-slick'

import banner1 from '../../public/banners/banner1.webp'
import banner2 from '../../public/banners/banner2.webp'
import banner3 from '../../public/banners/banner3.webp'

import SliderItem from './SliderItem'
import style from './index.module.scss'

const SliderMain = () => {
	const settings = {
		fade: true,
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 300,
		autoplaySpeed: 3000,
		cssEase: 'linear',
	}

	return (
		<div className={style.slider}>
			<Slider {...settings}>
				<div>
					<SliderItem
						image={banner2}
						grid={{ left: '4', center: '5', right: '3' }}
					/>
				</div>
				<div>
					<SliderItem
						image={banner1}
						grid={{ left: '1', center: '5', right: '6' }}
					/>
				</div>
				<div>
					<SliderItem
						image={banner3}
						grid={{ left: '4', center: '5', right: '3' }}
					/>
				</div>
			</Slider>
		</div>
	)
}

export default SliderMain
