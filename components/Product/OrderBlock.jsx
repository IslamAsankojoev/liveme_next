import React from 'react';

export default function OrderBlock({
  id,
  clientName,
  clientAddress,
  clientEmail,
  clientPhone,
  products,
}) {
  return (
    <>
      <div className="order-block">
        <h3 className="number">#{id} - заказ</h3>
        {products.map((product) => {
          return (
            <>
              <p>{product.title}</p>
              <span>
                {product.count} шт - {product.price * product.count} сом
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}
