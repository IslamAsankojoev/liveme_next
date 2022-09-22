import React from 'react';
import { ProductBlock, SidebarCategory, Pagination } from '../components/index';
import axios from 'axios';
import lodash from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';

const page_size = 100;

export default function Shop({ data }) {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const [previous, setPrevious] = React.useState(null);
  const [next, setNext] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(setProducts(data.results));
    setNext(data.next);
    setPrevious(data.previous);
    setCount(data.count);
    console.log(data);
  }, []);

  const handleNext = async () => {
    if (next) {
      await axios.get(next).then((res) => {
        dispatch(setProducts(res.data.results));
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setCount(res.data.count);
      });
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevious = async () => {
    if (previous) {
      await axios.get(previous).then((res) => {
        dispatch(setProducts(res.data.results));
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setCount(res.data.count);
      });
      setPage((prev) => prev - 1);
    }
  };

  const handlePage = async (page_n) => {
    await axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/?page=${page_n}&page_size=${page_size}`)
      .then((res) => {
        dispatch(setProducts(res.data.results));
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setCount(res.data.count);
      });
    setPage(page_n);
  };

  React.useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Shop Category page</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">
                  Shop<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Fashon Category</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <SidebarCategory />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <Pagination
                page={page}
                count={count}
                next={next}
                previous={previous}
                handlePrevious={handlePrevious}
                page_size={page_size}
                handlePage={handlePage}
                handleNext={handleNext}
              />
            </div>
            <section className="lattest-product-area pb-40 category-list">
              <br />
              <div className="row">
                {!lodash.isEmpty(products) &&
                  products.map((item) => {
                    return (
                      <ProductBlock className="col-lg-4 col-md-6 col-6" key={item.id} {...item} />
                    );
                  })}
              </div>
              <br />
            </section>
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <Pagination
                page={page}
                count={count}
                next={next}
                previous={previous}
                handlePrevious={handlePrevious}
                page_size={page_size}
                handlePage={handlePage}
                handleNext={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

// export async function getServerSideProps() {}

// getInitialProps
Shop.getInitialProps = async () => {
  let res = await axios
    .get(`${process.env.SERVER_DOMAIN}/api/products/?page_size=${page_size}`)
    .then((res) => {
      return res;
    });
  return { data: res.data };
};
