import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice.js';
import { Header, Footer, MobileCart, ThankYou } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice.js';
import lodash from 'lodash';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setLang } from '../../redux/slices/langSlice.js';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { pathname, push, query } = useRouter();

  React.useEffect(() => {
    let { access_token } = parseCookies();
    async function getAccess() {
      axios
        .get(`${process.env.SERVER_DOMAIN}/api/users/me`, {
          headers: {
            Authorization: 'Bearer ' + access_token,
          },
        })
        .then((res) => {
          dispatch(setLoggedIn(res.data));
        });
    }
    async function setUser() {
      try {
        if (access_token) {
          await getAccess();
        }
      } catch (err) {
        window.location.href = '/register';
      }
    }
    setUser();
    const cart = JSON.parse(localStorage.getItem('cart'));
    dispatch(setLang(localStorage.getItem('lang')));

    if (lodash.isArray(cart)) {
      dispatch(setCart(cart));
    }
    push({
      pathname,
      query: {
        ...query,
        locale: localStorage.getItem('lang'),
      },
    });
  }, []);

  return (
    <>
      <Header />
      <>{children}</>
      <ThankYou />
      <MobileCart />
      <Footer />
    </>
  );
}
