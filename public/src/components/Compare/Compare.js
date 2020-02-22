import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const compare = () => {

    return(
        <Aux>
        <div className="compare-box" id="compareBox">
        <div className="container">
          <div className="compare-box__header">
            <h3 className="compare-box__header__title">Compare</h3>
            <div className="compare-box__header__toggle"><span className="compare-box__header__toggle__hide hide-compare">Hide<span className="icon icon-arrow-down" /></span><span className="compare-box__header__toggle__show show-compare">Show<span className="icon icon-arrow-up" /></span><span className="compare-box__header__toggle__close close-compare"><span className="icon icon-clear" /></span></div>
          </div>
          <div className="compare-box__items">
            <ul className="compare-box__items__list compare-carousel nav-top">
              <li className="compare-box__items__list__item">
                <div className="compare-box__items__list__item__delete"><a href="#" className="icon icon-clear" /></div>
                <a href="#"><img src="images/products/product-2.jpg"  /></a></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">1</div>
                <img src="images/products/product-empty.png"  /></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">2</div>
                <img src="images/products/product-empty.png"  /></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">3</div>
                <img src="images/products/product-empty.png"  /></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">4</div>
                <img src="images/products/product-empty.png"  /></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">5</div>
                <img src="images/products/product-empty.png"  /></li>
              <li className="compare-box__items__list__item empty">
                <div className="compare-box__items__list__item__num">6</div>
                <img src="images/products/product-empty.png"  /></li>
            </ul>
            <div className="compare-box__actions">
              <div className="compare-box__actions__btns"> <a href="#" className="btn btn--wd btn--lg text-uppercase">Compare</a> <a href="#" className="btn btn--wd btn--lg btn--light text-uppercase" id="removeAllCompare">Clear All</a> </div>
            </div>
          </div>
        </div>
      </div>
        </Aux>
    )
};

export default compare;