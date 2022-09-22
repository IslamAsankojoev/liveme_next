import React from 'react';

export default function CategiryItem({ title, products }) {
  return (
    <li className="main-nav-list">
      <a>
        <span className="lnr lnr-arrow-right"></span>
        {title}
        <span className="number">({products})</span>
      </a>
    </li>
  );
}
