import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { home } from '@/locales/home/homeCollection.js'
import { text } from '@/locales/texts.js'
import { addItem } from '@/slices/cartSlice'

export default function ExclusiveDealSection() {
	const lang = useSelector((state) => state.lang.lang)
	const { currency, code } = useSelector((state) => state.country)
	const dispatch = useDispatch()
	const items = useSelector((state) => state.products.items)

	return (
		<section className="exclusive-deal-area">
			<div className="">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-6 no-padding exclusive-left">
						<div className="row clock_sec clockdiv" id="clockdiv">
							<div className="col-lg-12">
								<h1>{home.exclusiveArea.title[lang]}!</h1>
								<p>{home.exclusiveArea.subtitle[lang]}.</p>
							</div>
						</div>
						<a
							className="primary-btn "
							style={{
								color: 'white',
							}}
						>
							{home.exclusiveArea.shopNow[lang]}
						</a>
					</div>
					<div className="col-lg-6 no-padding exclusive-right">
						<div className="active-exclusive-product-slider">
							{/* <!-- single exclusive carousel --> */}
							<div className="single-exclusive-slider">
								<img
									className="img-fluid"
									src={items[0]?.image}
									width="100%"
									alt=""
								/>
								<div className="product-details">
									<div className="price">
										<h6>{items[0] && items[0][`price_${code}`] + currency}</h6>
									</div>
									<h4>{items[0]?.title}</h4>
									<div
										style={{ cursor: 'pointer' }}
										onClick={() => {
											if (items[0])
												[
													dispatch(
														addItem({
															id: items[0].id,
															title: items[0].title,
															image: items[0].image,
															price: items[0][`price_${code}`],
														})
													),
												]
										}}
										className="add-bag d-flex align-items-center justify-content-center simple-btn"
									>
										<a className="add-btn">
											<span className="ti-bag"></span>
										</a>
										<button className="add-text text-uppercase">
											{text.buttonAddToCart[lang]}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
