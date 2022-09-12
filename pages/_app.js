import { Provider } from 'react-redux';
import '../scss/global.scss';
import App from 'next/app';
import store from '../redux/store';
import getUser from '../helper/getUser.js';
import React from 'react';
import { AuthProvider } from '../components/index';

export default function MyApp({ Component, pageProps, setAuth, token }) {
  return (
    <Provider store={store}>
      <AuthProvider auth={setAuth} token={token}>
        <Component {...pageProps} auth={setAuth} />
      </AuthProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const auth = await getUser(ctx.ctx);
  return { ...appProps, setAuth: auth.props.user, token: auth.props.token };
};
