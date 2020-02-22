import React, {Component} from 'react';

class Order extends Component {
    render(){
        return(
            <section className="content">
            <div className="container">
              <h2 className="text-uppercase">Account</h2>
              <div className="card card--padding">
                <div className="card__row-line">
                  <h4 className="text-uppercase h-pad-xs">My Account</h4>
                </div>
                <div className="card__row-line">
                  <h4 className="text-uppercase h-pad-sm">ORDER HISTORY</h4>
                  <div className="hr" />
                  <table className="table shopping-cart-table table-striped text-center order-history">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Payment Status</th>
                        <th>Fulfillment Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><div className="th-title visible-xs">Order</div><a href="#">#1021</a></td>
                        <td><div className="th-title visible-xs">Date</div>15 Sep 15:31</td>
                        <td><div className="th-title visible-xs">Payment Status</div>Pending</td>
                        <td><div className="th-title visible-xs">Fulfillment Status</div>Unfulfilled</td>
                        <td><div className="th-title visible-xs">Total</div>$708.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card__row-line">
                  <h4 className="text-uppercase h-pad-xs">Account Details</h4>
                  <table className="table-address">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td><strong>Alex Smith</strong></td>
                      </tr>
                      <tr>
                        <td>E-mail:</td>
                        <td><a href="mailto:alexsmith@hotmail.com"><strong>alexsmith@hotmail.com</strong></a></td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td><strong>2177 Pride AvenueBrooklyn, <br />
                            NY 11206</strong></td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td><strong>718-387-4726</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="btn btn--wd">View Addresses (1)</a> </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Order;