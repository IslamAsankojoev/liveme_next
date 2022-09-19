import { Provider } from 'react-redux';
import '../scss/global.scss';
import App from 'next/app';
import store from '../redux/store';
import getUser from '../helper/getUser.js';
import React from 'react';
import { AuthProvider } from '../components/index';
import {parseCookies} from "nookies";
import {Router} from "next/router";

export default function MyApp({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps}/>
      </AuthProvider>
    </Provider>
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx);
//   return { ...appProps};
// };
