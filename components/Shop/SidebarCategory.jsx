import React from 'react';
import axios from 'axios';
import { CategiryItem } from '../index';
import style from './SidebarCategory.module.scss';
import { useRouter } from 'next/router.js';

export default function SidebarCategory({ setCategory, setPage }) {
  const [categories, setCategories] = React.useState([]);

  const onClickCategory = (category) => {
    setCategory(category);
  };
  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/category/`)
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div className={`sidebar-categories ${style.sidebar_categories}`}>
      <div className="head">Категории</div>
      <ul className="main-categories">
        <li
          style={{ cursor: 'pointer' }}
          className={`main-nav-list ${style.cat_item}`}
          onClick={() => {
            onClickCategory('');
          }}>
          <a>
            <span className="lnr lnr-arrow-right"></span>
            Все
            {/* <span className="number"></span> */}
          </a>
        </li>
        {categories?.map((category) => {
          return (
            <CategiryItem
              key={category.id + category.title}
              {...category}
              onClick={onClickCategory}
            />
          );
        })}
      </ul>
    </div>
  );
}
