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
                        <span className="lnr lnr-cross"></span>
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
