import React from 'react';

export default function Search({ setSearchOpen }) {
  return (
    <div className="search_input" id="search_input_box">
      <div className="container">
        <form className="d-flex justify-content-between">
          <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
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
