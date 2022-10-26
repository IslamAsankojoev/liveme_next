import React from 'react';
import style from './AccountDetail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router.js';
import axios from 'axios';
import { parseCookies } from 'nookies';
import ResetPassword from './ResetPassword';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { profileText } from '../../public/locales/profile/registerCollection';

export default function AccountDetail() {
  const [serverErrors, setServerErrors] = React.useState({});
  const [changeSuccess, setChangeSuccess] = React.useState(false);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: React.useMemo(() => {
      return {
        username: user?.username,
        email: user?.email,
        address: user?.address,
      };
    }, [user]),
  });

  const onSubmit = async (data) => {
    setServerErrors({});
    try {
      const res = await axios.put(
        `${process.env.SERVER}/api/users/${user.id}`,
        {
          id: user.id,
          username: data.username,
          email: data.email,
          address: data.address,
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
        },
        {
          headers: {
            Authorization: 'Bearer ' + parseCookies().access_token,
          },
        },
      );
      dispatch(setLoggedIn(res.data));
      setChangeSuccess(true);
    } catch (error) {
      console.log(error, 'change user data error');
      setServerErrors(error.response?.data);
    }
  };

  React.useEffect(() => {
    reset({
      username: user?.username,
      email: user?.email,
      address: user?.address,
    });
  }, [user]);

  return (
    <div className={style.detail}>
      <h2>{profileText.profile.info.title[lang]}</h2>
      <br />
      <br />
      <form
        className="row col-xl-6 col-lg-6 col-md-6 login_form"
        onSubmit={handleSubmit(onSubmit)}
        id="contactForm">
        <div className="col-md-12 form-group">
          <input
            {...register('username', { required: true })}
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder={`${profileText.profile.form.name[lang]} ${errors?.username?.type === 'required' ? '- обязательно' : ''
              }`}
          />
          {serverErrors?.username && <p className="form-errors">Это имя уже занято</p>}
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
            placeholder={`${profileText.profile.form.email[lang]} ${errors?.email?.type === 'required' ? '- обязательно' : ''
              }`}
          />
          <p className="form-errors">
            {errors?.email?.type === 'pattern' && errors?.email?.message}
          </p>
          {serverErrors?.email && <p className="form-errors">Этот Email уже занят</p>}
        </div>
        <div className="col-md-12 form-group">
          <input
            {...register('address')}
            type="text"
            className="form-control"
            id="address"
            name="address"
            inputMode="text"
            placeholder={`${profileText.profile.form.address[lang]} ${errors?.address?.type === 'required' ? '- обязательно' : ''
              }`}
          />
        </div>
        {/*<div className="col-md-12 form-group">*/}
        {/*  <input*/}
        {/*    {...register('password')}*/}
        {/*    type="password"*/}
        {/*    className="form-control"*/}
        {/*    id="password"*/}
        {/*    name="password"*/}
        {/*    placeholder="Пароль"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="col-md-12 form-group">
          <button type="submit" value="submit" className="primary-btn">
            {profileText.profile.form.buttonChangeData[lang]}
          </button>
          {changeSuccess && (
            <p className="form-success">{profileText.profile.form.data_success[lang]}</p>
          )}
          {/* <a href="#">Забыли пароль?</a> */}
        </div>
      </form>
      <br />
      <br />
      <br />
      <ResetPassword />
      <br />
      <br />
      <br />
    </div>
  );
}
