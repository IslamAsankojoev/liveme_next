import React from 'react';
import axios from 'axios';
import {
  ThankYou,
  BannerSection,
  FeaturesSection,
  CategorySection,
  ProductLoopSection,
  ExclusiveDealSection,
  BrandSection,
  RelatedProductLoopSection,
} from '../components/index';
import { setProducts } from '../redux/slices/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/`, {
        headers: {
          'Accept-Language': lang,
        },
      })
      .then(({ data }) => {
        dispatch(setProducts(data));
      });
  }, [lang]);

  return (
    <>
      <BannerSection />
      <FeaturesSection />
      <CategorySection />
      <ProductLoopSection />
      <ExclusiveDealSection />
      {/* <BrandSection /> */}
      {/* <RelatedProductLoopSection /> */}
    </>
  );
};

export default Home;
