import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
import { useRouter } from 'next/router.js';
import { useSelector } from 'react-redux';
export const Product = ({ data }) => {
  const { push, query, pathname } = useRouter();

  React.useEffect(() => {
    push({
      pathname,
      query: {
        ...query,
        locale: localStorage.getItem('lang'),
      },
    });
  }, []);

  return <>{data && <SingleProduct {...data} />}</>;
};

export default Product;

Product.getInitialProps = async (ctx) => {
  const locale = ctx.query.locale || 'ru';
  let res = await axios.get(`${process.env.SERVER_DOMAIN}/api/products/${ctx.query.id}`, {
    headers: {
      'Accept-Language': locale,
    },
  });
  return { data: res.data };
};
