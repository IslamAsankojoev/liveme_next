import React from 'react';
import className from 'classnames';

export default function Search({ setSearchOpen, searchOpen, searchRef }) {
  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.path.includes(searchRef.current)) {
        setSearchOpen((prev) => false);
      }
    };
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div
      className={className({
        'search_input adimated': true,
        show: searchOpen,
      })}
      id="search_input_box">
      <div className="container">
        <form className="d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            id="search_input"
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
