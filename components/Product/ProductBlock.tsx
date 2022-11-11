import Button from '@mui/material/Button'
import Link from 'next/link'
import { useRouter } from 'next/router.js'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem } from '../../redux/slices/cartSlice'
import { toggleItem } from '../../redux/slices/wishSlice'
import { RootSate } from '../../redux/store'
import { WishButton } from '../index'

import style from './ProductBlock.module.scss'

interface ProductBlockProps {
	id: number
	title: string
	description: string
	image: string
	price_ru: number
	price_kg: number
	price_en: number
	price_tr: number
	price_pl: number
	sale: number
	is_published: boolean
	category: number
	slug: string
	className: string
}

const ProductBlock: FC<ProductBlockProps> = (props) => {
	const { className, ...product } = props
	const {
		id,
		title,
		image,
		price_ru,
		price_kg,
		price_en,
		price_tr,
		price_pl,
		...cartItem
	} = product

	const { currency, code } = useSelector((state: RootSate) => state.country)
	const [unmount, setUnmount] = React.useState(false)
	const inWishtList = useSelector((state: RootSate) =>
		state.wish.items.find((item) => item.id === id)
	)
	const dispatch = useDispatch()
	const { pathname } = useRouter()
	const price = product[`price_${code}`]

	const addToCart = () => {
		dispatch(addItem({ ...cartItem, id, title, image, price, count: 1 }))
	}

	const addToWishList = () => {
		if (pathname === '/wishlist') {
			setUnmount(true)
			setTimeout(() => {
				dispatch(toggleItem({ ...product }))
			}, 400)
		} else {
			dispatch(toggleItem({ ...product }))
		}
	}

	return (
		<div className={`${className} ${style.wrapper} ${unmount && style.hide}`}>
			<div className={`single-product ${style.product}`}>
				<Link href={`products/${id}`}>
					<a className={style.imgLink}>
						<span className="next-img">
							<img src={image} alt="Picture of the author" />
						</span>
					</a>
				</Link>
				<div className={`product-details ${style.details}`}>
					<Link href={`products/${id}`}>
						<p className={style.title}>{title}</p>
					</Link>
					<span className={style.buy}>
						<div className={`price ${style.price}`}>
							<h6>
								{product[`price_${code}`] &&
									product[`price_${code}`] + currency}
							</h6>
						</div>
						<div className="prd-bottom">
							<Button
								onClick={addToCart}
								disabled={!product[`price_${code}`]}
								variant="contained"
								color="warning"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									fill="currentColor"
									className="bi bi-cart-plus"
									viewBox="0 0 16 16"
								>
									<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
									<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
								</svg>
							</Button>
						</div>
					</span>
				</div>
			</div>
			<WishButton isWished={inWishtList} onClick={addToWishList} />
		</div>
	)
}

export default ProductBlock
