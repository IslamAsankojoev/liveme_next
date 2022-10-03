import React from 'react';
import contactText from '../collections/contacts/contactCollection.json';
import texts from '../collections/texts.json';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { BannerArea } from '../components';

function Contact() {
  const [loaded, setloaded] = React.useState(true);
  const lang = useSelector((state) => state.lang.lang);

  return (
    <>
      <BannerArea title={contactText.page_title} path={'/contact'} />

      <section className="map">
        <div className="container">
          <br />
          <br />
          <br />
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A672753bef7046eafc75c8229bcaea95324497fbd58ee12953e2e59448ab55af2&amp;source=constructor"
            width="100%"
            height="419"
            frameBorder="0"
            style={{
              visibility: loaded ? 'visible' : 'hidden',
            }}></iframe>
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
                  <h6>{contactText.info.country[lang]}</h6>
                  <p>{contactText.info.region[lang]}</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="#">{contactText.info.phone}</a>
                  </h6>
                  <p>{contactText.info.schedule}</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="#">{contactText.info.email}</a>
                  </h6>
                  <p>{contactText.info.email_text[lang]}</p>
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
                      placeholder={contactText.form.name[lang]}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder={contactText.form.email[lang]}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder={contactText.form.subject[lang]}
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
                      placeholder={contactText.form.message[lang]}></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button type="submit" value="submit" className="primary-btn">
                    {contactText.form.send[lang]}
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
