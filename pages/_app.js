import { Provider } from 'react-redux';
import '../scss/global.scss';
import App from 'next/app';
import store from '../redux/store';
import getUser from '../helper/getUser.js';
import React from 'react';
import { AuthProvider } from '../components/index';
import {parseCookies} from "nookies";

export default function MyApp({ Component, pageProps, setAuth }) {

  return (
    <Provider store={store}>
      <AuthProvider auth={setAuth}>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const auth = await getUser();
  return { ...appProps,  setAuth: auth.props.access_token};
};
