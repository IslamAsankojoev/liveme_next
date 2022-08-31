import React from 'react';
import { Header, Footer } from '../components/index';
import Link from 'next/link.js';

export default function Cart() {
  return (
    <>
      <Header />
      {/* <!-- Start Banner Area --> */}
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Корзина</h1>
              <nav class="d-flex align-items-center">
                <Link href="/">
                  <a>
                    Home<span class="lnr lnr-arrow-right"></span>
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
      <section class="cart_area">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Товар</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="static/img/cart.jpg.png" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button">
                          <i class="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button">
                          <i class="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="static/img/cart.jpg.png" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button">
                          <i class="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button">
                          <i class="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="static/img/cart.jpg.png" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button">
                          <i class="lnr lnr-chevron-up"></i>
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button">
                          <i class="lnr lnr-chevron-down"></i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Сумма</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr class="out_button_area">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div class="checkout_btn_inner d-flex align-items-center">
                        <a class="gray_btn" href="#">
                          Вернуться в магазин
                        </a>
                        <a class="primary-btn" href="#">
                          Заказать
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
