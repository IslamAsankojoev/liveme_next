import { Provider } from 'react-redux';
import store from '../redux/store';
import React from 'react';
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
import { SnackbarProvider } from 'notistack';

const App = ({ Component, pageProps }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
