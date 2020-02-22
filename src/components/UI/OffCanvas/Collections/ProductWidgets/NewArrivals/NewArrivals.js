import React from 'react';
import Aux from './../../../../../../hoc/Aux/Aux';

const newArrivals = (props) => {
    return(
        <Aux>
              <div className="widget widget-featured-products">
              <h3 className="widget-title">New Arrivals</h3>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html">
                <img src="img/shop/widget/05.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Union Park</a></h4><span className="entry-meta">$49.99</span>
                </div>
              </div>
                </div>
       
        </Aux>
    );
}

export default newArrivals;