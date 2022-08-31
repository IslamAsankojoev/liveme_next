import React from 'react';
import axios from 'axios';
import { headers } from '../config.js';
import {
  Header,
  BannerSection,
  FeaturesSection,
  CategorySection,
  ProductLoopSection,
  ExclusiveDealSection,
  BrandSection,
  RelatedProductLoopSection,
} from '../components/index';
import { setProducts } from '../redux/slices/productSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const Home = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  const params = {
    locale: 'ru',
  };
  React.useEffect(() => {
    dispatch(setProducts(data));
  }, []);
  return (
    <>
      <Header />
      <BannerSection />
      <FeaturesSection />
      <CategorySection />
      <ProductLoopSection />
      <ExclusiveDealSection />
      <BrandSection />
      <RelatedProductLoopSection />
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await axios.get(`http://localhost:1337/api/products`, {
    headers,
  });
  return { data: res.data.data };
};

export default Home;
