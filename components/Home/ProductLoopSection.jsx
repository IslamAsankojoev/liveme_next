import React from 'react';
import { ProductBlock } from '../index';
import { useSelector, useDispatch } from 'react-redux';
import lodash from 'lodash';

export default function ProductLoopSection() {
  const items = useSelector((state) => state.products.items);
  return (
    <section className="owl-carousel active-product-area section_gap">
      <div className="single-product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <br />
                <br />
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
              items
                .map(({ id, ...attributes }) => {
                  return (
                    <ProductBlock
                      className="col-lg-3 col-md-6 col-sm-6 col-6"
                      key={id}
                      {...attributes}
                      id={id}
                    />
                  );
                })
                .slice(0, 8)}
          </div>
        </div>
      </div>
    </section>
  );
}
