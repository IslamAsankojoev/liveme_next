import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
import { useRouter } from 'next/router';
import { headers } from '../../config.js';

export const Product = ({ data }) => {
  console.log(data);
  return <SingleProduct id={data.id} {...data.data.attributes} />;
};

Product.getInitialProps = async (ctx) => {
  let res = await axios.get(`http://localhost:1337/api/products/${ctx.query.id}`, { headers });
  return { data: res.data };
};

export default Product;
