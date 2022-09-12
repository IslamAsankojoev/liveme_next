import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setToken } from '../../redux/slices/userSlice.js';
import { Header, Footer, MobileCart } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice.js';
import lodash from 'lodash';

export default function AuthProvider({ auth, children, token }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (lodash.isArray(cart)) {
      dispatch(setCart(cart));
    }
    dispatch(setLoggedIn(auth));
    dispatch(setToken(token));
  }, [auth]);
  return (
    <>
      <Header />
      <div>{children}</div>
      <MobileCart />
      <Footer />
    </>
  );
}
