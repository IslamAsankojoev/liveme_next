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
import { setHide } from '../redux/slices/thankYouSlice.js';

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
  let { data } = await axios.get(`${process.env.DOMAIN}/api/products?populate=*`, {
    headers: {
      Authorization: 'Bearer ' + process.env.TOKEN,
    },
  });
  return { props: { data: data?.data } };
}
