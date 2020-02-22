import React from 'react';
import Aux from './../../../../../../hoc/Aux/Aux';
import * as Globals from './../../../../../../hoc/Utils/Globals';

const topSellers = (props) => {
    return(
        <Aux>
                <div className="widget widget-featured-products">
                <h3 className="widget-title">{Globals.TOP_SELLERS}</h3>
                {/* Entry*/}
                <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html">
                <img src="img/shop/widget/01.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                    <h4 className="entry-title"><a href="shop-single.html">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                </div>
                </div>
        </div>
  
        </Aux>
    );
}

export default topSellers;