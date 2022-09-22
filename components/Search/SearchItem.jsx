import Link from 'next/link.js';
import React from 'react';
import style from './SearchItem.module.scss';

export default function SearchItem({ id, images, title, description, searchValue }) {
  // const pos = description.search(searchValue);
  // const contentArray = description.split('');

  // React.useEffect(() => {
  //   console.log(contentArray[pos]);
  // }, []);
  return (
    <Link href={`/products/${id}`}>
      <a className={style.item} key={id}>
        <img src={images[0]?.image} className={style.img} alt="" />
        <div className={style.info}>
          <div className={style.title}>{title}</div>
          {/* <div className={style.content}>{description}</div> */}
        </div>
      </a>
    </Link>
  );
}
