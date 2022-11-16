import AddIcon from '@mui/icons-material/Add'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router.js'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addItem } from '../../redux/slices/cartSlice'
import { productTypes } from '../../redux/slices/productSlice'
import { toggleItem } from '../../redux/slices/wishSlice'
import { RootSate } from '../../redux/store'
import { WishButton } from '../index'

import style from './ProductBlock.module.scss'
import imageLoader from '@/helper/imageLoader.js'
import { text } from '@/public/locales/texts.js'

interface ProductBlockProps extends productTypes {
	className?: string
}

const ProductBlock: FC<ProductBlockProps> = (props) => {
	const { className, ...product } = props
	const {
		id,
		title,
		image,
		price_en,
		price_ru,
		price_tr,
		price_kg,
		price_pl,
		...cartItem
	} = product

	const { currency, code } = useSelector((state: RootSate) => state.country)
	const [unmount, setUnmount] = React.useState(false)
	const inWishList = useSelector((state: RootSate) =>
		state.wish.items.find((item) => item.id === id)
	)
	const dispatch = useDispatch()
	const { pathname } = useRouter()

	const price =
		code === 'en'
			? price_en
			: code === 'ru'
			? price_ru
			: code === 'tr'
			? price_tr
			: code === 'kg'
			? price_kg
			: code === 'pl'
			? price_pl
			: price_en

	const addToCart = () => {
		dispatch(
			addItem({
				...cartItem,
				id,
				title,
				image,
				price: parseInt(price),
				count: 1,
			})
		)
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

	React.useEffect(() => {
		console.log(price)
	}, [])

	return (
		<div className={`${className} ${style.wrapper} ${unmount && style.hide}`}>
			<div className={`single-product ${style.product}`}>
				<Link href={`products/${id}`}>
					<a className={style.imgLink}>
						<span className="next-img">
							<Image
								// @ts-ignore
								loader={imageLoader}
								src={image}
								alt="Picture of the author"
								width={330}
								height={220}
								style={{
									objectFit: 'cover',
									objectPosition: 'center',
								}}
							/>
						</span>
					</a>
				</Link>
				<div className={`product-details ${style.details}`}>
					<Link href={`products/${id}`}>
						<p className={style.title}>{title}</p>
					</Link>
					<span className={style.buy}>
						<div className="prd-bottom">
							<Button
								endIcon={<ShoppingCartIcon />}
								className={style.buyBtn}
								sx={{
									width: '100%',
									borderRadius: '0px 0px 5px 5px',
									boxShadow: 'none',
								}}
								onClick={addToCart}
								disabled={!price}
								variant="contained"
								color="warning"
							>
								<p>{price && price + currency}</p>
							</Button>
						</div>
					</span>
				</div>
			</div>
			<WishButton isWished={inWishList} onClick={addToWishList} />
		</div>
	)
}

export default ProductBlock
