import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { product } from '../../public/locales/product/productCollections'
import { text } from '../../public/locales/texts'
import { addItem } from '../../redux/slices/cartSlice'
import { toggleItem } from '../../redux/slices/wishSlice'
import { BannerArea, WishButton } from '../index'

import ProductCorusel from './ProductCorusel'

export default function SingleProduct(props) {
	const { id, title, description, image, images, category, stock } = props

	const inWishtList = useSelector((state) =>
		state.wish?.items?.find((item) => item.id === id)
	)
	// const [activeTab, setActiveTab] = React.useState('home')
	const lang = useSelector((state) => state.lang.lang)
	const { currency, code } = useSelector((state) => state.country)
	const [count, setCount] = React.useState(1)
	const dispatch = useDispatch()
	const price = props[`price_${code}`]

	const addToCart = () => {
		dispatch(addItem({ id, title, image, price, count, stock }))
		setCount(1)
	}
	const toggleWish = () => {
		dispatch(toggleItem({ id, title, image, price }))
	}

	const qtyChange = (e) => {
		setCount(parseInt(e.target.value))
	}

	return (
		<>
			<BannerArea title={title} />
			<div
				className="product_image_area"
				style={{
					marginBottom: '150px',
				}}
			>
				<div className="container">
					<div className="row s_product_inner">
						<div className="col-lg-6">
							<div className="s_Product_carousel">
								<WishButton isWished={inWishtList} onClick={toggleWish} />
								<ProductCorusel
									images={
										images && images.length > 0
											? [{ item: image }, ...images]
											: [{ item: image }]
									}
								/>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="s_product_text">
								<h3>{title}</h3>
								<h2>{props[`price_${code}`] + currency}</h2>
								{/* <ul className="list">
									<li>
										<span className="active">
											<span>{product.category[lang]}</span> : {category}
										</span>
									</li>
									<li>
										<span>
											<span>{product.inStock[lang]}</span>
										</span>
									</li>
								</ul> */}
								<p className="product_description">{description}</p>
								<div className="product_count">
									<label htmlFor="qty">{product.quantity[lang]}:</label>
									<input
										type="number"
										name="qty"
										id="sst"
										value={count}
										onChange={qtyChange}
										title="Quantity:"
										className="input-text qty"
									/>
									<button
										onClick={() => {
											setCount((prev) => prev + 1)
										}}
										className="increase items-count"
										type="button"
									>
										<i className="lnr lnr-chevron-up"></i>
									</button>
									<button
										onClick={() => {
											setCount((prev) => prev - 1)
										}}
										disabled={count === 1}
										className="reduced items-count"
										type="button"
									>
										<i className="lnr lnr-chevron-down"></i>
									</button>
								</div>
								<div className="card_area d-flex align-items-center">
									<Button
										onClick={addToCart}
										variant="contained"
										color="warning"
									>
										{text.buttonAddToCart[lang]}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
