import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice.js';
import { Header, Footer, ThankYou, Mobilenavigate } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice.js';
import lodash from 'lodash';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setLang } from '../../redux/slices/langSlice.js';
import { setWish } from '../../redux/slices/wishSlice.js';

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
    dispatch(setLang(localStorage.getItem('lang')));
    dispatch(setWish(JSON.parse(localStorage.getItem('wish')) || []));
    dispatch(setCart(JSON.parse(localStorage.getItem('cart')) || []));
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
      <Mobilenavigate />
      <ThankYou />
      <Footer />
    </>
  );
}
