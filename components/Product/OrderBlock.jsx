import React from 'react';
import style from './OrderBlock.module.scss';

export default function OrderBlock({
  id,
  client_name,
  client_address,
  client_email,
  client_phone,
  products,
  created,
  payment_method,
}) {
  return (
    <>
      <div className={style.order_item}>
        <p className="number">
          <span>Номер заказа </span>#{id}
        </p>
        <p className="created">
          <span>Дата </span>
          {created}
        </p>
        <p className="price">
          <span>Сумма </span>
          {products
            .reduce((totalPrice, item) => totalPrice + item.price * item.count, 0)
            .toFixed(2)}{' '}
          сом
        </p>
        <p className="payment_method">
          <span>Метод оплаты </span>
          {payment_method}
        </p>
        <p className="phone">
          <span>Номер </span>
          {client_phone}
        </p>
      </div>
    </>
  );
}
