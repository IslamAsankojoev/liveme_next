import React from 'react';
import Image from 'next/image';
import Delivery from '../../scss/static/img/features/f-icon1.png';
import Support from '../../scss/static/img/features/f-icon2.png';
import Payment from '../../scss/static/img/features/f-icon3.png';
import Return from '../../scss/static/img/features/f-icon4.png';
import { home } from '../../public/locales/home/homeCollection.js';
import { useSelector } from 'react-redux';

export default function FeaturesSection() {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <section className="features-area section_gap">
      <div className="container">
        <div className="row features-inner">
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <Image src={Delivery} width={32} height={26} />
                {/* <img src="static/img/features/f-icon1.png" alt="" /> */}
              </div>
              <h6>{home.featuresArea.delivery.title[lang]}</h6>
              <p>{home.featuresArea.delivery.text[lang]}</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                {/* <img src="static/img/features/f-icon2.png" alt="" />
                 */}
                <Image src={Support} width={32} height={26} />
              </div>
              <h6>{home.featuresArea.return.title[lang]}</h6>
              <p>{home.featuresArea.return.text[lang]}</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                {/* <img src="static/img/features/f-icon3.png" alt="" /> */}
                <Image src={Payment} width={32} height={26} />
              </div>
              <h6>{home.featuresArea.support.title[lang]}</h6>
              <p>{home.featuresArea.support.text[lang]}</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                {/* <img src="static/img/features/f-icon4.png" alt="" /> */}
                <Image src={Return} width={32} height={26} />
              </div>
              <h6>{home.featuresArea.payment.title[lang]}</h6>
              <p>{home.featuresArea.payment.text[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
