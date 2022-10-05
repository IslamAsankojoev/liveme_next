import React from 'react';
import style from './Empty.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { text } from '../../public/locales/texts.js';

const Empty = ({ title = text.empty.title, content = text.empty.subtitle, button }) => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className={style.block}>
      <div className="cart-empty">
        <h2>{title[lang] || title}</h2>
        <p>{content[lang] || content}</p>
        <br />
        <br />
        <Link href="/">
          <a className="gray_btn">{button || text.empty.button[lang]}</a>
        </Link>
      </div>
    </div>
  );
};
export default Empty;
