import React from 'react';
import { Header, Footer, Login, Register } from '../index';
export default function LoginRegisterPage() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Вход / Регистрация</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Главная<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Вход / Регистрация</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />}
    </>
  );
}
