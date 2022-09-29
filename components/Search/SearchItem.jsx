import Link from 'next/link.js';
import React from 'react';
import style from './SearchItem.module.scss';
import { useRouter } from 'next/router.js';

export default function SearchItem({ id, cover, title, description, searchValue, setSearchOpen }) {
  const router = useRouter();
  const handleLink = () => {
    setSearchOpen((prev) => !prev);
    router.push(`/products/${id}`);
  };
  return (
    <a className={style.item} key={id} onClick={handleLink}>
      <img src={cover} className={style.img} alt="" />
      <div className={style.info}>
        <div className={style.title}>{title}</div>
        {/* <div className={style.content}>{description}</div> */}
      </div>
    </a>
  );
}
