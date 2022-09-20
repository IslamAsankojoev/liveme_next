import React from 'react';
import className from 'classnames';
import style from './Search.module.scss';
import lodash from 'lodash';
import axios from 'axios';

export default function Search({ setSearchOpen, searchOpen, searchRef }) {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.path.includes(searchRef.current)) {
        setSearchOpen((prev) => false);
      }
    };
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  React.useEffect(() => {
    axios.get(`${process.env.SERVER_DOMAIN}/api/products/?search=${searchValue}`).then((res) => {
      console.log(res.data);
    });
  }, [searchValue]);

  return (
    <div
      className={className({
        'search_input adimated': true,
        show: searchOpen,
      })}
      id="search_input_box">
      <div className={style.items}>
        {lodash.isEmpty(searchResult) ? (
          <div className={style.empty}>Ничего не найдено</div>
        ) : (
          searchResult.map((item) => (
            <div className={style.item} key={item.id}>
              <img src={item.image} alt="" />
              <div className={style.info}>
                <div className={style.title}>{item.title}</div>
                <div className={style.price}>{item.price} сом</div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="container">
        <form className="d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            id="search_input"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Поиск товаров..."
          />
          <button type="submit" className="btn"></button>
          <span
            onClick={() => {
              setSearchOpen((prev) => !prev);
            }}
            className="lnr lnr-cross"
            id="close_search"
            title="Close Search"></span>
        </form>
      </div>
    </div>
  );
}
