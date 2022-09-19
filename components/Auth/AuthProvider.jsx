import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setToken } from '../../redux/slices/userSlice.js';
import { Header, Footer, MobileCart, ThankYou } from '../../components/index';
import { setCart } from '../../redux/slices/cartSlice.js';
import lodash from 'lodash';
import {parseCookies} from "nookies";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function AuthProvider({ children, token }) {
  const dispatch = useDispatch();


  React.useEffect(() => {
      let { access_token, refresh_token} = parseCookies()
      async function getAccess(){
          axios.get('http://localhost:8000/api/users/me', {headers: {
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
