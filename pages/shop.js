import React from 'react';
import { Header, Footer, ProductBlock } from '../components/index';
import { headers } from '../config.js';
import axios from 'axios';
import lodash from "lodash";

export default function Shop({ items }) {
  return (
    <>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Shop Category page</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">
                  Home<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="#">
                  Shop<span className="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Fashon Category</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
              <div className="head">Browse Categories</div>
              <ul className="main-categories">
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#fruitsVegetable"
                    aria-expanded="false"
                    aria-controls="fruitsVegetable">
                    <span className="lnr lnr-arrow-right"></span>Fruits and Vegetables
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="fruitsVegetable"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="fruitsVegetable">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#meatFish"
                    aria-expanded="false"
                    aria-controls="meatFish">
                    <span className="lnr lnr-arrow-right"></span>Meat and Fish
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="meatFish"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="meatFish">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#cooking"
                    aria-expanded="false"
                    aria-controls="cooking">
                    <span className="lnr lnr-arrow-right"></span>Cooking
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="cooking"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="cooking">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#beverages"
                    aria-expanded="false"
                    aria-controls="beverages">
                    <span className="lnr lnr-arrow-right"></span>Beverages
                    <span className="number">(24)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="beverages"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="beverages">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#homeClean"
                    aria-expanded="false"
                    aria-controls="homeClean">
                    <span className="lnr lnr-arrow-right"></span>Home and Cleaning
                    <span className="number">(53)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="homeClean"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="homeClean">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a href="#">
                    Pest Control<span className="number">(24)</span>
                  </a>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#officeProduct"
                    aria-expanded="false"
                    aria-controls="officeProduct">
                    <span className="lnr lnr-arrow-right"></span>Office Products
                    <span className="number">(77)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="officeProduct"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="officeProduct">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#beauttyProduct"
                    aria-expanded="false"
                    aria-controls="beauttyProduct">
                    <span className="lnr lnr-arrow-right"></span>Beauty Products
                    <span className="number">(65)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="beauttyProduct"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="beauttyProduct">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#healthProduct"
                    aria-expanded="false"
                    aria-controls="healthProduct">
                    <span className="lnr lnr-arrow-right"></span>Health Products
                    <span className="number">(29)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="healthProduct"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="healthProduct">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a href="#">
                    Pet Care<span className="number">(29)</span>
                  </a>
                </li>
                <li className="main-nav-list">
                  <a
                    data-toggle="collapse"
                    href="#homeAppliance"
                    aria-expanded="false"
                    aria-controls="homeAppliance">
                    <span className="lnr lnr-arrow-right"></span>Home Appliances
                    <span className="number">(15)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="homeAppliance"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="homeAppliance">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="main-nav-list">
                  <a
                    className="border-bottom-0"
                    data-toggle="collapse"
                    href="#babyCare"
                    aria-expanded="false"
                    aria-controls="babyCare">
                    <span className="lnr lnr-arrow-right"></span>Baby Care
                    <span className="number">(48)</span>
                  </a>
                  <ul
                    className="collapse"
                    id="babyCare"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="babyCare">
                    <li className="main-nav-list child">
                      <a href="#">
                        Frozen Fish<span className="number">(13)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Dried Fish<span className="number">(09)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Fresh Fish<span className="number">(17)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#">
                        Meat Alternatives<span className="number">(01)</span>
                      </a>
                    </li>
                    <li className="main-nav-list child">
                      <a href="#" className="border-bottom-0">
                        Meat<span className="number">(11)</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="sidebar-filter mt-50">
              <div className="top-filter-head">Product Filters</div>
              <div className="common-filter">
                <div className="head">Brands</div>
                <form action="#">
                  <ul>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="apple" name="brand" />
                      <label htmlFor="apple">
                        Apple<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="asus" name="brand" />
                      <label htmlFor="asus">
                        Asus<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="gionee" name="brand" />
                      <label htmlFor="gionee">
                        Gionee<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="micromax" name="brand" />
                      <label htmlFor="micromax">
                        Micromax<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="samsung" name="brand" />
                      <label htmlFor="samsung">
                        Samsung<span>(19)</span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="common-filter">
                <div className="head">Color</div>
                <form action="#">
                  <ul>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="black" name="color" />
                      <label htmlFor="black">
                        Black<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="balckleather" name="color" />
                      <label htmlFor="balckleather">
                        Black Leather<span>(29)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="blackred" name="color" />
                      <label htmlFor="blackred">
                        Black with red<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="gold" name="color" />
                      <label htmlFor="gold">
                        Gold<span>(19)</span>
                      </label>
                    </li>
                    <li className="filter-list">
                      <input className="pixel-radio" type="radio" id="spacegrey" name="color" />
                      <label htmlFor="spacegrey">
                        Spacegrey<span>(19)</span>
                      </label>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="common-filter">
                <div className="head">Price</div>
                <div className="price-range-area">
                  <div id="price-range"></div>
                  <div className="value-wrapper d-flex">
                    <div className="price">Price:</div>
                    <span>$</span>
                    <div id="lower-value"></div>
                    <div className="to">to</div>
                    <span>$</span>
                    <div id="upper-value"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting">
                <select>
                  <option value="1">Default sorting</option>
                  <option value="1">Default sorting</option>
                  <option value="1">Default sorting</option>
                </select>
              </div>
              <div className="sorting mr-auto">
                <select>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                </select>
              </div>
              <div className="pagination">
                <a href="#" className="prev-arrow">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </a>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#" className="dot-dot">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
                <a href="#">6</a>
                <a href="#" className="next-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <section className="lattest-product-area pb-40 category-list">
              <div className="row">
                {!lodash.isEmpty(items) &&
                  items.map(({ item }) => {
                    return (
                      <ProductBlock
                        className="col-lg-4 col-md-6"
                        key={item.id}
                        {...item}
                      />
                    );
                  })}
              </div>
            </section>
            <div className="filter-bar d-flex flex-wrap align-items-center">
              <div className="sorting mr-auto">
                <select>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                  <option value="1">Show 12</option>
                </select>
              </div>
              <div className="pagination">
                <a href="#" className="prev-arrow">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </a>
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#" className="dot-dot">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </a>
                <a href="#">6</a>
                <a href="#" className="next-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <section className="related-product-area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>Deals of the Week</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r1.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r2.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r3.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r5.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r6.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r7.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r9.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r10.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-related-product d-flex">
                    <a href="#">
                      <img src="/static/img/r11.jpg" alt="" />
                    </a>
                    <div className="desc">
                      <a href="#" className="title">
                        Black lace Heels
                      </a>
                      <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ctg-right">
                <a href="#" target="_blank">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="/static/img/category/c5.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export async function getServerSideProps() {
  let items = await axios
    .get(`http://localhost:8000/api/products/`)
    .then((res) => {
      return res;
    });
  return { props: { items } };
}
