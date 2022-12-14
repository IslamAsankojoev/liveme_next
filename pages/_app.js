import App from 'next/app'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Provider } from 'react-redux'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Layout } from '../components/index'
import store from '../redux/store'
import '../scss/css/bootstrap.css'
import '../scss/css/font-awesome.min.css'
import '../scss/css/ion.rangeSlider.css'
import '../scss/css/ion.rangeSlider.skinFlat.css'
import '../scss/css/magnific-popup.css'
import '../scss/css/main.css'
import '../scss/css/nice-select.css'
import '../scss/css/nouislider.min.css'
import '../scss/css/themify-icons.css'
import '../scss/global.scss'

const MyApp = ({ Component, pageProps }) => {
	return (
		<SnackbarProvider maxSnack={3}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</SnackbarProvider>
	)
}

export default MyApp
