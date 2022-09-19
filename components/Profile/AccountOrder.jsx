import React from 'react';
import { OrderBlock } from '../../components/index';

export default function AccountOrder({ user }) {
  return (
    <>
      <h2 align="center">Заказы</h2>

      <div className="titles">
        <p className="number">Номер</p>
        <p className="created">Дата и время</p>
        <p className="price">Сумма</p>
        <p className="payment_method">Метод оплаты</p>
        <p className="phone">Контактный телефон</p>
      </div>
      {user?.orders?.map((item) => <OrderBlock {...item} />).reverse()}
    </>
  );
}
