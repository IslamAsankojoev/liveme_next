import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';
import sendMessage from '../bot';
import { setShow } from '../redux/slices/thankYouSlice.js';
import { useRouter } from 'next/router.js';
import lodash from 'lodash';
import { DevTool } from '@hookform/devtools';
import Image from 'next/image';

export default function Checkout() {
  const { totalPrice, totalItems, items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const delivery_price = 200;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const itemsText = items
    .map((item) => {
      return `\n\n${item?.title}\n${item?.count} шт - ${item?.price * item?.count} сом`;
    })
    .toString();

  const onSend = async (data) => {
    const teletext = `Имя - ${data?.username}\n\nНомер телефона - ${data?.phone}\nПочта - ${
      data?.email
    }\nАдрес - ${data?.address}\nМетод оплаты - ${
      data?.payment_method
    }\n\nТовары${itemsText}\n\nСумма: ${totalPrice + delivery_price}сом`;
    try {
      await axios.post(
        `${process.env.SERVER_DOMAIN}/api/orders/`,
        {
          client_name: data.username,
          client_address: data.address,
          client_phone: data.phone,
          client_email: data.email,
          products: items,
          payment_method: data.payment_method,
        },
        {
          headers: !lodash.isEmpty(user)
            ? {
                Authorization: 'Bearer ' + user.data.token.access,
              }
            : {},
        },
      );
    } catch (err) {
      console.log(err);
    }
    try {
      await sendMessage(teletext);
    } catch (err) {
      console.log(err);
    }
    await dispatch(clearCart());
    dispatch(setShow());
  };
  React.useEffect(() => {}, []);
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Оформление заказа</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Главная<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="single-product.html">Оформление</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout_area section_gap">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-6">
                <h3>Ваш заказ</h3>
                <div className="col-md-12 order_box">
                  {items &&
                    items.map((item) => {
                      return (
                        <div key={item.id} className="order_box-product">
                          <img src={item.cover} alt={item.title} style={{ background: 'white' }} />
                          <div className="order_box-info">
                            <Link href={`products/${item.id}`}>
                              <a className="title">{item.title}</a>
                            </Link>
                            <span>
                              <p>{item.price * item.count} сом</p>
                              <p>{item.count} шт.</p>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-lg-6">
                <h3>Детали заказа</h3>
                <form onSubmit={handleSubmit(onSend)} className="row contact_form">
                  <div className="col-md-12 form-group p_star">
                    <input
                      {...register('username', {
                        required: true,
                      })}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Ваше имя"
                      defaultValue={user.data && user.data.username}
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      {...register('phone', {
                        required: true,
                      })}
                      type="text"
                      className="form-control phoneMask"
                      name="phone"
                      inputMode="tel"
                      placeholder="Ваш номер"
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      {...register('address', {
                        required: true,
                      })}
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Ваш адрес"
                      defaultValue={user.data?.adress && user.data.adress}
                    />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      {...register('email', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Неверный адрес электронной почты',
                        },
                      })}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      inputMode="email"
                      placeholder="Ваш Email"
                      defaultValue={user.data && user.data.email}
                    />
                    <p>{errors?.email?.message}</p>
                  </div>

                  <div className="col-md-12 order_box">
                    <ul className="list list_2">
                      <li>
                        <a href="#">
                          Сумма <span>{totalPrice} сом</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Доставка <span>200 сом</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Итого <span>{totalPrice + delivery_price} сом</span>
                        </a>
                      </li>
                    </ul>
                    <br />
                    <p>Метод оплаты</p>
                    <div className="payment_item">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio1"
                          defaultChecked
                          value="Банковский счет"
                        />
                        <label htmlFor="radio1">Банковский счет</label>
                        <div className="check"></div>
                      </div>
                    </div>
                    <div className="payment_item">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio2"
                          value="Наличкой"
                        />
                        <label htmlFor="radio2">Наличкой</label>
                        <div className="check"></div>
                      </div>
                    </div>
                    <div className="payment_item active">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio3"
                          value="Картой"
                        />
                        <label htmlFor="radio3">Картой </label>
                        <div className="check"></div>
                      </div>
                      <p>
                        После оплаты картой или банковским переводом, в переводе добавьте номер
                        заказа чтобы мы могли быстрее найти ваш заказ.
                      </p>
                    </div>
                    <div className="creat_account">
                      <input type="checkbox" defaultChecked id="f-option4" name="selector" />
                      <label htmlFor="f-option4">Я прочитал </label>
                      <a href="#"> terms & conditions*</a>
                    </div>
                    <button
                      className="primary-btn"
                      type="submit"
                      style={{ width: '100%', border: '0px solid' }}>
                      Заказть
                    </button>
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
