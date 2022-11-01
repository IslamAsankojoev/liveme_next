import React, { FC } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import style from './ProductBlock.module.scss';
import { WishButton } from '../index';
import { toggleItem } from '../../redux/slices/wishSlice';
import { useRouter } from 'next/router.js';
import { RootSate } from '../../redux/store';
import { DiscountedPrice } from '../index';

interface ProductBlockProps {
  id: number;
  title: string;
  description: string;
  image: string;
  regular_price: number,
  sale_price: number,
  is_published: boolean,
  category: number,
  slug: string,
  className: string,
}

const ProductBlock: FC<ProductBlockProps> = ({ id, title, description, image, regular_price, sale_price, is_published, category, slug, className }) => {
  const [unmount, setUnmount] = React.useState(false);
  const inWishtList = useSelector((state: RootSate) => state.wish.items.find((item) => item.id === id));
  const price = sale_price || regular_price;
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const addToCart = () => dispatch(addItem({ id, title, description, image, price, is_published, category, slug, count: 1 }));
  const role = useSelector((state: RootSate) => state.user.data?.role);
  const addToWishList = () => {
    if (pathname === '/wishlist') {
      setUnmount(true);
      setTimeout(() => {
        dispatch(toggleItem({ id, title, description, image, regular_price, sale_price, is_published, category, slug }));
      }, 400);
    } else {
      dispatch(toggleItem({ id, title, description, image, regular_price, sale_price, is_published, category, slug }));
    }
  };

  return (
    <div className={`${className} ${style.wrapper} ${unmount && style.hide}`}>
      <div className={`single-product ${style.product}`}>
        <Link href={`products/${id}`}>
          <a className={style.imgLink}>
            <span className="next-img">
              <img src={image} alt="Picture of the author" />
            </span>
          </a>
        </Link>
        <div className={`product-details ${style.details}`}>
          <Link href={`products/${id}`}>
            <p className={style.title}>{title}</p>
          </Link>
          <span className={style.buy}>
            <div className={`price ${style.price}`}>
              <h6><DiscountedPrice price={sale_price || regular_price} /></h6>
              <h6 className={`${role ? 'sale' : 'sale'}`}>
                <span className={role ? style.s : ''}>{regular_price}сом</span>
              </h6>
            </div>
            <div className="prd-bottom">
              <button onClick={addToCart} className="primary-btn button-add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-cart-plus"
                  viewBox="0 0 16 16">
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </button>
            </div>
          </span>
        </div>
      </div>
      <WishButton isWished={inWishtList} onClick={addToWishList} />
    </div>
  );
}

export default ProductBlock;