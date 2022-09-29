import React from 'react';
import { useSelector } from 'react-redux';
import { Empty, ProductBlock } from '../components/index.js';

export default function Wishlist() {
  const items = useSelector((state) => state.wish.items);
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Избранные</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Избранные</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="owl-carousel active-product-area section_gap">
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <br />
                  <br />
                  <h1>Избранные</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {items &&
                items
                  .map((item) => {
                    return (
                      <ProductBlock
                        className="col-lg-3 col-md-6 col-sm-6 col-6"
                        key={item.id}
                        {...item}
                      />
                    );
                  })
                  .slice(0, 8)}
              {items.length === 0 && <Empty />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
