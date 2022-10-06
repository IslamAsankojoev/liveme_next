import React from 'react';
import { Header, Footer, Profile } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../redux/slices/userSlice.js';
import { useRouter } from 'next/router';
import { profileText } from '../public/locales/profile/registerCollection';
import { BannerArea } from '../components';
import { parseCookies } from 'nookies';

export default function profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <>
      <BannerArea title={profileText.profile.info.title} path={'/profile'} />
      <br />
      <br />
      <br />
      <Profile />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const auth = parseCookies(ctx).access_token;
  if (!auth) {
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
