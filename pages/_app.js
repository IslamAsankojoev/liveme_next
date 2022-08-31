import { Provider } from 'react-redux';
import '../scss/global.scss';
import store from '../redux/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
