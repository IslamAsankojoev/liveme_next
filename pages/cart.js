import React from 'react';
import Link from 'next/link.js';
import { ItemBlock, BannerArea } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { Empty } from '../components';
import cartText from '../collections/cart/cartCollection.json';

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <BannerArea title={cartText.page_title} />

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
            <Empty title={cartText.empty.title} />
          )}
        </div>
      </section>
    </>
  );
}
