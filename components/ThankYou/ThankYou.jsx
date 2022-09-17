import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHide } from '../../redux/slices/thankYouSlice.js';
import style from './ThankYou.module.scss';

export default function ThankYou() {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.thankYou);


  const closeOverlay = ()=>{
    setHide()
    window.location.href = "/"
  }
  return (
    <>
      <div
          onClick={closeOverlay}
          className={`${style.overlay} animated ${!visible && style.hide}`}>
        <div className={style.wrapper}>
          <span className={style.close}>
            <svg

              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </span>
          <h3 className={style.title}>Заказ успешно оформлен</h3>
          <p className={style.text}>Приходите к нам еще {user?.username}</p>
        </div>
        <div> </div>
      </div>
    </>
  );
}
