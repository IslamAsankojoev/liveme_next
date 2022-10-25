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
          .then(({data}) => {
              let {password, ...user} = data
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
    <Header userServerSideData={userServerSideData}/>
      <>{children}</>
      <Mobilenavigate />
      <Footer />
    </>
  );
}
