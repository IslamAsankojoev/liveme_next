import React from 'react';
import styles from './ProductCorusel.module.scss';
import classnames from 'classnames';
import Image from 'next/image';

const ProductCorusel = ({ images }) => {
  const [active, setActive] = React.useState(0);
  const next = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };
  const prev = () => {
    if (active <= images.length - 1 && active > 0) {
      setActive(active - 1);
    } else if (active === 0) {
      setActive(images.length - 1);
    }
  };

  const activate = (id) => {
    setActive(id);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className={styles.corusel}>
        {images?.map(({ image }, index) => {
          return (
            <div
              key={image}
              className={`single-prd-item ${active === index && styles.show} ${styles.singleProd}`}>
              <span className="next-img">
                <img className={`${styles.img} img-fluid`} src={image} alt="" />
              </span>
            </div>
          );
        })}
        {}
        {images?.length > 1 && (
          <>
            <div
              className={`${styles.paginate} ${styles.next} ${styles.buttons} ${styles.right}`}
              onClick={next}></div>
            <div
              className={`${styles.paginate} ${styles.prev} ${styles.buttons} ${styles.left}`}
              onClick={prev}></div>
          </>
        )}
      </div>
      <div className={styles.productList}>
        {images?.map(({ image }, index) => {
          return (
            <div
              onClick={() => {
                activate(index);
              }}
              key={image}
              className={`${active === index && styles.activeProduct} ${styles.product}`}>
              <img className={'img-fluid'} src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCorusel;
