import React from 'react';
import { useSelector } from 'react-redux';
// import Image from 'next/image';

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
                  <img className="img-fluid w-100" src="/3 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">
                      {(lang === 'ru' && 'Аромат') ||
                        (lang === 'en' && 'Aroma') ||
                        (lang === 'kg' && 'Аромат') ||
                      (lang === 'tr' && 'Oda kokusu')}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  {/* <img className="img-fluid w-100" src="static/img/1 (1).webp" alt="" /> */}
                  <img className="img-fluid w-100" src="/1 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">
                        {(lang === 'ru' && 'Косметика') ||
                        (lang === 'en' && 'Cosmetic') ||
                        (lang === 'kg' && 'Косметика') ||
                        (lang === 'tr' && 'Kozmetik')}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="/5 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">

                        {(lang === 'ru' && 'Комнатный спрей') ||
                        (lang === 'en' && ' Room spray') ||
                        (lang === 'kg' && 'Бөлмө спрей') ||
                        (lang === 'tr' && 'Oda spreyi')}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="/4 (1).webp" alt="" />
                  <div className="deal-details">
                    <h6 className="deal-title">
                        {(lang === 'ru' && 'Парфюм') ||
                        (lang === 'en' && ' Parfum') ||
                        (lang === 'kg' && 'Атыр') ||
                        (lang === 'tr' && 'Parfüm')}
                    </h6>
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
