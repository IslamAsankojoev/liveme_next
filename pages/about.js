import React from 'react'

import { About, BannerArea } from '../components'

import { text } from '@/locales/texts'

const AboutUs = () => {
	return (
		<>
			<BannerArea title={text.header.menu[2].text} path={'/about'} />
			<div className="container">
				<About />
			</div>
		</>
	)
}
export default AboutUs
