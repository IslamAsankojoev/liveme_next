import React from 'react';
import { useSelector } from 'react-redux';
import { Empty, ProductBlock, BannerArea } from '../components';
import wishlistText from '../collections/wishlist/wishlistCollection.json';

export default function Wishlist() {
  const items = useSelector((state) => state.wish.items);
  const lang = useSelector((state) => state.lang.lang);
  return (
    <>
      <BannerArea title={wishlistText.page_title} path={'/wishlist'} />

      <section className="cart_area owl-carousel active-product-area section_gap">
        <div className="single-product-slider">
          <div className="container">
            {items.length > 0 && (
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="section-title">
                    <br />
                    <br />
                    <h1>{wishlistText.page_title[lang]}</h1>
                  </div>
                </div>
              </div>
            )}
            {items.length > 0 ? (
              <div className="row">
                {items.length > 0 && items.map((item) => <ProductBlock key={item.id} {...item} />)}
              </div>
            ) : (
              <Empty title={wishlistText.empty.title} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /*<ProductBlock className="col-lg-3 col-md-6 col-sm-6 col-6" key={item.id} {...item}/>*/
}
