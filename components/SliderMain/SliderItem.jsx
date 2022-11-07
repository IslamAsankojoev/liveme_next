import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { home } from '../../public/locales/home/homeCollection.js'
import { text } from '../../public/locales/texts.js'


const SliderItem = ({ image, grid }) => {
  const [saleItems, setSaleItems] = React.useState({});
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);

  const addToCart = () => {
    dispatch(addItem({ ...saleItems, count: 1 }));
  };

  React.useEffect(() => {
    setSaleItems(items.find((item) => item.id === 1));
  }, [items]);

  React.useEffect(() => {
    console.log(image)
  }, []);

  return (
    <>
      <section className="banner-area home" style={{
        backgroundImage: image ? `url(${image.src})` : null,
      }}>
        <div className="container" style={{ height: '100%' }}>
          <div
            className="row fullscreen align-items-center justify-content-start"
            style={{ height: 80 + 'vh' }}>
            <div className="col-lg-12">
              <div className="active-banner-slider owl-carousel">
                <div className="row single-slide align-items-center d-flex">
                  <div className={`col-lg-${grid?.left}`}>
                    <div className="banner-img">
                      {/* <img className="img-fluid" src="static/img/banner/banner-img.png" alt="" /> */}
                    </div>
                  </div>
                  <div className={`col-lg-${grid?.center}`}>
                    <div className="banner-content">
                      <h2>{home.headerArea.title[lang]}</h2>
                      <h2 style={{ textAlign: 'right' }}>{home.headerArea.title2[lang]}</h2>
                      <p>{home.headerArea.text[lang]}</p>
                      {saleItems ? (
                        <div
                          style={{ cursor: 'pointer' }}
                          onClick={addToCart}
                          className="add-bag d-flex align-items-center simple-btn">
                          <a className="add-btn">
                            <svg
                              style={{ color: 'white' }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-bag-plus"
                              viewBox="0 0 16 16">
                              <path
                                fillRule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                              />
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                          </a>
                          <button className="add-text text-uppercase ">
                            {text.buttonAddToCart[lang]}
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className={`col-lg-${grid?.right}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SliderItem;