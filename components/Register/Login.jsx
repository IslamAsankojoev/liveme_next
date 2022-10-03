import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { DevTool } from '@hookform/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice.js';
import { useRouter } from 'next/router.js';
import Image from 'next/image';
import loginImg from '../../scss/static/img/login.webp';
import profileText from '../../collections/Profile/registerCollection.json';

export default function Login({ setToggle }) {
  const lang = useSelector((state) => state.lang.lang);
  const [serverErrors, setServerErrors] = React.useState({});
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${process.env.SERVER_DOMAIN}/api/users/login/`, {
        username: data.username,
        password: data.password,
      });
      setCookie(null, 'access_token', res.data.user.token.access, {
        maxAge: 10,
      });
      dispatch(setLoggedIn(res.data.user));
      router.push('/profile');
    } catch (err) {
      if (err.response.data) {
        setServerErrors(err.response.data);
      }
    }
  };

  return (
    <>
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img" style={{ minHeight: 500 }}>
                {/* <img className="img-fluid" src="static/img/login.webp" alt="" /> */}
                <Image className="img-fluid" src={loginImg} layout="fill" />
                <div className="hover">
                  <h4>{profileText.register.info.title[lang]}</h4>
                  <p>{profileText.register.info.subtitle[lang]}</p>
                  <a
                    className="primary-btn toggle"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}>
                    {profileText.register.form.button[lang]}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>{profileText.login.form.title[lang]}</h3>
                <form className="row login_form" onSubmit={handleSubmit(onSubmit)} id="contactForm">
                  <div className="col-md-12 form-group">
                    <input
                      {...register('username', {
                        required: true,
                      })}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder={profileText.login.form.username[lang]}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      {...register('password', {
                        required: true,
                      })}
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder={profileText.login.form.password[lang]}
                    />
                    {serverErrors?.detail && (
                      <p className="form-errors">Неверный пароль или логин</p>
                    )}
                  </div>

                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="primary-btn">
                      {profileText.login.form.button[lang]}
                    </button>
                    {/* <a href="#">Забыли пароль?</a> */}
                  </div>
                  <DevTool control={control} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
