import CloseIcon from '@mui/icons-material/Close'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogProps,
	DialogTitle,
	Grid,
	IconButton,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { orderItemProps, orderProps } from '../../redux/slices/userSlice'
import { RootSate } from '../../redux/store'

import style from './OrderBlock.module.scss'

export interface DialogTitleProps {
	id: string
	children?: React.ReactNode
	onClose: () => void
}

const OrderBlock: FC<orderProps> = ({
	id,
	created,
	updated,
	items,
	client_email,
	client_address,
	client_phone,
	client_name,
	payment_method,
	order_status,
	is_published,
	user,
	image,
	order_time,
}) => {
	const [open, setOpen] = React.useState(false)
	const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper')
	const lang = useSelector((state: RootSate) => state.lang.lang)
	const { currency, code } = useSelector((state: RootSate) => state.country)
	const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
		setOpen(true)
		setScroll(scrollType)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const descriptionElementRef = React.useRef<HTMLElement>(null)
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	const BootstrapDialogTitle = (props: DialogTitleProps) => {
		const { children, onClose, ...other } = props

		return (
			<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
				{children}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		)
	}

	return (
		<>
			<div className={style.order_item} onClick={handleClickOpen('paper')}>
				<p className="number">
					<span>Номер заказа </span>#{id}
				</p>
				<p className="created">
					<span>Дата </span>
					{created}
				</p>
				<p className={`price ${style.order_item_price}`}>
					<span>Сумма </span>
					{items &&
						items
							.reduce(
								(totalPrice: number, item: orderItemProps) =>
									totalPrice +
									item.product[`price_${lang}`] * item.product_count,
								0
							)
							.toFixed(2) + currency}
				</p>
				<p className="payment_method">
					<span>Метод оплаты </span>
					{payment_method}
				</p>
				<p className="phone">
					<span>Номер </span>
					{client_phone}
				</p>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={handleClose}
				>
					{id} order
				</BootstrapDialogTitle>
				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
					>
						<Typography gutterBottom variant="h6" component="div">
							Details
						</Typography>
						<Paper elevation={2} sx={{ padding: '20px', minWidth: '350px' }}>
							<Grid container sx={{ display: 'flex', alignItems: 'center' }}>
								<Grid item xs={10} sm={7} className={style.order_item_open}>
									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Name:</span> <b>{client_name}</b>
									</Paper>

									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Phone:</span> <b>{client_phone}</b>
									</Paper>

									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Email:</span> <b>{client_email}</b>
									</Paper>

									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Address:</span> <b>{client_address}</b>
									</Paper>

									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Method:</span> <b>{payment_method}</b>
									</Paper>

									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Date:</span> <b>{updated}</b>
									</Paper>
									<Paper className={style.order_item_open_item} elevation={0}>
										<span>Delivery Time:</span>{' '}
										<b style={{ color: 'green' }} className="time">
											{order_time}
										</b>
									</Paper>
								</Grid>
								{image && (
									<Grid item xs={10} sm={3} className={style.order_item_open}>
										<Paper className={style.order_item_open} elevation={0}>
											<br />
											<div>
												<span>Order photo</span>
											</div>
											<img
												src={process.env.SERVER + image}
												width={150}
												alt={id + updated}
											/>
										</Paper>
									</Grid>
								)}
							</Grid>
						</Paper>
						<br />

						{items?.length > 0 && (
							<>
								<Typography variant="h6" component="div">
									Products
								</Typography>
								<Grid container columns={10} columnSpacing={1}>
									{items.map((item) => {
										return (
											<Grid item xs={10} className={style.order_item_product}>
												<Paper
													sx={{
														width: '100%',
														display: 'flex',
														justifyContent: 'space-around',
														alignItems: 'center',
													}}
													className={style.order_item_product}
													elevation={2}
												>
													<img
														src={process.env.SERVER + item.product.image}
														width={100}
														alt=""
													/>
													<Box
														sx={{
															width: '100%',
															display: 'flex',
															flexDirection: 'column',
															paddingLeft: '20px',
															// alignItems: 'center',
														}}
													>
														<Typography variant="h6" component="div">
															{item.product.title}
														</Typography>
														<Typography variant="body2" gutterBottom>
															{item.product_count}шт ={' '}
															<span className={style.order_item_price}>
																{item.product_count *
																	item.product[`price_${code}`] +
																	currency}
															</span>
														</Typography>
													</Box>
												</Paper>
											</Grid>
										)
									})}
								</Grid>
							</>
						)}

						{/* 
  id,
  created,
  updated,
  products,
  client_email,
  client_address,
  client_phone,
  client_name,
  payment_method,
  order_status,
  is_published,
  user,
  image,
  order_time,
*/}
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	)
}
export default OrderBlock
