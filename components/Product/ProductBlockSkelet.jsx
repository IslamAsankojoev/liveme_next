import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import axios from 'axios';
import style from './ProductBlock.module.scss';
import { ProductCorusel } from '../index';

export default function ProductBlock() {
  return (
    <div className={` ${style.wrapper}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/}`}>
          <a>
            <img
              className="img-fluid"
              width="100%"
              height={250}
              src="static/img/loadingProduct.png"
              alt=""
            />
          </a>
        </Link>
        <div className={`product-details ${style.details}`}>
          <Link href={`products/}`}>
            <a>
              <p className={style.title}>Товар</p>
            </a>
          </Link>
          <span className={style.buy}>
            <div className={`price ${style.price}`}>
              <h6>{'цена'} сом</h6>
            </div>
            <div className="prd-bottom">
              <button className="primary-btn button-add">{'В корзину'}</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
