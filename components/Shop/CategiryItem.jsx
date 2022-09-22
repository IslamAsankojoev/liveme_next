import React from 'react';
import style from './CategoryItem.module.scss';

export default function CategiryItem({ title, products, onClick, id }) {
  return (
    <li
      className={`main-nav-list ${style.cat_item}`}
      onClick={() => {
        onClick(title);
      }}>
      <a>
        <span className="lnr lnr-arrow-right"></span>
        {title}
        <span className="number">({products})</span>
      </a>
    </li>
  );
}
