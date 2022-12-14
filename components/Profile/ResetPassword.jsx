import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/router.js'
import { parseCookies } from 'nookies'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

import { profileText } from '../../public/locales/profile/registerCollection'

export default function ConfirmPassword() {
	const [serverErrors, setServerErrors] = React.useState({})
	const [resetSuccess, setResetSuccess] = React.useState(false)
	const [value, setValue] = React.useState({
		password: '',
		confirmPwd: '',
		old_password: '',
	})
	const user = useSelector((state) => state.user.data)
	const lang = useSelector((state) => state.lang.lang)
	const formSchema = Yup.object().shape({
		password: Yup.string()
			.required('Пароль обязателен')
			.min(1, 'Пароль должен быть не менее 8 символов'),
		confirmPwd: Yup.string()
			.required('Подтверждение пароля обязательно')
			.oneOf([Yup.ref('password')], 'Пароли не совпадают'),
	})
	const formOptions = { resolver: yupResolver(formSchema) }
	const { register, handleSubmit, reset, formState } = useForm(formOptions)
	const { errors } = formState
	const onSubmit = async (data) => {
		try {
			await axios.patch(
				`${process.env.SERVER}/api/users/change_password/${user.id}/`,
				{
					password: data.password,
					old_password: data.old_password,
				},
				{
					headers: {
						Authorization: 'Bearer ' + parseCookies().access_token,
					},
				}
			)
			setResetSuccess(true)
		} catch (err) {
			if (err.response.status === 400) {
				setServerErrors(err.response.data)
			}
		}
		setValue({ password: '', confirmPwd: '', old_password: '' })
	}

	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	return (
		<form
			className="row col-xl-6 col-lg-6 col-md-6 login_form"
			onSubmit={handleSubmit(onSubmit)}
			onChange={handleChange}
			id="contactForm"
		>
			<div className="col-md-12 form-group">
				<input
					{...register('old_password')}
					type="password"
					className="form-control"
					id="old_password"
					name="old_password"
					inputMode="text"
					placeholder={profileText.profile.form.old_password[lang]}
					value={value.old_password}
				/>
				{serverErrors.old_password && (
					<p className="form-errors">Неверный пароль</p>
				)}
			</div>
			<div className="col-md-12 form-group">
				<input
					{...register('password')}
					type="password"
					className="form-control"
					id="password"
					name="password"
					inputMode="text"
					placeholder={profileText.profile.form.new_password[lang]}
					value={value.password}
				/>
				{serverErrors.password &&
					serverErrors.password.map((error) => (
						<p className="form-errors">{error}</p>
					))}
			</div>
			<div className="col-md-12 form-group">
				<input
					{...register('confirmPwd')}
					type="password"
					className="form-control"
					id="confirmPwd"
					name="confirmPwd"
					inputMode="text"
					placeholder={profileText.profile.form.confirm_password[lang]}
					value={value.confirmPwd}
				/>
				{errors.confirmPwd && (
					<p className="form-errors">{errors.confirmPwd?.message}</p>
				)}
			</div>
			<div className="col-md-12 form-group">
				<button type="submit" value="submit" className="primary-btn">
					{profileText.profile.form.buttonChangePassword[lang]}
				</button>
				{/* <a href="#">Забыли пароль?</a> */}
				{resetSuccess && (
					<p className="form-success">
						{profileText.profile.form.password_success[lang]}
					</p>
				)}
			</div>
		</form>
	)
}
