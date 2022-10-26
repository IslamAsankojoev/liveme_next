import React from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer, Mobilenavigate } from '../../components/index';
import { parseCookies, setCookie } from 'nookies';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setCart } from '../../redux/slices/cartSlice';
import { setLang } from '../../redux/slices/langSlice';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { setWish } from '../../redux/slices/wishSlice';
import Head from 'next/head';

export default function AuthProvider({ children, userServerSideData }) {
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    setCookie(null, 'NEXT_LOCALE', parseCookies().NEXT_LOCALE || 'ru', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    const doMagic = () => {
      let { access_token } = parseCookies();
      async function getAccess(token) {
        axios
          .get(`${process.env.SERVER}/api/users/me/`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(({ data }) => {
            let { password, ...user } = data
            console.log(user)
            dispatch(setLoggedIn(user));
          });
      }
      async function setUser() {
        try {
          if (access_token) {
            await getAccess(access_token);
          }
        } catch (error) {
          console.log(error, 'error check cookies');
        }
      }
      setUser();
      dispatch(setLang(parseCookies().NEXT_LOCALE || 'ru'));
      dispatch(setWish(JSON.parse(localStorage.getItem('wish')) || []));
      dispatch(setCart(JSON.parse(localStorage.getItem('cart')) || []));
    };

    doMagic();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Livemeshop</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/livemeLogo1.png" />
      </Head>
      <Header userServerSideData={userServerSideData} />
      <>{children}</>
      <Mobilenavigate />
      <Footer />
    </>
  );
}
