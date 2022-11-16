import { parseCookies } from 'nookies'
import React from 'react'

import { profileText } from '../public/locales/profile/registerCollection'

import { BannerArea, Profile } from '@/components/index'

export default function profile({ prevPath }) {
	return (
		<>
			<BannerArea title={profileText.profile.info.title} path={'/profile'} />
			<br />
			<br />
			<br />
			<Profile prevPath={prevPath} />
		</>
	)
}

export async function getServerSideProps(ctx) {
	const auth = parseCookies(ctx).access_token
	if (!auth) {
		return {
			redirect: {
				destination: '/register',
				permanent: false,
			},
		}
	}
	return {
		props: {
			prevPath: ctx?.req?.headers?.referer || null,
		},
	}
}
