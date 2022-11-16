import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router.js'
import { setCookie } from 'nookies'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { profileText } from '../../public/locales/profile/registerCollection.js'
import { setLoggedIn } from '../../redux/slices/userSlice'
import loginImg from '../../scss/static/img/login.webp'

import imageLoader from '@/helper/imageLoader.js'

export default function Login({ setToggle }) {
	const lang = useSelector((state) => state.lang.lang)
	const [serverErrors, setServerErrors] = React.useState(null)
	const dispatch = useDispatch()
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data, e) => {
		e.preventDefault()
		try {
			const res = await axios.post(`${process.env.SERVER}/api/login/`, {
				username: data.username,
				password: data.password,
			})
			setCookie(null, 'access_token', res.data.access, {
				maxAge: 1 * 24 * 60 * 60,
			})
			router.reload()
		} catch (error) {
			console.log(error, 'error login')
			setServerErrors(error.response?.data)
		}
	}

	React.useEffect(() => {
		setServerErrors(errors)
	}, [errors])

	return (
		<>
			<section className="login_box_area section_gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="login_box_img" style={{ minHeight: 500 }}>
								<Image
									loader={imageLoader}
									className="img-fluid"
									src={loginImg}
									layout="fill"
								/>
								<div className="hover">
									<h4>{profileText.register.info.title[lang]}</h4>
									<p>{profileText.register.info.subtitle[lang]}</p>
									<a
										className="primary-btn toggle"
										onClick={() => {
											setToggle((prev) => !prev)
										}}
									>
										{`${profileText.register.form.button[lang]}`}
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="login_form_inner">
								<h3>{profileText.login.form.title[lang]}</h3>
								<form
									className="row login_form"
									onSubmit={handleSubmit(onSubmit)}
									id="contactForm"
								>
									<div className="col-md-12 form-group">
										<input
											{...register('username', {
												required: true,
											})}
											type="text"
											autoComplete="username"
											className="form-control"
											name="username"
											placeholder={`${profileText.login.form.username[lang]} ${
												errors?.username?.type === 'required'
													? '- обязательно'
													: ''
											}`}
										/>
									</div>
									<div className="col-md-12 form-group">
										<input
											{...register('password', {
												required: true,
											})}
											type="password"
											autoComplete="current-password"
											className="form-control"
											name="password"
											placeholder={
												profileText.login.form.password[lang] +
												(errors?.password?.type === 'required'
													? ' - обязательно'
													: '')
											}
										/>
										{serverErrors?.detail && (
											<p className="form-errors">Неверный пароль или логин</p>
										)}
									</div>

									<div className="col-md-12 form-group">
										<button type="submit" className="primary-btn">
											{profileText.login.form.button[lang]}
										</button>
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
