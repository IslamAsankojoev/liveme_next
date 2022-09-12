import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

export default function ProductBlock({ className, id, title, imageUrl, price }) {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addItem({ id, title, imageUrl, price }));

  return (
    <div className={className}>
      <div className="single-product">
        <Link href={`products/${id}`}>
          <a>
            <img className="img-fluid" src={imageUrl} alt="" />
          </a>
        </Link>
        <div className="product-details">
          <Link href={`products/${id}`}>
            <a>
              <h6>{title}</h6>
            </a>
          </Link>
          <div className="price">
            <h6>{price} сом</h6>
            <h6 className="l-through">{250} сом</h6>
          </div>
          <div className="prd-bottom">
            <button onClick={addToCart} className="primary-btn button-add">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
