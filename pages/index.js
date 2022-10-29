import React from 'react';
import axios from 'axios';
import {
  BannerSection,
  FeaturesSection,
  CategorySection,
  ProductLoopSection,
  ExclusiveDealSection,
  SliderMain
} from '../components/index';
import { setProducts } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER}/api/products/?page_size=8`, {
        headers: {
          'Accept-Language': lang,
        },
      })
      .then(({ data }) => {
        dispatch(setProducts(data.results));
      });
  }, [lang]);

  return (
    <>
      <SliderMain />
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
