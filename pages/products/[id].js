import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
import { useRouter } from 'next/router.js';
import { useSelector } from 'react-redux';
import { parseCookies } from 'nookies';

export const Product = ({ data }) => {
  return <>{data && <SingleProduct {...data} />}</>;
};

export default Product;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  const locale = cookies.NEXT_LOCALE || 'ru';
  let { data = [] } = await axios.get(
    `${process.env.SERVER_DOMAIN}/api/products/${ctx.params.id}`,
    {
      headers: {
        'Accept-Language': locale,
      },
    },
  );
  return {
    props: {
      data,
    },
  };
}
