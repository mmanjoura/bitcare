import React from 'react';
import Aux from './../../../../hoc/Aux/Aux';

const productWidgets = (props) => {
    return(
        <Aux>
        <section className="container padding-bottom-2x">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-featured-products">
              <h3 className="widget-title">Top Sellers</h3>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/01.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Oakley Kickback</a></h4><span className="entry-meta">$155.00</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/03.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Vented Straw Fedora</a></h4><span className="entry-meta">$49.50</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/04.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Big Wordmark Tote</a></h4><span className="entry-meta">$29.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-featured-products">
              <h3 className="widget-title">New Arrivals</h3>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/05.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Union Park</a></h4><span className="entry-meta">$49.99</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/06.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Cole Haan Crossbody</a></h4><span className="entry-meta">$200.00</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/07.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Skagen Holst Watch</a></h4><span className="entry-meta">$145.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-featured-products">
              <h3 className="widget-title">Best Rated</h3>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/08.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Jordan's City Hoodie</a></h4><span className="entry-meta">$65.00</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/09.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Palace Shell Track Jacket</a></h4><span className="entry-meta">$36.99</span>
                </div>
              </div>
              {/* Entry*/}
              <div className="entry">
                <div className="entry-thumb"><a href="shop-single.html"><img src="img/10.jpg" alt="Product" /></a></div>
                <div className="entry-content">
                  <h4 className="entry-title"><a href="shop-single.html">Off the Shoulder Top</a></h4><span className="entry-meta">$128.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        </Aux>
    )
}

export default productWidgets;