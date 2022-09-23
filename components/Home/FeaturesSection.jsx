import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="features-area section_gap">
      <div className="container">
        <div className="row features-inner">
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <img src="static/img/features/f-icon1.png" alt="" />
              </div>
              <h6>Secure Delivery</h6>
              <p>Secure Shipping on all order</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <img src="static/img/features/f-icon2.png" alt="" />
              </div>
              <h6>Return Policy</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <img src="static/img/features/f-icon3.png" alt="" />
              </div>
              <h6>24/7 Support</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
          {/* <!-- single features --> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <img src="static/img/features/f-icon4.png" alt="" />
              </div>
              <h6>Secure Payment</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
