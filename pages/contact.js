import React from 'react';

function Contact() {
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Контакты</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Контакты</a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <br />
          <br />
          <br />
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A672753bef7046eafc75c8229bcaea95324497fbd58ee12953e2e59448ab55af2&amp;source=constructor"
            width="100%"
            height="419"
            frameBorder="0"></iframe>
          <br />
          <br />
          <br />
        </div>
      </section>

      <br />
      <section className="contact_area section_gap_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>Кыргызстан, Бишкек</h6>
                  <p>Первомайский Район</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="#">+996 708 022 101</a>
                  </h6>
                  <p>Пн по Сб, с 9 до 6</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="#">support@colorlib.com</a>
                  </h6>
                  <p>Тех. поддержка всегда подскажет!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form className="row contact_form" id="contactForm">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Ваш email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Введите тему"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Ваше сообщение"></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button type="submit" value="submit" className="primary-btn">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div id="success" className="modal modal-message fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close">
                <i className="fa fa-close"></i>
              </button>
              <h2>Thank you</h2>
              <p>Your message is successfully sent...</p>
            </div>
          </div>
        </div>
      </div>

      <div id="error" className="modal modal-message fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close">
                <i className="fa fa-close"></i>
              </button>
              <h2>Sorry !</h2>
              <p>Something went wrong</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

export async function getServerSideProps() {
  return { props: {} };
}
