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

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/`, {
        headers: {
          'Accept-Language': localStorage.getItem('lang'),
        },
      })
      .then((res) => {
        setData(res.data);
      });
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

// export async function getServerSideProps(ctx) {
//   const locale = ctx.query.locale || 'ru';
//   let res = await axios.get(`${process.env.SERVER_DOMAIN}/api/products/`, {
//     headers: {
//       'Accept-Language': locale,
//     },
//   });
//   return { props: { data: res.data } };
// }
