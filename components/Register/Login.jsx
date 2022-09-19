import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { DevTool } from '@hookform/devtools';

export default function Login({ setToggle }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    git,
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
      window.location.href = window.location.origin + '/profile';
    } catch (err) {
      console.log('login error' + err);
    }
  };

  console.log(errors);
  return (
    <>
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <img className="img-fluid" src="static/img/login.jpg" alt="" />
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
                <form
                  className="row login_form"
                  onSubmit={handleSubmit(onSubmit)}
                  id="contactForm"
                  noValidate="noValidate">
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
