import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { profileText } from '../../public/locales/profile/registerCollection.js'
import { text } from '../../public/locales/texts.js'
import { setLoggedIn } from '../../redux/slices/userSlice'
import loginImg from '../../scss/static/img/login.webp'
import countries from '../../utils/countries'

import imageLoader from '@/helper/imageLoader.js'

export default function Register({ setToggle }) {
	const lang = useSelector((state) => state.lang.lang)
	const [usernameIsAlreadyExist, setUsernameIsAlreadyExist] = React.useState('')
	const user = useSelector((state) => state.user.data)
	const router = useRouter()
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	const handleChangeUsername = () => {
		setUsernameIsAlreadyExist('')
	}

	const onSubmit = async (data) => {
		try {
			setUsernameIsAlreadyExist('')

			const res = await axios.post(
				`${process.env.SERVER}/api/users/`,
				{ ...data },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			setCookie(null, 'access_token', res.data.token.access, {
				maxAge: 1 * 24 * 60 * 60,
			})
			dispatch(setLoggedIn(res.data))
		} catch (err) {
			console.log(err, 'err from register')
			if (err.response.data.username) {
				setUsernameIsAlreadyExist(err.response.data.username[0])
			}
		}
		router.reload()
	}

	React.useEffect(() => {
		console.log(errors)
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
									<h4>{profileText.login.info.title[lang]}</h4>
									<p>{profileText.login.info.subtitle[lang]}</p>
									<a
										className="primary-btn toggle"
										onClick={() => {
											setToggle((prev) => !prev)
										}}
									>
										{profileText.login.form.button[lang]}
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="login_form_inner">
								<h3>{profileText.register.form.title[lang]}</h3>
								<form
									className="row login_form"
									onSubmit={handleSubmit(onSubmit)}
									id="contactForm"
								>
									<div className="col-md-12 form-group">
										<input
											{...register('username', { required: true })}
											type="text"
											onChange={handleChangeUsername}
											className="form-control"
											id="username"
											name="username"
											placeholder={`${profileText.register.form.name[lang]} ${
												errors?.username?.type === 'required'
													? `- ${text.required[lang]}`
													: ''
											}`}
										/>
										{usernameIsAlreadyExist && (
											<p className="form-errors">
												Пользователь с таким именем уже существует
											</p>
										)}
									</div>
									<div className="col-md-12 form-group">
										<input
											{...register('email', {
												required: true,
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'Неверный адрес электронной почты',
												},
											})}
											type="text"
											className="form-control"
											id="email"
											name="email"
											inputMode="email"
											placeholder={`${profileText.register.form.email[lang]} ${
												errors?.email?.type === 'required'
													? `- ${text.required[lang]}`
													: ''
											}`}
										/>

										<p className="form-errors">
											{errors?.email?.type === 'pattern' &&
												errors.email.message}
										</p>
									</div>
									<div className="col-md-12 form-group">
										<select
											style={{
												border: 'none',
												borderRadius: 0,
												margin: '15px 0 0 0',
												borderBottom: '1px solid #cccccc',
											}}
											className="form-control"
											{...register('country', {
												required: true,
											})}
											id="country"
											name="country"
										>
											<option value="" disabled selected>
												{profileText.country[lang]}
												{errors?.country?.type === 'required'
													? `- ${text.required[lang]}`
													: null}
											</option>
											{countries.map(({ name, code }, index) => {
												return (
													<option key={index} value={code}>
														{name}
													</option>
												)
											})}
										</select>
									</div>

									<div className="col-md-12 form-group">
										<input
											name="password"
											className="form-control"
											type="password"
											autoComplete="new-password"
											placeholder={`${
												profileText.register.form.password[lang]
											} ${
												errors?.password?.type === 'required'
													? `- ${text.required[lang]}`
													: ''
											}`}
											{...register('password', {
												required: true,
												minLength: {
													value: 8,
													message:
														'Пароль должен содержать не менее 8 символов',
												},
											})}
										/>
										{<p className="form-errors">{errors.password?.message}</p>}
									</div>

									{/* <div className="col-md-12 form-group">
                    <input
                      name="password_repeat"
                      type="password"
                      {...register('confirm_password', {
                        required: 'required',
                        validate: (val) => {
                          if (watch('password') != val) {
                            return 'Your passwords do no match';
                          }
                        },
                      })}
                    />
                  </div> */}

									<div className="col-md-12 form-group">
										<button
											type="submit"
											value="submit"
											className="primary-btn"
										>
											{profileText.register.form.button[lang]}
										</button>
										{/* <a href="#">Забыли пароль?</a> */}
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
