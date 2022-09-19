import React from 'react';
import { Header, Footer, SingleProduct } from '../../components/index';
import axios from 'axios';
import { useRouter } from 'next/router';
import { headers, apiUrl } from '../../config.js';


return <>{data && <SingleProduct id={data.id} {...data} />}</>

export default Product;

export async function getServerSideProps(ctx) {
  let res = await axios.get(`${process.env.DOMAIN}/api/products/${ctx.params.id}`, {});
  return {
    props: { data: res.data },
  };
}
