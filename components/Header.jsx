import React from 'react';
import { Search } from '../components/index';
import Link from 'next/link';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setLang } from '../redux/slices/langSlice';
import { text } from '../public/locales/texts.js';
import { parseCookies, setCookie } from 'nookies';
import axios from 'axios';
import { setLoggedIn } from '../redux/slices/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import Gold from '../public/gold.webp';
import Silver from '../public/silver.webp';
import Diamond from '../public/diamond.webp';

export default function Header() {
  const roles = [
    Silver, Gold, Diamond
  ]
  const { myRole, setMyRole } = useState(0)
  const selectRef = React.useRef(null);
  const languages = ['ru', 'en', 'kg', 'tr', 'pl'];
  const lang = useSelector((state) => state.lang.lang);
  const { totalItems } = useSelector((state) => state.cart);
  const totalWishes = useSelector((state) => state.wish?.totalItems);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMeniOpen, setMobileMeniOpen] = React.useState(false);
  const searchRef = React.useRef();
  const { replace, pathname, push, asPath } = useRouter();
  const dispatch = useDispatch();
  const { loggedIn, data } = useSelector((state) => state.user);
  const defaultSelect = lang;
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
    if (parseCookies().access_token) {
      axios
        .get(`${process.env.SERVER}/api/users/me/`, {
          headers: {
            Authorization: 'Bearer ' + parseCookies().access_token,
          },
        })
        .then((res) => {
          // TODO исправить вот это
          // if (res.data.back_id === 1){
          //   setMyRole(Silver)
          // }else if (res.data.back_id === 2){
          //   setMyRole(Gold)
          // }else if (res.data.back_id === 3){
          //   setMyRole(Diamond)
          // }
          dispatch(setLoggedIn(res.data));
        });
    }
  }, [asPath]);

  React.useEffect(() => {
    selectRef.current.value = lang;
  }, [lang]);



  return (
    <header ref={searchRef} className="header_area sticky-header">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light main_box">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand logo_h">
                <img src={'/livemeLogo1.webp'} width={140} height={45} alt={'Logo'} />
              </a>
            </Link>
            <div className="header-right">
              <select
                ref={selectRef}
                defaultValue={defaultSelect}
                name="languages"
                onChange={onChangeLang}
                id="langs">
                {languages.map((language, id) => (
                  <option key={id} value={language}>
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
                  'collapse navbar-collapse offset m-menu': true,
                  showMobileMenu: mobileMeniOpen,
                })}
                id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ml-auto">
                  {text.header?.menu?.map((item, id) => {
                    {
                      if (!loggedIn && item.link === '/register') {
                        return (
                          <li key={id} className={`nav-item ${asPath === item.link && 'active'}`}>
                            <Link href={item.link}>
                              <a className="nav-link"><AccountCircleOutlinedIcon /></a>
                            </Link>
                          </li>
                        );
                      }
                      if (item.link === '/profile' && loggedIn) {
                        return (
                          <li key={id} className={`nav-item ${asPath === item.link && 'active'}`}>
                            <Link href={item.link}>
                              <a className="nav-link" style={{ position: 'relative' }}>
                                {!loggedIn ? <AccountCircleOutlinedIcon /> : <AccountCircleIcon color="warning" fontSize="large" />}
                              </a>
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
                        {pathname === '/cart' ? <LocalMallIcon color="warning" /> : <LocalMallOutlinedIcon />}
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
                    className={`nav-item d-sm-flex d-none  ${pathname === '/wishlist' && 'active'
                      }`}>
                    <Link href="/wishlist">
                      <a className="cart">
                        {pathname === '/wishlist' ? <FavoriteIcon color="warning" /> : <FavoriteBorderOutlinedIcon />}
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
                        <SearchOutlinedIcon />
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
