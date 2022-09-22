import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import axios from 'axios';
import style from './ProductBlock.module.scss';
import { ProductCorusel } from '../index';

export default function ProductBlock({ className, id, title, images, regular_price, sale_price }) {
  const price = sale_price ? sale_price : regular_price;
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addItem({ id, title, images, price }));
  return (
    <div className={`${className} ${style.wrapper}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/${id}`}>
          <a>
            <img className="img-fluid" width="100%" height={250} src={images[0]?.image} alt="" />
          </a>
        </Link>
        <div className="product-details">
          <Link href={`products/${id}`}>
            <a>
              <p className={style.title}>{title}</p>
            </a>
          </Link>
          <span className={style.buy}>
            <div className={`price ${style.price}`}>
              <h6>{price} сом</h6>
              {sale_price && <h6 className="l-through">{regular_price} сом</h6>}
            </div>
            <div className="prd-bottom">
              <button onClick={addToCart} className="primary-btn button-add">
                В корзину
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
