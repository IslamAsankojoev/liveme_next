import React from 'react';
import style from './Empty.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import texts from '../../collections/texts';

const Empty = ({ title = texts.empty.title, text = texts.empty.subtitle, button }) => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className={style.block}>
      <div className="cart-empty">
        <h2>{title[lang] || title}</h2>
        <p>{text[lang] || text}</p>
        <br />
        <br />
        <Link href="/">
          <a className="gray_btn">{button || texts.empty.button[lang]}</a>
        </Link>
      </div>
    </div>
  );
};
export default Empty;
