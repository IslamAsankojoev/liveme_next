import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setToken } from '../../redux/slices/userSlice.js';
import { Header, Footer, MobileCart, ThankYou } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice.js';
import lodash from 'lodash';
import {parseCookies} from "nookies";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {Router} from "next/router";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

    // React.useEffect(() => {
    //     const doMagic = () => {
    //         console.log(12)
    //     }
    //     doMagic()
    //
    //     Router.events.on('routeChangeStart', doMagic); // add listener
    //
    //     return () => {
    //         Router.events.off('routeChangeStart', doMagic); // remove listener
    //     }
    // }, []);

  React.useEffect(() => {
      let { access_token } = parseCookies()
      async function getAccess(){
          axios.get('http://192.168.0.105:8000/api/users/me', {headers: {
                  Authorization: 'Bearer ' + access_token,
              }}).then((res)=>{
              dispatch(setLoggedIn(res.data));
          })
      }
      async function setUser(){
          try{
              if(access_token){
                  await getAccess()
              }
          }
          catch(err){
            window.location.href = '/register'
          }

      }
      setUser()

    const cart = JSON.parse(localStorage.getItem('cart'));
    if (lodash.isArray(cart)) {
      dispatch(setCart(cart));
    }
  }, [])
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
