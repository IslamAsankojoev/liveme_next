import React from 'react';
import { Search } from '../components/index';
import Link from 'next/link';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLang } from '../redux/slices/langSlice';
import Image from 'next/image';

export default function Header() {
  const languages = ['ru', 'en', 'kg', 'tr'];
  const { lang } = useSelector((state) => state.lang);
  const { totalItems } = useSelector((state) => state.cart);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMeniOpen, setMobileMeniOpen] = React.useState(false);
  const searchRef = React.useRef();
  const { replace, pathname, query, push } = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const toggleMenu = () => {
    setMobileMeniOpen((prev) => !prev);
  };

  const onClickSearch = () => {
    setSearchOpen((prev) => !prev);
    setMobileMeniOpen((prev) => !prev);
  };

  const onChangeLang = (e) => {
    dispatch(setLang(e.target.value));
    push(
      {
        pathname,
        query: {
          ...query,
          locale: e.target.value,
        },
      },
      undefined,
      { scroll: false },
    );
  };
  return (
    <header ref={searchRef} className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link href="/">
              <a className="navbar-brand logo_h">
                <Image src={'/livemeLogo1.webp'} width={140} height={45} />
              </a>
            </Link>
            <div className="header-right">
              <select name="langs" onChange={onChangeLang} id="langs">
                {languages.map((language, id) => (
                  <option defaultValue={language} key={id} selected={language === lang}>
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
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className={classNames({
                  'collapse navbar-collapse offset': true,
                  show: mobileMeniOpen,
                })}
                id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li onClick={toggleMenu} className={`nav-item ${pathname === '/' && 'active'}`}>
                    <Link href="/">
                      <a className="nav-link">Главная</a>
                    </Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className={`nav-item ${pathname === '/shop' && 'active'}`}>
                    <Link href="/shop">
                      <a className="nav-link dropdown-toggle">Каталог</a>
                    </Link>
                  </li>
                  {/* <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="single-blog.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li> */}
                  {/* <li className="nav-item submenu dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="tracking.html">
                        Tracking
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="elements.html">
                        Elements
                      </a>
                    </li>
                  </ul>
                </li> */}
                  <li
                    onClick={toggleMenu}
                    className={`nav-item ${pathname === '/contact' && 'active'}`}>
                    <Link href="/contact">
                      <a className="nav-link">Контакты</a>
                    </Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className={`nav-item ${pathname === '/register' && 'active'} ${
                      pathname === '/profile' && 'active'
                    }`}>
                    {user.loggedIn ? (
                      <Link href="/profile">
                        <a className="nav-link ">
                          Профиль -{' '}
                          <span style={{ color: '#15d015', fontWeight: 'bold' }}>
                            {user.data.username}
                          </span>
                        </a>
                      </Link>
                    ) : (
                      <Link href="/register">
                        <a className="nav-link">Вход / Регистрация</a>
                      </Link>
                    )}
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className={`nav-item ${pathname === '/cart' && 'active'}`}>
                    <Link href="/cart">
                      <a className="cart">
                        <span className="ti-bag"></span>
                      </a>
                    </Link>
                  </li>
                  {totalItems > 0 && (
                    <i
                      onClick={() => {
                        push('/cart');
                      }}
                      className="count-bag">
                      {totalItems}
                    </i>
                  )}

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
