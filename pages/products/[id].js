import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
import { useRouter } from 'next/router';
import { headers, apiUrl } from '../../config.js';

export const Product = ({ data }) => {
  return <>{data && <SingleProduct id={data.data.id} {...data.data.attributes} />}</>;
};

export default Product;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  let res = await axios.get(`${process.env.DOMAIN}/api/products/${ctx.params.id}`, { headers });
  return {
    props: { data: res.data },
  };
}
