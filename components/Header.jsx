import React from 'react';
import { Search } from '../components/index';
import Link from 'next/link';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLang } from '../redux/slices/langSlice';
import { text } from '../public/locales/texts.js';
import { setCookie } from 'nookies';

export default function Header() {
  const languages = ['ru', 'en', 'kg', 'tr'];
  const lang = useSelector((state) => state.lang.lang);
  const { totalItems } = useSelector((state) => state.cart);
  const totalWishes = useSelector((state) => state.wish?.totalItems);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMeniOpen, setMobileMeniOpen] = React.useState(false);
  const searchRef = React.useRef();
  const { replace, pathname, push, asPath } = useRouter();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.user);
  const toggleMenu = () => {
    setMobileMeniOpen((prev) => !prev);
    setSearchOpen(false);
  };

  const onClickSearch = () => {
    setSearchOpen((prev) => !prev);
    setMobileMeniOpen((prev) => !prev);
  };

  const onChangeLang = (e) => {
    dispatch(setLang(e.target.value));
    setCookie(null, 'NEXT_LOCALE', e.target.value, { maxAge: 30 * 24 * 60 * 60, path: '/' });
    replace(asPath, asPath, { scroll: false });
  };
  React.useEffect(() => {
    setMobileMeniOpen(false);
  }, [asPath]);

  return (
    <header ref={searchRef} className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand logo_h">
                <img src={'/livemeLogo1.webp'} width={140} height={45} />
              </a>
            </Link>
            <div className="header-right">
              <select name="langs" onChange={onChangeLang} id="langs">
                {languages.map((language, id) => (
                  <option key={id} value={language} selected={language === lang}>
                    {language}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleMenu}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className={classNames({
                  'collapse navbar-collapse offset': true,
                  show: mobileMeniOpen,
                })}
                id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  {text.header?.menu?.map((item, id) => {
                    {
                      if (!loggedIn && item.link === '/register') {
                        return (
                          <li key={id} className={`nav-item ${asPath === item.link && 'active'}`}>
                            <Link href={item.link}>
                              <a className="nav-link">{item.text[lang]}</a>
                            </Link>
                          </li>
                        );
                      }
                      if (item.link === '/profile' && loggedIn) {
                        return (
                          <li key={id} className={`nav-item ${asPath === item.link && 'active'}`}>
                            <Link href={item.link}>
                              <a className="nav-link">{item.text[lang]}</a>
                            </Link>
                          </li>
                        );
                      }
                      if (item.link !== '/profile' && item.link !== '/register') {
                        return (
                          <li key={id} className={`nav-item ${asPath === item.link && 'active'}`}>
                            <Link href={item.link}>
                              <a className="nav-link">{item.text[lang]}</a>
                            </Link>
                          </li>
                        );
                      }
                    }
                  })}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className={`nav-item  ${pathname === '/cart' && 'active'} `}>
                    <Link href="/cart">
                      <a className="cart">
                        <span className="ti-bag"></span>
                      </a>
                    </Link>
                  </li>
                  <i
                    onClick={() => {
                      push('/cart');
                    }}
                    className={`count-bag ${totalItems <= 0 && 'hide-count'}`}>
                    {totalItems}
                  </i>

                  <li
                    className={`nav-item d-sm-flex d-none  ${
                      pathname === '/wishlist' && 'active'
                    }`}>
                    <Link href="/wishlist">
                      <a className="cart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="ti-bag"
                          viewBox="0 0 16 16">
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <i
                    onClick={() => {
                      push('/wishlist');
                    }}
                    className={`count-bag ${totalWishes <= 0 && 'hide-count'}`}>
                    {totalWishes}
                  </i>

                  <li className="nav-item">
                    <button className="search" onClick={onClickSearch}>
                      <span className="lnr lnr-magnifier" id="search">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen} searchRef={searchRef} />
    </header>
  );
}
