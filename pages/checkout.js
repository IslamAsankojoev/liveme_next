import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';
import sendMessage from '../bot';
import { useRouter } from 'next/router.js';
import { text } from '../public/locales/texts';
import { checkoutCollectionsText as checkoutText } from '../public/locales/checkout/checkoutCollections';
import { BannerArea } from '../components';
import { useSnackbar } from 'notistack';
import { parseCookies } from 'nookies';

export default function Checkout() {
  const { totalPrice, totalItems, items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const delivery_price = 200;
  const lang = useSelector((state) => state.lang.lang);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: React.useMemo(() => {
      return user.data;
    }, [user]),
  });
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
      await axios
        .post(
          `${process.env.SERVER_DOMAIN}/api/orders/`,
          {
            client_name: data.username,
            client_address: data.address,
            client_phone: data.phone,
            client_email: data.email,
            payment_method: data.payment_method,
              user: user.data.id,
              order_status: 'pending'
          },
          user.loggedIn
            ? {
                headers: {
                  Authorization: `Bearer ${parseCookies().access_token}`,
                },
              }
            : null,
        )
        .then((res) => {
          if (res.status === 201) {
              items.forEach((el)=>{
                  axios
                  .post(
                          `${process.env.SERVER_DOMAIN}/api/orders/item/`,
                          {
                              product_count: el.count,
                              order: res.data.id,
                              product: el.id,
                          })
              })

          }
        }).then((resItems)=>{
            enqueueSnackbar(text.notifications.successOrder[lang], {
                variant: 'success',
                autoHideDuration: 3000,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                },
            });
            dispatch(clearCart());
            setTimeout(() => {
                if (parseCookies().access_token) {
                    router.push('/profile');
                } else {
                    router.push('/shop');
                }
            }, 2000);
        })
    } catch (error) {
      console.log(error, 'order error');
    }
    try {
      await sendMessage(teletext);
    } catch (error) {
      console.log(error, 'telegram send text error');
    }
  };

  React.useEffect(() => {
    reset(user.data);
  }, [user]);

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
                            <img src={item.image} alt={item.title} style={{ background: 'white' }} />
                          <div className="order_box-info">
                            <Link href={`/products/${item.id}`}>
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
                          value="Bank"
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
                          value="Cash"
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
                          value="Card"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
