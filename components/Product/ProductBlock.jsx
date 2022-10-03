import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import style from './ProductBlock.module.scss';
import StaticImage from '../../scss/static/img/ıhlamur.webp';
import { WishButton } from '../index';
import { toggleItem } from '../../redux/slices/wishSlice.js';
import { useRouter } from 'next/router.js';
import Image from 'next/future/image';

export default function ProductBlock({ className, id, title, cover, regular_price, sale_price }) {
  const [unmount, setUnmount] = React.useState(false);
  const inWishtList = useSelector((state) => state.wish?.items?.find((item) => item.id === id));
  const price = sale_price || regular_price;
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const added = cartItems.find((obj) => obj.id === id);
  const addToCart = () => dispatch(addItem({ id, title, price, cover }));
  const status = useSelector((state) => state.products.status);

  const addToWishList = () => {
    if (pathname === '/wishlist') {
      setUnmount(true);
      setTimeout(() => {
        dispatch(toggleItem({ id, title, cover, sale_price, regular_price }));
      }, 400);
    } else {
      dispatch(toggleItem({ id, title, cover, sale_price, regular_price }));
    }
  };


  return (
    <div className={`${className} ${style.wrapper} ${unmount && style.hide}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/${id}`}>
          <a className={style.imgLink}>
            <span className="next-img">
              <img src={cover} alt="Picture of the author" />
            </span>
          </a>
        </Link>
        <div className={`product-details ${style.details}`}>
          <Link href={`products/${id}`}>
            <p className={style.title}>{title}</p>
          </Link>
          <span className={style.buy}>
            <div className={`price ${style.price}`}>
              <h6>
                {status === 'success' ? price : 'цена'} <span>сом</span>
              </h6>
              {sale_price && (
                <h6 className="l-through">
                  {status === 'success' ? regular_price : 'скидка'} <span>сом</span>
                </h6>
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
      <WishButton isWished={inWishtList} onClick={addToWishList} />
    </div>
  );
}
