import Skeleton from '@mui/material/Skeleton'
import axios from 'axios'
import lodash from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BannerArea, Empty } from '../components'
import {
	PaginationComp,
	ProductBlock,
	ProductBlockSkelet,
	SidebarCategory,
} from '../components/index'
import { shopText } from '../public/locales/shop/shopCollection'
import { setProducts } from '../redux/slices/productSlice'

const page_size = 12

export default function Shop() {
	const products = useSelector((state) => state.products.items)
	const status = useSelector((state) => state.products.status)
	const dispatch = useDispatch()
	const [previous, setPrevious] = React.useState(null)
	const [next, setNext] = React.useState(null)
	const [count, setCount] = React.useState(0)
	const [page, setPage] = React.useState(1)
	const pageCount = Math.ceil(count / page_size)
	const [category, setCategory] = React.useState('')
	const lang = useSelector((state) => state.lang.lang)

	React.useEffect(() => {
		axios
			.get(`${process.env.SERVER}/api/products/?page_size=${page_size}`, {
				headers: {
					'Accept-Language': lang,
				},
			})
			.then(({ data }) => {
				dispatch(setProducts(data.results))
			})
	}, [lang])

	const handlePage = async (page_n) => {
		await axios
			.get(
				`${process.env.SERVER}/api/products/?category=${category}&page=${page_n}&page_size=${page_size}`,
				{
					headers: {
						'Accept-Language': lang || 'ru',
					},
				}
			)
			.then((res) => {
				dispatch(setProducts(res.data.results))
				setNext(res.data.next)
				setPrevious(res.data.previous)
				setCount(res.data.count)
			})
		setPage(page_n)
	}

	React.useEffect(() => {
		axios
			.get(
				`${
					process.env.SERVER
				}/api/products/?category=${category}&page=${1}&page_size=${page_size}`,
				{
					headers: {
						'Accept-Language': lang || 'ru',
					},
				}
			)
			.then((res) => {
				dispatch(setProducts(res.data.results))
				setNext(res.data.next)
				setPrevious(res.data.previous)
				setCount(res.data.count)
			})
	}, [category])

	return (
		<>
			<BannerArea title={shopText.page_title} path={'/shop'} />
			<br />
			<br />
			<br />
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-5">
						<SidebarCategory
							setCategory={setCategory}
							setPage={setPage}
							categoryCurrent={category}
						/>
					</div>
					<br />
					<br />
					<div className="col-xl-9 col-lg-8 col-md-12">
						<div className="d-flex flex-wrap align-items-center justify-content-center">
							<PaginationComp
								items={products}
								page={page}
								count={pageCount}
								next={next}
								previous={previous}
								page_size={page_size}
								handlePage={handlePage}
							/>
						</div>
						<section className="lattest-product-area pb-40 category-list">
							<br />
							<div className="row">
								{status === 'pending' &&
									Array(6)
										.fill(1)
										.map((_, index) => {
											return (
												<div className="col-lg-4 col-md-6 col-6" key={index}>
													<Skeleton
														animation="wave"
														variant="rectangular"
														width="100%"
														height={451}
														sx={{
															marginTop: '10px',
															borderRadius: '5px',
															padding: '10px',
															boxShadow: '0px 0px 10px -7px rgb(0 0 0 / 56%)',
														}}
													/>
												</div>
											)
										})}

								{status === 'success' &&
									!lodash.isEmpty(products) &&
									products.map((item) => {
										return (
											<ProductBlock
												className="col-lg-4 col-md-6 col-6"
												key={item.id}
												{...item}
											/>
										)
									})}

								{status === 'success' && lodash.isEmpty(products) && (
									<div className="col-12">
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
										{/*<h2>Пока товаров нету</h2>*/}
										{/*<p>Поищите что нибудь для себя в других категориях.</p>*/}
										<Empty
											title={shopText.empty.title[lang]}
											content={shopText.empty.subtitle[lang]}
											button={shopText.empty.button[lang]}
										/>
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
									</div>
								)}
							</div>
							<br />
						</section>
						<div className="d-flex flex-wrap align-items-center justify-content-center">
							<PaginationComp
								page={page}
								count={pageCount}
								next={next}
								previous={previous}
								page_size={page_size}
								handlePage={handlePage}
							/>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
		</>
	)
}
