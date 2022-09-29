import React from 'react';
import style from './Empty.module.scss';
import Link from 'next/link';

export default function Empty({ title, content }) {
  return (
    <div className={style.block}>
      <h1>Тут пусто 😕</h1>
      <p>Перейдите на главную страницу.</p>
      <Link href="/">
        <a className={style.return}>Вернуться на главную</a>
      </Link>
    </div>
  );
}
