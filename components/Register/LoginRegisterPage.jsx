import React from 'react';
import { Login, Register, BannerArea } from '../index';
import { profileText } from '../../pages/api/collections/profile/registerCollection.js';

export default function LoginRegisterPage() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
      <BannerArea title={profileText.page_title} path={'/register'} />
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </>
  );
}
