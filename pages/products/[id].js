import React from 'react';
import { SingleProduct } from '../../components/index';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoading } from '../../redux/slices/loaderSlice';


export const Product = ({ id }) => {
  const [data, setData] = React.useState(null);
  const locale = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoading(true));
    axios.get(
      `${process.env.SERVER}/api/products/${id}/`,
      {
        headers: {
          'Accept-Language': locale,
        },
      },
    ).then((res) => {
      setData(res.data);
    }).finally(() => {
      dispatch(setLoading(false));
    });
  }, []);
  return <>{data ? <SingleProduct {...data} /> : null}</>;
};

export default Product;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;

  return {
    props: {
      id,
    },
  };
}
