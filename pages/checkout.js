import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router.js'
import { parseCookies } from 'nookies'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import sendMessage from '../bot'
import { BannerArea } from '../components'
import { checkoutCollectionsText as checkoutText } from '../public/locales/checkout/checkoutCollections'
import { text } from '../public/locales/texts'
import { clearCart } from '../redux/slices/cartSlice'
import countries from '../utils/countries.js'

export default function Checkout() {
	const { totalPrice, totalItems, items } = useSelector((state) => state.cart)
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const router = useRouter()
	const delivery_price = 0
	const lang = useSelector((state) => state.lang.lang)
	const { currency, code } = useSelector((state) => state.country)
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const [loadingPayment, setLoadingPayment] = React.useState(false)

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: React.useMemo(() => {
			return user.data
		}, [user]),
	})

	const request = {
		locale: 'en',
		price: totalPrice,
		paidPrice: totalPrice,
		callbackUrl: 'https://www.merchant.com/callback',
		buyer: {
			id: user.data?.id || '00000',
			name: register.username,
			surname: 'nothing',
			email: register.email,
			identityNumber: user.data?.id || '00000',
			registrationAddress: register.address || 'nothing',
			city: 'nothing',
			country: user.data?.country || 'nothing',
		},
		shippingAddress: {
			contactName: register.username,
			city: 'nothing',
			country: user.data?.country || 'nothing',
			address: register.address || 'nothing',
		},
		billingAddress: {
			contactName: register.username,
			city: 'nothing',
			country: user.data?.country || 'nothing',
			address: register.address || 'nothing',
		},
		basketItems: [
			{
				id: 1,
				name: 'Livemeshop urun',
				category1: 'liveme',
				itemType: 'PHYSICAL',
				price: totalPrice,
			},
		],
	}

	const itemsText = items
		.map((item) => {
			return `\n\n${item?.title}\n${item?.count} шт - ${
				item?.price * item?.count
			} ${currency}`
		})
		.toString()

	const onSend = async (data) => {
		setLoadingPayment(true)
		const teletext = `Имя - ${data?.username}\n\nНомер телефона - ${
			data?.phone
		}\nПочта - ${data?.email}\nАдрес - ${data?.address}\nМетод оплаты - ${
			data?.payment_method
		}\n\nТовары${itemsText}\n\nСумма: ${
			totalPrice + delivery_price
		} ${currency}`
		try {
			axios
				.post(
					`${process.env.SERVER}/api/orders/`,
					{
						client_name: data.username,
						client_address: data.address,
						client_phone: data.phone,
						client_email: data.email,
						payment_method: data.payment_method,
						user: user.data?.id || null,
						order_status: 'pending',
					},
					user.loggedIn
						? {
								headers: {
									Authorization: `Bearer ${parseCookies().access_token}`,
								},
						  }
						: null
				)
				.then((res) => {
					items.forEach((el) => {
						axios.post(`${process.env.SERVER}/api/orders/item/`, {
							order: res.data.id,
							product: el.id,
							product_count: el.count,
						})
					})
				})

			if (data.payment_method === 'Card') {
				try {
					axios
						.post(`${process.env.SERVER}/api/payment/`, {
							locale: 'en',
							price: totalPrice,
							paidPrice: totalPrice,
							callbackUrl: process.env.SERVER,
							buyer: {
								id: user.data?.id || '00000',
								name: data.username,
								surname: 'nothing',
								email: data.email,
								identityNumber: user.data?.id || '00000',
								registrationAddress: data.address || 'nothing',
								city: 'nothing',
								country: user.data?.country || 'nothing',
							},
							shippingAddress: {
								contactName: data.username,
								city: 'nothing',
								country: user.data?.country || 'nothing',
								address: data.address || 'nothing',
							},
							billingAddress: {
								contactName: data.username,
								city: 'nothing',
								country: user.data?.country || 'nothing',
								address: data.address || 'nothing',
							},
							basketItems: [
								{
									id: 1,
									name: 'Livemeshop urun',
									category1: 'liveme',
									itemType: 'PHYSICAL',
									price: totalPrice,
								},
							],
						})
						.then(({ data }) => {
							dispatch(clearCart())
							window.location.href = data.paymentPageUrl
						})
						.catch((err) => {
							console.log(err, 'payment error')
						})
				} catch (error) {
					console.log(error, 'error payment')
				}
			}
			enqueueSnackbar(text.notifications.successOrder[lang], {
				variant: 'success',
				autoHideDuration: 3000,
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'right',
				},
			})
			if (data.payment_method === 'Cash') {
				dispatch(clearCart())
				router.push('/shop')
			}
		} catch (err) {
			console.log(err)
		}
		try {
			sendMessage(teletext)
		} catch (error) {
			console.log(error, 'telegram send text error')
		}
	}

	React.useEffect(() => {
		reset(user.data)
	}, [user])

	return (
		<>
			<BannerArea title={checkoutText.page_title} path={'/checkout'} />

			<section className="checkout_area section_gap">
				<div className="container">
					<div className="billing_details">
						<div className="row">
							<div className="col-lg-6">
								<h3>{checkoutText.your_order[lang]}</h3>
								<div className="col-md-12 order_box">
									{items &&
										items.map((item) => {
											return (
												<div key={item.id} className="order_box-product">
													<img
														src={item.image}
														alt={item.title}
														style={{ background: 'white' }}
													/>
													<div className="order_box-info">
														<Link href={`/products/${item.id}`}>
															<a className="title">{item.title}</a>
														</Link>
														<span>
															<p>
																{Math.ceil(item.price * item.count) + currency}
															</p>
															<p>{item.count} шт.</p>
														</span>
													</div>
												</div>
											)
										})}
								</div>
							</div>

							<div className="col-lg-6">
								<h3>{checkoutText.order_details[lang]}</h3>
								<form
									onSubmit={handleSubmit(onSend)}
									className="row contact_form"
								>
									<div className="col-md-12 form-group p_star">
										<input
											{...register('username', {
												required: true,
											})}
											type="text"
											className="form-control"
											name="username"
											placeholder={checkoutText.form.name[lang]}
										/>
									</div>
									<div className="col-md-12 form-group p_star">
										<input
											{...register('phone', {
												required: true,
											})}
											type="text"
											className="form-control phoneMask"
											name="phone"
											inputMode="tel"
											placeholder={checkoutText.form.phone[lang]}
										/>
									</div>
									<div className="col-md-12 form-group p_star">
										<input
											{...register('address', {
												required: true,
											})}
											type="text"
											className="form-control"
											name="address"
											placeholder={checkoutText.form.address[lang]}
										/>
									</div>
									<div className="col-md-12 form-group p_star">
										<input
											{...register('email', {
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'Неверный адрес электронной почты',
												},
											})}
											type="email"
											className="form-control"
											id="email"
											name="email"
											inputMode="email"
											placeholder={checkoutText.form.email[lang]}
										/>
										<p>{errors?.email?.message}</p>
									</div>

									<div className="col-md-12 order_box">
										<ul className="list list_2">
											<li>
												<a>
													{checkoutText.details.sum[lang]}{' '}
													<span>{totalPrice + currency}</span>
												</a>
											</li>
											<li>
												<a>
													{checkoutText.details.delivery[lang]}{' '}
													<span>{delivery_price + currency}</span>
												</a>
											</li>
											<li>
												<a>
													{checkoutText.details.total[lang]}{' '}
													<span>{totalPrice + delivery_price + currency}</span>
												</a>
											</li>
										</ul>
										<br />
										<p>
											<b>{checkoutText.details.paymentMethod[lang]}</b>
										</p>
										{/* <div className="payment_item">
											<div className="radion_btn">
												<input
													{...register('payment_method')}
													type="radio"
													id="radio1"
													defaultChecked
													value="Bank"
												/>
												<label htmlFor="radio1">
													{checkoutText.details.bank[lang]}
												</label>
												<div className="check"></div>
											</div>
										</div> */}
										<div className="payment_item">
											<div className="radion_btn">
												<input
													{...register('payment_method')}
													type="radio"
													id="radio2"
													value="Cash"
												/>
												<label htmlFor="radio2">
													{checkoutText.details.cash[lang]}{' '}
												</label>
												<div className="check"></div>
											</div>
										</div>
										<div className="payment_item active">
											<div className="radion_btn">
												<input
													{...register('payment_method')}
													type="radio"
													id="radio3"
													value="Card"
												/>
												<label htmlFor="radio3">
													{checkoutText.details.card[lang]}
												</label>
												<div className="check"></div>
											</div>
											<p>{checkoutText.details.additional[lang]} </p>
										</div>
										<div className="creat_account">
											<input
												type="checkbox"
												defaultChecked
												id="f-option4"
												name="selector"
											/>
											<label htmlFor="f-option4">
												{checkoutText.details.terms[lang]}{' '}
											</label>
											<Link href="/agreement">
												<a> terms & conditions*</a>
											</Link>
										</div>
										<Button
											sx={{
												position: 'relative',
												width: '100%',
												height: '42px',
												borderRadius: '0px',
											}}
											variant="contained"
											color="warning"
											size="large"
											type="submit"
											disabled={!!loadingPayment}
										>
											{!!loadingPayment ? (
												<span
													style={{
														position: 'absolute',
														top: '0',
														right: '0',
														width: '100%',
														height: '100%',
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
														zIndex: '10',
													}}
												>
													<CircularProgress
														style={{
															width: '25px',
															height: '25px',
														}}
														color="inherit"
													/>
												</span>
											) : (
												checkoutText.details.button[lang]
											)}
										</Button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
