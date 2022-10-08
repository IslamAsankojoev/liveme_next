import React from 'react';
import style from './Pagination.module.scss';
import { Pagination, PaginationItem } from '@mui/material';

export default function PaginationComp({
  items,
  page,
  count,
  next,
  previous,
  page_size,
  handlePage,
}) {
  return (
    <div className={style.wrapper}>
      <Pagination
        className={style.pagination}
        count={count}
        {...items}
        onChange={(e, page) => {
          handlePage(page);
        }}
        size="large"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            className={'paginationItem'}
            {...item}
            sx={{
              background: item.selected ? 'red' : '#fff',
            }}
          />
        )}
      />
    </div>
  );
}
