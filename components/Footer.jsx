import React from 'react';
import { useSelector } from 'react-redux';
import { text } from '../pages/api/collections/texts.js';

export default function Footer() {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <footer className="footer-area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>{text.footer.about.title[lang]}</h6>
              <p>{text.footer.about.subtitle[lang]}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>{text.footer.mailing.title[lang]}</h6>
              <p>{text.footer.mailing.subtitle[lang]}</p>
              <div className="" id="mc_embed_signup">
                <form className="form-inline">
                  <div className="d-flex flex-row">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder={text.footer.mailing.placeholder[lang]}
                      required=""
                      type="email"
                    />

                    <button className="click-btn btn btn-default">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                    {/* <div style="position: absolute; left: -5000px">
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabindex="-1"
                      value=""
                      type="text"
                    />
                  </div> */}

                    {/* <!-- <div className="col-lg-4 col-md-4">
                    <button className="bb-btn btn"><span className="lnr lnr-arrow-right"></span></button>
                  </div>  --> */}
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Наш инстаграм</h6>
              <ul className="instafeed d-flex flex-wrap">
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
                <li>
                  <img src="/static/img/ıhlamur.webp" alt="" />
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>{text.footer.social.title[lang]}</h6>
              <p>{text.footer.social.subtitle[lang]}</p>
              <div className="footer-social d-flex align-items-center">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
          <p className="footer-text m-0">
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            Copyright &copy; 2022 {text.footer.copyright.text[lang]}
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
