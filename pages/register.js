import { useRouter } from 'next/router.js';
import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Footer, LoginRegisterPage } from '../components/index';

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
