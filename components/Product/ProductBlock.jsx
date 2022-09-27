import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import style from './ProductBlock.module.scss';
import Image from 'next/image';
import StaticImage from '../../scss/static/img/ıhlamur.webp';

export default function ProductBlock({ className, id, title, images, regular_price, sale_price }) {
  const { lang } = useSelector((state) => state.lang);
  const price = sale_price ? sale_price : regular_price;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const added = cartItems.find((obj) => obj.id === id);
  const addToCart = () => dispatch(addItem({ id, title, images, price }));
  const status = useSelector((state) => state.products.status);

  React.useEffect(() => {
    console.log(title);
  }, []);

  return (
    <div className={`${className} ${style.wrapper}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/${id}`}>
          <a>
            <Image src={StaticImage} alt="Picture of the author" />
          </a>
        </Link>
        <div className={`product-details ${style.details}`}>
          <Link href={`products/${id}`}>
            <a>
              <p className={style.title}>{title}</p>
            </a>
          </Link>
          <span className={style.buy}>
            <div className={`price ${style.price}`}>
              <h6>{status === 'success' ? price : 'цена'} сом</h6>
              {sale_price && (
                <h6 className="l-through">{status === 'success' ? regular_price : 'скидка'} сом</h6>
              )}
            </div>
            <div className="prd-bottom">
              <button onClick={addToCart} className="primary-btn button-add">
                {status === 'success' && added ? `В корзине ${added?.count} шт` : 'В корзину'}
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
