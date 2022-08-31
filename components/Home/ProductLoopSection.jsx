import React from 'react';
import { ProductBlock } from '../index';
import { useSelector, useDispatch } from 'react-redux';

export default function ProductLoopSection() {
  const items = useSelector((state) => state.products.items);
  return (
    <section className="owl-carousel active-product-area section_gap">
      <div className="single-product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Latest Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {items &&
              items.map(({ id, attributes }) => {
                return (
                  <ProductBlock
                    className="col-lg-3 col-md-6 col-sm-6"
                    key={id}
                    {...attributes}
                    id={id}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* <!-- single product slide --> */}
      <div className="single-product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Coming Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {items &&
              items
                .map(({ id, attributes }) => {
                  return (
                    <ProductBlock
                      className="col-lg-3 col-md-6 col-sm-6"
                      key={id}
                      {...attributes}
                      id={id}
                    />
                  );
                })
                .reverse()}
          </div>
        </div>
      </div>
    </section>
  );
}
