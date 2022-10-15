import React from 'react';
import style from './Pagination.module.scss';
import { Pagination, PaginationItem } from '@mui/material';

export default function PaginationComp({ items, page, count, handlePage }) {
  const [current, setCurrent] = React.useState(1);
  const [pagesCount, setPagesCount] = React.useState(1);

  const handleChange = (value) => {
    setCurrent(value);
    handlePage(value);
  };
  React.useEffect(() => {
    setCurrent(page);
  }, [page]);

  React.useEffect(() => {
    setPagesCount(count);
  }, [count]);

  return (
    <div className={style.wrapper}>
      <Pagination
        count={pagesCount}
        onChange={(_, page) => {
          handleChange(page);
        }}
        page={current}
        size="large"
        shape="rounded"
      />
    </div>
  );
}
