import { Provider } from 'react-redux';
import store from '../redux/store';
import React from 'react';
import App from "next/app"
import { Layout } from '../components/index';
import '../scss/css/bootstrap.css';
import '../scss/css/font-awesome.min.css';
import '../scss/css/themify-icons.css';
import '../scss/css/nice-select.css';
import '../scss/css/nouislider.min.css';
import '../scss/css/ion.rangeSlider.css';
import '../scss/css/ion.rangeSlider.skinFlat.css';
import '../scss/css/magnific-popup.css';
import '../scss/css/main.css';
import '../scss/global.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from 'notistack';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SnackbarProvider>
  );
};

//MyApp.getInitialProps = async (appContext) => {
//    const appProps = await App.getInitialProps(appContext)
//    const auth = parseCookies(appContext).access_token;
//        let user = null
//        if (auth) {
//            axios
//            .get(`${process.env.SERVER}/api/users/me/`, {
//                headers: {
//                    Authorization: 'Bearer ' + auth,
//                },
//            })
//            .then((res) => {
//                user = res.data
//            });
//        }
//
//    return { ...appProps, userServerSideData: user }
//}

export default MyApp;
//export async function getServerSideProps(ctx) {
//    const auth = parseCookies(ctx).access_token;
//    let user = null
//    if (auth) {
//        axios
//        .get(`${process.env.SERVER}/api/users/me/`, {
//            headers: {
//                Authorization: 'Bearer ' + auth,
//            },
//        })
//        .then((res) => {
//            console.log(res)
//        });
//    }
//    return {
//        props: {
//            userServerSideData: user,
//        },
//    };
//}