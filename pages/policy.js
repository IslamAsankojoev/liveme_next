import React from 'react'

import { BannerArea, Policy } from '@/components/index'

export default function PolicyPage() {
	return (
		<>
			<BannerArea title={'Privacy Policy'} path={'/policy'} />
			<div className="container">
				<Policy />
			</div>
		</>
	)
}
