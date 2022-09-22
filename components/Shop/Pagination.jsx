import React from 'react';
import axios from 'axios';
import style from './Pagination.module.scss';

export default function Pagination({
  page,
  count,
  next,
  previous,
  handlePrevious,
  page_size,
  handlePage,
  handleNext,
}) {
  return (
    <div className={`pagination ${style.shop_pagination}`}>
      <a onClick={handlePrevious} className={`prev-arrow ${!previous && style.arrow_hide}`}>
        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
      </a>
      {Array(Math.ceil(count / page_size))
        .fill(1)
        .map((item, index) => {
          return (
            <a
              className={page == index + 1 ? 'active' : ''}
              key={index}
              onClick={() => {
                handlePage(index + 1);
              }}>
              {index + 1}
            </a>
          );
        })}
      <a onClick={handleNext} className={`next-arrow ${!next && style.arrow_hide}`}>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  );
}
