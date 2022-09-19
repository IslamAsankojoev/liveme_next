import React from 'react';
import style from './AccountDetail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router.js';
export default function AccountDetail() {
  const [usernameIsAlreadyExist, setUsernameIsAlreadyExist] = React.useState('');
  const user = useSelector((state) => state.user.data);
  const router = useRouter();
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

      const res = await axios.put(
        `${process.env.SERVER_DOMAIN}/api/users/`,
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (err) {
      console.log(err);
      if (err.response.data.username) {
        setUsernameIsAlreadyExist(err.response.data.username[0]);
      }
    }
  };
  console.log(errors);

  return (
    <div className={style.detail}>
      <h2>Профиль</h2>
      <form
        className="row login_form"
        onSubmit={handleSubmit(onSubmit)}
        id="contactForm"
        noValidate="novalidate">
        <div className="col-md-12 form-group">
          <input
            {...register('username', { required: true })}
            type="text"
            onChange={handleChangeUsername}
            className="form-control"
            id="username"
            name="username"
            defaultValue={user.username}
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
            defaultValue={user.email}
            placeholder={`Ваш Email ${errors?.email?.type === 'required' ? '- обязательно' : ''}`}
          />
          {errors?.email?.type === 'pattern' && (
            <p className="form-errors">{errors.email.message}</p>
          )}
        </div>
        <div className="col-md-12 form-group">
          <button type="submit" value="submit" className="primary-btn">
            Изменить
          </button>
          {/* <a href="#">Забыли пароль?</a> */}
        </div>
      </form>
    </div>
  );
}
