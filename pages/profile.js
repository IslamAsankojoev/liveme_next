import React from 'react';
import { Header, Footer, Profile } from '../components/index';
import getUser from '../helper/getUser';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/slices/userSlice.js';

export default function profile() {
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
export async function getStaticProps() {
  return { props: {} };
}
