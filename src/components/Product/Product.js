import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const styles = {
  colors: {
    black: {
      backgroundColor: '#000'
    },
    lightcyan: {
      backgroundColor: 'lightcyan'
    },
    white: {
      backgroundColor: '#fff'
    },
    darkcyan: {
      backgroundColor: 'darkcyan'
    }
  }
}

const Product = () => (
  <div className="m-product" data-testid="Product">
      <div className="m-product__image-container">
          <img
              className="m-product__image"
              src="./images/product-image1.png"
              alt=""/>
          <button className="m-product__preview-btn">
            <FontAwesomeIcon icon={faArrowsAlt} className="m-product__preview-btn-icon"/>
          </button>
      </div>
      <div className="m-product__info">
          <h3 className="m-product__title">
            tiger medium red
          </h3>
          <p className="m-product__mark">
            aed 250
          </p>
          <p className="m-product__sizes">
            available sizes:
            <span className="m-product__size">s</span>
            <span className="m-product__size">m</span>
            <span className="m-product__size">l</span>
            <span className="m-product__size">xl</span>
          </p>
          <div className="m-product__colors-container">
              <p className="m-product__colors-label">Colors</p>
              <div className="m-product__colors">
                <button className="m-product__color" style={styles.colors.black}></button>
                <button className="m-product__color" style={styles.colors.lightcyan}></button>
                <button className="m-product__color" style={styles.colors.white}></button>
                <button className="m-product__color" style={styles.colors.darkcyan}></button>
              </div>
              <div className="m-product__color-bg"></div>
          </div>
      </div>
      <div className="m-product__description-container">
        <p className="m-product__description-title">description</p>
        <p className="m-product__description">
          Opt for a bold look with this T-short. With its iconic Tiger print
          on the chest, it is sure to turn heads. Pair it with jogging
          trousers and sneakers for a casual look
        </p>
        <ul className="m-product__description-list">
          <li>Short sleeved T-short.</li>
          <li>Rounden neck.</li>
          <li>Tiger embroidered on the chest</li>
        </ul>
      </div>
      <div className="m-product__more-products">
          <p className="m-product__description-title">
            See more products
          </p>
          <div className="m-product__more-products-images">
              <Router>
                <Link to='/' className="m-product__more-products-link">
                    <img
                      className="m-product__more-products-image"
                      src="./images/product-small-1.png" alt=""/>
                </Link>
                <Link to='/' className="m-product__more-products-link">
                    <img
                      className="m-product__more-products-image"
                      src="./images/product-small-2.png" alt=""/>
                </Link>
                <Link to='/' className="m-product__more-products-link">
                    <img
                      className="m-product__more-products-image"
                      src="./images/product-small-3.png" alt=""/>
                </Link>
                <Link to='/' className="m-product__more-products-link">
                    <img
                      className="m-product__more-products-image"
                      src="./images/product-small-4.png" alt=""/>
                </Link>
              </Router>
          </div>
      </div>
  </div>
);

export default Product;
