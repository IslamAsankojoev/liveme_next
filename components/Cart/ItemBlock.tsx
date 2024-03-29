import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	cartItemProps,
	decrement,
	increment,
	removeItem,
} from '../../redux/slices/cartSlice'
import { RootSate } from '../../redux/store'

import style from './itemBlock.module.scss'

const ItemBlock: FC<cartItemProps> = ({
	id,
	title,
	description,
	image,
	price,
	is_published,
	category,
	slug,
	count,
	stock,
}) => {
	const [removing, setRemoving] = React.useState(false)
	const [removed, setRemoved] = React.useState(false)
	const dispatch = useDispatch()
	const { currency } = useSelector((state: RootSate) => state.country)

	const removeProductFromCart = (index: number) => {
		setRemoving(true)
		setRemoved(true)
		setTimeout(() => {
			dispatch(removeItem(index))
			setRemoving(false)
		}, 400)
	}
	return (
		<>
			<tr
				className={`cart-item  ${style.cartItem} ${
					removing ? style.removing : ''
				} ${removed ? style.removed : ''}`}
			>
				<td>
					<div className="media">
						<div className="d-flex" style={{ position: 'relative' }}>
							<img src={image} width={100} height={170} />
						</div>
						<div className="media-body">
							<p>{title}</p>
						</div>
					</div>
				</td>
				<td>
					<h5>{price + currency}</h5>
				</td>
				<td>
					<div className="product_count">
						<input
							type="text"
							name="qty"
							id="sst"
							value={count}
							title="Quantity:"
							// onChange={}
							// TODO двойная связь инпута со стейтом или диспатчером(переписать функцию декремента, он их переименовал местами)
							className="input-text qty"
						/>
						<button
							onClick={() => {
								dispatch(
									decrement({
										id,
										title,
										description,
										image,
										price,
										is_published,
										category,
										slug,
										count,
										stock,
									})
								)
							}}
							className="increase items-count"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-up-short"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
								/>
							</svg>
						</button>
						<button
							onClick={() => {
								dispatch(
									increment({
										id,
										title,
										description,
										image,
										price,
										is_published,
										category,
										slug,
										count,
										stock,
									})
								)
							}}
							disabled={count === 1}
							className="reduced items-count"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-down-short"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
								/>
							</svg>
						</button>
					</div>
				</td>

				<td>
					<h5>{(price * count).toFixed(2) + currency}</h5>
				</td>
				<td>
					<svg
						onClick={() => {
							removeProductFromCart(id)
						}}
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi- btn-close"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</td>
			</tr>
		</>
	)
}

export default ItemBlock
