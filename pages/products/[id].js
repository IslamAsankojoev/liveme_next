import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
export const Product = ({ data }) => {
  return <>{data && <SingleProduct {...data} />}</>;
};

export default Product;

export async function getServerSideProps(ctx) {
  let res = await axios.get(`${process.env.SERVER_DOMAIN}/api/products/${ctx.params.id}`);
  return {
    props: { data: res.data },
  };
}
