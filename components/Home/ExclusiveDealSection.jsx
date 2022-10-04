import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { text } from '../../pages/api/collections/texts.js';

export default function ExclusiveDealSection() {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  return (
    <section className="exclusive-deal-area">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 no-padding exclusive-left">
            <div className="row clock_sec clockdiv" id="clockdiv">
              <div className="col-lg-12">
                <h1>Exclusive Hot Deal Ends Soon!</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
              <div className="col-lg-12">
                <div className="row clock-wrap">
                  <div className="col clockinner1 clockinner">
                    <h1 className="days">150</h1>
                    <span className="smalltext">Days</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="hours">23</h1>
                    <span className="smalltext">Hours</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="minutes">47</h1>
                    <span className="smalltext">Mins</span>
                  </div>
                  <div className="col clockinner clockinner1">
                    <h1 className="seconds">59</h1>
                    <span className="smalltext">Secs</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="primary-btn">
              Shop Now
            </a>
          </div>
          <div className="col-lg-6 no-padding exclusive-right">
            <div className="active-exclusive-product-slider">
              {/* <!-- single exclusive carousel --> */}
              <div className="single-exclusive-slider">
                <img className="img-fluid" src={items[5]?.cover} width="100%" alt="" />
                <div className="product-details">
                  <div className="price">
                    <h6>{items[5]?.regular_price} сом</h6>
                    <h6 className="l-through">210.00</h6>
                  </div>
                  <h4>{items[5]?.title}</h4>
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
                    className="add-bag d-flex align-items-center justify-content-center simple-btn">
                    <a className="add-btn" href="">
                      <span className="ti-bag"></span>
                    </a>
                    <button className="add-text text-uppercase">
                      {text.buttonAddToCart[lang].text}
                    </button>
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
