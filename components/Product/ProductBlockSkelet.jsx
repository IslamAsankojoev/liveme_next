import React from 'react';
import Link from 'next/link';
import style from './ProductBlock.module.scss';
import Image from 'next/image';

export default function ProductBlock() {
  return (
    <div className={` ${style.wrapper}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/}`}>
          <a>
            <Image
              src={'/static/img/ıhlamur.webp'}
              alt="Picture of the author"
              width={'100%'}
              height={250}
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
