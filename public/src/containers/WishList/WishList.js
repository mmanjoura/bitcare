import React, {Component} from 'react';

class WishList extends Component {
    render(){
        return(
            <section className="content">
            <div className="container">
              <h2 className="text-uppercase">Wishlist</h2>
              <div className="card card--padding">
                <table className="table shopping-cart-table">
                  <thead>
                    <tr className="text-uppercase">
                      <th>&nbsp;</th>
                      <th className="text-left">Product Name</th>
                      <th className="text-center">Unit Price </th>
                      <th className="text-center">Remove</th>
                      <th className="text-center">Continue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="no-title image-col text-left"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-11.jpg" alt /></a></div></td>
                      <td className="text-left"><div className="th-title visible-xs">Product Name:</div>
                        <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">Mixtape Dress Red </a></h6></td>
                      <td><div className="th-title visible-xs">Unit Price:</div>
                        <div className="shopping-cart-table__product-price">$65.00</div></td>
                      <td><div className="th-title visible-xs">Remove:</div>
                        <a className="icon-clear" href="#" /></td>
                      <td><div className="th-title visible-xs">Continue:</div>
                        <a className="icon-verification" href="#" /></td>
                    </tr>
                    <tr className="text-center">
                      <td className="no-title image-col text-left"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-10.jpg" alt /></a></div></td>
                      <td className="text-left"><div className="th-title visible-xs">Product Name:</div>
                        <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">How We Do Dress Cobalt </a></h6></td>
                      <td><div className="th-title visible-xs">Unit Price:</div>
                        <div className="shopping-cart-table__product-price">$65.00</div></td>
                      <td><div className="th-title visible-xs">Remove:</div>
                        <a className="icon-clear" href="#" /></td>
                      <td><div className="th-title visible-xs">Continue:</div>
                        <a className="icon-verification" href="#" /></td>
                    </tr>
                    <tr className="text-center">
                      <td className="no-title image-col text-left"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-2.jpg" alt /></a></div></td>
                      <td className="text-left"><div className="th-title visible-xs">Product Name:</div>
                        <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">Electric Soul Skirt</a></h6></td>
                      <td><div className="th-title visible-xs">Unit Price:</div>
                        <div className="shopping-cart-table__product-price">$65.00</div></td>
                      <td><div className="th-title visible-xs">Remove:</div>
                        <a className="icon-clear" href="#" /></td>
                      <td><div className="th-title visible-xs">Continue:</div>
                        <a className="icon-verification" href="#" /></td>
                    </tr>
                    <tr className="text-center">
                      <td className="no-title image-col text-left"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-8.jpg" alt /></a></div></td>
                      <td className="text-left"><div className="th-title visible-xs">Product Name:</div>
                        <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">Unconditional Dress White</a></h6></td>
                      <td><div className="th-title visible-xs">Unit Price:</div>
                        <div className="shopping-cart-table__product-price">$65.00</div></td>
                      <td><div className="th-title visible-xs">Remove:</div>
                        <a className="icon-clear" href="#" /></td>
                      <td><div className="th-title visible-xs">Continue:</div>
                        <a className="icon-verification" href="#" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );
    }
}

export default WishList;