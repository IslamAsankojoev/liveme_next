import React from 'react';
import { Header, Footer } from '../components/index';
import Link from 'next/link.js';
import getUser from '../helper/getUser.js';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../redux/slices/userSlice';
import { ItemBlock } from '../components/index';

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Корзина</h1>
              <nav className="d-flex align-items-center">
                <Link href="/">
                  <a>
                    Home<span className="lnr lnr-arrow-right"></span>
                  </a>
                </Link>
                <a href="category.html">Корзина</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}

      {/* <!--================Cart Area =================--> */}
      <section className="cart_area">
        <div className="container">
          {items.length > 0 ? (
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Товар</th>
                      <th scope="col">Цена</th>
                      <th scope="col">Количество</th>
                      <th scope="col">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items && items.map((item) => <ItemBlock key={item.id} {...item} />)}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>Сумма</h5>
                      </td>
                      <td>
                        <h5>{totalPrice} сом</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="out_button_area">
                  <div className="checkout_btn_inner d-flex align-items-center">
                    <Link href="/">
                      <a className="gray_btn">Вернуться в магазин</a>
                    </Link>
                    <Link href="/checkout">
                      <a className="primary-btn">Заказать</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart-empty">
              <h2>Корзина пустая</h2>
              <p>
                Вероятней всего, вы не заказывали ещё товар.
                <br />
                Для того, чтобы заказать товар, перейди на главную страницу.
              </p>
              <br />
              <br />
              <Link href="/">
                <a className="gray_btn">Вернуться в магазин</a>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
