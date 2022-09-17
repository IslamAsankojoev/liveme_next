import React from 'react';
import { Search } from '../components/index';
import Link from 'next/link';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export default function Header() {
  const { totalItems } = useSelector((state) => state.cart);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMeniOpen, setMobileMeniOpen] = React.useState(false);
  const searchRef = React.useRef();
  const { pathname, push } = useRouter();
  const user = useSelector((state) => state.user);
  const toggleMenu = () => {
    setMobileMeniOpen((prev) => !prev);
  };

  return (
    <header ref={searchRef} className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link href="/">
              <a className="navbar-brand logo_h">
                <img src="/static/img/livemeLogo1.png" width={150} alt="Logo" />
              </a>
            </Link>
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
                <li onClick={toggleMenu} className={`nav-item ${pathname === '/shop' && 'active'}`}>
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
                  <button
                    className="search"
                    onClick={() => {
                      setSearchOpen((prev) => {
                        return !prev;
                      });
                    }}>
                    <span className="lnr lnr-magnifier" id="search"></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Search setSearchOpen={setSearchOpen} searchOpen={searchOpen} searchRef={searchRef} />
    </header>
  );
}
