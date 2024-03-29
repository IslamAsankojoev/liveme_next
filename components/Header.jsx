import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Button } from '@mui/material'
import Badge from '@mui/material/Badge'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import axios from 'axios'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNull } from 'util'

import { Search } from '../components/index'
import Diamond from '../public/diamond.webp'
import Gold from '../public/gold.webp'
import { text } from '../public/locales/texts.js'
import Silver from '../public/silver.webp'
import { setCurrency } from '../redux/slices/countrySlice'
import { setLang } from '../redux/slices/langSlice'
import { setLoggedIn } from '../redux/slices/userSlice'
import countries from '../utils/countries'

const languages = ['ru', 'en', 'kg', 'tr', 'pl', 'de', 'kz']

const currencies = [
	{ currency: 'с', name: 'KGS', code: 'kg', flag: 'kg' },
	{ currency: '$', name: 'USD', code: 'en', flag: 'us' },
	{ currency: '₺', name: 'TRY', code: 'tr', flag: 'tr' },
	{ currency: 'zł', name: 'PLN', code: 'pl', flag: 'pl' },
	{ currency: '₸', name: 'KZT', code: 'kz', flag: 'kz' },
	{ currency: '€', name: 'EUR', code: 'de', flag: 'de' },
]

export default function Header() {
	const langRef = React.useRef(null)
	const currencyRef = React.useRef(null)
	const lang = useSelector((state) => state.lang.lang)
	const { totalItems } = useSelector((state) => state.cart)
	const totalWishes = useSelector((state) => state.wish?.totalItems)
	const [searchOpen, setSearchOpen] = React.useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
	const searchRef = React.useRef()
	const { replace, pathname, push, asPath, query } = useRouter()
	const dispatch = useDispatch()
	const { loggedIn, data } = useSelector((state) => state.user)
	const defaultLang = lang
	const defaultCurrency = useSelector((state) => state.country.code)

	const toggleMenu = () => {
		setMobileMenuOpen((prev) => !prev)
		setSearchOpen(false)
	}

	const onClickSearch = () => {
		setSearchOpen((prev) => !prev)
		setMobileMenuOpen((prev) => !prev)
	}

	const onChangeLang = (e) => {
		dispatch(setLang(e.target.value))
		setCookie(null, 'NEXT_LOCALE', e.target.value, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		})
		replace(asPath, asPath, { scroll: false })
	}

	const onChangeCurrency = (e) => {
		dispatch(
			setCurrency({
				...currencies.find((item) => item.code === e.target.value),
				country: countries.find((item) => item.code === e.target.value),
			})
		)
	}

	React.useEffect(() => {
		setMobileMenuOpen(false)
		if (parseCookies().access_token) {
			axios
				.get(`${process.env.SERVER}/api/users/me/`, {
					headers: {
						Authorization: 'Bearer ' + parseCookies().access_token,
					},
				})
				.then((res) => {
					dispatch(setLoggedIn(res.data))
				})
		}
	}, [asPath])

	React.useEffect(() => {
		langRef.current.value = lang
	}, [lang])

	return (
		<header ref={searchRef} className="header_area sticky-header">
			<div className="main_menu">
				<nav
					className="navbar navbar-expand-lg navbar-light main_box"
					style={{
						maxWidth: '100%',
					}}
				>
					<div className="container">
						<Link href="/">
							<a className="navbar-brand logo_h">
								<img
									src={'/livemeLogo1.webp'}
									width={140}
									height={45}
									alt={'Logo'}
								/>
							</a>
						</Link>
						<div className="header-right">
							<Select
								ref={langRef}
								className="header-select orange"
								size="small"
								value={defaultLang}
								onChange={onChangeLang}
								defaultValue={defaultLang}
							>
								{languages.map((language, id) => {
									return (
										<MenuItem key={id} value={language}>
											{language}
										</MenuItem>
									)
								})}
							</Select>
							<Button
								onClick={toggleMenu}
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									padding: '2px',
								}}
							>
								{!mobileMenuOpen ? (
									<MenuIcon
										sx={{ color: 'black', width: '33px', height: '33px' }}
									/>
								) : (
									<CloseIcon
										sx={{ color: 'black', width: '33px', height: '33px' }}
									/>
								)}
							</Button>
							<div
								className={classNames({
									'collapse navbar-collapse offset m-menu': true,
									showMobileMenu: mobileMenuOpen,
								})}
								id="navbarSupportedContent"
							>
								{data?.country ? null : (
									<Select
										className="header-select currency orange"
										size="small"
										value={defaultCurrency}
										onChange={onChangeCurrency}
										defaultValue={defaultCurrency}
									>
										{currencies.map(({ name, currency, flag, code }, id) => {
											return (
												<MenuItem key={id} value={code}>
													<img
														src={`https://flagcdn.com/${flag}.svg`}
														width="53px"
													/>
												</MenuItem>
											)
										})}
									</Select>
								)}
								<ul className="nav navbar-nav menu_nav ml-auto">
									{text.header?.menu?.map((item, id) => {
										{
											if (!loggedIn && item.link === '/register') {
												return (
													<li
														key={id}
														className={`nav-item ${
															asPath === item.link ? 'active' : ''
														}`}
													>
														<Link href={item.link}>
															<a className="nav-link">
																<AccountCircleOutlinedIcon />
															</a>
														</Link>
													</li>
												)
											}
											if (item.link === '/profile' && loggedIn) {
												return (
													<li
														key={id}
														className={`nav-item ${
															asPath === item.link ? 'active' : ''
														}`}
													>
														<Link href={item.link}>
															<a
																className="nav-link"
																style={{ position: 'relative' }}
															>
																{!loggedIn ? (
																	<AccountCircleOutlinedIcon />
																) : (
																	<AccountCircleIcon
																		color="warning"
																		fontSize="large"
																	/>
																)}
															</a>
														</Link>
													</li>
												)
											}
											if (
												item.link !== '/profile' &&
												item.link !== '/register'
											) {
												return (
													<li
														key={id}
														className={`nav-item ${
															asPath === item.link ? 'active' : ''
														}`}
													>
														<Link href={item.link}>
															<a className="nav-link">{item.text[lang]}</a>
														</Link>
													</li>
												)
											}
										}
									})}
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li
										className={`nav-item  ${pathname === '/cart' && 'active'} `}
									>
										<Link href="/cart">
											<a className="cart">
												{pathname === '/cart' ? (
													<LocalMallIcon color="warning" />
												) : (
													<LocalMallOutlinedIcon />
												)}
											</a>
										</Link>
									</li>
									<i
										onClick={() => {
											push('/cart')
										}}
										className={`count-bag ${totalItems <= 0 && 'hide-count'}`}
									>
										{totalItems}
									</i>

									<li
										className={`nav-item d-sm-flex d-none  ${
											pathname === '/wishlist' && 'active'
										}`}
									>
										<Link href="/wishlist">
											<a className="cart">
												{pathname === '/wishlist' ? (
													<FavoriteIcon color="warning" />
												) : (
													<FavoriteBorderOutlinedIcon />
												)}
											</a>
										</Link>
									</li>
									<i
										onClick={() => {
											push('/wishlist')
										}}
										className={`count-bag ${totalWishes <= 0 && 'hide-count'}`}
									>
										{totalWishes}
									</i>

									<li className="nav-item">
										<button className="search" onClick={onClickSearch}>
											<span className="lnr lnr-magnifier" id="search">
												<SearchOutlinedIcon />
											</span>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<Search
				setSearchOpen={setSearchOpen}
				searchOpen={searchOpen}
				searchRef={searchRef}
			/>
		</header>
	)
}
