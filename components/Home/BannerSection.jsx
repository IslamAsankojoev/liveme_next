import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice.js';

export default function BannerSection() {
  const lang = useSelector((state) => state.lang.lang);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  return (
    <section className="banner-area">
      <div className="container">
        <div
          className="row fullscreen align-items-center justify-content-start"
          style={{ height: 80 + 'vh' }}>
          <div className="col-lg-12">
            <div className="active-banner-slider owl-carousel">
              <div className="row single-slide align-items-center d-flex">
                <div className="col-lg-5 col-md-6">
                  <div className="banner-content">
                    <h1>
                      {lang === 'ru' && 'Самые лучшие'}
                      {lang === 'en' && 'The best'}
                      {lang === 'tr' && 'En iyi'}
                      {lang === 'kg' && 'Ең жақсы'}
                      <br />
                      {lang === 'ru' && 'Коллекции'}
                      {lang === 'en' && 'Collections'}
                      {lang === 'tr' && 'Koleksiyonlar'}
                      {lang === 'kg' && 'Коллекциялар'}
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(
                          addItem({
                            id: items[5]?.id,
                            title: items[5]?.title,
                            images: items[5]?.images,
                            price: items[5]?.regular_price,
                          }),
                        );
                      }}
                      className="add-bag d-flex align-items-center">
                      <a className="add-btn">
                        <svg
                          style={{ color: 'white' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bag-plus"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </a>
                      <span className="add-text text-uppercase">
                        {lang === 'ru' && 'Добавить в корзину'}
                        {lang === 'en' && 'Add to cart'}
                        {lang === 'tr' && 'Sepete ekle'}
                        {lang === 'kg' && 'Сепке кошуу'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    {/* <img className="img-fluid" src="static/img/banner/banner-img.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
