import React from 'react';

export default function BannerSection() {
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
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a className="add-btn" href="">
                        <span className="lnr lnr-cross"></span>
                      </a>
                      <span className="add-text text-uppercase">Add to Bag</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <img className="img-fluid" src="static/img/banner/banner-img.png" alt="" />
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
