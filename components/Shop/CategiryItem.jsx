import React from 'react';
import style from './CategoryItem.module.scss';

export default function CategiryItem({ title, onClick, categoryCurrent }) {


  return (
    <li
      className={`main-nav-list ${style.cat_item} ${title === categoryCurrent && style.cat_item_active}`}
      onClick={() => {
        onClick(title);
      }}>

      <a>
        <span className="lnr lnr-arrow-right"></span>
        {title}
      </a>
    </li>
  );
}
