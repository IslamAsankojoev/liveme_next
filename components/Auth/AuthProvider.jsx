import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { Header, Footer, ThankYou, Mobilenavigate } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setLang } from '../../redux/slices/langSlice';
import { setWish } from 'redux/slices/wishSlice';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { pathname, asPath, push, replace, query, locale } = useRouter();

  React.useEffect(() => {
    const doMagic = () => {
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
      dispatch(setLang(locale));
      dispatch(setWish(JSON.parse(localStorage.getItem('wish')) || []));
      dispatch(setCart(JSON.parse(localStorage.getItem('cart')) || []));
      console.log(12);
    };

    doMagic();
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
