// @ts-nocheck
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

import { text } from '../public/locales/texts.js'
import paymentsLogo from '../public/payments_logo.png'

export default function Footer() {
	const lang = useSelector((state) => state.lang.lang)
	return (
		<footer className="footer-area section_gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<Link href="/about">
								<a>
									<h6>{text.footer.about.title[lang]}</h6>
								</a>
							</Link>
							<p>{text.footer.about.subtitle[lang]}</p>
							<Link href="/policy">
								<a
									style={{
										color: '#fff',
									}}
								>
									{lang === 'en' && 'Privacy Policy'}
									{lang === 'ru' && 'Политика конфиденциальности'}
									{lang === 'tr' && 'Gizlilik Politikası'}
									{lang === 'kg' && 'Политика конфиденциальности'}
									{lang === 'pl' && 'Polityka prywatności'}
								</a>
							</Link>
							<br />
							<Link href="/agreement">
								<a
									style={{
										color: '#fff',
									}}
								>
									{lang === 'en' && 'User Agreements'}
									{lang === 'ru' && 'Пользовательское соглашение'}
									{lang === 'tr' && 'Kullanıcı Sözleşmesi'}
									{lang === 'kg' && 'Пользовательское соглашение'}
									{lang === 'pl' && 'Zgoda użytkownika'}
								</a>
							</Link>
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
											required
											type="email"
										/>

										<button className="click-btn btn btn-default">
											<i
												className="fa fa-long-arrow-right"
												aria-hidden="true"
											></i>
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
								<a href="https://www.instagram.com/liveme.kg/">
									<i className="fa fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap flex-column">
					<br />
					<br />
					<br />
					<img
						src={paymentsLogo.src}
						width={250}
						alt="payments"
						style={{
							background: '#fff',
							padding: '10px 20px',
							borderRadius: '10px',
						}}
					/>
					<p className="footer-text m-0" style={{ paddingTop: '10px' }}>
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
						Copyright &copy; 2022 {text.footer.copyright.text[lang]}
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
					</p>
				</div>
			</div>
		</footer>
	)
}
