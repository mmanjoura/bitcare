import React from 'react';
import Aux from './../../../../../../hoc/Aux/Aux';

const bestRated = (props) => {
    return(
        <Aux>
            <div className="widget widget-featured-products">
            <h3 className="widget-title">Best Rated</h3>
                {/* Entry*/}
                <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html">
                <img src="img/shop/widget/08.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                    <h4 className="entry-title"><a href="shop-single.html">Jordan's City Hoodie</a></h4><span className="entry-meta">$65.00</span>
                </div>
                </div>
            </div>
    
        </Aux>
    );
}

export default bestRated;