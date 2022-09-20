import React from 'react';
import { Header, Footer, Profile } from '../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../redux/slices/userSlice.js';
import { useRouter } from 'next/router';

export default function profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const router = useRouter();

  React.useEffect(() => {
    if (!user.loggedIn) {
      router.push('/register');
    }
  }, [user]);
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Профиль</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Главная<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Личный кабинет</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Profile />
    </>
  );
}
