import React from 'react';

export default function CategorySection() {
  return (
    <section className="category-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/category/c1.jpg" alt="" />
                  <a href="static/img/category/c1.jpg" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/category/c2.jpg" alt="" />
                  <a href="static/img/category/c2.jpg" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/category/c3.jpg" alt="" />
                  <a href="static/img/category/c3.jpg" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Product for Couple</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <img className="img-fluid w-100" src="static/img/category/c4.jpg" alt="" />
                  <a href="static/img/category/c4.jpg" className="img-pop-up" target="_blank">
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-deal">
              <div className="overlay"></div>
              <img className="img-fluid w-100" src="static/img/category/c5.jpg" alt="" />
              <a href="static/img/category/c5.jpg" className="img-pop-up" target="_blank">
                <div className="deal-details">
                  <h6 className="deal-title">Sneaker for Sports</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
