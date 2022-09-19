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

const Home = ({ data }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setProducts(data));
  }, []);
  return (
    <>
      <BannerSection />
      <FeaturesSection />
      <CategorySection />
      <ProductLoopSection />
      <ExclusiveDealSection />
      <BrandSection />
      {/* <RelatedProductLoopSection /> */}
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  let res = await axios.get(`${process.env.SERVER_DOMAIN}/api/products/`);
  return { props: { data: res.data } };
}
