import React, {Component} from 'react';

class ShoppingCart extends Component {
    render(){
        return(
               
                <section className="content">
                <div className="container">
                    <h2 className="text-uppercase">Shopping Cart</h2>
                    <div className="card card--padding">
                    <table className="table shopping-cart-table text-center">
                        <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Product Name</th>
                            <th>&nbsp;</th>
                            <th>Unit Price </th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><div className="th-title visible-xs">Remove From Cart:</div>
                            <a className="icon-clear shopping-cart-table__delete" href="#" /></td>
                            <td className="no-title"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-5.jpg" alt /></a></div></td>
                            <td><div className="th-title visible-xs">Product Name:</div>
                            <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">Long Skirt In Red</a></h6>
                            <div className="shopping-cart-table__product-color text-left">
                                <ul className="options-swatch options-swatch--color">
                                <li><a href="#"><span className="swatch-label"><img src="images/colors/red.png" width={10} height={10} alt /></span></a></li>
                                </ul>
                            </div></td>
                            <td><div className="th-title visible-xs">Unit Price:</div>
                            <div className="shopping-cart-table__product-price">$65.00</div></td>
                            <td><div className="th-title visible-xs">QTY:</div>
                            <div className="input-group-qty"> <span className="pull-left"> </span>
                                <input type="text" name="quant[1]" className="input-number input--wd input-qty pull-left" defaultValue={1} min={1} max={100} />
                                <span className="pull-left btn-number-container">
                                <button type="button" className="btn btn-number btn-number--plus" data-type="plus"> + </button>
                                <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus"> – </button>
                                </span> </div>
                            <a className="icon-pencil shopping-cart-table__delete" href="#" /></td>
                            <td><div className="th-title visible-xs">Subtotal:</div>
                            <div className="shopping-cart-table__product-price">$65.00</div></td>
                        </tr>             
                        <tr>
                            <td><div className="th-title visible-xs">Remove From Cart:</div>
                            <a className="icon-clear shopping-cart-table__delete" href="#" /></td>
                            <td className="no-title"><div className="shopping-cart-table__product-image"><a href="product.html"><img src="images/products/product-2.jpg" alt /></a></div></td>
                            <td><div className="th-title visible-xs">Product Name:</div>
                            <h6 className="shopping-cart-table__product-name text-left text-uppercase"><a href="product.html">Short Blue Skirt</a></h6>
                            <div className="shopping-cart-table__product-color text-left">
                                <ul className="options-swatch options-swatch--color">
                                <li><a href="#"><span className="swatch-label"><img src="images/colors/blue.png" width={10} height={10} alt /></span></a></li>
                                </ul>
                            </div></td>
                            <td><div className="th-title visible-xs">Unit Price:</div>
                            <div className="shopping-cart-table__product-price">$65.00</div></td>
                            <td><div className="th-title visible-xs">QTY:</div>
                            <div className="input-group-qty"> <span className="pull-left"> </span>
                                <input type="text" name="quant[2]" className="input-number input--wd input-qty pull-left" defaultValue={1} min={1} max={100} />
                                <span className="pull-left btn-number-container">
                                <button type="button" className="btn btn-number btn-number--plus" data-type="plus"> + </button>
                                <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus"> – </button>
                                </span> </div>
                            <a className="icon-pencil shopping-cart-table__delete" href="#" /></td>
                            <td><div className="th-title visible-xs">Subtotal:</div>
                            <div className="shopping-cart-table__product-price">$65.00</div></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="hr" />
                    <div className="divider divider--xs" />
                    <div className="row shopping-cart-btns">
                        <div className="col-sm-4 col-md-4"><a href="#" className="btn btn--wd pull-left">Continue Shopping</a></div>
                        <div className="divider divider--xs visible-xs" />
                        <div className="col-sm-8 col-md-8"><a href="#" className="btn btn--wd btn--light pull-right">Clear Shopping Cart</a>
                        <div className="divider divider--xs visible-xs" />
                        <a href="#" className="btn btn--wd pull-right">Update Shopping Cart</a></div>
                    </div>
                    <div className="divider divider--xxs" />
                    </div>
                    <div className="divider divider--xs" />
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card card--padding">
                        <h4 className="h-pad-sm">DISCOUNT CODES</h4>
                        <p>Enter your coupon code if you have one.</p>
                        <input type="text" className="input--wd input--wd--full" />
                        <div className="divider divider--xs" />
                        <button type="submit" className="btn btn--wd text-uppercase wave waves-effect">Apply Coupon</button>
                        </div>
                    </div>
                    <div className="divider divider--xs visible-sm visible-xs" />
                    <div className="col-md-8">
                        <div className="card card--padding">
                        <h4 className="h-pad-sm">ESTIMATE SHIPPING AND TAX</h4>
                        <p>Enter your destination to get a shipping estimate.</p>
                        <div className="row">
                            <div className="col-md-4">
                            <select className="fullwidth select--wd select--wd--lg">
                                <option>Country </option>
                                <option>Austria </option>
                                <option>Belgium</option>
                                <option>Cyprus </option>
                                <option>Croatia </option>
                                <option>Czech Republic </option>
                                <option>Denmark </option>
                                <option>Finland </option>
                                <option>France </option>
                                <option>Germany </option>
                                <option>Greece </option>
                                <option>Hungary </option>
                                <option>Ireland </option>
                                <option>France </option>
                                <option>Italy </option>
                                <option>Luxembourg </option>
                                <option>Netherlands </option>
                                <option>Poland </option>
                                <option>Portugal </option>
                                <option>Slovakia </option>
                                <option>Slovenia </option>
                                <option>Spain </option>
                                <option>United Kingdom </option>
                            </select>
                            </div>
                            <div className="col-md-4">
                            <select className="selectpicker fullwidth" data-style="select--wd select--wd--lg">
                                <option>State/Province </option>
                                <option>Austria </option>
                                <option>Belgium</option>
                                <option>Cyprus </option>
                                <option>Croatia </option>
                                <option>Czech Republic </option>
                                <option>Denmark </option>
                                <option>Finland </option>
                                <option>France </option>
                                <option>Germany </option>
                                <option>Greece </option>
                                <option>Hungary </option>
                                <option>Ireland </option>
                                <option>France </option>
                                <option>Italy </option>
                                <option>Luxembourg </option>
                                <option>Netherlands </option>
                                <option>Poland </option>
                                <option>Portugal </option>
                                <option>Slovakia </option>
                                <option>Slovenia </option>
                                <option>Spain </option>
                                <option>United Kingdom </option>
                            </select>
                            </div>
                            <div className="col-md-4">
                            <input type="text" className="input--wd input--wd--full" placeholder="Zip/Postal Code" />
                            </div>
                        </div>
                        <div className="divider divider--xs" />
                        <button type="submit" className="btn btn--wd text-uppercase wave waves-effect">Get a Quote</button>
                        </div>
                    </div>
                    </div>
                    <div className="divider divider--md" />
                    <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <h3>CART TOTALS</h3>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <table className="table table-total">
                        <tbody>
                            <tr>
                            <th className="text-left"> Subtotal </th>
                            <th className="text-right"> $295.00 </th>
                            </tr>
                            <tr>
                            <td className="text-left"><h2>Grand Total</h2></td>
                            <td className="text-right"><h2>$295.00</h2></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="text-center">
                        <div className="col-sm-12 col-md-5"> <a href="#" className="btn btn--wd btn--xl">Proceed to checkout</a>
                        <div className="divider divider--xs" />
                        <p>Checkout with Multiple Addresses</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
              
        );
    }
}

export default ShoppingCart;