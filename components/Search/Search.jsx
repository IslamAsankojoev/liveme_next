import React from 'react';
import className from 'classnames';
import style from './Search.module.scss';
import lodash from 'lodash';
import axios from 'axios';
import Link from 'next/link.js';
import SearchItem from './SearchItem.jsx';

export default function Search({ setSearchOpen, searchOpen, searchRef }) {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [value, setValue] = React.useState('');

  const handleSearch = (e) => {
    handleSearchResult(e.target.value);
    setValue(e.target.value);
  };

  const handleSearchResult = React.useCallback(
    lodash.debounce((str) => {
      setSearchValue(str);
    }, 300),
    [],
  );

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
    if (searchValue) {
      axios.get(`${process.env.SERVER_DOMAIN}/api/products/?title=${searchValue}`).then((res) => {
        setSearchResult((prev) => res.data);
      });
    } else {
      setSearchResult([]);
    }
  }, [searchValue]);

  return (
    <div
      className={className({
        'search_input adimated': true,
        show: searchOpen,
      })}
      id="search_input_box">
      <br />
      <br />
      <div className="">
        <form className="d-flex justify-content-between">
          <input
            type="text"
            className={`form-control ${style.searchInput}`}
            id="search_input"
            value={value}
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
        <div className={style.items}>
          {lodash.isEmpty(searchResult) ? (
            <div className={style.empty}>Ничего не найдено</div>
          ) : (
            searchResult.map((item) => (
              <SearchItem
                setSearchOpen={setSearchOpen}
                key={item.id}
                {...item}
                searchValue={searchValue}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
