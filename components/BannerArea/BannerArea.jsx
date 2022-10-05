import React from 'react';
import { home } from '../../public/collections/home/homeCollection';
import { useSelector } from 'react-redux';

const BannerArea = ({ title = 'Страница', path = '#' }) => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <section className="banner-area organic-breadcrumb">
      <div className="container">
        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
          <div className="col-first">
            <h1>{title[lang] || title}</h1>
            <nav className="d-flex align-items-center">
              <a href="/">
                {home.page_title[lang]}
                <span className="lnr lnr-arrow-right"></span>
              </a>
              <a href={path}>{title[lang] || title}</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerArea;
