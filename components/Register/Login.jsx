import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { DevTool } from '@hookform/devtools';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice.js';
import { useRouter } from 'next/router.js';

export default function Login({ setToggle }) {
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
        maxAge: 24 * 60 * 60,
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
              <div className="login_box_img">
                <img className="img-fluid" src="static/img/login.webp" alt="" />
                <div className="hover">
                  <h4>Вы у нас впервые?</h4>
                  <p>Зарегестрируйтесь и будьте всегда вкурсе новых духов и араматов</p>
                  <a
                    className="primary-btn toggle"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}>
                    Регистрация
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Вход</h3>
                <form className="row login_form" onSubmit={handleSubmit(onSubmit)} id="contactForm">
                  <div className="col-md-12 form-group">
                    <input
                      {...register('username', {
                        required: true,
                      })}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Имя пользователя"
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
                      placeholder="Пароль"
                    />
                    {serverErrors?.detail && (
                      <p className="form-errors">Неверный пароль или логин</p>
                    )}
                  </div>

                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="primary-btn">
                      Войти
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
