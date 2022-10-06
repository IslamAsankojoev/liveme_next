import { useRouter } from 'next/router.js';
import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Footer, LoginRegisterPage } from '../components/index';
import { parseCookies } from 'nookies';

export default function Register() {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  React.useEffect(() => {
    if (user.loggedIn) {
      router.push('/profile');
    }
  }, [user]);

  return (
    <>
      <LoginRegisterPage />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const auth = parseCookies(ctx).access_token;
  if (auth) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}
