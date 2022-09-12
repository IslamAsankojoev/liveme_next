import React from 'react';
import axios from 'axios';
import {
  BannerSection,
  FeaturesSection,
  CategorySection,
  ProductLoopSection,
  ExclusiveDealSection,
  BrandSection,
  RelatedProductLoopSection,
} from '../components/index';
import { setProducts } from '../redux/slices/productSlice.js';
import { useDispatch } from 'react-redux';

const Home = ({ data }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setProducts(data));
    console.log(data);
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

export async function getStaticProps() {
  let { data } = await axios.get(`${process.env.DOMAIN}/api/products`, {
    headers: {
      Authorization: 'Bearer ' + process.env.TOKEN,
    },
  });
  console.log(data);
  return { props: { data: data.data } };
}
