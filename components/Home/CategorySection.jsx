import React from 'react';
import { useSelector } from 'react-redux';

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
                  <img className="img-fluid w-100" src="static/img/3 (1).webp" alt="" />
                  <a href="static/img/3 (1).webp" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/1 (1).webp" alt="" />
                  <a href="static/img/1 (1).webp" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">
                        {lang === 'ru' && 'Спортивная обувь'}
                        {lang === 'en' && 'Sneaker for Sports'}
                        {lang === 'kg' && 'Спорттык ачык'}
                        {lang === 'tr' && 'Sport ayollar'}
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/5 (1).webp" alt="" />
                  <a href="static/img/5 (1).webp" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Product for Couple</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/4 (1).webp" alt="" />
                  <a href="static/img/4 (1).webp" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="single-deal">
              <div className="overlay"></div>
              <img className="img-fluid w-100" src="static/img/5 (1).webp" alt="" />
              <a href="static/img/5 (1).webp" className="img-pop-up" target="_blank">
                <div className="deal-details">
                  <h6 className="deal-title">Sneaker for Sports</h6>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
