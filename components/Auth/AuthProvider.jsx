import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { Header, Footer, ThankYou, Mobilenavigate } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice';
import { parseCookies, setCookie } from 'nookies';
import axios from 'axios';
import { useRouter } from 'next/router';
import { setLang } from '../../redux/slices/langSlice';
import { setWish } from '../../redux/slices/wishSlice';

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
          .get(`${process.env.SERVER_DOMAIN}/api/users/me/`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then((res) => {
            dispatch(setLoggedIn(res.data));
          });
      }
      async function setUser() {
        try {
          if (access_token) {
            await getAccess(access_token);
          }
        } catch (error) {
          console.log(err, 'error check cookies');
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
    <Header userServerSideData={userServerSideData}/>
      <>{children}</>
      <Mobilenavigate />
      <Footer />
    </>
  );
}
