import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';
import { DevTool } from '@hookform/devtools';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLoggedIn } from '../../redux/slices/userSlice.js';

export default function Register({ setToggle }) {
  const [usernameIsAlreadyExist, setUsernameIsAlreadyExist] = React.useState('');
  const user = useSelector((state) => state.user.data);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleChangeUsername = () => {
    setUsernameIsAlreadyExist('');
  };

  const onSubmit = async (data) => {
    try {
      setUsernameIsAlreadyExist('');

      const res = await axios.post(
        `${process.env.SERVER_DOMAIN}/api/users/`,
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(res);
      setCookie(null, 'access_token', res.data.token.access, {
        maxAge: 24 * 60 * 60,
      });
      dispatch(setLoggedIn(res.data));
      // router.push('/profile');
    } catch (err) {
      console.log(err);
      if (err.response.data.username) {
        setUsernameIsAlreadyExist(err.response.data.username[0]);
      }
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
                  <h4>Уже есть аккаунт?</h4>
                  <p>Найслайждайтесь нашими ароматами и духами высшего качества</p>
                  <a
                    className="primary-btn toggle"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}>
                    Вход
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Регистрация</h3>
                <form className="row login_form" onSubmit={handleSubmit(onSubmit)} id="contactForm">
                  <div className="col-md-12 form-group">
                    <input
                      {...register('username', { required: true })}
                      type="text"
                      onChange={handleChangeUsername}
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder={`Ваш логин ${
                        errors?.username?.type === 'required' ? '- обязательно' : ''
                      }`}
                    />
                    {usernameIsAlreadyExist && (
                      <p className="form-errors">Пользователь с таким именем уже существует</p>
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
                      placeholder={`Ваш Email ${
                        errors?.email?.type === 'required' ? '- обязательно' : ''
                      }`}
                    />

                    <p className="form-errors">
                      {errors?.email?.type === 'pattern' && errors.email.message}
                    </p>
                  </div>

                  <div className="col-md-12 form-group">
                    <input
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder={`Ваш пароль ${
                        errors?.password?.type === 'required' ? '- обязательно' : ''
                      }`}
                      {...register('password', {
                        required: true,
                        minLength: {
                          value: 8,
                          message: 'Пароль должен содержать не менее 8 символов',
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
                    <button type="submit" value="submit" className="primary-btn">
                      Зарегистрироваться
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