import React from 'react';
import Link from 'next/link.js';
import { ItemBlock, BannerArea } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from '../components';
import { cartCollection } from '../public/locales/cart/cartCollection.js';

export default function Cart() {
  const lang = useSelector((state) => state.lang.lang);
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <BannerArea title={cartCollection.page_title} />

      <section className="cart_area">
        <div className="container">
          {items.length > 0 ? (
            <div className="cart_inner">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">{cartCollection.table.product[lang]}</th>
                      <th scope="col">{cartCollection.table.price[lang]}</th>
                      <th scope="col">{cartCollection.table.quantity[lang]}</th>
                      <th scope="col">{cartCollection.table.total[lang]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items && items.map((item) => <ItemBlock key={item.id} {...item} />)}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>{cartCollection.cartTotal[lang]}</h5>
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
                      <a className="gray_btn">{cartCollection.returnButton[lang]}</a>
                    </Link>
                    <Link href="/checkout">
                      <a className="primary-btn">{cartCollection.orderButton[lang]}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Empty title={cartCollection.empty.title} />
          )}
        </div>
      </section>
    </>
  );
}
