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
import { useDispatch } from 'react-redux';

const Home = ({ data }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);
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

export async function getServerSideProps(ctx) {
  const locale = ctx.query.locale || 'ru';
  let res = await axios.get(`${process.env.SERVER_DOMAIN}/api/products/`, {
    headers: {
      'Accept-Language': locale,
    },
  });
  return { props: { data: res.data } };
}

// export async function getStaticProps(ctx) {
//   const locale = ctx.locale || 'ru';
//   let res = await axios
//     .get(`${process.env.SERVER_DOMAIN}/api/products/`, {
//       headers: {
//         'Accept-Language': locale,
//       },
//     })
//     .then((res) => {
//       return res;
//     });
//   return { props: { data: res.data } };
// }
