import { Provider } from 'react-redux';
import App from 'next/app';
import store from '../redux/store';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { AuthProvider } from '../components/index';
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
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '../dev';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
          <Component {...pageProps} />
        </DevSupport>
      </AuthProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
