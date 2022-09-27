import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function CategorySection() {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <section className="category-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <Image className="img-fluid w-100" layout="fill" src="/3 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">Sneaker for Sports</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  {/* <img className="img-fluid w-100" src="static/img/1 (1).webp" alt="" /> */}
                  <Image className="img-fluid w-100" layout="fill" src="/1 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">
                      {lang === 'ru' && 'Спортивная обувь'}
                      {lang === 'en' && 'Sneaker for Sports'}
                      {lang === 'kg' && 'Спорттык ачык'}
                      {lang === 'tr' && 'Sport ayollar'}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <Image className="img-fluid w-100" layout="fill" src="/5 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">Product for Couple</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <Image className="img-fluid w-100" layout="fill" src="/4 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">Sneaker for Sports</h6>
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
