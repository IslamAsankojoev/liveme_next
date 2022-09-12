import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

export default function Login({ setToggle }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/login', { identifier: data.email, ...data });
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
                      {...register('email', {
                        required: true,
                      })}
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Ваш Email"
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
                      placeholder="Ваш пароль"
                    />
                  </div>

                  <div className="col-md-12 form-group">
                    <button type="submit" value="submit" className="primary-btn">
                      Войти
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
  );
}
