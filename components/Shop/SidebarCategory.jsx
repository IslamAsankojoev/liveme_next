import React from 'react';
import axios from 'axios';
import { CategiryItem } from '../index';
import style from './SidebarCategory.module.scss';

export default function SidebarCategory() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${process.env.SERVER_DOMAIN}/api/products/category/`)
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <div className={`sidebar-categories ${style.sidebar_categories}`}>
      <div className="head">Категории</div>
      <ul className="main-categories">
        {categories?.map((category) => {
          return <CategiryItem key={category.id + category.title} {...category} />;
        })}
      </ul>
    </div>
  );
}
