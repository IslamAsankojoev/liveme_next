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
import { checkoutCollectionsText as checkoutText } from '../public/locales/checkout/checkoutCollections';
import { DevTool } from '@hookform/devtools';
import Image from 'next/image';
import { BannerArea } from '../components';

export default function Checkout() {
  const { totalPrice, totalItems, items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const delivery_price = 200;
  const lang = useSelector((state) => state.lang.lang);

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
      <BannerArea title={checkoutText.page_title} path={'/checkout'} />

      <section className="checkout_area section_gap">
        <div className="container">
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-6">
                <h3>{checkoutText.your_order[lang]}</h3>
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
                <h3>{checkoutText.order_details[lang]}</h3>
                <form onSubmit={handleSubmit(onSend)} className="row contact_form">
                  <div className="col-md-12 form-group p_star">
                    <input
                      {...register('username', {
                        required: true,
                      })}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder={checkoutText.form.name[lang]}
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
                      placeholder={checkoutText.form.phone[lang]}
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
                      placeholder={checkoutText.form.address[lang]}
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
                      placeholder={checkoutText.form.email[lang]}
                      defaultValue={user.data && user.data.email}
                    />
                    <p>{errors?.email?.message}</p>
                  </div>

                  <div className="col-md-12 order_box">
                    <ul className="list list_2">
                      <li>
                        <a href="#">
                          {checkoutText.details.sum[lang]} <span>{totalPrice} сом</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {checkoutText.details.delivery[lang]} <span>{delivery_price} сом</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {checkoutText.details.total[lang]}{' '}
                          <span>{totalPrice + delivery_price} сом</span>
                        </a>
                      </li>
                    </ul>
                    <br />
                    <p>
                      <b>{checkoutText.details.paymentMethod[lang]}</b>
                    </p>
                    <div className="payment_item">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio1"
                          defaultChecked
                          value={checkoutText.details.bank[lang]}
                        />
                        <label htmlFor="radio1">{checkoutText.details.bank[lang]}</label>
                        <div className="check"></div>
                      </div>
                    </div>
                    <div className="payment_item">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio2"
                          value={checkoutText.details.cash[lang]}
                        />
                        <label htmlFor="radio2">{checkoutText.details.cash[lang]} </label>
                        <div className="check"></div>
                      </div>
                    </div>
                    <div className="payment_item active">
                      <div className="radion_btn">
                        <input
                          {...register('payment_method')}
                          type="radio"
                          id="radio3"
                          value={checkoutText.details.card[lang]}
                        />
                        <label htmlFor="radio3">{checkoutText.details.card[lang]}</label>
                        <div className="check"></div>
                      </div>
                      <p>{checkoutText.details.additional[lang]} </p>
                    </div>
                    <div className="creat_account">
                      <input type="checkbox" defaultChecked id="f-option4" name="selector" />
                      <label htmlFor="f-option4">{checkoutText.details.terms[lang]} </label>
                      <a href="#"> terms & conditions*</a>
                    </div>
                    <button
                      className="primary-btn"
                      type="submit"
                      style={{ width: '100%', border: '0px solid' }}>
                      {checkoutText.details.button[lang]}
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
