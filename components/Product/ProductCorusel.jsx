import React from 'react';
import styles from './ProductCorusel.module.scss';
import Magnifier from "react-magnifier";


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
          {images?.map(({ item }, index) => {
          return (
            <div
                key={item}
              className={`single-prd-item ${active === index && styles.show} ${styles.singleProd}`}>
                <Magnifier className={styles.soomed} src={item} mgTouchOffsetX={-60} mgTouchOffsetY={-60} mgShape="square" height="100%" width="auto" mgBorderWidth=".5" zoomFactor=".7" mgHeight={300} mgWidth={300}/>
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
        {images?.map(({ item }, index) => {
          return (
            <div
              onClick={() => {
                activate(index);
              }}
                key={item}
              className={`${active === index && styles.activeProduct} ${styles.product}`}>
                <img className={'img-fluid'} src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCorusel;
