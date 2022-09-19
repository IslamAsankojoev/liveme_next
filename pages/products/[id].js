import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
export const Product = ({ data }) => {
  return <>{data && <SingleProduct {...data} />}</>;
};

export default Product;

export async function getServerSideProps(ctx) {
  let res = await axios.get(`http://192.168.0.105:8000/api/products/${ctx.params.id}`);
  return {
    props: { data: res.data },
  };
}
